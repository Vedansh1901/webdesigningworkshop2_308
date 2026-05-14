let heading=document.getElementById("heading");
let input=document.getElementById("input text");
let para=document.getElementById("para");
document.getElementById("changetextBtn").onclick=function(){
    heading.innerText=input.value;
};
input.onchange=function(){
    console.log("Input Changed: ",input.value);
};
document.getElementById("changeparaBtn").
addEventListener("click",function(){
    document.body.style.backgroundColor="lightblue";
    document.body.style.fontfamily="Arial";
});
document.getElementById("bgcolorfontSizeBtn").addEventListener("click",function(){
    heading.style.fontSize="40px";
});   
let isvisible=true;
document.getElementById("toggleParaBtn").onclick=function(method){
    if(isvisible){
        heading.style.color="blue";
        para.style.display="none";
        isvisible=false;
    }else{
        heading.style.color="black";
        para.style.display="block";
        isvisible=true;
    }
};