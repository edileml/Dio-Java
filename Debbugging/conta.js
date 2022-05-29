class contabancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    sacar(valor){
        if(valor > this._saldo) {
            return console.log('saque negado; saldo insuficiente')
        }
        this._saldo = this._saldo - valor; 
        return this._saldo;
   }

   depositar(valor) {
       this._saldo = this._saldo + valor;
       return this._saldo;
   }

set saldo(valor){
return this._saldo;
}

get saldo(){
    return this._saldo;
}
}

class contacorrente extends contabancaria {
constructor(agencia, numero, cartaocredito){
    super(agencia, numero);
    this.tipo = 'corrente';
    this._cartaocredito = cartaocredito;
}

    set cartaocredito(valor) {
        this._cartaocredito;
    }
    get cartaocredito(){
        return this._cartaocredito;
    }
}
class contaPoupanca extends contabancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if(valor > 500) {
            return 'operacao negada';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}

const minhaconta = new contacorrente(1, 211, true);
const contauni = new contauniversitaria(2, 333);