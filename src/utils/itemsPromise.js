const itemsPromise = (timeout,data) => {
    return new Promise ((resolve,reject) => {
        if (true) {
            setTimeout(() => {
                resolve(data)
            }, timeout);
        } else {
            reject();
        }
    })
}

export default itemsPromise;