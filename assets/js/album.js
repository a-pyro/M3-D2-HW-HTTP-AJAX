function showAlbumPage({
  cover_medium,
  title,
  artist: { name },
  release_date,
  tracks: { data: trackList },
}) {
  console.log(trackList);
  jsEntryPoint.innerHTML = `
          <div class="container mt-4 animate__animated animate__faster" style="background-color: #131313;">
            <div class="row">
              <div class="col-lg-4 col-md-12 font-weight-light" style="border: black;">
                <div class="" style="border: black;" >
                  <img src="${cover_medium}" class="card-img-top" alt="...">
                  <div class="card-body text-center text-light" style="background-color: #131313;">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="text-muted" style="font-size: 13px;">${name}</h6>
                    <a href="#" class="btn btn-success rounded-pill btn-block mt-4 mb-2">Play</a>
                    <div class="card-text">
                      <h6 class="text-light text-center text-muted mb-4">${
                        release_date.split('-')[0]
                      } - ${trackList.length} SONGS</h6>
                      <span class="text-light text-muted"> <i class="fas fa-heart"></i></span>
            
                    </div>
                  </div>
                </div>
              
              </div>
              <div class="col-lg-8">
                  <table class="table table-borderless text-light" style="font-size: 14px;">
                    <tbody>
                      ${trackList.reduce(
                        (acc, cv) => acc + TableRowComponent(cv),
                        ''
                      )}
                    </tbody>
              </div>
            </div>
          </div>
      

  `;
  const container = document.querySelector(
    '.container.mt-4.animate__animated.animate__faster'
  );
  container.classList.remove('animate__fadeInDown');
  container.classList.add('animate__fadeInDown');
  const playBtns = container.querySelectorAll('.fa-play');
  console.log(playBtns);
}

function TableRowComponent({
  title,
  artist: { name: artistName },
  duration,
  preview,
}) {
  return `
    <tr>
      <th scope="row" data-audio="${preview}"><i class="fas fa-play"></i><i class="fas fa-pause d-none"></i></th>
      <td class="album-pagne-song-title"> ${title} <br> <h6 style="font-size: 10px;" class="text-muted">${artistName}</h6></td>
      <td>${
        duration < 60
          ? duration + 's'
          : (duration / 60).toFixed(0) + '.' + (duration % 60) + ' min'
      }</td>
    </tr>
  `;
}
