import images from '../data/images.js';
import filteredImages from './filtered-images.js';
import loadFilter from './load-filter.js';
import loadImages from './load-images.js';

loadImages(images);

loadFilter(filter => {
    const filtered = filteredImages(images, filter);
    loadImages(filtered);
});