import './html-equal.js';

const test = QUnit.test;
//this is to add a title on the test page, so we know what test it refers to
QUnit.module('image filters');

function filteredImages(images, filter) {
    return images.filter(image => {
        const keyword = image.keyword === filter.keyword;
        return keyword;
    });
}

test('filter images by keyword', assert => {
    //arrgh
    const images = [
        { title: 'a thing', keyword: 'banana', horns: 2 },
        { title: 'another thing', keyword: 'banana', horns: 5 },
        { title: 'a third thing', keyword: 'pineapple', horns: 1 }
    ];

    const filteredObject = { keyword: 'banana' };
    //act
    const filtered = filteredImages(images, filteredObject);

//assert
    assert.deepEqual(filtered, [
        { title: 'a thing', keyword: 'banana', horns: 2 },
        { title: 'another thing', keyword: 'banana', horns: 5 }
    ]);
});