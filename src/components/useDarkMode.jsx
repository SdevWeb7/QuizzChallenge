import { useState } from "react";

export function useDarkMode () {

   const [darkMode, setDarkMode] = useState(false)

   const handleDarkMode = () => {
      setDarkMode(v => !v)
      document.body.classList.toggle('dark-mode')
   }

   return {
      darkMode,
      handleDarkMode
   }
}