var escopoGlobal = 'Global'

function testarEscopo (){
    console.log('Acessando variavel escopo global', escopoGlobal)
    var escopolocal = "local"
    console.log('Acessando variavel escopo local dentro de ', escopoGlobal)

}
testarEscopo();

console.log('Acessando variavel escopo local fora de ', escopoGlobal)


//usar o let para não vazar memória

let escopoGlobal = 'Global'

function testarEscopo (){
    console.log('Acessando variavel escopo global', escopoGlobal)
    let escopolocal = "local"
    console.log('Acessando variavel escopo local dentro de ', escopoGlobal)

}
testarEscopo();
console.log('Acessando variavel escopo local fora de ', escopoGlobal)