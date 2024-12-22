document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const articles = document.querySelectorAll('.article');
  const nothingAlert = document.getElementById('nothing-alert');

  function filterArticles(searchQuery) {
    let matches = 0;

    articles.forEach(article => {
      const title = article.querySelector('.article-title').textContent.toLowerCase();
      const content = article.querySelector('.article-content').textContent.toLowerCase();

      if (title.includes(searchQuery) || content.includes(searchQuery)) {
        article.style.display = 'block';
        matches++;
      } else {
        article.style.display = 'none';
      }
    });

    nothingAlert.style.display = matches === 0 ? 'block' : 'none';
  }

  searchInput.addEventListener('input', function () {
    const searchQuery = searchInput.value.trim().toLowerCase();
    filterArticles(searchQuery);
  });
});
