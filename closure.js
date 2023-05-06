//closures
function outerFunction() {
  let name = "John";
  return function innterFunction() {
    console.log(`My name is ${name}`);
  };
}

const getName = outerFunction();
getName();
