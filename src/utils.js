const handle = () => new Promise((resolve) => {
    setTimeout(() => {
        console.log('Hellow World');
        resolve(120);
    }, 1000)
})

export default handle;