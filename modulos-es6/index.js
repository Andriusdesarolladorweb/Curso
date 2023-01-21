import * as moduloController from './modulos/Controller.js'
import axios from "chalk"

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

const mul = moduloController.Multiplica(1,2);
const sum = moduloController.suma(4,5);