var textboxArray = $(".form-control");

textboxArray.forEach(function(myElement){{
    if (this.moment === "ago") {
       this.style.color = ".past"; 
    } 
    else if (this.moment === "from now") {
        this.style.color = ".future";
    }
    else {
        this.style.color = ".present";
    }  
};
});


var textboxArray = $(".form-control");
for (let i = 0; i < textboxArray.length; i++) {
    let val = getCookie("box" + i);
    textboxArray[i].value = val !=null ? val : ""; 
}

document.getElementById("date").innerHTML = moment();

console.log(moment())
function test(box) {
    setCookie("box" + box, textboxArray[box].value);
}

function setCookie(name, value) {
    document.cookie = name + "=" + value + ";path=/;";
}

function getCookie(name) {
    var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
}