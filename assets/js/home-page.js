/* function renderHomePage(almubList, artistName) {
  jsEntryPoint.innerHTML += `
  <section class="cards-section mb-1 mb-md-5">
    <h4 class="section-name text-white font-weight-bold mb-2 display-5 pl-2 text-capitalize">${artistName}</h4>
    <div class="d-flex flex-md-wrap row-albums mb-1">
        ${almubList
          .map(
            (element) => `
             <div class="px-2 mb-3">
                <div class="card-custom shadow animate__animated animate__faster" data-album-id="${element.id}">
                  <div class="card-image-wrapper d-flex flex-column p-2">
                    <img src="${element.cover_medium}" class="img-fluid rounded shadow-lg" alt="" />
                    <a href="#" class="card-play-btn align-self-end "><i class="fas fa-play-circle "></i></a>
                  </div>
                  <div class="card-body-custom px-2">
                   
                    <h6 class="card-title-custom text-white text-truncate">${element.title}</h6>
                    <p class="card-text-custom text-muted">random text</p>
                  </div>
                </div>
              </div>
        `
          )
          .join('')}
    </div>
  </section>
  `;

  const cards = document.querySelectorAll('.card-custom');
  cards.forEach((card) => {
    card.addEventListener('click', getCardsInfo);
    card.classList.remove('animate__fadeInUp');
    card.classList.add('animate__fadeInUp');
  });
} */
function renderHomePage(
  {
    albums: { data: albumsData },
    artists: { data: artistsData },
    playlists: { data: playlistsData },
    podcasts: { data: podcastsData },
    tracks: { data: tracksData },
  },
  sectionsNames
) {
  jsEntryPoint.innerHTML += `
  <section class="cards-section mb-1 mb-md-5">

  
    <h4 class="section-name text-white font-weight-bold mb-2 display-5 pl-2 text-capitalize">${
      sectionsNames[0]
    }</h4>
    <div class="d-flex flex-md-wrap row-albums mb-1">
        ${albumsData.reduce((acc, cv) => acc + AlbumsComponent(cv), '')}
        </div>
<h4 class="section-name text-white font-weight-bold mb-2 display-5 pl-2 text-capitalize">${
    sectionsNames[1]
  }</h4>
    <div class="d-flex flex-md-wrap row-albums mb-1">
        ${artistsData.reduce((acc, cv) => acc + ArtistsComponent(cv), '')}

</div>
        <h4 class="section-name text-white font-weight-bold mb-2 display-5 pl-2 text-capitalize">${
          sectionsNames[2]
        }</h4>
    <div class="d-flex flex-md-wrap row-albums mb-1">
        ${playlistsData.reduce((acc, cv) => acc + PlaylistsComponent(cv), '')}

</div>
        <h4 class="section-name text-white font-weight-bold mb-2 display-5 pl-2 text-capitalize">${
          sectionsNames[3]
        }</h4>
    <div class="d-flex flex-md-wrap row-albums mb-1">
        ${podcastsData.reduce((acc, cv) => acc + PodcastsComponent(cv), '')}
</div>
      <h4 class="section-name text-white font-weight-bold mb-2 display-5 pl-2 text-capitalize">${
        sectionsNames[4]
      }</h4>
    <div class="d-flex flex-md-wrap row-albums mb-1">
        ${tracksData.reduce((acc, cv) => acc + TracksComponent(cv), '')}
    </div>
  </section>
  `;

  const cards = document.querySelectorAll('.card-custom');
  cards.forEach((card) => {
    card.addEventListener('click', getCardsInfo);
    card.classList.remove('animate__fadeInUp');
    card.classList.add('animate__fadeInUp');
  });
}

function AlbumsComponent(dataObj) {
  return `
              <div class="px-2 mb-3">
                <div class="card-custom shadow animate__animated animate__faster" data-album-id="${dataObj.id}">
                  <div class="card-image-wrapper d-flex flex-column p-2">
                    <img src="${dataObj.cover_medium}" class="img-fluid rounded shadow-lg" alt="" />
                    <a href="#" class="card-play-btn align-self-end "><i class="fas fa-play-circle "></i></a>
                  </div>
                  <div class="card-body-custom px-2">
                   
                    <h6 class="card-title-custom text-white text-truncate">${dataObj.title}</h6>
                    <p class="card-text-custom text-muted">random text</p>
                  </div>
                </div>
              </div>
 `;
}

function ArtistsComponent(dataObj) {
  return `
              <div class="px-2 mb-3">
                <div class="card-custom shadow animate__animated animate__faster" data-artist-id="${dataObj.id}">
                  <div class="card-image-wrapper d-flex flex-column p-2">
                    <img src="${dataObj.picture_medium}" class="img-fluid rounded shadow-lg" alt="" />
                    <a href="#" class="card-play-btn align-self-end "><i class="fas fa-play-circle "></i></a>
                  </div>
                  <div class="card-body-custom px-2">
                   
                    <h6 class="card-title-custom text-white text-truncate">${dataObj.name}</h6>
                    <p class="card-text-custom text-muted">random text</p>
                  </div>
                </div>
              </div>
 `;
}

function PlaylistsComponent(dataObj) {
  return `
              <div class="px-2 mb-3">
                <div class="card-custom shadow animate__animated animate__faster" data-playlist-id="${dataObj.id}">
                  <div class="card-image-wrapper d-flex flex-column p-2">
                    <img src="${dataObj.picture_medium}" class="img-fluid rounded shadow-lg" alt="" />
                    <a href="#" class="card-play-btn align-self-end "><i class="fas fa-play-circle "></i></a>
                  </div>
                  <div class="card-body-custom px-2">
                   
                    <h6 class="card-title-custom text-white text-truncate">${dataObj.title}</h6>
                    <p class="card-text-custom text-muted">random text</p>
                  </div>
                </div>
              </div>
 `;
}
function PodcastsComponent(dataObj) {
  return `
              <div class="px-2 mb-3">
                <div class="card-custom shadow animate__animated animate__faster" data-podcast-id="${dataObj.id}">
                  <div class="card-image-wrapper d-flex flex-column p-2">
                    <img src="${dataObj.picture_medium}" class="img-fluid rounded shadow-lg" alt="" />
                    <a href="#" class="card-play-btn align-self-end "><i class="fas fa-play-circle "></i></a>
                  </div>
                  <div class="card-body-custom px-2">
                   
                    <h6 class="card-title-custom text-white text-truncate">${dataObj.title}</h6>
                    <p class="card-text-custom text-muted">random text</p>
                  </div>
                </div>
              </div>
 `;
}
function TracksComponent(dataObj) {
  return `
              <div class="px-2 mb-3">
                <div class="card-custom shadow animate__animated animate__faster" data-track-id="${dataObj.id}"
                data-previewLink${dataObj.preview}>
                  <div class="card-image-wrapper d-flex flex-column p-2">
                    <img src="${dataObj.album.cover_medium}" class="img-fluid rounded shadow-lg" alt="" />
                    <a href="#" class="card-play-btn align-self-end "><i class="fas fa-play-circle "></i></a>
                  </div>
                  <div class="card-body-custom px-2">
                   
                    <h6 class="card-title-custom text-white text-truncate">${dataObj.title}</h6>
                    <p class="card-text-custom text-muted">${dataObj.artist.name}</p>
                  </div>
                </div>
              </div>
 `;
}
