import {AbstractComponentOptions} from "../../shared/AbstractComponentOptions";
import {UserComponentController} from "../controllers/UserComponentController";

export class UserComponent extends AbstractComponentOptions {

    constructor() {
        super("../user.tpl.html", UserComponentController);
        this.bindings = {
            query: "<",
            orderProp: "<",
            users: "<"
        };
    }
}