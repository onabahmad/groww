import "./App.css";
import NewsFeed from "./views/newsFeed";
import UserFeed from "./views/userFeed";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Header from "./components/header";

export const ThemeContext = createContext(null) 

function App() {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () =>{
    console.log(theme)
    let set;
    if(theme === "light"){
      set = "dark"
    }else{
      set = 'light'
    }
    setTheme(set)
  }

  return(
    <>
  <ThemeContext.Provider value = {{theme, toggleTheme}}>
<Header />
  <Routes>
    <Route path="/" element ={ <NewsFeed />}>
   
    </Route>
    <Route path="/users/:userId" element ={ <UserFeed/>}>
    </Route>
  </Routes>
  </ThemeContext.Provider>
  </>
  )
}

export default App;
