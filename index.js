
fetch("https://api.pexels.com/v1/curated/?page=1")
  .then((response) => response.json())
  .then((result) => {
    result.photos.map((e) => {
        console.log(e)
    var itemslist = document.getElementById("itemslist");
      let itemdiv = document.createElement("div");
      let itemimg = document.createElement("img");
      let itemp = document.createElement("p");
      let act = document.createElement("div");

      act.classList.add("contActivity");
      itemdiv.classList.add("item");

      itemimg.src = e.src.medium;
      itemdiv.append(itemimg);
      itemslist.append(itemdiv);
    });
  })
  .catch((error) => console.log("error", error));