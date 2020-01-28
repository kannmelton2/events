const pies = [
    {
        name: 'Dutch Apple Pie',
        price: 1000,
        isWarm: true,
        isOrganic: true,
        crust: 'extra flaky',
        iceCream: 'Vanilla Bean',
        isAvailable: true,
        imgUrl: "https://images.unsplash.com/photo-1574684117906-450bb1498b8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
        drinkPairing: 'whiskey',
        instructor: 'Zoe'
    },
    {
        name: 'Regular Apple Pie',
        price: 5000,
        isWarm: true,
        isOrganic: true,
        crust: 'under baked',
        iceCream: 'Vegan Chocolate',
        isAvailable: false,
        imgUrl: "https://images.unsplash.com/photo-1574684117906-450bb1498b8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
        drinkPairing: 'All Wines',
        instructor: 'Mary'
    },
    {
        name: 'Pizza Pie',
        price: 2.5,
        isWarm: true,
        isOrganic: false,
        crust: 'yeah!',
        iceCream: 'nope',
        isAvailable: true,
        imgUrl: "https://images.unsplash.com/photo-1517685645259-c6caddb7165d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        drinkPairing: 'High Life',
        instructor: 'Luke'
    },
    {
        name: 'Berry Pie',
        price: 1,
        isWarm: false,
        isOrganic: true,
        crust: 'Oreo',
        iceCream: 'Peanut Butter',
        isAvailable: true,
        imgUrl: "https://images.unsplash.com/photo-1525124868858-de4bca556d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        drinkPairing: 'water',
        instructor: 'Zoe'
    },
    {
        name: 'Chocolate',
        price: 1,
        isWarm: false,
        isOrganic: true,
        crust: 'graham',
        iceCream: 'Mint',
        isAvailable: true,
        imgUrl: "https://images.unsplash.com/photo-1513378563607-f412c1764f3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        drinkPairing: 'gin',
        instructor: 'Mary'
    },
    {
        name: 'Pi',
        price: 3.14,
        isWarm: false,
        isOrganic: true,
        crust: 'crumb',
        iceCream: 'Moose Tracks',
        isAvailable: true,
        imgUrl: "https://images.unsplash.com/photo-1554298128-c916518a4b34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
        drinkPairing: 'milk',
        instructor: 'Luke'
    },
    {
        name: 'Cherry',
        price: 0.53,
        isWarm: true,
        isOrganic: true,
        crust: 'extra flaky',
        iceCream: 'Vanilla',
        isAvailable: true,
        imgUrl: "https://images.unsplash.com/photo-1537988690685-315c2c74132b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
        drinkPairing: 'Golden Rose Wine',
        instructor: 'Kayla'
    },
    {
        name: 'Key Lime',
        price: 10000,
        isWarm: false,
        isOrganic: false,
        crust: 'graham',
        iceCream: 'Mint',
        isAvailable: true,
        imgUrl: "https://images.unsplash.com/photo-1502307837336-d59cca9408a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        drinkPairing: 'Almond Milk',
        instructor: 'Kayla'
    }
]

console.log(pies);


// PRINT TO DOM
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


// CARDS
const pieBuilder = (divName, arr) => {
    let domStr = '';
    for (let i = 0; i < arr.length; i++) {
        domStr += '<div class="pie">';
        domStr +=   `<header><h2>${arr[i].name}</h2></header>`;
        domStr +=   `<h3>$${arr[i].price}</h3>`;
        domStr +=   `<img src=${arr[i].imgUrl}>`;
        domStr +=   `${arr[i].name} with a(n) ${arr[i].crust} crust`
        domStr +=   `<p>This product is warm: ${arr[i].isWarm}</p>`;
        domStr +=   `<p>This product is organic: ${arr[i].isOrganic}</p>`;
        domStr +=   `<p>This product is paired with ${arr[i].iceCream} ice cream and ${arr[i].drinkPairing} to drink</p>`;
        domStr +=   `<p>available: ${arr[i].isAvailable}</p>`;
        domStr +=   `<h6>Endorsed by: ${arr[i].instructor}</h6>`;
        domStr += '</div>'
    }
    printToDom(divName, domStr);
};

// 3 cards to a row
// nice big images
// how do you rep other info?

pieBuilder('pieCards', pies);

