const images = document.querySelectorAll("img[data-src]");

const callback = (entries, observer) => {
  const handleImageLoad = () => {
    entry.target.classList.remove("img-blur");
  };
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("img-blur");
  });
  entry.target.removeEventListener("load", handleImageLoad);
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(callback, {
  threshold: 0.25,
});

images.forEach((image) => imageObserver.observe(image));
