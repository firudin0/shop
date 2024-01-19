const product = document.getElementById('productz')

function get() {
    product.innerHTML = ''
    const heart = JSON.parse(localStorage.getItem('heart')) || []
    console.log(heart);

    heart.map((item, index) => {
        console.log(item);
        const box = document.createElement('div')
        box.className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
               box.innerHTML = `
         <div class="divz" style="margin-top:10px">

        <img src="${item.image}" alt="">
        <div class="divc">
            <p>${item.title}</p>
        </div>
        <p>$ ${item.price}</p>

    <button onclick="removeHeart(${index})">Remove</button>
          </div>
        `
    product.appendChild(box);
    })
}

function  removeHeart(index) {
    const heart = JSON.parse(localStorage.getItem('heart')) || []
    heart.splice(index,1)
    localStorage.setItem('heart' , JSON.stringify(heart))
    get()
}
get()