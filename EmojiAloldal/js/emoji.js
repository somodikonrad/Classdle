var app = angular.module('classdle', []);
let select = document.querySelector('#nevek');

let emojiItems = [];
let random;

app.run(function(){

    


    axios.get('http://localhost:3000/emoji').then(res => {
        emojiItems = res.data;
        emojiItems.sort();
        random = emojiItems[(Math.floor(Math.random()*emojiItems.length))]

        emojiItems.forEach(user => {
            let option = document.createElement('option');
            option.value = user.Név;
            option.innerText = user.Név;
            select.appendChild(option);
    


        });

        $rootScope.$apply();
    }); 

    

    

});