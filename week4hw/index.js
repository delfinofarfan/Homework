document.querySelector("img").src = "https://i2.pickpik.com/photos/737/98/573/las-vegas-fountains-paris-preview.jpg";//adding in my vegas photo
console.log(document.querySelectorAll("p")); // printing & selecting all p elements
let vegasPicture = document.getElementById("vegas-picture");
console.log(vegasPicture);
//added in event listener for clicking the vegas picture
document.querySelector("#vegas-picture").addEventListener(
"click", () => alert("You clicked the Las Vegas picture!"));
//added in event listener for hovering over the 1st p element...changes background from black to blue
document.querySelector("p")
.addEventListener(
  "mouseover",
  event => (event.target.style.backgroundColor = "blue")
);
//logs keys pressed by user in the console
document.querySelector("body").addEventListener("keydown", event => console.log(event.key));