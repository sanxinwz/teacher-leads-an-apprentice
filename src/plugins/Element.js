import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import { Notification, Message, MessageBox } from 'element-ui'

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox

import {
    Button,
    ButtonGroup,
    Header,
    Footer,
    Main,
    Aside,
    Container,
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
    Carousel,
    CarouselItem,
    Input,
    Checkbox,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Avatar,
} from 'element-ui'

const elements = [
    Button,
    ButtonGroup,
    Header,
    Footer,
    Main,
    Aside,
    Container,
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
    Carousel,
    CarouselItem,
    Input,
    Checkbox,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Avatar,
]
elements.forEach(item => {
    let no_list = [];
    !no_list.includes(item) && Vue.use(item)
})