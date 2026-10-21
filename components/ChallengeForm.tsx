"use client";

import { useState, useTransition } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import "easymde/dist/easymde.min.css";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createChallenge, updateChallenge } from "@/actions/challenges";
import type { Challenge } from "@/types/challenge";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const LEVELS = ["Easy", "Moderate", "Hard"];
const LANGUAGES = ["js", "py"];
const FONT_SIZES = [12, 14, 16, 18, 20];

const challengeSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  level: z.enum(LEVELS),
  description: z.string().min(1, "Description is required"),
  functionName: z.string().min(1, "Function name is required"),
  language: z.enum(LANGUAGES),
  code: z.string().min(1, "Code is required"),
  tests: z
    .array(
      z.object({
        input: z.string().min(1, "Input is required"),
        output: z.string().min(1, "Expected output is required"),
      }),
    )
    .min(1, "Add at least one test"),
});

type ChallengeFormData = z.infer<typeof challengeSchema>;

const ErrorMessage = ({ message }: { message?: string }) =>
  message ? <p className="text-red-500 text-sm mt-1">{message}</p> : null;

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-sm text-gray-700 mb-1">{children} *</label>
);

type ChallengeFormProps = {
  /** Pass an existing challenge to edit it; omit to create a new one. */
  challenge?: Challenge;
};

const ChallengeForm = ({ challenge }: ChallengeFormProps) => {
  const router = useRouter();
  const isEditing = !!challenge;
  const [isPending, startTransition] = useTransition();
  const [submitError, setSubmitError] = useState("");
  const [fontSize, setFontSize] = useState(16);

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ChallengeFormData>({
    resolver: zodResolver(challengeSchema),
    defaultValues: {
      title: challenge?.title ?? "",
      category: challenge?.category ?? "",
      level: challenge?.level ?? "Easy",
      description: challenge?.description ?? "",
      functionName: challenge?.code.functionName ?? "",
      language: challenge?.code.language ?? "js",
      code: challenge?.code.code ?? "",
      tests: challenge?.tests ?? [],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "tests" });
  const language = watch("language");

  const cycleLanguage = () =>
    setValue("language", language === "js" ? "py" : "js");

  const cycleFontSize = () =>
    setFontSize(
      FONT_SIZES[(FONT_SIZES.indexOf(fontSize) + 1) % FONT_SIZES.length],
    );

  const onSubmit = (data: ChallengeFormData) => {
    setSubmitError("");
    const payload = {
      title: data.title,
      category: data.category,
      level: data.level,
      description: data.description,
      code: {
        functionName: data.functionName,
        language: data.language,
        code: data.code,
      },
      tests: data.tests,
    };

    startTransition(async () => {
      try {
        if (isEditing) {
          await updateChallenge(challenge.id, payload);
        } else {
          await createChallenge(payload);
        }
        router.push("/challenges");
      } catch (e) {
        setSubmitError(e instanceof Error ? e.message : "Something went wrong");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
      {/* Left column */}
      <div className="flex flex-col gap-4">
        <div>
          <Label>Title</Label>
          <Input placeholder="Title" {...register("title")} />
          <ErrorMessage message={errors.title?.message} />
        </div>

        <div>
          <Label>Category</Label>
          <Input placeholder="Category" {...register("category")} />
          <ErrorMessage message={errors.category?.message} />
        </div>

        <div>
          <Label>Level</Label>
          <select
            className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
            {...register("level")}>
            {LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <ErrorMessage message={errors.level?.message} />
        </div>

        <div>
          <Label>Description</Label>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <SimpleMDE
                value={field.value}
                onChange={field.onChange}
                options={{ spellChecker: false, minHeight: "250px" }}
              />
            )}
          />
          <ErrorMessage message={errors.description?.message} />
        </div>
      </div>

      {/* Right column */}
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1">
            <Label>Function name</Label>
            <Input placeholder="Function name" {...register("functionName")} />
            <ErrorMessage message={errors.functionName?.message} />
          </div>
          <Button
            type="submit"
            disabled={isPending}
            className="bg-plum text-white">
            {isPending ? "Saving..." : isEditing ? "Save" : "Create"}
          </Button>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm text-gray-700">Code *</label>
            <div className="flex gap-2">
              <Button type="button" variant="outline" onClick={cycleLanguage}>
                Language: {language}
              </Button>
              <Button type="button" variant="outline" onClick={cycleFontSize}>
                Font size: {fontSize}
              </Button>
            </div>
          </div>
          <Controller
            control={control}
            name="code"
            render={({ field }) => (
              <CodeMirror
                value={field.value}
                onChange={field.onChange}
                height="200px"
                style={{ fontSize }}
                extensions={[javascript({ javascript: language === "js" })]}
                className="border rounded-md overflow-hidden"
              />
            )}
          />
          <ErrorMessage message={errors.code?.message} />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-gray-700">Tests *</label>
            <Button
              type="button"
              className="bg-plum text-white"
              onClick={() => append({ input: "", output: "" })}>
              +
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-start gap-2">
                <div className="flex-1">
                  <Input
                    placeholder="Input, e.g. [1, 2, 3], 2"
                    {...register(`tests.${index}.input`)}
                  />
                  <ErrorMessage
                    message={errors.tests?.[index]?.input?.message}
                  />
                </div>
                <div className="flex-1">
                  <Input
                    placeholder="Expected output"
                    {...register(`tests.${index}.output`)}
                  />
                  <ErrorMessage
                    message={errors.tests?.[index]?.output?.message}
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => remove(index)}>
                  ✕
                </Button>
              </div>
            ))}
          </div>
          {/* Shown when the array itself is invalid */}
          <ErrorMessage
            message={errors.tests?.root?.message ?? errors.tests?.message}
          />
        </div>

        <ErrorMessage message={submitError} />
      </div>
    </form>
  );
};

export default ChallengeForm;
