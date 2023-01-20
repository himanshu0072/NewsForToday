import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title,description,imageUrl,newsUrl, author, date, source}=this.props;
    return (
      <>
      
      <div className="card">
          <img className="card-img-top" src={!imageUrl?"https://images.livemint.com/img/2023/01/19/600x338/homepod_2nd_gen_1674104887174_1674104899735_1674104899735.jpg":imageUrl} alt="News"/>
          <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'88%',zIndex: '1'}}>
              {source}
            </span>
          <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
          </div>
      </div>
      </>
    )
  }
}
