import { ToyReact, Component } from './ToyReact.js'


class Mycomponent extends Component {
    render() {

        return <div>
            <span>Hello</span> <span>World</span>
            <div>{this.children}</div>
        </div>
    }
}

let a = <Mycomponent name="a" id="ida">
       <div>111</div>
     </Mycomponent>
console.log(a)

ToyReact.render(a, 
    document.body
)
