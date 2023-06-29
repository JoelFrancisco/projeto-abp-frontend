"use client"
import { useEffect, useState } from "react";
import { useGlobalState } from "../layout";
import bikesRepository from "../../infraestructure/bikesRepository";
import Link from "next/link";

export default function Dashboard() {
  const { user } = useGlobalState();
  const [bikes, setBikes] = useState([]);
  const [editar, setEditar] = useState(false);

  const [color, setColor] = useState("");

  useEffect(() => {
    setBikes(bikesRepository.getAll());
  }, [])

  return (
    <>
      {user ? (
        <>
          <h1 className="text-gray-500 text-3xl font-bold mb-4 text-center">Bem vindo! {user}</h1>
          <h3 className="text-gray-700 text-2xl font-bold mb-4 text-center">Detalhamento de bicicletas</h3>

          {
            bikes.length > 0 && bikes.map((bike: any, idx) => (
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{bike.color}</h5>

                  <p className="card-text">
                    <strong>Velocidade Máxima:</strong> {bike.maxVelocity || 0} km/h
                  </p>
                  <p className="card-text">
                    <strong>Marca:</strong> {bike.brand}
                  </p>
                  <button className="btn btn-primary mr-2" onClick={() => {
                    setEditar(true)
                  }}>
                    Editar
                  </button>
                  <button className="btn btn-danger" onClick={() => {
                    bikesRepository.remove(bike.id);
                    setBikes(bikes.filter((i: any) => i.id !== bike.id));
                  }}>
                    Delete
                  </button>
                </div>

              </div>
            ))
          }
          <Link href={"/CreateBikeDetails"}>Adiciona</Link>
        </>
      ) : (
        <h1 className="text-3xl font-bold mb-4 text-center">Error</h1>
      )
      }
    </>
  );
}
