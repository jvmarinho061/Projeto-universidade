// Função para adicionar professor ao localStorage
document.getElementById("professorForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const salario = document.getElementById("salario").value;
    const endereco = document.getElementById("endereco").value;
    const telefone = document.getElementById("telefone").value;
    const horas = document.getElementById("horas").value;
    const email = document.getElementById("email").value;
    const disciplina = document.getElementById("disciplina").value;

    const professor = {
        id: Date.now(),
        nome,
        cpf,
        salario,
        endereco,
        telefone,
        horas,
        email,
        disciplina
    };

    let professores = JSON.parse(localStorage.getItem("professores")) || [];
    professores.push(professor);
    localStorage.setItem("professores", JSON.stringify(professores));

    document.getElementById("professorForm").reset();
    renderTable();
});

// Função para renderizar a tabela
function renderTable() {
    const professores = JSON.parse(localStorage.getItem("professores")) || [];
    const tbody = document.querySelector("#professorTable tbody");
    tbody.innerHTML = "";

    professores.forEach(professor => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${professor.nome}</td>
            <td>${professor.cpf}</td>
            <td>${professor.telefone}</td>
            <td>${professor.disciplina}</td>
            <td>
                <button onclick="deleteProfessor(${professor.id})">Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Função para excluir professor
function deleteProfessor(id) {
    let professores = JSON.parse(localStorage.getItem("professores")) || [];
    professores = professores.filter(professor => professor.id !== id);
    localStorage.setItem("professores", JSON.stringify(professores));
    renderTable();
}

// Renderizar a tabela ao carregar a página
document.addEventListener("DOMContentLoaded", renderTable);
