import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';

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
    CarouselItem
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
    CarouselItem

]
elements.forEach(item => {
    let no_list = [];
    !no_list.includes(item) && Vue.use(item)
})