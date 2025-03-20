



function page(data){
    return `
        <input type="checkbox" class="side-status">

        <input type="checkbox" class="screen-size">

        <div class="page">
            <div class="header">
                <span class="page-title">
                    ${
                        data.type == "template" ? data.template.title
                        : data.type == "category" ? data.category.title
                        : data.type == "search" ? data.keyword
                        : "All Templates"
                    }
                </span>

                <button class="side-open icon" onclick="(()=>{
                    document.querySelector('.side-status').checked=true
                })()"><i class="fa-solid fa-bars"></i></button>

            </div>

            <div class="side-wrapper">
                <div class="side">
                    <div class="side-header">

                        <button class="side-close icon" onclick="(()=>{
                            document.querySelector('.side-status').checked=false
                        })()"><i class="fa-solid fa-xmark"></i></button>

                        <a class="site-name" href="/">Html Templates</a>

                        <form class="search">
                            <input class="search-input" placeholder="search templates..." type="text" name="keyword">
                            <button class="search-submit icon"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div class="categories">
                        ${
                            (()=>{
                                let html = ""
                                data.categories.forEach(category =>{
                                    html+='<a class="category" href="/categories/'+category.slug+'">'+category.title+'</a>'
                                })
                                return html
                            })()
                        }
                    </div>
                </div>
            </div>

            <div class="transparent" onclick="(()=>{
                document.querySelector('.side-status').checked=false
            })()"></div>

            <div class="${data.type == "template" ? "template-demo" : "template-list"}">
                ${
                    data.type == "template" ? `
                        <div class="dashboard">
                            <button class="desktop icon" onclick="(()=>{
                                document.querySelector('.screen-size').checked=false
                            })()"><i class="fa-solid fa-display"></i></button>

                            <button class="mobile icon" onclick="(()=>{
                                document.querySelector('.screen-size').checked=true    
                            })()"><i class="fa-solid fa-mobile-screen"></i></button>
                            
                            <a class="live" href="/sites/${data.template.slug}">Live</a>
                            <a class="download" href="/files/${data.template.slug}">Download</a>
                        </div>

                        <!--<div class="template-site-wrapper">-->
                            <iframe class="template-site" title="${data.template.title}" src="/sites/${data.template.slug}"></iframe>
                        <!--</div>-->
                    `
                    : (()=>{
                        let html = ""
                        data.templates.forEach(template => {
                            html+=`
                                <div class="template-card">
                                    <img class="template-card-cover" src="${template.img}" alt="${template.title}">
                                    <div class="template-card-info">
                                        <span class="template-card-title">${template.title}</span>
                                        <span class="template-card-date">${template.date}</span>
                                        <a class="demo" href="/templates/${template.slug}">Preview</a>
                                    </div>
                                </div>
                            `
                        })
                        return html
                    })()
                }
            </div>
        
            <div class="footer">Devspot</div>

        </div>    
    `
}


export { page }




