import React from 'react'

export default function TimeCode(props) {
  const { previewUrl, status, time, percentBody } = props;

  const getStatusString = (status) => {
    switch (status) {
      case 0:
        return "Нарушений нет";
      case 1:
        return "Нарушен периметр";
      case 2:
        return "Опасность!";
      default:
        return "Не определено";
    }
  };

  

  const getColorByPercentage = (percentage) => {
    if (percentage >= 0 && percentage <= 20) {
        // Интерполяция цвета от зеленого (0%) до красного (20%)
        let green = Math.round(255 - (percentage / 20) * 255);
        let red = Math.round((percentage / 20) * 255);
        return `rgb(${red}, ${green}, 0)`;
    } else {
        // Все значения больше 20% будут красными
        return 'rgb(255, 0, 0)';
    }
    }

    const percentStyle = {
      background: getColorByPercentage(percentBody)
    }

  return (
    <div className='timecode'>
        {/* <img src={previewUrl} alt="" /> */}
        <div className='timecode-info'>
            <div>{getStatusString(status)}</div>
            <div className='meta'>
              {/* <div>{time}</div> */}
              <div style={percentStyle} className='percent'>{percentBody}%</div>
            </div>
        </div>
    </div>
  )
}
