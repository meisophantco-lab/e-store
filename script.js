document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll("img[data-src]");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("fade-in");
        observer.unobserve(img);
      }
    });
  }, options);

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
});
