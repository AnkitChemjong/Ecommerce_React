export default function signinValidation(fullname,email,number,password1,password2) {
    let error={};
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pass_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9](8,)$/;
    if (fullname===""){
        error.fullname="UserName should not be empty";

    }
    else{
        error.fullname="";
    }
    if (email===""){
        error.email="Email should not be empty";

    }
    else if(!email_pattern.test(email)){
        error.email="Use correct format of email!"

    }
    else{
        error.email="";
    }
    if (number===""){
        error.number="Email should not be empty";

    }
    else{
        error.number="";
    }
    if (password1===""){
        error.password1="Password should not be empty";

    }
    else if(!pass_pattern.test(password)){
        error.password1="Use correct format of password!"

    }
    else{
        error.password1="";
    }
    if (password2===""){
        error.password2="Password should not be empty";

    }
    else if(password1!=password2){
        error.password2="Both password should match";

    }
    else{
        error.password2="";
    }
  return error;
};
