const searchInput = document.querySelector(".search-input");
const container = document.querySelector(".box-container");
const nightModeButton = document.getElementById("nightModeButton");

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const boxes = container.querySelectorAll(".box");

    if (searchTerm === "") {
      
        boxes.forEach(box => {
            box.style.display = "block";
            box.classList.remove("highlighted");
        });
    } else {
        boxes.forEach(box => {
            const boxName = box.querySelector("label").textContent.toLowerCase();
            if (boxName.includes(searchTerm)) {
                box.style.display = "block"; 
                box.classList.add("highlighted"); 
            } else {
                box.style.display = "none"; 
                box.classList.remove("highlighted"); 
            }
        });
    }
});


        const body = document.body;

        // Function to toggle night mode
        function toggleNightMode() {
            if (body.classList.contains("night-mode")) {
                body.classList.remove("night-mode");
            } else {
                body.classList.add("night-mode");
            }
        }

        nightModeButton.addEventListener("click", toggleNightMode);


// ---------------------------------------Add boxes------------------------------------------


// function createCatalog(files, titles, imgLinks) {
//     // Check if all three lists have the same length
//     if (files.length !== titles.length || files.length !== imgLinks.length) {
//       console.error("Lists must have the same length.");
//       return;
//     }
  
//     // Create a catalog container element
//     const catalogContainer = document.createElement("div");
//     catalogContainer.classList.add("catalog");
  
//     // Loop through the lists and create catalog entries
//     for (let i = 0; i < files.length; i++) {
//       // Create a catalog entry for each item
//       const catalogEntry = document.createElement("div");
//       catalogEntry.classList.add("catalog-entry");
  
//       // Create a link to the file
//       const fileLink = document.createElement("a");
//       fileLink.href = files[i];
//       fileLink.textContent = titles[i];
  
//       // Create an image element
//       const img = document.createElement("img");
//       img.src = imgLinks[i];
//       img.alt = titles[i];
  
//       // Append the file link and image to the catalog entry
//       catalogEntry.appendChild(fileLink);
//       catalogEntry.appendChild(img);
  
//       // Append the catalog entry to the catalog container
//       catalogContainer.appendChild(catalogEntry);
//     }
  
//     // Append the catalog container to the document
//     document.body.appendChild(catalogContainer);
//   }
  
//   // Example usage with sample data
//   const files = ["k.htm", "l.html"];
//   const titles = ["kar", "lak"];
//   const imgLinks = ["link1", "link2"];
//   createCatalog(files, titles, imgLinks);
  