import _ from "lodash";
let dragon = (name, size, element) => {
  return `${name} is a ${size} dragon that breathes ${element}`;
};

dragon = _.curry(dragon);

let fluffy = dragon("fluid");
let tiny = fluffy("tiny");
console.log(tiny("ligning"));

//////////////

const dragon2 = (name) => (size) => (element) =>
  `${name} is a ${size} dragon that breathes ${element}`;

console.log(dragon2("Pikachu")("Small")("Fire"));

////////////

let dragons = [
  { name: "fluffy", element: "lighting" },
  { name: "noomi", element: "lighting" },
  { name: "karo", element: "fire" },
  { name: "doomer", element: "timewarp" },
];

let hasElement = _.curry((element, obj) => obj.element === element);

let lightingDragons = dragons.filter(hasElement("lighting"));

console.log(lightingDragons);
