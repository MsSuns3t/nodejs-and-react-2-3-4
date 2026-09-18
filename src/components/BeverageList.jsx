import { useState } from "react";

export default function BeverageList(){

  const [brand, setBrand] = useState("")

 function filterByBrand(beverages, brand) {
  if (brand === "") {
    return beverages}
  else {
  return beverages.filter(
    beverage => beverage.brand === brand
  );
 }}

  const [beverages, setBeverages] = useState([
     {id: 0, beverage: "Cola", brand: "cocaCola"},
     {id: 1, beverage: "Sprite", brand: "spriteInc"},
     {id: 2, beverage: "Sinas", brand: "cocaCola"}
  ]);

    return (
    <div>
        <h1>Beverages:</h1>
        <input 
            value={brand}
            onChange={e => setBrand(e.target.value)}
            placeholder="Brand (e.g. cocaCola"
        />
        <ul className="beverageList">
            {filterByBrand(beverages, brand).map(beverage =>(
                <li key={beverage.id}>
                {beverage.beverage}
                </li>
            ))}
        </ul>
    </div>
    );
}