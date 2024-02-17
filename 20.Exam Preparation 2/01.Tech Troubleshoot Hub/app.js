window.addEventListener('load', solution);

function solution() {

    const formRef = document.querySelector("form");
    formRef.addEventListener("submit", onSubmitEvent);

    const employeeRef = document.getElementById("employee");
    const categoryRef = document.getElementById("category");
    const urgencyRef = document.getElementById("urgency");
    const teamRef = document.getElementById("team");
    const descriptionRef = document.getElementById("description");

    const previewUlRef = document.querySelector(".preview-list");
    const pendingUlRef = document.querySelector(".pending-list");
    const resolvedUlRef = document.querySelector(".resolved-list")
    const btnAddRef = document.getElementById("add-btn");

    function onSubmitEvent(e){
      e.preventDefault();

      let employee = employeeRef.value;
      let category = categoryRef.value;
      let urgency = urgencyRef.value;
      let team = teamRef.value;
      let description = descriptionRef.value;

      if(!employee || !category || !urgency || !team || !description){
        return;
      }

      let preview = createPreview(employee, category, urgency, team, description);
      previewUlRef.appendChild(preview);
      toggleButtonAdd();
      formRef.reset();
    }

    function createPreview(employee, category, urgency, team, description){
        let li = document.createElement("li");
        li.classList.add("problem-content");
        let innerHTMLContent = "<article>";
        innerHTMLContent += `<p>From: ${employee}</p>`;
        innerHTMLContent += `<p>Category: ${category}</p>`;
        innerHTMLContent += `<p>Urgency: ${urgency}</p>`;
        innerHTMLContent += `<p>Assigned to: ${team}</p>`;
        innerHTMLContent += `<p>Description: ${description}</p>`;
        innerHTMLContent += `</article>`;
        li.innerHTML += innerHTMLContent;

        let editBtn = createButton("edit-btn", "Edit");
        let continueBtn = createButton("continue-btn", "Continue");

        editBtn.addEventListener("click", onEdit);
        continueBtn.addEventListener("click", onContinue);

        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        return li;
    }

    function createButton(classes, text){
        let btn = document.createElement("button");
        btn.classList.add(classes);
        btn.textContent = text;
        return btn;
    }

    function toggleButtonAdd(){
      btnAddRef.disabled = !btnAddRef.disabled;
    }

    function onEdit(e){

      let articleChildren = e.currentTarget.parentElement.querySelector("article").children;

      let employeeData = articleChildren[0].textContent.split(": ");
      let categoryData = articleChildren[1].textContent.split(": ");
      let urgencyData = articleChildren[2].textContent.split(": ");
      let teamData = articleChildren[3].textContent.split(": ");
      let descriptionData = articleChildren[4].textContent.split(": ");

      let employee = employeeData[1];
      let category = categoryData[1];
      let urgency = urgencyData[1];
      let team = teamData[1];
      let description = descriptionData[1];

      employeeRef.value = employee;
      categoryRef.value = category;
      urgencyRef.value = urgency;
      teamRef.value = team;
      descriptionRef.value = description;

      toggleButtonAdd();
      previewUlRef.innerHTML = "";
    }

    function onContinue(e){
      let li = e.currentTarget.parentElement;
      let btns = li.querySelectorAll("button");

      btns[0].remove();
      btns[1].remove();

      let resolveBtn = createButton("resolve-btn", "Resolved");
      resolveBtn.addEventListener("click", onResolve);

      li.appendChild(resolveBtn);
      pendingUlRef.appendChild(li);
    }

    function onResolve(e){
        let li = e.currentTarget.parentElement;
        let btn = li.querySelector("button");

        btn.remove();

        let clearBtn = createButton("clear-btn", "Clear");
        clearBtn.addEventListener("click", onClear);

        li.appendChild(clearBtn);
        resolvedUlRef.appendChild(li);
    }

    function onClear(e){
        e.currentTarget.parentElement.remove();
        toggleButtonAdd()
    }
}


    
    
