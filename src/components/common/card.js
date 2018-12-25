import React from 'react';
import faker from 'faker';
import './card.css';

const Card = ({title, by, blurb, url, funded, backers, imgurl}) => (
    <div className="card">
        <img className="card-img-top cardimg" src={`https://picsum.photos/200/150?image=${imgurl}`}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>By {by}</p>
            <p className="card-text">{blurb}</p>
            <div className="detailsContainer">
                <div className="leftinfo">
                    <p className="title">{funded} %</p>
                    <p className="subtitle">Funded</p>
                </div>
                <div className="rightinfo">
                    <p className="title">{backers}</p>
                    <p className="subtitle">Backers</p>
                </div>
            </div>
            <a href="#" className="btn custombtn">View Project</a>
        </div>
    </div>
);

export default Card;
