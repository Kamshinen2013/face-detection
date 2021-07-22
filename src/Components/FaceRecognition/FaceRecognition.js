import React from 'react';

const FaceRecognition =  ({ imageurl }) => { //imageurl is received and is used as a parameter
    return (
        <div className = "center">
            <img alt='' src={imageurl} /> 
            {/* the imageurl which is now the link contained in the input now serves as the source of the image  */}
    
            
           
        </div>
    )
}

export default FaceRecognition;