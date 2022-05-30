import React from 'react'
// import Ptext from './Ptext';

function ServicesItems({img, title, desc}) {
  return (
<div>
   <div className='left'>
     <img src={img} alt=""></img>
   </div>
   <div className='right'>
     <div className="title">
       <h3>{title}</h3>
     </div>
     <div className="desc">{desc}</div>
   </div>
</div>
  )
}

export default ServicesItems