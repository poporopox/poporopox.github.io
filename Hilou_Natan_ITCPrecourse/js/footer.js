
const langs_used = [ "HTML", " CSS", "Javascript" ];
const footerDec=["This page was built using: "]

function language(array) {
  //slice function; wont change original array yet it will copy the chosen objects, collect all of the objects up until the last one of the array while addin ',' and 'and'
  return array.length > 1 ? `${array.slice(0, array.length - 1).join(", ")} and ${array.slice(array.length - 1)}` : `${array}`;
};

document.querySelector('footer').innerText =footerDec+ language(langs_used);

