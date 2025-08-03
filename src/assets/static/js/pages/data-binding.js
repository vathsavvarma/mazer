const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
fetch(proxyUrl + 'http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=4')
    .then(res => res.json())
    .then(data => {   
        document.getElementById('profile-views').textContent = data[0];
        document.getElementById('followers').textContent = data[1];
        document.getElementById('following').textContent = data[2];
        document.getElementById('saved-posts').textContent = data[3];
    });

fetch(proxyUrl + 'http://www.randomnumberapi.com/api/v1.0/random?min=4&max=50&count=12')
.then(res => res.json())
.then(data => {
    optionsProfileVisit.series[0].data = data;
});
