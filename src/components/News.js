import Spinner from './Spinner'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {
      pageSize: PropTypes.number,
      country: PropTypes.string,
      category: PropTypes.string,
  }
  
   constructor(){
    //run before the rendering
        super();
        console.log("hello i am constructor from news components")
        this.state= {
           articles: [],
           page:1,
           loading: false
        }
      }

    
    
   componentDidMount = async  () =>{
        //run after render 
        //life cycle method
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d88d628a302544ca9bedd1ba23305613&page=1&pageSize=${this.props.pageSize}`
        this.setState({
          loading: true,
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
          loading: false,
        }) 
      }

     handleNextClick = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d88d628a302544ca9bedd1ba23305613&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
         this.setState({
          loading: true,
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
          page: this.state.page  + 1,
          articles: parsedData.articles,
          loading: false
        })
      }

    handlePrevClick = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d88d628a302544ca9bedd1ba23305613&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({
          loading: true,
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
          page: this.state.page - 1,
          articles: parsedData.articles,
          loading: false
        })
    }


  render() {
    //render after the constructor run
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{margin: '35px 0px;'}}>Dhruv Rathee - Top Headlines</h2>
        
        <div className="row">
        {
          
       this.state.loading === false ? this.state.articles.map((elem) => (
        <div className="col-md-4" key={elem.url}>
          <NewsItem title={elem.title.slice(0,45)} description={elem.description != null ? elem.description.slice(0,88) : elem.description} imgUrl={elem.urlToImage} newsUrl={elem.url}/>
        </div>
        )) : <Spinner/>        
        }
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <= 1}  type="button" class="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
       </div>
    )
  }
}

export default News