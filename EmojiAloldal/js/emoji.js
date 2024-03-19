var app = angular.module('classdle', []);
let select = document.querySelector('#nevek');
let nyil = document.querySelector('#nyil');
let emoji = document.querySelector('#emoji');
let emojineve = "";
let emojiItems = [];
let random;


    app.run(function(){
        axios.get('http://localhost:3000/kep').then(res => {
            emojiItems = res.data;
            emojiItems.sort();
            random = emojiItems[Math.floor((Math.random()*emojiItems.length))]
            alert(random.emojineve);
            //alert(random.Nev);
            emojiItems.forEach(user => {
                let option = document.createElement('option');
                option.value = user.Nev;
                option.innerText = user.Nev;
                emojineve = user.emojineve;
                select.appendChild(option);
            });  

        }); 
  
    });
    
    function valaszt () {
        let nev = select.value;
    }