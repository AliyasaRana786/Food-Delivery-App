/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../CSS/Cart.css'
export default function Cart({ cart, setCart }) {

    const removecard = (id) => {
        const elements = cart.filter((card) => card.id != id);
        setCart(elements)
    }

    return (
        <>
            {cart.length == 0 ? (
                <div className="contniue_btn text-center mb-3">
                    <Link to={'/'} className='Continuebtn'>Continue</Link>
                </div>
            ) : (
                <section className="cartpage">
                    <div className="container">
                        {cart.map((product) => {
                            return (
                                <>
                                    <div className="row">
                                        <div className="col-lg-7 col-md-12 col-12">
                                            <div className="product_cart mt-3" >

                                                <div className="cart_img">
                                                    <img className='img-fluid' src={product.imgSrc} alt="" />
                                                </div>

                                                <div className="cart_product_details mx-2">
                                                    <div className="card_foodname mb-1">{product.Food_name}</div>
                                                    <div className="cart_des mb-2">{product.description}</div>
                                                    <div className='d-flex mb-2'>
                                                        <div className="rating text-center">{product.rating} <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i></div>
                                                        <div className="cart_price mx-3">₹{product.price} for one</div>
                                                    </div>
                                                    <div className='d-flex mb-2'>
                                                        <div className="delivery_date">Delivery Date: 12-2-2024</div>
                                                        <div className="delivery-time mx-3">Time: 12:00 AM</div>
                                                    </div>

                                                </div>

                                                <div className="cart_remove_icon">
                                                    <i className="fa-solid fa-xmark" onClick={() => removecard(product.id)}></i>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                    <div className="cart_btn text-center mt-5 mb-5">
                        <button className='mx-3' onClick={() => setCart([])}>clear</button>
                        <button className='mx-3'>Checkout</button>
                    </div>
                </section>

            )}

        </>
    )
}