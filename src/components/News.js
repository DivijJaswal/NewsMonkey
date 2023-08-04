import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
export class News extends Component {
//   static defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general'
//   }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }



  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    try {
      let url =
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6c400c41b4f4d5c80965a4312a617d7&pageSize=${this.props.pagesize}`;
      let data = await fetch(url)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            articles: json.articles,
            loading: false,
          });
        });
      
    } catch (e) {
      console.log("something is not working");
    }
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6c400c41b4f4d5c80965a4312a617d7&page=${
      this.state.page - 1
    }&pageSize=${this.props.pagesize}`;
    let data = await fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          articles: json.articles,
          loading: true,
        });
      });
    
    this.setState({ page: this.state.page - 1, loading : false });
  };
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pagesize}`;
    let data = await fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          articles: json.articles,
          loading: true,
        });
      });
    
    this.setState({ page: this.state.page + 1, loading : false});
  };
  render() {
    return (
      <div>
        <h1 className="text-centre">NewsMonkey -Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title + "..."}
                  description={element.description + "..."}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page<=1}
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page>=20}
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
