function init() {
    var cols = ['Index', 'Name', 'Price', 'Details']
    var data = [
        { id: 1, name: 'HTC', price: '800 ron', details: 'android v6' },
        { id: 2, name: 'allview', price: '1000 ron', details: '12GB' },
        { id: 3, name: 'samsung', price: '500 ron', details: 'snapdragon processor' },
        { id: 4, name: 'apple', price: '99999 ron', details: 'good brand' },
    ];
    // var tableContainer = document.getElementById('wrapper');
    // var fragment = createFragment(data);
    // tableContainer.appendChild(fragment);


    var t = document.createElement('table');
    t.appendChild(document.createElement('thead'));
    t.querySelector('thead').appendChild(document.createElement('tr'));

    for (var i = 0; i < cols.length; i++) {
        var heading = document.createElement('td');
        heading.textContent = cols[i];
        t.querySelector('thead tr').appendChild(heading);

    };
    document.getElementById('wrapper').appendChild(t);

    // Create rows
    for (var i = 0; i < data.length; i++) {
        var el = data[i];
        var row = document.createElement('tr');


        var idCell = document.createElement('td');
        idCell.textContent = el.id;


        var nameCell = document.createElement('td');
        nameCell.textContent = el.name;

        var priceCell = document.createElement('td');
        priceCell.textContent = el.price;

        var detailsCell = document.createElement('td');
        detailsCell.textContent = el.details;


        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(detailsCell);

        t.appendChild(row)
    };

};




// function createFragment(items) {
//     var documentFragment = document.createDocumentFragment();
//     items.forEach(item => {
//         var tr = document.createElement('tr');

//         console.log(items)
//         items.forEach(item => {
//                 var td = document.createElement('td');
//                 var text = document.createTextNode(item.name);
//                 var text = document.createTextNode(item.price);

//                 td.appendChild(text);
//                 tr.appendChild(td);
//             }),


//             documentFragment.appendChild(tr);
//     });
//     return documentFragment;
// };

// function createFragment(items) {
//     var documentFragment = document.createDocumentFragment();
//     items.forEach(item => {
//         var tr = createElement('tr', item.id, item.name, item.price, item.details);
//         tr.style.border = 'solid 1px black';
//         documentFragment.appendChild(tr);
//     });
//     return documentFragment;
// };

// function createElement(type, id, name, price, details) {
//     var el = document.createElement(type);
//     el.innerHTML = id + ' ' + name + ' ' + price + ' ' + details;
//     el.style.border = 'solid 1px black';
//     return el;
// }