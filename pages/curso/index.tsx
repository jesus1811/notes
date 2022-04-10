import { NextPage } from "next";
import React from "react";
import { Sidebar } from "../../components/layouts";
import { TableCurso } from "../../modules";

const Curso: NextPage = () => {
  return (
    <Sidebar title="curso" description="modulo de curso">
      <TableCurso />
    </Sidebar>
  );
};

export default Curso;
