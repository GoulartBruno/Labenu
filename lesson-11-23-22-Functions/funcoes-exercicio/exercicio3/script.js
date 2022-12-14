/*a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).





function soma (number1,number2) {


return ` ${number1} + ${number2}= ${number1 + number2}`


}

console.log(soma(40,10))


function subtrasao (sub1,sub2) {


    return ` ${sub1} - ${sub2}= ${sub1 - sub2}`
    
    
    }
    
    console.log(subtrasao(40,10))

    function multi (multi1,multi2) {


        return ` ${multi1} X ${multi2}= ${multi1 * multi2}`
        
        
        }
        
        console.log(multi(40,10))

        function divisao (div1,div2) {


            return ` ${div1} / ${div2}= ${div1 / div2}`
        
            }
            
            console.log(divisao(40,10))



            b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.
*/

const primeiroNumero=+(prompt("Digite um número:"))
const segundoNumero=+(prompt ("Digite outro número:"))


function soma (number1,number2) {


    return ` ${number1} + ${number2}= ${number1 + number2}`
    
    
    }
    
    console.log(soma(primeiroNumero,segundoNumero))

    function subtrasao (sub1,sub2) {


        return ` ${sub1} - ${sub2}= ${sub1 - sub2}`
        
        
        }
        
        console.log(subtrasao(primeiroNumero,segundoNumero))


        function multi (multi1,multi2) {


            return ` ${multi1} X ${multi2}= ${multi1 * multi2}`
            
            
            }
            
            console.log(multi(primeiroNumero,segundoNumero))

            function divisao (div1,div2) {


                return ` ${div1} / ${div2}= ${div1 / div2}`
            
                }
                
                console.log(divisao(primeiroNumero,segundoNumero))