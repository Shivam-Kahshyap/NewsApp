import React from 'react'

export default function NewsItem(props) {
    return (
        <div className="col-lx-2 col-lg-3 col-md-4 col-sm-6">
            <div className="card">
                <img className="card-img-top" src={props.pic} height={200} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <div className='source'>
                        <p>{props.source}</p>
                        <p>{new Date(props.date).toLocaleDateString()}</p>
                    </div>
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} target="_blank" rel ="noreferrer" className="btn btn-primary background">Read Full Article</a>
                </div>
            </div>
        </div>
    )
}
