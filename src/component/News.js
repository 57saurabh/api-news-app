import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 
  constructor(){
    super();
    this.state={
      articles: [],
    loding: false

    }
}

async componentDidMount(){
 let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=67902c88e9174c4088785106aeb6937f";
 let data = await fetch(url);
 let parsedData =await data.json();
  this.setState({articles:parsedData.articles})
}

  render() {
    return (
      <div className='container my-3'>
          <h2>Daily News - Top headline</h2>
          <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col md-3 my-3" key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
            </div>

          })}
            </div>

            
      </div>
    )
  }
}

export default News