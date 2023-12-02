// Задача 1.
// Во продолжение е даден следниот API endpoint: https://jsonplaceholder.typicode.com/users коj што враќа податоци за корисници. Потребно е да се прикажат следниве информации во пребарувачот за секој од корисниците:

// Име
// Телефонски број
// Името на компанијата на корисникот
// Да се искористи:

// async/await
// try и catch блокови
// екстерен CSS фајл за стилизирање.

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const container = document.getElementById("container");
    data.forEach((el) => {
      const paragraphName = document.createElement("p");
      paragraphName.setAttribute("class", "name");
      const paragraphPhone = document.createElement("p");
      paragraphPhone.setAttribute("class", "phone");
      const paragraphCompany = document.createElement("p");
      paragraphCompany.setAttribute("class", "company");
      paragraphName.textContent = el.name;
      paragraphPhone.textContent = el.phone;
      paragraphCompany.textContent = el.company.name;
      container.appendChild(paragraphName);
      container.appendChild(paragraphPhone);
      container.appendChild(paragraphCompany);
    });
  } catch (error) {
    console.log(error);
  }
}
getData();

// Задача 2.
// Во продолжение е даден следниот API endpoint: https://rickandmortyapi.com/api/character кој што враќа податоци за карактерите од цртаниот филм Rick and Morty. Ваша задача е да ги прикажете следниве податоци за секој карактер во форма на картичка:

// Слика
// Име
// Пол
// Статус
// Бројот на епизоди во кој се појавил
// Дополнително:

// Еден ред да содржи 5 картички.
// Доколку статусот на карактерот е “Alive” текстот да биде во зелена боја, доколку е “Dead” текстот да биде во црвена боја, доколку е “Unknown” да биде во сива боја.
// За стилизирање да се искористи ектерен CSS фајл.

// const userData = {
//   name: "john",
//   age: 32,
//   isStudent: false,
// };

// const jsonString = JSON.stringify(userData);
// console.log(jsonString);

// const parsedData = JSON.parse(jsonString);
// console.log(parsedData);

// function fetchData() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       const emailContainer = document.getElementById("email-container");
//       data.forEach((el) => {
//         const emailParagraph = document.createElement("p");
//         emailParagraph.textContent = el.email;
//         emailContainer.appendChild(emailParagraph);
//       });
//     })
//     .catch((error) => console.log(error));
// }

// // fetchData();

// async function fetchDataAndDisplay() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     const emailContainer = document.getElementById("email-container");
//     data.forEach((el) => {
//       const emailParagraph = document.createElement("p");
//       emailParagraph.textContent = el.email;
//       emailContainer.appendChild(emailParagraph);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// // fetchDataAndDisplay();

// const postData = () => {
//   const newPost = {
//     userId: 13,
//     title: "Post 13",
//     body: "random post",
//   };
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(newPost),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

// postData();
