import './ProductShowCategory.css';
import SmallPoductCart from "../../component/product-show-category/small-product-cart/SmallPoductCart";

function ProductShowCategory({ p }) {
    return (
        <div>
            <section className='con'>
                <div className='top-ps'>
                    <h1>{p.name}</h1>
                </div>
                <div className='product-s'>
                    {p.more?.map((e) => (
                        <SmallPoductCart pi={e}></SmallPoductCart>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ProductShowCategory
