
const products = [




];

function incrementarQuantidade() {

    const cont = document.getElementById('cont');

    if (cont) {
        let quant = parseInt(cont.textContent)

        quant++;
        cont.textContent = quant;
    } else {
        console.error('elemento não encontrado');
    }
}

function reduzirQuantidade() {
    const cont = document.getElementById('cont');

    if (cont) {
        let quant = parseInt(cont.textContent)
        if (quant > 0) {
            quant--;
            cont.textContent = quant;
        } else {
            console.error('valor do contador não pode ser negativo');
        }
    } else {
        console.error('elemento não encontrado');
    }
}

function adicionarCarrinho() {
    const inputid = document.getElementById('productid').value;
    const cont = document.getElementById('cont').textContent;
    let value = 0;
    let result = 0;

    switch (inputid) {
        case '1':
            value = 150.00;
            break;
        case '2':
            value = 99.99;
            break;
        case '3':
            value = 150.00;
            break;
        case '4':
            value = 120.00;
            break;
        case '5':
            value = 250.00;
            break;
        case '6':
            value = 180.00;
            break;
        case '7':
            value = 199.99;
            break;
        case '8':
            value = 340.90;
            break;
        case '9':
            value = 90.00;
            break;
        case '10':
            value = 140.00;
            break;
        case '11':
            value = 180.00;
            break;
        case '12':
            value = 300.00;
            break;
        case '13':
            value = 220.00;
            break;
        case '14':
            value = 120.00;
            break;
        case '15':
            value = 190.00;
            break;
        case '16':
            value = 110.00;
            break;
        default:
            alert("Digite um id válido")
            break;
    }

    if (inputid > 0 && inputid <= 16 && cont != 0) {
        alert("id do produto: " + inputid + ", Valor total: R$" + value * cont);
    } else {
        if (cont == 0) {
            alert("A quantidade não pode ser 0");
        }
    }
}


document.getElementById('btnPlus').addEventListener('click', incrementarQuantidade);
document.getElementById('btnMinus').addEventListener('click', reduzirQuantidade);
document.getElementById('btnBuy').addEventListener('click', adicionarCarrinho);