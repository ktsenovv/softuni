function editElement(element, match, replacer) {
    const content = element.textContent;
    const edited = content.split(match).join(replacer);
    element.textContent = edited;
}