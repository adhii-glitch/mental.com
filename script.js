// LOGIN CHECK
function checkLogin() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const error = document.getElementById('error-msg');

  if (user === "My adhiiiii" && pass === "Nikitha") {
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('letter-page').classList.add('active');
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
}

// LOAD MEDIA
function loadGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  // Example: You can add as many photos/videos as you have
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
    let element;
    if (item.endsWith('.mp4')) {
      element = document.createElement('video');
      element.src = 'assets/' + item;
      element.autoplay = true;
      element.loop = true;
      element.muted = true;
    } else {
      element = document.createElement('img');
      element.src = 'assets/' + item;
    }
    element.onclick = () => openLightbox(item);
    gallery.appendChild(element);
  });
}

// LIGHTBOX
function openLightbox(item) {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightbox-content');
  lightbox.style.display = 'flex';
  content.innerHTML = '';

  if (item.endsWith('.mp4')) {
    const vid = document.createElement('video');
    vid.src = 'assets/' + item;
    vid.controls = true;
    vid.autoplay = true;
    content.appendChild(vid);
  } else {
    const img = document.createElement('img');
    img.src = 'assets/' + item;
    content.appendChild(img);
  }
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
