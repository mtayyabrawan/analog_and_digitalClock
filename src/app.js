const _userClock = document.querySelector("#user-clock>.analog-clock");

function userTick() {
  const mili = updateUserClock();
  const delay = 1000 - mili;
  setTimeout(userTick, delay);
}

userTick();

function updateUserClock() {
  const date = new Date(),
    hrs = date.getHours(),
    mins = date.getMinutes(),
    sec = date.getSeconds(),
    mili = date.getMilliseconds();
  _userClock.style.setProperty(
    "--hrs-angle",
    `${30 * (hrs % 12) + mins * 0.5 + sec * (0.5 / 60)}deg`
  );
  _userClock.style.setProperty("--mins-angle", `${6 * mins + sec * 0.1}deg`);
  _userClock.style.setProperty("--sec-angle", `${6 * sec}deg`);
  return mili;
}
