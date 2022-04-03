import React from 'react'
import './blog.css'
import { Article } from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports'

const Blog = ({title, date}) => {
  return (
    <div className='gpt3__blog section__padding' id='project'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
            Some of our Projects,
            We Design, Build, develop and deploy tonotch Projects.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
          <div className='gpt3__blog-container_groupA'>
            <Article imgUrl={blog01} date="feb 18, 2020" title="Ecommerce Website?"/>
          </div>
          <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="June 10, 2020" title="Finance website to Manage the daily transaction of a finance firm"/>
            
            <Article imgUrl={blog03} date="January 5, 2021" title="GPT-3 Software for AI and forecasting future earnings?"/>
            <Article imgUrl={blog04} date="April 12, 2021" title="Ecommerce Website, multi vendor application and Mobile app"/>
            <Article imgUrl={blog05} date="Feb 8, 2022" title="Ecommerce and Finance website and Mobile app and social networking app"/>
          </div>
      </div>
    </div>
  )
}

export default Blog