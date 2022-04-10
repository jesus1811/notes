import axios from "axios";
import Swal from "sweetalert2";
const URL = process.env.NEXT_PUBLIC_URL;

export const getEstudianteServices = async (
  setState: Function,
  setLoader: Function
) => {
  await axios
    .get(URL + "/estudiante")
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

export const postEstudianteServices = async (
  dniEstudiante: number,
  nombre: string,
  apellido: string,
  setLoader: Function
) => {
  dniEstudiante != null &&
    nombre != "" &&
    apellido != "" &&
    (await axios
      .post(URL + "/estudiante/" + dniEstudiante, {
        nombre,
        apellido,
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

export const deleteEstudianteServices = async (
  dniEstudiante: number,
  setLoader: Function
) => {
  dniEstudiante != null &&
    (await axios
      .delete(URL + "/estudiante/" + dniEstudiante)
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

export const putEstudianteServices = async (
  dniEstudiante: number,
  nombre: string,
  apellido: string,
  setLoader: Function
) => {
  dniEstudiante != null &&
    nombre != "" &&
    apellido != "" &&
    (await axios
      .put(URL + "/estudiante/" + dniEstudiante, {
        nombre,
        apellido,
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
