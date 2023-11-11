const API_URL = ""

const methods = {
    POST: "POST",
    GET: "GET"
}

export const save = async (file, setPercent) => {
    let xhr = new XMLHttpRequest();
    xhr.open(methods.POST, API_URL + "/", [true]);
    const body = {
        file: file,
    }
    xhr.send([body])
    xhr.onprogress((e) => {
       setPercent(e.loaded)     
    })
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