console.log("hello, world");

let thumbnailImages = [
  {
    link: "https://images.unsplash.com/photo-1705834008920-b08bf6a05223?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A beautiful sunset over a mountain",
    tabindex: 0,
    srcset:
      "https://images.unsplash.com/photo-1705834008920-b08bf6a05223?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 400w",
  },
  {
    link: "https://images.unsplash.com/photo-1689182339141-ce4448e34bd7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a nascar racing fast across a track",
    tabindex: 0,
    srcset:
      "https://images.unsplash.com/photo-1689182339141-ce4448e34bd7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 400w",
  },
  {
    link: "https://images.unsplash.com/photo-1702823392471-e9a632ec0870?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a healthy seasonal salad in a bowl",
    tabindex: 0,
    srcset:
      "https://images.unsplash.com/photo-1702823392471-e9a632ec0870?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 400w",
  },
  {
    link: "https://images.unsplash.com/photo-1705957120848-53a67c920593?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D",
    alt: "a friendly camel meandering across the desert",
    tabindex: 0,
    srcset:
      "https://images.unsplash.com/photo-1705957120848-53a67c920593?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D 400w",
  },
  {
    link: "https://images.unsplash.com/photo-1705832405321-611d19b1d71d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D",
    alt: "2 walruses looking at each other with mountains in the background",
    tabindex: 0,
    srcset:
      "https://images.unsplash.com/photo-1705832405321-611d19b1d71d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D 400w",
  },
  {
    link: "https://images.unsplash.com/photo-1705170392971-83e0a18f0fa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
    alt: "a big old lizard",
    tabindex: 0,
    srcset:
      "https://images.unsplash.com/photo-1705170392971-83e0a18f0fa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D 400w",
  },
];

let apiImages = [];

const thumbnail = document.getElementById("thumbnail-container");
const imageCont = document.getElementById("image-container");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const mainImage = document.getElementById("backgroundImage");
let currentImageIndex = 2;
let maxImageIndex = 5;
let minImageIndex = 0;

function defaultBgImg() {
  let myObj = thumbnailImages[currentImageIndex];
  mainImage.src = myObj.link;
  mainImage.alt = myObj.alt;
  mainImage.srcset = myObj.srcset;
}

defaultBgImg();

function createThumbnail(arrayOfImages) {
  arrayOfImages.forEach((item, index) => {
    let img = document.createElement("img");
    img.src = item.link;
    img.alt = item.alt;
    img.tabIndex = item.tabindex;
    img.srcset = item.srcset;
    img.addEventListener("click", () => {
      amendBgImg(item, index);
    });
    // announceAltText(img.alt);
    thumbnail.appendChild(img);
  });
}

createThumbnail(thumbnailImages);

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    handleClick(1);
  } else if (e.key == "ArrowLeft") {
    handleClick(-1);
  }
});

leftButton.addEventListener("click", () => {
  handleClick(-1);
});
rightButton.addEventListener("click", () => {
  handleClick(+1);
});
function amendBgImg(item, index) {
  mainImage.src = item.link;
  mainImage.alt = item.alt;
  mainImage.srcset = item.srcset;
  document.addEventListener("click", () => {});
  currentImageIndex = index;
}

function handleClick(value) {
  currentImageIndex += value;
  amendBgImg(thumbnailImages[currentImageIndex], currentImageIndex);
  if (currentImageIndex == maxImageIndex) {
    amendBgImg(thumbnailImages[currentImageIndex], minImageIndex);
  } else if (currentImageIndex == minImageIndex) {
    amendBgImg(thumbnailImages[currentImageIndex], maxImageIndex);
  }
}

// function announceAltText(altText) {
//   imageCont.textContent = `New image displayed: ${altText}`;
// } - I have commented this out as it was just getting rid of the background image and replacing it with alt text. Not sure how i would go about changing the alt text of the buttons as I couldn't seem to get this to work.

//THIS IS MY FIRST ATTEMPT AT INTEGRATING SEARCH FUNCTIONALITY ON UNSPLASH API BUT THIS TIME USING COMBINATION OF CLASS DEMO AND ARTICLES. I THINK MOST OF IT SHOULD BE WORKING BUT IT DOESN'T FULLY INTEGRATE AS IT CAN'T USE THE FETCH FUNCTION... I TRIED INSTALLING IT USING NPM INSTALL UNSPLASH-JS BUT IT STILL DOESN'T WORK. I HAVE TAKEN OFF MY ACCESS KEYS FROM HERE SO I CAN ACP.
// async function getAPIResult() {
//   const url = "https://api.unsplash.com/";
//   const options = {
//     method: "GET",
//     headers: {
//       accesskey: "xxx",
//     },
//   };
//   const response = await fetch(url, options);
//   const json = await response.json();
//   apiImages.push(json);
//   createThumbnail(json);
// }
// getAPIResult();

//THIS IS MY SECOND ATTEMPT AT INTEGRATING SEARCH FUNCTIONALITY ON UNSPLASH API USING THE GUIDES IN THEIR DOCUMENTATION. I INSTALLED/IMPORTED THE UNSPLASH-JS VIA TERMINAL BUT I GOT AN ERROR SAYING I CANT USE IMPORT STATEMENT OUTSIDE A MODULE, SO THE REST DOESN'T WORK... I HAVE TAKEN OFF MY ACCESS KEYS FROM HERE SO I CAN ACP.
// import { createApi } from "unsplash-js";
// import fetch from "node-fetch";
// global.fetch = fetch;
// const api = createApi({
//   accessKey: "XXXX",
// });
// async function APIresult() {
//   const response = await fetch(
//     api.search.getPhotos({ query: "", orientation: "landscape" })
//   );
//   const json = await response.json;
//   apiImages.push(json);
//   createThumbnail(json);
// }
