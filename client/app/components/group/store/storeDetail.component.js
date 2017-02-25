import templateFn from "./storeDetail.pug";
import controller from "./storeDetail.controller";
import "./storeDetail.styl";

let storeDetailComponent = {
  bindings: {
    storedata: "<"
  },
  restrict: "",
  template: templateFn(),
  controller
};

export default storeDetailComponent;
