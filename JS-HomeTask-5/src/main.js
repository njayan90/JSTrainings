import {View} from './view.js';
import {Control} from './control.js';
import {Model} from './model.js';

let view = new View();
let model = new Model();
let control = new Control();
control.load(view, model);
export const news_name = ["abc-news-au", "bbc-news", "cnn", "usa-today", "espn-cric-info"];
export let myMain = document.getElementById("myMain");
export let main = view.create_element("div", "main", "main");
export let center = view.create_element("div", "center", "center");
export let side = view.create_element("div", "side", "side");