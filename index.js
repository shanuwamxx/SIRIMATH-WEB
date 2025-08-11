<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>SIRIMATH</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(120deg, #0f2027, #203a43, #2c5364);
      color: white;
      overflow: hidden;
    }

    .loading-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0f2027;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      animation: fadeOut 1s ease-out forwards;
      animation-delay: 4.2s;
    }

    .progress-text {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 15px;
    }

    .progress-bar {
      width: 80%;
      height: 10px;
      background: rgba(255,255,255,0.2);
      border-radius: 20px;
      overflow: hidden;
    }

    .progress-bar-fill {
      width: 0%;
      height: 100%;
      background: linear-gradient(90deg, #56ccf2, #2f80ed);
      border-radius: 20px;
      transition: width 0.1s ease;
    }

    .container {
      opacity: 0;
      transition: opacity 1s ease, transform 1s ease;
      padding: 30px 20px;
      max-width: 420px;
      margin: 100px auto;
      text-align: center;
      transform: translateY(20px);
    }

    .container.show {
      opacity: 1;
      transform: translateY(0);
    }

    .profile-img {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #fff;
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.5);
      margin-bottom: 20px;
      transition: transform 0.3s ease;
    }

    .profile-img:hover {
      transform: scale(1.05);
    }

    h1 {
      font-size: 28px;
      font-weight: 600;
      margin: 10px 0 5px;
      color: #fff;
      text-shadow: 0 0 10px rgba(255,255,255,0.2);
    }

    p {
      font-size: 15px;
      color: #ccc;
      margin-bottom: 25px;
    }

    .link-btn {
      display: block;
      background: rgba(255, 255, 255, 0.05);
      margin: 14px auto;
      padding: 14px 20px;
      width: 100%;
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 16px;
      color: #fff;
      font-size: 16px;
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }

    .link-btn:hover {
      background: rgba(255,255,255,0.15);
      transform: scale(1.03);
      box-shadow: 0 6px 16px rgba(0,0,0,0.4);
    }

    .footer {
      font-size: 13px;
      color: #aaa;
      margin-top: 40px;
      text-shadow: 0 0 5px rgba(255,255,255,0.1);
    }

    @keyframes fadeOut {
      to {
        opacity: 0;
        visibility: hidden;
      }
    }

    @media (max-width: 480px) {
      .container {
        margin-top: 60px;
        padding: 20px 10px;
      }

      .profile-img {
        width: 100px;
        height: 100px;
      }

      h1 {
        font-size: 22px;
      }

      .link-btn {
        font-size: 15px;
        padding: 12px 16px;
      }
    }
  </style>
</head>
<body>

  <!-- 🔃 Loading Screen -->
  <div class="loading-screen" id="loadingScreen">
    <div class="progress-text" id="progressText">Loading 0%</div>
    <div class="progress-bar">
      <div class="progress-bar-fill" id="progressBar"></div>
    </div>
  </div>

  <!-- ✅ Actual Content -->
  <div class="container" id="mainContent">
    <img class="https://files.catbox.moe/ryquxk.jpg" src="https://files.catbox.moe/ryquxk.jpg" alt="https://files.catbox.moe/ryquxk.jpg">
    <h1>SIRIMATH</h1>
    <p>TEAM DTZ</p>

    <a class="link-btn" href="https://whatsapp.com/channel/0029Vb6UWAj89inlTdP4oW1j" target="_blank">😾 Whatsapp Channel 😾</a>
    <a class="link-btn" href="https://sirimath-md-new.onrender.com/#" target="_blank">💋 MAIN WEB 💋</a>
    <a class="link-btn" href="https://wa.me/94755409310?text=.HI_SIRIMATH'
" target="_blank">👨‍💻 Contact 👨‍💻</a>

<br>
<br>
<br>
    <div class="footer">
      © 2025 මම සිරිමත් බන් 💀
    </div>
  </div>

  <script>
    let progress = 0;
    const progressText = document.getElementById("progressText");
    const progressBar = document.getElementById("progressBar");
    const mainContent = document.getElementById("mainContent");

    const interval = setInterval(() => {
      progress++;
      progressText.textContent = `Loading ${progress}%`;
      progressBar.style.width = `${progress}%`;

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          mainContent.classList.add("show");
        }, 500);
      }
    }, 40); // 100% in ~1 seconds
  </script>

</body>
</html>