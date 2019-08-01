let name = "abc-news-au";
import {flag} from './view.js'
export class Model {
    constructor() {
    }
    body_section(name, view) {
        fetch(`https://newsapi.org/v1/articles?source=${name}&apiKey=6f006384b6f14a3d8a42b4f636f60a6b`)
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                if (name == "abc-news-au" && flag == 0) {
                    view.create(myJson, name);
                }
                else {
                    view.create_all_tiles(myJson);
                }
            });
    }
}
