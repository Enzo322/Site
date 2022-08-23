$(document).ready(
    function carrinho(){
        let carrinho = $("#carrinho").val();
        exibirCarrinho(carrinho);
    })

function exibirCarrinho(carrinho){
    let preco,soma = 0;
    carrinho.innerHTML += "<table> <tr> <th>Nome</th> <th>Preço</th> <th>Botões</th> </tr>";
    for(let i=1; i<=100;i++){
        
        if(localStorage.getItem('Nome:'+i ) != null){
            carrinho.innerHTML += ""+localStorage.getItem('Nome:'+i)+" - "+localStorage.getItem('Preco:'+i)+
            " -   <input type='button' onclick='comprar()' value='Comprar'><input type='button' onclick='remover()' value='Excluir'><br><br>";
        }
        preco = localStorage.getItem('Preco:'+i);
        soma += parseFloat(preco);

    }
    carrinho.innerHTML += "Total: "+soma+"</table>";

}
function comprar(carrinho){
    window.location.href = "http://127.0.0.1:5500/compra.html";
}
function remover(carrinho){
    for(let i =1;i<=100;i++){
    localStorage.removeItem("Nome:"+i);
    localStorage.removeItem("Preco:"+i);
    }
}