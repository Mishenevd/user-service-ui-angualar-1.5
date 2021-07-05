import {StateProvider, UrlRouterProvider} from "@uirouter/angularjs";
import {IModule} from "angular";
import {UserComponentController} from "../controllers/UserComponentController";

export class PublicRoutes {

    public static addRoutes(application: IModule) {
        application.config(["$stateProvider", ($stateProvider: StateProvider) => {
            $stateProvider
                .state("Routee_names", {
                    url: "/",
                    views: {
                        main: {
                            templateUrl: "../user.tpl.html",
                            controller: UserComponentController,
                            controllerAs: "UserComponentController"
                        }
                    },
                    data: {
                        locked: false,
                    }
                })
        }]);

        application.config(["$urlRouterProvider", ($urlRouterProvider: UrlRouterProvider) => {

            // specify the default state
            $urlRouterProvider.otherwise(($injector) => {
                let $state = $injector.get("$state");
                $state.go("aaaa");
            });
        }]);
    }
}
