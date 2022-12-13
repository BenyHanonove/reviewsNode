import React, { useState } from 'react';
import FullReview from '../FullReview/FullReview';
import "./PreReview.css";

function PreReview(review){
  
  const [seeFull , setSeeFull] = useState(false);
 
  const clickHandler = ()=>{
    setSeeFull(true);  
  };

  return (
    
    <div className='reviewBox'>
      <div className='info'>
        <h3 className='preTitle'>{review.data.title}</h3>
        <img className='preImg' src={review.data.img}/>
        <span className='preTitle'>made by:{review.data.writer}</span>
        <button className='viewBtn' onClick={clickHandler}>VIEW</button>
      </div>
    {!seeFull   
    ?
    (
      null
    )
    :
    (
      
      <FullReview data={review.data}/>
    ) 
  }
  </div>
  )
}

export default PreReview;