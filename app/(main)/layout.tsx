import NavBar from "@/components/NavBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main className="p-4">{children}</main>
    </>
  );
};

export default layout;
