import useIcon from "./useIcon.jsx";

const EndOfQuizz = ({questions, handleRestart, total, page, darkMode, handleDarkMode}) => {

   const {icon, text, style, sunIcon, moonIcon} = useIcon(page, darkMode ? 'dark' : '')

   return (
      <>
         <div className="header">
            <div className="categorie">
               <img src={icon} alt="a" width={40} height={40} style={style} />
               <p className={'choice-p'}>{text}</p>
            </div>
            <div className="theme" onClick={handleDarkMode}>
               <img src={sunIcon} alt="a" width={24} height={15} />
               <div className="theme-slider-background"><div className={`theme-slider ${darkMode ? 'dark-mode-activated' : ''}`}></div></div>
               <img src={moonIcon} alt="a" width={24} height={15} />
            </div>
         </div>

         <div className={'container'} style={{marginTop: "40px"}}>

            <div className="texte">
               <p>Quizz completed</p>
               <h1 className={'welcome'} style={{marginRight: '20px'}}>You scored...</h1>
            </div>

            <div className="choices">
               <div className="result-choices">
                  <img src={icon} alt="a" width={40} height={40} style={style} />
                  <p>{text}</p>
               </div>


               <h1 style={{fontSize: '88px', textAlign: 'center'}}>{total}</h1>
               <p style={{textAlign: 'center'}}>Out of {questions.length - 1}</p>
               <button className={'button-submit'} onClick={handleRestart} style={{marginTop: '40px'}}>Play Again</button>
            </div>

         </div>
      </>
   )
}

export default EndOfQuizz;