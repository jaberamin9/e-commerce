import { useState } from 'react';
import Footer from '../../component/global/footer/Footer';
import Nav from '../../component/global/nav_bar/Nav';
import './SingelProductDetails.css'

function SingelProductDetails({ product }) {
    let isActive;
    const [cnt, setCnt] = useState(0);
    function deCrement() {
        if (cnt <= 0) setCnt(0);
        else
            setCnt(cnt - 1);
    }
    function inCrement() {
        setCnt(cnt + 1);
    }
    function buy() {
        if (cnt > 0) {
            const p = {
                id: product._id,
                name: product.name,
                p: parseInt(product.p),
                q: cnt
            }
            isActive = true;
            let data = JSON.parse(localStorage.getItem('data'));
            const arr = [];
            if (data != null) {
                data.map((e) => {
                    if (e.id != p.id) {
                        arr.push(e);
                    }
                })
                arr.push(p);
                localStorage.setItem('data', JSON.stringify(arr));
            } else {
                arr.push(p);
                localStorage.setItem('data', JSON.stringify(arr));
            }

            console.log(data);
        } else {
            isActive = false;
        }
    }
    return (
        <div>
            <section>
                <div class="container flex">
                    <div class="left">
                        <div class="main_image">
                            <img src={product.img} class="slide"></img>
                        </div>
                    </div>
                    <div class="right">
                        <h3>{product.name}</h3>
                        <h4> <small>৳ </small>{product.p} </h4>
                        <p>{product.dis}</p>
                        <h5>Quantity</h5>
                        <div class="add flex1">
                            <span onClick={deCrement}>-</span>
                            <label>{cnt}</label>
                            <span onClick={inCrement}>+</span>
                        </div>

                        <button onClick={buy}>Add to Cart</button>
                        {isActive &&
                            <p > Cancel </p>
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingelProductDetails