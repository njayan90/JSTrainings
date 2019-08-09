    export let headlines=function(view) {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=6f006384b6f14a3d8a42b4f636f60a6b`)
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                modal_window(view, myJson);
            });
    }
     function modal_window(view, myJson) {

        let modal;
        modal = view.create_element("div", "modal", "modal");
        let modal_content = view.create_element("div", "modal_content", "");
        let modal_head = view.create_element("div", "modal_head", "");
        let modal_head_text = view.create_text("Headlines");
        let close = view.create_element("span", "close", "");
        close.addEventListener("click", () => {
            view.close_section();
        })
        let close_t = view.create_text("\u00D7");
        close.appendChild(close_t);
        modal_head.appendChild(close);
        modal_head.appendChild(modal_head_text);
        modal_content.appendChild(modal_head);
        let modal_body = view.create_element("div", "modal_body", "");
        for(let i=0;i<10;i++){
        let modal_section = view.create_element("div", "modal_section", "");
        let modal_section_text = view.create_text(i+1+")."+myJson.articles[i].title);
        modal_section.appendChild(modal_section_text);
        let hr=view.create_element("hr","","");
        modal_section.appendChild(hr);
        modal_body.appendChild(modal_section);
        modal_content.appendChild(modal_body);
        modal.appendChild(modal_content);
        }
        document.body.appendChild(modal);
        modal.style.display = "block";
    }

