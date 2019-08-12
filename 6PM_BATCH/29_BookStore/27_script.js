class Book {
    constructor(bookName,isbn,author,category){
        this.bookName = bookName;
        this.isbn = isbn;
        this.author = author;
        this.category = category;
    }
}

class UIBook {

    // displayBook
    static displayBook(book){
        let tableBody = document.querySelector('#table_body');
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `<tr>
                                <td>${book.bookName}</td>
                                <td>${book.isbn}</td>
                                <td>${book.author}</td>
                                <td>${book.category}</td>
                                <td>
                                    <a href="#">
                                        <i class="fa fa-times-circle delete"></i>
                                     </a>
                                </td>
                             </tr>`;
        tableBody.appendChild(tableRow);
        UIBook.displayAlertMessage('green','Book is Added');
    }

    // validate Book
    static validateBook(book){
        return UIBook.validateBookName(book) &&
               UIBook.validateISBN(book) &&
               UIBook.validateAuthor(book) &&
               UIBook.validateCategory(book);
    }

    // validate Book Name
    static validateBookName(book){
        if(book.bookName === ''){
            // display message
            UIBook.displayAlertMessage('red','Book Name is Required');
            UIBook.applyColors('#book_name');
            return false;
        }
        else{
            // remove Colors
            UIBook.removeColors('#book_name');
            return true;
        }
    }

   // validate ISBN
    static validateISBN(book){
        if(book.isbn === ''){
            // display message
            UIBook.displayAlertMessage('red','ISBN is Required');
            UIBook.applyColors('#isbn');
            return false;
        }
        else{
            // remove Colors
            UIBook.removeColors('#isbn');
            return true;
        }
    }

    // validate Author
    static validateAuthor(book){
        if(book.author === ''){
            // display message
            UIBook.displayAlertMessage('red','Author is Required');
            UIBook.applyColors('#author');
            return false;
        }
        else{
            // remove Colors
            UIBook.removeColors('#author');
            return true;
        }
    }

    // validate Category
    static validateCategory(book){
        if(book.category === ''){
            // display message
            UIBook.displayAlertMessage('red','Category is Required');
            UIBook.applyColors('#category');
            return false;
        }
        else{
            // remove Colors
            UIBook.removeColors('#category');
            return true;
        }
    }

    // clear form Fields
    static clearFormFields(){
        document.querySelector('#book_name').value = '';
        document.querySelector('#isbn').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#category').value = '';
    }

    // display alert message
    static displayAlertMessage(color,message){
        let messageDiv = document.querySelector('#msg-div');
        let pTag = document.createElement('p');
        pTag.innerText = message;
        pTag.style.backgroundColor = color;
        messageDiv.appendChild(pTag);
        setTimeout(UIBook.deleteErrorMessage,2000);
    }

    // delete Error Message
    static  deleteErrorMessage = () => {
        document.querySelector('#msg-div p').remove();
    };

    // Apply colors
    static applyColors(id){
        let inputElement = document.querySelector(id);
        inputElement.style.boxShadow = '0 0 10px red';
        inputElement.style.border = '1px solid red';
    }

    // Remove colors
    static removeColors(id){
        let inputElement = document.querySelector(id);
        inputElement.style.boxShadow = '0 0 0px white';
        inputElement.style.border = '1px solid gray';
    }

    // remove a row from table
}

// get the Form Element
let bookStoreForm = document.querySelector('#bookstore-form');
bookStoreForm.addEventListener('submit',function(event) {

    // Prevent the form Submission
    event.preventDefault();

    // get form data
    let bookName = document.querySelector('#book_name').value;
    let isbn = document.querySelector('#isbn').value;
    let author = document.querySelector('#author').value;
    let category = document.querySelector('#category').value;

    // create a Book Object
    let book = new Book(bookName,isbn,author,category);

    // Validate the Book Object
    let isValid = UIBook.validateBook(book);

    if(isValid){
        UIBook.displayBook(book);
        UIBook.clearFormFields();
    }

});

// Delete Book Functionality
let tableBody = document.querySelector('#table_body');
tableBody.addEventListener('click',function(event) {
    let element = event.target;
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.parentElement.remove();
        UIBook.displayAlertMessage('blue','Book is Removed');
    }
});