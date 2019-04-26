//criando propriedades

class Canetao {
    constructor(_marca, _cor) {
        this._marca = _marca
        this._cor = _cor
        this.tampada = true
        this.escrevendo = false

    }


    //criando métodos

    escrever() {
        if (this.tampada == false) {
            console.log('Estou escrevendo')
        } else {
            console.log('Erro: Você deve destampar antes de escrever')
        }

    }
    destampar() {
        this.tampada ? this.tampada = false : console.log('O canetão já está destampado')
    }

    tampar() {
        if (this.tampada) {
            console.log('O canetão já está com tampa')
        } else {
            this.tampada = true
            if (this.escrevendo) {
            this.escrevendo = fale;
            }
        }
    }
}


//operador tenário
condicao == true ? console.log("Verdadeiro") : console.log("Falso")

//instanciar classe//fazer no console

let canetao = new Canetao()

//passando parametros

let canetao2 = new Canetao('piloto', 'azul')

canetao2.brilhanoescuro = true // somente esse canetão irá brilhar no escuro

Canetao.prototype.carregavel = true //inserir uma nova propriedade em uma classe inteira (para todos os canetões)