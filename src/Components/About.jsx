import React, { useState } from 'react'

export default function About(props) {
// const[mystyle , setMystyle]= useState({
//     color: 'red',
//     backgroundColor: 'yellow',
//     border:'px solid purple',
// })

// const [btnText, setBtnText]= useState("Enable dark Mode")

//  const toggleStyle = ()=>{
//     if(mystyle.color === 'red'){
//         setMystyle({
//             color:'white',
//             backgroundColor:'green'
//         })
// setBtnText("Enable Light Mode ")
//     }
//     else{
//         setMystyle({
//             color:'red',
//             backgroundColor:'yellow',
//         })
//         setBtnText("Enable Dark Mode ")
//     }
// }

let mystyle ={
  color: props.mode === 'dark'? 'white':'black',
  backgroundColor:props.mode === 'dark'? 'orange':'white',
  border:'4px solid green',
}

  return (
    <div className='container' style={mystyle}>
       <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Welcome to <strong>Style Haven</strong>, where fashion meets innovation! At Style Haven, we believe that fashion is more than just clothes – it's a way to express your individuality, creativity, and confidence. Our carefully curated collections are designed to provide timeless elegance with a modern twist.
        </p>
        <p className="about-text">
          Since our founding in 2010, we've made it our mission to bring high-quality, sustainable, and trendy fashion to individuals around the world. Whether you're looking for the perfect outfit for a night out or pieces to add versatility to your wardrobe, we've got you covered.
        </p>
        <p className="about-text">
          Join us on this journey of style, comfort, and empowerment. Because fashion is for everyone – and we can't wait to be part of your style story.
        </p>
      </div>
    </div>
    {/* <div className='conatiner my-3'>
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
    </div> */}

    </div>
  )
}
