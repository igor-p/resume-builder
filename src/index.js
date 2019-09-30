import './styles/main.scss';
import template from './template.pug'

// create data.json and change the following reference to the new file
import data from '../data.sample.json';

document.querySelector('title').innerText = data.name;
document.querySelector('body').innerHTML = template(data);