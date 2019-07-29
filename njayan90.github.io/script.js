class News {
    constructor() {
        this.load();
    }

    load() {
        this.header_section();
        this.body_section("abc-news-au");
        this.footer_section();
    }

    header_section() {
        let x = document.getElementById("myHeader");
        let p = this.create_element("b", "News", "News");
        let t = this.create_text("NEWSFEED");
        let i = this.create_element("i", "yet", "yet");
        let i_text = this.create_text("Yet Another NewsFeed");
        i.appendChild(i_text);
        p.appendChild(t);
        p.appendChild(i);
        x.appendChild(p);
        document.body.appendChild(x);
    }

    body_section(name) {
        fetch(`https://newsapi.org/v1/articles?source=${name}&apiKey=6f006384b6f14a3d8a42b4f636f60a6b`)
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                if (name == "abc-news-au" && flag == 0) {
                    this.create(myJson, name);
                }
                else {
                    this.create_all_tiles(myJson);
                }
            });
    }

    create(myJson, name) {
        center.innerHTML = '';
        this.create_all_tiles(myJson);
        this.create_dropdown(name);
        this.create_email();
    }

    create_all_tiles(myJson) {
        center.innerHTML = '';
        for (let i = 0; i < 10; i++) {
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
        let text = document.createTextNode(element_text);
        return (text);
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
            this.body_section(e.target.value);
        })
        for (let i = 0; i < 5; i++) {
            option = this.create_element("option", "", "");
            option.setAttribute("value", arr[i]);
            option.setAttribute("id", arr[i]);
            let option_t = this.create_text(arr[i]);
            option.appendChild(option_t);
            drop.appendChild(option);
            this.append_child_side(drop);
            if (arr[i] == name) {
                this.selectedOption = i;
            }
        }
        document.getElementById("select").selectedIndex = this.selectedOption;
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
            this.validate_Email(document.getElementById("email").value);
        })
        this.append_child_side(input);
    }

    modal_window(title, description) {
        let modal;
        modal = this.create_element("div", "modal", "modal");
        let modal_content = this.create_element("div", "modal_content", "");
        let modal_head = this.create_element("div", "modal_head", "");
        let close = this.create_element("span", "close", "");
        close.addEventListener("click", () => {
            this.close_section();
        })
        let close_t = this.create_text("\u00D7");
        close.appendChild(close_t);
        let modal_body = this.create_element("div", "modal_body", "");
        let modal_head_text = this.create_text(title);
        let modal_body_text = this.create_text(description);
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

    validate_Email(email) {
        let r = Math.random().toString(36).substring(7);
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mailformat.test(email)) {
            alert("Successfully Subscribed");
            localStorage.setItem(r, email);
            return true;
        }
        else {
            alert("You have entered an invalid email address!");
            return false;
        }
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

let news;
news = new News();
const arr = ["abc-news-au", "bbc-news", "cnn", "usa-today", "espn-cric-info"];
var flag = 0;
let myMain = document.getElementById("myMain");
let main = news.create_element("div", "main", "main");
let center = news.create_element("div", "center", "center");
let side = news.create_element("div", "side", "side");
