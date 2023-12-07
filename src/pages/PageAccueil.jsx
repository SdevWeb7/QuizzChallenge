import iconHTML from '../assets/images/icon-html.svg'
import iconCSS from '../assets/images/icon-css.svg'
import iconJS from '../assets/images/icon-js.svg'
import iconAcc from '../assets/images/icon-accessibility.svg'
import useIcon from "../components/useIcon.jsx";

const PageAccueil = ({setPage, handleDarkMode, darkMode}) => {

   const {sunIcon, moonIcon} = useIcon(5, darkMode ? 'dark' : '')

   return (
      <>
         <div className="header">
            <p className="categorie"></p>
            <div className="theme" onClick={handleDarkMode}>
               <img src={sunIcon} alt="a" width={24} height={15} />
               <div className="theme-slider-background"><div className={`theme-slider ${darkMode ? 'dark-mode-activated' : ''}`}></div></div>
               <img src={moonIcon} alt="a" width={24} height={15} />
            </div>
         </div>

         <div className={'container'}>
            <div className="texte">
               <h1 className={'welcome'}>Welcome to the</h1>
               <h1 className={'title'}>Frontend Quiz!</h1>
               <p className={'pick'}>Pick a subject to get started</p>
            </div>

            <div className="choices">
               <div className="choice" onClick={() => setPage(0)}>
                  <img src={iconHTML} alt="a" width={40} height={40} style={{backgroundColor: '#FFF1E9'}} />
                  <p className={'choice-p'}>HTML</p>
               </div>

               <div className="choice" onClick={() => setPage(1)}>
                  <img src={iconCSS} alt="a" width={40} height={40} style={{backgroundColor: '#E0FDEF'}} />
                  <p className={'choice-p'}>CSS</p>
               </div>

               <div className="choice" onClick={() => setPage(2)}>
                  <img src={iconJS} alt="a" width={40} height={40} style={{backgroundColor: '#EBF0FF'}} />
                  <p className={'choice-p'}>Javascript</p>
               </div>

               <div className="choice" onClick={() => setPage(3)}>
                  <img src={iconAcc} alt="a" width={40} height={40} style={{backgroundColor: '#F6E7FF'}} />
                  <p className={'choice-p'}>Accessibility</p>
               </div>

            </div>
         </div>
      </>
      )
}

export default PageAccueil;