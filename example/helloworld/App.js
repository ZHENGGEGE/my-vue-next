import { h } from "../../lib/my-vue-next.esm.js" 
import { Foo } from "./Foo.js";

window.self = null
export const App = {
    name:'App',
    render() {
      window.self = this
      // ui
      return   h(
        "div",
        {
          id: "root",
          class: ["red", "hard"],
          onClick() {
            console.log('click')
          },
          onMousedown() {
            console.log('mousedown')
          }
        },
        // string
        // "hi, "+ this.msg
        [
          h("div", {}, "hi," + this.msg),
          h(Foo, {
            count: 1,
          }),
        ]
        // Array
        // [h("p", { class:"red"}, "hi"), h("p", {class:"blue"}, "123")]
      );
    },
  
    setup() {
      return {
        msg: "data123",
      };
    },
  };