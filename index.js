var page = 1;
var size = 8;

var myHeaders = new Headers();

myHeaders.append("Authorization", "");

function getdata() {
  fetch(`https://api.pexels.com/v1/curated/?page=${page}&per_page=${size}`, {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((result) => {
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
  // const loader = ``;
  // let itemslist = document.getElementById("itemslist");
  // itemslist.insertAdjacentHTML("afterend", loader);
}
getdata();

const showData = () => {
  setTimeout(() => {
    page++;
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
