let wDrop = document.getElementById('wDrop');
let mDrop = document.getElementById('mDrop');

let wDrop_btn = document.getElementById('wDrop_btn');
wDrop_btn.onclick = function(){
    wDrop.classList.toggle('active')
}
let mDrop_btn = document.getElementById('mDrop_btn');
mDrop_btn.onclick = function(){
    mDrop.classList.toggle('active')
}

let searchDisplay = document.getElementById("searchDisplay")
function sendData(e){
    searchDisplay.style.width = '100%'
    fetch(`http://localhost:4000/search`, {
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({payload:e.value})
    })
    .then(res => res.json())
    .then((data)=>{
        console.log(data)
        document.getElementById("srchApnd").innerHTML = data.data
    })
}

let full_login_page = document.getElementById('full_login_page')
let login_page = document.getElementById('login_page');
let loginBtn = document.getElementById('login');
let signupBtn = document.getElementById('signUpBtn');

if (loginBtn.innerText==='Log in'){
    loginBtn.addEventListener('click',()=>{
        full_login_page.style.width = '100%'
        if (full_login_page.style.width == '100%'){
            let closeBtn = document.getElementById('closeBtn');
            closeBtn.addEventListener('click',()=>{
                full_login_page.style.width = '0%';
            })
            signupBtn.addEventListener("click",()=>{
                full_login_page.style.width = '0%';
                let full_signup_page = document.getElementById('full_signup_page')
                full_signup_page.style.width = '100%';
            })
        }
    })
}




