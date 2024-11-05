var valorNumerico = Number(prompt("digite um valor numerico"))

    alert(valorNumerico.toLocaleString(`pt-BR`, {style:`currency`, currency:`BRL`, }));