import { sum, kebabCase } from 'npm:lodash';
import { addTax } from './checkout';

console.log(kebabCase('Vali is not that cool'));

console.log(addTax(100, 0.15));