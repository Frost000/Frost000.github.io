/*
let labels;
let langs;
// Faire un array pour load multiple files facilement ?

function getLabel(key) {
    const language = sessionStorage.getItem('language') ?? navigator.language.slice(0, 2);
    labels = JSON.parse(sessionStorage.getItem("labels")) ?? null;

    if(labels == null){
        const identifier = `l-${key}-${language}`;

        fetch(`/Utils/${language}.json`).then(data => data.json()).then(json => {
            sessionStorage.setItem("labels", JSON.stringify(json));
            labels = json;
            FillLabel(key, 0, identifier)
        });
        return /*html`
        <div id=${identifier}></div>
        `;
    }else{
        return TryFindLabel(key);
    }
}

function FillLabel(key, depth, identifier){
    if(depth >= 100){
        console.log(`Page took too long to load, abandoning:${identifier}`)
        return;
    }

    const target = document.getElementById(identifier);
    if(target == null){
        setTimeout(FillLabel, 100, key, depth+1, identifier);
    } else{
        target.outerHTML = TryFindLabel(key)
    }
}

function TryFindLabel(key){
    try{
        return labels[key];
    } catch{
        console.log(`Cannot find key:${key}`);
        return key;
    }
}
*/
// - - - -

let newLabels = [];

function getLabel(key, file)
{
    if(file == null)
    {
        file = sessionStorage.getItem('language') ?? navigator.language.slice(0, 2);
    }

    newLabels[file] = JSON.parse(sessionStorage.getItem(createStorageIdentifier(file))) ?? null;
    if(newLabels[file] == null){
        fetch(`/Utils/${file}.json`).then(data => data.json().then(json => {
            sessionStorage.setItem(createStorageIdentifier(file), JSON.stringify(json));
            newLabels[file] = json;
            FillLabel(key, file, 0);
            })
        , () => {
            console.log(`Unable to find ${file}`);
        });
        return /*html*/`
        <div id=${createReplaceIdentifier(key, file)}></div>
        `;
    }else{
        return TryFindLabel(key, file);
    }
}

function createReplaceIdentifier(key, file){
    return `l-${key}-${file}`;
}

function createStorageIdentifier(file){
    return `l-${file}`;
}

function FillLabel(key, file, depth){
    if(depth >= 100){
        console.log(`Page took too long to load, abandoning:${createReplaceIdentifier(key, file)}`)
        return;
    }

    const target = document.getElementById(createReplaceIdentifier(key, file));
    if(target == null){
        setTimeout(FillLabel, 100, key, file, depth+1);
    } else{
        target.outerHTML = TryFindLabel(key, file);
    }
}

function TryFindLabel(key, file){
    try{
        return newLabels[file][key];
    } catch{
        return key;
    }
}