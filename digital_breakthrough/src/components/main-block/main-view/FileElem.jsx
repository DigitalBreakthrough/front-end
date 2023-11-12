import React, { useContext } from 'react'
import { FileContext } from '../../../context/FilesContext';

export default function FileElem(props) {
  const { value } = useContext(FileContext);
  const { previewUrl, fileName, fileSize, loadProgress, totalProgress, index } = props;

  

  const calculateProgress = (loadProgress)=>{
    return loadProgress/totalProgress;
  }
  return (
    <div className='file-element'>
      <img src={previewUrl} alt="" />
      <div className='file-info'>
        <div className='file-meta'>
        <div className='file-meta'>
          <div>{fileName}</div>
          <div className='ghost'>{fileSize} МБ</div>
        </div>
        </div>

        {
          loadProgress === undefined ?
          <div className='ghost'>
            Файл выбран
          </div>
          :
          <div className='loader'>
            <div className='loader-completed' style={{width: `${calculateProgress(loadProgress)}%`}}></div>
          </div>
        }
      </div>
    </div>
  )
}
