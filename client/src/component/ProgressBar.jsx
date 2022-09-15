const ProgressBar = ({question, questionArray}) => {

    const arrayLength = questionArray.length
    const measure = question * 30
    console.log(arrayLength)

    const fillerStyles = {
    height: '100%',
    width: `${measure}%`,
    backgroundColor: "red",
    borderRadius: 'inherit',
    textAlign: 'right'
  }


  return (
    <div className="containerStyles">
      <div style={fillerStyles} className="fillerStyles">
        <span className="labelStyles">{`${question}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;