import React, { Component } from 'react'

const NewsItem = (props) => {
    let {title,img,description,url} = props
    return (
      <>
      <div className = "component h-90 w-3/4 text-black p-3 m-5 flex flex-col sm:flex-row  border-2 border-purple-400 rounded-3xl hover:w-5/6 hover:transition duration-300 hover:border-4 hover:shadow-2xl hover:border-purple-400"> 
        <img className='w-80 sm:w-1/3 rounded-3xl flex' src={img}></img>
        <div className='font-bold p-3 text-2xl flex flex-col'>{title}
          <div className='font-normal text-xl pt-3 pb-3'>{description}</div>
          <a className='mt-2 font-normal text-base text-white' href={url} target='_blank'>Read More <i className="fa-solid fa-arrow-right p-1"></i></a>
        </div>
      </div>
      </>
    )
  }
export default NewsItem;
