// getRandomUser
let getRandomUser = () => {
    // call ajax request
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let user = data.results[0];
            displayUser(user);
        }
    });
};

setInterval(getRandomUser,1000);

// display User
let displayUser = (user) => {
    let userImage = user.picture.large;
    let userFullName = `${user.name.first} ${user.name.last}`;
    let userAge = `${user.dob.age} years`;
    let userLocation = `${user.location.city} , ${user.location.state}`;
    let userCard = `<div class="col-md-8 m-auto">
                        <div class="card person_card m-3 animated flipInX">
                            <div class="card-body bg-primary">
                                <div class="row">
                                    <div class="col-md-4 animated slideInDown">
                                        <img src="${userImage}" class="img-fluid img-thumbnail">
                                    </div>
                                    <div class="col-md-8 animated slideInUp">
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                NAME : ${userFullName}
                                            </li>
                                            <li class="list-group-item">
                                                AGE : ${userAge} Years
                                            </li>
                                            <li class="list-group-item">
                                                LOCATION : ${userLocation.toUpperCase()}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    $('#user-row').append(userCard);
};