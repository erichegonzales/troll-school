import { useState, useEffect } from 'react'
import AnswerChoice from './AnswerChoice'
import { useParams } from 'react-router-dom'





const LessonTemplate = () => {

    const [question, setQuestion] = useState(0)
    const [answers, setAnswers] = useState(['answer1', 'answer2', 'answer3', 'answer4'])
    const [correctAnswer, setCorrectAnswer] = useState(['correct answer'])
    const [lessonComplete, setLessonComplete] =useState(false)
    const [questionArray, setQuestionArray] =useState([])

    const { id } = useParams()


    useEffect(() => {
        const getQuestions = async () => {
          let req = await fetch(`http://localhost:3000/quizzes/${id}`)
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
          
        }
        getQuestions()
      }, [id])
    
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function correct() {
        // alert("correct")
        if (question < questionArray.length - 1) {
            setQuestion(question + 1)
        }
        else {
          alert('congrats!')
          setLessonComplete(true)
        }
    }

    function incorrect() {
        alert("incorrect")
    }

    // if question array number is less than questions.length, load question +1 else 
    // add to progress array in Profile 
 

    return (
        <div className="lesson-template">
            <div>
                <h1  className="question">{questionArray[question]}</h1>
                <div className="answers">
                    <ul>
                        <li><AnswerChoice answer={answers[question].choice1}  cbfunction={incorrect} /></li>
                        <li><AnswerChoice answer={answers[question].choice2}  cbfunction={incorrect} /></li>

                        <li><AnswerChoice answer ={correctAnswer[question]} cbfunction={correct}/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LessonTemplate;