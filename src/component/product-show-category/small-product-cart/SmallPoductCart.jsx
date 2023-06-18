import './SmallPoductCart.css';
import { Link } from "react-router-dom";

function SmallPoductCart({ pi }) {
    return (
        <div>
            <div className="product-card-s ">
                <div className="img-box-s">
                    <Link to={`/product-detail/${pi?._id}`}>
                        <div className="img-re-s">
                            <img className="img-cover-s" sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 40vw" src={pi.img} style={{ "position": "absolute", "height": "100%", "width": "100%", "inset": "0px", "color": "transparent" }}></img>
                        </div>
                    </Link>
                </div>
                <div className="bottom-content-s">
                    <div className='top-content-s'>
                        <h2 className="product-card-title-s">{pi.name}</h2>
                        <p className="product-card-p-s">{pi.dis}</p>
                    </div>
                    <div className="bottom-content-cart-s">
                        <div >
                            <div className="price-box-s">
                                <span className="text-green-s">৳ {pi.p}</span>
                            </div>
                        </div>
                        <div className="ratting-box-s">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="svg-s">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="text-rat-p-s">{pi.r}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallPoductCart
