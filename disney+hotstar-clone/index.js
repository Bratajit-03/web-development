let movies = [
  {
      name: "Gaslight",
      des: 
      "The film features numerous deviations from the original stage play, though the central drama remains that of a husband trying to drive his wife insane in order to distract her from his criminal activities.",
      image: "images/gaslightcar.jfif"
  },
  {
      name: "Atrangi Re",
      des: 
      "The film tells the story of a girl named Rinku who is in love with a magician named Sajjad. She gets forcefully married to Dr. Vishu. Vishu soon falls in love with Rinku but the love triangle gets weirder when Sajjad shows up. The film's idea was conceived by Rai in 2014, after the release of Raanjhanaa.",
      image: "images/atrangirecar.jpg"
  },
  {
      name: "The Night Manager",
      des: 
      "Former Indian Navy Lieutenant Shantanu 'Shaan' Sengupta, is currently working as a night manager in a premiere star hotel in Dhaka, amidst the Rohingya genocide in 2017. He is approached by Safina Kidwai, wife of the majority share owner of the star hotel, Freddie Rehman, to help her escape to India.",
      image: "images/nightmanagercar.webp"
  },
  {
      name: "Special Ops 1.5",
      des: 
      "The Himmat Story is a Hindi action thriller fiction webseries created and directed by Neeraj Pandey for Disney+ Hotstar. The series is set inside the Special Ops Universe and stars Kay Kay Menon as Himmat Singh. The series premiered on 12 November 2021",
      image: "images/specialopscar.webp"
  },
  {
      name: "Bhuj:The Pride of India",
      des: "During the Indo-Pakistani War of 1971, the Bhuj airbase is attacked and a race against time begins to rebuild the damaged airstrip.",
      image: "images/bhujcar.webp"
  }
]

const carousel = document.querySelector('.carousel')
let sliders = []

let slideIndex = 0;

const createSlide = () => {
  if(slideIndex >= movies.length) {
      slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement('div');
  let imgElement = document.createElement('img');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');

  // attaching all element
  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = 'slider';
  content.className = 'slide-content';
  h1.className = 'movie-title';
  p.className = 'movie-des';

  sliders.push(slide);

  // adding sliding effect
  if(sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
  }
}

for(let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);


// video cards

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
  item.addEventListener('mouseover', () => {
      let video = item.children[1];
      video.play();
  })
  item.addEventListener('mouseleave', () => {
      let video = item.children[1];
      video.pause();
  })
})

// cards sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener('click', ()=>{
      item.scrollLeft += containerWidth - 300;
  })

  preBtns[i].addEventListener('click', ()=>{
      item.scrollLeft -= containerWidth + 300;
  })
})