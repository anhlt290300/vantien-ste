const getImage = (image_path) => {
  const host = window.location.host;
  return `${host}//image//${image_path}`;
};

export { getImage };
