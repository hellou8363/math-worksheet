const selector = (selector) => document.querySelector(selector);
let queryString = "./page.html?";
let item1;
let item2;

selector(".item-list").addEventListener("click", function(e) {
  queryString += `sign=${e.target.id}`;
  
  selector(".item-list").style.display = "none";
  selector(".item-detail-list").style.display = "flex";
});

selector(".item-detail-list").addEventListener("click", function(e) {
  const id = e.target.id;

  if(id.includes("item1")) {
    if(item1 !== undefined) {
    selector(`#item1-${item1}`).style.backgroundColor = "white";
    selector(`#item1-${item1}`).style.color = "black";
    }

    item1 = id.slice(-1);

    selector(`#${id}`).style.backgroundColor = "black";
    selector(`#item1-${item1}`).style.color = "white";
  }

  if(id.includes("item2")) {
    if(item2 !== undefined) {
      selector(`#item2-${item2}`).style.backgroundColor = "white";
      selector(`#item2-${item2}`).style.color = "black";
      }

    item2 = id.slice(-1);

    selector(`#${id}`).style.backgroundColor = "black";
    selector(`#item2-${item2}`).style.color = "white";
  }

  if(item1 !== undefined && item2 !== undefined) {
    queryString += `&item1=${item1}`;
    queryString += `&item2=${item2}`;

    window.location.href = queryString;
  }
});