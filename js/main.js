var sign_username=document.querySelector(".signup-username");
var sign_emailid=document.querySelector(".signup-emailid");
var sign_npw=document.querySelector(".signup-password");
var sign_cpw=document.querySelector(".signup-conform-password");
var sign_up_submit=document.querySelector(".sign-up-submit");
sign_up_submit.addEventListener("click",a=>{
    if(JSON.parse( localStorage.getItem("sign_up_details")==null)){
        localStorage.setItem("sign_up_details","[]")
    }
    if(sign_username.value!="" && sign_emailid.value != ""){
        if(sign_npw.value!="" && sign_cpw.value != ""){
            if(sign_npw.value==sign_cpw.value){
               array=JSON.parse(localStorage.getItem("sign_up_details"));
               console.log(array.length)
               array[array.length]={
                    username:sign_username.value,
                    useremail:sign_emailid.value,
                    usercpw:sign_cpw.value,
                    userpw:sign_npw.value,
               } 
               sign_username.value="";
               sign_emailid.value="";
               sign_cpw.value="";
               sign_npw.value="";
               localStorage.setItem("sign_up_details",JSON.stringify(array));
               sign_up_submit.setAttribute("href","siggyhome.html")
            }
            else{
                alert("PLEASE ENTER SAME PASSWORDS")
            }
        }
        else{
            alert("PLEASE PASSWORDS")
        }
    }
    else{
        alert("PLEASE ENTER USERNAME OR EMAIL")
    }
});

