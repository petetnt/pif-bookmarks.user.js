// ==UserScript==
// @name         Kirjanmerkit pifulle
// @namespace    https://petetnt.github.io
// @version      0.1
// @description  LINKKI KIRJANMERKKEIHIN
// @author       @petetnt
// @match        https://www.punkinfinland.net/forum/*
// @grant        none
// ==/UserScript==

(function() {
  "use strict";
  const nav = document.getElementById("nav-main");
  const bookmarkLink = document.createElement("li");

  const a = document.createElement("a");
  a.href = "./ucp.php?i=ucp_main&mode=bookmarks";
  a.setAttribute("role", "menuitem");
  a.title = "Kirjanmerkit";

  const icon = document.createElement("i");
  icon.classList.add("icon", "fa", "fa-book");
  icon.setAttribute("aria-hidden", "true");

  const text = document.createElement("span");
  text.innerText = "Kirjanmerkit";

  a.appendChild(icon);
  a.appendChild(text);

  bookmarkLink.appendChild(a);

  nav.appendChild(bookmarkLink);
})();
