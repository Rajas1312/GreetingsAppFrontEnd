fetch('http://localhost:8000/greeting/')
    .then(res =>
        res.json()
    ).then(data => {
        for (let i = 0; i < data.result.length; i++) {
            var timeDiv = `
                      <button onclick="edit('${data.result[i]._id}')">Edit</button>
                    <button onclick="remove('${data.result[i]._id}')">Delete</button>
                        <div>
                            <h4>${data.result[i].greeting}</h4>
                            <span>(greetings)</span>

                        </div>
                        <div>
                            <h4>${data.result[i].name}</h4>
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
    })

function edit(b) {
    fetch('http://localhost:8000/greeting/' + b, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            name: document.querySelector('#fname').value,
            greeting: document.querySelector('#lname').value
        })
    })
        .then(res => res.json())
        .then(res => console.log(res))
}

function create() {
    fetch('http://localhost:8000/greeting/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            name: document.querySelector('#fname').value,
            greeting: document.querySelector('#lname').value
        })
    })

    document.querySelector('.greetings-form').style.display = 'none';
}
function display() {
    document.querySelector('.greetings-form').style.display = 'block';
}

function remove(b) {
    fetch('http://localhost:8000/greeting/' + b, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(res => console.log(res))
}





