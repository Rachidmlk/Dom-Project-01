function repeatedElements(e) {
    var e1 = e.querySelector('.unit-price');
    var e2 = e.querySelector('.quantity');
    return { e1: e1, e2: e2 };
}
var price = document.querySelector('.price');
var elements = document.querySelectorAll('.card-main');
// adding event listener for each item
elements.forEach(function (e) {
    var _a, _b, _c, _d;
    (_a = e.querySelector('.fa-trash-alt')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var _a = repeatedElements(e), unitPrice = _a.e1, target = _a.e2;
        e.remove();
        if (price && Number(target.innerHTML) > 0) {
            price.innerHTML = String(Number(price.innerHTML) - Number(Number(unitPrice === null || unitPrice === void 0 ? void 0 : unitPrice.innerHTML.replace(/[ $]/g, '')) * Number(target.innerHTML)));
        }
    });
    // make the heart red
    (_b = e.querySelector('.fa-heart')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function (event) {
        var target = event.target;
        if (target.style.color == 'red') {
            target.style.color = 'black';
        }
        else
            target.style.color = 'red';
    });
    // adding an item into the cart
    (_c = e.querySelector('.fa-plus-circle')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function (event) {
        var _a = repeatedElements(e), unitPrice = _a.e1, target = _a.e2;
        if (target && price) {
            target.innerHTML = String(Number(target === null || target === void 0 ? void 0 : target.innerHTML) + 1);
            price.innerHTML = String(Number(price.innerHTML) + Number(unitPrice === null || unitPrice === void 0 ? void 0 : unitPrice.innerHTML.replace(/[ $]/g, '')));
        }
    });
    // Removing an item from the cart
    (_d = e.querySelector('.fa-minus-circle')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function (event) {
        var _a = repeatedElements(e), unitPrice = _a.e1, target = _a.e2;
        if (target && price && Number(target.innerHTML) > 0) {
            target.innerHTML = String(Number(target === null || target === void 0 ? void 0 : target.innerHTML) - 1);
            price.innerHTML = String(Number(price.innerHTML) - Number(unitPrice === null || unitPrice === void 0 ? void 0 : unitPrice.innerHTML.replace(/[ $]/g, '')));
        }
    });
});
