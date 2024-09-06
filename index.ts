function repeatedElements (e) {
    const e1 = e.querySelector('.unit-price')
    const e2 = e.querySelector('.quantity')
    return {e1, e2}
}
let price = document.querySelector('.price') 
let elements = document.querySelectorAll('.card-main')

// adding event listener for each item

elements.forEach((e) => {
e.querySelector('.fa-trash-alt')?.addEventListener('click', () => {
    const {e1:unitPrice, e2:target} = repeatedElements(e);
    e.remove();
    if (price && Number(target.innerHTML) > 0) {
        price.innerHTML = String(Number(price.innerHTML) - Number(Number(unitPrice?.innerHTML.replace(/[ $]/g, ''))* Number(target.innerHTML) ) )
    }
})

// make the heart red

e.querySelector('.fa-heart')?.addEventListener('click', (event) => {
const target = event.target as HTMLElement
if (target.style.color == 'red'){target.style.color = 'black'} else target.style.color = 'red'
})

// adding an item into the cart

e.querySelector('.fa-plus-circle')?.addEventListener('click', (event) => {
    const {e1:unitPrice, e2:target} = repeatedElements(e);
   if(target && price){ 
    target.innerHTML = String(Number(target?.innerHTML) + 1)
    price.innerHTML = String(Number(price.innerHTML) + Number(unitPrice?.innerHTML.replace(/[ $]/g, ''))) 
}
})

// Removing an item from the cart

e.querySelector('.fa-minus-circle')?.addEventListener('click', (event) => {
    const {e1:unitPrice, e2:target} = repeatedElements(e);
   if(target && price && Number(target.innerHTML) > 0) { 
    target.innerHTML = String(Number(target?.innerHTML) - 1)
    price.innerHTML = String(Number(price.innerHTML) - Number(unitPrice?.innerHTML.replace(/[ $]/g, ''))) 

}
})
})
