/* eslint-disable react/prop-types */
import '../CSS/ProductDetailsPage.css';
import { useParams } from 'react-router-dom'



import { useEffect, useState } from 'react';

import ProductPage from './ProductPage';
import { items } from './Data';


export default function ProductDetailsPage({ cart, setCart }) {
    const handlechange = (id, Food_name, rating, imgSrc, description, price) => {

        const obj = {
            id: id,
            Food_name: Food_name,
            rating: rating,
            imgSrc: imgSrc,
            description: description,
            price: price
        }
        setCart([...cart, obj])
    }
    const { id } = useParams();
    const [prodata, setprodata] = useState({});
    const [related, setRelated] = useState([]);


    useEffect(() => {
        const elements = items.filter((proId) => proId.id == id);
        setprodata(elements[0]);

        const element = items.filter((procategory) => procategory.category === prodata.category);

        setRelated(element);
    }, [id, prodata.category])



    return (
        <>


            <section className="container">
                <div className='productdetailspage ' key={prodata.id}>
                    <div className="row ">
                        <div className="col-lg-6 col-md-5 col-12">
                            <div className="productdetails_img text-center mt-4 mb-4">
                                <img className='img-fluid' src={prodata.imgSrc} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7 col-12">
                            <div className="productdetailspage_details">

                                <div className="productdetails_name">{prodata.Food_name}</div>
                                <div className="item_name mb-2">{prodata.name}</div>
                                <div className="productdetails_description mb-1">{prodata.description}</div>
                                <div className="food_recipe mb-2"> <span>Pizza recipe</span> : {prodata.Recipe}</div>
                                <div className='d-flex mb-2'>
                                    <div className="delviry_date">Delivery Date:  {prodata.delivery_date}</div>
                                    <div className="delivery_time mx-2">Time: {prodata.delivery_time}</div>
                                </div>
                                <div className='d-flex mb-2'>
                                    <div className="productdetails_rating">Rating: {prodata.rating} <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i></div>
                                    <div className="productdetails_price mx-3">₹ {prodata.price} <span>for one</span></div>
                                </div>
                                <div className="discount mb-2">Discount:({prodata.discount}% OFF)</div>
                                <button className="productdetails_button mb-1 mt-2" onClick={() => handlechange(prodata.id, prodata.Food_name, prodata.rating, prodata.imgSrc, prodata.description, prodata.price)}>AdddToCart</button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className='container'>

            </section>
            <ProductPage items={related} />
        </>
    )
}