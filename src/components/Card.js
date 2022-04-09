import React from 'react';

const Card = (props) => {
    const movie = props.movie;
    return (
    <div>
        <div className='card cardSecondary h450 mb-3'>
            <img src={movie.Images[0]} className='card-img-top' alt={movie.Images[0]} />
            <div className='card-body'>
                <h2 className='card-title'>{`#${movie.imdbRating} - ${movie.Title} (${movie.Year})` }</h2>
            </div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>{`Director: ${movie.Director}`}</li>
                <li className='list-group-item'>{`Number of Votes: ${movie.imdbVotes}`}</li>
            </ul>
        </div>
    </div>
    );
};

export default Card;