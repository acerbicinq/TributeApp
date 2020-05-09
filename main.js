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
  butlerBooks.forEach(biblioCard => {
    const biblioContent = `<div id="biblioBorder" class="biblio-card-container">
        <div id="biblioTitle" class="biblio-list-item">
          <div class="biblio-date">${biblioCard.year}</div>
          <div class="biblio-booktitle">${biblioCard.title}</div>
        </div>
        <div id="biblioExpand" class="biblio-card-expand"><img src="./img/expand.png" alt="expand button"></div>
        <div class="biblio-expanded">
          <div class="biblio-expanded-top">
            <div class="biblio-subtitle">${biblioCard.subtitle}</div>
            <div id="biblioMinimize" class="biblio-minimize"><img src="./img/minimize.png" alt="minimize button"></div>
          </div>
          <div id="biblioSubcard" class="biblio-subcard">
            <p class="biblio-booksummary">${biblioCard.summary}</p>
              <a class="biblio-btn-link" href="${biblioCard.url}" target="_blank"><button id="biblioBtn" class="biblio-btn btn" type="button" name="button">View on Goodreads</button>
          </div>
        </div>
      </div>`

  biblioItem.insertAdjacentHTML('afterbegin', biblioContent);

  if (biblioCard.series === "Patternist") {
    biblioBorder.style.border = "0.2em solid #434463";
    biblioBorder.style.borderLeft = "12px solid #434463";
    biblioBtn.style.backgroundColor = "#434463";
    biblioSubcard.style.background = "rgba(67, 68, 99, 0.3)";
  } else if (biblioCard.series === "Xenogenesis") {
    biblioBorder.style.border = "0.2em solid #5EA878";
    biblioBorder.style.borderLeft = "12px solid #5EA878";
    biblioBtn.style.backgroundColor = "#5EA878";
    biblioSubcard.style.background = "rgba(94, 168, 120, 0.3)";
  } else if (biblioCard.series === "Earthseed") {
    biblioBorder.style.border = "0.2em solid #5591C9";
    biblioBorder.style.borderLeft = "12px solid #5591C9";
    biblioBtn.style.backgroundColor = "#5591C9";
    biblioSubcard.style.background = "rgba(85, 145, 201, 0.3)";
  } else if (biblioCard.series === "Kindred") {
    biblioBorder.style.border = "0.2em solid #C09A65";
    biblioBorder.style.borderLeft = "12px solid #C09A65";
    biblioBtn.style.backgroundColor = "#93754B";
    biblioSubcard.style.background = "rgba(192, 154, 101, 0.3)";
  } else if (biblioCard.series === "Fledgling") {
    biblioBorder.style.border = "0.2em solid #5B5B5B";
    biblioBorder.style.borderLeft = "12px solid #5B5B5B";
    biblioBtn.style.backgroundColor = "#5B5B5B";
    biblioSubcard.style.background = "rgba(91, 91, 91, 0.3)";
  } else {
    biblioBorder.style.border = "0.2em solid #C6D377";
    biblioBorder.style.borderLeft = "12px solid #C6D377";
    biblioBtn.style.backgroundColor = "#585C3C";
    biblioSubcard.style.background = "rgba(198, 211, 119, 0.3)";
  }

const expandedTop = document.querySelector('.biblio-expanded-top');
const expandedSubcard = document.querySelector('.biblio-subcard');
const expandBtn = document.querySelector('.biblio-card-expand');

  biblioExpand.onclick = () => {
    expandedTop.style.display = "flex";
    expandedSubcard.style.display = "block";
    expandBtn.style.display = "none";
  }
  biblioMinimize.onclick = () => {
    expandedTop.style.display = "none";
    expandedSubcard.style.display = "none";
    expandBtn.style.display = "inline-flex";
  }


  });
}
