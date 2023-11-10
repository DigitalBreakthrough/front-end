import React from 'react'
import DeleteImage from '../../assets/images/delete.png'

export default function HistoryElem(props) {
  const { previewUrl, date, status, bodyPercent } = props;

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
    <div className = 'history-elem'>
      <img src={previewUrl} alt="" />
      <div>
        <h3>{date}</h3>
        <div>{getStatusString(status)}</div>
        <div className='body-percent'>{bodyPercent}%</div>
      </div>
      <button><img src={DeleteImage} alt="" /></button>
    </div>
  )
}
