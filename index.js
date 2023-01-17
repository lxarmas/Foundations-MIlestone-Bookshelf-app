

const books = [
  {
    "title": "Cracking the coding interview",
    "subtitle":"189 programming questions and solutions",
    "author":"Gayle Laakmann McDowell",
    "category":"Programming",
    "language":"Quechua"
  },
  {
    "title": "No friend but the keywords",
    "subtitle":"Writing from Ale's prison",
    "author":"Behrouz Boochani",
    "category":"Literature",
    "language":"Mandarin"
  },
  {
    "title": "the new Indian Cuisine",
    "subtitle":"Classic and contemporary vegetarian dishes",
    "author":"Vikas Khanna",
    "category":"Cuisine",
    "language":"Bantu"
  },
  {
    "title": "Upheaval",
    "subtitle":"Turning points for nations in crisis",
    "author":"Jared Diamond",
    "category":"Politics",
    "language":"English"
  },
  {
    "title": "Algorithms",
    "subtitle":"Fourth Edition",
    "author":"Robert Sedgewick, Kevin Wayne",
    "category":"Programming",
    "language":""
  },
  {
    "title": "How We Die",
    "subtitle":"Reflections on Life's Final Chapter",
    "author":"Sherwin B. Nuland",
    "category":"Literature",
    "language":"Creole"
  },
  {
    "title": "The Circle",
    "subtitle":"",
    "author":"Dave Eggers",
    "category":"Fiction",
    "language":"Portuguese"
  },
  {
    "title": "The Algorithm Design Manual",
    "subtitle":"",
    "author":"Steven S. Skiena",
    "category":"Programming",
    "language":"Danish"
  },
  {
    "title": "I Contain Multitudes",
    "subtitle":"The microbes within us and a grander view of life",
    "author":"Ed Yong",
    "category":"Science",
    "language":"Russian"
  },
  {
    "title": "The Silkwarm",
    "subtitle":"A Cormoran Strike Novel",
    "author":"Robert Galbraith",
    "category":"Literature",
    "language":"Polish"
  },
  {
    "title": "Cosmos",
    "subtitle":"",
    "author":"Carl Sagan",
    "category":"Science",
    "language":"German"
  },
  {
    "title": "Comanche Moon",
    "subtitle":"",
    "author":"Larry McMurtry",
    "category":"Science",
    "language":"French"
  },
  {
    "title": "Nine Pints",
    "subtitle":"A journey through the money, medicine, and mysteries of blook",
    "author":"Rose George",
    "category":"Science",
    "language":"Spanish"
  },
]



let render = function(data) {
  let app = document.getElementById('app');
  let booksHTMLString = '<ul>'+
    data.map(function(book){
      return '<li>'+
              '<strong>Title: </strong>' + book.title + '<br/>' +
              '<strong>Subtitle: </strong>' + book.subtitle + '<br/>' +
              '<strong>Author: </strong>' + book.author + '<br/>' +
              '<strong>Category: </strong>' + book.category + '<br/>' +
              '<strong>Language: </strong>' + book.language + '<br/>' +
            '</li>';
    }).join('');
    + '</ul>';

  app.innerHTML = booksHTMLString;
}
render(books);

function mySearch(event) {
  event.preventDefault();  //stops the page from reloading upon submission.
  // Get the user string from the input field
  let searchUser = event.target.elements['search'].value;
  // Tokenize the search terms and remove empty spaces
  let tokens = searchUser
    .toLowerCase() 
    .split(' ')
    .filter(function (token) {
      return token.trim() !== '';
    });
    // We split the search string into individual tokens and remove any white space.
    // searchUser = "Cracking the Coding Interview"
    // tokens = ["cracking","the","coding","interview"]
  
    if (tokens.length) {
    //  Create a regular expression of all the search data from the user
    let searchUserRegex = new RegExp(tokens.join('|'), 'gim');
    let filteredList = books.filter(function (book) {
      // Create a string of all object values
      let bookString = '';
      for (let key in book) {
        if (book.hasOwnProperty(key) && book[key] !== '') {
          bookString += book[key].toString().toLowerCase().trim() + ' ';
        }
      }
      // Return book objects where a match with the search regex if found
      return bookString.match(searchUserRegex);
    });
    // Render the search results
    render(filteredList);
  }
}

document.addEventListener('submit', mySearch);
document.addEventListener('reset', function(event){
  event.preventDefault();
  render(books);
})

//this is to picked the book and leave a comment

function myFunction() {
  let y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  y.setAttribute("value", "your comment...");
  document.body.appendChild(y);
}



function myFunction2() {
  document.getElementById("demo").innerHTML = "Cracking the Code is a great book to nail your programming interviews";
}


function myFunction3() {
  document.getElementById("demo3").innerHTML = "No friend but the keywords will take you to a different paths to cover the new reals of programming";
}

function myFunction4() {
  document.getElementById("demo4").innerHTML = "Get ready for a new lifestyle with this exemplary set of vegetarian dishes";
}

function myFunction5() {
  document.getElementById("demo5").innerHTML = " the novel includes little dialogue and almost no direct action; most of it is written as thoughts and observations";
}

function myFunction6() {
  document.getElementById("demo6").innerHTML = "The novel was influenced by Romanticism and Gothic fiction.";
}

function myFunction7() {
  document.getElementById("demo7").innerHTML = "A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp";
}

function myFunction8() {
  document.getElementById("demo8").innerHTML = "The life of a little boy around Lima in the 1930s.";
}

function myFunction9() {
  document.getElementById("demo9").innerHTML = "Julio Cortazar's Masterpiece";
}


var arrCitys=new Array();
var arrNames=new Array();
var arrAges=new Array();
 
function savedata(){
    let name = document.getElementById('name').value;
    let city = document.getElementById('City').value;
    let age = document.getElementById('age').value;
    arrCitys[arrCitys.length]=city;    
    arrNames[arrNames.length]=name;
    arrAges[arrAges.length]=age;
  }
   
 
function displayData() 
{
  let content="<b>Data Entered by User :</b><br>";
  content+= [...arrNames]+"</br>";
  content+=[...arrCitys]+"</br>";
  content+=[...arrAges]+"</br>";
 
  document.getElementById('display').innerHTML = content;
}
 