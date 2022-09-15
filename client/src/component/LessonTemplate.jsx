import { useState, useEffect } from 'react'
import AnswerChoice from './AnswerChoice'
import { useParams } from 'react-router-dom'
import ProgressBar from './ProgressBar'




const LessonTemplate = () => {

    const [pop, setPop] = useState(false)
    const [question, setQuestion] = useState(0)
    const [bar, setBar] = useState(0)
    const [answers, setAnswers] = useState(['answer1', 'answer2', 'answer3', 'answer4'])
    const [correctAnswer, setCorrectAnswer] = useState(['correct answer'])
    const [lessonComplete, setLessonComplete] =useState(false)
    const [questionArray, setQuestionArray] =useState([])
    const [quizId, setQuizId] = useState(0)
    const { id, quid } = useParams()

    useEffect(() => {
        const getQuestions = async () => {
          let req = await fetch(`http://localhost:3000/courses/${id}/quiz/${quid}`)
          let res = await req.json()
          setQuestionArray(res.questions.map((ques) => {
            return ques.content
          }))
          setCorrectAnswer(res.questions.map((ques) => {
            return ques.correct_answer
          }))
          setAnswers(res.questions.map((ques) => {
            return {choice1: ques.incorrect_answer1, choice2:ques.incorrect_answer2}
          }))
          setQuizId(res.id)
        }
        getQuestions()
      }, [quid, id])
    

    // function getRndInteger(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }

    function correct() {
        // alert("correct")
        if (question < questionArray.length - 1) {
            setQuestion(question + 1)
            setBar(bar + 1)
        }
        else {
          //alert('congrats!')
          setBar(bar + 1)
          setLessonComplete(true)
          setPop(!pop)
          fetch(`http://localhost:3000/users/1/list/add/${quizId}`, { method: 'POST' })
        }

    }


    function incorrect() {
      //  alert("incorrect")
      setPop(!pop)

    }

    // if question array number is less than questions.length, load question +1 else 
    // add to progress array in Profile 

  const rand1 = Math.floor(Math.random() * 3)
  const rand2 = 1 + Math.floor(Math.random() * 2)

  const choices = [<div><AnswerChoice answer={answers[question].choice1} cbfunction={incorrect} lessonComplete={lessonComplete} pop={pop} /></div>,
    <div><AnswerChoice answer={answers[question].choice2} cbfunction={incorrect} /></div>,
    <div><AnswerChoice answer={correctAnswer[question]} cbfunction={correct} /></div> ]

    return (
        <div className="lesson-template bg-image7">
            <div className='answer-question-container'>
              <div>
                <h1  className="question">{questionArray[question]}</h1>
              </div>
              <div className="answers">
              
              {choices[rand1]}
              {choices[(rand1 + rand2) % 3]}
              {choices[(rand1 + rand2 + rand2) % 3]}

              </div>
            </div>
            <ProgressBar bar={bar}/>
        </div>
    )
}

export default LessonTemplate;