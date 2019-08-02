import {Control} from './control.js';
import {Model} from './model.js';
class View {
    constructor() {
    }

    header_section() {
        const x = document.getElementById("myHeader");
        const p = this.create_element("b", "News", "News");
        const t = this.create_text("NEWSFEED");
        const i = this.create_element("i", "yet", "yet");
        const i_text = this.create_text("Yet Another NewsFeed");
        i.appendChild(i_text);
        p.appendChild(t);
        p.appendChild(i);
        x.appendChild(p);
        document.body.appendChild(x);
    }

    create(myJson, name) {
        center.innerHTML = '';
        this.create_all_tiles(myJson);
        this.create_dropdown(name);
        this.create_email();
    }

    create_all_tiles(myJson) {
        center.innerHTML = '';
        for (let i = 0; i < myJson.articles.length; i++) {
            let section = this.create_element("div", "section", "section");
            let section1 = this.create_element("div", "section1", "section1");
            let section2 = this.create_element("div", "section2", "section2");
            this.create_img(section1, section, myJson.articles[i].urlToImage);
            this.create_title(section2, section, myJson.articles[i].title);
            let p = this.create_element("p", "", "");
            this.spanopac(myJson.articles[i].publishedAt, section, section2, p);
            p = this.create_element("p", "", "");
            this.create_content(section2, section, p, myJson.articles[i].description);
            this.create_button(section2, section, myJson.articles[i].title, myJson.articles[i].description);
            this.create_border(section);
        }
    }

    create_title(section2, section, description) {
        let h1 = this.create_element("h1", "one", "one");
        let h1_t = this.create_text(description);
        h1.appendChild(h1_t);
        section2.appendChild(h1);
        section.appendChild(section2);
        this.append_child_center(section);
    }

    create_element(element, class_name, id_name) {
        let main1 = document.createElement(element);
        main1.setAttribute("class", class_name);
        main1.setAttribute("id", id_name);
        return (main1);
    }

    create_text(element_text) {
        return document.createTextNode(element_text);

    }

    footer_section() {
        let foot = document.getElementById("myFooter");
        let p = this.create_element("p", "footer", "");
        p.setAttribute("class", "footer");
        let p_t = this.create_text("NewsFeed 2019");
        p.appendChild(p_t);
        foot.appendChild(p);
        document.body.appendChild(foot);
    }

    create_img(section1, section, img_url) {
        let img = this.create_element("img", "img", "img");
        img.setAttribute("src", img_url);
        section1.appendChild(img);
        section.appendChild(section1);
        this.append_child_center(section);
    }

    spanopac(content, section, section2, p) {
        let span1 = this.create_element("span", "opac", "");
        let span1_t = this.create_text(content);
        span1.appendChild(span1_t);
        p.appendChild(span1);
        section2.appendChild(p);
        section.appendChild(section2);
        this.append_child_center(section);
    }

    create_content(section2, section, p, description) {
        let p_t = this.create_text(description);
        p.setAttribute("id", "text");
        p.appendChild(p_t);
        section2.appendChild(p);
        section.appendChild(section2);
        this.append_child_center(section);
    }

    create_button(section2, section, title, description) {
        let button = this.create_element("button", "button", title);
        let button_t = this.create_text("Continue Reading");
        button.appendChild(button_t);
        section2.appendChild(button);
        section.appendChild(section2);
        this.append_child_center(section);
        button.addEventListener("click", () => {
            this.modal_window(title, description);
        })
    }

    create_border(section) {
        let border = this.create_element("div", "border", "border");
        section.appendChild(border);
        this.append_child_center(section);
    }

    create_dropdown(name) {
        let selectedOption = 0;
        let side = this.create_element("div", "side", "side");
        let h4 = this.create_element("h4", "", "");
        let h4_t = this.create_text("SELECT CATEGORY");
        h4.appendChild(h4_t);
        this.append_child_side(h4);
        let drop = this.create_element("select", "drop", "select");
        let option;
        drop.addEventListener("change", (e) => {
            flag = 1;
            model.body_section(e.target.value, this);
        })
        for (let i = 0; i < news_name.length; i++) {
            option = this.create_element("option", "", "");
            option.setAttribute("value", news_name[i]);
            option.setAttribute("id", news_name[i]);
            let option_t = this.create_text(news_name[i]);
            option.appendChild(option_t);
            drop.appendChild(option);
            this.append_child_side(drop);
            if (news_name[i] == name) {
                this.selectedOption = i;
            }
        }
        document.getElementById("select").selectedIndex = this.selectedOption;
    }

    modal_window(title, description) {
        let modal;
        modal = view.create_element("div", "modal", "modal");
        let modal_content = view.create_element("div", "modal_content", "");
        let modal_head = view.create_element("div", "modal_head", "");
        let close = view.create_element("span", "close", "");
        close.addEventListener("click", () => {
            this.close_section();
        })
        let close_t = view.create_text("\u00D7");
        close.appendChild(close_t);
        let modal_body = view.create_element("div", "modal_body", "");
        let modal_head_text = view.create_text(title);
        let modal_body_text = view.create_text(description);
        modal_head.appendChild(close);
        modal_head.appendChild(modal_head_text);
        modal_body.appendChild(modal_body_text);
        modal_content.appendChild(modal_head);
        modal_content.appendChild(modal_body);
        modal.appendChild(modal_content);
        document.body.appendChild(modal);
        modal.style.display = "block";
    }

    close_section() {
        let modal = document.getElementById("modal");
        modal.parentNode.removeChild(modal);
    }

    create_email() {
        let h4 = this.create_element("h4", "", "");
        let h4_t = this.create_text("SUBSCRIBE");
        h4.appendChild(h4_t);
        this.append_child_side(h4);
        let input = this.create_element("input", "email", "email");;
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "  Email Address");
        this.append_child_side(input);
        input = this.create_element("input", "subscribe", "subscribe");
        input.setAttribute("type", "submit");
        input.setAttribute("value", "Subscribe");
        input.addEventListener("click", () => {
            control.validate_Email(document.getElementById("email").value);
        })
        this.append_child_side(input);
    }

    append_child_center(value) {
        center.appendChild(value);
        main.appendChild(center);
        myMain.appendChild(main);
        document.body.appendChild(myMain);
    }

    append_child_side(value) {
        side.appendChild(value);
        main.appendChild(side);
        myMain.appendChild(main);
        document.body.appendChild(myMain);
    }
}

let view = new View();
let model = new Model();
let control = new Control();
control.load(view, model);
const news_name = ["abc-news-au", "bbc-news", "cnn", "usa-today", "espn-cric-info"];
export var flag = 0;
let myMain = document.getElementById("myMain");
let main = view.create_element("div", "main", "main");
let center = view.create_element("div", "center", "center");
let side = view.create_element("div", "side", "side");