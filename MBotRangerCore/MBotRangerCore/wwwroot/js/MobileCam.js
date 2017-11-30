
//Display the containers
var img = document.querySelector("img");

var capture = document.getElementById("capture");

var containerImg = document.querySelector("div > img");

var canvas = document.createElement("canvas");

var ctx = canvas.getContext("2d");

var i = 0;

//capture.addEventListener("click", function () {
//    ctx.drawImage(img,0,0,500,330);
//    containerImg.src = canvas.toDataURL('image/jpeg',1.0);
   
//});

var img = new Image,
    src = "~/images"; // insert image url here

img.crossOrigin = "Anonymous";

img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    localStorage.setItem("savedImageData", canvas.toDataURL("image/png"));
}

img.src = src;

// make sure the load event fires for cached images too
if (img.complete || img.complete === undefined) {
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    img.src = src;
}