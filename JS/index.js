let sideNav = document.getElementById("mySidenav")
let sidebarBtn = document.querySelector('.btn-menu .bi')


function openNav() {
  sideNav.classList.add("open");
}

function closeNav() {
  sideNav.classList.remove("open");
}

document.addEventListener('click', (event) => {
  const click = event.target 
  if(click.classList.contains('sidenav') && sideNav.classList.contains('open')) {
  } else if (click.classList.contains('bi') || click.classList.contains('btn-menu')) {
    openNav()
  } else {
    closeNav()
  }
})