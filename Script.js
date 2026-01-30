const btn = document.querySelectorAll("button");
const input = document.querySelector("#input");

let str = "";
let arr = Array.from(btn);

arr.forEach(btn => {
    btn.addEventListener("click", (evt) => {
        if(evt.target.innerHTML == "="){
            str = eval(str);
            input.value = str;
        }
        else if(evt.target.innerHTML == "AC"){
            str = "";
            input.value = str;
        }
        else if(evt.target.innerHTML == "DEL"){
            str = str.substring(0, str.length-1);
            input.value = str;
        }
        else{
            str += evt.target.innerHTML;
            input.value = str;
        }
    })
})