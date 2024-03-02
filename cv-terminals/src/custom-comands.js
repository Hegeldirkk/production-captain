import confetti from "canvas-confetti";
import { Fireworks } from "fireworks-js";

/**
 * Affiche des confettis sur la page
 */
export function pif() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

export function setDarkMode(value) {
  if (value) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

export function getCVDev() {
  const a = document.createElement("a");
  a.href = "resources/CV-Ikary-2.pdf";
  a.setAttribute("download", "CV-Ikary-2.pdf");
  a.click();
}

export function getCVSec() {
  const a = document.createElement("a");
  a.href = "resources/IKARY-CV-SEC_IT-CYN-2_compressed.pdf";
  a.setAttribute("download", "IKARY-CV-SEC_IT-CYN-2_compressed.pdf");
  a.click();
}

export function rmRf() {
  setDarkMode(true);
  document.body.classList.add("firework");
  const fireworks = new Fireworks(document.body, {
    mouse: { click: true, move: false, max: 7 },
  });
  fireworks.start();
}
