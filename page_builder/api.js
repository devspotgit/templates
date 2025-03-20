





// retrieve all templates that belong to the given category

function getCategoryTemplates(templates, category){

    const list = []

    for(let i=0; i<templates.length; i++)
        if(templates[i].category == category)
            list.push(templates[i])

    return list

}



// search for template given the keyword

function getSearchTemplates(templates, keyword){

    const list = []

    for(let i=0; i<templates.length; i++){
        const title = templates[i].title.split(" ")

        let j=0
        for(j; j<title.length; j++){
            const keywordArr = keyword.split(" ")
            
            let k=0;
            for(k; k<keywordArr.length; k++){

                if(keywordArr[k].toLowerCase() == title[j].toLowerCase())
                    break
            }
            if(k<keywordArr.length) 
                break
        }
        if(j<title.length)
            list.push(templates[i])
    }

    return list
}


// return category object that matches the slug provided

function getCategory(categories, category){

    for(let i=0; i<categories.length; i++)
        if(categories[i].slug == category) 
            return categories[i]

}



// retun template object that matches the slug given

function getTemplate(templates, template){

    for(let i=0; i<templates.length; i++)
        if(templates[i].slug == template) 
            return templates[i]
}



export {getCategory, getTemplate, getCategoryTemplates, getSearchTemplates}








