import React from 'react';

function Filter() {
    return (
        <>
            <div className="filter-wrap">
                <div className="filter-label">Filter By:</div>
                <a href='/' className="filter-item unread">Unread</a>
                <a href='/' className="filter-item read">Read</a>
                <a href='/' className="filter-item favorites">Favorites</a>
            </div>
        </>
    )
}

export default Filter;