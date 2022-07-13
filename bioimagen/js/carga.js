window.onload = function(){
    //this.alert('holl')
    $('body').addClass('hidden');
    window.location.href = '#';
    setTimeout(carga, 2000);
}

function carga() {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}