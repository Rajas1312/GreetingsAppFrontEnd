fetch('http://localhost:8000/greeting/')
    .then(res => res.json()).then(data => console.log(data)
    )

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

for (let i = 0; i < 7; i++) {
    var timeDiv = `
            <div>
                <span>ObjectId("24113cd12w1")</span>
            </div>
            <div>
                <h4>Hello</h4>
                <span>(greetings)</span>

            </div>
            <div>
                <h4>Rajas</h4>
                <span>(name)</span>
            </div>
            <div>
                <span>15 min ago</span>
            </div>
        `
    var div = document.createElement("div");
    div.className = ('greetings');
    div.innerHTML = timeDiv;
    document.querySelector('.greetingsContainer').appendChild(div);
}