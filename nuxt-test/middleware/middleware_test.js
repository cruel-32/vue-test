export default function ({ route }) {
    // console.log('route : ', route);
    return new Promise((resolve,reject)=>{
        if(route.fullPath){
            resolve({
                'add' : 'a'
            })
        } else {
            reject({
                'remove' : 'a'
            })
        }
    })
}