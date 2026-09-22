const SideBar = document.getElementById("SideBar");
SideBar.innerHTML = '<a href="https://computer-nazo.github.io/nazo/sadako/homepage/index.html">ホームページ</a><br><a href="https://computer-nazo.github.io/nazo/sadako/homepage/login/index.html">ログイン</a><br><h3>ゲーム内操作</h3><br><a href="https://computer-nazo.github.io/nazo/sadako/homepage/win95.html">windows95のuiで遊ぶ（試験的機能）</a>';

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
