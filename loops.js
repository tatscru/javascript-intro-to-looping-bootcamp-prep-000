function forLoop(originalArray) {
  for(var i = 0; i < 25; i++) {
    if(i === 1) {
       originalArray.push("I am 1 strange loop.") 
    } else {
       originalArray.push(`I am ${i} strange loops.`)
    }
  }
  return originalArray
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}


function doWhileLoop(array)  {
  
  
do {
  console.log(array)
    incrementVariable("remove elements `array` until the `array` is empty") 
  }   while (array.length > 0 && incrementVariable())
  return "false"
}
