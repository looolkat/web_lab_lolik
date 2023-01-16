let Input = document.getElementById("AddIMG");
let prw = document.querySelector(".prv-img>img");
let btnText = document.querySelector(".button-img");
let bar = document.querySelector(".pb");

let xhr = new XMLHttpRequest();

Input.onchange = function(){
    var rd = new FileReader();
    bar.setAttribute('max', Input.files[0].size);

    xhr.open('POST', 'https://isidea.ru/rgups_file.php', true);
   
    xhr.upload.onprogress = e => {
        bar.value = e.loaded;
      }

    xhr.upload.onload = () => {
        rd.onload = function(event){
            let razmerMb = Input.files[0].size / 1024 / 1024;
            btnText.style.color = "#005F17";
            btnText.style.borderColor = "#005F17";
            btnText.innerText = Input.files[0].name + " [" + razmerMb.toFixed(2)/*округление до 2-х чисел после запятой*/ + "Мб]"
            prw.src = event.target.result;
            console.log(event.target.result);
        };
        rd.readAsDataURL(Input.files[0]);
    }
    xhr.send(Input.files[0]);
};

