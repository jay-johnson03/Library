let library = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 2, read: true },
    { title: "A Pocket Full of Rye", author: "Agatha Christie", pages: 256000, read: false }
];

// Function to display the books (optional but helpful)
function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    library.forEach((book, index) => {
        const li = document.createElement('li');

        const text = document.createElement('p');
        text.textContent = `${book.title} by ${book.author} (${book.pages} pages) - ${book.read ? '✓ Read' : 'Not Read'}`;

        // Toggle read button
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = book.read ? 'Mark as Unread' : 'Mark as Read';
        toggleBtn.className = book.read
            ? 'toggle-btn btn-read'
            : 'toggle-btn btn-unread';

        toggleBtn.addEventListener('click', () => {
            library[index].read = !library[index].read;
            renderBooks();
        });

        // Function to remove a book
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        removeBtn.addEventListener('click', () => {
            library.splice(index, 1);
            renderBooks();
        });

        li.appendChild(text);
        li.appendChild(toggleBtn);
        li.appendChild(removeBtn);

        bookList.appendChild(li);
    });
}

// Function to toggle read status
function toggleRead(index) {
    library[index].read = !library[index].read;
    renderBooks();
}

// Function to handle the form submission
function addBook(event) {
    event.preventDefault();

    const bookTitleInput = document.getElementById('title');
    const bookAuthorInput = document.getElementById('author');
    const bookPagesInput = document.getElementById('pages');
    const toggleCheckbox = document.getElementById('toggleCheckbox');

    // Add the new book to the array
    library.push({
        title: bookTitleInput.value,
        author: bookAuthorInput.value,
        pages: parseInt(bookPagesInput.value),
        read: toggleCheckbox.checked
        
    });

    button.addEventListener('click', function() {
  // Toggle the 'changed' class on the button element
  this.classList.toggle('changed');
});

    // Update the display
    renderBooks();

    // Clear the input field for the next entry
    bookTitleInput.value = '';
    bookAuthorInput.value = '';
    bookYearInput.value = '';
    toggleCheckbox.checked = false;
    bookTitleInput.focus();
}

function removeBook(index) {
    library.splice(index, 1);
    renderBooks();
}

// Get the form element and attach the event listener
const bookForm = document.getElementById('bookForm');
bookForm.addEventListener('submit', addBook);

// Initial render when the page loads
renderBooks();