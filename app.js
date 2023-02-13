const search = () =>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById(".productHolder")
    const card = document.querySelectorAll(".card")
    const pname = document.getElementsByTagName("title")

    for(var i=0; i<pname.length;i++) {
    let match = card[i].get.getElementsByTagName("title")[0];

    if(match) {
      let textvalue = match.textContent || match.innerHtml
 
 if(textvalue.toUpperCase().indexOf(searchBox) >-1) {
        card[i].style.display = "";
      } else {
        card[i].style.display = "none";
      }
    }
  }

}
