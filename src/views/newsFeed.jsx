import React, {useContext} from 'react'
import "../App.css";
import { useState } from "react";
import Feed from "../components/feed";
import Header from '../components/header';
import { ThemeContext } from '../App';

const NewsFeed = () => {

  const {toggleTheme, theme} = useContext(ThemeContext)

  return (
    <div className="App" id={theme}>
      <div className="feed">
      <Feed />
      </div>
    </div>
  );
  }
export default NewsFeed