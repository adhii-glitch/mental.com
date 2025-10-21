// LOGIN CHECK
function checkLogin() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const error = document.getElementById('error-msg');

  if (user === "My adhiiiii" && pass === "Nikitha") {
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('error-msg').innerText = "";
    startTypewriter();
    document.getElementById('letter-page').classList.add('active');
    startHearts();
  } else {
    error.innerText = "Oops! Wrong ID or Password 💔";
    error.style.color = "red";
  }
}

// SHOW GALLERY
function showGallery() {
  document.getElementById('letter-page').classList.remove('active');
  document.getElementById('gallery-page').classList.add('active');
  loadGallery();
  stopHearts();
}

// LOAD MEDIA
function loadGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  // Add your media filenames here, update as needed
  const media = [
    'photo1.jpg',
    'video1.mp4',
    'photo2.jpg',
    'photo3.jpg',
    'video2.mp4',
    'photo4.jpg',
    'video3.mp4',
    'photo5.jpg',
    'video4.mp4',
    'photo6.jpg',
    'photo7.jpg',
  ];

  media.forEach(item => {
    const filePath = 'assets/' + item;
    let element;

    if (item.endsWith('.mp4')) {
      element = document.createElement('video');
      element.src = filePath;
      element.autoplay = true;
      element.loop = true;
      element.muted = true;
      element.playsInline = true;
    } else {
      element = document.createElement('img');
      element.src = filePath;
      element.alt = 'Memory';
    }

    element.classList.add('gallery-item');
    element.onclick = () => openLightbox(filePath);
    gallery.appendChild(element);
  });
}

// LIGHTBOX OPEN
function openLightbox(item) {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightbox-content');
  lightbox.style.display = 'flex';
  content.innerHTML = '';

  if (item.endsWith('.mp4')) {
    const vid = document.createElement('video');
    vid.src = item;
    vid.controls = true;
    vid.autoplay = true;
    content.appendChild(vid);
  } else {
    const img = document.createElement('img');
    img.src = item;
    content.appendChild(img);
  }
}

// LIGHTBOX CLOSE
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightbox-content');
  lightbox.style.display = 'none';
  content.innerHTML = '';
}

// ----------------------
// TYPEWRITER EFFECT
const letterContent = `I don’t know how to put this into perfect words… but I just want you to know from the deepest part of my heart — I love you. ❤️ I love you more than anything, more than anyone, more than I ever thought was possible.

You are the most precious person in my life. Every moment I spend with you feels like a blessing. When I think about my future, I can’t see anything without you in it. I want you in all of it — in every smile, every tear, every fight, every hug 🤗, every success, and even the failures… I want us to go through everything together.

There might be tough days ahead. Life is never always easy. But I promise, I will stand with you in every situation, through every storm. 🌧️ I don’t want to face life alone — I want us. You and me, hand in hand, no matter what comes our way. 🤝

Please, Amul... don’t ever leave me. 🥺 Don’t walk away. You are my heart, my peace, my everything. Without you, I feel empty. 💔 I need you to stay, to believe in our love, just like I do. 💞

Let’s try together to convince everyone. Let’s show our families that what we share is real, pure, and unbreakable. I believe, from the bottom of my soul, that if they truly see our love, they will understand and support us. 

Let’s build our future — one filled with love, understanding, and endless hugs 🤗❤️
Just you and me, forever and always.

I will love you always,
more than words, more than life itself. 💖
With all my heart,
Adhiiiiiiiiiiiiiiiiiiii 🤗❤️
`;

function startTypewriter() {
  const letter = document.getElementById('letter-text');
  letter.innerText = '';
  let i = 0;
  const speed = 30; // ms per character

  function type() {
    if (i < letterContent.length) {
      letter.innerText += letterContent.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// ----------------------
// FLOATING HEARTS ANIMATION

let heartsInterval;

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  heart.style.opacity = (0.5 + Math.random() * 0.5).toString();
  document.getElementById('hearts-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

function startHearts() {
  heartsInterval = setInterval(createHeart, 400);
}

function stopHearts() {
  clearInterval(heartsInterval);
  const heartsContainer = document.getElementById('hearts-container');
  heartsContainer.innerHTML = '';
}
