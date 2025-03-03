
console.log( "yipeeeee!");

// let pageTitle = document.querySelector("#page-title");

// //timeout code, changes h1 color after 3 seconds
// setTimeout(function(){
//     pageTitle.style.color = "pink";
//     // console.log("timeout worked!")
// }, 3000);

// //Click event on header changes background color
// document.querySelector("header").onclick = function(){
//     // console.log ("clicked header!");
//     document.querySelector("body").style.backgroundColor = "black";
// }
let dqs = document.querySelector;



document.querySelector("#image-01").addEventListener("click", function(){
    document.querySelector("#image-02").style.visibility = "visible";
    alert("yap yap yap yap yap")
})
document.querySelector("#image-02").addEventListener("click", function(){
    document.querySelector("#image-03").style.visibility = "visible";
})
document.querySelector("#image-03").addEventListener("click", function(){
    document.querySelector("#image-04").style.visibility = "visible";
})
document.querySelector("#image-04").addEventListener("click", function(){
    document.querySelector("#image-05").style.visibility = "visible";
})
document.querySelector("#image-05").addEventListener("click", function(){
    document.querySelector("#image-06").style.visibility = "visible";
})
// document.querySelector("#image-06").addEventListener("click", function(){
//     document.querySelector("#image-06").style.visibility = "visible";
// })