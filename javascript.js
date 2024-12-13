function showimg() {
    document.getElementById("img-contain").innerHTML =
    '<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/PEO_M4_Carbine_RAS_M68_CCO.png/1920px-PEO_M4_Carbine_RAS_M68_CCO.png" class = "img1" alt="M4 Carbine">';
}

document.getElementById("changeButton").addEventListener("click", changeimg);

function changeimg(event){
    console.log("HI");
    const imgELe = document.getElementById("coolimg");
    if(imgELe.src === "https://www.chopperspotter.com/wp-content/uploads/2022/10/Bell-AH-1-Cobra-Chopper-Spotter.jpg"){
        imgELe.src = "https://th.bing.com/th/id/OIP.JD1rs1RT3MGIdbY0sfNgMQHaE9?rs=1&pid=ImgDetMain";
    }else{
       imgELe.src = "https://www.chopperspotter.com/wp-content/uploads/2022/10/Bell-AH-1-Cobra-Chopper-Spotter.jpg";
    }
}
function showAlert(image) {
    alert("You found a secret!");
    redirect("give.html", 0); 
}
function redirect(url, interval) {
    const intervalID = setInterval(function() {
        location = url; // IK it looks sketchy but I researched it and coded it myself. location sends the user to the desired url
        clearInterval(intervalID);
    }, interval);
}