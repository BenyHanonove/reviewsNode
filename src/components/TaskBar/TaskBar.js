import React, {useState} from 'react';
import AddReview from "../AddReview/AddReview.js";
import Search from "../Search/Search.js";
import MyReview from "../MyReview/MyReview.js";
import "./TaskBar.css";

function TaskBar() {

  const [showSearch ,setShowSearch] = useState(false);
  const [showMyReviews ,setShowMyReviews] = useState(false);
  const [showAddReview ,setShowAddReview] = useState(false);

 

  const clickMyReview = ()=>{
    restAll();
    setShowMyReviews(true);
  };

  const clickAddReview = ()=>{
    restAll();
    setShowAddReview(true);
  };

  const clickSearch = ()=>{
    restAll();
    setShowSearch(true);
  };


  const restAll = ()=>{
    setShowSearch(false);
    setShowAddReview(false);
    setShowMyReviews(false);
  };



  return (

    <div className='taskBar'>
      <div className='menu'>
          <button className='btnBlue' onClick={clickAddReview}>ADD REVIEW</button>
          <button className='btnBlue' onClick={clickMyReview}>MY REVIEWS</button>
          <button className='btnBlue' onClick={clickSearch}>SEARCH REVIEW</button>
      </div>

      <div className='Task'>
      {!showAddReview?(null):(<AddReview/>)}
      {!showSearch?(null):(<Search/>)}
      {!showMyReviews?(null):(<MyReview/>)}
            
      </div>
    </div>
  )
}

export default TaskBar;