import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import CountryNewsItem from './CountryNewsItem';
function CountryNews() {
    let cc=useParams();
    console.log("hello"+cc.id)
        const [id,setid]= useState(cc.id)
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch (`https://newsapi.org/v2/top-headlines?country=${id}&apiKey=67902c88e9174c4088785106aeb6937f`)
      
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.articles);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    },[])
    console.log(items)
    
    const arr=items;
    

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <>
          {console.log(arr)}
             <div className='container my-3'>
          <h2>Daily News - Top headline</h2>
          <div className="row">
          {
            items.map((element)=>{
              return <div className="col md-3 my-3" key={element.url}>
              <CountryNewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
              </div>
  
            })
            }
          
            </div>
        </div>     
            </>
           
  );
}
}

export default CountryNews
