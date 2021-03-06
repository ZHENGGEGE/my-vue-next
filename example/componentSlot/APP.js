import { h } from "../../lib/my-vue-next.esm.js";
import { Foo } from "./Foo.js";

export const App = {
  name: "App",
  render() {
    const app = h("div", {}, "App");
    // const foo = h(Foo,{},h("p",{},"123"))
    const foo = h(Foo,{},[h("p",{},"123"),h("p",{},"456")])
    // object key
    // const foo = h(
    //   Foo,
    //   {},
    //   {
    //     header: ({ age }) => h("p", {}, "header" + age),
    //     footer: () => h("p", {}, "footer"),
    //   }
    // );
    // 数组 vnode
    // const foo = h(Foo, {}, h("p", {}, "123"));
    return h("div", {}, [app,foo]);
  },

  setup() {
    return {};
  },
};