"use strict";

// pegr as inpt.
const $cep = document.getElementById ( 'cep' );
const $lgdr = document.getElementById ( 'edrc' );
const $brr = document.getElementById ( 'brr' );
const $cdd = document.getElementById ( 'cdd' );
const $estd = document.getElementById ( 'estd' );

const vrfCep = () => $cep.reportValidity();

// busc o cep.
const ectEdr = async ( cep ) => {
    if ( vrfCep() ){
        const url = `https://api.postmon.com.br/v1/cep/${cep}`;
        const getAddress = await fetch ( url );
        const address = ( await getAddress ).json();

        console.log( await address );
        prcFormulario( await address );
    }
}

const prcFormulario = ( edrc ) => {
    $lgdr.value = edrc.lgdr;
    $brr.value = edrc.bairro;
    $cdd.value = edrc.cidade;
    $estd.value = edrc.estado;
}


// mask do cep.
const maskCep = ( $cep ) => {
    let aux = $cep.value;
    aux = aux.replace ( /[^0-9]/g, '' );
    aux = aux.replace ( /(.{5})(.)/, '$1-$2' );
    $cep.value = aux;
}

$cep.addEventListener ( 'blur', () => ectEdr( $cep.value ));
$cep.addEventListener ( 'keyup', () => maskCep( $cep ) );