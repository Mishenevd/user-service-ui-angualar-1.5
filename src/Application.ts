import "@flowjs/ng-flow";
import * as angular from "angular";
import "angular-bootstrap-contextmenu";
import "angular-morph";
import "angular-recaptcha";
import "angular-selectize2";
import "angular-strap";
import "angular-validation-match";
import "angular-wizard";
import "angularjs-slider";
import "google-libphonenumber";
import "intl-tel-input";
import "md-date-range-picker/dist/md-date-range-picker.min.js";
import "ment.io";
import "ng-infinite-scroll"
import {module_user} from "./user/_user";
import {PublicRoutes} from "./user/configuration/PublicRoutes";

export class Application {

    public application: angular.IModule;

    constructor() {
        this.application = angular.module(module_user);
        PublicRoutes.addRoutes(this.application);
    }
}

const application = new Application();
