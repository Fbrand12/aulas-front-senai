const masks = {
    texto   : ( value ) => value.replace(/[^a-zA-Z À-ÿ]/, '')
    ,
    celular : ( value ) => value.replace(/\D/g, '')
                                .replace(/(\d{2})(\d)/, '($1) $2')
                                .replace(/(\d{5})(\d)/, '$1-$2')
                                .replace(/(.{15})(.*)/, '$1')
    ,
    cep     : ( value ) => value.replace(/\D/g, '')
                                .replace(/(.{5})(.)/, '$1-$2')
                                .replace(/(.{9})(.*)/, '$1')
};

export const validador = ( elemento ) => {
    elemento.addEventListener( 'input', ( evento ) => {
        const $input = evento.target;
        const tipoMascara = $input.dataset.type;
        
        if( masks.hasOwnProperty( tipoMascara ) ){
            $input.value = masks[ tipoMascara ]( $input.value );
        }
    } );
}

export const validadorEmail = ( elemento ) => {
    elemento.addEventListener( 'blur', () => {
        if( !elemento.value.match( /[.*@.*\..*]/ ) ){
            alert('Email invalido');
        }
    } );
}