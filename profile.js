// profile.js
const params = new URLSearchParams(window.location.search);
const dogName = params.get("dog");

if (dogName) {
  document.getElementById("dogName").textContent = dogName;
}

// Example: prefill data (later connect to real data)
const dogData = {
  Nova: { breed: "Husky Mix", age: 3, notes: "Energetic and loves zoomies" },
  Rex: { breed: "Rottweiler", age: 5, notes: "Confident and loves agility" },
  Milo: { breed: "Pit Mix", age: 2, notes: "Goofy and loves squeaky toys" },
  Luna: { breed: "Shepherd Mix", age: 1, notes: "Curious and loves tug toys" }
};

if (dogData[dogName]) {
  document.getElementById("breedInput").value = dogData[dogName].breed;
  document.getElementById("ageInput").value = dogData[dogName].age;
  document.getElementById("notesInput").value = dogData[dogName].notes;
}

document.getElementById("editForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`${dogName}'s profile updated!`);
});
