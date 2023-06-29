import Battery from "../../public/battery.svg";
import Speedometer from "../../public/speedometer.svg";
import Sensor from "../../public/sensor.svg";
import Login from "../../public/login.svg";
import Map from "../../public/map.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex p-3 items-center justify-center flex-col">
        <article className="flex gap-6 space-x-16 items-center justify-center">
          <div className="m-9 flex flex-col items-center justify-center">
            <p className="text-center">Bateria da bicicleta</p>
            <Image src={Battery} alt="Logo + Nome Satc" width={100} />
          </div>
          <div className="m-9 flex flex-col items-center justify-center">
            <p className="text-center">Velocidade</p>
            <Image src={Speedometer} alt="Logo + Nome Satc" width={55} />
          </div>
          <div className="m-9 flex flex-col items-center justify-center">
            <p className="text-center mb-px">Login</p>
            <Link href="LoginPage">
              <Image src={Login} alt="Logo + Nome Satc" width={50} />
            </Link>
          </div>
        </article>
        <section className="flex flex-col items-center justify-center mt-6">
          <div className="w-4/5 border-2 border-gray-800 shadow">
            <Image src={Map} alt="Logo + Nome Satc" width={800} />
          </div>
        </section>
      </main>
    </>
  );
}
