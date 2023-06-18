import './Product.css'
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProductShowCategory from "../../component/product-show-category/ProductShowCategory";
import Nav from "../../component/global/nav_bar/Nav";
import Footer from "../../component/global/footer/Footer";

function Product() {
    const category = useLoaderData();
    const [data, setData] = useState([{}]);
    const [catVal, setCatVal] = useState(category[0].c);

    useEffect(() => {
        const urls = `http://localhost:3000/product-by-category/${catVal}`;
        fetch(urls).then(res => res.json()).then(data => {
            setData(data);
        });
    }, [catVal]);

    function getdata(e) {
        setCatVal(e);
    }

    return (
        <>
            <Nav></Nav>
            <section>
                <div className='container-c'>
                    <div className='left-c'>
                        <h2>Category</h2>
                        {category.map((e) => (
                            <button className='button-p' onClick={() => getdata(e.c)}>{e.c}</button>
                        ))}

                    </div>
                    <div className='right-c'>
                        <ProductShowCategory p={data[0]}></ProductShowCategory>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Product