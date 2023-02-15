import './styles.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import one from '../../assets/shelterPics/1.jpg';
import two from '../../assets/shelterPics/2.jpg';
import three from '../../assets/shelterPics/3.jpeg';
import four from '../../assets/shelterPics/4.jpeg';
import five from '../../assets/shelterPics/5.jpg';
import six from '../../assets/shelterPics/6.jpg';
import seven from '../../assets/shelterPics/7.jpg';
import eight from '../../assets/shelterPics/8.jpg';
import nine from '../../assets/shelterPics/9.jpg';
import ten from '../../assets/shelterPics/10.jpg';
import eleven from '../../assets/shelterPics/11.jpg';
import twelve from '../../assets/shelterPics/12.jpg';

import { useState } from 'react';

const Home  = () => {
    const arr1 = [one, two, three, four, five, six];
    const arr2= [seven, eight, nine, ten, eleven, twelve];
    const [carouselIndex, setCarouselIndex] = useState(0);
   
    const [carouselImages, setCarouselImages] = useState(arr1);

    return (
        <div className="contenedor-titulo-carousel">
           <h1>Conocé nuestra causa</h1>
           
                <div className="contenedor-principal">
                    <button className='flecha-izq' disabled={carouselIndex === 0}  onClick={()=>{ setCarouselImages(arr1) 
                    setCarouselIndex(carouselIndex -1)}} >{<AiOutlineArrowLeft/>}</button>
                    <div className='contenedor-carousel'>
                        <div className='carousel'>
                            {
                                carouselImages.map((image, ind)=>{
                                    return (
                                        <div className='carousel-imagen' key={ind}>
                                            <img src={image} alt={image}></img>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <button className='flecha-der' disabled={carouselIndex === 1} onClick={()=>{ setCarouselImages(arr2)
                    setCarouselIndex(carouselIndex +1)}}>
                        {<AiOutlineArrowRight/>}</button>
                </div>
            
            <div className='description-container'>
                <span>
                    Mi nombre es Sergio y les doy la bienvenida a 'Sus patas en nuestras manos'.
                </span>
                <span>
                    Hace aproximadamente 20 años emprendí la hermosa actividad de trabajar con el mejor amigo del hombre, porque considero que son los mejores compañeros que existen. 
                </span>
                <span>
                    Empecé con paseos caninos en el Parque Centenario, durante varios años, después me animé a tener pensionado y guardería, y gracias a ello con mucho esfuerzo y amor logramos tener nuestra propia Veterinaria y tres predios para pensionado canino y felino. Trabajamos en CABA y también con clientes de todo Gran Buenos Aires.
                </span>
                <span>
                    Ustedes saben lo hermoso que es el amor que ellos brindan: incondicional, sincero y sin medida.
                </span>
                <span>
                    Los invito a descubrir este sitio dedicado pura y exclusivamente a ellas. Nuestras fieles, demostrativas y amadas compañeras: Nuestras Mascotas.
                </span>
            </div>
            
        </div>
    )
};

export default Home;