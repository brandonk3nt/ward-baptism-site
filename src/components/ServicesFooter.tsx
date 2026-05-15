import Image from "next/image";
import LightRays from "./LightRays";

export default function ServicesFooter() {
  return (
          <div className="h-20 flex items-center justify-between mt-4 bg-neutral-100">
            <div className="h-20 flex justify-center item-start">
              <div className="bg-[#0ea5e9] p-2 h-full flex items-center">
                <Image
                  className="h-full w-auto"
                  src="/img/christus.png"
                  alt="Christ"
                  width={200}
                  height={200}
                />
              </div>
              <span className="h-full relative" style={{ left: -1, top: 0 }}>
                <LightRays color="#0ea5e9" />
              </span>
            </div>
            <div className="mr-6 text-stone-500 text-right font-extrabold">
              <div>Dana Ranch Ward</div>
              <div>Mesa Kimball Stake</div>
            </div>
          </div>
  );
}