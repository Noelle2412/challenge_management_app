import Link from "next/link";

const BlogsCard = () => {
  return (
    <>
      <Link href={"/blogs/1"}>Blog 1</Link>
      <Link href={"/blogs/2"}>Blog 2</Link>
      <Link href={"/blogs/3"}>Blog 3</Link>
    </>
  );
};

export default BlogsCard;
