/*  PAGE SWITCHING  */
function showPage(pageId) {

  // hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // show selected page
  document.getElementById(pageId).classList.add('active');

  // remove active from all sidebar links
  document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.classList.remove('active');
  });

  // add active to clicked link
  event.currentTarget.classList.add('active');
}


/*  SKILL BAR ANIMATION  */
window.addEventListener('load', () => {
  document.querySelectorAll('.progress span').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 400);
  });
});

function toggleTheme() {
  document.body.classList.toggle('light');

  const btn = document.querySelector('.theme-btn');
  const icon = btn.querySelector('i');
  const text = btn.querySelector('span');

  if (document.body.classList.contains('light')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    text.textContent = 'Light';
    localStorage.setItem('theme', 'light');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    text.textContent = 'Dark';
    localStorage.setItem('theme', 'dark');
  }
}

/* Remember theme */
window.addEventListener('load', () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light');
    const btn = document.querySelector('.theme-btn');
    btn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    btn.querySelector('span').textContent = 'Light';
  }
});

