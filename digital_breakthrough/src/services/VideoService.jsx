const API_URL = "https://b10b-78-29-79-177.ngrok-free.app/attachments"

const methods = {
    POST: "POST",
    GET: "GET"
}

export const save = (files) => {
    // let xhr = new XMLHttpRequest();
    // xhr.open(methods.POST, API_URL + "/", [true]);
    // const body = {
    //     file: file,
    // }
    // xhr.send([body])
    // xhr.onprogress((e) => {
    //    setPercent(e.loaded)     
    // })
    const data = new FormData();
    data.append("camName", files.camName);
    data.append("file", files.files[0]);
    //console.log(data.get('camName'));
    const options = {
        method: methods.POST,
        body: data,
    }
    return fetch(API_URL + "/uploads", options)
        .then(response => response.json())
        .then(response => response)
        .catch(error => console.log(error));
}



export const upload = async (setPercent) => {
    return await fetch(API_URL + "/")
            .then(async (response) => {
                const reader = response.body.getReader();
                const contentLength = +response.headers.get('Content-Length');
                let receivedLength = 0;
                let chunks = [];
                while(true) {
                    const {done, value} = await reader.read();

                    if (done) {
                        break;
                    }

                    chunks.push(value);
                    receivedLength += value.length;

                    setPercent(receivedLength / contentLength * 100);
                }
                let chunksAll = new Uint8Array(receivedLength);
                let position = 0;
                for(let chunk of chunks) {
                    chunksAll.set(chunk, position); 
                    position += chunk.length;
                }

                return new TextDecoder("utf-8").decode(chunksAll);}
            )
            .catch();
}