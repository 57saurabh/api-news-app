import React, { Component } from 'react'

export class CountryNewsItem extends Component {

  render() {
      let {title, description, imageUrl, url}=this.props;
    return (
      <div>
          <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://cdn.cnn.com/cnnnext/dam/assets/200311101508-01-harvey-weinstein-0224-super-tease.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
    <a href={url} target="_blank" className="btn btn-sm btn-danger">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default CountryNewsItem