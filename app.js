const listings = [
  {
    title: "2-Bedroom Apartment in Kilimani",
    location: "Kilimani, Nairobi",
    price: "KSh 60,000/month",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
  },
  {
    title: "1-Bedroom in Mombasa",
    location: "Nyali, Mombasa",
    price: "KSh 25,000/month",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  }
];

const listingsDiv = document.getElementById("listings");

listings.forEach(data => {
  const card = document.createElement("div");
  card.classList.add("listing");
  card.innerHTML = `
    <img src="${data.image}" alt="${data.title}">
    <div class="details">
      <h3>${data.title}</h3>
      <p>${data.location}</p>
      <p><strong>${data.price}</strong></p>
    </div>
  `;
  listingsDiv.appendChild(card);
});
