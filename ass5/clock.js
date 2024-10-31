function updateClock() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
  
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = currentTime;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();
  