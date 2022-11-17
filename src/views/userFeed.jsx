import React, {useState, useEffect, useContext} from 'react'
import { useLocation } from 'react-router-dom'
import RandomFeed from '../components/randomFeed'
import ListFeed from '../components/ListFeed'
import { FaList, FaBuromobelexperte } from "react-icons/fa";
import { ThemeContext } from '../App';


import './userFeed.css'

const UserFeed = () => {

  const {toggleTheme, theme} = useContext(ThemeContext)

    let location = useLocation()
    let userr = location.pathname.split('/')[2]
    const [userName, setUserName] = useState (userr)
    const [user, setUser] = useState();
    const [userImages, setUserImages] = useState([]);
    const [page, setPage] = useState(1)
    const [list, setList] = useState(false)

  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    getUser();
  }, [userName]);

  useEffect(() => {
    getUserPosts();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    console.log(userImages);
  }, [userImages]);

  async function getUser() {
    if(userName){
    fetch(
      `https://api.unsplash.com/users/${userName}?client_id=yhK7eJ2dsVT5qj7qsBcX5XFRbCEdoLJ2wqVvjbqBMh4`
    )
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });}
  }

  async function getUserPosts() {
    if(userName){
    fetch(
      `https://api.unsplash.com/users/${userName}/photos?client_id=yhK7eJ2dsVT5qj7qsBcX5XFRbCEdoLJ2wqVvjbqBMh4&per_page=30&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserImages((prev) => [...prev, ...data]);
        setLoading(false);
      });
      setPage(prev => prev + 1)
    }
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
      getUserPosts();
    }
  };


  return (
    <div id = {theme}>
    {
        user &&
        <div className='userPage'>
            <div className="bg">
            <div className="banner">
            <p className='userName'>{userName}</p>
            <div className="userImage">
            <img src={user.profile_image.large} alt="" />
            </div>
            <p>Photos : {user.total_photos}</p>
            </div>
           <div className="userContent">
            <p>{user.name}</p>
            <p>{user.bio}</p>
            <div className="viewToggle">
                <FaBuromobelexperte onClick = {() => setList(false)} />
                <FaList onClick = {() => setList(true)}/>
            </div>
            </div>
            </div>
           
            {list ? 
            <div className="listUserFeed">
            <ListFeed images = {userImages} />
            </div> :
             <RandomFeed images = {userImages} />
            }
        </div>
    }
    </div>
  )
}

export default UserFeed