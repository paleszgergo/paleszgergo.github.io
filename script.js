let data0 = {
    photo: 'images/1.jpg',
    photoTitle: 'Fekvő vörös cica',
    photoDescription: 'Sokszor fekszenek a cicák, érdekes fejet vágva'
  };

  let data1 = {
    photo: 'images/2.jpg',
    photoTitle: 'Macska az űrben',
    photoDescription: 'Az űrkutatás történetének első macskáját 1963. október 18-án egy Véronique AGI szuborbitális rakétával lőtte föl az űrbe a Repülőorvosi Oktatási és Kutatóközpont'
  };
  
  let data2 = {
    photo: 'images/3.jpg',
    photoTitle: 'Iromba cica',
    photoDescription: 'A macskának számos fajtája és színváltozata létezik.'
  };

  let data3 = {
    photo: 'images/4.jpg',
    photoTitle: 'Akcióhős',
    photoDescription: 'Csupasz és farok nélküli változatait is kitenyésztették.'
  };

  let data4 = {
    photo: 'images/5.jpg',
    photoTitle: 'Kókadt fülű',
    photoDescription: 'A macskák több mint százféle hangjel és testbeszéd segítségével kommunikálnak,'
  };

  let data5 = {
    photo: 'images/6.jpg',
    photoTitle: 'Gonosz',
    photoDescription: 'mint például nyávogás („miaú”), dorombolás, bújás, fújás, morgás, perregés.'
  };

  let data6 = {
    photo: 'images/7.jpg',
    photoTitle: 'Játékos',
    photoDescription: 'Nagyon szeretnek játszani, kitűnő reflexeiknek köszönhetőek sikeresek, akármilyen gyors is legyen a kinézett bogár, pillangó.'
  };

  let data7 = {
    photo: 'images/8.jpg',
    photoTitle: 'Bűnbánó',
    photoDescription: 'Érzik mikor tettek rosszat, ilyenkor félnek és elbnújnak.'
  };

  let currentPhoto = 0;
  let imagesData = [data0, data1, data2, data3, data4, data5, data6, data7];


  let loadPhoto = (CurrentPhoto) => {
    $('#photo').attr('src', imagesData[CurrentPhoto].photo);
    $('#photoTitle').text(imagesData[currentPhoto].photoTitle);
    $('#photoDescription').text(imagesData[currentPhoto].photoDescription);
  }

  loadPhoto(currentPhoto);

$('.arrow-right').click(() => {
  if(currentPhoto < 7) { 
    currentPhoto++; 
  }
  loadPhoto(currentPhoto);
});

$('.arrow-left').click(() => {
  if(currentPhoto > 0) { 
    currentPhoto--; 
  }
  loadPhoto(currentPhoto);
});

let data = [data0, data1, data2, data3, data4, data5, data6, data7];

data.forEach((item, index) => {
  $('#thumbnails1').append('<img class="thumb" src="' + item.photo + '">');
  $('.thumb').click((event) => {
    let indexClicked = $('#photo').attr('src', item.photo);
                       $('#photoTitle').text(item.photoTitle);
                       $('#photoDescription').text(item.photoDescription);
        // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    $('#photo').attr('src', data.photo[indexClicked]);
  });
});

