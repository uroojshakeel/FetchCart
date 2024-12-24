// JavaScript to fetch data and render cards dynamically
fetch("https://dummyapi.online/api/movies")
.then((res) => res.json())
.then((movies) => {
    const container = document.getElementById("movieContainer");

    movies.map((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Gradient background cards
        card.innerHTML = `
            <div class="card-content">
                <img src="${movie.image}">
                <h2>${movie.movie}</h2>
                <p class="rating">⭐ Rating: ${movie.rating}</p>
            </div>
        `;
        container.appendChild(card);
    });
})
.catch((error) => {
    console.error("Error fetching data:", error);
    const container = document.getElementById("movieContainer");
    container.innerHTML = `<p style="color: red;">Unable to fetch movies. Please try again later.</p>`;
});
