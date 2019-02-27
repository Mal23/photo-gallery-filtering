function filteredImages(images, filter) {
    return images.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        console.log(hasKeyword);
        const hasHorns = !filter.horns || image.horns >= filter.horns;
        return hasKeyword && hasHorns;
    });
}

export default filteredImages;
