export const ToyReact = {
    createElement(type, attributes, ...children) {
        let element = document.createElement(type)
        for (const key in attributes) {
            element.setAttribute(key, attributes[key])
        }

        for (let child of children) {
            if (typeof child === 'string'){
                child = document.createTextNode(child)
            } 
            element.appendChild(child)
            
        }

        return element
    }
};
