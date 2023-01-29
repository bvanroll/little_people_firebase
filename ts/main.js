var statusItem = document.querySelector("p#status");
var peopleList = document.querySelector("#people");
var pageSize = 100
var pageNum = (1 *pageSize) -1;
document.addEventListener('DOMContentLoaded', function() {
    try {
        let app = firebase.app();
        let features = [
            'database',
            'storage'
        ].filter(feature => typeof app[feature] === 'function');


    } catch (e) {
        console.error(e);
    }
    var database = firebase.database();
    var rootRef = database.ref('/').orderByChild("lastName").startAt(pageNum).limitToFirst(pageSize);

    //const people = []
    //console.log(peopleList)
    rootRef.once('value', function(snapshot){
        console.log(snapshot)
        snapshot.forEach(function(d) {
            console.log(d)
            var v = d.val();
            console.log(v)
            peopleList.innerHTML += `<div  class="card">
                                           <div class="pfp">
                                            <img class="picture" alt="not yet" src="avatars/example.png"></img>
                                            </div>
                                            <div class="person">
                                                               <h3 class="name">${v.firstName} ${v.lastName}</h3>
                                                               <h4 class="bio-item">Gender:</h4>
                                                               <p class="item-content">${v.gender}</p>
                                                               <h4 class="bio-item">Age:</h4>
                                                               <p class="item-content">${v.age}</p>
                                                               <h4 class="bio-item">Current Country of Residence:</h4>
                                                               <p class="item-content">${v.country}</p>
                                                               <h4 class="bio-item">Job:</h4>
                                                               <p class="item-content">${v.job}</p>
                                              </div>
                                              <div class="bio">
                                                               <h4 class="bio-item">Bio:</h4>
                                                               <p class="item-content">${v.bio}</p>
                                                                          </div>
                                              		         </div>`;
        })
    });
    //console.log(people)
});
//console.log(people)
              //              snapshot.forEach(function(d) {
              //                  var v = d.val();
              //                  peopleList.innerHTML += `<div style="margin-bottom: 7em">
              //                                                 <h3 class="card-header">${v.firstName} ${v.lastName}</h3>
              //                                                 <h4>Gender:</h4>
              //                                                 <p>${v.gender}</p>
              //                                                 <h4>Age:</h4>
              //                                                 <p>${v.age}</p>
              //                                                 <h4>Current Country of Residence:</h4>
              //                                                 <p>${v.country}</p>
              //                                                 <h4>Job:</h4>
              //                                                 <p>${v.job}</p>
              //                                                 <h4>Bio:</h4>
              //                                                 <p>${v.bio}</p>
              //                                		         </div>`;
              //                  console.log(d.val());
              //              });