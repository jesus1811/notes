import { useEffect, useState } from "react";
import {
  deleteCursoServices,
  getCursoServices,
  postCursoServices,
  putCursoServices,
} from "../../services/CursoServices";

const useTableCurso = () => {
  const [nombreCurso, setNombreCurso] = useState("");
  const [idCurso, setIdCurso] = useState(0);
  const [cursos, setCursos] = useState([]);
  const [onOpen, setOnOpen] = useState(false);
  const [onOpenEditar, setOnOpenEditar] = useState(false);
  const [loader, setLoader] = useState(true);
  const onChangeCurso = (e: any) => {
    setNombreCurso(e.target.value);
  };
  const columnsCurso = [
    {
      title: "Nombre",
      field: "nombre",
    },
  ];
  const addCurso = () => {
    postCursoServices(nombreCurso, setLoader);
    handleOnOpen();
    setNombreCurso("");
    setIdCurso(0);
  };
  const deleteCurso = (e: any, data: any) => {
    deleteCursoServices(data.idCurso, setLoader);
  };
  const updateCurso = () => {
    putCursoServices(idCurso, nombreCurso, setLoader);
    setOnOpenEditar(false);
    setNombreCurso("");
    setIdCurso(0);
  };
  const handleOnOpen = () => {
    setOnOpen(!onOpen);
    setNombreCurso("");
  };
  const handleOnOpenEdit = (e: any, data: any) => {
    setOnOpenEditar(true);
    setNombreCurso(data.nombre);
    setIdCurso(data.idCurso);
  };
  useEffect(() => {
    getCursoServices(setCursos, setLoader);
  }, [loader]);
  return {
    columnsCurso,
    addCurso,
    handleOnOpen,
    nombreCurso,
    onChangeCurso,
    cursos,
    onOpen,
    deleteCurso,
    handleOnOpenEdit,
    onOpenEditar,
    updateCurso,
    setOnOpen,
    setOnOpenEditar,
  };
};
export default useTableCurso;
