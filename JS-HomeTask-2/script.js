const arr = ["All", "The Times Of India", "Hindustan Times", "The Hindu", "The Telegraph", "Deccan Chronicle", "Mumbai Mirror", "The Economic Times", "DNA", "The Tribune", "The New Indian Express"];
let myMain = document.getElementById("myMain");
let main = create_element("div", "main", "main");
let center = create_element("div", "center", "center");
let side = create_element("div", "side", "side");

function load() {
    header_section();
    body_section();
    footer_section();
}

function header_section() {
    let x = document.getElementById("myHeader");
    let p = create_element("b", "News", "News");
    let t = create_text("NEWSFEED");
    let i = create_element("i", "yet", "yet");
    let i_text = create_text("Yet Another NewsFeed");
    i.appendChild(i_text);
    p.appendChild(t);
    p.appendChild(i);
    x.appendChild(p);
    document.body.appendChild(x);
}

function body_section() {
    center.innerHTML = '';
    create_all_tiles();
    create_dropdown(name);
    create_email();
}

function footer_section() {
    let foot = document.getElementById("myFooter");
    let p = create_element("p", "footer", "");
    p.setAttribute("class", "footer");
    let p_t = create_text("NewsFeed 2019");
    p.appendChild(p_t);
    foot.appendChild(p);
    document.body.appendChild(foot);
}

function modal_window(id) {
    let modal;
    const para = ["All", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?"]
    const arr = ["All", "The Times Of India", "Hindustan Times", "The Hindu", "The Telegraph", "Deccan Chronicle", "Mumbai Mirror", "The Economic Times", "DNA", "The Tribune", "The New Indian Express"];
    let para1;
    for (let j = 1; j <= 10; j++) {
        if (arr[j] == id) {
            para1 = para[j];
        }
    }
    modal = create_element("div", "modal", "modal");
    let modal_content = create_element("div", "modal_content", "");
    let modal_head = create_element("div", "modal_head", "");
    let close = create_element("span", "close", "");
    close.setAttribute("onclick", "close_section()");
    let close_t = create_text("\u00D7");
    close.appendChild(close_t);
    let modal_body = create_element("div", "modal_body", "");
    let modal_head_text = create_text(id);
    let modal_body_text = create_text(para1);
    modal_head.appendChild(close);
    modal_head.appendChild(modal_head_text);
    modal_body.appendChild(modal_body_text);
    modal_content.appendChild(modal_head);
    modal_content.appendChild(modal_body);
    modal.appendChild(modal_content);
    document.body.appendChild(modal);
    modal.style.display = "block";
}

function close_section() {
    let modal = document.getElementById("modal");
    modal.parentNode.removeChild(modal);
}

var count = 0;

function validate_Email(email) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(email)) {
        alert("Successfully Subscribed");
        localStorage.setItem(++count, email);
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        return false;
    }
}

function span_opacity(content, section, section2, p) {
    let span1 = create_element("span", "opac", "");
    let span1_t = create_text(content);
    span1.appendChild(span1_t);
    p.appendChild(span1);
    section2.appendChild(p);
    section.appendChild(section2);
    append_child_center(section);
}

function span(content, section, section2, p) {
    let span1 = create_element("span", "", "");
    let span1_t = create_text(content);
    span1.appendChild(span1_t);
    p.appendChild(span1);
    section2.appendChild(p);
    append_child_center(section);
}

function create_element(element, class_name, id_name) {
    let main = document.createElement(element);
    main.setAttribute("class", class_name);
    main.setAttribute("id", id_name);
    return (main);
}

function create_text(element_text) {
    let text = document.createTextNode(element_text);
    return (text);
}

function create_img(section1, section) {
    let img = create_element("img", "img", "img");
    img.setAttribute("src", "White-Blank-Wallpaper-14.png");
    section1.appendChild(img);
    section.appendChild(section1);
    append_child_center(section);
}

function create_title(section2, section, paper_name) {
    let h1 = create_element("h1", "one", "one");
    let h1_t = create_text(paper_name);
    h1.appendChild(h1_t);
    section2.appendChild(h1);
    section.appendChild(section2);
    append_child_center(section);
}

function create_content(section2, section, p) {
    let p_t = create_text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?");
    p.setAttribute("id", "text");
    p.appendChild(p_t);
    section2.appendChild(p);
    section.appendChild(section2);
    append_child_center(section);
}

function create_button(section2, section, paper_name) {
    let button = create_element("button", "button", paper_name);
    let button_t = create_text("Continue Reading");
    button.appendChild(button_t);
    section2.appendChild(button);
    section.appendChild(section2);
    append_child_center(section);
    button.setAttribute("onclick", "modal_window(id)");
}

function create_border(section) {
    let border = create_element("div", "border", "border");
    section.appendChild(border);
    append_child_center(section);
}

function create_dropdown(name) {
    let selectedOption = 0;
    let h4 = create_element("h4", "", "");
    let h4_t = create_text("SELECT CATEGORY");
    h4.appendChild(h4_t);
    append_child_side(h4);
    let drop = create_element("select", "drop", "select");
    let option;
    for (let i = 0; i <= 10; i++) {
        option = create_element("option", "", "");
        option.setAttribute("value", arr[i]);
        drop.setAttribute("onchange", "create_single_tile(value)");
        let option_t = create_text(arr[i]);
        option.appendChild(option_t);
        drop.appendChild(option);
        append_child_side(drop);
        if (arr[i] == name) {
            selectedOption = i;
        }
    }
    document.getElementById("select").selectedIndex = selectedOption;
}

function create_email() {
    h4 = create_element("h4", "", "");
    let h4_t = create_text("SUBSCRIBE");
    h4.appendChild(h4_t);
    append_child_side(h4);
    let input = create_element("input", "email", "email");;
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "  Email Address");
    append_child_side(input);
    input = create_element("input", "subscribe", "subscribe");
    input.setAttribute("type", "submit");
    input.setAttribute("value", "Subscribe");
    input.addEventListener("click", function () {
        validate_Email(document.getElementById("email").value);
    })
    append_child_side(input);
}

function create_single_tile(value) {
    center.innerHTML = '';
    if (value == "All") {
        create_all_tiles();
    }
    else {
        create_tile(value);
    }
}

function create_all_tiles() {
    for (let i = 1; i <= 10; i++) {
        create_tile(arr[i]);
    }
}

function create_tile(name) {
    let section = create_element("div", "section", "section");
    let section1 = create_element("div", "section1", "section1");
    let section2 = create_element("div", "section2", "section2");
    create_img(section1, section);
    create_title(section2, section, name);
    let p = create_element("p", "", "");
    span_opacity("Posted On", section, section2, p);
    span(" 29 June,2019 ", section, section2, p);
    span_opacity("// Category:", section, section2, p);
    span(" Category One ", section, section2, p);
    p = create_element("p", "", "");
    create_content(section2, section, p);
    create_button(section2, section, name);
    create_border(section);
}

function append_child_center(value) {
    center.appendChild(value);
    main.appendChild(center);
    myMain.appendChild(main);
    document.body.appendChild(myMain);
}

function append_child_side(value) {
    side.appendChild(value);
    main.appendChild(side);
    myMain.appendChild(main);
    document.body.appendChild(myMain);
}