import React, { useEffect, useState } from 'react';
import YouTube from "react-youtube"
import Cookies from 'universal-cookie';
import Axios from "axios";
import Modal from "react-modal";
import "./FullReview.css";

function FullReview(review) {

    const reviewData = review.data ;
    const cookies = new Cookies();
    const [isWriter , setIsWriter] = useState(false); 
    const exitBtn = "https://static.thenounproject.com/png/261420-200.png";
    const [modalIsOpen ,setModalIsOpen] = useState(true);

    const deleteClick = async()=>{
      await Axios.delete("http://localhost:3001/api/deletereview",review).then((res)=>{
      window.location.reload();
      });
    };

    const clickExitBtn = ()=>{
      setModalIsOpen(false);
      window.location.reload();
    };

    const opts = {
      height :"400px",
      width:"600px",
    };

    useEffect(()=>{
      const cookieUsername = cookies.get("username");
      const writerName = reviewData.writer;
      
      if(isWriter===false){
          if(writerName === cookieUsername){
          setIsWriter(true);
        }
      }
      
  });


    return (

      <Modal isOpen={modalIsOpen}>
      
      <img src={exitBtn} className="exitBtn" onClick={clickExitBtn}/>

      <div className='fullBox'>
      
        <div className='TitleReview'>
          <div className='imgTitle'>
            <img src={reviewData.img}/>
          </div>

          <div className='headerTitle'>
            <h2 className='headerH'>{reviewData.title}</h2>
            <h3 className='headerH'>by {reviewData.director}</h3>
          </div>
        </div>

        <div className='info'>

          <div className='textInfo'>
            <div className='textContainer'>
              <p className='textP'>{reviewData.review}</p>
            </div>
          </div>

          <div className='tralierInfo'>
            <YouTube videoId={reviewData.trailer} opts={opts}/>
          </div>

        </div>


        <div className='writerInfo'>
          <h4>Review was writen by {reviewData.writer}</h4>
          {!isWriter?
          (
            null
          )
          :
          (
            <button className='deleteBtn' onClick={deleteClick}>DELETE</button>
          )
          }
        </div>
        

      </div>

    </Modal>
  )
}

export default FullReview;