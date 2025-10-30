const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById("close");

//bar button will show the side tab for small media screen devices and when we click on x button it will close
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}

//let us show the small tshirt images when we click on it below the main tshirt image

const mainImg=document.getElementById("main-img");
const smallImg=document.getElementsByClassName("smal-img")

smallImg[0].onclick=()=>{
    mainImg.src=smallImg[0].src
}
smallImg[1].onclick=()=>{
    mainImg.src=smallImg[1].src
}
smallImg[2].onclick=()=>{
    mainImg.src=smallImg[2].src
}
smallImg[3].onclick=()=>{
    mainImg.src=smallImg[3].src
}