type MyObject = {
  [key: string]: any;
};

function findKey(obj: MyObject, key: string): MyObject | null {
  if (key in obj) {
    return obj;
  } else {
    return null;
  }
}

const myObject: {
  name: string;
  age: number;
  city: string;
} = {
  name: "John",
  age: 30,
  city: "New York",
};

const result = findKey(myObject, "email");
const result1 = findKey(myObject, "city");

console.log(result);
console.log(result1);
