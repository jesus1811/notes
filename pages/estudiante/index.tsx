import React from "react";
import { Sidebar } from "../../components/layouts";
import { TableEstudiante } from "../../modules";

const Estudiante = () => {
  return (
    <Sidebar title="estudiante" description="modulo de estudiante">
      <TableEstudiante />
    </Sidebar>
  );
};

export default Estudiante;
