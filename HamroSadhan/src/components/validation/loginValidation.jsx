export default function loginValidation(email,password) {
    let error={};
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pass_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9](8,)$/;
    if (email===""){
        error.email="Email should not be empty";

    }
    else if(!email_pattern.test(email)){
        error.email="Use correct format of email!"

    }
    else{
        error.email="";
    }
    if (password===""){
        error.password="Password should not be empty";

    }
    else if(!pass_pattern.test(password)){
        error.password="Use correct format of password!"

    }
    else{
        error.password="";
    }
  return error;
};
