export const convertImgs = (img) => {
  let img1 = img.replace("]", "").replace("[", "");
  let img2 = img1.split(",");
  img2 = img2.map((item) => item.replaceAll(`"`, ""));

  //console.log(img2)
  return img2;
};
