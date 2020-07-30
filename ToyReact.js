class ElementWrapper {
    constructor(type){
        this.root = document.createElement(type)
    }
    setAttribute(name,value) {
        this.root.setAttribute(name, value)
    }
    appendChild(vchild) {
        vchild.mountTo(this.root)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

export class Component {
    constructor() {
        this.children = []
    }
    setAttribute(name,value) {
        this[name] = value
    }
    mountTo(parent) {
       let vdom = this.render()
       console.log(vdom)
       vdom.mountTo(parent)
    }
    appendChild(vchild) {
        this.children.push(vchild)
    }
}
class TextWrapper {
    constructor(content){
        this.root = document.createTextNode(content)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

export const ToyReact = {
    createElement(type, attributes, ...children) {
        let element
        if (typeof type === 'string') {
            element = new ElementWrapper(type)
        } else {
            element = new type
        }
        for (const key in attributes) {
            element.setAttribute(key, attributes[key])
        }

        let insertChild = (children) => {
            for (let child of children) {
                if (Array.isArray(child)) {
                    insertChild(child)
                }else {
                    if (!(child instanceof Component) &&
                    !(child instanceof ElementWrapper) &&
                    !(child instanceof TextWrapper)
                    ) {
                        child = String(child)
                    }
                    if (typeof child === 'string'){
                        child = new TextWrapper(child)
                    }
                    element.appendChild(child)
                }   
            }
        }
        insertChild(children)

        return element
    }, 
    render(vdom, element) {
       vdom.mountTo(element)
       console.log(vdom)
       console.log(element)
    //    element.appendChild(vdom)
    }
};
