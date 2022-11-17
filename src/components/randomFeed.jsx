import React from 'react'
import Post from './post'

const RandomFeed = (props) => {
    let images = props.images
    console.log(images)
  return (
    <div className='feed'> {images &&
        images.length > 0 &&
        images.map((image, i) => {
          return (
           <Post key = {i} image = {image} />
          );
        })}</div>
  )
}

export default RandomFeed