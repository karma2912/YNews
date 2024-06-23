import React, { useState,useEffect, useLayoutEffect } from 'react'
import NewsItem from './NewsItem'
import breakingNews from "./breakingNews.jpg"
import Walk from './Walk';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
 const [articles , setArticles] = useState([])
 const [loading , setLoading] = useState(false)
 const [page , setPage] = useState(1)
 const [totalResults , setTotalResults] = useState(0)
 
 const updateNews = () => {
  setLoading(true)
  fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=a211aecd614d436b99ef8e99399a2ff6&pageSize=${props.pageSize}&page=${page}`)
  .then((response)=> response.json())
  .then((data)=>{
    setArticles(data.articles)
    setTotalResults(data.totalResults)
  })
  setLoading(false)
 }

 useEffect(() => {
  updateNews();
},[]);

 const fetchMoreData=()=>{
    fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=a211aecd614d436b99ef8e99399a2ff6&pageSize=${props.pageSize}&page=${page+1}`)
    .then((response)=> response.json())
    .then((data)=>{
      setPage(page+1)
      setArticles(articles.concat(data.articles))
    })
  }
    return (
      <>
      <div className='flex justify-center text-center'>{loading && <Walk/>}</div>
      {articles.map((articles,index)=>{
        return(
          <div className='flex flex-col justify-center items-center' key={index}>
                <NewsItem title={articles.title} img={articles.urlToImage?articles.urlToImage:breakingNews} description={articles.description} url={articles.url}/>
          </div>
          
        )
        }
      )}
      
      </>
    )
  }
  export default News;
