const handle = () => new Promise((resolve) => {
    setTimeout(() => {
        console.log('Hello World');
        resolve(120);
    }, 1000)
})

export default handle;