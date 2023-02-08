let anosTerrestresEl = document.querySelector('#anosTerra');
let anosMarcianosEl = document.querySelector('#anosMarte');
let botaoEl = document.querySelector('#botaoConverte');

botaoEl.addEventListener('click', function(e) {

    anosMarcianosEl.value = (anosTerrestresEl.value * 365) / 687;

});
