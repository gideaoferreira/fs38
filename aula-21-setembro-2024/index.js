const selectRegioes = document.getElementById('regiao')
const selectEstados = document.getElementById('estado')
const selectLocalidade = document.getElementById('localidade')

function buscarRegioes() {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
        .then((response) => response.json())
        .then((responseJson) => {
            responseJson.forEach((regiao) => {
                const newOption = document.createElement('option');

                newOption.innerText = regiao.nome;
                newOption.setAttribute('value', regiao.id);

                selectRegioes.appendChild(newOption);
            });
        })
}

buscarRegioes();

async function buscarEstados(macrorregiao) {
    selectEstados.innerHTML = '<option>Selecione um estado</option>';

    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${macrorregiao}/estados`);
    const responseJson = await response.json();

    responseJson.forEach((uf) => {
        const newOption = document.createElement('option');

        newOption.innerText = uf.nome;
        newOption.setAttribute('value', uf.id);

        selectEstados.appendChild(newOption);
    });
}

selectRegioes.addEventListener('change', async (event) => {
    const value = event.target.value;
    
    await buscarEstados(value);

    console.log('escolhi esperar'); 
})







async function buscarLocalidades(uf) {
    selectLocalidade.innerHTML = '<option>Selecione uma cidade</option>';

    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
    const responseJson = await response.json();

    responseJson.forEach((localidade) => {
        const newOption = document.createElement('option');

        newOption.innerText = localidade.nome;
        newOption.setAttribute('value', localidade.id);

        selectLocalidade.appendChild(newOption);
    });
}

selectEstados.addEventListener('change', (event) => {
    const value = event.target.value;
    
    buscarLocalidades(value)
})