const images = ["cat.png","crycat1.png","crycat3.png","dogsad1.png","dogsad2.png","crycat2.png","happydog1.png"];
const texts = ["Will you be my valentine?","Are you sure?","Like really, really sure?","But:'(","Pretty pleaseeeeeeeeeee?","OKAY","JK, You will be my Valentine"]
const textss = ["NO","YES","YES","NO","NO","OKAY"];
const textsss = ["YES","I'LL GO","I'LL GO","I'LL GO","I'LL GO","I'LL GO","YES"];
let currentIndex = 0;

function changeno(){
    var imgg = document.getElementById("catt");
    var textt = document.getElementById("abb");
    var texttt = document.getElementById("no");
    var textttt = document.getElementById("yes");
    
    if (currentIndex < textss.length){
        currentIndex = (currentIndex + 1) % images.length;
        imgg.src = images[currentIndex];
        textt.innerText = texts[currentIndex];
        texttt.innerText = textss[currentIndex]; 
        textttt.innerText = textsss[currentIndex];
    } 
    if (currentIndex === textss.length){
        texttt.style.display = "none";
        textttt.style.transform = "scale(1.5)";
    }
}

function changeyes(){
    var img = document.getElementById("catt");
    var text = document.getElementById("abb");
    var texttt = document.getElementById("no");
    var textttt = document.getElementById("yes");

    img.src = "catdance.gif";
    text.innerText = "Yeeeyyy, see you baby;)";

    texttt.style.display = "none";
    textttt.style.display = "none";
    
}