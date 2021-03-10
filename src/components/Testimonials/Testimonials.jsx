import React from 'react';
import Card from '../menu/Card';
import Image1 from '../images/testi1.jpg';
import Image2 from '../images/testi2.jpg';
import Image3 from '../images/testi3.jpg';

const Images = [Image1,Image2,Image3] ;
const Review = ["et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus"
                ,"quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel"
                ,"erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus"
               ]

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
        <div className='title white'>
            <h1 className="titleText"> They <span>S</span>aid About Us </h1>
            <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </div>
      <div className="content">
             

        { Images.map((Image, index) => <Card 
        img={Image} 
        name={`Special Special #${index +1}`} 
        msg={Review[index]}
        key={index} 
        id={index} 
        alt={`User ${index}`} 
        />)}
      </div>
  
        </section>
    )
}

export default Testimonials ;