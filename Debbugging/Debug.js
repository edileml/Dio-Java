function validaArray(arr, num){
try{
if (!arr && !num) throw new ReferenceError('envio os parametros');

if (typeof arr !== 'object')
    throw new TypeError('Array precisa ser do tipo Objet');

if (typeof num !== 'number')
    throw new TypeError('Array precisa ser do tipo numero'); 

if (arr.leght !== num)
    throw new RangeError('Tamanho invalido');

return arr;

} catch(e) {
    if (e instanceof RangeError) {
        console.log('Range Error!');
        console.log(e.stack);
    } else if (e instanceof ReferenceError) {
        console.log('ReferenceError');
        console.log(e.stack);
    } else {
        console.log('tipo de erro nao esperado' = e );
        console.log(e.stack);
    }
  }
}

console.log(validaArray());