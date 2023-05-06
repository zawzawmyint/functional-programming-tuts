const animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" },
];

//callback function
const isFish = (x) => x.species === "fish";

// filter
const fishses = animals.filter(isFish);

//map
const names = animals.map((x) => x.name);

const orders = [
  { amount: 250 },
  { amount: 500 },
  { amount: 340 },
  { amount: 710 },
  { amount: 100 },
];

//reduce
const total = orders.reduce((c, a) => c + a.amount, 0);

console.log(total);
