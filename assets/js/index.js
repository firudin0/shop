const product = document.getElementById("product");
const button = document.getElementById("btn");


async function get() {
  const res = await axios.get(`https://655c844f25b76d9884fd70a7.mockapi.io/products`);
  const data = res.data;
  db = data;
  db.map(item => {
    const box = document.createElement("div");
    box.className = "boxs col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12";
    box.innerHTML = `
        <div class="divz">
        <img src="${item.image}" alt="">
        <div class="divc">
            <p>${item.title}</p>
        </div>
        <p>$ ${item.price}</p>
    <button onclick="addToCart(${item.id})">Sebete Ekle</button>
    <button onclick="addTowishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>
            </div>
        `
    product.appendChild(box);
  });

  
}

function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let productItem = cart.find(item => item.id == index)
  if(productItem) {
      productItem.count = (productItem.count || 1) + 1
  } else {
      cart.push(db.find((item) => item.id == index));
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addTowishlist(index) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let productItem = wishlist.find(item => item.id == index)

  if(productItem){
      alert('saaaalaaam!')
  }else {
      wishlist.push(db.find((item) => item.id == index));
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }

}

get()
