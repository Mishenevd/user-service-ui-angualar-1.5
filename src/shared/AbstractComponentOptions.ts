import {IComponentOptions, IControllerConstructor, Injectable} from "angular";

export abstract class AbstractComponentOptions implements IComponentOptions {

    public bindings?: {[boundProperty: string]: string};

    public transclude?: boolean | {[slot: string]: string};

    public require?: {[controller: string]: string};

    protected constructor(public templateUrl: string | Injectable<(...args: Array<any>) => string>,
                          public controller: Injectable<IControllerConstructor | (new (...args: Array<any>) => any)>) {
    }
}