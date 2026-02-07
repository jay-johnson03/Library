let library = ["The Hobbit", "Dune"];

// Function to display the books (optional but helpful)
function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear the current list
    library.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        bookList.appendChild(li);
    });
}

// Function to handle the form submission
function addBook(event) {
    event.preventDefault();

    const bookTitleInput = document.getElementById('bookTitle');
    const newBookTitle = bookTitleInput.value;

    // Add the new title to the array
    library.push(newBookTitle);

    // Update the display
    renderBooks();

    // Clear the input field for the next entry
    bookTitleInput.value = '';
    bookTitleInput.focus();
}

// Get the form element and attach the event listener
const bookForm = document.getElementById('bookForm');
bookForm.addEventListener('submit', addBook);

// Initial render when the page loads
renderBooks();