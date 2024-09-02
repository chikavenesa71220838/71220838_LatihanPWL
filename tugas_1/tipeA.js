var attType = document.getElementById('attractionType'); //mengambil jenis atraksi
var addOn = document.getElementById('addOn'); //buat ngambil jenis addon kalau attType dah dipilih
var errorMessage = document.getElementById('error-message');
var tickets = document.getElementById('tickets'); //jumlah tiket



attType.addEventListener('change', function(){
    changeAddon();
})

function changeAddon(){
    addOn.innerHTML = "";
    var attraction = attType.value;
    var selectableAddOn = [];



    if (attraction === 'Bird Show'){
        const addOnBird = ['Cola', 'Orange Juice', 'Mini Donut'];
        selectableAddOn = addOnBird;
        errorMessage.textContent = '';
    } else if(attraction === 'Aquarium Visit'){
        const addOnAquarium = ['Hot Chocolate', 'Ice Cream', 'Snacks'];
        selectableAddOn = addOnAquarium;
        errorMessage.textContent = '';
    } else if(attraction === 'Safari Tour'){
        errorMessage.textContent = 'Mohon maaf atraksi penuh';
    }

    for (var i = 0; i< selectableAddOn.length; i++){
        var pilihan = selectableAddOn[i];
        var newElmnt = document.createElement('option');

        newElmnt.textContent = pilihan;
        newElmnt.value = pilihan;
        addOn.appendChild(newElmnt);
    }

}

var nama = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var date = document.getElementById('tgl'); 

function makeReservation() {
    alert('Reservation succesfully made!\n'+'\n     Name: ' + nama.value + '\n     Email: ' + email.value + '\n     Phone: ' + phone.value +
         '\n     Date: ' + date.value + '\n     Attraction: ' + attType.value + '\n     Tickets: ' + tickets.value + '\n     Add-On: ' + addOn.value);
}
