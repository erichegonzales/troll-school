
const AnswerChoice = ({answer, correctAnswer, cbfunction}) => {

    return (
        <div>
            <h2 onClick={cbfunction}>{answer}</h2>
           
        </div>
    )

}

export default AnswerChoice;