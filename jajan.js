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

    
//MATCH RUSIA*/
initializePlayer('match_football1', 'https://strm.yandex.ru/kal/match_football1_hd/manifest.mpd', {'5269ab07e6a6db7585324ae20542f191': 'dba0dccffba1b26f658ec85a616102e8'});


//SKYSPORTS ITALIA


initializePlayer('sky252it', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/32951/FHD/skysport252/master.mpd', {'0036c4797608fc64296d437bc6f8b790': '1689af84b23f514005f9bb854da7667f'});

initializePlayer('sky253it', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/32233/FHD/skysport253/master.mpd', {'00365b169a077daac5081277c3fd0c28': 'f68ab32a552e13509a8ee1c4d96204bc'});

initializePlayer('sky254it', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/31234/FHD/skysport254/master.mpd', {'00369c14c20b78aadb1ec0e3c0e74979': 'e768767e2c7238d8069887bb36aed7fa'});

initializePlayer('sky255it', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/32910/FHD/skysport255/master.mpd', {'0036b781a22ebb0c20c16ac27d5d1448':'f309b94acfda720bf1ed5741489f8967'});

initializePlayer('sky256it', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/31912/FHD/skysport256/master.mpd', {'00366f263859fc1cc82d2c4da6a66ef6':'754ae922d113c54349002cd9a88694a4'});

initializePlayer('sky257it', 'https://linear311-it-dash1-prd.selector.skycdn.it/016a/31775/FHD/skysport257/master.mpd', {'0036faeace9872d3ceeb8b1b63f0baa3':'dbd41ee944243307d39b7b27f16615a8'});

initializePlayer('sky258it', 'https://linear312-it-dash1-prd-ll.cdn13.skycdp.com/32772/skysport258/master.mpd', {'0036fd8ccfddba47c8b40aeff63a797c':'dfd5c9d0f4ac6f3a1bd89803399e7026'});









//ITV UK


    
initializePlayer('itv4', 'https://da-3efc67452a028801000600020000000000000005.id.cdn.upcbroadband.com/wp/wp1-obc0910-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV00306/manifest.mpd', {'2b169fb2c3214e429b66eb2e19fcafdf':'90a98753d8f41ad08906243230975ff1'});

initializePlayer('bbcone', 'https://da-3efc67472a028801000600020000000000000007.id.cdn.upcbroadband.com/wp/wp1-obc1112-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV09091/manifest.mpd', {'6401e1fead9d4f43910aaad360f46dd0':'598f5e4f10d4e040d25579478cadc4ee'});

initializePlayer('ch4en', 'https://wp2-obc1112-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV09211/manifest.mpd', {'d56ff9db826b4a41af9dbd0234c31116':'ac6eaee980dff46e15670004663132a9'});



 



//TATA PLAY INDIA

    


initializePlayer('sony_ten2', 'https://tataplay.xyssatuu.workers.dev/bpk-tv/irdeto_com_Channel_726/output/manifest.mpd?begin=20240612T010000&end=20240630T160000', {'6e9595fb8dd05c0aa354185bc2600854': 'edeb8dce0bcf769bdede664604a45d5b', '1cc361e170845936aea7b95c6efb478e':'edf617efde22fbd133c239ed4b47c9d3'}, true);



    
// ARGENTINA

//thailand


//ENTITAS TAK DIKENAL
  
    //ss3
  initializePlayer('eu1', 'https://cdn-vcors3.livestreamingbolatv1.workers.dev/out/v1/6f5596513af749c19d0bcdac013dda3c/index.mpd', {'411b6c68d0424bbabc41eaf244961f18': '54598acbe928605abf8f92a98cbb6986'});
//ss4
  initializePlayer('eu2', 'https://cdn-vcors1.livestreamingbolatv1.workers.dev/out/v1/3654ca35e72440b6aaa897fd36231191/index.mpd', {'d90bc1335dc245d2b42f7150f85bf18c': '9e39e71711cdf93e5d8c209cdecda848'});

    //spotv stadia
  initializePlayer('eu3', 'https://cors-proxy.elfsight.com/https://linearjitp02-playback.astro.com.my/dash-wv/dashiso/5148/default.mpd', {'e7c650ac72dcd0311411832a8271bb10':'ea8fa43cc7102e481cd441c58b2ecb08'});

  //sky251
  initializePlayer('eu4', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/31917/FHD/skysport251/master.mpd', {'00368000eaecbeeafd84c05b3b8243af': '8f84185910e18ae0ca8a45004625a000'});

//zdf
  initializePlayer('eu5', 'https://p7s1-live-001-prod.akamaized.net/45371d5a/t_009/zdf-de-hd/cenc-default.mpd', {'7757d3fa8cdab673a2dd9f3ed7b41360': '96e498b70eeecfc0164ed4e0a78e36f3'}); 

  //tv2no
  initializePlayer('eu6', 'https://aws-appeartv-cdn.rikstv.no/rikstv/1/11/dash/TV2_HD/manifest.mpd?version=1&adap=no_dolby&RikstvAssetId=rikstv_5711', {'bfb0134de69d76d25b5b4b202df11431': '025915bd3062c4bde44a13916c5bfefe'});

    //itv1
  initializePlayer('eu7', 'https://wp2-obc1112-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV09212/manifest.mpd', {'5d9937d586414096948337ac314d79c1':'22ca2e250b729982c97209e0ff3f7e9b'});

    //bbcone
  initializePlayer('eu8', 'https://da-3efc67472a028801000600020000000000000007.id.cdn.upcbroadband.com/wp/wp1-obc1112-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV09091/manifest.mpd', {'6401e1fead9d4f43910aaad360f46dd0':'598f5e4f10d4e040d25579478cadc4ee'});

    //pptvhd
  initializePlayer('eu9', 'https://ubn-streamer1.cdn.3bbtv.com:8443/3bb/live/36/36.mpd', {'0aeffa7753674e77b99443fac7757b8a': 'b8c8a462008a40aa91823e0b02e8dd31'});

    //raiit
  initializePlayer('eu10', 'https://wp1-obc1112-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV09101/manifest.mpd', {'d79467df269743b3aca99a9171c54878':'a7d3bc19bd09db6b581833e4a6176c8f'});

  initializePlayer('eu11', 'https://linear301-it-dash1-prd.selector.skycdn.it/016a/31023/FHD/skysportuno/master_stereo.mpd', {'00362452ed102000ccea64c311921dc2': '02f27bd6caab7633d3083b94d3958b1c'});

  initializePlayer('eu12', 'https://linear301-it-dash1-prd-akp1.cdn13.skycdp.com/016a/31209/FHD/skysportseriea/master_stereo.mpd', {'0036e5d0e88dfb087f1791da6150ced9': '0bc653d830837dceb13bd17169f0f8e2'});

  initializePlayer('eu13', 'https://cdnlb.tvplayhome.lt/live/eds/TV3_LT_HD_HVC/GO3_LIVE_DASH_AVC/TV3_LT_HD_HVC.mpd', {'748d32a5e8e64c7780df70a86a3fb1dc': 'e3deb83f5738e9ce4cdeb6cab7f473f5'});

    initializePlayer('eu14', 'https://pe-fa-lp01a.9c9media.com/live/CFTO/p/dash/20000001/9117ec94ec99c195/manifest.mpd', {'10f7768b8eb5be6d48c1baaf1fb891a1': '9b029683d78a43cb9e8738f17220c37e','31599f01aa4da9cdd75711f495279e27':'a68ca2b689516982cb543a9a60f53263'});
    
    initializePlayer('eu15', 'https://linear301-it-dash1-prd-akp1.cdn13.skycdp.com/016a/31209/FHD/skysportseriea/master_stereo.mpd', {'0036e5d0e88dfb087f1791da6150ced9': '0bc653d830837dceb13bd17169f0f8e2'});

    initializePlayer('eu16', 'https://stadia.xyssatuu.workers.dev/bpcdn.dialog.lk/bpk-tv/Ch123/output/index.mpd', {'a4b0d01bb39006fec2e92033a7262e5b':'02424c17b4eb9cd19d6f204db874bf55'});
  //1NL  
initializePlayer('eu17', 'https://nlziet-live.akamaized.net/L6/76fd047c/c427bd9d.isml/.mpd', {'7545f9301bf94e7a9132dccf32920e51': '94fc134c1b1cb1ea9075781417eca48b'});

    initializePlayer('eu18', 'https://tvup-ccs-live.akamaized.net/espn/espn.mpd', {'01824898bd6a59308c546c3d2ee0bdae': '39de9ff7cd4478b08404f9733cfa9eae',
                    '889182f3be9b57d7b7702065bc00a492': '3039ad69cd8236616857e2b0784e9cbd',
					'418583d14c185e5db9049d1440f000b2': '4fc5c3d1f38e066bee53b4d64c1468d3'});
    
   initializePlayer('eu19', 'https://cache3.zapitv.com/live/eds_c2/la1_4k/dash_live_enc/la1_4k.mpd', {'a3abc44525eef3b0a7af9138a9dbe34a': '7740f8ae4223ce5ba293028f7f78f1c1'});

initializePlayer('eu20', 'https://cdn1oiv.akamaized.net/hrtliveorigin/hrt2.smil/1/manifest.mpd?DVR', {'994c79af863838109e7f3503bcd2aff9': 'd2c19650ad2a2ac77a95453b941a6f0e'});


initializePlayer('zdf', 'https://p7s1-live-001-prod.akamaized.net/45371d5a/t_009/zdf-de-hd/cenc-default.mpd', {'7757d3fa8cdab673a2dd9f3ed7b41360': '96e498b70eeecfc0164ed4e0a78e36f3'}); 

initializePlayer('rtl', 'https://pnowlive-a.akamaized.net/live/rtlhd/dash/rtlhd.mpd', {'57e48b99f3f6d4f13f5c5afdcca084ca': '29379a5e2d3405fad2f5d9cbe92586c3'}); 
    
initializePlayer('daserste', 'https://p7s1-live-001-prod.akamaized.net/28df258a/t_009/daserste-de-hd/cenc-default.mpd', {'667f821486adfa6df62b53e41fe60c65': 'be65cc2c378180153cbac97bc6ab8625'}); 

initializePlayer('tipik', 'https://daiconnect.com/live/dash/rtbf/tipik-premium-drm-2/.mpd', {'2f794d3c19854f4fa6f0183b993b86fa': '37077d010758ce2cb85ca46720884b01'}); 
   
initializePlayer('fs1', 'https://proji.glitch.me/https://linear.stvacdn.spectrum.com/LIVE/5239/bpk-tv/00700/drm/manifest.mpd', {'ff18f095bc835e8d902be9420438729e': 'bbfdc8de223e8b33144d5c718f01f58b'}); 

initializePlayer('fs2', 'https://proji.glitch.me/https://linear.stvacdn.spectrum.com/LIVE/5099/bpk-tv/00564/drm/manifest.mpd', {'a9197045dfec5a2391fa29fc430783d8': '25a184fd32ff2022772bcc72b777489d'}); 
    
initializePlayer('laune', 'https://daiconnect.com/live/dash/rtbf/laune-premium-drm-2/.mpd', {'1a8315e4b64c4e638dc24d93134b9b2d': '2821b54058fb3adc9c6252c631aef9e5'}); 	

//ctv2ca
    initializePlayer('copa1', 'https://pe-fa-lp01a.9c9media.com/live/CKVR/p/dash/20000001/a889a00582c22aa9/manifest.mpd', {'a4f4e148746e46bc401891571abeb0ca': '29598f41d1cca4db6288430ad065f09a','5eaecc5806202cba6d013a3b02343132':'e4b85f440f4b55a71423e3440787e4e9'});
   
    //sport digital
    initializePlayer('copa2', 'https://dazn.livestreamingbolatv1.workers.dev/https://dcf-fs-live-dazn-cdn.dazn.com/dashdrm/dazn-linear-022/stream.mpd', {'82f8e2a17dac44c0a18f660479349c59': '1b144f73e6fefe91cd05f850e2b589d0'});
    
    //ctvca
    initializePlayer('copa3', 'https://pe-fa-lp01a.9c9media.com/live/CIVI/p/dash/20000001/832d3547fbcdaed1/manifest.mpd', {'a4f4e148746e46bc401891571abeb0ca': '29598f41d1cca4db6288430ad065f09a','5eaecc5806202cba6d013a3b02343132':'e4b85f440f4b55a71423e3440787e4e9'});

    //premierspott
    initializePlayer('copa4', 'https://skytest.starlive.workers.dev/https://linear001-ie-dash1-prd-cf.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(premiersports1)/manifest_720.mpd', {'0005b3dba78ae0fe7a9288022d3b3736':'d2827df80dd7e9243ba6b5bbda5dfa82'});

    //vsport
    initializePlayer('copa5', 'https://testcors.starlive.workers.dev/https://director.streaming.telia.com/tvm-packager-prod/group1/60896c3647a23d7f115cd57a/manifest.mpd', {'eab13e69793756eda77d8d71fda90d5d':'cd022e9bffa6a0d1523ee5d9fcda9ed4'});

    initializePlayer('dsport', 'https://tvup-ccs-live.akamaized.net/directvsportpan/directvsportpan.mpd', {'1563586185955731899c517fca4229a8': '5e987516e20522093d5ffee9a84d71b0',
                    'e6d067c9fc4e5b14b2d199307a4d4c6e': '488991a152e05377cb46e6704a28eafc',
                    '11aa98b988db5b1d9dd85142d1314cf9': '86d6fc031da6cca8fcf364b1655843e3'});
    
    initializePlayer('assp4', 'https://nontongp.livestreamingbolatv1.workers.dev/https://d3j4fjrwclc3o8.cloudfront.net/CH2/masterCH2.mpd', {'bda7f74b842f4f0eb142395dadd91f07': 'fb12f661d640e4ebdf38e312302260eb'});

    initializePlayer('vsportprem', 'https://cors-proxy.cooks.fyi/https://director.streaming.telia.com/tvm-packager-prod/group1/60896c3647a23d7f115cd57a/manifest.mpd', {'eab13e69793756eda77d8d71fda90d5d':'cd022e9bffa6a0d1523ee5d9fcda9ed4'});

    initializePlayer('tudn', 'https://cors-proxy.cooks.fyi/https://linear.stvacdn.spectrum.com/LIVE/5008/bpk-tv/08283/drm/manifest.mpd', {'C0A49BB51E4F594994FBBCB096617018':'ed1f23c764ce3897e410130a6853f5bf'});
	
});
