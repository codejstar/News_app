import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='container my-3'>
        <h2>Dhruv Rathee - Top Headlines</h2>
        <div className="row">
        <div className="col-md-3">
          <NewsItem title="Title" description="My description"/>
        </div>
       
       <div className="col-md-4">
          <NewsItem title="Title" description="My description"/>
        </div>

        <div className="col-md-4">
          <NewsItem title="Title" description="My description"/>
        </div>

        <div className="col-md-4">
          <NewsItem title="Title" description="My description"/>
        </div>

        </div>
       </div>
    )
  }
}

export default News