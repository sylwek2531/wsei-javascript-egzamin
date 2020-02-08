//1
const sampleClass = document.getElementsByClassName('sample_class');
function getTagsOfElements(elements) {
    let array = [];
    for (let i = 0; i < elements.length; i++) {
        array.push(elements[i].tagName);
    }
    return array;
}

console.log("//1//", getTagsOfElements(sampleClass));

//2
const sampleId = document.getElementById('sample_id');
function getClassesOfElement(element) {
    let array = [];
    element.classList.forEach(el => {
        array.push(el);
    });
    return array;
}

console.log("//2//",getClassesOfElement(sampleId));

//3
const listElements = document.querySelectorAll('.sample_class_2 li');
function getInnerTextsOfElements(elements) {
    let array = [];
    elements.forEach(el => {
        array.push(el.innerText);
    });
    return array;
}

console.log("//3//",getInnerTextsOfElements(listElements));

//4
const links = document.querySelectorAll('a');
function getAddressesOfElements(elements) {
    let array = [];
    elements.forEach(el => {
        array.push(el.getAttribute('href'));
    });
    return array;
}
console.log("//4//",getAddressesOfElements(links));

//5
const children = document.querySelector('.sample_class_3').children;
console.log("//5//",getTagsOfElements(children));