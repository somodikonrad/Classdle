var app = angular.module('classdle', []);
let select = document.querySelector('#nevek');
let nyil = document.querySelector('#nyil');
let kep = document.querySelector('#kep');
let kepneve = "";
let kepitems = [];
let random;

app.run(function(){
    axios.get('http://localhost:3000/kep').then(res => {
        kepitems = res.data;
        kepitems.sort();
        random = kepitems[Math.floor((Math.random()*kepitems.length))]
        //alert(random.Nev);
        kepitems.forEach(user => {
            let option = document.createElement('option');
            option.value = user.Nev;
            option.innerText = user.Nev;
            kepneve = user.kepneve;
            select.appendChild(option);
        });  
        kep.src = `/img/${random.kepneve}.png`;
        
        /*let kepWidth = kep.clientWidth;
        let kepHeight = kep.clientHeight;
        kep.style.width = (kepWidth + 100) + "px";
        kep.style.height = (kepHeight + 100) + "px";*/

    }); 
    
   
    
    
});




    
    function valaszt () {
        for (let i = 0; i < kepitems.length; i++) {
            if(kepitems[i].kepneve == kepneve){
                
            }
      }
    }

