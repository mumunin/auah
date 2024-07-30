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
initializePlayer('opc1', 'https://mwmpos03.akamaized.net/out/v1/0484a3feb7684efb9fc80ec56d66d005/manifest.mpd', {'67617db114014f4c85793b3a23224839': '3029635a44a54dc78be8f740728a55f5'});
initializePlayer('opc2', 'https://mwmpos01.akamaized.net/out/v1/c9f101b58cec446096bcedbe379bbf2e/manifest.mpd', {'f9c25c77ec994a979453d826b0eda5be': 'd54c0d2c9873abcf9197bb82fd3e8a4a'});
initializePlayer('opc3', 'https://mwmpos02.akamaized.net/out/v1/5b52a13f709640b587bc825b4683fbd6/manifest.mpd', {'2115349ba4d44a6aa9e19eeaab13e79f': 'c7fb6eac174c53dafe3d25c7562c0e6b'});
initializePlayer('opc4', 'https://mwmpos04.akamaized.net/out/v1/1b7d7fe5d8224ec5b751f2d0d0ae3006/manifest.mpd', {'19d5aaa09468437db25426ae88d3f731': 'c6a9f2629abdfcce6e1e2bb19970dc86'});
initializePlayer('opc5', 'https://mwmpos03.akamaized.net/out/v1/d5536f0898994112a118290f25e5648b/manifest.mpd', {'f47b719efa4d4cd58e60815d8e9fec0e': '252d44b5ee7d17dcbfb7d4ff74d23c5e'});
initializePlayer('opc6', 'https://mwmpos01.akamaized.net/out/v1/ee3d338d368f453a9c4181d119599e05/manifest.mpd', {'af2dc6a1c9754ec7b0ff0377da872153': '7af660ca428760dfbe99e10047e0e2e4'});
initializePlayer('opc7', 'https://mwmpos03.akamaized.net/out/v1/847a8f82ffa74be392bd7771fcfe63c3/manifest.mpd', {'244d7d9e08a2487ea8045c5243c179ec': '741239729ef1bea894998cd480e82762'});
initializePlayer('opc8', 'https://mwmpos02.akamaized.net/out/v1/a48c8faa03494d3c9267a246624425a2/manifest.mpd', {'b335a051208440c78f882bfc88bb436f': '7ec283409853d2970df0c3dfbfb3509f'});
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
