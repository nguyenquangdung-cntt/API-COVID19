var postAPI  = 'https://api.covid19api.com/dayone/country/vietnam';
fetch(postAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `
            <tr>
                <td>${post.Country}</td>
                <td style="text-align: right;">${post.Confirmed}</td>
                <td style="text-align: right;">${post.Deaths}</td>
                <td style="text-align: right;">${post.Recovered}</td>
                <td style="text-align: center;">${post.Date}</td>
            </tr>
            `;
        });
        htmls.reverse();
        var covi = htmls.join('');
        document.getElementById("covid").innerHTML = covi;
    })
    .catch(function(err){
        document.getElementById("err").innerHTML = err; 
        console.log(err);
    });

var worldAPI = 'https://corona.lmao.ninja/v2/countries';
fetch(worldAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `
            <tr>
                <td>${post.country}</td>
                <td style="text-align: right;">${post.cases}</td>
                <td style="text-align: right;">${post.deaths}</td>
                <td style="text-align: right;">${post.recovered}</td>
            </tr>`;
        });
        var covi = htmls.join('');
        document.getElementById("cov").innerHTML = covi;
    })
    .catch(function(err){
        document.getElementById("err").innerHTML = err; 
        console.log(err);
    });

    