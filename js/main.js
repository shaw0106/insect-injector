// Create your variable here, name it `insects`
var peeps = [
  {
    name: 'Mercury Man',
    email: 'theman@mercury.com',
    tel: '+05551234',
    loc: [46001200, 69816900]
  },
  {
    name: 'Venus Venturer',
    email: 'neus@theadventure.com',
    tel: '+1551234',
    loc: [107477000, 108939000]
  },
  {
    name: 'Jupiter Juggernaut',
    email: 'thejugger@jupiter.com',
    tel: '+5551234',
    loc: [107477000, 108939000]
  },
  {
    name: 'Manic Mars',
    email: 'manic@mars.com',
    tel: '+5541234',
    loc: [107200000, 108939000]
  }
];

// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var writeInsects = function (bugs) {
  document.write('<h1>Insects</h1>');

  document.write('<ol>');

  bugs.forEach(function (bug) {
    document.write('<li>');
    document.write('<h2>' + bug.name + '</h2>');
    document.write('<img src="images/' + bug.img + '" alt="">');
    document.write('<dl>');
    document.write('<dt>Family</dt>');
    document.write('<dd><i>' + bug.family + '</i></dd>');
    document.write('<dt>Size</dt>');
    document.write('<dd>' + bug.size[0] + '–' + bug.size[1] + ' mm</dd>');
    document.write('<dt>Eats</dt>');

    document.write('<dd>');

    if (bug.food.eatsInsects) {
      document.write('Insects');
    }

    if (bug.food.eatsDung) {
      document.write('Dung');
    }

    if (bug.food.eatsPlants) {
      document.write('Plants');
    }

    document.write('</dd>');

    document.write('</dl>');
    document.write('</li>');
  });

  document.write('</ol>');
};

writeInsects(insects);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
