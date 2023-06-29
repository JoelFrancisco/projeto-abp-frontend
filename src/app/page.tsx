import Battery from "../../public/battery.svg";
import Speedometer from "../../public/speedometer.svg";
import Sensor from "../../public/sensor.svg";
import Login from "../../public/login.svg";
import Image from "next/image";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map/Map"), { ssr: false })

export default function Page() {
  return (
    <>
      <main className="flex p-3 items-center justify-center flex-col">
        <article className="flex gap-6 space-x-16">
          <div className="m-9 flex flex-col items-center justify-center">
            <p className="text-center">Bateria da bicicleta</p>
            <Image src={Battery} alt="Logo + Nome Satc" width={100} />
          </div>
          <div className="m-9 flex flex-col items-center justify-center">
            <p className="text-center">Velocidade</p>
            <Image src={Speedometer} alt="Logo + Nome Satc" width={55} />
          </div>
          <div className="m-9 flex flex-col items-center justify-center">
            <p className="text-center">Sensor</p>
            <Image src={Sensor} alt="Logo + Nome Satc" width={55} />
          </div>
          <div className="m-9 flex flex-col items-center justify-items-center">
            <p className="text-center mb-px">Login</p>
            <Image src={Login} alt="Logo + Nome Satc" width={50} />
          </div>
        </article>
        <section className="flex flex-col items-center justify-center mt-6">
          <div className="w-4/5 border-2 border-gray-800 shadow">
            <Map />
          </div>
        </section>
      </main>
    </>
  );
}

