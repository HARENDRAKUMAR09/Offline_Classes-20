// JavaScript AJAX
$('#js-ajax').click(function() {

    // create the AJAX Request
    let http = new XMLHttpRequest();

    // prepare the request
    http.open('GET','https://api.myjson.com/bins/1gcr43',true);

    // send the request
    http.send();

    // Track the request
    http.onreadystatechange = function() {
        // if the request is finished and response is ready
        if(http.readyState === 4 && http.status === 200){
             let data = http.responseText;
             let persons = JSON.parse(data);
             processData(persons);
        }
    };
});

// JQuery AJAX
$('#jquery-btn').click(function() {
    $.ajax({
        url : 'https://api.myjson.com/bins/15vqkz',
        method : 'GET',
        dataType : 'json',
        success : function(persons) {
            processData(persons);
        }
    });
});

// process data
let processData = (persons) => {
    let personRow = '';
    for(let person of persons){
        personRow += `<tr>
                        <td>${person.id}</td>
                        <td>${person.first_name}</td>
                        <td>${person.last_name}</td>
                        <td>${person.email}</td>
                        <td>${person.gender}</td>
                        <td>${person.ip_address}</td>
                      </tr>`;
    }
    $('#table-body').empty().append(personRow);
};