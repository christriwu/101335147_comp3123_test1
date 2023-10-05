const resolvedPromise = new Promise((resolve)=>{
    setTimeout(()=> {
        let success = {'message': 'Delayed success'}
        resolve(success);
    },500)
})

const rejectedPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            reject('{error: delayed exception}' );

    },500)
})

resolvedPromise.then((success)=>{
    console.log(success)
})

rejectedPromise.catch((error)=>{
    console.error(error)
})