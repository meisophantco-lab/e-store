// Example: load more products when scrolling near bottom
window.addEventListener("scroll", () => {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    // Load more product HTML here
  }
});
