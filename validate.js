

function verifUsername() {
    
    var username = document.getElementById('username').value

    return username.match(/^[a-zA-Z]{3,5}$/)

    

}


function verifEmail() {
    
    var mail = document.getElementById('mail').value

    return mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)

}


function verifPassword() {
    
    var password = document.getElementById('password').value

    return mail.match(/^^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    
}


function verifConfPassword() {
    
    var password = document.getElementById('password').value
    var confPassword = document.getElementById('confPassword').value

    return password != confPassword
}



function allValide(){
   
    return verifConfPassword() && verifPassword() && verifEmail() && verifUsername()

}



