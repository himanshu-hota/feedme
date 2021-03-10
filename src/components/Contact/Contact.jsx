import React from 'react';

const Contact = () => {

    return(
        <section className="contact" id="contact">
            <div className='title'>
                <h1 className="titleText"> <span>C</span>ontact Us </h1>
                <p id="contactText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
              <div className="contactForm">
              <h3>Send Message</h3>
              <div className="inputBox">
                <input type='text' placeholder="Name" />
              </div>
              <div className="inputBox">
                <input type='email' placeholder="E-mail" />
              </div>
              <div className="inputBox">
                <textarea placeholder="Message" />
              </div>
              <div className="inputBox">
                <input type='submit' value="Send" />
              </div>

              </div>
            </section>

    )
}

export default Contact;