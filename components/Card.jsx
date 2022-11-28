import Image from "next/image";

function Card({ title, image }) {
  return (
    <div className="w-max h-max flex flex-col gap-5 items-center bg-slate-900 rounded-xl relative mt-5 mb-5 hover:scale-105 transition-all duration-150">
      <h3 className="text-3xl font-thin mt-7 text-slate-50">{title}</h3>
      <div className="relative">
        <Image src={image} height={300} width={400} className={"pb-5"} />
      </div>
    </div>
  );
}

export default Card;
