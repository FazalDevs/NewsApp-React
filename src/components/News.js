import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ed7812b5de7e4328ab43a32d55f16105&page=${this.state.page}&pageSize=8`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }
    // handlePrevButton = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ed7812b5de7e4328ab43a32d55f16105&page=${this.state.page - 1}&pageSize=8`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     console.log(parsedData);
    //     this.setState({
    //         articles: parsedData.articles,
    //         page: this.state.page - 1
    //     })
    // }
    // handleNextButton = async () => {
    //     console.log("prev")
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / 8)) {

    //     }
    //     else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ed7812b5de7e4328ab43a32d55f16105&page=${this.state.page + 1}&pageSize=8`;
    //         let data = await fetch(url);
    //         let parsedData = await data.json()
    //         console.log(parsedData);
    //         this.setState({
    //             articles: parsedData.articles,
    //             page: this.state.page + 1
    //         })
    //     }
    // }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ed7812b5de7e4328ab43a32d55f16105&page=${this.state.page}&pageSize=8`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    };
    render() {
        return (
            <>
                <h1 id='headline' className='text-center my-5'>Headlines From {this.props.category}</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                // loader={<h4 className='text-center'>Loading...</h4>}
                >
                    <div className='container my-3'>
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return <div className='col-md-4'>
                                    <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>

                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News
