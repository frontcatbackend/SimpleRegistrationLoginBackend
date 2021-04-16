import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor(){
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    } //mobx наблюдает за состоянием

    //функции которые могут изменить состояние

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }

    //get для получения переменных из состояния
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}