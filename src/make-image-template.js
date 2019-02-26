function makeImageTemplate(image){
    const html =
    `<li class="${image.keyword}">
    <h2>${image.title}</h2>
    <img src="${image.url}" alt="${image.description}">
    <p>Horns: ${image.horns}</p>
    </li>`;
    
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default makeImageTemplate;