let flag = 0;
let names, greeting;
function find() {
    fetch('http://localhost:8000/greeting/')
        .then(res =>
            res.json()
        ).then(data => {
            for (let greet = data.result.length - 1; greet >= 0; greet--) {
                let timeDiv = `
                     
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
                            <button onclick="remove1('${data.result[greet]._id}')"<i class="fa fa-trash " ></i></button>
                        </div>
                    `
                let div = document.createElement("div");
                div.className = ('greetings');
                div.innerHTML = timeDiv;
                document.querySelector('.greetingsContainer').appendChild(div);
            }
        }).catch(error => {
            console.log("error occured while serching the greetings", error)
        })
}
find()

function create() {

    if (flag == 0) {
        fetch('http://localhost:8000/greeting/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                name: document.querySelector('#fname').value,
                greeting: document.querySelector('#lname').value
            })
        })
        document.querySelector('.greetings-form').style.display = 'flex';
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
                flag = 0;
                document.querySelector('.greetingsContainer').style.display = 'flex'
            }).catch(error => {
                console.log("error occured while creting greetings", error)
            });

    }

}
function display() {
    document.getElementById('id01').style.display = 'block'
    document.querySelector('.greetings-form').style.display = 'flex';
    document.querySelector('.greetingsContainer').style.display = "flex";
}

function remove1(deleteId) {

    document.querySelector('#id_del').value = deleteId;
    document.getElementById('id02').style.display = 'block';
}

function remove() {
    fetch('http://localhost:8000/greeting/' + document.querySelector('#id_del').value, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => {
            console.log("error occoured while deleting greeting", error)
        })
}

function edit(b, c, d) {
    document.getElementById('id01').style.display = 'block'
    document.querySelector('#fname').value = d;
    document.querySelector('#lname').value = c;
    //document.querySelector('.greetingsContainer').style.display = "none";
    flag = 1;
    //document.querySelector('.greetings-form').style.display = 'flex';
    document.querySelector('#id_store').value = b;
}







