/*
* ajax 请求文件
* */
import axios from "axios";
export default function ajax (url,data={},type='GET') {
    return new Promise(function (resolve, reject) {
        let promise;
        if(type==='GET'){
            let dataStr=''//数据拼接字符串
            Object.keys(data).forEach(key=>{
                dataStr+=key+'='+data[key]+'&'
            })
            if(dataStr!==''){
                dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
                url=url+'?'+dataStr
            }

            promise=axios.get(url
            )
        }else {
            promise=axios.post(url,data)
        }
        promise.then(function (response) {
            //成功了调用resolve
            resolve(response.data)
        }).catch(function (error) {
            //失败了调用reject
            reject(error)
        })
    })

}