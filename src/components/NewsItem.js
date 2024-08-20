// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
    //  constructor(){
    //     super();
    //     console.log("hello i am constructor")
    //  }
    render() {
      let {title, description,imgUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
        <img src={imgUrl == null ?"https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/08/Volkswagens-ID-GTI-2.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1":imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">
           {description}...
        </p>
        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">
          Read More
      </a>
  </div>
</div>

      </div>
    )
  }
}

export default NewsItem