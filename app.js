// --- Import Firebase ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// --- Firebase Config ---
const firebaseConfig = {
  apiKey: "AIzaSyBOoGvZDvzp-CHLVllJAujTdo84vxcz_hM",
  authDomain: "rageo-rentals.firebaseapp.com",
  projectId: "rageo-rentals",
};

// --- Initialize Firebase ---
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- Select listings container ---
const listingsDiv = document.getElementById("listings");

// --- Load listings from Firestore ---
async function loadListings() {
  listingsDiv.innerHTML = "<p>Loading listings...</p>";

  try {
    const q = query(collection(db, "listings"), orderBy("created", "desc"));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      listingsDiv.innerHTML = "<p>No properties available yet. Check back soon!</p>";
      return;
    }

    listingsDiv.innerHTML = ""; // clear placeholder

    snapshot.forEach((doc) => {
      const data = doc.data();
      const card = document.createElement("div");
      card.classList.add("listing");
      card.innerHTML = `
        <img src="${data.image}" alt="${data.title}">
        <div class="details">
          <h3>${data.title}</h3>
          <p><strong>Location:</strong> ${data.location}</p>
          <p><strong>Price:</strong> ${data.price}</p>
          <p>${data.description || ""}</p>
        </div>
      `;
      listingsDiv.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading listings:", error);
    listingsDiv.innerHTML = "<p>Failed to load listings. Check console for details.</p>";
  }
}

loadListings();

