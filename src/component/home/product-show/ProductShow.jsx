import './ProductShow.css';
import ProductCart from "../../product_cart/ProductCart";
import { Link } from "react-router-dom";

function ProductShow({ p }) {
    return (
        <div>
            <section>
                <div className='top-ps'>
                    <h1>{p.name}</h1>
                    <Link to={"/category"}><p>View More</p></Link>
                </div>
                <div className='product'>
                    {p.more?.slice(0, 8).map((e) => (
                        <ProductCart pi={e}></ProductCart>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ProductShow
