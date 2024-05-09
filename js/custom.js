// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


$('.custom_slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slick_slider_nav',
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: false
        }
    }]
})

$('.slick_slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.custom_slick_slider',
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
});


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

/**COMECEI A ESCREVER AQUI */

function botao_cadstrar(){

    const nome_empresa_input = nome_empresa.value
    const CNPJ = CNPJ_input.value
    const logadouro = logadouro_input.value
    const bairro = bairro_input.value
    const cidade = cidade_input.value
    const estado = estado_input.value
    const pais = pais_input.value
    const ramo = ramo_input.value
    const descricao = descricao_input.value
    const senha = senha_input.value
    const confirmacao_senha = confirmacao_senha_input.value
    const DDD = DDD_input.value
    const telefone = telefone_input.value
    const email = emial_input.value
    const Instagram = Instagram_input.value



}