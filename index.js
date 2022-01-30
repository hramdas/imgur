var page = 1;
var size = 8;

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  ""
);

function getdata() {
  fetch(`https://api.pexels.com/v1/curated/?page=${page}&per_page=${size}`, {
    method: "GET",
    headers: myHeaders
  })
    .then((response) => response.json())
    .then((result) => {
      result.photos.map((e) => {
        var itemslist = document.getElementById("itemslist");
        console.log(e);
        var datamap = `<div id="item">
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
