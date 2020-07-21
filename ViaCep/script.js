"use strict";


// pegr o cep.
const $cep = document.getElementById('cep');

const preencheFormulario = ( endereco ) => {

    document.getElementById( 'edrc' ).value = endereco.logradouro;
    document.getElementById( 'brr' ).value = endereco.bairro;
    document.getElementById( 'cdd' ).value = endereco.localidade;
    document.getElementById( 'est' ).value = endereco.uf;
}

// busc o cep.
const bscCep = ( cep ) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch ( url ).then ( response => response.json().then ( data => preencheFormulario( data ) ) );
}

const cepAltr = () => {
    bscCep( $cep.value );
}

// altr os camps.
$cep.addEventListener('change', cepAltr);