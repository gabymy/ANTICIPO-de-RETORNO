const form = document.getElementById('form');
const datos = document.getElementById('datos');
const numero = document.getElementById("numero")
const soy = document.getElementById("soy");
const cuit = document.getElementById('cuit');
const direccion = document.getElementById('direccion');
const periodo = document.getElementById('periodo');
const pago = document.getElementById("pago");
const pesos = document.getElementById("pesos");
const retencion = document.getElementById("retencion");
const pagar = document.getElementById("pagar");
const recibi = document.getElementById("recibi");





form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const datosValue = datos.value.trim();
    const numeroValue = numero.value.trim();
    const soyValue = soy.value.trim();
    const cuitValue = cuit.value.trim();
    const direccionValue = direccion.value.trim();
    const periodoValue = periodo.value.trim();
    const pagoValue = pago.value.trim();
    const pesosValue = pesos.value.trim();
    const retencionValue = retencion.value.trim();
    const pagarValue = pagar.value.trim();
    const recibiValue = recibi.value.trim();


    if (datosValue === '') {
        setErrorFor(datos, 'NO se puede dejar en BLANCO');
    } else {
        setSuccessFor(datos);
    }

    if (numerosValue === '') {
        setErrorFor(numero, 'NO se puede dejar en BLANCO');
    } else {
        setSuccessFor(numero);
    }

    if (soyValue === '') {
        setErrorFor(soy, 'NO se puede dejar en BLANCO');
    } else {
        setSuccessFor(soy);
    }

    if (cuitValue === '') {
        setErrorFor(cuit, 'NO se puede dejar en BLANCO');
    } else {
        setSuccessFor(cuit);
    }

    if (direccionValue === '') {
        setErrorFor(direccion, 'NO se puede dejar en BLANCO');
    } else {
        setSuccessFor(direccion);
    }

    if (periodoValue === '') {
        setErrorFor(periodo, 'NO se puede dejar en BLANCO');
    } else {
        setSuccessFor(periodo);
    }

    if (pagoValue === '') {
        setErrorFor(pago, 'NO se puede dejar en BLANCO');
    } else {
        setSuccessFor(pago);
    }

    if (pesosValue === '') {
        setErrorFor(pesos, 'NO se puede dejar en BLANCO');
    } else {
        setSuccessFor(pesos);
    }

    if (retencionValue === '') {
        setErrorFor(retencion, 'NO se puede dejar en BLANCO');
    } else {
        setSuccessFor(retencion);
    }

    if (pagarValue === '') {
        setErrorFor(pagar, 'NO se puede dejar en BLANCO');
    } else {
        setSuccessFor(pagar);
    }

    if (recibiValue === '') {
        setErrorFor(recibi, 'NO se puede dejar en BLANCO');
    } else {
        setSuccessFor(recibi);
    }





}
//var button = window.confirm('Estas seguro?');
//if (button === true) {
//   window.alert('Okay, si estas seguro.');
//} else {
//    window.alert('Pareces indeciso');
//}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//function isEmail(email) {
//return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
//}

imprimir = function() {
    window.print();


}

//function mostrarBoton() {
//  document.getElementById("imprimir").display = "block";
//}


const track = document.getElementById("seguir");
let trackeo = 02025;

function add() {
    track.innerHTML = "";
    let texto = document.createTextNode(trackeo);
    track.appendChild(texto);
    trackeo++
};
add();