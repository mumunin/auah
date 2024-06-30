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

initializePlayer('eu21', 'https://linear301-it-dash1-prd.selector.skycdn.it/016a/31023/FHD/skysportuno/master_stereo.mpd', {'0036dc70e4d659fe5ae57b52793a1ff3': '55517f806b6be917c2bf0e9cf9acc44f'});

  initializePlayer('eu22', 'https://linear301-it-dash1-prd-akp1.cdn13.skycdp.com/016a/31209/FHD/skysportseriea/master_stereo.mpd', {'00369a2c69176d5a2deff777247b6637': 'e122d4bad34c1e430ee349f5aac0060b'});

  initializePlayer('eu23', 'https://cdnlb.tvplayhome.lt/live/eds/TV3_LT_HD_HVC/GO3_LIVE_DASH_AVC/TV3_LT_HD_HVC.mpd', {'748d32a5e8e64c7780df70a86a3fb1dc': 'e3deb83f5738e9ce4cdeb6cab7f473f5'});

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
    initializePlayer('copa5', 'https://amg01370-italiansportcom-sportitalia-rakuten-3hmdb.amagi.tv/amRdirect/ads_pod_type=playerpage_midroll&ads_env=prod&ads_ppid=&ads_rtvid=271861&ads_streaming_id=4f185419-74f6-4564-8ea9-4cdc60746e2f&ads_amagi_channel=781&ads_device_type=web&ads_device_model=&ads_device_year=&ads_player_width=&ads_rtv_content_language=ita&ads_market=it&ads_rtv_content_id=3741&ads_device_make=&ads_user_type=visitor&ads_content_classification=6&ads_gdpr_consent=&ads_device_lmt=1&ads_player_height=&uid=1gnmqg5gu-qsvc-bfo-gaq3-3dgjgexshpe/hls/amagi_hls_data_rakutenAA-sportitalia-rakuten/CDN/master.m3u8', {'eab13e69793756eda77d8d71fda90d5d':'cd022e9bffa6a0d1523ee5d9fcda9ed4'});

    initializePlayer('dsport', 'https://tvup-ccs-live.akamaized.net/directvsportpan/directvsportpan.mpd', {'1563586185955731899c517fca4229a8': '5e987516e20522093d5ffee9a84d71b0',
                    'e6d067c9fc4e5b14b2d199307a4d4c6e': '488991a152e05377cb46e6704a28eafc',
                    '11aa98b988db5b1d9dd85142d1314cf9': '86d6fc031da6cca8fcf364b1655843e3'});
    
    initializePlayer('assp4', 'https://nontongp.livestreamingbolatv1.workers.dev/https://d3j4fjrwclc3o8.cloudfront.net/CH2/masterCH2.mpd', {'bda7f74b842f4f0eb142395dadd91f07': 'fb12f661d640e4ebdf38e312302260eb'});

    initializePlayer('vsportprem', 'https://cors-proxy.cooks.fyi/https://director.streaming.telia.com/tvm-packager-prod/group1/60896c3647a23d7f115cd57a/manifest.mpd', {'eab13e69793756eda77d8d71fda90d5d':'cd022e9bffa6a0d1523ee5d9fcda9ed4'});

    initializePlayer('tudn', 'https://cors-proxy.cooks.fyi/https://linear.stvacdn.spectrum.com/LIVE/5008/bpk-tv/08283/drm/manifest.mpd', {'C0A49BB51E4F594994FBBCB096617018':'ed1f23c764ce3897e410130a6853f5bf'});

initializePlayer('npo2', 'https://nlziet-live.akamaized.net/L27/576200ff/17f23d2b.isml/.mpd', {'cd2e51e9dadd4e38b2b8df5680f7aa43':'ce1083c14ed247bbc693bbe6bf0fd36b'});
	
   initializePlayer('cop1', 'https://live.mocdn.tv/out/v1/90c84746731143b8825ddc8a40cd0908/manifest_L1.mpd', {'3e17c3798a294c49b93c1b2ddbcd8f29':'0917fa8c9cf68c206efc24946d0c22cc'},true);

initializePlayer('unifis1', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227877/3221227877.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=pDVeBhPtc549NayvHFA0JHqiwYJ%2FKEP6UdMtjXIjIzrjYyGN4h5HPUHLEk%2FvL80xPjG9KTt82xXCdpGInMoKWMBLe9Ie9rQgSTZ%2FmsUArMht5J0dsgfU28LWZM15p3G2%3A20221124103114%3AUTC%2C10001002142071%2C115.164.56.153%2C20221124103114%2Curn:Huawei:liveTV:XTV54185493%2C10001002142071%2C-1%2C0%2C1%2C%2C%2C2%2CHESA0002%2C%2C%2C2%2C10000104188313%2C0%2C10000103564441%2C798506651%2C%2C%2C2%2C1%2CEND&GuardEncType=2&tenantId=6003&from=5&ocs=2_1.9.62.168_80&hms_devid=1785&mag_hms=1785,1793,1786,1788&it=H4sIAAAAAAAAA0XMQQvCIBiA4X_jUdTPJjt4KoIuEqy6xqd-ycBN0jXo38ci6P4-71Ix0OlgwQtjAoAG2mlJvqe-wwCx0xCVNoE1erpigQXMeZyTK3Fjt2F_l4ILrpTkUrHLtjtmTFZ9S_eaPNU_G6iuYyAb24Ov2DimVCnhMpaZnzO-rzX_kg9sQKxomQAAAA', {'cbb673fb120882354735ed57eeb05b4c': 'fe003f7aeec40eb65d20b14edfda2a86'});

initializePlayer('spotv1my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227608/3221227608.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawWP5a6lzyDPJ57LXeuC05Cs44sM6v4Pb96oLcepTGODErcymHBIhx5oJP4jv2fPK0%3D%3A20230206101724%3AUTC%2C1003663983%2C115.164.187.20%2C20230206101724%2Curn:Huawei:liveTV:XTV100000161%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOy27CMBRE_8ZLK3YehIVXIKRKVahE6Laa2NcmihODHZD695A2bGfmjM4coeljr1B2dV7Zqsu1LeoS2EhRk611tu2MFYYlujVBSabhfT-5JpgF-z7tfkTGMy6l4EKydrk7eLh12dzHjqLK39iJ4qPXpEyy_IHE4Vwkh7kPE__y-D1Hv04YtauaqDZltc0KKQuZs3lJW6Th1bAL0i6MV0Qyn8H9AcrCJ2JX6AGOGoykprv3_9wxmpfNEzpVq7L0AAAA&tenantId=6001', {'7de0fa3c35f52f8a8517f1600dd11ed7': '2d59cf94d10020aeee01a97cd0716eea'});

initializePlayer('spotv2my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227726/3221227726.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawRjfkMvdAX9TZ5I%2BbsmfrUeOV6Zn1IaYCsVySN%2F6aTU0rcymHBIhx5oJP4jv2fPK0%3D%3A20230206102855%3AUTC%2C1003663983%2C115.164.187.20%2C20230206102855%2Curn:Huawei:liveTV:XTV100000162%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOwY6CMBiE36bHpi0I9tCTGxOTDbuJrFczhZ9KLNRt0cS3X1D2NpmZbzJTREOHD5PZwoqt0IXSXZ7JEnqWCp2WFhtlBUv0WwWjWAPv-9FVoV2w03F3loILrpTkUrF6mdt7uLVZ3QdL0WT_2JHio2_ItKnjDyQO5yI5TH0Y-bfH8yf6tcKoXq_JotwUWuSlyvOSTYtbI13nhF2QdmG4IVL7GdwLMB18InZDc4WjCgOZ8e79m_uK7fzmD_CkDoH0AAAA&tenantId=6001', {'7c67cb7de9465062c06ac94e8e065462': '5931fc07f285ffe40eb98e130bb090f9'});

initializePlayer('bein4my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227937/3221227937.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawRjfkMvdAX9TZ5I%2BbsmfrU7%2B8kYXzOcpo3wc%2BwgB1By0rcymHBIhx5oJP4jv2fPK0%3D%3A20230206102855%3AUTC%2C1003663983%2C115.164.187.20%2C20230206102855%2Curn:Huawei:liveTV:XTV57682031%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOwY6CMBRF_6bLpn10wC660piYTHASGbfmUR6VWKi2QDJ_P6K4vfeemzNGtHTYGRKbPMu0shsAVdu2FlDkYNtMo4RaS5boUQYDzKL33eDK0CzY-bS9SMEFB5BcAquWu71Hty7Lqa8pmuyDnSjOnSXTpJbPmDg6F8nh2IWB_3j8-41-nTCqVjWZF1-5FqoApTQbl7TCdHs27IppG_o7Rmq-g3sBpkWfiN3R3tBRiT2ZYfL-zR1j87T5B0NkEFD0AAAA&tenantId=6001', {'94663e64ef81e90a9deeb0f1993ce11c': '9d6f78876677b543cd4e18c846aa2481'});

initializePlayer('bein3my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227892/3221227892.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawRjfkMvdAX9TZ5I%2BbsmfrUDhVRD65aYf%2BjyDsSSHpLfkrcymHBIhx5oJP4jv2fPK0%3D%3A20230206102855%3AUTC%2C1003663983%2C115.164.187.20%2C20230206102855%2Curn:Huawei:liveTV:XTV55456355%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOwQ6CMBBE_6bHhpYCeuhJY2Ji0AT0atbtUomFagsm_r2ieJ2ZN3lDAKTtWjeXQmUyRcpypVCYJaIiVAmmgFlDgkV6lF5LhuBc29vSmwk7VauzSHjCpRRcSFZPdxsHdl6WY3ehoNM_VlF4tkjaxIY_IXKwNpCFofU9Pzh4HYObJ4zqWU3kRZYvE1VIpRZsmNIa4u3TsCvEle_uEMjsvP0CugEXid0Bb2CphI50Pzr34_bBfGzeA19EPPQAAAA&tenantId=6001', {'0d2418cc6a29a3516d1854ab2973f25f': '4979b73603b430465aa4e7bbdefbc4cc'});

initializePlayer('bein2my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227971/3221227971.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawgQY43Tg5eLk6%2BKHkOBbkVv%2FaciHRqnNnDuZfWMEk6l0rcymHBIhx5oJP4jv2fPK0%3D%3A20230206101746%3AUTC%2C1003663983%2C115.164.187.20%2C20230206101746%2Curn:Huawei:liveTV:XTV59922231%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWPQU-EMBSE_02PDX2LUA49rdnExKDJolcztI9KttC1ZTfx3wuKc3wz38vMkmD56dEMKEB1rQlDX6raNWh6TfqAinRflVZk_mqjIWERwjj7NroNez8fP1QhC0mkpCLRbe9OAX5Ptrep52QO_9iZ0320bFwe5B1ZwvvEHssYZ_ka8P2Wwh4R3O3VVFU_VE1RriItlu3aIV9WR3wiH-N0RWL3HP0vsC4JmcUV9gLPLSY28y2EP-4lubXND5_xMYT0AAAA&tenantId=6001', {'1c983e5a03b0f8adde686ef20497e2b4': 'f7b1d6556850b472f4f683519f4e41f7'});

initializePlayer('bein1my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227927/3221227927.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawgQY43Tg5eLk6%2BKHkOBbkVIq%2FzwD5xYAe8dI3PltEQ%2BUrcymHBIhx5oJP4jv2fPK0%3D%3A20230206101746%3AUTC%2C1003663983%2C115.164.187.20%2C20230206101746%2Curn:Huawei:liveTV:XTV55456338%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOQY_CIBSE_w1HApSqPXByY2Jiqol1r-YBD2xKi0I18d_brt25vZn5XmZMYHD_o4oNc9pVVsvSSF45raWoDCvEdBQlSpLxUUcliIEQ2sHX0c7Y73l75YwyKgSnXJBmfrcL4Jdm_ew1JlX8Y2dMr9agstnRF2QK3if0MLZxoKcA70sKS4Vgs0zjq3W5qpicJNZknN0Gcjcl5AZ5G_s7JLSH6P8A5SBkJHcwHXisoUc1PEP4csdkpzUfwVvnv_QAAAA&tenantId=6001', {'8e5c88c1ad411ce4aa1fcd3e63fa9448': 'fb4e6d3c2a444c3711477438bcc0b5fc'});	

initializePlayer('p36', 'https://pptv-7jdibe.cdn.byteark.com/live/drmwv/index.mpd', {'0dbd58616d7355b7a1a7c89df6a60199':'b755de82e54d2aa45ce8e39b80f45ed5','66f03e62d21d5a6397841fc2de1391eb':'75502c6cf014a32a18c9db45ca13a6c3','3ba59a2a76105666b260332e35e483f0':'6dca3af3176e313b6798f81120edd77d'});
	
initializePlayer('rtb', 'https://d1211whpimeups.cloudfront.net/smil:rtb2/manifest.mpd', {'88d527f9da38f06902bd2e9b9fbed721': 'd6cf11d9103d6f0dfbecfdd301452cc3'}); 
	
});
