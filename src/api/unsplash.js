import axios from "axios"


 export default axios.create({
    baseURL: "https://api.unsplash.com" ,
    headers:{
        Authorization :
         "Client-ID nNCx0vuK9M-w8HMe44APGeBsW6A_U5Cpi9fXQwNQlxQ"
  
      }
});


