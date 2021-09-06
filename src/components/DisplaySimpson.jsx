import React from 'react';

export default function DisplaySimpson({simpson}) {
    console.log(simpson)
    return (
        simpson && (
            <div className='DisplaySimpson'>
                <img src={simpson.image} alt={simpson.character} />
                <h1>{simpson.character}</h1>
                <p>{simpson.quote}</p>
            </div>
        )
    );
}
