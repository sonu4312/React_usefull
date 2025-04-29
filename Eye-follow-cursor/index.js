const retina = document.querySelectorAll(".eye-retina");
// console.log(retina);
window.addEventListener("mousemove", (e) => {
  const { pageX, pageY } = e;
    // console.log("(X,Y): ", pageX, pageY);
  const { innerHeight, innerWidth } = window;
  //   console.log("w,h: ", innerWidth, innerHeight);

  let left = (pageX / innerWidth) * 100;
  let top = (pageY / innerHeight) * 100;
//   console.log("left,top: ", left, top);

  left = left < 25 ? 25 : left;
  left = left > 75 ? 75 : left;

  top = top < 25 ? 25 : top;
  top = top > 75 ? 75 : top;

  retina.forEach((r) => {
    r.style.left = `${left > 45 && left < 55 ? 50 : left}%`;
    r.style.top = `${top > 45 && top < 55 ? 50 : top}%`;
  });
});
