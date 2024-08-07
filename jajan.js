async function initializePlayer(id, url, drmKey, enableCustomConfig) {
    const video = document.getElementById(id);
    const ui = video['ui'];
    const controls = ui.getControls();
    const player = controls.getPlayer();    
    const config = {
        'controlPanelElements': ['time_and_duration','playback_rate','mute','spacer','captions','language' ,'quality','fullscreen'],
        'playbackRates': [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
        'seekBarColors': {base: 'rgba(255,255,255,.2)', buffered: 'rgba(255,255,255,.4)', played: 'rgb(255,0,0)'} };
    ui.configure(config);
    player.configure({drm: {clearKeys: drmKey}});
    window.player = player;
    window.ui = ui;
    player.addEventListener('error', onPlayerErrorEvent);
    controls.addEventListener('error', onUIErrorEvent);
   if (enableCustomConfig) {
        player.configure('manifest.dash.ignoreMinBufferTime', true);
        player.configure('streaming.rebufferingGoal', 3 /* second */);
   }
    try {
        await player.load(url);
        console.log('The video has now been loaded!');
    } catch (error) {
        onPlayerError(error);
    }
}

function onPlayerErrorEvent(errorEvent) {
    onPlayerError(errorEvent.detail);
}

function onPlayerError(error) {
    console.error('Error code', error.code, 'object', error);
}

function onUIErrorEvent(errorEvent) {
    onPlayerError(errorEvent.detail);
}

document.addEventListener('shaka-ui-loaded', function() {

// OLIMPIC
initializePlayer('opl1', 'https://ott.zapitv.com/live/eds_c2/eurosport_1_hd/dash_live_enc/eurosport_1_hd.mpd', {'237be8ca9383755e9f5784dd23f545eb': '15a723773c3b3cbce295c0aed0bc71c3'});
initializePlayer('opl2', 'https://ott.zapitv.com/live/eds_c2/eurosport_2_hd/dash_live_enc/eurosport_2_hd.mpd', {'15382879a9bcfa6f1a04a86d5b4324e9': '664241133368ab039dc1fb15206ba54b'});
initializePlayer('opl3', 'https://uniproxy.misty.workers.dev/https://mwmpos02.akamaized.net/out/v1/2f39077458694b06bdfb15ef16f55d45/manifest.mpd', {'4d2b7b722f564526800fd7cb058303b5': '2fed1593855c46873731379f3ab2d669'});
initializePlayer('opl4', 'https://uniproxy.misty.workers.dev/https://mwmpos04.akamaized.net/out/v1/4604623e7ff4462a962275664ccd8ee5/manifest.mpd', {'3b05bcb11f664736993fd5c7ddc0a0cf': 'd1f6705e028f81615221b6a7da2c91ae'});
initializePlayer('opl5', 'https://uniproxy.misty.workers.dev/https://mwmpos03.akamaized.net/out/v1/926637c1aba44cffa74adc74bf786816/manifest.mpd', {'60d21f9bd2bc4def81b7196a4f375bbd': '5abae0e3b5bd439cc387a526a0eba70d'});
initializePlayer('opl6', 'https://uniproxy.misty.workers.dev/https://mwmpos01.akamaized.net/out/v1/d43dbc5da1334ec088ed9eb5796eee7c/manifest.mpd', {'c3d1cabc9bac4bb7854f7a98abee21b2': '38b942982bfaa38cd031a656ab0c8f3c'});



// OLIMPIC
initializePlayer('opc1', 'https://uniproxy.misty.workers.dev/https://mwmpos03.akamaized.net/out/v1/7cfe6d15c127407588568af9f4574a21/manifest.mpd', {'d6b60d4db6f046ebb800b90bd9d08ad3': '6d1594f639ea5de668ba41a191d1c215'});
initializePlayer('opc2', 'https://uniproxy.misty.workers.dev/https://mwmpos01.akamaized.net/out/v1/5fa3fdc8720b4317b14df756e81b78c1/manifest.mpd', {'4d2b7b722f564526800fd7cb058303b5': '2fed1593855c46873731379f3ab2d669'});
initializePlayer('opc3', 'https://mwmpos02.akamaized.net/out/v1/2f39077458694b06bdfb15ef16f55d45/manifest.mpd', {'3b05bcb11f664736993fd5c7ddc0a0cf': 'd1f6705e028f81615221b6a7da2c91ae'});
initializePlayer('opc4', 'https://mwmpos04.akamaized.net/out/v1/4604623e7ff4462a962275664ccd8ee5/manifest.mpd', {'60d21f9bd2bc4def81b7196a4f375bbd': '5abae0e3b5bd439cc387a526a0eba70d'});
initializePlayer('opc5', 'https://mwmpos03.akamaized.net/out/v1/926637c1aba44cffa74adc74bf786816/manifest.mpd', {'c3d1cabc9bac4bb7854f7a98abee21b2': '38b942982bfaa38cd031a656ab0c8f3c'});
initializePlayer('opc6', 'https://mwmpos01.akamaized.net/out/v1/d43dbc5da1334ec088ed9eb5796eee7c/manifest.mpd', {'c63eb5f8b141426bbd533073b3417650': 'a1f328dd9ec6e9aba76c3575e16f2607'});
initializePlayer('opc7', 'https://mwmpos02.akamaized.net/out/v1/3b1dd652def14c0d88ad4d65b8a63103/manifest.mpd', {'6e359554fdae4c679b05cdbb12d60485': 'fda345af49cfe9787ffee91a6004a3d5'});
initializePlayer('opc8', 'https://mwmpos03.akamaized.net/out/v1/757f68f7d04b464d8ba433865b04adcd/manifest.mpd', {'98548f126bcb4505a47d40133ac7d0ed': '1446543ce3d62ef08d0c1eada2e7800a'});
initializePlayer('opc9', 'https://mwmpos02.akamaized.net/out/v1/c7968554079946679615c275e0e5d155/manifest.mpd', {'f743a53a4ccf48729dcf8f20e6c878b3': '1a2eeaf2193ec8a3dbd667450e4ff5d0'});
initializePlayer('opc10', 'https://mwmpos02.akamaized.net/out/v1/ff22f8d0966549a595ef1b32536a7044/manifest.mpd', {'817e95985f9341839d4fb082527950ec': 'd146f45ec3e5a37b096aeca94a8556d5'});
initializePlayer('opc11', 'https://mwmpos04.akamaized.net/out/v1/c51d077e70d44638a9cbf99968e1491d/manifest.mpd', {'b5f778f91da94ad3badf79571db6ac2f': 'ba1c5c23fdaa9e597f5086da1beb8efb'});
initializePlayer('opc12', 'https://mwmpos01.akamaized.net/out/v1/5c607c72d136423ab639168c101ad964/manifest.mpd', {'508fec8751214a0191b2b46c97f891bf': 'bd72f87ff911cae70bda9e30d3a06f7e'});
initializePlayer('opc13', 'https://mwmpos02.akamaized.net/out/v1/abd629d1565f47dab234e85f5ce2a6b7/manifest.mpd', {'b46e28db69004254aad034dd09c0deaa': '64eb1db1b8c1eda6fdaefd0617c72102'});
initializePlayer('opc14', 'https://mwmpos01.akamaized.net/out/v1/5f4a01d67c374c05987ef5175315ae32/manifest.mpd', {'fa1eff439479479fbed78ca86c92c40f': 'd7a862ecbe123f66239db75ada9c9706'});
initializePlayer('opc15', 'https://mwmpos01.akamaized.net/out/v1/d25d6ac6065747579cc0336ed2d540a8/manifest.mpd', {'9c6ec2cb50874ac3954e2d6aca99318c': 'd7a862ecbe123f66239db75ada9c9706'});
initializePlayer('opc16', 'https://mwmpos01.akamaized.net/out/v1/d25d6ac6065747579cc0336ed2d540a8/manifest.mpd', {'de1f8f8d772a4b69b5dfa0d110f3f274': 'c6359d29b7752725de20a7783a0dc9ea'});
initializePlayer('opc17', 'https://mwmpos04.akamaized.net/out/v1/dbd2ba3639db4d61b6543856e815b1cc/manifest.mpd', {'461097ca44b247d9b5f572eeb6794eb5': '4408fcf6fda093ca94debeff70b707d9'});
initializePlayer('opc18', 'https://mwmpos01.akamaized.net/out/v1/7600d156a41348ba807e0903f4182781/manifest.mpd', {'097c0736feed44889bb554cbd5cef7bb': '50e15a6476e3a6b9708a69dfbbf2eab6'});
initializePlayer('opc19', 'https://mwmpos02.akamaized.net/out/v1/7b8d435cc3ef421ea90f437143547133/manifest.mpd', {'e7c650ac72dcd0311411832a8271bb10': 'ea8fa43cc7102e481cd441c58b2ecb08'});

});
