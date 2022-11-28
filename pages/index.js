import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Logolink from "../components/Logolink";
import Image from "next/image";
import Card from "../components/Card";
import PhotoSlider from "../components/PhotoSlider";
import { photoImages } from "../components/photoImages";

export default function Home() {
  return (
    <>
      <div className="h-full">
        <div id="title-wrapper">
          <h1 className="pt-10 text-7xl font-thin text-center">
            Junipers Guinea Pig Rescue
          </h1>
          <p className="mt-6 text-center text-2xl font-thin">
            Loving homes for loving guinea pigs
          </p>
        </div>

        <PhotoSlider slides={photoImages} />
      </div>

      <div className="text-center flex flex-row justify-center gap-4">
        <div id="about-us-text" className="p-8 bg-slate-900 text-center w-96">
          <h3 className="text-5xl mb-10 font-thin text-slate-100">
            About Junipers Guinea Pig Rescue
          </h3>
          <p className=" text-slate-100 text-xl">
            We are committed to serving the Guinea Pigs of Alaska. We provide
            free knowledge to the public on how to care for your guinea pigs, a
            safe haven to surrendered or abandoned guinea pigs, and do our due
            diligence to find them a place to call home. We often educate others
            on the behavior, health, and diet of guinea pigs in our community.
            Our goal is to reach Alaskans everywhere and show them how amazing
            these creatures can be, and stop their mistreatment the best we can.
          </p>
        </div>
        <Image
          src={"/imgs/pigs/brody-sunflower-3.webp"}
          width={600}
          height={500}
        />
      </div>

      <div className="h-min text-center mt-10 flex flex-row justify-center gap-8">
        <Card title="Advocacy" image={"/imgs/pigs/brody-sunflower.webp"} />
        <Card title="Rehabilitation" image={"/imgs/pigs/look-up.webp"} />
        <Card title="Rescue" image={"/imgs/pigs/pearls-2.webp"} />
      </div>

      <div className="h-60 text-center flex flex-col justify-around">
        <h3 className="text-4xl font-thin">Get in Touch</h3>
        <p className="text-xl">junipersguineapigs@gmail.com</p>{" "}
        <p className="text-xl">PO Box 772705 Eagle River, Alaska 99577</p>
        <p className="text-xl">907-315-4844</p>
      </div>
    </>
  );
}
