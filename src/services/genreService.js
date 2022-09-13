import axios from "axios";

const apiEndpoint = "http://localhost:3900/";

export const genres = axios.get(apiEndpoint + "api/genres").then(res=>{
  return res;
}).catch(err=>{
  console.log(err);
  return [];
});

export async function getGenres() {
  return await genres;
}
