/**
 * Created by yanxiaojun on 2017/4/13.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class GlobalData {

    private _userId: string;
    private _username: string;


    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

}
