function encurtarURL() {
    //validar se o link existe
    let url = document.getElementById("input-url").value;
    if (!url) {
        alert("Insira a URL");
        return;
    }

    //api key: 44004468689245579322d76d0f88ed49

    //encurtar o link

    //headers
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "44004468689245579322d76d0f88ed49"
    }

    //dados
    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;
        });
}

function copiar() {
    let inputUrl = document.getElementById("input-url");
    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    try {
        navigator.clipboard.writeText(inputUrl.value).then(() => {
            alert(`Copiado: ${inputUrl.value}`);
        }).catch((err) => {
            console.error("Erro ao copiar: ", err);
            alert("Erro ao copiar o link encurtado.");
        });
    } catch (err) {
        console.error("Erro ao copiar: ", err);
        alert("Erro ao copiar o link encurtado.");
    }

}