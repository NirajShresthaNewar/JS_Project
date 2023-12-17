function factorial(n) {
    
    if (n === 0 || n === 1) {
      return 1;
    }
  
    
    return n * factorial(n - 1);
  }
  
  
  var num= 4;
  var result = factorial(num);
  console.log("The factorial of " + num + " is: " + result);
  