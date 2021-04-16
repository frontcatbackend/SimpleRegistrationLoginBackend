import {makeAutoObservable} from 'mobx'

export default class ListStore {
    constructor(){
        this._userlist = [
            {id: 1, name:"admin0"},
            {id: 2, name:"admin1"},
            {id: 3, name:"admin2"},
        ]
        makeAutoObservable(this)
    } //mobx наблюдает за состоянием

    //функции которые могут изменить состояние

    setUserList(userlist){
        this._userlist = userlist
    }
 
    //get для получения переменных из состояния
    get userlist (){
        return this._userlist
    }

}