import './About.css'
import Nav from "../../component/global/nav_bar/Nav";
import Footer from "../../component/global/footer/Footer";

function About() {
    return (
        <>
            <Nav></Nav>
            <div className='about-section'>
                <h1>About US</h1>
            </div>
            <section>
                <div className='about-container'>
                    <div className="about-left">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
                    </div>
                    <div className="about-right">
                        <h3>What is e-commerce business</h3>
                        <p>E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. It involves the online transaction of products, services, and information between businesses, consumers, or a combination of both. In an e-commerce business, customers can browse through virtual catalogs, select items, make secure online payments, and have the products delivered to their doorstep. E-commerce has revolutionized the way businesses operate by providing a global marketplace accessible 24/7. It has eliminated geographical boundaries, increased convenience for consumers, and allowed businesses to reach a wider customer base. E-commerce platforms encompass various models such as B2B (business-to-business), B2C (business-to-consumer), C2C (consumer-to-consumer), and more, enabling diverse business opportunities in the digital realm.</p>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default About