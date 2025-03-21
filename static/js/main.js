


window.addEventListener("pageReady", () => {

    document.querySelector("form").addEventListener("submit", (e) => {
        
        e.preventDefault()
        const keyword = document.querySelector(".search-input").value
        location.href = "/search/?keyword="+keyword
    })


    const resObs = new ResizeObserver((elts)=>{
        elts.forEach(elt =>{
            if(elt.target.offsetWidth <= 500)
                document.querySelector(".screen-size").checked = false
        })
    })

    resObs.observe(document.querySelector(".template-demo"))

})



