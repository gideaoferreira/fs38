const inputCep = document.getElementById('cep');
const inputLogradouro = document.getElementById('logradouro')
const inputBairro = document.getElementById('bairro')
const inputEstado = document.getElementById('estado')
const inputCidade = document.getElementById('cidade')

inputCep.addEventListener('keyup', async (event) => {
    const cep = event.target.value;

    if (cep.length === 8) {
        console.log('buscando informações');

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`); 
            const responseJson = await response.json();    

            if (responseJson.erro === "true") {
                throw new Error("Erro customizado");
            }

            inputLogradouro.value = responseJson.logradouro
            inputBairro.value = responseJson.bairro
            inputEstado.value = responseJson.estado
            inputCidade.value = responseJson.localidade

            console.log('foi sucesso');
        } catch(error) {
            document.getElementById('feedback').innerText = 'deu erro viu, acho q o cep ta errado'
        } finally {
            console.log('vai ser executado de todo jeito');
        }
    } else {
        inputLogradouro.value = ''
        inputBairro.value = ''
        inputEstado.value = ''
        inputCidade.value = ''
    }
})
