import React, { useState, useEffect } from "react";

const listaDropState = ["Action", "Another action", "Something else", "Luck"];


const DropRow = () => {
  
  const [listDrop, setListDrop] = useState([]);

  useEffect(() => {
      setListDrop(listaDropState);
  }, []);

  const removeItemMenu = (indice) =>{
		setListDrop(
			listDrop.filter((item, index) => {
				return index != indice
		}))
	}

  return (
    <>
      {listDrop && listDrop.length > 0 ?
          <>
          {listDrop.map((item, index) => {
            return <li key={index} className="d-flex justify-content-between ms-3">
            {item}{" "}          
            <button
                onClick={() => {removeItemMenu(index)}}>
                X
            </button>
          </li>
          })}
          </>
          :
          <><li className="d-flex justify-content-center">(empty)</li></>      
      }
    </>
  );
};

export default DropRow;
