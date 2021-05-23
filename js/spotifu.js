function playPlayList() {
    let albumSectionA = document.querySelector('#album-a-section');
    let albumSectionB = document.querySelector('#album-b-section');
    let playListSection = document.querySelector('#playlist-section');
    let mainSection = document.querySelector('.layout-main');
    let albumDetailSection = document.querySelector('.albumDetail');

    albumSectionA.classList.remove('d-none');
    playListSection.classList.add('d-none');
    albumDetailSection.classList.remove('d-none');
    mainSection.classList.add('with-background');
}

function playAlbum() {
    let albumSectionA = document.querySelector('#album-a-section');
    let albumSectionB = document.querySelector('#album-b-section');
    let mainSection = document.querySelector('.layout-main');

    albumSectionA.classList.add('d-none');
    albumSectionB.classList.remove('d-none');
    mainSection.classList.remove('with-background');
}

function giveLike(song) {
    let record = song;
    let isNone = record.classList.contains('giveLikeIt');

    if (isNone) {
        record.classList.remove('giveLikeIt');
    } else {
        record.classList.add('giveLikeIt');

    }
}

function playSong(song) {
    let record = song.parentNode.parentNode;
    let songList = document.querySelectorAll('.songList-song');

    for(var i=0; i<songList.length; i++)
    {
        songList[i].classList.remove('is-selected');
    }

    record.classList.add('is-selected');
}

function focusSearch() {
    let iconSearch = document.querySelector('.filterSong').querySelector('.icon-search');
    console.log(iconSearch);
    iconSearch.classList.add('c-white');
}

function blurSearch() {
    let iconSearch = document.querySelector('.filterSong').querySelector('.icon-search');
    console.log(iconSearch);
    iconSearch.classList.remove('c-white');
}