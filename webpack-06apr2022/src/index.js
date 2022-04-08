import "./note.css";
// import "./x.png"
var image =document.createElement("image");
image.setAttribute("src","x.png");
var log = document.querySelector(".log");
log.append(image);

var box = document.querySelector(".box")
box.setAttribute("class", "bo")
var a = document.querySelector(".text")
var bu = document.querySelector(".butt");
bu.setAttribute("class", "bu");
 
a.setAttribute("class", "as");
var arr = []
arr = JSON.parse(localStorage.getItem('note'));
if (arr == null) {
    arr = []
}

document.querySelector(".bu").addEventListener("click", function () {

    var data = document.querySelector(".as").value;


    var ob = {
        "note": data
    }
    arr.push(ob);
    localStorage.setItem('note', JSON.stringify(arr))
    append(arr);

    // var div =document.createElement("div");
    // div.innerHTML=data;
    // box.append(div);
    // console.log(data)


});


function append(arr) {
    box.innerHTML = "";
    arr.map(function (el) {
        console.log(el.note)

        var div = document.createElement("div");
        div.innerHTML = el.note;
        box.append(div);

    })
}



