/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/videoPlayer.js":
/*!**************************************!*\
  !*** ./src/client/js/videoPlayer.js ***!
  \**************************************/
/***/ (() => {

eval("var video = document.querySelector(\"video\");\nvar playBtn = document.getElementById(\"play\");\nvar playBtnIcon = playBtn.querySelector(\"i\");\nvar mutebtn = document.getElementById(\"mute\");\nvar muteBtnIcon = document.querySelector(\"i\");\nvar volumeRange = document.getElementById(\"volume\");\nvar currentTime = document.getElementById(\"currentTime\");\nvar totalTime = document.getElementById(\"totalTime\");\nvar timeline = document.getElementById(\"timeline\");\nvar videoControls = document.getElementById(\"videoControls\");\nvar fullScreenBtn = document.getElementById(\"fullScreen\");\nvar fullScreenIcon = fullScreenBtn.querySelector(\"i\");\nvar videoContainer = document.getElementById(\"videoContainer\");\nvar controlsMovementTimeout = null;\nvar controlsTimeout = null;\nvar volumeValue = 0.5;\nvideo.volume = volumeValue;\nvar handlePlayClick = function handlePlayClick(e) {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n  playBtnIcon.classList = video.paused ? \"fas fa-play\" : \"fas fa-pause\";\n};\nvar handleMuteClick = function handleMuteClick(e) {\n  if (video.muted) {\n    video.muted = false;\n  } else {\n    video.muted = true;\n  }\n  muteBtnIcon.classList = video.muted ? \"fas fa-volume-mute\" : \"fas fa-volume-up\";\n  volumeRange.value = video.muted ? 0 : volumeValue;\n};\nvar handleVolumeChange = function handleVolumeChange(event) {\n  var value = event.target.value;\n  if (video.muted) {\n    video.muted = false;\n    mutebtn.innerText = \"Mute\";\n  }\n  volumeValue = value;\n  video.volume = value;\n};\nvar formatTime = function formatTime(seconds) {\n  return new Date(seconds * 1000).toISOString().substring(11, 19);\n};\nvar handleLoadedMetadata = function handleLoadedMetadata() {\n  totalTime.innerText = formatTime(Math.floor(video.duration));\n  timeline.max = Math.floor(video.duration);\n};\nvar handleTimeUpdate = function handleTimeUpdate() {\n  currentTime.innerText = formatTime(Math.floor(video.currentTime));\n  timeline.value = Math.floor(video.currentTime);\n};\nvar handleTimelineChnage = function handleTimelineChnage(event) {\n  var value = event.target.value;\n  video.currentTime = value;\n};\nvar handleFullscreen = function handleFullscreen() {\n  var fullscreen = document.fullscreenElement;\n  if (fullscreen) {\n    document.exitFullscreen();\n    fullScreenIcon.classList = \"fas fa-expand\";\n  } else {\n    videoContainer.requestFullscreen();\n    fullScreenIcon.classList = \"fas fa-compress\";\n  }\n};\nvar hideControls = function hideControls() {\n  return videoControls.classList.remove(\"showing\");\n};\nvar handleMouseMove = function handleMouseMove() {\n  if (controlsTimeout) {\n    clearTimeout(controlsTimeout);\n    controlsTimeout = null;\n  }\n  if (controlsMovementTimeout) {\n    clearTimeout(controlsMovementTimeout);\n    controlsMovementTimeout = null;\n  }\n  videoControls.classList.add(\"showing\");\n  controlsMovementTimeout = setTimeout(hideControls, 3000);\n};\nvar handleMouseLeave = function handleMouseLeave() {\n  controlsTimeout = setTimeout(hideControls, 3000);\n};\nvar handleSpaceBar = function handleSpaceBar(event) {\n  if (event.key === \" \") {\n    handlePlayClick();\n  }\n};\nvar handleEnded = function handleEnded() {\n  var id = videoContainer.dataset.id;\n  fetch(\"/api/videos/\".concat(id, \"/view\"), {\n    method: \"POST\"\n  });\n};\nplayBtn.addEventListener(\"click\", handlePlayClick);\nmutebtn.addEventListener(\"click\", handleMuteClick);\nvolumeRange.addEventListener(\"input\", handleVolumeChange);\nvideo.addEventListener(\"loadedmetadata\", handleLoadedMetadata);\nvideo.addEventListener(\"timeupdate\", handleTimeUpdate);\ntimeline.addEventListener(\"input\", handleTimelineChnage);\nfullScreenBtn.addEventListener(\"click\", handleFullscreen);\nvideoContainer.addEventListener(\"mousemove\", handleMouseMove);\nvideoContainer.addEventListener(\"mouseleave\", handleMouseLeave);\ndocument.addEventListener(\"keydown\", handleSpaceBar);\nvideo.addEventListener(\"click\", handlePlayClick);\nvideo.addEventListener(\"ended\", handleEnded);\n\n//# sourceURL=webpack://wetube/./src/client/js/videoPlayer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/videoPlayer.js"]();
/******/ 	
/******/ })()
;