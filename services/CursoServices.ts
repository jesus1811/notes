import axios from "axios";
import Swal from "sweetalert2";

const URL = process.env.NEXT_PUBLIC_URL;

export const getCursoServices = async (
  setState: Function,
  setLoader: Function
) => {
  await axios
    .get(URL + "/curso")
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

export const postCursoServices = async (
  nombre: string,
  setLoader: Function
) => {
  nombre != "" &&
    (await axios
      .post(URL + "/curso", {
        nombre: nombre,
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

export const deleteCursoServices = async (id: number, setLoader: Function) => {
  id != 0 &&
    (await axios
      .delete(URL + "/curso/" + id)
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

export const putCursoServices = async (
  id: number,
  nombre: string,
  setLoader: Function
) => {
  id != 0 &&
    nombre != "" &&
    (await axios
      .put(URL + "/curso/" + id, {
        nombre,
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
