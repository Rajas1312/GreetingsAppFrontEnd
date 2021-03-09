const URL = 'http://localhost:8000/greeting/'

findAllGreetings = () => {
    fetch(URL)
        .then(res =>
            res.json()
        ).then(data => {
            for (let greet = data.result.length - 1; greet >= 0; greet--) {
                let d = new Date(data.result[greet].updatedAt)
                let timeDiv = `
                        <div>
                            <h4>${data.result[greet].greeting}</h4>
                        </div>
                        <div>
                            <h4>${data.result[greet].name}</h4>
                        </div>
                            <div class="time">${d.toLocaleTimeString()}</div>
                        </div>
                            <div class="editflex">
                            <div><a id="edit-greetings" ><img onclick="editGreetings('${data.result[greet]._id}','${data.result[greet].greeting}','${data.result[greet].name}')" src="assets/edit_icon3.png" style="height:20px;></a></div>
                           <div><a id="delete-greetings" ><img onclick="removeById('${data.result[greet]._id}')" src="assets/delete_icon3.png" style="height:20px"></a></div> 
                            </div>
                    `
                let div = document.createElement("div");
                div.className = ('greetings');
                div.innerHTML = timeDiv;
                document.querySelector('.greetingsContainer').appendChild(div)
            }
        }).catch(error => {
            return error;
        })
}
findAllGreetings()

create = () => {
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

updateGreetings = () => {
    fetch(URL + document.querySelector('#id_edit_store').value + '/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            name: document.querySelector('#edit-fname').value,
            greeting: document.querySelector('#edit-lname').value
        })
    })
        .then(res => res.json())
        .then(res => {
            document.querySelector('.greetingsContainer').style.display = 'flex'
            return res
        }).catch(error => {
            return error;
        });
}

display = () => {
    document.getElementById('add-greetingId').style.display = 'block'
    document.querySelector('.greetings-form').style.display = 'flex';
    document.querySelector('.greetingsContainer').style.display = "flex";
}

removeById = (deleteId) => {
    document.querySelector('#id_del').value = deleteId;
    document.getElementById('delete-greetingId').style.display = 'block';
    document.getElementById('edit-greetingId').style.display = 'none'
}

remove = () => {
    fetch(URL + document.querySelector('#id_del').value, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => {
            return error;
        })
}

editGreetings = (id, greeting, name) => {
    document.getElementById('edit-greetingId').style.display = 'block'
    document.getElementById('delete-greetingId').style.display = 'none';
    document.querySelector('#edit-fname').value = name;
    document.querySelector('#edit-lname').value = greeting;
    document.querySelector('#id_edit_store').value = id;
}

regexValidation = () => {
    document.querySelector('#edit-fname').setAttribute('pattern', '[A-Z]{1}[a-z]{2,}');
    document.querySelector('#edit-lname').setAttribute('pattern', '[A-Z]{1}[a-z]{2,}');
    document.querySelector('#fname').setAttribute('pattern', '[A-Z]{1}[a-z]{2,}');
    document.querySelector('#lname').setAttribute('pattern', '[A-Z]{1}[a-z]{2,}');
}
regexValidation()






