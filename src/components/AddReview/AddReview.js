import React, { useState } from 'react';
import Axios from "axios";
import Cookies from "universal-cookie";
import "./AddReview.css";


function AddReview() {

  const [review, setReview] = useState({});
  const cookies = new Cookies();
  

  const clickHandler =async()=>{

    await Axios.post("http://localhost:3001/api/uploadreview",review).then((res)=>{
      console.log(`${res._id} has added to reviews DB.`);
    });
    window.location.reload();
  };

  return (
    <div className='formAddReview'>
  
      <div className='title'>ADD REVIEW</div>
      <div className="subtitle">enter review info!</div>


      <div className="input-container ic1">
        <input id="title" 
        className="input" 
        type="text" 
        placeholder=" "
        required
        onChange={(event)=>{
          setReview({...review,title:event.target.value ,writer:cookies.get("username")});
        }}
        />
        <div className="cut"></div>
        <label for="title" className="placeholder">Title</label>
      </div>



      <div className="input-container ic2">
        <input id="director" 
        className="input" 
        type="text" 
        placeholder=" "
        required
        onChange={(event)=>{
          setReview({...review,director:event.target.value});
        }}
        />
        <div className="cut"></div>
        <label for="director" className="placeholder">Director</label>
      </div>


      <div className="input-container ic2">
        <input id="img" 
        className="input" 
        type="text" 
        placeholder=" "
        required
        onChange={(event)=>{
          setReview({...review,img:event.target.value});
        }}
        />
        <div className="cut"></div>
        <label for="img" className="placeholder">Image link</label>
      </div>


      <div className="input-container ic2">
        <input id="trailer" 
        className="input" 
        type="text" 
        placeholder=" "
        required
        onChange={(event)=>{
          setReview({...review,trailer:event.target.value});
        }}
        />
        <div className="cut"></div>
        <label for="trailer" className="placeholder">Trailer</label>
      </div>


      <div className="input-container ic2">
        <input id="review" 
        className="input" 
        type="text" 
        placeholder=" "
        required
        onChange={(event)=>{
          setReview({...review,review:event.target.value});
        }}
        />
        <div className="cut"></div>
        <label for="review" className="placeholder">Review</label>
      </div>


      <button type="text" className="submit" onClick={clickHandler}>submit</button>

    </div>    

  )
}

export default AddReview;