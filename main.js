let usernameRef = document.getElementById("username");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");

let passwordRef = document.getElementById("password");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

// Catch Eye (Position 1)
let eyeStyle = ()=>{
  eyeL.style.cssText = "left: 0.6em; top: 0.6em";
  eyeR.style.cssText = "right: 0.6em; top: 0.6em";
};

// Catch Hand (Position 1)
let handStyle = ()=>{
  handL.style.cssText = "height: 2.81em; top: 8.4em; left: 7.5em; transform: rotate(0deg);";
  handR.style.cssText = "height: 2.81em; top: 8.4em; right: 7.5em; transform: rotate(0deg);";
};

// onClicked in UserName (Eye Position 2)
usernameRef.addEventListener('focus' , ()=>{
    eyeL.style.cssText = "left: 0.75em; top: 1.12em;";
    eyeR.style.cssText = "right: 0.75em; top: 1.12em;";
    handStyle();
});

// onClicked in password (Hand Position 2)
passwordRef.addEventListener("focus", () => {
    handL.style.cssText =
    "height: 6.56em; top: 3.87em; left: 11.75em; transform: rotate(-155deg);";
    handR.style.cssText =
    "height: 6.56em; top: 3.87em; right: 11.75em; transform: rotate(155deg);";
    eyeStyle();
});

document.addEventListener('click' , (e)=>{
    let clickElem = e.target;
    if(clickElem != usernameRef && clickElem != passwordRef){
        eyeStyle();
        handStyle();
    }
})