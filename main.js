document.addEventListener("DOMContentLoaded", function() {
  var mensagem = document.getElementById("mensagem");
  mensagem.style.display = "block";
  setTimeout(function(){
    mensagem.style.display = "none";
  }, 5000); // A mensagem será exibida por 5 segundos (5000 milissegundos)
});


// Função para realizar o login
function fazerLogin() {
  // Pegar os valores dos campos de email e senha
  var email = document.getElementById('exampleInputEmail1').value;
  var senha = document.getElementById('exampleInputPassword1').value;

  // Verificar se os campos estão preenchidos
  if (email && senha) {
    // Verificar se o email e a senha correspondem aos valores armazenados no Local Storage
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('senha');

    if (email === storedEmail && senha === storedPassword) {
      alert('Login realizado com sucesso!');
      // Fechar o modal após o login bem-sucedido
      $('#loginModal').modal('hide');
    } else {
      // Exibir mensagem de erro se as credenciais estiverem incorretas
      document.getElementById('loginErrorMessage').innerText = 'Credenciais inválidas. Por favor, tente novamente.';
    }
  } else {
    // Exibir mensagem de erro se os campos não estiverem preenchidos
    document.getElementById('loginErrorMessage').innerText = 'Por favor, preencha todos os campos.';
  }
}

// Adicionar evento de submit ao formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir o envio padrão do formulário
  fazerLogin(); // Chamar a função de login
});

const form = document.getElementById('loginForm');
  const errorMessage = document.getElementById('loginErrorMessage');

  form.addEventListener('submit', function(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();
    
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    
    // Verifica se os campos estão preenchidos
    if (email && password) {
      // Redireciona para a página index2.html
      window.location.href = 'index2.html';
    } else {
      // Exibe a mensagem de erro se os campos não estiverem preenchidos
      errorMessage.style.display = 'block';
    }
  });
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores de email e senha
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    // Credenciais de login
    const storedEmail = 'admin@admin.com';
    const storedPassword = 'admin';

    // Verifica as credenciais
    if (email === storedEmail && password === storedPassword) {
      // Salva o login no localStorage
      localStorage.setItem('loggedIn', 'true');
      alert('Login bem-sucedido!'); // Ou redirecione para outra página
      // Feche o modal se necessário
      const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
      modal.hide();
    } else {
      // Exibe mensagem de erro
      document.getElementById('loginErrorMessage').style.display = 'block';
    }
  });
