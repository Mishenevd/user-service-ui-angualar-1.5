import * as angular from "angular";
import {module_user} from "./user/_user";
import {UserService} from "./user/services/UserService";

export const module_user_service = "UserService";

angular.module(module_user_service, [module_user])