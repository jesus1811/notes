import React from "react";
import Head from "next/head";
import useSidebar from "./useSidebar";
import { SidebarSingle } from "./common";

interface Props {
  children: JSX.Element;
  title: string;
  description: string;
}

const Sidebar = ({ children, title, description }: Props) => {
  const sidebar = useSidebar(true, "sidebar");
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div className="flex">
        <div
          className={
            (sidebar.sidebar ? "w-64" : "w-16") +
            " absolute lg:static h-full lg:h-auto z-50"
          }
        >
          <div className=" py-4 px-3  bg-gray-800 w-full h-full ">
            <ul className="space-y-2">
              <button
                className={
                  (sidebar.sidebar ? "justify-end " : "justify-center ") +
                  "w-full flex  text-white text-xl h-12"
                }
                onClick={sidebar.handleSidebar}
              >
                ☰
              </button>
              <SidebarSingle
                route="/"
                sidebar={sidebar.sidebar}
                handle={sidebar.handleSidebar}
              >
                Home
              </SidebarSingle>
              <SidebarSingle
                route="/nota"
                sidebar={sidebar.sidebar}
                handle={sidebar.handleSidebar}
              >
                Notas
              </SidebarSingle>
              <SidebarSingle
                route="/estudiante"
                sidebar={sidebar.sidebar}
                handle={sidebar.handleSidebar}
              >
                Estudiantes
              </SidebarSingle>
              <SidebarSingle
                route="/usuario"
                sidebar={sidebar.sidebar}
                handle={sidebar.handleSidebar}
              >
                Usuarios
              </SidebarSingle>
              <SidebarSingle
                route="/curso"
                sidebar={sidebar.sidebar}
                handle={sidebar.handleSidebar}
              >
                Cursos
              </SidebarSingle>
            </ul>
          </div>
        </div>
        <div className="w-[calc(100%+254px)] min-h-screen flex flex-col justify-center items-center bg-gray-500 p-6 pl-24 lg:pl-6">
          {children}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
