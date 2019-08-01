export class Control {
    constructor() {
    }

    load(view, model) {
        view.header_section();
        model.body_section("abc-news-au", view);
        view.footer_section();
    }

    validate_Email(email) {
        let r = Math.random().toString(36).substring(7);
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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



