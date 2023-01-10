//Fecha de hoy 
const FechaHoy = new Date();

//Fecha de mi nacimiento 
const fechaNacimiento = new Date(2005, 0, 02);

//variable para saber si hoy mas tarde que la fecha de mi nacimiento 
const fecha = FechaHoy > fechaNacimiento;

//variable con el dia de mi nacimiento 
const DiaNacimiento = fechaNacimiento.getDate();

//variable con el mes de mi nacimiento 
const MesNacimiento = fechaNacimiento.getMonth();

//variable con el Año de mi nacimiento 
const AñoNacimiento = fechaNacimiento.getFullYear();