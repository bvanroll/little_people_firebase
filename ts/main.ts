
let peopleListDiv: HTMLElement = document.querySelector("#people")!;

var pageSize: number = 100;
var pageNum: number = (1 * pageSize) - 1;

document.addEventListener('DOMContentLoaded', function() {
    try {
        // @ts-ignore
        let firebaseApp= firebase.app();
    } catch (e) {
        console.error(e);
    }
    // @ts-ignore
    const firebaseDb = firebase.database();
    var rootDatabaseReference = firebaseDb.ref('/').orderByChild("lastName").startAt(pageNum).limitToFirst(pageSize);
    rootDatabaseReference.once('value', function(databaseSnapshot: any[]) {
        console.debug(databaseSnapshot)

        databaseSnapshot.forEach(function(snapshotEntry) {
            console.debug(snapshotEntry)
            var snapshotEntryValue = snapshotEntry.val();
            console.debug(snapshotEntryValue)
            peopleListDiv.innerHTML += `<div  class="card">
                                           <div class="pfp">
                                            <img class="picture" alt="not yet" src="avatars/example.png"></img>
                                            </div>
                                            <div class="person">
                                                               <h3 class="name">${snapshotEntryValue.firstName} ${snapshotEntryValue.lastName}</h3>
                                                               <h4 class="bio-item">Gender:</h4>
                                                               <p class="item-content">${snapshotEntryValue.gender}</p>
                                                               <h4 class="bio-item">Age:</h4>
                                                               <p class="item-content">${snapshotEntryValue.age}</p>
                                                               <h4 class="bio-item">Current Country of Residence:</h4>
                                                               <p class="item-content">${snapshotEntryValue.country}</p>
                                                               <h4 class="bio-item">Job:</h4>
                                                               <p class="item-content">${snapshotEntryValue.job}</p>
                                              </div>
                                              <div class="bio">
                                                               <h4 class="bio-item">Bio:</h4>
                                                               <p class="item-content">${snapshotEntryValue.bio}</p>
                                                                          </div>
                                              		         </div>`;
        })
    })
})

