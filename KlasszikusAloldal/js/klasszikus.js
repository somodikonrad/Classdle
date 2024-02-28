var app = angular.module('classdle', []);
let select = document.querySelector('#nevek');
let tablazat = document.querySelector('#emberek');

app.run(function($rootScope){

    $rootScope.klasszikusitems = [];


    axios.get('http://localhost:3000/klasszikus').then(res => {
        $rootScope.klasszikusitems = res.data;
        $rootScope.klasszikusitems.sort();

        $rootScope.klasszikusitems.forEach(user => {
            let option = document.createElement('option');
            option.value = user.Név;
            option.innerText = user.Név;
            select.appendChild(option);
    
        });

        function kitoltes(){
            
            $rootScope.klasszikusitems.forEach(elem =>{
                let tr = document.createElement('tr');
        
                let nem = document.createElement('td');
                nem.innerText = elem.Nem;
        
                let magassag = document.createElement('td');
                magassag.innerText = elem.Magasság;
        
                let suly = document.createElement('td');
                suly.innerText = elem.Súly;
        
                let hajszin = document.createElement('td');
                hajszin.innerText = elem.Hajszín;
        
                let lakhely = document.createElement('td');
                lakhely.innerText = elem.Lakhely;
        
                let szuletes = document.createElement('td');
                szuletes.innerText = elem.SzületésiÉv;
        
                tr.appendChild(nem);
                tr.appendChild(magassag);
                tr.appendChild(suly);
                tr.appendChild(hajszin);
                tr.appendChild(lakhely);
                tr.append(szuletes);
        
                tablazat.appendChild(tr);
            })
            
        }


        $rootScope.$apply();
    }); 

});
