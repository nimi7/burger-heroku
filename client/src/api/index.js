// import axios from "axios";


const axios = require("axios");
function generateFullUrl() {
  const domain =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_DOMAIN
      : "localhost:3001";
  const http = process.env.NODE_ENV === "production" ? "https" : "http";
  return `${http}://${domain}`;
}

const api = axios.create({
  baseURL: generateFullUrl() + "/api",
});

export const getAllGuides = api.get("/Burgers").then(res => {
    console.log('res.data',res.data)
 
    return res.data
  
}).catch(err => {
  console.log(err);
});

export const searchGuideById = (id) => api.get(`Burgers/:${id}`).then(res =>{
  console.log('res',res);
  return res
});

export const BurgerCreat = api.post('/Burgers').then(date=>{
  console.log('BurgerCreat',date)
  return date
})

export const whatsapp = api.post('/whatsapp').then(res =>{
  console.log('whatsapp', res)
  return res
})
export const searchGuides = (country, lang, city, cost, comments) =>
  api.get(
    `search?${new URLSearchParams({
      country,
      lang,
      city,
      cost,
      comments,
    }).toString()}`
  );

const apis = { getAllGuides, searchGuides,whatsapp,BurgerCreat };

export default apis;

// ${country}/lang/${lang}/city/${city}/cost/${cost}
