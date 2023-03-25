import axios from 'axios'
import React, {useState,useEffect} from 'react'
function Politics(){
    const[news,setNews]=useState([])
    useEffect(()=>{
      axios.get("https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=07a46995d210414db74e1ffdaf45af47")
      .then((res)=>{
        console.log(res.data.articles);
        setNews(res.data.articles);
      })
    },[])
    return (
      <>
      
        <div className='container my-5'>
          <div className='row text-center'>
            {
              news.map((val)=>{
                return(
                  <div className='col my-3'>
                  <div className="card" style={{width : "18rem"}}>
                    <img src={val.urlToImage} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                      <h5 className="card-title">{val.title}</h5>
                      <p className="card-text">{val.description}</p>
                      <p className="card-text bg-primary text-white">Written by : {val.author}</p>
                      <p className="card-text bg-dark text-white">Published at : {val.publishedAt}</p>
                      <a href={val.url} className="btn btn-info">View More</a>
          </div>
        </div>
                  </div>
                  
                )
              })
            }
          </div>
        </div>
      </>
    )
  }
  export default Politics;