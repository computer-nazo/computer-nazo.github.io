function Search() {
  const SearchBox = document.getElementById("SearchBox").value;
  if (SearchBox === "keyword") {
    window.location.href="../search/keyword.html";
  } else if (SearchBox === "122573") {
    window.location.href="../search/122573.html";
  } else {
    window.location.href="../search/keywordnotfound.html";
  }
}
