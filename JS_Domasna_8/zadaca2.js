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

async function cartoonFilm() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const container = document.getElementById("container");

    data.results.forEach((el) => {
      const characterCard = document.createElement("div");
      characterCard.setAttribute("class", "character-card");

      const characterImg = document.createElement("img");
      characterImg.src = el.image;
      characterCard.appendChild(characterImg);

      const paragraphName = document.createElement("p");
      paragraphName.setAttribute("class", "name");
      paragraphName.textContent = el.name;
      characterCard.appendChild(paragraphName);

      const paragraphGender = document.createElement("p");
      paragraphGender.setAttribute("class", "gender");
      paragraphGender.textContent = el.gender;
      characterCard.appendChild(paragraphGender);

      const paragraphStatus = document.createElement("p");
      paragraphStatus.setAttribute("class", "status");
      const status = (paragraphStatus.textContent = el.status);
      characterCard.appendChild(paragraphStatus);

      const paragraphEpisodesNumber = document.createElement("p");
      paragraphEpisodesNumber.setAttribute("class", "episodes");
      paragraphEpisodesNumber.textContent = el.episode.length;
      characterCard.appendChild(paragraphEpisodesNumber);

      container.appendChild(characterCard);

      if (status === "Alive") {
        characterCard.style.color = "#008140";
      } else if (status === "Dead") {
        characterCard.style.color = "red";
      } else if (status === "unknown") {
        characterCard.style.color = "gray";
      }
    });
  } catch (error) {
    console.log(error);
  }
}

cartoonFilm();
