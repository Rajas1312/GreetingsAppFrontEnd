let flag = 0;
const URL = 'http://localhost:8000/greeting/'
function findAllGreetings() {
    fetch(URL)
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
                            <button onclick="editGreetings('${data.result[greet]._id}','${data.result[greet].greeting}','${data.result[greet].name}')"><i class="fa fa-edit " ></i></onclick=>
                            <button onclick="removeById('${data.result[greet]._id}')"<i class="fa fa-trash " ></i></button>
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
findAllGreetings()

function create() {

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            name: document.querySelector('#fname').value,
            greeting: document.querySelector('#lname').value
        })
    })
    document.querySelector('.greetings-form').style.display = 'flex';
}
// function editGreetings1() {
//     fetch('http://localhost:8000/greeting/' + document.querySelector('#id_store').value + '/', {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         }, body: JSON.stringify({
//             name: document.querySelector('#fname').value,
//             greeting: document.querySelector('#lname').value
//         })
//     })
//         .then(res => res.json())
//         .then(res => {
//             console.log(res);
//             //flag = 0;
//             document.querySelector('.greetingsContainer').style.display = 'flex'
//         }).catch(error => {
//             console.log("error occured while creting greetings", error)
//         });
// }

function display() {
    document.getElementById('id01').style.display = 'block'
    document.querySelector('.greetings-form').style.display = 'flex';
    document.querySelector('.greetingsContainer').style.display = "flex";
}

function removeById(deleteId) {

    document.querySelector('#id_del').value = deleteId;
    document.getElementById('id02').style.display = 'block';
}

function removeGreetings() {
    fetch(URL + document.querySelector('#id_del').value, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => {
            console.log("error occoured while deleting greeting", error)
        })
}

function editGreetings(id, greeting, name) {
    document.getElementById('id01').style.display = 'block'
    document.querySelector('#fname').value = name;
    document.querySelector('#lname').value = greeting;
    //flag = 1;
    document.querySelector('#id_store').value = id;

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
            //flag = 0;
            document.querySelector('.greetingsContainer').style.display = 'flex'
        }).catch(error => {
            console.log("error occured while creting greetings", error)
        });
}







