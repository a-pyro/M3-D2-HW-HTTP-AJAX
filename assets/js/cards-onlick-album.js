// jsEntryPoint.addEventListener('click', getCardInfo);

function getCardsInfo(e) {
  const card = e.target.closest('.card-custom');
  // from the card tkae the id => is in the spa
  // card.querySelector('span')
  // query id = sspan.id
  // const queryID = card.getelebyid()
  //`https://striveschool-api.herokuapp.com/api/deezer/album/${queryId}`
  //needd to make a fetch request for the album with that id
  const title = card.querySelector('.card-title-custom').innerText;
  const img = card.querySelector('img');
  const url = img.src;
  console.log(title);
  console.log(url);

  showAlbumPage(url, title);
}
