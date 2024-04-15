const arr =["one", "two", "three", "four"]

const values = arr.forEach( (item) => {
    console.log(item);
    return item;
})

console.log(values);

const arr1 = [1,2,3,4,5,6,7,8,9]
const val = arr1.filter( (num) => num>2);
console.log(val);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let book = books.filter( (bo) => bo.title === "Book Nine")
  book = books.filter( (bo) => bo.genre === "Fiction" && bo.edition > 2000)
  console.log(book);