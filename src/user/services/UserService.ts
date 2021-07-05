import {User} from "../../shared/models/User";
import {IPromise, IQService} from "angular";

export class UserService {

    private data: User[] = [
        new User("1", "username1", "name1", "surname1"),
        new User("2", "username2", "name2", "surname2"),
        new User("3", "username3", "name3", "surname3")
    ];
    private $q: IQService;

    public getUsers(): IPromise<User[]> {
        return this.$q.resolve(this.data);
    }
}