function solve() {
    const formRef = document.querySelector("form");
    const [addTask, openTask, inProgressTask, completeTask] = document.querySelectorAll("section");

    btnHandlerEnum ={
        start: function(e){
            let currentArticle = e.target.parentElement.parentElement;
            btnRemoval(e.target.parentElement);
            currentArticle.innerHTML += getBtnPartial({classes: "red", text: "Delete"},{classes: "orange", text: "Finish"});
            let btns = currentArticle.querySelectorAll("button");
            addEventListenerToButton(btns)
            inProgressTask.children[1].appendChild(currentArticle);
        },
        finish: function(e){
            let currentArticle = e.target.parentElement.parentElement;
            btnRemoval(e.target.parentElement);
            completeTask.children[1].appendChild(currentArticle);
        },
        delete: function(e){
            e.target.parentElement.parentElement.remove();
        }
    };

    formRef.addEventListener("submit", onSubmitHandler);

    function onSubmitHandler(e){
        e.preventDefault();
        let formElements = e.target.elements;
        let taskName = formElements[0].value;
        let desc = formElements[1].value;
        let data = formElements[2].value;
        if(!taskName || !desc || !data){
            return;
        }
        createArticle(taskName, desc, data);
        clearForm(formElements);
    }

    function clearForm(formElements){
        formElements[0].value = "";
        formElements[1].value = "";
        formElements[2].value = "";
    }

    function createArticle(taskName, desc, data){
        let newArticle = document.createElement("article");
        newArticle.innerHTML = getArticleTemp(taskName, desc, data);
        openTask.children[1].appendChild(newArticle);
        let btns = newArticle.querySelectorAll("button");
        addEventListenerToButton(btns)
    }

    function clickHandler(e){
        let currentAction = e.target.innerText.toLowerCase();
        btnHandlerEnum[currentAction](e);
    }

    function addEventListenerToButton(btns){
        Array.from(btns).forEach(btn => btn.addEventListener("click", clickHandler));
    }

    function getArticleTemp(name, desc, data){
        return `<h3>${name}</h3>` +
                `<p>Description: ${desc}</p>` +
                `<p>Due Date: ${data}</p>` +
                getBtnPartial({classes: "green", text: "Start"}, {classes: "red", text: "Delete"})
    }

    function getBtnPartial(btn1, btn2){
        return `<div class="flex">` +
                    `<button class=${btn1.classes}>${btn1.text}</button>` +
                    `<button class=${btn2.classes}>${btn2.text}</button>` +
                `</div>`
    }

    function btnRemoval(target){
        target.remove();
    }
}