type Props = { params: { id: string } };

const ProductCard = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div className="bg-gray-800 flex flex-col p-2 m-2">
      <h1>Here I show you product {id}</h1>
      <p>Look at how pretty my product is :)</p>
    </div>
  );
};

export default ProductCard;
