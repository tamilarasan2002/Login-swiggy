var log_in_details=JSON.parse(localStorage.getItem("sign_up_details"));
console.log(log_in_details);
var log_in_user=document.querySelector(".log-in-username");
var log_in_password=document.querySelector(".log-in-password");
var log_in_submit=document.querySelector(".log-in-submit");
log_in_submit.addEventListener("click",b=>{
    log_in_details.forEach( check=>{
        if(check.username== log_in_user.value && check.userpw == log_in_password.value ){
            log_in_submit.setAttribute("href","siggyhome.html");
        }
        else{
            log_in_user.value="";
            log_in_password.value="";
        }  
        
    });
    
})
    