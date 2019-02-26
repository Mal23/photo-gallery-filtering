import './html-equal.js';

const test = QUnit.test;

QUnit.module('image filters');

function filteredImages(images, filter) {
    return images.filter(image => {
        const keyword = !filter.keyword || image.keyword === filter.keyword;
        const horns = !filter.horns || image.horns >= filter.horns;
        return keyword && horns;
    });
}

const images = [
    { title: 'a thing', keyword: 'banana', horns: 2 },
    { title: 'another thing', keyword: 'banana', horns: 5 },
    { title: 'a third thing', keyword: 'pineapple', horns: 1 }
];

test('filter images by keyword', assert => {
    const filteredObject = { keyword: 'banana' };
    
    const filtered = filteredImages(images, filteredObject);

    assert.deepEqual(filtered, [
        { title: 'a thing', keyword: 'banana', horns: 2 },
        { title: 'another thing', keyword: 'banana', horns: 5 }
    ]);
});

test('filter images by number of horns and keyword', assert => {
    const filterHorns = { horns: 2 };
    
    const filtered = filteredImages(images, filterHorns);
    
    assert.deepEqual(filtered, [
        { title: 'a thing', keyword: 'banana', horns: 2 },
        { title: 'another thing', keyword: 'banana', horns: 5 }
    ]);
});