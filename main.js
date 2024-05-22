const length = 314.16; // length of the path
const options = {
  threshold: [0.5, 1],
};

const drawSvg = (entries, observer) => {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.isIntersecting) {
      elem.classList.add('draw');
    } else {
      elem.classList.remove('draw');
    }
  });
};

const iObserver = new IntersectionObserver(drawSvg, options);
iObserver.observe(document.querySelector('.svg-section'));