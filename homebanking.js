//Declaración de variables
var nombreUsuario = 'Pedrita';
var saldoCuenta = 2000 ;
var limiteExtraccion = 5000;
var servAgua = 350;
var servTelefono = 425;
var servLuz = 210;
var servInternet = 570;
var cuentaAmiga1 = '1234567';
var cuentaAmiga2 = '7654321';


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
function sumarDinero (num){
    saldoCuenta = num + saldoCuenta;
} 

function restarDinero(num){
    saldoCuenta = saldoCuenta-num;
}

function cambiarLimiteDeExtraccion() {
    var nvoLimiteDeExtraccion = parseInt(prompt('Ingrese por favor su nuevo límite de extracción'));
    limiteExtraccion = nvoLimiteDeExtraccion;
    alert ('su nuevo límite de extracción es   $' + nvoLimiteDeExtraccion);
    actualizarLimiteEnPantalla();
} 

function extraerDinero() {
    var dineroARetirar = parseInt(prompt('Cuando dinero quiere retirar?'));
    var saldoAnterior = saldoCuenta;
    var saldoActual = saldoCuenta - dineroARetirar;
    saldoCuenta = saldoActual;
    
    if (dineroARetirar > saldoAnterior){
        alert ('Saldo insuficiente')
        return;
    } 
    if (limiteExtraccion < dineroARetirar){
       alert ('La cantidad de dinero que desea extraer es mayor a su límite de extracción')
       return;
    } 
    if ( dineroARetirar%100!==0) {
        alert ('sólo puedes extraer billetes de 100');
        return;
    } else if (saldoAnterior>dineroARetirar){
        alert ('has retirado:  $' + dineroARetirar + '\nsaldo anterior:  $' + saldoAnterior +' \nsaldo actual:  $'+ saldoActual );
    } else if (dineroARetirar<limiteExtraccion){
        alert ('has retirado:  $' + dineroARetirar + '\nsaldo anterior:  $' + saldoAnterior +' \nsaldo actual:  $'+ saldoActual );
    }

    actualizarSaldoEnPantalla();
}


function depositarDinero() {
    var dineroADepositar = parseInt(prompt('Cuando dinero quiere depositar?'));
    var saldoAnterior = saldoCuenta;
    var saldoActual = dineroADepositar + saldoCuenta;
    saldoCuenta = saldoActual;
    actualizarSaldoEnPantalla();
    alert ('has depositado:  $' + dineroADepositar + '\nsaldo anterior:  $' + saldoAnterior +' \nsaldo actual:  $'+ saldoActual );
} 


function pagarServicio() {
    var servicio = parseInt(prompt('Ingrese el nº que corresponda con el servicio que quiere pagar:  \n\n1.Agua \n2.Teléfono \n3.Luz \n4.Internet'));
    var saldoActual;
    var servicioNombre = "";
    var servicioValor;

    switch(servicio){
        case 1:
            saldoActual = saldoCuenta - servAgua;
            servicioNombre = 'Agua';
            break;
        case 2:
            saldoActual = saldoCuenta - servTelefono;
            servicioNombre = 'Telefono';
            break;
        case 3:
            saldoActual = saldoCuenta - servLuz;
            servicioNombre = 'Luz';
            break;
        case 4:
            saldoActual = saldoCuenta - servInternet;
            servicioNombre = 'Internet';
            break;
        default:
            alert ('ese servicio no existe');     
    }

    servicioValor = saldoCuenta - saldoActual;

    if (saldoActual < 0){
        alert ('Saldo Insuficiente')
    } else {
        alert('Has pagado servicio: ' + servicioNombre+ '\n\nsaldo anterior:  $' + saldoCuenta + '\nDinero descontado : $' + servicioValor + '\nsaldo actual:  $'+ saldoActual)
        saldoCuenta = saldoActual;
        actualizarSaldoEnPantalla();
    }
}

function transferirDinero() {
    var MontoATransferir = parseInt(prompt('Ingrese el monto que desea transferir'));
    var verificacion = saldoCuenta-MontoATransferir;
    
    if (verificacion<0){
       alert ('Saldo insuficiente para transferir ese monto');
       return;
    } else {
        var numCuenta = prompt('Ingrese el número de cuenta a transferir');
    }
    if  (numCuenta===cuentaAmiga1||numCuenta===cuentaAmiga2){
        saldoActual = saldoCuenta-MontoATransferir;
        alert('Se han transferido: $'+ MontoATransferir + '\n Cuenta Destino: ' + numCuenta);
        saldoCuenta = saldoActual;
        actualizarSaldoEnPantalla();
    } else {
        alert('Recuerde sólo puede realizar transferencias a las cuentas referidas como Cuenta Amiga');
    }
}

function iniciarSesion() {
    var contraseñaUsuario = '1234';
    var ingresoContraseña= prompt('Ingrese su contraseña');
    if ( contraseñaUsuario=== ingresoContraseña){
        alert('Bienvenido/a ' + nombreUsuario + ' ya puedes comenzar a realizar operaciones');
    } else {
        alert ('Contraseña no válida, su dinero se retendrá por razones de seguridad')
        saldoCuenta = 0;

    }
}
iniciarSesion();

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

