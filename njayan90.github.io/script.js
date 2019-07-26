let news;
const arr = ["abc-news-au", "bbc-news", "cnn", "usa-today", "espn-cric-info"];

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
                this.create(myJson, name);
            });
    }

    create(myJson, name) {
        let myMain = document.getElementById("myMain");
        myMain.innerHTML = '';
        for (let i = 0; i < 10; i++) {
            var main = this.create_element("div", "main", "main");
            let center = this.create_element("div", "center", "center");
            let section = this.create_element("div", "section", "section");
            let section1 = this.create_element("div", "section1", "section1");
            let section2 = this.create_element("div", "section2", "section2");
            this.create_img(section1, section, center, main, myMain, myJson.articles[i].urlToImage);
            this.create_title(section2, section, center, main, myMain, myJson.articles[i].title);
            let p = this.create_element("p", "", "");
            this.spanopac(myJson.articles[i].publishedAt, main, center, section, section2, p);
            p = this.create_element("p", "", "");
            this.create_content(section2, section, center, main, myMain, p, myJson.articles[i].description);
            this.create_button(section2, section, center, main, myMain, myJson.articles[i].title, myJson.articles[i].description);
            this.create_border(section, center, main, myMain);
        }
        this.create_dropdown(main, myMain, name);
        this.create_email(main, myMain);
    }

    create_title(section2, section, center, main, myMain, description) {
        let h1 = this.create_element("h1", "one", "one");
        let h1_t = this.create_text(description);
        h1.appendChild(h1_t);
        section2.appendChild(h1);
        section.appendChild(section2);
        center.appendChild(section);
        main.appendChild(center);
        myMain.appendChild(main);
        document.body.appendChild(myMain);
    }

    create_element(element, class_name, id_name) {
        let main = document.createElement(element);
        main.setAttribute("class", class_name);
        main.setAttribute("id", id_name);
        return (main);
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

    create_img(section1, section, center, main, myMain, img_url) {
        let img = this.create_element("img", "img", "img");
        img.setAttribute("src", img_url);
        section1.appendChild(img);
        section.appendChild(section1);
        center.appendChild(section);
        main.appendChild(center);
        myMain.appendChild(main);
        document.body.appendChild(myMain);
    }

    spanopac(content, main, center, section, section2, p) {
        let span1 = this.create_element("span", "opac", "");
        let span1_t = this.create_text(content);
        span1.appendChild(span1_t);
        p.appendChild(span1);
        section2.appendChild(p);
        section.appendChild(section2);
        center.appendChild(section);
        main.appendChild(center);
        myMain.appendChild(main);
        document.body.appendChild(myMain);
    }

    create_content(section2, section, center, main, myMain, p, description) {
        let p_t = this.create_text(description);
        p.setAttribute("id", "text");
        p.appendChild(p_t);
        section2.appendChild(p);
        section.appendChild(section2);
        center.appendChild(section);
        main.appendChild(center);
        myMain.appendChild(main);
        document.body.appendChild(myMain);
    }

    create_button(section2, section, center, main, myMain, title, description) {
        let button = this.create_element("button", "button", title);
        let button_t = this.create_text("Continue Reading");
        button.appendChild(button_t);
        section2.appendChild(button);
        section.appendChild(section2);
        center.appendChild(section);
        main.appendChild(center);
        myMain.appendChild(main);
        document.body.appendChild(myMain);
        button.addEventListener("click", () => {
            this.modal_window(title, description);
        })
    }

    create_border(section, center, main, myMain) {
        let border = this.create_element("div", "border", "border");
        section.appendChild(border);
        center.appendChild(section);
        main.appendChild(center);
        myMain.appendChild(main);
        document.body.appendChild(myMain);
    }

    create_dropdown(main, myMain, name) {
        let selectedOption = 0;
        let side = this.create_element("div", "side", "side");
        let h4 = this.create_element("h4", "", "");
        var h4_t = this.create_text("SELECT CATEGORY");
        h4.appendChild(h4_t);
        main.appendChild(h4);
        myMain.appendChild(main);
        document.body.appendChild(myMain);
        let drop = this.create_element("select", "drop", "select");
        let option;
        drop.addEventListener("change", (e) => {
            this.body_section(e.target.value);
        })
        for (let i = 0; i < 5; i++) {
            option = this.create_element("option", "", "");
            option.setAttribute("value", arr[i]);
            option.setAttribute("id", arr[i]);
            let option_t = this.create_text(arr[i]);
            option.appendChild(option_t);
            drop.appendChild(option);
            main.appendChild(drop);
            myMain.appendChild(main);
            document.body.appendChild(myMain);
            if (arr[i] == name) {
                this.selectedOption = i;
            }
            document.getElementById("select").selectedIndex = this.selectedOption;
        }
    }

    create_email(main, myMain) {
        let h4 = this.create_element("h4", "", "");
        var h4_t = this.create_text("SUBSCRIBE");
        h4.appendChild(h4_t);
        main.appendChild(h4);
        myMain.appendChild(main);
        document.body.appendChild(myMain);
        let input = this.create_element("input", "email", "email");;
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "  Email Address");
        main.appendChild(input);
        myMain.appendChild(main);
        document.body.appendChild(myMain);
        input = this.create_element("input", "subscribe", "subscribe");
        input.setAttribute("type", "submit");
        input.setAttribute("value", "Subscribe");
        input.addEventListener("click", () => {
            this.validate_Email(document.getElementById("email").value);
        })
        main.appendChild(input);
        myMain.appendChild(main);
        document.body.appendChild(myMain);
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
}
news = new News();