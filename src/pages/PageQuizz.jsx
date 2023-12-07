import { useEffect, useState } from "react";
import EndOfQuizz from "../components/EndOfQuizz.jsx";
import Quizz from "../components/Quizz.jsx";

const PageQuizz = ({setPage, page, handleDarkMode, darkMode}) => {

   const [questions, setQuestions] = useState([])
   const [question, setQuestion] = useState({})
   const [index, setIndex] = useState(1)
   const [selected, setSelected] = useState(5)
   const [answering, setAnswering] = useState(true)
   const [indexOfAnsw, setIndexOfAnsw] = useState(5)
   const [total, setTotal] = useState(0)
   const letters = ["A", "B", 'C', "D"]

   useEffect(() => {
      fetch('./data.json').then(r => r.json()).then(datas => {
         setQuestions(datas.quizzes[page].questions)
         setQuestion(datas.quizzes[page].questions[index - 1])
      })
   }, [index])

   useEffect(() => {
      if (indexOfAnsw == selected - 1) {
         setTotal(t => t + 1)
      }
   }, [answering])

   const handleNext = () => {
      setIndex(i => i + 1)
      setAnswering(true)
      setSelected(5)
   }
   const handleRestart = () => {
      setPage(4)
   }
   const handleSelection = (key) => {
      if (!answering) return false;
      setSelected(key)
   }
   const handleAnsw = () => {
      setAnswering(false)
      setIndexOfAnsw(question.options.indexOf(question.answer))
   }

   return (
      index === questions.length ? <EndOfQuizz questions={questions} handleRestart={handleRestart} total={total} page={page} darkMode={darkMode} handleDarkMode={handleDarkMode} /> : <Quizz page={page} selected={selected} questions={questions} question={question} answering={answering} handleAnsw={handleAnsw} index={index} indexOfAnsw={indexOfAnsw} handleSelection={handleSelection} handleNext={handleNext} letters={letters} darkMode={darkMode} handleDarkMode={handleDarkMode} />
   )
}

export default PageQuizz;