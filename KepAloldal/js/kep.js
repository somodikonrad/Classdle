var app = angular.module('classdle', []);
let select = document.querySelector('#nevek');
let nyil = document.querySelector('#nyil')
let kepneve = "";
app.run(function($rootScope){

    $rootScope.kepitems = [];
    $rootScope.kepnev = "";


    axios.get('http://localhost:3000/kep').then(res => {
        $rootScope.kepitems = res.data;
        $rootScope.kepitems.sort();

        $rootScope.kepitems.forEach(user => {
            let option = document.createElement('option');
            option.value = user.Nev;
            option.innerText = user.Nev;
            kepneve = user.kepneve;
            select.appendChild(option);
    


        });

        $rootScope.$apply();
    }); 

    
    function valaszt () {
        for (let i = 0; i < kepitems.length; i++) {
            if(kepitems[i].kepneve == kepneve){
                $rootScope.kepnev = kepneve;
            }
      }
    }

    

});

