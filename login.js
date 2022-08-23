$('#botaoLogin').click({
    function(){
        let email = $('#inputEmail3').val();
        let senha = $('#inputPassword3').val();

        function logar(email, senha){
            //var email = document.getElementById('inputEmail3');
            //var senha = document.getElementById('inputPassword3');
            let erro = $('#erro').val();
            if(email == localStorage.getItem('Email') && senha == localStorage.getItem('Senha')){
                localStorage.setItem("acesso", true);
                console.log("Email: "+email.value);
                console.log("Password: "+senha.value);
        
                window.location.href = "http://127.0.0.1:5500/index.html";
            }else{
                msgErro(erro);
            }
        
        }
        function msgErro(erro){
            erro.innerHTML = "<p>Usuário não identificado!</p>";    
        }
    }
})

