import "../App.css";
import "./feed.css"
import { useEffect, useState, useRef, useCallback } from "react";
import Loader from "./Loader";
import RandomFeed from "./randomFeed";

function Feed() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
 

  useEffect(() => {
    let first = true
    getFirstPhotos(first);
  }, [page]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  async function getFirstPhotos(first) {
    if(first){
      const name = localStorage.getItem('random');
      if(name){
        const parsedData = JSON.parse(name)
        console.log(parsedData)
        setImages(parsedData)
    }else{
      fetch(
        "https://api.unsplash.com/photos/random?client_id=yhK7eJ2dsVT5qj7qsBcX5XFRbCEdoLJ2wqVvjbqBMh4&&count=10"
      )
        .then((res) => res.json())
        .then((data) => {
          setImages((prev) => [...prev, ...data]);
          setLoading(false);
          localStorage.setItem('random',  JSON.stringify(data))
        });
}
    }else{
    fetch(
      "https://api.unsplash.com/photos/random?client_id=yhK7eJ2dsVT5qj7qsBcX5XFRbCEdoLJ2wqVvjbqBMh4&&count=10"
    )
      .then((res) => res.json())
      .then((data) => {
        setImages((prev) => [...prev, ...data]);
        setLoading(false);
      });}
  }

 
  window.onscroll = function () {
    var limit = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
  
    if (
      window.innerHeight + Math.ceil(document.documentElement.scrollTop) ===
      limit
    ) {
      getFirstPhotos();
    }
  };


  return (
    <div className="App">
      <div className="feed">
       <RandomFeed images = {images} />
      </div>
      {/* {
        testing && testing.length > 0 &&
        testing.map(item => {
          return(
          <div className="test">
              {item.text}
          </div>
          )
        })
          
      } */}
      {loading && <p>Loading....</p>}
    </div>
  );
}

export default Feed;
