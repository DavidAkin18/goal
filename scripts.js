
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

  function updateTimeAndDay() {
    const currentTimeUTC = document.getElementById('currentTimeUTC');
    const currentDay = document.getElementById('currentDay');
  
    const now = new Date();
    const utcTime = now.toISOString().split('T')[1].split('.')[0];
    
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
  
    currentTimeUTC.textContent = utcTime;
    currentDay.textContent = day;
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
  });
  
  