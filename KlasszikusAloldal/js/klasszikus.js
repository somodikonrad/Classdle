var app = angular.module('classdle', []);
let select = document.querySelector('#nevek');
let tablazat = document.querySelector('#emberek');
let klasszikusitems = [];
let random;

app.run(function(){


    axios.get('http://localhost:3000/klasszikus').then(res => {
        klasszikusitems = res.data;
        klasszikusitems.sort();
        random = klasszikusitems[Math.floor((Math.random()*klasszikusitems.length))]
       

        klasszikusitems.forEach(user => {
            let option = document.createElement('option');
            option.value = user.Név;
            option.innerText = user.Név;
            select.appendChild(option);
    
        });
        
    }); 


});

function kitoltes() {
    let selectesselect = document.querySelector('#nevek');
    let nev = selectesselect.value;
    
    
    let valasztottEmber;
    for (let i = 0; i < klasszikusitems.length; i++) {
        if (klasszikusitems[i].Név === nev) {
            valasztottEmber = klasszikusitems[i];
            break;
        }
    }

   
    let randomNevTulajdonsagok;
    for (let i = 0; i < klasszikusitems.length; i++) {
        if (klasszikusitems[i].Név === random.Név) {
            randomNevTulajdonsagok = klasszikusitems[i];
            break;
        }
    }

    let tr = document.createElement('tr');

    
    for (let tulajdonsag in valasztottEmber) {
        if (valasztottEmber.hasOwnProperty(tulajdonsag) && randomNevTulajdonsagok.hasOwnProperty(tulajdonsag)) {
            let td = document.createElement('td');
            td.innerText = valasztottEmber[tulajdonsag];

            if (valasztottEmber[tulajdonsag] === randomNevTulajdonsagok[tulajdonsag]) {
                td.style.backgroundColor = 'green';
            } else {
                td.style.backgroundColor = 'red';
            }

            tr.appendChild(td);
        }
    }

    tablazat.appendChild(tr);
}
