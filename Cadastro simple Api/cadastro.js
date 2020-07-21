"use strict";
import { validador, validadorEmail } from './masks.js';

const $novo = document.getElementById( 'novo' );
const $fechar = document.getElementById( 'fechar' );
const $salvar = document.getElementById( 'salvar' );

const exibirModal = () => document.querySelector('.conteiner-modal').classList.add('exibirModal');
const ocultarModal = () => document.querySelector('.conteiner-modal').classList.remove('exibirModal');

validador( document.getElementById( 'form' ) );

validadorEmail( document.getElementById( 'email' ) );

const cargaDados = async ( ) => {
    const $registros = document.getElementById( 'registros' );

    const url = 'http://localhost/joao/aulas-front-senai/2020_07_09_-_Cadastro_Simples_API-PHP/apiphp-master/alunos/';

    const dados = await getAlunos( url );

    dados.data.forEach( element => {
        const $tr = document.createElement( 'tr' );

        $tr.innerHTML = `
            <td>${element.id}</td>
            <td>${element.nome}</td>
            <td>${element.email}</td>
            <td>${element.celular}</td>
            <td>${element.cidade}</td>
            <td>${element.cep}</td>
        `;
        $registros.appendChild( $tr );
    } );
}

const getAlunos = ( url ) => fetch ( url ).then ( res => res.json() );

function createAluno( aluno ) {
    const url = 'http://localhost/joao/aulas-front-senai/2020_07_09_-_Cadastro_Simples_API-PHP/apiphp-master/alunos/';
    const options = {
        method: 'POST',
        body: JSON.stringify( aluno )
    };

    fetch(url, options )
}

const salvarAluno = () => {
    const nome = document.getElementById( 'nome' ).value;
    const email = document.getElementById( 'email' ).value;
    const celular = document.getElementById( 'celular' ).value;
    const endereco = document.getElementById( 'endereco' ).value;
    const numero = document.getElementById( 'numero' ).value;
    const bairro = document.getElementById( 'bairro' ).value;
    const cidade = document.getElementById( 'cidade' ).value;
    const estado = document.getElementById( 'estado' ).value;
    const cep = document.getElementById( 'cep' ).value;

    const aluno = {
        "nome": `'${nome}'`,
        "email": `'${email}'`,
        "celular": `'${celular}'`,
        "logradouro": `'${endereco}, ${numero}'`,
        "bairro": `'${bairro}'`,
        "cidade": `'${cidade}'`,
        "estado": `'${estado}'`,
        "cep": `'${cep}'`
    };

    console.log(aluno);

    createAluno( aluno );
    cargaDados( );
    ocultarModal();
}

cargaDados( );
$novo.addEventListener( 'click', () => exibirModal() );
$fechar.addEventListener( 'click', () => ocultarModal() );
$salvar.addEventListener( 'click', () => salvarAluno() );