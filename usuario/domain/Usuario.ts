export default interface Usuario {
    id?: String;
    nombre:String,
    apellidos:String,
    usuario:String,
    password:Number,
    email:String,
    news:Boolean;
    librosPrestados: [];
}