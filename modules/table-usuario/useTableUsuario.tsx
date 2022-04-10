import { useEffect, useState } from "react";
import { getTipoUsuario } from "../../services/TipoUsuario";
import {
  deleteUsuarioServices,
  getUsuarioServices,
  postUsuarioServices,
  putUsuarioServices,
} from "../../services/UsuarioServices";

const useTableUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [onOpenAgregar, setOnOpenAgregar] = useState(false);
  const [onOpenEdit, setOnOpenEdit] = useState(false);
  const [loader, setLoader] = useState(true);
  const [dni, setDni] = useState(null);
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [tiposUsuarios, setTipoUsuarios] = useState([]);
  const [tipoUsuario, setTipoUsuario] = useState(null);

  const onChangeDni = (e: any) => {
    setDni(e.target.value.slice(0, 8));
  };
  const onChangeNombres = (e: any) => {
    setNombres(e.target.value);
  };
  const onChangeApellidos = (e: any) => {
    setApellidos(e.target.value);
  };
  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const onChangeContrasena = (e: any) => {
    setContrasena(e.target.value);
  };
  const onChangeTipoUsuario = (e: any) => {
    setTipoUsuario(e.target.value);
  };
  const handleOnOpenAgregar = () => {
    setOnOpenAgregar(true);
    setDni(null);
    setNombres("");
    setApellidos("");
    setEmail("");
    setContrasena("");
    setTipoUsuario(null);
  };
  const deleteUsuario = (e: any, data: any) => {
    deleteUsuarioServices(data.DNI_usuario, setLoader);
  };
  const filterTipoUsuario: any = (tipo: string) => {
    return tiposUsuarios.filter((element: any) => {
      return element.tipo == tipo;
    });
  };
  const handleOnOpenEdit = (e: any, data: any) => {
    setOnOpenEdit(true);
    setDni(data.DNI_usuario);
    setNombres(data.nombre);
    setApellidos(data.apellido);
    setEmail(data.correo);
    setContrasena(data.contrasena);
    setTipoUsuario(filterTipoUsuario(data.tipo)[0].idTipo_usuario);
  };
  const editUsuario = () => {
    putUsuarioServices(
      dni!,
      nombres,
      apellidos,
      email,
      contrasena,
      tipoUsuario!,
      setLoader
    );
    setOnOpenEdit(false);
    setDni(null);
    setNombres("");
    setApellidos("");
    setEmail("");
    setContrasena("");
    setTipoUsuario(null);
  };
  const addUsuario = () => {
    postUsuarioServices(
      dni!,
      nombres,
      apellidos,
      email,
      contrasena,
      tipoUsuario!,
      setLoader
    );
    setOnOpenAgregar(false);
    setDni(null);
    setNombres("");
    setApellidos("");
    setEmail("");
    setContrasena("");
    setTipoUsuario(null);
  };
  const columns = [
    {
      title: "DNI",
      field: "DNI_usuario",
    },
    {
      title: "Nombres",
      field: "nombre",
    },
    {
      title: "Apellidos",
      field: "apellido",
    },
    {
      title: "Email",
      field: "correo",
    },
    {
      title: "Tipo de Usuario",
      field: "tipo",
    },
  ];
  useEffect(() => {
    getUsuarioServices(setUsuarios, setLoader);
    getTipoUsuario(setTipoUsuarios, setLoader);
  }, [loader]);
  return {
    columns,
    usuarios,
    onOpenAgregar,
    setOnOpenAgregar,
    setOnOpenEdit,
    onChangeDni,
    onChangeNombres,
    onChangeApellidos,
    onChangeEmail,
    onChangeContrasena,
    onChangeTipoUsuario,
    handleOnOpenAgregar,
    dni,
    nombres,
    apellidos,
    email,
    contrasena,
    tipoUsuario,
    addUsuario,
    tiposUsuarios,
    deleteUsuario,
    handleOnOpenEdit,
    onOpenEdit,
    editUsuario,
  };
};

export default useTableUsuario;
