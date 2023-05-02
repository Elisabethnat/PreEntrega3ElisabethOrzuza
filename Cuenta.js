
class Cuenta {
    /** 
     * 
     * @param {String} titular 
     * @param {String} contacto 
     * @param {Number} saldo 
     * @param {Number} limite 
     * */

    constructor(titular, contacto, saldo, limite) {
        this.titular = titular.toLowerCase(); 
        this.contacto = contacto;
        this.saldo = saldo;
        this.limite = limite;
    }
    /**
     * 
     * @param {Number} cantidad 
     * @returns 
     */

    extraerDinero(cantidad) {
        let res;
        if (this.saldo >= cantidad && cantidad <= this.limite && cantidad > 0) {
            this.saldo -= cantidad; 
            res = true;
        } else res = false;
        return res;
    }
    /**

     * @param {Number} cantidad 
     * @returns 
     */
    depositarDinero(cantidad) {
        if (cantidad && cantidad > 0) {
            this.saldo += cantidad; 
            return true;
        } else return false;
    }

    consultar() {
        return this.saldo;
    }
}
