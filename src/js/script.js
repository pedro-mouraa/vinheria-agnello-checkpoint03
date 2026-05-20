let listaVinho = [{
    nome: 'Vinho',
    tipo: 'Branco',
    safra: 'sla',
    estoque: '3',
},
{
    nome: 'Vinho',
    tipo: 'Rosé',
    safra: 'sla',
    estoque: '10',
},
{
    nome: 'Vinho',
    tipo: 'Tinto',
    safra: 'sla',
    estoque: '7',
}];
console.log(listaVinho);

function adicionarVinho(){
    listaVinho.push({
        nome: 'Vinho2', 
        tipo: 'Rosé',
        safra: 'sla',
        estoque: 0
    });
    console.log(listaVinho);

}
adicionarVinho();



function listarVinho(){
    listaVinho.forEach((vinho, indice)=>{
        console.log(`${indice}: ${vinho}`);
    });   
}
listarVinho();



function mostrarVinho(){
    const mostrar = listaVinho.filter(listaVinho[3] <=5);
    console.log(mostrar);

}
mostrarVinho();

function calcularEstoque(){
    

}
calcularEstoque();

function exibirVinhos(){
    listaVinho.map(listaVinho);
    console.log(listaVinho);
}
exibirVinhos();