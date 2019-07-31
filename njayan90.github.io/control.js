class Control {
    constructor() {
    }

    load(view, model) {
        view.header_section();
        model.body_section("abc-news-au", view);
        view.footer_section();
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


