const signUp = e => {
    let formData = {
     username : document.getElementById('username').value,
     gender : document.getElementById('gender').value,
     email : document.getElementById('email').value,
     pwd : document.getElementById('pwd').value,
     age : document.getElementById('age').value,
     repeatpw : document.getElementById('repeatpw').value,
    }

    var numbers = /[0-9]/g;

    if(email.value.length == 0){
        alert('Please fill in email');

    }else if(pwd.value.length == 0){
        alert('Please fill in password');

    }else if(email.value.length == 0 && pwd.value.length == 0){
        alert('Please fill in email and password');


    }else if(!pwd.value.match(numbers)){
        alert('please add 1 number to password');

    }else if (age.value.length == 0 && age.value.length >=3){
        alert('Please fill in age');

    }else if (pwd.value != repeatpw.value){
        alert('Passwords are not equal');
    }

    else{
        localStorage.setItem('formData', JSON.stringify(formData));
           
        }
        alert('Your account has been created');
    }



function check() {
    var storedEmail = localStorage.getItem('email')
    var storedPwd = localStorage.getItem('pwd')
    var storedUsername = localStorage.getItem('username')

    var userEmail = document.getElementById('email');
    var userPwd = document.getElementById('pwd');
 

    if (userEmail.value == storedEmail.value && userPwd.value == storedPwd.value) {
        alert ( storedUsername + 'logged in.')
    }else{
        alert ('Combination incorrect')
    }

}

