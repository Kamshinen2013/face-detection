import React from 'react';
import Tilt from 'react-tilt';
import'./Logo.css';
import brain from './Brain.png'
 


const Logo = () => {
    return(
       <div className= 'ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }} > 
            <div className="Tilt-inner p3"> <img style={{ paddingTop: '15px' }} alt='logo' src ={brain} height='110px' /> </div> 
            {/* image is a transparent png */}
        </Tilt>
       </div>
    )
}


export default Logo;