
import { getCategory, getCategoryTemplates, getTemplate, getSearchTemplates } from "/page_builder/api.js"

import { page } from "/page_builder/templates.js"

fetch("/template_data.json")
.then(res => res.json())
.then(data => {
    
   
    if(location.pathname.split("/")[1] == "templates"){

        const d = {}

        d.categories = data.categories
        d.template = getTemplate(data.templates, location.pathname.split("/")[2])
        d.type = "template"

        document.body.innerHTML = page(d)

        document.body.dispatchEvent(
            new CustomEvent("pageReady", {
                bubbles: true
            })
        )

    }   
    else if(location.pathname.split("/")[1] == "categories"){

        const d = {}

        d.categories = data.categories
        d.category = getCategory(data.categories, location.pathname.split("/")[2])
        d.templates = getCategoryTemplates(data.templates, location.pathname.split("/")[2])
        d.type = "category"

        document.body.innerHTML = page(d)

        document.body.dispatchEvent(
            new CustomEvent("pageReady", {
                bubbles: true
            })
        )

    } 
    else if(location.pathname.split("/")[1] == "search"){

        const param = new URLSearchParams(location.search)

        const d = {}

        d.categories = data.categories
        d.keyword = param.get("keyword")
        d.templates = getSearchTemplates(data.templates, param.get("keyword"))
        d.type = "search"

        document.body.innerHTML = page(d)

        document.body.dispatchEvent(
            new CustomEvent("pageReady", {
                bubbles: true
            })
        )

    }
    else{

        const d = {}

        d.templates = data.templates
        d.categories = data.categories
        d.type = "home"

        document.body.innerHTML = page(d)

        document.body.dispatchEvent(
            new CustomEvent("pageReady", {
                bubbles: true
            })
        )

    }
    
})




