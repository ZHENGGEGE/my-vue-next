import { h } from "../../lib/my-vue-next.esm.js" 
export const App = {
    render() {
      // ui
      return   h(
        "div",
        {
          id: "root",
          class: ["red", "hard"],
        },
        // string
        "hi, "+ this.msg
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