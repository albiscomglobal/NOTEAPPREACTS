import httpClient from "../http-common";


const getAll = () => {

   return httpClient.get("/note");
}

export default { getAll };