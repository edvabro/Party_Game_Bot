const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

fetch(apiUrl, {
  headers: { "User-Agent": "Mozilla/5.0" }
})
  .then(response => {
    if (!response.ok) throw new Error(`Network response was not ok (${response.status})`);
    return response.json();
  })
  .then(data => {
    const jokeElement = document.getElementById("joke");

    // Show only the joke text
    if (data.type === "single") {
      jokeElement.textContent = data.joke;
    } else if (data.type === "twopart") {
      jokeElement.textContent = `${data.setup}\n\n${data.delivery}`;
    }
  })
  .catch(error => console.error("Fetch error:", error));
