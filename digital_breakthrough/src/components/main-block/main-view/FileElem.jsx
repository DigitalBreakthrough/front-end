import React from 'react'

export default function FileElem(props) {
  const { previewUrl, fileName, fileSize, loadProgress, totalProgress } = props;

  const handleSelectChange = (selected) => {
    return console.log(selected);
  }

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
        
        <div>
          <select onChange={(e) => handleSelectChange(e.target.value)}>
          <option value="DpR-Csp-uipv-ShV-V1">DpR-Csp-uipv-ShV-V1</option>
          <option value="Pgp-com2-K-1-0-9-36">Pgp-com2-K-1-0-9-36</option>
          <option value="Pgp-lpc2-K-0-1-38">Pgp-lpc2-K-0-1-38</option>
          <option value="Phl-com3-Shv2-9-K34">Phl-com3-Shv2-9-K34</option>
          <option value="Php-Angc-K3-1">Php-Angc-K3-1</option>
          <option value="Php-Angc-K3-8">Php-Angc-K3-8</option>
          <option value="Php-Ctm-K-1-12-56">Php-Ctm-K-1-12-56</option>
          <option value="Php-Ctm-Shv1-2-K3">Php-Ctm-Shv1-2-K3</option>
          <option value="Php-nta4-shv016309-k2-1-7">Php-nta4-shv016309-k2-1-7</option>
          <option value="Spp-210-K1-3-3-5">Spp-210-K1-3-3-5</option>
          <option value="Spp-210-K1-3-3-6">Spp-210-K1-3-3-6</option>
          <option value="Spp-K1-1-2-6">Spp-K1-1-2-6</option>
          </select>
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
