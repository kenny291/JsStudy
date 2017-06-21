function Book(title, author) {
    this.title = title
    this.author = author
}
function tryBook() {
    try {
        var myBook = new Book("Gio may", "Hoa la canh")
        document.write("title: " + myBook.title + "; ")
        document.write("author: " + myBook.author)
        document.write("<br />");
        document.write(typeof 12)

        //throw
        if (1 == 1) {
            throw ("custom error")
        }

    }
    catch (e) {
        alert("Error: " + e)
    }
    finally {
        alert("Finally")
    }
}

// Advanced
function validate() {
    if (document.myForm.Zip.value == "" ||
        isNaN(document.myForm.Zip.value) ||
        document.myForm.Zip.value.length != 5) {
        alert("Please provide a zip in the format #####.");
        document.myForm.Zip.focus();
        return false;
    }

    if (document.myForm.Country.value == "-1") {
        alert("Please provide your country!");
        return false;
    }
    return (true);
}
