
//var a = document.querySelectorAll(".button");
//    console.log(a);
//function validForm() {
//    
//}
//document.addEventListener("click",validForm);
function validForm() {
    var name=document.getElementById("name").value;
    
    console.log(name);
    var password=document.getElementById("password").value;
    
    console.log(password);
    var reg_name=/^[а-яёA-Z]+$/i;
    var reg_pas=/^[0-9A-Z]{5,100}$/i;
    if (reg_name.test(name)==false){
        alert("ошибся в ФИО");
    if (reg_pas.test(password)==false){
        alert("ошибся в пароле ");
    }
    
    
}
   
document.querySelector(".button").addEventListener("click",validForm);