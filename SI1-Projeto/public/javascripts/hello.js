function newTip(){
    document.getElementById('newTip').innerHTML = "<form method='post' action='/newMainTip'>" +
    "<select name='topico' id='form1'>" +
    "<option value='Geral'> Tema </option>" +
    "<option value='Geral'> Geral </option>" +
    "<option value='Laboratórios'> Labs </option>" +
    "<option value='Minitestes'> Minitestes </option>" +
    "<option value='Projeto'> Projeto </option>" +
    "<option value='Heroku'> Heroku </option>" +
    "<option value='PadroesDeProjeto'> Padrões </option>" +
    "<option value='Ferramentas'> Ferramentas </option>" +
    "<option value='Design'> Design </option>" +
    "</select>" +
    "<input name='titulo' id='form2' type='text' placeholder='Título' required/>" +
    "<input name='descricao' id='form3' type='text' placeholder='Digite a sua dica aqui' required/>" + "<br>" +
    "<input class='btn' id='form4' type='submit' value='Adicionar'/>" +
    "</form>";
}

function newLink(){
    document.getElementById('newTip').innerHTML = "<form method='post' action='/newMainLink'>" +
    "<select name='topico' id='form5'>" +
    "<option value='Geral'> Tema </option>" +
    "<option value='Geral'> Geral </option>" +
    "<option value='Laboratórios'> Labs </option>" +
    "<option value='Minitestes'> Minitestes </option>" +
    "<option value='Projeto'> Projeto </option>" +
    "<option value='Heroku'> Heroku </option>" +
    "<option value='PadroesDeProjeto'> Padrões </option>" +
    "<option value='Ferramentas'> Ferramentas </option>" +
    "<option value='Design'> Design </option>" +
    "</select>" +
    "<br>" +
    "<input name='titulo' id='form6 type='text' placeholder='Título' required/>" +
    "<input type='url' name='url' id='form7' placeholder='Digite o seu link aqui' pattern='https?://.+' required>" +
    "<br>" +
    "<input class='btn' id='form4' type='submit' value='Adicionar'/>" +
    "</form>"
}

function newDisciplina(){
    document.getElementById("newTip").innerHTML = "<form method='post' action='/newMainDisciplina'>" +
    "<select name='topico' id='form9'>" +
    "<option value='Geral'> Tema </option>" +
    "<option value='Geral'> Geral </option>" +
    "<option value='Laboratórios'> Labs </option>" +
    "<option value='Minitestes'> Minitestes </option>" +
    "<option value='Projeto'> Projeto </option>" +
    "<option value='Heroku'> Heroku </option>" +
    "<option value='PadroesDeProjeto'> Padrões </option>" +
    "<option value='Ferramentas'> Ferramentas </option>" +
    "<option value='Design'> Design </option>" +
    "</select>" +
    "<input name='disciplina' id='form10 type='text' placeholder='Nome da disciplina' required/>" +
    "<br>" +
    "<input name='porque' id='form11' type='text' placeholder='Por que essa disciplina é importante?' required/>" +
    "<br>" +
    "<input class='btn' id='form4' type='submit' value='Adicionar'/>" +
    "</form>"

}

function newAssunto(){
    document.getElementById("newTip").innerHTML = "<form method='post' action='/newMainAssunto'>" +
    "<select name='topico' id='form5'>" +
    "<option value='Geral'> Tema </option>" +
    "<option value='Geral'> Geral </option>" +
    "<option value='Laboratórios'> Labs </option>" +
    "<option value='Minitestes'> Minitestes </option>" +
    "<option value='Projeto'> Projeto </option>" +
    "<option value='Heroku'> Heroku </option>" +
    "<option value='PadroesDeProjeto'> Padrões </option>" +
    "<option value='Ferramentas'> Ferramentas </option>" +
    "<option value='Design'> Design </option>" +
    "</select>" +
    "<br>" +
    "<input name='assunto' id='form11' type='text' placeholder='Digite o nome do assunto aqui.' required/>" +
    "<br>" +
    "<input class='btn' id='form4' type='submit' value='Adicionar'/>" +
    "</form>"
}
