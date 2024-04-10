// Duas barras são comentario 
/* Texto
- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe ativo nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele *
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
const botaoMostrarProjeto = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


//Passo 2 - identificar o clique no botão 

botaoMostrarProjeto.addEventListener('click',() =>{
    //Passo 3 - adicionar a classe ativo nos projetos escondidos 
    projetosInativos.forEach(projetosInativos => {
      //projetosInativos.classList.add('ativo');
    });
    // Objetivo 2 - esconder o botão de mostrar mais . Passo 1 - pegar o botão e esconder ele
        botaoMostrarProjeto.classList.add('remover');     
    });

