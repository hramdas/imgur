var page = 1;
var size = 10

var myHeaders = new Headers();
myHeaders.append("Authorization", "");

function getdata() {
  fetch("https://api.pexels.com/v1/curated/?page=1",{
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((result) => {
       
    result.photos.map((e) => {
    var itemslist = document.getElementById("itemslist");
    console.log(e)
        var datamap = `<div id="item">
                        <img
                        id="contimg"
                        src="${e.src.medium}"
                        alt="${e.alt}"
                        />
                        <p>${e.alt}</p>
                        <div id="contActivity">
                            <span>
                                <i class="fas fa-arrow-up"></i>
                                <span>200</span>
                                <i class="fas fa-arrow-down"></i>
                            </span>
                            <span>
                                <i class="far fa-comment-alt"></i>
                                <span></span>
                            </span>
                            <span>
                                <i class="fas fa-eye"></i>
                                <span>300</span>
                            </span>
                        </div>
                    </div>`

        itemslist.insertAdjacentHTML('beforeend', datamap)
        });

  })
  .catch((error) => console.log("error", error));
}
getdata()
