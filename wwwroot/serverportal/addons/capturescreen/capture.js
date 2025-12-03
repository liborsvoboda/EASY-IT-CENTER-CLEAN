

window.EicJSscript = {
	 mediaRecorder : null, //Media Recorder
	 videoRecBlob : [], //Recorder Blob
	 videoCaptureStream: null, //Recording Stream
	 videoMimeType : "video/mp4",
	 imageMimeType : "image/png",  
	 capturedVideo: null,  
	 capturedImage: "ImagePreview",
	 elVideoCameraControl: "VideoCameraButton",
	 elVideoScreenControl: "VideoScreenButton",
	 elVideoPlayer: "VideoPlayer", 
	 elImageControl: "ImageButton",
	 EICconsole: "", 
	 videoCaptureOpt : {
		video: { displaySurface: "browser" }, // "monitor","browser"
		audio: { suppressLocalAudioPlayback: false },
		preferCurrentTab: false,
		systemAudio: "include",
		selfBrowserSurface: "exclude",
		surfaceSwitching: "include",
		monitorTypeSurfaces: "include"
		//, cursor: 'always'		
	}
};


//Start Capturing Video
if(!navigator.getDisplayMedia && !navigator.mediaDevices.getDisplayMedia) {
    var error = 'Your browser does NOT supports getDisplayMedia API.';
    EicJSscript.EICconsole = error + "\r\n" + EicJSscript.EICconsole ;
    document.getElementById(EicJSscript.elVideoCameraControl).style.display = 'none';
	document.getElementById(EicJSscript.elVideoScreenControl).style.display = 'none';
	document.getElementById(EicJSscript.elImageControl).style.display = 'none';
}


window.EicJSscript.CaptureCameraToVideo = async function() {
	let tmpVideoCtrl = document.getElementById(EicJSscript.elVideoCameraControl);
	if (tmpVideoCtrl.value == "start" || EicJSscript.mediaRecorder == null){
		tmpVideoCtrl.value =  "stop";
		tmpVideoCtrl.innerHTML = tmpVideoCtrl.innerHTML.replace("Start","Stop");
		try {
			const stream = await navigator.mediaDevices.getUserMedia(EicJSscript.videoCaptureOpt);
			let tmpVideoPlayer = document.getElementById(EicJSscript.elVideoPlayer);
			tmpVideoPlayer.style.display = "inline";
			tmpVideoPlayer.src = "";
			tmpVideoPlayer.srcObject = stream;
			tmpVideoPlayer.play;
			EicJSscript.HandleStreamSuccess(stream);
		} catch (e) { EicJSscript.EICconsole = 'navigator.getUserMedia error: ' + e + "\r\n" + EicJSscript.EICconsole; }
	} else{ 
		EicJSscript.mediaRecorder.stop();
		let tracks = EicJSscript.videoCaptureStream.getTracks();
		tracks.forEach(track => {track.stop();});
	}
}

window.EicJSscript.CaptureScreenToVideo = async function() {
	let tmpVideoCtrl = document.getElementById(EicJSscript.elVideoScreenControl);
	if (tmpVideoCtrl.value == "start" || EicJSscript.mediaRecorder == null){
		tmpVideoCtrl.value =  "stop";
		tmpVideoCtrl.innerHTML = tmpVideoCtrl.innerHTML.replace("Start","Stop");
		try {
			const stream = await navigator.mediaDevices.getDisplayMedia(EicJSscript.videoCaptureOpt);
			let tmpVideoPlayer = document.getElementById(EicJSscript.elVideoPlayer);
			tmpVideoPlayer.style.display = "inline";
			tmpVideoPlayer.src = "";
			tmpVideoPlayer.srcObject = stream;
			tmpVideoPlayer.play;
			EicJSscript.HandleStreamSuccess(stream);
		} catch (e) { EicJSscript.EICconsole = 'navigator.getUserMedia error: ' + e + "\r\n" + EicJSscript.EICconsole; }
	} else{ 
		EicJSscript.mediaRecorder.stop();
		let tracks = EicJSscript.videoCaptureStream.getTracks();
		tracks.forEach(track => {track.stop();});
	}
}


window.EicJSscript.HandleDataAvailable = function (event) {
	if (event.data && event.data.size > 0) {
		EicJSscript.videoRecBlob.push(event.data);
		EicJSscript.capturedVideo = new Blob(EicJSscript.videoRecBlob, { type: EicJSscript.videoMimeType });
	}
}


window.EicJSscript.HandleStreamSuccess = function(stream) {
	EicJSscript.videoCaptureStream= stream;
	try {
		let options = EicJSscript.videoMimeType;
		EicJSscript.mediaRecorder = new MediaRecorder(EicJSscript.videoCaptureStream, { options });
	} catch (e) {
		EicJSscript.EICconsole = 'Exception while creating MediaRecorder: ' + e + "\r\n" + EicJSscript.EICconsole;
		return;
	}
	EicJSscript.mediaRecorder.ondataavailable = EicJSscript.HandleDataAvailable;
	EicJSscript.mediaRecorder.start();
}



window.EicJSscript.DownloadCapturedVideo = function(){
	const EICdownloadUrl = window.URL.createObjectURL(EicJSscript.capturedVideo);
	const a = document.createElement('a');
	a.style.display = 'none'; a.href = EICdownloadUrl;
	a.download = a.mimeType = EicJSscript.videoMimeType;
	document.body.appendChild(a);a.click();
	setTimeout(() => {document.body.removeChild(a);window.URL.revokeObjectURL(EICdownloadUrl);}, 100);
}


window.EicJSscript.DrawCaptureImage = function (video) {
	let EICtmpCanvas = document.createElement("canvas");
	video.width = EICtmpCanvas.width = video.videoWidth;
	video.height = EICtmpCanvas.height = video.videoHeight;
	EICtmpCanvas.getContext("2d").drawImage(video, 0, 0);
	video.srcObject.getTracks().forEach(track => track.stop());
	video.srcObject = null;
	return EICtmpCanvas;
}


//Start Capturing Screen Image
window.EicJSscript.CaptureToCanvas = async function () {
	let EICtmpStream = await navigator.mediaDevices.getDisplayMedia({video: true});
	let EICtmpVideo = document.createElement("video");
	EICtmpVideo.srcObject = EICtmpStream;
	EICtmpVideo.play();
	
	return new Promise(resolve => {
		EICtmpVideo.addEventListener("canplay", e => {
			let EICtmpCanvas = EicJSscript.DrawCaptureImage(EICtmpVideo);
			resolve(EICtmpCanvas);
		}, {once:true});
	});
}


window.EicJSscript.CaptureToImage = async function() {
	setTimeout(async () => {
		let EICvideoCanvas = await EicJSscript.CaptureToCanvas();
		localStorage.setItem(EicJSscript.capturedImage, EICvideoCanvas.toDataURL("image/png"));
		document.getElementById(EicJSscript.capturedImage).src = localStorage.getItem(EicJSscript.capturedImage,null);
		document.getElementById(EicJSscript.elVideoPlayer).style.display = "none";
		document.getElementById(EicJSscript.capturedImage).style.display = "inline";
	}, 500);
}


window.EicJSscript.DownloadcapturedImage= function () {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = localStorage.getItem(EicJSscript.capturedImage,null);
    a.download = "ScreenShot.png";
    document.body.appendChild(a);
    a.click();
	setTimeout(() => {
		document.body.removeChild(a);
	}, 100);
}


window.EicJSscript.ClearcapturedImage = function() {
   localStorage.setItem(EicJSscript.capturedImage,null);
}


//End Capturing Screen Image