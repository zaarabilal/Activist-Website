/* .js files add interaction to your website */

var factList= ["In 2020, 11.6 million children in the U.S. were living in poverty.", "Wealthier students are 8 times more likely to graduate college.", "Students from low-income households are seven times more likely to drop out of school.", "In 2020, 4% of those with a Bachelor's degree or higher were under the poverty line.", "Low-income youth are 13 times more likely to commit violent crime as a young adult."];
var fact= document.getElementById("fact");
var mybutton= document.getElementById("mybutton");
var count=0;



mybutton.addEventListener("click", displayFact);


function displayFact (){
  fact.innerHTML= factList[count];
  count++;

  if(count==factList.length){
    count=0;
  }
}





