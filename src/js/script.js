// 1) Написати програму, яка виводить числа від 1 до 10, використовуючи цикли for і while.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}

// 2) Створити масив, що складається з елементів різних типів (примітивів) (число, рядок, булева змінна) довжиною 10 елементів.
//Вивести їх тип за допомогою typeof у консоль. Виведення здійсніть за допомогою перебору масиву різними способами: методом forEach, циклами for, while і do while.

const primitiveTypeArray = [1, "1", true, 2, "2", false, 3, "3", true, null];
console.log("Array length: ", primitiveTypeArray.length);

primitiveTypeArray.forEach((n) =>
  console.log(`Value: ${n}`, "Type:", typeof n)
);

for (let i = 0; i < primitiveTypeArray.length; i++) {
  console.log(
    `Value: ${primitiveTypeArray[i]}`,
    "Type:",
    typeof primitiveTypeArray[i]
  );
}

i = 0;
while (i < primitiveTypeArray.length) {
  console.log(
    `Value: ${primitiveTypeArray[i]}`,
    "Type:",
    typeof primitiveTypeArray[i]
  );
  i++;
}

i = 0;
do {
  console.log(
    `Value: ${primitiveTypeArray[i]}`,
    "Type:",
    typeof primitiveTypeArray[i]
  );
  i++;
} while (i < primitiveTypeArray.length);

// 3) Створити масив об'єктів (приклад об'єкта {name: ‘’, age: xx, pets: [cat, dog]})
//і використати метод filter, щоб вивести всіх, кому більше 20 років.

const ownerList = [
  { name: "Alice", age: 25, pets: ["cat"] },
  { name: "Bob", age: 18, pets: ["dog"] },
  { name: "Charlie", age: 30, pets: ["parrot", "dog"] },
  { name: "Diana", age: 22, pets: ["rabbit"] },
  { name: "Eve", age: 19, pets: ["fish"] },
  { name: "Frank", age: 28, pets: ["cat", "dog"] },
  { name: "Grace", age: 33, pets: ["hamster"] },
  { name: "Hank", age: 21, pets: ["snake"] },
  { name: "Ivy", age: 16, pets: ["turtle"] },
  { name: "Jack", age: 24, pets: ["dog", "cat"] },
];
console.log(ownerList.filter((owner) => owner.age > 20));

//4) За допомогою map пройтися по масиву із завдання вище та додати кожному домашню тварину. Результат вивести у консоль.

ownerList.map((owner) => owner.pets.push("New cat"));
console.log(ownerList)

// 5) Створити масив із 10 елементів і заповнити його числом 42 за допомогою відповідного методу (завдання знайти його в документації, посилання в описі до лекції).
// За допомогою splice вставити на 5-ту позицію слово "answer". За допомогою find знайти це слово і вивести його у консоль.

const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
someArr.fill(42).splice(4, 0, "answer");

const findingAnswer = someArr.find((el) => el === "answer");
console.log(findingAnswer);

//6) Створіть об'єкт із кількома ключами на ваш розсуд. І наведіть приклади використання keys, hasOwn, values.

const person = {
  name: "John",
  age: 30,
  occupation: "Software Engineer",
  hobbies: ["reading", "cycling", "gaming"],
  city: "New York",
  isMarried: false,
  children: 2,
  favoriteFood: "pizza",
  hasDrivingLicense: true,
  pets: ["dog", "cat"],
};

console.log(Object.keys(person));

if (Object.hasOwn(person, "occupation")) {
  console.log("Person has job");
} else {
  console.log("Person is umemployed");
}

console.log(Object.values(person));
