function getLabel(key){
    const language = sessionStorage.getItem('language') ?? navigator.language.slice(0, 2);

    //const label = sessionStorage.getItem("labels")[key];

    //fetch(`/Utils/${language}.json`);



    const data = JSON.parse(`{"home": "Home","projects": "Projects","online": "Online"}`);

    return data[key];
}