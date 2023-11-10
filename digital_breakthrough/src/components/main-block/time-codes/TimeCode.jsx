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

  return (
    <div className='timecode'>
        <img src={previewUrl} alt="" />
        <div>
            <h3>{getStatusString(status)}</h3>
            <div>{time}</div>
            <div>{percentBody}</div>
        </div>
    </div>
  )
}
