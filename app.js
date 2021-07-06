const url = 'https://api.rawg.io/api'
const key = '1ed8a932d3f7443e8fb5f92b48e0cdd8'
// url + '/games/{id}' + '?key=' + key

// nes
let megaman2idURL =   url + '/games/53939' + '?key=' + key
let legendofzeldaidURL =  url + '/games/24072' + '?key=' + key
let mariobros3idURL =  url + '/games/24030' + '?key=' + key
let metroididURL =  url + '/games/24138' + '?key=' + key
let dragonQuest3idURL =  url + '/games/54821' + '?key=' + key

// snes
let linktopastidURL =  url + '/games/25096' + '?key=' + key
let supermetroididURL =  url + '/games/27022' + '?key=' + key
let kirbysuperstaridURL =  url + '/games/57399' + '?key=' + key
let megamanxidURL =  url + '/games/57422' + '?key=' + key
let megaman7idURL =  url + '/games/57420' + '?key=' + key

// n64
let ocarinaoftimeidURL =  url + '/games/25097' + '?key=' + key
let majorasmaskidURL =  url + '/games/25924' + '?key=' + key
let banjokazooieURL =  url + '/games/28532' + '?key=' + key
let megaman64URL =  url + '/games/390532' + '?key=' + key
let supermario64idURL =  url + '/games/54528' + '?key=' + key

// GCN
let loztwilightprincessidURL =  url + '/games/27015' + '?key=' + key
let ssbmidURL =  url + '/games/56222' + '?key=' + key
let lozwindwakeridURL =  url + '/games/56092' + '?key=' + key
let supermariosunshineidURL =  url + '/games/52371' + '?key=' + key
let re4idURL =  url + '/games/56184' + '?key=' + key

// Wii
let superMarioGalaxyidURL =  url + '/games/27024' + '?key=' + key
let superMarioGalaxy2idURL =  url + '/games/27036' + '?key=' + key
let monhuntriidURL =  url + '/games/24411' + '?key=' + key

// WiiU
let newsupermariobrosuidURL =  url + '/games/27967' + '?key=' + key
let dkctropicalfreezeidURL =  url + '/games/27978' + '?key=' + key
let zombieuidURL =  url + '/games/27192' + '?key=' + key
let ssbwiiuidURL =  url + '/games/331575' + '?key=' + key
let bayonetta2idURL =  url + '/games/23760' + '?key=' + key

// Switch
let lozbotwidURL =  url + '/games/22511' + '?key=' + key
let marioOdysseyidURL =  url + '/games/28026' + '?key=' + key
let metroiddreadidURL =  url + '/games/622495' + '?key=' + key
let fireemblem3housesidURL =  url + '/games/246478' + '?key=' + key
let monhunriseidURL =  url + '/games/494393' + '?key=' + key

// add to the end of url &page_size={number}
// add to the end of url &search={name}
// add to the end of url &page={number}


async function fetchData(){
    const megaman2 = await fetch(megaman2idURL);
    const legendOfZelda = await fetch(legendofzeldaidURL);
    const marioBros3 = await fetch(mariobros3idURL);
    const metroid = await fetch(metroididURL);
    const dragonQuest3 = await fetch(dragonQuest3idURL);
    const linkToPast = await fetch(linktopastidURL);
    const superMetroid = await fetch(supermetroididURL);
    const kirbySuperstar = await fetch(kirbysuperstaridURL);
    const megamanx = await fetch(megamanxidURL);
    const megaman7 = await fetch(megaman7idURL);
    const ocarinaOfTime = await fetch(ocarinaoftimeidURL);
    const majorasMask = await fetch(majorasmaskidURL);
    const banjoKazooie = await fetch(banjokazooieURL);
    const megaman64 = await fetch(megaman64URL);
    const superMario64 = await fetch(supermario64idURL);
    const lozTwilightPrincess = await fetch(loztwilightprincessidURL);
    const ssbm = await fetch(ssbmidURL);
    const lozWindWaker = await fetch(lozwindwakeridURL);
    const superMarioSunshine = await fetch(supermariosunshineidURL);
    const re4 = await fetch(re4idURL);
    const superMarioGalaxy = await fetch(superMarioGalaxyidURL);
    const superMarioGalaxy2 = await fetch(superMarioGalaxy2idURL);
    const monhunTri = await fetch(monhuntriidURL);
    const newSuperMarioBrosu = await fetch(newsupermariobrosuidURL);
    const dkcTropicalFreeze = await fetch(dkctropicalfreezeidURL);
    const zombieu = await fetch(zombieuidURL);
    const ssbwiiu = await fetch(ssbwiiuidURL);
    const bayonetta2 = await fetch(bayonetta2idURL);
    const lozbotw = await fetch(lozbotwidURL);
    const marioOdyssey = await fetch(marioOdysseyidURL);
    const metroidDread = await fetch(metroiddreadidURL);
    const fireEmblem3Houses = await fetch(fireemblem3housesidURL);
    const monhunRise = await fetch(monhunriseidURL);


    const megaman2data = await megaman2.json();
    const legendOfZeldadata = await legendOfZelda.json();
    const marioBros3data= await marioBros3.json();
    const metroiddata = await metroid.json();
    const dragonQuest3data = await dragonQuest3.json();
    const linkToPastdata = await linkToPast.json();
    const superMetroiddata = await superMetroid.json();
    const kirbySuperstardata = await kirbySuperstar.json();
    const megamanxdata = await megamanx.json();
    const megaman7data = await megaman7.json();
    const ocarinaOfTimedata = await ocarinaOfTime.json();
    const majorasMaskdata = await majorasMask.json();
    const banjoKazooiedata = await banjoKazooie.json();
    const megaman64data = await megaman64.json();
    const superMario64data = await superMario64.json();
    const lozTwilightPrincessdata = await lozTwilightPrincess.json();
    const ssbmdata = await ssbm.json();
    const lozWindWakerdata = await lozWindWaker.json();
    const superMarioSunshinedata = await superMarioSunshine.json();
    const re4data = await re4.json();
    const superMarioGalaxydata = await superMarioGalaxy.json();
    const superMarioGalaxy2data = await superMarioGalaxy2.json();
    const monhunTridata = await monhunTri.json();
    const newSuperMarioBrosudata = await newSuperMarioBrosu.json();
    const dkcTropicalFreezedata = await dkcTropicalFreeze.json();
    const zombieudata = await zombieu.json();
    const ssbwiiudata = await ssbwiiu.json();
    const bayonetta2data = await bayonetta2.json();
    const lozbotwdata = await lozbotw.json();
    const marioOdysseydata = await marioOdyssey.json();
    const metroidDreaddata = await metroidDread.json();
    const fireEmblem3housesdata = await fireEmblem3Houses.json();
    const monhunRisedata = await monhunRise.json();
    
    

    //! Info attatchment section
    //* Megaman 2 
    document.getElementById("mm2title").innerText = megaman2data.name;
    document.getElementById("mm2about").innerText = megaman2data.description_raw;
    document.getElementById("mm2img1").src = megaman2data.background_image;
    document.getElementById("mm2img2").src = megaman2data.background_image_additional;
    document.getElementById("mm2dev").innerText = megaman2data.developers[0].name;
    
    //* Legend of Zelda 
    document.getElementById("lozabout").innerText = legendOfZeldadata.description_raw;
    document.getElementById("lozimg1").src = legendOfZeldadata.background_image;
    document.getElementById("lozimg2").src = legendOfZeldadata.background_image_additional;
    document.getElementById("loztitle").innerText = legendOfZeldadata.name;
    document.getElementById("lozdev").innerText = legendOfZeldadata.developers[0].name;

    //* Super Mario Bros 3 
    document.getElementById("mb3about").innerText = marioBros3data.description_raw;
    document.getElementById("mb3img1").src = marioBros3data.background_image;
    document.getElementById("mb3img2").src = marioBros3data.background_image_additional;
    document.getElementById("mb3title").innerText = marioBros3data.name;
    document.getElementById("mb3dev").innerText = marioBros3data.developers[0].name;

    //* Metroid
    document.getElementById("metroidabout").innerText = metroiddata.description_raw;
    document.getElementById("metroidimg1").src = metroiddata.background_image;
    document.getElementById("metroidimg2").src = metroiddata.background_image_additional;
    document.getElementById("metroidtitle").innerText = metroiddata.name;
    document.getElementById("metroiddev").innerText = metroiddata.developers[0].name;

    //* Dragon Quest 3
    document.getElementById("DQ3about").innerText = dragonQuest3data.description_raw;
    document.getElementById("DQ3img1").src = dragonQuest3data.background_image;
    document.getElementById("DQ3img2").src = dragonQuest3data.background_image_additional;
    document.getElementById("DQ3title").innerText = dragonQuest3data.name;
    document.getElementById("DQ3dev").innerText = dragonQuest3data.developers[0].name;

    //* LoZ Link to the Past
    document.getElementById("pasttitle").innerText = linkToPastdata.name;
    document.getElementById("pastabout").innerText = linkToPastdata.description_raw;
    document.getElementById("pastimg1").src = linkToPastdata.background_image;
    document.getElementById("pastimg2").src = linkToPastdata.background_image_additional;
    document.getElementById("pastdev").innerText = linkToPastdata.developers[0].name;

    //* Super Metroid
    document.getElementById("SMetroidabout").innerText = superMetroiddata.description_raw;
    document.getElementById("SMetroidimg1").src = superMetroiddata.background_image;
    document.getElementById("SMetroidimg2").src = superMetroiddata.background_image_additional;
    document.getElementById("SMetroidtitle").innerText = superMetroiddata.name;
    document.getElementById("SMetroiddev").innerText = superMetroiddata.developers[0].name;

    //* Kirby Superstar
    document.getElementById("KSSabout").innerText = kirbySuperstardata.description_raw;
    document.getElementById("KSSimg1").src = kirbySuperstardata.background_image;
    document.getElementById("KSSimg2").src = kirbySuperstardata.background_image_additional;
    document.getElementById("KSStitle").innerText = kirbySuperstardata.name;
    document.getElementById("KSSdev").innerText = kirbySuperstardata.developers[0].name;

    //* Megaman X
    document.getElementById("MMXabout").innerText = megamanxdata.description_raw;
    document.getElementById("MMXimg1").src = megamanxdata.background_image;
    document.getElementById("MMXimg2").src = megamanxdata.background_image_additional;
    document.getElementById("MMXtitle").innerText = megamanxdata.name;
    document.getElementById("MMXdev").innerText = megamanxdata.developers[0].name;

    //* Megaman 7
    document.getElementById("MM7about").innerText = megaman7data.description_raw;
    document.getElementById("MM7img1").src = megaman7data.background_image;
    document.getElementById("MM7img2").src = megaman7data.background_image_additional;
    document.getElementById("MM7title").innerText = megaman7data.name;
    document.getElementById("MM7dev").innerText = megaman7data.developers[0].name;

    //* LoZ Ocarina of Time
    document.getElementById("OOTabout").innerText = ocarinaOfTimedata.description_raw
    document.getElementById("OOTimg1").src = ocarinaOfTimedata.background_image
    document.getElementById("OOTimg2").src = ocarinaOfTimedata.background_image_additional
    document.getElementById("OOTtitle").innerText = ocarinaOfTimedata.name
    document.getElementById("OOTdev").innerText = ocarinaOfTimedata.developers[0].name
    
    //* Loz Majoras Mask
    document.getElementById("MajMaskabout").innerText = majorasMaskdata.description_raw
    document.getElementById("MajMaskimg1").src = majorasMaskdata.background_image
    document.getElementById("MajMaskimg2").src = majorasMaskdata.background_image_additional
    document.getElementById("MajMasktitle").innerText = majorasMaskdata.name
    document.getElementById("MajMaskdev").innerText = majorasMaskdata.developers[0].name

    //* Banjo Kazooie
    document.getElementById("Banjoabout").innerText = banjoKazooiedata.description_raw
    document.getElementById("Banjoimg1").src = banjoKazooiedata.background_image
    document.getElementById("Banjoimg2").src = banjoKazooiedata.background_image_additional
    document.getElementById("Banjotitle").innerText = banjoKazooiedata.name
    document.getElementById("Banjodev").innerText = banjoKazooiedata.developers[0].name

    //* Megaman 64
    document.getElementById("MM64about").innerText = megaman64data.description_raw
    document.getElementById("MM64img1").src = megaman64data.background_image
    document.getElementById("MM64img2").src = megaman64data.background_image_additional
    document.getElementById("MM64title").innerText = megaman64data.name
    document.getElementById("MM64dev").innerText = megaman64data.developers[0].name

    //* Super Mario 64
    document.getElementById("Mario64about").innerText = superMario64data.description_raw
    document.getElementById("Mario64img1").src = superMario64data.background_image
    document.getElementById("Mario64img2").src = superMario64data.background_image_additional
    document.getElementById("Mario64title").innerText = superMario64data.name
    document.getElementById("Mario64dev").innerText = superMario64data.developers[0].name

    //* LoZ Twilight Princess
    document.getElementById("TwiPrinabout").innerText = lozTwilightPrincessdata.description_raw
    document.getElementById("TwiPrinimg1").src = lozTwilightPrincessdata.background_image
    document.getElementById("TwiPrinimg2").src = lozTwilightPrincessdata.background_image_additional
    document.getElementById("TwiPrintitle").innerText = lozTwilightPrincessdata.name
    document.getElementById("TwiPrindev").innerText = lozTwilightPrincessdata.developers[0].name

    //* SSBM
    document.getElementById("SSBMabout").innerText = ssbmdata.description_raw
    document.getElementById("SSBMimg1").src = ssbmdata.background_image
    document.getElementById("SSBMimg2").src = ssbmdata.background_image_additional
    document.getElementById("SSBMtitle").innerText = ssbmdata.name
    document.getElementById("SSBMdev").innerText = ssbmdata.developers[0].name

    //* LoZ Wind Waker
    document.getElementById("WWabout").innerText = lozWindWakerdata.description_raw
    document.getElementById("WWimg1").src = lozWindWakerdata.background_image
    document.getElementById("WWimg2").src = lozWindWakerdata.background_image_additional
    document.getElementById("WWtitle").innerText = lozWindWakerdata.name
    document.getElementById("WWdev").innerText = lozWindWakerdata.developers[0].name

    //* Super Mario Sunshine
    document.getElementById("Sunshineabout").innerText = superMarioSunshinedata.description_raw
    document.getElementById("Sunshineimg1").src = superMarioSunshinedata.background_image
    document.getElementById("Sunshineimg2").src = superMarioSunshinedata.background_image_additional
    document.getElementById("Sunshinetitle").innerText = superMarioSunshinedata.name
    document.getElementById("Sunshinedev").innerText = superMarioSunshinedata.developers[0].name

    //* Resident Evil 4
    document.getElementById("RE4about").innerText = re4data.description_raw
    document.getElementById("RE4img1").src = re4data.background_image
    document.getElementById("RE4img2").src = re4data.background_image_additional
    document.getElementById("RE4title").innerText = re4data.name
    document.getElementById("RE4dev").innerText = re4data.developers[0].name

    //* Super Mario Galaxy
    document.getElementById("Galaxyabout").innerText = superMarioGalaxydata.description_raw
    document.getElementById("Galaxyimg1").src = superMarioGalaxydata.background_image
    document.getElementById("Galaxyimg2").src = superMarioGalaxydata.background_image_additional
    document.getElementById("Galaxytitle").innerText = superMarioGalaxydata.name
    document.getElementById("Galaxydev").innerText = superMarioGalaxydata.developers[0].name

    //* Super Mario Galaxy 2
    document.getElementById("Galaxy2about").innerText = superMarioGalaxy2data.description_raw
    document.getElementById("Galaxy2img1").src = superMarioGalaxy2data.background_image
    document.getElementById("Galaxy2img2").src = superMarioGalaxy2data.background_image_additional
    document.getElementById("Galaxy2title").innerText = superMarioGalaxy2data.name
    document.getElementById("Galaxy2dev").innerText = superMarioGalaxy2data.developers[0].name

    //* Monster Hunter Tri
    document.getElementById("MHTabout").innerText = monhunTridata.description_raw
    document.getElementById("MHTimg1").src = monhunTridata.background_image
    document.getElementById("MHTimg2").src = monhunTridata.background_image_additional
    document.getElementById("MHTtitle").innerText = monhunTridata.name
    document.getElementById("MHTdev").innerText = monhunTridata.developers[0].name

    //* New Super Mario Bros U
    document.getElementById("MBUabout").innerText = newSuperMarioBrosudata.description_raw
    document.getElementById("MBUimg1").src = newSuperMarioBrosudata.background_image
    document.getElementById("MBUimg2").src = newSuperMarioBrosudata.background_image_additional
    document.getElementById("MBUtitle").innerText = newSuperMarioBrosudata.name
    document.getElementById("MBUdev").innerText = newSuperMarioBrosudata.developers[0].name

    //* Donkey Kong Country Tropical Freeze
    document.getElementById("TropFabout").innerText = dkcTropicalFreezedata.description_raw
    document.getElementById("TropFimg1").src = dkcTropicalFreezedata.background_image
    document.getElementById("TropFimg2").src = dkcTropicalFreezedata.background_image_additional
    document.getElementById("TropFtitle").innerText = dkcTropicalFreezedata.name
    document.getElementById("TropFdev").innerText = dkcTropicalFreezedata.developers[0].name

    //* Zombie U
    document.getElementById("Zombieabout").innerText = zombieudata.description_raw
    document.getElementById("Zombieimg1").src = zombieudata.background_image
    document.getElementById("Zombieimg2").src = zombieudata.background_image_additional
    document.getElementById("Zombietitle").innerText = zombieudata.name
    document.getElementById("Zombiedev").innerText = zombieudata.developers[0].name

    //* SSB Wii U
    document.getElementById("SSBUabout").innerText = ssbwiiudata.description_raw
    document.getElementById("SSBUimg1").src = ssbwiiudata.background_image
    document.getElementById("SSBUimg2").src = ssbwiiudata.background_image_additional
    document.getElementById("SSBUtitle").innerText = ssbwiiudata.name
    document.getElementById("SSBUdev").innerText = ssbwiiudata.developers[0].name

    //* Bayonetta 2
    document.getElementById("Bayoabout").innerText = bayonetta2data.description_raw
    document.getElementById("Bayoimg1").src = bayonetta2data.background_image
    document.getElementById("Bayoimg2").src = bayonetta2data.background_image_additional
    document.getElementById("Bayotitle").innerText = bayonetta2data.name
    document.getElementById("Bayodev").innerText = bayonetta2data.developers[0].name

    //* LoZ Breath of the Wild
    document.getElementById("BotWabout").innerText = lozbotwdata.description_raw
    document.getElementById("BotWimg1").src = lozbotwdata.background_image
    document.getElementById("BotWimg2").src = lozbotwdata.background_image_additional
    document.getElementById("BotWtitle").innerText = lozbotwdata.name
    document.getElementById("BotWdev").innerText = lozbotwdata.developers[0].name

    //* Mario Odyssey
    document.getElementById("Odysseyabout").innerText = marioOdysseydata.description_raw
    document.getElementById("Odysseyimg1").src = marioOdysseydata.background_image
    document.getElementById("Odysseyimg2").src = marioOdysseydata.background_image_additional
    document.getElementById("Odysseytitle").innerText = marioOdysseydata.name
    document.getElementById("Odysseydev").innerText = marioOdysseydata.developers[0].name

    //* Metroid Dread
    document.getElementById("Dreadabout").innerText = metroidDreaddata.description_raw
    document.getElementById("Dreadimg1").src = metroidDreaddata.background_image
    document.getElementById("Dreadimg2").src = metroidDreaddata.background_image_additional
    document.getElementById("Dreadtitle").innerText = metroidDreaddata.name
    document.getElementById("Dreaddev").innerText = metroidDreaddata.developers[0].name

    //* Fire Emblem 3 Houses
    document.getElementById("3Houseabout").innerText = fireEmblem3housesdata.description_raw
    document.getElementById("3Houseimg1").src = fireEmblem3housesdata.background_image
    document.getElementById("3Houseimg2").src = fireEmblem3housesdata.background_image_additional
    document.getElementById("3Housetitle").innerText = fireEmblem3housesdata.name
    document.getElementById("3Housedev").innerText = fireEmblem3housesdata.developers[0].name

    //* Monster Hunter Rise
    document.getElementById("MHRiseabout").innerText = monhunRisedata.description_raw
    document.getElementById("MHRiseimg1").src = monhunRisedata.background_image
    document.getElementById("MHRiseimg2").src = monhunRisedata.background_image_additional
    document.getElementById("MHRisetitle").innerText = monhunRisedata.name
    document.getElementById("MHRisedev").innerText = monhunRisedata.developers[0].name

}

fetchData()