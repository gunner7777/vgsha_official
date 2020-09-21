document.addEventListener("DOMContentLoaded", function () {
  //first bootstrap
  var windowWidth = window.innerWidth;

  window.addEventListener("resize", function () {
    windowWidth = window.innerWidth;
    menuResetOnWindowResize();
  });

  const topbarSearch = document.querySelector(".TopBarServices");
  topbarSearch.addEventListener("click", (e) => {
    if (e.target.classList.contains("TopBarServices-Icon_Search")) {
      e.target.parentNode
        .querySelector(".Search")
        .classList.add("Search_Active");
      e.target.classList.add("TopBarServices-Icon_Search_Hide");
    }

    if (e.target.classList.contains("Search-Hide")) {
      e.target.parentNode.parentNode
        .querySelector(".Search")
        .classList.remove("Search_Active");
      e.target.parentNode.parentNode
        .querySelector(".TopBarServices-Icon_Search")
        .classList.remove("TopBarServices-Icon_Search_Hide");
    }
  });

  document
    .querySelector(".MobileMenu-Button")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("MobileMenu-Button_Active");
      document.querySelector(".MainMenu").classList.toggle("MainMenu_Show");
    });

  var menuLinks = Array.from(document.querySelectorAll(".MainMenu-Link"));
  menuLinks.forEach(function (link) {
    link.addEventListener("mouseenter", function (event) {
      if (windowWidth > 920) {
        var menuLink = event.currentTarget;
        if (menuLink.childNodes.length > 1) {
          menuLink.nextElementSibling.classList.add("SubMenu_Show");
        }
      }
    });

    link.addEventListener("mouseleave", function (event) {
      if (windowWidth > 920) {
        var menuLink = event.currentTarget;
        if (menuLink.childNodes.length > 1) {
          menuLink.nextElementSibling.classList.remove("SubMenu_Show");
        }
      }
    });

    link.addEventListener("click", function (event) {
      var menuLink = event.currentTarget;
      if (menuLink.childNodes.length > 1) {
        event.preventDefault();
      }

      if (windowWidth <= 920) {
        event.preventDefault();
        if (menuLink.childNodes.length > 1) {
          menuLink.classList.toggle("MainMenu-Link_Open");
        }
      }
    });
  });
});

const menuResetOnWindowResize = () => {
  document
    .querySelector(".MobileMenu-Button")
    .classList.remove("MobileMenu-Button_Active");
  document.querySelector(".MainMenu").classList.remove("MainMenu_Show");
  const mainMenuLink = document.querySelectorAll(".MainMenu-Link");
  mainMenuLink.forEach((mmlink) => {
    mmlink.classList.remove("MainMenu-Link_Open");
  });
};
