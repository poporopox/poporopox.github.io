

const input=document.getElementById("input");
const resultNum=document.getElementById("span");
const butt=document.getElementById("button");
const loadingElement=document.getElementById('loading')
const alertElement=document.getElementById('err50')
const alertElement1=document.getElementById('err0')
const newCalc=document.getElementById('Savecalc')



function fibonaccifetch() {
 
  
  
  if(input.value > 50){
    return  alertElement.style.display='inherit'
  }
  
  if(input.value < 0){
    return  alertElement1.style.display='inherit'
  }
  
  alertElement1.style.display='none'
  alertElement.style.display='none'
  loadingElement.style.display='inherit'
   
   fetch (`http://localhost:5050/fibonacci/${input.value}`)
   
  
  .then(async(response) => {
    
    if(!response.ok){
      const text =await response.text()
      throw text
    }   
    
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    
    return response.json();
  })
  
  .then((data) => {
    
    
    loadingElement.style.display = 'none';
    resultNum.textContent = data.result;
  })
  
  .catch((error) => {
    loadingElement.style.display = 'none';
    resultNum.textContent = `Server Error:${error}`;
});

}


const serverResults=document.getElementById('dispresults') 
const serverResults2=document.getElementById('dispresults2') 
const serverResults3=document.getElementById('dispresults3') 
const resFetch=document.getElementById('ResFetch')



function resultsFetch() {
 
  
  loadingElement.style.display='inherit'
   
   fetch (`http://localhost:5050/getFibonacciResults`)
   
  
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    
      
    
    
    
    return response.json();
  })
  
  .then((data)=> {
    loadingElement.style.display = 'none';
    
    data.results.sort((a, b) => b.createdDate - a.createdDate);
    
    serverResults.innerHTML = data.results[0].number;
    serverResults2.innerHTML = data.results[0].result;
    serverResults3.innerHTML = new Date(data.results[0].createdDate);
    
    
    return data.results;
    
    
    
    
    
    

  })
  
  .catch((error) => {
    loadingElement.style.display = 'none';
  
});

}



function fibo () {
    
  let z=input.value

  
   
   
   
   let x=0, y=1, w=z;

   for(let i=2; i<=z; i++) {
       w=x+y;
       x=y;
       y=w;
   }

   resultNum.innerHTML = w;
   
  

   
   
}











function myFiboFunct() {
  if (newCalc.checked == true){
    fibonaccifetch()
    resultsFetch()
  } else {
    fibo()
  }
}
butt.addEventListener("click",myFiboFunct)






















  


  





