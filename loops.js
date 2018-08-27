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

let countdown = 100; 

while (countdown > 0) {
}

function whileLoop(n) {
  return "done"
  
  while (n === 99); {
    console.log(--countdown);
  }
}
