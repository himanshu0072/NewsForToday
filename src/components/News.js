import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews(pgeNo) {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=819569c01085477c847a61a48cd0da53&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
    });
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=819569c01085477c847a61a48cd0da53&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
    });
  }

  handleNextClick = async () => {
    // console.log("next");
    // if (this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {

    // }
    // else{
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=819569c01085477c847a61a48cd0da53&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    //   let data=await fetch(url);
    //   let parsedata= await data.json();
    //   this.setState({loading:false});
    //   this.setState({
    //     articles: parsedata.articles,
    //     page: this.state.page +1

    //   })

    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePreClick = async () => {
    // console.log("pre");
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=819569c01085477c847a61a48cd0da53&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data=await fetch(url);
    // let parsedata= await data.json()
    // this.setState({loading:false});
    // this.setState({
    //   articles: parsedata.articles,
    //   page: this.state.page - 1

    // })
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container my-4">
          <div className="text-center">
            <h2 className="my-1">NewsForToday - Top Headlines</h2>
            {this.state.loading && <Spinner />}
          </div>
          <div className="row my-4">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-3 my-2" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 90)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            <div className="container d-flex justify-content-between my-4">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-dark"
                onClick={this.handlePreClick}
              >
                {" "}
                &larr; Previous
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                type="button"
                className="btn btn-dark"
                onClick={this.handleNextClick}
              >
                {" "}
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
