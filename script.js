
// ======================================================
// MINI PROJECT: PRODUCT LISTING PAGE
// API: FAKE STORE API
// ======================================================


// 1. Select API container

const api = document.querySelector(".api");


// 2. Display loading message

api.innerHTML = "Loading products...";


// 3. Fetch API data

fetch("https://fakestoreapi.com/products")

    // 4. Convert response into JSON

    .then((response) => {

        if (!response.ok) {
            throw new Error("Failed to fetch products!");
        }

        return response.json();

    })

    // 5. Display products

    .then((data) => {

        console.log("Products:", data);

        // Clear loading message

        api.innerHTML = "";

        // Store product cards

        let allProducts = "";

        // 6. Loop through products

        data.forEach((product) => {

            // Create separate card

            const card = document.createElement("div");

            card.className = "card";


            // 7. Display product information

            card.innerHTML = `

                <h2>ID: ${product.id}</h2>

                <h3>
                    ${product.title.slice(0, 50)}
                </h3>

                <p class="price">
                    Price: $${product.price}
                </p>

                <p>
                    ${product.description.slice(0, 100)}
                </p>

                <img
                    src="${product.image}"
                    alt="${product.title}"
                >

            `;


            // Add current card to product collection

            allProducts += `
                <div class="card">
                    ${card.innerHTML}
                </div>
            `;

        });


        // 8. Display all product cards

        api.innerHTML = allProducts;

        console.log("All products displayed successfully!");

    })


    // 9. Handle API errors

    .catch((error) => {

        console.warn("API Error:", error.message);

        api.innerHTML = `
            <p class="error">
                Error: ${error.message}
            </p>
        `;

    })


    // 10. Finally execute after API request

    .finally(() => {

        console.log("API request completed");

        api.innerHTML += `
            <p class="completed">
                API request completed
            </p>
        `;

    });
