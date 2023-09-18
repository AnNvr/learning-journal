import blogArray from "./data"

// fetch navigation elements reusable for each screen 
fetch("./html/navbar.html")
  .then(res => res.text())
  .then(navbar => {
    document.getElementById("navbar").innerHTML = navbar
  })

// fetch footer reusable for each screen
fetch("./html/footer.html")
  .then(res => res.text())
  .then(footer => {
    document.getElementById("footer").innerHTML = footer
  })

// hamburger menu mechanics
function toggleMenu(){
  let navItems = document.getElementsByClassName("nav-item")

  for (const navItem of navItems){
    navItem.classList.toggle("show")
  }
  document.getElementById("navbar").classList.toggle("expand")
}

// footer date
const copyrightYear = document.getElementById("copyright-year");
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;