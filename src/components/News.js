import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export default class News extends Component {
  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=819569c01085477c847a61a48cd0da53&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedata= await data.json()
    this.setState({loading:false});
    this.setState({articles: parsedata.articles, totalResults: parsedata.totalResults});
  }
  
  handleNextClick= async()=>{
    console.log("next");
    if (this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {

    }
    else{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=819569c01085477c847a61a48cd0da53&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedata= await data.json();
      this.setState({loading:false});
      this.setState({
        articles: parsedata.articles,
        page: this.state.page +1

      })

    }
    
  }

  handlePreClick= async()=>{
    console.log("pre")
    console.log("next");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=819569c01085477c847a61a48cd0da53&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedata= await data.json()
    this.setState({loading:false});
    this.setState({
      articles: parsedata.articles,
      page: this.state.page - 1

    })
  }


  render() {
    return (
      <>
      <div className='container my-5'>
        <div className='text-center'>
        <h2 className='my-1'>NewsForToday - Top Headlines</h2> 
        {this.state.loading && <Spinner/>}
        </div> 
        <div className='row my-5'>
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className='col-md-4 my-2' key={element.url}>
            <NewsItems  title={element.title?element.title:""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage}
            newsUrl={element.url}/>
          </div>
        })}
        <div className='container d-flex justify-content-between my-5'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreClick}>	&larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next 	&rarr;</button>
        </div>     
        </div>
      </div>
      </>
    )
  }
}
