const addToCarts = document.querySelectorAll(".add-to-cart");
const cartQuantity = document.querySelector(".cart-quantity");
const input = document.createElement('div');
input.className = "all-input";
input.innerHTML = '<input class="input" type="number" size="15" value="1" min="1" max="20">';
const price = document.querySelector(".cart-price");
const realPrice = document.createElement('p');
const album1Price = document.querySelector(".price");
realPrice.innerText = '$' + album1Price.textContent;
const cartItem = document.querySelector(".cart-item");
const cartItemImageAlbum1 = document.createElement('div');

cartItemImageAlbum1.innerHTML = '<img src="Images/Album 1.png" width=100><p>Album1</p>';
const totalPrice = document.querySelector(".real-price");
const totalPriceUpdated = realPrice.textContent;
const remove = document.createElement('button');
remove.className = "remove";
remove.innerText = "Remove";



addToCarts.forEach((addTocart,index) => {
    addToCarts[0].addEventListener('click', ()=>{
        cartQuantity.appendChild(input)
        price.appendChild(realPrice)
        cartItem.appendChild(cartItemImageAlbum1)
        totalPrice.innerText = totalPriceUpdated
        const realInput = document.querySelector(".input")
        const realInput1 = document.querySelector(".all-input")
        realInput1.appendChild(remove)
        realInput.onchange = function(){
            console.log(realInput.value)
            realPrice.innerText = '$' + 19 * realInput.value
            totalPrice.innerText = realPrice.innerText
        }
            
        const removeBtn = document.querySelector(".remove");
        removeBtn.addEventListener('click', ()=>{
            input.remove()
            realPrice.remove()
            cartItemImageAlbum1.remove()
            realInput.value = "1"
            totalPrice.innerText = '$ 00.00' 
            realPrice.innerText = '$' + 19
        })
    })
    addToCarts[1].addEventListener('click', ()=>{
        
    })
});




