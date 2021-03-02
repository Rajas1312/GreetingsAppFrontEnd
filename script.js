fetch('http://localhost:8000/greeting/')
    .then(res => res.json()).then(data => console.log(data))

fetch('http://localhost:8000/greeting/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }, body: JSON.stringify({
        name: "Rajas",
        greeting: "Hello"
    })
})