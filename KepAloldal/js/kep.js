var app = angular.module('classdle', []);
let select = document.querySelector('#nevek');

app.run(function($rootScope){

    $rootScope.kepitems = [];


    axios.get('http://localhost:3000/kep').then(res => {
        $rootScope.kepitems = res.data;
        $rootScope.kepitems.sort();

        $rootScope.kepitems.forEach(user => {
            let option = document.createElement('option');
            option.value = user.Nev;
            option.innerText = user.Nev;
            select.appendChild(option);
    


        });

        $rootScope.$apply();
    }); 

    

    

});