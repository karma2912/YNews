import React, { Component } from 'react'
import NewsItem from './NewsItem'
import breakingNews from "./breakingNews.jpg"
import Walk from './Walk';

export default class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1
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
      })
    })
  }
  handleNextBtn =()=>{
   this.setState({
    loading: true,
    page : this.state.page + 1
   })
   this.componentDidMount()
  }
  handlePrevBtn =()=>{
    this.setState({
      loading: true,
      page : this.state.page - 1
     })
     this.componentDidMount()
  }
  render() {
    const {articles} = this.state
    return (
      <>
      <div className='flex justify-center text-center'>{this.state.loading && <Walk/>}</div>
      {!this.state.loading && articles.map((articles,index)=>{
        return(
          <div className='flex flex-col justify-center items-center' key={index}>
                <NewsItem title={articles.title} img={articles.urlToImage?articles.urlToImage:breakingNews} description={articles.description} url={articles.url}/>
          </div>
        )
      })}
      <div className='btn flex justify-between p-8'>
        <button className='sm:ml-20 ml-30 border-2 border-black pl-8 pr-8 pt-2 pb-2 bg-black text-white rounded-xl flex items-center gap-4' onClick={this.handlePrevBtn}><i className="fa-solid fa-arrow-left"/>Previous</button>
        <button className='sm:mr-20 mr-15 border-2 border-black pl-8 pr-8 pt-2 pb-2 bg-black text-white rounded-xl flex items-center gap-4' onClick={this.handleNextBtn}>Next<i className="fa-solid fa-arrow-right"/></button>
      </div>
      </>
    )
  }
}
