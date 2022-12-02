var btn = false;
var compteur = 0
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

 /* Get into full screen */
function GoInFullscreen(element) {
	if(element.requestFullscreen)
		element.requestFullscreen();
	else if(element.mozRequestFullScreen)
		element.mozRequestFullScreen();
	else if(element.webkitRequestFullscreen)
		element.webkitRequestFullscreen();
	else if(element.msRequestFullscreen)
		element.msRequestFullscreen();
}

function allValide(){
    var password = document.getElementById('password').value
    var confPassword = document.getElementById('confPassword').value
    var oldSwitch = document.getElementById("animationWindow")
    var newSwitch = document.getElementById("newSwitch")

    if(!verifUsername()){
        changeBtnCouleur(true);
        document.getElementById('label_username').style.color = '#e60019';
    } else {
        document.getElementById('label_username').style.color = '#03e9f4';
    }
    if (!verifEmail()){
        changeBtnCouleur(true);
        document.getElementById('label_mail').style.color = '#e60019';

    } else {
        document.getElementById('label_mail').style.color = '#03e9f4';
    }
    if (!verifPassword()){
        changeBtnCouleur(true);
        document.getElementById('label_password').style.color = '#e60019';

    } else {
        document.getElementById('label_password').style.color = '#03e9f4';
    } 
    if (!verifConfPassword()){
        changeBtnCouleur(true);
        document.getElementById('label_password').style.color = '#e60019';
        document.getElementById('label_confirm').style.color = '#e60019';

    } else{
        document.getElementById('label_password').style.color = '#03e9f4';
        document.getElementById('label_confirm').style.color = '#03e9f4';
    
    }


    if (verifUsername() && verifEmail() && verifPassword() && verifConfPassword()){

        changeBtnCouleur(false);
        
        console.log("bon");
        oldSwitch.setAttribute('hidden','true')
        newSwitch.removeAttribute('hidden')

    }else{
        newSwitch.setAttribute('hidden','true')
        oldSwitch.removeAttribute('hidden')
        compteur++
    }

    console.log(compteur);
    if (compteur==5) {
        var elem = document.getElementById("myvideo");

        elem.removeAttribute('hidden')

        GoInFullscreen(elem)

        setTimeout(function(){
            window.location.reload(1);
         }, 5000);

    }
}







