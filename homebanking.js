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

function cambiarLimiteDeExtraccion() {
    var nvoLimiteDeExtraccion = Number(prompt('Ingrese por favor su nuevo límite de extracción'));

    // validación de valores introducidos: número , negativo, vacío

    if (isNaN(nvoLimiteDeExtraccion)){
        alert ('ingrese correctamente el monto');
        return;
    } else if (nvoLimiteDeExtraccion<0||nvoLimiteDeExtraccion === 0 ){
        alert ('Monto no válido');
        return;
    } 

    limiteExtraccion = nvoLimiteDeExtraccion;
    alert ('su nuevo límite de extracción es   $' + nvoLimiteDeExtraccion);
    actualizarLimiteEnPantalla();
} 

function extraerDinero() {
    var dineroARetirar = Number(prompt('Cuando dinero quiere retirar?'));

     // validación de valores introducidos: número , negativo, vacío

    if (isNaN(dineroARetirar)){
        alert ('ingrese correctamente el monto');
        return;
    } else if (dineroARetirar<0||dineroARetirar === 0){
        alert ('Monto no válido')
        return;
    } else if ( dineroARetirar%100!==0) {
        alert ('sólo puedes extraer billetes de 100');
        return;
    }
    
    var saldoAnterior = saldoCuenta;
    var saldoActual = saldoCuenta - dineroARetirar;
    saldoCuenta = saldoActual;
    
    if (dineroARetirar > saldoAnterior){
        alert ('No tiene saldo suficiente para realizar esta operación')
        return;  
    } 
    if (limiteExtraccion < dineroARetirar){
       alert ('La cantidad de dinero que desea extraer es mayor a su límite de extracción')
       return;
    } else if (saldoAnterior>dineroARetirar){
        alert ('has retirado:  $' + dineroARetirar + '\nsaldo anterior:  $' + saldoAnterior +' \nsaldo actual:  $'+ saldoActual );
    } else if (dineroARetirar<limiteExtraccion){
        alert ('has retirado:  $' + dineroARetirar + '\nsaldo anterior:  $' + saldoAnterior +' \nsaldo actual:  $'+ saldoActual );
    }

    actualizarSaldoEnPantalla();
}


function depositarDinero() {
    var dineroADepositar = Number(prompt('Cuando dinero quiere depositar?'));

     // validación de valores introducidos: número , negativo, vacío

    if (isNaN(dineroADepositar)){
        alert ('ingrese correctamente el monto');
        return;
    } else if (dineroADepositar<0||dineroADepositar === 0){
        alert ('Monto no válido')
        return;
    }

    var saldoAnterior = saldoCuenta;
    var saldoActual = dineroADepositar + saldoCuenta;
    saldoCuenta = saldoActual;
    actualizarSaldoEnPantalla();
    alert ('has depositado:  $' + dineroADepositar + '\nsaldo anterior:  $' + saldoAnterior +' \nsaldo actual:  $'+ saldoActual );
} 


function pagarServicio() {
    var servicio = Number(prompt('Ingrese el nº que corresponda con el servicio que quiere pagar:  \n\n1.Agua \n2.Teléfono \n3.Luz \n4.Internet'));
    
     // validación de valores introducidos: número , negativo, vacío

    if (isNaN(servicio)){
        alert ('ingrese correctamente el nº del servicio');
        return;
    } else if (servicio<0 || servicio === 0){
        alert ('Monto no válido')
        return;
    }

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
            return;    
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
    var MontoATransferir = Number(prompt('Ingrese el monto que desea transferir'));

     // validación de valores introducidos: número , negativo, vacío

    if (isNaN(MontoATransferir)){
        alert ('ingrese correctamente el monto');
        return;
    } else if (MontoATransferir<0 || MontoATransferir === 0){
        alert ('Monto no válido')
        return;
    }

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

