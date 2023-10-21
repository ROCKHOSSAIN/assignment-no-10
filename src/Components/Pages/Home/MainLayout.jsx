import Footer from "./Footer";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";
import {useState,useEffect} from "react";

const MainLayout = () => {
    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
          setTheme('dark');
        }
        else {
          setTheme('light');
        }
      }, [])
    const [theme,setTheme]= useState("light")
     useEffect(()=>{
          if (theme==='dark') {
               document.documentElement.classList.add('dark');
             } else {
               document.documentElement.classList.remove('dark');
             }
     },[theme]);
     const handleThemeSwitch=()=>{
        setTheme(theme === "dark" ? "light" : "dark");
     }
    return (
        <div>
            <div className={theme === "dark" ? "bg-black" : "bg-white"}>
                
           <Navbar handleThemeSwitch={handleThemeSwitch}></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>     
            </div>
        </div>
    );
};

export default MainLayout;