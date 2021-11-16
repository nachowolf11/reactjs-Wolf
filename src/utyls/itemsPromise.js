const itemsPromise = (timeout,data) => {
    return new Promise ((resolve,reject) => {
        if (data.length > 0) {
            setTimeout(() => {
                resolve(data)
            }, timeout);
        } else {
            reject();
        }
    })
}

export default itemsPromise;