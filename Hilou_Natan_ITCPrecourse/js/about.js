
const langs_used = [ "HTML", " CSS", " JavaScript",];

function language(array) {
  return array.length > 1 ? `${array.slice(0, array.length - 1).join(", ")} and ${array.slice(array.length - 1)}` : `${array}`;
};

document.querySelector('footer').innerText = language(langs_used);
const footerDec=["This page was built using: "]
document.getElementById("declaration").innerText = footerDec