const setCategoryPages = (pageName, articles, imageBaseURL) => {
  document.title = `${pageName} || KNC Metal Art`;
  document.getElementById("page-breadcrumb").textContent = pageName;
  document.getElementById("page-title").textContent = pageName;

  categoryElement = document.getElementById("articles");
  articles.forEach((article) => {
    categoryElement.insertAdjacentHTML(
      "beforeend",
      `<div class="col-xs-12 col-sm-6 col-md-3 mb-4">
                    <div class="card shadow">
                        <img class="img-fluid" alt="${article.name}"
                            src="${imageBaseURL}/${article.image}">
                        <div
                            class="card-img-overlay p-1 d-flex  flex-column  align-items-baseline justify-content-center ">
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Material: ${article.material}</h4>
                            <!-- <p class="card-text">With supporting text below as a natural
                                lead-in to additional content.</p> -->
                        </div>
                    </div>
                </div>`
    );
  });
};

const loadNavBar = () => {
  document.getElementById(
    "navigation-bar"
  ).innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark border border-dark bg-dark">
      <div class="container">
          <a class="navbar-brand logo" href="/index.html">
              <img src="/images/brand-logo.png" alt="Logo" style="width: 100px;">
          </a>
          <div class="scrollmenu ms-auto me-md-2 mt-2 mt-lg-0 nav-bar-items">
      
              <a href="/index.html">Home <span class="sr-only">(current)</span></a>
      
              <!-- <a href="/index.html#contact">Services</a> -->
      
              <a href="/index.html#our-work">Our Work</a>
              <a href="/index.html#about-us">About us</a>
              <a href="/index.html#contact-us">Contacts</a>
          </div>
      </div>
      </nav>`;
};
