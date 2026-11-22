// const student = {
//   name: "Али",
//   age: 18,
//   course: "Frontend"
// };

// student.age=19
// student.city="бишкек"
// delete student.course 
// console.log(student)

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "Black"
// };
// Object.keys(car)
// console.log(car);
// console.log(Object.keys(car));
// console.log(Object.keys(car).length);
// const keys = Object.keys(car);
// for (const key of keys) {
//     console.log(key);
    
// }

// const product = {
//   name: "Laptop",
//   price: 50000,
//   quantity: 3
// };

// Object.values(product)
// const oppo=Object.values(product) 
// console.log(product);
// console.log(oppo);
// for (const oppo of Object.values(product)) {
//   console.log(oppo);
// }
// if (Object.values(product).includes(50000)) {
//   console.log("Число 50000 существует!");
// }else {
//     console.log("not");
    
// }

// const user = {
//   name: "Руслан",
//   age: 20,
//   city: "Ош"
// };

// Object.entries(user)
// const entries = Object.entries(user);
// for (const [key, value] of entries) {
//   console.log(`${key}: ${value}`);
// }
// console.log(user);

// const user1 = {
//   name: "Азамат",
//   age: 18
// };

// const user2 = {
//   city: "Бишкек",
//   course: "JavaScript"
// };
// const user3=(user1,user2)
// Object.assign( user3,user1,user2 )
// console.log(Object.assign(user1,user2));

// const phone = {
//   brand: "Apple",
//   model: "iPhone 15",
//   price: 80000
// };

// Object.freeze(phone)
// phone.price=7000
// phone.color=yellow
// phone.model=15
// console.log(phone);
// потому что Object.freeze замораживает обьекты и не позволяет к ним добавлять изменять и удалять


// const employee = {
//   name: "Бекзат",
//   position: "Developer",
//   salary: 40000
// };
// Object.seal(employee)
// employee.salary=50000
// employee.age=45
// delete employee.position
// console.log(employee);
// Чем Object.seal() отличается от Object.freeze()? он не зомораживает полностью он позволяет изменять но не позволяет удалять или добовлять

// const shop = {
//   name: "Tech Store",
//   products: 25,
//   city: "Ош",
//   rating: 4.5
// };
// Object.keys(shop)
// Object.values(shop)
// Object.entries(shop)
// delete shop.rating
// Object.freeze(shop)
// shop.products=50
// console.log("Значения:", Object.values(shop));
// console.log("Пары ключ-значение:", Object.entries(shop));
// shop.delivery = true;

// console.log("Ключи:", Object.keys(shop));


const profile = {
  username: "coder123",
  age: 17,
  city: "Ош"
};

const newData = {
  age: 18,
  city: "Бишкек",
  course: "Backend"
};

const updatedProfile = Object.assign({}, profile, newData);
console.log(Object.keys(updatedProfile));
console.log(Object.keys(updatedProfile).length);
for (let key in updatedProfile) {
  console.log(key + ": " + updatedProfile[key]);
}
Object.seal(updatedProfile);
updatedProfile.username = "new_user";
updatedProfile.email = "test@mail.com";
console.log(updatedProfile);

const student = {
  name: "Айбек",
  age: 19,
  course: "JavaScript",
  grade: 85
};

const additionalInfo = {
  city: "Бишкек",
  active: true
};

const fullStudent = Object.assign({}, student, additionalInfo);


console.log(Object.keys(fullStudent));

console.log(Object.values(fullStudent));


for (let [key, value] of Object.entries(fullStudent)) {
  console.log(key + ": " + value);
}

if (fullStudent.grade >= 80) {
  console.log("Отличный студент");
} else {
  console.log("Нужно улучшить результат");
}

fullStudent.grade = 95;


Object.freeze(fullStudent);

fullStudent.name = "Нурлан";


console.log(Object.isFrozen(fullStudent)); 
console.log(fullStudent);