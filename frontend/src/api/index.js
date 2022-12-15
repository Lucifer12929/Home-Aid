import axios from "axios";

//--------------------------------------TRIV----------------------------------------------------------
const urlTRIV = "http://localhost:5000/triv";

export const fetchTRIV = () => axios.get(urlTRIV);

export const createTRIV = (newTRIV) => axios.post(urlTRIV, newTRIV);

export const updateTRIV = (id, updateTRIV) =>
  axios.patch(`${urlTRIV}/${id}`, updateTRIV);

export const deleteTRIV = (id) => axios.delete(`${urlTRIV}/${id}`);

//--------------------------------------customer---------------------------------------------------------
const urlCustomer = "http://localhost:5000/customer";

export const fetchCustomer = () => axios.get(urlCustomer);

export const createCustomer = (newCustomer) =>
  axios.post(urlCustomer, newCustomer);

export const updateCustomer = (id, updateCustomer) =>
  axios.patch(`${urlCustomer}/${id}`, updateCustomer);

export const deleteCustomer = (id) => axios.delete(`${urlCustomer}/${id}`);

//--------------------------------------shop---------------------------------------------------------
const urlShop = "http://localhost:5000/shop";

export const fetchShop = () => axios.get(urlShop);

export const createShop = (newShop) => axios.post(urlShop, newShop);

export const updateShop = (id, updateShop) =>
  axios.patch(`${urlShop}/${id}`, updateShop);

export const deleteShop = (id) => axios.delete(`${urlShop}/${id}`);

//--------------------------------------Admin---------------------------------------------------------
const urlAdmin = "http://localhost:5000/admin";

export const fetchAdmin = () => axios.get(urlAdmin);

export const createAdmin = (newAdmin) => axios.post(urlAdmin, newAdmin);

export const updateAdmin = (id, updateAdmin) =>
  axios.patch(`${urlAdmin}/${id}`, updateAdmin);

export const deleteAdmin = (id) => axios.delete(`${urlAdmin}/${id}`);
