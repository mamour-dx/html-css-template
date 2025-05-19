const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const rePassError = document.getElementById('rePassError');


submitBtn.addEventListener('click', (event)=>{
    event.preventDefault();

    if(validName() && validEmail() && validPassword() && valid_rePassword())
    {
        alert("Form Submitted Successfully");
    }
});

function validName()
{
    let uname = document.getElementById('uname').value;

    if(uname.length == 0)
    {
        nameError.innerHTML = "Name is required";
        nameError.nextElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!uname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameError.innerHTML = "Write full name";
        nameError.nextElementSibling.classList.add('fa-xmark');
        return false;
    }

    nameError.innerHTML = "";
    nameError.nextElementSibling.classList.add('fa-check');
    document.getElementById('_001').style.color = "aqua";
    return true;
}

function validEmail()
{
    let email = document.getElementById('email').value;

    if(email.length == 0)
    {
        emailError.innerHTML = "Email address is required";
        emailError.nextElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        emailError.innerHTML = "enter valid email address";
        emailError.nextElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML = "";
    emailError.nextElementSibling.classList.add('fa-check');
    document.getElementById('_002').style.color = "aqua";
    return true;
}

function validPassword()
{
    let cr_pass = document.getElementById('cr_pass');

    if(cr_pass.value.length == 0)
    {
        passError.innerHTML = "Password is required";
        passError.nextElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!cr_pass.value.match(/[A-Z]/g))
    {
        passError.innerHTML = "Password must have atleast 1 Uppercase letter";
        passError.nextElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!cr_pass.value.match(/[a-z]/g))
    {
        passError.innerHTML = "Password must have atleast 1 lowercase letter";
        passError.nextElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!cr_pass.value.match(/[0-9]/g))
    {
        passError.innerHTML = "Password must have atleast 1 digit";
        passError.nextElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(cr_pass.value.length < 8)
    {
        passError.innerHTML = "Password must have atleast 8 characters";
        passError.nextElementSibling.classList.add('fa-xmark');
        return false;
    }
    passError.innerHTML = "";
    passError.nextElementSibling.classList.add('fa-check');
    document.getElementById('_003').style.color = "aqua";
    return true;
}

function valid_rePassword()
{
    let cr_pass = document.getElementById('cr_pass').value;
    let con_pass = document.getElementById('con_pass').value;

    if(con_pass.length == 0)
    {
        rePassError.innerHTML = "Re-enter password";
        rePassError.nextElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(con_pass != cr_pass)
    {
        rePassError.innerHTML = "Password does not match";
        rePassError.nextElementSibling.classList.add('fa-xmark');
        return false;
    }
    rePassError.innerHTML = "";
    rePassError.nextElementSibling.classList.add('fa-check');
    document.getElementById('_004').style.color = "aqua";
    return true;
}