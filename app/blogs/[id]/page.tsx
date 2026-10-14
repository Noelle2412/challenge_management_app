type Props = { params: { id: string } };

const Blog = async ({ params }: Props) => {
  const { id } = await params;
  console.log(id);
  return <h1 className="m-4 text-2xl">Welcome to Blog {id}</h1>;
};

export default Blog;
