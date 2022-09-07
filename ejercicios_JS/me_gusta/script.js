let count = 3;

let getCount= document.querySelector("#getLikes");

function likes(){
 count++;
 getCount.innerHTML= count + " likes(s)" ;
}