import React from "react";
import './UICards.css'
//import { NavLink } from "react-router-dom";
import { UIButtons } from "../UIButtons/UIButtons.jsx";

export const UICards = ({
  typeProduct,
  imgProduct,
  nameProduct,
  conditionProduct,
  uid
}) => {
  return (
    <div >
     <div className="header-Card">
       <h1>{typeProduct}</h1>
       <div className="body-Card">
         <div className="img-Card">
           <img
             src={imgProduct}
             onClick={btnPrueba}
             className="img-Card"
             alt={nameProduct}
           ></img>
         </div>
         <h2>{nameProduct}</h2>
         <p>Estado: {conditionProduct}</p>
         <p>{uid}</p>
         <div className="apply-Product">
           {/* <NavLink to="/LogIn"> */}
             <UIButtons
               classButtons="btn-Apply"
               Buttons="btn-Apply"
               nameButtons="Editar"
             ></UIButtons>
             <UIButtons
               classButtons="btn-Apply"
               Buttons="btn-Apply"
               nameButtons="Eliminar"
             ></UIButtons>
           {/* </NavLink> */}
         </div>
       </div>
     </div>
    </div>
  );
};

function btnPrueba() {
  alert("Hola");
}
