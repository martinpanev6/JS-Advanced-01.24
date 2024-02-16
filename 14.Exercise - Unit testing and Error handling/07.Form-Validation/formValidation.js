function validate () {
    document.getElementById(`company`).addEventListener(`change`, () =>{
        let companyInfo = document.getElementById(`companyInfo`);
        if(document.getElementById(`company`).checked == false){
            companyInfo.style.display = `none`;
        } else  {
            companyInfo.style.display = `block`;
        }
    });
    document.getElementById(`submit`).addEventListener(`click`, onClick)
 
    function onClick(e){
        e.preventDefault();
        invalidFields =[];
 
        let checkBox = document.querySelector(`#company`);
        let username  = document.getElementById(`username`);
        let usernamePattern = /^[A-Za-zZ0-9]+$/;
        if(!usernamePattern.test(username.value) || username.value.length < 3 || username.value.length > 20){
            invalidFields.push(username);
        }
 
        let email = document.getElementById(`email`);
        let emailPatern = /.*@.*\..*/;
        if(!emailPatern.test(email.value)){
            invalidFields.push(email);
        };
 
        let password = document.getElementById(`password`);
        let rePassword = document.getElementById(`confirm-password`);
        let passwordlPatern = /^[\w]+$/;
        if(!passwordlPatern.test(password.value) || rePassword.value !== password.value || password.value.length < 5 || password.value.length > 15) {
            invalidFields.push(password);
            invalidFields.push(rePassword);
        };
 
        if(checkBox.checked){
            let companyId = document.getElementById(`companyNumber`);
            //let companyPattern = /^[0-9]+{4}$/
            if(companyId.value < 1000 ||companyId.value > 9999){
                invalidFields.push(companyId)
            }
        };
        if(invalidFields.length == 0) {
            document.querySelector(`#valid`).style.display = `block`;
        }else {
            document.querySelector(`#valid`).style.display = `none`;
            invalidFields.forEach(field => {
            field.style.borderColor = `red`;
            });
 
        };
    };
    
};