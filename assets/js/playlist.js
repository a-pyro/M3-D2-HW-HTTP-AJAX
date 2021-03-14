const playlistEndpoint = `/api.deezer.com/playlist/`;
async function getPlaylists(e) {
  try {
    const card = e.target.closest('.card-custom');
    const { playlistId } = card.dataset;
    console.log(playlistId);

    const response = await fetch(`${proxy}${playlistEndpoint}${playlistId}`);
    const data = await response.json();
    console.log(data);
    renderPlaylist();
  } catch (error) {
    console.log(error);
  }
}

function renderPlaylist() {
  jsEntryPoint.innerHTML = `

  <section class="playlist-section">
    <div class="row">
    <table class="table table-borderless table-responsive-lg playlist-table">
      <thead>
        <tr>
          <th scope="col" class="text-secondary text-uppercase"></th>
          <th scope="col" class="text-secondary text-uppercase"></th>
          <th scope="col" class="text-secondary text-uppercase">Title</th>
          <th scope="col" class="text-secondary text-uppercase">Artit</th>
          <th scope="col" class="text-secondary text-uppercase">Album</th>
          <th scope="col" class="text-secondary text-uppercase"><i class="far fa-calendar-alt"></i></th>
          <th scope="col" class="text-secondary text-uppercase"><i class="far fa-clock "></i></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="far fa-play-circle fa-2x font-wight-normal playlistPlaySongBtn"></i></td>
          <td><i class="far fa-heart"></i></td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td><i class="far fa-play-circle fa-2x font-wight-normal"></i></td>
          <td><i class="far fa-heart"></i></td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td><i class="far fa-play-circle fa-2x font-wight-normal"></i></td>
          <td><i class="far fa-heart"></i></td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
  </table>
  </section>`;
}

function SongComponent() {}
