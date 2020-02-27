const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        handleClick(event);
    })
});
/**
 * Функция вызывает обработку по клику мышы по кнопке и меняет объкты
 * @param {event} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    const cardsNode = clickedButtonEvent.target.parentNode;
    const card = {
        wrap: cardsNode,
        img: cardsNode.querySelector('img'),
        productName: cardsNode.querySelector('.productName'),
        button: cardsNode.querySelector('button'),
    };
    const textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    }
}

function showMoreText(card) {
    card.img.style.display = 'none';
    const text = 'Metallica is a greatest band in the world!!!';
    card.productName.insertAdjacentHTML('afterend', `<div class = "desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}

function hideMoreText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}