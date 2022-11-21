let body = document.getElementsByTagName("body");
let fragment = new DocumentFragment();
let shopHeader = document.createElement("h1");
shopHeader.innerText = "Immerse yourself into the world of JavaScript with these helpful books";
let shopHeaderButton = document.createElement("button");
shopHeaderButton.className = "header-button";
let orderText = document.createTextNode("Order");
shopHeaderButton.appendChild(orderText);
shopHeader.appendChild(shopHeaderButton);
fragment.appendChild(shopHeader);
document.body.appendChild(fragment);

shopHeaderButton.onclick = function () {
  location.href = "form.html";
};

fetch("books.json")
  .then((response) => {
    return response.json();
    })
    .then((data) => {
      customDisplay(data);
    });



function customDisplay(bookInfo) {
  const bookCatalog = document.querySelector(".catalogue");
  bookInfo.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.className = "book";
    bookItem.innerHTML = `<div class="book-image-data"><img src="${book.imageLink}" class="book-image" style="width:100px"/></div>
                          <div class="book-data">
                            <div class="book-title">${book.title}</div>
                            <div class="book-author">${book.author}</div>
                            <div class="book-price">${book.price} $</div>
                            <div class="book-buttons">
                              <button type="button" class="learn-more">More</button>
                              <button type="button" class="to-cart">To Cart</button>
                            </div> 
                          </div>`;
    bookCatalog.appendChild(bookItem);
  });
}

