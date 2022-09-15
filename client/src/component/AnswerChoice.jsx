import PopUp from "./PopUp";
const AnswerChoice = ({answer, cbfunction, pop, lessonComplete}) => {

    return (pop ? <PopUp cbfunction={cbfunction} lessonComplete={lessonComplete}/> : <div><h2 onClick={cbfunction}>{answer}</h2></div>
        
    )

}

export default AnswerChoice;