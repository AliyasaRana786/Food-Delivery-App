/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../CSS/ProductPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
export default function ProductPage({ items, cart, setCart }) {
    const handlechange = (id, Food_name, rating, imgSrc, description, price) => {

        const obj = {
            id: id,
            Food_name: Food_name,
            rating: rating,
            imgSrc: imgSrc,
            description: description,
            price: price
        }
        setCart([...cart, obj]);
        toast.success('your item is added`', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />

            <section className='ProductPage mb-5'>
                <div className="container">
                    <div className="row">
                        {items.map((food) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-6 col-12 mt-4">
                                        <div className="ProductPage_card p-3">
                                            <Link to={`/productdetails/${food.id}`} className="Product_img">
                                                <img className='img-fluid' src={food.imgSrc} alt="" />
                                            </Link>
                                            <div className="product_card_details">
                                                <div className="product_name_price mt-3">
                                                    <div className="product_name">{food.Food_name}</div>
                                                    <div className="product_price">₹ {food.price}</div>
                                                </div>

                                                <div className="product_description mt-3">{food.description}</div>
                                                <div className="product_rating_addtocart mt-3">
                                                    <div className="rating">{food.rating} <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i></div>
                                                    <button className='addtocart' onClick={() => handlechange(food.id, food.Food_name, food.rating, food.imgSrc, food.description, food.price)}>AddToCart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}



                    </div>
                </div>
            </section>

        </>
    )
}