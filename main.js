var cats = ["kissa1.jpg", "kissa2.jpg", "cat-in-a-sink.jpeg", "grey-cat.jpeg", "leo-cat.jpeg", "rich-cat.jpeg", "toilet-cat.jpeg"];
var horses = ["black-beauty.jpeg", "free-horse.jpeg", "goni-poju.jpeg", "red-pony.jpeg", "tintti-silver.jpeg", "white-horses.jpeg"];
function changePicture(id, array){
  var random = Math.floor(Math.random() * array.length);
  console.log(random);
  console.log(document.getElementById(id));
  document.getElementById(id).src=array[random];
}
function peru(){
  document.body.style.backgroundImage = "url(" + kuvat[0] + ")";
}
