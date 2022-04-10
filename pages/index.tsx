import { NextPage } from "next";
import React from "react";
import { Sidebar } from "../components/layouts";
const Home: NextPage = () => {
  return (
    <Sidebar
      title="Jesudev"
      description="aplicacion de para la
       gestion de notas de estudiante"
    >
      <div className="flex flex-col justify-center items-center p-6 gap-6">
        <h1 className="text-gray-800 text-5xl font-bold">JesuDev</h1>
        <h2 className="text-gray-300 text-2xl text-center max-w-lg">
          Bienvenido a este sistema de gestion de notas de estudiantes, hice
          este software con el fin de practicar y poner a pruebas mis
          conocimientos
        </h2>
        <h2 className="text-white text-3xl">Tecnologias usadas </h2>
        <div className="flex justify-around w-full items-start gap-2 flex-wrap">
          <div>
            <h2 className="text-gray-800 text-3xl font-bold">Front-end</h2>
            <p className="text-gray-300 text-2xl text-center">ReactJS</p>
            <p className="text-gray-300 text-2xl text-center">NextJS</p>
            <p className="text-gray-300 text-2xl text-center">TailwindCSS</p>
            <p className="text-gray-300 text-2xl text-center">Typescript</p>
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-bold">Back-end</h2>
            <p className="text-gray-300 text-2xl text-center">NodeJS</p>
            <p className="text-gray-300 text-2xl text-center">Express</p>
            <p className="text-gray-300 text-2xl text-center">MySQL</p>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Home;
