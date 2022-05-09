import React, { useEffect, useState } from "react";
import { UIButtons } from "../../UI/UIButtons/UIButtons";
import { UICards } from "../../UI/UICards/UICardsAnnocements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Annocements = () => {
    
  const [products, setProducts] = useState([]);
 const [ serachProducts , setSerachProducts ] = useState([])
  const [ search , setSearch] = useState("")
  
  const uidUsers = localStorage.getItem('uiduser')
  
  console.log(uidUsers);

  const URL = `https://fullmarket-provitional-backend.herokuapp.com/getmyproducts/${uidUsers}`

  const mostrar = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) =>{
        setProducts(data)
        setSerachProducts(data)
      })
  };
  useEffect(() => {
    mostrar();
  }, []);
  console.log(products);

  const handleOnchange=(e)=>{
      console.log(e.target.value);
      setSearch(e.target.value)
      filterP(e.target.value)
  }

   const filterP = (toserachs)=>{
     var resultsFilter= serachProducts.filter((elemento)=>{
       if(elemento.name.toString().toLowerCase().includes(toserachs.toLowerCase()) 
       ||elemento.type.toString().toLowerCase().includes(toserachs.toLowerCase()) 
       ){
         return elemento
       }
     });
     setProducts(resultsFilter)
   }

  return (
    <div>
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
     <div className="search ">
        <input value={search} type='text' onChange={handleOnchange}></input>
        <button className="btn">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
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
    </div>
  );
}

