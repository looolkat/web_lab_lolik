let form = document.querySelector(".regForm");
let errors_block = document.querySelectorAll(".error")

form[2].addEventListener("keyup", function(){
    if(form[2].value.match(/[a-zA-Z@+-_]+/)){
        errors_block[0].children[0].children[0].src = "./materials/design/State Icons.svg";
        errors_block[0].children[0].classList.remove("no");
    }else{
        errors_block[0].children[0].children[0].src = "./materials/design/State Icons2.svg";
        errors_block[0].children[0].classList.add("no");
    }

    if(form[2].value.length <=150){
        errors_block[0].children[1].children[0].src = "./materials/design/State Icons.svg";
        errors_block[0].children[1].classList.remove("no");
    }else{
        errors_block[0].children[1].children[0].src = "./materials/design/State Icons2.svg";
        errors_block[0].children[1].classList.add("no");
    }
});

form[4].addEventListener("keyup", function(){
    if(form[4].value.length >= 8){
        errors_block[1].children[0].children[0].src = "./materials/design/State Icons.svg";
        errors_block[1].children[0].classList.remove("no");
    }else{
        errors_block[1].children[0].children[0].src = "./materials/design/State Icons2.svg";
        errors_block[1].children[0].classList.add("no");
    }

    if(!form[4].value.match(/^[\d]+$/)){
        errors_block[1].children[1].children[0].src = "./materials/design/State Icons.svg";
        errors_block[1].children[1].classList.remove("no");
    }else{
        errors_block[1].children[1].children[0].src = "./materials/design/State Icons2.svg";
        errors_block[1].children[1].classList.add("no");
    }

    if(form[4].value != form[2].value){
        errors_block[1].children[2].children[0].src = "./materials/design/State Icons.svg";
        errors_block[1].children[2].classList.remove("no");
    }else{
        errors_block[1].children[2].children[0].src = "./materials/design/State Icons2.svg";
        errors_block[1].children[2].classList.add("no");
    }
});

form[5].addEventListener("keyup", function(){
    if(form[4].value == form[5].value){
        errors_block[2].children[0].children[0].src = "./materials/design/State Icons.svg";
        errors_block[2].children[0].classList.remove("no");
        form[5].classList.remove("no");
    }else{
        errors_block[2].children[0].children[0].src = "./materials/design/State Icons2.svg";
        errors_block[2].children[0].classList.add("no");
        form[5].classList.add("no");
    }
});