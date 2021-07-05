import {User} from "../../shared/models/User";
import {UserService} from "../services/UserService";
import {IController} from "angular";

export class UserComponentController implements IController {
    private _users: User[];
    private _userService: UserService;

    public $onInit(): void {

    }

    public getBalance(): void {
        this._userService.getUsers().then((users) => {
            this._users = users;
        }).catch(() => {
            this._users = undefined;
        });
    }

    constructor(users: User[], userService: UserService) {
        this._users = users;
        this._userService = userService;
    }
}