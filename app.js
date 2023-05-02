


const LIMITE_CUENTA = 100000;
let cuentas = []; 
let cuenta = undefined;

const titular = document.getElementById('titular');
const contacto = document.getElementById('contacto');
const saldo = document.getElementById('saldo');

const registrar = document.getElementById('registrar');
const formRegistrar = document.getElementById('form-registro');


registrar.addEventListener('click', (evento) => {
    evento.preventDefault();
    cuentas.push(new Cuenta(titular.value,contacto.value,+saldo.value,LIMITE_CUENTA));
    alert('cuenta generada con exito!');
    localStorage.setItem('cuentas',JSON.stringify(cuentas));
    console.log(cuentas);
    limpiarForm(formRegistrar);
})

 function limpiarForm(form) {
    form.reset();
} 

function limpiarForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
        form.reset(); 
    })
}

function obtenerCuentas() {
   cuentas = JSON.parse(localStorage.getItem('cuentas')) || []; 
   cuentas = cuentas.map((cuenta) => new Cuenta(cuenta.titular,cuenta.contacto,cuenta.saldo,LIMITE_CUENTA));
}

document.addEventListener('DOMContentLoaded', () => {
    obtenerCuentas();
})

const inputTitular = document.getElementById('titular-consulta');
const botonConsulta = document.getElementById('consultar');


botonConsulta.addEventListener('click', (evento) => {
    evento.preventDefault();
    const nombreTitular = inputTitular.value; 
    const cuentaEncontrada = buscarCuenta(nombreTitular);
    if (cuentaEncontrada) {
        
        titular.value = cuentaEncontrada.titular;
        contacto.value = cuentaEncontrada.contacto;
        saldo.value = cuentaEncontrada.saldo;
    } else {
        alert('No existe la cuenta en el banco');
        limpiarForms();
    }
});

function buscarCuenta(nombreTitular) {
   return cuentas.find((cuenta) => cuenta.titular === nombreTitular.toLowerCase()); 
}

const inputMonto = document.getElementById('monto');
const btnDepositar = document.getElementById('depositar');


btnDepositar.addEventListener('click', (evento) => {
    evento.preventDefault();
    cuenta = buscarCuenta(inputTitular.value);
    if (cuenta) {
        const resultado = cuenta.depositarDinero(+inputMonto.value);
        if (resultado) {
            alert('Operacion realizada con exito!');
        }else {
            alert('Operacion denegada');
        }
    }
});
