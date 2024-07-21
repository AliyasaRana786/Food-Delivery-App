/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import '../CSS/Navbar.css';
import { items } from './Data';
import { useState } from 'react';


export default function Navbar({ cart, setData }) {
    const nagivate = useNavigate();
    const location = useLocation();

    const [search, setSearch] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();

        nagivate(`/search/${search}`)
        setSearch('')
    }

    const handleclick = (pro) => {
        const element = items.filter((product) => product.FoodTypes === pro);
        setData(element);
    }

    return (
        <>
            <section className="navbars p-4">
                <div className="container">
                    <div className="header">
                        <div className="nav_logo">
                            <Link to={'/'}>
                                <img src="../Images/nav-logo.svg" alt="" />
                            </Link>

                        </div>
                        <div className="nav_search_bar">
                            <form onSubmit={handlesubmit}>
                                <input value={search} type="text" placeholder='Search here food name...' onChange={(e) => setSearch(e.target.value)} />
                            </form>
                        </div>
                        <div className="nav_icon">
                            <Link to={'/cart'} type="button" className="position-relative">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cart.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {location.pathname === '/' && (
                <section className='find_food'>
                    <div className="container">
                        <div className="find_food_heading">
                            <h4>Find the best food</h4>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-1 col-md-2 col-4 text-center">
                                <p className='category' onClick={() => setData(items)}  >All</p>
                            </div>
                            <div className="col-lg-1 col-md-2 col-4 text-center">
                                <p className='category' onClick={() => handleclick('Breakfast')}>Breakfast</p>
                            </div>

                            <div className="col-lg-1 col-md-2 col-4 text-center">
                                <p className='category' onClick={() => handleclick('Lanch')}>Lunch</p>
                            </div>

                            <div className="col-lg-1 col-md-2 col-4 text-center">
                                <p className='category' onClick={() => handleclick('Dinner')}>Dinner</p>
                            </div>

                            <div className="col-lg-1 col-md-2 col-4 text-center">
                                <p className='category' onClick={() => handleclick('Snacks')}>Snacks</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}


        </>
    )
}