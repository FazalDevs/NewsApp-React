import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props


        return (

            <div >
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https://upload.wikimedia.org/wikipedia/commons/3/30/Sunset_Apache_Junction_Arizona.jpg" : imageUrl} className="card-img-top" alt='no' />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-info">Read More</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem
