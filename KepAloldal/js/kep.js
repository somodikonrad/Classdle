var app = angular.module('classdle', []);
let select = document.querySelector('#nevek');
let nyil = document.querySelector('#nyil');
let kep = document.querySelector('#kep');
let frissit = document.querySelector('.frissit');
let dropDown = document.querySelector('.dropdown');
let kepneve = "";
let kepitems = [];
let random;
let bluri = 42.5;

app.run(function(){
    axios.get('http://localhost:3000/kep').then(res => {
        kepitems = res.data;
        kepitems.sort();
        random = kepitems[Math.floor((Math.random()*kepitems.length))];
        //alert(random.Nev);
        kepitems.forEach(user => {
            let option = document.createElement('option');
            option.value = user.Nev;
            option.innerText = user.Nev;
            kepneve = user.kepneve;
            select.appendChild(option);
        });  

        kep.src = `/profilImg/${random.kepneve}.png`;
        kep.style.filter = `blur(${bluri}px)`;

    }); 
    
   
    
    
});




    
    function valaszt () {
        let nev = select.value;

        

        if (random.Nev == select.value) {
            bluri = 0;
            kep.style.filter = `blur(${bluri}px)`;
            Swal.fire({
                title: "Nyertél!",
                text: "Sikeresen kitaláltad kisbarátod!",
                icon: "success",
                color: "#B6904A",
                background: "black",
                confirmButtonColor: "#B6904A"
              });
            nyil.style.visibility = "hidden";
            select.style.visibility = "hidden";
            let refresh = document.createElement('button');
            refresh.innerHTML = "Frissít";
            refresh.onclick = function(){
                window.location.reload();
            }
            frissit.append(refresh);
            dropDown.remove();
        }

        bluri -= 2.5;
        kep.style.filter = `blur(${bluri}px)`;

        
        
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value == nev) {
                select.remove(i);
                break;
            }
             
        }
        
    }

