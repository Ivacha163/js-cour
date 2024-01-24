let i = 1;
let contenu = "";


   //if (i%3 ==0) {
  //  console.log("fizz")
 //  }
  // else if (i%5 ==0) {
   // console.log("buzz")
  // }

$(function(){
    fizzBuzz(i);
    $(document).on("scroll", scrolled);
});

function scrolled(){
    if($(document).scrollTop() + $(window).height()>=$(document).height()){
        i += 100;
        fizzBuzz(i);
    }
};

function fizzBuzz(j) {
    for(let i = j; i <= j + 99; i ++) {
        contenu += (i%3 == 0) ? " fizz " : "";
        contenu += (i%5 == 0) ? " buzz " : "";
        contenu += (contenu == "") ? i : "";
        classe = contenu + " col"
        $("#contenu").append("<div class='"+classe+"'>"+contenu+"</div>");
        contenu = "";
    }
}

// if (value) { cond1...} else {cond2...}
// value ? cond1 : cond2