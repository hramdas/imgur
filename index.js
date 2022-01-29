var page = 1;
var size = 10

const getPost = ()=>{
    fetch(`https://api.pexels.com/v1/curated/?page=${page}&per_page=${size}`)
  .then((response) => response.json())
  .then((result) => {
    result.photos.map((e) => {
        console.log(e)
    var itemslist = document.getElementById("itemslist");
    //   let itemdiv = document.createElement("div");
    //   let itemimg = document.createElement("img");
    //   let itemp = document.createElement("p");
    //   let act = document.createElement("div");

    //   act.classList.add("contActivity");
    //   itemdiv.classList.add("item");

    //   itemimg.src = e.src.medium;
    //   itemdiv.append(itemimg);

    var datamap = `<div id="item">
                    <img
                    id="contimg"
                    src="${e.src.medium}"
                    alt="dog"
                    />
                    <p>May I Introduce you all too Beauregard</p>
                    <div id="contActivity">
                        <span>
                            <i class="fas fa-arrow-up"></i>
                            <span>200</span>
                            <i class="fas fa-arrow-down"></i>
                        </span>
                        <span>
                            <i class="far fa-comment-alt"></i>
                            <span>17</span>
                        </span>
                        <span>
                            <i class="fas fa-eye"></i>
                            <span>300</span>
                        </span>
                    </div>
                </div>`
      itemslist.insertAdjacentHTML('afterend') = datamap
    });
  })
  .catch((error) => console.log("error", error));
}
getPost()
