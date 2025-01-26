
var slider = document.getElementById("myRange");
var output = document.getElementById("value");

slider.oninput = function(){
    output.style.color = "white";
    output.innerHTML = this.value;
}


var imie = document.getElementById("imie");
var nazwisko = document.getElementById("nazwisko");
var sign = document.getElementById("select");
var value = document.getElementById("myRange");
var error = document.getElementById("error");

document.getElementById("submit").onclick = function(){
    if(imie.value == "Zuzia" && nazwisko.value == "Michalak" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "tak.html";
    }
    else if(imie.value == "zuzia" && nazwisko.value == "Michalak" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "tak.html";
    }
    else if(imie.value == "zuzia" && nazwisko.value == "michalak" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "tak.html";
    }
    else if(imie.value == "Zuzia" && nazwisko.value == "michalak" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "tak.html";
    }

    else if(imie.value == "Zuzanna" && nazwisko.value == "Michalak" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "tak.html";
    }
    else if(imie.value == "zuzanna" && nazwisko.value == "Michalak" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "tak.html";
    }
    else if(imie.value == "zuzanna" && nazwisko.value == "michalak" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "tak.html";
    }
    else if(imie.value == "Zuzanna" && nazwisko.value == "michalak" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "tak.html";
    }

    else if(imie.value == "Zuzia" && nazwisko.value == "Błaszczyk" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "nazwisko.html";
    }
    else if(imie.value == "zuzia" && nazwisko.value == "Błaszczyk" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "nazwisko.html";
    }
    else if(imie.value == "zuzia" && nazwisko.value == "błaszczyk" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "nazwisko.html";
    }
    else if(imie.value == "Zuzia" && nazwisko.value == "błaszczyk" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "nazwisko.html";
    }

    else if(imie.value == "Zuzanna" && nazwisko.value == "Błaszczyk" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "nazwisko.html";
    }
    else if(imie.value == "zuzanna" && nazwisko.value == "Błaszczyk" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "nazwisko.html";
    }
    else if(imie.value == "zuzanna" && nazwisko.value == "błaszczyk" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "nazwisko.html";
    }
    else if(imie.value == "Zuzanna" && nazwisko.value == "błaszczyk" && sign.value == "Bliźnięta" && value.value == "17"){
        window.location = "nazwisko.html";
    }

    else if(imie.value == "jolanta" || imie.value == "Jolanta" || imie.value == "jola" || imie.value == "Jola"){
        error.style.backgroundColor = "black";
        error.textContent = "Brzydkie imię. Spierdalaj";
    }
    else if(imie.value == "karolina" || imie.value == "Karolina"){
        error.style.backgroundColor = "black";
        error.textContent = "Brzydkie imię. Spierdalaj";
    }

    else{
        error.style.backgroundColor = "black";
        error.textContent = "Błąd";
    }
}

