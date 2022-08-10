//  VERSE 1
const search = document.getElementById("search");

const debounce = (fn, delay) => {
  let timeout;
  
  return function(){
    let context = this, 
    args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(context, args), delay);
  }
}

function change(e){
  console.log(e.target.value);
}

change =  debounce(change, 1000);

document.getElementById("search").addEventListener("keyup", change);

//  VERSE 2

function debounce(fn, delay) {
  let timeout;

  return function (...args) {
    if(timeout) clearTimeout(timeout);    
      timeout = setTimeout(() => fn(...args), delay);
  };
};

search.addEventListener("keyup", debounce((e)=>{
  console.log(e.target.value);
}, 1000));

