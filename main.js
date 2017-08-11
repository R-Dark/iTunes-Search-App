let searchResults = document.querySelector('.searchResults')
let musicPlayer = document.querySelector('.musicPlayer')
let albumCover = document.querySelector('.albumCover')

document.querySelector(".searchButton").addEventListener("click", function(event) {
});

const theForm = document.querySelector(".searchBar")
theForm.addEventListener('submit', function(event) {
  event.preventDefault()
  searchResults.textContent = ""
  const searchText = document.querySelector('#searchInput').value

  fetch(`https://itunes.apple.com/search?term=${searchText}`)
    .then(function(r) {
      return r.json()
    })
    .then(function(json) {

      for (var i = 0; i < json.results.length; i++) {

        let itunesMusic = `
        <div class="artistListing">
          <h3 class="artistName">${json.results[i].artistName}</h3>
          <h4 class="collectionName">${json.results[i].collectionName}</h4>
          <h5 class="trackName">${json.results[i].trackName}</h5>
          <img class="albumCover" value='${json.results[i].previewUrl}' src="${json.results[i].artworkUrl100}">
          <audio class="musicPreview" controls="controls" src="${json.results[i].previewUrl}"></audio>
        </div>
        `

        searchResults.insertAdjacentHTML("beforeEnd", itunesMusic)

      }
    })

})


document.querySelector('.searchResults').addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "IMG") {
      let audio = document.querySelector('.musicPlayer')
      audio.src = e.target.getAttribute('value')
    }
})




/*
  Here is a rough idea for the steps you could take:
*/
// searchResults.innerHTML = itunesMusic
// <img src="${json.results[i].artworkUrl30}">
// <a href="${json.results[i].collectionViewUrl}"<img src="${json.results[i].artworkUrl30}"/></a>
// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
