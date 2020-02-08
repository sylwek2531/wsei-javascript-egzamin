document.addEventListener('DOMContentLoaded', function() {

    const btn1 = document.querySelector('#button-1');
    const btn2 = document.querySelector('#button-2');
    const btn3 = document.querySelector('#button-3');
    const shopppingList = document.querySelector('#shopping-list');

    btn1.addEventListener('click', function() {
        const li = document.createElement('li');
        li.innerHTML = 'chleb';
        shopppingList.appendChild(li);
    });

    btn2.addEventListener('click', function() {
        if(shopppingList.children.length > 0){
            shopppingList.removeChild(shopppingList.children[shopppingList.children.length-1]);
        }else{
            alert("Brak produktów na liście, nie można usunąć elementu. Najpierw dodaj produkt. (Przycisk 1)");
        }
    });

    btn3.addEventListener('click', function() { 
        if(shopppingList.children.length > 1){
            shopppingList.appendChild(shopppingList.children[1].cloneNode(true));
        }else{
            alert("Brak produktów lub brak drugiego produktu na liście, nie można zduplikować elementu. Najpierw dodaj produkt. (Przycisk 1)");
        }
    });

});

