var Webflow = Webflow || [];
Webflow.push(function () {
  var plyApple = document.getElementById("apple");
  var plyHarmony = document.getElementById("harmony");
  var plyPhone = document.getElementById("phone");
  var duration = document.getElementById("duration--nplayer");
  var togglebtn = document.getElementById("checkbox_nplayer");
  var switchEnabled = false;
  var playing = 1;
  var waveForm = WaveSurfer.create({
    container: ".waveform-share--nplayer",
    barWidth: 2.5,
    barHeight: 1.5,
    barMinHeight: 3,
    barGap: 3,
    responsive: true,
    interact: false,
    progressColor: "#00fff6",
    cursorColor: "transparent",
    height: 28,
    barRadius: 2,
  });

  //functions jquery

  function toggleIcon(showPlay) {
    if (showPlay) {
      document.getElementsByClassName("play_icon--nplayer")[0].style.display =
        "block";
      document.getElementsByClassName("pause_icon--nplayer")[0].style.display =
        "none";
    } else {
      document.getElementsByClassName("play_icon--nplayer")[0].style.display =
        "none";
      document.getElementsByClassName("pause_icon--nplayer")[0].style.display =
        "block";
    }
  }

  function secondsToTime(e) {
    var h = Math.floor(e / 3600)
        .toString()
        .padStart(2, "0"),
      m = Math.floor((e % 3600) / 60)
        .toString()
        .padStart(2, "0"),
      s = Math.floor(e % 60)
        .toString()
        .padStart(2, "0");

    return m + ":" + s;
    //return `${h}:${m}:${s}`;
  }

  //on load
  $(window).on("load", function () {
    $(".apple-btn").addClass("current");
    $(".apple-img").addClass("current");
    $(".apple-title").addClass("current");
    waveForm.load(
      "https://uc17744491a50b9809900979ba18.dl.dropboxusercontent.com/cd/0/inline/BjVjpR2cY1pFoaNP1A4zpHadC-c1HKvRRn9COrw8USXM-JIk45DZLZN9nCbwsXvYow-K5afdh4nOACQYE-zHXzaUENulbRh3_yroFC14ryrvu4DMhlvENouourveyyId01BkncaN0h7uUoVZ5XKbRPbkvRcSv4pPQvJdMwdUDy4N9g/file#"
    );
  });

  //change current button
  $(".nplayer--btn").on("click", function () {
    $(".current").removeClass("current");
    $(this).addClass("current");
  });

  //apple button
  $(".apple-btn").on("click", function () {
    $(".apple-img").addClass("current");
    $(".apple-title").addClass("current");
  });

  //harmony button
  $(".harmony-btn").on("click", function () {
    $(".harmony-img").addClass("current");
    $(".harmony-title").addClass("current");
  });

  //phone-effect button
  $(".phone-effect-btn").on("click", function () {
    $(".phone-effect-img").addClass("current");
    $(".phone-effect-title").addClass("current");
  });

  plyApple.onclick = function () {
    waveForm.load(
      "https://uc17744491a50b9809900979ba18.dl.dropboxusercontent.com/cd/0/inline/BjVjpR2cY1pFoaNP1A4zpHadC-c1HKvRRn9COrw8USXM-JIk45DZLZN9nCbwsXvYow-K5afdh4nOACQYE-zHXzaUENulbRh3_yroFC14ryrvu4DMhlvENouourveyyId01BkncaN0h7uUoVZ5XKbRPbkvRcSv4pPQvJdMwdUDy4N9g/file#"
    );
    $(".control_play--nplayer").removeClass("control_disable");
    $(".checkbox--nplayer").removeClass("w--redirected-checked");
    waveForm.on("ready", function () {
      waveForm.stop();
      duration.innerHTML = secondsToTime(waveForm.getDuration().toFixed(2));
    });
    switchEnabled = false;
    playing = 1;
    toggleIcon(true);
    togglebtn.disabled = true;
  };

  plyHarmony.onclick = function () {
    waveForm.load(
      "https://uc91552616a4413b58faff2dbf12.dl.dropboxusercontent.com/cd/0/inline/BjWdakk45icro_Amnuo4ghnQP_rQIJ6imnST0NJq_a_UwAhLMqjS06PB7QE6UkPS6j8oRrwZdrWsgSsQ-LKUEpMs4LFEvoFsrHLluIB04rs9gkHc46BMl3Ki-_wAbsFKXpJ1w_2omJHvkhvV8U8Xh9r2RozsuF7SElMrgDAxm7kWLg/file#"
    );
    $(".control_play--nplayer").removeClass("control_disable");
    $(".checkbox--nplayer").removeClass("w--redirected-checked");
    waveForm.on("ready", function () {
      waveForm.stop();
      duration.innerHTML = secondsToTime(waveForm.getDuration().toFixed(2));
    });
    switchEnabled = false;
    playing = 2;
    toggleIcon(true);
    togglebtn.disabled = true;
  };

  plyPhone.onclick = function () {
    waveForm.load(
      "https://uc7827a9b3e6aa599093626e4d39.dl.dropboxusercontent.com/cd/0/inline/BjXlZeeATDc0b6-uzDyTqlnZrOwAAwNpq6O6TJka6RIlOHtBdUOmmnjk5teK4B69ZUHNxp1Tvu6rUrWRZ4aupTgcdop-trEoxWQDib4DUaWrSezO0nbPdl9gKicTT4qjQbAEZFqalnPVyppZI1SsMXxDj7WpOywSavAcD0lUg4uVAQ/file#"
    );
    $(".control_play--nplayer").removeClass("control_disable");
    $(".checkbox--nplayer").removeClass("w--redirected-checked");
    waveForm.on("ready", function () {
      waveForm.stop();
      duration.innerHTML = secondsToTime(waveForm.getDuration().toFixed(2));
    });
    switchEnabled = false;
    playing = 3;
    toggleIcon(true);
    togglebtn.disabled = true;
  };
  plyApple.click();

  var audioOne = new Audio(
    "https://uc29af9bb29daf04078cd93ec6e9.dl.dropboxusercontent.com/cd/0/inline/BjXnx8kgsAUgJB3zOjcavMY1pksEAvuH-Zno2kWIbD48cF1O1weVPBnq5G78_z2j1Lw5IEmS5CyffiVS-IjIvIs0rmdV9J545jLj7g8DPxVIl45dqQXykRFangca59stgxyW9nGAWqa-eIIsqB9341Aur0MeynLnYQh2tzEkVeITag/file#"
  );
  audioOne.muted = true;

  $(".control_play--nplayer").on("click", function () {
    if (waveForm.isPlaying()) {
      toggleIcon(true);
      togglebtn.disabled = true;
    } else {
      toggleIcon(false);
      togglebtn.disabled = false;
    }
    audioOne.play();
    waveForm.playPause();
    waveForm.on("finish", function () {
      waveForm.stop();
      togglebtn.disabled = true;
      toggleIcon(true);
    });
  });

  $("#checkbox_nplayer").on("click", function () {
    if (switchEnabled) {
      switchEnabled = false;
      var time = waveForm.getCurrentTime();
      if (time !== 0) {
        if (playing === 1) {
          waveForm.load(
            "https://uc17744491a50b9809900979ba18.dl.dropboxusercontent.com/cd/0/inline/BjVjpR2cY1pFoaNP1A4zpHadC-c1HKvRRn9COrw8USXM-JIk45DZLZN9nCbwsXvYow-K5afdh4nOACQYE-zHXzaUENulbRh3_yroFC14ryrvu4DMhlvENouourveyyId01BkncaN0h7uUoVZ5XKbRPbkvRcSv4pPQvJdMwdUDy4N9g/file#"
          );
          waveForm.on("ready", function () {
            waveForm.play(time);
          });
        } else if (playing === 2) {
          waveForm.load(
            "https://uc7827a9b3e6aa599093626e4d39.dl.dropboxusercontent.com/cd/0/inline/BjXlZeeATDc0b6-uzDyTqlnZrOwAAwNpq6O6TJka6RIlOHtBdUOmmnjk5teK4B69ZUHNxp1Tvu6rUrWRZ4aupTgcdop-trEoxWQDib4DUaWrSezO0nbPdl9gKicTT4qjQbAEZFqalnPVyppZI1SsMXxDj7WpOywSavAcD0lUg4uVAQ/file#"
          );
          waveForm.on("ready", function () {
            waveForm.play(time);
          });
        } else if (playing === 3) {
          waveForm.load(
            "https://uc7827a9b3e6aa599093626e4d39.dl.dropboxusercontent.com/cd/0/inline/BjXlZeeATDc0b6-uzDyTqlnZrOwAAwNpq6O6TJka6RIlOHtBdUOmmnjk5teK4B69ZUHNxp1Tvu6rUrWRZ4aupTgcdop-trEoxWQDib4DUaWrSezO0nbPdl9gKicTT4qjQbAEZFqalnPVyppZI1SsMXxDj7WpOywSavAcD0lUg4uVAQ/file#"
          );
          waveForm.on("ready", function () {
            waveForm.play(time);
          });
        }
      }
    } else if (!switchEnabled) {
      switchEnabled = true;
      var time = waveForm.getCurrentTime();
      console.log(time);
      if (time !== 0) {
        if (playing === 1) {
          waveForm.load(
            "https://uc37b763019a8272aa74b4d91c64.dl.dropboxusercontent.com/cd/0/inline/BjVKixrUYO5NApPAlJtpeubQ2a5PzhchJ0k8ucg5Cve-rp2Ll5f2q_y7uxjJSr16OTgftF4bzmIHfthIsaQhGYHbB_kiVlDollMhOFK_3vB_txqamfaY9JsNWzYIaUHmCOS1HzeVzp6bIpl2euJK3wdRWIbRT8klyIFkWvMHDNAHWA/file#"
          );
          waveForm.on("ready", function () {
            waveForm.play(time);
          });
        } else if (playing === 2) {
          waveForm.load(
            "https://ucc303324c8eff969c55c092e741.dl.dropboxusercontent.com/cd/0/inline/BjW49nHRphFv_kBC0ozC3YpXD6fQ8bZRbVg7yZQrK1DEzk-FgIyTPCOS46VtCUaqpJGNkIboJBb_P1OipI1LOwC6cXYAyDOwB8OaAtFPmf_Gak70--Rq1jtWD4J0bt6v51xMYDHCEEi5dPcIWJ-iynkoYeMRD5s1wwRE_Ubw5lYs8g/file#"
          );
          waveForm.on("ready", function () {
            waveForm.play(time);
          });
        } else if (playing === 3) {
          waveForm.load(
            "https://ucf7c2c0ac15fb1bcafb1833118a.dl.dropboxusercontent.com/cd/0/inline/BjU46ga71CzQ404zgWYsZYzSYPdnhFVNdUc-p2eI2hOJoLaFfgwK9ljeyfetHD_wYBG58MRTQDEF-dTaK152ZMDbdecXm2l6SjxddJD-9usp3pHFW1HacdZcMfh8xsPahE46oUvhmaOd81XemGkXl1aoMRQUFIhWqQsF8Q_wzQKDhg/file#"
          );
          waveForm.on("ready", function () {
            waveForm.play(time);
          });
        }
      }
    }
  });
});
