const tabItems = document.querySelectorAll(".tab-item");
const tabcontentItems = document.querySelectorAll(".tab-content-item");

// select tab content item
function selectItem(e) {
  // create function to remove the border function structure has been changed
  removeBorder();
  removeshow();

  // add border to current Tab
  this.classList.add("tab-border");
  // grap content item from DOM to make HMTL dynamic

  const tabcontentItem = document.querySelector(`#${this.id}-content`);
  // add show class html code
  tabcontentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}
function removeshow() {
  tabcontentItems.forEach((item) => item.classList.remove("show"));
}

// listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
