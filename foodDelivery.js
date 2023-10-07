/*
• Пилешко меню – 10.35 лв.

• Меню с риба – 12.40 лв.

• Вегетарианско меню – 8.15 лв.
· Брой пилешки менюта – цяло число в интервала [0 … 99]

· Брой менюта с риба – цяло число в интервала [0 … 99]

· Брой вегетариански менюта – цяло число в интервала [0 … 99]
*/


function foodDelivery(index) {
    let chicken = Number(index[0]);
    let fish = Number (index[1]);
    let vegan = Number(index[2]);
    let delivery = 2.5;
    let chickenOrders = chicken*10.35;
    let fishOrders = fish*12.40;
    let veganOrders = vegan*8.15;
    let sumMenu = chickenOrders+fishOrders+veganOrders;
    let dessert = sumMenu*0.2;
    let result = sumMenu+dessert+delivery;
    console.log(result);
}
foodDelivery(["9 ",

"2 ",

"6 "])