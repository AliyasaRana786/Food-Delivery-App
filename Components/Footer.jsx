import '../CSS/Footer.css';
export default function Footer() {
    return (
        <div className='footer_page'>
            <div className="container">
               
                <div className="row mt-4">
                    <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <div className="footerlogo mb-4">
                        {/* <img src="../Images/nav-logo.svg" alt="" /> */}
                        <h1>FreshMenu</h1>
                    </div>
                    <p className='footer_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, numquam? Labore vero, eius vel maxime quae earum eaque sapiente adipisci.</p>
                       
                      
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-3">
                        <p className='mb-2 tittle'><b>ZOMAVERSE</b></p>
                        <ul>
                            <li className='mb-2'>Zomato</li>
                            <li className='mb-2'>Blinkit</li>
                            <li className='mb-2'>Feeding of India</li>
                            <li className='mb-2'>HyperPure</li>
                            <li className='mb-2'>Zomaland</li>
                         

                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-3 ">
                        <p className='mb-2 tittle'><b>LEARN MORE</b></p>
                        <ul>
                            <li className='mb-2'>Privacy</li>
                            <li className='mb-2'>Security</li>
                            <li className='mb-2'>Terms</li>
                            <li className='mb-2'>Sitemap</li>
                            <li className='mb-2'>Weather Union</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-3">
                     
    
                        <p className='mb-2 tittle'><b>SOCIAL LINKS</b></p>

                        <a><i className="fa-brands icons fa-linkedin mx-1 mb-2"></i></a>
                        <a><i className="fa-brands icons fa-instagram mx-2 mb-2"></i></a>
                        <a><i className="fa-brands icons fa-twitter mx-2 mb-2"></i></a>
                        <a><i className="fa-brands icons fa-youtube mx-2 "></i></a>
                        <a><i className="fa-brands icons fa-facebook mx-2 "></i></a>
                        <div className="app_store">
                            <img className='img-fluid mt-3' src="../Images/App-store.webp" alt="" />
                        </div>
                        <div className="app_store">
                            <img className='img-fluid mt-3' src="../Images/App-store.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}