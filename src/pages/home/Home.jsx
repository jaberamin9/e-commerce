import Hero from "../../component/home/hero/Hero";
import Nav from "../../component/global/nav_bar/Nav";
import CardRow from "../../component/home/card-row/CardRow";
import ProductShow from "../../component/home/product-show/ProductShow";
import { useLoaderData } from "react-router-dom";
import Footer from "../../component/global/footer/Footer";

function Home() {
    const product = useLoaderData();
    return (
        <div>
            <Nav></Nav>
            <Hero></Hero>
            <CardRow></CardRow>
            {product.map((e) => (
                <ProductShow p={e}></ProductShow>
            ))}
            <Footer></Footer>
        </div>
    )
}

export default Home
