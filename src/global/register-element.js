import {
  Button,
  Select,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Icon
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

const components = [
  Button,
  Select,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Icon
];

export default function registerElement(Vue) {
  for (let component of components) {
    Vue.component(component.name, component);
  }
}
