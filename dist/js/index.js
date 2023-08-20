// Simply Countdown
simplyCountdown(".simply-countdown", {
  year: 2025, // required
  month: 1, // required
  day: 1, // required
  hours: 8, // Default is 0 [0-23] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
});

//   Hamburger
const hamburger = document.querySelector('.navbar-toggler');
const stickyTop = document.querySelector('.sticky-top');

hamburger.addEventListener('click', function () {
  stivkyTop.style.overflow = 'visible';
});
