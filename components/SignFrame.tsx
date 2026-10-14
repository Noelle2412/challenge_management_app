import Image from "next/image";
import codingImage from "../public/docs/coding.png";

//Add the picture and background for the signup and signin form here.

const SignFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex items-center justify-center bg-[#23155B] md:w-1/2 md:h-screen p-4">
        <Image src={codingImage} alt="Image of a programmer" />
      </div>
      <div className="flex items-center justify-center bg-[#f4f4f4] md:w-1/2 md:h-screen p-4">
        <div className="flex flex-col items-center justify-center text-center bg-white gap-2 p-4 shadow-lg md:w-2/3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SignFrame;
