var app = angular.module('classdle', []);
let select = document.querySelector('#nevek');
let nyil = document.querySelector('#nyil');
let emoji = document.querySelector('#emoji');

let counter = 0;
let emojiItems = [];
let random;


    app.run(function(){
        axios.get('http://localhost:3000/emoji').then(res => {
            emojiItems = res.data;
            emojiItems.sort();
            random = emojiItems[Math.floor((Math.random()*emojiItems.length))]
            alert(random.Név);
            
            emojiItems.forEach(user => {
                let option = document.createElement('option');
                option.value = user.Név;
                option.innerText = user.Név;
                
                select.appendChild(option);
            });  

        }); 
  
    });
    
    function valaszt () {
        let nev = select.value;
        let elsoemoji = document.querySelector('#elso');
        let masodikemoji = document.querySelector('#masodik');
        let harmadikemoji = document.querySelector('#harmadik');

        if(counter == 0)
        {
            elsoemoji.innerHTML = random.Emoji1 + ";";
            counter++;
        }  
        else if (counter == 1) 
        {
            masodikemoji.innerHTML = random.Emoji2 + ";";
            counter++;
        }
        else
        {
            harmadikemoji.innerHTML = random.Emoji3 + ";";
        }  

    //Törlés
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === nev) {
            select.remove(i);
            break;
        }
    }

        if (nev === random.Név) {
       
            let nyil = document.querySelector('.nyil');
            let div = document.querySelector('.frissit');
            let refresh = document.createElement('button');
            refresh.innerText = "Frissít";
            refresh.onclick = function (){
                window.location.reload();
            }
    
    
            Swal.fire({
                title: "Nyertél!",
                text: "Sikeresen kitaláltad kisbarátod!",
                icon: "success"
              });
    
              nyil.style.visibility = 'hidden';
              select.style.visibility = 'hidden';
    
              div.appendChild(refresh);
    
        }

    }