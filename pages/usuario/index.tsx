import React from "react";
import { Sidebar } from "../../components/layouts";
import { TableUsuario } from "../../modules";

const Usuario = () => {
  return (
    <Sidebar title="usuario" description="modulo usuario">
      <TableUsuario />
    </Sidebar>
  );
};

export default Usuario;
