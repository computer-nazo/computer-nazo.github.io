const SideBar = document.getElementById("SideBar");
SideBar.innerHTML = '<a href="https://computer-nazo.github.io/nazo/sadako/homepage/index.html">ホームページ</a><br><a href="https://computer-nazo.github.io/nazo/sadako/homepage/login/index.html">ログイン</a>';

function Search() {
  const SearchBox = document.getElementById("SearchBox").value;
  if (SearchBox === "keyword") {
    window.location.href="https://computer-nazo.github.io/nazo/sadako/homepage/search/keyword.html";
  } else if (SearchBox === "122573") {
    window.location.href="https://computer-nazo.github.io/nazo/sadako/homepage/search/122573.html";
  } else {
    window.location.href="https://computer-nazo.github.io/nazo/sadako/homepage/search/keywordnotfound.html";
  }
}
