import axios from "axios";
import Swal from "sweetalert2";
const URL = process.env.NEXT_PUBLIC_URL;
export const getTipoUsuario = async (
  setState: Function,
  setLoader: Function
) => {
  await axios
    .get(URL + "/tipo_usuario")
    .then((res) => {
      setState(res.data);
      setLoader(false);
    })
    .catch((e) => {
      Swal.fire({
        title: "problemas en el servidor" + JSON.stringify(e),
        icon: "error",
      });
    });
};
