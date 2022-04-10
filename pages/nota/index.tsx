import React from "react";
import { Sidebar } from "../../components/layouts";
import { TableNota } from "../../modules";

const Estudiante = () => {
  return (
    <Sidebar title="estudiante" description="modulo estudiante">
      <TableNota />
    </Sidebar>
  );
};

export default Estudiante;
