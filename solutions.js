var displayName = document.getElementById("email");
var nbutton = document.getElementById("nbutton");

nbutton.addEventListener("click", displayEmail);

function displayEmail (){
  var text3= document.getElementById("city").value;
  var text2= document.getElementById("myschool").value;
  var text = document.getElementById("mytext").value;
  displayName.innerHTML= "Hello, my name is " + text + " and I go to " + text2 + " in " + text3 + ". I wanted to let you know of the changes that can be made to ensure all children in our community have an equal chance to recieving a good quality education. Firstly, you can help by supporting legislation that provides economic relief to those in need and supporting bills that target childhood poverty. You can also support the zoning of schools to be dependent on income and not location so that there are a mix of individuals in all schools. Lastly, you can support the passing of rules allowing for an increase in funding to underserved schools. I hope you consider the solutions stated above. Thank you, " + text;
}
