import { FormEvent, useState } from "react";
import bikesRepository from "../../infraestructure/bikesRepository";
import { useRouter } from "next/navigation";

export default function FormBikeDetails({ id, oldColor = "", oldBrand = "", oldMaxVelocity = 0 }: {
  id?: string;
  oldColor?: string;
  oldBrand?: string;
  oldMaxVelocity?: number;
}) {
  const [color, setColor] = useState(oldColor);
  const [brand, setBrand] = useState(oldBrand);
  const [maxVelocity, setMaxVelocity] = useState(oldMaxVelocity);

  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const data = { bike_id: 1, color, brand, maxVelocity } as {
        id?: string;
        bike_id: number;
        color: string;
        brand: string;
        maxVelocity: number;
      };

      if (id) {
        data.id = id;
      }

      bikesRepository.save(data);

      router.push("/Dashboard");
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <div className="min-h-screen min-w-full flex items-center justify-center">
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Cor:
            </label>
            <input onChange={(e) => setColor(e.target.value)} type="text" id="color" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>

          <div className="mb-6">
            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Marca:
            </label>
            <input onChange={(e) => setBrand(e.target.value)} type="text" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>

          <div className="mb-6">
            <label htmlFor="maxVelocity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Velocidade Máxima (Km/h):
            </label>
            <input onChange={(e) => setMaxVelocity(Number(e.target.value))} type="number" id="maxVelocity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
