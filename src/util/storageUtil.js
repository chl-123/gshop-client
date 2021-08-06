/*
* 使用localStorage存储数据的工具模块
* */
const KEY='todos_key'
export default {
    readTodos(){
        return JSON.parse(window.localStorage.getItem(KEY)||'[]')
    },
    saveTodos(value){
        window.localStorage.setItem(KEY,JSON.stringify(value))
    }
}