import { useState } from "react";
import PageAccueil from './pages/PageAccueil.jsx'
import PageQuizz from './pages/PageQuizz.jsx'
import { useDarkMode } from "./components/useDarkMode.jsx";

function App() {

   const [page, setPage] = useState(4);
   const {handleDarkMode, darkMode} = useDarkMode()

  return (
     <>
       {page == 4 && <PageAccueil page={page} setPage={setPage} handleDarkMode={handleDarkMode} darkMode={darkMode} />}
       {page != 4 && <PageQuizz handleDarkMode={handleDarkMode} darkMode={darkMode} page={page} setPage={setPage} />}
     </>
  )
}

export default App;
