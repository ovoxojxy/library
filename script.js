const myLibrary = []

const tbl = document.createElement("table")
const tblBody = document.createElement("tbody")
let libraryVis = false

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}


function addBookToLibrary(Library) {
    let title = prompt("Enter book title:")
    let author = prompt("Enter book author:")
    let pages = prompt("Enter Numebr of pages:")

    if (title && author && pages) {
        let book = new Book(title, author, pages)
        let text = `${book.title} added to library.`
        if (confirm(text) === true){
            myLibrary.push(book)
            let index = myLibrary.indexOf(book)


            const row = document.createElement("tr");

            const title = document.createElement("td")
            const titleText = document.createTextNode(`${book.title}`)

            const author = document.createElement("td")
            const authorText = document.createTextNode(`${book.author}`)

            const pages = document.createElement("td")
            const pageText = document.createTextNode(`${book.pages}`)

            const buttonCell = document.createElement("td")
            const deleteButton = document.createElement("button") 
            deleteButton.textContent = "Delete"
            deleteButton.addEventListener("click", function() {
                row.remove();
                myLibrary.splice(index, 1)
            })

            title.appendChild(titleText)
            row.appendChild(title)

            author.appendChild(authorText)
            row.appendChild(author)

            pages.appendChild(pageText)
            row.appendChild(pages)

            buttonCell.appendChild(deleteButton)
            row.appendChild(buttonCell)

            tblBody.appendChild(row);

        } else {
            text = `${book.title} was not added to library`
        }
    } else {
        console.log("All fields required to add a book")
    }
    
}

function removeBookFromLib(Library){
    const confirmed = confirm(`Are you sure you want to remove "${book.title}"?`)
    if (confirmed) {
        myLibrary
    }
}




function displayBooks(Library) {
    if (Library.length < 1){
        alert("Library is empty")
        return;
    }
    if (!libraryVis){
        libraryVis = true
        tbl.appendChild(tblBody)
        document.body.appendChild(tbl)

        tbl.setAttribute("border", "2")
        // console.log(Library)
    }

    
   
}

function clearLibraryDisplay(doc) {
    if (libraryVis === true){
        document.body.removeChild(tbl)
        libraryVis = false
    }
    
}