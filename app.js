function busca() {
    console.log("clicou");
  
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    let resultados = "";
  
    // Se o campo de pesquisa estiver em branco
    if (!campoPesquisa) {
        resultados = "<p class = resultado>Nada foi encontrado. Nosso banco de jogos apresenta os seguintes jogos:</p>";
      
        // Exibe todos os jogos presentes no banco de dados
        for (let dado of dados) {
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
            </div>
          `;
        }
        
        section.innerHTML = resultados;
        return; // Para a execução aqui, já que o campo estava vazio.
    }
  
    // Itera sobre os dados e cria os resultados correspondentes à pesquisa
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();
      
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Info do game</a>
            </div>
          `;
        }
    }
  
    // Se não houver resultados correspondentes à pesquisa
    if (!resultados) {
        resultados = "<p class = resultado>Nada foi encontrado. Nosso banco de jogos apresenta os seguintes jogos:</p>";
      
        // Exibe todos os jogos presentes no banco de dados
        for (let dado of dados) {
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
            </div>
          `;
        }
    }
  
    // Atualiza a seção com os resultados
    section.innerHTML = resultados;
}
