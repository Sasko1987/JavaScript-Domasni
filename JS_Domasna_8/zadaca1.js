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
