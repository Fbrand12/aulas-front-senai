"use strict";

// pegando os botoes do hmtl.
const $input = document.getElementById('txtEntrada');
const $names = document.getElementById('names');
const $add = document.getElementById('btnAdd');
const $atl = document.getElementById('btnAtl');
const $excl = document.getElementById('btnClr');
const $rmv = document.getElementById('btnExcl');

// pegando o name.
let names = new Array ();
const adcName = async () => {
    let namesJson = JSON.parse(localStorage.getItem('names'));
     if(localStorage.hasOwnProperty( 'names' ) ){
         $names.innerHTML=``;
         namesJson.forEach(object => { $names.innerHTML += `<div class='name'>${object.names}</div>` });
     }
     else{
       // remov listagens de itens para mostra a tela.
         $names.innerHTML =``;
        }

}

const add = (name) => {
    if(name == ""){
        alert("colque o nome");
    } else
    names.push( {'names' : name}, );
    localStorage.setItem('names', JSON.stringify(names) );
    adcName();
}

const excl = () => {
    localStorage.excl('names');
    adcName();
}

const rmv = (name) => {

    names = names.filter( peoples => peoples.names != name );
    localStorage.setItem('names',JSON.stringify(names));
    adcName();
}

// mudar name ja colocado.
const atl =  () => {
    const name = prompt( "Name para alterar" );
    const newName = prompt("Insira o name:");
    rmv(name);
    add(newName);
    localStorage.setItem('names',JSON.stringify(names));
    adcName();
}

const exbName = () => {
    add($input.value);
}

const rmvName = () => {
    rmv($input.value);
}

$add.addEventListener('click',exbName);
$rmv.addEventListener('click',rmvName);
$excl.addEventListener('click', excl);
$atl.addEventListener('click',atl);