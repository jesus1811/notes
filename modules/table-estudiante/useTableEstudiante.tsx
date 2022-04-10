import { useEffect, useState } from "react";
import {
  deleteEstudianteServices,
  getEstudianteServices,
  postEstudianteServices,
  putEstudianteServices,
} from "../../services/EstudianteServices";

const useTableEstudiante = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [onOpenAgregar, setOnOpenAgregar] = useState(false);
  const [onOpenEdit, setOnOpenEdit] = useState(false);

  const [dni, setDni] = useState(null);
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [loader, setLoader] = useState(true);

  const handleNombres = (e: any) => {
    setNombres(e.target.value);
  };
  const handleApellidos = (e: any) => {
    setApellidos(e.target.value);
  };
  const handleDni = (e: any) => {
    setDni(e.target.value.slice(0, 8));
  };
  const handleOnOpen = () => {
    setOnOpenAgregar(true);
    setDni(null);
    setNombres("");
    setApellidos("");
  };
  const handleOnOpenEdit = (e: any, data: any) => {
    setOnOpenEdit(true);
    setDni(data.DNI_estudiante);
    setNombres(data.nombre);
    setApellidos(data.apellido);
  };

  const addEstudiante = () => {
    postEstudianteServices(dni!, nombres, apellidos, setLoader);
    setOnOpenAgregar(false);
  };
  const deleteEstudiante = (e: any, data: any) => {
    deleteEstudianteServices(data.DNI_estudiante, setLoader);
  };
  const putEstudiante = () => {
    putEstudianteServices(dni!, nombres, apellidos, setLoader);
    setOnOpenEdit(false);
  };
  const columns = [
    {
      title: "DNI",
      field: "DNI_estudiante",
    },
    {
      title: "Nombres",
      field: "nombre",
    },
    {
      title: "Apellidos",
      field: "apellido",
    },
  ];
  useEffect(() => {
    getEstudianteServices(setEstudiantes, setLoader);
  }, [loader]);
  return {
    columns,
    estudiantes,
    handleDni,
    handleApellidos,
    handleNombres,
    dni,
    nombres,
    apellidos,
    setOnOpenAgregar,
    onOpenAgregar,
    handleOnOpen,
    addEstudiante,
    deleteEstudiante,
    onOpenEdit,
    setOnOpenEdit,
    handleOnOpenEdit,
    putEstudiante,
  };
};

export default useTableEstudiante;
