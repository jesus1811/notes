import React, { useEffect, useState } from "react";
import { getCursoServices } from "../../services/CursoServices";
import { getEstudianteServices } from "../../services/EstudianteServices";
import {
  deleteNotaServices,
  getNotaServices,
  postNotaServices,
  putNotaServices,
} from "../../services/NotaServices";
import { getUsuarioServices } from "../../services/UsuarioServices";

const useTableNota = () => {
  const [notas, setNotas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [estudiantes, setEstudiantes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [loader, setLoader] = useState(true);
  const [idNota, setIdNota] = useState(null);
  const [nota1, setNota1] = useState(null);
  const [nota2, setNota2] = useState(null);
  const [nota3, setNota3] = useState(null);
  const [idEstudiante, setIdEstudiante] = useState(null);
  const [idUsuario, setIdUsuario] = useState(null);
  const [idCurso, setIdCurso] = useState(null);
  const [onOpenAdd, setOnOpenAdd] = useState(false);
  const [onOpenEdit, setOnOpenEdit] = useState(false);

  const onChangeNota1 = (e: any) => {
    setNota1(e.target.value >= 21 ? 20 : e.target.value.slice(0, 2));
  };
  const onChangeNota2 = (e: any) => {
    setNota2(e.target.value >= 21 ? 20 : e.target.value.slice(0, 2));
  };
  const onChangeNota3 = (e: any) => {
    setNota3(e.target.value >= 21 ? 20 : e.target.value.slice(0, 2));
  };
  const onChangeIdUsuario = (e: any) => {
    setIdUsuario(e.target.value);
  };
  const onChangeIdEstudiante = (e: any) => {
    setIdEstudiante(e.target.value);
  };
  const onChangeIDCurso = (e: any) => {
    setIdCurso(e.target.value);
  };

  const handleOnOpenAdd = () => {
    setOnOpenAdd(!onOpenAdd);
    setIdNota(null);
    setNota1(null);
    setNota2(null);
    setNota3(null);
    setIdCurso(null);
    setIdEstudiante(null);
    setIdUsuario(null);
  };
  const filterCurso: any = (curso: string) => {
    return cursos.filter((element: any) => {
      return element.nombre == curso;
    });
  };
  const filterEstudiante: any = (estudiante: string) => {
    return estudiantes.filter((element: any) => {
      return element.nombre + " " + element.apellido == estudiante;
    });
  };

  const filterUsuario: any = (usuario: string) => {
    return usuarios.filter((element: any) => {
      return element.nombre + " " + element.apellido == usuario;
    });
  };

  const handleOnOpenEdit = (e: any, data: any) => {
    setOnOpenEdit(true);
    setIdNota(data.idNota);
    setNota1(data.nota1);
    setNota2(data.nota2);
    setNota3(data.nota3);
    setIdEstudiante(
      filterEstudiante(data.nombre + " " + data.apellido)[0].DNI_estudiante
    );
    setIdUsuario(
      filterUsuario(data.usuarioNom + " " + data.usuarioApe)[0].DNI_usuario
    );

    setIdCurso(filterCurso(data.curso)[0].idCurso);
  };
  const deleteNota = (e: any, data: any) => {
    deleteNotaServices(data.idNota, setLoader);
  };
  const addNota = () => {
    postNotaServices(
      parseInt(nota1!),
      parseInt(nota2!),
      parseInt(nota3!),
      parseInt(idCurso!),
      parseInt(idEstudiante!),
      parseInt(idUsuario!),

      setLoader
    );
    setOnOpenAdd(false);
  };
  const updateNota = () => {
    putNotaServices(
      parseInt(idNota!),
      parseInt(idUsuario!),
      parseInt(idEstudiante!),
      parseInt(idCurso!),
      parseInt(nota1!),
      parseInt(nota2!),
      parseInt(nota3!),

      setLoader
    );
    setOnOpenEdit(false);
  };
  const columns = [
    {
      title: "Nombre del Curso",
      field: "curso",
    },
    {
      title: "Nombre del Estudiante",
      field: "nombre",
    },
    {
      title: "Apellido del Estudiante",
      field: "apellido",
    },
    {
      title: "Nota 1",
      field: "nota1",
    },
    {
      title: "Nota 2",
      field: "nota2",
    },
    {
      title: "Nota 3",
      field: "nota3",
    },
    {
      title: "Promedio total",
      field: "promedio",
    },
  ];
  useEffect(() => {
    getNotaServices(setNotas, setLoader);
    getUsuarioServices(setUsuarios, setLoader);
    getEstudianteServices(setEstudiantes, setLoader);
    getCursoServices(setCursos, setLoader);
  }, [loader]);
  return {
    columns,
    notas,
    loader,
    handleOnOpenAdd,
    onOpenAdd,
    cursos,
    estudiantes,
    usuarios,
    idUsuario,
    idEstudiante,
    idCurso,
    nota1,
    nota2,
    nota3,
    onChangeIDCurso,
    onChangeIdEstudiante,
    onChangeIdUsuario,
    onChangeNota1,
    onChangeNota2,
    onChangeNota3,
    addNota,
    deleteNota,
    handleOnOpenEdit,
    onOpenEdit,
    setOnOpenEdit,
    updateNota,
  };
};

export default useTableNota;
