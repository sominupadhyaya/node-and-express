fetch('http://localhost:8000/' , {mode: 'cors'})
.then(resp => resp.json())
.then(res => {
    console.log(res.data);
    const data = res.data
    data.forEach((loop) =>{

    const h1 = document.createElement('h1')
    h1.textContent =  loop.name
    document.body.appendChild(h1)
    const h2 = document.createElement('h2')
    h2.textContent = loop.author
    document.body.appendChild(h2)
    })

})