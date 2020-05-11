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
  key = 0;
  for (i = 0; i < butlerBooks.length; i++) {
    key++;
    const biblioContent = `<div id="biblioBorder${key}" class="biblio-card-container">
        <div class="biblio-list-item">
          <div class="biblio-date">${butlerBooks[i].year}</div>
          <div class="biblio-booktitle">${butlerBooks[i].title}</div>
        </div>
        <div  id="expandBtn${key}" class="biblio-card-expand"><img src="./img/expand.png" alt="expand button"></div>
        <div class="biblio-expanded">
          <div id="expandedTop${key}" class="biblio-expanded-top">
            <div class="biblio-subtitle">${butlerBooks[i].subtitle}</div>
            <div id="minimizeBtn${key}" class="biblio-minimize"><img src="./img/minimize.png" alt="minimize button"></div>
          </div>
          <div id="expandedSubcard${key}" class="biblio-subcard">
            <p class="biblio-booksummary">${butlerBooks[i].summary}</p>
              <a class="biblio-btn-link" href="${butlerBooks[i].url}" target="_blank"><button id="btn${key}" class="biblio-btn btn" type="button" name="button">View on Goodreads</button>
          </div>
        </div>
      </div>`

  biblioItem.insertAdjacentHTML('beforeEnd', biblioContent);



const biblioBorder = document.getElementById(`biblioBorder${key}`);
const biblioBtn = document.getElementById(`btn${key}`);
const expandedTop = document.getElementById(`expandedTop${key}`);
const expandedSubcard = document.getElementById(`expandedSubcard${key}`);
const expandBtn = document.getElementById(`expandBtn${key}`);
const minimizeBtn = document.getElementById(`minimizeBtn${key}`);

      expandBtn.onclick = () => {
        expandedTop.style.display = "flex";
        expandedSubcard.style.display = "block";
        expandBtn.style.display = "none";
      };

      minimizeBtn.onclick = () => {
        expandedTop.style.display = "none";
        expandedSubcard.style.display = "none";
        expandBtn.style.display = "inline-flex";
      }

      if (butlerBooks[i].series === "Patternist") {
        console.log('I\'m a Patternist Book!');
        biblioBorder.classList.add("patternist-container");
        biblioBtn.classList.add("patternist-btn");
        expandedSubcard.classList.add("patternist-subcard");
      } else if (butlerBooks[i].series === "Xenogenesis") {
        console.log('I\'m a Xenogenisis Book!');
        biblioBorder.classList.add("xeno-container");
        biblioBtn.classList.add("xeno-btn");
        expandedSubcard.classList.add("xeno-subcard");
      } else if (butlerBooks[i].series === "Earthseed") {
        console.log('I\'m an Earthseed Book!');
        biblioBorder.classList.add("earth-container");
        biblioBtn.classList.add("earth-btn");
        expandedSubcard.classList.add("earth-subcard");
      } else if (butlerBooks[i].series === "Kindred") {
        console.log('I\'m Kindred!');
        biblioBorder.classList.add("kin-container");
        biblioBtn.classList.add("kin-btn");
        expandedSubcard.classList.add("kin-subcard");
      } else if (butlerBooks[i].series === "Fledgling") {
        console.log('I\'m Fledgling!');
        biblioBorder.classList.add("fledge-container");
        biblioBtn.classList.add("fledge-btn");
        expandedSubcard.classList.add("fledge-subcard");
      } else {
        console.log('I\'m Bloodchild!');
        biblioBorder.classList.add("blood-container");
        biblioBtn.classList.add("blood-btn");
        expandedSubcard.classList.add("blood-subcard");
      }

    }
  };
