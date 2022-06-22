var Code = document.getElementById("Code");
var body = document.getElementById("body");
var on = document.getElementById("on");
var Delete = document.getElementById("delete");
var ss = document.getElementById("ss");
DefaultValue();
on.onclick=()=>{
    body.innerHTML = Code.value;
    localStorage.setItem("Code",Code.value);
    localStorage.setItem("body",body.innerHTML); 
    if(Code.value.indexOf("<script>") != -1){
        alert("Error input script Element" + "\n" + "this Editor support javascript by adding events to HTML Elements" + "\n" + "--------------" + "\n" + "إن محرر الأكواد يدعم جافاسكريبت فقط عبر إضافة الأحداث إلى عناصر HTML وليس عبر إضافة الوسم script ");
    }
}
onload =()=>{
    if(localStorage.getItem("Code")!=null){
        Code.value = localStorage.getItem("Code");
    }
    body.innerHTML = localStorage.getItem("body");

};
Delete.onclick=()=>{
    body.innerHTML ="";  
    localStorage.setItem("Code",Code.value);
    localStorage.setItem("body",body.innerHTML);
    document.querySelectorAll("body")[1].style.width = "97%";
    document.querySelectorAll("body")[1].style.minWidth = "533px";
    document.querySelectorAll("body")[1].style.minHeight = "360px";
};  
var reset = document.getElementById("reset");
reset.addEventListener("click",()=>{
    DefaultValue();
    localStorage.clear();
    location.reload();
});
function DefaultValue(){
    Code.value = `<html>
    <head>
      <style>
                   
      </style>
    </head>  
    <body>
        

    
    </body>
</html>`;
}