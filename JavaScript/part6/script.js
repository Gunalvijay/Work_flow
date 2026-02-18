let timeoutid;

function startTimer(){
    timeoutid = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutid)
    console.log("CLEARED");
}