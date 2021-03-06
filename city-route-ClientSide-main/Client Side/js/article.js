$(function(){
    operationsListener();
});

function getTrip(tripId){
    $.ajax({
        url: `https://city-route.herokuapp.com/api/trips/${tripId}`,
        type: 'GET',
        success: function(trips){
            printTrip(trips);
        }
    });
}

function printTrip(trip){
    var html =  '<section class="col mb-4">';
    html += '<div class="card bg-light text-dark">';
    html += '<div class="card-body">';
    html += '<h5 class="card-title">'+ trip.tour_date +'</h5>';
    html += '<p class="card-text">'+ trip.stops +'</p>';
    html += ' <p class="card-text">' +
            'tour ID: ' + trip.id + '<br>' +
            'tour guide: ' + trip.tour_guide_id + '<br>' +
            'trip name city: '  + trip.trip_name_city + '<br>' +
            'tour time: ' + trip.tour_time + '<br>' +
            'start time: ' + trip.start_time + '<br>' +
            'spaces left: ' + trip.spaces_left + '<br>' +
            '</br></p>';
    html += '</div>';
    html += '</div>';
    html += '</section>';
    $("#All-trips").append(html);
}

function getUser(userId){
    $.ajax({
        url: `https://city-route.herokuapp.com/api/users/${userId}`,
        type: 'GET',
        success: function(data) {
            tripList(data);    
        }
    });
}

function tripList(user){
    var all_trips = user.my_trips;
    $.each(all_trips,function(i) {
        getTrip(all_trips[i])
    })

}

function operationsListener(){
    getUser(localStorage.getItem("user_id"));
}