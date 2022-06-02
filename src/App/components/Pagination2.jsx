import React from 'react';

function Pagination({postsPerPage, totalPosts, paginate}) {
    
    const pageNumbers = [];

    for(let i = 0; i <= totalPosts / postsPerPage; i++){
        pageNumbers.push(i);
    }
    
    return ( 
    <div className='pagination'>
        
        {
            pageNumbers.map((number) => {
                <li key={number} className='page-item'>
                    <a href='!#' className='page-link' onClick={() => paginate(number)} >
                        {number}
                    </a>
                </li>
            })
        }

    </div> );
}

export default Pagination;