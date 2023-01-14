


//data

const cl =(x)=>{
  console.log(x);
}

const data = [
  {
      front:"Tarzan of the Apes",
     diff:"title"
  },
  {
      front:"Crime and Punishment",
     diff:"title"
  },
  {
      front:"Dracula",
      diff:"title"
  },
  {
      front:"To the Lighthouse",
      diff:"title"
  },


  {
  front:"Wunder Heights",
  diff:"title"
},
{
  front:"Full Metal Jacket",
  diff:"title"
},
{
  front:"Un mundo para Julius",
  diff:"title"
},
{
  front:"Rayuela",
  diff:"title"
},

{
  front:"The life of Tarzan",
 diff:"title"
},
{
  front:"Crime and Punishment",
 diff:"title"
},
{
  front:"Dracula",
  diff:"title"
},
{
  front:"To the Lighthouse",
  diff:"title"
},


{
front:"Wunder Heights",
diff:"title"
},
{
front:"Full Metal Jacket",
diff:"title"
},
{
front:"Un mundo para Julius",
diff:"title"
},
{
front:"Rayuela",
diff:"title"
},
{
  front:"William Burroughs",
  diff:'author'
},
{
  front:"Dostoiesvky",
  diff:'author'
},
{
  front:"Bram Stroker",
  diff:'author'
},
{
  front:"Virginia Wolf",
  diff:'author'
},
{
  front:"Stanley Kubrick",
 diff:'author'
},
{
  front:"Alfredo Bryce Echenique",
 diff:"author"
},
{
  front:"Cortazar",
 diff:"medium"
},
{
  front:"English",
  diff:"hard"
},
{
  front:"Russian",
  diff:"language"
},
{
  front:"English",
  diff:"language"
},
{
  front:"English",
  diff:"language"
},
{
  front:"English",
  diff:"language"
},
{
  front:"English",
  diff:"language"
},
{
  front:"Spanish",
  diff:"language"
},
{
  front:"Spanish",
  diff:"language"
},
{
  front:"English",
  diff:"language"
},

]


// make a class
class Book {
  constructor(bk) {
      this.book=bk;
      this.flip=false;
      this.ele =document.createElement("div");
      this.front = document.createElement("div");
      this.back = document.createElement("div");
  }

  initEle(){
    const that=this;
    this.front.innerHTML=this.book.front;
    this.back.innerHTML=this.book.back;
    this.ele.appendChild(this.front);
    this.ele.appendChild(this.back);
    document.body.querySelector(".wrapper").appendChild(this.ele);
    this.checkFlip();
    this.ele.addEventListener("click", function(){
        that.flipCard();
    })
  }

  checkFlip(){
      if(this.flip){
         this.back.style.display="block";
         this.front.style.display="none";
      }else{
          this.back.style.display="none";
          this.front.style.display="block";
      }
  }

  flipBookgit(){
      this.flip=!this.flip;
      this.checkFlip();
  }
}

//init app
class App{
  constructor(){
      this.books=data;
      this.rendered=[];
  }

  render(){
      document.body.querySelector(".wrapper").innerHTML="";
      this.rendered=this.books.map((x)=>
          new Book(x).initEle()
      )
  }

  filterQuestions(dif){
      document.body.querySelector(".wrapper").innerHTML="";
      this.rendered=this.books.filter((x)=>{
          if(x.diff===dif){
              cl(x);
              return new Book(x).initEle()
          }
      })
  }

}

const app =new App();

app.render();

document.body.querySelector("#title").addEventListener("click", function(){
  app.filterQuestions("title")
})

document.body.querySelector("#author").addEventListener("click", function(){
  app.filterQuestions("author")
})

document.body.querySelector("#language").addEventListener("click", function(){
  app.filterQuestions("language")
})

// //////////////////////////////////////////////

//this is to picked the book and leave a comment







function myFunction() {
  let y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  y.setAttribute("value", "your comment...");
  document.body.appendChild(y);
}



function myFunction2() {
  document.getElementById("demo").innerHTML = "Tarzan is a series of 24 adventure novels written by Edgar Rice Burroughs (1875–1950) and published between 1912 and 1966";
}


function myFunction3() {
  document.getElementById("demo3").innerHTML = "is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866.";
}

function myFunction4() {
  document.getElementById("demo4").innerHTML = "is a novel by Bram Stoker, published in 1897. An epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. It has no single protagonist.";
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
