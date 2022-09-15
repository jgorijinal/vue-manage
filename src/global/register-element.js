import { Button, Select, Container, Aside, Header, Main } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

const components = [Button, Select, Container,Aside, Header, Main];

export default function registerElement(Vue) {
  for (let component of components) {
    Vue.component(component.name, component);
  }
}
