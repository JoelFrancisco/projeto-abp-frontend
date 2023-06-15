import React, {useState} from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const handleButtonClickIncrease = () => {
    if (progress < 100) {
      setProgress(progress + 1);
    }
  };

  const handleButtonClickDecrease = () => {
    if (progress > 0) {
      setProgress(progress - 1);
    }
  };

  const handleButtonReset = () => {
    setProgress(0)
  }

  const handleButtonFill = () => {
    setProgress(100)
  }

  const getColor = () => {
    if (progress < 16) {
      return "#ff0000";
    } else if (progress < 30) {
      return "#ffff00";
    } else {
      return "#32cd32";
    }
  };
  
  return (
  <div className="container">
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{width: `${progress}%`, backgroundColor: getColor() }}>
        {" "}
      </div>
    </div>
    <div className="progress-label">{progress}%</div>
    <button onClick={handleButtonClickIncrease}>Aumentar</button>
    <button onClick={handleButtonClickDecrease}>Diminuir</button>
    <button onClick={handleButtonReset}>Reiniciar</button>
    <button onClick={handleButtonFill}>Encher</button>
  </div>
  )
};