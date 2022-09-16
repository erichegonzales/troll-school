import PopUp from "./PopUp";
const AnswerChoice = ({answer, cbfunction, pop, lessonComplete}) => {

    return (
        <>
        {pop && <PopUp cbfunction={cbfunction} lessonComplete={lessonComplete}/>} 
        <div className='answer-choice' onClick={cbfunction}>{answer}   </div>
        </>
    )
    
}

export default AnswerChoice;