
document.getElementById('subscribe-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for subscribing! Stay tuned for updates!');
  e.target.reset();
});

// Simple page counter increment
let visitorCount = parseInt(localStorage.getItem('visitorCount') || '1');
document.querySelector('.visitor-counter').textContent = 'Visitors: ' + 
  String(visitorCount).padStart(6, '0');
localStorage.setItem('visitorCount', visitorCount + 1);
