class LibraryCollection {
    
    constructor (capacity){
        this.capacity = capacity
        this.books = []

    }

    addBook(bookName, bookAuthor){

          if(this.capacity == 0)
          {
            throw new Error("Not enough space in the collection.")
          }

          this.books.push({
            bookName,
            bookAuthor,
            paid : false
          })

          this.capacity--

          return `The ${bookName}, with an author ${bookAuthor}, collect.`


    }


    payBook( bookName ) {

        let book = this.books.find( obj => obj.bookName == bookName)

        if(!book){
            throw new Error(`${bookName} is not in the collection.`)
        }


        if(book.paid == true)
        {
            throw new Error(`${bookName} has already been paid.`)
        }

        book.paid = true

        return `${bookName} has been successfully paid.`


    }


    removeBook(bookName) {
        let book = this.books.find( obj => obj.bookName === bookName)

        if(!book)
        {
            throw new Error(`The book, you're looking for, is not found.`)
        }

        if(book.paid == false)
        {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        let index = this.books.findIndex(obj => obj.bookName === bookName)

        this.books.splice(index,1)

        return `${bookName} remove from the collection.`

    }

    getStatistics(bookAuthor){
        let result = [];

        if(bookAuthor){

            let book = this.books.find( obj => obj.bookAuthor === bookAuthor)

            if(!book){
               throw new Error(`${bookAuthor} is not in the collection.`)
            }

            let Paidstatus = book.paid ? "Has Paid" : "Not Paid"

            result.push(`${book.bookName} == ${bookAuthor} - ${Paidstatus}.`)



        }else{
              result.push(`The book collection has ${this.capacity} empty spots left.`)
              this.books.sort( (a,b)=> a.bookName.localeCompare(b.bookName))
                        .map(obj => {
                             let paidStatus = obj.paid ? 'Has Paid' : 'Not Paid';
                             result.push(`${obj.bookName} == ${obj.bookAuthor} - ${paidStatus}.`);});



        }

        return result.join("\n")
    }


}
