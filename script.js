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

fetch('http://localhost:8000/greeting/603e3c115e318d04e45caa8b', {
    method: 'DELETE',
})
    .then(res => res.json())
    .then(res => console.log(res))

fetch('http://localhost:8000/greeting/603e1ef082ef1f1c3c979f50', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    }, body: JSON.stringify({
        name: "Shivam",
        greeting: "Hello"
    })
})
    .then(res => res.json())
    .then(res => console.log(res))