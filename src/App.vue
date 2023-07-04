<template>
  <router-view></router-view>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
import { RadioGroup, Radio } from "vant";
import { Popup } from "vant";
import { Search } from "vant";
import { Sidebar, SidebarItem } from "vant";
import { Collapse, CollapseItem } from "vant";
import { Rate } from "vant";
import { Checkbox, CheckboxGroup } from "vant";
import { DropdownMenu, DropdownItem } from "vant";
import Element from "element-ui";
import { Uploader } from "vant";
import { Stepper } from "vant";
import { Empty } from "vant";

Vue.use(Empty);
Vue.use(Stepper);
Vue.use(Uploader);
Vue.use(Element, { zIndex: 3000 });
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Rate);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Search);
Vue.use(Popup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Button);
import Vant from "vant";
import { Picker } from "vant";
Vue.use(Picker);
import "vant/lib/index.css";
Vue.use(Vant);
export default {
  name: "App",
};
</script>

<style>
body {
  background: #e1e1e1;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
}
.van-cell {
  width: 482px;
  font-size: 4.26667vw;
  line-height: 68px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
}
.van-picker__cancel,
.van-picker__confirm {
  font-size: 28px;
}
.van-picker-column {
  font-size: 28px;
}
.van-field__control {
  text-align: center;
}
.van-cell::after {
  border: 0;
}
.van-checkbox__label {
  font-size: 24px;
  width: 96px;
  height: 40px;
  display: flex;
  align-items: center;
}
.van-stepper__input {
  background-color: #fff;
  font-size: 28px;
  margin: 0 8px;
  width: 96px;
  height: 52px;
}
.van-stepper__plus {
  background: #48c492;
  width: 52px;
  height: 52px;
}
.van-stepper__minus {
  background: #fff;
  border: 1px solid rgba(72, 196, 146, 0.5);
  border-radius: 4px;
  width: 52px;
  height: 52px;
}
.van-uploader__upload {
  width: 144px;
  height: 144px;
  border: 2px dashed rgba(153, 153, 153, 0.4);
  border-radius: 12px;
}
.van-uploader__preview-image {
  width: 154px;
  height: 154px;
}
.van-field__left-icon .van-icon,
.van-field__right-icon .van-icon {
  font-size: 28px;
}
.van-icon-clear {
  display: none;
}
.van-field__control[type="search"] {
  text-align: left;
  width: 480px;
}
.van-rate__icon {
  font-size: 3.73332vw;
}
.van-radio__icon .van-icon {
  font-size: 24px;
}
</style>