let glo = 0;
let names, greeting;

function find() {
    fetch('http://localhost:8000/greeting/')
        .then(res =>
            res.json()
        ).then(data => {
            for (let greet = 0; greet < data.result.length; greet++) {
                var timeDiv = `
                     
                        <div>
                            <h4>${data.result[greet].greeting}</h4>
                            <span>(greetings)</span>

                        </div>
                        <div>
                            <h4>${data.result[greet].name}</h4>
                            <span>(name)</span>
                        </div>
                        <div class="silvasa">
                            <span>15 min ago</span>
                            <button onclick="edit('${data.result[greet]._id}','${data.result[greet].greeting}','${data.result[greet].name}')"><i class="fa fa-edit " ></i></,onclick=>
                            <button onclick="remove('${data.result[greet]._id}')"<i class="fa fa-trash " ></i></button>
                        </div>
                    `
                var div = document.createElement("div");
                div.className = ('greetings');
                div.innerHTML = timeDiv;
                document.querySelector('.greetingsContainer').appendChild(div);
            }
        })
}
find()

function create() {
    if (glo == 0) {
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
    } else {
        fetch('http://localhost:8000/greeting/' + document.querySelector('#id_store').value + '/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                name: document.querySelector('#fname').value,
                greeting: document.querySelector('#lname').value
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                alert('kooko');
                glo = 0;
                document.querySelector('.greetingsContainer').style.display = 'flex'
            });

    }

}
function display() {
    document.querySelector('.greetings-form').style.display = 'flex';
    document.querySelector('.greetingsContainer').style.display = "none";
}

function remove(b) {
    fetch('http://localhost:8000/greeting/' + b, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(res => console.log(res))
}

function edit(b, c, d) {
    console.log((b));
    document.querySelector('#fname').value = d;
    document.querySelector('#lname').value = c;
    document.querySelector('.greetingsContainer').style.display = "none";
    glo = 1;
    document.querySelector('.greetings-form').style.display = 'flex';
    document.querySelector('#id_store').value = b;
}





