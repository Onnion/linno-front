export const scroll = (id: string): void => {
    setTimeout(() => {
        let element = document.getElementById('table');
        const options: ScrollIntoViewOptions = {
            block: "start",
            behavior: "smooth"
        };
        element.scrollIntoView(options);
    }, 100);
}