import React from 'react';
import expert1 from '../images/expert1.jpg';
import expert2 from '../images/expert2.jpg';
import expert3 from '../images/expert3.jpg';
import expert4 from '../images/expert4.jpg';
import Card from '../menu/Card';

const Images = [expert1,expert2,expert3,expert4];

const Expert = () => {
    return (
<section className="expert" id="expert">
        <div className='title'>
          <h1 className="titleText"> Our Kitchen <span>E</span>xpert </h1>
          <p id="expertText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="content">
        { Images.map((Image, index) => <Card img={Image} name={`Expert ${index+1}`} key={index} id={index} alt={`Expert ${index}`} />)}

        </div>


      </section>
    )
}

export default Expert ;