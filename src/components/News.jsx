import React, { Component } from 'react'
import NewsItem from './NewsItem'
import breakingNews from "./breakingNews.jpg"
import Walk from './Walk';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1,
      totalResults: 0
    }
  }
  componentDidMount=()=>{
    this.setState({
      loading:true
    })
    fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=a211aecd614d436b99ef8e99399a2ff6&pageSize=${this.props.pageSize}&page=${this.state.page}`)
    .then((response)=> response.json())
    .then((data)=>{
      this.setState({
        articles : data.articles, 
        loading : false, 
        totalResults : data.totalResults
      })
    })
  }
  fetchMoreData=()=>{
    this.setState({
      page: this.state.page + 1
    })
    this.setState({
      loading:true
    })
    fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=a211aecd614d436b99ef8e99399a2ff6&pageSize=${this.props.pageSize}&page=${this.state.page}`)
    .then((response)=> response.json())
    .then((data)=>{
      this.setState({
        articles : this.state.articles.concat(data.articles),
        loading: false
      })
    })
  }
  render() {
    const {articles} = this.state
    
    return (
      <>
      <div className='flex justify-center text-center'>{this.state.loading && <Walk/>}</div>
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          className='flex flex-col justify-center items-center'
          loader={<Walk/>}
      >
      {articles.map((articles,index)=>{
        return(
          <div className='flex flex-col justify-center items-center' key={index}>
                <NewsItem title={articles.title} img={articles.urlToImage?articles.urlToImage:breakingNews} description={articles.description} url={articles.url}/>
          </div>
          
        )
        }
      )}
      </InfiniteScroll>
      
      </>
    )
  }
}
