import iconCorrect from "../assets/images/icon-correct.svg";
import iconIncorrect from "../assets/images/icon-incorrect.svg";
import useIcon from "./useIcon.jsx";

const Quizz = ({selected, answering, questions, handleAnsw, index, indexOfAnsw, question, handleNext, handleSelection, letters, page, darkMode, handleDarkMode}) => {

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

         <div className={'container'}>

            <div className="texte">
               <p className={'pick'} style={{marginBottom: '20px'}}>Question {index} of {questions.length}</p>
               <progress id="progress" max={questions.length} value={index}></progress>
               <h1 className={'welcome'} style={{marginRight: '20px'}}>{question.question}</h1>
            </div>

            <div className="choices">
               {Object.keys(question).length > 0 && question.options.map((value, key) => {
                  return (
                     <div
                        key={key}
                        className={`
                        choice ${selected == key + 1 ? 'selected' : ''}
                        ${!answering && key == indexOfAnsw ? 'correct' : ''} ${!answering && key == selected - 1  && selected - 1 != indexOfAnsw ? "incorrect" : ""} ${!answering ? 'not-hoverable' : ''}
                       `} onClick={() => handleSelection(key + 1)}>

                        <p className="choice-number">{letters[key]}</p>

                        {Object.keys(question).length > 0 && <p className={'choice-p'}>{value}</p>}

                        {!answering && indexOfAnsw == key && <img src={iconCorrect} alt="a" width={40} height={40} className={'icon-correct'} />}

                        {!answering && key == selected - 1 && selected - 1 != indexOfAnsw && <img src={iconIncorrect} alt="a" width={40} height={40} className={'icon-incorrect'} />}
                     </div>
                  )
               })
               }

               {answering && <button className={`button-submit ${selected < 0 || selected > 4 ? 'disabled' : ''}`} disabled={selected < 0 || selected > 4} onClick={handleAnsw}>Submit Answer</button>}

               {index < questions.length && !answering && <button className={'button-submit'} onClick={handleNext}>Next Question</button>}

            </div>
         </div>
      </>
   )
}

export default Quizz;