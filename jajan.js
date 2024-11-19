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
    
initializePlayer('dazn1', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/bmnelo5c7a/out/v1/3ce2cdc4589f46189322bd3717c77957/cenc.mpd', {'44dd9cd370b08a868ead115fe84ecfde':'bff19ab0a51cf14e848389b152913fd0'});
initializePlayer('dazn2', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/xnk4m9bnxt/out/v1/4ced7b7329a54652b9bb0521ed38bd4d/cenc.mpd', {'0eab5a3f3e3b4ba5d42d40ca30d17571':'f3f061ded9b70e8160590d5802ecda6d'});
initializePlayer('dazn3', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/zy1ee5sshp/out/v1/bdcffa69fa3b4f3bb3569c9c73ee1c01/cenc.mpd', {'bad8efff688c0dbb3711e4a7114c22a3':'6ba800673b20776c0c850130d45e1920'});
initializePlayer('dazn4', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/up7qpwch9b/out/v1/a6d5d1a1287b4893b859c2d6ccf2c65d/cenc.mpd', {'d27104d427e4f87e75b19395a9f8796b':'723593c70e2d4c4862754398e80168f8'});
initializePlayer('daznla', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/tu06vubgf9/out/v1/7668f47d28e345979c072e361f3d3ce3/cenc.mpd', {'6d08b265a6639e32da7c880d5491e3d2': '0c92556ca14b95f367993710e7cfbc94'});
initializePlayer('daznf1', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/cqbcvgkb83/out/v1/4dbe05ecfb1540448d82d68eeebfbb1c/cenc.mpd', {'1061be12d303247426ec25e8369b2647': 'bd622b0e610295de3b0bccb850ccaaaa'});
initializePlayer('daznla1', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/wjgklbtvhh/out/v1/659736a1e24c40e4865a80ffd75e7de7/cenc.mpd', {'43d1c3b25207ff38b22ccfe17d302367': '7b1f85f6e81059473b114c16a25c829a'});
initializePlayer('daznla2', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/woujvkfnmn/out/v1/141b52f08a1e4e97850219729ee48dc8/cenc.mpd', {'0b1fdeaee3ffc51e9a66cf1938d57aaf': '28e3cb88ab7b476b81ab8aa0624c4d71'});

initializePlayer('bei1', 'https://av-ch-cdn.mncnow.id/live/eds/BEIN01/sa_dash_vmx/BEIN01.mpd', {'57d2ac9210cfbca3596cc679a01c8b29': 'd5e35c0f39c76adf24853d7ea18c71e7'});
initializePlayer('bei2', 'https://av-ch-cdn.mncnow.id/live/eds/BEIN02/sa_dash_vmx/BEIN02.mpd', {'57d2ac9210cfbca3596cc679a01c8b29': 'd5e35c0f39c76adf24853d7ea18c71e7'});
initializePlayer('bei3', 'https://av-ch-cdn.mncnow.id/live/eds/BEIN03/sa_dash_vmx/BEIN03.mpd', {'57d2ac9210cfbca3596cc679a01c8b29': 'd5e35c0f39c76adf24853d7ea18c71e7'});
initializePlayer('sic2', 'https://av-ch-cdn.mncnow.id/live/eds/MNCSports2-HD/sa_dash_vmx/MNCSports2-HD.mpd', {'45fec91ce1f19b6b1f31d69dcfaaf6cd': '843e228ab109e9aa6c4822ee4ad05d7d'});
initializePlayer('eplo1', 'https://cdn9.tvplayhome.lt/live/eds2/VIP5/GO3_LIVE_DASH_AVC/VIP5.mpd', {'ad206bf45075406da1ccfd824b4667c9': '05093061005A5947C584AB77035ED678'});
initializePlayer('eplo2', 'https://cdn9.tvplayhome.lt/live/eds2/VIP3/GO3_LIVE_DASH_AVC/VIP3.mpd', {'ad206bf45075406da1ccfd824b4667c9': '05093061005A5947C584AB77035ED678'});
initializePlayer('eplo3', 'https://cdn9.tvplayhome.lt/live/eds2/VIP4/GO3_LIVE_DASH_AVC/VIP4.mpd', {'ad206bf45075406da1ccfd824b4667c9': '05093061005A5947C584AB77035ED678'});

initializePlayer('zig1', 'https://wp7-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000014_019661/go-dash-fhd-avc/NL_000014_019661.mpd?p=web', {'0be3d503dba13fc9a9c8ad4b89f599e6': '578c2231c526c5e9eb415411e36871bf'});
initializePlayer('zig2', 'https://wp2-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000095_019371/go-dash-fhd-avc/NL_000095_019371.mpd?p=web', {'16bf72dc22743d929c4318e193408373': 'eae51a1e3904124963074cbf432c7c8e'});
initializePlayer('zig3', 'https://wp3-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000096_019382/go-dash-fhd-avc/NL_000096_019382.mpd?p=web', {'16bf72dc22743d929c4318e193408373': 'eae51a1e3904124963074cbf432c7c8e'});
initializePlayer('zig4', 'https://wp4-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000097_019370/go-dash-fhd-avc/NL_000097_019370.mpd?p=web', {'16bf72dc22743d929c4318e193408373': 'eae51a1e3904124963074cbf432c7c8e'});
initializePlayer('zig5', 'https://wp5-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000098_019255/go-dash-fhd-avc/NL_000098_019255.mpd?p=web', {'16bf72dc22743d929c4318e193408373': 'eae51a1e3904124963074cbf432c7c8e'});
initializePlayer('zig6', 'https://wp6-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000099_019256/go-dash-fhd-avc/NL_000099_019256.mpd?p=web', {'16bf72dc22743d929c4318e193408373': 'eae51a1e3904124963074cbf432c7c8e'});
initializePlayer('zig7', 'https://wp1-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000094_019321/go-dash-fhd-avc/NL_000094_019321.mpd?p=web', {'16bf72dc22743d929c4318e193408373': 'eae51a1e3904124963074cbf432c7c8e'});

initializePlayer('epn1', 'https://wp1-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000107_019441/go-dash-fhd-avc/NL_000107_019441.mpd?p=tisa', {'3e999e38253834baa63881ea451f2839': '99b88d9cde1d8986decbc5985da87187'});
initializePlayer('epn2', 'https://wp2-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000108_019561/go-dash-fhd-avc/NL_000108_019561.mpd?p=tisa', {'3e999e38253834baa63881ea451f2839': '99b88d9cde1d8986decbc5985da87187'});
initializePlayer('epn3', 'https://wp3-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000109_019464/go-dash-fhd-avc/NL_000109_019464.mpd?p=tisa', {'3e999e38253834baa63881ea451f2839': '99b88d9cde1d8986decbc5985da87187'});
initializePlayer('epn4', 'https://wp4-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000110_019562/go-dash-fhd-avc/NL_000110_019562.mpd?p=tisa', {'3e999e38253834baa63881ea451f2839': '99b88d9cde1d8986decbc5985da87187'});

initializePlayer('go3r1', 'https://cdn6.tvplayhome.lt/live/eds/TV3_Sport_HD_HVC/GO3_LIVE_DASH_AVC/TV3_Sport_HD_HVC.mpd', {'610ad79e26a84fc782c987455e21a86b': 'd2d4acc6e79447b55f3f5c0267af06f5'});
initializePlayer('go3r2', 'https://cdn6.tvplayhome.lt/live/eds/TV3_Sport2_HD_HVC/GO3_LIVE_DASH_AVC/TV3_Sport2_HD_HVC.mpd', {'3fc5ce88ae24460bafa447b53ab5f548': '476a55ef72c5e27e310668b1667da615'});
initializePlayer('go3r3', 'https://cdn6.tvplayhome.lt/live/eds/TV3_Sport3_HD_HVC/GO3_LIVE_DASH_AVC/TV3_Sport3_HD_HVC.mpd', {'a2a75672057f462089c2849b8184fcb0': '94899cace4911c617c27d8f878de2b43'});
    
initializePlayer('pt1', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-054/stream.mpd', {'610ad79e26a84fc782c987455e21a86b': 'd2d4acc6e79447b55f3f5c0267af06f5'});
initializePlayer('pt2', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-055/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('pt3', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-056/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('pt4', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-057/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('pt5', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-058/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('pt6', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-059/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});

initializePlayer('de1', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-017/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('de2', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-018/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('de3', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-024/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('digi', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-022/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('def1', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-016/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('da1', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-036/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('da2', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-037/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('da3', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-038/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('pl1', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-051/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('pl2', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-052/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('pl3', 'https://jarangoyang.donelfantastic.workers.dev/dazn-linear-053/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});

initializePlayer('spo1', 'https://av-ch-cdn.mncnow.id/live/eds/SPOTV-HD/sa_dash_vmx/SPOTV-HD.mpd', {'57d2ac9210cfbca3596cc679a01c8b29': 'd5e35c0f39c76adf24853d7ea18c71e7'});
initializePlayer('spo2', 'https://av-ch-cdn.mncnow.id/live/eds/SPOTV2-HD/sa_dash_vmx/SPOTV2-HD.mpd', {'57d2ac9210cfbca3596cc679a01c8b29': 'd5e35c0f39c76adf24853d7ea18c71e7'});
initializePlayer('sta1', 'https://av-ch-cdn.mncnow.id/live/eds/MNCSports-HD/sa_dash_vmx/MNCSports-HD.mpd', {'531c6d50e3e9f9ba66446f624f492289': 'd769d9ae238bdd424f8bcdcdc9a3801f'});
initializePlayer('sta2', 'https://av-ch-cdn.mncnow.id/live/eds/MNCSports2-HD/sa_dash_vmx/MNCSports2-HD.mpd', {'45fec91ce1f19b6b1f31d69dcfaaf6cd': '843e228ab109e9aa6c4822ee4ad05d7d'});
initializePlayer('sta3', 'https://av-ch-cdn.mncnow.id/live/eds/MNCSports3-HD/sa_dash_vmx/MNCSports3-HD.mpd', {'45fec91ce1f19b6b1f31d69dcfaaf6cd': '843e228ab109e9aa6c4822ee4ad05d7d'});
initializePlayer('soc', 'https://av-ch-cdn.mncnow.id/live/eds/soccerchannel-test/sa_dash_vmx/soccerchannel-test.mpd', {'4d38060bf41b3c29df0ec950ece6b5da': '7ee9506b13480491d79b71c062ab5366'});
initializePlayer('soc1', 'https://av-ch-cdn.mncnow.id/live/eds/rcti-soccerchannel-hd/sa_hls/rcti-soccerchannel-hd.m3u8', {'4d38060bf41b3c29df0ec950ece6b5da': '7ee9506b13480491d79b71c062ab5366'});
initializePlayer('ad1', 'https://uselector.cdn.intigral-ott.net/ADSP1/ADSP1.isml/manifest.mpd', {'eb5a3a48f3e191a00e3ac1e2d470c491': '2c8b7198563527e524d66628c092ef1f'});
initializePlayer('ad2', 'https://uselector.cdn.intigral-ott.net/ADSP2/ADSP2.isml/manifest.mpd', {'efca93272b9d34f5cf9d8598f43be5ea': '55e5fe489e9c18f6c979c3126d4bcfed'});
initializePlayer('2no', 'https://ch11-hls-live.akamaized.net/out/u/433127.mpd', {'d12e4c9dc52f4cbab7ac9b2278317e47': 'a7987e5b6ec42db68a25486e108ca9f2'});
initializePlayer('digs', 'https://svc40.main.sl.t-online.de/LCID3221228350.originalserver.prod.sngtv.t-online.de/PLTV/88888888/224/3221228350/3221228350.mpd', {'64fdf75a9fc7fa2f0dc197ecdfd07eba': '44094f8dd29164989b9daecb9aabf4f2'});

initializePlayer('sn36', 'https://live-streaming-rsm.akamaized.net/sn360h/sn360h_cenc.isml/.mpd', {'9aa86d20170e4f80aad6288cabdeec0d': 'd007173f78a682cdfa794b2f766d38e3'});
initializePlayer('vpre', 'https://cors-proxy.cooks.fyi/https://director.streaming.telia.com/tvm-packager-prod/group1/60896c3647a23d7f115cd57a/manifest.mpd', {'eab13e69793756eda77d8d71fda90d5d': 'cd022e9bffa6a0d1523ee5d9fcda9ed4'});
initializePlayer('liv', 'https://g006-sle-us-cmaf-prd-ak.cdn.peacocktv.com/co01/Content/CMAF_S2-CTR-4s/Live/channel(5012845-713970-48f24e35a32)/master.mpd', {'0022a94d0dfdddaa296f5f0915d47270':'491da02c8940ecb6c3eb392075734bf2'});
initializePlayer('skype', 'https://cors-anywhere-batou.herokuapp.com/https://linear015-gb-dash1-prd-cf.cdn.skycdp.com/Content/DASH_003_720_120/Live/channel(skysportspremierleague)/manifest_720-120.mpd', {'00058832b1c058c3de8b5d118cc775d4':'721345f25729d236d6bb317fce797b77'});
initializePlayer('uni', 'https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CTR-4s/Live/channel(universo-east)/master.mpd', {'232d71bb013d39ffb92ee8c576fb7e8e': '087408a48be8d57046c3868b37ea90ba'});
    
//BRAZIL
initializePlayer('premierebr', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/4zkafrcxji/out/v1/810ebca1aff0443da717da4acdeda158/cenc.mpd', {'d98239180d8380b3a1bb28d875b1ddf2':'cf836ced579257d1c76ae8809818e6c4'});
initializePlayer('premierebr2', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/pgub1bh7o9/out/v1/7a59226197644bfaa2b00f488bd95288/cenc.mpd', {'fd2e8019f37211ca8b78a8b656f1b83a':'273189c214e85b43ac36298d1c422330'});
initializePlayer('premierebr3', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/8ci7l7dt0d/out/v1/98fe69f2cdc041388004305e63353268/cenc.mpd', {'9547f9aead1237c8a3b1bf0a91ed9995':'534fab4541fef31921dd970c65d51848'});
initializePlayer('premierebr4', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/zytzybatcd/out/v1/4e59aa00f6784bb98170741d40b33e3e/cenc.mpd', {'ce5d18ffd68650affce1985201983ab7':'397c64e42507d95e5460830918c22a98'});
initializePlayer('premierebr5', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/j4y12ucrx0/out/v1/9135597c4400465e9e752dc32de587fd/cenc.mpd', {'d5a3ac0b892bfccdf352b6def9cb2764':'ac0936acc0036fad2273efaa42b1fafd'});
initializePlayer('premierebr6', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/cydwktwhqj/out/v1/c6e2919fe4e04a73935691f8284a4afe/cenc.mpd', {'05cedc366ce4ec735ee4b33fcefbf01f':'475d6dd40eaba6896e02b26a6cf34d95'});
initializePlayer('premierebr7', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/wczqphrl5k/out/v1/7a20b4be236a4a9484fdf5cdfcbe79d5/cenc.mpd', {'7ce96e01eee54fb77e5cc4e7b753d6b0':'184f94303d3357b9a7381ccdeee9b611'});
initializePlayer('premierebr8', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/dabubydklo/out/v1/c272f10312ac4e81bcf2183509703dd1/cenc.mpd', {'7ba384f9d983c731ab1e3702c16e2faf':'f28adca4375e8a041fd22aef26440009'});

initializePlayer('usac', 'https://cfrt.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(usa-west)/master.mpd', {'252a671825ba31ec8433f978c32ccf6d':'ee560759ecc8d2274df2e63fcef56915'});
initializePlayer('nbc', 'https://fsly.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(knbc)/master.mpd', {'0045a118e231f1326bcdb45350b1ceaa':'8c13afbfa54ea37a368b8b859021f6e3'});
initializePlayer('tel', 'https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CTR-4s/Live/channel(WNJU)/master.mpd', {'e1f756cffcc838e28a3da6541c00ee8b':'1444b1c17a5c1f78435de12dcff47c8e'});
initializePlayer('te4', 'https://cors-proxy.cooks.fyi/https://director.streaming.telia.com/tvm-packager-prod/group3/60ae452e1522bdf301694494/manifest.mpd', {'c1c657aa160c5b328f1e76747534b913':'785e0773e9d534a00f4619315674ef7f'});
    
// SSC
initializePlayer('ssc1', 'https://ssc-1-enc.edgenextcdn.net/out/v1/c696e4819b55414388a1a487e8a45ca1/index.mpd', {'d84c325f36814f39bbe59080272b10c3': '550727de4c96ef1ecff874905493580f'});
initializePlayer('ssc2', 'https://ssc-2-enc.edgenextcdn.net/out/v1/a16db2ec338a445a82d9c541cc9293f9/index.mpd', {'8bcfc55359e24bd7ad1c5560a96ddd3c': 'b5dcf721ab522af92a9d3bf0bd55b596'});
initializePlayer('ssc3', 'https://ssc-3-enc.edgenextcdn.net/out/v1/42e86125555242aaa2a12056832e7814/index.mpd', {'7de5dd08ad8041d586c2f16ccc9490a1': '5e1503f3398b34f5099933fedab847ef'});
initializePlayer('ssc4', 'https://ssc-4-enc.edgenextcdn.net/out/v1/5267ea5772874b0db24559d643eaad93/index.mpd', {'5c672f6b85a94638872d0214f7806ed4': 'bf8756fbb866ee2d5c701c2289dd8de3'});
initializePlayer('ssc5', 'https://ssc-5-enc.edgenextcdn.net/out/v1/99289eac5a7b4319905da595afbd792b/index.mpd', {'c88b512b17ab4f6cb09eb0ff4a1056ed': 'adc08ee1c20a734972a55c9aebbd1888'});
    
initializePlayer('ssc_extra1', 'https://ssc-extra-1-enc.edgenextcdn.net/out/v1/647c58693f1d46af92bd7e69f17912cb/index.mpd', {'ecbc9e6fe6b145efb6658fb5cf7427f8': '03c17e28911f71221acbc0b11f900401'});

initializePlayer('ssc_extra3', 'https://ssc-extra-2-enc.edgenextcdn.net/out/v1/8f1c6c3f05ef4284a64b342891bd85ae/index.mpd', {'98cfd6fd4812497fb24dc75f7545f2ee': 'd3006ee69e77b25939728ebf30d3180a'});

initializePlayer('ssc_extra2', 'https://ssc-extra-3-enc.edgenextcdn.net/out/v1/8f1c6c3f05ef4284a64b342891bd85ae/index.mpd', {'98cfd6fd4812497fb24dc75f7545f2ee': 'd3006ee69e77b25939728ebf30d3180a'});

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

initializePlayer('unifi1', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227877/3221227877.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=pDVeBhPtc549NayvHFA0JHqiwYJ%2FKEP6UdMtjXIjIzrjYyGN4h5HPUHLEk%2FvL80xPjG9KTt82xXCdpGInMoKWMBLe9Ie9rQgSTZ%2FmsUArMht5J0dsgfU28LWZM15p3G2%3A20221124103114%3AUTC%2C10001002142071%2C115.164.56.153%2C20221124103114%2Curn:Huawei:liveTV:XTV54185493%2C10001002142071%2C-1%2C0%2C1%2C%2C%2C2%2CHESA0002%2C%2C%2C2%2C10000104188313%2C0%2C10000103564441%2C798506651%2C%2C%2C2%2C1%2CEND&GuardEncType=2&tenantId=6003&from=5&ocs=2_1.9.62.168_80&hms_devid=1785&mag_hms=1785,1793,1786,1788&it=H4sIAAAAAAAAA0XMQQvCIBiA4X_jUdTPJjt4KoIuEqy6xqd-ycBN0jXo38ci6P4-71Ix0OlgwQtjAoAG2mlJvqe-wwCx0xCVNoE1erpigQXMeZyTK3Fjt2F_l4ILrpTkUrHLtjtmTFZ9S_eaPNU_G6iuYyAb24Ov2DimVCnhMpaZnzO-rzX_kg9sQKxomQAAAA', {'cbb673fb120882354735ed57eeb05b4c': 'fe003f7aeec40eb65d20b14edfda2a86'});


initializePlayer('prima1', 'https://ott.cyberhost.ro/sdash/LIVE$LookTVHD/index.mpd/Manifest?start=LIVE&end=END&device=MPD-LIVE-PC-Widevine-HD-ENC', {'64fca4a48c14d2b32afcd53971cfa62c': 'fe003f7aeec40eb65d20b14edfda2a86'});
initializePlayer('prima2', 'https://ott.cyberhost.ro/sdash/LIVE$LookTVHD/index.mpd/Manifest?start=LIVE&end=END&device=MPD-LIVE-PC-Widevine-HD-ENC', {'96c311676c08545ea6aae37668e4a0df': '64fca4a48c14d2b32afcd53971cfa62c'});
initializePlayer('prima3', 'https://ott1.cyberhost.ro/sdash/LIVE$LookSport3HD/index.mpd/Manifest?start=LIVE&end=END&device=MPD-LIVE-PC-Widevine-HD-ENC', {'9404e7ae27dce22d69d41ffc29197cef': 'a6177128238fe775d5c74803e15ac175'});
initializePlayer('prima4', 'https://ott.cyberhost.ro/sdash/LIVE$LookSport2HD/index.mpd/Manifest?start=LIVE&end=END&device=MPD-LIVE-PC-Widevine-HD-ENC', {'c68ec2e525d8406b6c3cedbac72debae': 'a0f28f93fb9834d331df3ddedeb8a565'});

initializePlayer('orag1', 'https://ott1.cyberhost.ro/sdash/LIVE$DolceSportHD/index.mpd/Manifest?start=LIVE&end=END&device=MPD-LIVE-PC-Widevine-HD-ENC', {'b11517de312fcab5cba06be35e482138': '806573a74789a69651c162da4dbb5526'});
initializePlayer('orag2', 'https://ott1.cyberhost.ro/sdash/LIVE$DolceSport2HD/index.mpd/Manifest?start=LIVE&end=END&device=MPD-LIVE-PC-Widevine-HD-ENC', {'f75302cdb04a09e43f153095bcacd123': '307bf889d92969ffd3014dddb67999f6'});
initializePlayer('orag3', 'https://ott1.cyberhost.ro/sdash/LIVE$DolceSport3/index.mpd/Manifest?start=LIVE&end=END&device=MPD-LIVE-PC-Widevine-HD-ENC', {'b87857ba74ce03f9fa2866f1e086d05d': '1cd289ac71ce5fb306a5e7653192ce3a'});
initializePlayer('orag4', 'https://ott1.cyberhost.ro/sdash/LIVE$DolceSport4/index.mpd/Manifest?start=LIVE&end=END&device=MPD-LIVE-PC-Widevine-HD-ENC', {'202a927cd913101de765b0e5bb3f500f': 'cdd399869057bc34c827f257f562643a'});

initializePlayer('arp1', 'https://webtvstream.bhtelecom.ba/hls6/as_premium1.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('arp2', 'https://webtvstream.bhtelecom.ba/hls6/as_premium2.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('arp3', 'https://webtvstream.bhtelecom.ba/hls6/as_premium3.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('arpl', 'https://webtvstream.bhtelecom.ba/hls6/premier_league.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('ar1', 'https://webtvstream.bhtelecom.ba/hls6/arena1.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('ar2', 'https://webtvstream.bhtelecom.ba/hls6/arena2.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('ar3', 'https://webtvstream.bhtelecom.ba/hls6/arena3.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('ar4', 'https://webtvstream.bhtelecom.ba/hls6/arena4.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('ar5', 'https://webtvstream.bhtelecom.ba/hls6/arena5.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('ar6', 'https://webtvstream.bhtelecom.ba/hls6/arena6.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d'});

initializePlayer('rcti', 'https://av-ch-cdn.mncnow.id/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd', {'9ba3e153ef8956d6e2b0684fcf74f58f': 'dbc28cb5c6426080f984a5b6d436bb30'});
initializePlayer('mnc', 'https://av-ch-cdn.mncnow.id/live/eds/MNCTV-HD/sa_dash_vmx/MNCTV-HD.mpd', {'828e0aba9825c3546a2831e4c0c36f7f': 'f85d3dcd38981368ab3da597e97ebdcc'});
initializePlayer('gtv', 'https://av-ch-cdn.mncnow.id/live/eds/GTV-HD/sa_dash_vmx/GTV-HD.mpd', {'88f6c7cbd793374cb5f12d7e26dcd63b': 'e82daa7c7bfb03d99327463fdbd37336'});
initializePlayer('news', 'https://1s1.rctiplus.id/inews2023.m3u8', {'a31cf5136789514b7e12b9cc99307c84': '980e54d671ffc2b2f4cf54e75cae0ac2'});
initializePlayer('sctv', 'https://op-group1-swiftservehd-1.dens.tv/h/h217/index.m3u8', {'a79a188263724bfcaafc4a7c3b3cd8ce': '4d4732d93e6720de0ef884d7106e14f7'});
initializePlayer('ind', 'https://op-group1-swiftservehd-1.dens.tv/h/h235/index.m3u8', {'5eaddccd893a47ac8b65f9b31963a3ae': '881afa67ea57b41c1822d745d67559e6'});
initializePlayer('moj', 'https://op-group1-swiftservehd-1.dens.tv/h/h207/index.m3u8', {'052861ebedab473089d0e7480d0c5b63': '4d51aa0304af98c449fdec1548a199f9'});
initializePlayer('rtv', 'https://av-ch-cdn.mncnow.id/live/eds/RTV/sa_dash_vmx/RTV.mpd', {'30384ee5424eab4afdff34d7a59e0ef9': '5f3d2f2c194266ae9a28210f8976cbe0'});
initializePlayer('tv7', 'https://av-ch-cdn.mncnow.id/live/eds/Trans7-2/sa_dash_vmx/Trans7-2.mpd', {'26bd60e03bbed7819eea0b27075a1897': 'd221ba6a6ab66e3083c001d2c4a3e5c5'});
initializePlayer('ttv', 'https://av-ch-cdn.mncnow.id/live/eds/TransTV-2/sa_dash_vmx/TransTV-2.mpd', {'334950781f60a66f5e58324b70ac675d': '73caca97be8999ce9cfeb3babad8669d'});
initializePlayer('one', 'https://av-ch-cdn.mncnow.id/live/eds/TVOne-2/sa_dash_vmx/TVOne-2.mpd', {'90204c05545f95a262bb0d3ac45de870': '0e80f2a19fdf8da476bf695cd9570bb2'});
initializePlayer('kom', 'https://av-ch-cdn.mncnow.id/live/eds/KompasTV/sa_dash_vmx/KompasTV.mpd', {'493fd10e609dd02ae97964f438e7e530': '695cf9896182c52f1c3a25820e7778f5'});
initializePlayer('ant', 'https://av-ch-cdn.mncnow.id/live/eds/ANTV/sa_dash_vmx/ANTV.mpd', {'4310edb8b9ffe79abb40bacafa778ec3': 'aebb7e86d8a336d9a93d3dd8a41153cf'});
initializePlayer('net', 'https://av-ch-cdn.mncnow.id/live/eds/NetTV-HD/sa_dash_vmx/NetTV-HD.mpd', {'6b7bbcf1d511a56e6b3ceda392e4fa33': 'd1766244d7c1c44efd4c67aafae3ee7b'});
   
initializePlayer('hbo1', 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd', {'d47ebabf7a21430b83a8c4b82d9ef6b1': '54c213b2b5f885f1e0290ee4131d425b'});
initializePlayer('hbo2', 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd', {'a06ca6c275744151895762e0346380f5': '559da1b63eec77b5a942018f14d3f56f'});
initializePlayer('hbo3', 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd', {'b04ae8017b5b4601a5a0c9060f6d5b7d': 'a8795f3bdb8a4778b7e888ee484cc7a1'});
initializePlayer('hbo4', 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd', {'b207c44332844523a3a3b0469e5652d7': 'fe71aea346db08f8c6fbf0592209f955'});
initializePlayer('tvn', 'https://cdn09jtedge.indihometv.com/joss/133/tvnmovies/index.m3u8', {'32bc2ee6869144b88bee3babf202f88e': '50d3b9ec49e1570621d45822923607f7'});
initializePlayer('kplus', 'https://op-group1-swiftservehd-1.dens.tv/h/h08/index.m3u8', {'32bc2ee6869144b88bee3babf202f88e': '50d3b9ec49e1570621d45822923607f7'});

});
