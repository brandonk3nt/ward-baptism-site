import Image from "next/image";
import ActionButton from "./ActionButton";

type ServiceHeaderProps = {
  heroImage?: string;
}

export default function ServicesHeader({
  heroImage = "/img/bethseda.jpeg",
}: ServiceHeaderProps) {
  return (
    <>
      <Image
        src={heroImage}
        className="pb-4 m-auto w-auto"
        alt="jesus"
        width={3840}
        height={2560}
      />
      <Image
        src="/img/modern-logo.png"
        className="m-auto w-3/4 md:w-1/2 xl:w-1/3"
        alt="church-logo"
        width={944}
        height={556}
      />
      <div key="title-credits" className="church-font text-center p-1 py-2">
        <p className="text-2xl">Dana Ranch Ward</p>
        <p className="text-3xl">Sacrament Meeting</p>
        <p className="text-2xl">April 12, 2026</p>
      </div>

      <div className="pt-4">
        <ActionButton
          link="https://zoom.us/j/98508434243"
          text="Join via broadcast"
        />
      </div>
      <hr className="h-px my-8 bg-gray-400 border-0" />
    </>
  );
}