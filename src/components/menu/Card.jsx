import React from 'react';

const Card = (props) => {
    return (
        
            <div className='box'>
                <div className='imgBx'>
                    <img src={props.img} alt={props.alt} id={props.id} />
                </div>
                <div className='text'>
                    <p>{props.msg}</p>
                    <h3>{props.name}</h3>
                    
                </div>
            </div>
        
    )
}


export default Card;