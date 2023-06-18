import Footer from '../../component/global/footer/Footer';
import Nav from '../../component/global/nav_bar/Nav';
import SingelProductDetails from '../../component/singel_product/SingelProductDetails';
import './SingelProduct.css'
import { useLoaderData } from "react-router-dom";
import ProductShow from "../../component/home/product-show/ProductShow";
import { useEffect, useState } from 'react';

function SingelProduct() {
    const product = useLoaderData();
    const [data, setData] = useState([{}]);

    useEffect(() => {
        const urls = `http://localhost:3000/product-by-category/${product.c}`;
        fetch(urls).then(res => res.json()).then(data => {
            setData(data);
        });
    }, []);

    return (
        <>
            <Nav></Nav>
            <SingelProductDetails product={product}></SingelProductDetails>
            <ProductShow p={data[0]}></ProductShow>
            <Footer></Footer>
        </>
    )
}

export default SingelProduct