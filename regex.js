var btn = false;

changeBtnCouleur(true);

function verifUsername() {
    
    var username = document.getElementById('username').value

    // console.log(username.match(/^[a-zA-Z]{3,20}$/) != null);

    return username.match(/^[a-zA-Z]{3,20}$/) != null
        
    
}


function verifEmail() {
    
    var mail = document.getElementById('mail').value

    // console.log(mail.match(/^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) != null);
    return mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) != null
    
}


function verifPassword() {
    
    var password = document.getElementById('password').value
    // console.log(password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$/) != null);
    return password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$/) != null
    
}


function verifConfPassword() {
    
    var password = document.getElementById('password').value
    var confPassword = document.getElementById('confPassword').value

    // console.log(password == confPassword);
    return password == confPassword
    
}

 

function allValide(){
    var password = document.getElementById('password').value
    var confPassword = document.getElementById('confPassword').value
    
    var oldSwitch = getElementById('animationWindow')

    console.log("fdffffffffffff" + verifUsername() && verifEmail() && verifPassword() && verifConfPassword());

    if(verifUsername() && verifEmail() && verifPassword() && verifConfPassword()){
        changeBtnCouleur(false);
    }else{
        changeBtnCouleur(true);
    }

}







