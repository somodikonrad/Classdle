var app = angular.module('classdle', []);
let select = document.querySelector('#nevek');

app.run(function($rootScope){

    $rootScope.klasszikusitems = [];


    axios.get('http://localhost:3000/klasszikus').then(res => {
        $rootScope.klasszikusitems = res.data;


        $rootScope.$apply();
    }); 

    $rootScope.klasszikusitems.forEach(user => {
        let option = document.createElement('option');
        option.value = user.Név;
        option.innerText = user.Név;

        select.appendChild(option);

    });

    

});