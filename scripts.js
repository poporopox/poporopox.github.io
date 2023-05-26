
const input=document.getElementById("search");
const res=document.getElementById("fetchedres");
const go=document.getElementById("butt");
const loadingElement=document.getElementById('loading')


async function fetchInput() {

  let url = `https://stock-exchange-dot-full-stack-course-
  services.ew.r.appspot.com/api/v3/search?query=` + input + `&amp;limit=10&amp;exchange=NASDAQ`;

 try {
  loadingElement.style.display='inherit'
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

 } catch (error) {
  Console.log(error);
 }
};

  go.addEventListener("click",fetchInput)