import blogArray from "/data.js"

const blogGridEl = document.getElementById("blog-grid");
const recentPostEl = document.getElementById("recent-post-el")

document.addEventListener("DOMContentLoaded", () => {
  function renderBlog(){
    let blogGridHtml = ""
    blogArray.forEach((blog) => {
      blogGridHtml += `
      <div class="blog">
        <img src="${blog.img}" alt="laptop computer picture" class="blog-img">
        <span class="blog-date">${blog.date}</span>
        <h1 class="blog-title">${blog.title}</h1>
        <p class="blog-article-preview">${blog.text}</p>
      </div>
      `;
    });
    return blogGridHtml
  };
  
  blogGridEl.innerHTML = renderBlog();
  
  function renderRecentPost(){
    let recentPostGridHtml = "";
    // slice the first 3 posts out of the array
    const firstThreePosts = blogArray.slice(0, 3);
    // iteration
    firstThreePosts.forEach(blog => {
      recentPostGridHtml += `
      <div class="blog">
        <img src="${blog.img}" alt="laptop computer picture" class="blog-img">
        <span class="blog-date">${blog.date}</span>
        <h1 class="blog-title">${blog.title}</h1>
        <p class="blog-article-preview">${blog.text}</p>
      </div>
      `;
    });
    return recentPostGridHtml;
  };
  
  recentPostEl.innerHTML = renderRecentPost();
  
  // fetch navigation elements reusable for each screen 
  fetch("./html/navbar.html")
    .then(res => res.text())
    .then(navbar => {
      document.getElementById("navbar").innerHTML = navbar
    });
  
  // fetch footer reusable for each screen
  fetch("./html/footer.html")
    .then(res => res.text())
    .then(footer => {
      document.getElementById("footer").innerHTML = footer
    });
  
  // hamburger menu mechanics
  // function toggleMenu(){
  //   let navEl = document.getElementById("nav-el");
  
  //   if (navEl.style.display === "block"){
  //     navEl.style.display = "none"
  //   } else {
  //     navEl.style.display = "block"
  //   }
  // }
  // footer date
  const copyrightYear = document.getElementById("copyright-year");
  const currentYear = new Date().getFullYear();
  copyrightYear.textContent = currentYear;
})
