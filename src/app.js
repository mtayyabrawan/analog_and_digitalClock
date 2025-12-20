const _userClock = document.querySelector("#user-clock>.analog-clock");

const mili = updateUserClock();

setInterval(() => {
  updateUserClock();
}, 1000 - mili);

function updateUserClock() {
  const date = new Date(),
    hrs = date.getHours(),
    mins = date.getMinutes(),
    sec = date.getSeconds(),
    mili = date.getMilliseconds();
  _userClock.style.setProperty("--hrs-angle", `${30 * hrs + mins / 2}deg`);
  _userClock.style.setProperty("--mins-angle", `${6 * mins}deg`);
  _userClock.style.setProperty("--sec-angle", `${6 * sec}deg`);
  return mili;
}
