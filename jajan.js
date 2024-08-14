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

// SSC
initializePlayer('ssc1', 'https://ssc1-ak.akamaized.net/out/v1/c696e4819b55414388a1a487e8a45ca1/index.mpd', {'d84c325f36814f39bbe59080272b10c3': '550727de4c96ef1ecff874905493580f'});
initializePlayer('ssc2', 'https://ssc2-ak.akamaized.net/out/v1/a16db2ec338a445a82d9c541cc9293f9/index.mpd', {'8bcfc55359e24bd7ad1c5560a96ddd3c': 'b5dcf721ab522af92a9d3bf0bd55b596'});
initializePlayer('ssc3', 'https://ssc3-ak.akamaized.net/out/v1/42e86125555242aaa2a12056832e7814/index.mpd', {'7de5dd08ad8041d586c2f16ccc9490a1': '5e1503f3398b34f5099933fedab847ef'});
initializePlayer('ssc4', 'https://ssc4-ak.akamaized.net/out/v1/5267ea5772874b0db24559d643eaad93/index.mpd', {'5c672f6b85a94638872d0214f7806ed4': 'bf8756fbb866ee2d5c701c2289dd8de3'});
initializePlayer('ssc5', 'https://ssc5-ak.akamaized.net/out/v1/99289eac5a7b4319905da595afbd792b/index.mpd', {'c88b512b17ab4f6cb09eb0ff4a1056ed': 'adc08ee1c20a734972a55c9aebbd1888'});
    
initializePlayer('ssc_extra1', 'https://ssc-extra1-ak.akamaized.net/out/v1/647c58693f1d46af92bd7e69f17912cb/index.mpd', {'ecbc9e6fe6b145efb6658fb5cf7427f8': '03c17e28911f71221acbc0b11f900401'});

initializePlayer('ssc_extra3', 'https://ssc-extra2-ak.akamaized.net/out/v1/8b70de2b70d447ba8a7450ba90926a2d/index.mpd', {'4d89249bd4ca4ebc9e70443265f9507d': 'cf074ffd2646c9c2f8513b47fa57bc30'});

initializePlayer('ssc_extra2', 'https://ssc-extra3-ak.akamaized.net/out/v1/8f1c6c3f05ef4284a64b342891bd85ae/index.mpd', {'98cfd6fd4812497fb24dc75f7545f2ee': 'd3006ee69e77b25939728ebf30d3180a'});

initializePlayer('unifis1', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227877/3221227877.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=pDVeBhPtc549NayvHFA0JHqiwYJ%2FKEP6UdMtjXIjIzrjYyGN4h5HPUHLEk%2FvL80xPjG9KTt82xXCdpGInMoKWMBLe9Ie9rQgSTZ%2FmsUArMht5J0dsgfU28LWZM15p3G2%3A20221124103114%3AUTC%2C10001002142071%2C115.164.56.153%2C20221124103114%2Curn:Huawei:liveTV:XTV54185493%2C10001002142071%2C-1%2C0%2C1%2C%2C%2C2%2CHESA0002%2C%2C%2C2%2C10000104188313%2C0%2C10000103564441%2C798506651%2C%2C%2C2%2C1%2CEND&GuardEncType=2&tenantId=6003&from=5&ocs=2_1.9.62.168_80&hms_devid=1785&mag_hms=1785,1793,1786,1788&it=H4sIAAAAAAAAA0XMQQvCIBiA4X_jUdTPJjt4KoIuEqy6xqd-ycBN0jXo38ci6P4-71Ix0OlgwQtjAoAG2mlJvqe-wwCx0xCVNoE1erpigQXMeZyTK3Fjt2F_l4ILrpTkUrHLtjtmTFZ9S_eaPNU_G6iuYyAb24Ov2DimVCnhMpaZnzO-rzX_kg9sQKxomQAAAA', {'cbb673fb120882354735ed57eeb05b4c': 'fe003f7aeec40eb65d20b14edfda2a86'});

initializePlayer('spotv1my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227608/3221227608.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawWP5a6lzyDPJ57LXeuC05Cs44sM6v4Pb96oLcepTGODErcymHBIhx5oJP4jv2fPK0%3D%3A20230206101724%3AUTC%2C1003663983%2C115.164.187.20%2C20230206101724%2Curn:Huawei:liveTV:XTV100000161%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOy27CMBRE_8ZLK3YehIVXIKRKVahE6Laa2NcmihODHZD695A2bGfmjM4coeljr1B2dV7Zqsu1LeoS2EhRk611tu2MFYYlujVBSabhfT-5JpgF-z7tfkTGMy6l4EKydrk7eLh12dzHjqLK39iJ4qPXpEyy_IHE4Vwkh7kPE__y-D1Hv04YtauaqDZltc0KKQuZs3lJW6Th1bAL0i6MV0Qyn8H9AcrCJ2JX6AGOGoykprv3_9wxmpfNEzpVq7L0AAAA&tenantId=6001', {'7de0fa3c35f52f8a8517f1600dd11ed7': '2d59cf94d10020aeee01a97cd0716eea'});

initializePlayer('spotv2my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227726/3221227726.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawRjfkMvdAX9TZ5I%2BbsmfrUeOV6Zn1IaYCsVySN%2F6aTU0rcymHBIhx5oJP4jv2fPK0%3D%3A20230206102855%3AUTC%2C1003663983%2C115.164.187.20%2C20230206102855%2Curn:Huawei:liveTV:XTV100000162%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOwY6CMBiE36bHpi0I9tCTGxOTDbuJrFczhZ9KLNRt0cS3X1D2NpmZbzJTREOHD5PZwoqt0IXSXZ7JEnqWCp2WFhtlBUv0WwWjWAPv-9FVoV2w03F3loILrpTkUrF6mdt7uLVZ3QdL0WT_2JHio2_ItKnjDyQO5yI5TH0Y-bfH8yf6tcKoXq_JotwUWuSlyvOSTYtbI13nhF2QdmG4IVL7GdwLMB18InZDc4WjCgOZ8e79m_uK7fzmD_CkDoH0AAAA&tenantId=6001', {'7c67cb7de9465062c06ac94e8e065462': '5931fc07f285ffe40eb98e130bb090f9'});

initializePlayer('bein4my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227937/3221227937.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawRjfkMvdAX9TZ5I%2BbsmfrU7%2B8kYXzOcpo3wc%2BwgB1By0rcymHBIhx5oJP4jv2fPK0%3D%3A20230206102855%3AUTC%2C1003663983%2C115.164.187.20%2C20230206102855%2Curn:Huawei:liveTV:XTV57682031%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOwY6CMBRF_6bLpn10wC660piYTHASGbfmUR6VWKi2QDJ_P6K4vfeemzNGtHTYGRKbPMu0shsAVdu2FlDkYNtMo4RaS5boUQYDzKL33eDK0CzY-bS9SMEFB5BcAquWu71Hty7Lqa8pmuyDnSjOnSXTpJbPmDg6F8nh2IWB_3j8-41-nTCqVjWZF1-5FqoApTQbl7TCdHs27IppG_o7Rmq-g3sBpkWfiN3R3tBRiT2ZYfL-zR1j87T5B0NkEFD0AAAA&tenantId=6001', {'94663e64ef81e90a9deeb0f1993ce11c': '9d6f78876677b543cd4e18c846aa2481'});

initializePlayer('bein3my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227892/3221227892.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawRjfkMvdAX9TZ5I%2BbsmfrUDhVRD65aYf%2BjyDsSSHpLfkrcymHBIhx5oJP4jv2fPK0%3D%3A20230206102855%3AUTC%2C1003663983%2C115.164.187.20%2C20230206102855%2Curn:Huawei:liveTV:XTV55456355%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOwQ6CMBBE_6bHhpYCeuhJY2Ji0AT0atbtUomFagsm_r2ieJ2ZN3lDAKTtWjeXQmUyRcpypVCYJaIiVAmmgFlDgkV6lF5LhuBc29vSmwk7VauzSHjCpRRcSFZPdxsHdl6WY3ehoNM_VlF4tkjaxIY_IXKwNpCFofU9Pzh4HYObJ4zqWU3kRZYvE1VIpRZsmNIa4u3TsCvEle_uEMjsvP0CugEXid0Bb2CphI50Pzr34_bBfGzeA19EPPQAAAA&tenantId=6001', {'dc9eefa0c65af3c6a1a7e7ced6a64f5f': '09195315ce025cfbf726668a1072f190'});

initializePlayer('bein2my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227971/3221227971.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawgQY43Tg5eLk6%2BKHkOBbkVv%2FaciHRqnNnDuZfWMEk6l0rcymHBIhx5oJP4jv2fPK0%3D%3A20230206101746%3AUTC%2C1003663983%2C115.164.187.20%2C20230206101746%2Curn:Huawei:liveTV:XTV59922231%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWPQU-EMBSE_02PDX2LUA49rdnExKDJolcztI9KttC1ZTfx3wuKc3wz38vMkmD56dEMKEB1rQlDX6raNWh6TfqAinRflVZk_mqjIWERwjj7NroNez8fP1QhC0mkpCLRbe9OAX5Ptrep52QO_9iZ0320bFwe5B1ZwvvEHssYZ_ka8P2Wwh4R3O3VVFU_VE1RriItlu3aIV9WR3wiH-N0RWL3HP0vsC4JmcUV9gLPLSY28y2EP-4lubXND5_xMYT0AAAA&tenantId=6001', {'1c983e5a03b0f8adde686ef20497e2b4': 'f7b1d6556850b472f4f683519f4e41f7'});

initializePlayer('bein1my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227927/3221227927.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawgQY43Tg5eLk6%2BKHkOBbkVIq%2FzwD5xYAe8dI3PltEQ%2BUrcymHBIhx5oJP4jv2fPK0%3D%3A20230206101746%3AUTC%2C1003663983%2C115.164.187.20%2C20230206101746%2Curn:Huawei:liveTV:XTV55456338%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOQY_CIBSE_w1HApSqPXByY2Jiqol1r-YBD2xKi0I18d_brt25vZn5XmZMYHD_o4oNc9pVVsvSSF45raWoDCvEdBQlSpLxUUcliIEQ2sHX0c7Y73l75YwyKgSnXJBmfrcL4Jdm_ew1JlX8Y2dMr9agstnRF2QK3if0MLZxoKcA70sKS4Vgs0zjq3W5qpicJNZknN0Gcjcl5AZ5G_s7JLSH6P8A5SBkJHcwHXisoUc1PEP4csdkpzUfwVvnv_QAAAA&tenantId=6001', {'1d7809230a0ed88557dabab4868b0848': '835f288913c909d05fe98d2925f02454'});

initializePlayer('tnt1', 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd', {'ae26845bd33038a9c0774a0981007294':'63ac662dde310cfb4cc6f9b43b34196d'}, true);

initializePlayer('tnt2', 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd', {'6d1708b185c6c4d7b37600520c7cc93c': '1aace05f58d8edef9697fd52cb09f441'}, true);

initializePlayer('tnt3', 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd', {'4e993aa8c1f295f8b94e8e9e6f6d0bfe': '86a1ed6e96caab8eb1009fe530d2cf4f'}, true);

initializePlayer('tnt4', 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd', {'e31a5a81caff5d07ea2411a571fc2e59': '96c5ef69479732ae734f962748c19729'}, true);

initializePlayer('tnt5', 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/gesdwrdncn/out/v1/79e752f1eccd4e18b6a8904a0bc01f2d/cenc.mpd', {'60c0d9b41475e01db4ffb91ed557fbcc': '36ee40e58948ca15e3caba8d47b8f34b'}, true);
    
});
