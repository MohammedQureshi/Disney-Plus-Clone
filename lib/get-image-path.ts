const getImagePath = (ImagePath?: string, fullSize?: boolean) => {
  return ImagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? 'original' : 'w500'}/${ImagePath}`
    : 'https://links.papareact.com/o8z';
};

export default getImagePath;
