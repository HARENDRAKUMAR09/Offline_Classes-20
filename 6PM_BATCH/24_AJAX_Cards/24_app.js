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
    $('#user-img').attr('src',userImage);
    $('#user-name').text(userFullName.toUpperCase());
    $('#user-age').text(userAge);
};