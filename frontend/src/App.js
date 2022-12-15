import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
// import CustomerSignUp from "./components/CustomerSignUp/CustomerSignUp";
import CustomerSignin from "./components/CustomerSignin/CustomerSignin";
import TRIVSignin from "./components/TRIVSignin/TRIVSignin";
import SearchTRIV from "./components/SearchTRIV/SearchTRIV";
import UpdateTRIV from "./components/UpdateTRIV/UpdateTRIV";
import ShopSignin from "./components/ShopSignin/ShopSignin";
import ShopJoin from "./components/ShopJoin/ShopJoin";
import WorkerJoin from "./components/WorkerJoin/WorkerJoin";
// import TRIVs from "./components/TRIVs/TRIVs";
import Pshops from "./components/Pshops/Pshops";
import Items from "./components/Items/Items";
import Mshops from "./components/Mshops/Mshops";
import Eshops from "./components/Eshops/Eshops";
import Item from "./components/Items/Item/Item";
import UpdateShop from "./components/UpdateShop/UpdateShop";
import WorkerSignin from "./components/WorkerSignin/WorkerSignin";
import { getCustomer } from "./actions/customer";
import { getTRIV } from "./actions/triv";
import { useDispatch } from "react-redux";
import { getShop } from "./actions/shop";
import AdminSignUp from "./components/Admin/AdminSignUp";
import { getAdmin } from "./actions/admin";
import Users from "./components/Admin/Users";
import Trivs from "./components/Admin/Trivs";
import Shops from "./components/Admin/Shops";
export default function App() {
  const dispatch = useDispatch();
  dispatch(getCustomer());
  dispatch(getTRIV());
  dispatch(getShop());
  dispatch(getAdmin());

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/CustomerSignUp" exact element={<CustomerSignUp />} /> */}
          <Route path="/CustomerSignin" exact element={<CustomerSignin />} />
          <Route path="/Eshops" exact element={<Eshops />} />
          <Route path="/Mshops" exact element={<Mshops />} />
          <Route path="/Pshops" exact element={<Pshops />} />
          <Route path="/Item" exact element={<Item />} />
          <Route path="/Items" exact element={<Items />} />
          {/* <Route path="/TRIV" exact element={<TRIVs />} /> */}
          <Route path="/ShopJoin" exact element={<ShopJoin />} />
          <Route path="/WorkerJoin" exact element={<WorkerJoin />} />
          <Route path="/TRIVSignin" exact element={<TRIVSignin />} />
          <Route path="/SearchTRIV" exact element={<SearchTRIV />} />
          <Route path="/UpdateTRIV" exact element={<UpdateTRIV />} />
          <Route path="/ShopSignin" exact element={<ShopSignin />} />
          <Route path="/UpdateShop" exact element={<UpdateShop />} />
          <Route path="/WorkerSignin" exact element={<WorkerSignin />} />
          <Route path="/Admin" exact element={<AdminSignUp />} />
          <Route path="/Users" exact element={<Users />} />
          <Route path="/Trivs" exact element={<Trivs />} />
          <Route path="/Shops" exact element={<Shops />} />
        </Routes>
      </div>
    </Router>
  );
}
