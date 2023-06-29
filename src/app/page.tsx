"use client"


import Battery from "../../public/battery.svg";
import Speedometer from "../../public/speedometer.svg";
import Sensor from "../../public/sensor.svg";
import Login from "../../public/login.svg";
import Image from "next/image";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Home() {
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
            {/* <Image src={Map} alt="Logo + Nome Satc" width={800} /> */}
            <MapContainer style={{ height: "100vh", width: "50vw" }} center={[-28.703918, -49.406100]} zoom={18} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-28.703918, -49.406100]}>
                <Popup>
                  CLEBER
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center mt-6">
          <div className="w-4/5 border-2 border-gray-800 shadow">
            <p><strong>Sobre o Projeto:</strong></p>

            <p>Em parceria com o curso de Engenharia Elétrica, essa é uma aplicação web para gestão de um projeto de bicicletas inteligentes.

              O projeto tem como objetivo colocar em prática as disciplinas vistas no curso de engenharia elétrica,  e então, em parceria com o curso de engenharia de software, surge a possibilidade de criar uma aplicação web para monitorar a localização da bicicleta e nível de bateria.

              Em um primeiro momento, foi conversado com o coordenador do curso de elétrica para entendermos qual seria o objetivo maior do projeto do curso de elétrica e como poderíamos nos encaixar com uma solução de software.

              Após esse momento, foi realizada uma conversa com o professor responsável pelas equipes que iriam conectar a bike à web. Dessa forma poderíamos entender quais seriam as limitações do software e acordar o contrato de troca de informações entre a bicicleta e a aplicação web.

              Foi acordado criar uma API post para que a bike pudesse enviar as informações para a aplicação e mostrar as informações da posição e nível de bateria.</p>

            <p><strong>Deploy:</strong></p>
            <p><strong>Vercel</strong></p>
            <li><i>Integração com GIT: Se integra perfeitamente com várias ferramentas populares de desenvolvimento, como GitHub, GitLab e Bitbucket. Isso facilita a configuração de integração contínua e implantação contínua para seus projetos.</i></li>
            <li><i>Colaboração eficiente: Colaboração que permitem que várias pessoas trabalhem em um projeto de forma eficiente.</i></li>
            <li><i>Build de projetos em JavaScript.</i></li>

            <p><strong>Heroku</strong></p>
            <li><i>Usada devido a questão da Vercel só aceitar requisições Https;</i></li>
            <li><i>Banco de dados integrado;</i></li>
            <li><i>Facilidade de uso.</i></li>

            <p><strong>Integrações:</strong></p>
            <p><strong>Leaflet</strong></p>
            <li><i>O Leaflet é uma biblioteca JavaScript de código aberto para criação de mapas interativos na web;</i></li>
            <li><i>Leve e flexível;</i></li>
            <li><i>API intuitiva;</i></li>
            <li><i>Gratuito.</i></li>

            <p><strong>Clerk</strong></p>
            <li><i>Autenticação e gerenciamento de identidade que oferece integração com o Google;</i></li>
            <li><i>Lida com todas as etapas do gerenciamento de identidade, incluindo registro, login, recuperação de senha e atualização de perfil;</i></li>
            <li><i>API intuitiva;</i></li>
            <li><i>Gratuito até 5 mil users.</i></li>


            <p><strong>Aplicação:</strong></p>
            Acima é possível ver uma integração com mapa identificando a posição atual da bicicleta. Clicando nele, é possível ver as informações de localização e nível de bateria.

            A aplicação com a integração com o mapa foi pensada para que seja possível escalar para mais bicicletas ao longo do tempo.

            Pela tela de login é possível realizar o login com conta google. Essa é uma implementação que facilita o uso de login, pois o Clerk Js já traz componentes praticamente prontos e funcionais.

          </div>
        </section>

      </main>
    </>
  );
}
