var btn = false;

changeBtnCouleur(true);

function verifUsername() {
    
    var username = document.getElementById('username').value

    
    if (!username.match(/^[a-zA-Z]{3,20}$/)){
        changeBtnCouleur(true);
    } 
    allValide();
}


function verifEmail() {
    
    var mail = document.getElementById('mail').value

    if (!mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)){
        changeBtnCouleur(true);
    }
    allValide();

}


function verifPassword() {
    
    var password = document.getElementById('password').value

    if (!mail.match(/^^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
        changeBtnCouleur(true);
    }
    allValide();
}


function verifConfPassword() {
    
    var password = document.getElementById('password').value
    var confPassword = document.getElementById('confPassword').value

    if (password != confPassword){
        changeBtnCouleur(true);
    }
    allValide();
}



function allValide(){
    var password = document.getElementById('password').value
    var confPassword = document.getElementById('confPassword').value
    console.log(document.getElementById('mail').value);
    if (document.getElementById('username').value != "" && document.getElementById('mail').value != "" && document.getElementById('password').value != "" && document.getElementById('confPassword').value != "" ) {
        if (password == confPassword){
            changeBtnCouleur(false);
        }
    }

}




