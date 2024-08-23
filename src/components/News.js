
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {}
  
   constructor(){
    //run before the rendering
        super();
        console.log("hello i am constructor from news components")
        this.state= {
           articles: [],
           pageSize: 5,
           loading: true
        }
      }

    
    
   componentDidMount = async  () =>{
        //run after render 
        //life cycle method
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d874b971fc53477080733b6f75c7aaf8&page=1&pageSize=${this.state.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          articles: parsedData.articles
        })
      }

     handleNextClick = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d874b971fc53477080733b6f75c7aaf8&pageSize=${this.state.pageSize + 1}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
          pageSize: this.state.pageSize  + 1,
          articles: parsedData.articles
        })
      }

    handlePrevClick = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d874b971fc53477080733b6f75c7aaf8&pageSize=${this.state.pageSize - 1}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
          pageSize: this.state.pageSize - 1,
          articles: parsedData.articles
        })
    }


  render() {
    //render after the constructor run
    return (
      <div className='container my-3'>
        <h2>Dhruv Rathee - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((elem) => (
        <div className="col-md-4" key={elem.url}>
          <NewsItem title={elem.title.slice(0,45)} description={elem.description != null ? elem.description.slice(0,88) : elem.description} imgUrl={elem.urlToImage} newsUrl={elem.url}/>
        </div>
        ))}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1 || this.state.pageSize<=1}  type="button" class="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
       </div>
    )
  }
}

export default News