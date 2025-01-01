// Function to search for products and highlight the result
function searchProducts(event) {
    event.preventDefault(); // Prevent form submission and page reload

    const searchInput = document.getElementById('search-input').value.trim().toLowerCase(); // Get user input
    const products = document.querySelectorAll('.product'); // Get all product elements
    const modal = document.getElementById('product-modal'); // Modal for displaying product details
    const modalDetails = document.getElementById('modal-details'); // Container for modal content

    let foundProduct = null; // Variable to store the matching product

    // Remove previous highlights
    products.forEach(product => {
        product.style.backgroundColor = ''; // Reset background color
        product.style.boxShadow = ''; // Reset shadow
    });

    // Iterate through products to find a match
    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase(); // Get product name
        if (productName.includes(searchInput)) {
            foundProduct = product; // Set found product
            product.style.backgroundColor = '#333'; // Add dark background
            product.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.8)'; // Add shadow for emphasis
            product.style.color = '#fff'; // Change text color for contrast
        }
    });

    // If a product is found, show details in the modal
    if (foundProduct) {
        const productName = foundProduct.getAttribute('data-name');
        const productImage = foundProduct.querySelector('img').src;
        const productDescription = foundProduct.querySelector('p').innerText;

        // Populate modal content
        modalDetails.innerHTML = `
            <h2>${productName}</h2>
            <img src="${productImage}" alt="${productName}" style="max-width: 100%; height: auto;">
            <p>${productDescription}</p>
        `;

        modal.style.display = 'flex'; // Show the modal
    } else {
        // If no match, alert the user
        alert(`No products found matching "${searchInput}". Please try again.`);
    }
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none'; // Hide the modal
}

// Optional: Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('product-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
