import * as angular from "angular";
import {UserComponent} from "./components/UserComponent";
import {UserService} from "./services/UserService";

export const module_user = "User";

angular.module(module_user, [])
    .component("user", new UserComponent())
    .service("user-service", UserService)