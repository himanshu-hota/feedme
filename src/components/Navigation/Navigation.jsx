import React,{useState} from 'react';


const Navigation = () => {
   const [isActive, setActive] = useState(false);

   const handleToggle = () => {
    setActive(!isActive);
  };

    return (
        <header >
        <a href='/#' className="Logo" >Food<span>.</span></a>
        <div className={`menuToggle ${isActive && 'active'}`} onClick={handleToggle}></div>
        <ul className={`navigation ${isActive && 'active'}`} onClick={handleToggle}>
          <li> <a href="/#home" >Home</a> </li>
          <li> <a href="/#about" >About</a> </li>
          <li> <a href="/#menu" >Menu</a> </li>
          <li> <a href="/#expert" >Expert</a> </li>
          <li> <a href="/#testimonials" >Testimonials</a> </li>
          <li> <a href="/#contact" >Contacts</a> </li>
        </ul>
  
      </header>
    )
}

export default Navigation ;