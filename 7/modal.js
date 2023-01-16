let Enter = document.querySelector(".link-head");
let exit = document.querySelector(".head>img");
let modal_overlay = document.querySelector(".Auth-Modal-Overlay");
let modal_window = document.querySelector(".Modal-Window");

Enter.addEventListener("click", function(){
    modal_overlay.style.display = "flex";
    modal_window.style.display = "flex";
});

exit.addEventListener("click", function(){
    modal_overlay.style.display = "none";
    modal_window.style.display = "none";
});