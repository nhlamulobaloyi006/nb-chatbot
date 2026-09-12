import { replies } from "./replies.js";

const inputValue = document.getElementById('inputValue');
const submitBtn = document.getElementById('submitBtn');

const messagesDiv = document.querySelector('.messages');
const sentDiv = document.querySelector('.sent');
const replyDiv = document.querySelector('.reply');

const sendValue = document.getElementById('sendValue');
const replyValue = document.getElementById('replyValue');

let storeSentMessage = []

function validate() {
    if (inputValue.value.trim().length === 0) {
        submitBtn.disabled = true;
        submitBtn.style.cursor = "not-allowed";
    }
    else if (inputValue.value.trim().length > 0) {
        submitBtn.disabled = false;
        submitBtn.style.cursor = "pointer";
    }
}

function disableBtn() {
    submitBtn.disabled = true;
    submitBtn.style.cursor = "not-allowed";
}

disableBtn();

function enableBtn() {
    submitBtn.disabled = false;
    submitBtn.style.cursor = "pointer";
}

function generateReplies() {
    let randomizeReply = Math.floor(Math.random() * replies.length)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < replies.length; i++) {
                const replyDiv = document.createElement('div');
                const replyMsgDiv = document.createElement('div');
                const replyMsgPar = document.createElement('p');

                replyDiv.className = "reply";

                replyMsgDiv.className = "replyMessage";
                replyMsgDiv.classList.add("active");
                replyMsgPar.textContent = replies[randomizeReply];
                replyMsgPar.style.overflowWrap = "break-word";

                

                replyDiv.appendChild(replyMsgDiv);
                replyMsgDiv.appendChild(replyMsgPar);
                messagesDiv.appendChild(replyDiv);

               replyMsgDiv.scrollIntoView({
                 behavior: "smooth",
                  block: "end"
               });
                break;
                
            }        
        },1000);
        resolve("done")
    })
}


async function renderReply() {
    const replyMsg = await generateReplies();
    loading();
    
}

function renderTask() {
    const value = inputValue.value;
    storeSentMessage = [value]

    for (let i = 0; i < storeSentMessage.length; i++) {
        const sentDiv = document.createElement('div');
        const sentMsgDiv = document.createElement('div');
        const sentMsgPar = document.createElement('p');

        sentDiv.className = "sent"

        sentMsgDiv.className = "sentMessage";
        sentMsgDiv.classList.add("active");
        sentMsgPar.textContent = storeSentMessage[0];
        sentMsgPar.style.overflowWrap = "break-word";

        

        sentDiv.appendChild(sentMsgDiv)
        sentMsgDiv.appendChild(sentMsgPar);
        messagesDiv.appendChild(sentDiv);

        sentMsgDiv.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    }



}

function loading() {

    const replyDiv = document.createElement('div');
    const replyMsgDiv = document.createElement('div');
    const replyMsgPar = document.createElement('p');

        replyDiv.className = "reply"

        replyMsgDiv.className = "replyMessage";
        replyMsgDiv.classList.add("active");
        replyMsgPar.textContent = "Typing....";
        setTimeout(()=>{
            replyDiv.remove();
        }, 1000)
        replyMsgPar.style.overflowWrap = "break-word";

        

        replyDiv.appendChild(replyMsgDiv)
        replyMsgDiv.appendChild(replyMsgPar);
        messagesDiv.appendChild(replyDiv);

        replyMsgDiv.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });

}


inputValue.addEventListener('input', function(e){
    const value = e.target.value;
    

    if (value.trim().length === 0) {
        disableBtn();
    }
    else if (value.trim().length > 0){
        enableBtn();
    }
});

submitBtn.addEventListener('click', function(){
    const clearInput = document.getElementById('inputValue');
    
    renderTask();
    renderReply();
    console.log(storeSentMessage)

    clearInput.value = '';
    validate();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        submitBtn.click();
    }
});



