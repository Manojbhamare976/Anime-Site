let main = document.querySelector("#main");
let div1 = document.querySelector("#titleimg");
let url = "https://api.jikan.moe/v4/anime";

function createTitle(title) {
  const h1 = document.createElement("h1");
  h1.textContent = title;
  h1.classList.add("inlineBlock");
  return h1;                // just return, don't append yet
}

async function getAndupdateTitles(){
    await fetchAnimeInfo().then((data) => {
    appendTitles(data)
    })
}

function createImage(src) {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("block");
  return img;               // just return, don't append yet
}

function animeCard(imgEl, h1El) {
  const div = document.createElement("div");
  div.classList.add("card");
  div.appendChild(imgEl);
  div.appendChild(h1El);
  main.appendChild(div);
}

async function fetchAnimeInfo() {
  try {
    const res = await axios.get(url);
    const animeList = res.data.data;

    for (let i = 0; i < animeList.length; i++) {
      const imgEl = createImage(animeList[i].images.jpg.image_url);
      const h1El  = createTitle(animeList[i].title);
      animeCard(imgEl, h1El);
    }
  } catch (err) {
    console.error(err);
  }
}
//animeCard();
getAndupdateTitles();
