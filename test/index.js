var path = require('path'),
    loc = require('../index.js');

var quadrant = new loc.Quadrant({
    filename: path.join(__dirname, './N47W123.hgt')
});

quadrant.read(47.234, -122.2340, function(err, height) {
    console.log(err);
    console.log(height);
});

console.log('A 3" SRTM file has file size ' + quadrant._fileSize());
console.log('A point near the upper left corner (47.9999, -122.9999) is in the first cell at the beginning of the file, offset ' + quadrant._getOffset(47.9999, -122.9999));
console.log('A point near the lower right corner (47.0001, -122.0001) is in the last cell at the last two bytes of the file, offset ' + quadrant._getOffset(47.0001, -122.0001));

quadrant.load(function(err, matrix) {
    console.log(matrix.length);
    console.log(matrix[matrix.length - 1].length)
});

var a = new loc.GraduatedArray(),
    b = new loc.GraduatedArray(),
    c = new loc.GraduatedMatrix();

a.push(0); a.push(1);
b.push(0); b.push(1);
c.push(a); c.push(b);

console.log(c);

console.log(c.get(1,.5));

console.log(quadrant);

quadrant.each(function(err, lat, long, el) {
    console.log(lat, long, el);
});
