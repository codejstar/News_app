// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsItem extends Component {
    //  constructor(){
    //     super();
    //     console.log("hello i am constructor")
    //  }
    render() {
      let {title, description,imgUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
         <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:1, left:"90%"}}>
        {source}
        </span>
        <img src={imgUrl === null ? "https://images.pexels.com/photos/27775950/pexels-photo-27775950/free-photo-of-black-and-white-photo-of-a-woman-standing-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : imgUrl} className="card-img-top" alt="" />
        <div className="card-body">
        <h5 className="card-title">{title}... 
  
        </h5>
        <p className="card-text">
           {description}...
        </p>
         <p class="card-text"><small class="text-body-secondary">By {author ? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
        <Link href={newsUrl} target='_blank' className="btn btn-sm btn-primary">
          Read More
      </Link>
  </div>
</div>

      </div>
    )
  }
}

export default NewsItem