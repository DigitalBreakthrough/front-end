import React, { useContext, useEffect } from "react";
import { FileContext } from "../../../context/FilesContext";
import FileElem from "./FileElem";
import PicPlaceholder from "../../../assets/images/picturePlaceholder.png"

export default function ProgressStage() {
  const { value } = useContext(FileContext);
  
  const handleSelectChange = (selected) => {
    const filesSequence = value.files;
    filesSequence.camName = selected;
    value.setFiles(filesSequence);
    console.log(filesSequence);
  }

  return (
    <div
      className="files-container"
      style={{
        display: value.files === null ? "none" : "flex",
      }}
    >
      <div className="camera-selector">
        Выберите камеру :
          <select className="dropdown" onChange={(e) => handleSelectChange(e.target.value)}>
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
      {value.files !== null &&
        Array.from(value.files.files).map((file, idx) => {
          console.log(value.files.files);
          const truncateName = file.name.length <= 32 ? file.name : file.name.slice(0, 32) + '...';
          return <FileElem key={idx} index={idx} previewUrl={PicPlaceholder} fileName={truncateName} fileSize={(file.size/1048576).toFixed(1)} />;
        })}
    </div>
  );
}
