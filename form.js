function store() {
    var username = document.getElementById('username');
    var gender = document.getElementById('gender');
    var email = document.getElementById('email');
    var pwd = document.getElementById('pwd');

    var numbers = /[0-9]/g;

    if(email.value.length == 0){
        alert('Please fill in email');

    }else if(pwd.value.length == 0){
        alert('Please fill in password');

    }else if(email.value.length == 0 && pwd.value.length == 0){
        alert('Please fill in email and password');


    }else if(!pwd.value.match(numbers)){
        alert('please add 1 number to password');


    }else{
        localStorage.setItem('username', username.value);
        localStorage.setItem('gender', gender.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('pwd', pwd.value);
        alert('Your account has been created');
    }
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
