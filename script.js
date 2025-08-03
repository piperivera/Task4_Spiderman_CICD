// Cuenta regresiva para el estreno (31 julio 2026)
const releaseDate = new Date("2026-07-31T00:00:00").getTime();

const countdown = document.getElementById("countdown");

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  if (distance < 0) {
    countdown.innerHTML = "🎉 ¡La película ya se ha estrenado!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `⏳ Faltan <strong>${days}</strong>d <strong>${hours}</strong>h <strong>${minutes}</strong>m <strong>${seconds}</strong>s para el estreno.`;
}, 1000);
