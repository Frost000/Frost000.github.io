function getLabel(key) {
    const language = sessionStorage.getItem('language') ?? navigator.language.slice(0, 2);
    let labels = JSON.parse(sessionStorage.getItem("labels")) ?? null;

    if(labels == null){
        fetch(`/Utils/${language}.json`).then(data => data.json()).then(json => {
            sessionStorage.setItem("labels", JSON.stringify(json));
            console.log(key);
            console.log(document.getElementById(key));
            console.log("yes");
        });
        return /*html*/`
        <div id=${key}></div>
        `;
    }else{
        return TryFindKey(key);
    }
}

function TryFindKey(key){
    try{
        return labels[key];
    } catch{
        console.log(`Cannot find key:${key}`);
        return key;
    }
}