const copyright = document.getElementById('copyright');

var today = new Date()
var year = today.getFullYear()
copyright.innerText = year;

const jemisinBtn = document.getElementById('jemisinBtn');
const okoraforBtn = document.getElementById('okoraforBtn');
jemisinBtn.onclick = () => alert("This page will be added soon!");
okoraforBtn.onclick = () => alert("This page will be added soon!");

let butlerBooks = [];
fetch("butler.json").then(res => {
  return res.json();
}).then(loadedButlerBooks => {
    console.log(loadedButlerBooks);
    butlerBooks = loadedButlerBooks;
    loadBooks();
}).catch(err => {
  console.error(err);
});

const biblioItem = document.getElementById('biblioCards');
function loadBooks() {
  for (i = 0; i < butlerBooks.length; i++) {
    const biblioContent = `<div class="biblio-card-container">
        <div class="biblio-list-item">
          <div class="biblio-date">${butlerBooks[i].year}</div>
          <div class="biblio-booktitle">${butlerBooks[i].title}</div>
        </div>
        <div class="biblio-card-expand"><img src="./img/expand.png" alt="expand button"></div>
        <div class="biblio-expanded">
          <div class="biblio-expanded-top">
            <div class="biblio-subtitle">${butlerBooks[i].subtitle}</div>
            <div class="biblio-minimize"><img src="./img/minimize.png" alt="minimize button"></div>
          </div>
          <div class="biblio-subcard">
            <p class="biblio-booksummary">${butlerBooks[i].summary}</p>
              <a class="biblio-btn-link" href="${butlerBooks[i].url}" target="_blank"><button class="biblio-btn btn" type="button" name="button">View on Goodreads</button>
          </div>
        </div>
      </div>`

  biblioItem.insertAdjacentHTML('beforeEnd', biblioContent);

  let biblioBorder = document.querySelector('.biblio-card-container');
  const biblioBtn = document.querySelector('.biblio-btn');
  const biblioSubcard = document.querySelector('.biblio-subcard');



  console.log(biblioBorder);
    if (butlerBooks[i].series === "Patternist") {
      console.log('I\'m a Patternist Book!');
      biblioBorder.classList.add("patternist-container");
      biblioBtn.classList.add("patternist-btn");
      biblioSubcard.classList.add("patternist-subcard");
    } else if (butlerBooks[i].series === "Xenogenesis") {
      console.log('I\'m a Xenogenisis Book!');
      biblioBorder.classList.add("xeno-container");
      biblioBtn.classList.add("xeno-btn");
      biblioSubcard.classList.add("xeno-subcard");
    } else if (butlerBooks[i].series === "Earthseed") {
      console.log('I\'m an Earthseed Book!');
      biblioBorder.classList.add("earth-container");
      biblioBtn.classList.add("earth-btn");
      biblioSubcard.classList.add("earth-subcard");
    } else if (butlerBooks[i].series === "Kindred") {
      console.log('I\'m Kindred!');
      biblioBorder.classList.add("kin-container");
      biblioBtn.classList.add("kin-btn");
      biblioSubcard.classList.add("kin-subcard");
    } else if (butlerBooks[i].series === "Fledgling") {
      console.log('I\'m Fledgling!');
      biblioBorder.classList.add("fledge-container");
      biblioBtn.classList.add("fledge-btn");
      biblioSubcard.classList.add("fledge-subcard");
    } else {
      console.log('I\'m Bloodchild!');
      biblioBorder.classList.add("blood-container");
      biblioBtn.classList.add("blood-btn");
      biblioSubcard.classList.add("blood-subcard");
    }




}
const expandedTop = document.querySelector('.biblio-expanded-top');
const expandedSubcard = document.querySelector('.biblio-subcard');
const expandBtn = document.querySelector('.biblio-card-expand');
const minimizeBtn = document.querySelector('.biblio-minimize');

  expandBtn.onclick = () => {
    expandedTop.style.display = "flex";
    expandedSubcard.style.display = "block";
    expandBtn.style.display = "none";
  }
  minimizeBtn.onclick = () => {
    expandedTop.style.display = "none";
    expandedSubcard.style.display = "none";
    expandBtn.style.display = "inline-flex";
  }
  };
