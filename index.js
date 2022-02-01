let page = 1;
let size = 8;
let txt;
let timerId;

var myHeaders = new Headers();

myHeaders.append("Authorization", "");

function debounce(fun, delay) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    fun();
  }, delay);
}

function main() {
  txt = document.getElementById("input").value;

  if (txt.length > 3) {
    // api = `https://api.pexels.com/v1/search/?query=${txt}`;
    let itemslist = document.getElementById("itemslist");
    itemslist.innerHTML = null;
    page = 1;
    getdata();
  }
}
// var api = `https://api.pexels.com/v1/curated/?page=${page}&per_page=${size}`;

function getdata() {
  console.log(txt);
  if (txt) {
    var api = `https://api.pexels.com/v1/search/?page=${page}&per_page=${size}&query=${txt}`;
  } else
    var api = `https://api.pexels.com/v1/curated/?page=${page}&per_page=${size}`;

  fetch(api, {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(api);
      result.photos.map((e) => {
        let itemslist = document.getElementById("itemslist");
        let datamap = `<div id="item">
                        <img
                        id="contimg"
                        src="${e.src.medium}"
                        alt="${e.alt}"
                        />
                        <p>${e.alt}</p>
                        <div id="contActivity">
                            <span>
                            Photographer : <b> ${e.photographer}<b/>
                            </span>
                        </div>
                    </div>`;

        itemslist.insertAdjacentHTML("beforeend", datamap);
      });
    })
    .catch((error) => console.log("error", error));
}
getdata();

const showData = () => {
  setTimeout(() => {
    page++;
    console.log(page);
    getdata();
  }, 300);
};

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    console.log("At bottom");
    showData();
  }
});

//on button click
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
