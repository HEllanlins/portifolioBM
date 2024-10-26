async function envio(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData.entries());
    const nomeCliente = document.getElementById('name').value
    const emailCliente = document.getElementById('email').value
    let mensagem = `Cliente: ${nomeCliente}<br>Email: ${emailCliente}<br><br>Serviços Selecionados:<br>`;

    if (jsonData.webd === 'webDesign') mensagem += '- Web Design<br>';
    if (jsonData.bigw === 'bigWebsite') mensagem += '- Big Website<br>';
    if (jsonData.smallw === 'smallWebsite') mensagem += '- Small Website<br>';
    if (jsonData.portpessoal === 'portifolioPessoal') mensagem += '- Portfólio Pessoal<br>';
    if (jsonData.portprofissional === 'portifolioProfissional') mensagem += '- Portfólio Profissional<br>';
    if (jsonData.designg === 'designGrafico') mensagem += '- Design Gráfico<br>';

    jsonData.message = mensagem.trim(); // Adiciona a mensagem ao JSON

    // Dados obrigatórios da API StaticForms
    jsonData.accessKey = "66d0ca23-3c7a-42d9-9340-eb567405be21";  // Substitua pelo seu accessKey da StaticForms
    jsonData.subject = "Novo Pedido de Serviço";
    jsonData.replyTo = "matrizdeconstrutores@gmail.com";

    try {
        const response = await fetch("https://api.staticforms.xyz/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        });

        if (response.ok) {
            showModal(event);
        } else {
            alert("Erro ao enviar formulário.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro ao conectar-se com a API.");
    }
}

/*modall*/
function showModal(event) {
    event.preventDefault(); // Impede o envio do formulário para mostrar o modal
    const modal9 = document.getElementById("modal9");
    modal9.style.display = "block"; // Mostra o modal

    // Aqui você pode fazer o envio do formulário via AJAX, se necessário
    // Para enviar o formulário, você pode usar:
    // document.getElementById("contactForm").submit();
}

function closeModal9() {
    const modal9 = document.getElementById("modal9");
    modal9.style.display = "none"; // Esconde o modal
}
