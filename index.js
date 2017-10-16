function random (){
var num = Math.floor((Math.random() * 100) + 1);
console.log(num);
}
random();
var now = new Date();
console.log(now);
var names = ["Ramata","Nia","Ryun","Abdul","Daniel","Caelan","Jordan","Miguel","Andrea","Sheng","Lisandro","Richard","Jackie","Daniel Z","Juan"]
var teachers = {"Peter":"Jablonski","Edwin":"Fuquei","Marcos":"Reinhold","Devraj":"Mehta", "Joe":"Tessler"}
function log (input){
    console.log(input);
}
function randInt (min,max){
   return (Math.floor((Math.random()*(max-min)) + min));
}
function numberWords (num){

}
function logcall(){
    for (i = 0; i < names.length; i++) { 
    log(names[i]);
}
}
function rvalue(){
    if (names.length%2==0){
        log("The class is very even");
    } else {log("The students are kind of odd")}
}