inputField.addEventListener('keyup', search);
async function search(e) {
  if (e.keyCode === 13) {
    // Cancel the default action, if needed
    e.preventDefault();
    const queryArtist = inputField.value.toLowerCase();
    console.log(queryArtist);
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${queryArtist}`
    );
    const data = await response.json();
    const { data: dataArray } = data;
    const artistName = dataArray[0].artist.name;
    const artistPic = dataArray[0].artist.picture_medium;
    const artistPicBig = dataArray[0].artist.picture_xl;
    const artistPicSmall = dataArray[0].artist.picture_small;

    console.log(dataArray);
    console.log(artistName);

    const uniqueAlbums = dataArray
      .map((element) => element.album)
      .reduce((acc, cv) => {
        if (acc.some((el) => el.id === cv.id)) {
          return acc;
        } else {
          acc.push(cv);
          return acc;
        }
      }, []);

    const tracks = dataArray.reduce((acc, cv) => {
      if (acc.some((el) => el.id === cv.id)) {
        return acc;
      } else {
        acc.push(cv);
        return acc;
      }
    }, []);

    const top5tracks = tracks.slice(0, 5);
    console.log('tracklist', top5tracks);
    jsEntryPoint.innerHTML = `
    <div class="container-fluid p-3 vh-100" style="cursor: pointer">
      <div class="row m-1 text-white my-border-light">
        <div class="col-12 col-lg-3 h-100 animate__animated animate__faster animate__fadeInDown">
          <img
            src="${artistPic}"
            alt="img-card-artist"
            class="img-fluid w-100 alicia-keys"
          />
        </div>

        <div class="col-12 col-lg-12 mt-3 animate__animated animate__faster animate__fadeInUp">
          <div class="row no-gutters w-100">
            <div class="col-12">
              <h5 class="card-title mb-0">${artistName}</h5>
            </div>
            <div class="col-12">
              <p class="text-white-50 mb-0">806.705 monthly listeners</p>
            </div>
            <div class="col-12">
              <p class="card-text">
                <small class="text-muted ">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
    `;

    const img = document.querySelector('.alicia-keys');
    img.addEventListener(
      'click',
      showArtistPage(
        artistName,
        artistPicBig,
        top5tracks,
        artistPicSmall,
        uniqueAlbums
      )
    );
  }
}
