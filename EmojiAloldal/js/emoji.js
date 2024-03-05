var app = angular.module('classdle', []);
let select = document.querySelector('#nevek');

app.run(function($rootScope){

    $rootScope.emojiItems = [];


    axios.get('http://localhost:3000/emoji').then(res => {
        $rootScope.emojiItems = res.data;
        $rootScope.emojiItems.sort();

        $rootScope.emojiItems.forEach(user => {
            let option = document.createElement('option');
            option.value = user.Név;
            option.innerText = user.Név;
            select.appendChild(option);
    


        });

        $rootScope.$apply();
    }); 

    

    

});