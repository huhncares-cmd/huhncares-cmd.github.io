const username = "huhncares-cmd";
const url = `https://api.github.com/users/${username}/repos`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("card-container"); // Replace "card-container" with the ID of the container element in your HTML
    let counter = 0;
    data.forEach(repo => {
      counter++;
      if (counter > 4) return; // Change this number to the number of repos you want to display
      const card = document.createElement("div");
      card.classList.add("card"); // Add any CSS classes you want to apply to the card element
      card.innerHTML = `
        <h3><a class="heading" href="${repo.html_url}">${repo.name}</a></h3>
        <p>${repo.description ? repo.description : ""}</p>
        <p>
        <a class="language">${repo.language ? repo.language : ""}</a>
        </p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error(error));