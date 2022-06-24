import axios from "axios";
const URL = process.env.NEXT_PUBLIC_URL;
export const getTipoUsuario = async (setState: Function, setLoader: Function) => {
  await axios
    .get(URL + "/tipo_usuario")
    .then((res) => {
      setState(res.data);
      setLoader(false);
    })
    .catch((e) => {
      console.log(e);
    });
};
