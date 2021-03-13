// jsEntryPoint.addEventListener('click', getCardInfo);

async function getCardsInfo(e) {
  try {
    const card = e.target.closest('.card-custom');
    const { albumId } = card.dataset;
    console.log(albumId);

    const response = await fetch(`${albumEndPoint}${albumId}`);
    const data = await response.json();
    console.log(data);

    // showAlbumPage(url, title);
  } catch (error) {
    console.log(error);
  }
}
