import React from "react";
import Image from "next/image";

const MyImage = () => {
  return (
    <div className="p-4 m-4 flex flex-col gap-4 items-center">
      <img
        className="rounded-4xl"
        src="https://tse4.mm.bing.net/th/id/OIP.Qk4kFOCeoEZ9nstGEyPSLAHaE8?r=0&pid=Api"
        alt="Stock Image"
      />
      <Image
        className="rounded-4xl"
        width={300}
        height={300}
        src="/sunflower.jpg"
        alt="Image of a Sunflower"
      />
    </div>
  );
};

export default MyImage;
