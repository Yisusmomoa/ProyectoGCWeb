class Usuario{
    constructor(idUsuario,username,contraseña){
        this.idUsuario=idUsuario;
        this.username=username;
        this.contraseña=contraseña;
    }
}


class jugador extends Usuario{
    constructor(idUsuario,username,contraseña){
        super(idUsuario,username,contraseña);
        this.puntuacion=0;
        this.modelo=new THREE.Object3D();
        this.colider = new THREE.Box3().setFromObject(this.modelo);
        this.invencibilidad=false;
        this.puntosDobles=false;
    }

}