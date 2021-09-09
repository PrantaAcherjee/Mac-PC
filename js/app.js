function updatePrice(id) {
    if (id === '8gb') {
        // document.getElementById('memory-cost').innerText = 0;
        updateText('memory-cost', 0);
    }
    else if (id === '16gb') {
        // document.getElementById('memory-cost').innerText = 180;
        updateText('memory-cost', 180);
    }
    else if (id === '256gb') {
        // document.getElementById('storage-cost').innerText = 0;
        updateText('storage-cost', 0);
    }
    else if (id === '512gb') {
        // document.getElementById('storage-cost').innerText = 100;
        updateText('storage-cost', 100);
    }
    else if (id === '1tb') {
        // document.getElementById('storage-cost').innerText = 180;
        updateText('storage-cost', 180);
    }
    else if (id === 'on25') {
        // document.getElementById('delivery-cost').innerText = 0;
        updateText('delivery-cost', 0);
    }
    else if (id === 'on21') {
        // document.getElementById('delivery-cost').innerText = 20;
        updateText('delivery-cost', 20);
    }
    updateTotal()
}
// update/replace inner text 
function updateText(id, price) {
    document.getElementById(id).innerText = price;
}
// get text price
function getPriceText(id) {
    const price = document.getElementById(id).innerText;
    return parseInt(price);
}
// update total part 
function updateTotal() {
    const total = 1299 + getPriceText('memory-cost') + getPriceText('storage-cost') + getPriceText('delivery-cost');
    updateText('total-cost', total);
    updateText('discount-total-price', total);
}

function cuponHandler() {
    const cuponCode = document.getElementById('cupon-code').value;
    if (cuponCode === 'stevekaku') {
        const total = getPriceText('total-cost');
        const discountTotal = total * 0.8;
        updateText('discount-total-price', discountTotal);
    }
}