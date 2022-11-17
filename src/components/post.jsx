import React from 'react';
import './post.css'
import { FaThumbsUp, FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Post = (props) => {
    const image = props.image
  return (
    <div className="post">
    <img src={image.urls.small} alt="" />
    <div className="metaData">
    <div className="content">
    <Link to = {`/users/${image.user.username}`}> 
      <p>{image.user.username}</p>
      </Link>
      <p>{image?.location?.country}</p>
      </div>
      <p className='desc' >{image?.description}</p>
      <div className="stats">
      <p className='icons'><FaThumbsUp />{image.likes}</p>
      <p className='icons'><FaCloudDownloadAlt/>{image.downloads}</p>
      </div>
    </div>
  </div>
  )
}

export default Post