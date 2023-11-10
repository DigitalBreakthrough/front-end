export const addHistory = (data) => {
    if(getHistory() === null) {
        let history = [];
        history.push(data);
        console.log(history);
        localStorage.setItem("history", JSON.stringify(history));
    } else {
        let history = getHistory();
        history.push(data);
        localStorage.setItem("history", JSON.stringify(history));
        console.log(history);
    }
}

export const getHistory = () => {
    return JSON.parse(localStorage.getItem("history"));
}

export const deleteNote = (index) => {
    if(getHistory() !== null) {
        let history = getHistory();
        history.splice(index, 1);
        localStorage.setItem("history", JSON.stringify(history));
        console.log(history);
    }
}