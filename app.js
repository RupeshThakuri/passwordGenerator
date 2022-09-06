const btnEl=document.getElementById("btn");
const inputEl=document.getElementById("input");
const copyEl=document.getElementById("copy");
const popUpEl=document.querySelector(".alert-container");

btnEl.addEventListener('click',()=>{
    createPassword();
});

function createPassword(){
    const chars="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?<>:{}[]~";
    const passwordLength =14;
    let password="";

    for(let i=0;i<passwordLength;i++){
        const RandNum=Math.floor(Math.random()*chars.length);
        password += chars.substring(RandNum,RandNum+1);
        console.log(password);
    }
    inputEl.value=password;
    popUpEl.innerText=password+" copied";
}

copyEl.addEventListener("click",()=>{
    copyPassword();
    if(inputEl.value){
        popUpEl.classList.add('active');
        setTimeout(()=>{
            popUpEl.classList.remove('active');
        },2000)
    }
});

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);
}