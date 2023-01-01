import React from 'react';


const BgIcon = ({left, top, animate, image}) => {

    // const randomTopPosition = Math.ceil(Math.random() * 700)
    // const randomLeftPosition =Math.ceil(randomTopPosition * 2)



    return (
    
            <img className={`absolute h-[100px] ease-in-out  opacity-20 ${animate}`} style={{marginLeft:left, marginTop:top}} src={image} alt="" />
       
    );
};

export default BgIcon;