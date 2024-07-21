import { useParams } from 'react-router-dom';
import '../CSS/Searchbar.css';
import { useEffect, useState } from 'react';
import { items } from './Data';
import ProductPage from './ProductPage';
export default function Searchbar(){
    const[searchdata,setSearchdata]=useState([])
    const {term}= useParams();
   

    useEffect(()=>{
const element=items.filter((product)=>product.Food_name.toLowerCase().includes(term.toLocaleLowerCase()));
setSearchdata(element);
    },[term])
    return(
        <div className='searchbar'>
            <div className="container">
                <ProductPage items={searchdata}/>
            </div>
         
        </div>
    )
}