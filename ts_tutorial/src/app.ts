import {Item} from './item';

var elem = document.getElementById('output');
var aBook = new Item('初めてのTypeScript', 3000);
aBook.say(elem)