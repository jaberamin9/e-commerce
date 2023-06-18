import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { faLessThan } from '@fortawesome/free-solid-svg-icons'
import './Hero.css';
import { useEffect, useState } from 'react';

function Hero() {

    const [idx, setIdx] = useState(0);
    const [data, setData] = useState([{}]);
    useEffect(() => {
        const urls = `http://localhost:3000/hero`;
        fetch(urls).then(res => res.json()).then(data => {
            setData(data);
        });
    }, [])

    function nextBtn() {
        if (idx === data.length - 1) {
            setIdx(0);
        } else {
            setIdx(idx + 1);
        }
    }
    function prevBtn() {
        if (idx === 0) {
            setIdx(data.length - 1);
        } else {
            setIdx(idx - 1);
        }
    }

    return (
        <div>
            <section className="main swiper mySwiper">

                <div className="wrapper swiper-wrapper">
                    <div className="slide swiper-slide">
                        <img src={data[idx].url} alt="" className="image" />
                        <div className="image-data">
                            <span className="text" dangerouslySetInnerHTML={{ __html: data[idx].p }}></span>
                            <h2 dangerouslySetInnerHTML={{ __html: data[idx].t }}></h2>
                            <a href={data[idx].link} className="button">Shop Now</a>
                        </div>
                    </div>
                </div>

                <div className="swiper-button-next nav-btn" onClick={nextBtn}><FontAwesomeIcon icon={faGreaterThan} style={{ "color": "white", "font-size": "18px" }} /></div>
                <div className="swiper-button-prev nav-btn" onClick={prevBtn}><FontAwesomeIcon icon={faLessThan} style={{ "color": "white", "font-size": "18px" }} /></div>
                <div className="swiper-pagination"></div>
            </section>
        </div>
    )
}

export default Hero
