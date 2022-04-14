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
    hideScrollbar: true,
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
      "https://uc0ae5f506502e60f5f12625c313.dl.dropboxusercontent.com/cd/0/inline/BjUx7MNUBvyVDlDPezR2BTfWvNxoEm3O3TkRM_XGBWEYW79Inpzm0Y_GSKoXpqCPc4xt4j0YwAMZefSmoWx6tHTx9JH042qJ9zHTosNqhkJL0xo_P4v1izsVh4ifA66-FS4oZwZj7HUL4QIbEHY0BKOhGIJ8yEtPJlJUuNpEKEG6tw/file#"
    );
  });

  //change current button
  $(".nplayer--btn").on("click", function () {
    $(".current").removeClass("current");
    $(this).addClass("current");
  });

  plyApple.onclick = function () {
    waveForm.load(
      "https://uc0ae5f506502e60f5f12625c313.dl.dropboxusercontent.com/cd/0/inline/BjUx7MNUBvyVDlDPezR2BTfWvNxoEm3O3TkRM_XGBWEYW79Inpzm0Y_GSKoXpqCPc4xt4j0YwAMZefSmoWx6tHTx9JH042qJ9zHTosNqhkJL0xo_P4v1izsVh4ifA66-FS4oZwZj7HUL4QIbEHY0BKOhGIJ8yEtPJlJUuNpEKEG6tw/file#"
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
      "https://uc59b66a9b1c7c4e41548ade4cfc.dl.dropboxusercontent.com/cd/0/inline/BjVNKnRzqmu-dlKV5pR3oreb91hCzTSOTKkZxqQaf5diORTe6Sy7nnBY6sIZ9eDU6PUMpjigobfVLFTQqFvrk0t4PKy4WsexpGytLsOUk7uYk-plwkULT-hCrPV20aQXSYlq_ZznY1gjVpc0iEHchByQn8Vj985t8UcQih1oSbfCIw/file#"
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
      "https://uc797ea071a3620ad3fcda3b831e.dl.dropboxusercontent.com/cd/0/inline/BjXUbIiNtP9SYcFlXmMj9ku80mV5aV35CCQwmIECVJ6vq9xXQl4CgGWzWLUz2MkMGx7LLyqplmp7NWxtOAqqRE_vLpJa5PmEhcD_ooKCfg73-Xvs0MhSOhUXRd_oJw4AAkIsVsXcdJc0Ac4dqq3S9syAYnc4LsDl4hGBpYYk288jOg/file#"
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
    "https://uc0ae5f506502e60f5f12625c313.dl.dropboxusercontent.com/cd/0/inline/BjUx7MNUBvyVDlDPezR2BTfWvNxoEm3O3TkRM_XGBWEYW79Inpzm0Y_GSKoXpqCPc4xt4j0YwAMZefSmoWx6tHTx9JH042qJ9zHTosNqhkJL0xo_P4v1izsVh4ifA66-FS4oZwZj7HUL4QIbEHY0BKOhGIJ8yEtPJlJUuNpEKEG6tw/file#"
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
            "https://uc0ae5f506502e60f5f12625c313.dl.dropboxusercontent.com/cd/0/inline/BjUx7MNUBvyVDlDPezR2BTfWvNxoEm3O3TkRM_XGBWEYW79Inpzm0Y_GSKoXpqCPc4xt4j0YwAMZefSmoWx6tHTx9JH042qJ9zHTosNqhkJL0xo_P4v1izsVh4ifA66-FS4oZwZj7HUL4QIbEHY0BKOhGIJ8yEtPJlJUuNpEKEG6tw/file#"
          );
          waveForm.on("ready", function () {
            waveForm.play(time);
          });
        } else if (playing === 2) {
          waveForm.load(
            "https://uc731aea39a7ac21fcc385558060.dl.dropboxusercontent.com/cd/0/inline/BjWXuMHwPW5GI2nDqKWsTIWECeThhJiZBJwUqAe6fhyUzidDRGiPAG33TZmjBmrPztdBn201Y9rom_dtH646ic3qc1KJZtobo34J5wiMyRCBLRe_58E5CBZAL_hjGuXcsxHvERcLknQOFF-JyYERnvy33jMulWLH03qZCaAr2uL7Yw/file#"
          );
          waveForm.on("ready", function () {
            waveForm.play(time);
          });
        } else if (playing === 3) {
          waveForm.load(
            "https://ucb82bb2c45fad4a10dc38139719.dl.dropboxusercontent.com/cd/0/inline/BjWzvEoIIMMRNqF_GLBxtxbRnbhdxwEW-VHbbY3Ng0kn8_ew5YcfnzT99uHpqGAQ8gOUAyoGQgrC5Fjpk6vZGCUp9stmTTrn87b_lSbYi_-70xVrJDKP3ahl5Bt2-43iyIExKLFHJL0ZhEr3Nk7QY6FDK7rZGlYaZHV8vGYMb7XTDA/file#"
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
            "https://ucc9b39ce3d4f37e100585d4445c.dl.dropboxusercontent.com/cd/0/inline/BjWPAsySz-cDQ2yTbKkt9CM-AkOWJGvKYv0JH8TThkXH9c3aOiFR6QJEoM9shqQiq6rTzBTghAyZ5JXlfTyBiMazBbpYp6TFqoZ1ckzJJe2qqQvodjJ0pwZ7LEHy0tvoXZkz97a-ieEUtbmyRAc_2dD3V1wP6lAtu9HLNAxaHK1nLg/file#"
          );
          waveForm.on("ready", function () {
            waveForm.play(time);
          });
        } else if (playing === 2) {
          waveForm.load(
            "https://ucbec02a41932fffc83b59d8eed6.dl.dropboxusercontent.com/cd/0/inline/BjWBg0-A8otHRE8sZr4u11m6-k1-uFD2ylDtOFljNMt-V14F08-71lWt_492QVuwcuHKNQzk8LRAP44BKMqHd0yxrm5Uuk3ms80V9OemqJgY9jPyL9YEvxUvCoRPcnH2hkkeyI13mgmEE6Wg_m_bfmTiHVv1HGwWqdtpMcQHaU7HAA/file#"
          );
          waveForm.on("ready", function () {
            waveForm.play(time);
          });
        } else if (playing === 3) {
          waveForm.load(
            "https://uc3076a53605f8f376ed7bc4c996.dl.dropboxusercontent.com/cd/0/inline/BjV1nEcAkV2TQRyHL5UgieIl4Zaz9xRFybi21qXFD4q42OHMURmtLrd66IX17wkYB09QZVf8aju4n_FLs99MtSYgn8pffjXiZ-8FnxQFYGiOThAOetmNziwlMrAe1IzbZsqLRrurbmOoN9_uzPNdCrNvrdGd142w3FKx_f5qX9UTVw/file#"
          );
          waveForm.on("ready", function () {
            waveForm.play(time);
          });
        }
      }
    }
  });
});
