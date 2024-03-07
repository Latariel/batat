let total = 230;
const totals = {
    ketchup: 0,
    cheese: 0,
    blue_cheese: 0,
    bbq: 0,
};

function addItem(item, price) {
    if (totals[item] < 10) {
        totals[item]++;
        document.getElementById(item).innerText = totals[item];

        total += price;
        document.getElementById('total').innerText = total + ' ₽';
    } else {
        alert('Достигнуто максимальное количество позиций (10).');
    }
}

function removeItem(item, price) {
    if (totals[item] > 0) {
        totals[item]--;
        document.getElementById(item).innerText = totals[item];
        total -= price;
        document.getElementById('total').innerText = total + ' ₽';
    }
}