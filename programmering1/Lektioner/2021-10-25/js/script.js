
//Array
let albums = ['Eminem', 'TuPac', 'TheGame', 'Bob Marley', 'Ice Cube']

console.log(albums)
console.log(albums[1])

console.log('---------------------')
for (let i = 0; i < albums.length; i++) {
    console.log(albums[i])
}

console.log('---------------------')
for (const item of albums) {
    console.log(item)
}

console.log('---------------------')

//object

let eminem = {
    img:    'bild',
    name:   'Eminem',
    album:  'The Eminem Show',
    year:   '2002',
    price:  99,
}
console.log(eminem)
console.log(eminem.album)

let tupac = {
    img:    'bild',
    name:   'Tupac',
    album:  'All Eyes On Me',
    year:   '1996',
    price:  149,
}

console.log(tupac)
console.log(tupac.album)


class album {
    constructor(img, name, album, year, price) {
        this.img = img
        this.name = name
        this.album = album
        this.year = year
        this.price = price
    }
}

let eminem = new album('img', 'The Eminem Show', 'album','2002','99')
console.log(eminem)