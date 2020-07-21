"use strict";

const $novo = document.getElementById( 'novo' );
const $fechar = document.getElementById( 'fechar' );
const $salvar = document.getElementById( 'salvar' );
const $campos = document.querySelectorAll( '.form > input' );

const exibirModal = () => document.querySelector('.conteiner-modal').classList.add('exibirModal');
const ocultarModal = () => document.querySelector('.conteiner-modal').classList.remove('exibirModal');

const salvarAluno = () => {
    // const $campoNome = document.getElementById( 'nome' );

    // $campoNome.setAttribute(pattern, "[a-zA-Z0-9]+");

    ocultarModal();
}

const masks = {

}

$campos.forEach( ( campo ) => {
    const tipoValidacao = campo.dataset.id;

    campo.addEventListener( 'input', ( elemento ) => {
        elemento.target.value = elemento.target.value.replace( 'a', 'x' );
        // validarMascara()
    } );
} );

$novo.addEventListener( 'click', () => exibirModal() );
$fechar.addEventListener( 'click', () => ocultarModal() );
$salvar.addEventListener( 'click', () => salvarAluno() );