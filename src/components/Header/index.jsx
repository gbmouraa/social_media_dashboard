import React, { useState, useEffect } from "react"

function Header() {
  const [theme, setColorTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setColorTheme('dark')
    } else {
      setColorTheme('light')
    }

    localStorage.setItem('theme', JSON.stringify(theme))
  }

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    htmlElement.classList.remove('light', 'dark')

    const themeStorage = localStorage.getItem('theme')
    const savedTheme = JSON.parse(themeStorage)

    if (savedTheme) htmlElement.classList.add(savedTheme)

  }, [theme])

  return (
    <header className="pt-8 px-5 pb-24  font-inter bg-pale-blue dark:bg-dark-blue-head rounded-b-[20px] transition-all duration-300">
      <div className="md:flex max-w-[1412px] mx-auto">
        <div className="border-b md:border-none border-toggle dark:border-zinc-600 pb-4 flex-grow">
          <h1 className="text-[26px] font-bold text-dark-blue dark:text-white">Social Media Dashboard</h1>
          <p className="text-grayish-blue dark:text-desaturated-blue font-bold">Total Followers: 23,004</p>
        </div>
        <div className="pt-4 flex justify-between">
          <p className="text-grayish-blue dark:text-desaturated-blue font-bold">Dark Mode</p>
          <label htmlFor="dark-mode" className='w-12 h-6 md:ml-3 rounded-full relative cursor-pointer bg-toggle dark:bg-toggle-gradient
           hover:bg-toggle-gradient'>
            <input type="checkbox" id="dark-mode" className="peer sr-only" onClick={toggleTheme} />
            <span className={`absolute w-[18px] h-[18px] rounded-full top-[3px] dark:left-[3px] right-[3px] bg-white dark:bg-dark-blue transition-all duration-500`}></span>
          </label>
        </div>
      </div>
    </header>
  )
}


export default Header