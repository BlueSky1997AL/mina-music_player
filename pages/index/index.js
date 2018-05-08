const app = getApp();

Page({
  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('myAudio');
  },
  data: {
    poster: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=ceb24a43df0735fa85fd46ebff3864d6/8644ebf81a4c510fbc530a426b59252dd52aa5d7.jpg',
    name: 'Time',
    author: 'MKJ',
    src: 'https://alsu-storage.b0.upaiyun.com/Time.mp3',
  },
  audioPlay: function () {
    this.audioCtx.play();
  },
  audioPause: function () {
    this.audioCtx.pause();
  },
  audio14: function () {
    this.audioCtx.seek(14);
  },
  audioStart: function () {
    this.audioCtx.seek(0);
  }
})