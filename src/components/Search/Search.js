import React, { useState } from 'react';
import PreReview from '../PreReview/PreReview';
import "./Search.css";
import Axios from "axios";

function Search() {
 
  const [reviews , setReviews] = useState([]);
  const [showReviews , setShowReviews] = useState(false);
  const [filter , setFilter ]= useState({
    title:"",
    director:"",
    writer:""
    });



  const clickHandler =(async ()=>{

    setShowReviews(false);

    await Axios.post("http://localhost:3001/api/getallreviews",filter).then((res)=>{
      
      console.log(res.data);
    
      setReviews(res.data);
      setShowReviews(true);
    });
  });

  
  return (
        
  <div className='searchDiv'>


    <div className='formSearch'>
  
     <div className='title'>SEARCH</div>
  

      <div class="search-container ic3">
        <input id="title" 
        class="input" 
        type="text" 
        placeholder=" "
        required
        onChange={(event)=>{
          setFilter({...filter,title:event.target.value});
        }}
        />
        <div class="cut"></div>
        <label for="title" class="placeholder">Title</label>
      </div>


        <div class="search-container ic3">
          <input id="director" 
          class="input" 
          type="text" 
          placeholder=" "
          required
          onChange={(event)=>{
            setFilter({...filter,director:event.target.value});
          }}
          />
          <div class="cut"></div>
          <label for="director" class="placeholder">Director</label>
        </div>

        <div class="search-container ic3">
          <input id="writer" 
          class="input" 
          type="text" 
          placeholder=" "
          required
          onChange={(event)=>{
            setFilter({...filter,writer:event.target.value});
          }}
          />
          <div class="cut"></div>
          <label for="writer" class="placeholder">Writer</label>
        </div>


        <button type="text" class="submit" onClick={clickHandler}>submit</button>


  </div>
          

          {!showReviews ?
          (
          null
          )
          :
          (
            <div className='boxs'>
            {reviews.map(item=>(
              <PreReview data={item} />
            ))}
            </div>
          )
          }




        </div>
)
}

export default Search;