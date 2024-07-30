export default function signinValidation(value) {
    let error={};
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pass_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    if (value.fullName===""){
        error.fullName="UserName should not be empty";

    }
    else{
        error.fullName="";
    }
    if (value.email===""){
        error.email="Email should not be empty";

    }
    else if(!email_pattern.test(value.email)){
        error.email="Use correct format of email!"

    }
    else{
        error.email="";
    }
    if (value.number===""){
        error.number="Email should not be empty";

    }
    else if((value.number.toString()).length>10){
        error.number="please enter a valid number!";
    }
    else{
        error.number="";
    }
    if (value.password===""){
        error.password="Password should not be empty";

    }
    // else if(!pass_pattern.test(value.password)){
    //     error.password="Use correct format of password!"

    // }
    else{
        error.password="";
    }
    if (value.password1===""){
        error.password1="Password should not be empty";

    }
    else if(value.password1!=value.password){
        error.password1="Both password should match";

    }
    else{
        error.password1="";
    }
  return error;
};
