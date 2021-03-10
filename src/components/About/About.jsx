import React from 'react';
import img1 from '../images/img1.jpg';

const About = () => {
    return (
        <section className="about" id="about">
            <div className='row' >
                <div className="cols50">
                    <h2 className="titleText" > <span>A</span>bout</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="cols50">
                    <div className="imgBx">
                        <img alt="food" src={img1} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;