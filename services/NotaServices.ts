import axios from "axios";
import Swal from "sweetalert2";
const URL = process.env.NEXT_PUBLIC_URL;
export const getNotaServices = async (
  setState: Function,
  setLoader: Function
) => { 
  await axios
    .get(URL + "/nota")
    .then((res) => {
      setState(res.data);
      setLoader(false);
    })
    .catch((e) => {
      Swal.fire({
        title: "problemas en el servidor " + JSON.stringify(e),
        icon: "error",
      });
    });
};

export const postNotaServices = async (
  nota1: number,
  nota2: number,
  nota3: number,
  idCurso: number,
  dniEstudiante: number,
  dniUsuario: number,
  setLoader: Function
) => {
  nota1 != null &&
    nota2 != null &&
    nota3 != null &&
    idCurso != null &&
    dniEstudiante != null &&
    dniUsuario != null &&
    (await axios
      .post(URL + "/nota", {
        nota1,
        nota2,
        nota3,
        idCurso,
        dniEstudiante,
        dniUsuario,
      })
      .then((res) => {
        Swal.fire({
          title: res.data,
          icon: "success",
        });
        setLoader(true);
      })
      .catch((e) => {
        Swal.fire({
          title: "problemas en el servidor " + JSON.stringify(e),
          icon: "error",
        });
      }));
};

export const deleteNotaServices = async (id: number, setLoader: Function) => {
  await axios
    .delete(URL + "/nota/" + id)
    .then((res) => {
      Swal.fire({
        title: res.data,
        icon: "success",
      });
      setLoader(true);
    })
    .catch((e) => {
      Swal.fire({
        title: "problemas en el servidor " + JSON.stringify(e),
        icon: "error",
      });
    });
};

export const putNotaServices = async (
  id: number,
  dniUsuario: number,
  dniEstudiante: number,
  idCurso: number,
  nota1: number,
  nota2: number,
  nota3: number,
  setLoader: Function
) => {
  id != null &&
    dniUsuario != null &&
    idCurso != null &&
    nota1 != null &&
    nota2 != null &&
    nota3 != null &&
    (await axios
      .put(URL + "/nota/" + id, {
        dniUsuario,
        dniEstudiante,
        idCurso,
        nota1,
        nota2,
        nota3,
      })
      .then((res) => {
        Swal.fire({
          title: res.data,
          icon: "success",
        });
        setLoader(true);
      })
      .catch((e) => {
        Swal.fire({
          title: "problemas en el servidor " + JSON.stringify(e),
          icon: "error",
        });
      }));
};
