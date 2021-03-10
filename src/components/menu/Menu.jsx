import React from 'react';
import menu1 from '../images/menu1.jpg';
import menu2 from '../images/menu2.jpg';
import menu3 from '../images/menu4.jpg';
import menu4 from '../images/menu2.jpg';
import menu5 from '../images/menu5.jpg';
import menu6 from '../images/menu6.jpg';
import Card from './Card';

const Images = [menu1, menu2, menu3, menu4, menu5, menu6];

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className='title'>
                <h1 className="titleText"> <span>O</span>ur Menu </h1>
                <p id='menuText' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="content">
            { Images.map((Image, index) => <Card img={Image} name={`Special Food #${index +1}`} key={index} id={index} alt={`Menu ${index}`} />)}
            </div>
            <div className='title'>
        <a href="/#" className='btn '>VIEW ALL</a>
        </div>
        </section>

    )
}


export default Menu;