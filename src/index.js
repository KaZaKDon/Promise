const wyPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve('Operation was successful')
    } else {
        reject('Operation failed');
    }
});
