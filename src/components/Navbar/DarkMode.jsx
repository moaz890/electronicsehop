import React, { useEffect, useState } from 'react'
import lightMode from "../../assets/website/light-mode-button.png"
import darkMode from "../../assets/website/dark-mode-button.png"

const DarkMode = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || 'light'
    );

    const element = document.documentElement;
    
    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark'){
            element.classList.add("dark");
            element.classList.add("dark");
        }else {
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    })
  return (
    <div className='relative'>
        <img src={lightMode} alt="" 
            className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />
        <img src={darkMode} alt="" 
            className={`w-12 cursor-pointer ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />
    </div>
  )
}

export default DarkMode;
