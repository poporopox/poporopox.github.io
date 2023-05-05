

let currentlySelected = 0;
const nodes = document.querySelectorAll (".gallery-ifr");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// by tagging one of the classes in the googles api with active it will only show the one with the active tag by going to the prev

function prev() {
    nextBtn.disabled = false;
    nodes[currentlySelected].classList.remove("active");
    currentlySelected--;
    nodes[currentlySelected].classList.add("active");

    // if the first google api is selected then the prv btn shall be disabled

    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
}

// by tagging one of the classes in the googles api with active it will only show the one with the active tag by going to the next

function next() {
    prevBtn.disabled = false;
    nodes [currentlySelected].classList.remove("active");
    currentlySelected++;
    nodes[currentlySelected].classList.add("active");

    // then if we reach the end of the arr, next shall be disabled

    if (currentlySelected + 1 === nodes.length) {
        nextBtn.disabled = true;
    }

}

// init function will add the clickin action both in the end and the start of the funciton above

function init () {
    prevBtn.addEventListener("click", function() {
        prev()
    });

    nextBtn.addEventListener("click", function(e) {
        next()
    });
}

init()



const langs_used = ["HTML" , "CSS" , " JavaScript",];
const footerDec= ["This page was built using: "]

/*question mark=if array.length is bigger than 1 then*/
/*slice the array to the starting obj of the array up to #1 of the array then adds ',' */
/*and adds 'and' and then slices #1 obj up to the end*/
/*gives out the array*/

function language(array) {
  return array.length > 1 ?`${array.slice(0, array.length - 1).join(", ")} and ${array.slice(array.length - 1)}`: `${array}`;

  

};

document.querySelector('footer').innerText  =footerDec +  language(langs_used);


