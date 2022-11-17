import React from 'react'
import Post from './post'
import './listFeed.css'

const ListFeed = (props) => {
    const images = props.images
    return (
        <div className='listFeed'> {images &&
            images.length > 0 &&
            images.map((image, i) => {
              return (
                <div className="feedPost">
               <Post image = {image} />
               </div>
              );
            })}</div>
    )
}

export default ListFeed