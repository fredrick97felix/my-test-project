function check(){
    var fristname=document.getElementById('fristname').value.trim();
    var lastname=document.getElementById('lastname').value.trim();
    var username=document.getElementById('username').value.trim();
    var email=document.getElementById('email').value.trim();
    var country=document.getElementById('country').value.trim();
    var password=document.getElementById('password').value.trim();

     if( !empty(fristname)){
        if(itContainsLetterOnly(fristname)){
            console.log('it contains text only');
        }else{
            displayMessage('fristname','fristname-small','Frist Name should contain letters only');
        }
     }else{
        display('fristname','fristname-small');
     }

     if(!empty(lastname)){
        if(itContainsLetterOnly(lastname)){
            console.log('it contains text only');
        }else{
            displayMessage('lastname','lastname-small','Last Name should contain letters only'); 
        }
    }else{
        display('lastname','lastname-small');
        
    }

    if( !empty(username)){
        if( mixOf(username)){
            console.log('it contains text and numbers only');
        }else{
            displayMessage('username','username-small','Username should contain letters and numbers only'); 
        }
    }else{
        display('username','username-small');
        
    }

    if( !empty(email)){
        console.log('not empty');
    }else{
        display('email','email-small');
        
    }

    if( !empty(country)){
        console.log('not empty');
    }else{
        display('country','country-small');
        
    }

    if(!empty(password)){
        console.log('not empty');
    }else{
        display('password','password-small');
    }
}

function empty(string){
       if(string==""){
           return true;
       }else{
           return false;
       }


}

function display(inputId,smallId){
document.getElementById(inputId).style.borderColor="red";
document.getElementById(smallId).style.visibility="visible";
}
function displayMessage(inputId,smallId,message){
    document.getElementById(inputId).style.borderColor="red";
    document.getElementById(smallId).innerHTML=message;
    document.getElementById(smallId).style.visibility="visible";
    }
 
function itContainsLetterOnly(string){
    var regx=/^[a-z A-z]{2,20}$/;
    if(regx.test(string)){
        return true;
    }else{
        return false;
    }

}

function mixOf(string){
    var regx=/^\w{2,20}$/;
    if(regx.test(string)){
        return true;
    }else{
        return false;
    }

}