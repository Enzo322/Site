$('#botao').click({
    function(){
        let nome1 = $('#nome1').val();
        let preco1 = $('#preco1').val();
        let num = 1;
        function addcarrinho(nome1,preco1,num){
            localStorage.setItem("Nome:"+num,nome1);
            localStorage.setItem("Preco:"+num,preco1);
        }
    }

})

