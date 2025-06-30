let labels;
function getLabel(key) {
    const language = sessionStorage.getItem('language') ?? navigator.language.slice(0, 2);
    labels = JSON.parse(sessionStorage.getItem("labels")) ?? null;

    if(labels == null){
        fetch(`/Utils/${language}.json`).then(data => data.json()).then(json => {
            sessionStorage.setItem("labels", JSON.stringify(json));
            labels = json;
            FillLabel(key, 0)
        });
        return /*html*/`
        <div id=${"label-"+key}></div>
        `;
    }else{
        return TryFindLabel(key);
    }
}

function FillLabel(key, depth){
    if(depth >= 100){
        console.log(`Page took too long to load, abandoning:${key}`)
        return;
    }

    const target = document.getElementById("label-"+key);
    if(target == null){
        setTimeout(FillLabel, 100, key, depth+1);
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