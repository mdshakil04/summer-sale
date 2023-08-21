function addToCart(target){
    const cartName = target.childNodes[3].childNodes[3].innerText;
    const cartValueElement = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    // console.log(cartValueElement)
    const cartValueNumber = parseFloat(cartValueElement);
    const totalPriceElement =document.getElementById('total-price');
    const finalPriceField = document.getElementById('final-price')
    // console.log(totalPriceElement)
    const totalPriceString = totalPriceElement.innerText;
    const totalPriceValue = parseFloat(totalPriceString);
    const totalPrice = totalPriceValue + cartValueNumber;
    totalPriceElement.innerText = totalPrice;
    finalPriceField.innerText = totalPrice;

    const buttonDiscount = document.getElementById('discount-btn');
    if(totalPrice >= 200){
        buttonDiscount.removeAttribute('disabled')
    }
    // Final Calculation
    document.getElementById('discount-btn').addEventListener('click', function(){
        const couponField = document.getElementById('coupon-field');
        const couponFieldValue = couponField.value;
        // console.log(couponFieldValue)
        couponField.Value = '';
        if(couponFieldValue !== 'SELL200'){
            return;
        }
        const discount = (totalPrice*20)/100;
        const discountTotalElement = document.getElementById('discount-value');
        discountTotalElement.innerText = discount.toFixed(2);

        const finalPriceField = document.getElementById('final-price')
        const finalPrice = totalPrice - discount;
        finalPriceField.innerText = finalPrice.toFixed(2);

    })


    addItemNameInCart('added-cart-container', cartName);
}
function addItemNameInCart(elementId, name){
    const targetCart = document.getElementById(elementId);
    const count = targetCart.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count +1} ${name}`;
    targetCart.appendChild(p);
}
document.getElementById('home-button').addEventListener('click', function(){
    window.location.href= "index.html";
})