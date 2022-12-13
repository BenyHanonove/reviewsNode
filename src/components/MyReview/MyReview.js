import React, { useEffect, useState } from 'react';
import PreReview from '../PreReview/PreReview';
import Cookies from 'universal-cookie';
import Axios from 'axios';
import "./MyReview.css";

function MyReview() {

  const [reviews , setReviws] = useState([]);
  const [user , setUser] = useState(null);
  const cookies = new Cookies();
  const cookieUsername = cookies.get("username");


  useEffect(()=>{

    if(!user){
      setUser({...user,username:cookieUsername});
    }

    Axios.post("http://localhost:3001/api/getmyreviews",user).then((res)=>{
        setReviws(res.data);
    });

  });

  return (
    <div className='myReviewsDiv'>
      <h2 className='title'>MY REVIEWS:</h2>
      <div className='boxs'>      
        {reviews.map(item=>(
          <PreReview data={item} />
          ))}
      </div>
    </div>
  )
}

export default MyReview;