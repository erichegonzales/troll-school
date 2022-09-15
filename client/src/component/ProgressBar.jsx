const ProgressBar = ({question}) => {

    
    const measure = question * 33
   

    const fillerStyles = {
    height: '100%',
    width: `${measure}%`,
    backgroundColor: "red",
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out'
  }


  return (
    <div className="containerStyles">
      <div style={fillerStyles} className="fillerStyles">
        <span className="labelStyles">{`${measure}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;