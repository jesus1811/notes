import axios from "axios";
import Swal from "sweetalert2";
const URL = process.env.NEXT_PUBLIC_URL;
export const getUsuarioServices = async (setState: Function, setLoader: Function) => {
  await axios
    .get(URL + "/usuario")
    .then((res) => {
      setState(res.data);
      setLoader(false);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const postUsuarioServices = async (
  dni: number,
  nombre: string,
  apellido: string,
  correo: string,
  contrasena: string,
  idTipo: number,
  setLoader: Function
) => {
  dni != null &&
    nombre != "" &&
    apellido != "" &&
    correo != "" &&
    contrasena != "" &&
    idTipo != null &&
    (await axios
      .post(URL + "/usuario/" + dni, {
        nombre,
        apellido,
        correo,
        contrasena,
        idTipo,
      })
      .then((res) => {
        Swal.fire({
          title: res.data,
          icon: "success",
        });
        setLoader(true);
      })
      .catch((e) => {
        console.log(e);
      }));
};

export const deleteUsuarioServices = async (dni: number, setLoader: Function) => {
  dni != null &&
    (await axios
      .delete(URL + "/usuario/" + dni)
      .then((res) => {
        Swal.fire({
          title: res.data,
          icon: "success",
        });
        setLoader(true);
      })
      .catch((e) => {
        console.log(e);
      }));
};

export const putUsuarioServices = async (
  dni: number,
  nombre: string,
  apellido: string,
  correo: string,
  contrasena: string,
  idTipo: number,
  setLoader: Function
) => {
  dni != null &&
    dni != null &&
    nombre != "" &&
    apellido != "" &&
    correo != "" &&
    contrasena != "" &&
    idTipo != null &&
    (await axios
      .put(URL + "/usuario/" + dni, {
        nombre,
        apellido,
        correo,
        contrasena,
        idTipo,
      })
      .then((res) => {
        Swal.fire({
          title: res.data,
          icon: "success",
        });
        setLoader(true);
      })
      .catch((e) => {
        console.log(e);
      }));
};
