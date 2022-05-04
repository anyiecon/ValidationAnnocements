import React, { useEffect, useState } from "react";
import { UIButtons } from "../../UI/UIButtons/UIButtons";
import { UICards } from "../../UI/UICards/UICardsAnnocements";

export const Annocements = () => {
    
  const [products, setProducts] = useState([]);
  
  const uidUsers = localStorage.getItem('uiduser')
  
  console.log(uidUsers);

  const URL = `https://fullmarket-provitional-backend.herokuapp.com/getmyproducts/${uidUsers}`
  //const URL = "https://backend-fullmarket-py.herokuapp.com/getallproducts";

  
  const mostrar = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    mostrar();
  }, []);
  console.log(products);

  return (
    <main className="main-products">
    <div className="navbarAnnocements">
     <UIButtons 
        classButtons="btn-Applys"
        Buttons="btn-Apply"
        nameButtons="Intercambiar Producto"
     ></UIButtons>
     <UIButtons 
        classButtons="btn-Applys"
        Buttons="btn-Apply"
        nameButtons="Regalar Producto"
     ></UIButtons>
     {/* <input placeholder="Busca tus productos"></input> */}
     </div>
      {products.map((element) => (
        <UICards
          key={element.name + 1}
          typeProduct={element.type}
          imgProduct={element.imgProductURL}
          nameProduct={element.name}
          conditionProduct={element.condition}
          availabilityProduct={element.availability}
          dateProduct={element.date}
          descriptionProduct={element.description}
          cityProduct={element.city}
          uid={element.uid}
        />
      ))}
    </main>
  );
}

