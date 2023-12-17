function reverseString(str) {
    let reversedString = "";
    let i = str.length - 1;
  
    do {
      reversedString += str[i];
      i--;
    } while (i >= 0);
  
    return reversedString;
  }
  
  let originalString = "tiger";
  let reversedResult = reverseString(originalString);
  console.log("Original String: ", originalString);
  console.log("Reversed String: ", reversedResult);
  