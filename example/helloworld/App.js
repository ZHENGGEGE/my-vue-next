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
        // "hi, mini-vue"
        // Array
        [h("p", { class:"red"}, "hi"), h("p", {class:"blue"}, "mini-vue")]
      );
    },
  
    setup() {
      return {
        msg: "mini-vue",
      };
    },
  };