const cities  = [
  {
    "country": "AD",
    "name": "Sant Julià de Lòria",
    "lat": "42.46372",
    "lng": "1.49129"
  },
  {
    "country": "AD",
    "name": "Pas de la Casa",
    "lat": "42.54277",
    "lng": "1.73361"
  },
  {
    "country": "AD",
    "name": "Ordino",
    "lat": "42.55623",
    "lng": "1.53319"
  },
  {
    "country": "AD",
    "name": "les Escaldes",
    "lat": "42.50729",
    "lng": "1.53414"
  },
  {
    "country": "AD",
    "name": "la Massana",
    "lat": "42.54499",
    "lng": "1.51483"
  },
  {
    "country": "AD",
    "name": "Encamp",
    "lat": "42.53474",
    "lng": "1.58014"
  },
  {
    "country": "AD",
    "name": "Canillo",
    "lat": "42.5676",
    "lng": "1.59756"
  },
  {
    "country": "AD",
    "name": "Arinsal",
    "lat": "42.57205",
    "lng": "1.48453"
  },
  {
    "country": "AD",
    "name": "Andorra la Vella",
    "lat": "42.50779",
    "lng": "1.52109"
  },
  {
    "country": "AE",
    "name": "Umm Al Quwain City",
    "lat": "25.56473",
    "lng": "55.55517"
  },
  {
    "country": "AE",
    "name": "Ras Al Khaimah City",
    "lat": "25.78953",
    "lng": "55.9432"
  },
  {
    "country": "AE",
    "name": "Muzayri‘",
    "lat": "23.14355",
    "lng": "53.7881"
  },
  {
    "country": "AE",
    "name": "Murbaḩ",
    "lat": "25.27623",
    "lng": "56.36256"
  },
  {
    "country": "AE",
    "name": "Maşfūţ",
    "lat": "24.81089",
    "lng": "56.10657"
  },
  {
    "country": "AE",
    "name": "Zayed City",
    "lat": "23.65416",
    "lng": "53.70522"
  },
  {
    "country": "AE",
    "name": "Khawr Fakkān",
    "lat": "25.33132",
    "lng": "56.34199"
  },
  {
    "country": "AE",
    "name": "Dubai",
    "lat": "25.07725",
    "lng": "55.30927"
  },
  {
    "country": "AE",
    "name": "Dibba Al-Fujairah",
    "lat": "25.59246",
    "lng": "56.26176"
  },
  {
    "country": "AE",
    "name": "Dibba Al-Hisn",
    "lat": "25.61955",
    "lng": "56.27291"
  },
  {
    "country": "AE",
    "name": "Sharjah",
    "lat": "25.33737",
    "lng": "55.41206"
  },
  {
    "country": "AE",
    "name": "Ar Ruways",
    "lat": "24.11028",
    "lng": "52.73056"
  },
  {
    "country": "AE",
    "name": "Al Manāmah",
    "lat": "25.3299",
    "lng": "56.02188"
  },
  {
    "country": "AE",
    "name": "Al Fujairah City",
    "lat": "25.11641",
    "lng": "56.34141"
  },
  {
    "country": "AE",
    "name": "Al Ain City",
    "lat": "24.19167",
    "lng": "55.76056"
  },
  {
    "country": "AE",
    "name": "Ajman City",
    "lat": "25.40177",
    "lng": "55.47878"
  },
  {
    "country": "AE",
    "name": "Adh Dhayd",
    "lat": "25.28812",
    "lng": "55.88157"
  },
  {
    "country": "AE",
    "name": "Abu Dhabi",
    "lat": "24.45118",
    "lng": "54.39696"
  },
  {
    "country": "AE",
    "name": "Khalifah A City",
    "lat": "24.42588",
    "lng": "54.605"
  },
  {
    "country": "AE",
    "name": "Bani Yas City",
    "lat": "24.30978",
    "lng": "54.62944"
  },
  {
    "country": "AE",
    "name": "Musaffah",
    "lat": "24.35893",
    "lng": "54.48267"
  },
  {
    "country": "AE",
    "name": "Al Shamkhah City",
    "lat": "24.39268",
    "lng": "54.70779"
  },
  {
    "country": "AE",
    "name": "Reef Al Fujairah City",
    "lat": "25.14479",
    "lng": "56.24764"
  },
  {
    "country": "AE",
    "name": "Al Wiqan",
    "lat": "23.75355",
    "lng": "55.32739"
  },
  {
    "country": "AF",
    "name": "Zōr Kōṯ",
    "lat": "33.54149",
    "lng": "69.73446"
  },
  {
    "country": "AF",
    "name": "Wulêswālī Bihsūd",
    "lat": "34.3436",
    "lng": "67.90567"
  },
  {
    "country": "AF",
    "name": "Kuhsān",
    "lat": "34.65389",
    "lng": "61.19778"
  },
  {
    "country": "AF",
    "name": "Lāsh",
    "lat": "35.3782",
    "lng": "64.77457"
  },
  {
    "country": "AF",
    "name": "Tukzār",
    "lat": "35.94831",
    "lng": "66.42132"
  },
  {
    "country": "AF",
    "name": "Bati",
    "lat": "34.24348",
    "lng": "70.72855"
  },
  {
    "country": "AF",
    "name": "Mīray",
    "lat": "33.32462",
    "lng": "68.44068"
  },
  {
    "country": "AF",
    "name": "Āq Kupruk",
    "lat": "36.08352",
    "lng": "66.84029"
  },
  {
    "country": "AF",
    "name": "Zurmat",
    "lat": "33.43778",
    "lng": "69.02774"
  },
  {
    "country": "AF",
    "name": "Zaybāk",
    "lat": "36.52947",
    "lng": "71.3441"
  },
  {
    "country": "AF",
    "name": "Zīārat-e Shāh Maqşūd",
    "lat": "31.9848",
    "lng": "65.4736"
  },
  {
    "country": "AF",
    "name": "Zindah Jān",
    "lat": "34.34264",
    "lng": "61.74675"
  },
  {
    "country": "AF",
    "name": "Zarghūn Shahr",
    "lat": "32.84734",
    "lng": "68.44573"
  },
  {
    "country": "AF",
    "name": "Zaṟah Sharan",
    "lat": "33.14641",
    "lng": "68.79213"
  },
  {
    "country": "AF",
    "name": "Zaranj",
    "lat": "30.95962",
    "lng": "61.86037"
  },
  {
    "country": "AF",
    "name": "Zamtō Kêlay",
    "lat": "32.3726",
    "lng": "66.17708"
  },
  {
    "country": "AF",
    "name": "Yangī Qal‘ah",
    "lat": "37.46572",
    "lng": "69.61131"
  },
  {
    "country": "AF",
    "name": "Bāzār-e Yakāwlang",
    "lat": "34.73525",
    "lng": "66.97379"
  },
  {
    "country": "AF",
    "name": "Yaḩyá Khēl",
    "lat": "32.93742",
    "lng": "68.64622"
  },
  {
    "country": "AF",
    "name": "Wāshēr",
    "lat": "32.25122",
    "lng": "63.85553"
  },
  {
    "country": "AF",
    "name": "Tōrmay",
    "lat": "33.68847",
    "lng": "68.40205"
  },
  {
    "country": "AF",
    "name": "Tūlak",
    "lat": "33.97509",
    "lng": "63.72868"
  },
  {
    "country": "AF",
    "name": "Tītān",
    "lat": "33.69032",
    "lng": "63.86361"
  },
  {
    "country": "AF",
    "name": "Tīr Pul",
    "lat": "34.59431",
    "lng": "61.26895"
  },
  {
    "country": "AF",
    "name": "Taywarah",
    "lat": "33.52118",
    "lng": "64.42116"
  },
  {
    "country": "AF",
    "name": "Bāzār-e Tashkān",
    "lat": "36.88168",
    "lng": "70.27674"
  },
  {
    "country": "AF",
    "name": "Tarinkot",
    "lat": "32.62998",
    "lng": "65.87806"
  },
  {
    "country": "AF",
    "name": "Taloqan",
    "lat": "36.73605",
    "lng": "69.53451"
  },
  {
    "country": "AF",
    "name": "Tagāw-Bāy",
    "lat": "35.69941",
    "lng": "66.06164"
  },
  {
    "country": "AF",
    "name": "Tagāb",
    "lat": "34.85501",
    "lng": "69.64917"
  },
  {
    "country": "AF",
    "name": "Markaz-e Ḩukūmat-e Sulţān-e Bakwāh",
    "lat": "32.24139",
    "lng": "62.94936"
  },
  {
    "country": "AF",
    "name": "Spīn Bōldak",
    "lat": "31.00575",
    "lng": "66.40001"
  },
  {
    "country": "AF",
    "name": "Spērah",
    "lat": "33.20204",
    "lng": "69.5152"
  },
  {
    "country": "AF",
    "name": "Sōzmah Qal‘ah",
    "lat": "36.09916",
    "lng": "66.20823"
  },
  {
    "country": "AF",
    "name": "Siyāhgird",
    "lat": "35.00553",
    "lng": "68.85578"
  },
  {
    "country": "AF",
    "name": "S̲h̲ēwah",
    "lat": "34.57169",
    "lng": "70.58859"
  },
  {
    "country": "AF",
    "name": "Shīnḏanḏ",
    "lat": "33.30294",
    "lng": "62.1474"
  },
  {
    "country": "AF",
    "name": "Shaykh Amīr Kêlay",
    "lat": "33.28744",
    "lng": "69.91283"
  },
  {
    "country": "AF",
    "name": "Qāshqāl",
    "lat": "35.03975",
    "lng": "69.00685"
  },
  {
    "country": "AF",
    "name": "Shibirghān",
    "lat": "36.66757",
    "lng": "65.7529"
  },
  {
    "country": "AF",
    "name": "Shwāk",
    "lat": "33.42386",
    "lng": "69.37684"
  },
  {
    "country": "AF",
    "name": "Shahr-e Şafā",
    "lat": "31.80347",
    "lng": "66.32376"
  },
  {
    "country": "AF",
    "name": "Shahrān",
    "lat": "36.97984",
    "lng": "70.73928"
  },
  {
    "country": "AF",
    "name": "Shahrak",
    "lat": "34.10737",
    "lng": "64.3052"
  },
  {
    "country": "AF",
    "name": "‘Alāqahdārī Shāh Jōy",
    "lat": "32.52154",
    "lng": "67.41315"
  },
  {
    "country": "AF",
    "name": "Wulêswālī Sayyid Karam",
    "lat": "33.69056",
    "lng": "69.36881"
  },
  {
    "country": "AF",
    "name": "Markaz-e Sayyidābād",
    "lat": "34.00037",
    "lng": "68.71346"
  },
  {
    "country": "AF",
    "name": "Şayād",
    "lat": "36.13529",
    "lng": "65.8297"
  },
  {
    "country": "AF",
    "name": "Sidqābād",
    "lat": "35.02298",
    "lng": "69.35112"
  },
  {
    "country": "AF",
    "name": "Sāyagaz",
    "lat": "32.56521",
    "lng": "67.03324"
  },
  {
    "country": "AF",
    "name": "Sar-e Tayghān",
    "lat": "33.50998",
    "lng": "65.67632"
  },
  {
    "country": "AF",
    "name": "Sarōbī",
    "lat": "34.58962",
    "lng": "69.76005"
  },
  {
    "country": "AF",
    "name": "Sar Kāṉī",
    "lat": "34.79023",
    "lng": "71.10962"
  },
  {
    "country": "AF",
    "name": "Sarfirāz Kalā",
    "lat": "32.98333",
    "lng": "67.96517"
  },
  {
    "country": "AF",
    "name": "Sar-e Pul",
    "lat": "36.21544",
    "lng": "65.93249"
  },
  {
    "country": "AF",
    "name": "Sar Chakān",
    "lat": "35.70177",
    "lng": "65.23055"
  },
  {
    "country": "AF",
    "name": "Sangīn",
    "lat": "32.07275",
    "lng": "64.8359"
  },
  {
    "country": "AF",
    "name": "Sang-e Māshah",
    "lat": "33.1396",
    "lng": "67.44046"
  },
  {
    "country": "AF",
    "name": "Sang-e Chārak",
    "lat": "35.84972",
    "lng": "66.43694"
  },
  {
    "country": "AF",
    "name": "Sang Atesh",
    "lat": "35.248",
    "lng": "63.0044"
  },
  {
    "country": "AF",
    "name": "Sangar Sarāy",
    "lat": "34.40744",
    "lng": "70.63937"
  },
  {
    "country": "AF",
    "name": "Aībak",
    "lat": "36.26468",
    "lng": "68.01551"
  },
  {
    "country": "AF",
    "name": "Rū-ye Sang",
    "lat": "35.31999",
    "lng": "67.63387"
  },
  {
    "country": "AF",
    "name": "Rūdbār",
    "lat": "30.15",
    "lng": "62.6"
  },
  {
    "country": "AF",
    "name": "Rustāq",
    "lat": "37.12604",
    "lng": "69.83045"
  },
  {
    "country": "AF",
    "name": "Rabāţ-e Sangī-ye Pā’īn",
    "lat": "34.79951",
    "lng": "62.13917"
  },
  {
    "country": "AF",
    "name": "Rāmak",
    "lat": "33.52234",
    "lng": "68.6264"
  },
  {
    "country": "AF",
    "name": "Qurghān",
    "lat": "36.91939",
    "lng": "65.0649"
  },
  {
    "country": "AF",
    "name": "Quchanghī",
    "lat": "34.06183",
    "lng": "66.27801"
  },
  {
    "country": "AF",
    "name": "Qaīşār",
    "lat": "35.68747",
    "lng": "64.29318"
  },
  {
    "country": "AF",
    "name": "Qarqīn",
    "lat": "37.41853",
    "lng": "66.04358"
  },
  {
    "country": "AF",
    "name": "Qarghah’ī",
    "lat": "34.55402",
    "lng": "70.24292"
  },
  {
    "country": "AF",
    "name": "Qarchī Gak",
    "lat": "37.03999",
    "lng": "66.78891"
  },
  {
    "country": "AF",
    "name": "Qarāwul",
    "lat": "37.21959",
    "lng": "68.7802"
  },
  {
    "country": "AF",
    "name": "Qarah Bāgh",
    "lat": "34.94023",
    "lng": "61.77589"
  },
  {
    "country": "AF",
    "name": "Qarah Bāgh",
    "lat": "33.19801",
    "lng": "68.10798"
  },
  {
    "country": "AF",
    "name": "Qala i Naw",
    "lat": "34.98735",
    "lng": "63.12891"
  },
  {
    "country": "AF",
    "name": "Qal‘ah-ye Kūf",
    "lat": "38.04119",
    "lng": "70.47298"
  },
  {
    "country": "AF",
    "name": "Qal‘ah-ye Kuhnah",
    "lat": "32.61591",
    "lng": "63.66681"
  },
  {
    "country": "AF",
    "name": "Qal‘ah-ye Shahr",
    "lat": "35.54729",
    "lng": "65.5676"
  },
  {
    "country": "AF",
    "name": "Qalāt",
    "lat": "32.10575",
    "lng": "66.90833"
  },
  {
    "country": "AF",
    "name": "Qal‘ah-ye Shāhī",
    "lat": "34.64921",
    "lng": "70.5914"
  },
  {
    "country": "AF",
    "name": "Qādis",
    "lat": "34.8085",
    "lng": "63.43003"
  },
  {
    "country": "AF",
    "name": "Pārūn",
    "lat": "35.42064",
    "lng": "70.92261"
  },
  {
    "country": "AF",
    "name": "Pul-e Khumrī",
    "lat": "35.94458",
    "lng": "68.71512"
  },
  {
    "country": "AF",
    "name": "Pul-e ‘Alam",
    "lat": "33.99529",
    "lng": "69.02274"
  },
  {
    "country": "AF",
    "name": "Pasnay",
    "lat": "35.76664",
    "lng": "65.76486"
  },
  {
    "country": "AF",
    "name": "Pāshmūl",
    "lat": "31.5572",
    "lng": "65.4343"
  },
  {
    "country": "AF",
    "name": "Pasāband",
    "lat": "33.68956",
    "lng": "64.8531"
  },
  {
    "country": "AF",
    "name": "Panjāb",
    "lat": "34.38795",
    "lng": "67.02327"
  },
  {
    "country": "AF",
    "name": "Paghmān",
    "lat": "34.58787",
    "lng": "68.95091"
  },
  {
    "country": "AF",
    "name": "Ōmnah",
    "lat": "32.90029",
    "lng": "68.79627"
  },
  {
    "country": "AF",
    "name": "Ōbêh",
    "lat": "34.36972",
    "lng": "63.17639"
  },
  {
    "country": "AF",
    "name": "Uruzgān",
    "lat": "32.92775",
    "lng": "66.63253"
  },
  {
    "country": "AF",
    "name": "Urgun",
    "lat": "32.9515",
    "lng": "69.1828"
  },
  {
    "country": "AF",
    "name": "Nūsay",
    "lat": "38.4435",
    "lng": "70.80413"
  },
  {
    "country": "AF",
    "name": "Nūrgal",
    "lat": "34.61341",
    "lng": "70.76498"
  },
  {
    "country": "AF",
    "name": "Now Zād",
    "lat": "32.40315",
    "lng": "64.46959"
  },
  {
    "country": "AF",
    "name": "Nīlī",
    "lat": "33.72178",
    "lng": "66.13023"
  },
  {
    "country": "AF",
    "name": "Nayak",
    "lat": "34.73414",
    "lng": "66.95292"
  },
  {
    "country": "AF",
    "name": "Nāyak",
    "lat": "32.5723",
    "lng": "66.77403"
  },
  {
    "country": "AF",
    "name": "Now Dahānak",
    "lat": "35.62398",
    "lng": "70.00511"
  },
  {
    "country": "AF",
    "name": "Ōkak",
    "lat": "33.89793",
    "lng": "67.95652"
  },
  {
    "country": "AF",
    "name": "Nāṟay",
    "lat": "35.21995",
    "lng": "71.52284"
  },
  {
    "country": "AF",
    "name": "Narang",
    "lat": "34.76009",
    "lng": "71.04738"
  },
  {
    "country": "AF",
    "name": "Nīkêh",
    "lat": "33.18934",
    "lng": "69.27179"
  },
  {
    "country": "AF",
    "name": "Nahrīn",
    "lat": "36.0649",
    "lng": "69.13343"
  },
  {
    "country": "AF",
    "name": "Ḩukūmat-e Nād ‘Alī",
    "lat": "31.64286",
    "lng": "64.23982"
  },
  {
    "country": "AF",
    "name": "Mūsá Qal‘ah",
    "lat": "32.44565",
    "lng": "64.74486"
  },
  {
    "country": "AF",
    "name": "Bala Murghab",
    "lat": "35.58408",
    "lng": "63.32886"
  },
  {
    "country": "AF",
    "name": "Muqêr",
    "lat": "32.82009",
    "lng": "67.76934"
  },
  {
    "country": "AF",
    "name": "Muḩammad Āghah Wuluswālī",
    "lat": "34.21422",
    "lng": "69.10026"
  },
  {
    "country": "AF",
    "name": "Mīzān ‘Alāqahdārī",
    "lat": "32.17635",
    "lng": "66.51271"
  },
  {
    "country": "AF",
    "name": "Mīr Bachah Kōṯ",
    "lat": "34.74999",
    "lng": "69.11899"
  },
  {
    "country": "AF",
    "name": "Mīrān",
    "lat": "34.22037",
    "lng": "68.31259"
  },
  {
    "country": "AF",
    "name": "Mīrābād",
    "lat": "30.43624",
    "lng": "61.8383"
  },
  {
    "country": "AF",
    "name": "Maymana",
    "lat": "35.92139",
    "lng": "64.78361"
  },
  {
    "country": "AF",
    "name": "Maīdān Khūlah",
    "lat": "33.64916",
    "lng": "69.7812"
  },
  {
    "country": "AF",
    "name": "Mingajik",
    "lat": "37.0279",
    "lng": "66.12817"
  },
  {
    "country": "AF",
    "name": "Mehtar Lām",
    "lat": "34.67139",
    "lng": "70.20944"
  },
  {
    "country": "AF",
    "name": "Mazār-e Sharīf",
    "lat": "36.70904",
    "lng": "67.11087"
  },
  {
    "country": "AF",
    "name": "Māymay",
    "lat": "38.40856",
    "lng": "71.03839"
  },
  {
    "country": "AF",
    "name": "Mutā Khān",
    "lat": "33.24001",
    "lng": "68.8663"
  },
  {
    "country": "AF",
    "name": "Mashhad",
    "lat": "36.81665",
    "lng": "70.10211"
  },
  {
    "country": "AF",
    "name": "Mardīān",
    "lat": "36.99252",
    "lng": "66.29654"
  },
  {
    "country": "AF",
    "name": "Mandōl",
    "lat": "35.28403",
    "lng": "70.17017"
  },
  {
    "country": "AF",
    "name": "Māmā Khēl",
    "lat": "34.24494",
    "lng": "69.9968"
  },
  {
    "country": "AF",
    "name": "Lashkar Gāh",
    "lat": "31.59382",
    "lng": "64.37161"
  },
  {
    "country": "AF",
    "name": "Lāsh-e Juwayn",
    "lat": "31.71382",
    "lng": "61.62272"
  },
  {
    "country": "AF",
    "name": "Larkird",
    "lat": "35.48936",
    "lng": "66.66409"
  },
  {
    "country": "AF",
    "name": "La‘l",
    "lat": "34.50141",
    "lng": "66.27997"
  },
  {
    "country": "AF",
    "name": "Kushk",
    "lat": "33.29565",
    "lng": "61.95221"
  },
  {
    "country": "AF",
    "name": "Kōṯowāl",
    "lat": "34.10319",
    "lng": "70.46073"
  },
  {
    "country": "AF",
    "name": "Kushk-e Kuhnah",
    "lat": "34.8711",
    "lng": "62.54762"
  },
  {
    "country": "AF",
    "name": "Kuran wa Munjan",
    "lat": "36.02866",
    "lng": "70.77258"
  },
  {
    "country": "AF",
    "name": "Kunduz",
    "lat": "36.72895",
    "lng": "68.857"
  },
  {
    "country": "AF",
    "name": "Khōshī",
    "lat": "33.99916",
    "lng": "69.21582"
  },
  {
    "country": "AF",
    "name": "Khōshāmand",
    "lat": "32.68567",
    "lng": "68.23801"
  },
  {
    "country": "AF",
    "name": "Khwājah Ghār",
    "lat": "37.06588",
    "lng": "69.42126"
  },
  {
    "country": "AF",
    "name": "Khwājah Dū Kōh",
    "lat": "36.82881",
    "lng": "65.62432"
  },
  {
    "country": "AF",
    "name": "Deh Khwāhān",
    "lat": "37.88965",
    "lng": "70.21875"
  },
  {
    "country": "AF",
    "name": "Khulbisāt",
    "lat": "33.4948",
    "lng": "70.00605"
  },
  {
    "country": "AF",
    "name": "Khūgyāṉī",
    "lat": "31.56267",
    "lng": "66.5814"
  },
  {
    "country": "AF",
    "name": "Khōst",
    "lat": "33.33951",
    "lng": "69.92041"
  },
  {
    "country": "AF",
    "name": "Khulm",
    "lat": "36.69736",
    "lng": "67.69826"
  },
  {
    "country": "AF",
    "name": "Khudāydād Khēl",
    "lat": "35.17835",
    "lng": "67.68758"
  },
  {
    "country": "AF",
    "name": "Khinjān",
    "lat": "35.58908",
    "lng": "68.90093"
  },
  {
    "country": "AF",
    "name": "Khinj",
    "lat": "35.42898",
    "lng": "69.73482"
  },
  {
    "country": "AF",
    "name": "Khāsh",
    "lat": "31.52919",
    "lng": "62.79055"
  },
  {
    "country": "AF",
    "name": "Khān Neshīn",
    "lat": "30.5488",
    "lng": "63.7888"
  },
  {
    "country": "AF",
    "name": "Khānaqāh",
    "lat": "36.62587",
    "lng": "69.53695"
  },
  {
    "country": "AF",
    "name": "Chahār Bāgh",
    "lat": "37.00108",
    "lng": "65.22392"
  },
  {
    "country": "AF",
    "name": "Khandūd",
    "lat": "36.95127",
    "lng": "72.318"
  },
  {
    "country": "AF",
    "name": "Khānaqāh",
    "lat": "36.86279",
    "lng": "66.16656"
  },
  {
    "country": "AF",
    "name": "Khanabad",
    "lat": "36.68304",
    "lng": "69.11279"
  },
  {
    "country": "AF",
    "name": "Khamyāb",
    "lat": "37.5275",
    "lng": "65.75833"
  },
  {
    "country": "AF",
    "name": "Khākirān",
    "lat": "32.8385",
    "lng": "67.07377"
  },
  {
    "country": "AF",
    "name": "Kaz̲h̲ah",
    "lat": "34.24088",
    "lng": "70.18274"
  },
  {
    "country": "AF",
    "name": "Kishk-e Nakhūd",
    "lat": "31.62519",
    "lng": "65.05511"
  },
  {
    "country": "AF",
    "name": "Karukh",
    "lat": "34.48108",
    "lng": "62.5863"
  },
  {
    "country": "AF",
    "name": "Kanḏay",
    "lat": "34.9536",
    "lng": "70.77897"
  },
  {
    "country": "AF",
    "name": "Kandahār",
    "lat": "31.61332",
    "lng": "65.71013"
  },
  {
    "country": "AF",
    "name": "Kalān Deh",
    "lat": "33.83676",
    "lng": "68.40233"
  },
  {
    "country": "AF",
    "name": "Kalakān",
    "lat": "34.78371",
    "lng": "69.15001"
  },
  {
    "country": "AF",
    "name": "Kalafgān",
    "lat": "36.77226",
    "lng": "69.94489"
  },
  {
    "country": "AF",
    "name": "Kajrān",
    "lat": "33.20357",
    "lng": "65.47311"
  },
  {
    "country": "AF",
    "name": "Kā’ī",
    "lat": "34.12819",
    "lng": "70.71828"
  },
  {
    "country": "AF",
    "name": "Kabul",
    "lat": "34.52813",
    "lng": "69.17233"
  },
  {
    "country": "AF",
    "name": "Jurm",
    "lat": "36.86477",
    "lng": "70.83421"
  },
  {
    "country": "AF",
    "name": "Jawand",
    "lat": "35.06361",
    "lng": "64.14917"
  },
  {
    "country": "AF",
    "name": "Jānī Khēl",
    "lat": "32.76315",
    "lng": "68.39722"
  },
  {
    "country": "AF",
    "name": "Jalrēz",
    "lat": "34.4708",
    "lng": "68.65438"
  },
  {
    "country": "AF",
    "name": "Jalālābād",
    "lat": "34.42647",
    "lng": "70.45153"
  },
  {
    "country": "AF",
    "name": "Jabal os Saraj",
    "lat": "35.11833",
    "lng": "69.23778"
  },
  {
    "country": "AF",
    "name": "Ḩukūmat-e Shīnkaī",
    "lat": "31.98303",
    "lng": "67.33558"
  },
  {
    "country": "AF",
    "name": "Herāt",
    "lat": "34.34817",
    "lng": "62.19967"
  },
  {
    "country": "AF",
    "name": "Ḩājī Khēl",
    "lat": "35.10922",
    "lng": "69.43341"
  },
  {
    "country": "AF",
    "name": "Ḩāfiz̧ Moghul",
    "lat": "37.05643",
    "lng": "70.40061"
  },
  {
    "country": "AF",
    "name": "Ḩāfiz̧ān",
    "lat": "34.28665",
    "lng": "70.37247"
  },
  {
    "country": "AF",
    "name": "Guz̄arah",
    "lat": "34.21223",
    "lng": "62.21235"
  },
  {
    "country": "AF",
    "name": "Gōshtah",
    "lat": "34.35822",
    "lng": "70.76264"
  },
  {
    "country": "AF",
    "name": "Gōmal Kêlay",
    "lat": "32.50989",
    "lng": "68.85598"
  },
  {
    "country": "AF",
    "name": "‘Alāqahdārī Gēlān",
    "lat": "32.72692",
    "lng": "67.63696"
  },
  {
    "country": "AF",
    "name": "Ghōriyān",
    "lat": "34.3448",
    "lng": "61.49321"
  },
  {
    "country": "AF",
    "name": "Ghormach",
    "lat": "35.73062",
    "lng": "63.78264"
  },
  {
    "country": "AF",
    "name": "Ghurayd Gharamē",
    "lat": "36.5222",
    "lng": "70.79063"
  },
  {
    "country": "AF",
    "name": "Ghazni",
    "lat": "33.55391",
    "lng": "68.42096"
  },
  {
    "country": "AF",
    "name": "Gereshk",
    "lat": "31.82089",
    "lng": "64.57005"
  },
  {
    "country": "AF",
    "name": "Gardez",
    "lat": "33.59744",
    "lng": "69.22592"
  },
  {
    "country": "AF",
    "name": "Fayzabad",
    "lat": "37.11664",
    "lng": "70.58002"
  },
  {
    "country": "AF",
    "name": "Faīẕābād",
    "lat": "36.82091",
    "lng": "66.45921"
  },
  {
    "country": "AF",
    "name": "Fayẕābād",
    "lat": "36.29111",
    "lng": "64.86222"
  },
  {
    "country": "AF",
    "name": "Qal‘ah-ye Fārsī",
    "lat": "33.78529",
    "lng": "63.24735"
  },
  {
    "country": "AF",
    "name": "Farkhār",
    "lat": "36.57288",
    "lng": "69.85783"
  },
  {
    "country": "AF",
    "name": "Farah",
    "lat": "32.37451",
    "lng": "62.11638"
  },
  {
    "country": "AF",
    "name": "Istālif",
    "lat": "34.83268",
    "lng": "69.07756"
  },
  {
    "country": "AF",
    "name": "Kafir Qala",
    "lat": "34.66667",
    "lng": "61.06667"
  },
  {
    "country": "AF",
    "name": "Injīl",
    "lat": "34.30157",
    "lng": "62.2465"
  },
  {
    "country": "AF",
    "name": "Imām Şāḩib",
    "lat": "37.18897",
    "lng": "68.93644"
  },
  {
    "country": "AF",
    "name": "Dōshī",
    "lat": "35.60918",
    "lng": "68.68473"
  },
  {
    "country": "AF",
    "name": "Dowlatyār",
    "lat": "34.55132",
    "lng": "65.79302"
  },
  {
    "country": "AF",
    "name": "Dowlat Shāh",
    "lat": "34.9504",
    "lng": "70.07102"
  },
  {
    "country": "AF",
    "name": "Dowlatābād",
    "lat": "36.98821",
    "lng": "66.82069"
  },
  {
    "country": "AF",
    "name": "Dowlatābād",
    "lat": "36.43259",
    "lng": "64.92071"
  },
  {
    "country": "AF",
    "name": "Dū Qal‘ah",
    "lat": "32.14237",
    "lng": "61.4469"
  },
  {
    "country": "AF",
    "name": "Dūāb",
    "lat": "35.56277",
    "lng": "67.82191"
  },
  {
    "country": "AF",
    "name": "Dê Nārkhēl Kêlay",
    "lat": "32.43205",
    "lng": "65.63484"
  },
  {
    "country": "AF",
    "name": "Dehī",
    "lat": "35.95806",
    "lng": "67.27998"
  },
  {
    "country": "AF",
    "name": "Deh-e Şalāḩ",
    "lat": "35.69031",
    "lng": "69.31511"
  },
  {
    "country": "AF",
    "name": "Deh-e Now",
    "lat": "34.74767",
    "lng": "69.04784"
  },
  {
    "country": "AF",
    "name": "Dehdādī",
    "lat": "36.66319",
    "lng": "66.99339"
  },
  {
    "country": "AF",
    "name": "Dwah Manḏay",
    "lat": "33.28159",
    "lng": "69.58531"
  },
  {
    "country": "AF",
    "name": "Dasht-e Qal‘ah",
    "lat": "37.1539",
    "lng": "69.4435"
  },
  {
    "country": "AF",
    "name": "Dasht-e Qal‘ah",
    "lat": "33.02978",
    "lng": "63.8395"
  },
  {
    "country": "AF",
    "name": "Dasht-e Archī",
    "lat": "37.13333",
    "lng": "69.16667"
  },
  {
    "country": "AF",
    "name": "Darzāb",
    "lat": "35.97744",
    "lng": "65.37828"
  },
  {
    "country": "AF",
    "name": "Markaz-e Ḩukūmat-e Darwēshān",
    "lat": "31.13231",
    "lng": "64.1934"
  },
  {
    "country": "AF",
    "name": "Darqad",
    "lat": "37.38414",
    "lng": "69.45294"
  },
  {
    "country": "AF",
    "name": "Darāyim",
    "lat": "36.86667",
    "lng": "70.38333"
  },
  {
    "country": "AF",
    "name": "Dāngām",
    "lat": "34.99249",
    "lng": "71.41935"
  },
  {
    "country": "AF",
    "name": "Ḏanḏar",
    "lat": "34.79095",
    "lng": "69.47504"
  },
  {
    "country": "AF",
    "name": "Ḩukūmatī Dahanah-ye Ghōrī",
    "lat": "35.90617",
    "lng": "68.48869"
  },
  {
    "country": "AF",
    "name": "Tsowkêy",
    "lat": "34.69246",
    "lng": "70.92688"
  },
  {
    "country": "AF",
    "name": "Chīras",
    "lat": "35.41674",
    "lng": "65.98234"
  },
  {
    "country": "AF",
    "name": "Chisht-e Sharīf",
    "lat": "34.34731",
    "lng": "63.73966"
  },
  {
    "country": "AF",
    "name": "Chinār",
    "lat": "32.01583",
    "lng": "65.10721"
  },
  {
    "country": "AF",
    "name": "Chimtāl",
    "lat": "36.67818",
    "lng": "66.80325"
  },
  {
    "country": "AF",
    "name": "Charkh",
    "lat": "33.79712",
    "lng": "68.93749"
  },
  {
    "country": "AF",
    "name": "Charikar",
    "lat": "35.01361",
    "lng": "69.17139"
  },
  {
    "country": "AF",
    "name": "Dowr-e Rabāţ",
    "lat": "36.69132",
    "lng": "68.79093"
  },
  {
    "country": "AF",
    "name": "Tsapêraī",
    "lat": "33.83003",
    "lng": "69.9192"
  },
  {
    "country": "AF",
    "name": "Tsamkanī",
    "lat": "33.80298",
    "lng": "69.81671"
  },
  {
    "country": "AF",
    "name": "Chakaray",
    "lat": "34.34099",
    "lng": "69.4377"
  },
  {
    "country": "AF",
    "name": "Chākarān",
    "lat": "36.91112",
    "lng": "71.0688"
  },
  {
    "country": "AF",
    "name": "Chahār Qal‘ah",
    "lat": "33.55267",
    "lng": "68.29828"
  },
  {
    "country": "AF",
    "name": "Chahār Burj",
    "lat": "34.24475",
    "lng": "62.19165"
  },
  {
    "country": "AF",
    "name": "Chāh Āb",
    "lat": "37.39773",
    "lng": "69.81464"
  },
  {
    "country": "AF",
    "name": "Fayrōz Kōh",
    "lat": "34.51952",
    "lng": "65.25093"
  },
  {
    "country": "AF",
    "name": "Bulōlah",
    "lat": "34.87706",
    "lng": "68.0879"
  },
  {
    "country": "AF",
    "name": "Bal Chirāgh",
    "lat": "35.84026",
    "lng": "65.2309"
  },
  {
    "country": "AF",
    "name": "Bāzār-e Tālah",
    "lat": "35.39205",
    "lng": "68.22317"
  },
  {
    "country": "AF",
    "name": "Bāsawul",
    "lat": "34.24749",
    "lng": "70.87218"
  },
  {
    "country": "AF",
    "name": "Būrkah",
    "lat": "36.22242",
    "lng": "69.15037"
  },
  {
    "country": "AF",
    "name": "Barg-e Matāl",
    "lat": "35.67283",
    "lng": "71.34339"
  },
  {
    "country": "AF",
    "name": "Baraki Barak",
    "lat": "33.96744",
    "lng": "68.9492"
  },
  {
    "country": "AF",
    "name": "Banū",
    "lat": "35.63348",
    "lng": "69.26019"
  },
  {
    "country": "AF",
    "name": "Bāmyān",
    "lat": "34.82156",
    "lng": "67.82734"
  },
  {
    "country": "AF",
    "name": "Balkh",
    "lat": "36.75635",
    "lng": "66.8972"
  },
  {
    "country": "AF",
    "name": "Bahārak",
    "lat": "37.00254",
    "lng": "70.90664"
  },
  {
    "country": "AF",
    "name": "Bagrāmī",
    "lat": "34.49376",
    "lng": "69.27427"
  },
  {
    "country": "AF",
    "name": "Baghlān",
    "lat": "36.13068",
    "lng": "68.70829"
  },
  {
    "country": "AF",
    "name": "Ḩukūmatī Azrah",
    "lat": "34.17355",
    "lng": "69.64573"
  },
  {
    "country": "AF",
    "name": "Ārt Khwājah",
    "lat": "37.08571",
    "lng": "69.47958"
  },
  {
    "country": "AF",
    "name": "‘Alāqahdārī Aṯghar",
    "lat": "31.73506",
    "lng": "67.3574"
  },
  {
    "country": "AF",
    "name": "Āsmār",
    "lat": "35.03333",
    "lng": "71.35809"
  },
  {
    "country": "AF",
    "name": "Ashkāsham",
    "lat": "36.68333",
    "lng": "71.53333"
  },
  {
    "country": "AF",
    "name": "Asadābād",
    "lat": "34.87311",
    "lng": "71.14697"
  },
  {
    "country": "AF",
    "name": "Āqchah",
    "lat": "36.905",
    "lng": "66.18341"
  },
  {
    "country": "AF",
    "name": "Andkhōy",
    "lat": "36.95293",
    "lng": "65.12376"
  },
  {
    "country": "AF",
    "name": "’Unābah",
    "lat": "35.23251",
    "lng": "69.37719"
  },
  {
    "country": "AF",
    "name": "Anār Darah",
    "lat": "32.7587",
    "lng": "61.65397"
  },
  {
    "country": "AF",
    "name": "Amānzī",
    "lat": "30.21144",
    "lng": "66.04765"
  },
  {
    "country": "AF",
    "name": "‘Alāqahdārī-ye Almār",
    "lat": "35.84616",
    "lng": "64.53074"
  },
  {
    "country": "AF",
    "name": "‘Alī Shēr ‘Alāqahdārī",
    "lat": "33.4362",
    "lng": "70.06711"
  },
  {
    "country": "AF",
    "name": "Wuluswālī ‘Alīngār",
    "lat": "34.83529",
    "lng": "70.3593"
  },
  {
    "country": "AF",
    "name": "‘Alī Khēl",
    "lat": "33.94253",
    "lng": "69.71908"
  },
  {
    "country": "AF",
    "name": "‘Alāqahdārī Yōsuf Khēl",
    "lat": "33.05195",
    "lng": "68.65"
  },
  {
    "country": "AF",
    "name": "‘Alāqahdārī Dīshū",
    "lat": "30.43206",
    "lng": "63.29802"
  },
  {
    "country": "AF",
    "name": "Alah Sāy",
    "lat": "34.8965",
    "lng": "69.72049"
  },
  {
    "country": "AF",
    "name": "Pachīr wa Āgām",
    "lat": "34.20011",
    "lng": "70.27806"
  },
  {
    "country": "AF",
    "name": "Āfāqī",
    "lat": "36.66172",
    "lng": "69.35095"
  },
  {
    "country": "AF",
    "name": "Adraskan",
    "lat": "33.64573",
    "lng": "62.26959"
  },
  {
    "country": "AF",
    "name": "Āb-e Kamarī",
    "lat": "35.08796",
    "lng": "63.0678"
  },
  {
    "country": "AF",
    "name": "Khadīr",
    "lat": "33.92232",
    "lng": "65.93398"
  },
  {
    "country": "AF",
    "name": "Ghulām ‘Alī",
    "lat": "34.95076",
    "lng": "69.2287"
  },
  {
    "country": "AF",
    "name": "Qarah Bāgh Bāzār",
    "lat": "34.8529",
    "lng": "69.17062"
  },
  {
    "country": "AF",
    "name": "Zargarān",
    "lat": "34.78764",
    "lng": "69.05878"
  },
  {
    "country": "AF",
    "name": "Surkh Bilandī",
    "lat": "34.68474",
    "lng": "69.02863"
  },
  {
    "country": "AF",
    "name": "Pul-e Sangī",
    "lat": "34.59972",
    "lng": "69.25993"
  },
  {
    "country": "AF",
    "name": "Langar",
    "lat": "35.99474",
    "lng": "68.05081"
  },
  {
    "country": "AF",
    "name": "Bāgh-e Maīdān",
    "lat": "35.22156",
    "lng": "69.21397"
  },
  {
    "country": "AF",
    "name": "Ibrāhīm Khān",
    "lat": "35.05352",
    "lng": "69.25654"
  },
  {
    "country": "AF",
    "name": "Qaranghū Tōghaī",
    "lat": "37.21528",
    "lng": "67.63972"
  },
  {
    "country": "AF",
    "name": "Bāzārak",
    "lat": "35.31292",
    "lng": "69.51519"
  },
  {
    "country": "AF",
    "name": "Shērwānī-ye Bālā",
    "lat": "35.01468",
    "lng": "69.59934"
  },
  {
    "country": "AF",
    "name": "Kirāmān",
    "lat": "35.2973",
    "lng": "69.68125"
  },
  {
    "country": "AF",
    "name": "‘Alāqahdārī Saṟōbī",
    "lat": "32.79331",
    "lng": "69.0866"
  },
  {
    "country": "AF",
    "name": "Zīṟūk ‘Alāqahdārī",
    "lat": "33.15806",
    "lng": "69.31278"
  },
  {
    "country": "AF",
    "name": "Kushkak",
    "lat": "32.28991",
    "lng": "61.52194"
  },
  {
    "country": "AF",
    "name": "Khayr Kōṯ",
    "lat": "32.85355",
    "lng": "68.44971"
  },
  {
    "country": "AF",
    "name": "Chowṉêy",
    "lat": "33.38278",
    "lng": "66.27233"
  },
  {
    "country": "AF",
    "name": "Wuṯahpūr",
    "lat": "34.91914",
    "lng": "71.09863"
  },
  {
    "country": "AF",
    "name": "Karbōṟī",
    "lat": "34.96597",
    "lng": "71.2746"
  },
  {
    "country": "AF",
    "name": "Sulţānpūr-e ‘Ulyā",
    "lat": "34.41204",
    "lng": "70.29634"
  },
  {
    "country": "AF",
    "name": "Bābā Şāḩib",
    "lat": "31.66144",
    "lng": "65.66098"
  },
  {
    "country": "AF",
    "name": "Chandal Bā’ī",
    "lat": "34.58469",
    "lng": "68.95524"
  },
  {
    "country": "AF",
    "name": "Dahan-e Jarf",
    "lat": "34.92891",
    "lng": "68.46273"
  },
  {
    "country": "AF",
    "name": "Maydanshakhr",
    "lat": "34.39561",
    "lng": "68.86618"
  },
  {
    "country": "AF",
    "name": "Dū Laīnah",
    "lat": "34.15599",
    "lng": "64.78566"
  },
  {
    "country": "AF",
    "name": "Qaram Qōl",
    "lat": "36.83006",
    "lng": "65.04299"
  },
  {
    "country": "AF",
    "name": "Pul-e Ḩişār",
    "lat": "35.61794",
    "lng": "69.47134"
  },
  {
    "country": "AF",
    "name": "Lab-Sar",
    "lat": "36.02634",
    "lng": "66.83799"
  },
  {
    "country": "AF",
    "name": "Ţāqchah Khānah",
    "lat": "36.61922",
    "lng": "69.62805"
  },
  {
    "country": "AF",
    "name": "March",
    "lat": "37.52845",
    "lng": "70.4482"
  },
  {
    "country": "AF",
    "name": "Zīrakī",
    "lat": "37.59233",
    "lng": "70.55814"
  },
  {
    "country": "AF",
    "name": "‘Alīābād",
    "lat": "36.52115",
    "lng": "68.89985"
  },
  {
    "country": "AF",
    "name": "Pas Pul",
    "lat": "37.47355",
    "lng": "70.61617"
  },
  {
    "country": "AF",
    "name": "Qal‘ah-ye Na‘īm",
    "lat": "34.39951",
    "lng": "69.16705"
  },
  {
    "country": "AF",
    "name": "Markaz-e Woluswalī-ye Āchīn",
    "lat": "34.12583",
    "lng": "70.70778"
  },
  {
    "country": "AF",
    "name": "Māṉōgay",
    "lat": "34.99015",
    "lng": "70.91302"
  },
  {
    "country": "AF",
    "name": "Stêr Giyān",
    "lat": "32.97704",
    "lng": "69.37308"
  },
  {
    "country": "AF",
    "name": "Sharan",
    "lat": "33.17568",
    "lng": "68.73045"
  },
  {
    "country": "AF",
    "name": "Salām Khēl",
    "lat": "33.67067",
    "lng": "69.32983"
  },
  {
    "country": "AG",
    "name": "Saint John’s",
    "lat": "17.12096",
    "lng": "-61.84329"
  },
  {
    "country": "AG",
    "name": "Potters Village",
    "lat": "17.11337",
    "lng": "-61.81962"
  },
  {
    "country": "AG",
    "name": "Piggotts",
    "lat": "17.11667",
    "lng": "-61.8"
  },
  {
    "country": "AG",
    "name": "Parham",
    "lat": "17.09682",
    "lng": "-61.77046"
  },
  {
    "country": "AG",
    "name": "Liberta",
    "lat": "17.04141",
    "lng": "-61.79052"
  },
  {
    "country": "AG",
    "name": "Falmouth",
    "lat": "17.02741",
    "lng": "-61.78136"
  },
  {
    "country": "AG",
    "name": "Codrington",
    "lat": "17.6394",
    "lng": "-61.82437"
  },
  {
    "country": "AG",
    "name": "Bolands",
    "lat": "17.06565",
    "lng": "-61.87466"
  },
  {
    "country": "AG",
    "name": "All Saints",
    "lat": "17.06671",
    "lng": "-61.79303"
  },
  {
    "country": "AI",
    "name": "West End Village",
    "lat": "18.17191",
    "lng": "-63.14941"
  },
  {
    "country": "AI",
    "name": "The Valley",
    "lat": "18.21704",
    "lng": "-63.05783"
  },
  {
    "country": "AI",
    "name": "The Quarter",
    "lat": "18.20799",
    "lng": "-63.04178"
  },
  {
    "country": "AI",
    "name": "Farrington",
    "lat": "18.215",
    "lng": "-63.02238"
  },
  {
    "country": "AI",
    "name": "Stoney Ground",
    "lat": "18.22026",
    "lng": "-63.04607"
  },
  {
    "country": "AI",
    "name": "South Hill Village",
    "lat": "18.19201",
    "lng": "-63.08779"
  },
  {
    "country": "AI",
    "name": "Sandy Ground Village",
    "lat": "18.20118",
    "lng": "-63.08998"
  },
  {
    "country": "AI",
    "name": "North Side",
    "lat": "18.22919",
    "lng": "-63.04401"
  },
  {
    "country": "AI",
    "name": "North Hill Village",
    "lat": "18.20542",
    "lng": "-63.07847"
  },
  {
    "country": "AI",
    "name": "Island Harbour",
    "lat": "18.25601",
    "lng": "-63.0102"
  },
  {
    "country": "AI",
    "name": "George Hill",
    "lat": "18.19939",
    "lng": "-63.0665"
  },
  {
    "country": "AI",
    "name": "East End Village",
    "lat": "18.23333",
    "lng": "-63"
  },
  {
    "country": "AI",
    "name": "Blowing Point Village",
    "lat": "18.17648",
    "lng": "-63.09375"
  },
  {
    "country": "AI",
    "name": "Sandy Hill",
    "lat": "18.22104",
    "lng": "-63.01329"
  },
  {
    "country": "AL",
    "name": "Xarrë",
    "lat": "39.72833",
    "lng": "20.05444"
  },
  {
    "country": "AL",
    "name": "Sarandë",
    "lat": "39.87534",
    "lng": "20.00477"
  },
  {
    "country": "AL",
    "name": "Mesopotam",
    "lat": "39.91028",
    "lng": "20.09222"
  },
  {
    "country": "AL",
    "name": "Markat",
    "lat": "39.73278",
    "lng": "20.19528"
  },
  {
    "country": "AL",
    "name": "Livadhja",
    "lat": "39.78917",
    "lng": "20.12194"
  },
  {
    "country": "AL",
    "name": "Konispol",
    "lat": "39.65889",
    "lng": "20.18139"
  },
  {
    "country": "AL",
    "name": "Kakavijë",
    "lat": "39.90778",
    "lng": "20.35833"
  },
  {
    "country": "AL",
    "name": "Finiq",
    "lat": "39.90639",
    "lng": "20.05833"
  },
  {
    "country": "AL",
    "name": "Dhivër",
    "lat": "39.83611",
    "lng": "20.16861"
  },
  {
    "country": "AL",
    "name": "Delvinë",
    "lat": "39.95111",
    "lng": "20.09778"
  },
  {
    "country": "AL",
    "name": "Aliko",
    "lat": "39.85861",
    "lng": "20.07917"
  },
  {
    "country": "AL",
    "name": "Buçimas",
    "lat": "40.89139",
    "lng": "20.68139"
  },
  {
    "country": "AL",
    "name": "Zerqan",
    "lat": "41.50222",
    "lng": "20.36056"
  },
  {
    "country": "AL",
    "name": "Zavalinë",
    "lat": "40.98083",
    "lng": "20.28083"
  },
  {
    "country": "AL",
    "name": "Zapod",
    "lat": "42.05056",
    "lng": "20.5525"
  },
  {
    "country": "AL",
    "name": "Zall-Reç",
    "lat": "41.87611",
    "lng": "20.32"
  },
  {
    "country": "AL",
    "name": "Zall-Dardhë",
    "lat": "41.80667",
    "lng": "20.33611"
  },
  {
    "country": "AL",
    "name": "Xibër-Murrizë",
    "lat": "41.45472",
    "lng": "20.02556"
  },
  {
    "country": "AL",
    "name": "Vreshtas",
    "lat": "40.79694",
    "lng": "20.77694"
  },
  {
    "country": "AL",
    "name": "Voskopojë",
    "lat": "40.63306",
    "lng": "20.58889"
  },
  {
    "country": "AL",
    "name": "Voskop",
    "lat": "40.61194",
    "lng": "20.69028"
  },
  {
    "country": "AL",
    "name": "Vithkuq",
    "lat": "40.525",
    "lng": "20.5825"
  },
  {
    "country": "AL",
    "name": "Vithkuq",
    "lat": "40.20472",
    "lng": "20.25944"
  },
  {
    "country": "AL",
    "name": "Vërtop",
    "lat": "40.62889",
    "lng": "20.05389"
  },
  {
    "country": "AL",
    "name": "Vergo",
    "lat": "40.00667",
    "lng": "20.00889"
  },
  {
    "country": "AL",
    "name": "Vendresha e Vogël",
    "lat": "40.50722",
    "lng": "20.13472"
  },
  {
    "country": "AL",
    "name": "Velçan",
    "lat": "40.95472",
    "lng": "20.46222"
  },
  {
    "country": "AL",
    "name": "Ujmisht",
    "lat": "41.90833",
    "lng": "20.34694"
  },
  {
    "country": "AL",
    "name": "Udënisht",
    "lat": "40.96333",
    "lng": "20.63917"
  },
  {
    "country": "AL",
    "name": "Tunjë",
    "lat": "40.83417",
    "lng": "20.11194"
  },
  {
    "country": "AL",
    "name": "Tregan",
    "lat": "41.02472",
    "lng": "20.07833"
  },
  {
    "country": "AL",
    "name": "Trebisht-Muçinë",
    "lat": "41.41111",
    "lng": "20.53556"
  },
  {
    "country": "AL",
    "name": "Trebinjë",
    "lat": "40.91333",
    "lng": "20.55306"
  },
  {
    "country": "AL",
    "name": "Topojan",
    "lat": "40.37722",
    "lng": "20.21333"
  },
  {
    "country": "AL",
    "name": "Tomin",
    "lat": "41.69083",
    "lng": "20.42167"
  },
  {
    "country": "AL",
    "name": "Tepelenë",
    "lat": "40.29583",
    "lng": "20.01917"
  },
  {
    "country": "AL",
    "name": "Surroj",
    "lat": "41.99222",
    "lng": "20.34417"
  },
  {
    "country": "AL",
    "name": "Sult",
    "lat": "40.88472",
    "lng": "20.09944"
  },
  {
    "country": "AL",
    "name": "Sukë",
    "lat": "40.37528",
    "lng": "20.15472"
  },
  {
    "country": "AL",
    "name": "Suç",
    "lat": "41.57694",
    "lng": "20.05139"
  },
  {
    "country": "AL",
    "name": "Stravaj",
    "lat": "41.00528",
    "lng": "20.42306"
  },
  {
    "country": "AL",
    "name": "Steblevë",
    "lat": "41.33722",
    "lng": "20.47"
  },
  {
    "country": "AL",
    "name": "Sllovë",
    "lat": "41.80111",
    "lng": "20.40833"
  },
  {
    "country": "AL",
    "name": "Skore",
    "lat": "40.10722",
    "lng": "20.36639"
  },
  {
    "country": "AL",
    "name": "Skënderbegas",
    "lat": "40.77611",
    "lng": "20.24056"
  },
  {
    "country": "AL",
    "name": "Shushicë",
    "lat": "41.0975",
    "lng": "20.14833"
  },
  {
    "country": "AL",
    "name": "Shupenzë",
    "lat": "41.53",
    "lng": "20.42361"
  },
  {
    "country": "AL",
    "name": "Shtiqën",
    "lat": "42.04056",
    "lng": "20.43417"
  },
  {
    "country": "AL",
    "name": "Shishtavec",
    "lat": "41.98",
    "lng": "20.60583"
  },
  {
    "country": "AL",
    "name": "Shirgjan",
    "lat": "41.05194",
    "lng": "20.05333"
  },
  {
    "country": "AL",
    "name": "Shëngjin",
    "lat": "41.92611",
    "lng": "20.18833"
  },
  {
    "country": "AL",
    "name": "Shënmëri",
    "lat": "42.10417",
    "lng": "20.23833"
  },
  {
    "country": "AL",
    "name": "Selishtë",
    "lat": "41.6275",
    "lng": "20.27917"
  },
  {
    "country": "AL",
    "name": "Saraqinishtë",
    "lat": "40.10528",
    "lng": "20.22944"
  },
  {
    "country": "AL",
    "name": "Rukaj",
    "lat": "41.68361",
    "lng": "20.01917"
  },
  {
    "country": "AL",
    "name": "Rajcë",
    "lat": "41.09028",
    "lng": "20.57639"
  },
  {
    "country": "AL",
    "name": "Qukës-Skënderbe",
    "lat": "41.08389",
    "lng": "20.43806"
  },
  {
    "country": "AL",
    "name": "Qestorat",
    "lat": "40.1175",
    "lng": "20.19972"
  },
  {
    "country": "AL",
    "name": "Qereshnik",
    "lat": "40.76333",
    "lng": "20.00972"
  },
  {
    "country": "AL",
    "name": "Qafëmal",
    "lat": "42.09333",
    "lng": "20.09056"
  },
  {
    "country": "AL",
    "name": "Përrenjas-Fshat",
    "lat": "41.06667",
    "lng": "20.53528"
  },
  {
    "country": "AL",
    "name": "Përrenjas",
    "lat": "41.07306",
    "lng": "20.54889"
  },
  {
    "country": "AL",
    "name": "Proptisht",
    "lat": "40.98611",
    "lng": "20.5025"
  },
  {
    "country": "AL",
    "name": "Progër",
    "lat": "40.69417",
    "lng": "20.94028"
  },
  {
    "country": "AL",
    "name": "Potom",
    "lat": "40.48833",
    "lng": "20.37333"
  },
  {
    "country": "AL",
    "name": "Poroçan",
    "lat": "40.94194",
    "lng": "20.29861"
  },
  {
    "country": "AL",
    "name": "Polis-Gostimë",
    "lat": "41.13333",
    "lng": "20.25833"
  },
  {
    "country": "AL",
    "name": "Poliçan",
    "lat": "40.61222",
    "lng": "20.09806"
  },
  {
    "country": "AL",
    "name": "Pojan",
    "lat": "40.72583",
    "lng": "20.8375"
  },
  {
    "country": "AL",
    "name": "Pogradec",
    "lat": "40.9025",
    "lng": "20.6525"
  },
  {
    "country": "AL",
    "name": "Pishaj",
    "lat": "40.88111",
    "lng": "20.18278"
  },
  {
    "country": "AL",
    "name": "Pirg",
    "lat": "40.785",
    "lng": "20.70611"
  },
  {
    "country": "AL",
    "name": "Gjinkar",
    "lat": "40.19944",
    "lng": "20.40611"
  },
  {
    "country": "AL",
    "name": "Petran",
    "lat": "40.20944",
    "lng": "20.41833"
  },
  {
    "country": "AL",
    "name": "Peshkopi",
    "lat": "41.685",
    "lng": "20.42889"
  },
  {
    "country": "AL",
    "name": "Përmet",
    "lat": "40.23361",
    "lng": "20.35167"
  },
  {
    "country": "AL",
    "name": "Ostreni i Math",
    "lat": "41.43083",
    "lng": "20.45556"
  },
  {
    "country": "AL",
    "name": "Orosh",
    "lat": "41.83333",
    "lng": "20.08333"
  },
  {
    "country": "AL",
    "name": "Orenjë",
    "lat": "41.28472",
    "lng": "20.21194"
  },
  {
    "country": "AL",
    "name": "Odrie",
    "lat": "40.13333",
    "lng": "20.16667"
  },
  {
    "country": "AL",
    "name": "Novoselë",
    "lat": "40.76139",
    "lng": "20.69833"
  },
  {
    "country": "AL",
    "name": "Picar",
    "lat": "40.16667",
    "lng": "20.04833"
  },
  {
    "country": "AL",
    "name": "Mollas",
    "lat": "40.92694",
    "lng": "20.00361"
  },
  {
    "country": "AL",
    "name": "Mollas",
    "lat": "40.42556",
    "lng": "20.67444"
  },
  {
    "country": "AL",
    "name": "Mollaj",
    "lat": "40.56028",
    "lng": "20.74028"
  },
  {
    "country": "AL",
    "name": "Miras",
    "lat": "40.50917",
    "lng": "20.92833"
  },
  {
    "country": "AL",
    "name": "Melan",
    "lat": "41.65417",
    "lng": "20.46528"
  },
  {
    "country": "AL",
    "name": "Mborje",
    "lat": "40.60333",
    "lng": "20.80306"
  },
  {
    "country": "AL",
    "name": "Martanesh",
    "lat": "41.4",
    "lng": "20.2"
  },
  {
    "country": "AL",
    "name": "Maqellarë",
    "lat": "41.58889",
    "lng": "20.48306"
  },
  {
    "country": "AL",
    "name": "Maliq",
    "lat": "40.70583",
    "lng": "20.69972"
  },
  {
    "country": "AL",
    "name": "Macukull",
    "lat": "41.68861",
    "lng": "20.11028"
  },
  {
    "country": "AL",
    "name": "Lunik",
    "lat": "41.28917",
    "lng": "20.32361"
  },
  {
    "country": "AL",
    "name": "Llugaj",
    "lat": "42.34139",
    "lng": "20.10861"
  },
  {
    "country": "AL",
    "name": "Lis",
    "lat": "41.6275",
    "lng": "20.08528"
  },
  {
    "country": "AL",
    "name": "Liqenas",
    "lat": "40.78667",
    "lng": "20.90222"
  },
  {
    "country": "AL",
    "name": "Librazhd",
    "lat": "41.17944",
    "lng": "20.315"
  },
  {
    "country": "AL",
    "name": "Libonik",
    "lat": "40.70444",
    "lng": "20.70861"
  },
  {
    "country": "AL",
    "name": "Libohovë",
    "lat": "40.03111",
    "lng": "20.26306"
  },
  {
    "country": "AL",
    "name": "Leskovik",
    "lat": "40.15139",
    "lng": "20.59722"
  },
  {
    "country": "AL",
    "name": "Leshnjë",
    "lat": "40.53694",
    "lng": "20.31333"
  },
  {
    "country": "AL",
    "name": "Lenias",
    "lat": "40.76667",
    "lng": "20.39139"
  },
  {
    "country": "AL",
    "name": "Lekas",
    "lat": "40.60222",
    "lng": "20.5125"
  },
  {
    "country": "AL",
    "name": "Lazarat",
    "lat": "40.04667",
    "lng": "20.1475"
  },
  {
    "country": "AL",
    "name": "Labinot-Mal",
    "lat": "41.20083",
    "lng": "20.15222"
  },
  {
    "country": "AL",
    "name": "Labinot-Fushë",
    "lat": "41.14056",
    "lng": "20.14611"
  },
  {
    "country": "AL",
    "name": "Kushovë",
    "lat": "40.78889",
    "lng": "20.18889"
  },
  {
    "country": "AL",
    "name": "Kurbnesh",
    "lat": "41.77972",
    "lng": "20.08361"
  },
  {
    "country": "AL",
    "name": "Kukur",
    "lat": "40.86778",
    "lng": "20.36361"
  },
  {
    "country": "AL",
    "name": "Kukës",
    "lat": "42.07694",
    "lng": "20.42194"
  },
  {
    "country": "AL",
    "name": "Kthella e Epërme",
    "lat": "41.81194",
    "lng": "20.05889"
  },
  {
    "country": "AL",
    "name": "Krumë",
    "lat": "42.19694",
    "lng": "20.41333"
  },
  {
    "country": "AL",
    "name": "Korçë",
    "lat": "40.61861",
    "lng": "20.78083"
  },
  {
    "country": "AL",
    "name": "Kolsh",
    "lat": "42.07806",
    "lng": "20.34194"
  },
  {
    "country": "AL",
    "name": "Kodovjat",
    "lat": "40.80556",
    "lng": "20.25111"
  },
  {
    "country": "AL",
    "name": "Klos",
    "lat": "41.50694",
    "lng": "20.08667"
  },
  {
    "country": "AL",
    "name": "Klos",
    "lat": "40.94611",
    "lng": "20.00972"
  },
  {
    "country": "AL",
    "name": "Këlcyrë",
    "lat": "40.31306",
    "lng": "20.18944"
  },
  {
    "country": "AL",
    "name": "Kastriot",
    "lat": "41.72944",
    "lng": "20.37722"
  },
  {
    "country": "AL",
    "name": "Kardhiq",
    "lat": "40.12167",
    "lng": "20.0275"
  },
  {
    "country": "AL",
    "name": "Kalis",
    "lat": "41.83889",
    "lng": "20.36667"
  },
  {
    "country": "AL",
    "name": "Iballë",
    "lat": "42.1875",
    "lng": "20.0025"
  },
  {
    "country": "AL",
    "name": "Hotolisht",
    "lat": "41.15667",
    "lng": "20.39722"
  },
  {
    "country": "AL",
    "name": "Hoçisht",
    "lat": "40.60833",
    "lng": "20.91417"
  },
  {
    "country": "AL",
    "name": "Gramsh",
    "lat": "40.86972",
    "lng": "20.18444"
  },
  {
    "country": "AL",
    "name": "Gostimë",
    "lat": "41.14556",
    "lng": "20.24"
  },
  {
    "country": "AL",
    "name": "Golaj",
    "lat": "42.2475",
    "lng": "20.38028"
  },
  {
    "country": "AL",
    "name": "Gjorica e Sipërme",
    "lat": "41.53444",
    "lng": "20.45"
  },
  {
    "country": "AL",
    "name": "Gjirokastër",
    "lat": "40.07583",
    "lng": "20.13889"
  },
  {
    "country": "AL",
    "name": "Gjinar",
    "lat": "41.0225",
    "lng": "20.18889"
  },
  {
    "country": "AL",
    "name": "Gjinaj",
    "lat": "42.11806",
    "lng": "20.43583"
  },
  {
    "country": "AL",
    "name": "Gjergjan",
    "lat": "41.04306",
    "lng": "20.02972"
  },
  {
    "country": "AL",
    "name": "Gjegjan",
    "lat": "41.93778",
    "lng": "20.01111"
  },
  {
    "country": "AL",
    "name": "Fushë-Muhurr",
    "lat": "41.67972",
    "lng": "20.33139"
  },
  {
    "country": "AL",
    "name": "Fushë-Lurë",
    "lat": "41.80611",
    "lng": "20.23194"
  },
  {
    "country": "AL",
    "name": "Fushë-Çidhnë",
    "lat": "41.76056",
    "lng": "20.34111"
  },
  {
    "country": "AL",
    "name": "Fushë-Bulqizë",
    "lat": "41.52194",
    "lng": "20.28222"
  },
  {
    "country": "AL",
    "name": "Fushë-Arrëz",
    "lat": "42.06222",
    "lng": "20.01667"
  },
  {
    "country": "AL",
    "name": "Frashër",
    "lat": "40.36889",
    "lng": "20.42444"
  },
  {
    "country": "AL",
    "name": "Fierzë",
    "lat": "42.26056",
    "lng": "20.01694"
  },
  {
    "country": "AL",
    "name": "Fajzë",
    "lat": "42.16694",
    "lng": "20.35083"
  },
  {
    "country": "AL",
    "name": "Ersekë",
    "lat": "40.33778",
    "lng": "20.67889"
  },
  {
    "country": "AL",
    "name": "Elbasan",
    "lat": "41.1125",
    "lng": "20.08222"
  },
  {
    "country": "AL",
    "name": "Drenovë",
    "lat": "40.58333",
    "lng": "20.79222"
  },
  {
    "country": "AL",
    "name": "Dishnicë",
    "lat": "40.65139",
    "lng": "20.81361"
  },
  {
    "country": "AL",
    "name": "Derjan",
    "lat": "41.67361",
    "lng": "20.05833"
  },
  {
    "country": "AL",
    "name": "Gjerbës",
    "lat": "40.62917",
    "lng": "20.25111"
  },
  {
    "country": "AL",
    "name": "Çorovodë",
    "lat": "40.50417",
    "lng": "20.22722"
  },
  {
    "country": "AL",
    "name": "Çlirim",
    "lat": "40.4175",
    "lng": "20.55028"
  },
  {
    "country": "AL",
    "name": "Cerava",
    "lat": "40.85139",
    "lng": "20.725"
  },
  {
    "country": "AL",
    "name": "Çepan",
    "lat": "40.42056",
    "lng": "20.26056"
  },
  {
    "country": "AL",
    "name": "Çarshovë",
    "lat": "40.11806",
    "lng": "20.54083"
  },
  {
    "country": "AL",
    "name": "Kokaj",
    "lat": "41.87833",
    "lng": "20.50472"
  },
  {
    "country": "AL",
    "name": "Buz",
    "lat": "40.445",
    "lng": "20.00472"
  },
  {
    "country": "AL",
    "name": "Bushtricë",
    "lat": "41.87861",
    "lng": "20.42194"
  },
  {
    "country": "AL",
    "name": "Burrel",
    "lat": "41.61028",
    "lng": "20.00889"
  },
  {
    "country": "AL",
    "name": "Bulqizë",
    "lat": "41.49167",
    "lng": "20.22194"
  },
  {
    "country": "AL",
    "name": "Bujan",
    "lat": "42.32639",
    "lng": "20.07639"
  },
  {
    "country": "AL",
    "name": "Bradashesh",
    "lat": "41.105",
    "lng": "20.0225"
  },
  {
    "country": "AL",
    "name": "Blinisht",
    "lat": "41.86139",
    "lng": "20"
  },
  {
    "country": "AL",
    "name": "Blerim",
    "lat": "42.16056",
    "lng": "20.19194"
  },
  {
    "country": "AL",
    "name": "Bilisht",
    "lat": "40.6275",
    "lng": "20.99"
  },
  {
    "country": "AL",
    "name": "Bicaj",
    "lat": "41.99472",
    "lng": "20.4125"
  },
  {
    "country": "AL",
    "name": "Dardhas",
    "lat": "40.84583",
    "lng": "20.65722"
  },
  {
    "country": "AL",
    "name": "Barmash",
    "lat": "40.27778",
    "lng": "20.61833"
  },
  {
    "country": "AL",
    "name": "Ballaban",
    "lat": "40.41667",
    "lng": "20.13444"
  },
  {
    "country": "AL",
    "name": "Arrën",
    "lat": "41.91306",
    "lng": "20.28833"
  },
  {
    "country": "AL",
    "name": "Arras",
    "lat": "41.73583",
    "lng": "20.32417"
  },
  {
    "country": "AL",
    "name": "Bytyç",
    "lat": "42.31",
    "lng": "20.20278"
  },
  {
    "country": "AL",
    "name": "Librazhd-Qendër",
    "lat": "41.19694",
    "lng": "20.33556"
  },
  {
    "country": "AL",
    "name": "Funarë",
    "lat": "41.19639",
    "lng": "20.05972"
  },
  {
    "country": "AL",
    "name": "Moglicë",
    "lat": "40.71806",
    "lng": "20.43806"
  },
  {
    "country": "AL",
    "name": "Bogovë",
    "lat": "40.57111",
    "lng": "20.15"
  },
  {
    "country": "AL",
    "name": "Piskovë",
    "lat": "40.27917",
    "lng": "20.2725"
  },
  {
    "country": "AL",
    "name": "Lukovë",
    "lat": "39.99222",
    "lng": "19.91389"
  },
  {
    "country": "AL",
    "name": "Ksamil",
    "lat": "39.76889",
    "lng": "19.99972"
  },
  {
    "country": "AL",
    "name": "Zharrëz",
    "lat": "40.70917",
    "lng": "19.64972"
  },
  {
    "country": "AL",
    "name": "Zejmen",
    "lat": "41.70778",
    "lng": "19.68917"
  },
  {
    "country": "AL",
    "name": "Zall-Herr",
    "lat": "41.38944",
    "lng": "19.8275"
  },
  {
    "country": "AL",
    "name": "Zall-Bastar",
    "lat": "41.42972",
    "lng": "19.93028"
  },
  {
    "country": "AL",
    "name": "Xhafzotaj",
    "lat": "41.34444",
    "lng": "19.5475"
  },
  {
    "country": "AL",
    "name": "Vukatanë",
    "lat": "42.02806",
    "lng": "19.54778"
  },
  {
    "country": "AL",
    "name": "Vranisht",
    "lat": "40.20972",
    "lng": "19.69083"
  },
  {
    "country": "AL",
    "name": "Vorë",
    "lat": "41.39083",
    "lng": "19.655"
  },
  {
    "country": "AL",
    "name": "Vlorë",
    "lat": "40.4686",
    "lng": "19.48318"
  },
  {
    "country": "AL",
    "name": "Velipojë",
    "lat": "41.87833",
    "lng": "19.40556"
  },
  {
    "country": "AL",
    "name": "Velabisht",
    "lat": "40.70167",
    "lng": "19.93222"
  },
  {
    "country": "AL",
    "name": "Vaqarr",
    "lat": "41.29917",
    "lng": "19.74417"
  },
  {
    "country": "AL",
    "name": "Uznovë",
    "lat": "40.69722",
    "lng": "19.98028"
  },
  {
    "country": "AL",
    "name": "Ura Vajgurore",
    "lat": "40.76889",
    "lng": "19.87778"
  },
  {
    "country": "AL",
    "name": "Ungrej",
    "lat": "41.87528",
    "lng": "19.79472"
  },
  {
    "country": "AL",
    "name": "Ulëz",
    "lat": "41.68278",
    "lng": "19.89333"
  },
  {
    "country": "AL",
    "name": "Topojë",
    "lat": "40.76306",
    "lng": "19.43278"
  },
  {
    "country": "AL",
    "name": "Tirana",
    "lat": "41.3275",
    "lng": "19.81889"
  },
  {
    "country": "AL",
    "name": "Thumanë",
    "lat": "41.5475",
    "lng": "19.67778"
  },
  {
    "country": "AL",
    "name": "Tërbuf",
    "lat": "41.04",
    "lng": "19.61417"
  },
  {
    "country": "AL",
    "name": "Tapi",
    "lat": "40.79361",
    "lng": "19.88028"
  },
  {
    "country": "AL",
    "name": "Synej",
    "lat": "41.18",
    "lng": "19.5425"
  },
  {
    "country": "AL",
    "name": "Sukth",
    "lat": "41.38056",
    "lng": "19.53778"
  },
  {
    "country": "AL",
    "name": "Strum",
    "lat": "40.75111",
    "lng": "19.7375"
  },
  {
    "country": "AL",
    "name": "Starovë",
    "lat": "40.71722",
    "lng": "19.91778"
  },
  {
    "country": "AL",
    "name": "Sinaballaj",
    "lat": "41.06889",
    "lng": "19.69944"
  },
  {
    "country": "AL",
    "name": "Shkodër",
    "lat": "42.06828",
    "lng": "19.51258"
  },
  {
    "country": "AL",
    "name": "Shijak",
    "lat": "41.34556",
    "lng": "19.56722"
  },
  {
    "country": "AL",
    "name": "Shezë",
    "lat": "41.02417",
    "lng": "19.81611"
  },
  {
    "country": "AL",
    "name": "Shënkoll",
    "lat": "41.69083",
    "lng": "19.65333"
  },
  {
    "country": "AL",
    "name": "Shëngjin",
    "lat": "41.81361",
    "lng": "19.59389"
  },
  {
    "country": "AL",
    "name": "Shëngjergj",
    "lat": "41.18333",
    "lng": "19.53333"
  },
  {
    "country": "AL",
    "name": "Shalës",
    "lat": "40.99861",
    "lng": "19.94778"
  },
  {
    "country": "AL",
    "name": "Nicaj-Shalë",
    "lat": "42.29944",
    "lng": "19.805"
  },
  {
    "country": "AL",
    "name": "Sevaster",
    "lat": "40.39639",
    "lng": "19.72972"
  },
  {
    "country": "AL",
    "name": "Selitë",
    "lat": "41.63528",
    "lng": "19.755"
  },
  {
    "country": "AL",
    "name": "Valbonë",
    "lat": "42.45139",
    "lng": "19.89167"
  },
  {
    "country": "AL",
    "name": "Selenicë",
    "lat": "40.53056",
    "lng": "19.63583"
  },
  {
    "country": "AL",
    "name": "Samaticë",
    "lat": "40.80591",
    "lng": "19.7516"
  },
  {
    "country": "AL",
    "name": "Ruzhdie",
    "lat": "40.67083",
    "lng": "19.69833"
  },
  {
    "country": "AL",
    "name": "Rubik",
    "lat": "41.77444",
    "lng": "19.78611"
  },
  {
    "country": "AL",
    "name": "Rrogozhinë",
    "lat": "41.07639",
    "lng": "19.66528"
  },
  {
    "country": "AL",
    "name": "Rrëshen",
    "lat": "41.7675",
    "lng": "19.87556"
  },
  {
    "country": "AL",
    "name": "Rrashbull",
    "lat": "41.32278",
    "lng": "19.51028"
  },
  {
    "country": "AL",
    "name": "Rrasa e Sipërme",
    "lat": "40.96778",
    "lng": "19.82111"
  },
  {
    "country": "AL",
    "name": "Rrapë",
    "lat": "42.04444",
    "lng": "19.97056"
  },
  {
    "country": "AL",
    "name": "Roskovec",
    "lat": "40.7375",
    "lng": "19.70222"
  },
  {
    "country": "AL",
    "name": "Remas",
    "lat": "40.88639",
    "lng": "19.51139"
  },
  {
    "country": "AL",
    "name": "Qerret",
    "lat": "42.05306",
    "lng": "19.83722"
  },
  {
    "country": "AL",
    "name": "Qelëz",
    "lat": "42.08972",
    "lng": "19.895"
  },
  {
    "country": "AL",
    "name": "Pukë",
    "lat": "42.04444",
    "lng": "19.89972"
  },
  {
    "country": "AL",
    "name": "Progonat",
    "lat": "40.21333",
    "lng": "19.94472"
  },
  {
    "country": "AL",
    "name": "Prezë",
    "lat": "41.42722",
    "lng": "19.67278"
  },
  {
    "country": "AL",
    "name": "Poshnje",
    "lat": "40.78028",
    "lng": "19.84417"
  },
  {
    "country": "AL",
    "name": "Portëz",
    "lat": "40.69917",
    "lng": "19.57444"
  },
  {
    "country": "AL",
    "name": "Pobrat",
    "lat": "40.76713",
    "lng": "19.78608"
  },
  {
    "country": "AL",
    "name": "Peza e Madhe",
    "lat": "41.2175",
    "lng": "19.69611"
  },
  {
    "country": "AL",
    "name": "Petrelë",
    "lat": "41.25306",
    "lng": "19.85306"
  },
  {
    "country": "AL",
    "name": "Përparim",
    "lat": "41.05",
    "lng": "19.79917"
  },
  {
    "country": "AL",
    "name": "Perondi",
    "lat": "40.77889",
    "lng": "19.92306"
  },
  {
    "country": "AL",
    "name": "Peqin",
    "lat": "41.04611",
    "lng": "19.75111"
  },
  {
    "country": "AL",
    "name": "Patos Fshat",
    "lat": "40.64278",
    "lng": "19.65083"
  },
  {
    "country": "AL",
    "name": "Patos",
    "lat": "40.68333",
    "lng": "19.61944"
  },
  {
    "country": "AL",
    "name": "Paskuqan",
    "lat": "41.35389",
    "lng": "19.80667"
  },
  {
    "country": "AL",
    "name": "Papër",
    "lat": "41.05167",
    "lng": "19.96083"
  },
  {
    "country": "AL",
    "name": "Pajovë",
    "lat": "41.05472",
    "lng": "19.8375"
  },
  {
    "country": "AL",
    "name": "Otllak",
    "lat": "40.74389",
    "lng": "19.93528"
  },
  {
    "country": "AL",
    "name": "Orikum",
    "lat": "40.32528",
    "lng": "19.47139"
  },
  {
    "country": "AL",
    "name": "Novoselë",
    "lat": "40.625",
    "lng": "19.46694"
  },
  {
    "country": "AL",
    "name": "Nikël",
    "lat": "41.44417",
    "lng": "19.74833"
  },
  {
    "country": "AL",
    "name": "Nicaj-Shosh",
    "lat": "42.24444",
    "lng": "19.75806"
  },
  {
    "country": "AL",
    "name": "Ngraçan",
    "lat": "40.64444",
    "lng": "19.7925"
  },
  {
    "country": "AL",
    "name": "Ndroq",
    "lat": "41.26389",
    "lng": "19.65583"
  },
  {
    "country": "AL",
    "name": "Moravë",
    "lat": "40.75972",
    "lng": "19.90417"
  },
  {
    "country": "AL",
    "name": "Milot",
    "lat": "41.68389",
    "lng": "19.71556"
  },
  {
    "country": "AL",
    "name": "Memaliaj",
    "lat": "40.35167",
    "lng": "19.98028"
  },
  {
    "country": "AL",
    "name": "Mbrostar-Urë",
    "lat": "40.75361",
    "lng": "19.57944"
  },
  {
    "country": "AL",
    "name": "Manzë",
    "lat": "41.42861",
    "lng": "19.59306"
  },
  {
    "country": "AL",
    "name": "Mamurras",
    "lat": "41.5775",
    "lng": "19.69222"
  },
  {
    "country": "AL",
    "name": "Maminas",
    "lat": "41.37917",
    "lng": "19.6075"
  },
  {
    "country": "AL",
    "name": "Magjatë",
    "lat": "40.79167",
    "lng": "19.92889"
  },
  {
    "country": "AL",
    "name": "Luzi i Vogël",
    "lat": "41.1275",
    "lng": "19.57389"
  },
  {
    "country": "AL",
    "name": "Lushnjë",
    "lat": "40.94194",
    "lng": "19.705"
  },
  {
    "country": "AL",
    "name": "Luftinjë",
    "lat": "40.44278",
    "lng": "19.95444"
  },
  {
    "country": "AL",
    "name": "Libofshë",
    "lat": "40.83444",
    "lng": "19.55222"
  },
  {
    "country": "AL",
    "name": "Lezhë",
    "lat": "41.78361",
    "lng": "19.64361"
  },
  {
    "country": "AL",
    "name": "Levan",
    "lat": "40.67611",
    "lng": "19.48972"
  },
  {
    "country": "AL",
    "name": "Lekbibaj",
    "lat": "42.29472",
    "lng": "19.93167"
  },
  {
    "country": "AL",
    "name": "Lekaj",
    "lat": "41.11444",
    "lng": "19.60972"
  },
  {
    "country": "AL",
    "name": "Lapardha Një",
    "lat": "40.75472",
    "lng": "19.94806"
  },
  {
    "country": "AL",
    "name": "Laç",
    "lat": "41.63556",
    "lng": "19.71306"
  },
  {
    "country": "AL",
    "name": "Kutë",
    "lat": "40.47333",
    "lng": "19.76639"
  },
  {
    "country": "AL",
    "name": "Kutalli",
    "lat": "40.78389",
    "lng": "19.78667"
  },
  {
    "country": "AL",
    "name": "Kurjan",
    "lat": "40.7175",
    "lng": "19.74556"
  },
  {
    "country": "AL",
    "name": "Kuman",
    "lat": "40.72667",
    "lng": "19.68667"
  },
  {
    "country": "AL",
    "name": "Kuçovë",
    "lat": "40.80028",
    "lng": "19.91667"
  },
  {
    "country": "AL",
    "name": "Kuç",
    "lat": "42.03972",
    "lng": "19.52528"
  },
  {
    "country": "AL",
    "name": "Kryevidh",
    "lat": "41.10056",
    "lng": "19.5275"
  },
  {
    "country": "AL",
    "name": "Krutja e Poshtme",
    "lat": "40.87194",
    "lng": "19.68083"
  },
  {
    "country": "AL",
    "name": "Krujë",
    "lat": "41.50917",
    "lng": "19.79278"
  },
  {
    "country": "AL",
    "name": "Krrabë",
    "lat": "41.21556",
    "lng": "19.97139"
  },
  {
    "country": "AL",
    "name": "Krahës",
    "lat": "40.43861",
    "lng": "19.84444"
  },
  {
    "country": "AL",
    "name": "Kozarë",
    "lat": "40.83083",
    "lng": "19.90056"
  },
  {
    "country": "AL",
    "name": "Kotë",
    "lat": "40.38944",
    "lng": "19.60222"
  },
  {
    "country": "AL",
    "name": "Koplik",
    "lat": "42.21361",
    "lng": "19.43639"
  },
  {
    "country": "AL",
    "name": "Kombësi",
    "lat": "41.58167",
    "lng": "19.98556"
  },
  {
    "country": "AL",
    "name": "Kolonjë",
    "lat": "40.82417",
    "lng": "19.60389"
  },
  {
    "country": "AL",
    "name": "Kolç",
    "lat": "41.78667",
    "lng": "19.67611"
  },
  {
    "country": "AL",
    "name": "Kavajë",
    "lat": "41.18556",
    "lng": "19.55694"
  },
  {
    "country": "AL",
    "name": "Katundi i Ri",
    "lat": "41.40306",
    "lng": "19.51806"
  },
  {
    "country": "AL",
    "name": "Kastrat",
    "lat": "42.3525",
    "lng": "19.48917"
  },
  {
    "country": "AL",
    "name": "Kashar",
    "lat": "41.34972",
    "lng": "19.71028"
  },
  {
    "country": "AL",
    "name": "Karinë",
    "lat": "41.06306",
    "lng": "19.71611"
  },
  {
    "country": "AL",
    "name": "Karbunara e Vogël",
    "lat": "40.92194",
    "lng": "19.71778"
  },
  {
    "country": "AL",
    "name": "Kamëz",
    "lat": "41.38167",
    "lng": "19.76028"
  },
  {
    "country": "AL",
    "name": "Kallmeti i Madh",
    "lat": "41.84889",
    "lng": "19.68694"
  },
  {
    "country": "AL",
    "name": "Kallmet",
    "lat": "41.41806",
    "lng": "19.82139"
  },
  {
    "country": "AL",
    "name": "Kalenjë",
    "lat": "40.59",
    "lng": "19.77833"
  },
  {
    "country": "AL",
    "name": "Kajan",
    "lat": "40.91417",
    "lng": "19.88944"
  },
  {
    "country": "AL",
    "name": "Kaçinar",
    "lat": "41.89333",
    "lng": "19.89861"
  },
  {
    "country": "AL",
    "name": "Ishëm",
    "lat": "41.54528",
    "lng": "19.6"
  },
  {
    "country": "AL",
    "name": "Hysgjokaj",
    "lat": "40.97167",
    "lng": "19.78972"
  },
  {
    "country": "AL",
    "name": "Hot",
    "lat": "42.36194",
    "lng": "19.44417"
  },
  {
    "country": "AL",
    "name": "Himarë",
    "lat": "40.10167",
    "lng": "19.74472"
  },
  {
    "country": "AL",
    "name": "Helmas",
    "lat": "41.18028",
    "lng": "19.60694"
  },
  {
    "country": "AL",
    "name": "Hekal",
    "lat": "40.56194",
    "lng": "19.73583"
  },
  {
    "country": "AL",
    "name": "Havaleas",
    "lat": "40.82028",
    "lng": "19.89694"
  },
  {
    "country": "AL",
    "name": "Hasan",
    "lat": "41.48278",
    "lng": "19.69972"
  },
  {
    "country": "AL",
    "name": "Hajmel",
    "lat": "41.95306",
    "lng": "19.63778"
  },
  {
    "country": "AL",
    "name": "Gurra e Vogël",
    "lat": "41.53611",
    "lng": "19.99083"
  },
  {
    "country": "AL",
    "name": "Guri i Zi",
    "lat": "42.045",
    "lng": "19.57472"
  },
  {
    "country": "AL",
    "name": "Gruemirë",
    "lat": "42.15917",
    "lng": "19.51889"
  },
  {
    "country": "AL",
    "name": "Greshicë",
    "lat": "40.55194",
    "lng": "19.77833"
  },
  {
    "country": "AL",
    "name": "Grekan",
    "lat": "40.92944",
    "lng": "19.9475"
  },
  {
    "country": "AL",
    "name": "Gradishtë",
    "lat": "40.88806",
    "lng": "19.58583"
  },
  {
    "country": "AL",
    "name": "Gracen",
    "lat": "41.15194",
    "lng": "19.96361"
  },
  {
    "country": "AL",
    "name": "Grabjan",
    "lat": "40.95306",
    "lng": "19.58083"
  },
  {
    "country": "AL",
    "name": "Gosë e Madhe",
    "lat": "41.09056",
    "lng": "19.62472"
  },
  {
    "country": "AL",
    "name": "Çlirim",
    "lat": "40.80951",
    "lng": "19.78419"
  },
  {
    "country": "AL",
    "name": "Goraj",
    "lat": "40.81194",
    "lng": "19.9475"
  },
  {
    "country": "AL",
    "name": "Golem",
    "lat": "40.96778",
    "lng": "19.68528"
  },
  {
    "country": "AL",
    "name": "Gjoçaj",
    "lat": "41.02556",
    "lng": "19.72389"
  },
  {
    "country": "AL",
    "name": "Gjepalaj",
    "lat": "41.33306",
    "lng": "19.57806"
  },
  {
    "country": "AL",
    "name": "Gegë",
    "lat": "40.83694",
    "lng": "19.92611"
  },
  {
    "country": "AL",
    "name": "Fushëkuqe",
    "lat": "41.65028",
    "lng": "19.62"
  },
  {
    "country": "AL",
    "name": "Fushë-Krujë",
    "lat": "41.47833",
    "lng": "19.71778"
  },
  {
    "country": "AL",
    "name": "Fratar",
    "lat": "40.5",
    "lng": "19.81667"
  },
  {
    "country": "AL",
    "name": "Frakulla e Madhe",
    "lat": "40.65583",
    "lng": "19.5025"
  },
  {
    "country": "AL",
    "name": "Fier-Shegan",
    "lat": "40.86722",
    "lng": "19.78528"
  },
  {
    "country": "AL",
    "name": "Fier-Çifçi",
    "lat": "40.71667",
    "lng": "19.56667"
  },
  {
    "country": "AL",
    "name": "Fier",
    "lat": "40.72389",
    "lng": "19.55611"
  },
  {
    "country": "AL",
    "name": "Farka e Madhe",
    "lat": "41.30556",
    "lng": "19.86694"
  },
  {
    "country": "AL",
    "name": "Dushnik",
    "lat": "40.73194",
    "lng": "19.95278"
  },
  {
    "country": "AL",
    "name": "Durrës",
    "lat": "41.32355",
    "lng": "19.45469"
  },
  {
    "country": "AL",
    "name": "Duhanas",
    "lat": "40.72111",
    "lng": "19.99333"
  },
  {
    "country": "AL",
    "name": "Drenovicë",
    "lat": "40.79183",
    "lng": "19.7685"
  },
  {
    "country": "AL",
    "name": "Drenovë",
    "lat": "40.60056",
    "lng": "19.70083"
  },
  {
    "country": "AL",
    "name": "Divjakë",
    "lat": "40.99667",
    "lng": "19.52944"
  },
  {
    "country": "AL",
    "name": "Dhërmi",
    "lat": "40.15139",
    "lng": "19.63889"
  },
  {
    "country": "AL",
    "name": "Dërmënas",
    "lat": "40.74556",
    "lng": "19.49389"
  },
  {
    "country": "AL",
    "name": "Vau i Dejës",
    "lat": "42.01",
    "lng": "19.62472"
  },
  {
    "country": "AL",
    "name": "Dajt",
    "lat": "41.39361",
    "lng": "19.91583"
  },
  {
    "country": "AL",
    "name": "Dajç",
    "lat": "41.99167",
    "lng": "19.41056"
  },
  {
    "country": "AL",
    "name": "Dajç",
    "lat": "41.91556",
    "lng": "19.60444"
  },
  {
    "country": "AL",
    "name": "Cukalat",
    "lat": "40.73028",
    "lng": "19.79056"
  },
  {
    "country": "AL",
    "name": "Cudhi Zall",
    "lat": "41.50944",
    "lng": "19.84583"
  },
  {
    "country": "AL",
    "name": "Cërrik",
    "lat": "41.03167",
    "lng": "19.97583"
  },
  {
    "country": "AL",
    "name": "Cakran",
    "lat": "40.60333",
    "lng": "19.62611"
  },
  {
    "country": "AL",
    "name": "Bushat",
    "lat": "42.11944",
    "lng": "19.89972"
  },
  {
    "country": "AL",
    "name": "Bubullimë",
    "lat": "40.81806",
    "lng": "19.64083"
  },
  {
    "country": "AL",
    "name": "Bubq",
    "lat": "41.47417",
    "lng": "19.65167"
  },
  {
    "country": "AL",
    "name": "Brataj",
    "lat": "40.26778",
    "lng": "19.66917"
  },
  {
    "country": "AL",
    "name": "Bërzhitë",
    "lat": "41.24528",
    "lng": "19.90111"
  },
  {
    "country": "AL",
    "name": "Bërxull",
    "lat": "41.38",
    "lng": "19.6875"
  },
  {
    "country": "AL",
    "name": "Bërdica e Madhe",
    "lat": "42.01528",
    "lng": "19.48167"
  },
  {
    "country": "AL",
    "name": "Berat",
    "lat": "40.70583",
    "lng": "19.95222"
  },
  {
    "country": "AL",
    "name": "Belsh",
    "lat": "40.975",
    "lng": "19.88194"
  },
  {
    "country": "AL",
    "name": "Baz",
    "lat": "41.63194",
    "lng": "19.92917"
  },
  {
    "country": "AL",
    "name": "Ballsh",
    "lat": "40.59889",
    "lng": "19.73472"
  },
  {
    "country": "AL",
    "name": "Ballagat",
    "lat": "40.99528",
    "lng": "19.76528"
  },
  {
    "country": "AL",
    "name": "Baldushk",
    "lat": "41.21389",
    "lng": "19.79694"
  },
  {
    "country": "AL",
    "name": "Armen",
    "lat": "40.53639",
    "lng": "19.59611"
  },
  {
    "country": "AL",
    "name": "Aranitas",
    "lat": "40.59444",
    "lng": "19.80667"
  },
  {
    "country": "AL",
    "name": "Allkaj",
    "lat": "40.8575",
    "lng": "19.75528"
  },
  {
    "country": "AL",
    "name": "Allambres",
    "lat": "40.7025",
    "lng": "19.8025"
  },
  {
    "country": "AL",
    "name": "Golem",
    "lat": "41.24583",
    "lng": "19.53472"
  },
  {
    "country": "AL",
    "name": "Balldreni i Ri",
    "lat": "41.81917",
    "lng": "19.64028"
  },
  {
    "country": "AL",
    "name": "Grudë-Fushë",
    "lat": "42.16222",
    "lng": "19.49667"
  },
  {
    "country": "AL",
    "name": "Kodër-Vorë",
    "lat": "41.38306",
    "lng": "19.66028"
  },
  {
    "country": "AL",
    "name": "Fierzë",
    "lat": "40.92056",
    "lng": "19.84694"
  },
  {
    "country": "AL",
    "name": "Lapardha Dy",
    "lat": "40.7625",
    "lng": "19.96139"
  },
  {
    "country": "AL",
    "name": "Dushk",
    "lat": "40.72667",
    "lng": "19.75722"
  },
  {
    "country": "AL",
    "name": "Selitë",
    "lat": "40.5475",
    "lng": "19.84806"
  },
  {
    "country": "AL",
    "name": "Vllahinë",
    "lat": "40.45694",
    "lng": "19.64361"
  },
  {
    "country": "AL",
    "name": "Bajram Curri",
    "lat": "42.35734",
    "lng": "20.07679"
  },
  {
    "country": "AM",
    "name": "Zarrit’ap’",
    "lat": "39.63892",
    "lng": "45.51111"
  },
  {
    "country": "AM",
    "name": "Zangakatun",
    "lat": "39.82233",
    "lng": "45.04169"
  },
  {
    "country": "AM",
    "name": "Goravan",
    "lat": "39.90832",
    "lng": "44.73328"
  },
  {
    "country": "AM",
    "name": "Yeghegnavan",
    "lat": "39.83893",
    "lng": "44.61951"
  },
  {
    "country": "AM",
    "name": "Yeghegnadzor",
    "lat": "39.76389",
    "lng": "45.33239"
  },
  {
    "country": "AM",
    "name": "Vostan",
    "lat": "39.96515",
    "lng": "44.55937"
  },
  {
    "country": "AM",
    "name": "Vosketap’",
    "lat": "39.88114",
    "lng": "44.64917"
  },
  {
    "country": "AM",
    "name": "Vernashen",
    "lat": "39.79236",
    "lng": "45.36389"
  },
  {
    "country": "AM",
    "name": "Verishen",
    "lat": "39.53543",
    "lng": "46.32063"
  },
  {
    "country": "AM",
    "name": "Vedi",
    "lat": "39.91388",
    "lng": "44.7251"
  },
  {
    "country": "AM",
    "name": "Vayk’",
    "lat": "39.6889",
    "lng": "45.46668"
  },
  {
    "country": "AM",
    "name": "Tegh",
    "lat": "39.55826",
    "lng": "46.48054"
  },
  {
    "country": "AM",
    "name": "Surenavan",
    "lat": "39.79449",
    "lng": "44.77508"
  },
  {
    "country": "AM",
    "name": "Sisavan",
    "lat": "39.90802",
    "lng": "44.66721"
  },
  {
    "country": "AM",
    "name": "Shinuhayr",
    "lat": "39.4367",
    "lng": "46.31787"
  },
  {
    "country": "AM",
    "name": "Lusarrat",
    "lat": "39.87403",
    "lng": "44.58678"
  },
  {
    "country": "AM",
    "name": "Shahumyan",
    "lat": "39.94171",
    "lng": "44.57233"
  },
  {
    "country": "AM",
    "name": "Shatin",
    "lat": "39.83612",
    "lng": "45.30292"
  },
  {
    "country": "AM",
    "name": "Shaghat",
    "lat": "39.55698",
    "lng": "45.90727"
  },
  {
    "country": "AM",
    "name": "Rrind",
    "lat": "39.76111",
    "lng": "45.17792"
  },
  {
    "country": "AM",
    "name": "Noyakert",
    "lat": "39.83069",
    "lng": "44.66949"
  },
  {
    "country": "AM",
    "name": "Mrgavan",
    "lat": "39.97251",
    "lng": "44.53565"
  },
  {
    "country": "AM",
    "name": "Meghri",
    "lat": "38.90292",
    "lng": "46.24458"
  },
  {
    "country": "AM",
    "name": "Malishka",
    "lat": "39.74731",
    "lng": "45.4057"
  },
  {
    "country": "AM",
    "name": "Khndzoresk",
    "lat": "39.50568",
    "lng": "46.4361"
  },
  {
    "country": "AM",
    "name": "Kapan",
    "lat": "39.20755",
    "lng": "46.40576"
  },
  {
    "country": "AM",
    "name": "Jermuk",
    "lat": "39.84168",
    "lng": "45.66949"
  },
  {
    "country": "AM",
    "name": "Goris",
    "lat": "39.51111",
    "lng": "46.34168"
  },
  {
    "country": "AM",
    "name": "Gladzor",
    "lat": "39.7807",
    "lng": "45.34729"
  },
  {
    "country": "AM",
    "name": "Getap’",
    "lat": "39.76392",
    "lng": "45.30829"
  },
  {
    "country": "AM",
    "name": "Dzorastan",
    "lat": "39.27059",
    "lng": "46.3572"
  },
  {
    "country": "AM",
    "name": "Dalar",
    "lat": "39.97653",
    "lng": "44.52649"
  },
  {
    "country": "AM",
    "name": "Burastan",
    "lat": "39.99157",
    "lng": "44.49681"
  },
  {
    "country": "AM",
    "name": "Akner",
    "lat": "39.53491",
    "lng": "46.30732"
  },
  {
    "country": "AM",
    "name": "Brrnakot’",
    "lat": "39.49742",
    "lng": "45.97241"
  },
  {
    "country": "AM",
    "name": "Berk’anush",
    "lat": "39.9779",
    "lng": "44.51672"
  },
  {
    "country": "AM",
    "name": "Aygezard",
    "lat": "39.95436",
    "lng": "44.60229"
  },
  {
    "country": "AM",
    "name": "Aygepat",
    "lat": "39.95845",
    "lng": "44.59981"
  },
  {
    "country": "AM",
    "name": "Aygavan",
    "lat": "39.87327",
    "lng": "44.66984"
  },
  {
    "country": "AM",
    "name": "Avshar",
    "lat": "39.85553",
    "lng": "44.65832"
  },
  {
    "country": "AM",
    "name": "Hats’avan",
    "lat": "39.46405",
    "lng": "45.97047"
  },
  {
    "country": "AM",
    "name": "Artashat",
    "lat": "39.96144",
    "lng": "44.54447"
  },
  {
    "country": "AM",
    "name": "Yeghegis",
    "lat": "39.87231",
    "lng": "45.3501"
  },
  {
    "country": "AM",
    "name": "Armash",
    "lat": "39.76672",
    "lng": "44.8111"
  },
  {
    "country": "AM",
    "name": "Areni",
    "lat": "39.71668",
    "lng": "45.18329"
  },
  {
    "country": "AM",
    "name": "Ararat",
    "lat": "39.83069",
    "lng": "44.70569"
  },
  {
    "country": "AM",
    "name": "Angeghakot’",
    "lat": "39.56952",
    "lng": "45.94452"
  },
  {
    "country": "AM",
    "name": "Aghavnadzor",
    "lat": "39.78607",
    "lng": "45.2279"
  },
  {
    "country": "AM",
    "name": "Agarakadzor",
    "lat": "39.73608",
    "lng": "45.35553"
  },
  {
    "country": "AM",
    "name": "Agarak",
    "lat": "39.20684",
    "lng": "46.5446"
  },
  {
    "country": "AM",
    "name": "Aralez",
    "lat": "39.90008",
    "lng": "44.6557"
  },
  {
    "country": "AM",
    "name": "Horrom",
    "lat": "40.65973",
    "lng": "43.89032"
  },
  {
    "country": "AM",
    "name": "Margara",
    "lat": "40.03332",
    "lng": "44.18048"
  },
  {
    "country": "AM",
    "name": "Zovuni",
    "lat": "40.51111",
    "lng": "44.4389"
  },
  {
    "country": "AM",
    "name": "Zovaber",
    "lat": "40.56671",
    "lng": "44.79028"
  },
  {
    "country": "AM",
    "name": "Zorak",
    "lat": "40.09168",
    "lng": "44.39447"
  },
  {
    "country": "AM",
    "name": "Zarr",
    "lat": "40.25848",
    "lng": "44.73328"
  },
  {
    "country": "AM",
    "name": "Yerevan",
    "lat": "40.18111",
    "lng": "44.51361"
  },
  {
    "country": "AM",
    "name": "Yerazgavors",
    "lat": "40.69505",
    "lng": "43.74722"
  },
  {
    "country": "AM",
    "name": "Yeraskhahun",
    "lat": "40.07233",
    "lng": "44.21948"
  },
  {
    "country": "AM",
    "name": "Yeranos",
    "lat": "40.20428",
    "lng": "45.19209"
  },
  {
    "country": "AM",
    "name": "Yeghegnut",
    "lat": "40.90302",
    "lng": "44.63155"
  },
  {
    "country": "AM",
    "name": "Yeghegnut",
    "lat": "40.08893",
    "lng": "44.16669"
  },
  {
    "country": "AM",
    "name": "Vagharshapat",
    "lat": "40.16557",
    "lng": "44.29462"
  },
  {
    "country": "AM",
    "name": "Yeghvard",
    "lat": "40.32507",
    "lng": "44.48608"
  },
  {
    "country": "AM",
    "name": "Voskevaz",
    "lat": "40.27508",
    "lng": "44.30011"
  },
  {
    "country": "AM",
    "name": "Voskevan",
    "lat": "41.12081",
    "lng": "45.06381"
  },
  {
    "country": "AM",
    "name": "Voskehask",
    "lat": "40.76426",
    "lng": "43.77474"
  },
  {
    "country": "AM",
    "name": "Verin Getashen",
    "lat": "40.13068",
    "lng": "45.25293"
  },
  {
    "country": "AM",
    "name": "Verin Dvin",
    "lat": "40.02434",
    "lng": "44.59038"
  },
  {
    "country": "AM",
    "name": "Verin Artashat",
    "lat": "39.99731",
    "lng": "44.58893"
  },
  {
    "country": "AM",
    "name": "Akht’ala",
    "lat": "41.16838",
    "lng": "44.75811"
  },
  {
    "country": "AM",
    "name": "Varser",
    "lat": "40.55548",
    "lng": "44.90832"
  },
  {
    "country": "AM",
    "name": "Vardenis",
    "lat": "40.18329",
    "lng": "45.73053"
  },
  {
    "country": "AM",
    "name": "Vardenik",
    "lat": "40.13348",
    "lng": "45.44311"
  },
  {
    "country": "AM",
    "name": "Vahan",
    "lat": "40.57549",
    "lng": "45.39769"
  },
  {
    "country": "AM",
    "name": "Vaghashen",
    "lat": "40.13611",
    "lng": "45.33069"
  },
  {
    "country": "AM",
    "name": "Vahagni",
    "lat": "40.90698",
    "lng": "44.60873"
  },
  {
    "country": "AM",
    "name": "Ushi",
    "lat": "40.34729",
    "lng": "44.37512"
  },
  {
    "country": "AM",
    "name": "Urrut",
    "lat": "41.06778",
    "lng": "44.39628"
  },
  {
    "country": "AM",
    "name": "Tsovinar",
    "lat": "40.15959",
    "lng": "45.46786"
  },
  {
    "country": "AM",
    "name": "Tsovazard",
    "lat": "40.4751",
    "lng": "45.05011"
  },
  {
    "country": "AM",
    "name": "Tsovak",
    "lat": "40.18254",
    "lng": "45.63286"
  },
  {
    "country": "AM",
    "name": "Tsovagyugh",
    "lat": "40.63348",
    "lng": "44.96112"
  },
  {
    "country": "AM",
    "name": "Tsaghkunk’",
    "lat": "40.18048",
    "lng": "44.27228"
  },
  {
    "country": "AM",
    "name": "Tsaghkahovit",
    "lat": "40.63428",
    "lng": "44.22241"
  },
  {
    "country": "AM",
    "name": "Tsaghkaber",
    "lat": "40.79849",
    "lng": "44.10144"
  },
  {
    "country": "AM",
    "name": "Tsaghkadzor",
    "lat": "40.53259",
    "lng": "44.72025"
  },
  {
    "country": "AM",
    "name": "Tsovasar",
    "lat": "40.1382",
    "lng": "45.19096"
  },
  {
    "country": "AM",
    "name": "Tashir",
    "lat": "41.12072",
    "lng": "44.28462"
  },
  {
    "country": "AM",
    "name": "Tandzut",
    "lat": "40.06952",
    "lng": "44.07788"
  },
  {
    "country": "AM",
    "name": "T’alin",
    "lat": "40.39172",
    "lng": "43.87793"
  },
  {
    "country": "AM",
    "name": "Stepanavan",
    "lat": "41.00995",
    "lng": "44.38531"
  },
  {
    "country": "AM",
    "name": "Spitak",
    "lat": "40.83221",
    "lng": "44.26731"
  },
  {
    "country": "AM",
    "name": "Spandaryan",
    "lat": "40.66105",
    "lng": "44.01551"
  },
  {
    "country": "AM",
    "name": "Alashkert",
    "lat": "40.10712",
    "lng": "44.05108"
  },
  {
    "country": "AM",
    "name": "Solak",
    "lat": "40.46252",
    "lng": "44.70709"
  },
  {
    "country": "AM",
    "name": "Sis",
    "lat": "40.05829",
    "lng": "44.38892"
  },
  {
    "country": "AM",
    "name": "Shnogh",
    "lat": "41.14693",
    "lng": "44.84043"
  },
  {
    "country": "AM",
    "name": "Shirak",
    "lat": "40.84042",
    "lng": "43.91582"
  },
  {
    "country": "AM",
    "name": "Shenavan",
    "lat": "40.48328",
    "lng": "44.38348"
  },
  {
    "country": "AM",
    "name": "Shenavan",
    "lat": "40.05548",
    "lng": "43.93048"
  },
  {
    "country": "AM",
    "name": "Sevan",
    "lat": "40.5473",
    "lng": "44.94171"
  },
  {
    "country": "AM",
    "name": "Sarukhan",
    "lat": "40.29169",
    "lng": "45.13068"
  },
  {
    "country": "AM",
    "name": "Sarigyugh",
    "lat": "41.03531",
    "lng": "45.14486"
  },
  {
    "country": "AM",
    "name": "Saratak",
    "lat": "40.6709",
    "lng": "43.87231"
  },
  {
    "country": "AM",
    "name": "Saramej",
    "lat": "40.77487",
    "lng": "44.2222"
  },
  {
    "country": "AM",
    "name": "Sarahart’",
    "lat": "40.87043",
    "lng": "44.21407"
  },
  {
    "country": "AM",
    "name": "Geghakert",
    "lat": "40.18516",
    "lng": "44.24331"
  },
  {
    "country": "AM",
    "name": "Ptghni",
    "lat": "40.25568",
    "lng": "44.58612"
  },
  {
    "country": "AM",
    "name": "Ptghunk’",
    "lat": "40.16388",
    "lng": "44.36389"
  },
  {
    "country": "AM",
    "name": "P’shatavan",
    "lat": "40.03888",
    "lng": "44.06671"
  },
  {
    "country": "AM",
    "name": "Prroshyan",
    "lat": "40.24731",
    "lng": "44.41949"
  },
  {
    "country": "AM",
    "name": "P’ok’r Mant’ash",
    "lat": "40.64026",
    "lng": "44.04666"
  },
  {
    "country": "AM",
    "name": "Zoravan",
    "lat": "40.35553",
    "lng": "44.52228"
  },
  {
    "country": "AM",
    "name": "Pemzashen",
    "lat": "40.58612",
    "lng": "43.94311"
  },
  {
    "country": "AM",
    "name": "Parravak’ar",
    "lat": "40.98248",
    "lng": "45.36696"
  },
  {
    "country": "AM",
    "name": "Oshakan",
    "lat": "40.26392",
    "lng": "44.31671"
  },
  {
    "country": "AM",
    "name": "Sardarapat",
    "lat": "40.13206",
    "lng": "44.00969"
  },
  {
    "country": "AM",
    "name": "Odzun",
    "lat": "41.05321",
    "lng": "44.61341"
  },
  {
    "country": "AM",
    "name": "Noyemberyan",
    "lat": "41.17244",
    "lng": "44.99917"
  },
  {
    "country": "AM",
    "name": "Nor Gyugh",
    "lat": "40.26672",
    "lng": "44.65832"
  },
  {
    "country": "AM",
    "name": "Nor Geghi",
    "lat": "40.32233",
    "lng": "44.58331"
  },
  {
    "country": "AM",
    "name": "Norashen",
    "lat": "41.18886",
    "lng": "44.33336"
  },
  {
    "country": "AM",
    "name": "Norashen",
    "lat": "40.0013",
    "lng": "44.59296"
  },
  {
    "country": "AM",
    "name": "Nor Armavir",
    "lat": "40.08612",
    "lng": "43.99451"
  },
  {
    "country": "AM",
    "name": "Noramarg",
    "lat": "40.02228",
    "lng": "44.42511"
  },
  {
    "country": "AM",
    "name": "Norakert",
    "lat": "40.19733",
    "lng": "44.3501"
  },
  {
    "country": "AM",
    "name": "Noratus",
    "lat": "40.37793",
    "lng": "45.18048"
  },
  {
    "country": "AM",
    "name": "Nerkin Getashen",
    "lat": "40.14172",
    "lng": "45.27087"
  },
  {
    "country": "AM",
    "name": "Navur",
    "lat": "40.86695",
    "lng": "45.34179"
  },
  {
    "country": "AM",
    "name": "Nalbandyan",
    "lat": "40.0639",
    "lng": "43.98889"
  },
  {
    "country": "AM",
    "name": "Basen",
    "lat": "40.75767",
    "lng": "43.99274"
  },
  {
    "country": "AM",
    "name": "Hovtamej",
    "lat": "40.18329",
    "lng": "44.25848"
  },
  {
    "country": "AM",
    "name": "Mrgashen",
    "lat": "40.28607",
    "lng": "44.54449"
  },
  {
    "country": "AM",
    "name": "Mrgashat",
    "lat": "40.13068",
    "lng": "44.08069"
  },
  {
    "country": "AM",
    "name": "Mrganush",
    "lat": "40.02857",
    "lng": "44.55831"
  },
  {
    "country": "AM",
    "name": "Mosesgegh",
    "lat": "40.90534",
    "lng": "45.48838"
  },
  {
    "country": "AM",
    "name": "Mets Parni",
    "lat": "40.83472",
    "lng": "44.11108"
  },
  {
    "country": "AM",
    "name": "Mets Masrik",
    "lat": "40.21948",
    "lng": "45.76391"
  },
  {
    "country": "AM",
    "name": "Mets Mant’ash",
    "lat": "40.64376",
    "lng": "44.05653"
  },
  {
    "country": "AM",
    "name": "Metsavan",
    "lat": "41.20156",
    "lng": "44.22877"
  },
  {
    "country": "AM",
    "name": "Metsamor",
    "lat": "40.07233",
    "lng": "44.29169"
  },
  {
    "country": "AM",
    "name": "Merdzavan",
    "lat": "40.1814",
    "lng": "44.40033"
  },
  {
    "country": "AM",
    "name": "Meghrashen",
    "lat": "40.6723",
    "lng": "43.95831"
  },
  {
    "country": "AM",
    "name": "Meghradzor",
    "lat": "40.60611",
    "lng": "44.65147"
  },
  {
    "country": "AM",
    "name": "Mayakovski",
    "lat": "40.25293",
    "lng": "44.63892"
  },
  {
    "country": "AM",
    "name": "Masis",
    "lat": "40.06572",
    "lng": "44.41913"
  },
  {
    "country": "AM",
    "name": "Martuni",
    "lat": "40.13892",
    "lng": "45.30548"
  },
  {
    "country": "AM",
    "name": "Marmarashen",
    "lat": "40.05829",
    "lng": "44.47229"
  },
  {
    "country": "AM",
    "name": "Marmashen",
    "lat": "40.83486",
    "lng": "43.7779"
  },
  {
    "country": "AM",
    "name": "Margahovit",
    "lat": "40.73381",
    "lng": "44.68474"
  },
  {
    "country": "AM",
    "name": "Maralik",
    "lat": "40.57507",
    "lng": "43.87231"
  },
  {
    "country": "AM",
    "name": "Mayisyan",
    "lat": "40.84715",
    "lng": "43.83938"
  },
  {
    "country": "AM",
    "name": "Madina",
    "lat": "40.07637",
    "lng": "45.25507"
  },
  {
    "country": "AM",
    "name": "Lukashin",
    "lat": "40.18726",
    "lng": "44.0039"
  },
  {
    "country": "AM",
    "name": "Lorut",
    "lat": "40.93717",
    "lng": "44.77142"
  },
  {
    "country": "AM",
    "name": "Lichk’",
    "lat": "40.15933",
    "lng": "45.23467"
  },
  {
    "country": "AM",
    "name": "Lerrnavan",
    "lat": "40.7882",
    "lng": "44.16024"
  },
  {
    "country": "AM",
    "name": "Lerrnapat",
    "lat": "40.81538",
    "lng": "44.39344"
  },
  {
    "country": "AM",
    "name": "Lerrnants’k’",
    "lat": "40.79532",
    "lng": "44.27435"
  },
  {
    "country": "AM",
    "name": "Lerrnanist",
    "lat": "40.46676",
    "lng": "44.79249"
  },
  {
    "country": "AM",
    "name": "Lerrnakert",
    "lat": "40.5625",
    "lng": "43.9389"
  },
  {
    "country": "AM",
    "name": "Khoronk’",
    "lat": "40.13611",
    "lng": "44.24731"
  },
  {
    "country": "AM",
    "name": "Lchashen",
    "lat": "40.51947",
    "lng": "44.93048"
  },
  {
    "country": "AM",
    "name": "Lchap",
    "lat": "40.45569",
    "lng": "45.07507"
  },
  {
    "country": "AM",
    "name": "Lanjaghbyur",
    "lat": "40.26947",
    "lng": "45.14447"
  },
  {
    "country": "AM",
    "name": "Kotayk’",
    "lat": "40.27789",
    "lng": "44.66388"
  },
  {
    "country": "AM",
    "name": "Kosh",
    "lat": "40.30011",
    "lng": "44.16107"
  },
  {
    "country": "AM",
    "name": "Vanadzor",
    "lat": "40.80456",
    "lng": "44.4939"
  },
  {
    "country": "AM",
    "name": "Hnaberd",
    "lat": "40.63721",
    "lng": "44.14058"
  },
  {
    "country": "AM",
    "name": "Khasht’arrak",
    "lat": "40.93668",
    "lng": "45.1821"
  },
  {
    "country": "AM",
    "name": "Kasakh",
    "lat": "40.53697",
    "lng": "44.41046"
  },
  {
    "country": "AM",
    "name": "Karchaghbyur",
    "lat": "40.17048",
    "lng": "45.57785"
  },
  {
    "country": "AM",
    "name": "Karbi",
    "lat": "40.33069",
    "lng": "44.37793"
  },
  {
    "country": "AM",
    "name": "Karanlukh",
    "lat": "40.10444",
    "lng": "45.28972"
  },
  {
    "country": "AM",
    "name": "Kaputan",
    "lat": "40.32507",
    "lng": "44.70007"
  },
  {
    "country": "AM",
    "name": "K’anak’erravan",
    "lat": "40.24739",
    "lng": "44.53511"
  },
  {
    "country": "AM",
    "name": "Kamo",
    "lat": "40.82572",
    "lng": "43.95071"
  },
  {
    "country": "AM",
    "name": "Gavar",
    "lat": "40.35398",
    "lng": "45.12386"
  },
  {
    "country": "AM",
    "name": "Mayisyan",
    "lat": "40.15701",
    "lng": "44.09192"
  },
  {
    "country": "AM",
    "name": "Shahumyan",
    "lat": "40.77482",
    "lng": "44.54596"
  },
  {
    "country": "AM",
    "name": "Ijevan",
    "lat": "40.87877",
    "lng": "45.14851"
  },
  {
    "country": "AM",
    "name": "Hrazdan",
    "lat": "40.49748",
    "lng": "44.7662"
  },
  {
    "country": "AM",
    "name": "Armavir",
    "lat": "40.15446",
    "lng": "44.03815"
  },
  {
    "country": "AM",
    "name": "Hayanist",
    "lat": "40.12231",
    "lng": "44.37793"
  },
  {
    "country": "AM",
    "name": "Haghartsin",
    "lat": "40.77614",
    "lng": "44.96847"
  },
  {
    "country": "AM",
    "name": "Gyumri",
    "lat": "40.7942",
    "lng": "43.84528"
  },
  {
    "country": "AM",
    "name": "Gyulagarak",
    "lat": "40.96715",
    "lng": "44.47144"
  },
  {
    "country": "AM",
    "name": "Ghukasavan",
    "lat": "40.12793",
    "lng": "44.41669"
  },
  {
    "country": "AM",
    "name": "Geghamasar",
    "lat": "40.31091",
    "lng": "45.67924"
  },
  {
    "country": "AM",
    "name": "Gugark",
    "lat": "40.8046",
    "lng": "44.54025"
  },
  {
    "country": "AM",
    "name": "Tsiatsan",
    "lat": "40.1861",
    "lng": "44.26947"
  },
  {
    "country": "AM",
    "name": "Goght’",
    "lat": "40.1347",
    "lng": "44.78332"
  },
  {
    "country": "AM",
    "name": "Gogaran",
    "lat": "40.89255",
    "lng": "44.19915"
  },
  {
    "country": "AM",
    "name": "Getazat",
    "lat": "40.03844",
    "lng": "44.56369"
  },
  {
    "country": "AM",
    "name": "Getashen",
    "lat": "40.04449",
    "lng": "43.94171"
  },
  {
    "country": "AM",
    "name": "Geghanist",
    "lat": "40.14587",
    "lng": "44.43048"
  },
  {
    "country": "AM",
    "name": "Geghamavan",
    "lat": "40.5625",
    "lng": "44.88892"
  },
  {
    "country": "AM",
    "name": "Garrni",
    "lat": "40.11931",
    "lng": "44.73442"
  },
  {
    "country": "AM",
    "name": "Gagarin",
    "lat": "40.54026",
    "lng": "44.86962"
  },
  {
    "country": "AM",
    "name": "Fantan",
    "lat": "40.39447",
    "lng": "44.6861"
  },
  {
    "country": "AM",
    "name": "Fioletovo",
    "lat": "40.72241",
    "lng": "44.71769"
  },
  {
    "country": "AM",
    "name": "Dzoraghbyur",
    "lat": "40.20412",
    "lng": "44.6415"
  },
  {
    "country": "AM",
    "name": "Dzoragyugh",
    "lat": "40.16957",
    "lng": "45.18337"
  },
  {
    "country": "AM",
    "name": "Dzit’hank’ov",
    "lat": "40.50848",
    "lng": "43.82092"
  },
  {
    "country": "AM",
    "name": "Jrashen",
    "lat": "40.79028",
    "lng": "44.18664"
  },
  {
    "country": "AM",
    "name": "Jrashen",
    "lat": "40.05275",
    "lng": "44.51259"
  },
  {
    "country": "AM",
    "name": "Jrahovit",
    "lat": "40.0473",
    "lng": "44.4751"
  },
  {
    "country": "AM",
    "name": "Janfida",
    "lat": "40.04449",
    "lng": "44.02789"
  },
  {
    "country": "AM",
    "name": "Dvin",
    "lat": "40.01984",
    "lng": "44.58376"
  },
  {
    "country": "AM",
    "name": "Dsegh",
    "lat": "40.9617",
    "lng": "44.65003"
  },
  {
    "country": "AM",
    "name": "Drakhtik",
    "lat": "40.56497",
    "lng": "45.2367"
  },
  {
    "country": "AM",
    "name": "Doghs",
    "lat": "40.22229",
    "lng": "44.27228"
  },
  {
    "country": "AM",
    "name": "Dilijan",
    "lat": "40.7417",
    "lng": "44.8501"
  },
  {
    "country": "AM",
    "name": "Ddmashen",
    "lat": "40.57028",
    "lng": "44.82295"
  },
  {
    "country": "AM",
    "name": "Darpas",
    "lat": "40.83674",
    "lng": "44.42494"
  },
  {
    "country": "AM",
    "name": "Dalarik",
    "lat": "40.2279",
    "lng": "43.87793"
  },
  {
    "country": "AM",
    "name": "Chochkan",
    "lat": "41.18118",
    "lng": "44.83217"
  },
  {
    "country": "AM",
    "name": "Ch’arents’avan",
    "lat": "40.40289",
    "lng": "44.64447"
  },
  {
    "country": "AM",
    "name": "Chambarak",
    "lat": "40.59655",
    "lng": "45.35498"
  },
  {
    "country": "AM",
    "name": "Bjni",
    "lat": "40.45831",
    "lng": "44.65008"
  },
  {
    "country": "AM",
    "name": "Byureghavan",
    "lat": "40.31417",
    "lng": "44.59333"
  },
  {
    "country": "AM",
    "name": "Byurakan",
    "lat": "40.33894",
    "lng": "44.27275"
  },
  {
    "country": "AM",
    "name": "Buzhakan",
    "lat": "40.45569",
    "lng": "44.51947"
  },
  {
    "country": "AM",
    "name": "Berdavan",
    "lat": "41.20503",
    "lng": "44.99967"
  },
  {
    "country": "AM",
    "name": "Berd",
    "lat": "40.88135",
    "lng": "45.38901"
  },
  {
    "country": "AM",
    "name": "Bazum",
    "lat": "40.86763",
    "lng": "44.43978"
  },
  {
    "country": "AM",
    "name": "Byuravan",
    "lat": "40.01604",
    "lng": "44.51889"
  },
  {
    "country": "AM",
    "name": "Bambakashat",
    "lat": "40.10828",
    "lng": "44.01947"
  },
  {
    "country": "AM",
    "name": "Balahovit",
    "lat": "40.25153",
    "lng": "44.60828"
  },
  {
    "country": "AM",
    "name": "Bagratashen",
    "lat": "41.24358",
    "lng": "44.81737"
  },
  {
    "country": "AM",
    "name": "Azatan",
    "lat": "40.71959",
    "lng": "43.82727"
  },
  {
    "country": "AM",
    "name": "Haykavan",
    "lat": "40.80312",
    "lng": "43.75173"
  },
  {
    "country": "AM",
    "name": "Aygestan",
    "lat": "40.00293",
    "lng": "44.55829"
  },
  {
    "country": "AM",
    "name": "Aygeshat",
    "lat": "40.23608",
    "lng": "44.28888"
  },
  {
    "country": "AM",
    "name": "Aygeshat",
    "lat": "40.07507",
    "lng": "44.0611"
  },
  {
    "country": "AM",
    "name": "Aknalich",
    "lat": "40.14728",
    "lng": "44.16669"
  },
  {
    "country": "AM",
    "name": "Aygehovit",
    "lat": "40.97951",
    "lng": "45.25033"
  },
  {
    "country": "AM",
    "name": "Artimet",
    "lat": "40.15008",
    "lng": "44.26672"
  },
  {
    "country": "AM",
    "name": "Astghadzor",
    "lat": "40.12231",
    "lng": "45.35553"
  },
  {
    "country": "AM",
    "name": "Ashtarak",
    "lat": "40.2991",
    "lng": "44.36204"
  },
  {
    "country": "AM",
    "name": "Ashnak",
    "lat": "40.33069",
    "lng": "43.91669"
  },
  {
    "country": "AM",
    "name": "Arzni",
    "lat": "40.2973",
    "lng": "44.59869"
  },
  {
    "country": "AM",
    "name": "Arzakan",
    "lat": "40.45007",
    "lng": "44.60828"
  },
  {
    "country": "AM",
    "name": "Arteni",
    "lat": "40.2973",
    "lng": "43.76672"
  },
  {
    "country": "AM",
    "name": "Arshaluys",
    "lat": "40.16949",
    "lng": "44.21393"
  },
  {
    "country": "AM",
    "name": "Argel",
    "lat": "40.37793",
    "lng": "44.6001"
  },
  {
    "country": "AM",
    "name": "Argavand",
    "lat": "40.15289",
    "lng": "44.4389"
  },
  {
    "country": "AM",
    "name": "Argavand",
    "lat": "40.0611",
    "lng": "44.09448"
  },
  {
    "country": "AM",
    "name": "Arevshat",
    "lat": "40.65345",
    "lng": "44.04419"
  },
  {
    "country": "AM",
    "name": "Arevshat",
    "lat": "40.03963",
    "lng": "44.54179"
  },
  {
    "country": "AM",
    "name": "Arevik",
    "lat": "40.7417",
    "lng": "43.9043"
  },
  {
    "country": "AM",
    "name": "Arevik",
    "lat": "40.1001",
    "lng": "44.09448"
  },
  {
    "country": "AM",
    "name": "Arevashogh",
    "lat": "40.86039",
    "lng": "44.27438"
  },
  {
    "country": "AM",
    "name": "Arevashat",
    "lat": "40.14447",
    "lng": "44.37512"
  },
  {
    "country": "AM",
    "name": "Archis",
    "lat": "41.16351",
    "lng": "44.87631"
  },
  {
    "country": "AM",
    "name": "Arbat’",
    "lat": "40.13892",
    "lng": "44.40289"
  },
  {
    "country": "AM",
    "name": "Arazap’",
    "lat": "40.04169",
    "lng": "44.14728"
  },
  {
    "country": "AM",
    "name": "Arrap’i",
    "lat": "40.78276",
    "lng": "43.80583"
  },
  {
    "country": "AM",
    "name": "Aramus",
    "lat": "40.25095",
    "lng": "44.66351"
  },
  {
    "country": "AM",
    "name": "Arak’s",
    "lat": "40.05548",
    "lng": "44.30292"
  },
  {
    "country": "AM",
    "name": "Aragats",
    "lat": "40.48889",
    "lng": "44.3529"
  },
  {
    "country": "AM",
    "name": "Aparan",
    "lat": "40.59323",
    "lng": "44.3589"
  },
  {
    "country": "AM",
    "name": "Apaga",
    "lat": "40.09729",
    "lng": "44.25293"
  },
  {
    "country": "AM",
    "name": "Anushavan",
    "lat": "40.65008",
    "lng": "43.98053"
  },
  {
    "country": "AM",
    "name": "Amasia",
    "lat": "40.95442",
    "lng": "43.7872"
  },
  {
    "country": "AM",
    "name": "Alaverdi",
    "lat": "41.09766",
    "lng": "44.67316"
  },
  {
    "country": "AM",
    "name": "Akunk’",
    "lat": "40.26672",
    "lng": "44.6861"
  },
  {
    "country": "AM",
    "name": "Akunk’",
    "lat": "40.14954",
    "lng": "45.66335"
  },
  {
    "country": "AM",
    "name": "Akhuryan",
    "lat": "40.78003",
    "lng": "43.90027"
  },
  {
    "country": "AM",
    "name": "Aghavnatun",
    "lat": "40.2333",
    "lng": "44.25295"
  },
  {
    "country": "AM",
    "name": "Aghavnadzor",
    "lat": "40.58195",
    "lng": "44.69581"
  },
  {
    "country": "AM",
    "name": "Agarak",
    "lat": "41.01072",
    "lng": "44.46845"
  },
  {
    "country": "AM",
    "name": "Agarakavan",
    "lat": "40.33069",
    "lng": "44.07233"
  },
  {
    "country": "AM",
    "name": "Abovyan",
    "lat": "40.27368",
    "lng": "44.63348"
  },
  {
    "country": "AM",
    "name": "Abovyan",
    "lat": "40.04851",
    "lng": "44.54742"
  },
  {
    "country": "AM",
    "name": "Vardablur",
    "lat": "40.97083",
    "lng": "44.50889"
  },
  {
    "country": "AM",
    "name": "Bardzrashen",
    "lat": "40.08533",
    "lng": "44.57957"
  },
  {
    "country": "AM",
    "name": "Nshavan",
    "lat": "40.02787",
    "lng": "44.52565"
  },
  {
    "country": "AM",
    "name": "Norabats’",
    "lat": "40.10553",
    "lng": "44.43329"
  },
  {
    "country": "AM",
    "name": "Azatamut",
    "lat": "40.98204",
    "lng": "45.18551"
  },
  {
    "country": "AM",
    "name": "Artsvaberd",
    "lat": "40.83947",
    "lng": "45.47033"
  },
  {
    "country": "AM",
    "name": "Nor Yerznka",
    "lat": "40.30011",
    "lng": "44.38892"
  },
  {
    "country": "AM",
    "name": "Sasunik",
    "lat": "40.25012",
    "lng": "44.34448"
  },
  {
    "country": "AM",
    "name": "Gandzak",
    "lat": "40.31472",
    "lng": "45.11139"
  },
  {
    "country": "AM",
    "name": "Myasnikyan",
    "lat": "40.18048",
    "lng": "43.91949"
  },
  {
    "country": "AM",
    "name": "Lenughi",
    "lat": "40.12512",
    "lng": "43.96393"
  },
  {
    "country": "AM",
    "name": "Metsamor",
    "lat": "40.14447",
    "lng": "44.1167"
  },
  {
    "country": "AM",
    "name": "Gay",
    "lat": "40.08444",
    "lng": "44.30528"
  },
  {
    "country": "AM",
    "name": "Baghramyan",
    "lat": "40.19452",
    "lng": "44.36951"
  },
  {
    "country": "AM",
    "name": "Musalerr",
    "lat": "40.1557",
    "lng": "44.37793"
  },
  {
    "country": "AM",
    "name": "Darakert",
    "lat": "40.10553",
    "lng": "44.41388"
  },
  {
    "country": "AM",
    "name": "Dashtavan",
    "lat": "40.1001",
    "lng": "44.39172"
  },
  {
    "country": "AM",
    "name": "Nizami",
    "lat": "40.09168",
    "lng": "44.4057"
  },
  {
    "country": "AM",
    "name": "Vardadzor",
    "lat": "40.18701",
    "lng": "45.19212"
  },
  {
    "country": "AM",
    "name": "Taronik",
    "lat": "40.13367",
    "lng": "44.19957"
  },
  {
    "country": "AM",
    "name": "Aknashen",
    "lat": "40.09551",
    "lng": "44.28604"
  },
  {
    "country": "AM",
    "name": "Haykashen",
    "lat": "40.07233",
    "lng": "44.30829"
  },
  {
    "country": "AM",
    "name": "Hovtashat",
    "lat": "40.09729",
    "lng": "44.34448"
  },
  {
    "country": "AM",
    "name": "Sayat’-Nova",
    "lat": "40.07507",
    "lng": "44.40008"
  },
  {
    "country": "AM",
    "name": "Voskehat",
    "lat": "40.14172",
    "lng": "44.33069"
  },
  {
    "country": "AM",
    "name": "Griboyedov",
    "lat": "40.11307",
    "lng": "44.27169"
  },
  {
    "country": "AM",
    "name": "Gmbet’",
    "lat": "40.22369",
    "lng": "44.25409"
  },
  {
    "country": "AM",
    "name": "Aygek",
    "lat": "40.1889",
    "lng": "44.38611"
  },
  {
    "country": "AM",
    "name": "Hovtashen",
    "lat": "40.02508",
    "lng": "44.45007"
  },
  {
    "country": "AM",
    "name": "Dimitrov",
    "lat": "40.00848",
    "lng": "44.4917"
  },
  {
    "country": "AM",
    "name": "Mrgavet",
    "lat": "40.02789",
    "lng": "44.48328"
  },
  {
    "country": "AM",
    "name": "Arevabuyr",
    "lat": "40.03607",
    "lng": "44.46948"
  },
  {
    "country": "AO",
    "name": "Saurimo",
    "lat": "-9.66078",
    "lng": "20.39155"
  },
  {
    "country": "AO",
    "name": "Lucapa",
    "lat": "-8.41915",
    "lng": "20.74466"
  },
  {
    "country": "AO",
    "name": "Dundo",
    "lat": "-7.36643",
    "lng": "20.81557"
  },
  {
    "country": "AO",
    "name": "Lumeji",
    "lat": "-11.55768",
    "lng": "20.78096"
  },
  {
    "country": "AO",
    "name": "Luau",
    "lat": "-10.70727",
    "lng": "22.22466"
  },
  {
    "country": "AO",
    "name": "Léua",
    "lat": "-11.65753",
    "lng": "20.44772"
  },
  {
    "country": "AO",
    "name": "Cazaji",
    "lat": "-11.06715",
    "lng": "20.70148"
  },
  {
    "country": "AO",
    "name": "Uíge",
    "lat": "-7.60874",
    "lng": "15.06131"
  },
  {
    "country": "AO",
    "name": "Soio",
    "lat": "-6.1349",
    "lng": "12.36894"
  },
  {
    "country": "AO",
    "name": "N'zeto",
    "lat": "-7.23116",
    "lng": "12.8666"
  },
  {
    "country": "AO",
    "name": "N’dalatando",
    "lat": "-9.29782",
    "lng": "14.91162"
  },
  {
    "country": "AO",
    "name": "Mbanza Kongo",
    "lat": "-6.26667",
    "lng": "14.23833"
  },
  {
    "country": "AO",
    "name": "Malanje",
    "lat": "-9.54015",
    "lng": "16.34096"
  },
  {
    "country": "AO",
    "name": "Luanda",
    "lat": "-8.83682",
    "lng": "13.23432"
  },
  {
    "country": "AO",
    "name": "Caxito",
    "lat": "-8.57848",
    "lng": "13.66425"
  },
  {
    "country": "AO",
    "name": "Camabatela",
    "lat": "-8.18812",
    "lng": "15.37495"
  },
  {
    "country": "AO",
    "name": "Cabinda",
    "lat": "-5.56717",
    "lng": "12.19787"
  },
  {
    "country": "AO",
    "name": "Uacu Cungo",
    "lat": "-11.35669",
    "lng": "15.11719"
  },
  {
    "country": "AO",
    "name": "Sumbe",
    "lat": "-11.20605",
    "lng": "13.84371"
  },
  {
    "country": "AO",
    "name": "Quibala",
    "lat": "-10.73366",
    "lng": "14.97995"
  },
  {
    "country": "AO",
    "name": "Ondjiva",
    "lat": "-17.06667",
    "lng": "15.73333"
  },
  {
    "country": "AO",
    "name": "Moçâmedes",
    "lat": "-15.19611",
    "lng": "12.15222"
  },
  {
    "country": "AO",
    "name": "Menongue",
    "lat": "-14.6585",
    "lng": "17.69099"
  },
  {
    "country": "AO",
    "name": "Luena",
    "lat": "-11.78333",
    "lng": "19.91667"
  },
  {
    "country": "AO",
    "name": "Lubango",
    "lat": "-14.91717",
    "lng": "13.4925"
  },
  {
    "country": "AO",
    "name": "Longonjo",
    "lat": "-12.90795",
    "lng": "15.24845"
  },
  {
    "country": "AO",
    "name": "Lobito",
    "lat": "-12.3644",
    "lng": "13.53601"
  },
  {
    "country": "AO",
    "name": "Cuito",
    "lat": "-12.38333",
    "lng": "16.93333"
  },
  {
    "country": "AO",
    "name": "Huambo",
    "lat": "-12.77611",
    "lng": "15.73917"
  },
  {
    "country": "AO",
    "name": "Chissamba",
    "lat": "-12.16667",
    "lng": "17.33333"
  },
  {
    "country": "AO",
    "name": "Catumbela",
    "lat": "-12.43002",
    "lng": "13.54677"
  },
  {
    "country": "AO",
    "name": "Catabola",
    "lat": "-12.15",
    "lng": "17.28333"
  },
  {
    "country": "AO",
    "name": "Camacupa",
    "lat": "-12.01667",
    "lng": "17.48333"
  },
  {
    "country": "AO",
    "name": "Caconda",
    "lat": "-13.73564",
    "lng": "15.0618"
  },
  {
    "country": "AO",
    "name": "Caála",
    "lat": "-12.8525",
    "lng": "15.56056"
  },
  {
    "country": "AO",
    "name": "Benguela",
    "lat": "-12.57626",
    "lng": "13.40547"
  },
  {
    "country": "AO",
    "name": "Chela",
    "lat": "-12.30261",
    "lng": "15.43358"
  },
  {
    "country": "AO",
    "name": "Chinjenje",
    "lat": "-12.93244",
    "lng": "14.99238"
  },
  {
    "country": "AQ",
    "name": "McMurdo Station",
    "lat": "-77.84632",
    "lng": "166.66824"
  },
  {
    "country": "AR",
    "name": "Zárate",
    "lat": "-34.09814",
    "lng": "-59.02858"
  },
  {
    "country": "AR",
    "name": "Yataity Calle",
    "lat": "-29.01913",
    "lng": "-58.90846"
  },
  {
    "country": "AR",
    "name": "Yapeyú",
    "lat": "-29.46914",
    "lng": "-56.81841"
  },
  {
    "country": "AR",
    "name": "Wanda",
    "lat": "-25.96879",
    "lng": "-54.56285"
  },
  {
    "country": "AR",
    "name": "Villa Paranacito",
    "lat": "-33.71381",
    "lng": "-58.65844"
  },
  {
    "country": "AR",
    "name": "Villa Ortúzar",
    "lat": "-34.57973",
    "lng": "-58.46829"
  },
  {
    "country": "AR",
    "name": "Villa Ocampo",
    "lat": "-28.48752",
    "lng": "-59.35515"
  },
  {
    "country": "AR",
    "name": "Villa María Grande",
    "lat": "-31.66565",
    "lng": "-59.90182"
  },
  {
    "country": "AR",
    "name": "Villa Mantero",
    "lat": "-32.39727",
    "lng": "-58.74596"
  },
  {
    "country": "AR",
    "name": "Villa Lugano",
    "lat": "-34.67907",
    "lng": "-58.47263"
  },
  {
    "country": "AR",
    "name": "Villa Hernandarias",
    "lat": "-31.23097",
    "lng": "-59.98464"
  },
  {
    "country": "AR",
    "name": "Villaguay",
    "lat": "-31.8653",
    "lng": "-59.02689"
  },
  {
    "country": "AR",
    "name": "Villa Gesell",
    "lat": "-37.26394",
    "lng": "-56.97304"
  },
  {
    "country": "AR",
    "name": "Villa Escolar",
    "lat": "-26.62209",
    "lng": "-58.67134"
  },
  {
    "country": "AR",
    "name": "Villa Elisa",
    "lat": "-32.1632",
    "lng": "-58.40082"
  },
  {
    "country": "AR",
    "name": "Villa de Mayo",
    "lat": "-34.5108",
    "lng": "-58.68059"
  },
  {
    "country": "AR",
    "name": "Villa del Rosario",
    "lat": "-30.79567",
    "lng": "-57.91257"
  },
  {
    "country": "AR",
    "name": "Verónica",
    "lat": "-35.38796",
    "lng": "-57.33691"
  },
  {
    "country": "AR",
    "name": "Veinticinco de Mayo",
    "lat": "-27.37679",
    "lng": "-54.74312"
  },
  {
    "country": "AR",
    "name": "Urdinarrain",
    "lat": "-32.68573",
    "lng": "-58.89323"
  },
  {
    "country": "AR",
    "name": "Ubajay",
    "lat": "-31.79358",
    "lng": "-58.3135"
  },
  {
    "country": "AR",
    "name": "Tres Capones",
    "lat": "-28.00641",
    "lng": "-55.60471"
  },
  {
    "country": "AR",
    "name": "Tortuguitas",
    "lat": "-34.47513",
    "lng": "-58.75367"
  },
  {
    "country": "AR",
    "name": "Tigre",
    "lat": "-34.42603",
    "lng": "-58.57962"
  },
  {
    "country": "AR",
    "name": "Tandil",
    "lat": "-37.32167",
    "lng": "-59.13316"
  },
  {
    "country": "AR",
    "name": "Tacuarendí",
    "lat": "-28.41265",
    "lng": "-59.26"
  },
  {
    "country": "AR",
    "name": "Tabossi",
    "lat": "-31.80135",
    "lng": "-59.93477"
  },
  {
    "country": "AR",
    "name": "Suipacha",
    "lat": "-34.7702",
    "lng": "-59.68783"
  },
  {
    "country": "AR",
    "name": "Sauce de Luna",
    "lat": "-31.23794",
    "lng": "-59.21872"
  },
  {
    "country": "AR",
    "name": "Sauce",
    "lat": "-30.08671",
    "lng": "-58.78777"
  },
  {
    "country": "AR",
    "name": "San Vicente",
    "lat": "-35.0249",
    "lng": "-58.42409"
  },
  {
    "country": "AR",
    "name": "San Vicente",
    "lat": "-26.61667",
    "lng": "-54.13333"
  },
  {
    "country": "AR",
    "name": "Santo Tomé",
    "lat": "-28.54939",
    "lng": "-56.04077"
  },
  {
    "country": "AR",
    "name": "Santos Lugares",
    "lat": "-34.60379",
    "lng": "-58.5461"
  },
  {
    "country": "AR",
    "name": "Santo Pipó",
    "lat": "-27.14132",
    "lng": "-55.40867"
  },
  {
    "country": "AR",
    "name": "Santa Rosa",
    "lat": "-28.26318",
    "lng": "-58.11891"
  },
  {
    "country": "AR",
    "name": "Santa María",
    "lat": "-27.9349",
    "lng": "-55.40742"
  },
  {
    "country": "AR",
    "name": "Santa Lucía",
    "lat": "-28.98746",
    "lng": "-59.10287"
  },
  {
    "country": "AR",
    "name": "Santa Elena",
    "lat": "-30.94432",
    "lng": "-59.78832"
  },
  {
    "country": "AR",
    "name": "Santa Anita",
    "lat": "-32.17476",
    "lng": "-58.78622"
  },
  {
    "country": "AR",
    "name": "Santa Ana",
    "lat": "-30.90004",
    "lng": "-57.93162"
  },
  {
    "country": "AR",
    "name": "Santa Ana",
    "lat": "-27.3674",
    "lng": "-55.58091"
  },
  {
    "country": "AR",
    "name": "San Salvador",
    "lat": "-31.62487",
    "lng": "-58.50524"
  },
  {
    "country": "AR",
    "name": "San Roque",
    "lat": "-28.57457",
    "lng": "-58.70817"
  },
  {
    "country": "AR",
    "name": "San Pedro",
    "lat": "-33.67918",
    "lng": "-59.66633"
  },
  {
    "country": "AR",
    "name": "San Pedro",
    "lat": "-26.62207",
    "lng": "-54.10842"
  },
  {
    "country": "AR",
    "name": "San Miguel del Monte",
    "lat": "-35.43962",
    "lng": "-58.80675"
  },
  {
    "country": "AR",
    "name": "San Miguel",
    "lat": "-27.99585",
    "lng": "-57.58964"
  },
  {
    "country": "AR",
    "name": "San Luis del Palmar",
    "lat": "-27.5079",
    "lng": "-58.55454"
  },
  {
    "country": "AR",
    "name": "San Lorenzo",
    "lat": "-28.13306",
    "lng": "-58.76733"
  },
  {
    "country": "AR",
    "name": "San Justo",
    "lat": "-34.6766",
    "lng": "-58.56058"
  },
  {
    "country": "AR",
    "name": "San Justo",
    "lat": "-32.44654",
    "lng": "-58.43569"
  },
  {
    "country": "AR",
    "name": "San José de Feliciano",
    "lat": "-30.38452",
    "lng": "-58.75167"
  },
  {
    "country": "AR",
    "name": "San José",
    "lat": "-27.76979",
    "lng": "-55.7826"
  },
  {
    "country": "AR",
    "name": "San Javier",
    "lat": "-30.57781",
    "lng": "-59.9317"
  },
  {
    "country": "AR",
    "name": "San Javier",
    "lat": "-27.87427",
    "lng": "-55.13509"
  },
  {
    "country": "AR",
    "name": "San Isidro",
    "lat": "-34.4721",
    "lng": "-58.52708"
  },
  {
    "country": "AR",
    "name": "San Ignacio",
    "lat": "-27.25586",
    "lng": "-55.5339"
  },
  {
    "country": "AR",
    "name": "San Gustavo",
    "lat": "-30.68961",
    "lng": "-59.3984"
  },
  {
    "country": "AR",
    "name": "San Francisco de Laishí",
    "lat": "-26.24262",
    "lng": "-58.63039"
  },
  {
    "country": "AR",
    "name": "San Cosme",
    "lat": "-27.37123",
    "lng": "-58.51214"
  },
  {
    "country": "AR",
    "name": "San Clemente del Tuyú",
    "lat": "-36.35694",
    "lng": "-56.72351"
  },
  {
    "country": "AR",
    "name": "San Cayetano",
    "lat": "-38.34653",
    "lng": "-59.60954"
  },
  {
    "country": "AR",
    "name": "San Carlos",
    "lat": "-27.74586",
    "lng": "-55.89731"
  },
  {
    "country": "AR",
    "name": "San Antonio de Areco",
    "lat": "-34.2503",
    "lng": "-59.47163"
  },
  {
    "country": "AR",
    "name": "San Andrés de Giles",
    "lat": "-34.44721",
    "lng": "-59.44451"
  },
  {
    "country": "AR",
    "name": "Saladillo",
    "lat": "-35.63708",
    "lng": "-59.77788"
  },
  {
    "country": "AR",
    "name": "Saladas",
    "lat": "-28.25384",
    "lng": "-58.62591"
  },
  {
    "country": "AR",
    "name": "Ruiz de Montoya",
    "lat": "-26.98333",
    "lng": "-55.05"
  },
  {
    "country": "AR",
    "name": "Rosario del Tala",
    "lat": "-32.30286",
    "lng": "-59.14545"
  },
  {
    "country": "AR",
    "name": "Roque Pérez",
    "lat": "-35.39794",
    "lng": "-59.33271"
  },
  {
    "country": "AR",
    "name": "Riachuelo",
    "lat": "-27.58191",
    "lng": "-58.74497"
  },
  {
    "country": "AR",
    "name": "Riacho Eh-Eh",
    "lat": "-25.36209",
    "lng": "-58.2775"
  },
  {
    "country": "AR",
    "name": "Retiro",
    "lat": "-34.58333",
    "lng": "-58.38333"
  },
  {
    "country": "AR",
    "name": "Resistencia",
    "lat": "-27.46056",
    "lng": "-58.98389"
  },
  {
    "country": "AR",
    "name": "Reconquista",
    "lat": "-29.15",
    "lng": "-59.65"
  },
  {
    "country": "AR",
    "name": "Rauch",
    "lat": "-36.7745",
    "lng": "-59.08973"
  },
  {
    "country": "AR",
    "name": "Ranchos",
    "lat": "-35.51601",
    "lng": "-58.3188"
  },
  {
    "country": "AR",
    "name": "Quilmes",
    "lat": "-34.72904",
    "lng": "-58.26374"
  },
  {
    "country": "AR",
    "name": "Puerto Yeruá",
    "lat": "-31.53713",
    "lng": "-58.01527"
  },
  {
    "country": "AR",
    "name": "Puerto Vilelas",
    "lat": "-27.51414",
    "lng": "-58.93906"
  },
  {
    "country": "AR",
    "name": "Puerto Tirol",
    "lat": "-27.37218",
    "lng": "-59.08206"
  },
  {
    "country": "AR",
    "name": "Puerto Rico",
    "lat": "-26.79598",
    "lng": "-55.02402"
  },
  {
    "country": "AR",
    "name": "Puerto Piray",
    "lat": "-26.46937",
    "lng": "-54.70736"
  },
  {
    "country": "AR",
    "name": "Puerto Libertad",
    "lat": "-25.91958",
    "lng": "-54.58229"
  },
  {
    "country": "AR",
    "name": "Puerto Leoni",
    "lat": "-26.98762",
    "lng": "-55.16569"
  },
  {
    "country": "AR",
    "name": "Puerto Iguazú",
    "lat": "-25.59912",
    "lng": "-54.57355"
  },
  {
    "country": "AR",
    "name": "Puerto Ibicuy",
    "lat": "-33.75305",
    "lng": "-59.17762"
  },
  {
    "country": "AR",
    "name": "Puerto Esperanza",
    "lat": "-26.02267",
    "lng": "-54.61356"
  },
  {
    "country": "AR",
    "name": "Puerto Eldorado",
    "lat": "-26.40843",
    "lng": "-54.69463"
  },
  {
    "country": "AR",
    "name": "Puerto Bermejo",
    "lat": "-26.92739",
    "lng": "-58.50917"
  },
  {
    "country": "AR",
    "name": "Pueblo Libertador",
    "lat": "-30.22087",
    "lng": "-59.38981"
  },
  {
    "country": "AR",
    "name": "Pronunciamiento",
    "lat": "-32.3448",
    "lng": "-58.44268"
  },
  {
    "country": "AR",
    "name": "Presidencia Roca",
    "lat": "-26.1409",
    "lng": "-59.59541"
  },
  {
    "country": "AR",
    "name": "Presidencia de la Plaza",
    "lat": "-27.00147",
    "lng": "-59.84243"
  },
  {
    "country": "AR",
    "name": "Posadas",
    "lat": "-27.36708",
    "lng": "-55.89608"
  },
  {
    "country": "AR",
    "name": "Pontevedra",
    "lat": "-34.74785",
    "lng": "-58.70072"
  },
  {
    "country": "AR",
    "name": "Pirané",
    "lat": "-25.73239",
    "lng": "-59.10879"
  },
  {
    "country": "AR",
    "name": "Pinamar",
    "lat": "-37.10795",
    "lng": "-56.8614"
  },
  {
    "country": "AR",
    "name": "Pilar",
    "lat": "-34.45866",
    "lng": "-58.9142"
  },
  {
    "country": "AR",
    "name": "Pila",
    "lat": "-36.00058",
    "lng": "-58.14391"
  },
  {
    "country": "AR",
    "name": "Piedras Blancas",
    "lat": "-31.18592",
    "lng": "-59.95181"
  },
  {
    "country": "AR",
    "name": "Picada Gobernador López",
    "lat": "-27.67069",
    "lng": "-55.24585"
  },
  {
    "country": "AR",
    "name": "Perugorría",
    "lat": "-29.34132",
    "lng": "-58.61059"
  },
  {
    "country": "AR",
    "name": "Pedro R. Fernández",
    "lat": "-28.75097",
    "lng": "-58.65583"
  },
  {
    "country": "AR",
    "name": "Paso de los Libres",
    "lat": "-29.71251",
    "lng": "-57.08771"
  },
  {
    "country": "AR",
    "name": "Paso de la Patria",
    "lat": "-27.31676",
    "lng": "-58.57197"
  },
  {
    "country": "AR",
    "name": "Panambí",
    "lat": "-27.72369",
    "lng": "-54.91515"
  },
  {
    "country": "AR",
    "name": "Pampa del Indio",
    "lat": "-26.04982",
    "lng": "-59.93728"
  },
  {
    "country": "AR",
    "name": "Pampa Almirón",
    "lat": "-26.70039",
    "lng": "-59.12331"
  },
  {
    "country": "AR",
    "name": "Palo Santo",
    "lat": "-25.56332",
    "lng": "-59.33781"
  },
  {
    "country": "AR",
    "name": "Palmar Grande",
    "lat": "-27.94195",
    "lng": "-57.90057"
  },
  {
    "country": "AR",
    "name": "Olivos",
    "lat": "-34.50747",
    "lng": "-58.48703"
  },
  {
    "country": "AR",
    "name": "Oberá",
    "lat": "-27.48706",
    "lng": "-55.11994"
  },
  {
    "country": "AR",
    "name": "Nueve de Julio",
    "lat": "-28.84051",
    "lng": "-58.8265"
  },
  {
    "country": "AR",
    "name": "Nuestra Señora del Rosario de Caa Catí",
    "lat": "-27.75072",
    "lng": "-57.62073"
  },
  {
    "country": "AR",
    "name": "Nogoyá",
    "lat": "-32.39387",
    "lng": "-59.78953"
  },
  {
    "country": "AR",
    "name": "Necochea",
    "lat": "-38.5545",
    "lng": "-58.73961"
  },
  {
    "country": "AR",
    "name": "Navarro",
    "lat": "-35.00587",
    "lng": "-59.27828"
  },
  {
    "country": "AR",
    "name": "Muñiz",
    "lat": "-34.55622",
    "lng": "-58.70739"
  },
  {
    "country": "AR",
    "name": "Morón",
    "lat": "-34.6509",
    "lng": "-58.61956"
  },
  {
    "country": "AR",
    "name": "Monte Caseros",
    "lat": "-30.25359",
    "lng": "-57.63626"
  },
  {
    "country": "AR",
    "name": "Montecarlo",
    "lat": "-26.5662",
    "lng": "-54.757"
  },
  {
    "country": "AR",
    "name": "Mojón Grande",
    "lat": "-27.71165",
    "lng": "-55.15631"
  },
  {
    "country": "AR",
    "name": "Mocoretá",
    "lat": "-30.61891",
    "lng": "-57.96344"
  },
  {
    "country": "AR",
    "name": "Miramar",
    "lat": "-38.27161",
    "lng": "-57.8389"
  },
  {
    "country": "AR",
    "name": "Merlo",
    "lat": "-34.66627",
    "lng": "-58.72927"
  },
  {
    "country": "AR",
    "name": "Mercedes",
    "lat": "-34.65145",
    "lng": "-59.43068"
  },
  {
    "country": "AR",
    "name": "Mercedes",
    "lat": "-29.18416",
    "lng": "-58.07519"
  },
  {
    "country": "AR",
    "name": "Mburucuyá",
    "lat": "-28.04532",
    "lng": "-58.22835"
  },
  {
    "country": "AR",
    "name": "Mártires",
    "lat": "-27.42265",
    "lng": "-55.37659"
  },
  {
    "country": "AR",
    "name": "Mariano I. Loza",
    "lat": "-29.37667",
    "lng": "-58.19436"
  },
  {
    "country": "AR",
    "name": "Margarita Belén",
    "lat": "-27.2616",
    "lng": "-58.97219"
  },
  {
    "country": "AR",
    "name": "Mar del Tuyú",
    "lat": "-36.57531",
    "lng": "-56.68883"
  },
  {
    "country": "AR",
    "name": "Mar del Plata",
    "lat": "-38.00042",
    "lng": "-57.5562"
  },
  {
    "country": "AR",
    "name": "Marcos Paz",
    "lat": "-34.78233",
    "lng": "-58.83777"
  },
  {
    "country": "AR",
    "name": "Malabrigo",
    "lat": "-29.34636",
    "lng": "-59.96957"
  },
  {
    "country": "AR",
    "name": "Makallé",
    "lat": "-27.20687",
    "lng": "-59.28696"
  },
  {
    "country": "AR",
    "name": "Maipú",
    "lat": "-36.86274",
    "lng": "-57.88094"
  },
  {
    "country": "AR",
    "name": "Magdalena",
    "lat": "-35.08065",
    "lng": "-57.51301"
  },
  {
    "country": "AR",
    "name": "Maciá",
    "lat": "-32.1722",
    "lng": "-59.39947"
  },
  {
    "country": "AR",
    "name": "Luján",
    "lat": "-34.57028",
    "lng": "-59.105"
  },
  {
    "country": "AR",
    "name": "Lucas González",
    "lat": "-32.3843",
    "lng": "-59.53013"
  },
  {
    "country": "AR",
    "name": "Los Polvorines",
    "lat": "-34.50316",
    "lng": "-58.70596"
  },
  {
    "country": "AR",
    "name": "Los Helechos",
    "lat": "-27.55051",
    "lng": "-55.07908"
  },
  {
    "country": "AR",
    "name": "Los Conquistadores",
    "lat": "-30.5908",
    "lng": "-58.46773"
  },
  {
    "country": "AR",
    "name": "Los Charrúas",
    "lat": "-31.17548",
    "lng": "-58.18774"
  },
  {
    "country": "AR",
    "name": "Loreto",
    "lat": "-27.76834",
    "lng": "-57.27531"
  },
  {
    "country": "AR",
    "name": "Loreto",
    "lat": "-27.33177",
    "lng": "-55.52499"
  },
  {
    "country": "AR",
    "name": "Lomas de Zamora",
    "lat": "-34.76088",
    "lng": "-58.40632"
  },
  {
    "country": "AR",
    "name": "Lomas de Vallejos",
    "lat": "-27.73501",
    "lng": "-57.9185"
  },
  {
    "country": "AR",
    "name": "Lobos",
    "lat": "-35.18537",
    "lng": "-59.09788"
  },
  {
    "country": "AR",
    "name": "Lobería",
    "lat": "-38.15574",
    "lng": "-58.7913"
  },
  {
    "country": "AR",
    "name": "Libertad",
    "lat": "-30.043",
    "lng": "-57.8202"
  },
  {
    "country": "AR",
    "name": "Leandro N. Alem",
    "lat": "-27.60341",
    "lng": "-55.32491"
  },
  {
    "country": "AR",
    "name": "La Verde",
    "lat": "-27.12634",
    "lng": "-59.37352"
  },
  {
    "country": "AR",
    "name": "Las Toscas",
    "lat": "-28.3529",
    "lng": "-59.25795"
  },
  {
    "country": "AR",
    "name": "Las Garcitas",
    "lat": "-26.61802",
    "lng": "-59.80135"
  },
  {
    "country": "AR",
    "name": "Las Flores",
    "lat": "-36.01403",
    "lng": "-59.09984"
  },
  {
    "country": "AR",
    "name": "Larroque",
    "lat": "-33.03595",
    "lng": "-59.00125"
  },
  {
    "country": "AR",
    "name": "La Plata",
    "lat": "-34.92145",
    "lng": "-57.95453"
  },
  {
    "country": "AR",
    "name": "La Paz",
    "lat": "-30.74179",
    "lng": "-59.64517"
  },
  {
    "country": "AR",
    "name": "Lapachito",
    "lat": "-27.15997",
    "lng": "-59.38605"
  },
  {
    "country": "AR",
    "name": "Lanús",
    "lat": "-34.70252",
    "lng": "-58.3955"
  },
  {
    "country": "AR",
    "name": "La Leonesa",
    "lat": "-27.03786",
    "lng": "-58.70347"
  },
  {
    "country": "AR",
    "name": "Laguna Naick-Neck",
    "lat": "-25.24769",
    "lng": "-58.09383"
  },
  {
    "country": "AR",
    "name": "Laguna Limpia",
    "lat": "-26.49565",
    "lng": "-59.68083"
  },
  {
    "country": "AR",
    "name": "La Escondida",
    "lat": "-27.10724",
    "lng": "-59.44784"
  },
  {
    "country": "AR",
    "name": "La Eduvigis",
    "lat": "-26.83607",
    "lng": "-59.06211"
  },
  {
    "country": "AR",
    "name": "La Cruz",
    "lat": "-29.17443",
    "lng": "-56.64326"
  },
  {
    "country": "AR",
    "name": "La Criolla",
    "lat": "-31.26904",
    "lng": "-58.10558"
  },
  {
    "country": "AR",
    "name": "Juan Pujol",
    "lat": "-30.41873",
    "lng": "-57.85612"
  },
  {
    "country": "AR",
    "name": "Jardín América",
    "lat": "-27.04346",
    "lng": "-55.22698"
  },
  {
    "country": "AR",
    "name": "Ituzaingó",
    "lat": "-34.65803",
    "lng": "-58.66317"
  },
  {
    "country": "AR",
    "name": "Ituzaingó",
    "lat": "-27.58162",
    "lng": "-56.68231"
  },
  {
    "country": "AR",
    "name": "Itatí",
    "lat": "-27.27043",
    "lng": "-58.24458"
  },
  {
    "country": "AR",
    "name": "Itá Ibaté",
    "lat": "-27.42573",
    "lng": "-57.33758"
  },
  {
    "country": "AR",
    "name": "Ibarreta",
    "lat": "-25.21438",
    "lng": "-59.85851"
  },
  {
    "country": "AR",
    "name": "Hurlingham",
    "lat": "-34.5904",
    "lng": "-58.62904"
  },
  {
    "country": "AR",
    "name": "Herrera",
    "lat": "-32.43401",
    "lng": "-58.63177"
  },
  {
    "country": "AR",
    "name": "Herradura",
    "lat": "-26.48705",
    "lng": "-58.31198"
  },
  {
    "country": "AR",
    "name": "Herlitzka",
    "lat": "-27.56516",
    "lng": "-58.25557"
  },
  {
    "country": "AR",
    "name": "Hasenkamp",
    "lat": "-31.51226",
    "lng": "-59.83545"
  },
  {
    "country": "AR",
    "name": "Guaraní",
    "lat": "-27.52323",
    "lng": "-55.16077"
  },
  {
    "country": "AR",
    "name": "Gualeguaychú",
    "lat": "-33.00937",
    "lng": "-58.51722"
  },
  {
    "country": "AR",
    "name": "Gualeguay",
    "lat": "-33.14156",
    "lng": "-59.30966"
  },
  {
    "country": "AR",
    "name": "Goya",
    "lat": "-29.13995",
    "lng": "-59.26343"
  },
  {
    "country": "AR",
    "name": "Gobernador Roca",
    "lat": "-27.18636",
    "lng": "-55.46433"
  },
  {
    "country": "AR",
    "name": "Gobernador Mansilla",
    "lat": "-32.54453",
    "lng": "-59.3548"
  },
  {
    "country": "AR",
    "name": "Gobernador Juan E. Martínez",
    "lat": "-28.91161",
    "lng": "-58.93594"
  },
  {
    "country": "AR",
    "name": "Gobernador Virasora",
    "lat": "-28.05",
    "lng": "-56.03333"
  },
  {
    "country": "AR",
    "name": "General Vedia",
    "lat": "-26.93382",
    "lng": "-58.6604"
  },
  {
    "country": "AR",
    "name": "General San Martín",
    "lat": "-34.57424",
    "lng": "-58.53496"
  },
  {
    "country": "AR",
    "name": "General Rodríguez",
    "lat": "-34.60838",
    "lng": "-58.95253"
  },
  {
    "country": "AR",
    "name": "General Pacheco",
    "lat": "-34.45256",
    "lng": "-58.64312"
  },
  {
    "country": "AR",
    "name": "General Lavalle",
    "lat": "-36.40633",
    "lng": "-56.94329"
  },
  {
    "country": "AR",
    "name": "General Las Heras",
    "lat": "-34.92682",
    "lng": "-58.94667"
  },
  {
    "country": "AR",
    "name": "General Juan Madariaga",
    "lat": "-36.99725",
    "lng": "-57.13951"
  },
  {
    "country": "AR",
    "name": "General José de San Martín",
    "lat": "-26.53743",
    "lng": "-59.34158"
  },
  {
    "country": "AR",
    "name": "General Guido",
    "lat": "-36.64074",
    "lng": "-57.79174"
  },
  {
    "country": "AR",
    "name": "General Galarza",
    "lat": "-32.72034",
    "lng": "-59.39615"
  },
  {
    "country": "AR",
    "name": "General Conesa",
    "lat": "-36.52013",
    "lng": "-57.32537"
  },
  {
    "country": "AR",
    "name": "General Campos",
    "lat": "-31.52311",
    "lng": "-58.4049"
  },
  {
    "country": "AR",
    "name": "General Belgrano",
    "lat": "-35.76952",
    "lng": "-58.49341"
  },
  {
    "country": "AR",
    "name": "General Alvear",
    "lat": "-27.42611",
    "lng": "-55.16916"
  },
  {
    "country": "AR",
    "name": "Garupá",
    "lat": "-27.48171",
    "lng": "-55.82921"
  },
  {
    "country": "AR",
    "name": "Garuhapé",
    "lat": "-26.81768",
    "lng": "-54.95665"
  },
  {
    "country": "AR",
    "name": "Garruchos",
    "lat": "-28.17208",
    "lng": "-55.65406"
  },
  {
    "country": "AR",
    "name": "Formosa",
    "lat": "-26.18489",
    "lng": "-58.17313"
  },
  {
    "country": "AR",
    "name": "Fontana",
    "lat": "-27.41813",
    "lng": "-59.02392"
  },
  {
    "country": "AR",
    "name": "Florentino Ameghino",
    "lat": "-27.56667",
    "lng": "-55.13333"
  },
  {
    "country": "AR",
    "name": "Florencio Varela",
    "lat": "-34.82722",
    "lng": "-58.39556"
  },
  {
    "country": "AR",
    "name": "Felipe Yofré",
    "lat": "-29.10226",
    "lng": "-58.33772"
  },
  {
    "country": "AR",
    "name": "Federal",
    "lat": "-30.95465",
    "lng": "-58.78326"
  },
  {
    "country": "AR",
    "name": "Federación",
    "lat": "-31.00621",
    "lng": "-57.89962"
  },
  {
    "country": "AR",
    "name": "José María Ezeiza",
    "lat": "-34.84787",
    "lng": "-58.52869"
  },
  {
    "country": "AR",
    "name": "Esquina",
    "lat": "-30.01476",
    "lng": "-59.5289"
  },
  {
    "country": "AR",
    "name": "Espinillo",
    "lat": "-24.98132",
    "lng": "-58.5521"
  },
  {
    "country": "AR",
    "name": "Ensenada",
    "lat": "-34.86186",
    "lng": "-57.91126"
  },
  {
    "country": "AR",
    "name": "Empedrado",
    "lat": "-27.95178",
    "lng": "-58.80584"
  },
  {
    "country": "AR",
    "name": "El Soberbio",
    "lat": "-27.29847",
    "lng": "-54.19877"
  },
  {
    "country": "AR",
    "name": "Eldorado",
    "lat": "-26.40484",
    "lng": "-54.62478"
  },
  {
    "country": "AR",
    "name": "El Colorado",
    "lat": "-26.30808",
    "lng": "-59.37291"
  },
  {
    "country": "AR",
    "name": "El Alcázar",
    "lat": "-26.71459",
    "lng": "-54.81523"
  },
  {
    "country": "AR",
    "name": "Dos de Mayo",
    "lat": "-27.02277",
    "lng": "-54.68669"
  },
  {
    "country": "AR",
    "name": "Dos Arroyos",
    "lat": "-27.69946",
    "lng": "-55.25207"
  },
  {
    "country": "AR",
    "name": "Don Torcuato",
    "lat": "-34.49459",
    "lng": "-58.62729"
  },
  {
    "country": "AR",
    "name": "Domínguez",
    "lat": "-31.9871",
    "lng": "-58.96197"
  },
  {
    "country": "AR",
    "name": "Dolores",
    "lat": "-36.31321",
    "lng": "-57.67918"
  },
  {
    "country": "AR",
    "name": "Curuzú Cuatiá",
    "lat": "-29.79171",
    "lng": "-58.0546"
  },
  {
    "country": "AR",
    "name": "Cruz de los Milagros",
    "lat": "-28.83646",
    "lng": "-59.00476"
  },
  {
    "country": "AR",
    "name": "Coté-Lai",
    "lat": "-27.5",
    "lng": "-59.6"
  },
  {
    "country": "AR",
    "name": "Corrientes",
    "lat": "-27.46784",
    "lng": "-58.8344"
  },
  {
    "country": "AR",
    "name": "Coronel Vidal",
    "lat": "-37.44604",
    "lng": "-57.72865"
  },
  {
    "country": "AR",
    "name": "Conscripto Bernardi",
    "lat": "-31.04837",
    "lng": "-59.08435"
  },
  {
    "country": "AR",
    "name": "Concordia",
    "lat": "-31.39296",
    "lng": "-58.02089"
  },
  {
    "country": "AR",
    "name": "Concepción del Uruguay",
    "lat": "-32.48463",
    "lng": "-58.23217"
  },
  {
    "country": "AR",
    "name": "Concepción de la Sierra",
    "lat": "-27.98311",
    "lng": "-55.52031"
  },
  {
    "country": "AR",
    "name": "Concepción",
    "lat": "-28.39175",
    "lng": "-57.88777"
  },
  {
    "country": "AR",
    "name": "Comandante Fontana",
    "lat": "-25.33453",
    "lng": "-59.68212"
  },
  {
    "country": "AR",
    "name": "Colonias Unidas",
    "lat": "-26.69825",
    "lng": "-59.63154"
  },
  {
    "country": "AR",
    "name": "Colonia Elisa",
    "lat": "-26.93041",
    "lng": "-59.51861"
  },
  {
    "country": "AR",
    "name": "Colonia Elía",
    "lat": "-32.67144",
    "lng": "-58.32538"
  },
  {
    "country": "AR",
    "name": "Colonia Benítez",
    "lat": "-27.33099",
    "lng": "-58.94622"
  },
  {
    "country": "AR",
    "name": "Colonia Aurora",
    "lat": "-27.47428",
    "lng": "-54.52498"
  },
  {
    "country": "AR",
    "name": "Colón",
    "lat": "-32.22312",
    "lng": "-58.14426"
  },
  {
    "country": "AR",
    "name": "Colegiales",
    "lat": "-34.57365",
    "lng": "-58.44924"
  },
  {
    "country": "AR",
    "name": "Clorinda",
    "lat": "-25.28481",
    "lng": "-57.71851"
  },
  {
    "country": "AR",
    "name": "Ciervo Petiso",
    "lat": "-26.58041",
    "lng": "-59.63094"
  },
  {
    "country": "AR",
    "name": "Chavarría",
    "lat": "-28.95489",
    "lng": "-58.57277"
  },
  {
    "country": "AR",
    "name": "Chascomús",
    "lat": "-35.57297",
    "lng": "-58.00809"
  },
  {
    "country": "AR",
    "name": "Charadai",
    "lat": "-27.65503",
    "lng": "-59.86291"
  },
  {
    "country": "AR",
    "name": "Chajarí",
    "lat": "-30.75048",
    "lng": "-57.97962"
  },
  {
    "country": "AR",
    "name": "Cerro Corá",
    "lat": "-27.5131",
    "lng": "-55.60896"
  },
  {
    "country": "AR",
    "name": "Cerro Azul",
    "lat": "-27.6331",
    "lng": "-55.4962"
  },
  {
    "country": "AR",
    "name": "Ceibas",
    "lat": "-33.43333",
    "lng": "-58.75"
  },
  {
    "country": "AR",
    "name": "Castelli",
    "lat": "-36.08949",
    "lng": "-57.80393"
  },
  {
    "country": "AR",
    "name": "Caseros",
    "lat": "-34.60333",
    "lng": "-58.56409"
  },
  {
    "country": "AR",
    "name": "Caseros",
    "lat": "-32.46325",
    "lng": "-58.47872"
  },
  {
    "country": "AR",
    "name": "Carmen de Areco",
    "lat": "-34.37743",
    "lng": "-59.82395"
  },
  {
    "country": "AR",
    "name": "Caraguatay",
    "lat": "-26.60587",
    "lng": "-54.78093"
  },
  {
    "country": "AR",
    "name": "Capitán Solari",
    "lat": "-26.80215",
    "lng": "-59.56089"
  },
  {
    "country": "AR",
    "name": "Capitán Sarmiento",
    "lat": "-34.17238",
    "lng": "-59.79048"
  },
  {
    "country": "AR",
    "name": "Capioví",
    "lat": "-26.92998",
    "lng": "-55.06084"
  },
  {
    "country": "AR",
    "name": "Capilla del Señor",
    "lat": "-34.29207",
    "lng": "-59.10179"
  },
  {
    "country": "AR",
    "name": "Cañuelas",
    "lat": "-35.05379",
    "lng": "-58.76205"
  },
  {
    "country": "AR",
    "name": "Candelaria",
    "lat": "-27.4595",
    "lng": "-55.74536"
  },
  {
    "country": "AR",
    "name": "Campo Viera",
    "lat": "-27.33271",
    "lng": "-55.05651"
  },
  {
    "country": "AR",
    "name": "Campo Ramón",
    "lat": "-27.4549",
    "lng": "-55.02122"
  },
  {
    "country": "AR",
    "name": "Campo Grande",
    "lat": "-27.2077",
    "lng": "-54.97977"
  },
  {
    "country": "AR",
    "name": "Campana",
    "lat": "-34.16327",
    "lng": "-58.95919"
  },
  {
    "country": "AR",
    "name": "Buenos Aires",
    "lat": "-34.61315",
    "lng": "-58.37723"
  },
  {
    "country": "AR",
    "name": "Brandsen",
    "lat": "-35.16842",
    "lng": "-58.23427"
  },
  {
    "country": "AR",
    "name": "Bovril",
    "lat": "-31.34311",
    "lng": "-59.44512"
  },
  {
    "country": "AR",
    "name": "Bonpland",
    "lat": "-29.81708",
    "lng": "-57.42974"
  },
  {
    "country": "AR",
    "name": "Bonpland",
    "lat": "-27.48218",
    "lng": "-55.47756"
  },
  {
    "country": "AR",
    "name": "Boedo",
    "lat": "-34.63333",
    "lng": "-58.41667"
  },
  {
    "country": "AR",
    "name": "Berón de Astrada",
    "lat": "-27.55067",
    "lng": "-57.5346"
  },
  {
    "country": "AR",
    "name": "Bernardo de Irigoyen",
    "lat": "-26.2552",
    "lng": "-53.64581"
  },
  {
    "country": "AR",
    "name": "Berisso",
    "lat": "-34.8735",
    "lng": "-57.88303"
  },
  {
    "country": "AR",
    "name": "Berazategui",
    "lat": "-34.76531",
    "lng": "-58.21278"
  },
  {
    "country": "AR",
    "name": "Benito Juárez",
    "lat": "-37.67188",
    "lng": "-59.80653"
  },
  {
    "country": "AR",
    "name": "Bella Vista",
    "lat": "-34.5651",
    "lng": "-58.69034"
  },
  {
    "country": "AR",
    "name": "Bella Vista",
    "lat": "-28.50752",
    "lng": "-59.04149"
  },
  {
    "country": "AR",
    "name": "Belgrano",
    "lat": "-34.5627",
    "lng": "-58.45829"
  },
  {
    "country": "AR",
    "name": "Belén de Escobar",
    "lat": "-34.34833",
    "lng": "-58.79265"
  },
  {
    "country": "AR",
    "name": "Basail",
    "lat": "-27.88539",
    "lng": "-59.28245"
  },
  {
    "country": "AR",
    "name": "Barranqueras",
    "lat": "-27.48132",
    "lng": "-58.93925"
  },
  {
    "country": "AR",
    "name": "Barracas",
    "lat": "-34.64966",
    "lng": "-58.38341"
  },
  {
    "country": "AR",
    "name": "Baradero",
    "lat": "-33.81105",
    "lng": "-59.50807"
  },
  {
    "country": "AR",
    "name": "Balcarce",
    "lat": "-37.84616",
    "lng": "-58.25522"
  },
  {
    "country": "AR",
    "name": "Azul",
    "lat": "-36.77698",
    "lng": "-59.85854"
  },
  {
    "country": "AR",
    "name": "Azara",
    "lat": "-28.0616",
    "lng": "-55.67797"
  },
  {
    "country": "AR",
    "name": "Ayacucho",
    "lat": "-37.15185",
    "lng": "-58.48691"
  },
  {
    "country": "AR",
    "name": "Avellaneda",
    "lat": "-29.11761",
    "lng": "-59.65834"
  },
  {
    "country": "AR",
    "name": "Arroyo del Medio",
    "lat": "-27.69748",
    "lng": "-55.40376"
  },
  {
    "country": "AR",
    "name": "Aristóbulo del Valle",
    "lat": "-27.09625",
    "lng": "-54.89626"
  },
  {
    "country": "AR",
    "name": "Apóstoles",
    "lat": "-27.91421",
    "lng": "-55.75355"
  },
  {
    "country": "AR",
    "name": "Alvear",
    "lat": "-29.09683",
    "lng": "-56.55043"
  },
  {
    "country": "AR",
    "name": "Almafuerte",
    "lat": "-27.50825",
    "lng": "-55.40258"
  },
  {
    "country": "AR",
    "name": "Aldea San Antonio",
    "lat": "-32.62317",
    "lng": "-58.70512"
  },
  {
    "country": "AR",
    "name": "Alba Posse",
    "lat": "-27.56978",
    "lng": "-54.68262"
  },
  {
    "country": "AR",
    "name": "Guernica",
    "lat": "-34.9162",
    "lng": "-58.38111"
  },
  {
    "country": "AR",
    "name": "Villa Basilio Nievas",
    "lat": "-31.55",
    "lng": "-68.73333"
  },
  {
    "country": "AR",
    "name": "Zapala",
    "lat": "-38.89916",
    "lng": "-70.05442"
  },
  {
    "country": "AR",
    "name": "Yuto",
    "lat": "-23.64342",
    "lng": "-64.47194"
  },
  {
    "country": "AR",
    "name": "Yerba Buena",
    "lat": "-26.81667",
    "lng": "-65.31667"
  },
  {
    "country": "AR",
    "name": "Yacimiento Río Turbio",
    "lat": "-51.57321",
    "lng": "-72.3508"
  },
  {
    "country": "AR",
    "name": "Winifreda",
    "lat": "-36.22643",
    "lng": "-64.23388"
  },
  {
    "country": "AR",
    "name": "Wenceslao Escalante",
    "lat": "-33.17303",
    "lng": "-62.77078"
  },
  {
    "country": "AR",
    "name": "Vista Alegre",
    "lat": "-38.75",
    "lng": "-68.18333"
  },
  {
    "country": "AR",
    "name": "Vinchina",
    "lat": "-28.75964",
    "lng": "-68.20692"
  },
  {
    "country": "AR",
    "name": "Villa Valeria",
    "lat": "-34.34093",
    "lng": "-64.9203"
  },
  {
    "country": "AR",
    "name": "Villa Urquiza",
    "lat": "-31.64757",
    "lng": "-60.37516"
  },
  {
    "country": "AR",
    "name": "Villa Unión",
    "lat": "-29.41347",
    "lng": "-62.78822"
  },
  {
    "country": "AR",
    "name": "Villa Unión",
    "lat": "-29.31595",
    "lng": "-68.22658"
  },
  {
    "country": "AR",
    "name": "Villa Tulumba",
    "lat": "-30.39552",
    "lng": "-64.12241"
  },
  {
    "country": "AR",
    "name": "Villa Trinidad",
    "lat": "-30.21329",
    "lng": "-61.87597"
  },
  {
    "country": "AR",
    "name": "Villa Santa Rosa",
    "lat": "-31.74434",
    "lng": "-68.31411"
  },
  {
    "country": "AR",
    "name": "Villa Rumipal",
    "lat": "-32.1879",
    "lng": "-64.48027"
  },
  {
    "country": "AR",
    "name": "Villa Regina",
    "lat": "-39.1",
    "lng": "-67.06667"
  },
  {
    "country": "AR",
    "name": "Villa Reducción",
    "lat": "-33.20105",
    "lng": "-63.86234"
  },
  {
    "country": "AR",
    "name": "Villa Paula de Sarmiento",
    "lat": "-31.4933",
    "lng": "-68.53838"
  },
  {
    "country": "AR",
    "name": "Villa Ojo de Agua",
    "lat": "-29.50003",
    "lng": "-63.69377"
  },
  {
    "country": "AR",
    "name": "Villa Nueva",
    "lat": "-32.89722",
    "lng": "-68.78038"
  },
  {
    "country": "AR",
    "name": "Villa Nueva",
    "lat": "-32.43293",
    "lng": "-63.24763"
  },
  {
    "country": "AR",
    "name": "Villa Mugueta",
    "lat": "-33.31129",
    "lng": "-61.05515"
  },
  {
    "country": "AR",
    "name": "Villa Media Agua",
    "lat": "-31.98267",
    "lng": "-68.42394"
  },
  {
    "country": "AR",
    "name": "Villa María",
    "lat": "-32.40751",
    "lng": "-63.24016"
  },
  {
    "country": "AR",
    "name": "Villa Las Rosas",
    "lat": "-31.95021",
    "lng": "-65.05354"
  },
  {
    "country": "AR",
    "name": "Villa La Angostura",
    "lat": "-40.76173",
    "lng": "-71.64631"
  },
  {
    "country": "AR",
    "name": "Villa Krause",
    "lat": "-31.56667",
    "lng": "-68.53333"
  },
  {
    "country": "AR",
    "name": "Villa Huidobro",
    "lat": "-34.83826",
    "lng": "-64.58686"
  },
  {
    "country": "AR",
    "name": "Villa Giardino",
    "lat": "-31.03333",
    "lng": "-64.48333"
  },
  {
    "country": "AR",
    "name": "Villa General Roca",
    "lat": "-32.66535",
    "lng": "-66.45052"
  },
  {
    "country": "AR",
    "name": "Villa General Mitre",
    "lat": "-29.1431",
    "lng": "-62.65248"
  },
  {
    "country": "AR",
    "name": "Villa General Belgrano",
    "lat": "-31.97828",
    "lng": "-64.55627"
  },
  {
    "country": "AR",
    "name": "Villa Dolores",
    "lat": "-31.94585",
    "lng": "-65.18958"
  },
  {
    "country": "AR",
    "name": "Villa de Soto",
    "lat": "-30.85523",
    "lng": "-64.99947"
  },
  {
    "country": "AR",
    "name": "Villa de María",
    "lat": "-29.90195",
    "lng": "-63.72289"
  },
  {
    "country": "AR",
    "name": "Villa del Totoral",
    "lat": "-30.81667",
    "lng": "-63.71667"
  },
  {
    "country": "AR",
    "name": "Villa del Salvador",
    "lat": "-31.44155",
    "lng": "-68.39745"
  },
  {
    "country": "AR",
    "name": "Villa del Rosario",
    "lat": "-31.5566",
    "lng": "-63.53452"
  },
  {
    "country": "AR",
    "name": "Villa del Dique",
    "lat": "-32.17667",
    "lng": "-64.45543"
  },
  {
    "country": "AR",
    "name": "Villa Cura Brochero",
    "lat": "-31.70578",
    "lng": "-65.01796"
  },
  {
    "country": "AR",
    "name": "Villa Constitución",
    "lat": "-33.22778",
    "lng": "-60.3297"
  },
  {
    "country": "AR",
    "name": "Villa Concepción del Tío",
    "lat": "-31.32259",
    "lng": "-62.81354"
  },
  {
    "country": "AR",
    "name": "Chañar Ladeado",
    "lat": "-33.32524",
    "lng": "-62.03831"
  },
  {
    "country": "AR",
    "name": "Villa Castelli",
    "lat": "-29.01447",
    "lng": "-68.22339"
  },
  {
    "country": "AR",
    "name": "Villa Carlos Paz",
    "lat": "-31.42414",
    "lng": "-64.49778"
  },
  {
    "country": "AR",
    "name": "Villa Cañás",
    "lat": "-34.00565",
    "lng": "-61.60757"
  },
  {
    "country": "AR",
    "name": "Villa Bustos",
    "lat": "-29.28636",
    "lng": "-67.02067"
  },
  {
    "country": "AR",
    "name": "Villa Berthet",
    "lat": "-27.29174",
    "lng": "-60.41263"
  },
  {
    "country": "AR",
    "name": "Villa Atamisqui",
    "lat": "-28.49609",
    "lng": "-63.81609"
  },
  {
    "country": "AR",
    "name": "Villa Ascasubi",
    "lat": "-32.16351",
    "lng": "-63.89157"
  },
  {
    "country": "AR",
    "name": "Villa Ángela",
    "lat": "-27.57383",
    "lng": "-60.71526"
  },
  {
    "country": "AR",
    "name": "Villa Allende",
    "lat": "-31.29458",
    "lng": "-64.29538"
  },
  {
    "country": "AR",
    "name": "Villa Aberastain",
    "lat": "-31.65",
    "lng": "-68.58333"
  },
  {
    "country": "AR",
    "name": "Viedma",
    "lat": "-40.81345",
    "lng": "-62.99668"
  },
  {
    "country": "AR",
    "name": "Vicuña Mackenna",
    "lat": "-33.91965",
    "lng": "-64.39215"
  },
  {
    "country": "AR",
    "name": "Victorica",
    "lat": "-36.21505",
    "lng": "-65.43586"
  },
  {
    "country": "AR",
    "name": "Victoria",
    "lat": "-32.61841",
    "lng": "-60.15478"
  },
  {
    "country": "AR",
    "name": "Viamonte",
    "lat": "-33.74647",
    "lng": "-63.09764"
  },
  {
    "country": "AR",
    "name": "Viale",
    "lat": "-31.86782",
    "lng": "-60.00722"
  },
  {
    "country": "AR",
    "name": "Vera",
    "lat": "-29.4593",
    "lng": "-60.21261"
  },
  {
    "country": "AR",
    "name": "Venado Tuerto",
    "lat": "-33.74556",
    "lng": "-61.96885"
  },
  {
    "country": "AR",
    "name": "28 de Noviembre",
    "lat": "-51.5839",
    "lng": "-72.21382"
  },
  {
    "country": "AR",
    "name": "Veinticinco de Mayo",
    "lat": "-37.7741",
    "lng": "-67.71638"
  },
  {
    "country": "AR",
    "name": "Veinticinco de Mayo",
    "lat": "-35.4323",
    "lng": "-60.17271"
  },
  {
    "country": "AR",
    "name": "Vedia",
    "lat": "-34.49558",
    "lng": "-61.54138"
  },
  {
    "country": "AR",
    "name": "Valle Hermoso",
    "lat": "-31.11732",
    "lng": "-64.48084"
  },
  {
    "country": "AR",
    "name": "Valle Grande",
    "lat": "-23.47604",
    "lng": "-64.94822"
  },
  {
    "country": "AR",
    "name": "Valcheta",
    "lat": "-40.67989",
    "lng": "-66.16283"
  },
  {
    "country": "AR",
    "name": "Ushuaia",
    "lat": "-54.81084",
    "lng": "-68.31591"
  },
  {
    "country": "AR",
    "name": "Uriburu",
    "lat": "-36.50682",
    "lng": "-63.86225"
  },
  {
    "country": "AR",
    "name": "Unquillo",
    "lat": "-31.23073",
    "lng": "-64.31615"
  },
  {
    "country": "AR",
    "name": "Unión",
    "lat": "-35.15282",
    "lng": "-65.94602"
  },
  {
    "country": "AR",
    "name": "Ulapes",
    "lat": "-31.57362",
    "lng": "-66.2365"
  },
  {
    "country": "AR",
    "name": "Ucacha",
    "lat": "-33.03203",
    "lng": "-63.50666"
  },
  {
    "country": "AR",
    "name": "Tupungato",
    "lat": "-33.37146",
    "lng": "-69.14845"
  },
  {
    "country": "AR",
    "name": "Tunuyán",
    "lat": "-33.57653",
    "lng": "-69.01538"
  },
  {
    "country": "AR",
    "name": "Tumbaya",
    "lat": "-23.85814",
    "lng": "-65.46704"
  },
  {
    "country": "AR",
    "name": "Trevelin",
    "lat": "-43.0858",
    "lng": "-71.46386"
  },
  {
    "country": "AR",
    "name": "Tres Lomas",
    "lat": "-36.45722",
    "lng": "-62.86047"
  },
  {
    "country": "AR",
    "name": "Tres Isletas",
    "lat": "-26.34067",
    "lng": "-60.43207"
  },
  {
    "country": "AR",
    "name": "Tres Arroyos",
    "lat": "-38.37394",
    "lng": "-60.27978"
  },
  {
    "country": "AR",
    "name": "Tres Algarrobos",
    "lat": "-35.19471",
    "lng": "-62.77396"
  },
  {
    "country": "AR",
    "name": "Trenque Lauquen",
    "lat": "-35.97035",
    "lng": "-62.73432"
  },
  {
    "country": "AR",
    "name": "Trenel",
    "lat": "-35.69837",
    "lng": "-64.13218"
  },
  {
    "country": "AR",
    "name": "Trelew",
    "lat": "-43.24895",
    "lng": "-65.30505"
  },
  {
    "country": "AR",
    "name": "Trancas",
    "lat": "-26.23136",
    "lng": "-65.28093"
  },
  {
    "country": "AR",
    "name": "Totoras",
    "lat": "-32.5844",
    "lng": "-61.16852"
  },
  {
    "country": "AR",
    "name": "Tostado",
    "lat": "-29.23202",
    "lng": "-61.76917"
  },
  {
    "country": "AR",
    "name": "Tornquist",
    "lat": "-38.10122",
    "lng": "-62.22267"
  },
  {
    "country": "AR",
    "name": "Toledo",
    "lat": "-31.55574",
    "lng": "-64.00947"
  },
  {
    "country": "AR",
    "name": "Toay",
    "lat": "-36.67338",
    "lng": "-64.3786"
  },
  {
    "country": "AR",
    "name": "Tío Pujio",
    "lat": "-32.2879",
    "lng": "-63.35598"
  },
  {
    "country": "AR",
    "name": "Tintina",
    "lat": "-27.02687",
    "lng": "-62.70643"
  },
  {
    "country": "AR",
    "name": "Tinogasta",
    "lat": "-28.06319",
    "lng": "-67.56488"
  },
  {
    "country": "AR",
    "name": "Tilisarao",
    "lat": "-32.73292",
    "lng": "-65.29109"
  },
  {
    "country": "AR",
    "name": "Tilcara",
    "lat": "-23.57817",
    "lng": "-65.39516"
  },
  {
    "country": "AR",
    "name": "Ticino",
    "lat": "-32.6935",
    "lng": "-63.43606"
  },
  {
    "country": "AR",
    "name": "Termas de Río Hondo",
    "lat": "-27.49362",
    "lng": "-64.85972"
  },
  {
    "country": "AR",
    "name": "Telsen",
    "lat": "-42.43553",
    "lng": "-66.94078"
  },
  {
    "country": "AR",
    "name": "Telén",
    "lat": "-36.26429",
    "lng": "-65.51018"
  },
  {
    "country": "AR",
    "name": "Tecka",
    "lat": "-43.49489",
    "lng": "-70.8102"
  },
  {
    "country": "AR",
    "name": "Tartagal",
    "lat": "-22.51637",
    "lng": "-63.80131"
  },
  {
    "country": "AR",
    "name": "Tapalqué",
    "lat": "-36.35493",
    "lng": "-60.0264"
  },
  {
    "country": "AR",
    "name": "Tancacha",
    "lat": "-32.24309",
    "lng": "-63.9807"
  },
  {
    "country": "AR",
    "name": "Tamberías",
    "lat": "-31.45868",
    "lng": "-69.422"
  },
  {
    "country": "AR",
    "name": "Tama",
    "lat": "-30.50798",
    "lng": "-66.5298"
  },
  {
    "country": "AR",
    "name": "Tafí Viejo",
    "lat": "-26.73201",
    "lng": "-65.25921"
  },
  {
    "country": "AR",
    "name": "Tafí del Valle",
    "lat": "-26.85275",
    "lng": "-65.70983"
  },
  {
    "country": "AR",
    "name": "Taco Pozo",
    "lat": "-25.61557",
    "lng": "-63.26708"
  },
  {
    "country": "AR",
    "name": "Susques",
    "lat": "-23.39864",
    "lng": "-66.36701"
  },
  {
    "country": "AR",
    "name": "Suncho Corral",
    "lat": "-27.93357",
    "lng": "-63.42938"
  },
  {
    "country": "AR",
    "name": "Sunchales",
    "lat": "-30.94404",
    "lng": "-61.56148"
  },
  {
    "country": "AR",
    "name": "Sumampa",
    "lat": "-29.3847",
    "lng": "-63.46907"
  },
  {
    "country": "AR",
    "name": "Simoca",
    "lat": "-27.26272",
    "lng": "-65.35647"
  },
  {
    "country": "AR",
    "name": "Sierra Grande",
    "lat": "-41.60603",
    "lng": "-65.35574"
  },
  {
    "country": "AR",
    "name": "Sierra Colorada",
    "lat": "-40.58487",
    "lng": "-67.75674"
  },
  {
    "country": "AR",
    "name": "Serrezuela",
    "lat": "-30.63761",
    "lng": "-65.38692"
  },
  {
    "country": "AR",
    "name": "Serrano",
    "lat": "-34.46971",
    "lng": "-63.53842"
  },
  {
    "country": "AR",
    "name": "Senillosa",
    "lat": "-39.01412",
    "lng": "-68.43281"
  },
  {
    "country": "AR",
    "name": "Selva",
    "lat": "-29.76776",
    "lng": "-62.0477"
  },
  {
    "country": "AR",
    "name": "Seguí",
    "lat": "-31.95642",
    "lng": "-60.12488"
  },
  {
    "country": "AR",
    "name": "Sebastián Elcano",
    "lat": "-30.16105",
    "lng": "-63.5936"
  },
  {
    "country": "AR",
    "name": "Saujil",
    "lat": "-28.17442",
    "lng": "-66.21177"
  },
  {
    "country": "AR",
    "name": "Saturnino M. Laspiur",
    "lat": "-31.70287",
    "lng": "-62.48202"
  },
  {
    "country": "AR",
    "name": "Sastre",
    "lat": "-31.76762",
    "lng": "-61.82887"
  },
  {
    "country": "AR",
    "name": "Sarmiento",
    "lat": "-45.58815",
    "lng": "-69.06996"
  },
  {
    "country": "AR",
    "name": "Santo Tomé",
    "lat": "-31.66274",
    "lng": "-60.7653"
  },
  {
    "country": "AR",
    "name": "Santiago Temple",
    "lat": "-31.38731",
    "lng": "-63.41821"
  },
  {
    "country": "AR",
    "name": "Santiago del Estero",
    "lat": "-27.79511",
    "lng": "-64.26149"
  },
  {
    "country": "AR",
    "name": "Santa Victoria",
    "lat": "-22.25124",
    "lng": "-64.96549"
  },
  {
    "country": "AR",
    "name": "Santa Sylvina",
    "lat": "-27.83261",
    "lng": "-61.13747"
  },
  {
    "country": "AR",
    "name": "Santa Rosa de Tastil",
    "lat": "-24.45166",
    "lng": "-65.97452"
  },
  {
    "country": "AR",
    "name": "Santa Rosa de Río Primero",
    "lat": "-31.15231",
    "lng": "-63.40191"
  },
  {
    "country": "AR",
    "name": "Santa Rosa del Conlara",
    "lat": "-32.34286",
    "lng": "-65.20323"
  },
  {
    "country": "AR",
    "name": "Santa Rosa de Calamuchita",
    "lat": "-32.06905",
    "lng": "-64.53631"
  },
  {
    "country": "AR",
    "name": "Santa Rosa",
    "lat": "-36.61667",
    "lng": "-64.28333"
  },
  {
    "country": "AR",
    "name": "Santa Rosa",
    "lat": "-33.25407",
    "lng": "-68.14937"
  },
  {
    "country": "AR",
    "name": "Santa María",
    "lat": "-26.69547",
    "lng": "-66.04732"
  },
  {
    "country": "AR",
    "name": "Santa Magdalena",
    "lat": "-34.51776",
    "lng": "-63.94409"
  },
  {
    "country": "AR",
    "name": "Santa Lucía",
    "lat": "-31.53987",
    "lng": "-68.49503"
  },
  {
    "country": "AR",
    "name": "Santa Isabel",
    "lat": "-36.22724",
    "lng": "-66.9424"
  },
  {
    "country": "AR",
    "name": "Santa Fe",
    "lat": "-31.64881",
    "lng": "-60.70868"
  },
  {
    "country": "AR",
    "name": "Santa Eufemia",
    "lat": "-33.17659",
    "lng": "-63.28281"
  },
  {
    "country": "AR",
    "name": "Santa Clara",
    "lat": "-24.30921",
    "lng": "-64.66253"
  },
  {
    "country": "AR",
    "name": "Santa Catalina",
    "lat": "-21.94467",
    "lng": "-66.05219"
  },
  {
    "country": "AR",
    "name": "San Salvador de Jujuy",
    "lat": "-24.19457",
    "lng": "-65.29712"
  },
  {
    "country": "AR",
    "name": "San Ramón de la Nueva Orán",
    "lat": "-23.13705",
    "lng": "-64.32426"
  },
  {
    "country": "AR",
    "name": "San Rafael",
    "lat": "-34.61772",
    "lng": "-68.33007"
  },
  {
    "country": "AR",
    "name": "San Pedro de Guasayán",
    "lat": "-27.95386",
    "lng": "-65.16651"
  },
  {
    "country": "AR",
    "name": "San Pedro de Jujuy",
    "lat": "-24.23127",
    "lng": "-64.86614"
  },
  {
    "country": "AR",
    "name": "Sañogasta",
    "lat": "-29.0952",
    "lng": "-67.11586"
  },
  {
    "country": "AR",
    "name": "San Nicolás de los Arroyos",
    "lat": "-33.33425",
    "lng": "-60.2108"
  },
  {
    "country": "AR",
    "name": "San Miguel de Tucumán",
    "lat": "-26.82414",
    "lng": "-65.2226"
  },
  {
    "country": "AR",
    "name": "San Martín de los Andes",
    "lat": "-40.15789",
    "lng": "-71.35337"
  },
  {
    "country": "AR",
    "name": "San Martín",
    "lat": "-33.08103",
    "lng": "-68.46814"
  },
  {
    "country": "AR",
    "name": "San Martín",
    "lat": "-31.42957",
    "lng": "-68.50065"
  },
  {
    "country": "AR",
    "name": "San Luis",
    "lat": "-33.29501",
    "lng": "-66.33563"
  },
  {
    "country": "AR",
    "name": "San Lorenzo",
    "lat": "-32.74341",
    "lng": "-60.73613"
  },
  {
    "country": "AR",
    "name": "San Justo",
    "lat": "-30.78913",
    "lng": "-60.59189"
  },
  {
    "country": "AR",
    "name": "San Juan",
    "lat": "-31.5375",
    "lng": "-68.53639"
  },
  {
    "country": "AR",
    "name": "San José de la Dormida",
    "lat": "-30.3544",
    "lng": "-63.94871"
  },
  {
    "country": "AR",
    "name": "San José de Jáchal",
    "lat": "-30.24057",
    "lng": "-68.74693"
  },
  {
    "country": "AR",
    "name": "San José",
    "lat": "-28.38333",
    "lng": "-65.7"
  },
  {
    "country": "AR",
    "name": "San Jorge",
    "lat": "-31.89618",
    "lng": "-61.85984"
  },
  {
    "country": "AR",
    "name": "San Isidro",
    "lat": "-28.46265",
    "lng": "-65.72585"
  },
  {
    "country": "AR",
    "name": "San Francisco del Monte de Oro",
    "lat": "-32.59825",
    "lng": "-66.12539"
  },
  {
    "country": "AR",
    "name": "San Francisco del Chañar",
    "lat": "-29.7883",
    "lng": "-63.94411"
  },
  {
    "country": "AR",
    "name": "San Francisco",
    "lat": "-31.42797",
    "lng": "-62.08266"
  },
  {
    "country": "AR",
    "name": "Catamarca",
    "lat": "-28.46957",
    "lng": "-65.78524"
  },
  {
    "country": "AR",
    "name": "San Cristóbal",
    "lat": "-30.31053",
    "lng": "-61.23724"
  },
  {
    "country": "AR",
    "name": "San Carlos de Bolívar",
    "lat": "-36.23071",
    "lng": "-61.1157"
  },
  {
    "country": "AR",
    "name": "San Carlos Centro",
    "lat": "-31.72864",
    "lng": "-61.09192"
  },
  {
    "country": "AR",
    "name": "San Carlos",
    "lat": "-31.17761",
    "lng": "-65.10245"
  },
  {
    "country": "AR",
    "name": "San Carlos",
    "lat": "-25.88618",
    "lng": "-65.92941"
  },
  {
    "country": "AR",
    "name": "San Blas de los Sauces",
    "lat": "-28.41051",
    "lng": "-67.09341"
  },
  {
    "country": "AR",
    "name": "San Bernardo",
    "lat": "-27.28782",
    "lng": "-60.71252"
  },
  {
    "country": "AR",
    "name": "San Benito",
    "lat": "-31.78371",
    "lng": "-60.44156"
  },
  {
    "country": "AR",
    "name": "San Basilio",
    "lat": "-33.49763",
    "lng": "-64.31495"
  },
  {
    "country": "AR",
    "name": "San Antonio Oeste",
    "lat": "-40.73193",
    "lng": "-64.94769"
  },
  {
    "country": "AR",
    "name": "San Antonio de los Cobres",
    "lat": "-24.21804",
    "lng": "-66.31877"
  },
  {
    "country": "AR",
    "name": "San Antonio de Litín",
    "lat": "-32.21377",
    "lng": "-62.63237"
  },
  {
    "country": "AR",
    "name": "San Antonio",
    "lat": "-28.01009",
    "lng": "-65.70874"
  },
  {
    "country": "AR",
    "name": "San Antonio",
    "lat": "-24.36753",
    "lng": "-65.33471"
  },
  {
    "country": "AR",
    "name": "San Agustín de Valle Fértil",
    "lat": "-30.63353",
    "lng": "-67.46821"
  },
  {
    "country": "AR",
    "name": "San Agustín",
    "lat": "-31.97681",
    "lng": "-64.374"
  },
  {
    "country": "AR",
    "name": "Samuhú",
    "lat": "-27.52116",
    "lng": "-60.39167"
  },
  {
    "country": "AR",
    "name": "Sampacho",
    "lat": "-33.3839",
    "lng": "-64.72211"
  },
  {
    "country": "AR",
    "name": "Salto",
    "lat": "-34.29292",
    "lng": "-60.25455"
  },
  {
    "country": "AR",
    "name": "Salta",
    "lat": "-24.7859",
    "lng": "-65.41166"
  },
  {
    "country": "AR",
    "name": "Salsipuedes",
    "lat": "-31.13725",
    "lng": "-64.29589"
  },
  {
    "country": "AR",
    "name": "Salsacate",
    "lat": "-31.31842",
    "lng": "-65.09003"
  },
  {
    "country": "AR",
    "name": "Salliqueló",
    "lat": "-36.75216",
    "lng": "-62.96053"
  },
  {
    "country": "AR",
    "name": "Saldán",
    "lat": "-31.30262",
    "lng": "-64.307"
  },
  {
    "country": "AR",
    "name": "Sacanta",
    "lat": "-31.663",
    "lng": "-63.04505"
  },
  {
    "country": "AR",
    "name": "Rufino",
    "lat": "-34.26827",
    "lng": "-62.71262"
  },
  {
    "country": "AR",
    "name": "Rosario de Lerma",
    "lat": "-24.98206",
    "lng": "-65.57891"
  },
  {
    "country": "AR",
    "name": "Rosario de la Frontera",
    "lat": "-25.79693",
    "lng": "-64.97094"
  },
  {
    "country": "AR",
    "name": "Rosario",
    "lat": "-32.94682",
    "lng": "-60.63932"
  },
  {
    "country": "AR",
    "name": "Roldán",
    "lat": "-32.89846",
    "lng": "-60.90681"
  },
  {
    "country": "AR",
    "name": "Rojas",
    "lat": "-34.19528",
    "lng": "-60.735"
  },
  {
    "country": "AR",
    "name": "Rodeo",
    "lat": "-30.21186",
    "lng": "-69.13661"
  },
  {
    "country": "AR",
    "name": "Rivadavia",
    "lat": "-33.19051",
    "lng": "-68.46081"
  },
  {
    "country": "AR",
    "name": "Rivadavia",
    "lat": "-31.55389",
    "lng": "-68.6525"
  },
  {
    "country": "AR",
    "name": "Rivadavia",
    "lat": "-24.18552",
    "lng": "-62.88535"
  },
  {
    "country": "AR",
    "name": "Río Tercero",
    "lat": "-32.17301",
    "lng": "-64.11405"
  },
  {
    "country": "AR",
    "name": "Río Segundo",
    "lat": "-31.6526",
    "lng": "-63.9099"
  },
  {
    "country": "AR",
    "name": "Río Primero",
    "lat": "-31.33333",
    "lng": "-63.61667"
  },
  {
    "country": "AR",
    "name": "Río Pico",
    "lat": "-44.17905",
    "lng": "-71.36847"
  },
  {
    "country": "AR",
    "name": "Río Mayo",
    "lat": "-45.68573",
    "lng": "-70.25797"
  },
  {
    "country": "AR",
    "name": "Río Grande",
    "lat": "-53.78769",
    "lng": "-67.70946"
  },
  {
    "country": "AR",
    "name": "Río Gallegos",
    "lat": "-51.62261",
    "lng": "-69.21813"
  },
  {
    "country": "AR",
    "name": "Río Cuarto",
    "lat": "-33.13067",
    "lng": "-64.34992"
  },
  {
    "country": "AR",
    "name": "Río Colorado",
    "lat": "-38.99397",
    "lng": "-64.09295"
  },
  {
    "country": "AR",
    "name": "Río Ceballos",
    "lat": "-31.16486",
    "lng": "-64.32241"
  },
  {
    "country": "AR",
    "name": "Rinconada",
    "lat": "-22.44083",
    "lng": "-66.16779"
  },
  {
    "country": "AR",
    "name": "Recreo",
    "lat": "-31.49076",
    "lng": "-60.73299"
  },
  {
    "country": "AR",
    "name": "Recreo",
    "lat": "-29.28184",
    "lng": "-65.06096"
  },
  {
    "country": "AR",
    "name": "Realicó",
    "lat": "-35.03658",
    "lng": "-64.2447"
  },
  {
    "country": "AR",
    "name": "Rawson",
    "lat": "-43.30016",
    "lng": "-65.10228"
  },
  {
    "country": "AR",
    "name": "Rancul",
    "lat": "-35.06862",
    "lng": "-64.68107"
  },
  {
    "country": "AR",
    "name": "Ramallo",
    "lat": "-33.48508",
    "lng": "-60.00629"
  },
  {
    "country": "AR",
    "name": "Rafaela",
    "lat": "-31.25033",
    "lng": "-61.4867"
  },
  {
    "country": "AR",
    "name": "Rada Tilly",
    "lat": "-45.92462",
    "lng": "-67.55424"
  },
  {
    "country": "AR",
    "name": "Quitilipi",
    "lat": "-26.86913",
    "lng": "-60.21683"
  },
  {
    "country": "AR",
    "name": "Quimilí",
    "lat": "-27.64615",
    "lng": "-62.41655"
  },
  {
    "country": "AR",
    "name": "Quilino",
    "lat": "-30.21397",
    "lng": "-64.50063"
  },
  {
    "country": "AR",
    "name": "Quemú Quemú",
    "lat": "-36.05463",
    "lng": "-63.56428"
  },
  {
    "country": "AR",
    "name": "Punta Alta",
    "lat": "-38.87588",
    "lng": "-62.07359"
  },
  {
    "country": "AR",
    "name": "Puerto Santa Cruz",
    "lat": "-50.0191",
    "lng": "-68.52321"
  },
  {
    "country": "AR",
    "name": "Puerto San Julián",
    "lat": "-49.30696",
    "lng": "-67.7298"
  },
  {
    "country": "AR",
    "name": "Puerto Madryn",
    "lat": "-42.7692",
    "lng": "-65.03851"
  },
  {
    "country": "AR",
    "name": "Puerto Deseado",
    "lat": "-47.75034",
    "lng": "-65.89382"
  },
  {
    "country": "AR",
    "name": "Puerta de Corral Quemado",
    "lat": "-27.23",
    "lng": "-66.93635"
  },
  {
    "country": "AR",
    "name": "Puelches",
    "lat": "-38.14562",
    "lng": "-65.91426"
  },
  {
    "country": "AR",
    "name": "Puan",
    "lat": "-37.54576",
    "lng": "-62.76723"
  },
  {
    "country": "AR",
    "name": "Presidencia Roque Sáenz Peña",
    "lat": "-26.78522",
    "lng": "-60.43876"
  },
  {
    "country": "AR",
    "name": "Pozo Hondo",
    "lat": "-27.16607",
    "lng": "-64.49"
  },
  {
    "country": "AR",
    "name": "Pozo del Tigre",
    "lat": "-24.89682",
    "lng": "-60.32359"
  },
  {
    "country": "AR",
    "name": "Pozo del Molle",
    "lat": "-32.0186",
    "lng": "-62.91984"
  },
  {
    "country": "AR",
    "name": "Porteña",
    "lat": "-31.01391",
    "lng": "-62.0665"
  },
  {
    "country": "AR",
    "name": "Pomán",
    "lat": "-28.39455",
    "lng": "-66.22052"
  },
  {
    "country": "AR",
    "name": "Pocito",
    "lat": "-31.68333",
    "lng": "-68.58333"
  },
  {
    "country": "AR",
    "name": "Plottier",
    "lat": "-38.96667",
    "lng": "-68.23333"
  },
  {
    "country": "AR",
    "name": "Plaza Huincul",
    "lat": "-38.92598",
    "lng": "-69.20863"
  },
  {
    "country": "AR",
    "name": "Piquillín",
    "lat": "-31.30158",
    "lng": "-63.75788"
  },
  {
    "country": "AR",
    "name": "Pilcaniyeu",
    "lat": "-41.12288",
    "lng": "-70.72152"
  },
  {
    "country": "AR",
    "name": "Pilar",
    "lat": "-31.6789",
    "lng": "-63.87964"
  },
  {
    "country": "AR",
    "name": "Pigüé",
    "lat": "-37.60509",
    "lng": "-62.40333"
  },
  {
    "country": "AR",
    "name": "Piedra del Águila",
    "lat": "-40.04811",
    "lng": "-70.0741"
  },
  {
    "country": "AR",
    "name": "Picún Leufú",
    "lat": "-39.51614",
    "lng": "-69.28765"
  },
  {
    "country": "AR",
    "name": "Pico Truncado",
    "lat": "-46.7949",
    "lng": "-67.95731"
  },
  {
    "country": "AR",
    "name": "Perito Moreno",
    "lat": "-46.58995",
    "lng": "-70.92975"
  },
  {
    "country": "AR",
    "name": "Pergamino",
    "lat": "-33.88995",
    "lng": "-60.57357"
  },
  {
    "country": "AR",
    "name": "Pérez",
    "lat": "-32.99835",
    "lng": "-60.76791"
  },
  {
    "country": "AR",
    "name": "Pellegrini",
    "lat": "-36.26584",
    "lng": "-63.1655"
  },
  {
    "country": "AR",
    "name": "Pehuajó",
    "lat": "-35.81077",
    "lng": "-61.8968"
  },
  {
    "country": "AR",
    "name": "Patquía",
    "lat": "-30.04681",
    "lng": "-66.88231"
  },
  {
    "country": "AR",
    "name": "Paso de Indios",
    "lat": "-43.86225",
    "lng": "-69.04603"
  },
  {
    "country": "AR",
    "name": "Pasco",
    "lat": "-32.74733",
    "lng": "-63.34232"
  },
  {
    "country": "AR",
    "name": "Pascanas",
    "lat": "-33.1255",
    "lng": "-63.04084"
  },
  {
    "country": "AR",
    "name": "Parera",
    "lat": "-35.146",
    "lng": "-64.50089"
  },
  {
    "country": "AR",
    "name": "Paraná",
    "lat": "-31.73271",
    "lng": "-60.52897"
  },
  {
    "country": "AR",
    "name": "Pampa de los Guanacos",
    "lat": "-26.23002",
    "lng": "-61.83774"
  },
  {
    "country": "AR",
    "name": "Pampa del Infierno",
    "lat": "-26.50517",
    "lng": "-61.17436"
  },
  {
    "country": "AR",
    "name": "Palpalá",
    "lat": "-24.25647",
    "lng": "-65.21163"
  },
  {
    "country": "AR",
    "name": "Palma Sola",
    "lat": "-23.97771",
    "lng": "-64.30311"
  },
  {
    "country": "AR",
    "name": "Oro Verde",
    "lat": "-31.82508",
    "lng": "-60.51749"
  },
  {
    "country": "AR",
    "name": "Ordóñez",
    "lat": "-32.84057",
    "lng": "-62.86552"
  },
  {
    "country": "AR",
    "name": "Oncativo",
    "lat": "-31.91353",
    "lng": "-63.68201"
  },
  {
    "country": "AR",
    "name": "Olta",
    "lat": "-30.63117",
    "lng": "-66.263"
  },
  {
    "country": "AR",
    "name": "Oliva",
    "lat": "-32.04158",
    "lng": "-63.56978"
  },
  {
    "country": "AR",
    "name": "Olavarría",
    "lat": "-36.89272",
    "lng": "-60.32254"
  },
  {
    "country": "AR",
    "name": "Obispo Trejo",
    "lat": "-30.78128",
    "lng": "-63.41349"
  },
  {
    "country": "AR",
    "name": "Nueve de Julio",
    "lat": "-35.44437",
    "lng": "-60.88313"
  },
  {
    "country": "AR",
    "name": "Nueve de Julio",
    "lat": "-31.66914",
    "lng": "-68.39023"
  },
  {
    "country": "AR",
    "name": "Nueva Esperanza",
    "lat": "-26.19907",
    "lng": "-64.23792"
  },
  {
    "country": "AR",
    "name": "Ñorquinco",
    "lat": "-41.85072",
    "lng": "-70.90173"
  },
  {
    "country": "AR",
    "name": "Nono",
    "lat": "-31.79765",
    "lng": "-65.00312"
  },
  {
    "country": "AR",
    "name": "Noetinger",
    "lat": "-32.36597",
    "lng": "-62.31126"
  },
  {
    "country": "AR",
    "name": "Neuquén",
    "lat": "-38.95161",
    "lng": "-68.0591"
  },
  {
    "country": "AR",
    "name": "Naschel",
    "lat": "-32.91656",
    "lng": "-65.37535"
  },
  {
    "country": "AR",
    "name": "Napenay",
    "lat": "-26.73333",
    "lng": "-60.61667"
  },
  {
    "country": "AR",
    "name": "Mutquín",
    "lat": "-28.32104",
    "lng": "-66.14253"
  },
  {
    "country": "AR",
    "name": "Morteros",
    "lat": "-30.71164",
    "lng": "-61.99862"
  },
  {
    "country": "AR",
    "name": "Morrison",
    "lat": "-32.5948",
    "lng": "-62.83455"
  },
  {
    "country": "AR",
    "name": "Monteros",
    "lat": "-27.16741",
    "lng": "-65.49832"
  },
  {
    "country": "AR",
    "name": "Monte Quemado",
    "lat": "-25.80565",
    "lng": "-62.83019"
  },
  {
    "country": "AR",
    "name": "Monte Maíz",
    "lat": "-33.20462",
    "lng": "-62.60085"
  },
  {
    "country": "AR",
    "name": "Monte Hermoso",
    "lat": "-38.9825",
    "lng": "-61.29472"
  },
  {
    "country": "AR",
    "name": "Monte Cristo",
    "lat": "-31.34312",
    "lng": "-63.94437"
  },
  {
    "country": "AR",
    "name": "Monte Buey",
    "lat": "-32.91642",
    "lng": "-62.45669"
  },
  {
    "country": "AR",
    "name": "Molinos",
    "lat": "-25.43935",
    "lng": "-66.29412"
  },
  {
    "country": "AR",
    "name": "Miramar",
    "lat": "-30.91859",
    "lng": "-62.67814"
  },
  {
    "country": "AR",
    "name": "Mina Clavero",
    "lat": "-31.72101",
    "lng": "-65.00619"
  },
  {
    "country": "AR",
    "name": "Milagro",
    "lat": "-31.00831",
    "lng": "-65.99103"
  },
  {
    "country": "AR",
    "name": "Miguel Riglos",
    "lat": "-36.85398",
    "lng": "-63.68842"
  },
  {
    "country": "AR",
    "name": "Metán",
    "lat": "-25.49905",
    "lng": "-64.97388"
  },
  {
    "country": "AR",
    "name": "Merlo",
    "lat": "-32.34288",
    "lng": "-65.01396"
  },
  {
    "country": "AR",
    "name": "Mendoza",
    "lat": "-32.89084",
    "lng": "-68.82717"
  },
  {
    "country": "AR",
    "name": "Mendiolaza",
    "lat": "-31.26738",
    "lng": "-64.30087"
  },
  {
    "country": "AR",
    "name": "Melincué",
    "lat": "-33.65847",
    "lng": "-61.45459"
  },
  {
    "country": "AR",
    "name": "Médanos",
    "lat": "-38.82803",
    "lng": "-62.69355"
  },
  {
    "country": "AR",
    "name": "Mattaldi",
    "lat": "-34.48194",
    "lng": "-64.17255"
  },
  {
    "country": "AR",
    "name": "Marull",
    "lat": "-30.99471",
    "lng": "-62.82576"
  },
  {
    "country": "AR",
    "name": "Mariano Moreno",
    "lat": "-38.75029",
    "lng": "-70.02367"
  },
  {
    "country": "AR",
    "name": "Marcos Juárez",
    "lat": "-32.6978",
    "lng": "-62.10672"
  },
  {
    "country": "AR",
    "name": "Maquinchao",
    "lat": "-41.24912",
    "lng": "-68.70321"
  },
  {
    "country": "AR",
    "name": "Malvinas Argentinas",
    "lat": "-31.38194",
    "lng": "-64.05545"
  },
  {
    "country": "AR",
    "name": "Malargüe",
    "lat": "-35.47545",
    "lng": "-69.58427"
  },
  {
    "country": "AR",
    "name": "Malanzán",
    "lat": "-30.80394",
    "lng": "-66.60908"
  },
  {
    "country": "AR",
    "name": "Malagueño",
    "lat": "-31.46467",
    "lng": "-64.3584"
  },
  {
    "country": "AR",
    "name": "Maipú",
    "lat": "-32.97963",
    "lng": "-68.78461"
  },
  {
    "country": "AR",
    "name": "Mainque",
    "lat": "-39.06667",
    "lng": "-67.3"
  },
  {
    "country": "AR",
    "name": "Maimará",
    "lat": "-23.62392",
    "lng": "-65.40797"
  },
  {
    "country": "AR",
    "name": "Machagai",
    "lat": "-26.92614",
    "lng": "-60.04955"
  },
  {
    "country": "AR",
    "name": "Macachín",
    "lat": "-37.13598",
    "lng": "-63.6665"
  },
  {
    "country": "AR",
    "name": "San Isidro de Lules",
    "lat": "-26.9277",
    "lng": "-65.33869"
  },
  {
    "country": "AR",
    "name": "Luján de Cuyo",
    "lat": "-33.03547",
    "lng": "-68.87782"
  },
  {
    "country": "AR",
    "name": "Luján",
    "lat": "-32.36674",
    "lng": "-65.93642"
  },
  {
    "country": "AR",
    "name": "Los Varela",
    "lat": "-27.93003",
    "lng": "-65.87153"
  },
  {
    "country": "AR",
    "name": "Los Telares",
    "lat": "-28.98479",
    "lng": "-63.44889"
  },
  {
    "country": "AR",
    "name": "Los Surgentes",
    "lat": "-32.98454",
    "lng": "-62.02191"
  },
  {
    "country": "AR",
    "name": "Los Menucos",
    "lat": "-40.84402",
    "lng": "-68.08718"
  },
  {
    "country": "AR",
    "name": "Los Juríes",
    "lat": "-28.46539",
    "lng": "-62.10862"
  },
  {
    "country": "AR",
    "name": "Los Frentones",
    "lat": "-26.4077",
    "lng": "-61.41367"
  },
  {
    "country": "AR",
    "name": "Los Cóndores",
    "lat": "-32.31983",
    "lng": "-64.27751"
  },
  {
    "country": "AR",
    "name": "Los Cocos",
    "lat": "-30.92497",
    "lng": "-64.50207"
  },
  {
    "country": "AR",
    "name": "Los Antiguos",
    "lat": "-46.54972",
    "lng": "-71.63086"
  },
  {
    "country": "AR",
    "name": "Los Altos",
    "lat": "-28.04845",
    "lng": "-65.49945"
  },
  {
    "country": "AR",
    "name": "Lonquimay",
    "lat": "-36.46546",
    "lng": "-63.62429"
  },
  {
    "country": "AR",
    "name": "Londres",
    "lat": "-27.71439",
    "lng": "-67.13349"
  },
  {
    "country": "AR",
    "name": "Loncopué",
    "lat": "-38.07284",
    "lng": "-70.61609"
  },
  {
    "country": "AR",
    "name": "Lincoln",
    "lat": "-34.86649",
    "lng": "-61.5302"
  },
  {
    "country": "AR",
    "name": "Limay Mahuida",
    "lat": "-37.15966",
    "lng": "-66.67436"
  },
  {
    "country": "AR",
    "name": "Libertador General San Martín",
    "lat": "-32.41074",
    "lng": "-65.67586"
  },
  {
    "country": "AR",
    "name": "Libertador General San Martín",
    "lat": "-23.80644",
    "lng": "-64.78757"
  },
  {
    "country": "AR",
    "name": "Leones",
    "lat": "-32.66174",
    "lng": "-62.29678"
  },
  {
    "country": "AR",
    "name": "Leleque",
    "lat": "-42.41225",
    "lng": "-71.06797"
  },
  {
    "country": "AR",
    "name": "La Viña",
    "lat": "-25.46642",
    "lng": "-65.5663"
  },
  {
    "country": "AR",
    "name": "La Toma",
    "lat": "-33.05258",
    "lng": "-65.62385"
  },
  {
    "country": "AR",
    "name": "La Tigra",
    "lat": "-27.10996",
    "lng": "-60.58719"
  },
  {
    "country": "AR",
    "name": "Las Varillas",
    "lat": "-31.87208",
    "lng": "-62.71946"
  },
  {
    "country": "AR",
    "name": "Las Varas",
    "lat": "-31.8026",
    "lng": "-62.61655"
  },
  {
    "country": "AR",
    "name": "Las Rosas",
    "lat": "-32.47661",
    "lng": "-61.58041"
  },
  {
    "country": "AR",
    "name": "Las Plumas",
    "lat": "-43.72058",
    "lng": "-67.28319"
  },
  {
    "country": "AR",
    "name": "Las Perdices",
    "lat": "-32.69794",
    "lng": "-63.70634"
  },
  {
    "country": "AR",
    "name": "Las Parejas",
    "lat": "-32.68478",
    "lng": "-61.51637"
  },
  {
    "country": "AR",
    "name": "Las Ovejas",
    "lat": "-36.98881",
    "lng": "-70.74991"
  },
  {
    "country": "AR",
    "name": "Las Lomitas",
    "lat": "-24.70955",
    "lng": "-60.59303"
  },
  {
    "country": "AR",
    "name": "Las Lajitas",
    "lat": "-24.72762",
    "lng": "-64.19335"
  },
  {
    "country": "AR",
    "name": "Las Lajas",
    "lat": "-38.52322",
    "lng": "-70.36745"
  },
  {
    "country": "AR",
    "name": "Las Junturas",
    "lat": "-31.83125",
    "lng": "-63.45016"
  },
  {
    "country": "AR",
    "name": "Las Higueras",
    "lat": "-33.09231",
    "lng": "-64.28899"
  },
  {
    "country": "AR",
    "name": "Las Heras",
    "lat": "-46.54186",
    "lng": "-68.93593"
  },
  {
    "country": "AR",
    "name": "Las Heras",
    "lat": "-32.85273",
    "lng": "-68.82837"
  },
  {
    "country": "AR",
    "name": "Las Coloradas",
    "lat": "-39.55534",
    "lng": "-70.59491"
  },
  {
    "country": "AR",
    "name": "Las Breñas",
    "lat": "-27.08966",
    "lng": "-61.08161"
  },
  {
    "country": "AR",
    "name": "Las Acequias",
    "lat": "-33.28155",
    "lng": "-63.9761"
  },
  {
    "country": "AR",
    "name": "La Rioja",
    "lat": "-29.41105",
    "lng": "-66.85067"
  },
  {
    "country": "AR",
    "name": "La Quiaca",
    "lat": "-22.10236",
    "lng": "-65.59299"
  },
  {
    "country": "AR",
    "name": "La Puerta de San José",
    "lat": "-27.55",
    "lng": "-67.01667"
  },
  {
    "country": "AR",
    "name": "La Puerta",
    "lat": "-28.17036",
    "lng": "-65.79015"
  },
  {
    "country": "AR",
    "name": "Laprida",
    "lat": "-37.54415",
    "lng": "-60.79969"
  },
  {
    "country": "AR",
    "name": "La Poma",
    "lat": "-24.72196",
    "lng": "-66.20106"
  },
  {
    "country": "AR",
    "name": "La Playosa",
    "lat": "-32.10002",
    "lng": "-63.03088"
  },
  {
    "country": "AR",
    "name": "La Paz",
    "lat": "-33.46091",
    "lng": "-67.54956"
  },
  {
    "country": "AR",
    "name": "La Para",
    "lat": "-30.89416",
    "lng": "-63.00107"
  },
  {
    "country": "AR",
    "name": "La Merced",
    "lat": "-28.15195",
    "lng": "-65.66029"
  },
  {
    "country": "AR",
    "name": "La Mendieta",
    "lat": "-24.31187",
    "lng": "-64.96377"
  },
  {
    "country": "AR",
    "name": "La Maruja",
    "lat": "-35.6736",
    "lng": "-64.93997"
  },
  {
    "country": "AR",
    "name": "Lamarque",
    "lat": "-39.42304",
    "lng": "-65.70208"
  },
  {
    "country": "AR",
    "name": "Laguna Yema",
    "lat": "-24.25391",
    "lng": "-61.24466"
  },
  {
    "country": "AR",
    "name": "Laguna Paiva",
    "lat": "-31.30391",
    "lng": "-60.65894"
  },
  {
    "country": "AR",
    "name": "Laguna Larga",
    "lat": "-31.77652",
    "lng": "-63.80104"
  },
  {
    "country": "AR",
    "name": "La Granja",
    "lat": "-31.00919",
    "lng": "-64.26869"
  },
  {
    "country": "AR",
    "name": "Lago Puelo",
    "lat": "-42.06684",
    "lng": "-71.60384"
  },
  {
    "country": "AR",
    "name": "La Francia",
    "lat": "-31.40675",
    "lng": "-62.63396"
  },
  {
    "country": "AR",
    "name": "La Falda",
    "lat": "-31.08841",
    "lng": "-64.48987"
  },
  {
    "country": "AR",
    "name": "La Cumbre",
    "lat": "-30.98201",
    "lng": "-64.49139"
  },
  {
    "country": "AR",
    "name": "La Consulta",
    "lat": "-33.73579",
    "lng": "-69.12181"
  },
  {
    "country": "AR",
    "name": "La Cocha",
    "lat": "-27.76927",
    "lng": "-65.58711"
  },
  {
    "country": "AR",
    "name": "La Clotilde",
    "lat": "-27.13333",
    "lng": "-60.66667"
  },
  {
    "country": "AR",
    "name": "La Cesira",
    "lat": "-33.95115",
    "lng": "-62.97238"
  },
  {
    "country": "AR",
    "name": "La Carlota",
    "lat": "-33.41993",
    "lng": "-63.29769"
  },
  {
    "country": "AR",
    "name": "La Candelaria",
    "lat": "-26.12708",
    "lng": "-65.0496"
  },
  {
    "country": "AR",
    "name": "La Cañada",
    "lat": "-27.70826",
    "lng": "-63.77366"
  },
  {
    "country": "AR",
    "name": "La Calera",
    "lat": "-31.34377",
    "lng": "-64.33529"
  },
  {
    "country": "AR",
    "name": "La Caldera",
    "lat": "-24.60477",
    "lng": "-65.38181"
  },
  {
    "country": "AR",
    "name": "Laboulaye",
    "lat": "-34.12662",
    "lng": "-63.39119"
  },
  {
    "country": "AR",
    "name": "Laborde",
    "lat": "-33.15319",
    "lng": "-62.85661"
  },
  {
    "country": "AR",
    "name": "La Banda",
    "lat": "-27.73348",
    "lng": "-64.24278"
  },
  {
    "country": "AR",
    "name": "Justo Daract",
    "lat": "-33.8594",
    "lng": "-65.18277"
  },
  {
    "country": "AR",
    "name": "Justiniano Posse",
    "lat": "-32.88411",
    "lng": "-62.67788"
  },
  {
    "country": "AR",
    "name": "Junín de los Andes",
    "lat": "-39.95043",
    "lng": "-71.06936"
  },
  {
    "country": "AR",
    "name": "Junín",
    "lat": "-34.58382",
    "lng": "-60.94332"
  },
  {
    "country": "AR",
    "name": "Junín",
    "lat": "-33.14765",
    "lng": "-68.47899"
  },
  {
    "country": "AR",
    "name": "José de San Martín",
    "lat": "-44.05032",
    "lng": "-70.46967"
  },
  {
    "country": "AR",
    "name": "Joaquín V. González",
    "lat": "-25.11364",
    "lng": "-64.12628"
  },
  {
    "country": "AR",
    "name": "Jesús María",
    "lat": "-30.98153",
    "lng": "-64.09424"
  },
  {
    "country": "AR",
    "name": "James Craik",
    "lat": "-32.1612",
    "lng": "-63.46688"
  },
  {
    "country": "AR",
    "name": "Jacinto Arauz",
    "lat": "-38.08606",
    "lng": "-63.43169"
  },
  {
    "country": "AR",
    "name": "Italó",
    "lat": "-34.79237",
    "lng": "-63.78199"
  },
  {
    "country": "AR",
    "name": "Isla Verde",
    "lat": "-33.24104",
    "lng": "-62.40297"
  },
  {
    "country": "AR",
    "name": "Iruya",
    "lat": "-22.79189",
    "lng": "-65.21703"
  },
  {
    "country": "AR",
    "name": "Intendente Alvear",
    "lat": "-35.23383",
    "lng": "-63.59205"
  },
  {
    "country": "AR",
    "name": "Inriville",
    "lat": "-32.94424",
    "lng": "-62.23028"
  },
  {
    "country": "AR",
    "name": "Ingenio La Esperanza",
    "lat": "-24.22554",
    "lng": "-64.83896"
  },
  {
    "country": "AR",
    "name": "Ingeniero Luis A. Huergo",
    "lat": "-39.07146",
    "lng": "-67.2379"
  },
  {
    "country": "AR",
    "name": "Ingeniero Luiggi",
    "lat": "-35.38585",
    "lng": "-64.46519"
  },
  {
    "country": "AR",
    "name": "Ingeniero Jacobacci",
    "lat": "-41.3292",
    "lng": "-69.55015"
  },
  {
    "country": "AR",
    "name": "Ingeniero Guillermo N. Juárez",
    "lat": "-23.9",
    "lng": "-61.85"
  },
  {
    "country": "AR",
    "name": "Idiazábal",
    "lat": "-32.81411",
    "lng": "-63.03252"
  },
  {
    "country": "AR",
    "name": "Icaño",
    "lat": "-28.91934",
    "lng": "-65.32817"
  },
  {
    "country": "AR",
    "name": "Humahuaca",
    "lat": "-23.20544",
    "lng": "-65.35048"
  },
  {
    "country": "AR",
    "name": "Huinca Renancó",
    "lat": "-34.84038",
    "lng": "-64.3758"
  },
  {
    "country": "AR",
    "name": "Huillapima",
    "lat": "-28.72533",
    "lng": "-65.9787"
  },
  {
    "country": "AR",
    "name": "Huerta Grande",
    "lat": "-31.07524",
    "lng": "-64.49063"
  },
  {
    "country": "AR",
    "name": "Huanchillas",
    "lat": "-33.66653",
    "lng": "-63.63701"
  },
  {
    "country": "AR",
    "name": "Hualfín",
    "lat": "-27.22896",
    "lng": "-66.83131"
  },
  {
    "country": "AR",
    "name": "Hoyo de Epuyén",
    "lat": "-42.07189",
    "lng": "-71.50811"
  },
  {
    "country": "AR",
    "name": "Hersilia",
    "lat": "-30.00447",
    "lng": "-61.8408"
  },
  {
    "country": "AR",
    "name": "Herrera",
    "lat": "-28.48094",
    "lng": "-63.06779"
  },
  {
    "country": "AR",
    "name": "Hernando",
    "lat": "-32.42657",
    "lng": "-63.73333"
  },
  {
    "country": "AR",
    "name": "Hernández",
    "lat": "-32.3373",
    "lng": "-60.0216"
  },
  {
    "country": "AR",
    "name": "Hermoso Campo",
    "lat": "-27.60816",
    "lng": "-61.34441"
  },
  {
    "country": "AR",
    "name": "Henderson",
    "lat": "-36.3",
    "lng": "-61.71667"
  },
  {
    "country": "AR",
    "name": "Helvecia",
    "lat": "-31.09834",
    "lng": "-60.0883"
  },
  {
    "country": "AR",
    "name": "Guatraché",
    "lat": "-37.66776",
    "lng": "-63.53021"
  },
  {
    "country": "AR",
    "name": "Guatimozín",
    "lat": "-33.46149",
    "lng": "-62.43844"
  },
  {
    "country": "AR",
    "name": "Guaminí",
    "lat": "-37.01381",
    "lng": "-62.41858"
  },
  {
    "country": "AR",
    "name": "Guachipas",
    "lat": "-25.52031",
    "lng": "-65.50937"
  },
  {
    "country": "AR",
    "name": "Graneros",
    "lat": "-27.64934",
    "lng": "-65.4383"
  },
  {
    "country": "AR",
    "name": "Granadero Baigorria",
    "lat": "-32.85683",
    "lng": "-60.71754"
  },
  {
    "country": "AR",
    "name": "Godoy Cruz",
    "lat": "-32.92863",
    "lng": "-68.8351"
  },
  {
    "country": "AR",
    "name": "Gobernador Gregores",
    "lat": "-48.75057",
    "lng": "-70.24741"
  },
  {
    "country": "AR",
    "name": "Gobernador Gálvez",
    "lat": "-33.03016",
    "lng": "-60.64045"
  },
  {
    "country": "AR",
    "name": "Gobernador Costa",
    "lat": "-44.04992",
    "lng": "-70.59798"
  },
  {
    "country": "AR",
    "name": "General Villegas",
    "lat": "-35.03285",
    "lng": "-63.01252"
  },
  {
    "country": "AR",
    "name": "General Viamonte",
    "lat": "-35.00014",
    "lng": "-61.03508"
  },
  {
    "country": "AR",
    "name": "General San Martín",
    "lat": "-37.97904",
    "lng": "-63.60449"
  },
  {
    "country": "AR",
    "name": "General Roca",
    "lat": "-39.03333",
    "lng": "-67.58333"
  },
  {
    "country": "AR",
    "name": "General Roca",
    "lat": "-32.73196",
    "lng": "-61.91599"
  },
  {
    "country": "AR",
    "name": "General Ramírez",
    "lat": "-32.17601",
    "lng": "-60.20079"
  },
  {
    "country": "AR",
    "name": "General Pinto",
    "lat": "-34.76459",
    "lng": "-61.89093"
  },
  {
    "country": "AR",
    "name": "General Pinedo",
    "lat": "-27.31667",
    "lng": "-61.28333"
  },
  {
    "country": "AR",
    "name": "General Pico",
    "lat": "-35.65662",
    "lng": "-63.75682"
  },
  {
    "country": "AR",
    "name": "General Martín Miguel de Güemes",
    "lat": "-24.67034",
    "lng": "-65.04765"
  },
  {
    "country": "AR",
    "name": "General Manuel J. Campos",
    "lat": "-37.46025",
    "lng": "-63.58537"
  },
  {
    "country": "AR",
    "name": "General Levalle",
    "lat": "-34.01472",
    "lng": "-63.92413"
  },
  {
    "country": "AR",
    "name": "General Lavalle",
    "lat": "-32.72218",
    "lng": "-68.59137"
  },
  {
    "country": "AR",
    "name": "General La Madrid",
    "lat": "-37.24755",
    "lng": "-61.26273"
  },
  {
    "country": "AR",
    "name": "General Fernández Oro",
    "lat": "-38.95297",
    "lng": "-67.92489"
  },
  {
    "country": "AR",
    "name": "General Enrique Mosconi",
    "lat": "-23.21667",
    "lng": "-62.3"
  },
  {
    "country": "AR",
    "name": "General Mosconi",
    "lat": "-22.59588",
    "lng": "-63.81255"
  },
  {
    "country": "AR",
    "name": "General Enrique Godoy",
    "lat": "-39.07891",
    "lng": "-67.15807"
  },
  {
    "country": "AR",
    "name": "General Conesa",
    "lat": "-40.10408",
    "lng": "-64.45592"
  },
  {
    "country": "AR",
    "name": "General Cabrera",
    "lat": "-32.81313",
    "lng": "-63.87243"
  },
  {
    "country": "AR",
    "name": "General Baldissera",
    "lat": "-33.12246",
    "lng": "-62.3063"
  },
  {
    "country": "AR",
    "name": "General Arenales",
    "lat": "-34.30264",
    "lng": "-61.30522"
  },
  {
    "country": "AR",
    "name": "General Alvear",
    "lat": "-36.02078",
    "lng": "-60.0145"
  },
  {
    "country": "AR",
    "name": "General Alvear",
    "lat": "-34.97696",
    "lng": "-67.69116"
  },
  {
    "country": "AR",
    "name": "General Acha",
    "lat": "-37.37698",
    "lng": "-64.60431"
  },
  {
    "country": "AR",
    "name": "Gastre",
    "lat": "-42.26186",
    "lng": "-69.22112"
  },
  {
    "country": "AR",
    "name": "Garza",
    "lat": "-28.15321",
    "lng": "-63.53935"
  },
  {
    "country": "AR",
    "name": "Gancedo",
    "lat": "-27.49038",
    "lng": "-61.67571"
  },
  {
    "country": "AR",
    "name": "Gálvez",
    "lat": "-32.02927",
    "lng": "-61.22103"
  },
  {
    "country": "AR",
    "name": "Gaimán",
    "lat": "-43.2897",
    "lng": "-65.4929"
  },
  {
    "country": "AR",
    "name": "Funes",
    "lat": "-32.91568",
    "lng": "-60.80995"
  },
  {
    "country": "AR",
    "name": "Frías",
    "lat": "-28.63593",
    "lng": "-65.13102"
  },
  {
    "country": "AR",
    "name": "Fray Luis Beltrán",
    "lat": "-39.31369",
    "lng": "-65.76002"
  },
  {
    "country": "AR",
    "name": "Fray Luis A. Beltrán",
    "lat": "-32.79122",
    "lng": "-60.72819"
  },
  {
    "country": "AR",
    "name": "Fraile Pintado",
    "lat": "-23.94079",
    "lng": "-64.79943"
  },
  {
    "country": "AR",
    "name": "Firmat",
    "lat": "-33.45937",
    "lng": "-61.4832"
  },
  {
    "country": "AR",
    "name": "Fiambalá",
    "lat": "-27.67225",
    "lng": "-67.6187"
  },
  {
    "country": "AR",
    "name": "Fernández",
    "lat": "-27.92037",
    "lng": "-63.89349"
  },
  {
    "country": "AR",
    "name": "Famatina",
    "lat": "-28.92264",
    "lng": "-67.52016"
  },
  {
    "country": "AR",
    "name": "Famaillá",
    "lat": "-27.05413",
    "lng": "-65.40329"
  },
  {
    "country": "AR",
    "name": "Etruria",
    "lat": "-32.94008",
    "lng": "-63.2466"
  },
  {
    "country": "AR",
    "name": "Estanislao del Campo",
    "lat": "-25.05504",
    "lng": "-60.09218"
  },
  {
    "country": "AR",
    "name": "Esquel",
    "lat": "-42.91147",
    "lng": "-71.31947"
  },
  {
    "country": "AR",
    "name": "Esperanza",
    "lat": "-31.4488",
    "lng": "-60.93173"
  },
  {
    "country": "AR",
    "name": "Embarcación",
    "lat": "-23.21003",
    "lng": "-64.09965"
  },
  {
    "country": "AR",
    "name": "Embalse",
    "lat": "-32.18",
    "lng": "-64.41809"
  },
  {
    "country": "AR",
    "name": "Embajador Martini",
    "lat": "-35.38633",
    "lng": "-64.28092"
  },
  {
    "country": "AR",
    "name": "El Trébol",
    "lat": "-32.2008",
    "lng": "-61.7014"
  },
  {
    "country": "AR",
    "name": "El Tío",
    "lat": "-31.38357",
    "lng": "-62.82938"
  },
  {
    "country": "AR",
    "name": "El Simbolar",
    "lat": "-27.97167",
    "lng": "-64.89544"
  },
  {
    "country": "AR",
    "name": "El Rodeo",
    "lat": "-28.21518",
    "lng": "-65.8742"
  },
  {
    "country": "AR",
    "name": "El Quebrachal",
    "lat": "-25.28333",
    "lng": "-64.06667"
  },
  {
    "country": "AR",
    "name": "El Maitén",
    "lat": "-42.04924",
    "lng": "-71.16693"
  },
  {
    "country": "AR",
    "name": "El Huecú",
    "lat": "-37.64522",
    "lng": "-70.58006"
  },
  {
    "country": "AR",
    "name": "El Hoyo",
    "lat": "-27.02872",
    "lng": "-63.23197"
  },
  {
    "country": "AR",
    "name": "El Galpón",
    "lat": "-25.38069",
    "lng": "-64.65259"
  },
  {
    "country": "AR",
    "name": "Elena",
    "lat": "-32.57205",
    "lng": "-64.39481"
  },
  {
    "country": "AR",
    "name": "El Cuy",
    "lat": "-39.92685",
    "lng": "-68.34208"
  },
  {
    "country": "AR",
    "name": "El Carril",
    "lat": "-25.0741",
    "lng": "-65.49174"
  },
  {
    "country": "AR",
    "name": "El Carmen",
    "lat": "-24.38682",
    "lng": "-65.26177"
  },
  {
    "country": "AR",
    "name": "El Calafate",
    "lat": "-50.34075",
    "lng": "-72.27682"
  },
  {
    "country": "AR",
    "name": "El Bolsón",
    "lat": "-41.96051",
    "lng": "-71.53336"
  },
  {
    "country": "AR",
    "name": "El Arañado",
    "lat": "-31.7412",
    "lng": "-62.89322"
  },
  {
    "country": "AR",
    "name": "El Alto",
    "lat": "-28.31123",
    "lng": "-65.36397"
  },
  {
    "country": "AR",
    "name": "El Aguilar",
    "lat": "-23.21572",
    "lng": "-65.68005"
  },
  {
    "country": "AR",
    "name": "Eduardo Castex",
    "lat": "-35.91501",
    "lng": "-64.29448"
  },
  {
    "country": "AR",
    "name": "Dolavón",
    "lat": "-43.30684",
    "lng": "-65.70651"
  },
  {
    "country": "AR",
    "name": "Doblas",
    "lat": "-37.14967",
    "lng": "-64.01183"
  },
  {
    "country": "AR",
    "name": "Diamante",
    "lat": "-32.06641",
    "lng": "-60.63837"
  },
  {
    "country": "AR",
    "name": "Devoto",
    "lat": "-31.40431",
    "lng": "-62.30634"
  },
  {
    "country": "AR",
    "name": "Despeñaderos",
    "lat": "-31.81626",
    "lng": "-64.28989"
  },
  {
    "country": "AR",
    "name": "Del Campillo",
    "lat": "-34.37659",
    "lng": "-64.49504"
  },
  {
    "country": "AR",
    "name": "Deán Funes",
    "lat": "-30.42036",
    "lng": "-64.34984"
  },
  {
    "country": "AR",
    "name": "Darwin",
    "lat": "-39.20334",
    "lng": "-65.73952"
  },
  {
    "country": "AR",
    "name": "Dalmacio Vélez Sársfield",
    "lat": "-32.61072",
    "lng": "-63.58038"
  },
  {
    "country": "AR",
    "name": "Daireaux",
    "lat": "-36.6",
    "lng": "-61.75"
  },
  {
    "country": "AR",
    "name": "Cutral-Có",
    "lat": "-38.93424",
    "lng": "-69.23052"
  },
  {
    "country": "AR",
    "name": "Cuchillo Có",
    "lat": "-38.33349",
    "lng": "-64.64331"
  },
  {
    "country": "AR",
    "name": "Cruz del Eje",
    "lat": "-30.72644",
    "lng": "-64.80387"
  },
  {
    "country": "AR",
    "name": "Cruz Alta",
    "lat": "-33.00887",
    "lng": "-61.80746"
  },
  {
    "country": "AR",
    "name": "Crespo",
    "lat": "-32.02873",
    "lng": "-60.30658"
  },
  {
    "country": "AR",
    "name": "Costa Sacate",
    "lat": "-31.6477",
    "lng": "-63.75935"
  },
  {
    "country": "AR",
    "name": "Cosquín",
    "lat": "-31.24508",
    "lng": "-64.46563"
  },
  {
    "country": "AR",
    "name": "Corzuela",
    "lat": "-26.95374",
    "lng": "-60.96928"
  },
  {
    "country": "AR",
    "name": "Corralito",
    "lat": "-32.02462",
    "lng": "-64.19216"
  },
  {
    "country": "AR",
    "name": "Corral de Bustos",
    "lat": "-33.28205",
    "lng": "-62.18463"
  },
  {
    "country": "AR",
    "name": "Coronel Suárez",
    "lat": "-37.45467",
    "lng": "-61.93343"
  },
  {
    "country": "AR",
    "name": "Coronel Pringles",
    "lat": "-37.98295",
    "lng": "-61.35615"
  },
  {
    "country": "AR",
    "name": "Coronel Moldes",
    "lat": "-33.6227",
    "lng": "-64.59711"
  },
  {
    "country": "AR",
    "name": "Coronel Du Graty",
    "lat": "-27.68038",
    "lng": "-60.91462"
  },
  {
    "country": "AR",
    "name": "Coronel Dorrego",
    "lat": "-38.71867",
    "lng": "-61.28733"
  },
  {
    "country": "AR",
    "name": "Coronel Belisle",
    "lat": "-39.18688",
    "lng": "-65.95422"
  },
  {
    "country": "AR",
    "name": "Coronel Baigorria",
    "lat": "-32.8477",
    "lng": "-64.36107"
  },
  {
    "country": "AR",
    "name": "Coronda",
    "lat": "-31.97263",
    "lng": "-60.91983"
  },
  {
    "country": "AR",
    "name": "Córdoba",
    "lat": "-31.4135",
    "lng": "-64.18105"
  },
  {
    "country": "AR",
    "name": "Contraalmirante Cordero",
    "lat": "-38.72423",
    "lng": "-68.15284"
  },
  {
    "country": "AR",
    "name": "Concepción del Bermejo",
    "lat": "-26.59926",
    "lng": "-60.94617"
  },
  {
    "country": "AR",
    "name": "Concepción",
    "lat": "-27.34127",
    "lng": "-65.59636"
  },
  {
    "country": "AR",
    "name": "Concarán",
    "lat": "-32.56009",
    "lng": "-65.2427"
  },
  {
    "country": "AR",
    "name": "Comodoro Rivadavia",
    "lat": "-45.86413",
    "lng": "-67.49656"
  },
  {
    "country": "AR",
    "name": "Comandante Luis Piedra Buena",
    "lat": "-49.98513",
    "lng": "-68.91467"
  },
  {
    "country": "AR",
    "name": "Comallo",
    "lat": "-41.02993",
    "lng": "-70.26784"
  },
  {
    "country": "AR",
    "name": "Colonia San Bartolomé",
    "lat": "-31.5278",
    "lng": "-62.72436"
  },
  {
    "country": "AR",
    "name": "Colonia La Tordilla",
    "lat": "-31.23746",
    "lng": "-63.06134"
  },
  {
    "country": "AR",
    "name": "Colonia Dora",
    "lat": "-28.6",
    "lng": "-62.95"
  },
  {
    "country": "AR",
    "name": "Colonia Barón",
    "lat": "-36.15152",
    "lng": "-63.85404"
  },
  {
    "country": "AR",
    "name": "Colón",
    "lat": "-33.89512",
    "lng": "-61.1011"
  },
  {
    "country": "AR",
    "name": "Clodomira",
    "lat": "-27.5744",
    "lng": "-64.13108"
  },
  {
    "country": "AR",
    "name": "Cipolletti",
    "lat": "-38.93392",
    "lng": "-67.99032"
  },
  {
    "country": "AR",
    "name": "Cintra",
    "lat": "-32.30673",
    "lng": "-62.65214"
  },
  {
    "country": "AR",
    "name": "Cinco Saltos",
    "lat": "-38.82225",
    "lng": "-68.06293"
  },
  {
    "country": "AR",
    "name": "Chumbicha",
    "lat": "-28.8543",
    "lng": "-66.235"
  },
  {
    "country": "AR",
    "name": "Chos Malal",
    "lat": "-37.37809",
    "lng": "-70.27085"
  },
  {
    "country": "AR",
    "name": "Chorotis",
    "lat": "-27.91578",
    "lng": "-61.39982"
  },
  {
    "country": "AR",
    "name": "Choele Choel",
    "lat": "-39.28941",
    "lng": "-65.6606"
  },
  {
    "country": "AR",
    "name": "Chivilcoy",
    "lat": "-34.89566",
    "lng": "-60.01667"
  },
  {
    "country": "AR",
    "name": "Chimpay",
    "lat": "-39.16482",
    "lng": "-66.14236"
  },
  {
    "country": "AR",
    "name": "Chimbas",
    "lat": "-31.48333",
    "lng": "-68.53333"
  },
  {
    "country": "AR",
    "name": "Chilecito",
    "lat": "-29.16195",
    "lng": "-67.4974"
  },
  {
    "country": "AR",
    "name": "Chicoana",
    "lat": "-25.10502",
    "lng": "-65.53473"
  },
  {
    "country": "AR",
    "name": "Chichinales",
    "lat": "-39.11505",
    "lng": "-66.92714"
  },
  {
    "country": "AR",
    "name": "Chepes",
    "lat": "-31.34363",
    "lng": "-66.58894"
  },
  {
    "country": "AR",
    "name": "Chazón",
    "lat": "-33.07872",
    "lng": "-63.27657"
  },
  {
    "country": "AR",
    "name": "Charras",
    "lat": "-33.024",
    "lng": "-64.04719"
  },
  {
    "country": "AR",
    "name": "Charata",
    "lat": "-27.21438",
    "lng": "-61.18795"
  },
  {
    "country": "AR",
    "name": "Chamical",
    "lat": "-30.36002",
    "lng": "-66.31399"
  },
  {
    "country": "AR",
    "name": "Chacabuco",
    "lat": "-34.64167",
    "lng": "-60.47389"
  },
  {
    "country": "AR",
    "name": "Cervantes",
    "lat": "-39.05444",
    "lng": "-67.39426"
  },
  {
    "country": "AR",
    "name": "Cerrillos",
    "lat": "-24.89833",
    "lng": "-65.48706"
  },
  {
    "country": "AR",
    "name": "Ceres",
    "lat": "-29.881",
    "lng": "-61.94504"
  },
  {
    "country": "AR",
    "name": "Centenario",
    "lat": "-38.82955",
    "lng": "-68.1318"
  },
  {
    "country": "AR",
    "name": "Cavanagh",
    "lat": "-33.47606",
    "lng": "-62.33888"
  },
  {
    "country": "AR",
    "name": "Caucete",
    "lat": "-31.65179",
    "lng": "-68.28105"
  },
  {
    "country": "AR",
    "name": "Catriló",
    "lat": "-36.40597",
    "lng": "-63.42168"
  },
  {
    "country": "AR",
    "name": "Catriel",
    "lat": "-37.87907",
    "lng": "-67.7956"
  },
  {
    "country": "AR",
    "name": "Castro Barros",
    "lat": "-30.57952",
    "lng": "-65.72696"
  },
  {
    "country": "AR",
    "name": "Castelli",
    "lat": "-25.94679",
    "lng": "-60.61947"
  },
  {
    "country": "AR",
    "name": "Casilda",
    "lat": "-33.04417",
    "lng": "-61.16806"
  },
  {
    "country": "AR",
    "name": "Carrilobo",
    "lat": "-31.87296",
    "lng": "-63.11715"
  },
  {
    "country": "AR",
    "name": "Carnerillo",
    "lat": "-32.91371",
    "lng": "-64.02175"
  },
  {
    "country": "AR",
    "name": "Carmen de Patagones",
    "lat": "-40.79828",
    "lng": "-62.98097"
  },
  {
    "country": "AR",
    "name": "Carlos Tejedor",
    "lat": "-35.39265",
    "lng": "-62.42146"
  },
  {
    "country": "AR",
    "name": "Carlos Casares",
    "lat": "-35.62171",
    "lng": "-61.36169"
  },
  {
    "country": "AR",
    "name": "Carhué",
    "lat": "-37.17668",
    "lng": "-62.75792"
  },
  {
    "country": "AR",
    "name": "Carcarañá",
    "lat": "-32.85679",
    "lng": "-61.15331"
  },
  {
    "country": "AR",
    "name": "Capitán Bermúdez",
    "lat": "-32.82262",
    "lng": "-60.71852"
  },
  {
    "country": "AR",
    "name": "Capilla del Monte",
    "lat": "-30.86088",
    "lng": "-64.52515"
  },
  {
    "country": "AR",
    "name": "Capayán",
    "lat": "-28.77436",
    "lng": "-66.04749"
  },
  {
    "country": "AR",
    "name": "Candelaria",
    "lat": "-32.06036",
    "lng": "-65.82477"
  },
  {
    "country": "AR",
    "name": "Canals",
    "lat": "-33.56542",
    "lng": "-62.88927"
  },
  {
    "country": "AR",
    "name": "Cañada de Luque",
    "lat": "-30.73341",
    "lng": "-63.72375"
  },
  {
    "country": "AR",
    "name": "Cañada de Gómez",
    "lat": "-32.81636",
    "lng": "-61.39493"
  },
  {
    "country": "AR",
    "name": "Campo Quijano",
    "lat": "-24.90982",
    "lng": "-65.63656"
  },
  {
    "country": "AR",
    "name": "Campo Largo",
    "lat": "-26.80077",
    "lng": "-60.84215"
  },
  {
    "country": "AR",
    "name": "Campo Gallo",
    "lat": "-26.58333",
    "lng": "-62.85"
  },
  {
    "country": "AR",
    "name": "Camilo Aldao",
    "lat": "-33.12745",
    "lng": "-62.09453"
  },
  {
    "country": "AR",
    "name": "Camarones",
    "lat": "-44.79709",
    "lng": "-65.70994"
  },
  {
    "country": "AR",
    "name": "Calingasta",
    "lat": "-31.33394",
    "lng": "-69.4208"
  },
  {
    "country": "AR",
    "name": "Calilegua",
    "lat": "-23.77368",
    "lng": "-64.77002"
  },
  {
    "country": "AR",
    "name": "Caleufú",
    "lat": "-35.59559",
    "lng": "-64.55778"
  },
  {
    "country": "AR",
    "name": "Caleta Olivia",
    "lat": "-46.43929",
    "lng": "-67.52814"
  },
  {
    "country": "AR",
    "name": "Calchaquí",
    "lat": "-29.88767",
    "lng": "-60.28697"
  },
  {
    "country": "AR",
    "name": "Caimancito",
    "lat": "-23.74069",
    "lng": "-64.5937"
  },
  {
    "country": "AR",
    "name": "Cafayate",
    "lat": "-26.07286",
    "lng": "-65.97766"
  },
  {
    "country": "AR",
    "name": "Cachí",
    "lat": "-25.12033",
    "lng": "-66.16519"
  },
  {
    "country": "AR",
    "name": "Buta Ranquil",
    "lat": "-37.05222",
    "lng": "-69.87713"
  },
  {
    "country": "AR",
    "name": "Burruyacú",
    "lat": "-26.49918",
    "lng": "-64.74206"
  },
  {
    "country": "AR",
    "name": "Buena Esperanza",
    "lat": "-34.75647",
    "lng": "-65.25379"
  },
  {
    "country": "AR",
    "name": "Buchardo",
    "lat": "-34.72263",
    "lng": "-63.5092"
  },
  {
    "country": "AR",
    "name": "Brinkmann",
    "lat": "-30.86589",
    "lng": "-62.03742"
  },
  {
    "country": "AR",
    "name": "Brea Pozo",
    "lat": "-28.24382",
    "lng": "-63.95091"
  },
  {
    "country": "AR",
    "name": "Bragado",
    "lat": "-35.11912",
    "lng": "-60.48966"
  },
  {
    "country": "AR",
    "name": "Berrotarán",
    "lat": "-32.451",
    "lng": "-64.38867"
  },
  {
    "country": "AR",
    "name": "Bernasconi",
    "lat": "-37.90459",
    "lng": "-63.7424"
  },
  {
    "country": "AR",
    "name": "Bernardo Larroudé",
    "lat": "-35.02449",
    "lng": "-63.58253"
  },
  {
    "country": "AR",
    "name": "Beltrán",
    "lat": "-27.82913",
    "lng": "-64.06098"
  },
  {
    "country": "AR",
    "name": "Bell Ville",
    "lat": "-32.62591",
    "lng": "-62.68873"
  },
  {
    "country": "AR",
    "name": "Bella Vista",
    "lat": "-27.03424",
    "lng": "-65.30196"
  },
  {
    "country": "AR",
    "name": "Belén",
    "lat": "-27.65103",
    "lng": "-67.02869"
  },
  {
    "country": "AR",
    "name": "Barrancas",
    "lat": "-36.82344",
    "lng": "-69.91564"
  },
  {
    "country": "AR",
    "name": "Bandera",
    "lat": "-28.8884",
    "lng": "-62.266"
  },
  {
    "country": "AR",
    "name": "Banda del Río Salí",
    "lat": "-26.83333",
    "lng": "-65.16667"
  },
  {
    "country": "AR",
    "name": "Bañado de Ovanta",
    "lat": "-28.10564",
    "lng": "-65.31884"
  },
  {
    "country": "AR",
    "name": "Balnearia",
    "lat": "-31.0088",
    "lng": "-62.66733"
  },
  {
    "country": "AR",
    "name": "Bahía Blanca",
    "lat": "-38.71959",
    "lng": "-62.27243"
  },
  {
    "country": "AR",
    "name": "Aviá Terai",
    "lat": "-26.68532",
    "lng": "-60.7292"
  },
  {
    "country": "AR",
    "name": "Arrufó",
    "lat": "-30.23281",
    "lng": "-61.72862"
  },
  {
    "country": "AR",
    "name": "Arroyo Seco",
    "lat": "-33.15489",
    "lng": "-60.50863"
  },
  {
    "country": "AR",
    "name": "Arroyo Cabral",
    "lat": "-32.49119",
    "lng": "-63.40126"
  },
  {
    "country": "AR",
    "name": "Arroyito",
    "lat": "-31.42022",
    "lng": "-63.05002"
  },
  {
    "country": "AR",
    "name": "Arrecifes",
    "lat": "-34.0639",
    "lng": "-60.10357"
  },
  {
    "country": "AR",
    "name": "Arraga",
    "lat": "-28.04978",
    "lng": "-64.22254"
  },
  {
    "country": "AR",
    "name": "Armstrong",
    "lat": "-32.78215",
    "lng": "-61.60222"
  },
  {
    "country": "AR",
    "name": "Arias",
    "lat": "-33.64411",
    "lng": "-62.40272"
  },
  {
    "country": "AR",
    "name": "Arauco",
    "lat": "-28.58071",
    "lng": "-66.7925"
  },
  {
    "country": "AR",
    "name": "Arata",
    "lat": "-35.63895",
    "lng": "-64.35621"
  },
  {
    "country": "AR",
    "name": "Aranguren",
    "lat": "-32.24252",
    "lng": "-60.16107"
  },
  {
    "country": "AR",
    "name": "Apolinario Saravia",
    "lat": "-24.43276",
    "lng": "-63.99535"
  },
  {
    "country": "AR",
    "name": "Antofagasta de la Sierra",
    "lat": "-26.0594",
    "lng": "-67.40636"
  },
  {
    "country": "AR",
    "name": "Anguil",
    "lat": "-36.52567",
    "lng": "-64.01025"
  },
  {
    "country": "AR",
    "name": "Añelo",
    "lat": "-38.35441",
    "lng": "-68.7884"
  },
  {
    "country": "AR",
    "name": "Andalgalá",
    "lat": "-27.58185",
    "lng": "-66.31626"
  },
  {
    "country": "AR",
    "name": "Andacollo",
    "lat": "-37.17945",
    "lng": "-70.66912"
  },
  {
    "country": "AR",
    "name": "Ancasti",
    "lat": "-28.81247",
    "lng": "-65.50145"
  },
  {
    "country": "AR",
    "name": "Añatuya",
    "lat": "-28.46064",
    "lng": "-62.83472"
  },
  {
    "country": "AR",
    "name": "Aminga",
    "lat": "-28.84771",
    "lng": "-66.93024"
  },
  {
    "country": "AR",
    "name": "Florentino Ameghino",
    "lat": "-34.84405",
    "lng": "-62.46701"
  },
  {
    "country": "AR",
    "name": "Aluminé",
    "lat": "-39.23686",
    "lng": "-70.9197"
  },
  {
    "country": "AR",
    "name": "Altos de Chipión",
    "lat": "-30.9559",
    "lng": "-62.33727"
  },
  {
    "country": "AR",
    "name": "Alto Río Senguer",
    "lat": "-45.04105",
    "lng": "-70.81982"
  },
  {
    "country": "AR",
    "name": "Alta Italia",
    "lat": "-35.3335",
    "lng": "-64.11496"
  },
  {
    "country": "AR",
    "name": "Alta Gracia",
    "lat": "-31.65292",
    "lng": "-64.42826"
  },
  {
    "country": "AR",
    "name": "Alpachiri",
    "lat": "-37.37704",
    "lng": "-63.77445"
  },
  {
    "country": "AR",
    "name": "Almafuerte",
    "lat": "-32.19296",
    "lng": "-64.25559"
  },
  {
    "country": "AR",
    "name": "Allen",
    "lat": "-38.97736",
    "lng": "-67.82714"
  },
  {
    "country": "AR",
    "name": "Algarrobo del Águila",
    "lat": "-36.39968",
    "lng": "-67.14511"
  },
  {
    "country": "AR",
    "name": "Alejo Ledesma",
    "lat": "-33.60643",
    "lng": "-62.62304"
  },
  {
    "country": "AR",
    "name": "Alejandro Roca",
    "lat": "-33.35369",
    "lng": "-63.71849"
  },
  {
    "country": "AR",
    "name": "Alderetes",
    "lat": "-26.81667",
    "lng": "-65.13333"
  },
  {
    "country": "AR",
    "name": "Alberti",
    "lat": "-35.02692",
    "lng": "-60.27587"
  },
  {
    "country": "AR",
    "name": "Albardón",
    "lat": "-31.43722",
    "lng": "-68.52556"
  },
  {
    "country": "AR",
    "name": "Aimogasta",
    "lat": "-28.56091",
    "lng": "-66.80588"
  },
  {
    "country": "AR",
    "name": "Aguilares",
    "lat": "-27.4338",
    "lng": "-65.61427"
  },
  {
    "country": "AR",
    "name": "Agua de Oro",
    "lat": "-31.06661",
    "lng": "-64.30017"
  },
  {
    "country": "AR",
    "name": "Adelia María",
    "lat": "-33.63152",
    "lng": "-64.02097"
  },
  {
    "country": "AR",
    "name": "Achiras",
    "lat": "-33.17538",
    "lng": "-64.99331"
  },
  {
    "country": "AR",
    "name": "Abra Pampa",
    "lat": "-22.72049",
    "lng": "-65.69697"
  },
  {
    "country": "AR",
    "name": "Balvanera",
    "lat": "-34.61032",
    "lng": "-58.39766"
  },
  {
    "country": "AR",
    "name": "Villa Santa Rita",
    "lat": "-34.61082",
    "lng": "-58.481"
  },
  {
    "country": "AR",
    "name": "Bella Italia",
    "lat": "-31.28182",
    "lng": "-61.41092"
  },
  {
    "country": "AR",
    "name": "Cariló",
    "lat": "-37.16524",
    "lng": "-56.89133"
  },
  {
    "country": "AR",
    "name": "Villa Mercedes",
    "lat": "-33.67571",
    "lng": "-65.45783"
  },
  {
    "country": "AR",
    "name": "La Punta",
    "lat": "-33.18368",
    "lng": "-66.3127"
  },
  {
    "country": "AR",
    "name": "Villa Berna",
    "lat": "-31.91419",
    "lng": "-64.73249"
  },
  {
    "country": "AR",
    "name": "Cuesta Blanca",
    "lat": "-31.48658",
    "lng": "-64.5715"
  },
  {
    "country": "AR",
    "name": "Avellaneda",
    "lat": "-34.66018",
    "lng": "-58.36744"
  },
  {
    "country": "AR",
    "name": "San Miguel",
    "lat": "-34.54335",
    "lng": "-58.71229"
  },
  {
    "country": "AR",
    "name": "San Carlos de Bariloche",
    "lat": "-41.14557",
    "lng": "-71.30822"
  },
  {
    "country": "AR",
    "name": "Santa Catalina - Dique Lujan",
    "lat": "-34.38375",
    "lng": "-58.70673"
  },
  {
    "country": "AR",
    "name": "Río Turbio",
    "lat": "-51.53587",
    "lng": "-72.33673"
  },
  {
    "country": "AR",
    "name": "Adrogué",
    "lat": "-34.80041",
    "lng": "-58.38384"
  },
  {
    "country": "AR",
    "name": "Los Laureles",
    "lat": "-29.36847",
    "lng": "-59.73634"
  },
  {
    "country": "AR",
    "name": "Gato Colorado",
    "lat": "-28.02219",
    "lng": "-61.18663"
  },
  {
    "country": "AR",
    "name": "Tolhuin",
    "lat": "-54.51083",
    "lng": "-67.1955"
  },
  {
    "country": "AR",
    "name": "Villa General Guemes",
    "lat": "-24.7553",
    "lng": "-59.4894"
  },
  {
    "country": "AR",
    "name": "Ingeniero Pablo Nogués",
    "lat": "-34.47775",
    "lng": "-58.70652"
  },
  {
    "country": "AR",
    "name": "Rincón de Los Sauces",
    "lat": "-37.39844",
    "lng": "-68.92874"
  },
  {
    "country": "AR",
    "name": "La Adela",
    "lat": "-38.98333",
    "lng": "-64.08333"
  },
  {
    "country": "AR",
    "name": "José C. Paz",
    "lat": "-34.51541",
    "lng": "-58.76813"
  },
  {
    "country": "AR",
    "name": "Santa María",
    "lat": "-34.56635",
    "lng": "-58.75762"
  },
  {
    "country": "AS",
    "name": "Aūa",
    "lat": "-14.27611",
    "lng": "-170.66389"
  },
  {
    "country": "AS",
    "name": "Vaitogi",
    "lat": "-14.35259",
    "lng": "-170.73796"
  },
  {
    "country": "AS",
    "name": "Vailoatai",
    "lat": "-14.3534",
    "lng": "-170.7808"
  },
  {
    "country": "AS",
    "name": "Taulaga",
    "lat": "-11.05528",
    "lng": "-171.08833"
  },
  {
    "country": "AS",
    "name": "Ta`ū",
    "lat": "-14.23361",
    "lng": "-169.51444"
  },
  {
    "country": "AS",
    "name": "Tāfuna",
    "lat": "-14.33583",
    "lng": "-170.72"
  },
  {
    "country": "AS",
    "name": "Faleniu",
    "lat": "-14.3325",
    "lng": "-170.74444"
  },
  {
    "country": "AS",
    "name": "Fagatogo",
    "lat": "-14.2825",
    "lng": "-170.69"
  },
  {
    "country": "AS",
    "name": "Faleāsao",
    "lat": "-14.2222",
    "lng": "-169.51278"
  },
  {
    "country": "AS",
    "name": "Leone",
    "lat": "-14.34389",
    "lng": "-170.785"
  },
  {
    "country": "AS",
    "name": "Malaeimi",
    "lat": "-14.32278",
    "lng": "-170.73389"
  },
  {
    "country": "AS",
    "name": "Mapusagafou",
    "lat": "-14.33056",
    "lng": "-170.75278"
  },
  {
    "country": "AS",
    "name": "Ofu",
    "lat": "-14.17117",
    "lng": "-169.67851"
  },
  {
    "country": "AS",
    "name": "Pago Pago",
    "lat": "-14.27806",
    "lng": "-170.7025"
  },
  {
    "country": "AT",
    "name": "Neu-Guntramsdorf",
    "lat": "48.0642",
    "lng": "16.31573"
  },
  {
    "country": "AT",
    "name": "Kleinarl",
    "lat": "47.27725",
    "lng": "13.31955"
  },
  {
    "country": "AT",
    "name": "Edelstauden",
    "lat": "46.98333",
    "lng": "15.61667"
  },
  {
    "country": "AT",
    "name": "Neuhaus am Klausenbach",
    "lat": "46.86667",
    "lng": "16.03333"
  },
  {
    "country": "AT",
    "name": "Millstatt",
    "lat": "46.80417",
    "lng": "13.58056"
  },
  {
    "country": "AT",
    "name": "Zwölfaxing",
    "lat": "48.1099",
    "lng": "16.46267"
  },
  {
    "country": "AT",
    "name": "Zwettl Stadt",
    "lat": "48.60726",
    "lng": "15.16714"
  },
  {
    "country": "AT",
    "name": "Zwettl an der Rodl",
    "lat": "48.46552",
    "lng": "14.27133"
  },
  {
    "country": "AT",
    "name": "Zwentendorf",
    "lat": "48.3453",
    "lng": "15.91026"
  },
  {
    "country": "AT",
    "name": "Zurndorf",
    "lat": "47.98314",
    "lng": "17.00315"
  },
  {
    "country": "AT",
    "name": "Zöblen",
    "lat": "47.50772",
    "lng": "10.47971"
  },
  {
    "country": "AT",
    "name": "Zöbern",
    "lat": "47.51459",
    "lng": "16.13111"
  },
  {
    "country": "AT",
    "name": "Zistersdorf",
    "lat": "48.54252",
    "lng": "16.76136"
  },
  {
    "country": "AT",
    "name": "Zirl",
    "lat": "47.2741",
    "lng": "11.23961"
  },
  {
    "country": "AT",
    "name": "Zillingtal",
    "lat": "47.81442",
    "lng": "16.40928"
  },
  {
    "country": "AT",
    "name": "Zillingdorf",
    "lat": "47.85",
    "lng": "16.33333"
  },
  {
    "country": "AT",
    "name": "Ziersdorf",
    "lat": "48.5303",
    "lng": "15.92691"
  },
  {
    "country": "AT",
    "name": "Zeutschach",
    "lat": "47.06667",
    "lng": "14.36667"
  },
  {
    "country": "AT",
    "name": "Zettling",
    "lat": "46.9522",
    "lng": "15.4342"
  },
  {
    "country": "AT",
    "name": "Zerlach",
    "lat": "46.94593",
    "lng": "15.65093"
  },
  {
    "country": "AT",
    "name": "Zeltweg",
    "lat": "47.18333",
    "lng": "14.75"
  },
  {
    "country": "AT",
    "name": "Zellerndorf",
    "lat": "48.69657",
    "lng": "15.95841"
  },
  {
    "country": "AT",
    "name": "Zellberg",
    "lat": "47.23333",
    "lng": "11.85"
  },
  {
    "country": "AT",
    "name": "Zell an der Pram",
    "lat": "48.31625",
    "lng": "13.62923"
  },
  {
    "country": "AT",
    "name": "Zell am Ziller",
    "lat": "47.23333",
    "lng": "11.88333"
  },
  {
    "country": "AT",
    "name": "Zell am See",
    "lat": "47.32306",
    "lng": "12.79839"
  },
  {
    "country": "AT",
    "name": "Zell am Pettenfirst",
    "lat": "48.08009",
    "lng": "13.59936"
  },
  {
    "country": "AT",
    "name": "Zell am Moos",
    "lat": "47.9",
    "lng": "13.31667"
  },
  {
    "country": "AT",
    "name": "Zell",
    "lat": "47.58333",
    "lng": "12.15"
  },
  {
    "country": "AT",
    "name": "Zeiselmauer",
    "lat": "48.32852",
    "lng": "16.17565"
  },
  {
    "country": "AT",
    "name": "Zeillern",
    "lat": "48.13029",
    "lng": "14.8076"
  },
  {
    "country": "AT",
    "name": "Zederhaus",
    "lat": "47.1557",
    "lng": "13.50576"
  },
  {
    "country": "AT",
    "name": "Zams",
    "lat": "47.15844",
    "lng": "10.5897"
  },
  {
    "country": "AT",
    "name": "Zagersdorf",
    "lat": "47.76471",
    "lng": "16.51382"
  },
  {
    "country": "AT",
    "name": "Ybbsitz",
    "lat": "47.94745",
    "lng": "14.8918"
  },
  {
    "country": "AT",
    "name": "Ybbs an der Donau",
    "lat": "48.16667",
    "lng": "15.08333"
  },
  {
    "country": "AT",
    "name": "Würmla",
    "lat": "48.25497",
    "lng": "15.86031"
  },
  {
    "country": "AT",
    "name": "Würflach",
    "lat": "47.77648",
    "lng": "16.05463"
  },
  {
    "country": "AT",
    "name": "Wundschuh",
    "lat": "46.92639",
    "lng": "15.45111"
  },
  {
    "country": "AT",
    "name": "Wullersdorf",
    "lat": "48.62792",
    "lng": "16.10089"
  },
  {
    "country": "AT",
    "name": "Wulkaprodersdorf",
    "lat": "47.79753",
    "lng": "16.50447"
  },
  {
    "country": "AT",
    "name": "Wörth an der Lafnitz",
    "lat": "47.21368",
    "lng": "16.08081"
  },
  {
    "country": "AT",
    "name": "Wörterberg",
    "lat": "47.21667",
    "lng": "16.1"
  },
  {
    "country": "AT",
    "name": "Wörschach",
    "lat": "47.55",
    "lng": "14.15"
  },
  {
    "country": "AT",
    "name": "Wörgl",
    "lat": "47.48906",
    "lng": "12.06174"
  },
  {
    "country": "AT",
    "name": "Wördern",
    "lat": "48.334",
    "lng": "16.21016"
  },
  {
    "country": "AT",
    "name": "Wöllersdorf",
    "lat": "47.865",
    "lng": "16.17119"
  },
  {
    "country": "AT",
    "name": "Wolkersdorf im Weinviertel",
    "lat": "48.38333",
    "lng": "16.51667"
  },
  {
    "country": "AT",
    "name": "Wolfurt",
    "lat": "47.46667",
    "lng": "9.75"
  },
  {
    "country": "AT",
    "name": "Wolfsthal",
    "lat": "48.13333",
    "lng": "17"
  },
  {
    "country": "AT",
    "name": "Wolfsgraben",
    "lat": "48.1587",
    "lng": "16.12098"
  },
  {
    "country": "AT",
    "name": "Wolfsegg am Hausruck",
    "lat": "48.10669",
    "lng": "13.67274"
  },
  {
    "country": "AT",
    "name": "Wolfsberg im Schwarzautal",
    "lat": "46.84389",
    "lng": "15.65889"
  },
  {
    "country": "AT",
    "name": "Wolfsberg",
    "lat": "46.84056",
    "lng": "14.84417"
  },
  {
    "country": "AT",
    "name": "Wolfsbach",
    "lat": "48.07893",
    "lng": "14.67029"
  },
  {
    "country": "AT",
    "name": "Wolfpassing",
    "lat": "48.07785",
    "lng": "15.06453"
  },
  {
    "country": "AT",
    "name": "Wölfnitz",
    "lat": "46.66639",
    "lng": "14.25806"
  },
  {
    "country": "AT",
    "name": "Wolfau",
    "lat": "47.25",
    "lng": "16.1"
  },
  {
    "country": "AT",
    "name": "Wippenham",
    "lat": "48.2225",
    "lng": "13.3792"
  },
  {
    "country": "AT",
    "name": "Winzendorf",
    "lat": "47.81154",
    "lng": "16.113"
  },
  {
    "country": "AT",
    "name": "Winklern bei Oberwölz",
    "lat": "47.2",
    "lng": "14.23333"
  },
  {
    "country": "AT",
    "name": "Winklern",
    "lat": "46.87361",
    "lng": "12.87472"
  },
  {
    "country": "AT",
    "name": "Winklarn",
    "lat": "48.09135",
    "lng": "14.84819"
  },
  {
    "country": "AT",
    "name": "Windischgarsten",
    "lat": "47.72223",
    "lng": "14.32755"
  },
  {
    "country": "AT",
    "name": "Windigsteig",
    "lat": "48.76667",
    "lng": "15.28333"
  },
  {
    "country": "AT",
    "name": "Windhag",
    "lat": "47.97906",
    "lng": "14.80245"
  },
  {
    "country": "AT",
    "name": "Windhaag bei Perg",
    "lat": "48.28582",
    "lng": "14.68091"
  },
  {
    "country": "AT",
    "name": "Windhaag bei Freistadt",
    "lat": "48.58774",
    "lng": "14.56186"
  },
  {
    "country": "AT",
    "name": "Winden am See",
    "lat": "47.9501",
    "lng": "16.7556"
  },
  {
    "country": "AT",
    "name": "Wimpassing an der Leitha",
    "lat": "47.91667",
    "lng": "16.43333"
  },
  {
    "country": "AT",
    "name": "Wimpassing",
    "lat": "48.16667",
    "lng": "13.98333"
  },
  {
    "country": "AT",
    "name": "Wimpassing im Schwarzatale",
    "lat": "47.70295",
    "lng": "16.03334"
  },
  {
    "country": "AT",
    "name": "Wilten",
    "lat": "47.25829",
    "lng": "11.38808"
  },
  {
    "country": "AT",
    "name": "Willendorf am Steinfelde",
    "lat": "47.78929",
    "lng": "16.05686"
  },
  {
    "country": "AT",
    "name": "Wilhelmsburg",
    "lat": "48.10571",
    "lng": "15.60539"
  },
  {
    "country": "AT",
    "name": "Wilfleinsdorf",
    "lat": "48.01667",
    "lng": "16.71667"
  },
  {
    "country": "AT",
    "name": "Wilfersdorf",
    "lat": "48.58333",
    "lng": "16.63333"
  },
  {
    "country": "AT",
    "name": "Wildon",
    "lat": "46.88333",
    "lng": "15.51667"
  },
  {
    "country": "AT",
    "name": "Wildermieming",
    "lat": "47.31667",
    "lng": "11.01667"
  },
  {
    "country": "AT",
    "name": "Wildalpen",
    "lat": "47.65",
    "lng": "14.98333"
  },
  {
    "country": "AT",
    "name": "Wiesmath",
    "lat": "47.61667",
    "lng": "16.28333"
  },
  {
    "country": "AT",
    "name": "Wiesing",
    "lat": "47.40486",
    "lng": "11.79708"
  },
  {
    "country": "AT",
    "name": "Wiesfleck",
    "lat": "47.38458",
    "lng": "16.14552"
  },
  {
    "country": "AT",
    "name": "Wiesen",
    "lat": "47.73776",
    "lng": "16.33798"
  },
  {
    "country": "AT",
    "name": "Wieselburg",
    "lat": "48.13333",
    "lng": "15.13333"
  },
  {
    "country": "AT",
    "name": "Wies",
    "lat": "46.72028",
    "lng": "15.27194"
  },
  {
    "country": "AT",
    "name": "Wienersdorf",
    "lat": "48.00819",
    "lng": "16.29169"
  },
  {
    "country": "AT",
    "name": "Wiener Neustadt",
    "lat": "47.80485",
    "lng": "16.23196"
  },
  {
    "country": "AT",
    "name": "Wiener Neudorf",
    "lat": "48.08278",
    "lng": "16.31384"
  },
  {
    "country": "AT",
    "name": "Vienna",
    "lat": "48.20849",
    "lng": "16.37208"
  },
  {
    "country": "AT",
    "name": "Weyregg",
    "lat": "47.90294",
    "lng": "13.57193"
  },
  {
    "country": "AT",
    "name": "Weyer",
    "lat": "47.85717",
    "lng": "14.66409"
  },
  {
    "country": "AT",
    "name": "Wetzelsdorf",
    "lat": "47.05293",
    "lng": "15.39923"
  },
  {
    "country": "AT",
    "name": "Wettmannstätten",
    "lat": "46.83056",
    "lng": "15.38722"
  },
  {
    "country": "AT",
    "name": "Westendorf",
    "lat": "47.43208",
    "lng": "12.21406"
  },
  {
    "country": "AT",
    "name": "Wernstein am Inn",
    "lat": "48.50802",
    "lng": "13.461"
  },
  {
    "country": "AT",
    "name": "Wernersdorf",
    "lat": "46.71592",
    "lng": "15.20718"
  },
  {
    "country": "AT",
    "name": "Werndorf",
    "lat": "46.92417",
    "lng": "15.49083"
  },
  {
    "country": "AT",
    "name": "Wernberg",
    "lat": "46.61667",
    "lng": "13.93333"
  },
  {
    "country": "AT",
    "name": "Werfenweng",
    "lat": "47.46204",
    "lng": "13.25582"
  },
  {
    "country": "AT",
    "name": "Werfen",
    "lat": "47.47585",
    "lng": "13.1902"
  },
  {
    "country": "AT",
    "name": "Weppersdorf",
    "lat": "47.57954",
    "lng": "16.42679"
  },
  {
    "country": "AT",
    "name": "Wenns",
    "lat": "47.16667",
    "lng": "10.73333"
  },
  {
    "country": "AT",
    "name": "Weng im Innkreis",
    "lat": "48.23508",
    "lng": "13.17801"
  },
  {
    "country": "AT",
    "name": "Wendling",
    "lat": "48.23182",
    "lng": "13.66622"
  },
  {
    "country": "AT",
    "name": "Wels",
    "lat": "48.16667",
    "lng": "14.03333"
  },
  {
    "country": "AT",
    "name": "Weiz",
    "lat": "47.21667",
    "lng": "15.61667"
  },
  {
    "country": "AT",
    "name": "Weitra",
    "lat": "48.7",
    "lng": "14.88333"
  },
  {
    "country": "AT",
    "name": "Weitersfelden",
    "lat": "48.4773",
    "lng": "14.72546"
  },
  {
    "country": "AT",
    "name": "Weitersfeld",
    "lat": "48.78097",
    "lng": "15.81345"
  },
  {
    "country": "AT",
    "name": "Weitensfeld",
    "lat": "46.84743",
    "lng": "14.19213"
  },
  {
    "country": "AT",
    "name": "Weiten",
    "lat": "48.29564",
    "lng": "15.2601"
  },
  {
    "country": "AT",
    "name": "Weistrach",
    "lat": "48.05",
    "lng": "14.58333"
  },
  {
    "country": "AT",
    "name": "Weißkirchen in Steiermark",
    "lat": "47.15409",
    "lng": "14.73882"
  },
  {
    "country": "AT",
    "name": "Weisskirchen an der Traun",
    "lat": "48.16202",
    "lng": "14.12395"
  },
  {
    "country": "AT",
    "name": "Weißenkirchen in der Wachau",
    "lat": "48.3979",
    "lng": "15.46931"
  },
  {
    "country": "AT",
    "name": "Weißenbach bei Liezen",
    "lat": "47.56667",
    "lng": "14.21667"
  },
  {
    "country": "AT",
    "name": "Weissenbach an der Triesting",
    "lat": "47.98211",
    "lng": "16.03935"
  },
  {
    "country": "AT",
    "name": "Weissenbach am Lech",
    "lat": "47.44162",
    "lng": "10.64071"
  },
  {
    "country": "AT",
    "name": "Weissach",
    "lat": "47.57091",
    "lng": "12.16255"
  },
  {
    "country": "AT",
    "name": "Weinzierl bei Krems",
    "lat": "48.4",
    "lng": "15.6"
  },
  {
    "country": "AT",
    "name": "Weinzierl am Walde",
    "lat": "48.43211",
    "lng": "15.4321"
  },
  {
    "country": "AT",
    "name": "Weingraben",
    "lat": "47.51393",
    "lng": "16.36375"
  },
  {
    "country": "AT",
    "name": "Weinburg am Saßbach",
    "lat": "46.75361",
    "lng": "15.72111"
  },
  {
    "country": "AT",
    "name": "Weinburg",
    "lat": "48.11351",
    "lng": "15.53295"
  },
  {
    "country": "AT",
    "name": "Weiler",
    "lat": "47.29972",
    "lng": "9.65"
  },
  {
    "country": "AT",
    "name": "Weilbach",
    "lat": "48.27725",
    "lng": "13.37165"
  },
  {
    "country": "AT",
    "name": "Weikersdorf am Steinfelde",
    "lat": "47.80612",
    "lng": "16.14389"
  },
  {
    "country": "AT",
    "name": "Weikendorf",
    "lat": "48.34438",
    "lng": "16.76651"
  },
  {
    "country": "AT",
    "name": "Weigelsdorf",
    "lat": "47.95",
    "lng": "16.4"
  },
  {
    "country": "AT",
    "name": "Weidling",
    "lat": "48.291",
    "lng": "16.30865"
  },
  {
    "country": "AT",
    "name": "Weiden bei Rechnitz",
    "lat": "47.3",
    "lng": "16.35"
  },
  {
    "country": "AT",
    "name": "Weiden am See",
    "lat": "47.92532",
    "lng": "16.86899"
  },
  {
    "country": "AT",
    "name": "Weichselbaum",
    "lat": "46.9416",
    "lng": "16.1871"
  },
  {
    "country": "AT",
    "name": "Weibern",
    "lat": "48.18333",
    "lng": "13.7"
  },
  {
    "country": "AT",
    "name": "Weer",
    "lat": "47.30375",
    "lng": "11.64498"
  },
  {
    "country": "AT",
    "name": "Wattens",
    "lat": "47.29419",
    "lng": "11.5907"
  },
  {
    "country": "AT",
    "name": "Wattenberg",
    "lat": "47.28333",
    "lng": "11.6"
  },
  {
    "country": "AT",
    "name": "Wartmannstetten",
    "lat": "47.69359",
    "lng": "16.07506"
  },
  {
    "country": "AT",
    "name": "Warth",
    "lat": "47.65",
    "lng": "16.11667"
  },
  {
    "country": "AT",
    "name": "Warth",
    "lat": "47.25",
    "lng": "10.18333"
  },
  {
    "country": "AT",
    "name": "Wartberg ob der Aist",
    "lat": "48.34792",
    "lng": "14.50796"
  },
  {
    "country": "AT",
    "name": "Wartberg an der Krems",
    "lat": "47.98909",
    "lng": "14.11863"
  },
  {
    "country": "AT",
    "name": "Wartberg",
    "lat": "47.52717",
    "lng": "15.48095"
  },
  {
    "country": "AT",
    "name": "Wängle",
    "lat": "47.48658",
    "lng": "10.68995"
  },
  {
    "country": "AT",
    "name": "Wang",
    "lat": "48.04538",
    "lng": "15.02672"
  },
  {
    "country": "AT",
    "name": "Waltendorf",
    "lat": "47.06667",
    "lng": "15.46667"
  },
  {
    "country": "AT",
    "name": "Wals",
    "lat": "47.78333",
    "lng": "12.96667"
  },
  {
    "country": "AT",
    "name": "Walpersbach",
    "lat": "47.71667",
    "lng": "16.23333"
  },
  {
    "country": "AT",
    "name": "Wallsee",
    "lat": "48.16667",
    "lng": "14.71667"
  },
  {
    "country": "AT",
    "name": "Wallern im Burgenland",
    "lat": "47.72847",
    "lng": "16.93706"
  },
  {
    "country": "AT",
    "name": "Wallern an der Trattnach",
    "lat": "48.23296",
    "lng": "13.9462"
  },
  {
    "country": "AT",
    "name": "Waldzell",
    "lat": "48.13562",
    "lng": "13.42701"
  },
  {
    "country": "AT",
    "name": "Waldprechting",
    "lat": "47.9",
    "lng": "13.11667"
  },
  {
    "country": "AT",
    "name": "Waldneukirchen",
    "lat": "47.99854",
    "lng": "14.25879"
  },
  {
    "country": "AT",
    "name": "Waldkirchen an der Thaya",
    "lat": "48.93333",
    "lng": "15.35"
  },
  {
    "country": "AT",
    "name": "Waldkirchen am Wesen",
    "lat": "48.44059",
    "lng": "13.82174"
  },
  {
    "country": "AT",
    "name": "Walding",
    "lat": "48.35209",
    "lng": "14.1576"
  },
  {
    "country": "AT",
    "name": "Wald im Pinzgau",
    "lat": "47.24643",
    "lng": "12.22731"
  },
  {
    "country": "AT",
    "name": "Waldhausen",
    "lat": "48.52183",
    "lng": "15.2625"
  },
  {
    "country": "AT",
    "name": "Waldenstein",
    "lat": "48.72845",
    "lng": "15.01419"
  },
  {
    "country": "AT",
    "name": "Waldegg",
    "lat": "47.86852",
    "lng": "16.05154"
  },
  {
    "country": "AT",
    "name": "Wald am Schoberpaß",
    "lat": "47.44936",
    "lng": "14.67567"
  },
  {
    "country": "AT",
    "name": "Walchsee",
    "lat": "47.65163",
    "lng": "12.31868"
  },
  {
    "country": "AT",
    "name": "Walchen",
    "lat": "47.28822",
    "lng": "12.68739"
  },
  {
    "country": "AT",
    "name": "Waizenkirchen",
    "lat": "48.33018",
    "lng": "13.85754"
  },
  {
    "country": "AT",
    "name": "Waiern",
    "lat": "46.73028",
    "lng": "14.08194"
  },
  {
    "country": "AT",
    "name": "Waidring",
    "lat": "47.58333",
    "lng": "12.56667"
  },
  {
    "country": "AT",
    "name": "Waidmannsfeld",
    "lat": "47.87042",
    "lng": "15.98116"
  },
  {
    "country": "AT",
    "name": "Waidhofen an der Ybbs",
    "lat": "47.96004",
    "lng": "14.77361"
  },
  {
    "country": "AT",
    "name": "Waidhofen an der Thaya",
    "lat": "48.81667",
    "lng": "15.28333"
  },
  {
    "country": "AT",
    "name": "Wagram",
    "lat": "48.23828",
    "lng": "14.22996"
  },
  {
    "country": "AT",
    "name": "Wagrain",
    "lat": "47.33528",
    "lng": "13.29889"
  },
  {
    "country": "AT",
    "name": "Wagnitz",
    "lat": "46.98333",
    "lng": "15.46667"
  },
  {
    "country": "AT",
    "name": "Wagna",
    "lat": "46.76682",
    "lng": "15.55906"
  },
  {
    "country": "AT",
    "name": "Vösendorf",
    "lat": "48.12107",
    "lng": "16.34036"
  },
  {
    "country": "AT",
    "name": "Murau",
    "lat": "47.11056",
    "lng": "14.16944"
  },
  {
    "country": "AT",
    "name": "Vorderthiersee",
    "lat": "47.58333",
    "lng": "12.1"
  },
  {
    "country": "AT",
    "name": "Vordernberg",
    "lat": "47.48809",
    "lng": "14.99436"
  },
  {
    "country": "AT",
    "name": "Vorderhornbach",
    "lat": "47.37009",
    "lng": "10.53947"
  },
  {
    "country": "AT",
    "name": "Vorchdorf",
    "lat": "48.00388",
    "lng": "13.92122"
  },
  {
    "country": "AT",
    "name": "Vorau",
    "lat": "47.40548",
    "lng": "15.88754"
  },
  {
    "country": "AT",
    "name": "Vomp",
    "lat": "47.33333",
    "lng": "11.68333"
  },
  {
    "country": "AT",
    "name": "Völs",
    "lat": "47.25",
    "lng": "11.33333"
  },
  {
    "country": "AT",
    "name": "Völkermarkt",
    "lat": "46.66222",
    "lng": "14.63444"
  },
  {
    "country": "AT",
    "name": "Völkendorf",
    "lat": "46.60806",
    "lng": "13.83153"
  },
  {
    "country": "AT",
    "name": "Voldöpp",
    "lat": "47.44469",
    "lng": "11.88343"
  },
  {
    "country": "AT",
    "name": "Volders",
    "lat": "47.28333",
    "lng": "11.56667"
  },
  {
    "country": "AT",
    "name": "Voitsberg",
    "lat": "47.04445",
    "lng": "15.15313"
  },
  {
    "country": "AT",
    "name": "Vöcklamarkt",
    "lat": "48.0025",
    "lng": "13.48383"
  },
  {
    "country": "AT",
    "name": "Vöcklabruck",
    "lat": "48.00279",
    "lng": "13.65652"
  },
  {
    "country": "AT",
    "name": "Vitis",
    "lat": "48.75964",
    "lng": "15.18259"
  },
  {
    "country": "AT",
    "name": "Virgen",
    "lat": "47.00367",
    "lng": "12.45741"
  },
  {
    "country": "AT",
    "name": "Vils",
    "lat": "47.55",
    "lng": "10.63333"
  },
  {
    "country": "AT",
    "name": "Villach",
    "lat": "46.61028",
    "lng": "13.85583"
  },
  {
    "country": "AT",
    "name": "Viktring",
    "lat": "46.59194",
    "lng": "14.26917"
  },
  {
    "country": "AT",
    "name": "Viktorsberg",
    "lat": "47.30092",
    "lng": "9.67484"
  },
  {
    "country": "AT",
    "name": "Bad Vigaun",
    "lat": "47.66667",
    "lng": "13.13333"
  },
  {
    "country": "AT",
    "name": "Viehofen",
    "lat": "48.21667",
    "lng": "15.61667"
  },
  {
    "country": "AT",
    "name": "Viehhofen",
    "lat": "47.36667",
    "lng": "12.73333"
  },
  {
    "country": "AT",
    "name": "Viehhausen",
    "lat": "47.78333",
    "lng": "12.98333"
  },
  {
    "country": "AT",
    "name": "Viechtwang",
    "lat": "47.91531",
    "lng": "13.96345"
  },
  {
    "country": "AT",
    "name": "Velm",
    "lat": "48.03333",
    "lng": "16.43333"
  },
  {
    "country": "AT",
    "name": "Velden am Wörthersee",
    "lat": "46.61301",
    "lng": "14.0413"
  },
  {
    "country": "AT",
    "name": "Veitsch",
    "lat": "47.57815",
    "lng": "15.4945"
  },
  {
    "country": "AT",
    "name": "Utzenaich",
    "lat": "48.27622",
    "lng": "13.46091"
  },
  {
    "country": "AT",
    "name": "Uttendorf",
    "lat": "48.15887",
    "lng": "13.1218"
  },
  {
    "country": "AT",
    "name": "Uttendorf",
    "lat": "47.28333",
    "lng": "12.56667"
  },
  {
    "country": "AT",
    "name": "Utschtal",
    "lat": "47.4",
    "lng": "15.2"
  },
  {
    "country": "AT",
    "name": "Unterwart",
    "lat": "47.26399",
    "lng": "16.22901"
  },
  {
    "country": "AT",
    "name": "Unterwaltersdorf",
    "lat": "47.95",
    "lng": "16.41667"
  },
  {
    "country": "AT",
    "name": "Unterwagram",
    "lat": "48.21243",
    "lng": "15.64951"
  },
  {
    "country": "AT",
    "name": "Untertauern",
    "lat": "47.3",
    "lng": "13.5"
  },
  {
    "country": "AT",
    "name": "Unterstinkenbrunn",
    "lat": "48.6677",
    "lng": "16.34607"
  },
  {
    "country": "AT",
    "name": "Untersiebenbrunn",
    "lat": "48.25674",
    "lng": "16.74526"
  },
  {
    "country": "AT",
    "name": "Rohrbach an der Gölsen",
    "lat": "48.04699",
    "lng": "15.74169"
  },
  {
    "country": "AT",
    "name": "Unterpremstätten",
    "lat": "46.96472",
    "lng": "15.40417"
  },
  {
    "country": "AT",
    "name": "Unterperfuss",
    "lat": "47.26667",
    "lng": "11.25"
  },
  {
    "country": "AT",
    "name": "Unterlangkampfen",
    "lat": "47.55",
    "lng": "12.1"
  },
  {
    "country": "AT",
    "name": "Unterlamm",
    "lat": "46.97694",
    "lng": "16.06389"
  },
  {
    "country": "AT",
    "name": "Unterkohlstätten",
    "lat": "47.38333",
    "lng": "16.31667"
  },
  {
    "country": "AT",
    "name": "Grünburg",
    "lat": "47.97234",
    "lng": "14.26472"
  },
  {
    "country": "AT",
    "name": "Unterfrauenhaid",
    "lat": "47.57116",
    "lng": "16.49885"
  },
  {
    "country": "AT",
    "name": "Unterfladnitz",
    "lat": "47.18333",
    "lng": "15.66667"
  },
  {
    "country": "AT",
    "name": "Untere Fellach",
    "lat": "46.62504",
    "lng": "13.82681"
  },
  {
    "country": "AT",
    "name": "Unterbergla",
    "lat": "46.80746",
    "lng": "15.31516"
  },
  {
    "country": "AT",
    "name": "Unterauersbach",
    "lat": "46.86556",
    "lng": "15.77028"
  },
  {
    "country": "AT",
    "name": "Unken",
    "lat": "47.64966",
    "lng": "12.72946"
  },
  {
    "country": "AT",
    "name": "Ungerdorf",
    "lat": "47.08333",
    "lng": "15.66667"
  },
  {
    "country": "AT",
    "name": "Ungenach",
    "lat": "48.04756",
    "lng": "13.61472"
  },
  {
    "country": "AT",
    "name": "Umhausen",
    "lat": "47.13503",
    "lng": "10.92826"
  },
  {
    "country": "AT",
    "name": "Ulrichskirchen",
    "lat": "48.4",
    "lng": "16.48333"
  },
  {
    "country": "AT",
    "name": "Ulrichsberg",
    "lat": "48.67498",
    "lng": "13.91049"
  },
  {
    "country": "AT",
    "name": "Uderns",
    "lat": "47.31667",
    "lng": "11.86667"
  },
  {
    "country": "AT",
    "name": "Übersbach",
    "lat": "47.02318",
    "lng": "16.05517"
  },
  {
    "country": "AT",
    "name": "Übersaxen",
    "lat": "47.25284",
    "lng": "9.6708"
  },
  {
    "country": "AT",
    "name": "Übelbach",
    "lat": "47.22534",
    "lng": "15.23615"
  },
  {
    "country": "AT",
    "name": "Tweng",
    "lat": "47.18333",
    "lng": "13.6"
  },
  {
    "country": "AT",
    "name": "Türnitz",
    "lat": "47.93095",
    "lng": "15.49295"
  },
  {
    "country": "AT",
    "name": "Turnau",
    "lat": "47.55776",
    "lng": "15.33739"
  },
  {
    "country": "AT",
    "name": "Tulln",
    "lat": "48.32829",
    "lng": "16.05858"
  },
  {
    "country": "AT",
    "name": "Tulfes",
    "lat": "47.25806",
    "lng": "11.53333"
  },
  {
    "country": "AT",
    "name": "Tulbing",
    "lat": "48.29336",
    "lng": "16.12226"
  },
  {
    "country": "AT",
    "name": "Tschanigraben",
    "lat": "47.01667",
    "lng": "16.3"
  },
  {
    "country": "AT",
    "name": "Tschagguns",
    "lat": "47.07391",
    "lng": "9.90267"
  },
  {
    "country": "AT",
    "name": "Trumau",
    "lat": "47.99348",
    "lng": "16.34268"
  },
  {
    "country": "AT",
    "name": "Trössing",
    "lat": "46.81667",
    "lng": "15.81667"
  },
  {
    "country": "AT",
    "name": "Trofaiach",
    "lat": "47.42524",
    "lng": "15.00681"
  },
  {
    "country": "AT",
    "name": "Tristach",
    "lat": "46.81611",
    "lng": "12.78972"
  },
  {
    "country": "AT",
    "name": "Trins",
    "lat": "47.08333",
    "lng": "11.41667"
  },
  {
    "country": "AT",
    "name": "Triebendorf",
    "lat": "47.11667",
    "lng": "14.23333"
  },
  {
    "country": "AT",
    "name": "Trieben",
    "lat": "47.48574",
    "lng": "14.48744"
  },
  {
    "country": "AT",
    "name": "Tribuswinkel",
    "lat": "48.00623",
    "lng": "16.27075"
  },
  {
    "country": "AT",
    "name": "Treibach",
    "lat": "46.86667",
    "lng": "14.46667"
  },
  {
    "country": "AT",
    "name": "Treglwang",
    "lat": "47.47458",
    "lng": "14.59083"
  },
  {
    "country": "AT",
    "name": "Trebesing",
    "lat": "46.88639",
    "lng": "13.51028"
  },
  {
    "country": "AT",
    "name": "Trautmannsdorf in Oststeiermark",
    "lat": "46.8753",
    "lng": "15.88451"
  },
  {
    "country": "AT",
    "name": "Trautmannsdorf an der Leitha",
    "lat": "48.02357",
    "lng": "16.63266"
  },
  {
    "country": "AT",
    "name": "Trausdorf an der Wulka",
    "lat": "47.8135",
    "lng": "16.5576"
  },
  {
    "country": "AT",
    "name": "Bad Traunstein",
    "lat": "48.4385",
    "lng": "15.11712"
  },
  {
    "country": "AT",
    "name": "Traunkirchen",
    "lat": "47.84462",
    "lng": "13.78939"
  },
  {
    "country": "AT",
    "name": "Traun",
    "lat": "48.22086",
    "lng": "14.23833"
  },
  {
    "country": "AT",
    "name": "Trattenbach",
    "lat": "47.6",
    "lng": "15.86667"
  },
  {
    "country": "AT",
    "name": "Traismauer",
    "lat": "48.35",
    "lng": "15.73333"
  },
  {
    "country": "AT",
    "name": "Traiskirchen",
    "lat": "48.01485",
    "lng": "16.29324"
  },
  {
    "country": "AT",
    "name": "Traisen",
    "lat": "48.03333",
    "lng": "15.6"
  },
  {
    "country": "AT",
    "name": "Trahütten",
    "lat": "46.825",
    "lng": "15.15694"
  },
  {
    "country": "AT",
    "name": "Tragwein",
    "lat": "48.33314",
    "lng": "14.62237"
  },
  {
    "country": "AT",
    "name": "Traboch",
    "lat": "47.37705",
    "lng": "14.98647"
  },
  {
    "country": "AT",
    "name": "Tobaj",
    "lat": "47.08333",
    "lng": "16.3"
  },
  {
    "country": "AT",
    "name": "Tobadill",
    "lat": "47.12513",
    "lng": "10.51404"
  },
  {
    "country": "AT",
    "name": "Timelkam",
    "lat": "48.00394",
    "lng": "13.6076"
  },
  {
    "country": "AT",
    "name": "Tieschen",
    "lat": "46.78611",
    "lng": "15.94222"
  },
  {
    "country": "AT",
    "name": "Tiefgraben",
    "lat": "47.87385",
    "lng": "13.30591"
  },
  {
    "country": "AT",
    "name": "Thüringen",
    "lat": "47.2",
    "lng": "9.76667"
  },
  {
    "country": "AT",
    "name": "Thumersbach",
    "lat": "47.32952",
    "lng": "12.81675"
  },
  {
    "country": "AT",
    "name": "Thörl",
    "lat": "47.51952",
    "lng": "15.22276"
  },
  {
    "country": "AT",
    "name": "Thomatal",
    "lat": "47.06667",
    "lng": "13.75"
  },
  {
    "country": "AT",
    "name": "Thomasberg",
    "lat": "47.56667",
    "lng": "16.13333"
  },
  {
    "country": "AT",
    "name": "Theresienfeld",
    "lat": "47.85",
    "lng": "16.23333"
  },
  {
    "country": "AT",
    "name": "Thaya",
    "lat": "48.85489",
    "lng": "15.28902"
  },
  {
    "country": "AT",
    "name": "Thaur",
    "lat": "47.29476",
    "lng": "11.47529"
  },
  {
    "country": "AT",
    "name": "Thalheim bei Wels",
    "lat": "48.15",
    "lng": "14.03333"
  },
  {
    "country": "AT",
    "name": "Thalgau",
    "lat": "47.84142",
    "lng": "13.25325"
  },
  {
    "country": "AT",
    "name": "Teufenbach",
    "lat": "47.1287",
    "lng": "14.35913"
  },
  {
    "country": "AT",
    "name": "Ternitz",
    "lat": "47.71565",
    "lng": "16.03575"
  },
  {
    "country": "AT",
    "name": "Ternberg",
    "lat": "47.94518",
    "lng": "14.3587"
  },
  {
    "country": "AT",
    "name": "Terfens",
    "lat": "47.32355",
    "lng": "11.64388"
  },
  {
    "country": "AT",
    "name": "Telfs",
    "lat": "47.30707",
    "lng": "11.06817"
  },
  {
    "country": "AT",
    "name": "Telfes im Stubai",
    "lat": "47.16667",
    "lng": "11.36667"
  },
  {
    "country": "AT",
    "name": "Teesdorf",
    "lat": "47.95",
    "lng": "16.28333"
  },
  {
    "country": "AT",
    "name": "Taxenbach",
    "lat": "47.29116",
    "lng": "12.96215"
  },
  {
    "country": "AT",
    "name": "Taxach",
    "lat": "47.7261",
    "lng": "13.07184"
  },
  {
    "country": "AT",
    "name": "Tauplitz",
    "lat": "47.56005",
    "lng": "14.01293"
  },
  {
    "country": "AT",
    "name": "Taufkirchen an der Trattnach",
    "lat": "48.24731",
    "lng": "13.74767"
  },
  {
    "country": "AT",
    "name": "Tattendorf",
    "lat": "47.95",
    "lng": "16.3"
  },
  {
    "country": "AT",
    "name": "Tarrenz",
    "lat": "47.26667",
    "lng": "10.76667"
  },
  {
    "country": "AT",
    "name": "Tannheim",
    "lat": "47.49934",
    "lng": "10.51641"
  },
  {
    "country": "AT",
    "name": "Tamsweg",
    "lat": "47.12808",
    "lng": "13.81102"
  },
  {
    "country": "AT",
    "name": "Taiskirchen im Innkreis",
    "lat": "48.26468",
    "lng": "13.57318"
  },
  {
    "country": "AT",
    "name": "Tadten",
    "lat": "47.7642",
    "lng": "16.9865"
  },
  {
    "country": "AT",
    "name": "Sulzberg",
    "lat": "47.52178",
    "lng": "9.91353"
  },
  {
    "country": "AT",
    "name": "Sulz",
    "lat": "47.28721",
    "lng": "9.65183"
  },
  {
    "country": "AT",
    "name": "Sulztal an der Weinstraße",
    "lat": "46.68333",
    "lng": "15.55"
  },
  {
    "country": "AT",
    "name": "Stummerberg",
    "lat": "47.28333",
    "lng": "11.91667"
  },
  {
    "country": "AT",
    "name": "Stumm",
    "lat": "47.29052",
    "lng": "11.88755"
  },
  {
    "country": "AT",
    "name": "Stuhlfelden",
    "lat": "47.28761",
    "lng": "12.52755"
  },
  {
    "country": "AT",
    "name": "Studenzen",
    "lat": "47.00583",
    "lng": "15.75417"
  },
  {
    "country": "AT",
    "name": "Stubenberg",
    "lat": "47.2446",
    "lng": "15.80027"
  },
  {
    "country": "AT",
    "name": "Stronsdorf",
    "lat": "48.65157",
    "lng": "16.2989"
  },
  {
    "country": "AT",
    "name": "Strobl",
    "lat": "47.71667",
    "lng": "13.48333"
  },
  {
    "country": "AT",
    "name": "Strengen",
    "lat": "47.12589",
    "lng": "10.46199"
  },
  {
    "country": "AT",
    "name": "Strengberg",
    "lat": "48.14685",
    "lng": "14.65147"
  },
  {
    "country": "AT",
    "name": "Strem",
    "lat": "47.04498",
    "lng": "16.41426"
  },
  {
    "country": "AT",
    "name": "Stratzing",
    "lat": "48.45",
    "lng": "15.6"
  },
  {
    "country": "AT",
    "name": "Strasswalchen",
    "lat": "47.97947",
    "lng": "13.25535"
  },
  {
    "country": "AT",
    "name": "Straß in Steiermark",
    "lat": "46.72722",
    "lng": "15.62444"
  },
  {
    "country": "AT",
    "name": "Strasshof an der Nordbahn",
    "lat": "48.31667",
    "lng": "16.66667"
  },
  {
    "country": "AT",
    "name": "Strassham",
    "lat": "48.28348",
    "lng": "14.14524"
  },
  {
    "country": "AT",
    "name": "Straßgang",
    "lat": "47.03333",
    "lng": "15.4"
  },
  {
    "country": "AT",
    "name": "Strassengel",
    "lat": "47.11573",
    "lng": "15.33288"
  },
  {
    "country": "AT",
    "name": "Strassen",
    "lat": "46.75389",
    "lng": "12.48417"
  },
  {
    "country": "AT",
    "name": "Straßburg-Stadt",
    "lat": "46.89444",
    "lng": "14.32861"
  },
  {
    "country": "AT",
    "name": "Strass im Zillertal",
    "lat": "47.39556",
    "lng": "11.81966"
  },
  {
    "country": "AT",
    "name": "Strass",
    "lat": "48.46667",
    "lng": "15.73333"
  },
  {
    "country": "AT",
    "name": "Strallegg",
    "lat": "47.41165",
    "lng": "15.72534"
  },
  {
    "country": "AT",
    "name": "Straden",
    "lat": "46.80917",
    "lng": "15.86806"
  },
  {
    "country": "AT",
    "name": "Stotzing",
    "lat": "47.90688",
    "lng": "16.5458"
  },
  {
    "country": "AT",
    "name": "Stössing",
    "lat": "48.12267",
    "lng": "15.81379"
  },
  {
    "country": "AT",
    "name": "Stoob",
    "lat": "47.52845",
    "lng": "16.4776"
  },
  {
    "country": "AT",
    "name": "Stollhofen",
    "lat": "48.35226",
    "lng": "15.75963"
  },
  {
    "country": "AT",
    "name": "Stockerau",
    "lat": "48.38333",
    "lng": "16.21667"
  },
  {
    "country": "AT",
    "name": "Stockenboi",
    "lat": "46.72611",
    "lng": "13.52306"
  },
  {
    "country": "AT",
    "name": "Stiwoll",
    "lat": "47.1",
    "lng": "15.21667"
  },
  {
    "country": "AT",
    "name": "Steinbrunn",
    "lat": "47.83333",
    "lng": "16.41667"
  },
  {
    "country": "AT",
    "name": "Stinatz",
    "lat": "47.20266",
    "lng": "16.13312"
  },
  {
    "country": "AT",
    "name": "Steyregg",
    "lat": "48.28513",
    "lng": "14.36995"
  },
  {
    "country": "AT",
    "name": "Steyr",
    "lat": "48.04274",
    "lng": "14.42127"
  },
  {
    "country": "AT",
    "name": "Steuerberg",
    "lat": "46.78804",
    "lng": "14.1129"
  },
  {
    "country": "AT",
    "name": "Stetten",
    "lat": "48.36667",
    "lng": "16.38333"
  },
  {
    "country": "AT",
    "name": "Stetteldorf am Wagram",
    "lat": "48.40815",
    "lng": "16.01862"
  },
  {
    "country": "AT",
    "name": "Stephanshart",
    "lat": "48.15",
    "lng": "14.81667"
  },
  {
    "country": "AT",
    "name": "Stenzengreith",
    "lat": "47.2",
    "lng": "15.51667"
  },
  {
    "country": "AT",
    "name": "Steinhaus",
    "lat": "48.11614",
    "lng": "14.0189"
  },
  {
    "country": "AT",
    "name": "Steinfeld",
    "lat": "46.75812",
    "lng": "13.24934"
  },
  {
    "country": "AT",
    "name": "Steinerkirchen an der Traun",
    "lat": "48.07911",
    "lng": "13.95796"
  },
  {
    "country": "AT",
    "name": "Steindorf am Ossiacher See",
    "lat": "46.69833",
    "lng": "14.00917"
  },
  {
    "country": "AT",
    "name": "Steinbach am Attersee",
    "lat": "47.83087",
    "lng": "13.54613"
  },
  {
    "country": "AT",
    "name": "Stein an der Donau",
    "lat": "48.40163",
    "lng": "15.58102"
  },
  {
    "country": "AT",
    "name": "Steinakirchen am Forst",
    "lat": "48.06965",
    "lng": "15.04801"
  },
  {
    "country": "AT",
    "name": "Steinach am Brenner",
    "lat": "47.08333",
    "lng": "11.46667"
  },
  {
    "country": "AT",
    "name": "Steinabrückl",
    "lat": "47.87053",
    "lng": "16.20277"
  },
  {
    "country": "AT",
    "name": "Stein",
    "lat": "46.99778",
    "lng": "16.08694"
  },
  {
    "country": "AT",
    "name": "Stegersbach",
    "lat": "47.16667",
    "lng": "16.16667"
  },
  {
    "country": "AT",
    "name": "Steeg",
    "lat": "47.24393",
    "lng": "10.29436"
  },
  {
    "country": "AT",
    "name": "Statzendorf",
    "lat": "48.30752",
    "lng": "15.64127"
  },
  {
    "country": "AT",
    "name": "Stattersdorf",
    "lat": "48.18333",
    "lng": "15.63333"
  },
  {
    "country": "AT",
    "name": "Stattegg",
    "lat": "47.13333",
    "lng": "15.41667"
  },
  {
    "country": "AT",
    "name": "Stanz bei Landeck",
    "lat": "47.14758",
    "lng": "10.5534"
  },
  {
    "country": "AT",
    "name": "Stanzach",
    "lat": "47.38333",
    "lng": "10.56667"
  },
  {
    "country": "AT",
    "name": "Stans",
    "lat": "47.36667",
    "lng": "11.71667"
  },
  {
    "country": "AT",
    "name": "Stams",
    "lat": "47.27603",
    "lng": "10.98315"
  },
  {
    "country": "AT",
    "name": "Stambach",
    "lat": "47.33333",
    "lng": "15.93333"
  },
  {
    "country": "AT",
    "name": "Stallhofen",
    "lat": "47.05",
    "lng": "15.21667"
  },
  {
    "country": "AT",
    "name": "Stallhof",
    "lat": "46.88333",
    "lng": "15.28333"
  },
  {
    "country": "AT",
    "name": "Stallehr",
    "lat": "47.13306",
    "lng": "9.85"
  },
  {
    "country": "AT",
    "name": "Stall",
    "lat": "46.89056",
    "lng": "13.03694"
  },
  {
    "country": "AT",
    "name": "Stainz bei Straden",
    "lat": "46.82444",
    "lng": "15.89222"
  },
  {
    "country": "AT",
    "name": "Stainz",
    "lat": "46.89444",
    "lng": "15.26722"
  },
  {
    "country": "AT",
    "name": "Stainach",
    "lat": "47.53343",
    "lng": "14.10872"
  },
  {
    "country": "AT",
    "name": "Stadtschlaining",
    "lat": "47.31667",
    "lng": "16.28333"
  },
  {
    "country": "AT",
    "name": "Stadl-Traun",
    "lat": "48.07963",
    "lng": "13.8614"
  },
  {
    "country": "AT",
    "name": "Stadl-Paura",
    "lat": "48.08333",
    "lng": "13.86667"
  },
  {
    "country": "AT",
    "name": "Stadl-Hausruck",
    "lat": "48.08255",
    "lng": "13.85213"
  },
  {
    "country": "AT",
    "name": "Stadl an der Mur",
    "lat": "47.08333",
    "lng": "13.96667"
  },
  {
    "country": "AT",
    "name": "Staatz",
    "lat": "48.67617",
    "lng": "16.48726"
  },
  {
    "country": "AT",
    "name": "Spratzern",
    "lat": "48.17044",
    "lng": "15.61844"
  },
  {
    "country": "AT",
    "name": "Spitz",
    "lat": "48.3656",
    "lng": "15.41416"
  },
  {
    "country": "AT",
    "name": "Spittal an der Drau",
    "lat": "46.8",
    "lng": "13.5"
  },
  {
    "country": "AT",
    "name": "Spital am Semmering",
    "lat": "47.61345",
    "lng": "15.75096"
  },
  {
    "country": "AT",
    "name": "Spital am Pyhrn",
    "lat": "47.66487",
    "lng": "14.34014"
  },
  {
    "country": "AT",
    "name": "Spillern",
    "lat": "48.38333",
    "lng": "16.25"
  },
  {
    "country": "AT",
    "name": "Spielfeld",
    "lat": "46.70556",
    "lng": "15.63722"
  },
  {
    "country": "AT",
    "name": "Spielberg bei Knittelfeld",
    "lat": "47.21667",
    "lng": "14.78333"
  },
  {
    "country": "AT",
    "name": "Spatenhof",
    "lat": "46.9625",
    "lng": "15.36111"
  },
  {
    "country": "AT",
    "name": "Spannberg",
    "lat": "48.46393",
    "lng": "16.73647"
  },
  {
    "country": "AT",
    "name": "Sooss",
    "lat": "47.98464",
    "lng": "16.21737"
  },
  {
    "country": "AT",
    "name": "Sonntagberg",
    "lat": "47.99561",
    "lng": "14.76065"
  },
  {
    "country": "AT",
    "name": "Sommerein",
    "lat": "47.98333",
    "lng": "16.65"
  },
  {
    "country": "AT",
    "name": "Sollenau",
    "lat": "47.89834",
    "lng": "16.24833"
  },
  {
    "country": "AT",
    "name": "Söll",
    "lat": "47.50378",
    "lng": "12.19221"
  },
  {
    "country": "AT",
    "name": "Sölden",
    "lat": "46.96667",
    "lng": "11"
  },
  {
    "country": "AT",
    "name": "Hall in Tirol",
    "lat": "47.28333",
    "lng": "11.51667"
  },
  {
    "country": "AT",
    "name": "Södingberg",
    "lat": "47.10703",
    "lng": "15.17169"
  },
  {
    "country": "AT",
    "name": "Söchau",
    "lat": "47.03333",
    "lng": "16.01667"
  },
  {
    "country": "AT",
    "name": "Soboth",
    "lat": "46.68139",
    "lng": "15.07833"
  },
  {
    "country": "AT",
    "name": "Sitzendorf an der Schmida",
    "lat": "48.59841",
    "lng": "15.94254"
  },
  {
    "country": "AT",
    "name": "Sittersdorf",
    "lat": "46.54444",
    "lng": "14.60583"
  },
  {
    "country": "AT",
    "name": "Sistrans",
    "lat": "47.23333",
    "lng": "11.45"
  },
  {
    "country": "AT",
    "name": "Sinabelkirchen",
    "lat": "47.102",
    "lng": "15.82795"
  },
  {
    "country": "AT",
    "name": "Simmering",
    "lat": "48.18333",
    "lng": "16.43333"
  },
  {
    "country": "AT",
    "name": "Silz",
    "lat": "47.26667",
    "lng": "10.93333"
  },
  {
    "country": "AT",
    "name": "Sillian",
    "lat": "46.75278",
    "lng": "12.42111"
  },
  {
    "country": "AT",
    "name": "Silbertal",
    "lat": "47.09368",
    "lng": "9.98314"
  },
  {
    "country": "AT",
    "name": "Sigmundsherberg",
    "lat": "48.68333",
    "lng": "15.75"
  },
  {
    "country": "AT",
    "name": "Sigless",
    "lat": "47.77533",
    "lng": "16.39503"
  },
  {
    "country": "AT",
    "name": "Siezenheim",
    "lat": "47.81529",
    "lng": "12.99039"
  },
  {
    "country": "AT",
    "name": "Sierning",
    "lat": "48.04343",
    "lng": "14.30935"
  },
  {
    "country": "AT",
    "name": "Sierndorf",
    "lat": "48.43024",
    "lng": "16.16658"
  },
  {
    "country": "AT",
    "name": "Sieghartskirchen",
    "lat": "48.25531",
    "lng": "16.01223"
  },
  {
    "country": "AT",
    "name": "Sieggraben",
    "lat": "47.65128",
    "lng": "16.37993"
  },
  {
    "country": "AT",
    "name": "Siegersdorf bei Herberstein",
    "lat": "47.2",
    "lng": "15.78333"
  },
  {
    "country": "AT",
    "name": "Siegendorf im Burgenland",
    "lat": "47.78098",
    "lng": "16.54232"
  },
  {
    "country": "AT",
    "name": "Sibratsgfäll",
    "lat": "47.42667",
    "lng": "10.03806"
  },
  {
    "country": "AT",
    "name": "Seyring",
    "lat": "48.33333",
    "lng": "16.48333"
  },
  {
    "country": "AT",
    "name": "Serfaus",
    "lat": "47.04018",
    "lng": "10.60339"
  },
  {
    "country": "AT",
    "name": "Senftenberg",
    "lat": "48.45222",
    "lng": "15.54452"
  },
  {
    "country": "AT",
    "name": "Semriach",
    "lat": "47.21667",
    "lng": "15.4"
  },
  {
    "country": "AT",
    "name": "Semmering",
    "lat": "47.63347",
    "lng": "15.82993"
  },
  {
    "country": "AT",
    "name": "Selzthal",
    "lat": "47.54988",
    "lng": "14.31201"
  },
  {
    "country": "AT",
    "name": "Seitenstetten Markt",
    "lat": "48.03333",
    "lng": "14.65"
  },
  {
    "country": "AT",
    "name": "Seiersberg",
    "lat": "47",
    "lng": "15.4"
  },
  {
    "country": "AT",
    "name": "Seibersdorf",
    "lat": "47.95858",
    "lng": "16.51842"
  },
  {
    "country": "AT",
    "name": "Seggauberg",
    "lat": "46.76667",
    "lng": "15.51667"
  },
  {
    "country": "AT",
    "name": "Seewalchen",
    "lat": "47.95246",
    "lng": "13.58382"
  },
  {
    "country": "AT",
    "name": "Seewalchen",
    "lat": "47.9",
    "lng": "13.13333"
  },
  {
    "country": "AT",
    "name": "Seekirchen am Wallersee",
    "lat": "47.9",
    "lng": "13.13333"
  },
  {
    "country": "AT",
    "name": "Seeham",
    "lat": "47.96746",
    "lng": "13.07699"
  },
  {
    "country": "AT",
    "name": "Seefeld in Tirol",
    "lat": "47.33016",
    "lng": "11.18786"
  },
  {
    "country": "AT",
    "name": "Seeboden",
    "lat": "46.81909",
    "lng": "13.5143"
  },
  {
    "country": "AT",
    "name": "Seebenstein",
    "lat": "47.69936",
    "lng": "16.14484"
  },
  {
    "country": "AT",
    "name": "Seebach",
    "lat": "46.61667",
    "lng": "13.86667"
  },
  {
    "country": "AT",
    "name": "See",
    "lat": "47.08333",
    "lng": "10.46667"
  },
  {
    "country": "AT",
    "name": "Seckau",
    "lat": "47.26667",
    "lng": "14.78333"
  },
  {
    "country": "AT",
    "name": "Sebersdorf",
    "lat": "47.1865",
    "lng": "15.9936"
  },
  {
    "country": "AT",
    "name": "Schwoich",
    "lat": "47.546",
    "lng": "12.14049"
  },
  {
    "country": "AT",
    "name": "Schwertberg",
    "lat": "48.2734",
    "lng": "14.58474"
  },
  {
    "country": "AT",
    "name": "Schwendt",
    "lat": "47.63182",
    "lng": "12.39266"
  },
  {
    "country": "AT",
    "name": "Schwendau",
    "lat": "47.19753",
    "lng": "11.85897"
  },
  {
    "country": "AT",
    "name": "Schweinbach",
    "lat": "48.34033",
    "lng": "14.42247"
  },
  {
    "country": "AT",
    "name": "Schweiggers",
    "lat": "48.66667",
    "lng": "15.06667"
  },
  {
    "country": "AT",
    "name": "Schwechat",
    "lat": "48.13333",
    "lng": "16.46667"
  },
  {
    "country": "AT",
    "name": "Schwaz",
    "lat": "47.35169",
    "lng": "11.71014"
  },
  {
    "country": "AT",
    "name": "Schwarzenbach an der Pielach",
    "lat": "47.93333",
    "lng": "15.38333"
  },
  {
    "country": "AT",
    "name": "Schwarzenbach",
    "lat": "47.63547",
    "lng": "16.35109"
  },
  {
    "country": "AT",
    "name": "Schwarzenau",
    "lat": "48.74436",
    "lng": "15.25838"
  },
  {
    "country": "AT",
    "name": "Schwarzau im Schwarzautal",
    "lat": "46.87886",
    "lng": "15.66421"
  },
  {
    "country": "AT",
    "name": "Schwarzau im Gebirge",
    "lat": "47.81223",
    "lng": "15.70581"
  },
  {
    "country": "AT",
    "name": "Schwarzau am Steinfeld",
    "lat": "47.73183",
    "lng": "16.17094"
  },
  {
    "country": "AT",
    "name": "Schwarzach im Pongau",
    "lat": "47.32048",
    "lng": "13.15171"
  },
  {
    "country": "AT",
    "name": "Schwarzach",
    "lat": "47.44904",
    "lng": "9.76213"
  },
  {
    "country": "AT",
    "name": "Schwanenstadt",
    "lat": "48.05537",
    "lng": "13.77505"
  },
  {
    "country": "AT",
    "name": "Schwanberg",
    "lat": "46.75833",
    "lng": "15.20833"
  },
  {
    "country": "AT",
    "name": "Schwadorf",
    "lat": "48.06936",
    "lng": "16.57957"
  },
  {
    "country": "AT",
    "name": "Schützen am Gebirge",
    "lat": "47.85233",
    "lng": "16.62334"
  },
  {
    "country": "AT",
    "name": "Schruns",
    "lat": "47.08028",
    "lng": "9.91917"
  },
  {
    "country": "AT",
    "name": "Schrems bei Frohnleiten",
    "lat": "47.28109",
    "lng": "15.35932"
  },
  {
    "country": "AT",
    "name": "Schrems",
    "lat": "48.78333",
    "lng": "15.06667"
  },
  {
    "country": "AT",
    "name": "Schrattenthal",
    "lat": "48.71815",
    "lng": "15.90939"
  },
  {
    "country": "AT",
    "name": "Schrattenberg",
    "lat": "48.72359",
    "lng": "16.72201"
  },
  {
    "country": "AT",
    "name": "Schrattenbach",
    "lat": "47.77902",
    "lng": "15.9906"
  },
  {
    "country": "AT",
    "name": "Schottwien",
    "lat": "47.65683",
    "lng": "15.8725"
  },
  {
    "country": "AT",
    "name": "Schörfling",
    "lat": "47.94544",
    "lng": "13.60408"
  },
  {
    "country": "AT",
    "name": "Schoppernau",
    "lat": "47.31205",
    "lng": "10.01646"
  },
  {
    "country": "AT",
    "name": "Schönwies",
    "lat": "47.19665",
    "lng": "10.65742"
  },
  {
    "country": "AT",
    "name": "Schönering",
    "lat": "48.29838",
    "lng": "14.16103"
  },
  {
    "country": "AT",
    "name": "Schöndorf",
    "lat": "48.00167",
    "lng": "13.6588"
  },
  {
    "country": "AT",
    "name": "Schönberg im Stubaital",
    "lat": "47.18333",
    "lng": "11.41667"
  },
  {
    "country": "AT",
    "name": "Schönbach",
    "lat": "48.45",
    "lng": "15.03333"
  },
  {
    "country": "AT",
    "name": "Schönau an der Triesting",
    "lat": "47.93452",
    "lng": "16.25376"
  },
  {
    "country": "AT",
    "name": "Schöder",
    "lat": "47.18333",
    "lng": "14.1"
  },
  {
    "country": "AT",
    "name": "Schnifis",
    "lat": "47.21667",
    "lng": "9.73306"
  },
  {
    "country": "AT",
    "name": "Schnepfau",
    "lat": "47.35206",
    "lng": "9.9452"
  },
  {
    "country": "AT",
    "name": "Schmirn",
    "lat": "47.08333",
    "lng": "11.56667"
  },
  {
    "country": "AT",
    "name": "Schlüsslberg",
    "lat": "48.21861",
    "lng": "13.87161"
  },
  {
    "country": "AT",
    "name": "Schlitters",
    "lat": "47.38045",
    "lng": "11.83888"
  },
  {
    "country": "AT",
    "name": "Schlins",
    "lat": "47.2",
    "lng": "9.7"
  },
  {
    "country": "AT",
    "name": "Schlierbach",
    "lat": "47.93636",
    "lng": "14.12018"
  },
  {
    "country": "AT",
    "name": "Schleinbach",
    "lat": "48.41992",
    "lng": "16.47809"
  },
  {
    "country": "AT",
    "name": "Schleedorf",
    "lat": "47.95",
    "lng": "13.15"
  },
  {
    "country": "AT",
    "name": "Schlatt",
    "lat": "48.07177",
    "lng": "13.78904"
  },
  {
    "country": "AT",
    "name": "Schladming",
    "lat": "47.39289",
    "lng": "13.68699"
  },
  {
    "country": "AT",
    "name": "Schildorn",
    "lat": "48.14564",
    "lng": "13.46314"
  },
  {
    "country": "AT",
    "name": "Schiefling am See",
    "lat": "46.60444",
    "lng": "14.0975"
  },
  {
    "country": "AT",
    "name": "Schenkenfelden",
    "lat": "48.50273",
    "lng": "14.36188"
  },
  {
    "country": "AT",
    "name": "Scheifling",
    "lat": "47.15044",
    "lng": "14.41278"
  },
  {
    "country": "AT",
    "name": "Scheibbs",
    "lat": "48.00474",
    "lng": "15.16817"
  },
  {
    "country": "AT",
    "name": "Scheffau am Wilden Kaiser",
    "lat": "47.52943",
    "lng": "12.25139"
  },
  {
    "country": "AT",
    "name": "Scheffau am Tennengebirge",
    "lat": "47.58831",
    "lng": "13.2202"
  },
  {
    "country": "AT",
    "name": "Schattwald",
    "lat": "47.51427",
    "lng": "10.46143"
  },
  {
    "country": "AT",
    "name": "Schattendorf",
    "lat": "47.70973",
    "lng": "16.50979"
  },
  {
    "country": "AT",
    "name": "Scharnstein",
    "lat": "47.90426",
    "lng": "13.96135"
  },
  {
    "country": "AT",
    "name": "Scharnitz",
    "lat": "47.38899",
    "lng": "11.26455"
  },
  {
    "country": "AT",
    "name": "Scharndorf",
    "lat": "48.09399",
    "lng": "16.79883"
  },
  {
    "country": "AT",
    "name": "Schärding",
    "lat": "48.45294",
    "lng": "13.43722"
  },
  {
    "country": "AT",
    "name": "Schardenberg",
    "lat": "48.52058",
    "lng": "13.49791"
  },
  {
    "country": "AT",
    "name": "Schandorf",
    "lat": "47.24183",
    "lng": "16.42267"
  },
  {
    "country": "AT",
    "name": "Schalchham",
    "lat": "47.99825",
    "lng": "13.67188"
  },
  {
    "country": "AT",
    "name": "Schalchen",
    "lat": "48.11924",
    "lng": "13.15716"
  },
  {
    "country": "AT",
    "name": "Schafwiesen",
    "lat": "48.17194",
    "lng": "14.07067"
  },
  {
    "country": "AT",
    "name": "Schäffern",
    "lat": "47.47771",
    "lng": "16.10956"
  },
  {
    "country": "AT",
    "name": "Schachendorf",
    "lat": "47.2655",
    "lng": "16.4342"
  },
  {
    "country": "AT",
    "name": "Sautens",
    "lat": "47.20775",
    "lng": "10.86452"
  },
  {
    "country": "AT",
    "name": "Bad Sauerbrunn",
    "lat": "47.77439",
    "lng": "16.32841"
  },
  {
    "country": "AT",
    "name": "Sattledt",
    "lat": "48.07372",
    "lng": "14.05478"
  },
  {
    "country": "AT",
    "name": "Satteins",
    "lat": "47.21667",
    "lng": "9.66667"
  },
  {
    "country": "AT",
    "name": "Sarleinsbach",
    "lat": "48.54525",
    "lng": "13.90491"
  },
  {
    "country": "AT",
    "name": "Sankt Wolfgang im Salzkammergut",
    "lat": "47.73932",
    "lng": "13.44666"
  },
  {
    "country": "AT",
    "name": "Sankt Veit in Defereggen",
    "lat": "46.92722",
    "lng": "12.42972"
  },
  {
    "country": "AT",
    "name": "Sankt Veit im Pongau",
    "lat": "47.33333",
    "lng": "13.15"
  },
  {
    "country": "AT",
    "name": "Sankt Veit an der Gölsen",
    "lat": "48.0432",
    "lng": "15.66942"
  },
  {
    "country": "AT",
    "name": "Sankt Veit an der Glan",
    "lat": "46.76806",
    "lng": "14.36028"
  },
  {
    "country": "AT",
    "name": "Sankt Veit am Vogau",
    "lat": "46.74048",
    "lng": "15.64217"
  },
  {
    "country": "AT",
    "name": "Sankt Valentin",
    "lat": "48.16667",
    "lng": "14.51667"
  },
  {
    "country": "AT",
    "name": "Sankt Ulrich bei Steyr",
    "lat": "48.02116",
    "lng": "14.43685"
  },
  {
    "country": "AT",
    "name": "Sankt Ulrich am Waasen",
    "lat": "46.93333",
    "lng": "15.53333"
  },
  {
    "country": "AT",
    "name": "Sankt Ulrich am Pillersee",
    "lat": "47.5274",
    "lng": "12.57239"
  },
  {
    "country": "AT",
    "name": "Sankt Stefan ob Stainz",
    "lat": "46.92861",
    "lng": "15.25889"
  },
  {
    "country": "AT",
    "name": "Sankt Stefan ob Leoben",
    "lat": "47.31672",
    "lng": "14.97831"
  },
  {
    "country": "AT",
    "name": "Sankt Stefan im Rosental",
    "lat": "46.90389",
    "lng": "15.71"
  },
  {
    "country": "AT",
    "name": "Sankt Stefan",
    "lat": "46.8075",
    "lng": "14.85167"
  },
  {
    "country": "AT",
    "name": "Sankt Ruprecht an der Raab",
    "lat": "47.15336",
    "lng": "15.66256"
  },
  {
    "country": "AT",
    "name": "Sankt Ruprecht",
    "lat": "46.6",
    "lng": "14.31667"
  },
  {
    "country": "AT",
    "name": "Sankt Roman",
    "lat": "48.48183",
    "lng": "13.61056"
  },
  {
    "country": "AT",
    "name": "Sankt Radegund bei Graz",
    "lat": "47.18172",
    "lng": "15.49192"
  },
  {
    "country": "AT",
    "name": "Sankt Pölten",
    "lat": "48.2",
    "lng": "15.63333"
  },
  {
    "country": "AT",
    "name": "Sankt Peter ob Judenburg",
    "lat": "47.18417",
    "lng": "14.58639"
  },
  {
    "country": "AT",
    "name": "Sankt Peter in der Au Markt",
    "lat": "48.044",
    "lng": "14.62182"
  },
  {
    "country": "AT",
    "name": "Sankt Peter im Sulmtal",
    "lat": "46.75",
    "lng": "15.25"
  },
  {
    "country": "AT",
    "name": "Sankt Peter-Freienstein",
    "lat": "47.38333",
    "lng": "15.01667"
  },
  {
    "country": "AT",
    "name": "Sankt Peter am Ottersbach",
    "lat": "46.79778",
    "lng": "15.75917"
  },
  {
    "country": "AT",
    "name": "Sankt Peter am Kammersberg",
    "lat": "47.18706",
    "lng": "14.18464"
  },
  {
    "country": "AT",
    "name": "Sankt Peter",
    "lat": "47.05",
    "lng": "15.46667"
  },
  {
    "country": "AT",
    "name": "Sankt Peter",
    "lat": "46.62978",
    "lng": "14.34016"
  },
  {
    "country": "AT",
    "name": "Sankt Peter am Hart",
    "lat": "48.25268",
    "lng": "13.09613"
  },
  {
    "country": "AT",
    "name": "Sankt Paul im Lavanttal",
    "lat": "46.70056",
    "lng": "14.87556"
  },
  {
    "country": "AT",
    "name": "Sankt Pantaleon",
    "lat": "48.21058",
    "lng": "14.56804"
  },
  {
    "country": "AT",
    "name": "Sankt Oswald bei Plankenwarth",
    "lat": "47.08701",
    "lng": "15.27703"
  },
  {
    "country": "AT",
    "name": "Sankt Oswald bei Freistadt",
    "lat": "48.5",
    "lng": "14.58333"
  },
  {
    "country": "AT",
    "name": "Sankt Nikolai ob Draßling",
    "lat": "46.80841",
    "lng": "15.66054"
  },
  {
    "country": "AT",
    "name": "Sankt Nikolai im Sölktal",
    "lat": "47.31667",
    "lng": "14.05"
  },
  {
    "country": "AT",
    "name": "Sankt Nikolai im Sausal",
    "lat": "46.82111",
    "lng": "15.45194"
  },
  {
    "country": "AT",
    "name": "Sankt Michael in Obersteiermark",
    "lat": "47.33839",
    "lng": "15.01784"
  },
  {
    "country": "AT",
    "name": "Sankt Michael im Lungau",
    "lat": "47.1",
    "lng": "13.63333"
  },
  {
    "country": "AT",
    "name": "Sankt Michael im Burgenland",
    "lat": "47.12852",
    "lng": "16.27148"
  },
  {
    "country": "AT",
    "name": "Sankt Martin im Sulmtal",
    "lat": "46.75611",
    "lng": "15.29722"
  },
  {
    "country": "AT",
    "name": "Sankt Martin im Mühlkreis",
    "lat": "48.41553",
    "lng": "14.03821"
  },
  {
    "country": "AT",
    "name": "Sankt Martin im Innkreis",
    "lat": "48.29387",
    "lng": "13.43868"
  },
  {
    "country": "AT",
    "name": "Sankt Martin bei Lofer",
    "lat": "47.56667",
    "lng": "12.7"
  },
  {
    "country": "AT",
    "name": "Sankt Martin an der Raab",
    "lat": "46.92022",
    "lng": "16.13379"
  },
  {
    "country": "AT",
    "name": "Sankt Martin am Ybbsfelde",
    "lat": "48.16425",
    "lng": "15.02076"
  },
  {
    "country": "AT",
    "name": "Sankt Martin am Grimming",
    "lat": "47.48873",
    "lng": "13.98105"
  },
  {
    "country": "AT",
    "name": "Sankt Martin",
    "lat": "46.61667",
    "lng": "14.28333"
  },
  {
    "country": "AT",
    "name": "Sankt Martin",
    "lat": "46.61721",
    "lng": "13.82879"
  },
  {
    "country": "AT",
    "name": "Sankt Martin",
    "lat": "48.23091",
    "lng": "14.26781"
  },
  {
    "country": "AT",
    "name": "Sankt Martin",
    "lat": "47.44667",
    "lng": "15.2849"
  },
  {
    "country": "AT",
    "name": "Sankt Marien",
    "lat": "48.14805",
    "lng": "14.27759"
  },
  {
    "country": "AT",
    "name": "Sankt Margareten im Rosental",
    "lat": "46.54417",
    "lng": "14.42444"
  },
  {
    "country": "AT",
    "name": "Sankt Margarethen im Lungau",
    "lat": "47.07927",
    "lng": "13.69613"
  },
  {
    "country": "AT",
    "name": "Sankt Margarethen im Burgenland",
    "lat": "47.80335",
    "lng": "16.60875"
  },
  {
    "country": "AT",
    "name": "Sankt Margarethen bei Knittelfeld",
    "lat": "47.21667",
    "lng": "14.86667"
  },
  {
    "country": "AT",
    "name": "Sankt Margarethen an der Sierning",
    "lat": "48.1591",
    "lng": "15.49055"
  },
  {
    "country": "AT",
    "name": "Sankt Margarethen an der Raab",
    "lat": "47.05",
    "lng": "15.75"
  },
  {
    "country": "AT",
    "name": "Sankt Marein im Mürztal",
    "lat": "47.46667",
    "lng": "15.36667"
  },
  {
    "country": "AT",
    "name": "Sankt Marein bei Neumarkt",
    "lat": "47.06591",
    "lng": "14.42908"
  },
  {
    "country": "AT",
    "name": "Sankt Marein bei Knittelfeld",
    "lat": "47.27396",
    "lng": "14.86085"
  },
  {
    "country": "AT",
    "name": "Sankt Marein bei Graz",
    "lat": "47.01583",
    "lng": "15.68389"
  },
  {
    "country": "AT",
    "name": "Sankt Magdalen",
    "lat": "46.61667",
    "lng": "13.88333"
  },
  {
    "country": "AT",
    "name": "Sankt Lorenzen im Mürztal",
    "lat": "47.48333",
    "lng": "15.36667"
  },
  {
    "country": "AT",
    "name": "Sankt Lorenzen bei Scheifling",
    "lat": "47.14556",
    "lng": "14.40583"
  },
  {
    "country": "AT",
    "name": "Sankt Lorenzen bei Knittelfeld",
    "lat": "47.25078",
    "lng": "14.89549"
  },
  {
    "country": "AT",
    "name": "Sankt Lorenzen am Wechsel",
    "lat": "47.44153",
    "lng": "15.95498"
  },
  {
    "country": "AT",
    "name": "Sankt Lorenz",
    "lat": "47.8324",
    "lng": "13.34839"
  },
  {
    "country": "AT",
    "name": "Sankt Leonhard am Hornerwald",
    "lat": "48.6",
    "lng": "15.53333"
  },
  {
    "country": "AT",
    "name": "Sankt Leonhard am Forst",
    "lat": "48.14232",
    "lng": "15.28464"
  },
  {
    "country": "AT",
    "name": "Sankt Leonhard",
    "lat": "47.72587",
    "lng": "13.04577"
  },
  {
    "country": "AT",
    "name": "Sankt Leonhard",
    "lat": "46.62528",
    "lng": "13.85865"
  },
  {
    "country": "AT",
    "name": "Sankt Lambrecht",
    "lat": "47.06667",
    "lng": "14.3"
  },
  {
    "country": "AT",
    "name": "Sankt Kathrein am Offenegg",
    "lat": "47.30078",
    "lng": "15.57764"
  },
  {
    "country": "AT",
    "name": "Sankt Kathrein am Hauenstein",
    "lat": "47.48943",
    "lng": "15.69414"
  },
  {
    "country": "AT",
    "name": "Sankt Katharein an der Laming",
    "lat": "47.47069",
    "lng": "15.16319"
  },
  {
    "country": "AT",
    "name": "Sankt Josef (Weststeiermark)",
    "lat": "46.90917",
    "lng": "15.33639"
  },
  {
    "country": "AT",
    "name": "Sankt Johann in Tirol",
    "lat": "47.5233",
    "lng": "12.4232"
  },
  {
    "country": "AT",
    "name": "Sankt Johann in der Haide",
    "lat": "47.2808",
    "lng": "16.02579"
  },
  {
    "country": "AT",
    "name": "Sankt Johann im Saggautal",
    "lat": "46.70389",
    "lng": "15.40278"
  },
  {
    "country": "AT",
    "name": "Sankt Johann im Pongau",
    "lat": "47.35",
    "lng": "13.2"
  },
  {
    "country": "AT",
    "name": "Sankt Johann bei Herberstein",
    "lat": "47.2",
    "lng": "15.8"
  },
  {
    "country": "AT",
    "name": "Sankt Johann am Tauern",
    "lat": "47.35",
    "lng": "14.46667"
  },
  {
    "country": "AT",
    "name": "Sankt Jakob im Walde",
    "lat": "47.46667",
    "lng": "15.78333"
  },
  {
    "country": "AT",
    "name": "Sankt Jakob-Breitenau",
    "lat": "47.39229",
    "lng": "15.4297"
  },
  {
    "country": "AT",
    "name": "Sankt Ilgen",
    "lat": "47.55",
    "lng": "15.16667"
  },
  {
    "country": "AT",
    "name": "Sankt Gotthard im Mühlkreis",
    "lat": "48.3802",
    "lng": "14.13185"
  },
  {
    "country": "AT",
    "name": "Sankt Gilgen",
    "lat": "47.76667",
    "lng": "13.36667"
  },
  {
    "country": "AT",
    "name": "Sankt Georgen ob Murau",
    "lat": "47.10506",
    "lng": "14.09383"
  },
  {
    "country": "AT",
    "name": "Sankt Georgen ob Judenburg",
    "lat": "47.20744",
    "lng": "14.49736"
  },
  {
    "country": "AT",
    "name": "Sankt Georgen im Attergau",
    "lat": "47.93595",
    "lng": "13.48306"
  },
  {
    "country": "AT",
    "name": "Sankt Georgen bei Obernberg am Inn",
    "lat": "48.29193",
    "lng": "13.3332"
  },
  {
    "country": "AT",
    "name": "Sankt Georgen an der Stiefing",
    "lat": "46.87333",
    "lng": "15.57972"
  },
  {
    "country": "AT",
    "name": "Sankt Georgen an der Leys",
    "lat": "48.03149",
    "lng": "15.22722"
  },
  {
    "country": "AT",
    "name": "Sankt Georgen an der Gusen",
    "lat": "48.27183",
    "lng": "14.44951"
  },
  {
    "country": "AT",
    "name": "Sankt Georgen am Ybbsfelde",
    "lat": "48.12892",
    "lng": "14.95364"
  },
  {
    "country": "AT",
    "name": "Sankt Georgen am Leithagebirge",
    "lat": "47.85",
    "lng": "16.55"
  },
  {
    "country": "AT",
    "name": "Sankt Georgen am Fillmannsbach",
    "lat": "48.1256",
    "lng": "13.00811"
  },
  {
    "country": "AT",
    "name": "Sankt Gallenkirch",
    "lat": "47.02102",
    "lng": "9.97335"
  },
  {
    "country": "AT",
    "name": "Sankt Gallen",
    "lat": "47.68631",
    "lng": "14.61705"
  },
  {
    "country": "AT",
    "name": "Sankt Dionysen",
    "lat": "48.22439",
    "lng": "14.25485"
  },
  {
    "country": "AT",
    "name": "Sankt Corona am Wechsel",
    "lat": "47.58333",
    "lng": "16"
  },
  {
    "country": "AT",
    "name": "Sankt Blasen",
    "lat": "47.08333",
    "lng": "14.3"
  },
  {
    "country": "AT",
    "name": "Sankt Bartholomä",
    "lat": "47.05457",
    "lng": "15.25889"
  },
  {
    "country": "AT",
    "name": "Sankt Anton im Montafon",
    "lat": "47.11667",
    "lng": "9.86667"
  },
  {
    "country": "AT",
    "name": "St Anton am Arlberg",
    "lat": "47.1275",
    "lng": "10.26372"
  },
  {
    "country": "AT",
    "name": "Sankt Anna am Aigen",
    "lat": "46.83111",
    "lng": "15.97139"
  },
  {
    "country": "AT",
    "name": "Sankt Andrä vor dem Hagenthale",
    "lat": "48.32202",
    "lng": "16.20724"
  },
  {
    "country": "AT",
    "name": "Sankt Andrä im Lungau",
    "lat": "47.15",
    "lng": "13.78333"
  },
  {
    "country": "AT",
    "name": "Sankt Andrä am Zicksee",
    "lat": "47.7841",
    "lng": "16.94195"
  },
  {
    "country": "AT",
    "name": "Sankt Andrä",
    "lat": "46.76829",
    "lng": "14.81991"
  },
  {
    "country": "AT",
    "name": "Sankt Aegyd am Neuwalde",
    "lat": "47.85383",
    "lng": "15.56969"
  },
  {
    "country": "AT",
    "name": "Sankt Aegidi",
    "lat": "48.47929",
    "lng": "13.73737"
  },
  {
    "country": "AT",
    "name": "Sammersdorf",
    "lat": "48.18091",
    "lng": "14.1667"
  },
  {
    "country": "AT",
    "name": "Salzburg",
    "lat": "47.79941",
    "lng": "13.04399"
  },
  {
    "country": "AT",
    "name": "Sallingberg",
    "lat": "48.46667",
    "lng": "15.23333"
  },
  {
    "country": "AT",
    "name": "Salla",
    "lat": "47.1",
    "lng": "14.96667"
  },
  {
    "country": "AT",
    "name": "Sachsenburg",
    "lat": "46.82917",
    "lng": "13.355"
  },
  {
    "country": "AT",
    "name": "Saalfelden am Steinernen Meer",
    "lat": "47.42681",
    "lng": "12.848"
  },
  {
    "country": "AT",
    "name": "Saalbach",
    "lat": "47.39138",
    "lng": "12.63642"
  },
  {
    "country": "AT",
    "name": "Rutzenham",
    "lat": "48.06076",
    "lng": "13.71883"
  },
  {
    "country": "AT",
    "name": "Rüstorf",
    "lat": "48.04326",
    "lng": "13.78982"
  },
  {
    "country": "AT",
    "name": "Rust",
    "lat": "47.80122",
    "lng": "16.67158"
  },
  {
    "country": "AT",
    "name": "Ruprechtshofen",
    "lat": "48.13648",
    "lng": "15.27675"
  },
  {
    "country": "AT",
    "name": "Rum",
    "lat": "47.28333",
    "lng": "11.45"
  },
  {
    "country": "AT",
    "name": "Rufling",
    "lat": "48.27839",
    "lng": "14.21674"
  },
  {
    "country": "AT",
    "name": "Rudersdorf",
    "lat": "47.0513",
    "lng": "16.12"
  },
  {
    "country": "AT",
    "name": "Ruden",
    "lat": "46.65833",
    "lng": "14.77639"
  },
  {
    "country": "AT",
    "name": "Rottenmann",
    "lat": "47.52529",
    "lng": "14.35747"
  },
  {
    "country": "AT",
    "name": "Röthis",
    "lat": "47.29332",
    "lng": "9.65484"
  },
  {
    "country": "AT",
    "name": "Röthelstein",
    "lat": "47.31667",
    "lng": "15.36667"
  },
  {
    "country": "AT",
    "name": "Rotenturm an der Pinka",
    "lat": "47.25",
    "lng": "16.25"
  },
  {
    "country": "AT",
    "name": "Rosenau am Sonntagberg",
    "lat": "48.00778",
    "lng": "14.73927"
  },
  {
    "country": "AT",
    "name": "Rosegg",
    "lat": "46.58833",
    "lng": "14.01718"
  },
  {
    "country": "AT",
    "name": "Röschitz",
    "lat": "48.64312",
    "lng": "15.81774"
  },
  {
    "country": "AT",
    "name": "Roppen",
    "lat": "47.21667",
    "lng": "10.81667"
  },
  {
    "country": "AT",
    "name": "Röns",
    "lat": "47.21667",
    "lng": "9.7"
  },
  {
    "country": "AT",
    "name": "Roitham",
    "lat": "48.02432",
    "lng": "13.82166"
  },
  {
    "country": "AT",
    "name": "Rohr im Gebirge",
    "lat": "47.89471",
    "lng": "15.73603"
  },
  {
    "country": "AT",
    "name": "Rohr im Burgenland",
    "lat": "47.11667",
    "lng": "16.16667"
  },
  {
    "country": "AT",
    "name": "Röhrenbach",
    "lat": "48.65",
    "lng": "15.5"
  },
  {
    "country": "AT",
    "name": "Rohrbach in Oberösterreich",
    "lat": "48.57275",
    "lng": "13.98834"
  },
  {
    "country": "AT",
    "name": "Rohrbach bei Mattersburg",
    "lat": "47.7052",
    "lng": "16.43005"
  },
  {
    "country": "AT",
    "name": "Rohrbach an der Lafnitz",
    "lat": "47.38333",
    "lng": "16"
  },
  {
    "country": "AT",
    "name": "Rohrau",
    "lat": "48.06667",
    "lng": "16.85"
  },
  {
    "country": "AT",
    "name": "Ritzing",
    "lat": "47.61316",
    "lng": "16.49546"
  },
  {
    "country": "AT",
    "name": "Rinn",
    "lat": "47.25",
    "lng": "11.5"
  },
  {
    "country": "AT",
    "name": "Riezlern",
    "lat": "47.35778",
    "lng": "10.18759"
  },
  {
    "country": "AT",
    "name": "Rietz",
    "lat": "47.28593",
    "lng": "11.03075"
  },
  {
    "country": "AT",
    "name": "Ries",
    "lat": "47.08315",
    "lng": "15.485"
  },
  {
    "country": "AT",
    "name": "Riegersburg",
    "lat": "47",
    "lng": "15.93028"
  },
  {
    "country": "AT",
    "name": "Riefensberg",
    "lat": "47.50137",
    "lng": "9.95838"
  },
  {
    "country": "AT",
    "name": "Riedlingsdorf",
    "lat": "47.35",
    "lng": "16.13333"
  },
  {
    "country": "AT",
    "name": "Ried in der Riedmark",
    "lat": "48.27114",
    "lng": "14.52796"
  },
  {
    "country": "AT",
    "name": "Ried im Traunkreis",
    "lat": "48.02581",
    "lng": "14.07452"
  },
  {
    "country": "AT",
    "name": "Ried im Oberinntal",
    "lat": "47.05",
    "lng": "10.65"
  },
  {
    "country": "AT",
    "name": "Ried im Innkreis",
    "lat": "48.21123",
    "lng": "13.48855"
  },
  {
    "country": "AT",
    "name": "Reutte",
    "lat": "47.48333",
    "lng": "10.71667"
  },
  {
    "country": "AT",
    "name": "Reuthe",
    "lat": "47.37113",
    "lng": "9.89481"
  },
  {
    "country": "AT",
    "name": "Retznei",
    "lat": "46.73333",
    "lng": "15.56667"
  },
  {
    "country": "AT",
    "name": "Retz",
    "lat": "48.75712",
    "lng": "15.95485"
  },
  {
    "country": "AT",
    "name": "Rettenschöss",
    "lat": "47.65718",
    "lng": "12.26872"
  },
  {
    "country": "AT",
    "name": "Rettenegg",
    "lat": "47.52694",
    "lng": "15.78104"
  },
  {
    "country": "AT",
    "name": "Rennweg am Katschberg",
    "lat": "47.01667",
    "lng": "13.61667"
  },
  {
    "country": "AT",
    "name": "Reith bei Seefeld",
    "lat": "47.3",
    "lng": "11.2"
  },
  {
    "country": "AT",
    "name": "Reith bei Kitzbühel",
    "lat": "47.46667",
    "lng": "12.35"
  },
  {
    "country": "AT",
    "name": "Reith im Alpbachtal",
    "lat": "47.41694",
    "lng": "11.87785"
  },
  {
    "country": "AT",
    "name": "Reiterndorf",
    "lat": "47.70364",
    "lng": "13.62914"
  },
  {
    "country": "AT",
    "name": "Reisenberg",
    "lat": "47.99406",
    "lng": "16.52018"
  },
  {
    "country": "AT",
    "name": "Reinsberg",
    "lat": "47.98567",
    "lng": "15.07067"
  },
  {
    "country": "AT",
    "name": "Reingers",
    "lat": "48.96667",
    "lng": "15.13333"
  },
  {
    "country": "AT",
    "name": "Reifling",
    "lat": "47.13333",
    "lng": "14.66667"
  },
  {
    "country": "AT",
    "name": "Reichraming",
    "lat": "47.88333",
    "lng": "14.45"
  },
  {
    "country": "AT",
    "name": "Reichenthal",
    "lat": "48.54286",
    "lng": "14.38471"
  },
  {
    "country": "AT",
    "name": "Reichenfels",
    "lat": "47.00718",
    "lng": "14.74425"
  },
  {
    "country": "AT",
    "name": "Reichendorf",
    "lat": "47.18922",
    "lng": "15.7616"
  },
  {
    "country": "AT",
    "name": "Reichenau im Mühlkreis",
    "lat": "48.45704",
    "lng": "14.34875"
  },
  {
    "country": "AT",
    "name": "Reichenau an der Rax",
    "lat": "47.69509",
    "lng": "15.84572"
  },
  {
    "country": "AT",
    "name": "Rehberg",
    "lat": "48.43114",
    "lng": "15.58702"
  },
  {
    "country": "AT",
    "name": "Redlham",
    "lat": "48.02443",
    "lng": "13.74738"
  },
  {
    "country": "AT",
    "name": "Reding",
    "lat": "46.81667",
    "lng": "14.85"
  },
  {
    "country": "AT",
    "name": "Rechnitz",
    "lat": "47.30467",
    "lng": "16.44095"
  },
  {
    "country": "AT",
    "name": "Raxendorf",
    "lat": "48.34108",
    "lng": "15.27666"
  },
  {
    "country": "AT",
    "name": "Ravelsbach",
    "lat": "48.55",
    "lng": "15.85"
  },
  {
    "country": "AT",
    "name": "Rauris",
    "lat": "47.22656",
    "lng": "12.99459"
  },
  {
    "country": "AT",
    "name": "Rauchenwarth",
    "lat": "48.0833",
    "lng": "16.52794"
  },
  {
    "country": "AT",
    "name": "Rattenberg",
    "lat": "47.43941",
    "lng": "11.89407"
  },
  {
    "country": "AT",
    "name": "Ratten",
    "lat": "47.48333",
    "lng": "15.71667"
  },
  {
    "country": "AT",
    "name": "Ratschendorf",
    "lat": "46.74222",
    "lng": "15.81583"
  },
  {
    "country": "AT",
    "name": "Ratsch an der Weinstraße",
    "lat": "46.68944",
    "lng": "15.57111"
  },
  {
    "country": "AT",
    "name": "Rastenfeld",
    "lat": "48.57348",
    "lng": "15.33176"
  },
  {
    "country": "AT",
    "name": "Rassach",
    "lat": "46.86028",
    "lng": "15.27"
  },
  {
    "country": "AT",
    "name": "Rappottenstein",
    "lat": "48.52161",
    "lng": "15.07925"
  },
  {
    "country": "AT",
    "name": "Ranten",
    "lat": "47.15949",
    "lng": "14.08349"
  },
  {
    "country": "AT",
    "name": "Ranshofen",
    "lat": "48.23308",
    "lng": "13.01571"
  },
  {
    "country": "AT",
    "name": "Rannersdorf",
    "lat": "48.12772",
    "lng": "16.46379"
  },
  {
    "country": "AT",
    "name": "Rankweil",
    "lat": "47.27108",
    "lng": "9.64308"
  },
  {
    "country": "AT",
    "name": "Raning",
    "lat": "46.85",
    "lng": "15.81667"
  },
  {
    "country": "AT",
    "name": "Ranggen",
    "lat": "47.25727",
    "lng": "11.2112"
  },
  {
    "country": "AT",
    "name": "Rangersdorf",
    "lat": "46.86001",
    "lng": "12.94923"
  },
  {
    "country": "AT",
    "name": "Randegg",
    "lat": "48.01198",
    "lng": "14.97334"
  },
  {
    "country": "AT",
    "name": "Ramsau",
    "lat": "48.00313",
    "lng": "15.80332"
  },
  {
    "country": "AT",
    "name": "Ramsau am Dachstein",
    "lat": "47.4215",
    "lng": "13.65545"
  },
  {
    "country": "AT",
    "name": "Ramsau im Zillertal",
    "lat": "47.20383",
    "lng": "11.87545"
  },
  {
    "country": "AT",
    "name": "Ramingstein",
    "lat": "47.07462",
    "lng": "13.83642"
  },
  {
    "country": "AT",
    "name": "Rainbach im Mühlkreis",
    "lat": "48.55758",
    "lng": "14.47449"
  },
  {
    "country": "AT",
    "name": "Raiding",
    "lat": "47.56581",
    "lng": "16.53056"
  },
  {
    "country": "AT",
    "name": "Ragnitz",
    "lat": "46.83667",
    "lng": "15.59278"
  },
  {
    "country": "AT",
    "name": "Raggal",
    "lat": "47.21082",
    "lng": "9.83688"
  },
  {
    "country": "AT",
    "name": "Raffelstetten",
    "lat": "48.23759",
    "lng": "14.40273"
  },
  {
    "country": "AT",
    "name": "Radstadt",
    "lat": "47.38333",
    "lng": "13.45"
  },
  {
    "country": "AT",
    "name": "Bad Radkersburg",
    "lat": "46.68806",
    "lng": "15.98806"
  },
  {
    "country": "AT",
    "name": "Radfeld",
    "lat": "47.44806",
    "lng": "11.91424"
  },
  {
    "country": "AT",
    "name": "Radenthein",
    "lat": "46.80056",
    "lng": "13.71167"
  },
  {
    "country": "AT",
    "name": "Rachau",
    "lat": "47.21667",
    "lng": "14.9"
  },
  {
    "country": "AT",
    "name": "Rabenwald",
    "lat": "47.4",
    "lng": "15.9"
  },
  {
    "country": "AT",
    "name": "Rabenstein an der Pielach",
    "lat": "48.06535",
    "lng": "15.46772"
  },
  {
    "country": "AT",
    "name": "Rabensburg",
    "lat": "48.65",
    "lng": "16.9"
  },
  {
    "country": "AT",
    "name": "Raasdorf",
    "lat": "48.24657",
    "lng": "16.56532"
  },
  {
    "country": "AT",
    "name": "Raach am Hochgebirge",
    "lat": "47.63333",
    "lng": "15.93333"
  },
  {
    "country": "AT",
    "name": "Raabs an der Thaya",
    "lat": "48.85",
    "lng": "15.5"
  },
  {
    "country": "AT",
    "name": "Raabau",
    "lat": "46.96278",
    "lng": "15.91167"
  },
  {
    "country": "AT",
    "name": "Raaba",
    "lat": "47.03333",
    "lng": "15.5"
  },
  {
    "country": "AT",
    "name": "Raab",
    "lat": "48.35243",
    "lng": "13.64691"
  },
  {
    "country": "AT",
    "name": "Pyhra",
    "lat": "48.1591",
    "lng": "15.68624"
  },
  {
    "country": "AT",
    "name": "Pusterwald",
    "lat": "47.30611",
    "lng": "14.37556"
  },
  {
    "country": "AT",
    "name": "Purkersdorf",
    "lat": "48.20769",
    "lng": "16.17539"
  },
  {
    "country": "AT",
    "name": "Purgstall",
    "lat": "48.05841",
    "lng": "15.13478"
  },
  {
    "country": "AT",
    "name": "Purbach am Neusiedler See",
    "lat": "47.91289",
    "lng": "16.69561"
  },
  {
    "country": "AT",
    "name": "Puntigam",
    "lat": "47.03333",
    "lng": "15.43333"
  },
  {
    "country": "AT",
    "name": "Pulkau",
    "lat": "48.70484",
    "lng": "15.86031"
  },
  {
    "country": "AT",
    "name": "Pühret",
    "lat": "48.03488",
    "lng": "13.72252"
  },
  {
    "country": "AT",
    "name": "Pucking",
    "lat": "48.18886",
    "lng": "14.18824"
  },
  {
    "country": "AT",
    "name": "Puchheim",
    "lat": "48",
    "lng": "13.71667"
  },
  {
    "country": "AT",
    "name": "Puchenstuben",
    "lat": "47.92819",
    "lng": "15.28748"
  },
  {
    "country": "AT",
    "name": "Puchenau",
    "lat": "48.31214",
    "lng": "14.23614"
  },
  {
    "country": "AT",
    "name": "Puchberg am Schneeberg",
    "lat": "47.78709",
    "lng": "15.91352"
  },
  {
    "country": "AT",
    "name": "Puch bei Weiz",
    "lat": "47.22413",
    "lng": "15.72504"
  },
  {
    "country": "AT",
    "name": "Puch bei Hallein",
    "lat": "47.71536",
    "lng": "13.09296"
  },
  {
    "country": "AT",
    "name": "Prutz",
    "lat": "47.08333",
    "lng": "10.66667"
  },
  {
    "country": "AT",
    "name": "Pruggern",
    "lat": "47.4237",
    "lng": "13.87625"
  },
  {
    "country": "AT",
    "name": "Proleb",
    "lat": "47.4",
    "lng": "15.13333"
  },
  {
    "country": "AT",
    "name": "Prinzersdorf",
    "lat": "48.2",
    "lng": "15.51667"
  },
  {
    "country": "AT",
    "name": "Prigglitz",
    "lat": "47.70318",
    "lng": "15.92794"
  },
  {
    "country": "AT",
    "name": "Hofamt Priel",
    "lat": "48.19581",
    "lng": "15.07746"
  },
  {
    "country": "AT",
    "name": "Pressbaum",
    "lat": "48.18333",
    "lng": "16.08333"
  },
  {
    "country": "AT",
    "name": "Prellenkirchen",
    "lat": "48.07401",
    "lng": "16.95233"
  },
  {
    "country": "AT",
    "name": "Preitenegg",
    "lat": "46.94",
    "lng": "14.92583"
  },
  {
    "country": "AT",
    "name": "Pregarten",
    "lat": "48.35488",
    "lng": "14.53217"
  },
  {
    "country": "AT",
    "name": "Preding",
    "lat": "46.85861",
    "lng": "15.40972"
  },
  {
    "country": "AT",
    "name": "Pramet",
    "lat": "48.14295",
    "lng": "13.48752"
  },
  {
    "country": "AT",
    "name": "Prambachkirchen",
    "lat": "48.31711",
    "lng": "13.90449"
  },
  {
    "country": "AT",
    "name": "Pram",
    "lat": "48.23536",
    "lng": "13.60579"
  },
  {
    "country": "AT",
    "name": "Prägraten",
    "lat": "47.01667",
    "lng": "12.38333"
  },
  {
    "country": "AT",
    "name": "Pradl",
    "lat": "47.26539",
    "lng": "11.4152"
  },
  {
    "country": "AT",
    "name": "Poysdorf",
    "lat": "48.66667",
    "lng": "16.63333"
  },
  {
    "country": "AT",
    "name": "Potzneusiedl",
    "lat": "48.04504",
    "lng": "16.9477"
  },
  {
    "country": "AT",
    "name": "Pöttsching",
    "lat": "47.80445",
    "lng": "16.37109"
  },
  {
    "country": "AT",
    "name": "Pottschach",
    "lat": "47.69856",
    "lng": "16.00725"
  },
  {
    "country": "AT",
    "name": "Pötting",
    "lat": "48.28325",
    "lng": "13.77059"
  },
  {
    "country": "AT",
    "name": "Pottenstein",
    "lat": "47.9582",
    "lng": "16.0948"
  },
  {
    "country": "AT",
    "name": "Pottendorf",
    "lat": "47.9",
    "lng": "16.38333"
  },
  {
    "country": "AT",
    "name": "Pottenbrunn",
    "lat": "48.23333",
    "lng": "15.7"
  },
  {
    "country": "AT",
    "name": "Pöttelsdorf",
    "lat": "47.75369",
    "lng": "16.43864"
  },
  {
    "country": "AT",
    "name": "Pörtschach am Wörthersee",
    "lat": "46.63639",
    "lng": "14.14639"
  },
  {
    "country": "AT",
    "name": "Poppendorf",
    "lat": "46.85611",
    "lng": "15.85639"
  },
  {
    "country": "AT",
    "name": "Pöls",
    "lat": "47.21667",
    "lng": "14.58333"
  },
  {
    "country": "AT",
    "name": "Polling in Tirol",
    "lat": "47.28333",
    "lng": "11.15"
  },
  {
    "country": "AT",
    "name": "Pöllauberg",
    "lat": "47.31667",
    "lng": "15.85"
  },
  {
    "country": "AT",
    "name": "Pöllau",
    "lat": "47.3",
    "lng": "15.83333"
  },
  {
    "country": "AT",
    "name": "Pöggstall",
    "lat": "48.31734",
    "lng": "15.20405"
  },
  {
    "country": "AT",
    "name": "Poggersdorf",
    "lat": "46.65",
    "lng": "14.45"
  },
  {
    "country": "AT",
    "name": "Podersdorf am See",
    "lat": "47.85412",
    "lng": "16.83706"
  },
  {
    "country": "AT",
    "name": "Pöchlarn",
    "lat": "48.2",
    "lng": "15.2"
  },
  {
    "country": "AT",
    "name": "Plesching",
    "lat": "48.32099",
    "lng": "14.33802"
  },
  {
    "country": "AT",
    "name": "Plankenau",
    "lat": "47.32673",
    "lng": "13.19282"
  },
  {
    "country": "AT",
    "name": "Plainfeld",
    "lat": "47.83333",
    "lng": "13.18333"
  },
  {
    "country": "AT",
    "name": "Pitzenberg",
    "lat": "48.07361",
    "lng": "13.72484"
  },
  {
    "country": "AT",
    "name": "Pitten",
    "lat": "47.71667",
    "lng": "16.18333"
  },
  {
    "country": "AT",
    "name": "Pitschgau",
    "lat": "46.7",
    "lng": "15.26667"
  },
  {
    "country": "AT",
    "name": "Pistorf",
    "lat": "46.76667",
    "lng": "15.36667"
  },
  {
    "country": "AT",
    "name": "Pischelsdorf in der Steiermark",
    "lat": "47.17417",
    "lng": "15.80572"
  },
  {
    "country": "AT",
    "name": "Pirka",
    "lat": "47",
    "lng": "15.38333"
  },
  {
    "country": "AT",
    "name": "Piringsdorf",
    "lat": "47.44826",
    "lng": "16.41516"
  },
  {
    "country": "AT",
    "name": "Pirching am Traubenberg",
    "lat": "46.95",
    "lng": "15.6"
  },
  {
    "country": "AT",
    "name": "Pinsdorf",
    "lat": "47.9298",
    "lng": "13.77068"
  },
  {
    "country": "AT",
    "name": "Pinkafeld",
    "lat": "47.3709",
    "lng": "16.1241"
  },
  {
    "country": "AT",
    "name": "Pinggau",
    "lat": "47.44232",
    "lng": "16.06713"
  },
  {
    "country": "AT",
    "name": "Pillichsdorf",
    "lat": "48.35",
    "lng": "16.53333"
  },
  {
    "country": "AT",
    "name": "Pill",
    "lat": "47.32352",
    "lng": "11.68018"
  },
  {
    "country": "AT",
    "name": "Pilgersdorf",
    "lat": "47.44106",
    "lng": "16.3492"
  },
  {
    "country": "AT",
    "name": "Piesendorf",
    "lat": "47.29077",
    "lng": "12.71839"
  },
  {
    "country": "AT",
    "name": "Pierbach",
    "lat": "48.34815",
    "lng": "14.75575"
  },
  {
    "country": "AT",
    "name": "Pichling bei Köflach",
    "lat": "47.04785",
    "lng": "15.07098"
  },
  {
    "country": "AT",
    "name": "Pichl bei Wels",
    "lat": "48.18515",
    "lng": "13.89882"
  },
  {
    "country": "AT",
    "name": "Pichl",
    "lat": "47.28333",
    "lng": "12.85"
  },
  {
    "country": "AT",
    "name": "Piberegg",
    "lat": "47.09424",
    "lng": "15.11658"
  },
  {
    "country": "AT",
    "name": "Pians",
    "lat": "47.13486",
    "lng": "10.51237"
  },
  {
    "country": "AT",
    "name": "Pfunds",
    "lat": "46.96667",
    "lng": "10.55"
  },
  {
    "country": "AT",
    "name": "Pfons",
    "lat": "47.14201",
    "lng": "11.46071"
  },
  {
    "country": "AT",
    "name": "Pflach",
    "lat": "47.51667",
    "lng": "10.71667"
  },
  {
    "country": "AT",
    "name": "Pfarrkirchen bei Bad Hall",
    "lat": "48.03046",
    "lng": "14.19914"
  },
  {
    "country": "AT",
    "name": "Pfaffstätten",
    "lat": "48.01737",
    "lng": "16.26354"
  },
  {
    "country": "AT",
    "name": "Pfaffing",
    "lat": "48.018",
    "lng": "13.47507"
  },
  {
    "country": "AT",
    "name": "Pfaffenhofen",
    "lat": "47.3",
    "lng": "11.08333"
  },
  {
    "country": "AT",
    "name": "Peuerbach",
    "lat": "48.3453",
    "lng": "13.77205"
  },
  {
    "country": "AT",
    "name": "Petzenkirchen",
    "lat": "48.14693",
    "lng": "15.15465"
  },
  {
    "country": "AT",
    "name": "Pettneu",
    "lat": "47.14595",
    "lng": "10.33655"
  },
  {
    "country": "AT",
    "name": "Pettenbach",
    "lat": "47.96016",
    "lng": "14.01692"
  },
  {
    "country": "AT",
    "name": "Petronell-Carnuntum",
    "lat": "48.11296",
    "lng": "16.86582"
  },
  {
    "country": "AT",
    "name": "Perwang am Grabensee",
    "lat": "48.00692",
    "lng": "13.083"
  },
  {
    "country": "AT",
    "name": "Pertlstein",
    "lat": "46.94056",
    "lng": "15.96167"
  },
  {
    "country": "AT",
    "name": "Persenbeug",
    "lat": "48.18733",
    "lng": "15.08809"
  },
  {
    "country": "AT",
    "name": "Pernitz",
    "lat": "47.89759",
    "lng": "15.96022"
  },
  {
    "country": "AT",
    "name": "Pernersdorf",
    "lat": "48.7",
    "lng": "16.01667"
  },
  {
    "country": "AT",
    "name": "Pernegg an der Mur",
    "lat": "47.35979",
    "lng": "15.34236"
  },
  {
    "country": "AT",
    "name": "Pernegg",
    "lat": "48.73333",
    "lng": "15.61667"
  },
  {
    "country": "AT",
    "name": "Perlsdorf",
    "lat": "46.91361",
    "lng": "15.81417"
  },
  {
    "country": "AT",
    "name": "Perg",
    "lat": "48.25",
    "lng": "14.63333"
  },
  {
    "country": "AT",
    "name": "Perchtoldsdorf",
    "lat": "48.11935",
    "lng": "16.26607"
  },
  {
    "country": "AT",
    "name": "Perchau am Sattel",
    "lat": "47.1",
    "lng": "14.45"
  },
  {
    "country": "AT",
    "name": "Penz",
    "lat": "48.03333",
    "lng": "14.48333"
  },
  {
    "country": "AT",
    "name": "Pennewang",
    "lat": "48.13333",
    "lng": "13.85"
  },
  {
    "country": "AT",
    "name": "Peggau",
    "lat": "47.2",
    "lng": "15.35"
  },
  {
    "country": "AT",
    "name": "Payerbach",
    "lat": "47.69209",
    "lng": "15.8634"
  },
  {
    "country": "AT",
    "name": "Paudorf",
    "lat": "48.35416",
    "lng": "15.61853"
  },
  {
    "country": "AT",
    "name": "Pattigham",
    "lat": "48.15521",
    "lng": "13.48443"
  },
  {
    "country": "AT",
    "name": "Patsch",
    "lat": "47.20527",
    "lng": "11.4151"
  },
  {
    "country": "AT",
    "name": "Paternion",
    "lat": "46.71417",
    "lng": "13.63611"
  },
  {
    "country": "AT",
    "name": "Passail",
    "lat": "47.28333",
    "lng": "15.51667"
  },
  {
    "country": "AT",
    "name": "Pasching",
    "lat": "48.25931",
    "lng": "14.20369"
  },
  {
    "country": "AT",
    "name": "Parschlug",
    "lat": "47.4809",
    "lng": "15.28645"
  },
  {
    "country": "AT",
    "name": "Parndorf",
    "lat": "47.99963",
    "lng": "16.86049"
  },
  {
    "country": "AT",
    "name": "Parbasdorf",
    "lat": "48.28333",
    "lng": "16.6"
  },
  {
    "country": "AT",
    "name": "Pamhagen",
    "lat": "47.70092",
    "lng": "16.90779"
  },
  {
    "country": "AT",
    "name": "Pama",
    "lat": "48.0473",
    "lng": "17.0332"
  },
  {
    "country": "AT",
    "name": "Palting",
    "lat": "48.01542",
    "lng": "13.12712"
  },
  {
    "country": "AT",
    "name": "Palfau",
    "lat": "47.7",
    "lng": "14.8"
  },
  {
    "country": "AT",
    "name": "Paldau",
    "lat": "46.94222",
    "lng": "15.79583"
  },
  {
    "country": "AT",
    "name": "Pack",
    "lat": "46.97917",
    "lng": "14.98417"
  },
  {
    "country": "AT",
    "name": "Pabneukirchen",
    "lat": "48.32367",
    "lng": "14.81747"
  },
  {
    "country": "AT",
    "name": "Oeynhausen",
    "lat": "47.98533",
    "lng": "16.29187"
  },
  {
    "country": "AT",
    "name": "Oetz",
    "lat": "47.2",
    "lng": "10.9"
  },
  {
    "country": "AT",
    "name": "Otterthal",
    "lat": "47.61667",
    "lng": "15.93333"
  },
  {
    "country": "AT",
    "name": "Ottenthal",
    "lat": "48.761",
    "lng": "16.57914"
  },
  {
    "country": "AT",
    "name": "Ottensheim",
    "lat": "48.33246",
    "lng": "14.17425"
  },
  {
    "country": "AT",
    "name": "Ottenschlag im Mühlkreis",
    "lat": "48.46632",
    "lng": "14.38471"
  },
  {
    "country": "AT",
    "name": "Ottenschlag",
    "lat": "48.42393",
    "lng": "15.21924"
  },
  {
    "country": "AT",
    "name": "Ottakring",
    "lat": "48.21667",
    "lng": "16.3"
  },
  {
    "country": "AT",
    "name": "Osterwitz",
    "lat": "46.85943",
    "lng": "15.08998"
  },
  {
    "country": "AT",
    "name": "Ostermiething",
    "lat": "48.04636",
    "lng": "12.82937"
  },
  {
    "country": "AT",
    "name": "Ossiach",
    "lat": "46.67435",
    "lng": "13.98358"
  },
  {
    "country": "AT",
    "name": "Oslip",
    "lat": "47.82906",
    "lng": "16.61957"
  },
  {
    "country": "AT",
    "name": "Ort im Innkreis",
    "lat": "48.31654",
    "lng": "13.43362"
  },
  {
    "country": "AT",
    "name": "Orth an der Donau",
    "lat": "48.14524",
    "lng": "16.70089"
  },
  {
    "country": "AT",
    "name": "Ortgraben",
    "lat": "47.45",
    "lng": "16.05"
  },
  {
    "country": "AT",
    "name": "Opponitz",
    "lat": "47.87776",
    "lng": "14.82283"
  },
  {
    "country": "AT",
    "name": "Oppenberg",
    "lat": "47.48333",
    "lng": "14.26667"
  },
  {
    "country": "AT",
    "name": "Ollersdorf im Burgenland",
    "lat": "47.18333",
    "lng": "16.16667"
  },
  {
    "country": "AT",
    "name": "Olbendorf",
    "lat": "47.18333",
    "lng": "16.2"
  },
  {
    "country": "AT",
    "name": "Ohlsdorf",
    "lat": "47.96073",
    "lng": "13.79145"
  },
  {
    "country": "AT",
    "name": "Oggau",
    "lat": "47.83333",
    "lng": "16.66667"
  },
  {
    "country": "AT",
    "name": "Offenhausen",
    "lat": "48.15",
    "lng": "13.83333"
  },
  {
    "country": "AT",
    "name": "Oepping",
    "lat": "48.60284",
    "lng": "13.94586"
  },
  {
    "country": "AT",
    "name": "Oehling",
    "lat": "48.1",
    "lng": "14.8"
  },
  {
    "country": "AT",
    "name": "Oedt",
    "lat": "48.21335",
    "lng": "14.21013"
  },
  {
    "country": "AT",
    "name": "Öblarn",
    "lat": "47.45938",
    "lng": "13.99023"
  },
  {
    "country": "AT",
    "name": "Oberzeiring",
    "lat": "47.25",
    "lng": "14.48333"
  },
  {
    "country": "AT",
    "name": "Oberwölz Stadt",
    "lat": "47.20117",
    "lng": "14.28321"
  },
  {
    "country": "AT",
    "name": "Oberwölbling",
    "lat": "48.31719",
    "lng": "15.59166"
  },
  {
    "country": "AT",
    "name": "Oberweg",
    "lat": "47.15",
    "lng": "14.63333"
  },
  {
    "country": "AT",
    "name": "Oberwart",
    "lat": "47.28971",
    "lng": "16.20595"
  },
  {
    "country": "AT",
    "name": "Oberwang",
    "lat": "47.86667",
    "lng": "13.43333"
  },
  {
    "country": "AT",
    "name": "Oberwaltersdorf",
    "lat": "47.97567",
    "lng": "16.32191"
  },
  {
    "country": "AT",
    "name": "Oberwagram",
    "lat": "48.20157",
    "lng": "15.64917"
  },
  {
    "country": "AT",
    "name": "Obervogau",
    "lat": "46.745",
    "lng": "15.58472"
  },
  {
    "country": "AT",
    "name": "Obervellach",
    "lat": "46.93667",
    "lng": "13.20417"
  },
  {
    "country": "AT",
    "name": "Obertrum am See",
    "lat": "47.93722",
    "lng": "13.07722"
  },
  {
    "country": "AT",
    "name": "Obertilliach",
    "lat": "46.71056",
    "lng": "12.61444"
  },
  {
    "country": "AT",
    "name": "Oberstorcha",
    "lat": "46.96667",
    "lng": "15.8"
  },
  {
    "country": "AT",
    "name": "Obersiebenbrunn",
    "lat": "48.26537",
    "lng": "16.71076"
  },
  {
    "country": "AT",
    "name": "Obersdorf",
    "lat": "48.36667",
    "lng": "16.51667"
  },
  {
    "country": "AT",
    "name": "Oberschützen",
    "lat": "47.35138",
    "lng": "16.20732"
  },
  {
    "country": "AT",
    "name": "Oberrettenbach",
    "lat": "47.15",
    "lng": "15.8"
  },
  {
    "country": "AT",
    "name": "Oberpullendorf",
    "lat": "47.50352",
    "lng": "16.50447"
  },
  {
    "country": "AT",
    "name": "Oberpremstätten",
    "lat": "46.97444",
    "lng": "15.40444"
  },
  {
    "country": "AT",
    "name": "Pettnau",
    "lat": "47.29204",
    "lng": "11.15962"
  },
  {
    "country": "AT",
    "name": "Oberneukirchen",
    "lat": "48.46404",
    "lng": "14.22275"
  },
  {
    "country": "AT",
    "name": "Oberndorf in Tirol",
    "lat": "47.5",
    "lng": "12.38333"
  },
  {
    "country": "AT",
    "name": "Oberndorf bei Schwanenstadt",
    "lat": "48.05559",
    "lng": "13.75677"
  },
  {
    "country": "AT",
    "name": "Oberndorf bei Salzburg",
    "lat": "47.95",
    "lng": "12.93333"
  },
  {
    "country": "AT",
    "name": "Oberndorf an der Melk",
    "lat": "48.06386",
    "lng": "15.2243"
  },
  {
    "country": "AT",
    "name": "Oberndorf in der Ebene",
    "lat": "48.2704",
    "lng": "15.68985"
  },
  {
    "country": "AT",
    "name": "Obernberg am Inn",
    "lat": "48.32133",
    "lng": "13.33427"
  },
  {
    "country": "AT",
    "name": "Obermieming",
    "lat": "47.30851",
    "lng": "10.97435"
  },
  {
    "country": "AT",
    "name": "Oberloisdorf",
    "lat": "47.44736",
    "lng": "16.50764"
  },
  {
    "country": "AT",
    "name": "Oberlienz",
    "lat": "46.84722",
    "lng": "12.73139"
  },
  {
    "country": "AT",
    "name": "Oberkurzheim",
    "lat": "47.23333",
    "lng": "14.58333"
  },
  {
    "country": "AT",
    "name": "Oberhofen im Inntal",
    "lat": "47.3",
    "lng": "11.08333"
  },
  {
    "country": "AT",
    "name": "Oberhofen am Irrsee",
    "lat": "47.95",
    "lng": "13.3"
  },
  {
    "country": "AT",
    "name": "Oberhausen",
    "lat": "48.1769",
    "lng": "16.58506"
  },
  {
    "country": "AT",
    "name": "Oberhart",
    "lat": "48.18464",
    "lng": "14.05497"
  },
  {
    "country": "AT",
    "name": "Oberhaag",
    "lat": "46.6869",
    "lng": "15.33202"
  },
  {
    "country": "AT",
    "name": "Ober-Grafendorf",
    "lat": "48.1504",
    "lng": "15.54531"
  },
  {
    "country": "AT",
    "name": "Oberdrauburg",
    "lat": "46.74306",
    "lng": "12.97028"
  },
  {
    "country": "AT",
    "name": "Oberdorf im Burgenland",
    "lat": "47.21667",
    "lng": "16.21667"
  },
  {
    "country": "AT",
    "name": "Oberdorf am Hochegg",
    "lat": "46.97861",
    "lng": "15.72167"
  },
  {
    "country": "AT",
    "name": "Aurach",
    "lat": "47.41223",
    "lng": "12.42734"
  },
  {
    "country": "AT",
    "name": "Oberau",
    "lat": "47.44336",
    "lng": "12.04891"
  },
  {
    "country": "AT",
    "name": "Oberalm",
    "lat": "47.7",
    "lng": "13.1"
  },
  {
    "country": "AT",
    "name": "Oberaich",
    "lat": "47.4",
    "lng": "15.21667"
  },
  {
    "country": "AT",
    "name": "Obdach",
    "lat": "47.06667",
    "lng": "14.68333"
  },
  {
    "country": "AT",
    "name": "Nüziders",
    "lat": "47.16667",
    "lng": "9.8"
  },
  {
    "country": "AT",
    "name": "Nußdorf am Haunsberg",
    "lat": "47.95944",
    "lng": "13.00917"
  },
  {
    "country": "AT",
    "name": "Nöchling",
    "lat": "48.22433",
    "lng": "14.98123"
  },
  {
    "country": "AT",
    "name": "Nitscha",
    "lat": "47.11667",
    "lng": "15.75"
  },
  {
    "country": "AT",
    "name": "Nikolsdorf",
    "lat": "46.78583",
    "lng": "12.91333"
  },
  {
    "country": "AT",
    "name": "Niklasdorf",
    "lat": "47.38333",
    "lng": "15.15"
  },
  {
    "country": "AT",
    "name": "Nikitsch",
    "lat": "47.53615",
    "lng": "16.66017"
  },
  {
    "country": "AT",
    "name": "Niederwölz",
    "lat": "47.15126",
    "lng": "14.37479"
  },
  {
    "country": "AT",
    "name": "Niederthalheim",
    "lat": "48.09901",
    "lng": "13.7687"
  },
  {
    "country": "AT",
    "name": "Niederöblarn",
    "lat": "47.47667",
    "lng": "14.01937"
  },
  {
    "country": "AT",
    "name": "Niedernsill",
    "lat": "47.28333",
    "lng": "12.65"
  },
  {
    "country": "AT",
    "name": "Niederneukirchen",
    "lat": "48.16093",
    "lng": "14.33965"
  },
  {
    "country": "AT",
    "name": "Niederndorf",
    "lat": "47.65",
    "lng": "12.21667"
  },
  {
    "country": "AT",
    "name": "Niederleis",
    "lat": "48.55",
    "lng": "16.4"
  },
  {
    "country": "AT",
    "name": "Niederhollabrunn",
    "lat": "48.43333",
    "lng": "16.3"
  },
  {
    "country": "AT",
    "name": "Niederdorf",
    "lat": "46.61667",
    "lng": "14.4"
  },
  {
    "country": "AT",
    "name": "Niederbreitenbach",
    "lat": "47.53333",
    "lng": "12.08333"
  },
  {
    "country": "AT",
    "name": "Niederau",
    "lat": "47.45",
    "lng": "12.08333"
  },
  {
    "country": "AT",
    "name": "Niederalm",
    "lat": "47.72872",
    "lng": "13.06223"
  },
  {
    "country": "AT",
    "name": "Nickelsdorf",
    "lat": "47.94056",
    "lng": "17.06944"
  },
  {
    "country": "AT",
    "name": "Neuzeug",
    "lat": "48.05",
    "lng": "14.33333"
  },
  {
    "country": "AT",
    "name": "Neutillmitsch",
    "lat": "46.81667",
    "lng": "15.53333"
  },
  {
    "country": "AT",
    "name": "Neutal",
    "lat": "47.54548",
    "lng": "16.44619"
  },
  {
    "country": "AT",
    "name": "Neustift im Stubaital",
    "lat": "47.11667",
    "lng": "11.31667"
  },
  {
    "country": "AT",
    "name": "Neustift bei Güssing",
    "lat": "47.02474",
    "lng": "16.26041"
  },
  {
    "country": "AT",
    "name": "Neustift an der Lafnitz",
    "lat": "47.36667",
    "lng": "16.03333"
  },
  {
    "country": "AT",
    "name": "Neusiedl an der Zaya",
    "lat": "48.5992",
    "lng": "16.7799"
  },
  {
    "country": "AT",
    "name": "Neusiedl am See",
    "lat": "47.94901",
    "lng": "16.8417"
  },
  {
    "country": "AT",
    "name": "Neusiedl",
    "lat": "47.88769",
    "lng": "15.96313"
  },
  {
    "country": "AT",
    "name": "Neunkirchen",
    "lat": "47.72096",
    "lng": "16.08107"
  },
  {
    "country": "AT",
    "name": "Neumarkt in Steiermark",
    "lat": "47.07398",
    "lng": "14.42728"
  },
  {
    "country": "AT",
    "name": "Neumarkt im Mühlkreis",
    "lat": "48.42818",
    "lng": "14.48444"
  },
  {
    "country": "AT",
    "name": "Neumarkt im Hausruckkreis",
    "lat": "48.2728",
    "lng": "13.72836"
  },
  {
    "country": "AT",
    "name": "Neumarkt an der Ybbs",
    "lat": "48.14103",
    "lng": "15.05758"
  },
  {
    "country": "AT",
    "name": "Neumarkt am Wallersee",
    "lat": "47.95",
    "lng": "13.23333"
  },
  {
    "country": "AT",
    "name": "Neulengbach",
    "lat": "48.19745",
    "lng": "15.90219"
  },
  {
    "country": "AT",
    "name": "Neukirchen bei Lambach",
    "lat": "48.1",
    "lng": "13.81667"
  },
  {
    "country": "AT",
    "name": "Neukirchen an der Vöckla",
    "lat": "48.04053",
    "lng": "13.5376"
  },
  {
    "country": "AT",
    "name": "Neukirchen am Walde",
    "lat": "48.40584",
    "lng": "13.78158"
  },
  {
    "country": "AT",
    "name": "Neukirchen am Großvenediger",
    "lat": "47.25046",
    "lng": "12.27585"
  },
  {
    "country": "AT",
    "name": "Neukirchen",
    "lat": "47.87502",
    "lng": "13.71111"
  },
  {
    "country": "AT",
    "name": "Neuhofen an der Ybbs",
    "lat": "48.05795",
    "lng": "14.85489"
  },
  {
    "country": "AT",
    "name": "Neuhofen an der Krems",
    "lat": "48.13866",
    "lng": "14.22764"
  },
  {
    "country": "AT",
    "name": "Neuhaus",
    "lat": "46.63333",
    "lng": "14.88333"
  },
  {
    "country": "AT",
    "name": "Neufeld an der Leitha",
    "lat": "47.86558",
    "lng": "16.37856"
  },
  {
    "country": "AT",
    "name": "Neudörfl",
    "lat": "47.79655",
    "lng": "16.2977"
  },
  {
    "country": "AT",
    "name": "Neudorf bei Staatz",
    "lat": "48.72083",
    "lng": "16.49139"
  },
  {
    "country": "AT",
    "name": "Neudau",
    "lat": "47.17554",
    "lng": "16.10184"
  },
  {
    "country": "AT",
    "name": "Neuberg an der Mürz",
    "lat": "47.66423",
    "lng": "15.57226"
  },
  {
    "country": "AT",
    "name": "Nestelbach im Ilztal",
    "lat": "47.08333",
    "lng": "15.86667"
  },
  {
    "country": "AT",
    "name": "Nestelbach bei Graz",
    "lat": "47.06053",
    "lng": "15.6114"
  },
  {
    "country": "AT",
    "name": "Nesselwängle",
    "lat": "47.48333",
    "lng": "10.61667"
  },
  {
    "country": "AT",
    "name": "Nenzing",
    "lat": "47.18436",
    "lng": "9.70539"
  },
  {
    "country": "AT",
    "name": "Neidling",
    "lat": "48.24005",
    "lng": "15.55591"
  },
  {
    "country": "AT",
    "name": "Neckenmarkt",
    "lat": "47.59964",
    "lng": "16.5467"
  },
  {
    "country": "AT",
    "name": "Nauders",
    "lat": "46.88859",
    "lng": "10.50126"
  },
  {
    "country": "AT",
    "name": "Natters",
    "lat": "47.23414",
    "lng": "11.37342"
  },
  {
    "country": "AT",
    "name": "Natternbach",
    "lat": "48.3973",
    "lng": "13.74965"
  },
  {
    "country": "AT",
    "name": "Nassereith",
    "lat": "47.31667",
    "lng": "10.83333"
  },
  {
    "country": "AT",
    "name": "Namlos",
    "lat": "47.35",
    "lng": "10.66667"
  },
  {
    "country": "AT",
    "name": "Naas",
    "lat": "47.25086",
    "lng": "15.59449"
  },
  {
    "country": "AT",
    "name": "Naarn im Machlande",
    "lat": "48.22553",
    "lng": "14.60838"
  },
  {
    "country": "AT",
    "name": "Mutters",
    "lat": "47.23333",
    "lng": "11.38333"
  },
  {
    "country": "AT",
    "name": "Musau",
    "lat": "47.53195",
    "lng": "10.67339"
  },
  {
    "country": "AT",
    "name": "Mürzzuschlag",
    "lat": "47.6066",
    "lng": "15.67226"
  },
  {
    "country": "AT",
    "name": "Mürzsteg",
    "lat": "47.67556",
    "lng": "15.49145"
  },
  {
    "country": "AT",
    "name": "Mürzhofen",
    "lat": "47.48333",
    "lng": "15.38333"
  },
  {
    "country": "AT",
    "name": "Mureck",
    "lat": "46.70806",
    "lng": "15.77472"
  },
  {
    "country": "AT",
    "name": "Münzkirchen",
    "lat": "48.48333",
    "lng": "13.56667"
  },
  {
    "country": "AT",
    "name": "Münzbach",
    "lat": "48.26737",
    "lng": "14.71009"
  },
  {
    "country": "AT",
    "name": "Muntlix",
    "lat": "47.28296",
    "lng": "9.65939"
  },
  {
    "country": "AT",
    "name": "Münster",
    "lat": "47.42164",
    "lng": "11.83356"
  },
  {
    "country": "AT",
    "name": "Munderfing",
    "lat": "48.07039",
    "lng": "13.18162"
  },
  {
    "country": "AT",
    "name": "Münchendorf",
    "lat": "48.03333",
    "lng": "16.38333"
  },
  {
    "country": "AT",
    "name": "Müllendorf",
    "lat": "47.83943",
    "lng": "16.46258"
  },
  {
    "country": "AT",
    "name": "Muhr",
    "lat": "47.09893",
    "lng": "13.49756"
  },
  {
    "country": "AT",
    "name": "Mühlgraben",
    "lat": "46.8871",
    "lng": "16.0386"
  },
  {
    "country": "AT",
    "name": "Mühlen",
    "lat": "47.03071",
    "lng": "14.50848"
  },
  {
    "country": "AT",
    "name": "Mühldorf bei Feldbach",
    "lat": "46.93861",
    "lng": "15.9075"
  },
  {
    "country": "AT",
    "name": "Mühldorf",
    "lat": "48.37432",
    "lng": "15.34672"
  },
  {
    "country": "AT",
    "name": "Mühldorf",
    "lat": "47.89689",
    "lng": "13.95049"
  },
  {
    "country": "AT",
    "name": "Mühldorf",
    "lat": "46.86028",
    "lng": "13.35361"
  },
  {
    "country": "AT",
    "name": "Mühlbach am Hochkönig",
    "lat": "47.37746",
    "lng": "13.12926"
  },
  {
    "country": "AT",
    "name": "Mühlau",
    "lat": "47.28333",
    "lng": "11.4"
  },
  {
    "country": "AT",
    "name": "Muggendorf",
    "lat": "47.91059",
    "lng": "15.93533"
  },
  {
    "country": "AT",
    "name": "Muckendorf an der Donau",
    "lat": "48.33183",
    "lng": "16.1554"
  },
  {
    "country": "AT",
    "name": "Mötz",
    "lat": "47.28333",
    "lng": "10.95"
  },
  {
    "country": "AT",
    "name": "Moschendorf",
    "lat": "47.05843",
    "lng": "16.47728"
  },
  {
    "country": "AT",
    "name": "Mörtschach",
    "lat": "46.92389",
    "lng": "12.91778"
  },
  {
    "country": "AT",
    "name": "Mortantsch",
    "lat": "47.20752",
    "lng": "15.57954"
  },
  {
    "country": "AT",
    "name": "Mörbisch am See",
    "lat": "47.75",
    "lng": "16.66667"
  },
  {
    "country": "AT",
    "name": "Mooskirchen",
    "lat": "46.98167",
    "lng": "15.27889"
  },
  {
    "country": "AT",
    "name": "Moosdorf",
    "lat": "48.04492",
    "lng": "12.98902"
  },
  {
    "country": "AT",
    "name": "Moosburg",
    "lat": "46.6575",
    "lng": "14.17472"
  },
  {
    "country": "AT",
    "name": "Moosbrunn",
    "lat": "48.01667",
    "lng": "16.45"
  },
  {
    "country": "AT",
    "name": "Mönichwald",
    "lat": "47.44655",
    "lng": "15.88275"
  },
  {
    "country": "AT",
    "name": "Mönichkirchen",
    "lat": "47.51062",
    "lng": "16.03425"
  },
  {
    "country": "AT",
    "name": "Mondsee",
    "lat": "47.85648",
    "lng": "13.34908"
  },
  {
    "country": "AT",
    "name": "Mönchhof",
    "lat": "47.8802",
    "lng": "16.94126"
  },
  {
    "country": "AT",
    "name": "Molln",
    "lat": "47.88723",
    "lng": "14.25819"
  },
  {
    "country": "AT",
    "name": "Möllersdorf",
    "lat": "48.02575",
    "lng": "16.30508"
  },
  {
    "country": "AT",
    "name": "Möllbrücke",
    "lat": "46.83639",
    "lng": "13.37278"
  },
  {
    "country": "AT",
    "name": "Mölbling",
    "lat": "46.85",
    "lng": "14.43333"
  },
  {
    "country": "AT",
    "name": "Möggers",
    "lat": "47.56667",
    "lng": "9.81667"
  },
  {
    "country": "AT",
    "name": "Mogersdorf",
    "lat": "46.9481",
    "lng": "16.2321"
  },
  {
    "country": "AT",
    "name": "Modriach",
    "lat": "46.95",
    "lng": "15.05"
  },
  {
    "country": "AT",
    "name": "Mödling",
    "lat": "48.08605",
    "lng": "16.28921"
  },
  {
    "country": "AT",
    "name": "Mittertreffling",
    "lat": "48.33868",
    "lng": "14.36505"
  },
  {
    "country": "AT",
    "name": "Mittersill",
    "lat": "47.28333",
    "lng": "12.48333"
  },
  {
    "country": "AT",
    "name": "Mitterpullendorf",
    "lat": "47.49325",
    "lng": "16.52129"
  },
  {
    "country": "AT",
    "name": "Mitterndorf im Steirischen Salzkammergut",
    "lat": "47.55556",
    "lng": "13.93187"
  },
  {
    "country": "AT",
    "name": "Mitterndorf an der Fischa",
    "lat": "47.99739",
    "lng": "16.47357"
  },
  {
    "country": "AT",
    "name": "Mitterlabill",
    "lat": "46.88917",
    "lng": "15.63556"
  },
  {
    "country": "AT",
    "name": "Mitterkirchen im Machland",
    "lat": "48.18795",
    "lng": "14.69593"
  },
  {
    "country": "AT",
    "name": "Mitterhofen",
    "lat": "47.38333",
    "lng": "12.8"
  },
  {
    "country": "AT",
    "name": "Mitterdorf im Mürztal",
    "lat": "47.53333",
    "lng": "15.51667"
  },
  {
    "country": "AT",
    "name": "Mitterdorf an der Raab",
    "lat": "47.16667",
    "lng": "15.6"
  },
  {
    "country": "AT",
    "name": "Mitterberghütten",
    "lat": "47.4",
    "lng": "13.21667"
  },
  {
    "country": "AT",
    "name": "Mitterbach am Erlaufsee",
    "lat": "47.81396",
    "lng": "15.29537"
  },
  {
    "country": "AT",
    "name": "Mittelberg",
    "lat": "47.35127",
    "lng": "10.17197"
  },
  {
    "country": "AT",
    "name": "Mistelbach",
    "lat": "48.57",
    "lng": "16.57667"
  },
  {
    "country": "AT",
    "name": "Mischendorf",
    "lat": "47.19277",
    "lng": "16.31444"
  },
  {
    "country": "AT",
    "name": "Mils bei Solbad Hall",
    "lat": "47.28333",
    "lng": "11.53333"
  },
  {
    "country": "AT",
    "name": "Mils bei Imst",
    "lat": "47.20616",
    "lng": "10.67485"
  },
  {
    "country": "AT",
    "name": "Miesenbach",
    "lat": "47.84035",
    "lng": "15.98236"
  },
  {
    "country": "AT",
    "name": "Miesenbach bei Birkfeld",
    "lat": "47.36961",
    "lng": "15.76025"
  },
  {
    "country": "AT",
    "name": "Mieming",
    "lat": "47.3",
    "lng": "10.98333"
  },
  {
    "country": "AT",
    "name": "Mieders",
    "lat": "47.16667",
    "lng": "11.38333"
  },
  {
    "country": "AT",
    "name": "Michelhausen",
    "lat": "48.29085",
    "lng": "15.93893"
  },
  {
    "country": "AT",
    "name": "Micheldorf in Oberösterreich",
    "lat": "47.87764",
    "lng": "14.13357"
  },
  {
    "country": "AT",
    "name": "Micheldorf",
    "lat": "46.914",
    "lng": "14.43061"
  },
  {
    "country": "AT",
    "name": "Michaelnbach",
    "lat": "48.28788",
    "lng": "13.83144"
  },
  {
    "country": "AT",
    "name": "Michaelerberg",
    "lat": "47.41083",
    "lng": "13.89333"
  },
  {
    "country": "AT",
    "name": "Mettersdorf am Saßbach",
    "lat": "46.80583",
    "lng": "15.71111"
  },
  {
    "country": "AT",
    "name": "Metnitz",
    "lat": "46.98056",
    "lng": "14.21667"
  },
  {
    "country": "AT",
    "name": "Merkendorf",
    "lat": "46.85722",
    "lng": "15.90389"
  },
  {
    "country": "AT",
    "name": "Mellach",
    "lat": "46.93333",
    "lng": "15.51667"
  },
  {
    "country": "AT",
    "name": "Melk",
    "lat": "48.22737",
    "lng": "15.33186"
  },
  {
    "country": "AT",
    "name": "Meiningen",
    "lat": "47.29891",
    "lng": "9.57862"
  },
  {
    "country": "AT",
    "name": "Meidling",
    "lat": "48.16667",
    "lng": "16.33333"
  },
  {
    "country": "AT",
    "name": "Mehrnbach",
    "lat": "48.20809",
    "lng": "13.43525"
  },
  {
    "country": "AT",
    "name": "Meggenhofen",
    "lat": "48.18017",
    "lng": "13.79582"
  },
  {
    "country": "AT",
    "name": "Medraz",
    "lat": "47.14256",
    "lng": "11.34287"
  },
  {
    "country": "AT",
    "name": "Mayrhofen",
    "lat": "47.16667",
    "lng": "11.86667"
  },
  {
    "country": "AT",
    "name": "Mautern in Steiermark",
    "lat": "47.4",
    "lng": "14.83333"
  },
  {
    "country": "AT",
    "name": "Mauterndorf",
    "lat": "47.13451",
    "lng": "13.67884"
  },
  {
    "country": "AT",
    "name": "Mautern",
    "lat": "48.39319",
    "lng": "15.57793"
  },
  {
    "country": "AT",
    "name": "Mauerkirchen",
    "lat": "48.19173",
    "lng": "13.13338"
  },
  {
    "country": "AT",
    "name": "Mauer bei Amstetten",
    "lat": "48.09643",
    "lng": "14.8006"
  },
  {
    "country": "AT",
    "name": "Mauerbach",
    "lat": "48.24514",
    "lng": "16.16793"
  },
  {
    "country": "AT",
    "name": "Matzendorf",
    "lat": "47.89137",
    "lng": "16.21393"
  },
  {
    "country": "AT",
    "name": "Matzen",
    "lat": "48.4",
    "lng": "16.7"
  },
  {
    "country": "AT",
    "name": "Mattsee",
    "lat": "47.96667",
    "lng": "13.1"
  },
  {
    "country": "AT",
    "name": "Mattighofen",
    "lat": "48.10732",
    "lng": "13.15081"
  },
  {
    "country": "AT",
    "name": "Mattersburg",
    "lat": "47.73333",
    "lng": "16.4"
  },
  {
    "country": "AT",
    "name": "Matrei in Osttirol",
    "lat": "47",
    "lng": "12.53333"
  },
  {
    "country": "AT",
    "name": "Matrei am Brenner",
    "lat": "47.12794",
    "lng": "11.45176"
  },
  {
    "country": "AT",
    "name": "Marz",
    "lat": "47.71667",
    "lng": "16.41667"
  },
  {
    "country": "AT",
    "name": "Martinsberg",
    "lat": "48.37549",
    "lng": "15.14997"
  },
  {
    "country": "AT",
    "name": "Markt Sankt Martin",
    "lat": "47.56205",
    "lng": "16.42508"
  },
  {
    "country": "AT",
    "name": "Sankt Florian",
    "lat": "48.20568",
    "lng": "14.37836"
  },
  {
    "country": "AT",
    "name": "Bad Pirawarth",
    "lat": "48.45194",
    "lng": "16.59833"
  },
  {
    "country": "AT",
    "name": "Markt Piesting",
    "lat": "47.87358",
    "lng": "16.1251"
  },
  {
    "country": "AT",
    "name": "Markt Neuhodis",
    "lat": "47.29565",
    "lng": "16.39564"
  },
  {
    "country": "AT",
    "name": "Markt Allhau",
    "lat": "47.28333",
    "lng": "16.08333"
  },
  {
    "country": "AT",
    "name": "Markgrafneusiedl",
    "lat": "48.26667",
    "lng": "16.63333"
  },
  {
    "country": "AT",
    "name": "Markersdorf an der Pielach",
    "lat": "48.18333",
    "lng": "15.5"
  },
  {
    "country": "AT",
    "name": "Mariazell",
    "lat": "47.77306",
    "lng": "15.31639"
  },
  {
    "country": "AT",
    "name": "Maria Wörth",
    "lat": "46.61639",
    "lng": "14.16306"
  },
  {
    "country": "AT",
    "name": "Mariatrost",
    "lat": "47.09641",
    "lng": "15.46537"
  },
  {
    "country": "AT",
    "name": "Mariatal",
    "lat": "47.44788",
    "lng": "11.8721"
  },
  {
    "country": "AT",
    "name": "Maria Taferl",
    "lat": "48.22702",
    "lng": "15.15954"
  },
  {
    "country": "AT",
    "name": "Mariastein",
    "lat": "47.52772",
    "lng": "12.05479"
  },
  {
    "country": "AT",
    "name": "Mariasdorf",
    "lat": "47.3658",
    "lng": "16.23136"
  },
  {
    "country": "AT",
    "name": "Maria Schmolln",
    "lat": "48.1382",
    "lng": "13.21981"
  },
  {
    "country": "AT",
    "name": "Maria Saal",
    "lat": "46.68083",
    "lng": "14.34861"
  },
  {
    "country": "AT",
    "name": "Maria Rain",
    "lat": "46.55389",
    "lng": "14.29556"
  },
  {
    "country": "AT",
    "name": "Mariapfarr",
    "lat": "47.15",
    "lng": "13.75"
  },
  {
    "country": "AT",
    "name": "Maria Neustift",
    "lat": "47.93333",
    "lng": "14.6"
  },
  {
    "country": "AT",
    "name": "Maria Lanzendorf",
    "lat": "48.09923",
    "lng": "16.41984"
  },
  {
    "country": "AT",
    "name": "Maria Lankowitz",
    "lat": "47.0622",
    "lng": "15.06525"
  },
  {
    "country": "AT",
    "name": "Maria Laach am Jauerling",
    "lat": "48.30412",
    "lng": "15.34472"
  },
  {
    "country": "AT",
    "name": "Mariahof",
    "lat": "47.1",
    "lng": "14.4"
  },
  {
    "country": "AT",
    "name": "Maria Enzersdorf",
    "lat": "48.1",
    "lng": "16.28333"
  },
  {
    "country": "AT",
    "name": "Maria Ellend",
    "lat": "48.1",
    "lng": "16.68333"
  },
  {
    "country": "AT",
    "name": "Maria-Anzbach",
    "lat": "48.19012",
    "lng": "15.93155"
  },
  {
    "country": "AT",
    "name": "Maria Alm am Steinernen Meer",
    "lat": "47.40579",
    "lng": "12.90121"
  },
  {
    "country": "AT",
    "name": "Margarethen am Moos",
    "lat": "48.03333",
    "lng": "16.6"
  },
  {
    "country": "AT",
    "name": "Marchtrenk",
    "lat": "48.19022",
    "lng": "14.10908"
  },
  {
    "country": "AT",
    "name": "Marchegg",
    "lat": "48.26217",
    "lng": "16.91045"
  },
  {
    "country": "AT",
    "name": "Marbach an der Donau",
    "lat": "48.21667",
    "lng": "15.15"
  },
  {
    "country": "AT",
    "name": "Mannswörth",
    "lat": "48.14547",
    "lng": "16.51374"
  },
  {
    "country": "AT",
    "name": "Mannsdorf an der Donau",
    "lat": "48.152",
    "lng": "16.66506"
  },
  {
    "country": "AT",
    "name": "Manning",
    "lat": "48.08851",
    "lng": "13.66682"
  },
  {
    "country": "AT",
    "name": "Mannersdorf an der Rabnitz",
    "lat": "47.42815",
    "lng": "16.52678"
  },
  {
    "country": "AT",
    "name": "Mannersdorf am Leithagebirge",
    "lat": "47.96667",
    "lng": "16.6"
  },
  {
    "country": "AT",
    "name": "Mank",
    "lat": "48.11024",
    "lng": "15.33915"
  },
  {
    "country": "AT",
    "name": "Maissau",
    "lat": "48.573",
    "lng": "15.83005"
  },
  {
    "country": "AT",
    "name": "Maishofen",
    "lat": "47.36667",
    "lng": "12.8"
  },
  {
    "country": "AT",
    "name": "Mailberg",
    "lat": "48.67379",
    "lng": "16.18132"
  },
  {
    "country": "AT",
    "name": "Maierdorf",
    "lat": "46.8925",
    "lng": "15.84972"
  },
  {
    "country": "AT",
    "name": "Mäder",
    "lat": "47.35",
    "lng": "9.61667"
  },
  {
    "country": "AT",
    "name": "Lutzmannsburg",
    "lat": "47.46373",
    "lng": "16.63665"
  },
  {
    "country": "AT",
    "name": "Lustenau",
    "lat": "47.42642",
    "lng": "9.65851"
  },
  {
    "country": "AT",
    "name": "Lunz am See",
    "lat": "47.8612",
    "lng": "15.02998"
  },
  {
    "country": "AT",
    "name": "Luftenberg an der Donau",
    "lat": "48.27462",
    "lng": "14.41303"
  },
  {
    "country": "AT",
    "name": "Ludmannsdorf",
    "lat": "46.54139",
    "lng": "14.13425"
  },
  {
    "country": "AT",
    "name": "Ludesch",
    "lat": "47.2",
    "lng": "9.78306"
  },
  {
    "country": "AT",
    "name": "Losenstein",
    "lat": "47.92428",
    "lng": "14.43672"
  },
  {
    "country": "AT",
    "name": "Lorüns",
    "lat": "47.13306",
    "lng": "9.85"
  },
  {
    "country": "AT",
    "name": "Loretto",
    "lat": "47.91559",
    "lng": "16.5179"
  },
  {
    "country": "AT",
    "name": "Loosdorf",
    "lat": "48.2",
    "lng": "15.4"
  },
  {
    "country": "AT",
    "name": "Loipersdorf bei Fürstenfeld",
    "lat": "47",
    "lng": "16.1"
  },
  {
    "country": "AT",
    "name": "Loipersbach im Burgenland",
    "lat": "47.69656",
    "lng": "16.47919"
  },
  {
    "country": "AT",
    "name": "Loich",
    "lat": "47.99578",
    "lng": "15.40163"
  },
  {
    "country": "AT",
    "name": "Lofer",
    "lat": "47.58475",
    "lng": "12.69333"
  },
  {
    "country": "AT",
    "name": "Lödersdorf",
    "lat": "46.95861",
    "lng": "15.94333"
  },
  {
    "country": "AT",
    "name": "Lochau",
    "lat": "47.53333",
    "lng": "9.75"
  },
  {
    "country": "AT",
    "name": "Litzelsdorf",
    "lat": "47.20826",
    "lng": "16.1717"
  },
  {
    "country": "AT",
    "name": "Litschau",
    "lat": "48.94409",
    "lng": "15.04483"
  },
  {
    "country": "AT",
    "name": "Linz",
    "lat": "48.30639",
    "lng": "14.28611"
  },
  {
    "country": "AT",
    "name": "Lilienfeld",
    "lat": "48.01312",
    "lng": "15.59664"
  },
  {
    "country": "AT",
    "name": "Ligist",
    "lat": "46.99389",
    "lng": "15.21083"
  },
  {
    "country": "AT",
    "name": "Liezen",
    "lat": "47.56667",
    "lng": "14.23333"
  },
  {
    "country": "AT",
    "name": "Liesingtal",
    "lat": "47.34597",
    "lng": "15.01352"
  },
  {
    "country": "AT",
    "name": "Lienz",
    "lat": "46.8289",
    "lng": "12.76903"
  },
  {
    "country": "AT",
    "name": "Lieboch",
    "lat": "46.97417",
    "lng": "15.3375"
  },
  {
    "country": "AT",
    "name": "Liebenau",
    "lat": "47.03333",
    "lng": "15.46667"
  },
  {
    "country": "AT",
    "name": "Lichtenwörth",
    "lat": "47.82756",
    "lng": "16.29873"
  },
  {
    "country": "AT",
    "name": "Lichtenegg",
    "lat": "48.15",
    "lng": "14"
  },
  {
    "country": "AT",
    "name": "Lichtenegg",
    "lat": "47.6",
    "lng": "16.2"
  },
  {
    "country": "AT",
    "name": "Leutschach",
    "lat": "46.66722",
    "lng": "15.46889"
  },
  {
    "country": "AT",
    "name": "Lermoos",
    "lat": "47.40358",
    "lng": "10.8807"
  },
  {
    "country": "AT",
    "name": "Leopoldsdorf im Marchfelde",
    "lat": "48.22261",
    "lng": "16.68858"
  },
  {
    "country": "AT",
    "name": "Leopoldsdorf",
    "lat": "48.11557",
    "lng": "16.39126"
  },
  {
    "country": "AT",
    "name": "Leonstein",
    "lat": "47.89666",
    "lng": "14.23124"
  },
  {
    "country": "AT",
    "name": "Leonding",
    "lat": "48.27965",
    "lng": "14.2533"
  },
  {
    "country": "AT",
    "name": "Leogang",
    "lat": "47.43906",
    "lng": "12.76109"
  },
  {
    "country": "AT",
    "name": "Leobersdorf",
    "lat": "47.92796",
    "lng": "16.21651"
  },
  {
    "country": "AT",
    "name": "Leobendorf",
    "lat": "48.38333",
    "lng": "16.31667"
  },
  {
    "country": "AT",
    "name": "Leoben",
    "lat": "47.3765",
    "lng": "15.09144"
  },
  {
    "country": "AT",
    "name": "Lenzing",
    "lat": "47.97326",
    "lng": "13.60846"
  },
  {
    "country": "AT",
    "name": "Lengfelden",
    "lat": "47.85",
    "lng": "13.05"
  },
  {
    "country": "AT",
    "name": "Lengenfeld",
    "lat": "48.47187",
    "lng": "15.5987"
  },
  {
    "country": "AT",
    "name": "Lendorf",
    "lat": "46.83528",
    "lng": "13.43028"
  },
  {
    "country": "AT",
    "name": "Lend",
    "lat": "47.29856",
    "lng": "13.05176"
  },
  {
    "country": "AT",
    "name": "Lembach im Mühlkreis",
    "lat": "48.49517",
    "lng": "13.89513"
  },
  {
    "country": "AT",
    "name": "Leitzersdorf",
    "lat": "48.41918",
    "lng": "16.24513"
  },
  {
    "country": "AT",
    "name": "Leitring",
    "lat": "46.77957",
    "lng": "15.55915"
  },
  {
    "country": "AT",
    "name": "Leithaprodersdorf",
    "lat": "47.93348",
    "lng": "16.47915"
  },
  {
    "country": "AT",
    "name": "Leitersdorf im Raabtal",
    "lat": "46.94182",
    "lng": "15.93365"
  },
  {
    "country": "AT",
    "name": "Leitendorf",
    "lat": "47.36667",
    "lng": "15.08333"
  },
  {
    "country": "AT",
    "name": "Leisach",
    "lat": "46.8125",
    "lng": "12.74861"
  },
  {
    "country": "AT",
    "name": "Leibnitz",
    "lat": "46.78161",
    "lng": "15.53836"
  },
  {
    "country": "AT",
    "name": "Leiben",
    "lat": "48.24628",
    "lng": "15.2746"
  },
  {
    "country": "AT",
    "name": "Ledenitzen",
    "lat": "46.56639",
    "lng": "13.96139"
  },
  {
    "country": "AT",
    "name": "Lechaschau",
    "lat": "47.48804",
    "lng": "10.70652"
  },
  {
    "country": "AT",
    "name": "Lech",
    "lat": "47.20797",
    "lng": "10.14184"
  },
  {
    "country": "AT",
    "name": "Laxenburg",
    "lat": "48.06833",
    "lng": "16.35607"
  },
  {
    "country": "AT",
    "name": "Tullnerbach-Lawies",
    "lat": "48.18912",
    "lng": "16.09117"
  },
  {
    "country": "AT",
    "name": "Lavant",
    "lat": "46.79889",
    "lng": "12.83806"
  },
  {
    "country": "AT",
    "name": "Lavamünd",
    "lat": "46.64019",
    "lng": "14.94733"
  },
  {
    "country": "AT",
    "name": "Lauterach",
    "lat": "47.47572",
    "lng": "9.72941"
  },
  {
    "country": "AT",
    "name": "Laussa",
    "lat": "47.95",
    "lng": "14.45"
  },
  {
    "country": "AT",
    "name": "Launsdorf",
    "lat": "46.77056",
    "lng": "14.45194"
  },
  {
    "country": "AT",
    "name": "Lassnitzhöhe",
    "lat": "47.06667",
    "lng": "15.58333"
  },
  {
    "country": "AT",
    "name": "Lassing",
    "lat": "47.53374",
    "lng": "14.25808"
  },
  {
    "country": "AT",
    "name": "Lassee",
    "lat": "48.22479",
    "lng": "16.8223"
  },
  {
    "country": "AT",
    "name": "Lanzenkirchen",
    "lat": "47.73621",
    "lng": "16.21985"
  },
  {
    "country": "AT",
    "name": "Lans",
    "lat": "47.23833",
    "lng": "11.43139"
  },
  {
    "country": "AT",
    "name": "Lannach",
    "lat": "46.94611",
    "lng": "15.33722"
  },
  {
    "country": "AT",
    "name": "Langschlag",
    "lat": "48.57448",
    "lng": "14.88459"
  },
  {
    "country": "AT",
    "name": "Langenzersdorf",
    "lat": "48.30432",
    "lng": "16.36143"
  },
  {
    "country": "AT",
    "name": "Langenwang",
    "lat": "47.56667",
    "lng": "15.61667"
  },
  {
    "country": "AT",
    "name": "Langenstein",
    "lat": "48.252",
    "lng": "14.47655"
  },
  {
    "country": "AT",
    "name": "Langenrohr",
    "lat": "48.30489",
    "lng": "16.01034"
  },
  {
    "country": "AT",
    "name": "Langenlois",
    "lat": "48.46667",
    "lng": "15.66667"
  },
  {
    "country": "AT",
    "name": "Langen",
    "lat": "47.51667",
    "lng": "9.81667"
  },
  {
    "country": "AT",
    "name": "Langegg bei Graz",
    "lat": "47.05",
    "lng": "15.63333"
  },
  {
    "country": "AT",
    "name": "Langau",
    "lat": "48.83207",
    "lng": "15.7156"
  },
  {
    "country": "AT",
    "name": "Lang",
    "lat": "46.83765",
    "lng": "15.50471"
  },
  {
    "country": "AT",
    "name": "Landskron",
    "lat": "46.61667",
    "lng": "13.88333"
  },
  {
    "country": "AT",
    "name": "Landl",
    "lat": "47.65666",
    "lng": "14.73189"
  },
  {
    "country": "AT",
    "name": "Landegg",
    "lat": "47.9",
    "lng": "16.4"
  },
  {
    "country": "AT",
    "name": "Landeck",
    "lat": "47.13988",
    "lng": "10.56593"
  },
  {
    "country": "AT",
    "name": "Lamprechtshausen",
    "lat": "47.99098",
    "lng": "12.95481"
  },
  {
    "country": "AT",
    "name": "Lambach",
    "lat": "48.09276",
    "lng": "13.87453"
  },
  {
    "country": "AT",
    "name": "Lafnitz",
    "lat": "47.36792",
    "lng": "16.01103"
  },
  {
    "country": "AT",
    "name": "Ladis",
    "lat": "47.07459",
    "lng": "10.64949"
  },
  {
    "country": "AT",
    "name": "Ladendorf",
    "lat": "48.53333",
    "lng": "16.48333"
  },
  {
    "country": "AT",
    "name": "Lackendorf",
    "lat": "47.58996",
    "lng": "16.50404"
  },
  {
    "country": "AT",
    "name": "Lackenbach",
    "lat": "47.59042",
    "lng": "16.46533"
  },
  {
    "country": "AT",
    "name": "Labuch",
    "lat": "47.06667",
    "lng": "15.66667"
  },
  {
    "country": "AT",
    "name": "Laakirchen",
    "lat": "47.98188",
    "lng": "13.82166"
  },
  {
    "country": "AT",
    "name": "Laab im Walde",
    "lat": "48.15486",
    "lng": "16.17359"
  },
  {
    "country": "AT",
    "name": "Laa an der Thaya",
    "lat": "48.71667",
    "lng": "16.38333"
  },
  {
    "country": "AT",
    "name": "Kundl",
    "lat": "47.46667",
    "lng": "11.98333"
  },
  {
    "country": "AT",
    "name": "Kumberg",
    "lat": "47.16422",
    "lng": "15.53261"
  },
  {
    "country": "AT",
    "name": "Kulm am Zirbitz",
    "lat": "47.05814",
    "lng": "14.48702"
  },
  {
    "country": "AT",
    "name": "Kukmirn",
    "lat": "47.07544",
    "lng": "16.21033"
  },
  {
    "country": "AT",
    "name": "Kühnsdorf",
    "lat": "46.62194",
    "lng": "14.63639"
  },
  {
    "country": "AT",
    "name": "Kufstein",
    "lat": "47.58333",
    "lng": "12.16667"
  },
  {
    "country": "AT",
    "name": "Kuchl",
    "lat": "47.62647",
    "lng": "13.1448"
  },
  {
    "country": "AT",
    "name": "Krusdorf",
    "lat": "46.83944",
    "lng": "15.86083"
  },
  {
    "country": "AT",
    "name": "Krumpendorf",
    "lat": "46.62526",
    "lng": "14.21664"
  },
  {
    "country": "AT",
    "name": "Krumnussbaum",
    "lat": "48.20877",
    "lng": "15.16212"
  },
  {
    "country": "AT",
    "name": "Krumegg",
    "lat": "47.02111",
    "lng": "15.63139"
  },
  {
    "country": "AT",
    "name": "Krumbach Markt",
    "lat": "47.52183",
    "lng": "16.19419"
  },
  {
    "country": "AT",
    "name": "Krumbach",
    "lat": "47.48306",
    "lng": "9.93583"
  },
  {
    "country": "AT",
    "name": "Krumau am Kamp",
    "lat": "48.58879",
    "lng": "15.44914"
  },
  {
    "country": "AT",
    "name": "Krottendorf bei Ligist",
    "lat": "47.01667",
    "lng": "15.21667"
  },
  {
    "country": "AT",
    "name": "Krottendorf",
    "lat": "47.2",
    "lng": "15.63333"
  },
  {
    "country": "AT",
    "name": "Kronstorf",
    "lat": "48.14324",
    "lng": "14.46307"
  },
  {
    "country": "AT",
    "name": "Kritzendorf",
    "lat": "48.32932",
    "lng": "16.30011"
  },
  {
    "country": "AT",
    "name": "Krispl",
    "lat": "47.71667",
    "lng": "13.18333"
  },
  {
    "country": "AT",
    "name": "Krieglach",
    "lat": "47.54728",
    "lng": "15.56248"
  },
  {
    "country": "AT",
    "name": "Bad Kreuzen",
    "lat": "48.26737",
    "lng": "14.80648"
  },
  {
    "country": "AT",
    "name": "Krensdorf",
    "lat": "47.78552",
    "lng": "16.41495"
  },
  {
    "country": "AT",
    "name": "Kremsmünster",
    "lat": "48.0529",
    "lng": "14.12919"
  },
  {
    "country": "AT",
    "name": "Kremsdorf",
    "lat": "48.20031",
    "lng": "14.26249"
  },
  {
    "country": "AT",
    "name": "Krems an der Donau",
    "lat": "48.40921",
    "lng": "15.61415"
  },
  {
    "country": "AT",
    "name": "Kraubath an der Mur",
    "lat": "47.3",
    "lng": "14.93333"
  },
  {
    "country": "AT",
    "name": "Kramsach",
    "lat": "47.44312",
    "lng": "11.87545"
  },
  {
    "country": "AT",
    "name": "Krakauschatten",
    "lat": "47.18333",
    "lng": "13.96667"
  },
  {
    "country": "AT",
    "name": "Krakauhintermühlen",
    "lat": "47.18333",
    "lng": "13.98333"
  },
  {
    "country": "AT",
    "name": "Krakaudorf",
    "lat": "47.18131",
    "lng": "14.02061"
  },
  {
    "country": "AT",
    "name": "Köttmannsdorf",
    "lat": "46.56139",
    "lng": "14.23389"
  },
  {
    "country": "AT",
    "name": "Kottingbrunn",
    "lat": "47.95096",
    "lng": "16.22715"
  },
  {
    "country": "AT",
    "name": "Kötschach",
    "lat": "46.68167",
    "lng": "13.00694"
  },
  {
    "country": "AT",
    "name": "Köstendorf",
    "lat": "47.95",
    "lng": "13.2"
  },
  {
    "country": "AT",
    "name": "Kössen",
    "lat": "47.6699",
    "lng": "12.40545"
  },
  {
    "country": "AT",
    "name": "Korneuburg",
    "lat": "48.35",
    "lng": "16.33333"
  },
  {
    "country": "AT",
    "name": "Koppl",
    "lat": "47.80808",
    "lng": "13.15561"
  },
  {
    "country": "AT",
    "name": "Kopfing im Innkreis",
    "lat": "48.43991",
    "lng": "13.65841"
  },
  {
    "country": "AT",
    "name": "Königswiesen",
    "lat": "48.40453",
    "lng": "14.83824"
  },
  {
    "country": "AT",
    "name": "Königstetten",
    "lat": "48.30198",
    "lng": "16.14492"
  },
  {
    "country": "AT",
    "name": "Königsdorf",
    "lat": "47.0025",
    "lng": "16.1682"
  },
  {
    "country": "AT",
    "name": "Kolsassberg",
    "lat": "47.2815",
    "lng": "11.65289"
  },
  {
    "country": "AT",
    "name": "Kohlschwarz",
    "lat": "47.11667",
    "lng": "15.11667"
  },
  {
    "country": "AT",
    "name": "Kohlberg",
    "lat": "46.9",
    "lng": "15.78333"
  },
  {
    "country": "AT",
    "name": "Kohfidisch",
    "lat": "47.17472",
    "lng": "16.35701"
  },
  {
    "country": "AT",
    "name": "Köflach",
    "lat": "47.06667",
    "lng": "15.08333"
  },
  {
    "country": "AT",
    "name": "Koblach",
    "lat": "47.33306",
    "lng": "9.6"
  },
  {
    "country": "AT",
    "name": "Kobersdorf",
    "lat": "47.59572",
    "lng": "16.39173"
  },
  {
    "country": "AT",
    "name": "Kobenz",
    "lat": "47.25",
    "lng": "14.85"
  },
  {
    "country": "AT",
    "name": "Knittelfeld",
    "lat": "47.21667",
    "lng": "14.81667"
  },
  {
    "country": "AT",
    "name": "Klosterneuburg",
    "lat": "48.30521",
    "lng": "16.32522"
  },
  {
    "country": "AT",
    "name": "Klösterle",
    "lat": "47.13333",
    "lng": "10.08333"
  },
  {
    "country": "AT",
    "name": "Kloster",
    "lat": "46.88333",
    "lng": "15.08333"
  },
  {
    "country": "AT",
    "name": "Klöch",
    "lat": "46.76472",
    "lng": "15.96556"
  },
  {
    "country": "AT",
    "name": "Klingenbach",
    "lat": "47.75202",
    "lng": "16.54069"
  },
  {
    "country": "AT",
    "name": "Kleinzell",
    "lat": "47.97993",
    "lng": "15.7362"
  },
  {
    "country": "AT",
    "name": "Kleinsölk",
    "lat": "47.39444",
    "lng": "13.93944"
  },
  {
    "country": "AT",
    "name": "Kleinsöding",
    "lat": "47",
    "lng": "15.28333"
  },
  {
    "country": "AT",
    "name": "Klein Sankt Paul",
    "lat": "46.83611",
    "lng": "14.54139"
  },
  {
    "country": "AT",
    "name": "Klein-Pöchlarn",
    "lat": "48.21667",
    "lng": "15.21667"
  },
  {
    "country": "AT",
    "name": "Kleinmürbisch",
    "lat": "47.03299",
    "lng": "16.32448"
  },
  {
    "country": "AT",
    "name": "Kleinlobming",
    "lat": "47.14954",
    "lng": "14.84875"
  },
  {
    "country": "AT",
    "name": "Kleinhöflein im Burgenland",
    "lat": "47.84151",
    "lng": "16.50413"
  },
  {
    "country": "AT",
    "name": "Klausen-Leopoldsdorf",
    "lat": "48.08771",
    "lng": "16.01686"
  },
  {
    "country": "AT",
    "name": "Klaus",
    "lat": "47.36333",
    "lng": "9.87778"
  },
  {
    "country": "AT",
    "name": "Klaus",
    "lat": "47.30913",
    "lng": "9.64678"
  },
  {
    "country": "AT",
    "name": "Klagenfurt am Wörthersee",
    "lat": "46.62472",
    "lng": "14.30528"
  },
  {
    "country": "AT",
    "name": "Klaffer am Hochficht",
    "lat": "48.69544",
    "lng": "13.88131"
  },
  {
    "country": "AT",
    "name": "Kitzeck im Sausal",
    "lat": "46.78072",
    "lng": "15.45384"
  },
  {
    "country": "AT",
    "name": "Kitzbühel",
    "lat": "47.44637",
    "lng": "12.39215"
  },
  {
    "country": "AT",
    "name": "Kittsee",
    "lat": "48.0925",
    "lng": "17.06389"
  },
  {
    "country": "AT",
    "name": "Kirnberg an der Mank",
    "lat": "48.07246",
    "lng": "15.32232"
  },
  {
    "country": "AT",
    "name": "Kirchstetten",
    "lat": "48.18333",
    "lng": "15.81667"
  },
  {
    "country": "AT",
    "name": "Kirchschlag in der Buckligen Welt",
    "lat": "47.5",
    "lng": "16.28333"
  },
  {
    "country": "AT",
    "name": "Kirchschlag bei Linz",
    "lat": "48.41149",
    "lng": "14.27656"
  },
  {
    "country": "AT",
    "name": "Kirchschlag",
    "lat": "48.39345",
    "lng": "15.22285"
  },
  {
    "country": "AT",
    "name": "Kirchdorf in Tirol",
    "lat": "47.55626",
    "lng": "12.44511"
  },
  {
    "country": "AT",
    "name": "Kirchdorf an der Krems",
    "lat": "47.90558",
    "lng": "14.12228"
  },
  {
    "country": "AT",
    "name": "Kirchberg ob der Donau",
    "lat": "48.4444",
    "lng": "13.93805"
  },
  {
    "country": "AT",
    "name": "Kirchberg in Tirol",
    "lat": "47.44539",
    "lng": "12.31602"
  },
  {
    "country": "AT",
    "name": "Kirchberg an der Raab",
    "lat": "46.98583",
    "lng": "15.76694"
  },
  {
    "country": "AT",
    "name": "Kirchberg an der Pielach",
    "lat": "48.0269",
    "lng": "15.42875"
  },
  {
    "country": "AT",
    "name": "Kirchberg am Wechsel",
    "lat": "47.60738",
    "lng": "15.99103"
  },
  {
    "country": "AT",
    "name": "Kirchberg am Walde",
    "lat": "48.72477",
    "lng": "15.08826"
  },
  {
    "country": "AT",
    "name": "Kirchberg am Wagram",
    "lat": "48.43182",
    "lng": "15.89692"
  },
  {
    "country": "AT",
    "name": "Kirchbach in Steiermark",
    "lat": "46.93167",
    "lng": "15.66194"
  },
  {
    "country": "AT",
    "name": "Kirchbach",
    "lat": "46.6416",
    "lng": "13.18454"
  },
  {
    "country": "AT",
    "name": "Kindberg",
    "lat": "47.5",
    "lng": "15.45"
  },
  {
    "country": "AT",
    "name": "Kilb",
    "lat": "48.10101",
    "lng": "15.4085"
  },
  {
    "country": "AT",
    "name": "Kierling",
    "lat": "48.30997",
    "lng": "16.27616"
  },
  {
    "country": "AT",
    "name": "Keutschach am See",
    "lat": "46.59306",
    "lng": "14.18889"
  },
  {
    "country": "AT",
    "name": "Kennelbach",
    "lat": "47.48306",
    "lng": "9.76667"
  },
  {
    "country": "AT",
    "name": "Kemeten",
    "lat": "47.24859",
    "lng": "16.15213"
  },
  {
    "country": "AT",
    "name": "Kematen in Tirol",
    "lat": "47.25",
    "lng": "11.26667"
  },
  {
    "country": "AT",
    "name": "Kematen an der Krems",
    "lat": "48.1115",
    "lng": "14.19391"
  },
  {
    "country": "AT",
    "name": "Kematen an der Ybbs",
    "lat": "48.02541",
    "lng": "14.76468"
  },
  {
    "country": "AT",
    "name": "Kautzen",
    "lat": "48.93",
    "lng": "15.23932"
  },
  {
    "country": "AT",
    "name": "Kauns",
    "lat": "47.07822",
    "lng": "10.69219"
  },
  {
    "country": "AT",
    "name": "Kaumberg",
    "lat": "48.02415",
    "lng": "15.89842"
  },
  {
    "country": "AT",
    "name": "Katzelsdorf",
    "lat": "48.28456",
    "lng": "16.10836"
  },
  {
    "country": "AT",
    "name": "Katzelsdorf",
    "lat": "47.78055",
    "lng": "16.26985"
  },
  {
    "country": "AT",
    "name": "Katsdorf",
    "lat": "48.31791",
    "lng": "14.47432"
  },
  {
    "country": "AT",
    "name": "Kasten bei Böheimkirchen",
    "lat": "48.1532",
    "lng": "15.77946"
  },
  {
    "country": "AT",
    "name": "Kartitsch",
    "lat": "46.72889",
    "lng": "12.50083"
  },
  {
    "country": "AT",
    "name": "Karrösten",
    "lat": "47.2254",
    "lng": "10.76561"
  },
  {
    "country": "AT",
    "name": "Karres",
    "lat": "47.21667",
    "lng": "10.78333"
  },
  {
    "country": "AT",
    "name": "Karlstetten",
    "lat": "48.2592",
    "lng": "15.56544"
  },
  {
    "country": "AT",
    "name": "Kaprun",
    "lat": "47.27239",
    "lng": "12.75985"
  },
  {
    "country": "AT",
    "name": "Kappl",
    "lat": "47.06667",
    "lng": "10.38333"
  },
  {
    "country": "AT",
    "name": "Kappel am Krappfeld",
    "lat": "46.83861",
    "lng": "14.48639"
  },
  {
    "country": "AT",
    "name": "Kapfing",
    "lat": "47.33333",
    "lng": "11.85"
  },
  {
    "country": "AT",
    "name": "Kapfenstein",
    "lat": "46.88611",
    "lng": "15.97167"
  },
  {
    "country": "AT",
    "name": "Kapfenberg",
    "lat": "47.44458",
    "lng": "15.29331"
  },
  {
    "country": "AT",
    "name": "Kapelln",
    "lat": "48.25817",
    "lng": "15.75731"
  },
  {
    "country": "AT",
    "name": "Kapellen",
    "lat": "47.64784",
    "lng": "15.62863"
  },
  {
    "country": "AT",
    "name": "Kammern im Liesingtal",
    "lat": "47.39245",
    "lng": "14.90407"
  },
  {
    "country": "AT",
    "name": "Kalwang",
    "lat": "47.42678",
    "lng": "14.75442"
  },
  {
    "country": "AT",
    "name": "Kaltenleutgeben",
    "lat": "48.11646",
    "lng": "16.19956"
  },
  {
    "country": "AT",
    "name": "Kaltenbach",
    "lat": "47.70766",
    "lng": "13.6105"
  },
  {
    "country": "AT",
    "name": "Kaltenbach",
    "lat": "47.28333",
    "lng": "11.86667"
  },
  {
    "country": "AT",
    "name": "Kalsdorf bei Graz",
    "lat": "46.96528",
    "lng": "15.48028"
  },
  {
    "country": "AT",
    "name": "Kaisersdorf",
    "lat": "47.53741",
    "lng": "16.39198"
  },
  {
    "country": "AT",
    "name": "Kaindorf an der Sulm",
    "lat": "46.79248",
    "lng": "15.53879"
  },
  {
    "country": "AT",
    "name": "Kaindorf",
    "lat": "47.22537",
    "lng": "15.91125"
  },
  {
    "country": "AT",
    "name": "Kainbach",
    "lat": "47.08333",
    "lng": "15.51667"
  },
  {
    "country": "AT",
    "name": "Kainach bei Voitsberg",
    "lat": "47.13637",
    "lng": "15.0953"
  },
  {
    "country": "AT",
    "name": "Kaibing",
    "lat": "47.2",
    "lng": "15.83333"
  },
  {
    "country": "AT",
    "name": "Jungholz",
    "lat": "47.57409",
    "lng": "10.44723"
  },
  {
    "country": "AT",
    "name": "Judendorf",
    "lat": "47.4",
    "lng": "15.1"
  },
  {
    "country": "AT",
    "name": "Warmbad-Judendorf",
    "lat": "46.60126",
    "lng": "13.82241"
  },
  {
    "country": "AT",
    "name": "Judendorf",
    "lat": "47.11667",
    "lng": "15.35"
  },
  {
    "country": "AT",
    "name": "Judenburg",
    "lat": "47.16667",
    "lng": "14.66667"
  },
  {
    "country": "AT",
    "name": "Jois",
    "lat": "47.96165",
    "lng": "16.79604"
  },
  {
    "country": "AT",
    "name": "Johnsbach",
    "lat": "47.53333",
    "lng": "14.58333"
  },
  {
    "country": "AT",
    "name": "Jochberg",
    "lat": "47.3792",
    "lng": "12.41807"
  },
  {
    "country": "AT",
    "name": "Jerzens",
    "lat": "47.1512",
    "lng": "10.74686"
  },
  {
    "country": "AT",
    "name": "Jennersdorf",
    "lat": "46.93848",
    "lng": "16.14158"
  },
  {
    "country": "AT",
    "name": "Jenbach",
    "lat": "47.39173",
    "lng": "11.77245"
  },
  {
    "country": "AT",
    "name": "Jedenspeigen",
    "lat": "48.49807",
    "lng": "16.87225"
  },
  {
    "country": "AT",
    "name": "Japons",
    "lat": "48.7925",
    "lng": "15.56831"
  },
  {
    "country": "AT",
    "name": "Jaidhof",
    "lat": "48.53333",
    "lng": "15.48333"
  },
  {
    "country": "AT",
    "name": "Jagerberg",
    "lat": "46.85361",
    "lng": "15.73806"
  },
  {
    "country": "AT",
    "name": "Jabing",
    "lat": "47.2388",
    "lng": "16.27659"
  },
  {
    "country": "AT",
    "name": "Ysper",
    "lat": "48.28865",
    "lng": "15.06131"
  },
  {
    "country": "AT",
    "name": "Ischgl",
    "lat": "47.01257",
    "lng": "10.29179"
  },
  {
    "country": "AT",
    "name": "Irschen",
    "lat": "46.75694",
    "lng": "13.02528"
  },
  {
    "country": "AT",
    "name": "Irrsdorf",
    "lat": "47.96667",
    "lng": "13.28333"
  },
  {
    "country": "AT",
    "name": "Irdning",
    "lat": "47.50529",
    "lng": "14.10155"
  },
  {
    "country": "AT",
    "name": "Inzing",
    "lat": "47.2737",
    "lng": "11.19751"
  },
  {
    "country": "AT",
    "name": "Inzersdorf im Kremstal",
    "lat": "47.92808",
    "lng": "14.08104"
  },
  {
    "country": "AT",
    "name": "Inzenhof",
    "lat": "47.01667",
    "lng": "16.31667"
  },
  {
    "country": "AT",
    "name": "Innsbruck",
    "lat": "47.26266",
    "lng": "11.39454"
  },
  {
    "country": "AT",
    "name": "Weerberg",
    "lat": "47.29841",
    "lng": "11.66592"
  },
  {
    "country": "AT",
    "name": "Innervillgraten",
    "lat": "46.81194",
    "lng": "12.37472"
  },
  {
    "country": "AT",
    "name": "Innerschwand",
    "lat": "47.83333",
    "lng": "13.4"
  },
  {
    "country": "AT",
    "name": "Innere Stadt",
    "lat": "48.20906",
    "lng": "16.37135"
  },
  {
    "country": "AT",
    "name": "Innerbraz",
    "lat": "47.15",
    "lng": "9.91667"
  },
  {
    "country": "AT",
    "name": "Imsterberg",
    "lat": "47.20517",
    "lng": "10.69605"
  },
  {
    "country": "AT",
    "name": "Imst",
    "lat": "47.24504",
    "lng": "10.73974"
  },
  {
    "country": "AT",
    "name": "Ilz",
    "lat": "47.08649",
    "lng": "15.92676"
  },
  {
    "country": "AT",
    "name": "Illmitz",
    "lat": "47.76148",
    "lng": "16.80024"
  },
  {
    "country": "AT",
    "name": "Hüttschlag",
    "lat": "47.17635",
    "lng": "13.23239"
  },
  {
    "country": "AT",
    "name": "Hüttenberg",
    "lat": "46.94139",
    "lng": "14.55"
  },
  {
    "country": "AT",
    "name": "Hutten",
    "lat": "48.17856",
    "lng": "15.98579"
  },
  {
    "country": "AT",
    "name": "Hüttau",
    "lat": "47.4161",
    "lng": "13.30775"
  },
  {
    "country": "AT",
    "name": "Hürm",
    "lat": "48.15601",
    "lng": "15.41262"
  },
  {
    "country": "AT",
    "name": "Hundsheim",
    "lat": "48.11749",
    "lng": "16.93581"
  },
  {
    "country": "AT",
    "name": "Hötting",
    "lat": "47.26815",
    "lng": "11.36868"
  },
  {
    "country": "AT",
    "name": "Hörtendorf",
    "lat": "46.63333",
    "lng": "14.4"
  },
  {
    "country": "AT",
    "name": "Hörsching",
    "lat": "48.22627",
    "lng": "14.17786"
  },
  {
    "country": "AT",
    "name": "Hornstein",
    "lat": "47.88049",
    "lng": "16.44447"
  },
  {
    "country": "AT",
    "name": "Horn",
    "lat": "48.66274",
    "lng": "15.65663"
  },
  {
    "country": "AT",
    "name": "Horitschon",
    "lat": "47.58729",
    "lng": "16.54696"
  },
  {
    "country": "AT",
    "name": "Hörbranz",
    "lat": "47.55",
    "lng": "9.75"
  },
  {
    "country": "AT",
    "name": "Hopfgarten im Brixental",
    "lat": "47.4498",
    "lng": "12.15659"
  },
  {
    "country": "AT",
    "name": "Hopfgarten in Defereggen",
    "lat": "46.91917",
    "lng": "12.53639"
  },
  {
    "country": "AT",
    "name": "Hönigsberg",
    "lat": "47.58038",
    "lng": "15.64808"
  },
  {
    "country": "AT",
    "name": "Holzhausen",
    "lat": "48.22296",
    "lng": "14.09683"
  },
  {
    "country": "AT",
    "name": "Hollersbach im Pinzgau",
    "lat": "47.27658",
    "lng": "12.42326"
  },
  {
    "country": "AT",
    "name": "Hollenthon",
    "lat": "47.58938",
    "lng": "16.26131"
  },
  {
    "country": "AT",
    "name": "Hollenstein an der Ybbs",
    "lat": "47.80305",
    "lng": "14.77312"
  },
  {
    "country": "AT",
    "name": "Hollenegg",
    "lat": "46.79147",
    "lng": "15.21345"
  },
  {
    "country": "AT",
    "name": "Hollabrunn",
    "lat": "48.55",
    "lng": "16.08333"
  },
  {
    "country": "AT",
    "name": "Hohenweiler",
    "lat": "47.58449",
    "lng": "9.7795"
  },
  {
    "country": "AT",
    "name": "Hohenthurn",
    "lat": "46.55774",
    "lng": "13.66038"
  },
  {
    "country": "AT",
    "name": "Hohentauern",
    "lat": "47.43333",
    "lng": "14.48333"
  },
  {
    "country": "AT",
    "name": "Hohenruppersdorf",
    "lat": "48.46439",
    "lng": "16.65244"
  },
  {
    "country": "AT",
    "name": "Hohenems",
    "lat": "47.36121",
    "lng": "9.68694"
  },
  {
    "country": "AT",
    "name": "Hoheneich",
    "lat": "48.77195",
    "lng": "15.02857"
  },
  {
    "country": "AT",
    "name": "Hohenberg",
    "lat": "47.90679",
    "lng": "15.61998"
  },
  {
    "country": "AT",
    "name": "Hohenau an der Raab",
    "lat": "47.3",
    "lng": "15.55"
  },
  {
    "country": "AT",
    "name": "Hohenau",
    "lat": "48.6042",
    "lng": "16.9047"
  },
  {
    "country": "AT",
    "name": "Hofstetten",
    "lat": "48.09711",
    "lng": "15.51149"
  },
  {
    "country": "AT",
    "name": "Hofstätten an der Raab",
    "lat": "47.06667",
    "lng": "15.73333"
  },
  {
    "country": "AT",
    "name": "Höflein",
    "lat": "48.06667",
    "lng": "16.78333"
  },
  {
    "country": "AT",
    "name": "Hofkirchen im Traunkreis",
    "lat": "48.14312",
    "lng": "14.37776"
  },
  {
    "country": "AT",
    "name": "Höfen",
    "lat": "47.46667",
    "lng": "10.68333"
  },
  {
    "country": "AT",
    "name": "Hof bei Straden",
    "lat": "46.8",
    "lng": "15.93333"
  },
  {
    "country": "AT",
    "name": "Hof bei Salzburg",
    "lat": "47.81929",
    "lng": "13.21488"
  },
  {
    "country": "AT",
    "name": "Hof am Leithaberge",
    "lat": "47.95",
    "lng": "16.58333"
  },
  {
    "country": "AT",
    "name": "Hof",
    "lat": "47.86667",
    "lng": "13.31667"
  },
  {
    "country": "AT",
    "name": "Hof",
    "lat": "47.35",
    "lng": "13.31667"
  },
  {
    "country": "AT",
    "name": "Hochwolkersdorf",
    "lat": "47.66127",
    "lng": "16.28072"
  },
  {
    "country": "AT",
    "name": "Hochtregist",
    "lat": "47.1",
    "lng": "15.13333"
  },
  {
    "country": "AT",
    "name": "Höchst",
    "lat": "47.45934",
    "lng": "9.6405"
  },
  {
    "country": "AT",
    "name": "Hochfilzen",
    "lat": "47.46667",
    "lng": "12.61667"
  },
  {
    "country": "AT",
    "name": "Hochburg-Ach",
    "lat": "48.13001",
    "lng": "12.87735"
  },
  {
    "country": "AT",
    "name": "Hitzendorf",
    "lat": "47.03333",
    "lng": "15.3"
  },
  {
    "country": "AT",
    "name": "Hirtenberg",
    "lat": "47.93095",
    "lng": "16.17908"
  },
  {
    "country": "AT",
    "name": "Hirschegg",
    "lat": "47.34813",
    "lng": "10.17137"
  },
  {
    "country": "AT",
    "name": "Hirschbach",
    "lat": "48.74329",
    "lng": "15.12521"
  },
  {
    "country": "AT",
    "name": "Hirnsdorf",
    "lat": "47.19167",
    "lng": "15.82868"
  },
  {
    "country": "AT",
    "name": "Hirm",
    "lat": "47.78652",
    "lng": "16.4546"
  },
  {
    "country": "AT",
    "name": "Hippach",
    "lat": "47.20435",
    "lng": "11.86523"
  },
  {
    "country": "AT",
    "name": "Hintersee",
    "lat": "47.7",
    "lng": "13.28333"
  },
  {
    "country": "AT",
    "name": "Hinterbrühl",
    "lat": "48.08611",
    "lng": "16.24809"
  },
  {
    "country": "AT",
    "name": "Himmelreich",
    "lat": "47.8",
    "lng": "12.98333"
  },
  {
    "country": "AT",
    "name": "Himmelberg",
    "lat": "46.75667",
    "lng": "14.03056"
  },
  {
    "country": "AT",
    "name": "Himberg",
    "lat": "48.08333",
    "lng": "16.43333"
  },
  {
    "country": "AT",
    "name": "Hietzing",
    "lat": "48.18623",
    "lng": "16.2965"
  },
  {
    "country": "AT",
    "name": "Hieflau",
    "lat": "47.60639",
    "lng": "14.74503"
  },
  {
    "country": "AT",
    "name": "Heugraben",
    "lat": "47.11783",
    "lng": "16.19041"
  },
  {
    "country": "AT",
    "name": "Hetzendorf",
    "lat": "47.18333",
    "lng": "14.68333"
  },
  {
    "country": "AT",
    "name": "Herzogsdorf",
    "lat": "48.43011",
    "lng": "14.1128"
  },
  {
    "country": "AT",
    "name": "Herzogenburg",
    "lat": "48.28137",
    "lng": "15.69431"
  },
  {
    "country": "AT",
    "name": "Herrnbaumgarten",
    "lat": "48.69606",
    "lng": "16.68283"
  },
  {
    "country": "AT",
    "name": "Hernstein",
    "lat": "47.89465",
    "lng": "16.10561"
  },
  {
    "country": "AT",
    "name": "Hernals",
    "lat": "48.23333",
    "lng": "16.26667"
  },
  {
    "country": "AT",
    "name": "Hermagor",
    "lat": "46.62722",
    "lng": "13.36722"
  },
  {
    "country": "AT",
    "name": "Hennersdorf",
    "lat": "48.11173",
    "lng": "16.36311"
  },
  {
    "country": "AT",
    "name": "Henndorf am Wallersee",
    "lat": "47.9",
    "lng": "13.18333"
  },
  {
    "country": "AT",
    "name": "Hengsberg",
    "lat": "46.8692",
    "lng": "15.4505"
  },
  {
    "country": "AT",
    "name": "Hellmonsödt",
    "lat": "48.43333",
    "lng": "14.3"
  },
  {
    "country": "AT",
    "name": "Heiterwang",
    "lat": "47.45",
    "lng": "10.75"
  },
  {
    "country": "AT",
    "name": "Heiligenkreuz im Lafnitztal",
    "lat": "46.98917",
    "lng": "16.26083"
  },
  {
    "country": "AT",
    "name": "Heiligenkreuz am Waasen",
    "lat": "46.95583",
    "lng": "15.58806"
  },
  {
    "country": "AT",
    "name": "Heiligenkreuz",
    "lat": "48.05559",
    "lng": "16.12493"
  },
  {
    "country": "AT",
    "name": "Heiligeneich",
    "lat": "48.29964",
    "lng": "15.89413"
  },
  {
    "country": "AT",
    "name": "Heiligenbrunn",
    "lat": "47.02705",
    "lng": "16.41688"
  },
  {
    "country": "AT",
    "name": "Heiligenblut",
    "lat": "47.03979",
    "lng": "12.84345"
  },
  {
    "country": "AT",
    "name": "Heidenreichstein",
    "lat": "48.86667",
    "lng": "15.11667"
  },
  {
    "country": "AT",
    "name": "Hausmening",
    "lat": "48.07074",
    "lng": "14.81438"
  },
  {
    "country": "AT",
    "name": "Hausmannstätten",
    "lat": "46.99111",
    "lng": "15.51139"
  },
  {
    "country": "AT",
    "name": "Hausleiten",
    "lat": "48.38333",
    "lng": "16.1"
  },
  {
    "country": "AT",
    "name": "Hauskirchen",
    "lat": "48.61324",
    "lng": "16.75872"
  },
  {
    "country": "AT",
    "name": "Hausbrunn",
    "lat": "48.62602",
    "lng": "16.82844"
  },
  {
    "country": "AT",
    "name": "Haus",
    "lat": "47.40997",
    "lng": "13.76724"
  },
  {
    "country": "AT",
    "name": "Haunoldstein",
    "lat": "48.2",
    "lng": "15.45"
  },
  {
    "country": "AT",
    "name": "Haugsdorf",
    "lat": "48.70762",
    "lng": "16.07656"
  },
  {
    "country": "AT",
    "name": "Haugschlag",
    "lat": "48.98333",
    "lng": "15.05"
  },
  {
    "country": "AT",
    "name": "Hatzendorf",
    "lat": "46.97686",
    "lng": "16.00107"
  },
  {
    "country": "AT",
    "name": "Hatting",
    "lat": "47.2787",
    "lng": "11.16838"
  },
  {
    "country": "AT",
    "name": "Haslach an der Mühl",
    "lat": "48.5757",
    "lng": "14.03984"
  },
  {
    "country": "AT",
    "name": "Häselgehr",
    "lat": "47.31667",
    "lng": "10.5"
  },
  {
    "country": "AT",
    "name": "Haselbach",
    "lat": "48.25308",
    "lng": "13.05614"
  },
  {
    "country": "AT",
    "name": "Hartmannsdorf",
    "lat": "47.05461",
    "lng": "15.83941"
  },
  {
    "country": "AT",
    "name": "Hartl",
    "lat": "47.18333",
    "lng": "15.91667"
  },
  {
    "country": "AT",
    "name": "Hartkirchen",
    "lat": "48.36349",
    "lng": "14.00422"
  },
  {
    "country": "AT",
    "name": "Hart im Zillertal",
    "lat": "47.35106",
    "lng": "11.86476"
  },
  {
    "country": "AT",
    "name": "Hartheim",
    "lat": "48.28079",
    "lng": "14.11426"
  },
  {
    "country": "AT",
    "name": "Hartberg",
    "lat": "47.28333",
    "lng": "15.96667"
  },
  {
    "country": "AT",
    "name": "Hart",
    "lat": "48.26526",
    "lng": "14.25691"
  },
  {
    "country": "AT",
    "name": "Harmannsdorf",
    "lat": "48.39724",
    "lng": "16.3722"
  },
  {
    "country": "AT",
    "name": "Harland",
    "lat": "48.16162",
    "lng": "15.63835"
  },
  {
    "country": "AT",
    "name": "Haringsee",
    "lat": "48.1927",
    "lng": "16.78741"
  },
  {
    "country": "AT",
    "name": "Bad Häring",
    "lat": "47.51071",
    "lng": "12.11912"
  },
  {
    "country": "AT",
    "name": "Hardegg",
    "lat": "48.85",
    "lng": "15.85"
  },
  {
    "country": "AT",
    "name": "Hard",
    "lat": "47.48306",
    "lng": "9.68306"
  },
  {
    "country": "AT",
    "name": "Hannersdorf",
    "lat": "47.22895",
    "lng": "16.3825"
  },
  {
    "country": "AT",
    "name": "Handenberg",
    "lat": "48.13356",
    "lng": "13.00751"
  },
  {
    "country": "AT",
    "name": "Hallwang",
    "lat": "47.85",
    "lng": "13.08333"
  },
  {
    "country": "AT",
    "name": "Hallein",
    "lat": "47.68333",
    "lng": "13.1"
  },
  {
    "country": "AT",
    "name": "Halbturn",
    "lat": "47.87019",
    "lng": "16.97542"
  },
  {
    "country": "AT",
    "name": "Halbenrain",
    "lat": "46.72194",
    "lng": "15.94667"
  },
  {
    "country": "AT",
    "name": "Hainzenberg",
    "lat": "47.21788",
    "lng": "11.90034"
  },
  {
    "country": "AT",
    "name": "Hainsdorf im Schwarzautal",
    "lat": "46.83583",
    "lng": "15.64139"
  },
  {
    "country": "AT",
    "name": "Hainfeld",
    "lat": "48.0339",
    "lng": "15.77414"
  },
  {
    "country": "AT",
    "name": "Hainersdorf",
    "lat": "47.11506",
    "lng": "15.94374"
  },
  {
    "country": "AT",
    "name": "Hainburg an der Donau",
    "lat": "48.14627",
    "lng": "16.94504"
  },
  {
    "country": "AT",
    "name": "Haiming",
    "lat": "47.25",
    "lng": "10.88333"
  },
  {
    "country": "AT",
    "name": "Haidershofen",
    "lat": "48.07579",
    "lng": "14.46131"
  },
  {
    "country": "AT",
    "name": "Haiden",
    "lat": "47.7179",
    "lng": "13.56906"
  },
  {
    "country": "AT",
    "name": "Haid",
    "lat": "48.20477",
    "lng": "14.25107"
  },
  {
    "country": "AT",
    "name": "Haibach im Mühlkreis",
    "lat": "48.44429",
    "lng": "14.34411"
  },
  {
    "country": "AT",
    "name": "Hagenbrunn",
    "lat": "48.33333",
    "lng": "16.4"
  },
  {
    "country": "AT",
    "name": "Hagenberg im Mühlkreis",
    "lat": "48.36788",
    "lng": "14.51689"
  },
  {
    "country": "AT",
    "name": "Hafnerbach",
    "lat": "48.21667",
    "lng": "15.48333"
  },
  {
    "country": "AT",
    "name": "Hafendorf",
    "lat": "47.45653",
    "lng": "15.31837"
  },
  {
    "country": "AT",
    "name": "Hadres",
    "lat": "48.70965",
    "lng": "16.13038"
  },
  {
    "country": "AT",
    "name": "Hadersdorf am Kamp",
    "lat": "48.45848",
    "lng": "15.72051"
  },
  {
    "country": "AT",
    "name": "Hackerberg",
    "lat": "47.19819",
    "lng": "16.10568"
  },
  {
    "country": "AT",
    "name": "Habach",
    "lat": "47.81753",
    "lng": "13.16252"
  },
  {
    "country": "AT",
    "name": "Haag am Hausruck",
    "lat": "48.18423",
    "lng": "13.64373"
  },
  {
    "country": "AT",
    "name": "Haag",
    "lat": "48.27063",
    "lng": "14.26875"
  },
  {
    "country": "AT",
    "name": "Haag",
    "lat": "48.19027",
    "lng": "15.90135"
  },
  {
    "country": "AT",
    "name": "Haag",
    "lat": "48.11362",
    "lng": "14.56753"
  },
  {
    "country": "AT",
    "name": "Güttenbach",
    "lat": "47.1571",
    "lng": "16.2923"
  },
  {
    "country": "AT",
    "name": "Guttaring",
    "lat": "46.88536",
    "lng": "14.51071"
  },
  {
    "country": "AT",
    "name": "Gutenstein",
    "lat": "47.876",
    "lng": "15.88881"
  },
  {
    "country": "AT",
    "name": "Gutenbrunn",
    "lat": "48.3652",
    "lng": "15.11899"
  },
  {
    "country": "AT",
    "name": "Gutau",
    "lat": "48.41724",
    "lng": "14.61285"
  },
  {
    "country": "AT",
    "name": "Güssing",
    "lat": "47.05936",
    "lng": "16.32431"
  },
  {
    "country": "AT",
    "name": "Gurk",
    "lat": "46.87389",
    "lng": "14.29167"
  },
  {
    "country": "AT",
    "name": "Guntramsdorf",
    "lat": "48.04687",
    "lng": "16.31384"
  },
  {
    "country": "AT",
    "name": "Guntersdorf",
    "lat": "48.65",
    "lng": "16.05"
  },
  {
    "country": "AT",
    "name": "Gunskirchen",
    "lat": "48.13333",
    "lng": "13.95"
  },
  {
    "country": "AT",
    "name": "Günselsdorf",
    "lat": "47.94395",
    "lng": "16.26062"
  },
  {
    "country": "AT",
    "name": "Gundersdorf",
    "lat": "46.95",
    "lng": "15.23333"
  },
  {
    "country": "AT",
    "name": "Gumpoldskirchen",
    "lat": "48.04538",
    "lng": "16.2771"
  },
  {
    "country": "AT",
    "name": "Gugging",
    "lat": "48.31385",
    "lng": "16.24852"
  },
  {
    "country": "AT",
    "name": "Gschwandt",
    "lat": "47.93515",
    "lng": "13.84569"
  },
  {
    "country": "AT",
    "name": "Grünbach am Schneeberg",
    "lat": "47.79747",
    "lng": "15.98785"
  },
  {
    "country": "AT",
    "name": "Grünau im Almtal",
    "lat": "47.85493",
    "lng": "13.95573"
  },
  {
    "country": "AT",
    "name": "Großweikersdorf",
    "lat": "48.47123",
    "lng": "15.98251"
  },
  {
    "country": "AT",
    "name": "Grosssulz",
    "lat": "46.94556",
    "lng": "15.49028"
  },
  {
    "country": "AT",
    "name": "Großsölk",
    "lat": "47.41667",
    "lng": "13.96667"
  },
  {
    "country": "AT",
    "name": "Groß-Siegharts",
    "lat": "48.7918",
    "lng": "15.40429"
  },
  {
    "country": "AT",
    "name": "Groß-Schweinbarth",
    "lat": "48.41472",
    "lng": "16.63194"
  },
  {
    "country": "AT",
    "name": "Groß Sankt Florian",
    "lat": "46.82444",
    "lng": "15.31861"
  },
  {
    "country": "AT",
    "name": "Großrußbach",
    "lat": "48.47412",
    "lng": "16.41649"
  },
  {
    "country": "AT",
    "name": "Großriedenthal",
    "lat": "48.48333",
    "lng": "15.86667"
  },
  {
    "country": "AT",
    "name": "Grossraming",
    "lat": "47.88333",
    "lng": "14.55"
  },
  {
    "country": "AT",
    "name": "Grosspetersdorf",
    "lat": "47.23895",
    "lng": "16.31783"
  },
  {
    "country": "AT",
    "name": "Großmugl",
    "lat": "48.49917",
    "lng": "16.23056"
  },
  {
    "country": "AT",
    "name": "Großlobming",
    "lat": "47.18333",
    "lng": "14.8"
  },
  {
    "country": "AT",
    "name": "Großkrut",
    "lat": "48.64389",
    "lng": "16.72361"
  },
  {
    "country": "AT",
    "name": "Großklein",
    "lat": "46.73611",
    "lng": "15.44444"
  },
  {
    "country": "AT",
    "name": "Grosshöflein",
    "lat": "47.83586",
    "lng": "16.48035"
  },
  {
    "country": "AT",
    "name": "Großhofen",
    "lat": "48.25834",
    "lng": "16.6194"
  },
  {
    "country": "AT",
    "name": "Heimschuh",
    "lat": "46.76",
    "lng": "15.49306"
  },
  {
    "country": "AT",
    "name": "Großharras",
    "lat": "48.66389",
    "lng": "16.24556"
  },
  {
    "country": "AT",
    "name": "Grossgmain",
    "lat": "47.72416",
    "lng": "12.90851"
  },
  {
    "country": "AT",
    "name": "Groß-Gerungs",
    "lat": "48.57422",
    "lng": "14.95789"
  },
  {
    "country": "AT",
    "name": "Groß-Enzersdorf",
    "lat": "48.20278",
    "lng": "16.55083"
  },
  {
    "country": "AT",
    "name": "Groß-Engersdorf",
    "lat": "48.35873",
    "lng": "16.5661"
  },
  {
    "country": "AT",
    "name": "Großebersdorf",
    "lat": "48.36405",
    "lng": "16.47076"
  },
  {
    "country": "AT",
    "name": "Großdorf",
    "lat": "47.43361",
    "lng": "9.91528"
  },
  {
    "country": "AT",
    "name": "Grossarl",
    "lat": "47.23333",
    "lng": "13.2"
  },
  {
    "country": "AT",
    "name": "Grödig",
    "lat": "47.73833",
    "lng": "13.0373"
  },
  {
    "country": "AT",
    "name": "Gröbming",
    "lat": "47.44272",
    "lng": "13.90122"
  },
  {
    "country": "AT",
    "name": "Grins",
    "lat": "47.14034",
    "lng": "10.51409"
  },
  {
    "country": "AT",
    "name": "Grimmenstein",
    "lat": "47.61635",
    "lng": "16.12724"
  },
  {
    "country": "AT",
    "name": "Griffen",
    "lat": "46.70444",
    "lng": "14.73278"
  },
  {
    "country": "AT",
    "name": "Grieskirchen",
    "lat": "48.23333",
    "lng": "13.83333"
  },
  {
    "country": "AT",
    "name": "Gries im Sellrain",
    "lat": "47.19554",
    "lng": "11.15619"
  },
  {
    "country": "AT",
    "name": "Gries am Brenner",
    "lat": "47.03849",
    "lng": "11.48131"
  },
  {
    "country": "AT",
    "name": "Gresten",
    "lat": "47.98521",
    "lng": "15.02552"
  },
  {
    "country": "AT",
    "name": "Gressenberg",
    "lat": "46.8",
    "lng": "15.11667"
  },
  {
    "country": "AT",
    "name": "Greisdorf",
    "lat": "46.92647",
    "lng": "15.21906"
  },
  {
    "country": "AT",
    "name": "Greinsfurth",
    "lat": "48.10846",
    "lng": "14.8439"
  },
  {
    "country": "AT",
    "name": "Grein",
    "lat": "48.22862",
    "lng": "14.85884"
  },
  {
    "country": "AT",
    "name": "Greifenburg",
    "lat": "46.75027",
    "lng": "13.17982"
  },
  {
    "country": "AT",
    "name": "Graz",
    "lat": "47.06667",
    "lng": "15.45"
  },
  {
    "country": "AT",
    "name": "Gratwein",
    "lat": "47.11667",
    "lng": "15.31667"
  },
  {
    "country": "AT",
    "name": "Gratkorn",
    "lat": "47.13333",
    "lng": "15.35"
  },
  {
    "country": "AT",
    "name": "Grän",
    "lat": "47.5",
    "lng": "10.55"
  },
  {
    "country": "AT",
    "name": "Grambach",
    "lat": "47.01473",
    "lng": "15.50407"
  },
  {
    "country": "AT",
    "name": "Gramatneusiedl",
    "lat": "48.0304",
    "lng": "16.48936"
  },
  {
    "country": "AT",
    "name": "Gramastetten",
    "lat": "48.38028",
    "lng": "14.19185"
  },
  {
    "country": "AT",
    "name": "Gramais",
    "lat": "47.26667",
    "lng": "10.53333"
  },
  {
    "country": "AT",
    "name": "Grafenwörth",
    "lat": "48.4079",
    "lng": "15.77826"
  },
  {
    "country": "AT",
    "name": "Grafenstein",
    "lat": "46.61393",
    "lng": "14.46719"
  },
  {
    "country": "AT",
    "name": "Grafenschlag",
    "lat": "48.5",
    "lng": "15.16667"
  },
  {
    "country": "AT",
    "name": "Grafenschachen",
    "lat": "47.3632",
    "lng": "16.0663"
  },
  {
    "country": "AT",
    "name": "Grafenegg",
    "lat": "48.4304",
    "lng": "15.74907"
  },
  {
    "country": "AT",
    "name": "Grafendorf bei Hartberg",
    "lat": "47.34028",
    "lng": "15.9906"
  },
  {
    "country": "AT",
    "name": "Grabersdorf",
    "lat": "46.84306",
    "lng": "15.82472"
  },
  {
    "country": "AT",
    "name": "Götzis",
    "lat": "47.33306",
    "lng": "9.63306"
  },
  {
    "country": "AT",
    "name": "Götzens",
    "lat": "47.23606",
    "lng": "11.31154"
  },
  {
    "country": "AT",
    "name": "Götzendorf an der Leitha",
    "lat": "48.01667",
    "lng": "16.58333"
  },
  {
    "country": "AT",
    "name": "Göttelsberg",
    "lat": "47.21667",
    "lng": "15.6"
  },
  {
    "country": "AT",
    "name": "Göstling an der Ybbs",
    "lat": "47.80664",
    "lng": "14.93797"
  },
  {
    "country": "AT",
    "name": "Gösting",
    "lat": "47.09788",
    "lng": "15.39777"
  },
  {
    "country": "AT",
    "name": "Gössendorf",
    "lat": "46.99826",
    "lng": "15.48556"
  },
  {
    "country": "AT",
    "name": "Gossendorf",
    "lat": "46.91076",
    "lng": "15.93043"
  },
  {
    "country": "AT",
    "name": "Gössenberg",
    "lat": "47.41667",
    "lng": "13.81667"
  },
  {
    "country": "AT",
    "name": "Göss",
    "lat": "47.35871",
    "lng": "15.10015"
  },
  {
    "country": "AT",
    "name": "Gosdorf",
    "lat": "46.72778",
    "lng": "15.7925"
  },
  {
    "country": "AT",
    "name": "Gosau",
    "lat": "47.58417",
    "lng": "13.53447"
  },
  {
    "country": "AT",
    "name": "Göpfritz an der Wild",
    "lat": "48.72497",
    "lng": "15.40236"
  },
  {
    "country": "AT",
    "name": "Gols",
    "lat": "47.89689",
    "lng": "16.91113"
  },
  {
    "country": "AT",
    "name": "Golling an der Salzach",
    "lat": "47.6",
    "lng": "13.16667"
  },
  {
    "country": "AT",
    "name": "Göllersdorf",
    "lat": "48.49357",
    "lng": "16.11943"
  },
  {
    "country": "AT",
    "name": "Goldwörth",
    "lat": "48.32664",
    "lng": "14.10112"
  },
  {
    "country": "AT",
    "name": "Goldegg",
    "lat": "47.31875",
    "lng": "13.09922"
  },
  {
    "country": "AT",
    "name": "Going",
    "lat": "47.51332",
    "lng": "12.33164"
  },
  {
    "country": "AT",
    "name": "Göfis",
    "lat": "47.23356",
    "lng": "9.63458"
  },
  {
    "country": "AT",
    "name": "Gniebing",
    "lat": "46.96252",
    "lng": "15.85645"
  },
  {
    "country": "AT",
    "name": "Gnesau",
    "lat": "46.77544",
    "lng": "13.96251"
  },
  {
    "country": "AT",
    "name": "Gneixendorf",
    "lat": "48.43751",
    "lng": "15.6181"
  },
  {
    "country": "AT",
    "name": "Gnas",
    "lat": "46.87306",
    "lng": "15.82528"
  },
  {
    "country": "AT",
    "name": "Gnadendorf",
    "lat": "48.61667",
    "lng": "16.4"
  },
  {
    "country": "AT",
    "name": "Gmunden",
    "lat": "47.91839",
    "lng": "13.79933"
  },
  {
    "country": "AT",
    "name": "Gmünd",
    "lat": "48.7683",
    "lng": "14.9808"
  },
  {
    "country": "AT",
    "name": "Gmünd",
    "lat": "46.90722",
    "lng": "13.52944"
  },
  {
    "country": "AT",
    "name": "Glojach",
    "lat": "46.86667",
    "lng": "15.66667"
  },
  {
    "country": "AT",
    "name": "Gloggnitz",
    "lat": "47.67487",
    "lng": "15.93893"
  },
  {
    "country": "AT",
    "name": "Glödnitz",
    "lat": "46.87398",
    "lng": "14.11915"
  },
  {
    "country": "AT",
    "name": "Globasnitz",
    "lat": "46.55694",
    "lng": "14.70278"
  },
  {
    "country": "AT",
    "name": "Glinzendorf",
    "lat": "48.24605",
    "lng": "16.6406"
  },
  {
    "country": "AT",
    "name": "Gleisdorf",
    "lat": "47.10559",
    "lng": "15.71011"
  },
  {
    "country": "AT",
    "name": "Gleinstätten",
    "lat": "46.75361",
    "lng": "15.36972"
  },
  {
    "country": "AT",
    "name": "Glasenbach",
    "lat": "47.76667",
    "lng": "13.08333"
  },
  {
    "country": "AT",
    "name": "Glanegg",
    "lat": "47.75",
    "lng": "13"
  },
  {
    "country": "AT",
    "name": "Glanegg",
    "lat": "46.72259",
    "lng": "14.19893"
  },
  {
    "country": "AT",
    "name": "Gießhübl",
    "lat": "48.0978",
    "lng": "16.23479"
  },
  {
    "country": "AT",
    "name": "Gföhl",
    "lat": "48.51667",
    "lng": "15.48333"
  },
  {
    "country": "AT",
    "name": "Gersdorf an der Feistritz",
    "lat": "47.16667",
    "lng": "15.85"
  },
  {
    "country": "AT",
    "name": "Gerolding",
    "lat": "48.25",
    "lng": "15.41667"
  },
  {
    "country": "AT",
    "name": "Gerersdorf",
    "lat": "48.20088",
    "lng": "15.55613"
  },
  {
    "country": "AT",
    "name": "Gerasdorf bei Wien",
    "lat": "48.29447",
    "lng": "16.46765"
  },
  {
    "country": "AT",
    "name": "Geras",
    "lat": "48.79725",
    "lng": "15.67268"
  },
  {
    "country": "AT",
    "name": "Georgenberg",
    "lat": "47.63333",
    "lng": "13.15"
  },
  {
    "country": "AT",
    "name": "Geistthal",
    "lat": "47.16667",
    "lng": "15.16667"
  },
  {
    "country": "AT",
    "name": "Gedersdorf",
    "lat": "48.43319",
    "lng": "15.68865"
  },
  {
    "country": "AT",
    "name": "Geboltskirchen",
    "lat": "48.15338",
    "lng": "13.6336"
  },
  {
    "country": "AT",
    "name": "Gaweinstal",
    "lat": "48.48003",
    "lng": "16.5879"
  },
  {
    "country": "AT",
    "name": "Gaubitsch",
    "lat": "48.65",
    "lng": "16.38333"
  },
  {
    "country": "AT",
    "name": "Gattendorf",
    "lat": "48.01667",
    "lng": "16.98333"
  },
  {
    "country": "AT",
    "name": "Gastern",
    "lat": "48.89446",
    "lng": "15.22027"
  },
  {
    "country": "AT",
    "name": "Gaspoltshofen",
    "lat": "48.14324",
    "lng": "13.73643"
  },
  {
    "country": "AT",
    "name": "Gasen",
    "lat": "47.38333",
    "lng": "15.56667"
  },
  {
    "country": "AT",
    "name": "Gaschurn",
    "lat": "46.98584",
    "lng": "10.02702"
  },
  {
    "country": "AT",
    "name": "Garsten",
    "lat": "48.0224",
    "lng": "14.40747"
  },
  {
    "country": "AT",
    "name": "Gars am Kamp",
    "lat": "48.59769",
    "lng": "15.66073"
  },
  {
    "country": "AT",
    "name": "Garanas",
    "lat": "46.76667",
    "lng": "15.11667"
  },
  {
    "country": "AT",
    "name": "Ganz",
    "lat": "47.6",
    "lng": "15.68333"
  },
  {
    "country": "AT",
    "name": "Gänserndorf",
    "lat": "48.33925",
    "lng": "16.72016"
  },
  {
    "country": "AT",
    "name": "Bad Gams",
    "lat": "46.87111",
    "lng": "15.22472"
  },
  {
    "country": "AT",
    "name": "Gams bei Hieflau",
    "lat": "47.66667",
    "lng": "14.78333"
  },
  {
    "country": "AT",
    "name": "Gampern",
    "lat": "47.98877",
    "lng": "13.5543"
  },
  {
    "country": "AT",
    "name": "Gamlitz",
    "lat": "46.72028",
    "lng": "15.55333"
  },
  {
    "country": "AT",
    "name": "Gaming",
    "lat": "47.929",
    "lng": "15.08818"
  },
  {
    "country": "AT",
    "name": "Galtür",
    "lat": "46.96667",
    "lng": "10.18333"
  },
  {
    "country": "AT",
    "name": "Gallzein",
    "lat": "47.36807",
    "lng": "11.77159"
  },
  {
    "country": "AT",
    "name": "Gallspach",
    "lat": "48.20992",
    "lng": "13.80981"
  },
  {
    "country": "AT",
    "name": "Gallneukirchen",
    "lat": "48.35363",
    "lng": "14.41604"
  },
  {
    "country": "AT",
    "name": "Gallmannsegg",
    "lat": "47.18333",
    "lng": "15.06667"
  },
  {
    "country": "AT",
    "name": "Gallizien",
    "lat": "46.55",
    "lng": "14.51667"
  },
  {
    "country": "AT",
    "name": "Gaißau",
    "lat": "47.46667",
    "lng": "9.6"
  },
  {
    "country": "AT",
    "name": "Gainfarn",
    "lat": "47.9628",
    "lng": "16.19368"
  },
  {
    "country": "AT",
    "name": "Gailitz",
    "lat": "46.56083",
    "lng": "13.70444"
  },
  {
    "country": "AT",
    "name": "Gaflenz",
    "lat": "47.89511",
    "lng": "14.72477"
  },
  {
    "country": "AT",
    "name": "Gablitz",
    "lat": "48.22856",
    "lng": "16.15437"
  },
  {
    "country": "AT",
    "name": "Gabersdorf",
    "lat": "46.77722",
    "lng": "15.58417"
  },
  {
    "country": "AT",
    "name": "Gaal",
    "lat": "47.27268",
    "lng": "14.67003"
  },
  {
    "country": "AT",
    "name": "Gaaden",
    "lat": "48.05364",
    "lng": "16.20003"
  },
  {
    "country": "AT",
    "name": "Fußach",
    "lat": "47.47933",
    "lng": "9.66278"
  },
  {
    "country": "AT",
    "name": "Fuschl am See",
    "lat": "47.8",
    "lng": "13.3"
  },
  {
    "country": "AT",
    "name": "Furth an der Triesting",
    "lat": "47.97326",
    "lng": "15.97326"
  },
  {
    "country": "AT",
    "name": "Furth bei Göttweig",
    "lat": "48.37385",
    "lng": "15.61408"
  },
  {
    "country": "AT",
    "name": "Fürstenfeld",
    "lat": "47.05",
    "lng": "16.08333"
  },
  {
    "country": "AT",
    "name": "Fürnitz",
    "lat": "46.56188",
    "lng": "13.81732"
  },
  {
    "country": "AT",
    "name": "Fulpmes",
    "lat": "47.15202",
    "lng": "11.34922"
  },
  {
    "country": "AT",
    "name": "Fügenberg",
    "lat": "47.3521",
    "lng": "11.84173"
  },
  {
    "country": "AT",
    "name": "Fügen",
    "lat": "47.347",
    "lng": "11.84939"
  },
  {
    "country": "AT",
    "name": "Frohsdorf",
    "lat": "47.75076",
    "lng": "16.26383"
  },
  {
    "country": "AT",
    "name": "Frohnleiten",
    "lat": "47.26667",
    "lng": "15.31667"
  },
  {
    "country": "AT",
    "name": "Fritzens",
    "lat": "47.30535",
    "lng": "11.5895"
  },
  {
    "country": "AT",
    "name": "Friesach",
    "lat": "46.95528",
    "lng": "14.40583"
  },
  {
    "country": "AT",
    "name": "Friedberg",
    "lat": "47.43333",
    "lng": "16.05"
  },
  {
    "country": "AT",
    "name": "Fresach",
    "lat": "46.71556",
    "lng": "13.69083"
  },
  {
    "country": "AT",
    "name": "Freistadt",
    "lat": "48.51103",
    "lng": "14.50453"
  },
  {
    "country": "AT",
    "name": "Freindorf",
    "lat": "48.2257",
    "lng": "14.2951"
  },
  {
    "country": "AT",
    "name": "Freiland bei Deutschlandsberg",
    "lat": "46.83333",
    "lng": "15.13333"
  },
  {
    "country": "AT",
    "name": "Freidorf an der Laßnitz",
    "lat": "46.81667",
    "lng": "15.25"
  },
  {
    "country": "AT",
    "name": "Fraxern",
    "lat": "47.31498",
    "lng": "9.67391"
  },
  {
    "country": "AT",
    "name": "Frauenkirchen",
    "lat": "47.83678",
    "lng": "16.92581"
  },
  {
    "country": "AT",
    "name": "Frauenberg",
    "lat": "47.42855",
    "lng": "15.34206"
  },
  {
    "country": "AT",
    "name": "Frannach",
    "lat": "46.91306",
    "lng": "15.63361"
  },
  {
    "country": "AT",
    "name": "Frankenmarkt",
    "lat": "47.98333",
    "lng": "13.41667"
  },
  {
    "country": "AT",
    "name": "Frankenfels",
    "lat": "47.98234",
    "lng": "15.32593"
  },
  {
    "country": "AT",
    "name": "Frankenburg",
    "lat": "48.06844",
    "lng": "13.49065"
  },
  {
    "country": "AT",
    "name": "Forstau",
    "lat": "47.37842",
    "lng": "13.55558"
  },
  {
    "country": "AT",
    "name": "Fornach",
    "lat": "48.02277",
    "lng": "13.42941"
  },
  {
    "country": "AT",
    "name": "Forchtenstein",
    "lat": "47.71161",
    "lng": "16.34525"
  },
  {
    "country": "AT",
    "name": "Forchach",
    "lat": "47.41667",
    "lng": "10.58333"
  },
  {
    "country": "AT",
    "name": "Fohnsdorf",
    "lat": "47.20798",
    "lng": "14.67586"
  },
  {
    "country": "AT",
    "name": "Floridsdorf",
    "lat": "48.25",
    "lng": "16.4"
  },
  {
    "country": "AT",
    "name": "Floing",
    "lat": "47.26356",
    "lng": "15.7465"
  },
  {
    "country": "AT",
    "name": "Flirsch",
    "lat": "47.15",
    "lng": "10.4"
  },
  {
    "country": "AT",
    "name": "Fliess",
    "lat": "47.11667",
    "lng": "10.61667"
  },
  {
    "country": "AT",
    "name": "Flaurling",
    "lat": "47.29143",
    "lng": "11.12319"
  },
  {
    "country": "AT",
    "name": "Flattach",
    "lat": "46.93861",
    "lng": "13.13444"
  },
  {
    "country": "AT",
    "name": "Flatschach",
    "lat": "47.21667",
    "lng": "14.75"
  },
  {
    "country": "AT",
    "name": "Fladnitz im Raabtal",
    "lat": "46.99167",
    "lng": "15.78528"
  },
  {
    "country": "AT",
    "name": "Flachau",
    "lat": "47.34406",
    "lng": "13.39148"
  },
  {
    "country": "AT",
    "name": "Fiss",
    "lat": "47.05714",
    "lng": "10.61747"
  },
  {
    "country": "AT",
    "name": "Fisching",
    "lat": "48.22301",
    "lng": "14.42771"
  },
  {
    "country": "AT",
    "name": "Fischbach",
    "lat": "47.44234",
    "lng": "15.64972"
  },
  {
    "country": "AT",
    "name": "Fischamend-Markt",
    "lat": "48.11667",
    "lng": "16.6"
  },
  {
    "country": "AT",
    "name": "Finkenstein",
    "lat": "46.56155",
    "lng": "13.87086"
  },
  {
    "country": "AT",
    "name": "Finkenberg",
    "lat": "47.15279",
    "lng": "11.82212"
  },
  {
    "country": "AT",
    "name": "Filzmoos",
    "lat": "47.43333",
    "lng": "13.51667"
  },
  {
    "country": "AT",
    "name": "Fiecht",
    "lat": "47.35",
    "lng": "11.7"
  },
  {
    "country": "AT",
    "name": "Fieberbrunn",
    "lat": "47.47626",
    "lng": "12.54347"
  },
  {
    "country": "AT",
    "name": "Ferschnitz",
    "lat": "48.09419",
    "lng": "14.98454"
  },
  {
    "country": "AT",
    "name": "Fernitz",
    "lat": "46.97389",
    "lng": "15.50111"
  },
  {
    "country": "AT",
    "name": "Ferndorf",
    "lat": "46.73651",
    "lng": "13.62661"
  },
  {
    "country": "AT",
    "name": "Ferlach",
    "lat": "46.52694",
    "lng": "14.30194"
  },
  {
    "country": "AT",
    "name": "Fendels",
    "lat": "47.0539",
    "lng": "10.67777"
  },
  {
    "country": "AT",
    "name": "Fels am Wagram",
    "lat": "48.43333",
    "lng": "15.81667"
  },
  {
    "country": "AT",
    "name": "Felixdorf",
    "lat": "47.88159",
    "lng": "16.24208"
  },
  {
    "country": "AT",
    "name": "Feldkirchen in Kärnten",
    "lat": "46.72368",
    "lng": "14.0958"
  },
  {
    "country": "AT",
    "name": "Feldkirchen bei Graz",
    "lat": "47.01667",
    "lng": "15.45"
  },
  {
    "country": "AT",
    "name": "Feldkirchen an der Donau",
    "lat": "48.34524",
    "lng": "14.05134"
  },
  {
    "country": "AT",
    "name": "Feldkirch",
    "lat": "47.23306",
    "lng": "9.6"
  },
  {
    "country": "AT",
    "name": "Feldbach",
    "lat": "46.95306",
    "lng": "15.88833"
  },
  {
    "country": "AT",
    "name": "Feld am See",
    "lat": "46.77639",
    "lng": "13.74778"
  },
  {
    "country": "AT",
    "name": "Feistritz ob Bleiburg",
    "lat": "46.56148",
    "lng": "14.76249"
  },
  {
    "country": "AT",
    "name": "Feistritz im Rosental",
    "lat": "46.51667",
    "lng": "14.16667"
  },
  {
    "country": "AT",
    "name": "Feistritz bei Knittelfeld",
    "lat": "47.26802",
    "lng": "14.89334"
  },
  {
    "country": "AT",
    "name": "Feistritz an der Gail",
    "lat": "46.5775",
    "lng": "13.60667"
  },
  {
    "country": "AT",
    "name": "Feistritz an der Drau",
    "lat": "46.70157",
    "lng": "13.66479"
  },
  {
    "country": "AT",
    "name": "Feistritz am Wechsel",
    "lat": "47.6",
    "lng": "16.05"
  },
  {
    "country": "AT",
    "name": "Fehring",
    "lat": "46.94",
    "lng": "16.00806"
  },
  {
    "country": "AT",
    "name": "Farrach",
    "lat": "47.18333",
    "lng": "14.73333"
  },
  {
    "country": "AT",
    "name": "Fallbach",
    "lat": "48.65",
    "lng": "16.41667"
  },
  {
    "country": "AT",
    "name": "Falkenstein",
    "lat": "48.71667",
    "lng": "16.58333"
  },
  {
    "country": "AT",
    "name": "St. Ruprecht-Falkendorf",
    "lat": "47.1011",
    "lng": "14.01752"
  },
  {
    "country": "AT",
    "name": "Falkenburg",
    "lat": "47.5",
    "lng": "14.08333"
  },
  {
    "country": "AT",
    "name": "Faistenau",
    "lat": "47.77767",
    "lng": "13.23393"
  },
  {
    "country": "AT",
    "name": "Faak am See",
    "lat": "46.56806",
    "lng": "13.90972"
  },
  {
    "country": "AT",
    "name": "Euratsfeld",
    "lat": "48.08181",
    "lng": "14.93154"
  },
  {
    "country": "AT",
    "name": "Eugendorf",
    "lat": "47.86765",
    "lng": "13.12609"
  },
  {
    "country": "AT",
    "name": "Eschenau",
    "lat": "48.04825",
    "lng": "15.56694"
  },
  {
    "country": "AT",
    "name": "Erpfendorf",
    "lat": "47.58333",
    "lng": "12.46667"
  },
  {
    "country": "AT",
    "name": "Erpersdorf",
    "lat": "48.3421",
    "lng": "15.91747"
  },
  {
    "country": "AT",
    "name": "Ernsthofen",
    "lat": "48.12915",
    "lng": "14.48058"
  },
  {
    "country": "AT",
    "name": "Ernstbrunn",
    "lat": "48.53333",
    "lng": "16.35"
  },
  {
    "country": "AT",
    "name": "Erlauf",
    "lat": "48.18333",
    "lng": "15.18333"
  },
  {
    "country": "AT",
    "name": "Bad Erlach",
    "lat": "47.72722",
    "lng": "16.21444"
  },
  {
    "country": "AT",
    "name": "Erl",
    "lat": "47.68333",
    "lng": "12.18333"
  },
  {
    "country": "AT",
    "name": "Enzersfeld",
    "lat": "48.36338",
    "lng": "16.42387"
  },
  {
    "country": "AT",
    "name": "Enzersdorf an der Fischa",
    "lat": "48.08502",
    "lng": "16.60832"
  },
  {
    "country": "AT",
    "name": "Enzenreith",
    "lat": "47.66839",
    "lng": "15.95249"
  },
  {
    "country": "AT",
    "name": "Ennsdorf",
    "lat": "48.21181",
    "lng": "14.5029"
  },
  {
    "country": "AT",
    "name": "Enns",
    "lat": "48.21346",
    "lng": "14.47612"
  },
  {
    "country": "AT",
    "name": "Engerwitzdorf",
    "lat": "48.34507",
    "lng": "14.44204"
  },
  {
    "country": "AT",
    "name": "Engelhartstetten",
    "lat": "48.1816",
    "lng": "16.88367"
  },
  {
    "country": "AT",
    "name": "Endach",
    "lat": "47.56796",
    "lng": "12.15603"
  },
  {
    "country": "AT",
    "name": "Empersdorf",
    "lat": "46.99892",
    "lng": "15.59959"
  },
  {
    "country": "AT",
    "name": "Emmersdorf an der Donau",
    "lat": "48.2414",
    "lng": "15.33721"
  },
  {
    "country": "AT",
    "name": "Eltendorf",
    "lat": "47.0087",
    "lng": "16.20239"
  },
  {
    "country": "AT",
    "name": "Elsbethen",
    "lat": "47.76464",
    "lng": "13.08104"
  },
  {
    "country": "AT",
    "name": "Elmen",
    "lat": "47.34039",
    "lng": "10.54318"
  },
  {
    "country": "AT",
    "name": "Ellmau",
    "lat": "47.51378",
    "lng": "12.29937"
  },
  {
    "country": "AT",
    "name": "Elixhausen",
    "lat": "47.86667",
    "lng": "13.06667"
  },
  {
    "country": "AT",
    "name": "Elbigenalp",
    "lat": "47.29041",
    "lng": "10.43607"
  },
  {
    "country": "AT",
    "name": "Eisgarn",
    "lat": "48.91675",
    "lng": "15.1032"
  },
  {
    "country": "AT",
    "name": "Eisenstadt",
    "lat": "47.84565",
    "lng": "16.52327"
  },
  {
    "country": "AT",
    "name": "Eisenerz",
    "lat": "47.53333",
    "lng": "14.88333"
  },
  {
    "country": "AT",
    "name": "Eisbach",
    "lat": "47.11667",
    "lng": "15.26667"
  },
  {
    "country": "AT",
    "name": "Eidenberg",
    "lat": "48.39439",
    "lng": "14.23313"
  },
  {
    "country": "AT",
    "name": "Eichgraben",
    "lat": "48.17204",
    "lng": "15.98391"
  },
  {
    "country": "AT",
    "name": "Eichfeld",
    "lat": "46.72528",
    "lng": "15.76806"
  },
  {
    "country": "AT",
    "name": "Eichenberg",
    "lat": "47.53333",
    "lng": "9.78333"
  },
  {
    "country": "AT",
    "name": "Eichberg",
    "lat": "47.38188",
    "lng": "15.97356"
  },
  {
    "country": "AT",
    "name": "Eibiswald",
    "lat": "46.68667",
    "lng": "15.24722"
  },
  {
    "country": "AT",
    "name": "Ehrenhausen",
    "lat": "46.72417",
    "lng": "15.58667"
  },
  {
    "country": "AT",
    "name": "Ehenbichl",
    "lat": "47.46667",
    "lng": "10.7"
  },
  {
    "country": "AT",
    "name": "Eggersdorf bei Graz",
    "lat": "47.12338",
    "lng": "15.60084"
  },
  {
    "country": "AT",
    "name": "Eggern",
    "lat": "48.90829",
    "lng": "15.14877"
  },
  {
    "country": "AT",
    "name": "Eggenburg",
    "lat": "48.63892",
    "lng": "15.81903"
  },
  {
    "country": "AT",
    "name": "Eggenberg",
    "lat": "47.07",
    "lng": "15.39871"
  },
  {
    "country": "AT",
    "name": "Egg",
    "lat": "47.43154",
    "lng": "9.89762"
  },
  {
    "country": "AT",
    "name": "Eferding",
    "lat": "48.30866",
    "lng": "14.02233"
  },
  {
    "country": "AT",
    "name": "Edt bei Lambach",
    "lat": "48.11667",
    "lng": "13.88333"
  },
  {
    "country": "AT",
    "name": "Edlitz",
    "lat": "47.59797",
    "lng": "16.14052"
  },
  {
    "country": "AT",
    "name": "Edelstal",
    "lat": "48.0999",
    "lng": "16.9884"
  },
  {
    "country": "AT",
    "name": "Edelsgrub",
    "lat": "47.03333",
    "lng": "15.6"
  },
  {
    "country": "AT",
    "name": "Edelschrott",
    "lat": "47.02156",
    "lng": "15.05266"
  },
  {
    "country": "AT",
    "name": "Edelsbach bei Feldbach",
    "lat": "46.98944",
    "lng": "15.83694"
  },
  {
    "country": "AT",
    "name": "Eckartsau",
    "lat": "48.14507",
    "lng": "16.79737"
  },
  {
    "country": "AT",
    "name": "Echsenbach",
    "lat": "48.71667",
    "lng": "15.21667"
  },
  {
    "country": "AT",
    "name": "Ebreichsdorf",
    "lat": "47.95579",
    "lng": "16.40705"
  },
  {
    "country": "AT",
    "name": "Eberstein",
    "lat": "46.80806",
    "lng": "14.56"
  },
  {
    "country": "AT",
    "name": "Eberstalzell",
    "lat": "48.04392",
    "lng": "13.98319"
  },
  {
    "country": "AT",
    "name": "Ebersdorf",
    "lat": "47.19852",
    "lng": "15.96219"
  },
  {
    "country": "AT",
    "name": "Eberschwang",
    "lat": "48.15504",
    "lng": "13.56194"
  },
  {
    "country": "AT",
    "name": "Eberndorf",
    "lat": "46.59139",
    "lng": "14.64361"
  },
  {
    "country": "AT",
    "name": "Ebergassing",
    "lat": "48.04567",
    "lng": "16.51709"
  },
  {
    "country": "AT",
    "name": "Eberau",
    "lat": "47.10764",
    "lng": "16.46044"
  },
  {
    "country": "AT",
    "name": "Ebenthal",
    "lat": "48.43333",
    "lng": "16.78333"
  },
  {
    "country": "AT",
    "name": "Ebenthal",
    "lat": "46.60806",
    "lng": "14.36417"
  },
  {
    "country": "AT",
    "name": "Ebensee",
    "lat": "47.80716",
    "lng": "13.779"
  },
  {
    "country": "AT",
    "name": "Eben im Pongau",
    "lat": "47.4",
    "lng": "13.4"
  },
  {
    "country": "AT",
    "name": "Ebenfurth",
    "lat": "47.87738",
    "lng": "16.36731"
  },
  {
    "country": "AT",
    "name": "Ebenau",
    "lat": "47.79073",
    "lng": "13.17527"
  },
  {
    "country": "AT",
    "name": "Eben am Achensee",
    "lat": "47.4138",
    "lng": "11.76138"
  },
  {
    "country": "AT",
    "name": "Ebbs",
    "lat": "47.63333",
    "lng": "12.21667"
  },
  {
    "country": "AT",
    "name": "Dürnstein in der Steiermark",
    "lat": "46.98833",
    "lng": "14.39167"
  },
  {
    "country": "AT",
    "name": "Dürnstein",
    "lat": "48.39582",
    "lng": "15.51973"
  },
  {
    "country": "AT",
    "name": "Dürnkrut",
    "lat": "48.47315",
    "lng": "16.85062"
  },
  {
    "country": "AT",
    "name": "Düns",
    "lat": "47.22353",
    "lng": "9.71663"
  },
  {
    "country": "AT",
    "name": "Droß",
    "lat": "48.46393",
    "lng": "15.57561"
  },
  {
    "country": "AT",
    "name": "Drösing",
    "lat": "48.539",
    "lng": "16.90264"
  },
  {
    "country": "AT",
    "name": "Drassburg",
    "lat": "47.74645",
    "lng": "16.48679"
  },
  {
    "country": "AT",
    "name": "Drasenhofen",
    "lat": "48.75",
    "lng": "16.65"
  },
  {
    "country": "AT",
    "name": "Dornbirn",
    "lat": "47.41427",
    "lng": "9.74195"
  },
  {
    "country": "AT",
    "name": "Dorfstetten",
    "lat": "48.32573",
    "lng": "14.98218"
  },
  {
    "country": "AT",
    "name": "Dorfgastein",
    "lat": "47.24172",
    "lng": "13.10223"
  },
  {
    "country": "AT",
    "name": "Dorfbeuern",
    "lat": "48.01667",
    "lng": "13.01667"
  },
  {
    "country": "AT",
    "name": "Doren",
    "lat": "47.49278",
    "lng": "9.87972"
  },
  {
    "country": "AT",
    "name": "Doppl",
    "lat": "48.24811",
    "lng": "14.25416"
  },
  {
    "country": "AT",
    "name": "Donnerskirchen",
    "lat": "47.89425",
    "lng": "16.64635"
  },
  {
    "country": "AT",
    "name": "Donnersbach",
    "lat": "47.46139",
    "lng": "14.12972"
  },
  {
    "country": "AT",
    "name": "Donawitz",
    "lat": "47.36667",
    "lng": "15.06667"
  },
  {
    "country": "AT",
    "name": "Dölsach",
    "lat": "46.82833",
    "lng": "12.84528"
  },
  {
    "country": "AT",
    "name": "Döbriach",
    "lat": "46.78049",
    "lng": "13.65738"
  },
  {
    "country": "AT",
    "name": "Dobersberg",
    "lat": "48.9151",
    "lng": "15.32188"
  },
  {
    "country": "AT",
    "name": "Diex",
    "lat": "46.74435",
    "lng": "14.61704"
  },
  {
    "country": "AT",
    "name": "Dietersdorf am Gnasbach",
    "lat": "46.80917",
    "lng": "15.81167"
  },
  {
    "country": "AT",
    "name": "Dietersdorf",
    "lat": "47.20795",
    "lng": "14.66333"
  },
  {
    "country": "AT",
    "name": "Dietachdorf",
    "lat": "48.08364",
    "lng": "14.42874"
  },
  {
    "country": "AT",
    "name": "Dietach",
    "lat": "48.09018",
    "lng": "14.41647"
  },
  {
    "country": "AT",
    "name": "Dienten am Hochkönig",
    "lat": "47.38324",
    "lng": "13.00369"
  },
  {
    "country": "AT",
    "name": "Dienersdorf",
    "lat": "47.23979",
    "lng": "15.90142"
  },
  {
    "country": "AT",
    "name": "Diemlach",
    "lat": "47.4361",
    "lng": "15.2746"
  },
  {
    "country": "AT",
    "name": "Deutsch-Wagram",
    "lat": "48.29972",
    "lng": "16.56667"
  },
  {
    "country": "AT",
    "name": "Deutschlandsberg",
    "lat": "46.81528",
    "lng": "15.22222"
  },
  {
    "country": "AT",
    "name": "Deutschkreutz",
    "lat": "47.6",
    "lng": "16.63333"
  },
  {
    "country": "AT",
    "name": "Deutsch Kaltenbrunn",
    "lat": "47.0888",
    "lng": "16.1069"
  },
  {
    "country": "AT",
    "name": "Deutsch Jahrndorf",
    "lat": "48.0112",
    "lng": "17.1062"
  },
  {
    "country": "AT",
    "name": "Deutsch Griffen",
    "lat": "46.85606",
    "lng": "14.07501"
  },
  {
    "country": "AT",
    "name": "Deutsch Goritz",
    "lat": "46.75083",
    "lng": "15.82944"
  },
  {
    "country": "AT",
    "name": "Deutschfeistritz",
    "lat": "47.19852",
    "lng": "15.33623"
  },
  {
    "country": "AT",
    "name": "Deuchendorf",
    "lat": "47.46593",
    "lng": "15.32172"
  },
  {
    "country": "AT",
    "name": "Desselbrunn",
    "lat": "48.02145",
    "lng": "13.77027"
  },
  {
    "country": "AT",
    "name": "Dellach im Drautal",
    "lat": "46.7375",
    "lng": "13.07833"
  },
  {
    "country": "AT",
    "name": "Dellach",
    "lat": "46.66175",
    "lng": "13.07965"
  },
  {
    "country": "AT",
    "name": "Dechantskirchen",
    "lat": "47.41667",
    "lng": "16.01667"
  },
  {
    "country": "AT",
    "name": "Debant",
    "lat": "46.83333",
    "lng": "12.81667"
  },
  {
    "country": "AT",
    "name": "Dalaas",
    "lat": "47.12446",
    "lng": "9.99104"
  },
  {
    "country": "AT",
    "name": "Bürs",
    "lat": "47.14972",
    "lng": "9.8"
  },
  {
    "country": "AT",
    "name": "Bürmoos",
    "lat": "47.98343",
    "lng": "12.91786"
  },
  {
    "country": "AT",
    "name": "Burgfried",
    "lat": "48.5199",
    "lng": "14.2957"
  },
  {
    "country": "AT",
    "name": "Burgfried",
    "lat": "47.68004",
    "lng": "13.11175"
  },
  {
    "country": "AT",
    "name": "Burgau",
    "lat": "47.14268",
    "lng": "16.09643"
  },
  {
    "country": "AT",
    "name": "Buchkirchen",
    "lat": "48.22427",
    "lng": "14.02242"
  },
  {
    "country": "AT",
    "name": "Buch in Tirol",
    "lat": "47.37447",
    "lng": "11.754"
  },
  {
    "country": "AT",
    "name": "Buchbach",
    "lat": "47.69648",
    "lng": "15.98425"
  },
  {
    "country": "AT",
    "name": "Brunn an der Wild",
    "lat": "48.69425",
    "lng": "15.52008"
  },
  {
    "country": "AT",
    "name": "Brunn an der Schneebergbahn",
    "lat": "47.82376",
    "lng": "16.15934"
  },
  {
    "country": "AT",
    "name": "Brunn am Gebirge",
    "lat": "48.10697",
    "lng": "16.28466"
  },
  {
    "country": "AT",
    "name": "Brunn",
    "lat": "46.72944",
    "lng": "15.3"
  },
  {
    "country": "AT",
    "name": "Bruckneudorf",
    "lat": "48.0197",
    "lng": "16.778"
  },
  {
    "country": "AT",
    "name": "Brückl",
    "lat": "46.75167",
    "lng": "14.53667"
  },
  {
    "country": "AT",
    "name": "Bruck an der Mur",
    "lat": "47.41667",
    "lng": "15.28333"
  },
  {
    "country": "AT",
    "name": "Bruck an der Leitha",
    "lat": "48.0242",
    "lng": "16.7757"
  },
  {
    "country": "AT",
    "name": "Bruck an der Großglocknerstraße",
    "lat": "47.28494",
    "lng": "12.8231"
  },
  {
    "country": "AT",
    "name": "Bruck am Ziller",
    "lat": "47.38998",
    "lng": "11.85124"
  },
  {
    "country": "AT",
    "name": "Bromberg",
    "lat": "47.66539",
    "lng": "16.2099"
  },
  {
    "country": "AT",
    "name": "Brixlegg",
    "lat": "47.42942",
    "lng": "11.87794"
  },
  {
    "country": "AT",
    "name": "Brixen im Thale",
    "lat": "47.45",
    "lng": "12.25"
  },
  {
    "country": "AT",
    "name": "Bretstein",
    "lat": "47.33333",
    "lng": "14.41667"
  },
  {
    "country": "AT",
    "name": "Breitenwang",
    "lat": "47.48713",
    "lng": "10.7342"
  },
  {
    "country": "AT",
    "name": "Breitenfurt bei Wien",
    "lat": "48.13333",
    "lng": "16.15"
  },
  {
    "country": "AT",
    "name": "Breitenfeld an der Rittschein",
    "lat": "47.03035",
    "lng": "15.95753"
  },
  {
    "country": "AT",
    "name": "Breitenfeld am Tannenriegel",
    "lat": "46.85",
    "lng": "15.63333"
  },
  {
    "country": "AT",
    "name": "Breitenbrunn",
    "lat": "47.94452",
    "lng": "16.73149"
  },
  {
    "country": "AT",
    "name": "Breitenbach am Inn",
    "lat": "47.47829",
    "lng": "11.97372"
  },
  {
    "country": "AT",
    "name": "Breitenau",
    "lat": "47.73355",
    "lng": "16.14338"
  },
  {
    "country": "AT",
    "name": "Bregenz",
    "lat": "47.50311",
    "lng": "9.7471"
  },
  {
    "country": "AT",
    "name": "Braunau am Inn",
    "lat": "48.25628",
    "lng": "13.04343"
  },
  {
    "country": "AT",
    "name": "Brandenberg",
    "lat": "47.49053",
    "lng": "11.89459"
  },
  {
    "country": "AT",
    "name": "Bramberg am Wildkogel",
    "lat": "47.26979",
    "lng": "12.3385"
  },
  {
    "country": "AT",
    "name": "Böheimkirchen",
    "lat": "48.19779",
    "lng": "15.76178"
  },
  {
    "country": "AT",
    "name": "Bodensdorf",
    "lat": "46.69111",
    "lng": "13.97111"
  },
  {
    "country": "AT",
    "name": "Bocksdorf",
    "lat": "47.14256",
    "lng": "16.17784"
  },
  {
    "country": "AT",
    "name": "Bockfließ",
    "lat": "48.36",
    "lng": "16.60389"
  },
  {
    "country": "AT",
    "name": "Bad Blumau",
    "lat": "47.11667",
    "lng": "16.05"
  },
  {
    "country": "AT",
    "name": "Bludesch",
    "lat": "47.2",
    "lng": "9.73306"
  },
  {
    "country": "AT",
    "name": "Bludenz",
    "lat": "47.15476",
    "lng": "9.82255"
  },
  {
    "country": "AT",
    "name": "Blons",
    "lat": "47.22327",
    "lng": "9.83414"
  },
  {
    "country": "AT",
    "name": "Blindenmarkt",
    "lat": "48.12749",
    "lng": "14.98647"
  },
  {
    "country": "AT",
    "name": "Bleiburg/Pliberk",
    "lat": "46.59",
    "lng": "14.79889"
  },
  {
    "country": "AT",
    "name": "Blaindorf",
    "lat": "47.17498",
    "lng": "15.86795"
  },
  {
    "country": "AT",
    "name": "Bizau",
    "lat": "47.36906",
    "lng": "9.92839"
  },
  {
    "country": "AT",
    "name": "Bischofstetten",
    "lat": "48.12222",
    "lng": "15.46909"
  },
  {
    "country": "AT",
    "name": "Bischofshofen",
    "lat": "47.41667",
    "lng": "13.21667"
  },
  {
    "country": "AT",
    "name": "Bisamberg",
    "lat": "48.33125",
    "lng": "16.3609"
  },
  {
    "country": "AT",
    "name": "Birkfeld",
    "lat": "47.35",
    "lng": "15.68333"
  },
  {
    "country": "AT",
    "name": "Birgitz",
    "lat": "47.23536",
    "lng": "11.29922"
  },
  {
    "country": "AT",
    "name": "Bildstein",
    "lat": "47.45",
    "lng": "9.76667"
  },
  {
    "country": "AT",
    "name": "Bierbaum am Auersbach",
    "lat": "46.82949",
    "lng": "15.79237"
  },
  {
    "country": "AT",
    "name": "Biedermannsdorf",
    "lat": "48.08393",
    "lng": "16.34542"
  },
  {
    "country": "AT",
    "name": "Bichlbach",
    "lat": "47.42033",
    "lng": "10.79042"
  },
  {
    "country": "AT",
    "name": "Biberwier",
    "lat": "47.38333",
    "lng": "10.9"
  },
  {
    "country": "AT",
    "name": "Biberbach",
    "lat": "48.03006",
    "lng": "14.70795"
  },
  {
    "country": "AT",
    "name": "Bezau",
    "lat": "47.38478",
    "lng": "9.90139"
  },
  {
    "country": "AT",
    "name": "Berwang",
    "lat": "47.40807",
    "lng": "10.74735"
  },
  {
    "country": "AT",
    "name": "Bernstein",
    "lat": "47.4059",
    "lng": "16.2606"
  },
  {
    "country": "AT",
    "name": "Bernhardsthal",
    "lat": "48.69158",
    "lng": "16.86951"
  },
  {
    "country": "AT",
    "name": "Berndorf bei Salzburg",
    "lat": "47.99532",
    "lng": "13.06146"
  },
  {
    "country": "AT",
    "name": "Berndorf",
    "lat": "47.94567",
    "lng": "16.10973"
  },
  {
    "country": "AT",
    "name": "Berndorf",
    "lat": "47.41667",
    "lng": "15.26667"
  },
  {
    "country": "AT",
    "name": "Bergheim",
    "lat": "47.83333",
    "lng": "13.03333"
  },
  {
    "country": "AT",
    "name": "Bergham",
    "lat": "48.28182",
    "lng": "14.23141"
  },
  {
    "country": "AT",
    "name": "Berg",
    "lat": "48.10147",
    "lng": "17.03842"
  },
  {
    "country": "AT",
    "name": "Behamberg",
    "lat": "48.01667",
    "lng": "14.48333"
  },
  {
    "country": "AT",
    "name": "Baumkirchen",
    "lat": "47.3",
    "lng": "11.56667"
  },
  {
    "country": "AT",
    "name": "Baumgarten bei Gnas",
    "lat": "46.91667",
    "lng": "15.76667"
  },
  {
    "country": "AT",
    "name": "Batschuns",
    "lat": "47.27642",
    "lng": "9.6717"
  },
  {
    "country": "AT",
    "name": "Barwies",
    "lat": "47.305",
    "lng": "10.96649"
  },
  {
    "country": "AT",
    "name": "Bartholomäberg",
    "lat": "47.09245",
    "lng": "9.90813"
  },
  {
    "country": "AT",
    "name": "Bärnkopf",
    "lat": "48.39046",
    "lng": "15.00479"
  },
  {
    "country": "AT",
    "name": "Baldramsdorf",
    "lat": "46.80111",
    "lng": "13.45333"
  },
  {
    "country": "AT",
    "name": "Bairisch Kölldorf",
    "lat": "46.86667",
    "lng": "15.93333"
  },
  {
    "country": "AT",
    "name": "Wimsbach",
    "lat": "48.06667",
    "lng": "13.9"
  },
  {
    "country": "AT",
    "name": "Bad Vöslau",
    "lat": "47.96533",
    "lng": "16.21359"
  },
  {
    "country": "AT",
    "name": "Bad Tatzmannsdorf",
    "lat": "47.33126",
    "lng": "16.23067"
  },
  {
    "country": "AT",
    "name": "Bad Schönau",
    "lat": "47.49473",
    "lng": "16.2341"
  },
  {
    "country": "AT",
    "name": "Bad Schallerbach",
    "lat": "48.22999",
    "lng": "13.91925"
  },
  {
    "country": "AT",
    "name": "Bad Sankt Leonhard im Lavanttal",
    "lat": "46.96278",
    "lng": "14.79167"
  },
  {
    "country": "AT",
    "name": "Bad Ischl",
    "lat": "47.71109",
    "lng": "13.61893"
  },
  {
    "country": "AT",
    "name": "Bad Hofgastein",
    "lat": "47.17274",
    "lng": "13.09871"
  },
  {
    "country": "AT",
    "name": "Bad Hall",
    "lat": "48.03832",
    "lng": "14.20773"
  },
  {
    "country": "AT",
    "name": "Bad Goisern",
    "lat": "47.64252",
    "lng": "13.61609"
  },
  {
    "country": "AT",
    "name": "Bad Gleichenberg",
    "lat": "46.87556",
    "lng": "15.90861"
  },
  {
    "country": "AT",
    "name": "Bad Gastein",
    "lat": "47.11547",
    "lng": "13.13467"
  },
  {
    "country": "AT",
    "name": "Bad Fischau",
    "lat": "47.83137",
    "lng": "16.16707"
  },
  {
    "country": "AT",
    "name": "Badersdorf",
    "lat": "47.1961",
    "lng": "16.3748"
  },
  {
    "country": "AT",
    "name": "Baden",
    "lat": "48.00543",
    "lng": "16.23264"
  },
  {
    "country": "AT",
    "name": "Bad Deutsch-Altenburg",
    "lat": "48.13425",
    "lng": "16.90624"
  },
  {
    "country": "AT",
    "name": "Bad Aussee",
    "lat": "47.60998",
    "lng": "13.78243"
  },
  {
    "country": "AT",
    "name": "Bachmanning",
    "lat": "48.13104",
    "lng": "13.79436"
  },
  {
    "country": "AT",
    "name": "Axams",
    "lat": "47.23111",
    "lng": "11.27892"
  },
  {
    "country": "AT",
    "name": "Außervillgraten",
    "lat": "46.7875",
    "lng": "12.43139"
  },
  {
    "country": "AT",
    "name": "Ausserbraz",
    "lat": "47.14875",
    "lng": "9.90066"
  },
  {
    "country": "AT",
    "name": "Aurolzmünster",
    "lat": "48.24834",
    "lng": "13.45533"
  },
  {
    "country": "AT",
    "name": "Aurach am Hongar",
    "lat": "47.95182",
    "lng": "13.67291"
  },
  {
    "country": "AT",
    "name": "Auersthal",
    "lat": "48.37373",
    "lng": "16.63596"
  },
  {
    "country": "AT",
    "name": "Auersbach",
    "lat": "47.01667",
    "lng": "15.86667"
  },
  {
    "country": "AT",
    "name": "Audorf",
    "lat": "48.2181",
    "lng": "14.27931"
  },
  {
    "country": "AT",
    "name": "Au an der Traun",
    "lat": "48.1802",
    "lng": "14.11248"
  },
  {
    "country": "AT",
    "name": "Au am Leithaberge",
    "lat": "47.92296",
    "lng": "16.55794"
  },
  {
    "country": "AT",
    "name": "Au",
    "lat": "47.7",
    "lng": "13.06667"
  },
  {
    "country": "AT",
    "name": "Au",
    "lat": "47.32176",
    "lng": "9.98067"
  },
  {
    "country": "AT",
    "name": "Atzesberg",
    "lat": "48.53959",
    "lng": "13.86936"
  },
  {
    "country": "AT",
    "name": "Atzenbrugg",
    "lat": "48.29119",
    "lng": "15.90614"
  },
  {
    "country": "AT",
    "name": "Atzbach",
    "lat": "48.08364",
    "lng": "13.70347"
  },
  {
    "country": "AT",
    "name": "Attnang",
    "lat": "48.01667",
    "lng": "13.71667"
  },
  {
    "country": "AT",
    "name": "Attersee",
    "lat": "47.91646",
    "lng": "13.53953"
  },
  {
    "country": "AT",
    "name": "Attendorf",
    "lat": "47.00426",
    "lng": "15.33897"
  },
  {
    "country": "AT",
    "name": "Asten",
    "lat": "48.21941",
    "lng": "14.41784"
  },
  {
    "country": "AT",
    "name": "Asperhofen",
    "lat": "48.24583",
    "lng": "15.92606"
  },
  {
    "country": "AT",
    "name": "Asparn an der Zaya",
    "lat": "48.58333",
    "lng": "16.5"
  },
  {
    "country": "AT",
    "name": "Aspang Markt",
    "lat": "47.55",
    "lng": "16.08333"
  },
  {
    "country": "AT",
    "name": "Aschbach Markt",
    "lat": "48.07234",
    "lng": "14.75395"
  },
  {
    "country": "AT",
    "name": "Aschau",
    "lat": "47.26667",
    "lng": "11.9"
  },
  {
    "country": "AT",
    "name": "Aschach an der Steyr",
    "lat": "48.01312",
    "lng": "14.33544"
  },
  {
    "country": "AT",
    "name": "Aschach an der Donau",
    "lat": "48.36458",
    "lng": "14.02044"
  },
  {
    "country": "AT",
    "name": "Arzl im Pitztal",
    "lat": "47.20712",
    "lng": "10.76261"
  },
  {
    "country": "AT",
    "name": "Arzl",
    "lat": "47.28333",
    "lng": "11.43333"
  },
  {
    "country": "AT",
    "name": "Arzberg",
    "lat": "47.25",
    "lng": "15.51667"
  },
  {
    "country": "AT",
    "name": "Arriach",
    "lat": "46.72921",
    "lng": "13.85046"
  },
  {
    "country": "AT",
    "name": "Arnreit",
    "lat": "48.52513",
    "lng": "13.99487"
  },
  {
    "country": "AT",
    "name": "Arnoldstein",
    "lat": "46.54611",
    "lng": "13.71"
  },
  {
    "country": "AT",
    "name": "Arnfels",
    "lat": "46.67639",
    "lng": "15.40306"
  },
  {
    "country": "AT",
    "name": "Ardning",
    "lat": "47.5912",
    "lng": "14.36372"
  },
  {
    "country": "AT",
    "name": "Ardagger Stift",
    "lat": "48.15",
    "lng": "14.83333"
  },
  {
    "country": "AT",
    "name": "Arbesbach",
    "lat": "48.49337",
    "lng": "14.95308"
  },
  {
    "country": "AT",
    "name": "Apfelberg",
    "lat": "47.2",
    "lng": "14.83333"
  },
  {
    "country": "AT",
    "name": "Apetlon",
    "lat": "47.74394",
    "lng": "16.8302"
  },
  {
    "country": "AT",
    "name": "Anthering",
    "lat": "47.88333",
    "lng": "13.01667"
  },
  {
    "country": "AT",
    "name": "Antau",
    "lat": "47.77377",
    "lng": "16.47984"
  },
  {
    "country": "AT",
    "name": "Ansfelden",
    "lat": "48.20969",
    "lng": "14.29004"
  },
  {
    "country": "AT",
    "name": "Anras",
    "lat": "46.77389",
    "lng": "12.56083"
  },
  {
    "country": "AT",
    "name": "Annabichl",
    "lat": "46.65",
    "lng": "14.31667"
  },
  {
    "country": "AT",
    "name": "Annaberg",
    "lat": "47.87134",
    "lng": "15.37648"
  },
  {
    "country": "AT",
    "name": "Anif",
    "lat": "47.75",
    "lng": "13.06667"
  },
  {
    "country": "AT",
    "name": "Angern an der March",
    "lat": "48.37778",
    "lng": "16.82806"
  },
  {
    "country": "AT",
    "name": "Anger",
    "lat": "47.27422",
    "lng": "15.69139"
  },
  {
    "country": "AT",
    "name": "Angath",
    "lat": "47.50758",
    "lng": "12.06513"
  },
  {
    "country": "AT",
    "name": "Andorf",
    "lat": "48.3713",
    "lng": "13.57412"
  },
  {
    "country": "AT",
    "name": "Andlersdorf",
    "lat": "48.18333",
    "lng": "16.66667"
  },
  {
    "country": "AT",
    "name": "Andelsbuch",
    "lat": "47.41167",
    "lng": "9.89326"
  },
  {
    "country": "AT",
    "name": "Andau",
    "lat": "47.77441",
    "lng": "17.03293"
  },
  {
    "country": "AT",
    "name": "Amstetten",
    "lat": "48.1229",
    "lng": "14.87206"
  },
  {
    "country": "AT",
    "name": "Amras",
    "lat": "47.25",
    "lng": "11.41667"
  },
  {
    "country": "AT",
    "name": "Ampflwang",
    "lat": "48.08333",
    "lng": "13.56667"
  },
  {
    "country": "AT",
    "name": "Ampass",
    "lat": "47.26251",
    "lng": "11.46226"
  },
  {
    "country": "AT",
    "name": "Amlach",
    "lat": "46.81639",
    "lng": "12.76361"
  },
  {
    "country": "AT",
    "name": "Altmünster",
    "lat": "47.90219",
    "lng": "13.76415"
  },
  {
    "country": "AT",
    "name": "Altmelon",
    "lat": "48.46222",
    "lng": "14.96552"
  },
  {
    "country": "AT",
    "name": "Altlichtenwarth",
    "lat": "48.64442",
    "lng": "16.79664"
  },
  {
    "country": "AT",
    "name": "Altlichtenberg",
    "lat": "48.36001",
    "lng": "14.25845"
  },
  {
    "country": "AT",
    "name": "Altlengbach",
    "lat": "48.15355",
    "lng": "15.92606"
  },
  {
    "country": "AT",
    "name": "Althofen",
    "lat": "46.87298",
    "lng": "14.47449"
  },
  {
    "country": "AT",
    "name": "Altheim",
    "lat": "48.25154",
    "lng": "13.23406"
  },
  {
    "country": "AT",
    "name": "Altenmarkt im Pongau",
    "lat": "47.38333",
    "lng": "13.41667"
  },
  {
    "country": "AT",
    "name": "Altenmarkt bei Sankt Gallen",
    "lat": "47.72327",
    "lng": "14.64838"
  },
  {
    "country": "AT",
    "name": "Altenmarkt bei Fürstenfeld",
    "lat": "47.06638",
    "lng": "16.04785"
  },
  {
    "country": "AT",
    "name": "Altenmarkt an der Triesting",
    "lat": "48.01553",
    "lng": "15.99661"
  },
  {
    "country": "AT",
    "name": "Altenfelden",
    "lat": "48.48555",
    "lng": "13.9698"
  },
  {
    "country": "AT",
    "name": "Altendorf",
    "lat": "47.65",
    "lng": "16.01667"
  },
  {
    "country": "AT",
    "name": "Altenburg",
    "lat": "48.64765",
    "lng": "15.59295"
  },
  {
    "country": "AT",
    "name": "Altenberg bei Linz",
    "lat": "48.37284",
    "lng": "14.35029"
  },
  {
    "country": "AT",
    "name": "Altaussee",
    "lat": "47.63844",
    "lng": "13.76278"
  },
  {
    "country": "AT",
    "name": "Altach",
    "lat": "47.35438",
    "lng": "9.65207"
  },
  {
    "country": "AT",
    "name": "Allhartsberg",
    "lat": "48.02633",
    "lng": "14.79009"
  },
  {
    "country": "AT",
    "name": "Allhaming",
    "lat": "48.15246",
    "lng": "14.17022"
  },
  {
    "country": "AT",
    "name": "Allerheiligen im Mürztal",
    "lat": "47.46667",
    "lng": "15.4"
  },
  {
    "country": "AT",
    "name": "Allerheiligen im Mühlkreis",
    "lat": "48.30215",
    "lng": "14.65061"
  },
  {
    "country": "AT",
    "name": "Allerheiligen bei Wildon",
    "lat": "46.91417",
    "lng": "15.55444"
  },
  {
    "country": "AT",
    "name": "Allentsteig",
    "lat": "48.69725",
    "lng": "15.32756"
  },
  {
    "country": "AT",
    "name": "Alland",
    "lat": "48.05829",
    "lng": "16.07901"
  },
  {
    "country": "AT",
    "name": "Alkoven",
    "lat": "48.28753",
    "lng": "14.10748"
  },
  {
    "country": "AT",
    "name": "Aldrans",
    "lat": "47.25",
    "lng": "11.45"
  },
  {
    "country": "AT",
    "name": "Albersdorf",
    "lat": "47.12166",
    "lng": "15.69826"
  },
  {
    "country": "AT",
    "name": "Alberndorf in der Riedmark",
    "lat": "48.40607",
    "lng": "14.41441"
  },
  {
    "country": "AT",
    "name": "Aistersheim",
    "lat": "48.1868",
    "lng": "13.74175"
  },
  {
    "country": "AT",
    "name": "Ainet",
    "lat": "46.86603",
    "lng": "12.68968"
  },
  {
    "country": "AT",
    "name": "Aigen im Mühlkreis",
    "lat": "48.64578",
    "lng": "13.97109"
  },
  {
    "country": "AT",
    "name": "Aigen im Ennstal",
    "lat": "47.51667",
    "lng": "14.13333"
  },
  {
    "country": "AT",
    "name": "Bad Kleinkirchheim",
    "lat": "46.81556",
    "lng": "13.78056"
  },
  {
    "country": "AT",
    "name": "Aichkirchen",
    "lat": "48.10944",
    "lng": "13.79158"
  },
  {
    "country": "AT",
    "name": "Aich",
    "lat": "47.4228",
    "lng": "13.82145"
  },
  {
    "country": "AT",
    "name": "Aibl",
    "lat": "46.68145",
    "lng": "15.22619"
  },
  {
    "country": "AT",
    "name": "Ahorn",
    "lat": "48.52382",
    "lng": "14.17408"
  },
  {
    "country": "AT",
    "name": "Aggsbach",
    "lat": "48.29404",
    "lng": "15.40382"
  },
  {
    "country": "AT",
    "name": "Aflenz Kurort",
    "lat": "47.54211",
    "lng": "15.23898"
  },
  {
    "country": "AT",
    "name": "Adnet",
    "lat": "47.69746",
    "lng": "13.13115"
  },
  {
    "country": "AT",
    "name": "Admont",
    "lat": "47.57537",
    "lng": "14.46075"
  },
  {
    "country": "AT",
    "name": "Adlwang",
    "lat": "47.99245",
    "lng": "14.21742"
  },
  {
    "country": "AT",
    "name": "Aderklaa",
    "lat": "48.28333",
    "lng": "16.53333"
  },
  {
    "country": "AT",
    "name": "Achenkirch",
    "lat": "47.52659",
    "lng": "11.70559"
  },
  {
    "country": "AT",
    "name": "Achau",
    "lat": "48.08026",
    "lng": "16.38611"
  },
  {
    "country": "AT",
    "name": "Abwinden",
    "lat": "48.25903",
    "lng": "14.42625"
  },
  {
    "country": "AT",
    "name": "Abtissendorf",
    "lat": "46.99583",
    "lng": "15.45639"
  },
  {
    "country": "AT",
    "name": "Abtenau",
    "lat": "47.56373",
    "lng": "13.34599"
  },
  {
    "country": "AT",
    "name": "Absam",
    "lat": "47.29572",
    "lng": "11.50593"
  },
  {
    "country": "AT",
    "name": "Abfaltersbach",
    "lat": "46.75715",
    "lng": "12.52828"
  },
  {
    "country": "AT",
    "name": "Schlaiten",
    "lat": "46.87944",
    "lng": "12.65417"
  },
  {
    "country": "AT",
    "name": "Thurn",
    "lat": "46.85056",
    "lng": "12.76861"
  },
  {
    "country": "AT",
    "name": "Untertilliach",
    "lat": "46.70346",
    "lng": "12.67758"
  },
  {
    "country": "AT",
    "name": "Finkenstein am Faaker See",
    "lat": "46.56081",
    "lng": "13.87115"
  },
  {
    "country": "AT",
    "name": "Sankt Jakob in Defereggen",
    "lat": "46.91972",
    "lng": "12.33139"
  },
  {
    "country": "AT",
    "name": "Attnang-Puchheim",
    "lat": "48.00833",
    "lng": "13.71667"
  },
  {
    "country": "AT",
    "name": "Obernberg am Brenner",
    "lat": "47.01667",
    "lng": "11.41667"
  },
  {
    "country": "AT",
    "name": "Mühlbachl",
    "lat": "47.13333",
    "lng": "11.45"
  },
  {
    "country": "AT",
    "name": "Ötztal-Bahnhof",
    "lat": "47.23333",
    "lng": "10.85"
  },
  {
    "country": "AT",
    "name": "Leutasch",
    "lat": "47.3689",
    "lng": "11.14404"
  },
  {
    "country": "AT",
    "name": "Maurach",
    "lat": "47.42124",
    "lng": "11.75305"
  },
  {
    "country": "AT",
    "name": "Gschnitz",
    "lat": "47.04469",
    "lng": "11.35089"
  },
  {
    "country": "AT",
    "name": "Navis",
    "lat": "47.1307",
    "lng": "11.5404"
  },
  {
    "country": "AT",
    "name": "Ellbögen",
    "lat": "47.16667",
    "lng": "11.45"
  },
  {
    "country": "AT",
    "name": "Sellrain",
    "lat": "47.21667",
    "lng": "11.21667"
  },
  {
    "country": "AT",
    "name": "Oberperfuss",
    "lat": "47.24451",
    "lng": "11.24755"
  },
  {
    "country": "AT",
    "name": "Igls",
    "lat": "47.23127",
    "lng": "11.41018"
  },
  {
    "country": "AT",
    "name": "Obsteig",
    "lat": "47.3",
    "lng": "10.93333"
  },
  {
    "country": "AT",
    "name": "Kolsass",
    "lat": "47.3",
    "lng": "11.63333"
  },
  {
    "country": "AT",
    "name": "Gnadenwald",
    "lat": "47.31667",
    "lng": "11.56667"
  },
  {
    "country": "AT",
    "name": "Ehrwald",
    "lat": "47.4",
    "lng": "10.91667"
  },
  {
    "country": "AT",
    "name": "Neue Heimat",
    "lat": "48.24565",
    "lng": "13.04172"
  },
  {
    "country": "AT",
    "name": "Gaumberg",
    "lat": "48.28085",
    "lng": "14.26935"
  },
  {
    "country": "AT",
    "name": "Berg",
    "lat": "48.29278",
    "lng": "14.24778"
  },
  {
    "country": "AT",
    "name": "Lanzendorf",
    "lat": "48.11056",
    "lng": "16.445"
  },
  {
    "country": "AT",
    "name": "Walserfeld",
    "lat": "47.79222",
    "lng": "12.98"
  },
  {
    "country": "AT",
    "name": "Lehen",
    "lat": "47.87083",
    "lng": "13.01722"
  },
  {
    "country": "AT",
    "name": "Heinfels",
    "lat": "46.75",
    "lng": "12.45"
  },
  {
    "country": "AT",
    "name": "Kals am Großglockner",
    "lat": "47.00227",
    "lng": "12.64552"
  },
  {
    "country": "AT",
    "name": "Gerlosberg",
    "lat": "47.2201",
    "lng": "11.93468"
  },
  {
    "country": "AT",
    "name": "Gerlos",
    "lat": "47.22464",
    "lng": "12.03012"
  },
  {
    "country": "AT",
    "name": "Krimml",
    "lat": "47.21799",
    "lng": "12.17487"
  },
  {
    "country": "AT",
    "name": "Rohrberg",
    "lat": "47.23333",
    "lng": "11.91667"
  },
  {
    "country": "AT",
    "name": "Ried im Zillertal",
    "lat": "47.3",
    "lng": "11.86667"
  },
  {
    "country": "AT",
    "name": "Hinterglemm",
    "lat": "47.37685",
    "lng": "12.59583"
  },
  {
    "country": "AT",
    "name": "Alpbach",
    "lat": "47.39878",
    "lng": "11.94373"
  },
  {
    "country": "AT",
    "name": "Itter",
    "lat": "47.47009",
    "lng": "12.14391"
  },
  {
    "country": "AT",
    "name": "Brand",
    "lat": "47.10083",
    "lng": "9.73722"
  },
  {
    "country": "AT",
    "name": "Rain",
    "lat": "46.60528",
    "lng": "14.38611"
  },
  {
    "country": "AT",
    "name": "Kleinedling",
    "lat": "46.81417",
    "lng": "14.82778"
  },
  {
    "country": "AT",
    "name": "Liebenfels",
    "lat": "46.73778",
    "lng": "14.28667"
  },
  {
    "country": "AT",
    "name": "Frauenstein",
    "lat": "46.81417",
    "lng": "14.29417"
  },
  {
    "country": "AT",
    "name": "Eppenstein",
    "lat": "47.12833",
    "lng": "14.7375"
  },
  {
    "country": "AT",
    "name": "Hochleithen",
    "lat": "48.45317",
    "lng": "16.5309"
  },
  {
    "country": "AT",
    "name": "Höf",
    "lat": "47.13401",
    "lng": "15.49092"
  },
  {
    "country": "AT",
    "name": "Niederschöckl",
    "lat": "47.15",
    "lng": "15.5"
  },
  {
    "country": "AT",
    "name": "Sankt Oswald ob Eibiswald",
    "lat": "46.70833",
    "lng": "15.14667"
  },
  {
    "country": "AT",
    "name": "Wildschönau",
    "lat": "47.40619",
    "lng": "12.03784"
  },
  {
    "country": "AT",
    "name": "Langkampfen",
    "lat": "47.54878",
    "lng": "12.10127"
  },
  {
    "country": "AT",
    "name": "Hart bei Graz",
    "lat": "47.04311",
    "lng": "15.51527"
  },
  {
    "country": "AT",
    "name": "Berg im Drautal",
    "lat": "46.74915",
    "lng": "13.13536"
  },
  {
    "country": "AT",
    "name": "Lockenhaus",
    "lat": "47.40753",
    "lng": "16.41623"
  },
  {
    "country": "AT",
    "name": "St. Georgen am Längsee",
    "lat": "46.78061",
    "lng": "14.43033"
  },
  {
    "country": "AT",
    "name": "St. Martin of Tennengebirge",
    "lat": "47.465",
    "lng": "13.37761"
  },
  {
    "country": "AT",
    "name": "Afiesl",
    "lat": "48.58229",
    "lng": "14.12777"
  },
  {
    "country": "AT",
    "name": "Großkirchheim",
    "lat": "46.9727",
    "lng": "12.89589"
  },
  {
    "country": "AT",
    "name": "Damüls",
    "lat": "47.28034",
    "lng": "9.89164"
  },
  {
    "country": "AT",
    "name": "Bad Waltersdorf",
    "lat": "47.1696",
    "lng": "16.0087"
  },
  {
    "country": "AT",
    "name": "Bad Zell",
    "lat": "48.34906",
    "lng": "14.66945"
  },
  {
    "country": "AT",
    "name": "Auen",
    "lat": "46.59963",
    "lng": "13.84389"
  },
  {
    "country": "AT",
    "name": "Bad Leonfelden",
    "lat": "48.52047",
    "lng": "14.29459"
  },
  {
    "country": "AT",
    "name": "Pfarrwerfen",
    "lat": "47.45729",
    "lng": "13.20531"
  },
  {
    "country": "AT",
    "name": "Thal",
    "lat": "47.07644",
    "lng": "15.36052"
  },
  {
    "country": "AT",
    "name": "Bürserberg",
    "lat": "47.14644",
    "lng": "9.77736"
  },
  {
    "country": "AT",
    "name": "Holzgau",
    "lat": "47.26045",
    "lng": "10.34419"
  },
  {
    "country": "AT",
    "name": "Schröcken",
    "lat": "47.25755",
    "lng": "10.09197"
  },
  {
    "country": "AT",
    "name": "Nebelberg",
    "lat": "48.62854",
    "lng": "13.84629"
  },
  {
    "country": "AT",
    "name": "Ottnang am Hausruck",
    "lat": "48.09568",
    "lng": "13.65841"
  },
  {
    "country": "AT",
    "name": "Prottes",
    "lat": "48.3868",
    "lng": "16.7389"
  },
  {
    "country": "AT",
    "name": "Favoriten",
    "lat": "48.16116",
    "lng": "16.38233"
  },
  {
    "country": "AT",
    "name": "Sonnberg im Mühlkreis",
    "lat": "48.4608",
    "lng": "14.31167"
  },
  {
    "country": "AT",
    "name": "Unternberg",
    "lat": "47.11269",
    "lng": "13.74261"
  },
  {
    "country": "AT",
    "name": "Alberschwende",
    "lat": "47.45025",
    "lng": "9.83152"
  },
  {
    "country": "AT",
    "name": "Mellau",
    "lat": "47.35034",
    "lng": "9.88149"
  },
  {
    "country": "AT",
    "name": "Frastanz",
    "lat": "47.21735",
    "lng": "9.62995"
  },
  {
    "country": "AT",
    "name": "Kirchbichl",
    "lat": "47.51743",
    "lng": "12.09629"
  },
  {
    "country": "AT",
    "name": "Baierdorf-Umgebung",
    "lat": "47.28511",
    "lng": "15.71045"
  },
  {
    "country": "AT",
    "name": "Sonntag",
    "lat": "47.23857",
    "lng": "9.89765"
  },
  {
    "country": "AT",
    "name": "Bärnbach",
    "lat": "47.07141",
    "lng": "15.12792"
  },
  {
    "country": "AT",
    "name": "Längenfeld",
    "lat": "47.07398",
    "lng": "10.96951"
  },
  {
    "country": "AT",
    "name": "Haus im Ennstal",
    "lat": "47.41058",
    "lng": "13.76759"
  },
  {
    "country": "AT",
    "name": "Hall bei Admont",
    "lat": "47.587",
    "lng": "14.46372"
  },
  {
    "country": "AT",
    "name": "Vandans",
    "lat": "47.09569",
    "lng": "9.86525"
  },
  {
    "country": "AT",
    "name": "Ertl",
    "lat": "47.97704",
    "lng": "14.63134"
  },
  {
    "country": "AT",
    "name": "Schwarzenberg",
    "lat": "47.41415",
    "lng": "9.85154"
  },
  {
    "country": "AT",
    "name": "Hittisau",
    "lat": "47.45781",
    "lng": "9.95962"
  },
  {
    "country": "AT",
    "name": "Micheldorf in Kärnten",
    "lat": "46.91465",
    "lng": "14.42733"
  },
  {
    "country": "AT",
    "name": "Schärding Vorstadt",
    "lat": "48.45195",
    "lng": "13.43946"
  },
  {
    "country": "AT",
    "name": "Neuberg im Burgenland",
    "lat": "47.16894",
    "lng": "16.26054"
  },
  {
    "country": "AT",
    "name": "Schönkirchen-Reyersdorf",
    "lat": "48.35477",
    "lng": "16.69115"
  },
  {
    "country": "AT",
    "name": "Klein-Neusiedl",
    "lat": "48.09379",
    "lng": "16.60661"
  },
  {
    "country": "AT",
    "name": "Eggendorf",
    "lat": "47.85809",
    "lng": "16.32182"
  },
  {
    "country": "AT",
    "name": "Seitenberg",
    "lat": "46.74801",
    "lng": "14.08825"
  },
  {
    "country": "AT",
    "name": "Dünserberg",
    "lat": "47.22752",
    "lng": "9.72372"
  },
  {
    "country": "AT",
    "name": "Aschau im Zillertal",
    "lat": "47.26613",
    "lng": "11.89536"
  },
  {
    "country": "AT",
    "name": "Assling",
    "lat": "46.78663",
    "lng": "12.63951"
  },
  {
    "country": "AT",
    "name": "Thiersee",
    "lat": "47.59424",
    "lng": "12.11758"
  },
  {
    "country": "AT",
    "name": "Mitterndorf",
    "lat": "47.57728",
    "lng": "12.16968"
  },
  {
    "country": "AT",
    "name": "Grinzens",
    "lat": "47.22927",
    "lng": "11.25318"
  },
  {
    "country": "AT",
    "name": "Mauer",
    "lat": "46.74104",
    "lng": "14.22937"
  },
  {
    "country": "AT",
    "name": "Mautbrücken",
    "lat": "46.72037",
    "lng": "14.19399"
  },
  {
    "country": "AT",
    "name": "Fresen",
    "lat": "46.70516",
    "lng": "14.04513"
  },
  {
    "country": "AT",
    "name": "Draschen",
    "lat": "46.76909",
    "lng": "14.06758"
  },
  {
    "country": "AT",
    "name": "Hinterberg",
    "lat": "47.36066",
    "lng": "15.06951"
  },
  {
    "country": "AT",
    "name": "Tillmitsch Links der Laßnitz",
    "lat": "46.80955",
    "lng": "15.52394"
  },
  {
    "country": "AT",
    "name": "Kirchenviertel",
    "lat": "47.13124",
    "lng": "15.34764"
  },
  {
    "country": "AT",
    "name": "Taugl",
    "lat": "47.64747",
    "lng": "13.20282"
  },
  {
    "country": "AT",
    "name": "Anger",
    "lat": "47.15593",
    "lng": "13.10592"
  },
  {
    "country": "AT",
    "name": "Sticklberg",
    "lat": "47.53036",
    "lng": "15.77911"
  },
  {
    "country": "AT",
    "name": "Klaffenegg",
    "lat": "47.51813",
    "lng": "15.76006"
  },
  {
    "country": "AT",
    "name": "Wagrain",
    "lat": "48.00503",
    "lng": "13.67163"
  },
  {
    "country": "AT",
    "name": "Weißenkirchen im Attergau",
    "lat": "47.94964",
    "lng": "13.41843"
  },
  {
    "country": "AT",
    "name": "Nöstlbach",
    "lat": "48.1666",
    "lng": "14.24609"
  },
  {
    "country": "AT",
    "name": "Klausner",
    "lat": "47.5756",
    "lng": "14.35029"
  },
  {
    "country": "AT",
    "name": "Puchkirchen am Trattberg",
    "lat": "48.04478",
    "lng": "13.57198"
  },
  {
    "country": "AT",
    "name": "Wagnergraben",
    "lat": "48.02036",
    "lng": "13.02395"
  },
  {
    "country": "AT",
    "name": "Illitsch",
    "lat": "46.53855",
    "lng": "13.86681"
  },
  {
    "country": "AT",
    "name": "Diesseits",
    "lat": "48.29216",
    "lng": "13.43546"
  },
  {
    "country": "AT",
    "name": "Wasserburg",
    "lat": "48.27425",
    "lng": "14.56152"
  },
  {
    "country": "AT",
    "name": "Loitzenberg",
    "lat": "48.27291",
    "lng": "14.55259"
  },
  {
    "country": "AT",
    "name": "Unterjosefstal",
    "lat": "48.29216",
    "lng": "14.57525"
  },
  {
    "country": "AT",
    "name": "Doppl",
    "lat": "48.28245",
    "lng": "14.56851"
  },
  {
    "country": "AT",
    "name": "Wolfern",
    "lat": "48.08278",
    "lng": "14.37201"
  },
  {
    "country": "AT",
    "name": "Eggendorf",
    "lat": "48.1313",
    "lng": "15.6196"
  },
  {
    "country": "AT",
    "name": "Hart",
    "lat": "48.1532",
    "lng": "15.61569"
  },
  {
    "country": "AT",
    "name": "Ratzersdorf an der Traisen",
    "lat": "48.22639",
    "lng": "15.66629"
  },
  {
    "country": "AT",
    "name": "Regau",
    "lat": "47.99078",
    "lng": "13.68811"
  },
  {
    "country": "AT",
    "name": "Bernardin",
    "lat": "48.16042",
    "lng": "14.00834"
  },
  {
    "country": "AT",
    "name": "Brandln",
    "lat": "48.1451",
    "lng": "13.99504"
  },
  {
    "country": "AT",
    "name": "Dickerldorf",
    "lat": "48.17676",
    "lng": "14.05705"
  },
  {
    "country": "AT",
    "name": "Laahen",
    "lat": "48.17192",
    "lng": "14.00637"
  },
  {
    "country": "AT",
    "name": "Oberhaid",
    "lat": "48.17593",
    "lng": "14.01495"
  },
  {
    "country": "AT",
    "name": "Gralla",
    "lat": "46.81404",
    "lng": "15.5551"
  },
  {
    "country": "AT",
    "name": "Wispl",
    "lat": "48.16488",
    "lng": "13.99753"
  },
  {
    "country": "AT",
    "name": "Haidl",
    "lat": "48.17267",
    "lng": "14.05297"
  },
  {
    "country": "AT",
    "name": "Tiefenbach",
    "lat": "47.5354",
    "lng": "16.21346"
  },
  {
    "country": "AT",
    "name": "Gries",
    "lat": "46.8316",
    "lng": "14.85103"
  },
  {
    "country": "AT",
    "name": "Priel",
    "lat": "46.82758",
    "lng": "14.8333"
  },
  {
    "country": "AT",
    "name": "Kreuzstetten",
    "lat": "48.48046",
    "lng": "16.47323"
  },
  {
    "country": "AT",
    "name": "Langholzfeld",
    "lat": "48.24297",
    "lng": "14.24772"
  },
  {
    "country": "AT",
    "name": "Neufurth",
    "lat": "48.07894",
    "lng": "14.8118"
  },
  {
    "country": "AT",
    "name": "Villacher Vorstadt",
    "lat": "46.62368",
    "lng": "14.28892"
  },
  {
    "country": "AT",
    "name": "Völkermarkter Vorstadt",
    "lat": "46.62418",
    "lng": "14.32081"
  },
  {
    "country": "AT",
    "name": "St. Veiter Vorstadt",
    "lat": "46.6317",
    "lng": "14.30579"
  },
  {
    "country": "AT",
    "name": "Lerchenfeld",
    "lat": "48.41234",
    "lng": "15.63183"
  },
  {
    "country": "AT",
    "name": "Reinbach",
    "lat": "47.34673",
    "lng": "13.19072"
  },
  {
    "country": "AT",
    "name": "Niederstraß",
    "lat": "48.01398",
    "lng": "13.72956"
  },
  {
    "country": "AT",
    "name": "Langenlebarn-Oberaigen",
    "lat": "48.33023",
    "lng": "16.11059"
  },
  {
    "country": "AT",
    "name": "Lind",
    "lat": "46.62244",
    "lng": "13.84715"
  },
  {
    "country": "AT",
    "name": "Zell-Arzberg",
    "lat": "47.95191",
    "lng": "14.79322"
  },
  {
    "country": "AT",
    "name": "Zell-Markt",
    "lat": "47.95878",
    "lng": "14.78318"
  },
  {
    "country": "AT",
    "name": "Esch",
    "lat": "47.8403",
    "lng": "13.09223"
  },
  {
    "country": "AT",
    "name": "Innere Stadt",
    "lat": "47.0665",
    "lng": "15.44051"
  },
  {
    "country": "AT",
    "name": "Villach-Innere Stadt",
    "lat": "46.61275",
    "lng": "13.84638"
  },
  {
    "country": "AT",
    "name": "Schachen bei Vorau",
    "lat": "47.3801",
    "lng": "15.85816"
  },
  {
    "country": "AT",
    "name": "Obergäu",
    "lat": "47.58955",
    "lng": "13.17621"
  },
  {
    "country": "AT",
    "name": "Eching",
    "lat": "47.97263",
    "lng": "12.88786"
  },
  {
    "country": "AT",
    "name": "Untereisenfeld",
    "lat": "48.168",
    "lng": "14.041"
  },
  {
    "country": "AT",
    "name": "Hochpoint",
    "lat": "48.16139",
    "lng": "14.03838"
  },
  {
    "country": "AT",
    "name": "Dörfl",
    "lat": "48.01245",
    "lng": "13.65472"
  },
  {
    "country": "AT",
    "name": "Dürnau",
    "lat": "47.9971",
    "lng": "13.64459"
  },
  {
    "country": "AT",
    "name": "Neualm",
    "lat": "47.69336",
    "lng": "13.08758"
  },
  {
    "country": "AT",
    "name": "Neu-Feffernitz",
    "lat": "46.68772",
    "lng": "13.67914"
  },
  {
    "country": "AT",
    "name": "Braunau Neustadt",
    "lat": "48.24606",
    "lng": "13.03583"
  },
  {
    "country": "AT",
    "name": "Schleben",
    "lat": "46.62039",
    "lng": "13.93301"
  },
  {
    "country": "AT",
    "name": "Wudmath",
    "lat": "46.59634",
    "lng": "13.98067"
  },
  {
    "country": "AT",
    "name": "Bergern",
    "lat": "48.16752",
    "lng": "14.11153"
  },
  {
    "country": "AT",
    "name": "Höfling",
    "lat": "48.05444",
    "lng": "15.03672"
  },
  {
    "country": "AT",
    "name": "Vasoldsberg",
    "lat": "47.01634",
    "lng": "15.55835"
  },
  {
    "country": "AT",
    "name": "St. Agathen und Perau",
    "lat": "46.60627",
    "lng": "13.85615"
  },
  {
    "country": "AT",
    "name": "Laab",
    "lat": "48.2611",
    "lng": "13.05418"
  },
  {
    "country": "AT",
    "name": "Absdorf",
    "lat": "48.40021",
    "lng": "15.97874"
  },
  {
    "country": "AT",
    "name": "Rohrendorf bei Krems",
    "lat": "48.41935",
    "lng": "15.65772"
  },
  {
    "country": "AT",
    "name": "Tux",
    "lat": "47.15559",
    "lng": "11.72872"
  },
  {
    "country": "AT",
    "name": "Bergland",
    "lat": "48.15595",
    "lng": "15.18553"
  },
  {
    "country": "AT",
    "name": "Rosental an der Kainach",
    "lat": "47.05192",
    "lng": "15.122"
  },
  {
    "country": "AT",
    "name": "Ufer",
    "lat": "48.24842",
    "lng": "14.49977"
  },
  {
    "country": "AT",
    "name": "Lingenau",
    "lat": "47.45033",
    "lng": "9.92166"
  },
  {
    "country": "AT",
    "name": "Tillmitsch",
    "lat": "46.81195",
    "lng": "15.51679"
  },
  {
    "country": "AT",
    "name": "Donaustadt",
    "lat": "48.2333",
    "lng": "16.46002"
  },
  {
    "country": "AT",
    "name": "Jakomini",
    "lat": "47.05441",
    "lng": "15.44984"
  },
  {
    "country": "AT",
    "name": "Lend",
    "lat": "47.08256",
    "lng": "15.41589"
  },
  {
    "country": "AT",
    "name": "Geidorf",
    "lat": "47.08393",
    "lng": "15.444"
  },
  {
    "country": "AT",
    "name": "Sankt Leonhard",
    "lat": "47.06924",
    "lng": "15.45784"
  },
  {
    "country": "AT",
    "name": "Andritz",
    "lat": "47.11387",
    "lng": "15.42348"
  },
  {
    "country": "AT",
    "name": "Gries",
    "lat": "47.06236",
    "lng": "15.42421"
  },
  {
    "country": "AT",
    "name": "Viktringer Vorstadt",
    "lat": "46.61773",
    "lng": "14.30931"
  },
  {
    "country": "AT",
    "name": "Angerberg",
    "lat": "47.50672",
    "lng": "12.04033"
  },
  {
    "country": "AT",
    "name": "Rohr im Kremstal",
    "lat": "48.06864",
    "lng": "14.19306"
  },
  {
    "country": "AT",
    "name": "Langenegg",
    "lat": "47.46922",
    "lng": "9.89744"
  },
  {
    "country": "AT",
    "name": "Vogau",
    "lat": "46.73187",
    "lng": "15.60837"
  },
  {
    "country": "AT",
    "name": "Reitberg",
    "lat": "47.85269",
    "lng": "13.1573"
  },
  {
    "country": "AT",
    "name": "Föderlach I",
    "lat": "46.59998",
    "lng": "13.96128"
  },
  {
    "country": "AT",
    "name": "Vals",
    "lat": "47.04507",
    "lng": "11.53281"
  },
  {
    "country": "AT",
    "name": "Hinterleiten",
    "lat": "48.16513",
    "lng": "15.96654"
  },
  {
    "country": "AT",
    "name": "Neubau",
    "lat": "48.21901",
    "lng": "14.19301"
  },
  {
    "country": "AT",
    "name": "Steinfeld",
    "lat": "47.71254",
    "lng": "13.6326"
  },
  {
    "country": "AU",
    "name": "York",
    "lat": "-31.88809",
    "lng": "116.7678"
  },
  {
    "country": "AU",
    "name": "Yanchep",
    "lat": "-31.54678",
    "lng": "115.63171"
  },
  {
    "country": "AU",
    "name": "Yallingup",
    "lat": "-33.64592",
    "lng": "115.03514"
  },
  {
    "country": "AU",
    "name": "Wundowie",
    "lat": "-31.76163",
    "lng": "116.3799"
  },
  {
    "country": "AU",
    "name": "Wooroloo",
    "lat": "-31.8038",
    "lng": "116.31311"
  },
  {
    "country": "AU",
    "name": "Woodville",
    "lat": "-34.877",
    "lng": "138.54291"
  },
  {
    "country": "AU",
    "name": "Woodside",
    "lat": "-34.95433",
    "lng": "138.87901"
  },
  {
    "country": "AU",
    "name": "Wiluna",
    "lat": "-26.5921",
    "lng": "120.22402"
  },
  {
    "country": "AU",
    "name": "Willunga",
    "lat": "-35.27127",
    "lng": "138.55417"
  },
  {
    "country": "AU",
    "name": "Williamstown",
    "lat": "-34.6721",
    "lng": "138.89108"
  },
  {
    "country": "AU",
    "name": "Willaston",
    "lat": "-34.5864",
    "lng": "138.74124"
  },
  {
    "country": "AU",
    "name": "Whyalla",
    "lat": "-33.03268",
    "lng": "137.56483"
  },
  {
    "country": "AU",
    "name": "Wembley",
    "lat": "-31.93308",
    "lng": "115.81783"
  },
  {
    "country": "AU",
    "name": "Wellard",
    "lat": "-32.26667",
    "lng": "115.83333"
  },
  {
    "country": "AU",
    "name": "Wayville",
    "lat": "-34.94468",
    "lng": "138.59132"
  },
  {
    "country": "AU",
    "name": "Waterloo Corner",
    "lat": "-34.71667",
    "lng": "138.58333"
  },
  {
    "country": "AU",
    "name": "Waroona",
    "lat": "-32.84323",
    "lng": "115.92201"
  },
  {
    "country": "AU",
    "name": "Wanneroo",
    "lat": "-31.75",
    "lng": "115.8"
  },
  {
    "country": "AU",
    "name": "Wallaroo",
    "lat": "-33.93881",
    "lng": "137.63365"
  },
  {
    "country": "AU",
    "name": "Waikerie",
    "lat": "-34.18178",
    "lng": "139.98552"
  },
  {
    "country": "AU",
    "name": "Wagin",
    "lat": "-33.30894",
    "lng": "117.34328"
  },
  {
    "country": "AU",
    "name": "Waggrakine",
    "lat": "-28.71883",
    "lng": "114.63924"
  },
  {
    "country": "AU",
    "name": "Virginia",
    "lat": "-34.6663",
    "lng": "138.56027"
  },
  {
    "country": "AU",
    "name": "Victor Harbor",
    "lat": "-35.55042",
    "lng": "138.62154"
  },
  {
    "country": "AU",
    "name": "Vasse",
    "lat": "-33.69337",
    "lng": "115.2678"
  },
  {
    "country": "AU",
    "name": "Utakarra",
    "lat": "-28.78333",
    "lng": "114.65"
  },
  {
    "country": "AU",
    "name": "Unley",
    "lat": "-34.95",
    "lng": "138.6"
  },
  {
    "country": "AU",
    "name": "Two Wells",
    "lat": "-34.59327",
    "lng": "138.51367"
  },
  {
    "country": "AU",
    "name": "Tumby Bay",
    "lat": "-34.3773",
    "lng": "136.10065"
  },
  {
    "country": "AU",
    "name": "Trigg",
    "lat": "-31.86939",
    "lng": "115.7571"
  },
  {
    "country": "AU",
    "name": "Toodyay",
    "lat": "-31.54977",
    "lng": "116.46743"
  },
  {
    "country": "AU",
    "name": "Thebarton",
    "lat": "-34.91667",
    "lng": "138.56667"
  },
  {
    "country": "AU",
    "name": "Tennant Creek",
    "lat": "-19.6497",
    "lng": "134.19147"
  },
  {
    "country": "AU",
    "name": "Tea Tree Gully",
    "lat": "-34.81667",
    "lng": "138.73333"
  },
  {
    "country": "AU",
    "name": "Tanunda",
    "lat": "-34.52336",
    "lng": "138.95982"
  },
  {
    "country": "AU",
    "name": "Tailem Bend",
    "lat": "-35.25226",
    "lng": "139.45546"
  },
  {
    "country": "AU",
    "name": "Swan View",
    "lat": "-31.88333",
    "lng": "116.05"
  },
  {
    "country": "AU",
    "name": "Swanbourne",
    "lat": "-31.96878",
    "lng": "115.7673"
  },
  {
    "country": "AU",
    "name": "Subiaco",
    "lat": "-31.9485",
    "lng": "115.8268"
  },
  {
    "country": "AU",
    "name": "Sturt",
    "lat": "-35.02303",
    "lng": "138.55476"
  },
  {
    "country": "AU",
    "name": "Streaky Bay",
    "lat": "-32.79554",
    "lng": "134.20928"
  },
  {
    "country": "AU",
    "name": "Strathalbyn",
    "lat": "-35.25979",
    "lng": "138.89247"
  },
  {
    "country": "AU",
    "name": "Stoneville",
    "lat": "-31.8783",
    "lng": "116.17072"
  },
  {
    "country": "AU",
    "name": "Stoneville",
    "lat": "-30.86667",
    "lng": "121.76667"
  },
  {
    "country": "AU",
    "name": "Stirling",
    "lat": "-35.0022",
    "lng": "138.71956"
  },
  {
    "country": "AU",
    "name": "Spearwood",
    "lat": "-32.10534",
    "lng": "115.77797"
  },
  {
    "country": "AU",
    "name": "South Perth",
    "lat": "-31.98333",
    "lng": "115.86667"
  },
  {
    "country": "AU",
    "name": "Solomontown",
    "lat": "-33.1853",
    "lng": "138.02364"
  },
  {
    "country": "AU",
    "name": "Smithfield",
    "lat": "-34.68333",
    "lng": "138.68333"
  },
  {
    "country": "AU",
    "name": "Denham",
    "lat": "-25.92679",
    "lng": "113.53327"
  },
  {
    "country": "AU",
    "name": "Serpentine",
    "lat": "-32.36051",
    "lng": "115.97723"
  },
  {
    "country": "AU",
    "name": "Semaphore",
    "lat": "-34.83934",
    "lng": "138.48228"
  },
  {
    "country": "AU",
    "name": "Seaton",
    "lat": "-34.9",
    "lng": "138.51667"
  },
  {
    "country": "AU",
    "name": "Seaford",
    "lat": "-35.1898",
    "lng": "138.47589"
  },
  {
    "country": "AU",
    "name": "Scarborough",
    "lat": "-31.89578",
    "lng": "115.76431"
  },
  {
    "country": "AU",
    "name": "Salisbury",
    "lat": "-34.76667",
    "lng": "138.63333"
  },
  {
    "country": "AU",
    "name": "Safety Bay",
    "lat": "-32.30463",
    "lng": "115.74213"
  },
  {
    "country": "AU",
    "name": "Roxby Downs",
    "lat": "-30.56305",
    "lng": "136.89546"
  },
  {
    "country": "AU",
    "name": "Roleystone",
    "lat": "-32.11458",
    "lng": "116.0706"
  },
  {
    "country": "AU",
    "name": "Rockingham",
    "lat": "-32.27682",
    "lng": "115.72978"
  },
  {
    "country": "AU",
    "name": "Robe",
    "lat": "-37.16387",
    "lng": "139.76026"
  },
  {
    "country": "AU",
    "name": "Maida Vale",
    "lat": "-31.95187",
    "lng": "116.02764"
  },
  {
    "country": "AU",
    "name": "Reynella",
    "lat": "-35.09372",
    "lng": "138.53082"
  },
  {
    "country": "AU",
    "name": "Quorn",
    "lat": "-32.34676",
    "lng": "138.04176"
  },
  {
    "country": "AU",
    "name": "Quindalup",
    "lat": "-33.6356",
    "lng": "115.14899"
  },
  {
    "country": "AU",
    "name": "Prospect",
    "lat": "-34.88241",
    "lng": "138.5933"
  },
  {
    "country": "AU",
    "name": "Port Willunga",
    "lat": "-35.26181",
    "lng": "138.46436"
  },
  {
    "country": "AU",
    "name": "Port Pirie",
    "lat": "-33.19176",
    "lng": "138.01746"
  },
  {
    "country": "AU",
    "name": "Port Noarlunga",
    "lat": "-35.14802",
    "lng": "138.47099"
  },
  {
    "country": "AU",
    "name": "Moonta Bay",
    "lat": "-34.05",
    "lng": "137.56667"
  },
  {
    "country": "AU",
    "name": "Port Lincoln",
    "lat": "-34.72625",
    "lng": "135.87442"
  },
  {
    "country": "AU",
    "name": "Port Hedland",
    "lat": "-20.31215",
    "lng": "118.61059"
  },
  {
    "country": "AU",
    "name": "Port Elliot",
    "lat": "-35.53017",
    "lng": "138.67922"
  },
  {
    "country": "AU",
    "name": "Port Broughton",
    "lat": "-33.6007",
    "lng": "137.93597"
  },
  {
    "country": "AU",
    "name": "Port Augusta West",
    "lat": "-32.48611",
    "lng": "137.75833"
  },
  {
    "country": "AU",
    "name": "Port Augusta",
    "lat": "-32.49597",
    "lng": "137.77281"
  },
  {
    "country": "AU",
    "name": "Port Adelaide",
    "lat": "-34.8462",
    "lng": "138.50302"
  },
  {
    "country": "AU",
    "name": "Plympton",
    "lat": "-34.962",
    "lng": "138.55496"
  },
  {
    "country": "AU",
    "name": "Pinjarra",
    "lat": "-32.6298",
    "lng": "115.87351"
  },
  {
    "country": "AU",
    "name": "Peterborough",
    "lat": "-32.97205",
    "lng": "138.84073"
  },
  {
    "country": "AU",
    "name": "Perth",
    "lat": "-31.95224",
    "lng": "115.8614"
  },
  {
    "country": "AU",
    "name": "Pemberton",
    "lat": "-34.44311",
    "lng": "116.03689"
  },
  {
    "country": "AU",
    "name": "Pearce",
    "lat": "-31.66667",
    "lng": "116.01667"
  },
  {
    "country": "AU",
    "name": "Parkerville",
    "lat": "-31.87472",
    "lng": "116.138"
  },
  {
    "country": "AU",
    "name": "Parap",
    "lat": "-12.43054",
    "lng": "130.84142"
  },
  {
    "country": "AU",
    "name": "Onslow",
    "lat": "-21.63764",
    "lng": "115.11221"
  },
  {
    "country": "AU",
    "name": "One Tree Hill",
    "lat": "-34.7",
    "lng": "138.76667"
  },
  {
    "country": "AU",
    "name": "O’Halloran Hill",
    "lat": "-35.06667",
    "lng": "138.55"
  },
  {
    "country": "AU",
    "name": "Nuriootpa",
    "lat": "-34.46825",
    "lng": "138.99767"
  },
  {
    "country": "AU",
    "name": "Nullagine",
    "lat": "-21.88972",
    "lng": "120.1114"
  },
  {
    "country": "AU",
    "name": "North Fremantle",
    "lat": "-32.03333",
    "lng": "115.75"
  },
  {
    "country": "AU",
    "name": "Northfield",
    "lat": "-34.84979",
    "lng": "138.6255"
  },
  {
    "country": "AU",
    "name": "North Beach",
    "lat": "-31.86298",
    "lng": "115.75624"
  },
  {
    "country": "AU",
    "name": "Northam",
    "lat": "-31.64932",
    "lng": "116.67423"
  },
  {
    "country": "AU",
    "name": "Normanville",
    "lat": "-35.44623",
    "lng": "138.3213"
  },
  {
    "country": "AU",
    "name": "Old Noarlunga",
    "lat": "-35.18209",
    "lng": "138.50138"
  },
  {
    "country": "AU",
    "name": "Nhulunbuy",
    "lat": "-12.18165",
    "lng": "136.77841"
  },
  {
    "country": "AU",
    "name": "Newman",
    "lat": "-23.35644",
    "lng": "119.73553"
  },
  {
    "country": "AU",
    "name": "Nedlands",
    "lat": "-31.98184",
    "lng": "115.8073"
  },
  {
    "country": "AU",
    "name": "Narrogin",
    "lat": "-32.93282",
    "lng": "117.17763"
  },
  {
    "country": "AU",
    "name": "Nairne",
    "lat": "-35.0345",
    "lng": "138.91154"
  },
  {
    "country": "AU",
    "name": "Mylor",
    "lat": "-35.04303",
    "lng": "138.759"
  },
  {
    "country": "AU",
    "name": "Murray Bridge",
    "lat": "-35.11986",
    "lng": "139.27345"
  },
  {
    "country": "AU",
    "name": "Mundijong",
    "lat": "-32.29217",
    "lng": "115.98564"
  },
  {
    "country": "AU",
    "name": "Mundaring",
    "lat": "-31.9021",
    "lng": "116.16757"
  },
  {
    "country": "AU",
    "name": "Mount Isa",
    "lat": "-20.72523",
    "lng": "139.49727"
  },
  {
    "country": "AU",
    "name": "Mount Helena",
    "lat": "-31.87606",
    "lng": "116.21025"
  },
  {
    "country": "AU",
    "name": "Mount Compass",
    "lat": "-35.34685",
    "lng": "138.62032"
  },
  {
    "country": "AU",
    "name": "Mount Barker",
    "lat": "-35.06667",
    "lng": "138.86667"
  },
  {
    "country": "AU",
    "name": "Mount Barker",
    "lat": "-34.63084",
    "lng": "117.66606"
  },
  {
    "country": "AU",
    "name": "Mosman Park",
    "lat": "-32.00538",
    "lng": "115.7638"
  },
  {
    "country": "AU",
    "name": "Morphett Vale",
    "lat": "-35.13333",
    "lng": "138.51667"
  },
  {
    "country": "AU",
    "name": "Moora",
    "lat": "-30.64003",
    "lng": "116.00365"
  },
  {
    "country": "AU",
    "name": "Modbury",
    "lat": "-34.83333",
    "lng": "138.68333"
  },
  {
    "country": "AU",
    "name": "Moana",
    "lat": "-35.19394",
    "lng": "138.47614"
  },
  {
    "country": "AU",
    "name": "Mitcham",
    "lat": "-34.97892",
    "lng": "138.62184"
  },
  {
    "country": "AU",
    "name": "Minlaton",
    "lat": "-34.77101",
    "lng": "137.59576"
  },
  {
    "country": "AU",
    "name": "Midland",
    "lat": "-31.88909",
    "lng": "116.0107"
  },
  {
    "country": "AU",
    "name": "Middleton",
    "lat": "-35.51047",
    "lng": "138.70377"
  },
  {
    "country": "AU",
    "name": "Middle Swan",
    "lat": "-31.85",
    "lng": "116.01667"
  },
  {
    "country": "AU",
    "name": "Merredin",
    "lat": "-31.48094",
    "lng": "118.27448"
  },
  {
    "country": "AU",
    "name": "Meningie",
    "lat": "-35.68637",
    "lng": "139.34007"
  },
  {
    "country": "AU",
    "name": "Medina",
    "lat": "-32.23406",
    "lng": "115.79901"
  },
  {
    "country": "AU",
    "name": "Meadows",
    "lat": "-35.18021",
    "lng": "138.7625"
  },
  {
    "country": "AU",
    "name": "McLaren Vale",
    "lat": "-35.21895",
    "lng": "138.54326"
  },
  {
    "country": "AU",
    "name": "McLaren Flat",
    "lat": "-35.21667",
    "lng": "138.58333"
  },
  {
    "country": "AU",
    "name": "Maylands",
    "lat": "-31.93097",
    "lng": "115.89486"
  },
  {
    "country": "AU",
    "name": "Marion",
    "lat": "-35.00423",
    "lng": "138.55313"
  },
  {
    "country": "AU",
    "name": "Marino",
    "lat": "-35.04468",
    "lng": "138.51236"
  },
  {
    "country": "AU",
    "name": "Margaret River",
    "lat": "-33.95504",
    "lng": "115.07599"
  },
  {
    "country": "AU",
    "name": "Marble Bar",
    "lat": "-21.17067",
    "lng": "119.74441"
  },
  {
    "country": "AU",
    "name": "Mannum",
    "lat": "-34.91529",
    "lng": "139.30325"
  },
  {
    "country": "AU",
    "name": "Manning",
    "lat": "-32.01594",
    "lng": "115.86714"
  },
  {
    "country": "AU",
    "name": "Manjimup",
    "lat": "-34.24122",
    "lng": "116.14564"
  },
  {
    "country": "AU",
    "name": "Maningrida",
    "lat": "-12.0483",
    "lng": "134.22941"
  },
  {
    "country": "AU",
    "name": "Mandurah",
    "lat": "-32.5269",
    "lng": "115.7217"
  },
  {
    "country": "AU",
    "name": "Maitland",
    "lat": "-34.37386",
    "lng": "137.67333"
  },
  {
    "country": "AU",
    "name": "Maddington",
    "lat": "-32.05",
    "lng": "115.98333"
  },
  {
    "country": "AU",
    "name": "Macclesfield",
    "lat": "-35.17182",
    "lng": "138.83589"
  },
  {
    "country": "AU",
    "name": "Lyndoch",
    "lat": "-34.60124",
    "lng": "138.89094"
  },
  {
    "country": "AU",
    "name": "Lower Chittering",
    "lat": "-31.58333",
    "lng": "116.11667"
  },
  {
    "country": "AU",
    "name": "Lobethal",
    "lat": "-34.90455",
    "lng": "138.87477"
  },
  {
    "country": "AU",
    "name": "Little Hampton",
    "lat": "-35.04225",
    "lng": "138.86423"
  },
  {
    "country": "AU",
    "name": "Lewiston",
    "lat": "-34.60449",
    "lng": "138.59125"
  },
  {
    "country": "AU",
    "name": "Leonora",
    "lat": "-28.88509",
    "lng": "121.33074"
  },
  {
    "country": "AU",
    "name": "Laverton",
    "lat": "-28.62531",
    "lng": "122.3994"
  },
  {
    "country": "AU",
    "name": "Largs Bay",
    "lat": "-34.82582",
    "lng": "138.48619"
  },
  {
    "country": "AU",
    "name": "Kwinana",
    "lat": "-32.23013",
    "lng": "115.78128"
  },
  {
    "country": "AU",
    "name": "Kununurra",
    "lat": "-15.77825",
    "lng": "128.74208"
  },
  {
    "country": "AU",
    "name": "Kojonup",
    "lat": "-33.8305",
    "lng": "117.15946"
  },
  {
    "country": "AU",
    "name": "Kingston South East",
    "lat": "-36.83073",
    "lng": "139.8522"
  },
  {
    "country": "AU",
    "name": "Kingscote",
    "lat": "-35.6559",
    "lng": "137.6393"
  },
  {
    "country": "AU",
    "name": "Kersbrook",
    "lat": "-34.78305",
    "lng": "138.85091"
  },
  {
    "country": "AU",
    "name": "Kenwick",
    "lat": "-32.03333",
    "lng": "115.96667"
  },
  {
    "country": "AU",
    "name": "Kelmscott",
    "lat": "-32.12434",
    "lng": "116.0259"
  },
  {
    "country": "AU",
    "name": "Katherine",
    "lat": "-14.46517",
    "lng": "132.26347"
  },
  {
    "country": "AU",
    "name": "Katanning",
    "lat": "-33.68787",
    "lng": "117.5584"
  },
  {
    "country": "AU",
    "name": "Karnup",
    "lat": "-32.41894",
    "lng": "115.79267"
  },
  {
    "country": "AU",
    "name": "Kapunda",
    "lat": "-34.33871",
    "lng": "138.91644"
  },
  {
    "country": "AU",
    "name": "Kalgoorlie",
    "lat": "-30.74614",
    "lng": "121.4742"
  },
  {
    "country": "AU",
    "name": "Kalbarri",
    "lat": "-27.7105",
    "lng": "114.16505"
  },
  {
    "country": "AU",
    "name": "Kadina",
    "lat": "-33.96495",
    "lng": "137.71634"
  },
  {
    "country": "AU",
    "name": "Jarrahdale",
    "lat": "-32.3358",
    "lng": "116.05951"
  },
  {
    "country": "AU",
    "name": "Jamestown",
    "lat": "-33.20531",
    "lng": "138.60503"
  },
  {
    "country": "AU",
    "name": "Ingle Farm",
    "lat": "-34.83333",
    "lng": "138.63333"
  },
  {
    "country": "AU",
    "name": "Hope Valley",
    "lat": "-34.83333",
    "lng": "138.7"
  },
  {
    "country": "AU",
    "name": "Hindmarsh Island",
    "lat": "-35.51014",
    "lng": "138.86762"
  },
  {
    "country": "AU",
    "name": "Herne Hill",
    "lat": "-31.82553",
    "lng": "116.0227"
  },
  {
    "country": "AU",
    "name": "Harvey",
    "lat": "-33.07863",
    "lng": "115.91512"
  },
  {
    "country": "AU",
    "name": "Happy Valley",
    "lat": "-35.08333",
    "lng": "138.53333"
  },
  {
    "country": "AU",
    "name": "Hamersley",
    "lat": "-31.84898",
    "lng": "115.80757"
  },
  {
    "country": "AU",
    "name": "Halls Creek",
    "lat": "-18.22485",
    "lng": "127.66647"
  },
  {
    "country": "AU",
    "name": "Hahndorf",
    "lat": "-35.02863",
    "lng": "138.80779"
  },
  {
    "country": "AU",
    "name": "Hackham",
    "lat": "-35.15514",
    "lng": "138.52509"
  },
  {
    "country": "AU",
    "name": "Guildford",
    "lat": "-31.9",
    "lng": "115.96667"
  },
  {
    "country": "AU",
    "name": "Greenock",
    "lat": "-34.457",
    "lng": "138.92719"
  },
  {
    "country": "AU",
    "name": "Greenmount",
    "lat": "-31.90072",
    "lng": "116.0495"
  },
  {
    "country": "AU",
    "name": "Grasmere",
    "lat": "-35.01806",
    "lng": "117.75556"
  },
  {
    "country": "AU",
    "name": "Grange",
    "lat": "-34.90223",
    "lng": "138.49022"
  },
  {
    "country": "AU",
    "name": "Gosnells",
    "lat": "-32.081",
    "lng": "116.0054"
  },
  {
    "country": "AU",
    "name": "Gooseberry Hill",
    "lat": "-31.95444",
    "lng": "116.0492"
  },
  {
    "country": "AU",
    "name": "Goolwa",
    "lat": "-35.50159",
    "lng": "138.78191"
  },
  {
    "country": "AU",
    "name": "Golden Grove",
    "lat": "-34.78333",
    "lng": "138.73333"
  },
  {
    "country": "AU",
    "name": "Glenelg",
    "lat": "-34.98079",
    "lng": "138.515"
  },
  {
    "country": "AU",
    "name": "Gilles Plains",
    "lat": "-34.85",
    "lng": "138.65"
  },
  {
    "country": "AU",
    "name": "Geraldton",
    "lat": "-28.77897",
    "lng": "114.61459"
  },
  {
    "country": "AU",
    "name": "Gawler",
    "lat": "-34.60251",
    "lng": "138.74902"
  },
  {
    "country": "AU",
    "name": "Fremantle",
    "lat": "-32.05632",
    "lng": "115.74557"
  },
  {
    "country": "AU",
    "name": "Freeling",
    "lat": "-34.45407",
    "lng": "138.80868"
  },
  {
    "country": "AU",
    "name": "Fitzroy Crossing",
    "lat": "-18.19714",
    "lng": "125.56663"
  },
  {
    "country": "AU",
    "name": "Findon",
    "lat": "-34.9",
    "lng": "138.53333"
  },
  {
    "country": "AU",
    "name": "Esperance",
    "lat": "-33.85919",
    "lng": "121.89164"
  },
  {
    "country": "AU",
    "name": "Encounter Bay",
    "lat": "-35.57419",
    "lng": "138.60055"
  },
  {
    "country": "AU",
    "name": "Echunga",
    "lat": "-35.10354",
    "lng": "138.79588"
  },
  {
    "country": "AU",
    "name": "Dunsborough",
    "lat": "-33.61476",
    "lng": "115.10445"
  },
  {
    "country": "AU",
    "name": "Donnybrook",
    "lat": "-33.5713",
    "lng": "115.82446"
  },
  {
    "country": "AU",
    "name": "Dongara",
    "lat": "-29.25818",
    "lng": "114.93276"
  },
  {
    "country": "AU",
    "name": "Chidlow",
    "lat": "-31.86094",
    "lng": "116.27243"
  },
  {
    "country": "AU",
    "name": "Derby",
    "lat": "-17.30295",
    "lng": "123.62864"
  },
  {
    "country": "AU",
    "name": "Denmark",
    "lat": "-34.96067",
    "lng": "117.35321"
  },
  {
    "country": "AU",
    "name": "Port Denison",
    "lat": "-29.27367",
    "lng": "114.92068"
  },
  {
    "country": "AU",
    "name": "Darwin",
    "lat": "-12.46113",
    "lng": "130.84185"
  },
  {
    "country": "AU",
    "name": "Darlington",
    "lat": "-35.03151",
    "lng": "138.55527"
  },
  {
    "country": "AU",
    "name": "Darlington",
    "lat": "-31.91906",
    "lng": "116.0812"
  },
  {
    "country": "AU",
    "name": "Dampier",
    "lat": "-20.66275",
    "lng": "116.71256"
  },
  {
    "country": "AU",
    "name": "Crystal Brook",
    "lat": "-33.35256",
    "lng": "138.20955"
  },
  {
    "country": "AU",
    "name": "Craigburn Farm",
    "lat": "-35.04046",
    "lng": "138.6049"
  },
  {
    "country": "AU",
    "name": "Crafers",
    "lat": "-35",
    "lng": "138.7"
  },
  {
    "country": "AU",
    "name": "Cowell",
    "lat": "-33.68227",
    "lng": "136.92117"
  },
  {
    "country": "AU",
    "name": "Cowaramup",
    "lat": "-33.85036",
    "lng": "115.10379"
  },
  {
    "country": "AU",
    "name": "Cottesloe",
    "lat": "-31.99426",
    "lng": "115.75816"
  },
  {
    "country": "AU",
    "name": "Coromandel Valley",
    "lat": "-35.05",
    "lng": "138.61667"
  },
  {
    "country": "AU",
    "name": "Coogee",
    "lat": "-32.11934",
    "lng": "115.7665"
  },
  {
    "country": "AU",
    "name": "Coober Pedy",
    "lat": "-29.01415",
    "lng": "134.75495"
  },
  {
    "country": "AU",
    "name": "Collie",
    "lat": "-33.36206",
    "lng": "116.15617"
  },
  {
    "country": "AU",
    "name": "Cleve",
    "lat": "-33.7",
    "lng": "136.5"
  },
  {
    "country": "AU",
    "name": "Clare",
    "lat": "-33.83325",
    "lng": "138.61064"
  },
  {
    "country": "AU",
    "name": "Cheltenham",
    "lat": "-34.86788",
    "lng": "138.52336"
  },
  {
    "country": "AU",
    "name": "Ceduna",
    "lat": "-32.1266",
    "lng": "133.67271"
  },
  {
    "country": "AU",
    "name": "Caversham",
    "lat": "-31.88333",
    "lng": "115.96667"
  },
  {
    "country": "AU",
    "name": "Carnarvon",
    "lat": "-24.88258",
    "lng": "113.65713"
  },
  {
    "country": "AU",
    "name": "Cardup",
    "lat": "-32.25802",
    "lng": "115.98512"
  },
  {
    "country": "AU",
    "name": "Capel",
    "lat": "-33.55808",
    "lng": "115.56278"
  },
  {
    "country": "AU",
    "name": "Cannington",
    "lat": "-32.01625",
    "lng": "115.93648"
  },
  {
    "country": "AU",
    "name": "Campbelltown",
    "lat": "-34.88333",
    "lng": "138.66667"
  },
  {
    "country": "AU",
    "name": "Byford",
    "lat": "-32.22099",
    "lng": "116.009"
  },
  {
    "country": "AU",
    "name": "Busselton",
    "lat": "-33.65249",
    "lng": "115.3455"
  },
  {
    "country": "AU",
    "name": "Burra",
    "lat": "-33.67171",
    "lng": "138.92835"
  },
  {
    "country": "AU",
    "name": "Bunbury",
    "lat": "-33.32711",
    "lng": "115.64137"
  },
  {
    "country": "AU",
    "name": "Bullsbrook",
    "lat": "-31.66905",
    "lng": "115.9999"
  },
  {
    "country": "AU",
    "name": "Broome",
    "lat": "-17.95538",
    "lng": "122.23922"
  },
  {
    "country": "AU",
    "name": "Brighton",
    "lat": "-35.0182",
    "lng": "138.52351"
  },
  {
    "country": "AU",
    "name": "Bridgewater",
    "lat": "-35.01397",
    "lng": "138.76648"
  },
  {
    "country": "AU",
    "name": "Bridgetown",
    "lat": "-33.96242",
    "lng": "116.13598"
  },
  {
    "country": "AU",
    "name": "Boyanup",
    "lat": "-33.48295",
    "lng": "115.72838"
  },
  {
    "country": "AU",
    "name": "Boulder",
    "lat": "-30.78204",
    "lng": "121.4912"
  },
  {
    "country": "AU",
    "name": "Boddington",
    "lat": "-32.80071",
    "lng": "116.47522"
  },
  {
    "country": "AU",
    "name": "Blackwood",
    "lat": "-35.02139",
    "lng": "138.61429"
  },
  {
    "country": "AU",
    "name": "Birkenhead",
    "lat": "-34.83685",
    "lng": "138.49788"
  },
  {
    "country": "AU",
    "name": "Birdwood",
    "lat": "-34.81826",
    "lng": "138.96478"
  },
  {
    "country": "AU",
    "name": "Beverley",
    "lat": "-32.10839",
    "lng": "116.92736"
  },
  {
    "country": "AU",
    "name": "Bentley",
    "lat": "-32.00224",
    "lng": "115.92473"
  },
  {
    "country": "AU",
    "name": "Bellevue",
    "lat": "-31.90116",
    "lng": "116.02762"
  },
  {
    "country": "AU",
    "name": "Belair",
    "lat": "-34.99766",
    "lng": "138.62077"
  },
  {
    "country": "AU",
    "name": "Bedford Park",
    "lat": "-35.02204",
    "lng": "138.56815"
  },
  {
    "country": "AU",
    "name": "Bedfordale",
    "lat": "-32.17406",
    "lng": "116.0504"
  },
  {
    "country": "AU",
    "name": "Beaumont",
    "lat": "-34.94899",
    "lng": "138.66188"
  },
  {
    "country": "AU",
    "name": "Bassendean",
    "lat": "-31.90906",
    "lng": "115.9437"
  },
  {
    "country": "AU",
    "name": "Balhannah",
    "lat": "-34.99094",
    "lng": "138.82565"
  },
  {
    "country": "AU",
    "name": "Balaklava",
    "lat": "-34.14542",
    "lng": "138.41148"
  },
  {
    "country": "AU",
    "name": "Bakers Hill",
    "lat": "-31.74692",
    "lng": "116.45866"
  },
  {
    "country": "AU",
    "name": "Australind",
    "lat": "-33.2792",
    "lng": "115.71504"
  },
  {
    "country": "AU",
    "name": "Augusta",
    "lat": "-34.31566",
    "lng": "115.15922"
  },
  {
    "country": "AU",
    "name": "Armadale",
    "lat": "-32.14607",
    "lng": "116.0093"
  },
  {
    "country": "AU",
    "name": "Ardrossan",
    "lat": "-34.42217",
    "lng": "137.91907"
  },
  {
    "country": "AU",
    "name": "Applecross",
    "lat": "-32.01667",
    "lng": "115.83333"
  },
  {
    "country": "AU",
    "name": "Angle Vale",
    "lat": "-34.64098",
    "lng": "138.6461"
  },
  {
    "country": "AU",
    "name": "Angaston",
    "lat": "-34.50129",
    "lng": "139.04625"
  },
  {
    "country": "AU",
    "name": "Alice Springs",
    "lat": "-23.69748",
    "lng": "133.88362"
  },
  {
    "country": "AU",
    "name": "Aldgate",
    "lat": "-35.01667",
    "lng": "138.73333"
  },
  {
    "country": "AU",
    "name": "Albany",
    "lat": "-35.02692",
    "lng": "117.88369"
  },
  {
    "country": "AU",
    "name": "Adelaide",
    "lat": "-34.92866",
    "lng": "138.59863"
  },
  {
    "country": "AU",
    "name": "Eaton",
    "lat": "-33.31664",
    "lng": "115.70503"
  },
  {
    "country": "AU",
    "name": "Binningup",
    "lat": "-33.1483",
    "lng": "115.69519"
  },
  {
    "country": "AU",
    "name": "Seacliff",
    "lat": "-35.03474",
    "lng": "138.52288"
  },
  {
    "country": "AU",
    "name": "Clapham",
    "lat": "-34.98989",
    "lng": "138.60158"
  },
  {
    "country": "AU",
    "name": "Two Rocks",
    "lat": "-31.49985",
    "lng": "115.58737"
  },
  {
    "country": "AU",
    "name": "Quinns Rocks",
    "lat": "-31.67379",
    "lng": "115.70372"
  },
  {
    "country": "AU",
    "name": "East Fremantle",
    "lat": "-32.03823",
    "lng": "115.7676"
  },
  {
    "country": "AU",
    "name": "Peppermint Grove",
    "lat": "-31.99878",
    "lng": "115.7682"
  },
  {
    "country": "AU",
    "name": "Claremont",
    "lat": "-31.97961",
    "lng": "115.7823"
  },
  {
    "country": "AU",
    "name": "Bicton",
    "lat": "-32.02778",
    "lng": "115.78333"
  },
  {
    "country": "AU",
    "name": "Attadale",
    "lat": "-32.02489",
    "lng": "115.802"
  },
  {
    "country": "AU",
    "name": "Shenton Park",
    "lat": "-31.95575",
    "lng": "115.79807"
  },
  {
    "country": "AU",
    "name": "Dalkeith",
    "lat": "-31.99517",
    "lng": "115.7998"
  },
  {
    "country": "AU",
    "name": "Jurien Bay",
    "lat": "-30.30591",
    "lng": "115.03825"
  },
  {
    "country": "AU",
    "name": "Drummond Cove",
    "lat": "-28.67379",
    "lng": "114.6128"
  },
  {
    "country": "AU",
    "name": "Warnbro",
    "lat": "-32.34017",
    "lng": "115.7473"
  },
  {
    "country": "AU",
    "name": "Mullaloo",
    "lat": "-31.77896",
    "lng": "115.73676"
  },
  {
    "country": "AU",
    "name": "Exmouth",
    "lat": "-21.93063",
    "lng": "114.12091"
  },
  {
    "country": "AU",
    "name": "Alyangula",
    "lat": "-13.85413",
    "lng": "136.42129"
  },
  {
    "country": "AU",
    "name": "Stuart Park",
    "lat": "-12.4486",
    "lng": "130.84249"
  },
  {
    "country": "AU",
    "name": "Larrakeyah",
    "lat": "-12.45527",
    "lng": "130.83172"
  },
  {
    "country": "AU",
    "name": "Leanyer",
    "lat": "-12.36667",
    "lng": "130.9"
  },
  {
    "country": "AU",
    "name": "Ludmilla",
    "lat": "-12.42032",
    "lng": "130.85506"
  },
  {
    "country": "AU",
    "name": "Fannie Bay",
    "lat": "-12.42275",
    "lng": "130.83627"
  },
  {
    "country": "AU",
    "name": "Nightcliff",
    "lat": "-12.38299",
    "lng": "130.8517"
  },
  {
    "country": "AU",
    "name": "Glen Iris",
    "lat": "-33.33713",
    "lng": "115.6743"
  },
  {
    "country": "AU",
    "name": "Lower King",
    "lat": "-34.95778",
    "lng": "117.93833"
  },
  {
    "country": "AU",
    "name": "Yungaburra",
    "lat": "-17.27058",
    "lng": "145.58335"
  },
  {
    "country": "AU",
    "name": "Young",
    "lat": "-34.3135",
    "lng": "148.30107"
  },
  {
    "country": "AU",
    "name": "Yoogali",
    "lat": "-34.29944",
    "lng": "146.08443"
  },
  {
    "country": "AU",
    "name": "Yerrinbool",
    "lat": "-34.36884",
    "lng": "150.53848"
  },
  {
    "country": "AU",
    "name": "Yeppoon",
    "lat": "-23.12683",
    "lng": "150.74406"
  },
  {
    "country": "AU",
    "name": "Yenda",
    "lat": "-34.24525",
    "lng": "146.20273"
  },
  {
    "country": "AU",
    "name": "Yea",
    "lat": "-37.21067",
    "lng": "145.42755"
  },
  {
    "country": "AU",
    "name": "Yatala",
    "lat": "-27.71667",
    "lng": "153.21667"
  },
  {
    "country": "AU",
    "name": "Yass",
    "lat": "-34.84036",
    "lng": "148.90987"
  },
  {
    "country": "AU",
    "name": "Yarrawonga",
    "lat": "-36.01923",
    "lng": "145.99973"
  },
  {
    "country": "AU",
    "name": "Yarraville",
    "lat": "-37.81667",
    "lng": "144.9"
  },
  {
    "country": "AU",
    "name": "Yarraman",
    "lat": "-26.84167",
    "lng": "151.98138"
  },
  {
    "country": "AU",
    "name": "Yarram",
    "lat": "-38.56479",
    "lng": "146.67557"
  },
  {
    "country": "AU",
    "name": "Yarra Junction",
    "lat": "-37.78192",
    "lng": "145.6143"
  },
  {
    "country": "AU",
    "name": "Yarragon",
    "lat": "-38.20525",
    "lng": "146.06079"
  },
  {
    "country": "AU",
    "name": "Yarra Glen",
    "lat": "-37.65794",
    "lng": "145.37416"
  },
  {
    "country": "AU",
    "name": "Yandina",
    "lat": "-26.56165",
    "lng": "152.95595"
  },
  {
    "country": "AU",
    "name": "Yamba",
    "lat": "-29.4375",
    "lng": "153.35914"
  },
  {
    "country": "AU",
    "name": "Yackandandah",
    "lat": "-36.31371",
    "lng": "146.83958"
  },
  {
    "country": "AU",
    "name": "Wy Yung",
    "lat": "-37.8",
    "lng": "147.58333"
  },
  {
    "country": "AU",
    "name": "Wyreema",
    "lat": "-27.65583",
    "lng": "151.85532"
  },
  {
    "country": "AU",
    "name": "Wyongah",
    "lat": "-33.27468",
    "lng": "151.48898"
  },
  {
    "country": "AU",
    "name": "Wyong",
    "lat": "-33.28254",
    "lng": "151.42327"
  },
  {
    "country": "AU",
    "name": "Wynyard",
    "lat": "-40.9897",
    "lng": "145.72617"
  },
  {
    "country": "AU",
    "name": "Wynnum",
    "lat": "-27.44527",
    "lng": "153.15813"
  },
  {
    "country": "AU",
    "name": "Wyee",
    "lat": "-33.18252",
    "lng": "151.48804"
  },
  {
    "country": "AU",
    "name": "Wurruk",
    "lat": "-38.11667",
    "lng": "147.03333"
  },
  {
    "country": "AU",
    "name": "Wulkuraka",
    "lat": "-27.61429",
    "lng": "152.72191"
  },
  {
    "country": "AU",
    "name": "Woy Woy",
    "lat": "-33.48433",
    "lng": "151.32471"
  },
  {
    "country": "AU",
    "name": "Worrigee",
    "lat": "-34.9",
    "lng": "150.63333"
  },
  {
    "country": "AU",
    "name": "Worongary",
    "lat": "-28.05",
    "lng": "153.35"
  },
  {
    "country": "AU",
    "name": "Woree",
    "lat": "-16.95",
    "lng": "145.75"
  },
  {
    "country": "AU",
    "name": "Woori Yallock",
    "lat": "-37.78062",
    "lng": "145.53819"
  },
  {
    "country": "AU",
    "name": "Woorim",
    "lat": "-27.06931",
    "lng": "153.20427"
  },
  {
    "country": "AU",
    "name": "Woonona",
    "lat": "-34.34932",
    "lng": "150.91443"
  },
  {
    "country": "AU",
    "name": "Woombye",
    "lat": "-26.66054",
    "lng": "152.96947"
  },
  {
    "country": "AU",
    "name": "Woolloomooloo",
    "lat": "-33.87042",
    "lng": "151.21968"
  },
  {
    "country": "AU",
    "name": "Woolgoolga",
    "lat": "-30.11058",
    "lng": "153.20067"
  },
  {
    "country": "AU",
    "name": "Woodridge",
    "lat": "-27.63333",
    "lng": "153.1"
  },
  {
    "country": "AU",
    "name": "Woodgate",
    "lat": "-25.1083",
    "lng": "152.56254"
  },
  {
    "country": "AU",
    "name": "Woodford",
    "lat": "-33.73333",
    "lng": "150.48333"
  },
  {
    "country": "AU",
    "name": "Woodford",
    "lat": "-26.95291",
    "lng": "152.77747"
  },
  {
    "country": "AU",
    "name": "Woodend",
    "lat": "-37.35469",
    "lng": "144.52902"
  },
  {
    "country": "AU",
    "name": "Wonthaggi",
    "lat": "-38.60586",
    "lng": "145.59355"
  },
  {
    "country": "AU",
    "name": "Wonga Park",
    "lat": "-37.73333",
    "lng": "145.26667"
  },
  {
    "country": "AU",
    "name": "Wondai",
    "lat": "-26.3177",
    "lng": "151.87242"
  },
  {
    "country": "AU",
    "name": "Wollongbar",
    "lat": "-28.8182",
    "lng": "153.39686"
  },
  {
    "country": "AU",
    "name": "Wollert",
    "lat": "-37.58333",
    "lng": "145.03333"
  },
  {
    "country": "AU",
    "name": "Wodonga",
    "lat": "-36.12179",
    "lng": "146.88809"
  },
  {
    "country": "AU",
    "name": "Witta",
    "lat": "-26.7",
    "lng": "152.81667"
  },
  {
    "country": "AU",
    "name": "Winton",
    "lat": "-22.38185",
    "lng": "143.0424"
  },
  {
    "country": "AU",
    "name": "Wingham",
    "lat": "-31.86676",
    "lng": "152.36989"
  },
  {
    "country": "AU",
    "name": "Windsor",
    "lat": "-33.61309",
    "lng": "150.81416"
  },
  {
    "country": "AU",
    "name": "Windsor",
    "lat": "-37.85344",
    "lng": "144.99241"
  },
  {
    "country": "AU",
    "name": "Windaroo",
    "lat": "-27.74587",
    "lng": "153.19339"
  },
  {
    "country": "AU",
    "name": "Windang",
    "lat": "-34.53333",
    "lng": "150.86667"
  },
  {
    "country": "AU",
    "name": "Winchelsea",
    "lat": "-38.24485",
    "lng": "143.98322"
  },
  {
    "country": "AU",
    "name": "Wilton",
    "lat": "-34.24053",
    "lng": "150.69771"
  },
  {
    "country": "AU",
    "name": "Williamtown",
    "lat": "-32.80638",
    "lng": "151.84361"
  },
  {
    "country": "AU",
    "name": "Williamstown",
    "lat": "-37.86349",
    "lng": "144.899"
  },
  {
    "country": "AU",
    "name": "Wilberforce",
    "lat": "-33.56256",
    "lng": "150.83784"
  },
  {
    "country": "AU",
    "name": "Whittlesea",
    "lat": "-37.51152",
    "lng": "145.11836"
  },
  {
    "country": "AU",
    "name": "White Rock",
    "lat": "-16.97438",
    "lng": "145.7633"
  },
  {
    "country": "AU",
    "name": "Whitebridge",
    "lat": "-32.97436",
    "lng": "151.71614"
  },
  {
    "country": "AU",
    "name": "Wheelers Hill",
    "lat": "-37.9",
    "lng": "145.18333"
  },
  {
    "country": "AU",
    "name": "West Wyalong",
    "lat": "-33.92373",
    "lng": "147.20473"
  },
  {
    "country": "AU",
    "name": "West Wallsend",
    "lat": "-32.9",
    "lng": "151.58333"
  },
  {
    "country": "AU",
    "name": "West Tamworth",
    "lat": "-31.10236",
    "lng": "150.91447"
  },
  {
    "country": "AU",
    "name": "West Pymble",
    "lat": "-33.76667",
    "lng": "151.13333"
  },
  {
    "country": "AU",
    "name": "Westmead",
    "lat": "-33.80383",
    "lng": "150.98768"
  },
  {
    "country": "AU",
    "name": "West Hoxton",
    "lat": "-33.93388",
    "lng": "150.83234"
  },
  {
    "country": "AU",
    "name": "Westcourt",
    "lat": "-26.8",
    "lng": "150.15"
  },
  {
    "country": "AU",
    "name": "Westbury",
    "lat": "-41.52914",
    "lng": "146.83914"
  },
  {
    "country": "AU",
    "name": "Westbrook",
    "lat": "-27.61667",
    "lng": "151.86667"
  },
  {
    "country": "AU",
    "name": "Wesburn",
    "lat": "-37.76667",
    "lng": "145.63333"
  },
  {
    "country": "AU",
    "name": "Werris Creek",
    "lat": "-31.34908",
    "lng": "150.6487"
  },
  {
    "country": "AU",
    "name": "Werribee",
    "lat": "-37.9",
    "lng": "144.66667"
  },
  {
    "country": "AU",
    "name": "Wentworthville",
    "lat": "-33.80652",
    "lng": "150.96785"
  },
  {
    "country": "AU",
    "name": "Wentworth Falls",
    "lat": "-33.71033",
    "lng": "150.37534"
  },
  {
    "country": "AU",
    "name": "Wentworth",
    "lat": "-34.10726",
    "lng": "141.91315"
  },
  {
    "country": "AU",
    "name": "Wendouree",
    "lat": "-37.53078",
    "lng": "143.82838"
  },
  {
    "country": "AU",
    "name": "Wellington Point",
    "lat": "-27.48333",
    "lng": "153.25"
  },
  {
    "country": "AU",
    "name": "Wellington",
    "lat": "-32.55588",
    "lng": "148.94508"
  },
  {
    "country": "AU",
    "name": "Weipa",
    "lat": "-12.62346",
    "lng": "141.87883"
  },
  {
    "country": "AU",
    "name": "Wee Waa",
    "lat": "-30.2266",
    "lng": "149.44041"
  },
  {
    "country": "AU",
    "name": "Weetangera",
    "lat": "-35.25",
    "lng": "149.05"
  },
  {
    "country": "AU",
    "name": "Waverton",
    "lat": "-33.83863",
    "lng": "151.20046"
  },
  {
    "country": "AU",
    "name": "Waurn Ponds",
    "lat": "-38.21667",
    "lng": "144.28333"
  },
  {
    "country": "AU",
    "name": "Wauchope",
    "lat": "-31.45792",
    "lng": "152.72617"
  },
  {
    "country": "AU",
    "name": "Wattleglen",
    "lat": "-37.66667",
    "lng": "145.18333"
  },
  {
    "country": "AU",
    "name": "Watsonia",
    "lat": "-37.71667",
    "lng": "145.08333"
  },
  {
    "country": "AU",
    "name": "Warwick",
    "lat": "-28.21901",
    "lng": "152.03438"
  },
  {
    "country": "AU",
    "name": "Warrnambool",
    "lat": "-38.38176",
    "lng": "142.48799"
  },
  {
    "country": "AU",
    "name": "Warrimoo",
    "lat": "-33.71667",
    "lng": "150.6"
  },
  {
    "country": "AU",
    "name": "Warren",
    "lat": "-31.70224",
    "lng": "147.83392"
  },
  {
    "country": "AU",
    "name": "Warrawee",
    "lat": "-33.72884",
    "lng": "151.12051"
  },
  {
    "country": "AU",
    "name": "Warrane",
    "lat": "-42.85546",
    "lng": "147.38297"
  },
  {
    "country": "AU",
    "name": "Warrandyte",
    "lat": "-37.75",
    "lng": "145.23333"
  },
  {
    "country": "AU",
    "name": "Warragul",
    "lat": "-38.15912",
    "lng": "145.93118"
  },
  {
    "country": "AU",
    "name": "Warracknabeal",
    "lat": "-36.25326",
    "lng": "142.39281"
  },
  {
    "country": "AU",
    "name": "Warialda",
    "lat": "-29.54354",
    "lng": "150.57542"
  },
  {
    "country": "AU",
    "name": "Warburton",
    "lat": "-37.75375",
    "lng": "145.69037"
  },
  {
    "country": "AU",
    "name": "Wantirna South",
    "lat": "-37.88333",
    "lng": "145.21667"
  },
  {
    "country": "AU",
    "name": "Wantirna",
    "lat": "-37.85",
    "lng": "145.21667"
  },
  {
    "country": "AU",
    "name": "Wangi Wangi",
    "lat": "-33.07185",
    "lng": "151.5984"
  },
  {
    "country": "AU",
    "name": "Wangaratta",
    "lat": "-36.35846",
    "lng": "146.32056"
  },
  {
    "country": "AU",
    "name": "Wandong",
    "lat": "-37.3719",
    "lng": "145.03207"
  },
  {
    "country": "AU",
    "name": "Wandoan",
    "lat": "-26.12285",
    "lng": "149.96028"
  },
  {
    "country": "AU",
    "name": "Wandin North",
    "lat": "-37.78333",
    "lng": "145.43333"
  },
  {
    "country": "AU",
    "name": "Wamuran",
    "lat": "-27.03909",
    "lng": "152.86542"
  },
  {
    "country": "AU",
    "name": "Wamberal",
    "lat": "-33.41554",
    "lng": "151.44559"
  },
  {
    "country": "AU",
    "name": "Wallsend",
    "lat": "-32.90133",
    "lng": "151.66432"
  },
  {
    "country": "AU",
    "name": "Walloon",
    "lat": "-27.60545",
    "lng": "152.66429"
  },
  {
    "country": "AU",
    "name": "Wallington",
    "lat": "-38.22641",
    "lng": "144.51199"
  },
  {
    "country": "AU",
    "name": "Wallerawang",
    "lat": "-33.41096",
    "lng": "150.06456"
  },
  {
    "country": "AU",
    "name": "Wallan",
    "lat": "-37.41625",
    "lng": "144.97859"
  },
  {
    "country": "AU",
    "name": "Wallalong",
    "lat": "-32.69556",
    "lng": "151.64957"
  },
  {
    "country": "AU",
    "name": "Wallacia",
    "lat": "-33.86577",
    "lng": "150.64021"
  },
  {
    "country": "AU",
    "name": "Walkerston",
    "lat": "-21.16097",
    "lng": "149.05814"
  },
  {
    "country": "AU",
    "name": "Walgett",
    "lat": "-30.02461",
    "lng": "148.11566"
  },
  {
    "country": "AU",
    "name": "Walcha",
    "lat": "-30.98493",
    "lng": "151.59335"
  },
  {
    "country": "AU",
    "name": "Waitara",
    "lat": "-33.71092",
    "lng": "151.1033"
  },
  {
    "country": "AU",
    "name": "Wahroonga",
    "lat": "-33.71816",
    "lng": "151.11561"
  },
  {
    "country": "AU",
    "name": "Wahgunyah",
    "lat": "-36.01178",
    "lng": "146.39714"
  },
  {
    "country": "AU",
    "name": "Wagga Wagga",
    "lat": "-35.12577",
    "lng": "147.35375"
  },
  {
    "country": "AU",
    "name": "Wacol",
    "lat": "-27.58333",
    "lng": "152.93333"
  },
  {
    "country": "AU",
    "name": "Virginia",
    "lat": "-27.38333",
    "lng": "153.06667"
  },
  {
    "country": "AU",
    "name": "Vineyard",
    "lat": "-33.64995",
    "lng": "150.85259"
  },
  {
    "country": "AU",
    "name": "Villawood",
    "lat": "-33.88434",
    "lng": "150.98027"
  },
  {
    "country": "AU",
    "name": "Victoria Point",
    "lat": "-27.58329",
    "lng": "153.31172"
  },
  {
    "country": "AU",
    "name": "Vermont",
    "lat": "-37.83616",
    "lng": "145.19428"
  },
  {
    "country": "AU",
    "name": "Vaucluse",
    "lat": "-33.85549",
    "lng": "151.27754"
  },
  {
    "country": "AU",
    "name": "Valley Heights",
    "lat": "-33.7",
    "lng": "150.58333"
  },
  {
    "country": "AU",
    "name": "Valla Beach",
    "lat": "-30.59259",
    "lng": "153.01131"
  },
  {
    "country": "AU",
    "name": "Urunga",
    "lat": "-30.49701",
    "lng": "153.01422"
  },
  {
    "country": "AU",
    "name": "Urraween",
    "lat": "-25.29522",
    "lng": "152.82206"
  },
  {
    "country": "AU",
    "name": "Urangan",
    "lat": "-25.29214",
    "lng": "152.90535"
  },
  {
    "country": "AU",
    "name": "Uralla",
    "lat": "-30.6411",
    "lng": "151.50069"
  },
  {
    "country": "AU",
    "name": "Upwey",
    "lat": "-37.9",
    "lng": "145.33333"
  },
  {
    "country": "AU",
    "name": "Upper Coomera",
    "lat": "-27.87683",
    "lng": "153.28572"
  },
  {
    "country": "AU",
    "name": "Upper Caboolture",
    "lat": "-27.11667",
    "lng": "152.88333"
  },
  {
    "country": "AU",
    "name": "Unanderra",
    "lat": "-34.45306",
    "lng": "150.84746"
  },
  {
    "country": "AU",
    "name": "Ulverstone",
    "lat": "-41.16026",
    "lng": "146.18242"
  },
  {
    "country": "AU",
    "name": "Ulladulla",
    "lat": "-35.35906",
    "lng": "150.47247"
  },
  {
    "country": "AU",
    "name": "Tyabb",
    "lat": "-38.25",
    "lng": "145.18333"
  },
  {
    "country": "AU",
    "name": "Tweed Heads",
    "lat": "-28.17671",
    "lng": "153.5452"
  },
  {
    "country": "AU",
    "name": "Turramurra",
    "lat": "-33.73342",
    "lng": "151.12849"
  },
  {
    "country": "AU",
    "name": "Tuross Head",
    "lat": "-36.05328",
    "lng": "150.13322"
  },
  {
    "country": "AU",
    "name": "Tuncurry",
    "lat": "-32.17443",
    "lng": "152.49876"
  },
  {
    "country": "AU",
    "name": "Tumut",
    "lat": "-35.30642",
    "lng": "148.21818"
  },
  {
    "country": "AU",
    "name": "Tumbi Vmbi",
    "lat": "-33.36667",
    "lng": "151.45"
  },
  {
    "country": "AU",
    "name": "Tumbarumba",
    "lat": "-35.77806",
    "lng": "148.01172"
  },
  {
    "country": "AU",
    "name": "Tully",
    "lat": "-17.93264",
    "lng": "145.92277"
  },
  {
    "country": "AU",
    "name": "Tullamarine",
    "lat": "-37.70128",
    "lng": "144.881"
  },
  {
    "country": "AU",
    "name": "Tugun",
    "lat": "-28.15",
    "lng": "153.5"
  },
  {
    "country": "AU",
    "name": "Truganina",
    "lat": "-37.81667",
    "lng": "144.75"
  },
  {
    "country": "AU",
    "name": "Trinity Beach",
    "lat": "-16.78876",
    "lng": "145.69682"
  },
  {
    "country": "AU",
    "name": "Trentham",
    "lat": "-37.38876",
    "lng": "144.32164"
  },
  {
    "country": "AU",
    "name": "Traralgon",
    "lat": "-38.19528",
    "lng": "146.5415"
  },
  {
    "country": "AU",
    "name": "Trangie",
    "lat": "-32.03147",
    "lng": "147.98344"
  },
  {
    "country": "AU",
    "name": "Trafalgar",
    "lat": "-38.20906",
    "lng": "146.15347"
  },
  {
    "country": "AU",
    "name": "Townsville",
    "lat": "-19.26639",
    "lng": "146.80569"
  },
  {
    "country": "AU",
    "name": "Toukley",
    "lat": "-33.26367",
    "lng": "151.53841"
  },
  {
    "country": "AU",
    "name": "Torquay",
    "lat": "-38.33085",
    "lng": "144.32638"
  },
  {
    "country": "AU",
    "name": "Torquay",
    "lat": "-25.28496",
    "lng": "152.87886"
  },
  {
    "country": "AU",
    "name": "Toowoomba",
    "lat": "-27.56056",
    "lng": "151.95386"
  },
  {
    "country": "AU",
    "name": "Toowong",
    "lat": "-27.48333",
    "lng": "152.98333"
  },
  {
    "country": "AU",
    "name": "Toorak",
    "lat": "-37.84165",
    "lng": "145.01438"
  },
  {
    "country": "AU",
    "name": "Tooradin",
    "lat": "-38.21475",
    "lng": "145.38325"
  },
  {
    "country": "AU",
    "name": "Toongabbie",
    "lat": "-33.78333",
    "lng": "150.95"
  },
  {
    "country": "AU",
    "name": "Toogoom",
    "lat": "-25.25637",
    "lng": "152.69025"
  },
  {
    "country": "AU",
    "name": "Toogoolawah",
    "lat": "-27.08661",
    "lng": "152.37636"
  },
  {
    "country": "AU",
    "name": "Tongala",
    "lat": "-36.25466",
    "lng": "144.95622"
  },
  {
    "country": "AU",
    "name": "Tomerong",
    "lat": "-35.05231",
    "lng": "150.5865"
  },
  {
    "country": "AU",
    "name": "Tomakin",
    "lat": "-35.82335",
    "lng": "150.18794"
  },
  {
    "country": "AU",
    "name": "Tolga",
    "lat": "-17.18557",
    "lng": "145.47707"
  },
  {
    "country": "AU",
    "name": "Tocumwal",
    "lat": "-35.8115",
    "lng": "145.56922"
  },
  {
    "country": "AU",
    "name": "Tinonee",
    "lat": "-31.93634",
    "lng": "152.41425"
  },
  {
    "country": "AU",
    "name": "Tin Can Bay",
    "lat": "-25.91914",
    "lng": "153.0032"
  },
  {
    "country": "AU",
    "name": "Timboon",
    "lat": "-38.48434",
    "lng": "142.98033"
  },
  {
    "country": "AU",
    "name": "Thornton",
    "lat": "-32.78333",
    "lng": "151.63333"
  },
  {
    "country": "AU",
    "name": "Thornleigh",
    "lat": "-33.73228",
    "lng": "151.07895"
  },
  {
    "country": "AU",
    "name": "Thornlands",
    "lat": "-27.55751",
    "lng": "153.26481"
  },
  {
    "country": "AU",
    "name": "Thornbury",
    "lat": "-37.75819",
    "lng": "145.00583"
  },
  {
    "country": "AU",
    "name": "Thomastown",
    "lat": "-37.68333",
    "lng": "145.01667"
  },
  {
    "country": "AU",
    "name": "Thirroul",
    "lat": "-34.31604",
    "lng": "150.92142"
  },
  {
    "country": "AU",
    "name": "Thirlmere",
    "lat": "-34.20455",
    "lng": "150.56767"
  },
  {
    "country": "AU",
    "name": "The Rocks",
    "lat": "-33.85923",
    "lng": "151.2081"
  },
  {
    "country": "AU",
    "name": "The Rock",
    "lat": "-35.27302",
    "lng": "147.11381"
  },
  {
    "country": "AU",
    "name": "The Patch",
    "lat": "-37.89187",
    "lng": "145.40216"
  },
  {
    "country": "AU",
    "name": "The Oaks",
    "lat": "-34.07995",
    "lng": "150.56998"
  },
  {
    "country": "AU",
    "name": "The Entrance",
    "lat": "-33.33876",
    "lng": "151.4978"
  },
  {
    "country": "AU",
    "name": "The Basin",
    "lat": "-37.85",
    "lng": "145.31667"
  },
  {
    "country": "AU",
    "name": "Thabeban",
    "lat": "-24.9",
    "lng": "152.35"
  },
  {
    "country": "AU",
    "name": "Tewantin",
    "lat": "-26.39104",
    "lng": "153.03432"
  },
  {
    "country": "AU",
    "name": "Terrigal",
    "lat": "-33.44815",
    "lng": "151.44665"
  },
  {
    "country": "AU",
    "name": "Terry Hills",
    "lat": "-33.68333",
    "lng": "151.23333"
  },
  {
    "country": "AU",
    "name": "Terranora",
    "lat": "-28.23832",
    "lng": "153.50078"
  },
  {
    "country": "AU",
    "name": "Terang",
    "lat": "-38.24084",
    "lng": "142.92123"
  },
  {
    "country": "AU",
    "name": "Teralba",
    "lat": "-32.96667",
    "lng": "151.6"
  },
  {
    "country": "AU",
    "name": "Tenterfield",
    "lat": "-29.04946",
    "lng": "152.01952"
  },
  {
    "country": "AU",
    "name": "Tenambit",
    "lat": "-32.73967",
    "lng": "151.61293"
  },
  {
    "country": "AU",
    "name": "Templestowe Lower",
    "lat": "-37.76667",
    "lng": "145.11667"
  },
  {
    "country": "AU",
    "name": "Templestowe",
    "lat": "-37.75405",
    "lng": "145.14864"
  },
  {
    "country": "AU",
    "name": "Tempe",
    "lat": "-33.92335",
    "lng": "151.1602"
  },
  {
    "country": "AU",
    "name": "Temora",
    "lat": "-34.44834",
    "lng": "147.53558"
  },
  {
    "country": "AU",
    "name": "Telarah",
    "lat": "-32.72876",
    "lng": "151.53453"
  },
  {
    "country": "AU",
    "name": "Teesdale",
    "lat": "-38.03333",
    "lng": "144.05"
  },
  {
    "country": "AU",
    "name": "Tea Gardens",
    "lat": "-32.66351",
    "lng": "152.15404"
  },
  {
    "country": "AU",
    "name": "Tatura",
    "lat": "-36.43962",
    "lng": "145.22994"
  },
  {
    "country": "AU",
    "name": "Tathra",
    "lat": "-36.73126",
    "lng": "149.98328"
  },
  {
    "country": "AU",
    "name": "Tarro",
    "lat": "-32.8",
    "lng": "151.66667"
  },
  {
    "country": "AU",
    "name": "Tarragindi",
    "lat": "-27.52713",
    "lng": "153.04556"
  },
  {
    "country": "AU",
    "name": "Taroona",
    "lat": "-42.9452",
    "lng": "147.3484"
  },
  {
    "country": "AU",
    "name": "Tarneit",
    "lat": "-37.83634",
    "lng": "144.65952"
  },
  {
    "country": "AU",
    "name": "Taree",
    "lat": "-31.91099",
    "lng": "152.45387"
  },
  {
    "country": "AU",
    "name": "Tara",
    "lat": "-27.27613",
    "lng": "150.45676"
  },
  {
    "country": "AU",
    "name": "Tamworth",
    "lat": "-31.09048",
    "lng": "150.92905"
  },
  {
    "country": "AU",
    "name": "Tamborine",
    "lat": "-27.88333",
    "lng": "153.13333"
  },
  {
    "country": "AU",
    "name": "Tallebudgera",
    "lat": "-28.15",
    "lng": "153.43333"
  },
  {
    "country": "AU",
    "name": "Tallangatta",
    "lat": "-36.21791",
    "lng": "147.17699"
  },
  {
    "country": "AU",
    "name": "Tahmoor",
    "lat": "-34.22246",
    "lng": "150.59467"
  },
  {
    "country": "AU",
    "name": "Table Top",
    "lat": "-35.96667",
    "lng": "147"
  },
  {
    "country": "AU",
    "name": "Sydney",
    "lat": "-33.86785",
    "lng": "151.20732"
  },
  {
    "country": "AU",
    "name": "Sydenham",
    "lat": "-37.7",
    "lng": "144.76667"
  },
  {
    "country": "AU",
    "name": "Swansea",
    "lat": "-33.08765",
    "lng": "151.63745"
  },
  {
    "country": "AU",
    "name": "Swan Hill",
    "lat": "-35.33781",
    "lng": "143.5544"
  },
  {
    "country": "AU",
    "name": "Sutton",
    "lat": "-35.16667",
    "lng": "149.25"
  },
  {
    "country": "AU",
    "name": "Sutherland",
    "lat": "-34.031",
    "lng": "151.05532"
  },
  {
    "country": "AU",
    "name": "Surry Hills",
    "lat": "-33.88374",
    "lng": "151.21282"
  },
  {
    "country": "AU",
    "name": "Surrey Hills",
    "lat": "-37.81667",
    "lng": "145.1"
  },
  {
    "country": "AU",
    "name": "Surfers Paradise",
    "lat": "-28.00274",
    "lng": "153.42999"
  },
  {
    "country": "AU",
    "name": "Sunshine",
    "lat": "-37.78333",
    "lng": "144.83333"
  },
  {
    "country": "AU",
    "name": "Sunnybank",
    "lat": "-27.58003",
    "lng": "153.06064"
  },
  {
    "country": "AU",
    "name": "Sunbury",
    "lat": "-37.57742",
    "lng": "144.72607"
  },
  {
    "country": "AU",
    "name": "Strathpine",
    "lat": "-27.30414",
    "lng": "152.98977"
  },
  {
    "country": "AU",
    "name": "Strathmerton",
    "lat": "-35.92533",
    "lng": "145.47865"
  },
  {
    "country": "AU",
    "name": "Strathfieldsaye",
    "lat": "-36.80667",
    "lng": "144.35487"
  },
  {
    "country": "AU",
    "name": "Strathfield",
    "lat": "-33.88096",
    "lng": "151.07986"
  },
  {
    "country": "AU",
    "name": "Stratford",
    "lat": "-37.9634",
    "lng": "147.0826"
  },
  {
    "country": "AU",
    "name": "Stockton",
    "lat": "-32.90908",
    "lng": "151.7836"
  },
  {
    "country": "AU",
    "name": "Stawell",
    "lat": "-37.05632",
    "lng": "142.78088"
  },
  {
    "country": "AU",
    "name": "Stanwell Park",
    "lat": "-34.2261",
    "lng": "150.98583"
  },
  {
    "country": "AU",
    "name": "Stanthorpe",
    "lat": "-28.65425",
    "lng": "151.93388"
  },
  {
    "country": "AU",
    "name": "Stanmore",
    "lat": "-33.89407",
    "lng": "151.16424"
  },
  {
    "country": "AU",
    "name": "Springwood",
    "lat": "-33.7",
    "lng": "150.55"
  },
  {
    "country": "AU",
    "name": "Springvale South",
    "lat": "-37.96667",
    "lng": "145.15"
  },
  {
    "country": "AU",
    "name": "Springvale",
    "lat": "-37.94853",
    "lng": "145.15274"
  },
  {
    "country": "AU",
    "name": "Springsure",
    "lat": "-24.11478",
    "lng": "148.08849"
  },
  {
    "country": "AU",
    "name": "Spring Hill",
    "lat": "-27.46141",
    "lng": "153.02311"
  },
  {
    "country": "AU",
    "name": "Spreyton",
    "lat": "-41.23524",
    "lng": "146.35108"
  },
  {
    "country": "AU",
    "name": "Spotswood",
    "lat": "-37.82975",
    "lng": "144.88516"
  },
  {
    "country": "AU",
    "name": "South Yarra",
    "lat": "-37.83834",
    "lng": "144.99149"
  },
  {
    "country": "AU",
    "name": "Werribee South",
    "lat": "-37.9475",
    "lng": "144.71667"
  },
  {
    "country": "AU",
    "name": "Southport",
    "lat": "-27.96724",
    "lng": "153.39796"
  },
  {
    "country": "AU",
    "name": "South Melbourne",
    "lat": "-37.83333",
    "lng": "144.96667"
  },
  {
    "country": "AU",
    "name": "South Grafton",
    "lat": "-29.7076",
    "lng": "152.92627"
  },
  {
    "country": "AU",
    "name": "Sorrento",
    "lat": "-38.33958",
    "lng": "144.74126"
  },
  {
    "country": "AU",
    "name": "Sorell",
    "lat": "-42.78161",
    "lng": "147.56267"
  },
  {
    "country": "AU",
    "name": "Somerville",
    "lat": "-38.21667",
    "lng": "145.16667"
  },
  {
    "country": "AU",
    "name": "Somerset",
    "lat": "-41.04065",
    "lng": "145.83055"
  },
  {
    "country": "AU",
    "name": "Somersby",
    "lat": "-33.36667",
    "lng": "151.28333"
  },
  {
    "country": "AU",
    "name": "Somers",
    "lat": "-38.38134",
    "lng": "145.15898"
  },
  {
    "country": "AU",
    "name": "Soldiers Point",
    "lat": "-32.7105",
    "lng": "152.06979"
  },
  {
    "country": "AU",
    "name": "Snug",
    "lat": "-43.06669",
    "lng": "147.25468"
  },
  {
    "country": "AU",
    "name": "Smythesdale",
    "lat": "-37.64308",
    "lng": "143.68617"
  },
  {
    "country": "AU",
    "name": "Smythes Creek",
    "lat": "-37.6",
    "lng": "143.78333"
  },
  {
    "country": "AU",
    "name": "Smithton",
    "lat": "-40.84587",
    "lng": "145.12498"
  },
  {
    "country": "AU",
    "name": "Smithfield",
    "lat": "-33.85",
    "lng": "150.93333"
  },
  {
    "country": "AU",
    "name": "Slacks Creek",
    "lat": "-27.65",
    "lng": "153.15"
  },
  {
    "country": "AU",
    "name": "Singleton",
    "lat": "-32.56742",
    "lng": "151.16603"
  },
  {
    "country": "AU",
    "name": "Silvan",
    "lat": "-37.81667",
    "lng": "145.41667"
  },
  {
    "country": "AU",
    "name": "Shorncliffe",
    "lat": "-27.32759",
    "lng": "153.08161"
  },
  {
    "country": "AU",
    "name": "Shepparton",
    "lat": "-36.38047",
    "lng": "145.39867"
  },
  {
    "country": "AU",
    "name": "Shellharbour",
    "lat": "-34.58333",
    "lng": "150.86667"
  },
  {
    "country": "AU",
    "name": "Sheffield",
    "lat": "-41.39947",
    "lng": "146.33897"
  },
  {
    "country": "AU",
    "name": "Sharon",
    "lat": "-24.87593",
    "lng": "152.26994"
  },
  {
    "country": "AU",
    "name": "Seymour",
    "lat": "-37.02655",
    "lng": "145.13924"
  },
  {
    "country": "AU",
    "name": "Seville",
    "lat": "-37.79802",
    "lng": "145.48763"
  },
  {
    "country": "AU",
    "name": "Seven Hills",
    "lat": "-33.78333",
    "lng": "150.93333"
  },
  {
    "country": "AU",
    "name": "Selby",
    "lat": "-37.91667",
    "lng": "145.38333"
  },
  {
    "country": "AU",
    "name": "Sebastopol",
    "lat": "-37.58532",
    "lng": "143.83953"
  },
  {
    "country": "AU",
    "name": "Seaford",
    "lat": "-38.1",
    "lng": "145.13333"
  },
  {
    "country": "AU",
    "name": "Scottsdale",
    "lat": "-41.1578",
    "lng": "147.51727"
  },
  {
    "country": "AU",
    "name": "Scoresby",
    "lat": "-37.9",
    "lng": "145.23333"
  },
  {
    "country": "AU",
    "name": "Scone",
    "lat": "-32.05014",
    "lng": "150.86893"
  },
  {
    "country": "AU",
    "name": "Schofields",
    "lat": "-33.71667",
    "lng": "150.86667"
  },
  {
    "country": "AU",
    "name": "Scarness",
    "lat": "-25.28405",
    "lng": "152.856"
  },
  {
    "country": "AU",
    "name": "Sawtell",
    "lat": "-30.36459",
    "lng": "153.10141"
  },
  {
    "country": "AU",
    "name": "Sassafras",
    "lat": "-37.86667",
    "lng": "145.35"
  },
  {
    "country": "AU",
    "name": "Sarina",
    "lat": "-21.4191",
    "lng": "149.21677"
  },
  {
    "country": "AU",
    "name": "San Remo",
    "lat": "-38.52547",
    "lng": "145.37616"
  },
  {
    "country": "AU",
    "name": "Sandringham",
    "lat": "-37.95218",
    "lng": "145.01129"
  },
  {
    "country": "AU",
    "name": "Sandgate",
    "lat": "-27.32198",
    "lng": "153.06951"
  },
  {
    "country": "AU",
    "name": "Sandford",
    "lat": "-42.93333",
    "lng": "147.5"
  },
  {
    "country": "AU",
    "name": "Salt Ash",
    "lat": "-32.78333",
    "lng": "151.91667"
  },
  {
    "country": "AU",
    "name": "Sale",
    "lat": "-38.11095",
    "lng": "147.06802"
  },
  {
    "country": "AU",
    "name": "Saint Peters",
    "lat": "-33.91667",
    "lng": "151.18333"
  },
  {
    "country": "AU",
    "name": "Saint Leonards",
    "lat": "-41.45672",
    "lng": "147.19952"
  },
  {
    "country": "AU",
    "name": "Saint Leonards",
    "lat": "-38.17051",
    "lng": "144.71803"
  },
  {
    "country": "AU",
    "name": "Saint Kilda",
    "lat": "-37.8676",
    "lng": "144.98099"
  },
  {
    "country": "AU",
    "name": "Saint Ives",
    "lat": "-33.72976",
    "lng": "151.15977"
  },
  {
    "country": "AU",
    "name": "St Helens",
    "lat": "-41.32028",
    "lng": "148.23889"
  },
  {
    "country": "AU",
    "name": "Saint Helena",
    "lat": "-37.7",
    "lng": "145.13333"
  },
  {
    "country": "AU",
    "name": "Saint Andrews",
    "lat": "-37.60151",
    "lng": "145.27235"
  },
  {
    "country": "AU",
    "name": "Saint Albans",
    "lat": "-37.73333",
    "lng": "144.8"
  },
  {
    "country": "AU",
    "name": "Rye",
    "lat": "-38.38528",
    "lng": "144.81221"
  },
  {
    "country": "AU",
    "name": "Ryde",
    "lat": "-33.8188",
    "lng": "151.1062"
  },
  {
    "country": "AU",
    "name": "Rydalmere",
    "lat": "-33.81453",
    "lng": "151.03751"
  },
  {
    "country": "AU",
    "name": "Rutherglen",
    "lat": "-36.0543",
    "lng": "146.46212"
  },
  {
    "country": "AU",
    "name": "Rutherford",
    "lat": "-32.71667",
    "lng": "151.53333"
  },
  {
    "country": "AU",
    "name": "Rushworth",
    "lat": "-36.58669",
    "lng": "145.0175"
  },
  {
    "country": "AU",
    "name": "Rowville",
    "lat": "-37.93333",
    "lng": "145.23333"
  },
  {
    "country": "AU",
    "name": "Ross Creek",
    "lat": "-37.65",
    "lng": "143.75"
  },
  {
    "country": "AU",
    "name": "Rosewood",
    "lat": "-27.6335",
    "lng": "152.58949"
  },
  {
    "country": "AU",
    "name": "Roseville",
    "lat": "-33.78333",
    "lng": "151.18333"
  },
  {
    "country": "AU",
    "name": "Rosehill",
    "lat": "-33.82009",
    "lng": "151.0245"
  },
  {
    "country": "AU",
    "name": "Rosedale",
    "lat": "-38.15452",
    "lng": "146.7886"
  },
  {
    "country": "AU",
    "name": "Rosebud",
    "lat": "-38.35542",
    "lng": "144.9068"
  },
  {
    "country": "AU",
    "name": "Rosanna",
    "lat": "-37.73895",
    "lng": "145.06735"
  },
  {
    "country": "AU",
    "name": "Rooty Hill",
    "lat": "-33.76667",
    "lng": "150.83333"
  },
  {
    "country": "AU",
    "name": "Romsey",
    "lat": "-37.35075",
    "lng": "144.743"
  },
  {
    "country": "AU",
    "name": "Roma",
    "lat": "-26.56741",
    "lng": "148.78751"
  },
  {
    "country": "AU",
    "name": "Rokeby",
    "lat": "-42.89875",
    "lng": "147.44917"
  },
  {
    "country": "AU",
    "name": "Rocklea",
    "lat": "-27.53917",
    "lng": "153.00402"
  },
  {
    "country": "AU",
    "name": "Rockhampton",
    "lat": "-23.38032",
    "lng": "150.50595"
  },
  {
    "country": "AU",
    "name": "Rockdale",
    "lat": "-33.95",
    "lng": "151.13333"
  },
  {
    "country": "AU",
    "name": "Rockbank",
    "lat": "-37.73353",
    "lng": "144.67003"
  },
  {
    "country": "AU",
    "name": "Rochester",
    "lat": "-36.36352",
    "lng": "144.70077"
  },
  {
    "country": "AU",
    "name": "Rochedale",
    "lat": "-27.56667",
    "lng": "153.13333"
  },
  {
    "country": "AU",
    "name": "Robertson",
    "lat": "-34.58742",
    "lng": "150.59116"
  },
  {
    "country": "AU",
    "name": "Riverview",
    "lat": "-27.6",
    "lng": "152.85"
  },
  {
    "country": "AU",
    "name": "Riverstone",
    "lat": "-33.68333",
    "lng": "150.86667"
  },
  {
    "country": "AU",
    "name": "Ripponlea",
    "lat": "-37.88333",
    "lng": "145"
  },
  {
    "country": "AU",
    "name": "Ringwood North",
    "lat": "-37.8",
    "lng": "145.23333"
  },
  {
    "country": "AU",
    "name": "Ringwood East",
    "lat": "-37.81667",
    "lng": "145.25"
  },
  {
    "country": "AU",
    "name": "Ringwood",
    "lat": "-37.81667",
    "lng": "145.23333"
  },
  {
    "country": "AU",
    "name": "Richmond",
    "lat": "-42.73554",
    "lng": "147.43833"
  },
  {
    "country": "AU",
    "name": "Richmond",
    "lat": "-37.81819",
    "lng": "145.00176"
  },
  {
    "country": "AU",
    "name": "Richmond",
    "lat": "-33.59956",
    "lng": "150.75142"
  },
  {
    "country": "AU",
    "name": "Rhodes",
    "lat": "-33.82663",
    "lng": "151.0881"
  },
  {
    "country": "AU",
    "name": "Revesby",
    "lat": "-33.95",
    "lng": "151.01667"
  },
  {
    "country": "AU",
    "name": "Reservoir",
    "lat": "-37.71667",
    "lng": "145"
  },
  {
    "country": "AU",
    "name": "Research",
    "lat": "-37.7",
    "lng": "145.18333"
  },
  {
    "country": "AU",
    "name": "Renmark West",
    "lat": "-34.16531",
    "lng": "140.7097"
  },
  {
    "country": "AU",
    "name": "Renmark",
    "lat": "-34.17702",
    "lng": "140.74697"
  },
  {
    "country": "AU",
    "name": "Regents Park",
    "lat": "-33.88333",
    "lng": "151.01667"
  },
  {
    "country": "AU",
    "name": "Redlynch",
    "lat": "-16.9254",
    "lng": "145.69559"
  },
  {
    "country": "AU",
    "name": "Redland Bay",
    "lat": "-27.6113",
    "lng": "153.30022"
  },
  {
    "country": "AU",
    "name": "Red Hill",
    "lat": "-20.31667",
    "lng": "148.5"
  },
  {
    "country": "AU",
    "name": "Redhead",
    "lat": "-33.01178",
    "lng": "151.71142"
  },
  {
    "country": "AU",
    "name": "Redfern",
    "lat": "-33.89279",
    "lng": "151.20415"
  },
  {
    "country": "AU",
    "name": "Red Cliffs",
    "lat": "-34.30942",
    "lng": "142.18971"
  },
  {
    "country": "AU",
    "name": "Redbank",
    "lat": "-27.6",
    "lng": "152.86667"
  },
  {
    "country": "AU",
    "name": "Raymond Terrace",
    "lat": "-32.75952",
    "lng": "151.7505"
  },
  {
    "country": "AU",
    "name": "Raworth",
    "lat": "-32.73333",
    "lng": "151.61667"
  },
  {
    "country": "AU",
    "name": "Ravenshoe",
    "lat": "-17.60901",
    "lng": "145.48413"
  },
  {
    "country": "AU",
    "name": "Rathmines",
    "lat": "-33.03773",
    "lng": "151.58443"
  },
  {
    "country": "AU",
    "name": "Ranelagh",
    "lat": "-43.00977",
    "lng": "147.03764"
  },
  {
    "country": "AU",
    "name": "Raglan",
    "lat": "-33.41667",
    "lng": "149.66667"
  },
  {
    "country": "AU",
    "name": "Quirindi",
    "lat": "-31.50763",
    "lng": "150.67902"
  },
  {
    "country": "AU",
    "name": "Queenstown",
    "lat": "-42.0805",
    "lng": "145.55646"
  },
  {
    "country": "AU",
    "name": "Queenscliff",
    "lat": "-38.26789",
    "lng": "144.66193"
  },
  {
    "country": "AU",
    "name": "Queanbeyan",
    "lat": "-35.35493",
    "lng": "149.232"
  },
  {
    "country": "AU",
    "name": "Quakers Hill",
    "lat": "-33.73333",
    "lng": "150.88333"
  },
  {
    "country": "AU",
    "name": "Pyrmont",
    "lat": "-33.86985",
    "lng": "151.19402"
  },
  {
    "country": "AU",
    "name": "Pymble",
    "lat": "-33.74386",
    "lng": "151.14188"
  },
  {
    "country": "AU",
    "name": "Puckapunyal",
    "lat": "-36.99493",
    "lng": "145.04005"
  },
  {
    "country": "AU",
    "name": "Proserpine",
    "lat": "-20.4011",
    "lng": "148.5802"
  },
  {
    "country": "AU",
    "name": "Preston",
    "lat": "-37.75",
    "lng": "145.01667"
  },
  {
    "country": "AU",
    "name": "Prahran",
    "lat": "-37.85114",
    "lng": "144.99318"
  },
  {
    "country": "AU",
    "name": "Potts Point",
    "lat": "-33.86701",
    "lng": "151.22586"
  },
  {
    "country": "AU",
    "name": "Port Sorell",
    "lat": "-41.16652",
    "lng": "146.55283"
  },
  {
    "country": "AU",
    "name": "Port Melbourne",
    "lat": "-37.83961",
    "lng": "144.94228"
  },
  {
    "country": "AU",
    "name": "Port Macquarie",
    "lat": "-31.43084",
    "lng": "152.90894"
  },
  {
    "country": "AU",
    "name": "Portland",
    "lat": "-38.3462",
    "lng": "141.60257"
  },
  {
    "country": "AU",
    "name": "Portland",
    "lat": "-33.35709",
    "lng": "149.98148"
  },
  {
    "country": "AU",
    "name": "Port Kembla",
    "lat": "-34.4818",
    "lng": "150.9012"
  },
  {
    "country": "AU",
    "name": "Port Hacking",
    "lat": "-34.06791",
    "lng": "151.12561"
  },
  {
    "country": "AU",
    "name": "Port Fairy",
    "lat": "-38.38535",
    "lng": "142.2371"
  },
  {
    "country": "AU",
    "name": "Port Douglas",
    "lat": "-16.48383",
    "lng": "145.46725"
  },
  {
    "country": "AU",
    "name": "Portarlington",
    "lat": "-38.11542",
    "lng": "144.65559"
  },
  {
    "country": "AU",
    "name": "Pomona",
    "lat": "-26.36685",
    "lng": "152.85574"
  },
  {
    "country": "AU",
    "name": "Pokolbin",
    "lat": "-32.8",
    "lng": "151.28333"
  },
  {
    "country": "AU",
    "name": "Point Vernon",
    "lat": "-25.25727",
    "lng": "152.81725"
  },
  {
    "country": "AU",
    "name": "Point Lonsdale",
    "lat": "-38.28173",
    "lng": "144.61055"
  },
  {
    "country": "AU",
    "name": "Point Cook",
    "lat": "-37.91482",
    "lng": "144.75088"
  },
  {
    "country": "AU",
    "name": "Point Clare",
    "lat": "-33.44378",
    "lng": "151.32732"
  },
  {
    "country": "AU",
    "name": "Plenty",
    "lat": "-37.66667",
    "lng": "145.11667"
  },
  {
    "country": "AU",
    "name": "Plainland",
    "lat": "-27.56667",
    "lng": "152.41667"
  },
  {
    "country": "AU",
    "name": "Pitt Town",
    "lat": "-33.58718",
    "lng": "150.85857"
  },
  {
    "country": "AU",
    "name": "Pittsworth",
    "lat": "-27.71638",
    "lng": "151.63399"
  },
  {
    "country": "AU",
    "name": "Pine Mountain",
    "lat": "-27.55",
    "lng": "152.7"
  },
  {
    "country": "AU",
    "name": "Pimpama",
    "lat": "-27.81667",
    "lng": "153.3"
  },
  {
    "country": "AU",
    "name": "Picton",
    "lat": "-34.16995",
    "lng": "150.61168"
  },
  {
    "country": "AU",
    "name": "Pialba",
    "lat": "-25.287",
    "lng": "152.84369"
  },
  {
    "country": "AU",
    "name": "Phillip",
    "lat": "-35.35035",
    "lng": "149.09151"
  },
  {
    "country": "AU",
    "name": "Phillip",
    "lat": "-31.13333",
    "lng": "150.85"
  },
  {
    "country": "AU",
    "name": "Petrie",
    "lat": "-27.26667",
    "lng": "152.98333"
  },
  {
    "country": "AU",
    "name": "Perth",
    "lat": "-41.57231",
    "lng": "147.17096"
  },
  {
    "country": "AU",
    "name": "Penshurst",
    "lat": "-33.96667",
    "lng": "151.08333"
  },
  {
    "country": "AU",
    "name": "Penrith",
    "lat": "-33.75",
    "lng": "150.7"
  },
  {
    "country": "AU",
    "name": "Penola",
    "lat": "-37.3752",
    "lng": "140.83678"
  },
  {
    "country": "AU",
    "name": "Pennant Hills",
    "lat": "-33.73783",
    "lng": "151.07216"
  },
  {
    "country": "AU",
    "name": "Penguin",
    "lat": "-41.12258",
    "lng": "146.07318"
  },
  {
    "country": "AU",
    "name": "Pendle Hill",
    "lat": "-33.80402",
    "lng": "150.95543"
  },
  {
    "country": "AU",
    "name": "Pearcedale",
    "lat": "-38.203",
    "lng": "145.23488"
  },
  {
    "country": "AU",
    "name": "Peak Hill",
    "lat": "-32.72387",
    "lng": "148.19052"
  },
  {
    "country": "AU",
    "name": "Peachester",
    "lat": "-26.84551",
    "lng": "152.884"
  },
  {
    "country": "AU",
    "name": "Paynesville",
    "lat": "-37.91886",
    "lng": "147.71944"
  },
  {
    "country": "AU",
    "name": "Pascoe Vale",
    "lat": "-37.73333",
    "lng": "144.93333"
  },
  {
    "country": "AU",
    "name": "Parkville",
    "lat": "-37.78333",
    "lng": "144.95"
  },
  {
    "country": "AU",
    "name": "Park Ridge",
    "lat": "-27.71667",
    "lng": "153.03333"
  },
  {
    "country": "AU",
    "name": "Parkhurst",
    "lat": "-23.3",
    "lng": "150.51667"
  },
  {
    "country": "AU",
    "name": "Parkes",
    "lat": "-33.1372",
    "lng": "148.1759"
  },
  {
    "country": "AU",
    "name": "Parkdale",
    "lat": "-37.99187",
    "lng": "145.08128"
  },
  {
    "country": "AU",
    "name": "Panton Hill",
    "lat": "-37.64082",
    "lng": "145.23991"
  },
  {
    "country": "AU",
    "name": "Palmwoods",
    "lat": "-26.68584",
    "lng": "152.96135"
  },
  {
    "country": "AU",
    "name": "Palm Beach",
    "lat": "-33.59664",
    "lng": "151.32384"
  },
  {
    "country": "AU",
    "name": "Palm Beach",
    "lat": "-28.11694",
    "lng": "153.46584"
  },
  {
    "country": "AU",
    "name": "Pakenham Upper",
    "lat": "-38.01667",
    "lng": "145.51667"
  },
  {
    "country": "AU",
    "name": "Pakenham",
    "lat": "-38.07018",
    "lng": "145.47411"
  },
  {
    "country": "AU",
    "name": "Oxley",
    "lat": "-27.55",
    "lng": "152.98333"
  },
  {
    "country": "AU",
    "name": "Ouyen",
    "lat": "-35.07087",
    "lng": "142.32034"
  },
  {
    "country": "AU",
    "name": "Ormond",
    "lat": "-37.9",
    "lng": "145.03333"
  },
  {
    "country": "AU",
    "name": "Ormiston",
    "lat": "-27.51667",
    "lng": "153.25"
  },
  {
    "country": "AU",
    "name": "Ormeau",
    "lat": "-27.76791",
    "lng": "153.2428"
  },
  {
    "country": "AU",
    "name": "Orbost",
    "lat": "-37.69644",
    "lng": "148.457"
  },
  {
    "country": "AU",
    "name": "Orange",
    "lat": "-33.28397",
    "lng": "149.10018"
  },
  {
    "country": "AU",
    "name": "Oonoonba",
    "lat": "-19.29684",
    "lng": "146.82091"
  },
  {
    "country": "AU",
    "name": "One Mile",
    "lat": "-27.62902",
    "lng": "152.73768"
  },
  {
    "country": "AU",
    "name": "Olinda",
    "lat": "-37.85",
    "lng": "145.36667"
  },
  {
    "country": "AU",
    "name": "Lancefield",
    "lat": "-37.27733",
    "lng": "144.73596"
  },
  {
    "country": "AU",
    "name": "Old Beach",
    "lat": "-42.77758",
    "lng": "147.26659"
  },
  {
    "country": "AU",
    "name": "Old Bar",
    "lat": "-31.9694",
    "lng": "152.58807"
  },
  {
    "country": "AU",
    "name": "Officer",
    "lat": "-38.05916",
    "lng": "145.40947"
  },
  {
    "country": "AU",
    "name": "Barwon Heads",
    "lat": "-38.27448",
    "lng": "144.48853"
  },
  {
    "country": "AU",
    "name": "Oberon",
    "lat": "-33.70398",
    "lng": "149.85915"
  },
  {
    "country": "AU",
    "name": "Oatley",
    "lat": "-33.98004",
    "lng": "151.07201"
  },
  {
    "country": "AU",
    "name": "Oakleigh East",
    "lat": "-37.9",
    "lng": "145.11667"
  },
  {
    "country": "AU",
    "name": "Oakleigh",
    "lat": "-37.89809",
    "lng": "145.08837"
  },
  {
    "country": "AU",
    "name": "Oakhurst",
    "lat": "-25.51253",
    "lng": "152.63583"
  },
  {
    "country": "AU",
    "name": "Oakey",
    "lat": "-27.43305",
    "lng": "151.72063"
  },
  {
    "country": "AU",
    "name": "Oakdale",
    "lat": "-34.0793",
    "lng": "150.5132"
  },
  {
    "country": "AU",
    "name": "Nyora",
    "lat": "-38.33364",
    "lng": "145.67248"
  },
  {
    "country": "AU",
    "name": "Nyngan",
    "lat": "-31.56375",
    "lng": "147.19373"
  },
  {
    "country": "AU",
    "name": "Nunawading",
    "lat": "-37.82043",
    "lng": "145.17308"
  },
  {
    "country": "AU",
    "name": "Numurkah",
    "lat": "-36.08846",
    "lng": "145.44215"
  },
  {
    "country": "AU",
    "name": "Nowra",
    "lat": "-34.88422",
    "lng": "150.60036"
  },
  {
    "country": "AU",
    "name": "Notting Hill",
    "lat": "-37.905",
    "lng": "145.1427"
  },
  {
    "country": "AU",
    "name": "North Wonthaggi",
    "lat": "-38.57769",
    "lng": "145.59302"
  },
  {
    "country": "AU",
    "name": "North Turramurra",
    "lat": "-33.71313",
    "lng": "151.14638"
  },
  {
    "country": "AU",
    "name": "North Sydney",
    "lat": "-33.839",
    "lng": "151.2072"
  },
  {
    "country": "AU",
    "name": "North Melbourne",
    "lat": "-37.79798",
    "lng": "144.94512"
  },
  {
    "country": "AU",
    "name": "Northmead",
    "lat": "-33.78378",
    "lng": "150.99858"
  },
  {
    "country": "AU",
    "name": "North Mackay",
    "lat": "-21.12009",
    "lng": "149.17941"
  },
  {
    "country": "AU",
    "name": "North Haven",
    "lat": "-31.6368",
    "lng": "152.81357"
  },
  {
    "country": "AU",
    "name": "Fitzroy North",
    "lat": "-37.78862",
    "lng": "144.97885"
  },
  {
    "country": "AU",
    "name": "Northcote",
    "lat": "-37.76667",
    "lng": "145"
  },
  {
    "country": "AU",
    "name": "Normanton",
    "lat": "-17.67183",
    "lng": "141.07721"
  },
  {
    "country": "AU",
    "name": "Normanhurst",
    "lat": "-33.7237",
    "lng": "151.09576"
  },
  {
    "country": "AU",
    "name": "Noosaville",
    "lat": "-26.4",
    "lng": "153.06667"
  },
  {
    "country": "AU",
    "name": "Noosa Heads",
    "lat": "-26.39433",
    "lng": "153.0901"
  },
  {
    "country": "AU",
    "name": "Nome",
    "lat": "-19.36245",
    "lng": "146.94672"
  },
  {
    "country": "AU",
    "name": "Noble Park",
    "lat": "-37.96667",
    "lng": "145.16667"
  },
  {
    "country": "AU",
    "name": "Nimbin",
    "lat": "-28.59545",
    "lng": "153.22336"
  },
  {
    "country": "AU",
    "name": "Nicholson",
    "lat": "-37.81667",
    "lng": "147.73333"
  },
  {
    "country": "AU",
    "name": "Nhill",
    "lat": "-36.33333",
    "lng": "141.65006"
  },
  {
    "country": "AU",
    "name": "Newtown",
    "lat": "-33.89835",
    "lng": "151.17754"
  },
  {
    "country": "AU",
    "name": "Newstead",
    "lat": "-41.44108",
    "lng": "147.16183"
  },
  {
    "country": "AU",
    "name": "Newstead",
    "lat": "-27.45314",
    "lng": "153.04183"
  },
  {
    "country": "AU",
    "name": "Newport",
    "lat": "-37.84427",
    "lng": "144.88483"
  },
  {
    "country": "AU",
    "name": "Newport",
    "lat": "-33.65639",
    "lng": "151.31401"
  },
  {
    "country": "AU",
    "name": "New Norfolk",
    "lat": "-42.78261",
    "lng": "147.0587"
  },
  {
    "country": "AU",
    "name": "Newnham",
    "lat": "-41.38969",
    "lng": "147.11397"
  },
  {
    "country": "AU",
    "name": "Newmarket",
    "lat": "-27.43534",
    "lng": "153.00781"
  },
  {
    "country": "AU",
    "name": "Newington",
    "lat": "-37.55846",
    "lng": "143.82485"
  },
  {
    "country": "AU",
    "name": "Newcastle",
    "lat": "-32.92953",
    "lng": "151.7801"
  },
  {
    "country": "AU",
    "name": "Nerang",
    "lat": "-27.98941",
    "lng": "153.33633"
  },
  {
    "country": "AU",
    "name": "Nelson Bay",
    "lat": "-32.72043",
    "lng": "152.14398"
  },
  {
    "country": "AU",
    "name": "Neerim South",
    "lat": "-38.01683",
    "lng": "145.95447"
  },
  {
    "country": "AU",
    "name": "Nebo",
    "lat": "-21.68333",
    "lng": "148.68333"
  },
  {
    "country": "AU",
    "name": "Narromine",
    "lat": "-32.23121",
    "lng": "148.24052"
  },
  {
    "country": "AU",
    "name": "Narre Warren North",
    "lat": "-37.98333",
    "lng": "145.31667"
  },
  {
    "country": "AU",
    "name": "Narre Warren",
    "lat": "-38.03333",
    "lng": "145.3"
  },
  {
    "country": "AU",
    "name": "Narrandera",
    "lat": "-34.74752",
    "lng": "146.55096"
  },
  {
    "country": "AU",
    "name": "Narrabri",
    "lat": "-30.32488",
    "lng": "149.78266"
  },
  {
    "country": "AU",
    "name": "Narrabeen",
    "lat": "-33.71277",
    "lng": "151.29736"
  },
  {
    "country": "AU",
    "name": "Narooma",
    "lat": "-36.21783",
    "lng": "150.13247"
  },
  {
    "country": "AU",
    "name": "Narellan",
    "lat": "-34.04338",
    "lng": "150.73236"
  },
  {
    "country": "AU",
    "name": "Narara",
    "lat": "-33.39593",
    "lng": "151.33527"
  },
  {
    "country": "AU",
    "name": "Narangba",
    "lat": "-27.20338",
    "lng": "152.95923"
  },
  {
    "country": "AU",
    "name": "Naracoorte",
    "lat": "-36.95785",
    "lng": "140.7383"
  },
  {
    "country": "AU",
    "name": "Nanango",
    "lat": "-26.67157",
    "lng": "152.00211"
  },
  {
    "country": "AU",
    "name": "Nana Glen",
    "lat": "-30.13333",
    "lng": "153.01667"
  },
  {
    "country": "AU",
    "name": "Nambucca Heads",
    "lat": "-30.64318",
    "lng": "153.00884"
  },
  {
    "country": "AU",
    "name": "Nambucca",
    "lat": "-30.63333",
    "lng": "152.98333"
  },
  {
    "country": "AU",
    "name": "Nambour",
    "lat": "-26.62613",
    "lng": "152.95941"
  },
  {
    "country": "AU",
    "name": "Nagambie",
    "lat": "-36.78515",
    "lng": "145.15375"
  },
  {
    "country": "AU",
    "name": "Nabiac",
    "lat": "-32.09837",
    "lng": "152.37627"
  },
  {
    "country": "AU",
    "name": "Myrtleford",
    "lat": "-36.56104",
    "lng": "146.72371"
  },
  {
    "country": "AU",
    "name": "Muswellbrook",
    "lat": "-32.26118",
    "lng": "150.89009"
  },
  {
    "country": "AU",
    "name": "Murwillumbah",
    "lat": "-28.32732",
    "lng": "153.39339"
  },
  {
    "country": "AU",
    "name": "Murrurundi",
    "lat": "-31.76422",
    "lng": "150.83575"
  },
  {
    "country": "AU",
    "name": "Murrumbeena",
    "lat": "-37.9",
    "lng": "145.06667"
  },
  {
    "country": "AU",
    "name": "Murrumbateman",
    "lat": "-34.97199",
    "lng": "149.02985"
  },
  {
    "country": "AU",
    "name": "Murgon",
    "lat": "-26.2417",
    "lng": "151.94047"
  },
  {
    "country": "AU",
    "name": "Mundubbera",
    "lat": "-25.59266",
    "lng": "151.30225"
  },
  {
    "country": "AU",
    "name": "Mulwala",
    "lat": "-35.98536",
    "lng": "146.00534"
  },
  {
    "country": "AU",
    "name": "Mullumbimby",
    "lat": "-28.55236",
    "lng": "153.49956"
  },
  {
    "country": "AU",
    "name": "Mulgrave",
    "lat": "-37.92845",
    "lng": "145.17708"
  },
  {
    "country": "AU",
    "name": "Mulgoa",
    "lat": "-33.838",
    "lng": "150.64963"
  },
  {
    "country": "AU",
    "name": "Mudgeeraba",
    "lat": "-28.08333",
    "lng": "153.36667"
  },
  {
    "country": "AU",
    "name": "Mudgee",
    "lat": "-32.59426",
    "lng": "149.5871"
  },
  {
    "country": "AU",
    "name": "Moura",
    "lat": "-24.5722",
    "lng": "149.96729"
  },
  {
    "country": "AU",
    "name": "Mount Waverley",
    "lat": "-37.87709",
    "lng": "145.12939"
  },
  {
    "country": "AU",
    "name": "Mount Pleasant",
    "lat": "-33.46281",
    "lng": "151.3571"
  },
  {
    "country": "AU",
    "name": "Mount Pleasant",
    "lat": "-37.58333",
    "lng": "143.86667"
  },
  {
    "country": "AU",
    "name": "Mount Morgan",
    "lat": "-23.64532",
    "lng": "150.38902"
  },
  {
    "country": "AU",
    "name": "Mount Martha",
    "lat": "-38.26667",
    "lng": "145.01667"
  },
  {
    "country": "AU",
    "name": "Mount Macedon",
    "lat": "-37.40048",
    "lng": "144.58412"
  },
  {
    "country": "AU",
    "name": "Mount Gravatt",
    "lat": "-27.53333",
    "lng": "153.08333"
  },
  {
    "country": "AU",
    "name": "Mount Gambier",
    "lat": "-37.8318",
    "lng": "140.77919"
  },
  {
    "country": "AU",
    "name": "Mount Evelyn",
    "lat": "-37.78333",
    "lng": "145.38333"
  },
  {
    "country": "AU",
    "name": "Mount Eliza",
    "lat": "-38.18333",
    "lng": "145.08333"
  },
  {
    "country": "AU",
    "name": "Mount Duneed",
    "lat": "-38.24089",
    "lng": "144.33748"
  },
  {
    "country": "AU",
    "name": "Mount Druitt",
    "lat": "-33.76667",
    "lng": "150.81667"
  },
  {
    "country": "AU",
    "name": "Mount Dandenong",
    "lat": "-37.83333",
    "lng": "145.36667"
  },
  {
    "country": "AU",
    "name": "Mount Crosby",
    "lat": "-27.53948",
    "lng": "152.80583"
  },
  {
    "country": "AU",
    "name": "Mount Cotton",
    "lat": "-27.63333",
    "lng": "153.23333"
  },
  {
    "country": "AU",
    "name": "Mount Colah",
    "lat": "-33.68333",
    "lng": "151.11667"
  },
  {
    "country": "AU",
    "name": "Mount Clear",
    "lat": "-37.6",
    "lng": "143.88333"
  },
  {
    "country": "AU",
    "name": "Moss Vale",
    "lat": "-34.55374",
    "lng": "150.37115"
  },
  {
    "country": "AU",
    "name": "Mossman",
    "lat": "-16.46292",
    "lng": "145.37144"
  },
  {
    "country": "AU",
    "name": "Mosman",
    "lat": "-33.83902",
    "lng": "151.23956"
  },
  {
    "country": "AU",
    "name": "Morwell",
    "lat": "-38.23476",
    "lng": "146.39499"
  },
  {
    "country": "AU",
    "name": "Moruya",
    "lat": "-35.9125",
    "lng": "150.08144"
  },
  {
    "country": "AU",
    "name": "Mortlake",
    "lat": "-38.08102",
    "lng": "142.80827"
  },
  {
    "country": "AU",
    "name": "Mortlake",
    "lat": "-33.84217",
    "lng": "151.10719"
  },
  {
    "country": "AU",
    "name": "Mortdale",
    "lat": "-33.96897",
    "lng": "151.07231"
  },
  {
    "country": "AU",
    "name": "Mornington",
    "lat": "-38.21792",
    "lng": "145.03876"
  },
  {
    "country": "AU",
    "name": "Morisset",
    "lat": "-33.10801",
    "lng": "151.48706"
  },
  {
    "country": "AU",
    "name": "Moree",
    "lat": "-29.46278",
    "lng": "149.84157"
  },
  {
    "country": "AU",
    "name": "Mordialloc",
    "lat": "-38",
    "lng": "145.08333"
  },
  {
    "country": "AU",
    "name": "Morayfield",
    "lat": "-27.10876",
    "lng": "152.94907"
  },
  {
    "country": "AU",
    "name": "South Morang",
    "lat": "-37.65",
    "lng": "145.1"
  },
  {
    "country": "AU",
    "name": "Mooroopna",
    "lat": "-36.4",
    "lng": "145.35"
  },
  {
    "country": "AU",
    "name": "Mooroolbark",
    "lat": "-37.78247",
    "lng": "145.31682"
  },
  {
    "country": "AU",
    "name": "Moorooduc",
    "lat": "-38.21667",
    "lng": "145.11667"
  },
  {
    "country": "AU",
    "name": "Moorabbin",
    "lat": "-37.94146",
    "lng": "145.05779"
  },
  {
    "country": "AU",
    "name": "Moonee Ponds",
    "lat": "-37.76667",
    "lng": "144.91667"
  },
  {
    "country": "AU",
    "name": "Moonee Beach",
    "lat": "-30.20575",
    "lng": "153.15293"
  },
  {
    "country": "AU",
    "name": "Moonbi",
    "lat": "-31.01775",
    "lng": "151.07062"
  },
  {
    "country": "AU",
    "name": "Moonah",
    "lat": "-42.84617",
    "lng": "147.30228"
  },
  {
    "country": "AU",
    "name": "Mooloolaba",
    "lat": "-26.68164",
    "lng": "153.11925"
  },
  {
    "country": "AU",
    "name": "Moolap",
    "lat": "-38.18333",
    "lng": "144.43333"
  },
  {
    "country": "AU",
    "name": "Montville",
    "lat": "-26.68333",
    "lng": "152.88333"
  },
  {
    "country": "AU",
    "name": "Montrose",
    "lat": "-37.81667",
    "lng": "145.35"
  },
  {
    "country": "AU",
    "name": "Monto",
    "lat": "-24.86477",
    "lng": "151.12199"
  },
  {
    "country": "AU",
    "name": "Montmorency",
    "lat": "-37.71667",
    "lng": "145.11667"
  },
  {
    "country": "AU",
    "name": "Mont Albert",
    "lat": "-37.81788",
    "lng": "145.10799"
  },
  {
    "country": "AU",
    "name": "Monbulk",
    "lat": "-37.87427",
    "lng": "145.42592"
  },
  {
    "country": "AU",
    "name": "Mona Vale",
    "lat": "-33.67757",
    "lng": "151.30307"
  },
  {
    "country": "AU",
    "name": "Monash",
    "lat": "-34.2384",
    "lng": "140.56131"
  },
  {
    "country": "AU",
    "name": "Molong",
    "lat": "-33.09233",
    "lng": "148.87002"
  },
  {
    "country": "AU",
    "name": "Moggill",
    "lat": "-27.58333",
    "lng": "152.86667"
  },
  {
    "country": "AU",
    "name": "Moe",
    "lat": "-38.17828",
    "lng": "146.26099"
  },
  {
    "country": "AU",
    "name": "Moama",
    "lat": "-36.10413",
    "lng": "144.7608"
  },
  {
    "country": "AU",
    "name": "Mittagong",
    "lat": "-34.45002",
    "lng": "150.44572"
  },
  {
    "country": "AU",
    "name": "Mitchelton",
    "lat": "-27.41667",
    "lng": "152.96667"
  },
  {
    "country": "AU",
    "name": "Mitchell",
    "lat": "-26.4849",
    "lng": "147.9742"
  },
  {
    "country": "AU",
    "name": "Mitcham",
    "lat": "-37.81667",
    "lng": "145.2"
  },
  {
    "country": "AU",
    "name": "Mirboo North",
    "lat": "-38.40101",
    "lng": "146.16135"
  },
  {
    "country": "AU",
    "name": "Mirani",
    "lat": "-21.15729",
    "lng": "148.86217"
  },
  {
    "country": "AU",
    "name": "Miranda",
    "lat": "-34.03857",
    "lng": "151.10005"
  },
  {
    "country": "AU",
    "name": "Minto",
    "lat": "-34.03333",
    "lng": "150.85"
  },
  {
    "country": "AU",
    "name": "Miners Rest",
    "lat": "-37.4808",
    "lng": "143.80107"
  },
  {
    "country": "AU",
    "name": "Minden",
    "lat": "-27.55965",
    "lng": "152.54493"
  },
  {
    "country": "AU",
    "name": "Milton",
    "lat": "-35.31644",
    "lng": "150.4361"
  },
  {
    "country": "AU",
    "name": "Millthorpe",
    "lat": "-33.44601",
    "lng": "149.18539"
  },
  {
    "country": "AU",
    "name": "Mill Park",
    "lat": "-37.66667",
    "lng": "145.06667"
  },
  {
    "country": "AU",
    "name": "Millmerran",
    "lat": "-27.87913",
    "lng": "151.27058"
  },
  {
    "country": "AU",
    "name": "Millicent",
    "lat": "-37.59389",
    "lng": "140.34947"
  },
  {
    "country": "AU",
    "name": "Millgrove",
    "lat": "-37.75527",
    "lng": "145.65347"
  },
  {
    "country": "AU",
    "name": "Miles",
    "lat": "-26.65836",
    "lng": "150.18822"
  },
  {
    "country": "AU",
    "name": "Mildura",
    "lat": "-34.18551",
    "lng": "142.16251"
  },
  {
    "country": "AU",
    "name": "Metung",
    "lat": "-37.89154",
    "lng": "147.853"
  },
  {
    "country": "AU",
    "name": "Merrylands",
    "lat": "-33.83333",
    "lng": "150.98333"
  },
  {
    "country": "AU",
    "name": "Merriwa",
    "lat": "-32.13922",
    "lng": "150.35562"
  },
  {
    "country": "AU",
    "name": "Merimbula",
    "lat": "-36.88901",
    "lng": "149.90961"
  },
  {
    "country": "AU",
    "name": "Mernda",
    "lat": "-37.60075",
    "lng": "145.09555"
  },
  {
    "country": "AU",
    "name": "Merbein",
    "lat": "-34.16802",
    "lng": "142.06599"
  },
  {
    "country": "AU",
    "name": "Mentone",
    "lat": "-37.98333",
    "lng": "145.06667"
  },
  {
    "country": "AU",
    "name": "Menangle",
    "lat": "-34.12675",
    "lng": "150.73868"
  },
  {
    "country": "AU",
    "name": "Menai",
    "lat": "-34.01667",
    "lng": "151.01667"
  },
  {
    "country": "AU",
    "name": "Melton South",
    "lat": "-37.70773",
    "lng": "144.57493"
  },
  {
    "country": "AU",
    "name": "Melton",
    "lat": "-37.68339",
    "lng": "144.58543"
  },
  {
    "country": "AU",
    "name": "Melbourne",
    "lat": "-37.814",
    "lng": "144.96332"
  },
  {
    "country": "AU",
    "name": "Medowie",
    "lat": "-32.7415",
    "lng": "151.8676"
  },
  {
    "country": "AU",
    "name": "McKinnon",
    "lat": "-37.91667",
    "lng": "145.05"
  },
  {
    "country": "AU",
    "name": "Maudsland",
    "lat": "-27.95",
    "lng": "153.26667"
  },
  {
    "country": "AU",
    "name": "Matraville",
    "lat": "-33.96344",
    "lng": "151.23195"
  },
  {
    "country": "AU",
    "name": "Mascot",
    "lat": "-33.92598",
    "lng": "151.19347"
  },
  {
    "country": "AU",
    "name": "Maryborough",
    "lat": "-37.04562",
    "lng": "143.73923"
  },
  {
    "country": "AU",
    "name": "Maryborough",
    "lat": "-25.54073",
    "lng": "152.70493"
  },
  {
    "country": "AU",
    "name": "Marulan",
    "lat": "-34.70836",
    "lng": "150.00966"
  },
  {
    "country": "AU",
    "name": "Marrickville",
    "lat": "-33.90741",
    "lng": "151.15546"
  },
  {
    "country": "AU",
    "name": "Maroubra",
    "lat": "-33.95",
    "lng": "151.23333"
  },
  {
    "country": "AU",
    "name": "Marong",
    "lat": "-36.73333",
    "lng": "144.13333"
  },
  {
    "country": "AU",
    "name": "Maribyrnong",
    "lat": "-37.77241",
    "lng": "144.88435"
  },
  {
    "country": "AU",
    "name": "Marian",
    "lat": "-21.14386",
    "lng": "148.94209"
  },
  {
    "country": "AU",
    "name": "Margate",
    "lat": "-43.02814",
    "lng": "147.26256"
  },
  {
    "country": "AU",
    "name": "Margate",
    "lat": "-27.24761",
    "lng": "153.09809"
  },
  {
    "country": "AU",
    "name": "Mareeba",
    "lat": "-16.99096",
    "lng": "145.42306"
  },
  {
    "country": "AU",
    "name": "Mapleton",
    "lat": "-26.62431",
    "lng": "152.86784"
  },
  {
    "country": "AU",
    "name": "Mansfield",
    "lat": "-37.052",
    "lng": "146.08846"
  },
  {
    "country": "AU",
    "name": "Manly",
    "lat": "-33.79798",
    "lng": "151.28826"
  },
  {
    "country": "AU",
    "name": "Manilla",
    "lat": "-30.74748",
    "lng": "150.71974"
  },
  {
    "country": "AU",
    "name": "Malvern",
    "lat": "-37.86259",
    "lng": "145.02811"
  },
  {
    "country": "AU",
    "name": "Mallacoota",
    "lat": "-37.55896",
    "lng": "149.75407"
  },
  {
    "country": "AU",
    "name": "Maleny",
    "lat": "-26.76001",
    "lng": "152.84926"
  },
  {
    "country": "AU",
    "name": "Maldon",
    "lat": "-36.9957",
    "lng": "144.06834"
  },
  {
    "country": "AU",
    "name": "Malanda",
    "lat": "-17.35228",
    "lng": "145.59528"
  },
  {
    "country": "AU",
    "name": "Malabar",
    "lat": "-33.96216",
    "lng": "151.24796"
  },
  {
    "country": "AU",
    "name": "Maitland",
    "lat": "-32.73308",
    "lng": "151.5574"
  },
  {
    "country": "AU",
    "name": "Maffra",
    "lat": "-37.97132",
    "lng": "146.98366"
  },
  {
    "country": "AU",
    "name": "Maddingley",
    "lat": "-37.68518",
    "lng": "144.43245"
  },
  {
    "country": "AU",
    "name": "Macleod",
    "lat": "-37.73333",
    "lng": "145.06667"
  },
  {
    "country": "AU",
    "name": "Maclean",
    "lat": "-29.4581",
    "lng": "153.19753"
  },
  {
    "country": "AU",
    "name": "Macksville",
    "lat": "-30.7078",
    "lng": "152.92029"
  },
  {
    "country": "AU",
    "name": "Mackay",
    "lat": "-21.15345",
    "lng": "149.16554"
  },
  {
    "country": "AU",
    "name": "Macedon",
    "lat": "-37.41963",
    "lng": "144.56242"
  },
  {
    "country": "AU",
    "name": "Lysterfield",
    "lat": "-37.93333",
    "lng": "145.3"
  },
  {
    "country": "AU",
    "name": "Luddenham",
    "lat": "-33.8785",
    "lng": "150.68863"
  },
  {
    "country": "AU",
    "name": "Lucknow",
    "lat": "-37.81667",
    "lng": "147.65"
  },
  {
    "country": "AU",
    "name": "Loxton",
    "lat": "-34.4502",
    "lng": "140.56908"
  },
  {
    "country": "AU",
    "name": "Lowood",
    "lat": "-27.46555",
    "lng": "152.57625"
  },
  {
    "country": "AU",
    "name": "Lower Plenty",
    "lat": "-37.73333",
    "lng": "145.11667"
  },
  {
    "country": "AU",
    "name": "Lovely Banks",
    "lat": "-38.06667",
    "lng": "144.33333"
  },
  {
    "country": "AU",
    "name": "Lorne",
    "lat": "-38.54043",
    "lng": "143.97636"
  },
  {
    "country": "AU",
    "name": "Lorn",
    "lat": "-32.72701",
    "lng": "151.57245"
  },
  {
    "country": "AU",
    "name": "Longwarry",
    "lat": "-38.11279",
    "lng": "145.76849"
  },
  {
    "country": "AU",
    "name": "Longreach",
    "lat": "-23.44212",
    "lng": "144.24921"
  },
  {
    "country": "AU",
    "name": "Long Jetty",
    "lat": "-33.35917",
    "lng": "151.48834"
  },
  {
    "country": "AU",
    "name": "Longford",
    "lat": "-41.60512",
    "lng": "147.11887"
  },
  {
    "country": "AU",
    "name": "Longford",
    "lat": "-38.16237",
    "lng": "147.08591"
  },
  {
    "country": "AU",
    "name": "Logan Village",
    "lat": "-27.76832",
    "lng": "153.10762"
  },
  {
    "country": "AU",
    "name": "Loganlea",
    "lat": "-27.67535",
    "lng": "153.13472"
  },
  {
    "country": "AU",
    "name": "Loganholme",
    "lat": "-27.68444",
    "lng": "153.1864"
  },
  {
    "country": "AU",
    "name": "Lockhart",
    "lat": "-35.22333",
    "lng": "146.71816"
  },
  {
    "country": "AU",
    "name": "Liverpool",
    "lat": "-33.91938",
    "lng": "150.92588"
  },
  {
    "country": "AU",
    "name": "Little River",
    "lat": "-37.96667",
    "lng": "144.5"
  },
  {
    "country": "AU",
    "name": "Lithgow",
    "lat": "-33.4845",
    "lng": "150.14903"
  },
  {
    "country": "AU",
    "name": "Lismore",
    "lat": "-28.81354",
    "lng": "153.2773"
  },
  {
    "country": "AU",
    "name": "Lisarow",
    "lat": "-33.38333",
    "lng": "151.36667"
  },
  {
    "country": "AU",
    "name": "Lindisfarne",
    "lat": "-42.84837",
    "lng": "147.36192"
  },
  {
    "country": "AU",
    "name": "Lindfield",
    "lat": "-33.78333",
    "lng": "151.16667"
  },
  {
    "country": "AU",
    "name": "Lilydale",
    "lat": "-37.75",
    "lng": "145.35"
  },
  {
    "country": "AU",
    "name": "Lightning Ridge",
    "lat": "-29.42743",
    "lng": "147.97865"
  },
  {
    "country": "AU",
    "name": "Lidcombe",
    "lat": "-33.86436",
    "lng": "151.0397"
  },
  {
    "country": "AU",
    "name": "Leura",
    "lat": "-33.71667",
    "lng": "150.33333"
  },
  {
    "country": "AU",
    "name": "Leumeah",
    "lat": "-34.05",
    "lng": "150.83333"
  },
  {
    "country": "AU",
    "name": "Leopold",
    "lat": "-38.19001",
    "lng": "144.46825"
  },
  {
    "country": "AU",
    "name": "Leongatha",
    "lat": "-38.47607",
    "lng": "145.94685"
  },
  {
    "country": "AU",
    "name": "Leichhardt",
    "lat": "-33.88341",
    "lng": "151.15625"
  },
  {
    "country": "AU",
    "name": "Legana",
    "lat": "-41.36572",
    "lng": "147.04584"
  },
  {
    "country": "AU",
    "name": "Leeton",
    "lat": "-34.55105",
    "lng": "146.40483"
  },
  {
    "country": "AU",
    "name": "Lawson",
    "lat": "-33.72064",
    "lng": "150.42975"
  },
  {
    "country": "AU",
    "name": "Lawrence",
    "lat": "-29.4921",
    "lng": "153.09689"
  },
  {
    "country": "AU",
    "name": "Lawnton",
    "lat": "-27.28333",
    "lng": "152.98333"
  },
  {
    "country": "AU",
    "name": "Lavington",
    "lat": "-36.03976",
    "lng": "146.93958"
  },
  {
    "country": "AU",
    "name": "Camden Haven",
    "lat": "-31.64484",
    "lng": "152.79462"
  },
  {
    "country": "AU",
    "name": "Launceston",
    "lat": "-41.43876",
    "lng": "147.13467"
  },
  {
    "country": "AU",
    "name": "Lauderdale",
    "lat": "-42.91364",
    "lng": "147.48747"
  },
  {
    "country": "AU",
    "name": "Latrobe",
    "lat": "-41.24641",
    "lng": "146.42458"
  },
  {
    "country": "AU",
    "name": "Largs",
    "lat": "-32.7",
    "lng": "151.6"
  },
  {
    "country": "AU",
    "name": "Lara",
    "lat": "-38.02388",
    "lng": "144.40617"
  },
  {
    "country": "AU",
    "name": "Langwarrin",
    "lat": "-38.16667",
    "lng": "145.16667"
  },
  {
    "country": "AU",
    "name": "Lang Lang",
    "lat": "-38.26605",
    "lng": "145.5621"
  },
  {
    "country": "AU",
    "name": "Lane Cove",
    "lat": "-33.8157",
    "lng": "151.16679"
  },
  {
    "country": "AU",
    "name": "Landsborough",
    "lat": "-26.80666",
    "lng": "152.96095"
  },
  {
    "country": "AU",
    "name": "Lalor",
    "lat": "-37.66667",
    "lng": "145.01667"
  },
  {
    "country": "AU",
    "name": "Lake Haven",
    "lat": "-33.24303",
    "lng": "151.50434"
  },
  {
    "country": "AU",
    "name": "Lakes Entrance",
    "lat": "-37.86679",
    "lng": "148.00159"
  },
  {
    "country": "AU",
    "name": "Lakemba",
    "lat": "-33.91972",
    "lng": "151.07592"
  },
  {
    "country": "AU",
    "name": "Lake Illawarra",
    "lat": "-34.54658",
    "lng": "150.85645"
  },
  {
    "country": "AU",
    "name": "Lake Cargelligo",
    "lat": "-33.29884",
    "lng": "146.37296"
  },
  {
    "country": "AU",
    "name": "Lake Albert",
    "lat": "-35.16667",
    "lng": "147.38333"
  },
  {
    "country": "AU",
    "name": "Laidley",
    "lat": "-27.63278",
    "lng": "152.39285"
  },
  {
    "country": "AU",
    "name": "Kyogle",
    "lat": "-28.62278",
    "lng": "152.99736"
  },
  {
    "country": "AU",
    "name": "Kyneton",
    "lat": "-37.24444",
    "lng": "144.45148"
  },
  {
    "country": "AU",
    "name": "Kyabram",
    "lat": "-36.31335",
    "lng": "145.05035"
  },
  {
    "country": "AU",
    "name": "Kurri Kurri",
    "lat": "-32.81933",
    "lng": "151.47908"
  },
  {
    "country": "AU",
    "name": "Kurrajong Heights",
    "lat": "-33.52772",
    "lng": "150.62907"
  },
  {
    "country": "AU",
    "name": "Kurnell",
    "lat": "-34.01088",
    "lng": "151.20512"
  },
  {
    "country": "AU",
    "name": "Kuranda",
    "lat": "-16.81978",
    "lng": "145.63818"
  },
  {
    "country": "AU",
    "name": "Kotara",
    "lat": "-32.94282",
    "lng": "151.69585"
  },
  {
    "country": "AU",
    "name": "Korumburra",
    "lat": "-38.43194",
    "lng": "145.82355"
  },
  {
    "country": "AU",
    "name": "Koroit",
    "lat": "-38.2918",
    "lng": "142.36729"
  },
  {
    "country": "AU",
    "name": "Koo-Wee-Rup",
    "lat": "-38.19941",
    "lng": "145.49081"
  },
  {
    "country": "AU",
    "name": "Kootingal",
    "lat": "-31.05857",
    "lng": "151.0535"
  },
  {
    "country": "AU",
    "name": "Kogarah",
    "lat": "-33.9681",
    "lng": "151.13564"
  },
  {
    "country": "AU",
    "name": "Kleinton",
    "lat": "-27.43333",
    "lng": "151.95"
  },
  {
    "country": "AU",
    "name": "Kirribilli",
    "lat": "-33.84867",
    "lng": "151.2162"
  },
  {
    "country": "AU",
    "name": "Kingston Beach",
    "lat": "-42.98021",
    "lng": "147.31941"
  },
  {
    "country": "AU",
    "name": "Kingston",
    "lat": "-42.97638",
    "lng": "147.30351"
  },
  {
    "country": "AU",
    "name": "Kingston",
    "lat": "-34.23333",
    "lng": "140.35"
  },
  {
    "country": "AU",
    "name": "Kingston",
    "lat": "-27.66667",
    "lng": "153.11667"
  },
  {
    "country": "AU",
    "name": "Kingsthorpe",
    "lat": "-27.47558",
    "lng": "151.81409"
  },
  {
    "country": "AU",
    "name": "Kingscliff",
    "lat": "-28.25983",
    "lng": "153.57816"
  },
  {
    "country": "AU",
    "name": "Kinglake West",
    "lat": "-37.46667",
    "lng": "145.23333"
  },
  {
    "country": "AU",
    "name": "Kinglake",
    "lat": "-37.53291",
    "lng": "145.33964"
  },
  {
    "country": "AU",
    "name": "Kingaroy",
    "lat": "-26.53994",
    "lng": "151.8373"
  },
  {
    "country": "AU",
    "name": "Kilsyth",
    "lat": "-37.8",
    "lng": "145.31667"
  },
  {
    "country": "AU",
    "name": "Kilmore",
    "lat": "-37.29577",
    "lng": "144.95252"
  },
  {
    "country": "AU",
    "name": "Kilcoy",
    "lat": "-26.943",
    "lng": "152.56545"
  },
  {
    "country": "AU",
    "name": "Kiama",
    "lat": "-34.66828",
    "lng": "150.85219"
  },
  {
    "country": "AU",
    "name": "Keysborough",
    "lat": "-37.99116",
    "lng": "145.17385"
  },
  {
    "country": "AU",
    "name": "Kew",
    "lat": "-37.80639",
    "lng": "145.03086"
  },
  {
    "country": "AU",
    "name": "Kew",
    "lat": "-31.63602",
    "lng": "152.72662"
  },
  {
    "country": "AU",
    "name": "Kerang",
    "lat": "-35.73489",
    "lng": "143.92027"
  },
  {
    "country": "AU",
    "name": "Kenthurst",
    "lat": "-33.65527",
    "lng": "151.00503"
  },
  {
    "country": "AU",
    "name": "Kensington",
    "lat": "-33.92019",
    "lng": "151.22241"
  },
  {
    "country": "AU",
    "name": "Kensington",
    "lat": "-37.79188",
    "lng": "144.93114"
  },
  {
    "country": "AU",
    "name": "Kennington",
    "lat": "-36.77128",
    "lng": "144.30298"
  },
  {
    "country": "AU",
    "name": "Kendall",
    "lat": "-31.63295",
    "lng": "152.70393"
  },
  {
    "country": "AU",
    "name": "Kempsey",
    "lat": "-31.07898",
    "lng": "152.83093"
  },
  {
    "country": "AU",
    "name": "Kelso",
    "lat": "-33.41667",
    "lng": "149.6"
  },
  {
    "country": "AU",
    "name": "Keith",
    "lat": "-36.0991",
    "lng": "140.35315"
  },
  {
    "country": "AU",
    "name": "Keiraville",
    "lat": "-34.41667",
    "lng": "150.86667"
  },
  {
    "country": "AU",
    "name": "Keilor",
    "lat": "-37.71667",
    "lng": "144.83333"
  },
  {
    "country": "AU",
    "name": "Kawungan",
    "lat": "-25.29879",
    "lng": "152.846"
  },
  {
    "country": "AU",
    "name": "Katoomba",
    "lat": "-33.71977",
    "lng": "150.30739"
  },
  {
    "country": "AU",
    "name": "Karumba",
    "lat": "-17.48691",
    "lng": "140.84262"
  },
  {
    "country": "AU",
    "name": "Karuah",
    "lat": "-32.65389",
    "lng": "151.9604"
  },
  {
    "country": "AU",
    "name": "Kanwal",
    "lat": "-33.253",
    "lng": "151.4911"
  },
  {
    "country": "AU",
    "name": "Kangaroo Flat",
    "lat": "-36.8",
    "lng": "144.25"
  },
  {
    "country": "AU",
    "name": "Kandos",
    "lat": "-32.85772",
    "lng": "149.96832"
  },
  {
    "country": "AU",
    "name": "Kalorama",
    "lat": "-37.81667",
    "lng": "145.36667"
  },
  {
    "country": "AU",
    "name": "Kallista",
    "lat": "-37.89815",
    "lng": "145.38226"
  },
  {
    "country": "AU",
    "name": "Kalimna",
    "lat": "-37.87011",
    "lng": "147.96664"
  },
  {
    "country": "AU",
    "name": "Kalbar",
    "lat": "-27.94169",
    "lng": "152.62372"
  },
  {
    "country": "AU",
    "name": "Kahibah",
    "lat": "-32.96175",
    "lng": "151.71251"
  },
  {
    "country": "AU",
    "name": "Junee",
    "lat": "-34.86819",
    "lng": "147.58273"
  },
  {
    "country": "AU",
    "name": "Julatten",
    "lat": "-16.6072",
    "lng": "145.34118"
  },
  {
    "country": "AU",
    "name": "Jindera",
    "lat": "-35.95474",
    "lng": "146.88852"
  },
  {
    "country": "AU",
    "name": "Jindabyne",
    "lat": "-36.41745",
    "lng": "148.62254"
  },
  {
    "country": "AU",
    "name": "Jimboomba",
    "lat": "-27.83118",
    "lng": "153.02737"
  },
  {
    "country": "AU",
    "name": "Jilliby",
    "lat": "-33.22605",
    "lng": "151.41684"
  },
  {
    "country": "AU",
    "name": "Jerilderie",
    "lat": "-35.35757",
    "lng": "145.72962"
  },
  {
    "country": "AU",
    "name": "Jannali",
    "lat": "-34.01643",
    "lng": "151.06065"
  },
  {
    "country": "AU",
    "name": "Jandowae",
    "lat": "-26.78411",
    "lng": "151.1124"
  },
  {
    "country": "AU",
    "name": "Jamberoo",
    "lat": "-34.64745",
    "lng": "150.77464"
  },
  {
    "country": "AU",
    "name": "Ivanhoe East",
    "lat": "-37.7734",
    "lng": "145.06195"
  },
  {
    "country": "AU",
    "name": "Irymple",
    "lat": "-34.23537",
    "lng": "142.17101"
  },
  {
    "country": "AU",
    "name": "Ipswich",
    "lat": "-27.62343",
    "lng": "152.76067"
  },
  {
    "country": "AU",
    "name": "Inverloch",
    "lat": "-38.62659",
    "lng": "145.7226"
  },
  {
    "country": "AU",
    "name": "Inverleigh",
    "lat": "-38.10177",
    "lng": "144.05132"
  },
  {
    "country": "AU",
    "name": "Inverell",
    "lat": "-29.77403",
    "lng": "151.11166"
  },
  {
    "country": "AU",
    "name": "Innisfail",
    "lat": "-17.52209",
    "lng": "146.03102"
  },
  {
    "country": "AU",
    "name": "Ingleburn",
    "lat": "-34",
    "lng": "150.86667"
  },
  {
    "country": "AU",
    "name": "Ingham",
    "lat": "-18.64552",
    "lng": "146.16248"
  },
  {
    "country": "AU",
    "name": "Iluka",
    "lat": "-29.40147",
    "lng": "153.35112"
  },
  {
    "country": "AU",
    "name": "Hurstville Grove",
    "lat": "-33.97993",
    "lng": "151.09029"
  },
  {
    "country": "AU",
    "name": "Hurstbridge",
    "lat": "-37.64157",
    "lng": "145.19408"
  },
  {
    "country": "AU",
    "name": "Huonville",
    "lat": "-43.03124",
    "lng": "147.04813"
  },
  {
    "country": "AU",
    "name": "Huntly",
    "lat": "-36.66451",
    "lng": "144.33382"
  },
  {
    "country": "AU",
    "name": "Hughesdale",
    "lat": "-37.9",
    "lng": "145.08333"
  },
  {
    "country": "AU",
    "name": "Hughenden",
    "lat": "-20.84399",
    "lng": "144.20035"
  },
  {
    "country": "AU",
    "name": "Howlong",
    "lat": "-35.98197",
    "lng": "146.63248"
  },
  {
    "country": "AU",
    "name": "Howard",
    "lat": "-25.31934",
    "lng": "152.55986"
  },
  {
    "country": "AU",
    "name": "Horsham",
    "lat": "-36.71131",
    "lng": "142.19981"
  },
  {
    "country": "AU",
    "name": "Hornsby",
    "lat": "-33.70244",
    "lng": "151.09931"
  },
  {
    "country": "AU",
    "name": "Home Hill",
    "lat": "-19.65921",
    "lng": "147.41232"
  },
  {
    "country": "AU",
    "name": "Homebush",
    "lat": "-33.86667",
    "lng": "151.08333"
  },
  {
    "country": "AU",
    "name": "Holsworthy",
    "lat": "-33.98333",
    "lng": "150.96667"
  },
  {
    "country": "AU",
    "name": "Holmesville",
    "lat": "-32.91667",
    "lng": "151.58333"
  },
  {
    "country": "AU",
    "name": "Holbrook",
    "lat": "-35.721",
    "lng": "147.31605"
  },
  {
    "country": "AU",
    "name": "Hobart",
    "lat": "-42.87936",
    "lng": "147.32941"
  },
  {
    "country": "AU",
    "name": "Hill Top",
    "lat": "-34.34792",
    "lng": "150.4955"
  },
  {
    "country": "AU",
    "name": "Hillston",
    "lat": "-33.48266",
    "lng": "145.53525"
  },
  {
    "country": "AU",
    "name": "Highett",
    "lat": "-37.95",
    "lng": "145.05"
  },
  {
    "country": "AU",
    "name": "Heywood",
    "lat": "-38.13294",
    "lng": "141.62949"
  },
  {
    "country": "AU",
    "name": "Henty",
    "lat": "-35.52094",
    "lng": "147.03426"
  },
  {
    "country": "AU",
    "name": "Helidon",
    "lat": "-27.55316",
    "lng": "152.12398"
  },
  {
    "country": "AU",
    "name": "Helensburgh",
    "lat": "-34.17836",
    "lng": "150.99522"
  },
  {
    "country": "AU",
    "name": "Heidelberg West",
    "lat": "-37.73922",
    "lng": "145.04034"
  },
  {
    "country": "AU",
    "name": "Heidelberg",
    "lat": "-37.75",
    "lng": "145.06667"
  },
  {
    "country": "AU",
    "name": "Heddon Greta",
    "lat": "-32.80204",
    "lng": "151.51327"
  },
  {
    "country": "AU",
    "name": "Heathmont",
    "lat": "-37.83333",
    "lng": "145.25"
  },
  {
    "country": "AU",
    "name": "Heatherton",
    "lat": "-37.96667",
    "lng": "145.1"
  },
  {
    "country": "AU",
    "name": "Heathcote",
    "lat": "-36.92214",
    "lng": "144.70837"
  },
  {
    "country": "AU",
    "name": "Heathcote",
    "lat": "-34.0841",
    "lng": "151.01305"
  },
  {
    "country": "AU",
    "name": "Healesville",
    "lat": "-37.65395",
    "lng": "145.51718"
  },
  {
    "country": "AU",
    "name": "Hazelbrook",
    "lat": "-33.72446",
    "lng": "150.45839"
  },
  {
    "country": "AU",
    "name": "Hay Point",
    "lat": "-21.29646",
    "lng": "149.27368"
  },
  {
    "country": "AU",
    "name": "Haymarket",
    "lat": "-33.87868",
    "lng": "151.20526"
  },
  {
    "country": "AU",
    "name": "Hay",
    "lat": "-34.50903",
    "lng": "144.84306"
  },
  {
    "country": "AU",
    "name": "Hawthorn South",
    "lat": "-37.8329",
    "lng": "145.0367"
  },
  {
    "country": "AU",
    "name": "Hawthorn",
    "lat": "-37.81992",
    "lng": "145.0358"
  },
  {
    "country": "AU",
    "name": "Hawks Nest",
    "lat": "-32.66755",
    "lng": "152.17831"
  },
  {
    "country": "AU",
    "name": "Hatton Vale",
    "lat": "-27.56667",
    "lng": "152.46667"
  },
  {
    "country": "AU",
    "name": "Hastings",
    "lat": "-38.3",
    "lng": "145.18333"
  },
  {
    "country": "AU",
    "name": "Harristown",
    "lat": "-27.58333",
    "lng": "151.93333"
  },
  {
    "country": "AU",
    "name": "Harrington",
    "lat": "-31.88306",
    "lng": "152.65924"
  },
  {
    "country": "AU",
    "name": "Harlaxton",
    "lat": "-27.53333",
    "lng": "151.96667"
  },
  {
    "country": "AU",
    "name": "Hanwood",
    "lat": "-34.33095",
    "lng": "146.04137"
  },
  {
    "country": "AU",
    "name": "Hampton Park",
    "lat": "-38.03333",
    "lng": "145.25"
  },
  {
    "country": "AU",
    "name": "Hampton",
    "lat": "-37.95",
    "lng": "145"
  },
  {
    "country": "AU",
    "name": "Hamilton",
    "lat": "-37.74425",
    "lng": "142.02202"
  },
  {
    "country": "AU",
    "name": "Hallam",
    "lat": "-38.01667",
    "lng": "145.26667"
  },
  {
    "country": "AU",
    "name": "Hadspen",
    "lat": "-41.50059",
    "lng": "147.07359"
  },
  {
    "country": "AU",
    "name": "Haddon",
    "lat": "-37.6",
    "lng": "143.71667"
  },
  {
    "country": "AU",
    "name": "Haberfield",
    "lat": "-33.88296",
    "lng": "151.14389"
  },
  {
    "country": "AU",
    "name": "Gympie",
    "lat": "-26.18979",
    "lng": "152.66499"
  },
  {
    "country": "AU",
    "name": "Guyra",
    "lat": "-30.2168",
    "lng": "151.66785"
  },
  {
    "country": "AU",
    "name": "Gunnedah",
    "lat": "-30.98065",
    "lng": "150.25838"
  },
  {
    "country": "AU",
    "name": "Gundaroo",
    "lat": "-35.03333",
    "lng": "149.25"
  },
  {
    "country": "AU",
    "name": "Gundagai",
    "lat": "-35.06352",
    "lng": "148.10365"
  },
  {
    "country": "AU",
    "name": "Gulgong",
    "lat": "-32.36253",
    "lng": "149.53201"
  },
  {
    "country": "AU",
    "name": "Grovedale",
    "lat": "-38.2",
    "lng": "144.35"
  },
  {
    "country": "AU",
    "name": "Griffith",
    "lat": "-34.28853",
    "lng": "146.05093"
  },
  {
    "country": "AU",
    "name": "Greta",
    "lat": "-32.67783",
    "lng": "151.38924"
  },
  {
    "country": "AU",
    "name": "Grenfell",
    "lat": "-33.89549",
    "lng": "148.16438"
  },
  {
    "country": "AU",
    "name": "Greenwell Point",
    "lat": "-34.90751",
    "lng": "150.73113"
  },
  {
    "country": "AU",
    "name": "Greenvale",
    "lat": "-37.63333",
    "lng": "144.86667"
  },
  {
    "country": "AU",
    "name": "Greensborough",
    "lat": "-37.70462",
    "lng": "145.10302"
  },
  {
    "country": "AU",
    "name": "Green Point",
    "lat": "-33.444",
    "lng": "151.3682"
  },
  {
    "country": "AU",
    "name": "Greenbank",
    "lat": "-27.71667",
    "lng": "152.98333"
  },
  {
    "country": "AU",
    "name": "Granville",
    "lat": "-33.8406",
    "lng": "151.00748"
  },
  {
    "country": "AU",
    "name": "Granton",
    "lat": "-42.75149",
    "lng": "147.22795"
  },
  {
    "country": "AU",
    "name": "Grafton",
    "lat": "-29.68104",
    "lng": "152.93394"
  },
  {
    "country": "AU",
    "name": "Gracemere",
    "lat": "-23.43792",
    "lng": "150.45749"
  },
  {
    "country": "AU",
    "name": "Gowrie Junction",
    "lat": "-27.48333",
    "lng": "151.88333"
  },
  {
    "country": "AU",
    "name": "Goulburn",
    "lat": "-34.75155",
    "lng": "149.72086"
  },
  {
    "country": "AU",
    "name": "Gosford",
    "lat": "-33.4244",
    "lng": "151.34399"
  },
  {
    "country": "AU",
    "name": "Gorokan",
    "lat": "-33.25764",
    "lng": "151.5097"
  },
  {
    "country": "AU",
    "name": "Gordonvale",
    "lat": "-17.09959",
    "lng": "145.78038"
  },
  {
    "country": "AU",
    "name": "Gordon",
    "lat": "-37.5823",
    "lng": "144.10925"
  },
  {
    "country": "AU",
    "name": "Gordon",
    "lat": "-33.75535",
    "lng": "151.15115"
  },
  {
    "country": "AU",
    "name": "Goonellabah",
    "lat": "-28.81667",
    "lng": "153.31667"
  },
  {
    "country": "AU",
    "name": "Goondiwindi",
    "lat": "-28.54709",
    "lng": "150.30546"
  },
  {
    "country": "AU",
    "name": "Goodna",
    "lat": "-27.61046",
    "lng": "152.89896"
  },
  {
    "country": "AU",
    "name": "Gooburrum",
    "lat": "-24.82312",
    "lng": "152.33154"
  },
  {
    "country": "AU",
    "name": "Gol Gol",
    "lat": "-34.17388",
    "lng": "142.22187"
  },
  {
    "country": "AU",
    "name": "Gold Coast",
    "lat": "-28.00029",
    "lng": "153.43088"
  },
  {
    "country": "AU",
    "name": "Gloucester",
    "lat": "-32.0077",
    "lng": "151.9633"
  },
  {
    "country": "AU",
    "name": "Glen Waverley",
    "lat": "-37.87811",
    "lng": "145.16476"
  },
  {
    "country": "AU",
    "name": "Glenview",
    "lat": "-26.76667",
    "lng": "153.01667"
  },
  {
    "country": "AU",
    "name": "Glenroy",
    "lat": "-37.7",
    "lng": "144.93333"
  },
  {
    "country": "AU",
    "name": "Glenorie",
    "lat": "-33.60177",
    "lng": "151.00886"
  },
  {
    "country": "AU",
    "name": "Glenorchy",
    "lat": "-42.83343",
    "lng": "147.27593"
  },
  {
    "country": "AU",
    "name": "Glen Iris",
    "lat": "-37.86667",
    "lng": "145.06667"
  },
  {
    "country": "AU",
    "name": "Glen Innes",
    "lat": "-29.73485",
    "lng": "151.7385"
  },
  {
    "country": "AU",
    "name": "Glen Huntly",
    "lat": "-37.89237",
    "lng": "145.04135"
  },
  {
    "country": "AU",
    "name": "Glenhaven",
    "lat": "-33.7",
    "lng": "151"
  },
  {
    "country": "AU",
    "name": "Glengarry",
    "lat": "-38.11667",
    "lng": "146.56667"
  },
  {
    "country": "AU",
    "name": "Glenfield",
    "lat": "-33.96667",
    "lng": "150.9"
  },
  {
    "country": "AU",
    "name": "Glenferrie",
    "lat": "-37.83333",
    "lng": "145.05"
  },
  {
    "country": "AU",
    "name": "Glenella",
    "lat": "-21.11768",
    "lng": "149.14453"
  },
  {
    "country": "AU",
    "name": "Gleneagle",
    "lat": "-27.93333",
    "lng": "152.98333"
  },
  {
    "country": "AU",
    "name": "Glenbrook",
    "lat": "-33.76667",
    "lng": "150.61667"
  },
  {
    "country": "AU",
    "name": "Glebe",
    "lat": "-33.87884",
    "lng": "151.18426"
  },
  {
    "country": "AU",
    "name": "Glass House Mountains",
    "lat": "-26.89758",
    "lng": "152.95319"
  },
  {
    "country": "AU",
    "name": "Gladstone",
    "lat": "-23.84852",
    "lng": "151.25775"
  },
  {
    "country": "AU",
    "name": "Gisborne",
    "lat": "-37.48858",
    "lng": "144.59421"
  },
  {
    "country": "AU",
    "name": "Gin Gin",
    "lat": "-24.99363",
    "lng": "151.95808"
  },
  {
    "country": "AU",
    "name": "Gilston",
    "lat": "-28.03333",
    "lng": "153.3"
  },
  {
    "country": "AU",
    "name": "Gilgandra",
    "lat": "-31.71173",
    "lng": "148.66252"
  },
  {
    "country": "AU",
    "name": "Gerringong",
    "lat": "-34.74702",
    "lng": "150.82809"
  },
  {
    "country": "AU",
    "name": "George Town",
    "lat": "-41.10559",
    "lng": "146.82606"
  },
  {
    "country": "AU",
    "name": "Gembrook",
    "lat": "-37.95321",
    "lng": "145.55536"
  },
  {
    "country": "AU",
    "name": "Geeveston",
    "lat": "-43.16337",
    "lng": "146.92549"
  },
  {
    "country": "AU",
    "name": "Geelong West",
    "lat": "-38.13888",
    "lng": "144.34842"
  },
  {
    "country": "AU",
    "name": "Geelong",
    "lat": "-38.14711",
    "lng": "144.36069"
  },
  {
    "country": "AU",
    "name": "Gaythorne",
    "lat": "-27.41667",
    "lng": "152.98333"
  },
  {
    "country": "AU",
    "name": "Gayndah",
    "lat": "-25.62522",
    "lng": "151.61144"
  },
  {
    "country": "AU",
    "name": "Gatton",
    "lat": "-27.55873",
    "lng": "152.27618"
  },
  {
    "country": "AU",
    "name": "Garfield",
    "lat": "-38.08985",
    "lng": "145.67502"
  },
  {
    "country": "AU",
    "name": "Galston",
    "lat": "-33.65297",
    "lng": "151.04713"
  },
  {
    "country": "AU",
    "name": "Freshwater",
    "lat": "-16.88333",
    "lng": "145.71667"
  },
  {
    "country": "AU",
    "name": "Frederickton",
    "lat": "-31.03749",
    "lng": "152.8753"
  },
  {
    "country": "AU",
    "name": "Frankston East",
    "lat": "-38.13333",
    "lng": "145.13333"
  },
  {
    "country": "AU",
    "name": "Frankston",
    "lat": "-38.14458",
    "lng": "145.12291"
  },
  {
    "country": "AU",
    "name": "Franklin",
    "lat": "-43.08884",
    "lng": "147.00906"
  },
  {
    "country": "AU",
    "name": "Foster",
    "lat": "-38.65275",
    "lng": "146.20073"
  },
  {
    "country": "AU",
    "name": "Forster",
    "lat": "-32.18136",
    "lng": "152.51715"
  },
  {
    "country": "AU",
    "name": "Forest Hill",
    "lat": "-35.1481",
    "lng": "147.46707"
  },
  {
    "country": "AU",
    "name": "Forest Hill",
    "lat": "-37.83333",
    "lng": "145.18333"
  },
  {
    "country": "AU",
    "name": "Forbes",
    "lat": "-33.38436",
    "lng": "148.0076"
  },
  {
    "country": "AU",
    "name": "Footscray",
    "lat": "-37.8",
    "lng": "144.9"
  },
  {
    "country": "AU",
    "name": "Fitzroy",
    "lat": "-37.79839",
    "lng": "144.97833"
  },
  {
    "country": "AU",
    "name": "Finley",
    "lat": "-35.65498",
    "lng": "145.57106"
  },
  {
    "country": "AU",
    "name": "Ferny Creek",
    "lat": "-37.88333",
    "lng": "145.33333"
  },
  {
    "country": "AU",
    "name": "Fernvale",
    "lat": "-27.45475",
    "lng": "152.65321"
  },
  {
    "country": "AU",
    "name": "Fawkner",
    "lat": "-37.71667",
    "lng": "144.96667"
  },
  {
    "country": "AU",
    "name": "Faulconbridge",
    "lat": "-33.7",
    "lng": "150.53333"
  },
  {
    "country": "AU",
    "name": "Fairfield",
    "lat": "-33.86667",
    "lng": "150.95"
  },
  {
    "country": "AU",
    "name": "Evans Head",
    "lat": "-29.11777",
    "lng": "153.43072"
  },
  {
    "country": "AU",
    "name": "Evandale",
    "lat": "-41.56858",
    "lng": "147.25271"
  },
  {
    "country": "AU",
    "name": "Euroa",
    "lat": "-36.75555",
    "lng": "145.57075"
  },
  {
    "country": "AU",
    "name": "Eumundi",
    "lat": "-26.47737",
    "lng": "152.95115"
  },
  {
    "country": "AU",
    "name": "Eulomogo",
    "lat": "-32.26667",
    "lng": "148.68333"
  },
  {
    "country": "AU",
    "name": "Eudlo",
    "lat": "-26.72963",
    "lng": "152.95395"
  },
  {
    "country": "AU",
    "name": "Ettalong Beach",
    "lat": "-33.51058",
    "lng": "151.33044"
  },
  {
    "country": "AU",
    "name": "Ettalong",
    "lat": "-33.51301",
    "lng": "151.3383"
  },
  {
    "country": "AU",
    "name": "Essendon",
    "lat": "-37.74981",
    "lng": "144.9109"
  },
  {
    "country": "AU",
    "name": "Esk",
    "lat": "-27.23895",
    "lng": "152.42223"
  },
  {
    "country": "AU",
    "name": "Erina",
    "lat": "-33.43218",
    "lng": "151.38972"
  },
  {
    "country": "AU",
    "name": "Epsom",
    "lat": "-36.71667",
    "lng": "144.31667"
  },
  {
    "country": "AU",
    "name": "Epping",
    "lat": "-37.65",
    "lng": "145.03333"
  },
  {
    "country": "AU",
    "name": "Epping",
    "lat": "-33.77271",
    "lng": "151.08184"
  },
  {
    "country": "AU",
    "name": "Engadine",
    "lat": "-34.06564",
    "lng": "151.01266"
  },
  {
    "country": "AU",
    "name": "Emu Plains",
    "lat": "-33.75",
    "lng": "150.66667"
  },
  {
    "country": "AU",
    "name": "Emu Park",
    "lat": "-23.2568",
    "lng": "150.82679"
  },
  {
    "country": "AU",
    "name": "Empire Bay",
    "lat": "-33.49385",
    "lng": "151.3629"
  },
  {
    "country": "AU",
    "name": "Emerald",
    "lat": "-37.93167",
    "lng": "145.44093"
  },
  {
    "country": "AU",
    "name": "Emerald",
    "lat": "-23.52296",
    "lng": "148.15784"
  },
  {
    "country": "AU",
    "name": "Eltham North",
    "lat": "-37.7",
    "lng": "145.15"
  },
  {
    "country": "AU",
    "name": "Eltham",
    "lat": "-37.73333",
    "lng": "145.15"
  },
  {
    "country": "AU",
    "name": "Elsternwick",
    "lat": "-37.88639",
    "lng": "145.0025"
  },
  {
    "country": "AU",
    "name": "Elliott Heads",
    "lat": "-24.91622",
    "lng": "152.48988"
  },
  {
    "country": "AU",
    "name": "Elliminyt",
    "lat": "-38.3711",
    "lng": "143.58003"
  },
  {
    "country": "AU",
    "name": "Elimbah",
    "lat": "-27.01667",
    "lng": "152.95"
  },
  {
    "country": "AU",
    "name": "Elderslie",
    "lat": "-34.05519",
    "lng": "150.71367"
  },
  {
    "country": "AU",
    "name": "Eimeo",
    "lat": "-21.03766",
    "lng": "149.1763"
  },
  {
    "country": "AU",
    "name": "Eight Mile Plains",
    "lat": "-27.58333",
    "lng": "153.1"
  },
  {
    "country": "AU",
    "name": "Eglinton",
    "lat": "-33.37731",
    "lng": "149.54654"
  },
  {
    "country": "AU",
    "name": "Edmonton",
    "lat": "-17.01902",
    "lng": "145.74443"
  },
  {
    "country": "AU",
    "name": "Edithvale",
    "lat": "-38.03724",
    "lng": "145.10974"
  },
  {
    "country": "AU",
    "name": "Edge Hill",
    "lat": "-16.9",
    "lng": "145.75"
  },
  {
    "country": "AU",
    "name": "Edgecliff",
    "lat": "-33.87952",
    "lng": "151.23677"
  },
  {
    "country": "AU",
    "name": "Eden Park",
    "lat": "-37.48333",
    "lng": "145.08333"
  },
  {
    "country": "AU",
    "name": "Eden",
    "lat": "-37.06675",
    "lng": "149.90029"
  },
  {
    "country": "AU",
    "name": "Echuca",
    "lat": "-36.14057",
    "lng": "144.75185"
  },
  {
    "country": "AU",
    "name": "Eastwood",
    "lat": "-33.79176",
    "lng": "151.08057"
  },
  {
    "country": "AU",
    "name": "East Maitland",
    "lat": "-32.75",
    "lng": "151.58333"
  },
  {
    "country": "AU",
    "name": "East Hills",
    "lat": "-33.96099",
    "lng": "150.98822"
  },
  {
    "country": "AU",
    "name": "East Gosford",
    "lat": "-33.43874",
    "lng": "151.35338"
  },
  {
    "country": "AU",
    "name": "East Ballina",
    "lat": "-28.85709",
    "lng": "153.58736"
  },
  {
    "country": "AU",
    "name": "Earlwood",
    "lat": "-33.9209",
    "lng": "151.12506"
  },
  {
    "country": "AU",
    "name": "Eagle Point",
    "lat": "-37.9",
    "lng": "147.68333"
  },
  {
    "country": "AU",
    "name": "Eaglehawk",
    "lat": "-36.71611",
    "lng": "144.25049"
  },
  {
    "country": "AU",
    "name": "Eagleby",
    "lat": "-27.68333",
    "lng": "153.21667"
  },
  {
    "country": "AU",
    "name": "Dural",
    "lat": "-33.68333",
    "lng": "151.01667"
  },
  {
    "country": "AU",
    "name": "Dungog",
    "lat": "-32.40431",
    "lng": "151.75192"
  },
  {
    "country": "AU",
    "name": "Dunedoo",
    "lat": "-32.01634",
    "lng": "149.3871"
  },
  {
    "country": "AU",
    "name": "Dubbo",
    "lat": "-32.24295",
    "lng": "148.60484"
  },
  {
    "country": "AU",
    "name": "Drysdale",
    "lat": "-38.17237",
    "lng": "144.56988"
  },
  {
    "country": "AU",
    "name": "Drouin",
    "lat": "-38.13658",
    "lng": "145.85838"
  },
  {
    "country": "AU",
    "name": "Dromana",
    "lat": "-38.33375",
    "lng": "144.96458"
  },
  {
    "country": "AU",
    "name": "Drayton",
    "lat": "-27.60011",
    "lng": "151.90109"
  },
  {
    "country": "AU",
    "name": "Douglas Park",
    "lat": "-34.18496",
    "lng": "150.71449"
  },
  {
    "country": "AU",
    "name": "Dorrigo",
    "lat": "-30.34112",
    "lng": "152.71394"
  },
  {
    "country": "AU",
    "name": "Doreen",
    "lat": "-37.6",
    "lng": "145.15"
  },
  {
    "country": "AU",
    "name": "Dora Creek",
    "lat": "-33.08139",
    "lng": "151.49677"
  },
  {
    "country": "AU",
    "name": "Doonside",
    "lat": "-33.76667",
    "lng": "150.86667"
  },
  {
    "country": "AU",
    "name": "Donvale",
    "lat": "-37.7891",
    "lng": "145.17488"
  },
  {
    "country": "AU",
    "name": "Doncaster East",
    "lat": "-37.78761",
    "lng": "145.14888"
  },
  {
    "country": "AU",
    "name": "Doncaster",
    "lat": "-37.78828",
    "lng": "145.12373"
  },
  {
    "country": "AU",
    "name": "Donald",
    "lat": "-36.36864",
    "lng": "142.98106"
  },
  {
    "country": "AU",
    "name": "Dingley Village",
    "lat": "-37.9827",
    "lng": "145.1342"
  },
  {
    "country": "AU",
    "name": "Dimbulah",
    "lat": "-17.14752",
    "lng": "145.10969"
  },
  {
    "country": "AU",
    "name": "Dimboola",
    "lat": "-36.45616",
    "lng": "142.03287"
  },
  {
    "country": "AU",
    "name": "Diggers Rest",
    "lat": "-37.62597",
    "lng": "144.71881"
  },
  {
    "country": "AU",
    "name": "Diamond Creek",
    "lat": "-37.66667",
    "lng": "145.15"
  },
  {
    "country": "AU",
    "name": "Devonport",
    "lat": "-41.17695",
    "lng": "146.35152"
  },
  {
    "country": "AU",
    "name": "Devon Meadows",
    "lat": "-38.16667",
    "lng": "145.3"
  },
  {
    "country": "AU",
    "name": "Derrimut",
    "lat": "-37.79238",
    "lng": "144.76994"
  },
  {
    "country": "AU",
    "name": "Dennington",
    "lat": "-38.35519",
    "lng": "142.43361"
  },
  {
    "country": "AU",
    "name": "Denman",
    "lat": "-32.38788",
    "lng": "150.68935"
  },
  {
    "country": "AU",
    "name": "Deniliquin",
    "lat": "-35.53245",
    "lng": "144.95364"
  },
  {
    "country": "AU",
    "name": "Deloraine",
    "lat": "-41.52477",
    "lng": "146.65701"
  },
  {
    "country": "AU",
    "name": "Deer Park",
    "lat": "-37.76722",
    "lng": "144.76657"
  },
  {
    "country": "AU",
    "name": "Deception Bay",
    "lat": "-27.19354",
    "lng": "153.02631"
  },
  {
    "country": "AU",
    "name": "Deagon",
    "lat": "-27.32788",
    "lng": "153.06126"
  },
  {
    "country": "AU",
    "name": "Daylesford",
    "lat": "-37.34113",
    "lng": "144.14256"
  },
  {
    "country": "AU",
    "name": "Dayboro",
    "lat": "-27.19632",
    "lng": "152.82253"
  },
  {
    "country": "AU",
    "name": "Davistown",
    "lat": "-33.48559",
    "lng": "151.36151"
  },
  {
    "country": "AU",
    "name": "Davidson",
    "lat": "-33.74297",
    "lng": "151.2008"
  },
  {
    "country": "AU",
    "name": "Darra",
    "lat": "-27.56693",
    "lng": "152.95395"
  },
  {
    "country": "AU",
    "name": "Darlington Point",
    "lat": "-34.56942",
    "lng": "145.9987"
  },
  {
    "country": "AU",
    "name": "Darlinghurst",
    "lat": "-33.87939",
    "lng": "151.21925"
  },
  {
    "country": "AU",
    "name": "Darley",
    "lat": "-37.65807",
    "lng": "144.44344"
  },
  {
    "country": "AU",
    "name": "Dapto",
    "lat": "-34.50386",
    "lng": "150.79416"
  },
  {
    "country": "AU",
    "name": "Dandenong",
    "lat": "-37.98333",
    "lng": "145.2"
  },
  {
    "country": "AU",
    "name": "Dalby",
    "lat": "-27.18169",
    "lng": "151.26205"
  },
  {
    "country": "AU",
    "name": "Dakabin",
    "lat": "-27.22594",
    "lng": "152.99097"
  },
  {
    "country": "AU",
    "name": "D’Aguilar",
    "lat": "-26.98333",
    "lng": "152.8"
  },
  {
    "country": "AU",
    "name": "Daceyville",
    "lat": "-33.92879",
    "lng": "151.22577"
  },
  {
    "country": "AU",
    "name": "Cygnet",
    "lat": "-43.15333",
    "lng": "147.07253"
  },
  {
    "country": "AU",
    "name": "Currie",
    "lat": "-39.92976",
    "lng": "143.85385"
  },
  {
    "country": "AU",
    "name": "Curra",
    "lat": "-26.06667",
    "lng": "152.58333"
  },
  {
    "country": "AU",
    "name": "Cunnamulla",
    "lat": "-28.06766",
    "lng": "145.68439"
  },
  {
    "country": "AU",
    "name": "Cundletown",
    "lat": "-31.8941",
    "lng": "152.52141"
  },
  {
    "country": "AU",
    "name": "Cumbalum",
    "lat": "-28.8225",
    "lng": "153.5284"
  },
  {
    "country": "AU",
    "name": "Culcairn",
    "lat": "-35.66669",
    "lng": "147.03845"
  },
  {
    "country": "AU",
    "name": "Croydon North",
    "lat": "-37.76741",
    "lng": "145.29073"
  },
  {
    "country": "AU",
    "name": "Croydon",
    "lat": "-37.8",
    "lng": "145.28333"
  },
  {
    "country": "AU",
    "name": "Croydon",
    "lat": "-33.88333",
    "lng": "151.11667"
  },
  {
    "country": "AU",
    "name": "Crows Nest",
    "lat": "-27.25993",
    "lng": "152.05164"
  },
  {
    "country": "AU",
    "name": "Crookwell",
    "lat": "-34.45925",
    "lng": "149.47137"
  },
  {
    "country": "AU",
    "name": "Cronulla",
    "lat": "-34.06251",
    "lng": "151.14961"
  },
  {
    "country": "AU",
    "name": "Cringila",
    "lat": "-34.47131",
    "lng": "150.86755"
  },
  {
    "country": "AU",
    "name": "Crib Point",
    "lat": "-38.35",
    "lng": "145.2"
  },
  {
    "country": "AU",
    "name": "Creswick",
    "lat": "-37.42404",
    "lng": "143.8947"
  },
  {
    "country": "AU",
    "name": "Cressy",
    "lat": "-41.68561",
    "lng": "147.07792"
  },
  {
    "country": "AU",
    "name": "Crescent Head",
    "lat": "-31.1887",
    "lng": "152.97301"
  },
  {
    "country": "AU",
    "name": "Cremorne",
    "lat": "-37.8318",
    "lng": "144.9938"
  },
  {
    "country": "AU",
    "name": "Cranley",
    "lat": "-27.51504",
    "lng": "151.923"
  },
  {
    "country": "AU",
    "name": "Cranbourne",
    "lat": "-38.11342",
    "lng": "145.28326"
  },
  {
    "country": "AU",
    "name": "Craigieburn",
    "lat": "-37.6",
    "lng": "144.95"
  },
  {
    "country": "AU",
    "name": "Cowra",
    "lat": "-33.83554",
    "lng": "148.69663"
  },
  {
    "country": "AU",
    "name": "Cowes",
    "lat": "-38.45231",
    "lng": "145.23865"
  },
  {
    "country": "AU",
    "name": "Coutts Crossing",
    "lat": "-29.82619",
    "lng": "152.89156"
  },
  {
    "country": "AU",
    "name": "Corryong",
    "lat": "-36.19705",
    "lng": "147.90256"
  },
  {
    "country": "AU",
    "name": "Corrimal",
    "lat": "-34.37864",
    "lng": "150.90356"
  },
  {
    "country": "AU",
    "name": "Corowa",
    "lat": "-35.99704",
    "lng": "146.38552"
  },
  {
    "country": "AU",
    "name": "Cornubia",
    "lat": "-27.66667",
    "lng": "153.21667"
  },
  {
    "country": "AU",
    "name": "Corio",
    "lat": "-38.08333",
    "lng": "144.38333"
  },
  {
    "country": "AU",
    "name": "Corinda",
    "lat": "-27.54381",
    "lng": "152.98215"
  },
  {
    "country": "AU",
    "name": "Coraki",
    "lat": "-28.9926",
    "lng": "153.28374"
  },
  {
    "country": "AU",
    "name": "Cootamundra",
    "lat": "-34.64095",
    "lng": "148.02838"
  },
  {
    "country": "AU",
    "name": "Coorparoo",
    "lat": "-27.49325",
    "lng": "153.05826"
  },
  {
    "country": "AU",
    "name": "Cooroy",
    "lat": "-26.41778",
    "lng": "152.91149"
  },
  {
    "country": "AU",
    "name": "Cooranbong",
    "lat": "-33.07622",
    "lng": "151.45409"
  },
  {
    "country": "AU",
    "name": "Coonamble",
    "lat": "-30.95389",
    "lng": "148.38881"
  },
  {
    "country": "AU",
    "name": "Coonabarabran",
    "lat": "-31.27734",
    "lng": "149.27904"
  },
  {
    "country": "AU",
    "name": "Coominya",
    "lat": "-27.39009",
    "lng": "152.5006"
  },
  {
    "country": "AU",
    "name": "Cooma",
    "lat": "-36.23517",
    "lng": "149.12408"
  },
  {
    "country": "AU",
    "name": "Coolum Beach",
    "lat": "-26.5283",
    "lng": "153.08809"
  },
  {
    "country": "AU",
    "name": "Coolangatta",
    "lat": "-28.16944",
    "lng": "153.53471"
  },
  {
    "country": "AU",
    "name": "Coolamon",
    "lat": "-34.81641",
    "lng": "147.19577"
  },
  {
    "country": "AU",
    "name": "Coolah",
    "lat": "-31.82787",
    "lng": "149.71564"
  },
  {
    "country": "AU",
    "name": "Cooktown",
    "lat": "-15.4657",
    "lng": "145.24984"
  },
  {
    "country": "AU",
    "name": "Coogee",
    "lat": "-33.9205",
    "lng": "151.25522"
  },
  {
    "country": "AU",
    "name": "Coniston",
    "lat": "-34.45",
    "lng": "150.88333"
  },
  {
    "country": "AU",
    "name": "Condobolin",
    "lat": "-33.08877",
    "lng": "147.15139"
  },
  {
    "country": "AU",
    "name": "Concord",
    "lat": "-33.84722",
    "lng": "151.10381"
  },
  {
    "country": "AU",
    "name": "Como",
    "lat": "-33.99941",
    "lng": "151.06389"
  },
  {
    "country": "AU",
    "name": "Colo Vale",
    "lat": "-34.40095",
    "lng": "150.48573"
  },
  {
    "country": "AU",
    "name": "Collinsville",
    "lat": "-20.55223",
    "lng": "147.84399"
  },
  {
    "country": "AU",
    "name": "Collingwood",
    "lat": "-37.80253",
    "lng": "144.98872"
  },
  {
    "country": "AU",
    "name": "Collaroy",
    "lat": "-33.73205",
    "lng": "151.30118"
  },
  {
    "country": "AU",
    "name": "Coledale",
    "lat": "-34.29105",
    "lng": "150.9447"
  },
  {
    "country": "AU",
    "name": "Coldstream",
    "lat": "-37.7249",
    "lng": "145.37804"
  },
  {
    "country": "AU",
    "name": "Colac",
    "lat": "-38.339",
    "lng": "143.58489"
  },
  {
    "country": "AU",
    "name": "Cohuna",
    "lat": "-35.80697",
    "lng": "144.21886"
  },
  {
    "country": "AU",
    "name": "Coffs Harbour",
    "lat": "-30.29626",
    "lng": "153.11351"
  },
  {
    "country": "AU",
    "name": "Cockatoo",
    "lat": "-37.93677",
    "lng": "145.49376"
  },
  {
    "country": "AU",
    "name": "Coburg",
    "lat": "-37.75",
    "lng": "144.96667"
  },
  {
    "country": "AU",
    "name": "Cobram",
    "lat": "-35.92069",
    "lng": "145.64066"
  },
  {
    "country": "AU",
    "name": "Cobden",
    "lat": "-38.3286",
    "lng": "143.07484"
  },
  {
    "country": "AU",
    "name": "Cobbitty",
    "lat": "-34.01592",
    "lng": "150.67854"
  },
  {
    "country": "AU",
    "name": "Cobar",
    "lat": "-31.49666",
    "lng": "145.83439"
  },
  {
    "country": "AU",
    "name": "Clyde North",
    "lat": "-38.11667",
    "lng": "145.33333"
  },
  {
    "country": "AU",
    "name": "Clyde",
    "lat": "-38.13333",
    "lng": "145.33333"
  },
  {
    "country": "AU",
    "name": "Clunes",
    "lat": "-37.29473",
    "lng": "143.78636"
  },
  {
    "country": "AU",
    "name": "Cloncurry",
    "lat": "-20.70718",
    "lng": "140.51303"
  },
  {
    "country": "AU",
    "name": "Clifton Springs",
    "lat": "-38.1567",
    "lng": "144.5551"
  },
  {
    "country": "AU",
    "name": "Clifton Hill",
    "lat": "-37.79798",
    "lng": "144.99533"
  },
  {
    "country": "AU",
    "name": "Clifton",
    "lat": "-27.93374",
    "lng": "151.9066"
  },
  {
    "country": "AU",
    "name": "Cleveland",
    "lat": "-27.52677",
    "lng": "153.26516"
  },
  {
    "country": "AU",
    "name": "Clermont",
    "lat": "-22.82407",
    "lng": "147.63635"
  },
  {
    "country": "AU",
    "name": "Clayton South",
    "lat": "-37.93333",
    "lng": "145.11667"
  },
  {
    "country": "AU",
    "name": "Clayton",
    "lat": "-37.91667",
    "lng": "145.11667"
  },
  {
    "country": "AU",
    "name": "Clarinda",
    "lat": "-37.94066",
    "lng": "145.10238"
  },
  {
    "country": "AU",
    "name": "Clarence Town",
    "lat": "-32.58395",
    "lng": "151.77757"
  },
  {
    "country": "AU",
    "name": "Claremont",
    "lat": "-42.78333",
    "lng": "147.25"
  },
  {
    "country": "AU",
    "name": "Wollongong",
    "lat": "-34.424",
    "lng": "150.89345"
  },
  {
    "country": "AU",
    "name": "Churchill",
    "lat": "-27.64233",
    "lng": "152.75022"
  },
  {
    "country": "AU",
    "name": "Chipping Norton",
    "lat": "-33.91801",
    "lng": "150.95927"
  },
  {
    "country": "AU",
    "name": "Chippendale",
    "lat": "-33.88673",
    "lng": "151.19745"
  },
  {
    "country": "AU",
    "name": "Chinderah",
    "lat": "-28.25456",
    "lng": "153.53712"
  },
  {
    "country": "AU",
    "name": "Chinchilla",
    "lat": "-26.73787",
    "lng": "150.6297"
  },
  {
    "country": "AU",
    "name": "Chiltern",
    "lat": "-36.15044",
    "lng": "146.60843"
  },
  {
    "country": "AU",
    "name": "Childers",
    "lat": "-25.23708",
    "lng": "152.27876"
  },
  {
    "country": "AU",
    "name": "Chewton",
    "lat": "-37.08137",
    "lng": "144.25682"
  },
  {
    "country": "AU",
    "name": "Chelsea Heights",
    "lat": "-38.03333",
    "lng": "145.13333"
  },
  {
    "country": "AU",
    "name": "Chelsea",
    "lat": "-38.05",
    "lng": "145.11667"
  },
  {
    "country": "AU",
    "name": "Chatswood",
    "lat": "-33.8",
    "lng": "151.18333"
  },
  {
    "country": "AU",
    "name": "Charters Towers",
    "lat": "-20.07671",
    "lng": "146.26353"
  },
  {
    "country": "AU",
    "name": "Charlton",
    "lat": "-36.26437",
    "lng": "143.34901"
  },
  {
    "country": "AU",
    "name": "Charleville",
    "lat": "-26.40542",
    "lng": "146.24274"
  },
  {
    "country": "AU",
    "name": "Charlestown",
    "lat": "-32.96828",
    "lng": "151.69318"
  },
  {
    "country": "AU",
    "name": "Cessnock",
    "lat": "-32.83211",
    "lng": "151.35623"
  },
  {
    "country": "AU",
    "name": "Cedar Grove",
    "lat": "-27.86667",
    "lng": "152.98333"
  },
  {
    "country": "AU",
    "name": "Caulfield North",
    "lat": "-37.8739",
    "lng": "145.02485"
  },
  {
    "country": "AU",
    "name": "Caulfield East",
    "lat": "-37.88121",
    "lng": "145.04208"
  },
  {
    "country": "AU",
    "name": "Caulfield",
    "lat": "-37.88251",
    "lng": "145.02288"
  },
  {
    "country": "AU",
    "name": "Castlemaine",
    "lat": "-37.06709",
    "lng": "144.21684"
  },
  {
    "country": "AU",
    "name": "Castle Hill",
    "lat": "-33.73333",
    "lng": "151"
  },
  {
    "country": "AU",
    "name": "Castlecrag",
    "lat": "-33.79987",
    "lng": "151.2231"
  },
  {
    "country": "AU",
    "name": "Casterton",
    "lat": "-37.58489",
    "lng": "141.40297"
  },
  {
    "country": "AU",
    "name": "Casino",
    "lat": "-28.85819",
    "lng": "153.04748"
  },
  {
    "country": "AU",
    "name": "Carrum Downs",
    "lat": "-38.09968",
    "lng": "145.17248"
  },
  {
    "country": "AU",
    "name": "Carrum",
    "lat": "-38.08333",
    "lng": "145.13333"
  },
  {
    "country": "AU",
    "name": "Carnegie",
    "lat": "-37.89359",
    "lng": "145.05534"
  },
  {
    "country": "AU",
    "name": "Carlton North",
    "lat": "-37.78818",
    "lng": "144.97014"
  },
  {
    "country": "AU",
    "name": "Carlton",
    "lat": "-37.8",
    "lng": "144.96667"
  },
  {
    "country": "AU",
    "name": "Carlingford",
    "lat": "-33.78269",
    "lng": "151.04888"
  },
  {
    "country": "AU",
    "name": "Carisbrook",
    "lat": "-37.04808",
    "lng": "143.81665"
  },
  {
    "country": "AU",
    "name": "Caringbah",
    "lat": "-34.03534",
    "lng": "151.12468"
  },
  {
    "country": "AU",
    "name": "Cardwell",
    "lat": "-18.26693",
    "lng": "146.02804"
  },
  {
    "country": "AU",
    "name": "Cardiff",
    "lat": "-32.94201",
    "lng": "151.6544"
  },
  {
    "country": "AU",
    "name": "Carbrook",
    "lat": "-27.68333",
    "lng": "153.25"
  },
  {
    "country": "AU",
    "name": "Capella",
    "lat": "-23.08593",
    "lng": "148.02206"
  },
  {
    "country": "AU",
    "name": "Capalaba",
    "lat": "-27.54333",
    "lng": "153.20287"
  },
  {
    "country": "AU",
    "name": "Canungra",
    "lat": "-28.01689",
    "lng": "153.16525"
  },
  {
    "country": "AU",
    "name": "Canowindra",
    "lat": "-33.56247",
    "lng": "148.66434"
  },
  {
    "country": "AU",
    "name": "Cannonvale",
    "lat": "-20.27681",
    "lng": "148.69759"
  },
  {
    "country": "AU",
    "name": "Canberra",
    "lat": "-35.28346",
    "lng": "149.12807"
  },
  {
    "country": "AU",
    "name": "Canadian",
    "lat": "-37.57606",
    "lng": "143.87742"
  },
  {
    "country": "AU",
    "name": "Camp Mountain",
    "lat": "-27.4",
    "lng": "152.88333"
  },
  {
    "country": "AU",
    "name": "Camperdown",
    "lat": "-38.23392",
    "lng": "143.14983"
  },
  {
    "country": "AU",
    "name": "Camperdown",
    "lat": "-33.88965",
    "lng": "151.17642"
  },
  {
    "country": "AU",
    "name": "Campbelltown",
    "lat": "-34.06667",
    "lng": "150.81667"
  },
  {
    "country": "AU",
    "name": "Campbells Creek",
    "lat": "-37.08665",
    "lng": "144.20203"
  },
  {
    "country": "AU",
    "name": "Campbellfield",
    "lat": "-37.66386",
    "lng": "144.95953"
  },
  {
    "country": "AU",
    "name": "Campbell",
    "lat": "-35.28907",
    "lng": "149.15382"
  },
  {
    "country": "AU",
    "name": "Camden",
    "lat": "-34.05405",
    "lng": "150.69624"
  },
  {
    "country": "AU",
    "name": "Cambridge",
    "lat": "-42.83333",
    "lng": "147.45"
  },
  {
    "country": "AU",
    "name": "Cambooya",
    "lat": "-27.71454",
    "lng": "151.86029"
  },
  {
    "country": "AU",
    "name": "Camberwell",
    "lat": "-37.84205",
    "lng": "145.0694"
  },
  {
    "country": "AU",
    "name": "Cambewarra Village",
    "lat": "-34.82335",
    "lng": "150.5594"
  },
  {
    "country": "AU",
    "name": "Caloundra",
    "lat": "-26.80346",
    "lng": "153.12195"
  },
  {
    "country": "AU",
    "name": "Calliope",
    "lat": "-24.00705",
    "lng": "151.20033"
  },
  {
    "country": "AU",
    "name": "Cairns",
    "lat": "-16.92366",
    "lng": "145.76613"
  },
  {
    "country": "AU",
    "name": "Caboolture",
    "lat": "-27.08465",
    "lng": "152.9511"
  },
  {
    "country": "AU",
    "name": "Cabarlah",
    "lat": "-27.43333",
    "lng": "152"
  },
  {
    "country": "AU",
    "name": "Bywong",
    "lat": "-35.16476",
    "lng": "149.32892"
  },
  {
    "country": "AU",
    "name": "Byron Bay",
    "lat": "-28.64989",
    "lng": "153.61246"
  },
  {
    "country": "AU",
    "name": "Buxton",
    "lat": "-34.26017",
    "lng": "150.53288"
  },
  {
    "country": "AU",
    "name": "Burwood East",
    "lat": "-37.85",
    "lng": "145.15"
  },
  {
    "country": "AU",
    "name": "Burwood",
    "lat": "-33.88333",
    "lng": "151.1"
  },
  {
    "country": "AU",
    "name": "Burradoo",
    "lat": "-34.5032",
    "lng": "150.409"
  },
  {
    "country": "AU",
    "name": "Burpengary",
    "lat": "-27.15746",
    "lng": "152.95758"
  },
  {
    "country": "AU",
    "name": "Burnie",
    "lat": "-41.05584",
    "lng": "145.90375"
  },
  {
    "country": "AU",
    "name": "Burnett Heads",
    "lat": "-24.76468",
    "lng": "152.4127"
  },
  {
    "country": "AU",
    "name": "Burleigh Heads",
    "lat": "-28.1",
    "lng": "153.45"
  },
  {
    "country": "AU",
    "name": "Bunyip",
    "lat": "-38.09789",
    "lng": "145.71606"
  },
  {
    "country": "AU",
    "name": "Buninyong",
    "lat": "-37.65019",
    "lng": "143.88388"
  },
  {
    "country": "AU",
    "name": "Bungendore",
    "lat": "-35.25382",
    "lng": "149.44007"
  },
  {
    "country": "AU",
    "name": "Bundanoon",
    "lat": "-34.65658",
    "lng": "150.29623"
  },
  {
    "country": "AU",
    "name": "Bundamba",
    "lat": "-27.60947",
    "lng": "152.81133"
  },
  {
    "country": "AU",
    "name": "Bundaberg",
    "lat": "-24.86621",
    "lng": "152.3479"
  },
  {
    "country": "AU",
    "name": "Bulli",
    "lat": "-34.33834",
    "lng": "150.91347"
  },
  {
    "country": "AU",
    "name": "Bulleen",
    "lat": "-37.76667",
    "lng": "145.08333"
  },
  {
    "country": "AU",
    "name": "Bulahdelah",
    "lat": "-32.40698",
    "lng": "152.21185"
  },
  {
    "country": "AU",
    "name": "Budgewoi",
    "lat": "-33.2339",
    "lng": "151.55412"
  },
  {
    "country": "AU",
    "name": "Buderim",
    "lat": "-26.68443",
    "lng": "153.05705"
  },
  {
    "country": "AU",
    "name": "Buccan",
    "lat": "-27.75",
    "lng": "153.13333"
  },
  {
    "country": "AU",
    "name": "Bucca",
    "lat": "-24.86667",
    "lng": "152.1"
  },
  {
    "country": "AU",
    "name": "Bucasia",
    "lat": "-21.03494",
    "lng": "149.15726"
  },
  {
    "country": "AU",
    "name": "Brunswick West",
    "lat": "-37.76461",
    "lng": "144.94383"
  },
  {
    "country": "AU",
    "name": "Brunswick Heads",
    "lat": "-28.54003",
    "lng": "153.54573"
  },
  {
    "country": "AU",
    "name": "Brunswick East",
    "lat": "-37.77255",
    "lng": "144.97241"
  },
  {
    "country": "AU",
    "name": "Brunswick",
    "lat": "-37.76667",
    "lng": "144.96667"
  },
  {
    "country": "AU",
    "name": "Brown Hill",
    "lat": "-37.54654",
    "lng": "143.91553"
  },
  {
    "country": "AU",
    "name": "Broulee",
    "lat": "-35.85469",
    "lng": "150.17392"
  },
  {
    "country": "AU",
    "name": "Brookfield",
    "lat": "-27.5",
    "lng": "152.9"
  },
  {
    "country": "AU",
    "name": "Broken Hill",
    "lat": "-31.9652",
    "lng": "141.4512"
  },
  {
    "country": "AU",
    "name": "Broadmeadows",
    "lat": "-37.68015",
    "lng": "144.91877"
  },
  {
    "country": "AU",
    "name": "Broadford",
    "lat": "-37.20276",
    "lng": "145.04837"
  },
  {
    "country": "AU",
    "name": "Broadbeach",
    "lat": "-28.02782",
    "lng": "153.43343"
  },
  {
    "country": "AU",
    "name": "Brisbane",
    "lat": "-27.46794",
    "lng": "153.02809"
  },
  {
    "country": "AU",
    "name": "Bringelly",
    "lat": "-33.93333",
    "lng": "150.73333"
  },
  {
    "country": "AU",
    "name": "Brighton",
    "lat": "-37.90561",
    "lng": "145.00279"
  },
  {
    "country": "AU",
    "name": "Brighton",
    "lat": "-27.29582",
    "lng": "153.05721"
  },
  {
    "country": "AU",
    "name": "Bright",
    "lat": "-36.72998",
    "lng": "146.95978"
  },
  {
    "country": "AU",
    "name": "Bridport",
    "lat": "-41.00046",
    "lng": "147.39175"
  },
  {
    "country": "AU",
    "name": "Bridgewater",
    "lat": "-42.73719",
    "lng": "147.22784"
  },
  {
    "country": "AU",
    "name": "Briar Hill",
    "lat": "-37.70631",
    "lng": "145.121"
  },
  {
    "country": "AU",
    "name": "Briagolong",
    "lat": "-37.84356",
    "lng": "147.07268"
  },
  {
    "country": "AU",
    "name": "Brewarrina",
    "lat": "-29.96067",
    "lng": "146.85986"
  },
  {
    "country": "AU",
    "name": "Branxton",
    "lat": "-32.65547",
    "lng": "151.35113"
  },
  {
    "country": "AU",
    "name": "Brandon",
    "lat": "-19.55389",
    "lng": "147.35304"
  },
  {
    "country": "AU",
    "name": "Braidwood",
    "lat": "-35.44148",
    "lng": "149.7998"
  },
  {
    "country": "AU",
    "name": "Boyne Island",
    "lat": "-23.94829",
    "lng": "151.35336"
  },
  {
    "country": "AU",
    "name": "Box Hill",
    "lat": "-37.81887",
    "lng": "145.12545"
  },
  {
    "country": "AU",
    "name": "Bowraville",
    "lat": "-30.64997",
    "lng": "152.85146"
  },
  {
    "country": "AU",
    "name": "Bowral",
    "lat": "-34.4775",
    "lng": "150.4204"
  },
  {
    "country": "AU",
    "name": "South Bowenfels",
    "lat": "-33.51667",
    "lng": "150.11667"
  },
  {
    "country": "AU",
    "name": "Bowen",
    "lat": "-20.01367",
    "lng": "148.24754"
  },
  {
    "country": "AU",
    "name": "Bourke",
    "lat": "-30.09011",
    "lng": "145.93646"
  },
  {
    "country": "AU",
    "name": "Botany",
    "lat": "-33.94599",
    "lng": "151.19591"
  },
  {
    "country": "AU",
    "name": "Boronia",
    "lat": "-37.86667",
    "lng": "145.28333"
  },
  {
    "country": "AU",
    "name": "Bordertown",
    "lat": "-36.30768",
    "lng": "140.77167"
  },
  {
    "country": "AU",
    "name": "Boorowa",
    "lat": "-34.43661",
    "lng": "148.71634"
  },
  {
    "country": "AU",
    "name": "Boondall",
    "lat": "-27.35317",
    "lng": "153.06092"
  },
  {
    "country": "AU",
    "name": "Boonah",
    "lat": "-27.99724",
    "lng": "152.68108"
  },
  {
    "country": "AU",
    "name": "Booker Bay",
    "lat": "-33.5125",
    "lng": "151.3459"
  },
  {
    "country": "AU",
    "name": "Bonville",
    "lat": "-30.38284",
    "lng": "153.05959"
  },
  {
    "country": "AU",
    "name": "Bongaree",
    "lat": "-27.08367",
    "lng": "153.15942"
  },
  {
    "country": "AU",
    "name": "Bombala",
    "lat": "-36.91212",
    "lng": "149.23669"
  },
  {
    "country": "AU",
    "name": "Bomaderry",
    "lat": "-34.84967",
    "lng": "150.61093"
  },
  {
    "country": "AU",
    "name": "Boggabri",
    "lat": "-30.70953",
    "lng": "150.04121"
  },
  {
    "country": "AU",
    "name": "Boambee",
    "lat": "-30.33981",
    "lng": "153.06783"
  },
  {
    "country": "AU",
    "name": "Bli Bli",
    "lat": "-26.61724",
    "lng": "153.03665"
  },
  {
    "country": "AU",
    "name": "Blayney",
    "lat": "-33.53233",
    "lng": "149.25367"
  },
  {
    "country": "AU",
    "name": "Blaxland",
    "lat": "-33.75",
    "lng": "150.6"
  },
  {
    "country": "AU",
    "name": "Blair Athol",
    "lat": "-30.65",
    "lng": "150.2"
  },
  {
    "country": "AU",
    "name": "Blackwater",
    "lat": "-23.58351",
    "lng": "148.87912"
  },
  {
    "country": "AU",
    "name": "Blackwall",
    "lat": "-33.50252",
    "lng": "151.32786"
  },
  {
    "country": "AU",
    "name": "Blacktown",
    "lat": "-33.76667",
    "lng": "150.91667"
  },
  {
    "country": "AU",
    "name": "Blacks Beach",
    "lat": "-21.05466",
    "lng": "149.18971"
  },
  {
    "country": "AU",
    "name": "Blackmans Bay",
    "lat": "-43.00311",
    "lng": "147.31694"
  },
  {
    "country": "AU",
    "name": "Black Hill",
    "lat": "-37.55",
    "lng": "143.86667"
  },
  {
    "country": "AU",
    "name": "Blackheath",
    "lat": "-33.63567",
    "lng": "150.28318"
  },
  {
    "country": "AU",
    "name": "Blackall",
    "lat": "-24.42327",
    "lng": "145.46303"
  },
  {
    "country": "AU",
    "name": "Bittern",
    "lat": "-38.33333",
    "lng": "145.16667"
  },
  {
    "country": "AU",
    "name": "Birkdale",
    "lat": "-27.48333",
    "lng": "153.21667"
  },
  {
    "country": "AU",
    "name": "Bingara",
    "lat": "-29.86931",
    "lng": "150.57204"
  },
  {
    "country": "AU",
    "name": "Biloela",
    "lat": "-24.39589",
    "lng": "150.51504"
  },
  {
    "country": "AU",
    "name": "Bilinga",
    "lat": "-28.16667",
    "lng": "153.51667"
  },
  {
    "country": "AU",
    "name": "Bexley",
    "lat": "-33.95",
    "lng": "151.11667"
  },
  {
    "country": "AU",
    "name": "Beveridge",
    "lat": "-37.48333",
    "lng": "144.98333"
  },
  {
    "country": "AU",
    "name": "Berwick",
    "lat": "-38.03333",
    "lng": "145.35"
  },
  {
    "country": "AU",
    "name": "Berry",
    "lat": "-34.77507",
    "lng": "150.69436"
  },
  {
    "country": "AU",
    "name": "Berrigan",
    "lat": "-35.65879",
    "lng": "145.81145"
  },
  {
    "country": "AU",
    "name": "Berriedale",
    "lat": "-42.81667",
    "lng": "147.25"
  },
  {
    "country": "AU",
    "name": "Berridale",
    "lat": "-36.36673",
    "lng": "148.82772"
  },
  {
    "country": "AU",
    "name": "Berri",
    "lat": "-34.28107",
    "lng": "140.59958"
  },
  {
    "country": "AU",
    "name": "Berowra",
    "lat": "-33.62078",
    "lng": "151.15091"
  },
  {
    "country": "AU",
    "name": "Bermagui",
    "lat": "-36.419",
    "lng": "150.06355"
  },
  {
    "country": "AU",
    "name": "Berkeley Vale",
    "lat": "-33.35",
    "lng": "151.43333"
  },
  {
    "country": "AU",
    "name": "Berkeley",
    "lat": "-34.48333",
    "lng": "150.85"
  },
  {
    "country": "AU",
    "name": "Beresfield",
    "lat": "-32.8",
    "lng": "151.65"
  },
  {
    "country": "AU",
    "name": "Bentleigh East",
    "lat": "-37.91928",
    "lng": "145.05301"
  },
  {
    "country": "AU",
    "name": "Bentleigh",
    "lat": "-37.91806",
    "lng": "145.03544"
  },
  {
    "country": "AU",
    "name": "Bensville",
    "lat": "-33.49757",
    "lng": "151.38084"
  },
  {
    "country": "AU",
    "name": "Benowa",
    "lat": "-28.0077",
    "lng": "153.38583"
  },
  {
    "country": "AU",
    "name": "Bendigo",
    "lat": "-36.75818",
    "lng": "144.28024"
  },
  {
    "country": "AU",
    "name": "Benaraby",
    "lat": "-24.00417",
    "lng": "151.3341"
  },
  {
    "country": "AU",
    "name": "Benalla",
    "lat": "-36.55113",
    "lng": "145.98425"
  },
  {
    "country": "AU",
    "name": "Belrose",
    "lat": "-33.73954",
    "lng": "151.21033"
  },
  {
    "country": "AU",
    "name": "Belmont",
    "lat": "-38.17485",
    "lng": "144.34276"
  },
  {
    "country": "AU",
    "name": "Belmont",
    "lat": "-33.0274",
    "lng": "151.6601"
  },
  {
    "country": "AU",
    "name": "Belmont",
    "lat": "-27.49882",
    "lng": "153.134"
  },
  {
    "country": "AU",
    "name": "Bellingen",
    "lat": "-30.45294",
    "lng": "152.89911"
  },
  {
    "country": "AU",
    "name": "Bellerive",
    "lat": "-42.87551",
    "lng": "147.3703"
  },
  {
    "country": "AU",
    "name": "Bellbird",
    "lat": "-32.85992",
    "lng": "151.31873"
  },
  {
    "country": "AU",
    "name": "Bellambi",
    "lat": "-34.36667",
    "lng": "150.91667"
  },
  {
    "country": "AU",
    "name": "Belgrave South",
    "lat": "-37.93333",
    "lng": "145.33333"
  },
  {
    "country": "AU",
    "name": "Belgrave Heights",
    "lat": "-37.92624",
    "lng": "145.34367"
  },
  {
    "country": "AU",
    "name": "Belgrave",
    "lat": "-37.91093",
    "lng": "145.35359"
  },
  {
    "country": "AU",
    "name": "Belgian Gardens",
    "lat": "-19.24507",
    "lng": "146.79455"
  },
  {
    "country": "AU",
    "name": "Belconnen",
    "lat": "-35.23798",
    "lng": "149.06627"
  },
  {
    "country": "AU",
    "name": "Bega",
    "lat": "-36.67392",
    "lng": "149.84178"
  },
  {
    "country": "AU",
    "name": "Beerwah",
    "lat": "-26.85881",
    "lng": "152.96144"
  },
  {
    "country": "AU",
    "name": "Beenleigh",
    "lat": "-27.71137",
    "lng": "153.2029"
  },
  {
    "country": "AU",
    "name": "Beechworth",
    "lat": "-36.35828",
    "lng": "146.68584"
  },
  {
    "country": "AU",
    "name": "Beauty Point",
    "lat": "-41.16216",
    "lng": "146.82146"
  },
  {
    "country": "AU",
    "name": "Beaumaris",
    "lat": "-37.98534",
    "lng": "145.03361"
  },
  {
    "country": "AU",
    "name": "Beaufort",
    "lat": "-37.42996",
    "lng": "143.38347"
  },
  {
    "country": "AU",
    "name": "Beaudesert",
    "lat": "-27.98691",
    "lng": "152.99657"
  },
  {
    "country": "AU",
    "name": "Beaconsfield Upper",
    "lat": "-37.99415",
    "lng": "145.4142"
  },
  {
    "country": "AU",
    "name": "Beaconsfield",
    "lat": "-41.20227",
    "lng": "146.81723"
  },
  {
    "country": "AU",
    "name": "Beaconsfield",
    "lat": "-38.05",
    "lng": "145.36667"
  },
  {
    "country": "AU",
    "name": "Beachmere",
    "lat": "-27.12808",
    "lng": "153.05243"
  },
  {
    "country": "AU",
    "name": "Bay View",
    "lat": "-33.65982",
    "lng": "151.29878"
  },
  {
    "country": "AU",
    "name": "Bayswater",
    "lat": "-37.85",
    "lng": "145.26667"
  },
  {
    "country": "AU",
    "name": "Baxter",
    "lat": "-38.2",
    "lng": "145.15"
  },
  {
    "country": "AU",
    "name": "Baulkham Hills",
    "lat": "-33.75881",
    "lng": "150.99292"
  },
  {
    "country": "AU",
    "name": "Batlow",
    "lat": "-35.51987",
    "lng": "148.14727"
  },
  {
    "country": "AU",
    "name": "Bathurst",
    "lat": "-33.41665",
    "lng": "149.5806"
  },
  {
    "country": "AU",
    "name": "Batemans Bay",
    "lat": "-35.70658",
    "lng": "150.17541"
  },
  {
    "country": "AU",
    "name": "Bass Hill",
    "lat": "-33.89863",
    "lng": "150.99541"
  },
  {
    "country": "AU",
    "name": "Barraba",
    "lat": "-30.38547",
    "lng": "150.60901"
  },
  {
    "country": "AU",
    "name": "Barooga",
    "lat": "-35.90602",
    "lng": "145.69585"
  },
  {
    "country": "AU",
    "name": "Barnsley",
    "lat": "-32.93333",
    "lng": "151.58333"
  },
  {
    "country": "AU",
    "name": "Barmera",
    "lat": "-34.25562",
    "lng": "140.46147"
  },
  {
    "country": "AU",
    "name": "Barham",
    "lat": "-35.62647",
    "lng": "144.12895"
  },
  {
    "country": "AU",
    "name": "Bargo",
    "lat": "-34.29301",
    "lng": "150.57806"
  },
  {
    "country": "AU",
    "name": "Bargara",
    "lat": "-24.81476",
    "lng": "152.46257"
  },
  {
    "country": "AU",
    "name": "Barcaldine",
    "lat": "-23.55353",
    "lng": "145.28542"
  },
  {
    "country": "AU",
    "name": "Baranduda",
    "lat": "-36.19114",
    "lng": "146.9538"
  },
  {
    "country": "AU",
    "name": "Banora Point",
    "lat": "-28.21298",
    "lng": "153.53634"
  },
  {
    "country": "AU",
    "name": "Bannockburn",
    "lat": "-38.04894",
    "lng": "144.16882"
  },
  {
    "country": "AU",
    "name": "Bankstown",
    "lat": "-33.91667",
    "lng": "151.03333"
  },
  {
    "country": "AU",
    "name": "Bangalow",
    "lat": "-28.68634",
    "lng": "153.52153"
  },
  {
    "country": "AU",
    "name": "Bamaga",
    "lat": "-10.89197",
    "lng": "142.38934"
  },
  {
    "country": "AU",
    "name": "Balwyn",
    "lat": "-37.80914",
    "lng": "145.0789"
  },
  {
    "country": "AU",
    "name": "Balranald",
    "lat": "-34.63649",
    "lng": "143.56143"
  },
  {
    "country": "AU",
    "name": "Balnarring",
    "lat": "-38.36667",
    "lng": "145.13333"
  },
  {
    "country": "AU",
    "name": "Balmain",
    "lat": "-33.85481",
    "lng": "151.1833"
  },
  {
    "country": "AU",
    "name": "Ballina",
    "lat": "-28.86414",
    "lng": "153.56541"
  },
  {
    "country": "AU",
    "name": "Ballarat East",
    "lat": "-37.56667",
    "lng": "143.86667"
  },
  {
    "country": "AU",
    "name": "Ballarat",
    "lat": "-37.56622",
    "lng": "143.84957"
  },
  {
    "country": "AU",
    "name": "Ballan",
    "lat": "-37.59987",
    "lng": "144.2289"
  },
  {
    "country": "AU",
    "name": "Balgownie",
    "lat": "-34.39505",
    "lng": "150.88051"
  },
  {
    "country": "AU",
    "name": "Balgowlah",
    "lat": "-33.79494",
    "lng": "151.2572"
  },
  {
    "country": "AU",
    "name": "Balaclava",
    "lat": "-37.86667",
    "lng": "145"
  },
  {
    "country": "AU",
    "name": "Bakers Creek",
    "lat": "-21.2199",
    "lng": "149.14681"
  },
  {
    "country": "AU",
    "name": "Bairnsdale",
    "lat": "-37.82289",
    "lng": "147.61041"
  },
  {
    "country": "AU",
    "name": "Bahrs Scrub",
    "lat": "-27.73333",
    "lng": "153.16667"
  },
  {
    "country": "AU",
    "name": "Bagdad",
    "lat": "-42.62968",
    "lng": "147.22339"
  },
  {
    "country": "AU",
    "name": "Badger Creek",
    "lat": "-37.7",
    "lng": "145.51667"
  },
  {
    "country": "AU",
    "name": "Bacchus Marsh",
    "lat": "-37.67268",
    "lng": "144.43829"
  },
  {
    "country": "AU",
    "name": "Babinda",
    "lat": "-17.3439",
    "lng": "145.92265"
  },
  {
    "country": "AU",
    "name": "Ayr",
    "lat": "-19.57393",
    "lng": "147.40666"
  },
  {
    "country": "AU",
    "name": "Avoca Beach",
    "lat": "-33.46818",
    "lng": "151.4339"
  },
  {
    "country": "AU",
    "name": "Avoca",
    "lat": "-37.09044",
    "lng": "143.47365"
  },
  {
    "country": "AU",
    "name": "Avenel",
    "lat": "-36.90088",
    "lng": "145.23367"
  },
  {
    "country": "AU",
    "name": "Austins Ferry",
    "lat": "-42.76667",
    "lng": "147.25"
  },
  {
    "country": "AU",
    "name": "Austinmer",
    "lat": "-34.30516",
    "lng": "150.93335"
  },
  {
    "country": "AU",
    "name": "Aurukun",
    "lat": "-13.35582",
    "lng": "141.72707"
  },
  {
    "country": "AU",
    "name": "Auburn",
    "lat": "-33.85",
    "lng": "151.03333"
  },
  {
    "country": "AU",
    "name": "Atherton",
    "lat": "-17.26864",
    "lng": "145.47522"
  },
  {
    "country": "AU",
    "name": "Asquith",
    "lat": "-33.68705",
    "lng": "151.1163"
  },
  {
    "country": "AU",
    "name": "Aspley",
    "lat": "-27.36667",
    "lng": "153.01667"
  },
  {
    "country": "AU",
    "name": "Aspendale",
    "lat": "-38.02913",
    "lng": "145.10266"
  },
  {
    "country": "AU",
    "name": "Ashgrove",
    "lat": "-27.44552",
    "lng": "152.992"
  },
  {
    "country": "AU",
    "name": "Ashfield",
    "lat": "-33.88834",
    "lng": "151.12274"
  },
  {
    "country": "AU",
    "name": "Ashburton",
    "lat": "-37.86667",
    "lng": "145.08333"
  },
  {
    "country": "AU",
    "name": "Ascot Vale",
    "lat": "-37.77988",
    "lng": "144.92276"
  },
  {
    "country": "AU",
    "name": "Ascot",
    "lat": "-36.7",
    "lng": "144.33333"
  },
  {
    "country": "AU",
    "name": "Artarmon",
    "lat": "-33.81667",
    "lng": "151.18333"
  },
  {
    "country": "AU",
    "name": "Armidale",
    "lat": "-30.50123",
    "lng": "151.66553"
  },
  {
    "country": "AU",
    "name": "Armadale",
    "lat": "-37.85544",
    "lng": "145.02052"
  },
  {
    "country": "AU",
    "name": "Arcadia",
    "lat": "-33.61667",
    "lng": "151.03333"
  },
  {
    "country": "AU",
    "name": "Ararat",
    "lat": "-37.28542",
    "lng": "142.92728"
  },
  {
    "country": "AU",
    "name": "Appin",
    "lat": "-34.20347",
    "lng": "150.78644"
  },
  {
    "country": "AU",
    "name": "Apollo Bay",
    "lat": "-38.7594",
    "lng": "143.67219"
  },
  {
    "country": "AU",
    "name": "Annandale",
    "lat": "-33.88333",
    "lng": "151.16667"
  },
  {
    "country": "AU",
    "name": "Anna Bay",
    "lat": "-32.78135",
    "lng": "152.08586"
  },
  {
    "country": "AU",
    "name": "Anglesea",
    "lat": "-38.4073",
    "lng": "144.18587"
  },
  {
    "country": "AU",
    "name": "Andergrove",
    "lat": "-21.08333",
    "lng": "149.18333"
  },
  {
    "country": "AU",
    "name": "Alton Downs",
    "lat": "-23.3",
    "lng": "150.35"
  },
  {
    "country": "AU",
    "name": "Altona",
    "lat": "-37.86964",
    "lng": "144.83036"
  },
  {
    "country": "AU",
    "name": "Alstonville",
    "lat": "-28.84186",
    "lng": "153.44022"
  },
  {
    "country": "AU",
    "name": "Alphington",
    "lat": "-37.78333",
    "lng": "145.03333"
  },
  {
    "country": "AU",
    "name": "Allora",
    "lat": "-28.03484",
    "lng": "151.98058"
  },
  {
    "country": "AU",
    "name": "Allansford",
    "lat": "-38.38639",
    "lng": "142.59431"
  },
  {
    "country": "AU",
    "name": "Alfredton",
    "lat": "-37.56667",
    "lng": "143.81667"
  },
  {
    "country": "AU",
    "name": "Alexandria",
    "lat": "-33.89989",
    "lng": "151.19951"
  },
  {
    "country": "AU",
    "name": "Alexandra",
    "lat": "-37.19132",
    "lng": "145.7112"
  },
  {
    "country": "AU",
    "name": "Aldershot",
    "lat": "-25.46312",
    "lng": "152.66348"
  },
  {
    "country": "AU",
    "name": "Aldavilla",
    "lat": "-31.0818",
    "lng": "152.7679"
  },
  {
    "country": "AU",
    "name": "Albury",
    "lat": "-36.07482",
    "lng": "146.92401"
  },
  {
    "country": "AU",
    "name": "Albion Park",
    "lat": "-34.57132",
    "lng": "150.77568"
  },
  {
    "country": "AU",
    "name": "Albion",
    "lat": "-37.78017",
    "lng": "144.81724"
  },
  {
    "country": "AU",
    "name": "Albany Creek",
    "lat": "-27.35364",
    "lng": "152.96848"
  },
  {
    "country": "AU",
    "name": "Aitkenvale",
    "lat": "-19.30142",
    "lng": "146.77082"
  },
  {
    "country": "AU",
    "name": "Acacia Ridge",
    "lat": "-27.58333",
    "lng": "153.03333"
  },
  {
    "country": "AU",
    "name": "Abermain",
    "lat": "-32.8074",
    "lng": "151.4275"
  },
  {
    "country": "AU",
    "name": "Aberglasslyn",
    "lat": "-32.7",
    "lng": "151.53333"
  },
  {
    "country": "AU",
    "name": "Aberdeen",
    "lat": "-32.16588",
    "lng": "150.89003"
  },
  {
    "country": "AU",
    "name": "Aberdare",
    "lat": "-32.84112",
    "lng": "151.38168"
  },
  {
    "country": "AU",
    "name": "Abbotsford",
    "lat": "-33.84889",
    "lng": "151.12801"
  },
  {
    "country": "AU",
    "name": "Abbotsford",
    "lat": "-37.8",
    "lng": "145"
  },
  {
    "country": "AU",
    "name": "Morpeth",
    "lat": "-32.73333",
    "lng": "151.63333"
  },
  {
    "country": "AU",
    "name": "Lambton",
    "lat": "-32.91667",
    "lng": "151.7"
  },
  {
    "country": "AU",
    "name": "New Lambton",
    "lat": "-32.92838",
    "lng": "151.7085"
  },
  {
    "country": "AU",
    "name": "Mayfield",
    "lat": "-41.3876",
    "lng": "147.13052"
  },
  {
    "country": "AU",
    "name": "Invermay",
    "lat": "-41.42036",
    "lng": "147.13358"
  },
  {
    "country": "AU",
    "name": "Gymea",
    "lat": "-34.03637",
    "lng": "151.08528"
  },
  {
    "country": "AU",
    "name": "Kirrawee",
    "lat": "-34.03831",
    "lng": "151.06903"
  },
  {
    "country": "AU",
    "name": "Loftus",
    "lat": "-34.04467",
    "lng": "151.04646"
  },
  {
    "country": "AU",
    "name": "Woolooware",
    "lat": "-34.04583",
    "lng": "151.14312"
  },
  {
    "country": "AU",
    "name": "Lilli Pilli",
    "lat": "-34.0683",
    "lng": "151.11574"
  },
  {
    "country": "AU",
    "name": "Burraneer",
    "lat": "-34.05625",
    "lng": "151.1381"
  },
  {
    "country": "AU",
    "name": "Bundeena",
    "lat": "-34.08384",
    "lng": "151.15016"
  },
  {
    "country": "AU",
    "name": "Yowie Bay",
    "lat": "-34.05116",
    "lng": "151.10228"
  },
  {
    "country": "AU",
    "name": "Gymea Bay",
    "lat": "-34.05209",
    "lng": "151.08795"
  },
  {
    "country": "AU",
    "name": "Yarrawarrah",
    "lat": "-34.05351",
    "lng": "151.03563"
  },
  {
    "country": "AU",
    "name": "Woronora",
    "lat": "-34.02436",
    "lng": "151.03862"
  },
  {
    "country": "AU",
    "name": "Bangor",
    "lat": "-34.01667",
    "lng": "151.03333"
  },
  {
    "country": "AU",
    "name": "Kareela",
    "lat": "-34.01336",
    "lng": "151.08345"
  },
  {
    "country": "AU",
    "name": "Sylvania",
    "lat": "-34.01242",
    "lng": "151.09718"
  },
  {
    "country": "AU",
    "name": "Sylvania Waters",
    "lat": "-34.01868",
    "lng": "151.1086"
  },
  {
    "country": "AU",
    "name": "Taren Point",
    "lat": "-34.01936",
    "lng": "151.11826"
  },
  {
    "country": "AU",
    "name": "Bonnet Bay",
    "lat": "-34.01023",
    "lng": "151.05253"
  },
  {
    "country": "AU",
    "name": "Oyster Bay",
    "lat": "-34.00407",
    "lng": "151.07588"
  },
  {
    "country": "AU",
    "name": "Grays Point",
    "lat": "-34.05873",
    "lng": "151.08604"
  },
  {
    "country": "AU",
    "name": "Little Bay",
    "lat": "-33.97899",
    "lng": "151.24299"
  },
  {
    "country": "AU",
    "name": "Brighton-Le-Sands",
    "lat": "-33.96009",
    "lng": "151.1511"
  },
  {
    "country": "AU",
    "name": "Monterey",
    "lat": "-33.9725",
    "lng": "151.1481"
  },
  {
    "country": "AU",
    "name": "Ramsgate",
    "lat": "-33.9822",
    "lng": "151.14"
  },
  {
    "country": "AU",
    "name": "Sans Souci",
    "lat": "-33.9899",
    "lng": "151.13334"
  },
  {
    "country": "AU",
    "name": "Blakehurst",
    "lat": "-33.99152",
    "lng": "151.10876"
  },
  {
    "country": "AU",
    "name": "Connells Point",
    "lat": "-33.98827",
    "lng": "151.09094"
  },
  {
    "country": "AU",
    "name": "Illawong",
    "lat": "-34",
    "lng": "151.03333"
  },
  {
    "country": "AU",
    "name": "Lugarno",
    "lat": "-33.98267",
    "lng": "151.04184"
  },
  {
    "country": "AU",
    "name": "Peakhurst",
    "lat": "-33.96288",
    "lng": "151.05161"
  },
  {
    "country": "AU",
    "name": "Padstow",
    "lat": "-33.95687",
    "lng": "151.03191"
  },
  {
    "country": "AU",
    "name": "Riverwood",
    "lat": "-33.94725",
    "lng": "151.04973"
  },
  {
    "country": "AU",
    "name": "Goodwood",
    "lat": "-42.82822",
    "lng": "147.29301"
  },
  {
    "country": "AU",
    "name": "Lutana",
    "lat": "-42.83475",
    "lng": "147.31152"
  },
  {
    "country": "AU",
    "name": "New Town",
    "lat": "-42.85758",
    "lng": "147.30869"
  },
  {
    "country": "AU",
    "name": "Lake Heights",
    "lat": "-34.48433",
    "lng": "150.86649"
  },
  {
    "country": "AU",
    "name": "Warrawong",
    "lat": "-34.485",
    "lng": "150.88833"
  },
  {
    "country": "AU",
    "name": "Sandy Bay",
    "lat": "-42.89449",
    "lng": "147.32439"
  },
  {
    "country": "AU",
    "name": "Tarrawanna",
    "lat": "-34.38152",
    "lng": "150.88799"
  },
  {
    "country": "AU",
    "name": "Fern Hill",
    "lat": "-34.38294",
    "lng": "150.88567"
  },
  {
    "country": "AU",
    "name": "Towradgi",
    "lat": "-34.38667",
    "lng": "150.90278"
  },
  {
    "country": "AU",
    "name": "Fairy Meadow",
    "lat": "-34.39303",
    "lng": "150.89275"
  },
  {
    "country": "AU",
    "name": "Mount Ousley",
    "lat": "-34.40213",
    "lng": "150.88786"
  },
  {
    "country": "AU",
    "name": "Mount Keira",
    "lat": "-34.39678",
    "lng": "150.85268"
  },
  {
    "country": "AU",
    "name": "Gwynneville",
    "lat": "-34.41667",
    "lng": "150.8875"
  },
  {
    "country": "AU",
    "name": "Figtree",
    "lat": "-34.43556",
    "lng": "150.85833"
  },
  {
    "country": "AU",
    "name": "Mangerton",
    "lat": "-34.43667",
    "lng": "150.87167"
  },
  {
    "country": "AU",
    "name": "Mount Saint Thomas",
    "lat": "-34.44333",
    "lng": "150.87222"
  },
  {
    "country": "AU",
    "name": "Palm Cove",
    "lat": "-16.75",
    "lng": "145.66667"
  },
  {
    "country": "AU",
    "name": "Yorkeys Knob",
    "lat": "-16.80278",
    "lng": "145.72083"
  },
  {
    "country": "AU",
    "name": "Norlane",
    "lat": "-38.10139",
    "lng": "144.35417"
  },
  {
    "country": "AU",
    "name": "Hamilton",
    "lat": "-27.43896",
    "lng": "153.06287"
  },
  {
    "country": "AU",
    "name": "Bulimba",
    "lat": "-27.4499",
    "lng": "153.05766"
  },
  {
    "country": "AU",
    "name": "New Farm",
    "lat": "-27.46777",
    "lng": "153.04834"
  },
  {
    "country": "AU",
    "name": "Norman Park",
    "lat": "-27.47916",
    "lng": "153.0625"
  },
  {
    "country": "AU",
    "name": "Hawthorne",
    "lat": "-27.46696",
    "lng": "153.05779"
  },
  {
    "country": "AU",
    "name": "East Brisbane",
    "lat": "-27.48099",
    "lng": "153.04401"
  },
  {
    "country": "AU",
    "name": "South Brisbane",
    "lat": "-27.48034",
    "lng": "153.02049"
  },
  {
    "country": "AU",
    "name": "Maroochydore",
    "lat": "-26.66008",
    "lng": "153.09953"
  },
  {
    "country": "AU",
    "name": "Slade Point",
    "lat": "-21.075",
    "lng": "149.225"
  },
  {
    "country": "AU",
    "name": "Scarborough",
    "lat": "-27.20118",
    "lng": "153.10939"
  },
  {
    "country": "AU",
    "name": "Bellara",
    "lat": "-27.06392",
    "lng": "153.14959"
  },
  {
    "country": "AU",
    "name": "Holloways Beach",
    "lat": "-16.84209",
    "lng": "145.73922"
  },
  {
    "country": "AU",
    "name": "Bonbeach",
    "lat": "-38.06528",
    "lng": "145.12278"
  },
  {
    "country": "AU",
    "name": "McCrae",
    "lat": "-38.34972",
    "lng": "144.92806"
  },
  {
    "country": "AU",
    "name": "Laverton",
    "lat": "-37.86201",
    "lng": "144.76979"
  },
  {
    "country": "AU",
    "name": "North Brighton",
    "lat": "-37.90694",
    "lng": "145.00528"
  },
  {
    "country": "AU",
    "name": "Cheltenham",
    "lat": "-37.96944",
    "lng": "145.04806"
  },
  {
    "country": "AU",
    "name": "Bellevue Hill",
    "lat": "-33.87899",
    "lng": "151.25101"
  },
  {
    "country": "AU",
    "name": "Rose Bay",
    "lat": "-33.86877",
    "lng": "151.2706"
  },
  {
    "country": "AU",
    "name": "Paddington",
    "lat": "-33.88419",
    "lng": "151.23151"
  },
  {
    "country": "AU",
    "name": "Ultimo",
    "lat": "-33.87722",
    "lng": "151.1972"
  },
  {
    "country": "AU",
    "name": "Lilyfield",
    "lat": "-33.87499",
    "lng": "151.1653"
  },
  {
    "country": "AU",
    "name": "Drummoyne",
    "lat": "-33.85237",
    "lng": "151.15491"
  },
  {
    "country": "AU",
    "name": "Greenwich",
    "lat": "-33.83954",
    "lng": "151.183"
  },
  {
    "country": "AU",
    "name": "Hunters Hill",
    "lat": "-33.83432",
    "lng": "151.1459"
  },
  {
    "country": "AU",
    "name": "Longueville",
    "lat": "-33.83285",
    "lng": "151.16531"
  },
  {
    "country": "AU",
    "name": "Crows Nest",
    "lat": "-33.82494",
    "lng": "151.20398"
  },
  {
    "country": "AU",
    "name": "Cammeray",
    "lat": "-33.82132",
    "lng": "151.21609"
  },
  {
    "country": "AU",
    "name": "Northbridge",
    "lat": "-33.81313",
    "lng": "151.21728"
  },
  {
    "country": "AU",
    "name": "Seaforth",
    "lat": "-33.80145",
    "lng": "151.23981"
  },
  {
    "country": "AU",
    "name": "Balgowlah Heights",
    "lat": "-33.80661",
    "lng": "151.26243"
  },
  {
    "country": "AU",
    "name": "Clontarf",
    "lat": "-33.80554",
    "lng": "151.25367"
  },
  {
    "country": "AU",
    "name": "Cremorne",
    "lat": "-33.82679",
    "lng": "151.22633"
  },
  {
    "country": "AU",
    "name": "Neutral Bay",
    "lat": "-33.83784",
    "lng": "151.2175"
  },
  {
    "country": "AU",
    "name": "Point Piper",
    "lat": "-33.86667",
    "lng": "151.25"
  },
  {
    "country": "AU",
    "name": "Darling Point",
    "lat": "-33.87064",
    "lng": "151.23895"
  },
  {
    "country": "AU",
    "name": "Dover Heights",
    "lat": "-33.87083",
    "lng": "151.27917"
  },
  {
    "country": "AU",
    "name": "Randwick",
    "lat": "-33.91439",
    "lng": "151.24895"
  },
  {
    "country": "AU",
    "name": "Clovelly",
    "lat": "-33.91214",
    "lng": "151.25882"
  },
  {
    "country": "AU",
    "name": "Bronte",
    "lat": "-33.90198",
    "lng": "151.26556"
  },
  {
    "country": "AU",
    "name": "Bondi",
    "lat": "-33.89429",
    "lng": "151.26444"
  },
  {
    "country": "AU",
    "name": "Gladesville",
    "lat": "-33.83333",
    "lng": "151.13333"
  },
  {
    "country": "AU",
    "name": "Forestville",
    "lat": "-33.76667",
    "lng": "151.20833"
  },
  {
    "country": "AU",
    "name": "Brookvale",
    "lat": "-33.76108",
    "lng": "151.27446"
  },
  {
    "country": "AU",
    "name": "Curl Curl",
    "lat": "-33.76886",
    "lng": "151.28888"
  },
  {
    "country": "AU",
    "name": "Dee Why",
    "lat": "-33.7511",
    "lng": "151.28886"
  },
  {
    "country": "AU",
    "name": "Umina Beach",
    "lat": "-33.52314",
    "lng": "151.31325"
  },
  {
    "country": "AU",
    "name": "Blairgowrie",
    "lat": "-38.36131",
    "lng": "144.77955"
  },
  {
    "country": "AU",
    "name": "Flinders",
    "lat": "-34.58333",
    "lng": "150.85516"
  },
  {
    "country": "AU",
    "name": "Airport West",
    "lat": "-37.7247",
    "lng": "144.88126"
  },
  {
    "country": "AU",
    "name": "Niddrie",
    "lat": "-37.7375",
    "lng": "144.89212"
  },
  {
    "country": "AU",
    "name": "Gladstone Park",
    "lat": "-37.68742",
    "lng": "144.88675"
  },
  {
    "country": "AU",
    "name": "Palmerston",
    "lat": "-12.48602",
    "lng": "130.9833"
  },
  {
    "country": "AU",
    "name": "Tom Price",
    "lat": "-22.6939",
    "lng": "117.7931"
  },
  {
    "country": "AU",
    "name": "Airlie Beach",
    "lat": "-20.26751",
    "lng": "148.71471"
  },
  {
    "country": "AU",
    "name": "Hervey Bay",
    "lat": "-25.28762",
    "lng": "152.76936"
  },
  {
    "country": "AU",
    "name": "Yulara",
    "lat": "-25.2406",
    "lng": "130.9889"
  },
  {
    "country": "AU",
    "name": "Moranbah",
    "lat": "-22.00163",
    "lng": "148.04661"
  },
  {
    "country": "AU",
    "name": "Fairfield",
    "lat": "-27.50644",
    "lng": "153.02479"
  },
  {
    "country": "AU",
    "name": "Heyfield",
    "lat": "-37.9813",
    "lng": "146.78559"
  },
  {
    "country": "AU",
    "name": "Sydney Central Business District",
    "lat": "-33.86482",
    "lng": "151.20773"
  },
  {
    "country": "AU",
    "name": "Kaleen",
    "lat": "-35.21814",
    "lng": "149.10516"
  },
  {
    "country": "AU",
    "name": "Karratha",
    "lat": "-20.73765",
    "lng": "116.84629"
  },
  {
    "country": "AU",
    "name": "Biggera Waters",
    "lat": "-27.93239",
    "lng": "153.40021"
  },
  {
    "country": "AU",
    "name": "Enfield",
    "lat": "-34.8526",
    "lng": "138.60255"
  },
  {
    "country": "AU",
    "name": "Hillarys",
    "lat": "-31.80698",
    "lng": "115.74045"
  },
  {
    "country": "AU",
    "name": "Kingsford",
    "lat": "-33.92399",
    "lng": "151.22749"
  },
  {
    "country": "AU",
    "name": "Klemzig",
    "lat": "-34.87928",
    "lng": "138.63562"
  },
  {
    "country": "AU",
    "name": "Maidstone",
    "lat": "-37.78035",
    "lng": "144.87353"
  },
  {
    "country": "AU",
    "name": "Osborne Park",
    "lat": "-31.90066",
    "lng": "115.81083"
  },
  {
    "country": "AU",
    "name": "Shoal Bay",
    "lat": "-32.72231",
    "lng": "152.17498"
  },
  {
    "country": "AU",
    "name": "Seven Mile Beach",
    "lat": "-42.85863",
    "lng": "147.50532"
  },
  {
    "country": "AU",
    "name": "Woollahra",
    "lat": "-33.8878",
    "lng": "151.23681"
  },
  {
    "country": "AU",
    "name": "Agnes Water",
    "lat": "-24.2119",
    "lng": "151.9035"
  },
  {
    "country": "AU",
    "name": "Salamander Bay",
    "lat": "-32.72253",
    "lng": "152.07945"
  },
  {
    "country": "AU",
    "name": "Kooralbyn",
    "lat": "-28.07955",
    "lng": "152.83974"
  },
  {
    "country": "AU",
    "name": "Wolli Creek",
    "lat": "-33.93133",
    "lng": "151.15222"
  },
  {
    "country": "AU",
    "name": "Corlette",
    "lat": "-32.72014",
    "lng": "152.10846"
  },
  {
    "country": "AU",
    "name": "Burswood",
    "lat": "-31.95872",
    "lng": "115.90396"
  },
  {
    "country": "AU",
    "name": "Howrah",
    "lat": "-42.88728",
    "lng": "147.40554"
  },
  {
    "country": "AU",
    "name": "Clifton Beach",
    "lat": "-16.76313",
    "lng": "145.67167"
  },
  {
    "country": "AU",
    "name": "Springfield Lakes",
    "lat": "-27.66757",
    "lng": "152.92488"
  },
  {
    "country": "AU",
    "name": "Attwood",
    "lat": "-37.66955",
    "lng": "144.88675"
  },
  {
    "country": "AU",
    "name": "Alexandra Headland",
    "lat": "-26.67154",
    "lng": "153.10058"
  },
  {
    "country": "AU",
    "name": "North Narrabeen",
    "lat": "-33.70935",
    "lng": "151.29607"
  },
  {
    "country": "AU",
    "name": "Joondalup",
    "lat": "-31.74445",
    "lng": "115.76835"
  },
  {
    "country": "AU",
    "name": "Como",
    "lat": "-31.99119",
    "lng": "115.86336"
  },
  {
    "country": "AU",
    "name": "Arncliffe",
    "lat": "-33.93627",
    "lng": "151.14819"
  },
  {
    "country": "AU",
    "name": "Middlemount",
    "lat": "-22.81226",
    "lng": "148.69926"
  },
  {
    "country": "AU",
    "name": "East Lismore",
    "lat": "-28.82591",
    "lng": "153.2888"
  },
  {
    "country": "AU",
    "name": "Mindarie",
    "lat": "-31.68932",
    "lng": "115.70698"
  },
  {
    "country": "AU",
    "name": "Clarkson",
    "lat": "-31.68282",
    "lng": "115.7247"
  },
  {
    "country": "AU",
    "name": "Kinross",
    "lat": "-31.71868",
    "lng": "115.73839"
  },
  {
    "country": "AU",
    "name": "Currambine",
    "lat": "-31.73306",
    "lng": "115.74766"
  },
  {
    "country": "AU",
    "name": "Iluka",
    "lat": "-31.73554",
    "lng": "115.73058"
  },
  {
    "country": "AU",
    "name": "Heathridge",
    "lat": "-31.76244",
    "lng": "115.75895"
  },
  {
    "country": "AU",
    "name": "Paradise Point",
    "lat": "-27.88663",
    "lng": "153.3933"
  },
  {
    "country": "AU",
    "name": "Girraween",
    "lat": "-33.799",
    "lng": "150.943"
  },
  {
    "country": "AU",
    "name": "Freshwater",
    "lat": "-33.77867",
    "lng": "151.28569"
  },
  {
    "country": "AU",
    "name": "Tieri",
    "lat": "-23.03829",
    "lng": "148.34463"
  },
  {
    "country": "AU",
    "name": "Mount Buller",
    "lat": "-37.14595",
    "lng": "146.43694"
  },
  {
    "country": "AU",
    "name": "Kingsbury",
    "lat": "-37.71406",
    "lng": "145.03509"
  },
  {
    "country": "AU",
    "name": "Herston",
    "lat": "-27.44453",
    "lng": "153.01852"
  },
  {
    "country": "AU",
    "name": "Kelvin Grove",
    "lat": "-27.44819",
    "lng": "153.01337"
  },
  {
    "country": "AU",
    "name": "Bowen Hills",
    "lat": "-27.44369",
    "lng": "153.03728"
  },
  {
    "country": "AU",
    "name": "Taringa",
    "lat": "-27.49061",
    "lng": "152.97861"
  },
  {
    "country": "AU",
    "name": "Chapel Hill",
    "lat": "-27.50264",
    "lng": "152.95012"
  },
  {
    "country": "AU",
    "name": "Kenmore",
    "lat": "-27.50759",
    "lng": "152.93879"
  },
  {
    "country": "AU",
    "name": "Inala",
    "lat": "-27.59715",
    "lng": "152.97432"
  },
  {
    "country": "AU",
    "name": "Mount Lawley",
    "lat": "-31.93439",
    "lng": "115.8716"
  },
  {
    "country": "AU",
    "name": "Main Beach",
    "lat": "-27.97879",
    "lng": "153.4266"
  },
  {
    "country": "AU",
    "name": "Paradise",
    "lat": "-34.87361",
    "lng": "138.66896"
  },
  {
    "country": "AU",
    "name": "Blair Athol",
    "lat": "-34.85889",
    "lng": "138.59656"
  },
  {
    "country": "AU",
    "name": "Athelstone",
    "lat": "-34.87019",
    "lng": "138.6999"
  },
  {
    "country": "AU",
    "name": "Nundah",
    "lat": "-27.40252",
    "lng": "153.06165"
  },
  {
    "country": "AU",
    "name": "Lutwyche",
    "lat": "-27.42275",
    "lng": "153.03354"
  },
  {
    "country": "AU",
    "name": "Wooloowin",
    "lat": "-27.42244",
    "lng": "153.04204"
  },
  {
    "country": "AU",
    "name": "Banyo",
    "lat": "-27.38236",
    "lng": "153.07903"
  },
  {
    "country": "AU",
    "name": "Nudgee",
    "lat": "-27.3691",
    "lng": "153.0847"
  },
  {
    "country": "AU",
    "name": "Zillmere",
    "lat": "-27.35591",
    "lng": "153.04453"
  },
  {
    "country": "AU",
    "name": "Taigum",
    "lat": "-27.34265",
    "lng": "153.04444"
  },
  {
    "country": "AU",
    "name": "Carseldine",
    "lat": "-27.34753",
    "lng": "153.02307"
  },
  {
    "country": "AU",
    "name": "Bracken Ridge",
    "lat": "-27.3171",
    "lng": "153.03097"
  },
  {
    "country": "AU",
    "name": "Brendale",
    "lat": "-27.32114",
    "lng": "152.98393"
  },
  {
    "country": "AU",
    "name": "Kallangur",
    "lat": "-27.25204",
    "lng": "152.99226"
  },
  {
    "country": "AU",
    "name": "Mango Hill",
    "lat": "-27.24349",
    "lng": "153.02384"
  },
  {
    "country": "AU",
    "name": "North Lakes",
    "lat": "-27.22426",
    "lng": "153.02075"
  },
  {
    "country": "AU",
    "name": "West End",
    "lat": "-27.47923",
    "lng": "153.0096"
  },
  {
    "country": "AU",
    "name": "Highgate Hill",
    "lat": "-27.48912",
    "lng": "153.01878"
  },
  {
    "country": "AU",
    "name": "Woolloongabba",
    "lat": "-27.48855",
    "lng": "153.03655"
  },
  {
    "country": "AU",
    "name": "Dutton Park",
    "lat": "-27.49662",
    "lng": "153.02796"
  },
  {
    "country": "AU",
    "name": "Milton",
    "lat": "-27.47039",
    "lng": "153.00312"
  },
  {
    "country": "AU",
    "name": "Auchenflower",
    "lat": "-27.47443",
    "lng": "152.99213"
  },
  {
    "country": "AU",
    "name": "Indooroopilly",
    "lat": "-27.50302",
    "lng": "152.97518"
  },
  {
    "country": "AU",
    "name": "Mount Ommaney",
    "lat": "-27.54609",
    "lng": "152.93219"
  },
  {
    "country": "AU",
    "name": "Macgregor",
    "lat": "-27.5649",
    "lng": "153.0665"
  },
  {
    "country": "AU",
    "name": "Fortitude Valley",
    "lat": "-27.45706",
    "lng": "153.03178"
  },
  {
    "country": "AU",
    "name": "Windsor",
    "lat": "-27.43631",
    "lng": "153.02882"
  },
  {
    "country": "AU",
    "name": "Clayfield",
    "lat": "-27.41894",
    "lng": "153.05818"
  },
  {
    "country": "AU",
    "name": "Chermside",
    "lat": "-27.38472",
    "lng": "153.03062"
  },
  {
    "country": "AU",
    "name": "Ferny Grove",
    "lat": "-27.4008",
    "lng": "152.93475"
  },
  {
    "country": "AU",
    "name": "Keperra",
    "lat": "-27.41376",
    "lng": "152.94703"
  },
  {
    "country": "AU",
    "name": "The Gap",
    "lat": "-27.44187",
    "lng": "152.93861"
  },
  {
    "country": "AU",
    "name": "Paddington",
    "lat": "-27.45939",
    "lng": "152.99509"
  },
  {
    "country": "AU",
    "name": "Vincentia",
    "lat": "-35.06825",
    "lng": "150.6748"
  },
  {
    "country": "AU",
    "name": "Fitzgibbon",
    "lat": "-27.33971",
    "lng": "153.02921"
  },
  {
    "country": "AU",
    "name": "Bridgeman Downs",
    "lat": "-27.35538",
    "lng": "152.99432"
  },
  {
    "country": "AU",
    "name": "Zilzie",
    "lat": "-23.28867",
    "lng": "150.7982"
  },
  {
    "country": "AU",
    "name": "Canada Bay",
    "lat": "-33.86483",
    "lng": "151.11425"
  },
  {
    "country": "AU",
    "name": "Canterbury",
    "lat": "-33.91192",
    "lng": "151.11862"
  },
  {
    "country": "AU",
    "name": "Fairfield West",
    "lat": "-33.8667",
    "lng": "150.917"
  },
  {
    "country": "AU",
    "name": "Willoughby",
    "lat": "-33.80493",
    "lng": "151.1993"
  },
  {
    "country": "AU",
    "name": "Forresters Beach",
    "lat": "-33.407",
    "lng": "151.476"
  },
  {
    "country": "AU",
    "name": "Wongawallan",
    "lat": "-27.87553",
    "lng": "153.22865"
  },
  {
    "country": "AU",
    "name": "Tamborine Mountain",
    "lat": "-27.96954",
    "lng": "153.19937"
  },
  {
    "country": "AU",
    "name": "East Melbourne",
    "lat": "-37.81667",
    "lng": "144.9879"
  },
  {
    "country": "AU",
    "name": "Rainbow Beach",
    "lat": "-25.90432",
    "lng": "153.09174"
  },
  {
    "country": "AU",
    "name": "Peregian Beach",
    "lat": "-26.481",
    "lng": "153.096"
  },
  {
    "country": "AU",
    "name": "Medindie",
    "lat": "-34.896",
    "lng": "138.605"
  },
  {
    "country": "AU",
    "name": "Salisbury East",
    "lat": "-34.79052",
    "lng": "138.6545"
  },
  {
    "country": "AU",
    "name": "Goolwa Beach",
    "lat": "-35.50474",
    "lng": "138.7732"
  },
  {
    "country": "AU",
    "name": "North Ryde",
    "lat": "-33.79677",
    "lng": "151.12436"
  },
  {
    "country": "AU",
    "name": "Stirling",
    "lat": "-31.88343",
    "lng": "115.8099"
  },
  {
    "country": "AU",
    "name": "Parkside",
    "lat": "-34.94512",
    "lng": "138.61304"
  },
  {
    "country": "AU",
    "name": "Caroline Springs",
    "lat": "-37.74124",
    "lng": "144.73631"
  },
  {
    "country": "AU",
    "name": "Hoppers Crossing",
    "lat": "-37.88264",
    "lng": "144.7003"
  },
  {
    "country": "AU",
    "name": "West Melbourne",
    "lat": "-37.81014",
    "lng": "144.95"
  },
  {
    "country": "AU",
    "name": "Rouse Hill",
    "lat": "-33.68207",
    "lng": "150.9154"
  },
  {
    "country": "AU",
    "name": "Logan City",
    "lat": "-27.63917",
    "lng": "153.10944"
  },
  {
    "country": "AU",
    "name": "Carindale",
    "lat": "-27.50578",
    "lng": "153.10236"
  },
  {
    "country": "AU",
    "name": "Parramatta",
    "lat": "-33.8178",
    "lng": "151.00348"
  },
  {
    "country": "AU",
    "name": "Macquarie",
    "lat": "-35.25126",
    "lng": "149.06363"
  },
  {
    "country": "AU",
    "name": "Ferntree Gully",
    "lat": "-37.88461",
    "lng": "145.29539"
  },
  {
    "country": "AU",
    "name": "Kewarra Beach",
    "lat": "-16.78219",
    "lng": "145.68455"
  },
  {
    "country": "AU",
    "name": "Doonan",
    "lat": "-26.43964",
    "lng": "152.99204"
  },
  {
    "country": "AU",
    "name": "Fullarton",
    "lat": "-34.951",
    "lng": "138.629"
  },
  {
    "country": "AU",
    "name": "Smiths Lake",
    "lat": "-32.38043",
    "lng": "152.50337"
  },
  {
    "country": "AU",
    "name": "Mollymook Beach",
    "lat": "-35.32966",
    "lng": "150.47173"
  },
  {
    "country": "AU",
    "name": "Shell Cove",
    "lat": "-34.58994",
    "lng": "150.86203"
  },
  {
    "country": "AU",
    "name": "Burrill Lake",
    "lat": "-35.38716",
    "lng": "150.44952"
  },
  {
    "country": "AU",
    "name": "Beaconsfield",
    "lat": "-32.06748",
    "lng": "115.76401"
  },
  {
    "country": "AU",
    "name": "Glenning Valley",
    "lat": "-33.35369",
    "lng": "151.42623"
  },
  {
    "country": "AU",
    "name": "Dawesville",
    "lat": "-32.63229",
    "lng": "115.62904"
  },
  {
    "country": "AU",
    "name": "Jabiru",
    "lat": "-12.67049",
    "lng": "132.83604"
  },
  {
    "country": "AU",
    "name": "Macarthur",
    "lat": "-35.40885",
    "lng": "149.12696"
  },
  {
    "country": "AU",
    "name": "Phillip Island",
    "lat": "-38.48349",
    "lng": "145.23102"
  },
  {
    "country": "AU",
    "name": "Springwood",
    "lat": "-27.61183",
    "lng": "153.12899"
  },
  {
    "country": "AU",
    "name": "Adelaide Hills",
    "lat": "-34.91119",
    "lng": "138.70735"
  },
  {
    "country": "AU",
    "name": "Erskine",
    "lat": "-32.55717",
    "lng": "115.70657"
  },
  {
    "country": "AU",
    "name": "Canning Vale",
    "lat": "-32.05799",
    "lng": "115.91814"
  },
  {
    "country": "AU",
    "name": "Varsity Lakes",
    "lat": "-28.0894",
    "lng": "153.4122"
  },
  {
    "country": "AU",
    "name": "Roselands",
    "lat": "-33.93317",
    "lng": "151.0732"
  },
  {
    "country": "AU",
    "name": "Oxenford",
    "lat": "-27.89033",
    "lng": "153.31309"
  },
  {
    "country": "AU",
    "name": "Toormina",
    "lat": "-30.35384",
    "lng": "153.08843"
  },
  {
    "country": "AU",
    "name": "Glenmore Park",
    "lat": "-33.79068",
    "lng": "150.6693"
  },
  {
    "country": "AU",
    "name": "Southbank",
    "lat": "-37.8228",
    "lng": "144.96434"
  },
  {
    "country": "AU",
    "name": "Magnetic Island",
    "lat": "-19.15514",
    "lng": "146.8485"
  },
  {
    "country": "AU",
    "name": "Ascot",
    "lat": "-31.93818",
    "lng": "115.92258"
  },
  {
    "country": "AU",
    "name": "St Kilda East",
    "lat": "-37.86594",
    "lng": "145.00018"
  },
  {
    "country": "AU",
    "name": "Golden Beach",
    "lat": "-26.82177",
    "lng": "153.11972"
  },
  {
    "country": "AU",
    "name": "Sanctuary Point",
    "lat": "-35.10361",
    "lng": "150.62667"
  },
  {
    "country": "AU",
    "name": "Docklands",
    "lat": "-37.8149",
    "lng": "144.95052"
  },
  {
    "country": "AU",
    "name": "Hollywell",
    "lat": "-27.90076",
    "lng": "153.39609"
  },
  {
    "country": "AU",
    "name": "St. Georges Basin",
    "lat": "-35.08986",
    "lng": "150.59801"
  },
  {
    "country": "AU",
    "name": "Shoalhaven Heads",
    "lat": "-34.85086",
    "lng": "150.74512"
  },
  {
    "country": "AU",
    "name": "Mermaid Beach",
    "lat": "-28.04411",
    "lng": "153.43472"
  },
  {
    "country": "AU",
    "name": "Helensvale",
    "lat": "-27.91828",
    "lng": "153.33275"
  },
  {
    "country": "AU",
    "name": "West Gosford",
    "lat": "-33.42578",
    "lng": "151.31701"
  },
  {
    "country": "AU",
    "name": "Suffolk Park",
    "lat": "-28.6881",
    "lng": "153.60977"
  },
  {
    "country": "AU",
    "name": "Mount Annan",
    "lat": "-34.05287",
    "lng": "150.75984"
  },
  {
    "country": "AU",
    "name": "Watanobbi",
    "lat": "-33.26772",
    "lng": "151.42246"
  },
  {
    "country": "AU",
    "name": "Miami",
    "lat": "-28.07173",
    "lng": "153.44158"
  },
  {
    "country": "AU",
    "name": "Shoalwater",
    "lat": "-32.29088",
    "lng": "115.71101"
  },
  {
    "country": "AU",
    "name": "Melton West",
    "lat": "-37.67852",
    "lng": "144.56883"
  },
  {
    "country": "AU",
    "name": "Brookfield",
    "lat": "-37.7008",
    "lng": "144.56025"
  },
  {
    "country": "AU",
    "name": "Kurunjang",
    "lat": "-37.67587",
    "lng": "144.5969"
  },
  {
    "country": "AU",
    "name": "Ashwood",
    "lat": "-37.86659",
    "lng": "145.10553"
  },
  {
    "country": "AU",
    "name": "Elwood",
    "lat": "-37.88214",
    "lng": "144.98215"
  },
  {
    "country": "AU",
    "name": "Burwood",
    "lat": "-37.84978",
    "lng": "145.11901"
  },
  {
    "country": "AU",
    "name": "Box Hill South",
    "lat": "-37.83236",
    "lng": "145.12098"
  },
  {
    "country": "AU",
    "name": "Blackburn",
    "lat": "-37.81901",
    "lng": "145.15326"
  },
  {
    "country": "AU",
    "name": "Canterbury",
    "lat": "-37.8247",
    "lng": "145.08476"
  },
  {
    "country": "AU",
    "name": "Hawthorn East",
    "lat": "-37.82484",
    "lng": "145.0464"
  },
  {
    "country": "AU",
    "name": "Kew East",
    "lat": "-37.79758",
    "lng": "145.05378"
  },
  {
    "country": "AU",
    "name": "Balwyn North",
    "lat": "-37.79086",
    "lng": "145.09386"
  },
  {
    "country": "AU",
    "name": "Mont Albert North",
    "lat": "-37.80043",
    "lng": "145.10828"
  },
  {
    "country": "AU",
    "name": "Box Hill North",
    "lat": "-37.80266",
    "lng": "145.12656"
  },
  {
    "country": "AU",
    "name": "Blackburn North",
    "lat": "-37.80931",
    "lng": "145.1518"
  },
  {
    "country": "AU",
    "name": "Blackburn South",
    "lat": "-37.83975",
    "lng": "145.15549"
  },
  {
    "country": "AU",
    "name": "Chadstone",
    "lat": "-37.88766",
    "lng": "145.09519"
  },
  {
    "country": "AU",
    "name": "Malvern East",
    "lat": "-37.87397",
    "lng": "145.04253"
  },
  {
    "country": "AU",
    "name": "Oakleigh South",
    "lat": "-37.92416",
    "lng": "145.09146"
  },
  {
    "country": "AU",
    "name": "Caulfield South",
    "lat": "-37.89562",
    "lng": "145.02597"
  },
  {
    "country": "AU",
    "name": "Brighton East",
    "lat": "-37.90232",
    "lng": "145.01734"
  },
  {
    "country": "AU",
    "name": "Hampton East",
    "lat": "-37.93695",
    "lng": "145.02863"
  },
  {
    "country": "AU",
    "name": "Black Rock",
    "lat": "-37.97357",
    "lng": "145.01636"
  },
  {
    "country": "AU",
    "name": "Aspendale Gardens",
    "lat": "-38.02277",
    "lng": "145.11798"
  },
  {
    "country": "AU",
    "name": "Booval",
    "lat": "-27.61328",
    "lng": "152.78944"
  },
  {
    "country": "AU",
    "name": "North Booval",
    "lat": "-27.60392",
    "lng": "152.79485"
  },
  {
    "country": "AU",
    "name": "North Ipswich",
    "lat": "-27.60286",
    "lng": "152.76146"
  },
  {
    "country": "AU",
    "name": "Brassall",
    "lat": "-27.59753",
    "lng": "152.74755"
  },
  {
    "country": "AU",
    "name": "Silkstone",
    "lat": "-27.62126",
    "lng": "152.78768"
  },
  {
    "country": "AU",
    "name": "Eastern Heights",
    "lat": "-27.62849",
    "lng": "152.77828"
  },
  {
    "country": "AU",
    "name": "Raceview",
    "lat": "-27.63472",
    "lng": "152.77519"
  },
  {
    "country": "AU",
    "name": "Flinders View",
    "lat": "-27.65046",
    "lng": "152.77451"
  },
  {
    "country": "AU",
    "name": "Deebing Heights",
    "lat": "-27.66719",
    "lng": "152.74867"
  },
  {
    "country": "AU",
    "name": "Yamanto",
    "lat": "-27.66027",
    "lng": "152.73863"
  },
  {
    "country": "AU",
    "name": "Redbank Plains",
    "lat": "-27.64613",
    "lng": "152.85965"
  },
  {
    "country": "AU",
    "name": "Collingwood Park",
    "lat": "-27.61282",
    "lng": "152.86008"
  },
  {
    "country": "AU",
    "name": "Clontarf",
    "lat": "-27.25341",
    "lng": "153.07835"
  },
  {
    "country": "AU",
    "name": "Woody Point",
    "lat": "-27.25608",
    "lng": "153.10427"
  },
  {
    "country": "AU",
    "name": "Kippa-Ring",
    "lat": "-27.22586",
    "lng": "153.0835"
  },
  {
    "country": "AU",
    "name": "Newport",
    "lat": "-27.20731",
    "lng": "153.10135"
  },
  {
    "country": "AU",
    "name": "Rothwell",
    "lat": "-27.21433",
    "lng": "153.04676"
  },
  {
    "country": "AU",
    "name": "Kurwongbah",
    "lat": "-27.2325",
    "lng": "152.97621"
  },
  {
    "country": "AU",
    "name": "Labrador",
    "lat": "-27.94402",
    "lng": "153.39815"
  },
  {
    "country": "AU",
    "name": "Ballarat Central",
    "lat": "-37.56206",
    "lng": "143.85082"
  },
  {
    "country": "AU",
    "name": "Golden Point",
    "lat": "-37.57493",
    "lng": "143.8687"
  },
  {
    "country": "AU",
    "name": "Delacombe",
    "lat": "-37.58911",
    "lng": "143.81472"
  },
  {
    "country": "AU",
    "name": "Mount Helen",
    "lat": "-37.62463",
    "lng": "143.8789"
  },
  {
    "country": "AU",
    "name": "St Albans",
    "lat": "-37.74496",
    "lng": "144.80049"
  },
  {
    "country": "AU",
    "name": "Rozelle",
    "lat": "-33.86141",
    "lng": "151.1705"
  },
  {
    "country": "AU",
    "name": "St Leonards",
    "lat": "-33.82344",
    "lng": "151.19836"
  },
  {
    "country": "AU",
    "name": "Mount Coolum",
    "lat": "-26.56581",
    "lng": "153.09139"
  },
  {
    "country": "AU",
    "name": "St Kilda West",
    "lat": "-37.85988",
    "lng": "144.97108"
  },
  {
    "country": "AU",
    "name": "Eleebana",
    "lat": "-32.9896",
    "lng": "151.63642"
  },
  {
    "country": "AU",
    "name": "Summer Hill",
    "lat": "-33.89146",
    "lng": "151.13825"
  },
  {
    "country": "AU",
    "name": "The Entrance North",
    "lat": "-33.33573",
    "lng": "151.50335"
  },
  {
    "country": "AU",
    "name": "Caravonica",
    "lat": "-16.87063",
    "lng": "145.68099"
  },
  {
    "country": "AU",
    "name": "Churchill",
    "lat": "-38.30776",
    "lng": "146.41367"
  },
  {
    "country": "AU",
    "name": "Basin View",
    "lat": "-35.08833",
    "lng": "150.55534"
  },
  {
    "country": "AU",
    "name": "Alligator Creek",
    "lat": "-19.39176",
    "lng": "146.93784"
  },
  {
    "country": "AU",
    "name": "Bogangar",
    "lat": "-28.32944",
    "lng": "153.5686"
  },
  {
    "country": "AU",
    "name": "Bohle Plains",
    "lat": "-19.31365",
    "lng": "146.69186"
  },
  {
    "country": "AU",
    "name": "Bonny Hills",
    "lat": "-31.59061",
    "lng": "152.83908"
  },
  {
    "country": "AU",
    "name": "Booral",
    "lat": "-25.36048",
    "lng": "152.9081"
  },
  {
    "country": "AU",
    "name": "Burrum Heads",
    "lat": "-25.18457",
    "lng": "152.61263"
  },
  {
    "country": "AU",
    "name": "Bushland Beach",
    "lat": "-19.19134",
    "lng": "146.67682"
  },
  {
    "country": "AU",
    "name": "Callala Bay",
    "lat": "-34.99668",
    "lng": "150.72281"
  },
  {
    "country": "AU",
    "name": "Cooloola Cove",
    "lat": "-25.9864",
    "lng": "152.99355"
  },
  {
    "country": "AU",
    "name": "Craiglie",
    "lat": "-16.53789",
    "lng": "145.46963"
  },
  {
    "country": "AU",
    "name": "Craignish",
    "lat": "-25.28258",
    "lng": "152.72429"
  },
  {
    "country": "AU",
    "name": "Highfields",
    "lat": "-27.46343",
    "lng": "151.95386"
  },
  {
    "country": "AU",
    "name": "Deeragun",
    "lat": "-19.24741",
    "lng": "146.6757"
  },
  {
    "country": "AU",
    "name": "Dodges Ferry",
    "lat": "-42.85315",
    "lng": "147.62263"
  },
  {
    "country": "AU",
    "name": "Dundowran Beach",
    "lat": "-25.26934",
    "lng": "152.76232"
  },
  {
    "country": "AU",
    "name": "Emerald Beach",
    "lat": "-30.16388",
    "lng": "153.1819"
  },
  {
    "country": "AU",
    "name": "Estella",
    "lat": "-35.07254",
    "lng": "147.35748"
  },
  {
    "country": "AU",
    "name": "Gagebrook",
    "lat": "-42.7477",
    "lng": "147.26984"
  },
  {
    "country": "AU",
    "name": "Galiwinku",
    "lat": "-12.02811",
    "lng": "135.56486"
  },
  {
    "country": "AU",
    "name": "Grasmere",
    "lat": "-34.05392",
    "lng": "150.66602"
  },
  {
    "country": "AU",
    "name": "Hope Vale",
    "lat": "-15.29561",
    "lng": "145.11125"
  },
  {
    "country": "AU",
    "name": "Innes Park",
    "lat": "-24.86833",
    "lng": "152.47992"
  },
  {
    "country": "AU",
    "name": "Jacobs Well",
    "lat": "-27.77992",
    "lng": "153.36153"
  },
  {
    "country": "AU",
    "name": "Jensen",
    "lat": "-19.2457",
    "lng": "146.65289"
  },
  {
    "country": "AU",
    "name": "Karalee",
    "lat": "-27.56485",
    "lng": "152.82446"
  },
  {
    "country": "AU",
    "name": "Karana Downs",
    "lat": "-27.54857",
    "lng": "152.80728"
  },
  {
    "country": "AU",
    "name": "Launching Place",
    "lat": "-37.78058",
    "lng": "145.56834"
  },
  {
    "country": "AU",
    "name": "Long Beach",
    "lat": "-35.70833",
    "lng": "150.24483"
  },
  {
    "country": "AU",
    "name": "Marcoola",
    "lat": "-26.5845",
    "lng": "153.09465"
  },
  {
    "country": "AU",
    "name": "Maslin Beach",
    "lat": "-35.22595",
    "lng": "138.47984"
  },
  {
    "country": "AU",
    "name": "McGraths Hill",
    "lat": "-33.61551",
    "lng": "150.83372"
  },
  {
    "country": "AU",
    "name": "Old Erowal Bay",
    "lat": "-35.0846",
    "lng": "150.64568"
  },
  {
    "country": "AU",
    "name": "Tannum Sands",
    "lat": "-23.94749",
    "lng": "151.36749"
  },
  {
    "country": "AU",
    "name": "River Heads",
    "lat": "-25.41551",
    "lng": "152.91315"
  },
  {
    "country": "AU",
    "name": "Sandy Beach",
    "lat": "-30.14681",
    "lng": "153.19238"
  },
  {
    "country": "AU",
    "name": "Silverdale",
    "lat": "-33.9152",
    "lng": "150.6096"
  },
  {
    "country": "AU",
    "name": "Sippy Downs",
    "lat": "-26.71793",
    "lng": "153.05475"
  },
  {
    "country": "AU",
    "name": "Saint Andrews Beach",
    "lat": "-38.4141",
    "lng": "144.82436"
  },
  {
    "country": "AU",
    "name": "Tura Beach",
    "lat": "-36.86358",
    "lng": "149.93027"
  },
  {
    "country": "AU",
    "name": "Turners Beach",
    "lat": "-41.1606",
    "lng": "146.23193"
  },
  {
    "country": "AU",
    "name": "Waterview Heights",
    "lat": "-29.69775",
    "lng": "152.83922"
  },
  {
    "country": "AU",
    "name": "Withcott",
    "lat": "-27.55408",
    "lng": "152.02432"
  },
  {
    "country": "AU",
    "name": "Wongaling Beach",
    "lat": "-17.91327",
    "lng": "146.09611"
  },
  {
    "country": "AU",
    "name": "Yaroomba",
    "lat": "-26.55126",
    "lng": "153.09701"
  },
  {
    "country": "AU",
    "name": "Murarrie",
    "lat": "-27.46289",
    "lng": "153.09809"
  },
  {
    "country": "AU",
    "name": "Sorrento",
    "lat": "-31.82533",
    "lng": "115.75248"
  },
  {
    "country": "AU",
    "name": "North Perth",
    "lat": "-31.92724",
    "lng": "115.85276"
  },
  {
    "country": "AU",
    "name": "West Perth",
    "lat": "-31.94896",
    "lng": "115.84199"
  },
  {
    "country": "AU",
    "name": "Northbridge",
    "lat": "-31.94784",
    "lng": "115.85881"
  },
  {
    "country": "AU",
    "name": "Altona North",
    "lat": "-37.83487",
    "lng": "144.84735"
  },
  {
    "country": "AU",
    "name": "Balcatta",
    "lat": "-31.87501",
    "lng": "115.82839"
  },
  {
    "country": "AU",
    "name": "Belmont",
    "lat": "-31.9435",
    "lng": "115.9255"
  },
  {
    "country": "AU",
    "name": "North Parramatta",
    "lat": "-33.79351",
    "lng": "151.00124"
  },
  {
    "country": "AU",
    "name": "Chain Valley Bay",
    "lat": "-33.17241",
    "lng": "151.57143"
  },
  {
    "country": "AU",
    "name": "Cherbourg",
    "lat": "-26.29191",
    "lng": "151.95213"
  },
  {
    "country": "AU",
    "name": "Coleambally",
    "lat": "-34.80388",
    "lng": "145.88036"
  },
  {
    "country": "AU",
    "name": "Bateau Bay",
    "lat": "-33.38334",
    "lng": "151.46671"
  },
  {
    "country": "AU",
    "name": "Alice River",
    "lat": "-19.33437",
    "lng": "146.61391"
  },
  {
    "country": "AU",
    "name": "Bonnells Bay",
    "lat": "-33.10973",
    "lng": "151.53226"
  },
  {
    "country": "AU",
    "name": "Bouldercombe",
    "lat": "-23.57054",
    "lng": "150.46951"
  },
  {
    "country": "AU",
    "name": "Bowen Mountain",
    "lat": "-33.57192",
    "lng": "150.62563"
  },
  {
    "country": "AU",
    "name": "Buronga",
    "lat": "-34.1707",
    "lng": "142.1735"
  },
  {
    "country": "AU",
    "name": "Cooran",
    "lat": "-26.33689",
    "lng": "152.82246"
  },
  {
    "country": "AU",
    "name": "Dalmeny",
    "lat": "-36.16608",
    "lng": "150.12912"
  },
  {
    "country": "AU",
    "name": "Doomadgee",
    "lat": "-17.9435",
    "lng": "138.82719"
  },
  {
    "country": "AU",
    "name": "Dysart",
    "lat": "-22.58825",
    "lng": "148.34924"
  },
  {
    "country": "AU",
    "name": "Ellalong",
    "lat": "-32.91507",
    "lng": "151.31161"
  },
  {
    "country": "AU",
    "name": "Fingal Bay",
    "lat": "-32.74969",
    "lng": "152.17104"
  },
  {
    "country": "AU",
    "name": "Freemans Reach",
    "lat": "-33.55794",
    "lng": "150.79553"
  },
  {
    "country": "AU",
    "name": "Gelorup",
    "lat": "-33.42425",
    "lng": "115.64094"
  },
  {
    "country": "AU",
    "name": "Gillieston Heights",
    "lat": "-32.76164",
    "lng": "151.52863"
  },
  {
    "country": "AU",
    "name": "Glossodia",
    "lat": "-33.53618",
    "lng": "150.7739"
  },
  {
    "country": "AU",
    "name": "Gulmarrad",
    "lat": "-29.487",
    "lng": "153.23341"
  },
  {
    "country": "AU",
    "name": "Gwandalan",
    "lat": "-33.13538",
    "lng": "151.58285"
  },
  {
    "country": "AU",
    "name": "Mount Low",
    "lat": "-19.23209",
    "lng": "146.66951"
  },
  {
    "country": "AU",
    "name": "Hope Island",
    "lat": "-27.87036",
    "lng": "153.35164"
  },
  {
    "country": "AU",
    "name": "Howard Springs",
    "lat": "-12.49576",
    "lng": "131.04446"
  },
  {
    "country": "AU",
    "name": "Indented Head",
    "lat": "-38.14305",
    "lng": "144.71343"
  },
  {
    "country": "AU",
    "name": "Lake Cathie",
    "lat": "-31.55183",
    "lng": "152.85465"
  },
  {
    "country": "AU",
    "name": "Lake Munmorah",
    "lat": "-33.19716",
    "lng": "151.5824"
  },
  {
    "country": "AU",
    "name": "Leinster",
    "lat": "-27.92028",
    "lng": "120.6967"
  },
  {
    "country": "AU",
    "name": "Lemon Tree Passage",
    "lat": "-32.73047",
    "lng": "152.03859"
  },
  {
    "country": "AU",
    "name": "Lennox Head",
    "lat": "-28.79131",
    "lng": "153.59201"
  },
  {
    "country": "AU",
    "name": "Leschenault",
    "lat": "-33.24519",
    "lng": "115.7251"
  },
  {
    "country": "AU",
    "name": "Little Grove",
    "lat": "-35.06803",
    "lng": "117.87197"
  },
  {
    "country": "AU",
    "name": "Londonderry",
    "lat": "-33.64656",
    "lng": "150.73515"
  },
  {
    "country": "AU",
    "name": "Malua Bay",
    "lat": "-35.79382",
    "lng": "150.22833"
  },
  {
    "country": "AU",
    "name": "Mannering Park",
    "lat": "-33.1581",
    "lng": "151.53477"
  },
  {
    "country": "AU",
    "name": "Macmasters Beach",
    "lat": "-33.49663",
    "lng": "151.42215"
  },
  {
    "country": "AU",
    "name": "Milingimbi",
    "lat": "-12.10188",
    "lng": "134.91901"
  },
  {
    "country": "AU",
    "name": "Mudjimba",
    "lat": "-26.61497",
    "lng": "153.0989"
  },
  {
    "country": "AU",
    "name": "Nathalia",
    "lat": "-36.05772",
    "lng": "145.20406"
  },
  {
    "country": "AU",
    "name": "Nelly Bay",
    "lat": "-19.15775",
    "lng": "146.84977"
  },
  {
    "country": "AU",
    "name": "Ngukurr",
    "lat": "-14.73081",
    "lng": "134.73102"
  },
  {
    "country": "AU",
    "name": "Ningi",
    "lat": "-27.06108",
    "lng": "153.07883"
  },
  {
    "country": "AU",
    "name": "Ocean Shores",
    "lat": "-28.5093",
    "lng": "153.5376"
  },
  {
    "country": "AU",
    "name": "Sussex Inlet",
    "lat": "-35.15671",
    "lng": "150.58533"
  },
  {
    "country": "AU",
    "name": "Palm Island",
    "lat": "-18.73565",
    "lng": "146.57788"
  },
  {
    "country": "AU",
    "name": "Paraburdoo",
    "lat": "-23.20417",
    "lng": "117.66973"
  },
  {
    "country": "AU",
    "name": "Pottsville Beach",
    "lat": "-28.38853",
    "lng": "153.56564"
  },
  {
    "country": "AU",
    "name": "Robinvale",
    "lat": "-34.58356",
    "lng": "142.77228"
  },
  {
    "country": "AU",
    "name": "Sandstone Point",
    "lat": "-27.08374",
    "lng": "153.13235"
  },
  {
    "country": "AU",
    "name": "Sellicks Beach",
    "lat": "-35.33869",
    "lng": "138.44734"
  },
  {
    "country": "AU",
    "name": "South West Rocks",
    "lat": "-30.88553",
    "lng": "153.04126"
  },
  {
    "country": "AU",
    "name": "Thursday Island",
    "lat": "-10.58257",
    "lng": "142.21949"
  },
  {
    "country": "AU",
    "name": "Warragamba",
    "lat": "-33.89191",
    "lng": "150.60461"
  },
  {
    "country": "AU",
    "name": "Wickham",
    "lat": "-20.67474",
    "lng": "117.13784"
  },
  {
    "country": "AU",
    "name": "East Perth",
    "lat": "-31.95872",
    "lng": "115.87109"
  },
  {
    "country": "AU",
    "name": "Leederville",
    "lat": "-31.93628",
    "lng": "115.8419"
  },
  {
    "country": "AU",
    "name": "Doveton",
    "lat": "-37.99346",
    "lng": "145.23891"
  },
  {
    "country": "AU",
    "name": "Endeavour Hills",
    "lat": "-37.97695",
    "lng": "145.25866"
  },
  {
    "country": "AU",
    "name": "Murray",
    "lat": "-19.31803",
    "lng": "146.79494"
  },
  {
    "country": "AU",
    "name": "Sefton",
    "lat": "-33.88773",
    "lng": "151.01053"
  },
  {
    "country": "AU",
    "name": "Moorebank",
    "lat": "-33.94372",
    "lng": "150.95657"
  },
  {
    "country": "AU",
    "name": "Turrella",
    "lat": "-33.93033",
    "lng": "151.14209"
  },
  {
    "country": "AU",
    "name": "Montello",
    "lat": "-41.05762",
    "lng": "145.89626"
  },
  {
    "country": "AU",
    "name": "Thurgoona",
    "lat": "-36.03626",
    "lng": "146.99609"
  },
  {
    "country": "AU",
    "name": "Calala",
    "lat": "-31.17356",
    "lng": "150.98059"
  },
  {
    "country": "AU",
    "name": "Acacia Gardens",
    "lat": "-33.73159",
    "lng": "150.91636"
  },
  {
    "country": "AU",
    "name": "Annangrove",
    "lat": "-33.65758",
    "lng": "150.94755"
  },
  {
    "country": "AU",
    "name": "Glenfield Park",
    "lat": "-35.13725",
    "lng": "147.33285"
  },
  {
    "country": "AU",
    "name": "Adamstown Heights",
    "lat": "-32.94906",
    "lng": "151.71009"
  },
  {
    "country": "AU",
    "name": "Alfords Point",
    "lat": "-33.98744",
    "lng": "151.02526"
  },
  {
    "country": "AU",
    "name": "Argenton",
    "lat": "-32.93505",
    "lng": "151.63064"
  },
  {
    "country": "AU",
    "name": "Surrey Downs",
    "lat": "-34.79951",
    "lng": "138.71154"
  },
  {
    "country": "AU",
    "name": "Myrtle Bank",
    "lat": "-34.96057",
    "lng": "138.63377"
  },
  {
    "country": "AU",
    "name": "Ashbury",
    "lat": "-33.89785",
    "lng": "151.1196"
  },
  {
    "country": "AU",
    "name": "Spalding",
    "lat": "-28.73525",
    "lng": "114.63651"
  },
  {
    "country": "AU",
    "name": "Nailsworth",
    "lat": "-34.88437",
    "lng": "138.60619"
  },
  {
    "country": "AU",
    "name": "Strathalbyn",
    "lat": "-28.75168",
    "lng": "114.64576"
  },
  {
    "country": "AU",
    "name": "Holt",
    "lat": "-35.22441",
    "lng": "149.01188"
  },
  {
    "country": "AU",
    "name": "Ross",
    "lat": "-23.74424",
    "lng": "133.90358"
  },
  {
    "country": "AU",
    "name": "Hocking",
    "lat": "-31.77012",
    "lng": "115.81832"
  },
  {
    "country": "AU",
    "name": "Batehaven",
    "lat": "-35.73757",
    "lng": "150.19836"
  },
  {
    "country": "AU",
    "name": "Peterhead",
    "lat": "-34.83118",
    "lng": "138.49892"
  },
  {
    "country": "AU",
    "name": "Tascott",
    "lat": "-33.45017",
    "lng": "151.31375"
  },
  {
    "country": "AU",
    "name": "Shailer Park",
    "lat": "-27.6498",
    "lng": "153.17753"
  },
  {
    "country": "AU",
    "name": "Ashcroft",
    "lat": "-33.91598",
    "lng": "150.89985"
  },
  {
    "country": "AU",
    "name": "Ashmont",
    "lat": "-35.12491",
    "lng": "147.33172"
  },
  {
    "country": "AU",
    "name": "Tennyson Point",
    "lat": "-33.83172",
    "lng": "151.11682"
  },
  {
    "country": "AU",
    "name": "Glenalta",
    "lat": "-35.00792",
    "lng": "138.62592"
  },
  {
    "country": "AU",
    "name": "Blue Haven",
    "lat": "-33.21106",
    "lng": "151.50351"
  },
  {
    "country": "AU",
    "name": "Bonnyrigg Heights",
    "lat": "-33.89117",
    "lng": "150.86994"
  },
  {
    "country": "AU",
    "name": "Tighes Hill",
    "lat": "-32.90732",
    "lng": "151.7509"
  },
  {
    "country": "AU",
    "name": "Bossley Park",
    "lat": "-33.86184",
    "lng": "150.8841"
  },
  {
    "country": "AU",
    "name": "White Gum Valley",
    "lat": "-32.06031",
    "lng": "115.77058"
  },
  {
    "country": "AU",
    "name": "Bullaburra",
    "lat": "-33.72922",
    "lng": "150.41766"
  },
  {
    "country": "AU",
    "name": "Wonthella",
    "lat": "-28.76689",
    "lng": "114.63338"
  },
  {
    "country": "AU",
    "name": "Clarendon Vale",
    "lat": "-42.88988",
    "lng": "147.44368"
  },
  {
    "country": "AU",
    "name": "Woorree",
    "lat": "-28.76677",
    "lng": "114.65806"
  },
  {
    "country": "AU",
    "name": "Kellyville",
    "lat": "-33.71028",
    "lng": "150.95095"
  },
  {
    "country": "AU",
    "name": "Yakamia",
    "lat": "-35.00392",
    "lng": "117.87828"
  },
  {
    "country": "AU",
    "name": "Yalyalup",
    "lat": "-33.67496",
    "lng": "115.41449"
  },
  {
    "country": "AU",
    "name": "Gunbalanya",
    "lat": "-12.32474",
    "lng": "133.05087"
  },
  {
    "country": "AU",
    "name": "Catherine Field",
    "lat": "-34.00439",
    "lng": "150.77253"
  },
  {
    "country": "AU",
    "name": "Cook",
    "lat": "-35.26014",
    "lng": "149.06566"
  },
  {
    "country": "AU",
    "name": "Llandilo",
    "lat": "-33.71286",
    "lng": "150.7465"
  },
  {
    "country": "AU",
    "name": "Tapping",
    "lat": "-31.71947",
    "lng": "115.79559"
  },
  {
    "country": "AU",
    "name": "Seabrook",
    "lat": "-37.88092",
    "lng": "144.75866"
  },
  {
    "country": "AU",
    "name": "Wellesley Islands",
    "lat": "-16.63184",
    "lng": "139.4014"
  },
  {
    "country": "AU",
    "name": "Casuarina",
    "lat": "-28.30042",
    "lng": "153.57064"
  },
  {
    "country": "AU",
    "name": "Canley Vale",
    "lat": "-33.88657",
    "lng": "150.94802"
  },
  {
    "country": "AU",
    "name": "Wadalba",
    "lat": "-33.2723",
    "lng": "151.46487"
  },
  {
    "country": "AU",
    "name": "Daw Park",
    "lat": "-34.98975",
    "lng": "138.58407"
  },
  {
    "country": "AU",
    "name": "Whitsundays",
    "lat": "-20.11943",
    "lng": "148.91325"
  },
  {
    "country": "AU",
    "name": "Denistone East",
    "lat": "-33.796",
    "lng": "151.0974"
  },
  {
    "country": "AU",
    "name": "Cromer",
    "lat": "-33.7312",
    "lng": "151.26788"
  },
  {
    "country": "AU",
    "name": "Bourkelands",
    "lat": "-35.15593",
    "lng": "147.34704"
  },
  {
    "country": "AU",
    "name": "St Helens Park",
    "lat": "-34.10474",
    "lng": "150.81368"
  },
  {
    "country": "AU",
    "name": "St Huberts Island",
    "lat": "-33.49562",
    "lng": "151.34616"
  },
  {
    "country": "AU",
    "name": "St Ives Chase",
    "lat": "-33.70381",
    "lng": "151.1646"
  },
  {
    "country": "AU",
    "name": "Winmalee",
    "lat": "-33.67847",
    "lng": "150.61213"
  },
  {
    "country": "AU",
    "name": "Blackalls Park",
    "lat": "-32.99893",
    "lng": "151.58018"
  },
  {
    "country": "AU",
    "name": "Horsley",
    "lat": "-34.48763",
    "lng": "150.77799"
  },
  {
    "country": "AU",
    "name": "East Killara",
    "lat": "-33.75535",
    "lng": "151.18154"
  },
  {
    "country": "AU",
    "name": "East Kurrajong",
    "lat": "-33.5055",
    "lng": "150.79427"
  },
  {
    "country": "AU",
    "name": "Erskine Park",
    "lat": "-33.81301",
    "lng": "150.79773"
  },
  {
    "country": "AU",
    "name": "Sydenham",
    "lat": "-33.91669",
    "lng": "151.16798"
  },
  {
    "country": "AU",
    "name": "Oakdowns",
    "lat": "-42.90178",
    "lng": "147.45595"
  },
  {
    "country": "AU",
    "name": "Craigmore",
    "lat": "-34.70064",
    "lng": "138.70956"
  },
  {
    "country": "AU",
    "name": "Bow Bowing",
    "lat": "-34.01655",
    "lng": "150.8403"
  },
  {
    "country": "AU",
    "name": "Berrimah",
    "lat": "-12.43507",
    "lng": "130.92606"
  },
  {
    "country": "AU",
    "name": "Anula",
    "lat": "-12.39125",
    "lng": "130.89047"
  },
  {
    "country": "AU",
    "name": "Breakfast Point",
    "lat": "-33.84286",
    "lng": "151.11072"
  },
  {
    "country": "AU",
    "name": "Frenchs Forest",
    "lat": "-33.74821",
    "lng": "151.22322"
  },
  {
    "country": "AU",
    "name": "Larapinta",
    "lat": "-23.69303",
    "lng": "133.83137"
  },
  {
    "country": "AU",
    "name": "Girards Hill",
    "lat": "-28.81693",
    "lng": "153.27786"
  },
  {
    "country": "AU",
    "name": "Wanguri",
    "lat": "-12.37129",
    "lng": "130.88815"
  },
  {
    "country": "AU",
    "name": "Moulden",
    "lat": "-12.50559",
    "lng": "130.97313"
  },
  {
    "country": "AU",
    "name": "Idalia",
    "lat": "-19.30682",
    "lng": "146.81389"
  },
  {
    "country": "AU",
    "name": "Googong",
    "lat": "-35.43873",
    "lng": "149.2131"
  },
  {
    "country": "AU",
    "name": "Torrens Park",
    "lat": "-34.97607",
    "lng": "138.61034"
  },
  {
    "country": "AU",
    "name": "Stretton",
    "lat": "-27.62205",
    "lng": "153.06609"
  },
  {
    "country": "AU",
    "name": "Grose Vale",
    "lat": "-33.58331",
    "lng": "150.6744"
  },
  {
    "country": "AU",
    "name": "Harrington Park",
    "lat": "-34.02405",
    "lng": "150.73501"
  },
  {
    "country": "AU",
    "name": "Tiwi",
    "lat": "-12.35876",
    "lng": "130.878"
  },
  {
    "country": "AU",
    "name": "Allenstown",
    "lat": "-23.39403",
    "lng": "150.50393"
  },
  {
    "country": "AU",
    "name": "Cumberland Park",
    "lat": "-34.97204",
    "lng": "138.5867"
  },
  {
    "country": "AU",
    "name": "Busby",
    "lat": "-33.91124",
    "lng": "150.88068"
  },
  {
    "country": "AU",
    "name": "Abbey",
    "lat": "-33.66364",
    "lng": "115.25635"
  },
  {
    "country": "AU",
    "name": "Kings Park",
    "lat": "-37.73397",
    "lng": "144.77766"
  },
  {
    "country": "AU",
    "name": "Marks Point",
    "lat": "-33.05645",
    "lng": "151.64955"
  },
  {
    "country": "AU",
    "name": "Geebung",
    "lat": "-27.37246",
    "lng": "153.04712"
  },
  {
    "country": "AU",
    "name": "Metford",
    "lat": "-32.76497",
    "lng": "151.6094"
  },
  {
    "country": "AU",
    "name": "Maryland",
    "lat": "-32.87888",
    "lng": "151.66143"
  },
  {
    "country": "AU",
    "name": "Taylors Lakes",
    "lat": "-37.69863",
    "lng": "144.78631"
  },
  {
    "country": "AU",
    "name": "Banksia Park",
    "lat": "-34.81015",
    "lng": "138.7357"
  },
  {
    "country": "AU",
    "name": "Kosciuszko National Park",
    "lat": "-36.26436",
    "lng": "148.48179"
  },
  {
    "country": "AU",
    "name": "Rapid Creek",
    "lat": "-12.38042",
    "lng": "130.85919"
  },
  {
    "country": "AU",
    "name": "Gnangara",
    "lat": "-31.77612",
    "lng": "115.86623"
  },
  {
    "country": "AU",
    "name": "Macquarie Park",
    "lat": "-33.78105",
    "lng": "151.12757"
  },
  {
    "country": "AU",
    "name": "Maraylya",
    "lat": "-33.59221",
    "lng": "150.91979"
  },
  {
    "country": "AU",
    "name": "Centenary Heights",
    "lat": "-27.58684",
    "lng": "151.96249"
  },
  {
    "country": "AU",
    "name": "Woodroffe",
    "lat": "-12.50173",
    "lng": "130.98016"
  },
  {
    "country": "AU",
    "name": "Calwell",
    "lat": "-35.44042",
    "lng": "149.10707"
  },
  {
    "country": "AU",
    "name": "Pagewood",
    "lat": "-33.94137",
    "lng": "151.21093"
  },
  {
    "country": "AU",
    "name": "Kuluin",
    "lat": "-26.65779",
    "lng": "153.05608"
  },
  {
    "country": "AU",
    "name": "City",
    "lat": "-35.28125",
    "lng": "149.12927"
  },
  {
    "country": "AU",
    "name": "Farrer",
    "lat": "-35.37673",
    "lng": "149.105"
  },
  {
    "country": "AU",
    "name": "Cherrybrook",
    "lat": "-33.72197",
    "lng": "151.04607"
  },
  {
    "country": "AU",
    "name": "Evanston",
    "lat": "-34.61657",
    "lng": "138.73369"
  },
  {
    "country": "AU",
    "name": "Forde",
    "lat": "-35.16823",
    "lng": "149.14607"
  },
  {
    "country": "AU",
    "name": "Tatton",
    "lat": "-35.1599",
    "lng": "147.35875"
  },
  {
    "country": "AU",
    "name": "Lyneham",
    "lat": "-35.2398",
    "lng": "149.13074"
  },
  {
    "country": "AU",
    "name": "Kensington Park",
    "lat": "-34.92022",
    "lng": "138.6543"
  },
  {
    "country": "AU",
    "name": "Woodcroft",
    "lat": "-35.10236",
    "lng": "138.56292"
  },
  {
    "country": "AU",
    "name": "Menora",
    "lat": "-31.91889",
    "lng": "115.86208"
  },
  {
    "country": "AU",
    "name": "Russell Lea",
    "lat": "-33.85889",
    "lng": "151.14111"
  },
  {
    "country": "AU",
    "name": "Daisy Hill",
    "lat": "-27.63026",
    "lng": "153.15784"
  },
  {
    "country": "AU",
    "name": "Pooraka",
    "lat": "-34.82471",
    "lng": "138.62637"
  },
  {
    "country": "AU",
    "name": "Bokarina",
    "lat": "-26.73843",
    "lng": "153.13049"
  },
  {
    "country": "AU",
    "name": "Chifley",
    "lat": "-33.96696",
    "lng": "151.24221"
  },
  {
    "country": "AU",
    "name": "Ashby",
    "lat": "-31.73255",
    "lng": "115.79768"
  },
  {
    "country": "AU",
    "name": "Naremburn",
    "lat": "-33.81698",
    "lng": "151.20079"
  },
  {
    "country": "AU",
    "name": "Woodvale",
    "lat": "-31.78928",
    "lng": "115.79676"
  },
  {
    "country": "AU",
    "name": "Plumpton",
    "lat": "-33.75184",
    "lng": "150.83686"
  },
  {
    "country": "AU",
    "name": "Bellfield",
    "lat": "-37.75309",
    "lng": "145.03848"
  },
  {
    "country": "AU",
    "name": "North Rocks",
    "lat": "-33.77223",
    "lng": "151.01718"
  },
  {
    "country": "AU",
    "name": "Roxburgh Park",
    "lat": "-37.62581",
    "lng": "144.92555"
  },
  {
    "country": "AU",
    "name": "Evandale",
    "lat": "-34.90552",
    "lng": "138.63542"
  },
  {
    "country": "AU",
    "name": "Old Guildford",
    "lat": "-33.86429",
    "lng": "150.98395"
  },
  {
    "country": "AU",
    "name": "Orangeville",
    "lat": "-34.03108",
    "lng": "150.60179"
  },
  {
    "country": "AU",
    "name": "Ourimbah",
    "lat": "-33.31424",
    "lng": "151.33031"
  },
  {
    "country": "AU",
    "name": "Underwood",
    "lat": "-27.60885",
    "lng": "153.1113"
  },
  {
    "country": "AU",
    "name": "Mitchell Park",
    "lat": "-35.01031",
    "lng": "138.56266"
  },
  {
    "country": "AU",
    "name": "Waratah West",
    "lat": "-32.90003",
    "lng": "151.7117"
  },
  {
    "country": "AU",
    "name": "Jamboree Heights",
    "lat": "-27.55634",
    "lng": "152.93402"
  },
  {
    "country": "AU",
    "name": "Eumemmerring",
    "lat": "-37.9978",
    "lng": "145.24821"
  },
  {
    "country": "AU",
    "name": "Prairiewood",
    "lat": "-33.86325",
    "lng": "150.90521"
  },
  {
    "country": "AU",
    "name": "Prestons",
    "lat": "-33.94185",
    "lng": "150.8717"
  },
  {
    "country": "AU",
    "name": "Wurrumiyanga",
    "lat": "-11.76082",
    "lng": "130.62555"
  },
  {
    "country": "AU",
    "name": "Razorback",
    "lat": "-34.15237",
    "lng": "150.65308"
  },
  {
    "country": "AU",
    "name": "Netley",
    "lat": "-34.94887",
    "lng": "138.54983"
  },
  {
    "country": "AU",
    "name": "Reedy Creek",
    "lat": "-28.11243",
    "lng": "153.39638"
  },
  {
    "country": "AU",
    "name": "Wamboin",
    "lat": "-35.25073",
    "lng": "149.33284"
  },
  {
    "country": "AU",
    "name": "Voyager Point",
    "lat": "-33.95871",
    "lng": "150.97417"
  },
  {
    "country": "AU",
    "name": "Warwick Farm",
    "lat": "-33.91291",
    "lng": "150.93701"
  },
  {
    "country": "AU",
    "name": "Warriewood",
    "lat": "-33.68857",
    "lng": "151.29534"
  },
  {
    "country": "AU",
    "name": "Russell Vale",
    "lat": "-34.35542",
    "lng": "150.89434"
  },
  {
    "country": "AU",
    "name": "Moil",
    "lat": "-12.3885",
    "lng": "130.88088"
  },
  {
    "country": "AU",
    "name": "Warilla",
    "lat": "-34.55185",
    "lng": "150.85831"
  },
  {
    "country": "AU",
    "name": "Shortland",
    "lat": "-32.87883",
    "lng": "151.69105"
  },
  {
    "country": "AU",
    "name": "Beeliar",
    "lat": "-32.13339",
    "lng": "115.80637"
  },
  {
    "country": "AU",
    "name": "Parkside",
    "lat": "-20.7377",
    "lng": "139.48865"
  },
  {
    "country": "AU",
    "name": "Cowandilla",
    "lat": "-34.93221",
    "lng": "138.55931"
  },
  {
    "country": "AU",
    "name": "Dharruk",
    "lat": "-33.74814",
    "lng": "150.81561"
  },
  {
    "country": "AU",
    "name": "Tanilba Bay",
    "lat": "-32.74706",
    "lng": "151.99714"
  },
  {
    "country": "AU",
    "name": "Werrington",
    "lat": "-33.7592",
    "lng": "150.75266"
  },
  {
    "country": "AU",
    "name": "Winston Hills",
    "lat": "-33.77645",
    "lng": "150.98051"
  },
  {
    "country": "AU",
    "name": "Wetherill Park",
    "lat": "-33.84277",
    "lng": "150.90061"
  },
  {
    "country": "AU",
    "name": "Ardeer",
    "lat": "-37.77586",
    "lng": "144.80144"
  },
  {
    "country": "AU",
    "name": "Tennyson",
    "lat": "-34.88601",
    "lng": "138.48588"
  },
  {
    "country": "AU",
    "name": "Southside",
    "lat": "-26.20997",
    "lng": "152.64719"
  },
  {
    "country": "AU",
    "name": "Yarravel",
    "lat": "-31.04295",
    "lng": "152.76191"
  },
  {
    "country": "AU",
    "name": "St George",
    "lat": "-27.94763",
    "lng": "148.60986"
  },
  {
    "country": "AU",
    "name": "Westleigh",
    "lat": "-33.71176",
    "lng": "151.07139"
  },
  {
    "country": "AU",
    "name": "Farrar",
    "lat": "-12.48028",
    "lng": "130.9982"
  },
  {
    "country": "AU",
    "name": "Whalan",
    "lat": "-33.75697",
    "lng": "150.80402"
  },
  {
    "country": "AU",
    "name": "Edensor Park",
    "lat": "-33.87971",
    "lng": "150.87778"
  },
  {
    "country": "AU",
    "name": "Elanora Heights",
    "lat": "-33.70159",
    "lng": "151.27965"
  },
  {
    "country": "AU",
    "name": "Avondale Heights",
    "lat": "-37.76155",
    "lng": "144.86261"
  },
  {
    "country": "AU",
    "name": "Lynbrook",
    "lat": "-38.05588",
    "lng": "145.25615"
  },
  {
    "country": "AU",
    "name": "Hunterview",
    "lat": "-32.54343",
    "lng": "151.17717"
  },
  {
    "country": "AU",
    "name": "Wentworth Point",
    "lat": "-33.8308",
    "lng": "151.07441"
  },
  {
    "country": "AU",
    "name": "Fern Bay",
    "lat": "-32.86428",
    "lng": "151.81307"
  },
  {
    "country": "AU",
    "name": "West Beach",
    "lat": "-34.94597",
    "lng": "138.50935"
  },
  {
    "country": "AU",
    "name": "Payneham South",
    "lat": "-34.90481",
    "lng": "138.64448"
  },
  {
    "country": "AU",
    "name": "Wagaman",
    "lat": "-12.38074",
    "lng": "130.88538"
  },
  {
    "country": "AU",
    "name": "Norman Gardens",
    "lat": "-23.33044",
    "lng": "150.52747"
  },
  {
    "country": "AU",
    "name": "Ridgehaven",
    "lat": "-34.82126",
    "lng": "138.70467"
  },
  {
    "country": "AU",
    "name": "Bayview Heights",
    "lat": "-16.96229",
    "lng": "145.72585"
  },
  {
    "country": "AU",
    "name": "Kurralta Park",
    "lat": "-34.95142",
    "lng": "138.56702"
  },
  {
    "country": "AU",
    "name": "Toorak Gardens",
    "lat": "-34.93478",
    "lng": "138.63639"
  },
  {
    "country": "AU",
    "name": "Hmas Cerberus",
    "lat": "-38.36491",
    "lng": "145.20038"
  },
  {
    "country": "AU",
    "name": "Windradyne",
    "lat": "-33.40539",
    "lng": "149.54507"
  },
  {
    "country": "AU",
    "name": "Invermay Park",
    "lat": "-37.53063",
    "lng": "143.85798"
  },
  {
    "country": "AU",
    "name": "Brentwood",
    "lat": "-32.04347",
    "lng": "115.85246"
  },
  {
    "country": "AU",
    "name": "Ivanhoe",
    "lat": "-37.76903",
    "lng": "145.04308"
  },
  {
    "country": "AU",
    "name": "Woodberry",
    "lat": "-32.79311",
    "lng": "151.67687"
  },
  {
    "country": "AU",
    "name": "Woongarrah",
    "lat": "-33.24134",
    "lng": "151.47563"
  },
  {
    "country": "AU",
    "name": "Hillcrest",
    "lat": "-34.86252",
    "lng": "138.64306"
  },
  {
    "country": "AU",
    "name": "Fairview Park",
    "lat": "-34.79998",
    "lng": "138.72857"
  },
  {
    "country": "AU",
    "name": "Kangaroo Ground",
    "lat": "-37.68919",
    "lng": "145.2317"
  },
  {
    "country": "AU",
    "name": "Croydon Park",
    "lat": "-34.88028",
    "lng": "138.56779"
  },
  {
    "country": "AU",
    "name": "Kialla",
    "lat": "-36.44729",
    "lng": "145.41422"
  },
  {
    "country": "AU",
    "name": "Kapooka",
    "lat": "-35.15693",
    "lng": "147.28439"
  },
  {
    "country": "AU",
    "name": "Drewvale",
    "lat": "-27.64768",
    "lng": "153.05458"
  },
  {
    "country": "AU",
    "name": "Westlake",
    "lat": "-27.54862",
    "lng": "152.91276"
  },
  {
    "country": "AU",
    "name": "Collinswood",
    "lat": "-34.8873",
    "lng": "138.61224"
  },
  {
    "country": "AU",
    "name": "Manifold Heights",
    "lat": "-38.13762",
    "lng": "144.33369"
  },
  {
    "country": "AU",
    "name": "Mickleham",
    "lat": "-37.53664",
    "lng": "144.90204"
  },
  {
    "country": "AU",
    "name": "Junction Hill",
    "lat": "-29.64113",
    "lng": "152.92491"
  },
  {
    "country": "AU",
    "name": "Greenacres",
    "lat": "-34.86855",
    "lng": "138.628"
  },
  {
    "country": "AU",
    "name": "Botanic Ridge",
    "lat": "-38.13922",
    "lng": "145.26841"
  },
  {
    "country": "AU",
    "name": "Turner",
    "lat": "-35.26881",
    "lng": "149.12465"
  },
  {
    "country": "AU",
    "name": "Oakden",
    "lat": "-34.8528",
    "lng": "138.6433"
  },
  {
    "country": "AU",
    "name": "Colonel Light Gardens",
    "lat": "-34.98628",
    "lng": "138.59746"
  },
  {
    "country": "AU",
    "name": "King Creek",
    "lat": "-31.49237",
    "lng": "152.75658"
  },
  {
    "country": "AU",
    "name": "Nichols Point",
    "lat": "-34.2121",
    "lng": "142.21443"
  },
  {
    "country": "AU",
    "name": "Jackass Flat",
    "lat": "-36.71589",
    "lng": "144.28597"
  },
  {
    "country": "AU",
    "name": "Henley Beach South",
    "lat": "-34.92591",
    "lng": "138.49554"
  },
  {
    "country": "AU",
    "name": "Plumpton",
    "lat": "-37.68701",
    "lng": "144.69082"
  },
  {
    "country": "AU",
    "name": "Avenell Heights",
    "lat": "-24.8896",
    "lng": "152.36786"
  },
  {
    "country": "AU",
    "name": "Davoren Park",
    "lat": "-34.69063",
    "lng": "138.66862"
  },
  {
    "country": "AU",
    "name": "Redan",
    "lat": "-37.57649",
    "lng": "143.83862"
  },
  {
    "country": "AU",
    "name": "Glenside",
    "lat": "-34.94275",
    "lng": "138.63375"
  },
  {
    "country": "AU",
    "name": "Banksia Grove",
    "lat": "-31.69615",
    "lng": "115.80501"
  },
  {
    "country": "AU",
    "name": "Bluff Point",
    "lat": "-28.7374",
    "lng": "114.62278"
  },
  {
    "country": "AU",
    "name": "Calista",
    "lat": "-32.241",
    "lng": "115.79763"
  },
  {
    "country": "AU",
    "name": "Orelia",
    "lat": "-32.2333",
    "lng": "115.82227"
  },
  {
    "country": "AU",
    "name": "Macquarie Hills",
    "lat": "-32.95111",
    "lng": "151.64461"
  },
  {
    "country": "AU",
    "name": "Waterways",
    "lat": "-38.01478",
    "lng": "145.1305"
  },
  {
    "country": "AU",
    "name": "Golden Bay",
    "lat": "-32.42505",
    "lng": "115.76099"
  },
  {
    "country": "AU",
    "name": "Gwelup",
    "lat": "-31.87163",
    "lng": "115.79484"
  },
  {
    "country": "AU",
    "name": "Merewether",
    "lat": "-32.94801",
    "lng": "151.74325"
  },
  {
    "country": "AU",
    "name": "Jolimont",
    "lat": "-31.94564",
    "lng": "115.80947"
  },
  {
    "country": "AU",
    "name": "Magill",
    "lat": "-34.90911",
    "lng": "138.67498"
  },
  {
    "country": "AU",
    "name": "Wyndham Vale",
    "lat": "-37.89138",
    "lng": "144.62368"
  },
  {
    "country": "AU",
    "name": "Brinkin",
    "lat": "-12.37057",
    "lng": "130.86799"
  },
  {
    "country": "AU",
    "name": "Ballajura",
    "lat": "-31.84062",
    "lng": "115.89549"
  },
  {
    "country": "AU",
    "name": "Maryville",
    "lat": "-32.91121",
    "lng": "151.75543"
  },
  {
    "country": "AU",
    "name": "Wynn Vale",
    "lat": "-34.79942",
    "lng": "138.68714"
  },
  {
    "country": "AU",
    "name": "Ardross",
    "lat": "-32.02696",
    "lng": "115.83548"
  },
  {
    "country": "AU",
    "name": "Noranda",
    "lat": "-31.87333",
    "lng": "115.89901"
  },
  {
    "country": "AU",
    "name": "Cambridge Gardens",
    "lat": "-33.73801",
    "lng": "150.72075"
  },
  {
    "country": "AU",
    "name": "Bateman",
    "lat": "-32.05547",
    "lng": "115.84737"
  },
  {
    "country": "AU",
    "name": "Piara Waters",
    "lat": "-32.13344",
    "lng": "115.91634"
  },
  {
    "country": "AU",
    "name": "Dulwich",
    "lat": "-34.9365",
    "lng": "138.6272"
  },
  {
    "country": "AU",
    "name": "Long Gully",
    "lat": "-36.74305",
    "lng": "144.25788"
  },
  {
    "country": "AU",
    "name": "College Grove",
    "lat": "-33.37587",
    "lng": "115.65906"
  },
  {
    "country": "AU",
    "name": "Willetton",
    "lat": "-32.05251",
    "lng": "115.88782"
  },
  {
    "country": "AU",
    "name": "Booie",
    "lat": "-26.53677",
    "lng": "151.94181"
  },
  {
    "country": "AU",
    "name": "Merriwa",
    "lat": "-31.66494",
    "lng": "115.71273"
  },
  {
    "country": "AU",
    "name": "Princes Hill",
    "lat": "-37.78185",
    "lng": "144.96656"
  },
  {
    "country": "AU",
    "name": "Richmond",
    "lat": "-34.94199",
    "lng": "138.56322"
  },
  {
    "country": "AU",
    "name": "Green Valley",
    "lat": "-33.90292",
    "lng": "150.86713"
  },
  {
    "country": "AU",
    "name": "Prospect Vale",
    "lat": "-41.481",
    "lng": "147.10406"
  },
  {
    "country": "AU",
    "name": "Bungalow",
    "lat": "-16.93855",
    "lng": "145.75634"
  },
  {
    "country": "AU",
    "name": "Youngtown",
    "lat": "-41.48332",
    "lng": "147.17067"
  },
  {
    "country": "AU",
    "name": "East Side",
    "lat": "-23.69195",
    "lng": "133.8932"
  },
  {
    "country": "AU",
    "name": "Cashmere",
    "lat": "-27.29767",
    "lng": "152.90662"
  },
  {
    "country": "AU",
    "name": "Fadden",
    "lat": "-35.405",
    "lng": "149.11662"
  },
  {
    "country": "AU",
    "name": "Wickham",
    "lat": "-32.91923",
    "lng": "151.75693"
  },
  {
    "country": "AU",
    "name": "Tarcoola Beach",
    "lat": "-28.81001",
    "lng": "114.62236"
  },
  {
    "country": "AU",
    "name": "Page",
    "lat": "-35.23864",
    "lng": "149.04988"
  },
  {
    "country": "AU",
    "name": "Cotswold Hills",
    "lat": "-27.52241",
    "lng": "151.89516"
  },
  {
    "country": "AU",
    "name": "Teneriffe",
    "lat": "-27.45587",
    "lng": "153.04696"
  },
  {
    "country": "AU",
    "name": "Thomson",
    "lat": "-38.16984",
    "lng": "144.3789"
  },
  {
    "country": "AU",
    "name": "Bulgarra",
    "lat": "-20.72584",
    "lng": "116.85673"
  },
  {
    "country": "AU",
    "name": "St Albans Park",
    "lat": "-38.18802",
    "lng": "144.39207"
  },
  {
    "country": "AU",
    "name": "Kooringal",
    "lat": "-35.14069",
    "lng": "147.3768"
  },
  {
    "country": "AU",
    "name": "Girraween",
    "lat": "-12.52528",
    "lng": "131.09566"
  },
  {
    "country": "AU",
    "name": "Glenwood",
    "lat": "-33.73333",
    "lng": "150.93284"
  },
  {
    "country": "AU",
    "name": "Heathwood",
    "lat": "-27.63449",
    "lng": "152.98814"
  },
  {
    "country": "AU",
    "name": "Mira Mar",
    "lat": "-35.01517",
    "lng": "117.90096"
  },
  {
    "country": "AU",
    "name": "Glen Eden",
    "lat": "-23.89738",
    "lng": "151.27133"
  },
  {
    "country": "AU",
    "name": "Highbury",
    "lat": "-34.85287",
    "lng": "138.6975"
  },
  {
    "country": "AU",
    "name": "Highland Park",
    "lat": "-28.01392",
    "lng": "153.33312"
  },
  {
    "country": "AU",
    "name": "Pemulwuy",
    "lat": "-33.82274",
    "lng": "150.92395"
  },
  {
    "country": "AU",
    "name": "Silverwater",
    "lat": "-33.83343",
    "lng": "151.04731"
  },
  {
    "country": "AU",
    "name": "Exeter",
    "lat": "-34.83994",
    "lng": "138.48902"
  },
  {
    "country": "AU",
    "name": "Petersham",
    "lat": "-33.8946",
    "lng": "151.15495"
  },
  {
    "country": "AU",
    "name": "The Range",
    "lat": "-23.392",
    "lng": "150.49624"
  },
  {
    "country": "AU",
    "name": "Kings Park",
    "lat": "-33.7432",
    "lng": "150.90761"
  },
  {
    "country": "AU",
    "name": "Hyde Park",
    "lat": "-19.27691",
    "lng": "146.79653"
  },
  {
    "country": "AU",
    "name": "Heritage Park",
    "lat": "-27.68273",
    "lng": "153.06082"
  },
  {
    "country": "AU",
    "name": "Oakhurst",
    "lat": "-33.73883",
    "lng": "150.83837"
  },
  {
    "country": "AU",
    "name": "Travancore",
    "lat": "-37.78076",
    "lng": "144.93545"
  },
  {
    "country": "AU",
    "name": "Manoora",
    "lat": "-16.91706",
    "lng": "145.73665"
  },
  {
    "country": "AU",
    "name": "Panorama",
    "lat": "-34.9908",
    "lng": "138.59948"
  },
  {
    "country": "AU",
    "name": "Raby",
    "lat": "-34.01846",
    "lng": "150.81764"
  },
  {
    "country": "AU",
    "name": "San Remo",
    "lat": "-33.21469",
    "lng": "151.52102"
  },
  {
    "country": "AU",
    "name": "St Andrews",
    "lat": "-34.02243",
    "lng": "150.82958"
  },
  {
    "country": "AU",
    "name": "Carramar",
    "lat": "-31.69023",
    "lng": "115.77159"
  },
  {
    "country": "AU",
    "name": "Springdale Heights",
    "lat": "-36.03095",
    "lng": "146.94783"
  },
  {
    "country": "AU",
    "name": "Macleay Island",
    "lat": "-27.61089",
    "lng": "153.35996"
  },
  {
    "country": "AU",
    "name": "Baynton",
    "lat": "-20.75164",
    "lng": "116.80139"
  },
  {
    "country": "AU",
    "name": "Menzies",
    "lat": "-20.71809",
    "lng": "139.49717"
  },
  {
    "country": "AU",
    "name": "Newborough",
    "lat": "-38.17171",
    "lng": "146.29264"
  },
  {
    "country": "AU",
    "name": "Kalkie",
    "lat": "-24.84426",
    "lng": "152.38532"
  },
  {
    "country": "AU",
    "name": "Mission River",
    "lat": "-12.59509",
    "lng": "141.9576"
  },
  {
    "country": "AU",
    "name": "Lake Gardens",
    "lat": "-37.54632",
    "lng": "143.81653"
  },
  {
    "country": "AU",
    "name": "Ascot Park",
    "lat": "-34.99175",
    "lng": "138.55768"
  },
  {
    "country": "AU",
    "name": "Newcomb",
    "lat": "-38.16623",
    "lng": "144.39429"
  },
  {
    "country": "AU",
    "name": "Para Hills",
    "lat": "-34.8121",
    "lng": "138.65802"
  },
  {
    "country": "AU",
    "name": "O'Connor",
    "lat": "-35.25645",
    "lng": "149.11248"
  },
  {
    "country": "AU",
    "name": "Rushcutters Bay",
    "lat": "-33.8748",
    "lng": "151.22799"
  },
  {
    "country": "AU",
    "name": "Edwardstown",
    "lat": "-34.98018",
    "lng": "138.5694"
  },
  {
    "country": "AU",
    "name": "Andrews Farm",
    "lat": "-34.67632",
    "lng": "138.66197"
  },
  {
    "country": "AU",
    "name": "Railway Estate",
    "lat": "-19.2757",
    "lng": "146.81962"
  },
  {
    "country": "AU",
    "name": "O'Sullivan Beach",
    "lat": "-35.11879",
    "lng": "138.4734"
  },
  {
    "country": "AU",
    "name": "Bellevue Heights",
    "lat": "-35.03023",
    "lng": "138.58314"
  },
  {
    "country": "AU",
    "name": "Broadview",
    "lat": "-34.87589",
    "lng": "138.61498"
  },
  {
    "country": "AU",
    "name": "Petrie Terrace",
    "lat": "-27.46298",
    "lng": "153.01312"
  },
  {
    "country": "AU",
    "name": "Clearview",
    "lat": "-34.85735",
    "lng": "138.61327"
  },
  {
    "country": "AU",
    "name": "Regency Downs",
    "lat": "-27.53359",
    "lng": "152.44049"
  },
  {
    "country": "AU",
    "name": "Rasmussen",
    "lat": "-19.3524",
    "lng": "146.7228"
  },
  {
    "country": "AU",
    "name": "Rosemount",
    "lat": "-26.6303",
    "lng": "152.9997"
  },
  {
    "country": "AU",
    "name": "Sheldon",
    "lat": "-27.58436",
    "lng": "153.20042"
  },
  {
    "country": "AU",
    "name": "Boronia Heights",
    "lat": "-27.68855",
    "lng": "153.01959"
  },
  {
    "country": "AU",
    "name": "Glen Osmond",
    "lat": "-34.9596",
    "lng": "138.64873"
  },
  {
    "country": "AU",
    "name": "Usher",
    "lat": "-33.37982",
    "lng": "115.6292"
  },
  {
    "country": "AU",
    "name": "Sunshine Bay",
    "lat": "-35.7454",
    "lng": "150.20792"
  },
  {
    "country": "AU",
    "name": "Seaholme",
    "lat": "-37.864",
    "lng": "144.84504"
  },
  {
    "country": "AU",
    "name": "Surfside",
    "lat": "-35.69531",
    "lng": "150.19949"
  },
  {
    "country": "AU",
    "name": "Black Forest",
    "lat": "-34.96028",
    "lng": "138.57668"
  },
  {
    "country": "AU",
    "name": "Tamarama",
    "lat": "-33.89835",
    "lng": "151.27059"
  },
  {
    "country": "AU",
    "name": "Rockville",
    "lat": "-27.53611",
    "lng": "151.93805"
  },
  {
    "country": "AU",
    "name": "Ashford",
    "lat": "-34.94859",
    "lng": "138.57457"
  },
  {
    "country": "AU",
    "name": "Athol Park",
    "lat": "-34.85608",
    "lng": "138.54282"
  },
  {
    "country": "AU",
    "name": "Brahma Lodge",
    "lat": "-34.77604",
    "lng": "138.65306"
  },
  {
    "country": "AU",
    "name": "Dover Gardens",
    "lat": "-35.024",
    "lng": "138.53695"
  },
  {
    "country": "AU",
    "name": "Bundall",
    "lat": "-28.01111",
    "lng": "153.40479"
  },
  {
    "country": "AU",
    "name": "Hermit Park",
    "lat": "-19.28741",
    "lng": "146.80043"
  },
  {
    "country": "AU",
    "name": "South Kingsville",
    "lat": "-37.83018",
    "lng": "144.8709"
  },
  {
    "country": "AU",
    "name": "Yennora",
    "lat": "-33.86173",
    "lng": "150.96865"
  },
  {
    "country": "AU",
    "name": "Aberfeldie",
    "lat": "-37.75959",
    "lng": "144.8974"
  },
  {
    "country": "AU",
    "name": "Onkaparinga Hills",
    "lat": "-35.13514",
    "lng": "138.56697"
  },
  {
    "country": "AU",
    "name": "Merrimac",
    "lat": "-28.05085",
    "lng": "153.37307"
  },
  {
    "country": "AU",
    "name": "Rosslyn Park",
    "lat": "-34.92194",
    "lng": "138.67553"
  },
  {
    "country": "AU",
    "name": "Seacombe Gardens",
    "lat": "-35.02336",
    "lng": "138.5458"
  },
  {
    "country": "AU",
    "name": "Pimlico",
    "lat": "-19.28172",
    "lng": "146.78803"
  },
  {
    "country": "AU",
    "name": "Molendinar",
    "lat": "-27.97409",
    "lng": "153.36069"
  },
  {
    "country": "AU",
    "name": "Stonyfell",
    "lat": "-34.93422",
    "lng": "138.67674"
  },
  {
    "country": "AU",
    "name": "Mornington",
    "lat": "-20.73415",
    "lng": "139.49586"
  },
  {
    "country": "AU",
    "name": "Currajong",
    "lat": "-19.27566",
    "lng": "146.77918"
  },
  {
    "country": "AU",
    "name": "St Agnes",
    "lat": "-34.83075",
    "lng": "138.71074"
  },
  {
    "country": "AU",
    "name": "Douglas",
    "lat": "-19.32394",
    "lng": "146.75234"
  },
  {
    "country": "AU",
    "name": "Millbank",
    "lat": "-24.87536",
    "lng": "152.32217"
  },
  {
    "country": "AU",
    "name": "Burnside",
    "lat": "-37.74937",
    "lng": "144.75301"
  },
  {
    "country": "AU",
    "name": "Safety Beach",
    "lat": "-38.31535",
    "lng": "145.00027"
  },
  {
    "country": "AU",
    "name": "Rostrevor",
    "lat": "-34.89386",
    "lng": "138.69183"
  },
  {
    "country": "AU",
    "name": "Kanimbla",
    "lat": "-16.92307",
    "lng": "145.72158"
  },
  {
    "country": "AU",
    "name": "Blind Bight",
    "lat": "-38.21427",
    "lng": "145.3377"
  },
  {
    "country": "AU",
    "name": "Alexander Heights",
    "lat": "-31.82758",
    "lng": "115.86501"
  },
  {
    "country": "AU",
    "name": "Lamington",
    "lat": "-30.73425",
    "lng": "121.46163"
  },
  {
    "country": "AU",
    "name": "Carlisle",
    "lat": "-31.97945",
    "lng": "115.91808"
  },
  {
    "country": "AU",
    "name": "Coodanup",
    "lat": "-32.55187",
    "lng": "115.75352"
  },
  {
    "country": "AU",
    "name": "Dampier Peninsula",
    "lat": "-16.93241",
    "lng": "122.86559"
  },
  {
    "country": "AU",
    "name": "Ottoway",
    "lat": "-34.84756",
    "lng": "138.53575"
  },
  {
    "country": "AU",
    "name": "Atwell",
    "lat": "-32.14346",
    "lng": "115.86528"
  },
  {
    "country": "AU",
    "name": "Aveley",
    "lat": "-31.78132",
    "lng": "115.98959"
  },
  {
    "country": "AU",
    "name": "Hillcrest",
    "lat": "-27.66857",
    "lng": "153.02614"
  },
  {
    "country": "AU",
    "name": "Singleton",
    "lat": "-32.44403",
    "lng": "115.75725"
  },
  {
    "country": "AU",
    "name": "Piccadilly",
    "lat": "-30.7428",
    "lng": "121.46418"
  },
  {
    "country": "AU",
    "name": "Mount Pleasant",
    "lat": "-21.11814",
    "lng": "149.15965"
  },
  {
    "country": "AU",
    "name": "Mount Warren Park",
    "lat": "-27.73109",
    "lng": "153.20549"
  },
  {
    "country": "AU",
    "name": "Balga",
    "lat": "-31.85497",
    "lng": "115.83986"
  },
  {
    "country": "AU",
    "name": "Helena Valley",
    "lat": "-31.91938",
    "lng": "116.03982"
  },
  {
    "country": "AU",
    "name": "Cape Woolamai",
    "lat": "-38.54285",
    "lng": "145.34407"
  },
  {
    "country": "AU",
    "name": "Ridgewood",
    "lat": "-31.6615",
    "lng": "115.72261"
  },
  {
    "country": "AU",
    "name": "Pioneer",
    "lat": "-20.72032",
    "lng": "139.50812"
  },
  {
    "country": "AU",
    "name": "Greenwood",
    "lat": "-31.82723",
    "lng": "115.80247"
  },
  {
    "country": "AU",
    "name": "Augustine Heights",
    "lat": "-27.66047",
    "lng": "152.87896"
  },
  {
    "country": "AU",
    "name": "Lakelands",
    "lat": "-32.96185",
    "lng": "151.64972"
  },
  {
    "country": "AU",
    "name": "Dallas",
    "lat": "-37.67083",
    "lng": "144.93542"
  },
  {
    "country": "AU",
    "name": "Leeming",
    "lat": "-32.07511",
    "lng": "115.86613"
  },
  {
    "country": "AU",
    "name": "Delahey",
    "lat": "-37.7198",
    "lng": "144.77732"
  },
  {
    "country": "AU",
    "name": "Parkwood",
    "lat": "-27.95461",
    "lng": "153.36304"
  },
  {
    "country": "AU",
    "name": "Downer",
    "lat": "-35.24457",
    "lng": "149.14468"
  },
  {
    "country": "AU",
    "name": "St Marys",
    "lat": "-35.00423",
    "lng": "138.57983"
  },
  {
    "country": "AU",
    "name": "Ashfield",
    "lat": "-31.91721",
    "lng": "115.93796"
  },
  {
    "country": "AU",
    "name": "Munno Para West",
    "lat": "-34.66464",
    "lng": "138.68066"
  },
  {
    "country": "AU",
    "name": "Wilson",
    "lat": "-32.02058",
    "lng": "115.91181"
  },
  {
    "country": "AU",
    "name": "Ridleyton",
    "lat": "-34.8928",
    "lng": "138.57159"
  },
  {
    "country": "AU",
    "name": "Beresford",
    "lat": "-28.75754",
    "lng": "114.61965"
  },
  {
    "country": "AU",
    "name": "North Lake",
    "lat": "-32.0819",
    "lng": "115.83567"
  },
  {
    "country": "AU",
    "name": "Upper Kedron",
    "lat": "-27.41879",
    "lng": "152.91777"
  },
  {
    "country": "AU",
    "name": "Wishart",
    "lat": "-27.55448",
    "lng": "153.10107"
  },
  {
    "country": "AU",
    "name": "Depot Hill",
    "lat": "-23.39024",
    "lng": "150.52102"
  },
  {
    "country": "AU",
    "name": "Butler",
    "lat": "-31.64298",
    "lng": "115.70431"
  },
  {
    "country": "AU",
    "name": "South Hedland",
    "lat": "-20.40655",
    "lng": "118.60069"
  },
  {
    "country": "AU",
    "name": "Darch",
    "lat": "-31.81255",
    "lng": "115.8458"
  },
  {
    "country": "AU",
    "name": "Riverside",
    "lat": "-41.42105",
    "lng": "147.05086"
  },
  {
    "country": "AU",
    "name": "Brighton",
    "lat": "-42.69814",
    "lng": "147.24489"
  },
  {
    "country": "AU",
    "name": "Annandale",
    "lat": "-19.31503",
    "lng": "146.79069"
  },
  {
    "country": "AU",
    "name": "Geilston Bay",
    "lat": "-42.82955",
    "lng": "147.3463"
  },
  {
    "country": "AU",
    "name": "Trevallyn",
    "lat": "-41.44246",
    "lng": "147.10484"
  },
  {
    "country": "AU",
    "name": "Herne Hill",
    "lat": "-38.13427",
    "lng": "144.32406"
  },
  {
    "country": "AU",
    "name": "Osborne",
    "lat": "-34.79804",
    "lng": "138.49796"
  },
  {
    "country": "AU",
    "name": "St Georges",
    "lat": "-34.952",
    "lng": "138.64787"
  },
  {
    "country": "AU",
    "name": "Shorewell Park",
    "lat": "-41.0699",
    "lng": "145.87689"
  },
  {
    "country": "AU",
    "name": "Rosetta",
    "lat": "-42.82105",
    "lng": "147.25258"
  },
  {
    "country": "AU",
    "name": "Tranmere",
    "lat": "-42.92179",
    "lng": "147.41701"
  },
  {
    "country": "AU",
    "name": "Geographe",
    "lat": "-33.63974",
    "lng": "115.38358"
  },
  {
    "country": "AU",
    "name": "Herbert",
    "lat": "-12.53414",
    "lng": "131.16197"
  },
  {
    "country": "AU",
    "name": "Pasadena",
    "lat": "-35.00274",
    "lng": "138.58862"
  },
  {
    "country": "AU",
    "name": "Parrearra",
    "lat": "-26.71152",
    "lng": "153.12197"
  },
  {
    "country": "AU",
    "name": "Kambah",
    "lat": "-35.38624",
    "lng": "149.05804"
  },
  {
    "country": "AU",
    "name": "Reid",
    "lat": "-35.28578",
    "lng": "149.13905"
  },
  {
    "country": "AU",
    "name": "Chifley",
    "lat": "-35.3534",
    "lng": "149.07684"
  },
  {
    "country": "AU",
    "name": "Watson",
    "lat": "-35.23815",
    "lng": "149.15271"
  },
  {
    "country": "AU",
    "name": "Yarralumla",
    "lat": "-35.2998",
    "lng": "149.10585"
  },
  {
    "country": "AU",
    "name": "Queens Park",
    "lat": "-32.00314",
    "lng": "115.94621"
  },
  {
    "country": "AU",
    "name": "Edens Landing",
    "lat": "-27.7027",
    "lng": "153.16943"
  },
  {
    "country": "AU",
    "name": "Redwood Park",
    "lat": "-34.81155",
    "lng": "138.70695"
  },
  {
    "country": "AU",
    "name": "Gilberton",
    "lat": "-34.90051",
    "lng": "138.6126"
  },
  {
    "country": "AU",
    "name": "North Haven",
    "lat": "-34.78825",
    "lng": "138.49162"
  },
  {
    "country": "AU",
    "name": "Banks",
    "lat": "-35.47194",
    "lng": "149.09965"
  },
  {
    "country": "AU",
    "name": "Koondoola",
    "lat": "-31.84145",
    "lng": "115.86654"
  },
  {
    "country": "AU",
    "name": "Innaloo",
    "lat": "-31.89272",
    "lng": "115.79508"
  },
  {
    "country": "AU",
    "name": "Cannon Hill",
    "lat": "-27.47237",
    "lng": "153.09475"
  },
  {
    "country": "AU",
    "name": "Park Holme",
    "lat": "-34.99443",
    "lng": "138.55318"
  },
  {
    "country": "AU",
    "name": "Paringa",
    "lat": "-34.17644",
    "lng": "140.78579"
  },
  {
    "country": "AU",
    "name": "Carina Heights",
    "lat": "-27.50721",
    "lng": "153.09126"
  },
  {
    "country": "AU",
    "name": "The Gap",
    "lat": "-23.71333",
    "lng": "133.87386"
  },
  {
    "country": "AU",
    "name": "Pennington",
    "lat": "-34.85758",
    "lng": "138.5316"
  },
  {
    "country": "AU",
    "name": "Dickson",
    "lat": "-35.25082",
    "lng": "149.13932"
  },
  {
    "country": "AU",
    "name": "Darling Downs",
    "lat": "-32.19442",
    "lng": "115.99187"
  },
  {
    "country": "AU",
    "name": "Mitchell",
    "lat": "-33.42732",
    "lng": "149.55674"
  },
  {
    "country": "AU",
    "name": "Madeley",
    "lat": "-31.8111",
    "lng": "115.82814"
  },
  {
    "country": "AU",
    "name": "Booragoon",
    "lat": "-32.03945",
    "lng": "115.83369"
  },
  {
    "country": "AU",
    "name": "Glynde",
    "lat": "-34.89605",
    "lng": "138.65253"
  },
  {
    "country": "AU",
    "name": "Christie Downs",
    "lat": "-35.12999",
    "lng": "138.49633"
  },
  {
    "country": "AU",
    "name": "Abbotsbury",
    "lat": "-33.8701",
    "lng": "150.86119"
  },
  {
    "country": "AU",
    "name": "Rossmoyne",
    "lat": "-32.03965",
    "lng": "115.86781"
  },
  {
    "country": "AU",
    "name": "Abercrombie",
    "lat": "-33.38867",
    "lng": "149.5458"
  },
  {
    "country": "AU",
    "name": "Airds",
    "lat": "-34.08599",
    "lng": "150.83322"
  },
  {
    "country": "AU",
    "name": "Allawah",
    "lat": "-33.97257",
    "lng": "151.1144"
  },
  {
    "country": "AU",
    "name": "Doubleview",
    "lat": "-31.89627",
    "lng": "115.78155"
  },
  {
    "country": "AU",
    "name": "Netherby",
    "lat": "-34.97048",
    "lng": "138.62503"
  },
  {
    "country": "AU",
    "name": "Ambarvale",
    "lat": "-34.08942",
    "lng": "150.79656"
  },
  {
    "country": "AU",
    "name": "Adamstown",
    "lat": "-32.93824",
    "lng": "151.72541"
  },
  {
    "country": "AU",
    "name": "Austral",
    "lat": "-33.92745",
    "lng": "150.80811"
  },
  {
    "country": "AU",
    "name": "Theodore",
    "lat": "-35.44962",
    "lng": "149.11971"
  },
  {
    "country": "AU",
    "name": "Bonnyrigg",
    "lat": "-33.89357",
    "lng": "150.88908"
  },
  {
    "country": "AU",
    "name": "Mundingburra",
    "lat": "-19.29851",
    "lng": "146.79352"
  },
  {
    "country": "AU",
    "name": "Seville Grove",
    "lat": "-32.13645",
    "lng": "115.98905"
  },
  {
    "country": "AU",
    "name": "Barden Ridge",
    "lat": "-34.03413",
    "lng": "151.01194"
  },
  {
    "country": "AU",
    "name": "Birmingham Gardens",
    "lat": "-32.89368",
    "lng": "151.69009"
  },
  {
    "country": "AU",
    "name": "Canton Beach",
    "lat": "-33.27443",
    "lng": "151.54614"
  },
  {
    "country": "AU",
    "name": "Newtown",
    "lat": "-27.6163",
    "lng": "152.77675"
  },
  {
    "country": "AU",
    "name": "Bardwell Park",
    "lat": "-33.93534",
    "lng": "151.12571"
  },
  {
    "country": "AU",
    "name": "Beacon Hill",
    "lat": "-33.7528",
    "lng": "151.25857"
  },
  {
    "country": "AU",
    "name": "Ironbark",
    "lat": "-36.75478",
    "lng": "144.26378"
  },
  {
    "country": "AU",
    "name": "Wondunna",
    "lat": "-25.31758",
    "lng": "152.85912"
  },
  {
    "country": "AU",
    "name": "Belmore",
    "lat": "-33.91901",
    "lng": "151.08935"
  },
  {
    "country": "AU",
    "name": "Woodpark",
    "lat": "-33.84137",
    "lng": "150.96055"
  },
  {
    "country": "AU",
    "name": "Berkshire Park",
    "lat": "-33.67283",
    "lng": "150.77523"
  },
  {
    "country": "AU",
    "name": "Beverly Hills",
    "lat": "-33.94799",
    "lng": "151.07979"
  },
  {
    "country": "AU",
    "name": "Murrumba Downs",
    "lat": "-27.26733",
    "lng": "153.01053"
  },
  {
    "country": "AU",
    "name": "Glendalough",
    "lat": "-31.91991",
    "lng": "115.81945"
  },
  {
    "country": "AU",
    "name": "Blakeview",
    "lat": "-34.67566",
    "lng": "138.7101"
  },
  {
    "country": "AU",
    "name": "Birchgrove",
    "lat": "-33.85164",
    "lng": "151.18243"
  },
  {
    "country": "AU",
    "name": "Queenstown",
    "lat": "-34.86091",
    "lng": "138.51048"
  },
  {
    "country": "AU",
    "name": "Ellen Grove",
    "lat": "-27.61529",
    "lng": "152.94385"
  },
  {
    "country": "AU",
    "name": "Carrara",
    "lat": "-28.02151",
    "lng": "153.36635"
  },
  {
    "country": "AU",
    "name": "Georgetown",
    "lat": "-32.9081",
    "lng": "151.73119"
  },
  {
    "country": "AU",
    "name": "Booragul",
    "lat": "-32.97486",
    "lng": "151.60978"
  },
  {
    "country": "AU",
    "name": "North Ward",
    "lat": "-19.24994",
    "lng": "146.81477"
  },
  {
    "country": "AU",
    "name": "Lota",
    "lat": "-27.46923",
    "lng": "153.1858"
  },
  {
    "country": "AU",
    "name": "Underdale",
    "lat": "-34.91803",
    "lng": "138.54704"
  },
  {
    "country": "AU",
    "name": "Cabramatta",
    "lat": "-33.89743",
    "lng": "150.93446"
  },
  {
    "country": "AU",
    "name": "Everton Hills",
    "lat": "-27.38909",
    "lng": "152.97126"
  },
  {
    "country": "AU",
    "name": "Cameron Park",
    "lat": "-32.90701",
    "lng": "151.60528"
  },
  {
    "country": "AU",
    "name": "Buttaba",
    "lat": "-33.05327",
    "lng": "151.57866"
  },
  {
    "country": "AU",
    "name": "Elanora",
    "lat": "-28.13577",
    "lng": "153.44931"
  },
  {
    "country": "AU",
    "name": "Meadow Springs",
    "lat": "-32.49718",
    "lng": "115.75334"
  },
  {
    "country": "AU",
    "name": "Campsie",
    "lat": "-33.9125",
    "lng": "151.10279"
  },
  {
    "country": "AU",
    "name": "Crestwood",
    "lat": "-35.34844",
    "lng": "149.21758"
  },
  {
    "country": "AU",
    "name": "Catalina",
    "lat": "-35.73",
    "lng": "150.18494"
  },
  {
    "country": "AU",
    "name": "Canley Heights",
    "lat": "-33.88262",
    "lng": "150.92408"
  },
  {
    "country": "AU",
    "name": "Carss Park",
    "lat": "-33.98667",
    "lng": "151.11734"
  },
  {
    "country": "AU",
    "name": "Cartwright",
    "lat": "-33.92498",
    "lng": "150.88951"
  },
  {
    "country": "AU",
    "name": "Chelmer",
    "lat": "-27.51326",
    "lng": "152.97524"
  },
  {
    "country": "AU",
    "name": "Arundel",
    "lat": "-27.93768",
    "lng": "153.36302"
  },
  {
    "country": "AU",
    "name": "Warradale",
    "lat": "-34.99717",
    "lng": "138.53155"
  },
  {
    "country": "AU",
    "name": "Castlereagh",
    "lat": "-33.68981",
    "lng": "150.67887"
  },
  {
    "country": "AU",
    "name": "Casula",
    "lat": "-33.95222",
    "lng": "150.89949"
  },
  {
    "country": "AU",
    "name": "Bella Vista",
    "lat": "-33.74127",
    "lng": "150.95456"
  },
  {
    "country": "AU",
    "name": "Carwoola",
    "lat": "-35.37836",
    "lng": "149.3215"
  },
  {
    "country": "AU",
    "name": "Caves Beach",
    "lat": "-33.10637",
    "lng": "151.64402"
  },
  {
    "country": "AU",
    "name": "Bilingurr",
    "lat": "-17.90909",
    "lng": "122.22921"
  },
  {
    "country": "AU",
    "name": "Cecil Hills",
    "lat": "-33.88917",
    "lng": "150.85137"
  },
  {
    "country": "AU",
    "name": "Beechboro",
    "lat": "-31.86515",
    "lng": "115.93661"
  },
  {
    "country": "AU",
    "name": "Chester Hill",
    "lat": "-33.87896",
    "lng": "150.99945"
  },
  {
    "country": "AU",
    "name": "Queenscliff",
    "lat": "-33.78278",
    "lng": "151.28495"
  },
  {
    "country": "AU",
    "name": "Knoxfield",
    "lat": "-37.88978",
    "lng": "145.24962"
  },
  {
    "country": "AU",
    "name": "Kent Town",
    "lat": "-34.92155",
    "lng": "138.62009"
  },
  {
    "country": "AU",
    "name": "Chambers Flat",
    "lat": "-27.74811",
    "lng": "153.07764"
  },
  {
    "country": "AU",
    "name": "Chiswick",
    "lat": "-33.84996",
    "lng": "151.13846"
  },
  {
    "country": "AU",
    "name": "Claremont Meadows",
    "lat": "-33.77587",
    "lng": "150.75193"
  },
  {
    "country": "AU",
    "name": "Ashmore",
    "lat": "-27.98883",
    "lng": "153.37647"
  },
  {
    "country": "AU",
    "name": "Colyton",
    "lat": "-33.78283",
    "lng": "150.79679"
  },
  {
    "country": "AU",
    "name": "Kin Kora",
    "lat": "-23.87705",
    "lng": "151.24722"
  },
  {
    "country": "AU",
    "name": "Banksia Beach",
    "lat": "-27.04027",
    "lng": "153.1439"
  },
  {
    "country": "AU",
    "name": "Barellan Point",
    "lat": "-27.57196",
    "lng": "152.84379"
  },
  {
    "country": "AU",
    "name": "Copacabana",
    "lat": "-33.48692",
    "lng": "151.43587"
  },
  {
    "country": "AU",
    "name": "Hawthorndene",
    "lat": "-35.02229",
    "lng": "138.63039"
  },
  {
    "country": "AU",
    "name": "Cranebrook",
    "lat": "-33.7061",
    "lng": "150.7094"
  },
  {
    "country": "AU",
    "name": "Hebersham",
    "lat": "-33.74582",
    "lng": "150.82385"
  },
  {
    "country": "AU",
    "name": "Dean Park",
    "lat": "-33.73539",
    "lng": "150.85958"
  },
  {
    "country": "AU",
    "name": "Chuwar",
    "lat": "-27.5662",
    "lng": "152.77844"
  },
  {
    "country": "AU",
    "name": "Coes Creek",
    "lat": "-26.6472",
    "lng": "152.94943"
  },
  {
    "country": "AU",
    "name": "Champion Lakes",
    "lat": "-32.11913",
    "lng": "115.98617"
  },
  {
    "country": "AU",
    "name": "Blue Bay",
    "lat": "-33.35413",
    "lng": "151.50024"
  },
  {
    "country": "AU",
    "name": "Aroona",
    "lat": "-26.78173",
    "lng": "153.11652"
  },
  {
    "country": "AU",
    "name": "Double Bay",
    "lat": "-33.87782",
    "lng": "151.24354"
  },
  {
    "country": "AU",
    "name": "Birrong",
    "lat": "-33.89255",
    "lng": "151.02075"
  },
  {
    "country": "AU",
    "name": "Dudley",
    "lat": "-32.99373",
    "lng": "151.72197"
  },
  {
    "country": "AU",
    "name": "Kensington Grove",
    "lat": "-27.53278",
    "lng": "152.47205"
  },
  {
    "country": "AU",
    "name": "Bligh Park",
    "lat": "-33.63985",
    "lng": "150.80248"
  },
  {
    "country": "AU",
    "name": "Eagle Vale",
    "lat": "-34.03747",
    "lng": "150.8136"
  },
  {
    "country": "AU",
    "name": "Brookdale",
    "lat": "-32.16696",
    "lng": "116.00193"
  },
  {
    "country": "AU",
    "name": "Marrara",
    "lat": "-12.40041",
    "lng": "130.8929"
  },
  {
    "country": "AU",
    "name": "Little Mountain",
    "lat": "-26.78436",
    "lng": "153.09218"
  },
  {
    "country": "AU",
    "name": "Bardon",
    "lat": "-27.461",
    "lng": "152.9792"
  },
  {
    "country": "AU",
    "name": "Edgeworth",
    "lat": "-32.92508",
    "lng": "151.61612"
  },
  {
    "country": "AU",
    "name": "Wakerley",
    "lat": "-27.483",
    "lng": "153.15589"
  },
  {
    "country": "AU",
    "name": "Elizabeth Bay",
    "lat": "-33.87181",
    "lng": "151.22706"
  },
  {
    "country": "AU",
    "name": "Emerton",
    "lat": "-33.74411",
    "lng": "150.80644"
  },
  {
    "country": "AU",
    "name": "New Beith",
    "lat": "-27.79359",
    "lng": "152.88443"
  },
  {
    "country": "AU",
    "name": "Erskineville",
    "lat": "-33.90254",
    "lng": "151.18579"
  },
  {
    "country": "AU",
    "name": "Eschol Park",
    "lat": "-34.02982",
    "lng": "150.80957"
  },
  {
    "country": "AU",
    "name": "Pacific Paradise",
    "lat": "-26.61807",
    "lng": "153.07781"
  },
  {
    "country": "AU",
    "name": "Ainslie",
    "lat": "-35.26255",
    "lng": "149.1437"
  },
  {
    "country": "AU",
    "name": "Farmborough Heights",
    "lat": "-34.45499",
    "lng": "150.81308"
  },
  {
    "country": "AU",
    "name": "Five Dock",
    "lat": "-33.8674",
    "lng": "151.12905"
  },
  {
    "country": "AU",
    "name": "Gailes",
    "lat": "-27.61133",
    "lng": "152.9132"
  },
  {
    "country": "AU",
    "name": "Eastlakes",
    "lat": "-33.93196",
    "lng": "151.21214"
  },
  {
    "country": "AU",
    "name": "Rosslea",
    "lat": "-19.29871",
    "lng": "146.79824"
  },
  {
    "country": "AU",
    "name": "Holland Park West",
    "lat": "-27.52625",
    "lng": "153.06046"
  },
  {
    "country": "AU",
    "name": "Huntingdale",
    "lat": "-37.90766",
    "lng": "145.10847"
  },
  {
    "country": "AU",
    "name": "Gaven",
    "lat": "-27.95651",
    "lng": "153.33453"
  },
  {
    "country": "AU",
    "name": "Tanawha",
    "lat": "-26.71981",
    "lng": "153.03018"
  },
  {
    "country": "AU",
    "name": "Glendenning",
    "lat": "-33.7483",
    "lng": "150.85411"
  },
  {
    "country": "AU",
    "name": "Tanah Merah",
    "lat": "-27.67151",
    "lng": "153.17019"
  },
  {
    "country": "AU",
    "name": "Westcourt",
    "lat": "-16.93044",
    "lng": "145.75296"
  },
  {
    "country": "AU",
    "name": "Wulguru",
    "lat": "-19.3285",
    "lng": "146.81842"
  },
  {
    "country": "AU",
    "name": "Yarrabah",
    "lat": "-16.99454",
    "lng": "145.89716"
  },
  {
    "country": "AU",
    "name": "Greenacre",
    "lat": "-33.90034",
    "lng": "151.05563"
  },
  {
    "country": "AU",
    "name": "Greenfield Park",
    "lat": "-33.87461",
    "lng": "150.89189"
  },
  {
    "country": "AU",
    "name": "Beulah Park",
    "lat": "-34.91768",
    "lng": "138.64522"
  },
  {
    "country": "AU",
    "name": "Eden Hills",
    "lat": "-35.0211",
    "lng": "138.59567"
  },
  {
    "country": "AU",
    "name": "Glandore",
    "lat": "-34.96154",
    "lng": "138.56832"
  },
  {
    "country": "AU",
    "name": "Greystanes",
    "lat": "-33.82346",
    "lng": "150.94607"
  },
  {
    "country": "AU",
    "name": "Halekulani",
    "lat": "-33.21914",
    "lng": "151.55251"
  },
  {
    "country": "AU",
    "name": "Hammondville",
    "lat": "-33.94827",
    "lng": "150.95211"
  },
  {
    "country": "AU",
    "name": "Morphettville",
    "lat": "-34.98852",
    "lng": "138.53979"
  },
  {
    "country": "AU",
    "name": "Newton",
    "lat": "-34.88207",
    "lng": "138.68249"
  },
  {
    "country": "AU",
    "name": "Horningsea Park",
    "lat": "-33.94341",
    "lng": "150.84528"
  },
  {
    "country": "AU",
    "name": "Newtown",
    "lat": "-27.55602",
    "lng": "151.93255"
  },
  {
    "country": "AU",
    "name": "Hoxton Park",
    "lat": "-33.93126",
    "lng": "150.85412"
  },
  {
    "country": "AU",
    "name": "Ellenbrook",
    "lat": "-31.76737",
    "lng": "115.96936"
  },
  {
    "country": "AU",
    "name": "Hurlstone Park",
    "lat": "-33.90988",
    "lng": "151.12867"
  },
  {
    "country": "AU",
    "name": "Islington",
    "lat": "-32.91388",
    "lng": "151.74739"
  },
  {
    "country": "AU",
    "name": "Castletown",
    "lat": "-33.83237",
    "lng": "121.91563"
  },
  {
    "country": "AU",
    "name": "Connolly",
    "lat": "-31.74864",
    "lng": "115.75053"
  },
  {
    "country": "AU",
    "name": "Lockridge",
    "lat": "-31.88168",
    "lng": "115.95031"
  },
  {
    "country": "AU",
    "name": "Jerrabomberra",
    "lat": "-35.38441",
    "lng": "149.20248"
  },
  {
    "country": "AU",
    "name": "Alderley",
    "lat": "-27.42553",
    "lng": "153.00102"
  },
  {
    "country": "AU",
    "name": "Glen Forrest",
    "lat": "-31.91929",
    "lng": "116.10726"
  },
  {
    "country": "AU",
    "name": "Kanahooka",
    "lat": "-34.4916",
    "lng": "150.80817"
  },
  {
    "country": "AU",
    "name": "Greenfields",
    "lat": "-32.52429",
    "lng": "115.76315"
  },
  {
    "country": "AU",
    "name": "Hamilton Hill",
    "lat": "-32.08451",
    "lng": "115.77946"
  },
  {
    "country": "AU",
    "name": "Gray",
    "lat": "-12.49036",
    "lng": "130.98228"
  },
  {
    "country": "AU",
    "name": "Karabar",
    "lat": "-35.37595",
    "lng": "149.2328"
  },
  {
    "country": "AU",
    "name": "Norville",
    "lat": "-24.8931",
    "lng": "152.34089"
  },
  {
    "country": "AU",
    "name": "Kariong",
    "lat": "-33.43972",
    "lng": "151.29453"
  },
  {
    "country": "AU",
    "name": "Alexandra Hills",
    "lat": "-27.53221",
    "lng": "153.22889"
  },
  {
    "country": "AU",
    "name": "Kilaben Bay",
    "lat": "-33.02395",
    "lng": "151.59197"
  },
  {
    "country": "AU",
    "name": "Jamisontown",
    "lat": "-33.76797",
    "lng": "150.67681"
  },
  {
    "country": "AU",
    "name": "Nollamara",
    "lat": "-31.88016",
    "lng": "115.84543"
  },
  {
    "country": "AU",
    "name": "Kingsgrove",
    "lat": "-33.93932",
    "lng": "151.09928"
  },
  {
    "country": "AU",
    "name": "Taranganba",
    "lat": "-23.14435",
    "lng": "150.75139"
  },
  {
    "country": "AU",
    "name": "Hobartville",
    "lat": "-33.60435",
    "lng": "150.74299"
  },
  {
    "country": "AU",
    "name": "Sinagra",
    "lat": "-31.74261",
    "lng": "115.80633"
  },
  {
    "country": "AU",
    "name": "Liberty Grove",
    "lat": "-33.84095",
    "lng": "151.08402"
  },
  {
    "country": "AU",
    "name": "Jandakot",
    "lat": "-32.10158",
    "lng": "115.87083"
  },
  {
    "country": "AU",
    "name": "Withers",
    "lat": "-33.36807",
    "lng": "115.6305"
  },
  {
    "country": "AU",
    "name": "Lalor Park",
    "lat": "-33.7609",
    "lng": "150.93123"
  },
  {
    "country": "AU",
    "name": "Langford",
    "lat": "-32.04092",
    "lng": "115.94157"
  },
  {
    "country": "AU",
    "name": "Bellbowrie",
    "lat": "-27.55939",
    "lng": "152.88278"
  },
  {
    "country": "AU",
    "name": "Lathlain",
    "lat": "-31.96755",
    "lng": "115.90631"
  },
  {
    "country": "AU",
    "name": "Leda",
    "lat": "-32.26766",
    "lng": "115.7993"
  },
  {
    "country": "AU",
    "name": "Leonay",
    "lat": "-33.76542",
    "lng": "150.64806"
  },
  {
    "country": "AU",
    "name": "Dernancourt",
    "lat": "-34.86199",
    "lng": "138.67658"
  },
  {
    "country": "AU",
    "name": "Lethbridge Park",
    "lat": "-33.73716",
    "lng": "150.80042"
  },
  {
    "country": "AU",
    "name": "Callaghan",
    "lat": "-32.89205",
    "lng": "151.70531"
  },
  {
    "country": "AU",
    "name": "Fraser",
    "lat": "-35.1917",
    "lng": "149.04534"
  },
  {
    "country": "AU",
    "name": "Mount Tarcoola",
    "lat": "-28.79859",
    "lng": "114.6253"
  },
  {
    "country": "AU",
    "name": "Mount Richon",
    "lat": "-32.17349",
    "lng": "116.02137"
  },
  {
    "country": "AU",
    "name": "Leppington",
    "lat": "-33.96983",
    "lng": "150.79675"
  },
  {
    "country": "AU",
    "name": "Millers Point",
    "lat": "-33.85957",
    "lng": "151.20406"
  },
  {
    "country": "AU",
    "name": "Bakewell",
    "lat": "-12.49684",
    "lng": "130.99344"
  },
  {
    "country": "AU",
    "name": "Padbury",
    "lat": "-31.80645",
    "lng": "115.7688"
  },
  {
    "country": "AU",
    "name": "Macquarie Fields",
    "lat": "-33.99206",
    "lng": "150.89307"
  },
  {
    "country": "AU",
    "name": "Gordon",
    "lat": "-35.45676",
    "lng": "149.08498"
  },
  {
    "country": "AU",
    "name": "Pearsall",
    "lat": "-31.78117",
    "lng": "115.81823"
  },
  {
    "country": "AU",
    "name": "Beachlands",
    "lat": "-28.7857",
    "lng": "114.60192"
  },
  {
    "country": "AU",
    "name": "Park Grove",
    "lat": "-41.05478",
    "lng": "145.88201"
  },
  {
    "country": "AU",
    "name": "Lynwood",
    "lat": "-32.04013",
    "lng": "115.92888"
  },
  {
    "country": "AU",
    "name": "Marayong",
    "lat": "-33.74824",
    "lng": "150.89272"
  },
  {
    "country": "AU",
    "name": "Alawa",
    "lat": "-12.37954",
    "lng": "130.8732"
  },
  {
    "country": "AU",
    "name": "Mardi",
    "lat": "-33.29368",
    "lng": "151.4015"
  },
  {
    "country": "AU",
    "name": "Holtze",
    "lat": "-12.4485",
    "lng": "131.00556"
  },
  {
    "country": "AU",
    "name": "Johnston",
    "lat": "-12.48764",
    "lng": "131.01169"
  },
  {
    "country": "AU",
    "name": "East Victoria Park",
    "lat": "-31.98894",
    "lng": "115.90388"
  },
  {
    "country": "AU",
    "name": "McMahons Point",
    "lat": "-33.84492",
    "lng": "151.20307"
  },
  {
    "country": "AU",
    "name": "Willagee",
    "lat": "-32.05196",
    "lng": "115.80533"
  },
  {
    "country": "AU",
    "name": "Giralang",
    "lat": "-35.21093",
    "lng": "149.096"
  },
  {
    "country": "AU",
    "name": "Milperra",
    "lat": "-33.93934",
    "lng": "150.98148"
  },
  {
    "country": "AU",
    "name": "Soldiers Hill",
    "lat": "-37.54962",
    "lng": "143.85872"
  },
  {
    "country": "AU",
    "name": "Middle Cove",
    "lat": "-33.7928",
    "lng": "151.21248"
  },
  {
    "country": "AU",
    "name": "Mawson",
    "lat": "-35.3634",
    "lng": "149.09863"
  },
  {
    "country": "AU",
    "name": "Tecoma",
    "lat": "-37.90303",
    "lng": "145.34468"
  },
  {
    "country": "AU",
    "name": "Minchinbury",
    "lat": "-33.78724",
    "lng": "150.82956"
  },
  {
    "country": "AU",
    "name": "Eli Waters",
    "lat": "-25.27922",
    "lng": "152.8091"
  },
  {
    "country": "AU",
    "name": "Mount Kuring-Gai",
    "lat": "-33.64197",
    "lng": "151.12865"
  },
  {
    "country": "AU",
    "name": "Mount Pritchard",
    "lat": "-33.90295",
    "lng": "150.90465"
  },
  {
    "country": "AU",
    "name": "Telina",
    "lat": "-23.88834",
    "lng": "151.25379"
  },
  {
    "country": "AU",
    "name": "Palmyra",
    "lat": "-32.04502",
    "lng": "115.78589"
  },
  {
    "country": "AU",
    "name": "Narrawallee",
    "lat": "-35.31243",
    "lng": "150.46351"
  },
  {
    "country": "AU",
    "name": "Brockman",
    "lat": "-24.88126",
    "lng": "113.65365"
  },
  {
    "country": "AU",
    "name": "Mount Lofty",
    "lat": "-27.54628",
    "lng": "151.97218"
  },
  {
    "country": "AU",
    "name": "Mount Vernon",
    "lat": "-33.86036",
    "lng": "150.81007"
  },
  {
    "country": "AU",
    "name": "Middle Park",
    "lat": "-27.55596",
    "lng": "152.92223"
  },
  {
    "country": "AU",
    "name": "Niagara Park",
    "lat": "-33.37638",
    "lng": "151.3486"
  },
  {
    "country": "AU",
    "name": "Stratton",
    "lat": "-31.86828",
    "lng": "116.04066"
  },
  {
    "country": "AU",
    "name": "North Avoca",
    "lat": "-33.45608",
    "lng": "151.43511"
  },
  {
    "country": "AU",
    "name": "Oxley Park",
    "lat": "-33.77072",
    "lng": "150.79502"
  },
  {
    "country": "AU",
    "name": "Oxley Vale",
    "lat": "-31.06316",
    "lng": "150.9006"
  },
  {
    "country": "AU",
    "name": "Bentley Park",
    "lat": "-17.00389",
    "lng": "145.73819"
  },
  {
    "country": "AU",
    "name": "North St Marys",
    "lat": "-33.75491",
    "lng": "150.78435"
  },
  {
    "country": "AU",
    "name": "Mayfield East",
    "lat": "-32.90031",
    "lng": "151.74972"
  },
  {
    "country": "AU",
    "name": "Oakville",
    "lat": "-33.61558",
    "lng": "150.88006"
  },
  {
    "country": "AU",
    "name": "Berserker",
    "lat": "-23.35817",
    "lng": "150.52042"
  },
  {
    "country": "AU",
    "name": "Oak Flats",
    "lat": "-34.56229",
    "lng": "150.82193"
  },
  {
    "country": "AU",
    "name": "Birtinya",
    "lat": "-26.74322",
    "lng": "153.11913"
  },
  {
    "country": "AU",
    "name": "Narwee",
    "lat": "-33.94653",
    "lng": "151.06919"
  },
  {
    "country": "AU",
    "name": "Panania",
    "lat": "-33.95366",
    "lng": "150.99733"
  },
  {
    "country": "AU",
    "name": "Point Frederick",
    "lat": "-33.44036",
    "lng": "151.34322"
  },
  {
    "country": "AU",
    "name": "Mile End",
    "lat": "-34.92654",
    "lng": "138.57033"
  },
  {
    "country": "AU",
    "name": "Primbee",
    "lat": "-34.50358",
    "lng": "150.8795"
  },
  {
    "country": "AU",
    "name": "Claymore",
    "lat": "-34.04649",
    "lng": "150.81114"
  },
  {
    "country": "AU",
    "name": "Putney",
    "lat": "-33.82613",
    "lng": "151.1063"
  },
  {
    "country": "AU",
    "name": "Tootgarook",
    "lat": "-38.3777",
    "lng": "144.85015"
  },
  {
    "country": "AU",
    "name": "Condell Park",
    "lat": "-33.92458",
    "lng": "151.01093"
  },
  {
    "country": "AU",
    "name": "Berrinba",
    "lat": "-27.65853",
    "lng": "153.07888"
  },
  {
    "country": "AU",
    "name": "Sadleir",
    "lat": "-33.91713",
    "lng": "150.89093"
  },
  {
    "country": "AU",
    "name": "Ropes Crossing",
    "lat": "-33.73276",
    "lng": "150.79104"
  },
  {
    "country": "AU",
    "name": "Rosemeadow",
    "lat": "-34.10414",
    "lng": "150.79282"
  },
  {
    "country": "AU",
    "name": "Silver Sands",
    "lat": "-32.50857",
    "lng": "115.73599"
  },
  {
    "country": "AU",
    "name": "Ruse",
    "lat": "-34.06976",
    "lng": "150.84168"
  },
  {
    "country": "AU",
    "name": "Spencer Park",
    "lat": "-35.00515",
    "lng": "117.90005"
  },
  {
    "country": "AU",
    "name": "Saratoga",
    "lat": "-33.47564",
    "lng": "151.35207"
  },
  {
    "country": "AU",
    "name": "Viveash",
    "lat": "-31.87861",
    "lng": "115.99661"
  },
  {
    "country": "AU",
    "name": "Kawana",
    "lat": "-23.33933",
    "lng": "150.50493"
  },
  {
    "country": "AU",
    "name": "Kedron",
    "lat": "-27.40286",
    "lng": "153.02969"
  },
  {
    "country": "AU",
    "name": "Burns Beach",
    "lat": "-31.7206",
    "lng": "115.7205"
  },
  {
    "country": "AU",
    "name": "Brinsmead",
    "lat": "-16.89921",
    "lng": "145.71554"
  },
  {
    "country": "AU",
    "name": "South Hurstville",
    "lat": "-33.97756",
    "lng": "151.1055"
  },
  {
    "country": "AU",
    "name": "Glengowrie",
    "lat": "-34.98708",
    "lng": "138.53674"
  },
  {
    "country": "AU",
    "name": "Wyoming",
    "lat": "-33.40387",
    "lng": "151.36254"
  },
  {
    "country": "AU",
    "name": "Branyan",
    "lat": "-24.91347",
    "lng": "152.27251"
  },
  {
    "country": "AU",
    "name": "Speers Point",
    "lat": "-32.96383",
    "lng": "151.62618"
  },
  {
    "country": "AU",
    "name": "Firle",
    "lat": "-34.90459",
    "lng": "138.65319"
  },
  {
    "country": "AU",
    "name": "Summerland Point",
    "lat": "-33.14091",
    "lng": "151.56561"
  },
  {
    "country": "AU",
    "name": "Seaview Downs",
    "lat": "-35.03698",
    "lng": "138.53796"
  },
  {
    "country": "AU",
    "name": "Hewett",
    "lat": "-34.57801",
    "lng": "138.75242"
  },
  {
    "country": "AU",
    "name": "Calamvale",
    "lat": "-27.62329",
    "lng": "153.04785"
  },
  {
    "country": "AU",
    "name": "Burdell",
    "lat": "-19.25056",
    "lng": "146.69877"
  },
  {
    "country": "AU",
    "name": "Yagoona",
    "lat": "-33.9049",
    "lng": "151.01996"
  },
  {
    "country": "AU",
    "name": "Zetland",
    "lat": "-33.90748",
    "lng": "151.20857"
  },
  {
    "country": "AU",
    "name": "Machans Beach",
    "lat": "-16.85849",
    "lng": "145.74468"
  },
  {
    "country": "AU",
    "name": "Shelly Beach",
    "lat": "-33.36999",
    "lng": "151.48522"
  },
  {
    "country": "AU",
    "name": "Jubilee Pocket",
    "lat": "-20.28809",
    "lng": "148.72938"
  },
  {
    "country": "AU",
    "name": "Bell Park",
    "lat": "-38.10793",
    "lng": "144.33839"
  },
  {
    "country": "AU",
    "name": "Bell Post Hill",
    "lat": "-38.09564",
    "lng": "144.31968"
  },
  {
    "country": "AU",
    "name": "Enoggera",
    "lat": "-27.42832",
    "lng": "152.97467"
  },
  {
    "country": "AU",
    "name": "Aubin Grove",
    "lat": "-32.16714",
    "lng": "115.86264"
  },
  {
    "country": "AU",
    "name": "Quarry Hill",
    "lat": "-36.77646",
    "lng": "144.28024"
  },
  {
    "country": "AU",
    "name": "Albanvale",
    "lat": "-37.74609",
    "lng": "144.76856"
  },
  {
    "country": "AU",
    "name": "Battery Hill",
    "lat": "-26.77878",
    "lng": "153.12887"
  },
  {
    "country": "AU",
    "name": "Coombabah",
    "lat": "-27.91073",
    "lng": "153.37093"
  },
  {
    "country": "AU",
    "name": "Coral Cove",
    "lat": "-24.88309",
    "lng": "152.48266"
  },
  {
    "country": "AU",
    "name": "Gillen",
    "lat": "-23.70915",
    "lng": "133.86596"
  },
  {
    "country": "AU",
    "name": "Park Avenue",
    "lat": "-23.35327",
    "lng": "150.5189"
  },
  {
    "country": "AU",
    "name": "Currumbin Valley",
    "lat": "-28.20805",
    "lng": "153.39424"
  },
  {
    "country": "AU",
    "name": "Gunn",
    "lat": "-12.48765",
    "lng": "130.99322"
  },
  {
    "country": "AU",
    "name": "Turvey Park",
    "lat": "-35.12849",
    "lng": "147.36264"
  },
  {
    "country": "AU",
    "name": "Park Orchards",
    "lat": "-37.77688",
    "lng": "145.21463"
  },
  {
    "country": "AU",
    "name": "Hayborough",
    "lat": "-35.53129",
    "lng": "138.65037"
  },
  {
    "country": "AU",
    "name": "Heckenberg",
    "lat": "-33.90828",
    "lng": "150.88982"
  },
  {
    "country": "AU",
    "name": "Hove",
    "lat": "-35.00814",
    "lng": "138.5212"
  },
  {
    "country": "AU",
    "name": "Tregear",
    "lat": "-33.74562",
    "lng": "150.79294"
  },
  {
    "country": "AU",
    "name": "Flora Hill",
    "lat": "-36.78123",
    "lng": "144.29562"
  },
  {
    "country": "AU",
    "name": "Earlville",
    "lat": "-16.95078",
    "lng": "145.73308"
  },
  {
    "country": "AU",
    "name": "Golden Square",
    "lat": "-36.77265",
    "lng": "144.25271"
  },
  {
    "country": "AU",
    "name": "Annerley",
    "lat": "-27.51228",
    "lng": "153.03248"
  },
  {
    "country": "AU",
    "name": "Tranmere",
    "lat": "-34.9055",
    "lng": "138.66212"
  },
  {
    "country": "AU",
    "name": "Haven",
    "lat": "-36.76072",
    "lng": "142.19426"
  },
  {
    "country": "AU",
    "name": "Anstead",
    "lat": "-27.53781",
    "lng": "152.86187"
  },
  {
    "country": "AU",
    "name": "Broadwater",
    "lat": "-33.66304",
    "lng": "115.2842"
  },
  {
    "country": "AU",
    "name": "Currans Hill",
    "lat": "-34.04311",
    "lng": "150.77301"
  },
  {
    "country": "AU",
    "name": "Durack",
    "lat": "-12.47308",
    "lng": "130.97208"
  },
  {
    "country": "AU",
    "name": "Highton",
    "lat": "-38.17058",
    "lng": "144.3114"
  },
  {
    "country": "AU",
    "name": "Kealba",
    "lat": "-37.7371",
    "lng": "144.8283"
  },
  {
    "country": "AU",
    "name": "Hotham Heights",
    "lat": "-36.99298",
    "lng": "147.15225"
  },
  {
    "country": "AU",
    "name": "St Morris",
    "lat": "-34.91107",
    "lng": "138.6536"
  },
  {
    "country": "AU",
    "name": "Jacana",
    "lat": "-37.68778",
    "lng": "144.91111"
  },
  {
    "country": "AU",
    "name": "Jan Juc",
    "lat": "-38.34455",
    "lng": "144.29518"
  },
  {
    "country": "AU",
    "name": "Warners Bay",
    "lat": "-32.97251",
    "lng": "151.65268"
  },
  {
    "country": "AU",
    "name": "Junortoun",
    "lat": "-36.77106",
    "lng": "144.36311"
  },
  {
    "country": "AU",
    "name": "Dulwich Hill",
    "lat": "-33.9041",
    "lng": "151.13945"
  },
  {
    "country": "AU",
    "name": "Yarrambat",
    "lat": "-37.63751",
    "lng": "145.13486"
  },
  {
    "country": "AU",
    "name": "Sinnamon Park",
    "lat": "-27.54436",
    "lng": "152.9489"
  },
  {
    "country": "AU",
    "name": "Wiley Park",
    "lat": "-33.9242",
    "lng": "151.06737"
  },
  {
    "country": "AU",
    "name": "Westdale",
    "lat": "-31.09052",
    "lng": "150.85678"
  },
  {
    "country": "AU",
    "name": "Hillvue",
    "lat": "-31.12756",
    "lng": "150.90711"
  },
  {
    "country": "AU",
    "name": "Mount Sheridan",
    "lat": "-16.98608",
    "lng": "145.73244"
  },
  {
    "country": "AU",
    "name": "Viewbank",
    "lat": "-37.73991",
    "lng": "145.09323"
  },
  {
    "country": "AU",
    "name": "Vale Park",
    "lat": "-34.88604",
    "lng": "138.62714"
  },
  {
    "country": "AU",
    "name": "Bellbird Park",
    "lat": "-27.63674",
    "lng": "152.88663"
  },
  {
    "country": "AU",
    "name": "Bellmere",
    "lat": "-27.08441",
    "lng": "152.89003"
  },
  {
    "country": "AU",
    "name": "Gulliver",
    "lat": "-19.28814",
    "lng": "146.77691"
  },
  {
    "country": "AU",
    "name": "Albert Park",
    "lat": "-37.84107",
    "lng": "144.95198"
  },
  {
    "country": "AU",
    "name": "Garbutt",
    "lat": "-19.26602",
    "lng": "146.78224"
  },
  {
    "country": "AU",
    "name": "Brookwater",
    "lat": "-27.66128",
    "lng": "152.89669"
  },
  {
    "country": "AU",
    "name": "Buddina",
    "lat": "-26.69565",
    "lng": "153.13302"
  },
  {
    "country": "AU",
    "name": "Nakara",
    "lat": "-12.37054",
    "lng": "130.87728"
  },
  {
    "country": "AU",
    "name": "Crestmead",
    "lat": "-27.68759",
    "lng": "153.08444"
  },
  {
    "country": "AU",
    "name": "Doolandella",
    "lat": "-27.61328",
    "lng": "152.98547"
  },
  {
    "country": "AU",
    "name": "Fletcher",
    "lat": "-32.87232",
    "lng": "151.64008"
  },
  {
    "country": "AU",
    "name": "Fig Tree Pocket",
    "lat": "-27.52784",
    "lng": "152.9619"
  },
  {
    "country": "AU",
    "name": "Munruben",
    "lat": "-27.74635",
    "lng": "153.03119"
  },
  {
    "country": "AU",
    "name": "Forestdale",
    "lat": "-27.66334",
    "lng": "153.00383"
  },
  {
    "country": "AU",
    "name": "Frenchville",
    "lat": "-23.34761",
    "lng": "150.5445"
  },
  {
    "country": "AU",
    "name": "Griffin",
    "lat": "-27.27149",
    "lng": "153.03942"
  },
  {
    "country": "AU",
    "name": "Highvale",
    "lat": "-27.37227",
    "lng": "152.80195"
  },
  {
    "country": "AU",
    "name": "Joyner",
    "lat": "-27.27613",
    "lng": "152.94471"
  },
  {
    "country": "AU",
    "name": "Kepnock",
    "lat": "-24.87606",
    "lng": "152.37518"
  },
  {
    "country": "AU",
    "name": "West Croydon",
    "lat": "-34.89448",
    "lng": "138.55931"
  },
  {
    "country": "AU",
    "name": "Kuraby",
    "lat": "-27.60683",
    "lng": "153.09367"
  },
  {
    "country": "AU",
    "name": "Craigie",
    "lat": "-31.78727",
    "lng": "115.76989"
  },
  {
    "country": "AU",
    "name": "Condon",
    "lat": "-19.32968",
    "lng": "146.71663"
  },
  {
    "country": "AU",
    "name": "Koongal",
    "lat": "-23.36887",
    "lng": "150.54917"
  },
  {
    "country": "AU",
    "name": "Logan Central",
    "lat": "-27.64385",
    "lng": "153.10725"
  },
  {
    "country": "AU",
    "name": "McDowall",
    "lat": "-27.38266",
    "lng": "152.99194"
  },
  {
    "country": "AU",
    "name": "Lake Macdonald",
    "lat": "-26.38482",
    "lng": "152.93213"
  },
  {
    "country": "AU",
    "name": "Maroochy River",
    "lat": "-26.57767",
    "lng": "153.01884"
  },
  {
    "country": "AU",
    "name": "Marsden",
    "lat": "-27.67342",
    "lng": "153.09732"
  },
  {
    "country": "AU",
    "name": "Gowrie",
    "lat": "-35.41187",
    "lng": "149.10903"
  },
  {
    "country": "AU",
    "name": "Meadowbrook",
    "lat": "-27.66401",
    "lng": "153.14465"
  },
  {
    "country": "AU",
    "name": "Minyama",
    "lat": "-26.69573",
    "lng": "153.12353"
  },
  {
    "country": "AU",
    "name": "Mooroobool",
    "lat": "-16.93489",
    "lng": "145.73137"
  },
  {
    "country": "AU",
    "name": "Manunda",
    "lat": "-16.91721",
    "lng": "145.7492"
  },
  {
    "country": "AU",
    "name": "Forest Lodge",
    "lat": "-33.88137",
    "lng": "151.18"
  },
  {
    "country": "AU",
    "name": "Chirnside Park",
    "lat": "-37.7386",
    "lng": "145.31431"
  },
  {
    "country": "AU",
    "name": "Moorooka",
    "lat": "-27.53436",
    "lng": "153.0246"
  },
  {
    "country": "AU",
    "name": "Mundoolun",
    "lat": "-27.8994",
    "lng": "153.0715"
  },
  {
    "country": "AU",
    "name": "Coolaroo",
    "lat": "-37.65675",
    "lng": "144.9346"
  },
  {
    "country": "AU",
    "name": "New Auckland",
    "lat": "-23.88359",
    "lng": "151.23563"
  },
  {
    "country": "AU",
    "name": "Karawara",
    "lat": "-32.0086",
    "lng": "115.88114"
  },
  {
    "country": "AU",
    "name": "Georges Hall",
    "lat": "-33.90879",
    "lng": "150.98852"
  },
  {
    "country": "AU",
    "name": "Macgregor",
    "lat": "-35.2098",
    "lng": "149.01101"
  },
  {
    "country": "AU",
    "name": "Ninderry",
    "lat": "-26.54094",
    "lng": "152.9752"
  },
  {
    "country": "AU",
    "name": "Dinner Plain",
    "lat": "-37.0236",
    "lng": "147.24124"
  },
  {
    "country": "AU",
    "name": "Soldiers Hill",
    "lat": "-20.70533",
    "lng": "139.48988"
  },
  {
    "country": "AU",
    "name": "Risdon Park",
    "lat": "-33.19661",
    "lng": "137.99399"
  },
  {
    "country": "AU",
    "name": "Eaglemont",
    "lat": "-37.76379",
    "lng": "145.0638"
  },
  {
    "country": "AU",
    "name": "Wandina",
    "lat": "-28.81938",
    "lng": "114.63464"
  },
  {
    "country": "AU",
    "name": "Pacific Pines",
    "lat": "-27.93994",
    "lng": "153.31436"
  },
  {
    "country": "AU",
    "name": "Rosewater",
    "lat": "-34.852",
    "lng": "138.52158"
  },
  {
    "country": "AU",
    "name": "Pelican Waters",
    "lat": "-26.83354",
    "lng": "153.10013"
  },
  {
    "country": "AU",
    "name": "Robina",
    "lat": "-28.07071",
    "lng": "153.39329"
  },
  {
    "country": "AU",
    "name": "Runaway Bay",
    "lat": "-27.91386",
    "lng": "153.39775"
  },
  {
    "country": "AU",
    "name": "Runcorn",
    "lat": "-27.59756",
    "lng": "153.07699"
  },
  {
    "country": "AU",
    "name": "Rural View",
    "lat": "-21.06447",
    "lng": "149.1646"
  },
  {
    "country": "AU",
    "name": "Junction Village",
    "lat": "-38.13636",
    "lng": "145.29684"
  },
  {
    "country": "AU",
    "name": "Sunrise Beach",
    "lat": "-26.41646",
    "lng": "153.10305"
  },
  {
    "country": "AU",
    "name": "Sunset",
    "lat": "-20.71026",
    "lng": "139.50824"
  },
  {
    "country": "AU",
    "name": "The Gemfields",
    "lat": "-23.53014",
    "lng": "147.79679"
  },
  {
    "country": "AU",
    "name": "Tinana",
    "lat": "-25.55196",
    "lng": "152.6659"
  },
  {
    "country": "AU",
    "name": "Tingalpa",
    "lat": "-27.4736",
    "lng": "153.12704"
  },
  {
    "country": "AU",
    "name": "Hamlyn Terrace",
    "lat": "-33.25125",
    "lng": "151.47627"
  },
  {
    "country": "AU",
    "name": "Hillsdale",
    "lat": "-33.95151",
    "lng": "151.22784"
  },
  {
    "country": "AU",
    "name": "Hampstead Gardens",
    "lat": "-34.87448",
    "lng": "138.62881"
  },
  {
    "country": "AU",
    "name": "Warana",
    "lat": "-26.72273",
    "lng": "153.12688"
  },
  {
    "country": "AU",
    "name": "Warner",
    "lat": "-27.31222",
    "lng": "152.94981"
  },
  {
    "country": "AU",
    "name": "Maiden Gully",
    "lat": "-36.75389",
    "lng": "144.20789"
  },
  {
    "country": "AU",
    "name": "Willowbank",
    "lat": "-27.68215",
    "lng": "152.67407"
  },
  {
    "country": "AU",
    "name": "Wilsonton",
    "lat": "-27.54312",
    "lng": "151.91684"
  },
  {
    "country": "AU",
    "name": "Woodend",
    "lat": "-27.60554",
    "lng": "152.75307"
  },
  {
    "country": "AU",
    "name": "Goodwood",
    "lat": "-34.95092",
    "lng": "138.5923"
  },
  {
    "country": "AU",
    "name": "Wandi",
    "lat": "-32.1943",
    "lng": "115.8763"
  },
  {
    "country": "AU",
    "name": "Meadow Heights",
    "lat": "-37.65117",
    "lng": "144.91855"
  },
  {
    "country": "AU",
    "name": "Cooee Bay",
    "lat": "-23.14427",
    "lng": "150.76113"
  },
  {
    "country": "AU",
    "name": "Middle Park",
    "lat": "-37.85116",
    "lng": "144.96201"
  },
  {
    "country": "AU",
    "name": "Sun Valley",
    "lat": "-23.87516",
    "lng": "151.25752"
  },
  {
    "country": "AU",
    "name": "Torrens",
    "lat": "-35.37203",
    "lng": "149.08773"
  },
  {
    "country": "AU",
    "name": "Wurtulla",
    "lat": "-26.75648",
    "lng": "153.12805"
  },
  {
    "country": "AU",
    "name": "Kearns",
    "lat": "-34.02191",
    "lng": "150.80082"
  },
  {
    "country": "AU",
    "name": "Algester",
    "lat": "-27.61279",
    "lng": "153.03239"
  },
  {
    "country": "AU",
    "name": "Newtown",
    "lat": "-38.15391",
    "lng": "144.33507"
  },
  {
    "country": "AU",
    "name": "Kings Langley",
    "lat": "-33.75005",
    "lng": "150.93542"
  },
  {
    "country": "AU",
    "name": "Fulham Gardens",
    "lat": "-34.91483",
    "lng": "138.51324"
  },
  {
    "country": "AU",
    "name": "Flagstaff Hill",
    "lat": "-35.04861",
    "lng": "138.58285"
  },
  {
    "country": "AU",
    "name": "Flinders Park",
    "lat": "-34.91026",
    "lng": "138.54322"
  },
  {
    "country": "AU",
    "name": "Greenwith",
    "lat": "-34.76565",
    "lng": "138.71383"
  },
  {
    "country": "AU",
    "name": "Gulfview Heights",
    "lat": "-34.79545",
    "lng": "138.66937"
  },
  {
    "country": "AU",
    "name": "Huntfield Heights",
    "lat": "-35.15452",
    "lng": "138.51417"
  },
  {
    "country": "AU",
    "name": "Whitfield",
    "lat": "-16.89508",
    "lng": "145.73335"
  },
  {
    "country": "AU",
    "name": "Kidman Park",
    "lat": "-34.91224",
    "lng": "138.52693"
  },
  {
    "country": "AU",
    "name": "Lockleys",
    "lat": "-34.92588",
    "lng": "138.52803"
  },
  {
    "country": "AU",
    "name": "Maylands",
    "lat": "-34.91128",
    "lng": "138.63671"
  },
  {
    "country": "AU",
    "name": "McCracken",
    "lat": "-35.5358",
    "lng": "138.63121"
  },
  {
    "country": "AU",
    "name": "Willow Vale",
    "lat": "-27.84499",
    "lng": "153.2631"
  },
  {
    "country": "AU",
    "name": "Westminster",
    "lat": "-31.86744",
    "lng": "115.83919"
  },
  {
    "country": "AU",
    "name": "Paralowie",
    "lat": "-34.75705",
    "lng": "138.60819"
  },
  {
    "country": "AU",
    "name": "Lansvale",
    "lat": "-33.90073",
    "lng": "150.95078"
  },
  {
    "country": "AU",
    "name": "Winston",
    "lat": "-20.70374",
    "lng": "139.49913"
  },
  {
    "country": "AU",
    "name": "Sheidow Park",
    "lat": "-35.07928",
    "lng": "138.52738"
  },
  {
    "country": "AU",
    "name": "Stirling North",
    "lat": "-32.47986",
    "lng": "137.83804"
  },
  {
    "country": "AU",
    "name": "West Lakes",
    "lat": "-34.87299",
    "lng": "138.49458"
  },
  {
    "country": "AU",
    "name": "Tallai",
    "lat": "-28.06407",
    "lng": "153.32589"
  },
  {
    "country": "AU",
    "name": "Westbourne Park",
    "lat": "-34.97165",
    "lng": "138.59525"
  },
  {
    "country": "AU",
    "name": "Strathdale",
    "lat": "-36.76572",
    "lng": "144.31548"
  },
  {
    "country": "AU",
    "name": "Baldivis",
    "lat": "-32.32889",
    "lng": "115.83047"
  },
  {
    "country": "AU",
    "name": "Bertram",
    "lat": "-32.24369",
    "lng": "115.84572"
  },
  {
    "country": "AU",
    "name": "Banjup",
    "lat": "-32.14179",
    "lng": "115.88671"
  },
  {
    "country": "AU",
    "name": "Bayonet Head",
    "lat": "-34.97305",
    "lng": "117.93446"
  },
  {
    "country": "AU",
    "name": "Beckenham",
    "lat": "-32.02481",
    "lng": "115.95989"
  },
  {
    "country": "AU",
    "name": "Bibra Lake",
    "lat": "-32.09764",
    "lng": "115.81921"
  },
  {
    "country": "AU",
    "name": "Cable Beach",
    "lat": "-17.96098",
    "lng": "122.21269"
  },
  {
    "country": "AU",
    "name": "Driver",
    "lat": "-12.48602",
    "lng": "130.97539"
  },
  {
    "country": "AU",
    "name": "Cloverdale",
    "lat": "-31.96281",
    "lng": "115.94428"
  },
  {
    "country": "AU",
    "name": "Camillo",
    "lat": "-32.11292",
    "lng": "116.00205"
  },
  {
    "country": "AU",
    "name": "Carey Park",
    "lat": "-33.34878",
    "lng": "115.6493"
  },
  {
    "country": "AU",
    "name": "Parkinson",
    "lat": "-27.6434",
    "lng": "153.02975"
  },
  {
    "country": "AU",
    "name": "Carine",
    "lat": "-31.8523",
    "lng": "115.78258"
  },
  {
    "country": "AU",
    "name": "Cockburn Central",
    "lat": "-32.12133",
    "lng": "115.84776"
  },
  {
    "country": "AU",
    "name": "Girrawheen",
    "lat": "-31.84103",
    "lng": "115.83978"
  },
  {
    "country": "AU",
    "name": "Churchlands",
    "lat": "-31.92142",
    "lng": "115.79322"
  },
  {
    "country": "AU",
    "name": "Coolbellup",
    "lat": "-32.08124",
    "lng": "115.80606"
  },
  {
    "country": "AU",
    "name": "Cooloongup",
    "lat": "-32.31506",
    "lng": "115.77772"
  },
  {
    "country": "AU",
    "name": "Lurnea",
    "lat": "-33.93539",
    "lng": "150.89673"
  },
  {
    "country": "AU",
    "name": "Dalyellup",
    "lat": "-33.40844",
    "lng": "115.61506"
  },
  {
    "country": "AU",
    "name": "Dianella",
    "lat": "-31.88822",
    "lng": "115.87186"
  },
  {
    "country": "AU",
    "name": "Duncraig",
    "lat": "-31.83291",
    "lng": "115.7759"
  },
  {
    "country": "AU",
    "name": "Djugun",
    "lat": "-17.95395",
    "lng": "122.22792"
  },
  {
    "country": "AU",
    "name": "Edgewater",
    "lat": "-31.76547",
    "lng": "115.78223"
  },
  {
    "country": "AU",
    "name": "Forrestfield",
    "lat": "-31.98277",
    "lng": "116.00673"
  },
  {
    "country": "AU",
    "name": "Falcon",
    "lat": "-32.58244",
    "lng": "115.66199"
  },
  {
    "country": "AU",
    "name": "Forrestdale",
    "lat": "-32.1552",
    "lng": "115.93417"
  },
  {
    "country": "AU",
    "name": "Gidgegannup",
    "lat": "-31.75441",
    "lng": "116.18746"
  },
  {
    "country": "AU",
    "name": "Hammond Park",
    "lat": "-32.16853",
    "lng": "115.8504"
  },
  {
    "country": "AU",
    "name": "Halls Head",
    "lat": "-32.54315",
    "lng": "115.69665"
  },
  {
    "country": "AU",
    "name": "Hannans",
    "lat": "-30.71909",
    "lng": "121.4548"
  },
  {
    "country": "AU",
    "name": "Hillman",
    "lat": "-32.28327",
    "lng": "115.76364"
  },
  {
    "country": "AU",
    "name": "High Wycombe",
    "lat": "-31.94444",
    "lng": "116.0034"
  },
  {
    "country": "AU",
    "name": "Kingsley",
    "lat": "-31.81036",
    "lng": "115.80077"
  },
  {
    "country": "AU",
    "name": "Yallambie",
    "lat": "-37.72515",
    "lng": "145.09352"
  },
  {
    "country": "AU",
    "name": "Kardinya",
    "lat": "-32.06561",
    "lng": "115.81483"
  },
  {
    "country": "AU",
    "name": "Karrinyup",
    "lat": "-31.87233",
    "lng": "115.77684"
  },
  {
    "country": "AU",
    "name": "Madora Bay",
    "lat": "-32.46951",
    "lng": "115.75264"
  },
  {
    "country": "AU",
    "name": "Kewdale",
    "lat": "-31.97886",
    "lng": "115.95159"
  },
  {
    "country": "AU",
    "name": "Kiara",
    "lat": "-31.88156",
    "lng": "115.93893"
  },
  {
    "country": "AU",
    "name": "Lesmurdie",
    "lat": "-32.00199",
    "lng": "116.04821"
  },
  {
    "country": "AU",
    "name": "Martin",
    "lat": "-32.07549",
    "lng": "116.04536"
  },
  {
    "country": "AU",
    "name": "Millars Well",
    "lat": "-20.74168",
    "lng": "116.81731"
  },
  {
    "country": "AU",
    "name": "Melrose Park",
    "lat": "-33.81491",
    "lng": "151.07208"
  },
  {
    "country": "AU",
    "name": "Morley",
    "lat": "-31.88775",
    "lng": "115.9099"
  },
  {
    "country": "AU",
    "name": "Mount Hawthorn",
    "lat": "-31.92",
    "lng": "115.83509"
  },
  {
    "country": "AU",
    "name": "Mount Melville",
    "lat": "-35.02216",
    "lng": "117.87137"
  },
  {
    "country": "AU",
    "name": "Mount Nasura",
    "lat": "-32.1378",
    "lng": "116.02473"
  },
  {
    "country": "AU",
    "name": "Murdoch",
    "lat": "-32.06987",
    "lng": "115.83757"
  },
  {
    "country": "AU",
    "name": "Ocean Reef",
    "lat": "-31.75871",
    "lng": "115.73601"
  },
  {
    "country": "AU",
    "name": "Pegs Creek",
    "lat": "-20.7383",
    "lng": "116.83278"
  },
  {
    "country": "AU",
    "name": "Samson",
    "lat": "-32.06996",
    "lng": "115.7977"
  },
  {
    "country": "AU",
    "name": "Port Kennedy",
    "lat": "-32.37342",
    "lng": "115.7515"
  },
  {
    "country": "AU",
    "name": "Rangeway",
    "lat": "-28.78665",
    "lng": "114.63059"
  },
  {
    "country": "AU",
    "name": "Secret Harbour",
    "lat": "-32.40589",
    "lng": "115.75852"
  },
  {
    "country": "AU",
    "name": "Salter Point",
    "lat": "-32.02384",
    "lng": "115.86582"
  },
  {
    "country": "AU",
    "name": "St George Ranges",
    "lat": "-18.98204",
    "lng": "125.00873"
  },
  {
    "country": "AU",
    "name": "Success",
    "lat": "-32.14281",
    "lng": "115.84999"
  },
  {
    "country": "AU",
    "name": "Sunset Beach",
    "lat": "-28.71907",
    "lng": "114.62297"
  },
  {
    "country": "AU",
    "name": "Tuart Hill",
    "lat": "-31.89808",
    "lng": "115.83495"
  },
  {
    "country": "AU",
    "name": "Walkervale",
    "lat": "-24.88266",
    "lng": "152.35886"
  },
  {
    "country": "AU",
    "name": "Thornlie",
    "lat": "-32.06003",
    "lng": "115.955"
  },
  {
    "country": "AU",
    "name": "Braitling",
    "lat": "-23.68005",
    "lng": "133.86877"
  },
  {
    "country": "AU",
    "name": "Wandal",
    "lat": "-23.36878",
    "lng": "150.49381"
  },
  {
    "country": "AU",
    "name": "Waikiki",
    "lat": "-32.31606",
    "lng": "115.7546"
  },
  {
    "country": "AU",
    "name": "Wannanup",
    "lat": "-32.59946",
    "lng": "115.64488"
  },
  {
    "country": "AU",
    "name": "Winthrop",
    "lat": "-32.05216",
    "lng": "115.82972"
  },
  {
    "country": "AU",
    "name": "Mount Hutton",
    "lat": "-32.98329",
    "lng": "151.67012"
  },
  {
    "country": "AU",
    "name": "Yangebup",
    "lat": "-32.12065",
    "lng": "115.81623"
  },
  {
    "country": "AU",
    "name": "Yokine",
    "lat": "-31.90113",
    "lng": "115.85319"
  },
  {
    "country": "AU",
    "name": "Battery Point",
    "lat": "-42.88995",
    "lng": "147.33324"
  },
  {
    "country": "AU",
    "name": "Blackstone Heights",
    "lat": "-41.45977",
    "lng": "147.08407"
  },
  {
    "country": "AU",
    "name": "Chigwell",
    "lat": "-42.80912",
    "lng": "147.2448"
  },
  {
    "country": "AU",
    "name": "Mount Austin",
    "lat": "-35.13684",
    "lng": "147.35304"
  },
  {
    "country": "AU",
    "name": "Mount Riverview",
    "lat": "-33.73074",
    "lng": "150.63532"
  },
  {
    "country": "AU",
    "name": "Herdsmans Cove",
    "lat": "-42.75066",
    "lng": "147.26483"
  },
  {
    "country": "AU",
    "name": "Granville",
    "lat": "-25.54486",
    "lng": "152.73346"
  },
  {
    "country": "AU",
    "name": "Kings Meadows",
    "lat": "-41.47041",
    "lng": "147.16196"
  },
  {
    "country": "AU",
    "name": "Lenah Valley",
    "lat": "-42.87146",
    "lng": "147.27514"
  },
  {
    "country": "AU",
    "name": "Kilburn",
    "lat": "-34.8597",
    "lng": "138.58559"
  },
  {
    "country": "AU",
    "name": "Mount Nelson",
    "lat": "-42.92073",
    "lng": "147.32069"
  },
  {
    "country": "AU",
    "name": "Rocherlea",
    "lat": "-41.38083",
    "lng": "147.15738"
  },
  {
    "country": "AU",
    "name": "Coconut Grove",
    "lat": "-12.39602",
    "lng": "130.85186"
  },
  {
    "country": "AU",
    "name": "Shearwater",
    "lat": "-41.15673",
    "lng": "146.53178"
  },
  {
    "country": "AU",
    "name": "Kilkenny",
    "lat": "-34.87914",
    "lng": "138.5529"
  },
  {
    "country": "AU",
    "name": "Humpty Doo",
    "lat": "-12.58406",
    "lng": "131.13674"
  },
  {
    "country": "AU",
    "name": "Jingili",
    "lat": "-12.38895",
    "lng": "130.87281"
  },
  {
    "country": "AU",
    "name": "Malak",
    "lat": "-12.39288",
    "lng": "130.90395"
  },
  {
    "country": "AU",
    "name": "Millner",
    "lat": "-12.39186",
    "lng": "130.86252"
  },
  {
    "country": "AU",
    "name": "Lyons",
    "lat": "-35.3406",
    "lng": "149.07396"
  },
  {
    "country": "AU",
    "name": "Casey",
    "lat": "-35.16701",
    "lng": "149.0947"
  },
  {
    "country": "AU",
    "name": "Felixstow",
    "lat": "-34.88902",
    "lng": "138.64696"
  },
  {
    "country": "AU",
    "name": "Barton",
    "lat": "-35.30489",
    "lng": "149.14121"
  },
  {
    "country": "AU",
    "name": "Bonython",
    "lat": "-35.43326",
    "lng": "149.07822"
  },
  {
    "country": "AU",
    "name": "Braddon",
    "lat": "-35.27078",
    "lng": "149.13569"
  },
  {
    "country": "AU",
    "name": "Chapman",
    "lat": "-35.35621",
    "lng": "149.03742"
  },
  {
    "country": "AU",
    "name": "Conder",
    "lat": "-35.45926",
    "lng": "149.10422"
  },
  {
    "country": "AU",
    "name": "Coppabella",
    "lat": "-21.9471",
    "lng": "148.3005"
  },
  {
    "country": "AU",
    "name": "Charnwood",
    "lat": "-35.20019",
    "lng": "149.03412"
  },
  {
    "country": "AU",
    "name": "Palmerston",
    "lat": "-35.19447",
    "lng": "149.1194"
  },
  {
    "country": "AU",
    "name": "Curtin",
    "lat": "-35.32464",
    "lng": "149.07763"
  },
  {
    "country": "AU",
    "name": "Deakin",
    "lat": "-35.31927",
    "lng": "149.10308"
  },
  {
    "country": "AU",
    "name": "Dunlop",
    "lat": "-35.19402",
    "lng": "149.01984"
  },
  {
    "country": "AU",
    "name": "Florey",
    "lat": "-35.22588",
    "lng": "149.05"
  },
  {
    "country": "AU",
    "name": "Evatt",
    "lat": "-35.21191",
    "lng": "149.06891"
  },
  {
    "country": "AU",
    "name": "Greenway",
    "lat": "-35.41829",
    "lng": "149.06658"
  },
  {
    "country": "AU",
    "name": "Landsdale",
    "lat": "-31.8075",
    "lng": "115.86599"
  },
  {
    "country": "AU",
    "name": "Gungahlin",
    "lat": "-35.18674",
    "lng": "149.13619"
  },
  {
    "country": "AU",
    "name": "Harrison",
    "lat": "-35.19906",
    "lng": "149.15631"
  },
  {
    "country": "AU",
    "name": "Hackett",
    "lat": "-35.24948",
    "lng": "149.16352"
  },
  {
    "country": "AU",
    "name": "Higgins",
    "lat": "-35.23242",
    "lng": "149.0272"
  },
  {
    "country": "AU",
    "name": "Isaacs",
    "lat": "-35.36862",
    "lng": "149.11555"
  },
  {
    "country": "AU",
    "name": "Isabella Plains",
    "lat": "-35.42829",
    "lng": "149.08795"
  },
  {
    "country": "AU",
    "name": "McKellar",
    "lat": "-35.21752",
    "lng": "149.07704"
  },
  {
    "country": "AU",
    "name": "Nicholls",
    "lat": "-35.18733",
    "lng": "149.09648"
  },
  {
    "country": "AU",
    "name": "Melba",
    "lat": "-35.21016",
    "lng": "149.05405"
  },
  {
    "country": "AU",
    "name": "Ngunnawal",
    "lat": "-35.1728",
    "lng": "149.11147"
  },
  {
    "country": "AU",
    "name": "Richardson",
    "lat": "-35.42787",
    "lng": "149.11377"
  },
  {
    "country": "AU",
    "name": "Rivett",
    "lat": "-35.34709",
    "lng": "149.0379"
  },
  {
    "country": "AU",
    "name": "Wanniassa",
    "lat": "-35.39783",
    "lng": "149.09086"
  },
  {
    "country": "AU",
    "name": "Waramanga",
    "lat": "-35.35297",
    "lng": "149.06214"
  },
  {
    "country": "AU",
    "name": "Centennial Park",
    "lat": "-33.89794",
    "lng": "151.23364"
  },
  {
    "country": "AU",
    "name": "Bidwill",
    "lat": "-33.73013",
    "lng": "150.82219"
  },
  {
    "country": "AU",
    "name": "Blackbutt",
    "lat": "-34.57164",
    "lng": "150.83804"
  },
  {
    "country": "AU",
    "name": "Blair Athol",
    "lat": "-34.0621",
    "lng": "150.80144"
  },
  {
    "country": "AU",
    "name": "Bradbury",
    "lat": "-34.0854",
    "lng": "150.81541"
  },
  {
    "country": "AU",
    "name": "Kearneys Spring",
    "lat": "-27.60495",
    "lng": "151.94098"
  },
  {
    "country": "AU",
    "name": "Cabarita",
    "lat": "-33.84721",
    "lng": "151.11638"
  },
  {
    "country": "AU",
    "name": "Carlton",
    "lat": "-33.97107",
    "lng": "151.12136"
  },
  {
    "country": "AU",
    "name": "Avoca",
    "lat": "-24.87822",
    "lng": "152.30794"
  },
  {
    "country": "AU",
    "name": "Clinton",
    "lat": "-23.87518",
    "lng": "151.21793"
  },
  {
    "country": "AU",
    "name": "Northgate",
    "lat": "-34.85784",
    "lng": "138.62908"
  },
  {
    "country": "AU",
    "name": "Beaconsfield",
    "lat": "-21.09121",
    "lng": "149.16544"
  },
  {
    "country": "AU",
    "name": "Hinchinbrook",
    "lat": "-33.91878",
    "lng": "150.86314"
  },
  {
    "country": "AU",
    "name": "Kirkwood",
    "lat": "-23.90327",
    "lng": "151.23545"
  },
  {
    "country": "AU",
    "name": "Meadowbank",
    "lat": "-33.81668",
    "lng": "151.08861"
  },
  {
    "country": "AU",
    "name": "Llanarth",
    "lat": "-33.39687",
    "lng": "149.55105"
  },
  {
    "country": "AU",
    "name": "Oatlands",
    "lat": "-33.79595",
    "lng": "151.02712"
  },
  {
    "country": "AU",
    "name": "Bull Creek",
    "lat": "-32.05625",
    "lng": "115.86242"
  },
  {
    "country": "AU",
    "name": "Prospect",
    "lat": "-33.80154",
    "lng": "150.91358"
  },
  {
    "country": "AU",
    "name": "Punchbowl",
    "lat": "-33.92893",
    "lng": "151.05111"
  },
  {
    "country": "AU",
    "name": "Queens Park",
    "lat": "-33.89946",
    "lng": "151.24724"
  },
  {
    "country": "AU",
    "name": "Riverview",
    "lat": "-33.82465",
    "lng": "151.16243"
  },
  {
    "country": "AU",
    "name": "Valentine",
    "lat": "-33.01504",
    "lng": "151.6429"
  },
  {
    "country": "AU",
    "name": "Bray Park",
    "lat": "-27.29246",
    "lng": "152.96783"
  },
  {
    "country": "AU",
    "name": "Queenton",
    "lat": "-20.07453",
    "lng": "146.2817"
  },
  {
    "country": "AU",
    "name": "Woodbine",
    "lat": "-34.04589",
    "lng": "150.82146"
  },
  {
    "country": "AU",
    "name": "Regents Park",
    "lat": "-27.67664",
    "lng": "153.04165"
  },
  {
    "country": "AU",
    "name": "Lockyer",
    "lat": "-35.00567",
    "lng": "117.85875"
  },
  {
    "country": "AU",
    "name": "Shalvey",
    "lat": "-33.72687",
    "lng": "150.80529"
  },
  {
    "country": "AU",
    "name": "Parafield Gardens",
    "lat": "-34.78254",
    "lng": "138.61077"
  },
  {
    "country": "AU",
    "name": "Brooklyn",
    "lat": "-37.81609",
    "lng": "144.8415"
  },
  {
    "country": "AU",
    "name": "Camira",
    "lat": "-27.63461",
    "lng": "152.92091"
  },
  {
    "country": "AU",
    "name": "Hillside",
    "lat": "-37.69047",
    "lng": "144.74172"
  },
  {
    "country": "AU",
    "name": "Durack",
    "lat": "-27.58947",
    "lng": "152.98577"
  },
  {
    "country": "AU",
    "name": "Kangaroo Point",
    "lat": "-27.47679",
    "lng": "153.0367"
  },
  {
    "country": "AU",
    "name": "Kelso",
    "lat": "-19.38932",
    "lng": "146.71912"
  },
  {
    "country": "AU",
    "name": "Leichhardt",
    "lat": "-27.62279",
    "lng": "152.73373"
  },
  {
    "country": "AU",
    "name": "Redcliffe",
    "lat": "-31.93845",
    "lng": "115.94645"
  },
  {
    "country": "AU",
    "name": "Millstream",
    "lat": "-17.65318",
    "lng": "145.41401"
  },
  {
    "country": "AU",
    "name": "Kings Beach",
    "lat": "-26.80166",
    "lng": "153.14261"
  },
  {
    "country": "AU",
    "name": "Wavell Heights",
    "lat": "-27.39385",
    "lng": "153.04698"
  },
  {
    "country": "AU",
    "name": "Red Hill",
    "lat": "-27.45247",
    "lng": "153.00208"
  },
  {
    "country": "AU",
    "name": "Heatley",
    "lat": "-19.29035",
    "lng": "146.75355"
  },
  {
    "country": "AU",
    "name": "Fulham",
    "lat": "-34.92737",
    "lng": "138.51368"
  },
  {
    "country": "AU",
    "name": "Huntingdale",
    "lat": "-32.08318",
    "lng": "115.96614"
  },
  {
    "country": "AU",
    "name": "Bayswater",
    "lat": "-31.91686",
    "lng": "115.91776"
  },
  {
    "country": "AU",
    "name": "Brunswick",
    "lat": "-33.2324",
    "lng": "115.86282"
  },
  {
    "country": "AU",
    "name": "Jindalee",
    "lat": "-27.53446",
    "lng": "152.93843"
  },
  {
    "country": "AU",
    "name": "Riverton",
    "lat": "-32.03468",
    "lng": "115.89856"
  },
  {
    "country": "AU",
    "name": "Shelley",
    "lat": "-32.02957",
    "lng": "115.88664"
  },
  {
    "country": "AU",
    "name": "Waterford",
    "lat": "-32.01574",
    "lng": "115.88662"
  },
  {
    "country": "AU",
    "name": "Wakeley",
    "lat": "-33.87427",
    "lng": "150.90976"
  },
  {
    "country": "AU",
    "name": "Wattle Grove",
    "lat": "-32.00672",
    "lng": "116.00046"
  },
  {
    "country": "AU",
    "name": "Mornington",
    "lat": "-42.86267",
    "lng": "147.39819"
  },
  {
    "country": "AU",
    "name": "Araluen",
    "lat": "-23.69601",
    "lng": "133.854"
  },
  {
    "country": "AU",
    "name": "Hillcrest",
    "lat": "-41.06324",
    "lng": "145.89437"
  },
  {
    "country": "AU",
    "name": "Miandetta",
    "lat": "-41.1955",
    "lng": "146.35322"
  },
  {
    "country": "AU",
    "name": "Montrose",
    "lat": "-42.82895",
    "lng": "147.24735"
  },
  {
    "country": "AU",
    "name": "Mowbray",
    "lat": "-41.40243",
    "lng": "147.15059"
  },
  {
    "country": "AU",
    "name": "Norwood",
    "lat": "-41.4592",
    "lng": "147.18077"
  },
  {
    "country": "AU",
    "name": "The Vines",
    "lat": "-31.75492",
    "lng": "116.00238"
  },
  {
    "country": "AU",
    "name": "Waverley",
    "lat": "-41.43602",
    "lng": "147.18588"
  },
  {
    "country": "AU",
    "name": "Ravenswood",
    "lat": "-41.41593",
    "lng": "147.1825"
  },
  {
    "country": "AU",
    "name": "Cossack",
    "lat": "-14.45551",
    "lng": "132.17482"
  },
  {
    "country": "AU",
    "name": "Kingston",
    "lat": "-35.31525",
    "lng": "149.14658"
  },
  {
    "country": "AU",
    "name": "Bruce",
    "lat": "-35.24405",
    "lng": "149.09083"
  },
  {
    "country": "AU",
    "name": "Chisholm",
    "lat": "-35.41249",
    "lng": "149.12825"
  },
  {
    "country": "AU",
    "name": "Fisher",
    "lat": "-35.36126",
    "lng": "149.05704"
  },
  {
    "country": "AU",
    "name": "Flynn",
    "lat": "-35.20593",
    "lng": "149.04389"
  },
  {
    "country": "AU",
    "name": "Franklin",
    "lat": "-35.19946",
    "lng": "149.14329"
  },
  {
    "country": "AU",
    "name": "Griffith",
    "lat": "-35.32533",
    "lng": "149.13714"
  },
  {
    "country": "AU",
    "name": "Holder",
    "lat": "-35.33439",
    "lng": "149.04614"
  },
  {
    "country": "AU",
    "name": "Latham",
    "lat": "-35.21652",
    "lng": "149.03144"
  },
  {
    "country": "AU",
    "name": "Monash",
    "lat": "-35.41577",
    "lng": "149.09063"
  },
  {
    "country": "AU",
    "name": "Bonogin",
    "lat": "-28.1393",
    "lng": "153.35297"
  },
  {
    "country": "AU",
    "name": "Spence",
    "lat": "-35.19873",
    "lng": "149.06438"
  },
  {
    "country": "AU",
    "name": "Kamerunga",
    "lat": "-16.87321",
    "lng": "145.7013"
  },
  {
    "country": "AU",
    "name": "Ooralea",
    "lat": "-21.17394",
    "lng": "149.14797"
  },
  {
    "country": "AU",
    "name": "Glenvale",
    "lat": "-27.56818",
    "lng": "151.8934"
  },
  {
    "country": "AU",
    "name": "St Johns Park",
    "lat": "-33.88295",
    "lng": "150.90182"
  },
  {
    "country": "AU",
    "name": "Rangewood",
    "lat": "-19.31138",
    "lng": "146.63877"
  },
  {
    "country": "AU",
    "name": "Springvale",
    "lat": "-35.16687",
    "lng": "147.33058"
  },
  {
    "country": "AU",
    "name": "St Clair",
    "lat": "-33.79728",
    "lng": "150.7847"
  },
  {
    "country": "AU",
    "name": "Mawson Lakes",
    "lat": "-34.81589",
    "lng": "138.60809"
  },
  {
    "country": "AU",
    "name": "Scullin",
    "lat": "-35.23462",
    "lng": "149.039"
  },
  {
    "country": "AU",
    "name": "The Ponds",
    "lat": "-33.70228",
    "lng": "150.91086"
  },
  {
    "country": "AU",
    "name": "Tolland",
    "lat": "-35.14521",
    "lng": "147.35162"
  },
  {
    "country": "AU",
    "name": "Amaroo",
    "lat": "-35.16959",
    "lng": "149.12802"
  },
  {
    "country": "AU",
    "name": "Holden Hill",
    "lat": "-34.85161",
    "lng": "138.67232"
  },
  {
    "country": "AU",
    "name": "Aranda",
    "lat": "-35.25817",
    "lng": "149.0804"
  },
  {
    "country": "AU",
    "name": "Wattle Grove",
    "lat": "-33.95443",
    "lng": "150.94447"
  },
  {
    "country": "AU",
    "name": "Vincent",
    "lat": "-19.28341",
    "lng": "146.76463"
  },
  {
    "country": "AU",
    "name": "Willmot",
    "lat": "-33.72534",
    "lng": "150.79259"
  },
  {
    "country": "AU",
    "name": "Holmview",
    "lat": "-27.71631",
    "lng": "153.17045"
  },
  {
    "country": "AU",
    "name": "Graceville",
    "lat": "-27.52201",
    "lng": "152.98222"
  },
  {
    "country": "AU",
    "name": "Grange",
    "lat": "-27.42251",
    "lng": "153.01527"
  },
  {
    "country": "AU",
    "name": "Hemmant",
    "lat": "-27.44776",
    "lng": "153.13174"
  },
  {
    "country": "AU",
    "name": "Woodrising",
    "lat": "-32.98595",
    "lng": "151.60657"
  },
  {
    "country": "AU",
    "name": "Bunya",
    "lat": "-27.3694",
    "lng": "152.94331"
  },
  {
    "country": "AU",
    "name": "Hendra",
    "lat": "-27.41775",
    "lng": "153.07025"
  },
  {
    "country": "AU",
    "name": "Burnside",
    "lat": "-26.63255",
    "lng": "152.94063"
  },
  {
    "country": "AU",
    "name": "Middle Ridge",
    "lat": "-27.60709",
    "lng": "151.96688"
  },
  {
    "country": "AU",
    "name": "Crace",
    "lat": "-35.20282",
    "lng": "149.10736"
  },
  {
    "country": "AU",
    "name": "Kirwan",
    "lat": "-19.30323",
    "lng": "146.72531"
  },
  {
    "country": "AU",
    "name": "McKail",
    "lat": "-34.98533",
    "lng": "117.8301"
  },
  {
    "country": "AU",
    "name": "Valley View",
    "lat": "-34.83994",
    "lng": "138.66072"
  },
  {
    "country": "AU",
    "name": "Beldon",
    "lat": "-31.77466",
    "lng": "115.7627"
  },
  {
    "country": "AU",
    "name": "St James",
    "lat": "-32.00004",
    "lng": "115.9098"
  },
  {
    "country": "AU",
    "name": "Floreat",
    "lat": "-31.93862",
    "lng": "115.79211"
  },
  {
    "country": "AU",
    "name": "Braybrook",
    "lat": "-37.78671",
    "lng": "144.85484"
  },
  {
    "country": "AU",
    "name": "Lyons",
    "lat": "-12.35912",
    "lng": "130.88852"
  },
  {
    "country": "AU",
    "name": "Hillbank",
    "lat": "-34.73588",
    "lng": "138.68723"
  },
  {
    "country": "AU",
    "name": "Currimundi",
    "lat": "-26.76925",
    "lng": "153.12237"
  },
  {
    "country": "AU",
    "name": "Jane Brook",
    "lat": "-31.86368",
    "lng": "116.05039"
  },
  {
    "country": "AU",
    "name": "Rosebery",
    "lat": "-12.51046",
    "lng": "130.9878"
  },
  {
    "country": "AU",
    "name": "Highgate",
    "lat": "-31.93971",
    "lng": "115.87015"
  },
  {
    "country": "AU",
    "name": "Cairnlea",
    "lat": "-37.75931",
    "lng": "144.78781"
  },
  {
    "country": "AU",
    "name": "California Gully",
    "lat": "-36.72887",
    "lng": "144.26089"
  },
  {
    "country": "AU",
    "name": "Pearce",
    "lat": "-35.36222",
    "lng": "149.08338"
  },
  {
    "country": "AU",
    "name": "Stirling",
    "lat": "-35.34969",
    "lng": "149.0493"
  },
  {
    "country": "AU",
    "name": "Bundoora",
    "lat": "-37.69825",
    "lng": "145.05967"
  },
  {
    "country": "AU",
    "name": "Hawker",
    "lat": "-35.24707",
    "lng": "149.03666"
  },
  {
    "country": "AU",
    "name": "Parramatta Park",
    "lat": "-16.92598",
    "lng": "145.76643"
  },
  {
    "country": "AU",
    "name": "Malvern",
    "lat": "-34.95915",
    "lng": "138.61254"
  },
  {
    "country": "AU",
    "name": "Melville",
    "lat": "-32.04039",
    "lng": "115.80116"
  },
  {
    "country": "AU",
    "name": "Glenroy",
    "lat": "-36.05021",
    "lng": "146.91058"
  },
  {
    "country": "AU",
    "name": "Munster",
    "lat": "-32.13647",
    "lng": "115.78302"
  },
  {
    "country": "AU",
    "name": "Sadadeen",
    "lat": "-23.70399",
    "lng": "133.90043"
  },
  {
    "country": "AU",
    "name": "Burton",
    "lat": "-34.73339",
    "lng": "138.60247"
  },
  {
    "country": "AU",
    "name": "Weston",
    "lat": "-35.33582",
    "lng": "149.05929"
  },
  {
    "country": "AU",
    "name": "Highgate",
    "lat": "-34.96177",
    "lng": "138.6218"
  },
  {
    "country": "AU",
    "name": "Patterson Lakes",
    "lat": "-38.06934",
    "lng": "145.14327"
  },
  {
    "country": "AU",
    "name": "Gilmore",
    "lat": "-35.41994",
    "lng": "149.13481"
  },
  {
    "country": "AU",
    "name": "Salisbury",
    "lat": "-27.55145",
    "lng": "153.0325"
  },
  {
    "country": "AU",
    "name": "Beverley",
    "lat": "-34.89512",
    "lng": "138.54633"
  },
  {
    "country": "AU",
    "name": "Warwick",
    "lat": "-31.83974",
    "lng": "115.80855"
  },
  {
    "country": "AU",
    "name": "Inglewood",
    "lat": "-31.91663",
    "lng": "115.8798"
  },
  {
    "country": "AU",
    "name": "Mountain Creek",
    "lat": "-26.70278",
    "lng": "153.10133"
  },
  {
    "country": "AU",
    "name": "Oxley",
    "lat": "-35.40952",
    "lng": "149.0786"
  },
  {
    "country": "AU",
    "name": "Wulagi",
    "lat": "-12.38345",
    "lng": "130.89543"
  },
  {
    "country": "AU",
    "name": "Cranbrook",
    "lat": "-19.30553",
    "lng": "146.75286"
  },
  {
    "country": "AU",
    "name": "Millbridge",
    "lat": "-33.30617",
    "lng": "115.735"
  },
  {
    "country": "AU",
    "name": "Marmion",
    "lat": "-31.84158",
    "lng": "115.75692"
  },
  {
    "country": "AU",
    "name": "Orana",
    "lat": "-34.99601",
    "lng": "117.85925"
  },
  {
    "country": "AU",
    "name": "Somerville",
    "lat": "-30.76979",
    "lng": "121.45438"
  },
  {
    "country": "AU",
    "name": "Lammermoor",
    "lat": "-23.16076",
    "lng": "150.76079"
  },
  {
    "country": "AU",
    "name": "Duffy",
    "lat": "-35.33459",
    "lng": "149.03188"
  },
  {
    "country": "AU",
    "name": "Southern River",
    "lat": "-32.10658",
    "lng": "115.95896"
  },
  {
    "country": "AU",
    "name": "Joslin",
    "lat": "-34.89967",
    "lng": "138.62655"
  },
  {
    "country": "AU",
    "name": "Mansfield Park",
    "lat": "-34.85655",
    "lng": "138.55186"
  },
  {
    "country": "AU",
    "name": "Taperoo",
    "lat": "-34.80425",
    "lng": "138.49593"
  },
  {
    "country": "AU",
    "name": "Narrabundah",
    "lat": "-35.3357",
    "lng": "149.14924"
  },
  {
    "country": "AU",
    "name": "Lakewood",
    "lat": "-31.6321",
    "lng": "152.7582"
  },
  {
    "country": "AU",
    "name": "Melrose Park",
    "lat": "-34.98328",
    "lng": "138.57541"
  },
  {
    "country": "AU",
    "name": "Skye",
    "lat": "-38.10505",
    "lng": "145.2163"
  },
  {
    "country": "AU",
    "name": "Woodcroft",
    "lat": "-33.75637",
    "lng": "150.88071"
  },
  {
    "country": "AU",
    "name": "West End",
    "lat": "-19.26687",
    "lng": "146.79365"
  },
  {
    "country": "AU",
    "name": "St Peters",
    "lat": "-34.90498",
    "lng": "138.62255"
  },
  {
    "country": "AU",
    "name": "Casuarina",
    "lat": "-32.24143",
    "lng": "115.8698"
  },
  {
    "country": "AU",
    "name": "Dudley Park",
    "lat": "-32.55221",
    "lng": "115.731"
  },
  {
    "country": "AU",
    "name": "Mirrabooka",
    "lat": "-31.85963",
    "lng": "115.86587"
  },
  {
    "country": "AU",
    "name": "Hughes",
    "lat": "-35.33269",
    "lng": "149.09491"
  },
  {
    "country": "AU",
    "name": "Mission Beach",
    "lat": "-17.86885",
    "lng": "146.10392"
  },
  {
    "country": "AU",
    "name": "City of Cockburn",
    "lat": "-32.10261",
    "lng": "115.84422"
  },
  {
    "country": "AU",
    "name": "Beaumont Hills",
    "lat": "-33.69993",
    "lng": "150.9411"
  },
  {
    "country": "AU",
    "name": "Warabrook",
    "lat": "-32.88885",
    "lng": "151.71493"
  },
  {
    "country": "AU",
    "name": "North Adelaide",
    "lat": "-34.90733",
    "lng": "138.59141"
  },
  {
    "country": "AU",
    "name": "Victoria Park",
    "lat": "-31.97619",
    "lng": "115.90525"
  },
  {
    "country": "AU",
    "name": "Milsons Point",
    "lat": "-33.846",
    "lng": "151.21192"
  },
  {
    "country": "AU",
    "name": "Forrest",
    "lat": "-35.31499",
    "lng": "149.12859"
  },
  {
    "country": "AU",
    "name": "Whyalla Playford",
    "lat": "-33.02788",
    "lng": "137.56196"
  },
  {
    "country": "AU",
    "name": "Whyalla Norrie",
    "lat": "-33.02903",
    "lng": "137.53922"
  },
  {
    "country": "AU",
    "name": "Whyalla Stuart",
    "lat": "-33.02493",
    "lng": "137.52471"
  },
  {
    "country": "AU",
    "name": "Whyalla Jenkins",
    "lat": "-33.02205",
    "lng": "137.51269"
  },
  {
    "country": "AU",
    "name": "Aldinga Beach",
    "lat": "-35.27826",
    "lng": "138.45802"
  },
  {
    "country": "AU",
    "name": "Cranbourne South",
    "lat": "-38.13502",
    "lng": "145.23958"
  },
  {
    "country": "AU",
    "name": "Kambalda West",
    "lat": "-31.20169",
    "lng": "121.6306"
  },
  {
    "country": "AU",
    "name": "North Richmond",
    "lat": "-33.58117",
    "lng": "150.71942"
  },
  {
    "country": "AU",
    "name": "Windsor Downs",
    "lat": "-33.65857",
    "lng": "150.81079"
  },
  {
    "country": "AU",
    "name": "Wyee Point",
    "lat": "-33.14585",
    "lng": "151.50783"
  },
  {
    "country": "AU",
    "name": "Yallourn North",
    "lat": "-38.16053",
    "lng": "146.36449"
  },
  {
    "country": "AU",
    "name": "Bondi Junction",
    "lat": "-33.89275",
    "lng": "151.24723"
  },
  {
    "country": "AU",
    "name": "Bald Hills",
    "lat": "-27.32112",
    "lng": "153.00857"
  },
  {
    "country": "AU",
    "name": "Jesmond",
    "lat": "-32.90275",
    "lng": "151.69072"
  },
  {
    "country": "AU",
    "name": "Falls Creek",
    "lat": "-36.86535",
    "lng": "147.27782"
  },
  {
    "country": "AU",
    "name": "Risdon Vale",
    "lat": "-42.81242",
    "lng": "147.35654"
  },
  {
    "country": "AU",
    "name": "Mulambin",
    "lat": "-23.18755",
    "lng": "150.78933"
  },
  {
    "country": "AU",
    "name": "Bluewater",
    "lat": "-19.18157",
    "lng": "146.5582"
  },
  {
    "country": "AU",
    "name": "Kiama Downs",
    "lat": "-34.63341",
    "lng": "150.85456"
  },
  {
    "country": "AU",
    "name": "Blacksmiths",
    "lat": "-33.07167",
    "lng": "151.65533"
  },
  {
    "country": "AU",
    "name": "Ravenswood",
    "lat": "-32.5824",
    "lng": "115.8315"
  },
  {
    "country": "AU",
    "name": "East Geelong",
    "lat": "-38.15568",
    "lng": "144.37202"
  },
  {
    "country": "AU",
    "name": "Beecroft",
    "lat": "-33.74954",
    "lng": "151.0648"
  },
  {
    "country": "AU",
    "name": "Williams Landing",
    "lat": "-37.8619",
    "lng": "144.74371"
  },
  {
    "country": "AU",
    "name": "Bindoon",
    "lat": "-31.38663",
    "lng": "116.09664"
  },
  {
    "country": "AU",
    "name": "Nickol",
    "lat": "-20.74558",
    "lng": "116.7954"
  },
  {
    "country": "AU",
    "name": "North Willoughby",
    "lat": "-33.79563",
    "lng": "151.20067"
  },
  {
    "country": "AU",
    "name": "Willoughby East",
    "lat": "-33.79844",
    "lng": "151.20518"
  },
  {
    "country": "AU",
    "name": "Lane Cove North",
    "lat": "-33.80543",
    "lng": "151.16638"
  },
  {
    "country": "AU",
    "name": "Meridan Plains",
    "lat": "-26.77351",
    "lng": "153.06187"
  },
  {
    "country": "AU",
    "name": "Largs North",
    "lat": "-34.8205",
    "lng": "138.49241"
  },
  {
    "country": "AU",
    "name": "Christies Beach",
    "lat": "-35.13876",
    "lng": "138.47232"
  },
  {
    "country": "AU",
    "name": "Wadeye",
    "lat": "-14.23834",
    "lng": "129.52177"
  },
  {
    "country": "AU",
    "name": "Carrolls Creek",
    "lat": "-28.82272",
    "lng": "152.10305"
  },
  {
    "country": "AU",
    "name": "Seaford Meadows",
    "lat": "-35.17276",
    "lng": "138.4879"
  },
  {
    "country": "AU",
    "name": "Seaford Rise",
    "lat": "-35.19296",
    "lng": "138.48172"
  },
  {
    "country": "AU",
    "name": "South Kolan",
    "lat": "-24.93202",
    "lng": "152.1679"
  },
  {
    "country": "AU",
    "name": "Boambee East",
    "lat": "-30.34662",
    "lng": "153.0732"
  },
  {
    "country": "AU",
    "name": "Rose Park",
    "lat": "-34.93039",
    "lng": "138.62825"
  },
  {
    "country": "AU",
    "name": "Ascot",
    "lat": "-27.43154",
    "lng": "153.058"
  },
  {
    "country": "AU",
    "name": "Robertson",
    "lat": "-27.56583",
    "lng": "153.05738"
  },
  {
    "country": "AU",
    "name": "Nathan",
    "lat": "-27.55888",
    "lng": "153.0623"
  },
  {
    "country": "AU",
    "name": "Chermside West",
    "lat": "-27.38383",
    "lng": "153.01586"
  },
  {
    "country": "AU",
    "name": "Everton Park",
    "lat": "-27.40732",
    "lng": "152.9884"
  },
  {
    "country": "AU",
    "name": "Gordon Park",
    "lat": "-27.41899",
    "lng": "153.02547"
  },
  {
    "country": "AU",
    "name": "Stafford",
    "lat": "-27.41044",
    "lng": "153.01105"
  },
  {
    "country": "AU",
    "name": "Stafford Heights",
    "lat": "-27.39354",
    "lng": "153.0105"
  },
  {
    "country": "AU",
    "name": "Wilston",
    "lat": "-27.43218",
    "lng": "153.01904"
  },
  {
    "country": "AU",
    "name": "Burbank",
    "lat": "-27.55584",
    "lng": "153.14701"
  },
  {
    "country": "AU",
    "name": "Coopers Plains",
    "lat": "-27.56463",
    "lng": "153.04067"
  },
  {
    "country": "AU",
    "name": "Forest Lake",
    "lat": "-27.62563",
    "lng": "152.96883"
  },
  {
    "country": "AU",
    "name": "Greenslopes",
    "lat": "-27.50815",
    "lng": "153.04951"
  },
  {
    "country": "AU",
    "name": "Mackenzie",
    "lat": "-27.54351",
    "lng": "153.12057"
  },
  {
    "country": "AU",
    "name": "Mansfield",
    "lat": "-27.53929",
    "lng": "153.09895"
  },
  {
    "country": "AU",
    "name": "Mount Gravatt East",
    "lat": "-27.5405",
    "lng": "153.08221"
  },
  {
    "country": "AU",
    "name": "Richlands",
    "lat": "-27.59616",
    "lng": "152.95321"
  },
  {
    "country": "AU",
    "name": "Seventeen Mile Rocks",
    "lat": "-27.5507",
    "lng": "152.95896"
  },
  {
    "country": "AU",
    "name": "Sunnybank Hills",
    "lat": "-27.61025",
    "lng": "153.05388"
  },
  {
    "country": "AU",
    "name": "Upper Mount Gravatt",
    "lat": "-27.56128",
    "lng": "153.08453"
  },
  {
    "country": "AU",
    "name": "Yeerongpilly",
    "lat": "-27.53097",
    "lng": "153.00935"
  },
  {
    "country": "AU",
    "name": "Yeronga",
    "lat": "-27.51571",
    "lng": "153.01642"
  },
  {
    "country": "AU",
    "name": "Balmoral",
    "lat": "-27.45341",
    "lng": "153.0668"
  },
  {
    "country": "AU",
    "name": "Camp Hill",
    "lat": "-27.49354",
    "lng": "153.07629"
  },
  {
    "country": "AU",
    "name": "Chandler",
    "lat": "-27.51398",
    "lng": "153.14907"
  },
  {
    "country": "AU",
    "name": "Gumdale",
    "lat": "-27.49188",
    "lng": "153.15315"
  },
  {
    "country": "AU",
    "name": "Manly West",
    "lat": "-27.47382",
    "lng": "153.16641"
  },
  {
    "country": "AU",
    "name": "Morningside",
    "lat": "-27.46165",
    "lng": "153.07511"
  },
  {
    "country": "AU",
    "name": "Seven Hills",
    "lat": "-27.48341",
    "lng": "153.07474"
  },
  {
    "country": "AU",
    "name": "Wynnum West",
    "lat": "-27.45824",
    "lng": "153.15319"
  },
  {
    "country": "AU",
    "name": "Kenmore Hills",
    "lat": "-27.5042",
    "lng": "152.93183"
  },
  {
    "country": "AU",
    "name": "Pullenvale",
    "lat": "-27.52283",
    "lng": "152.88651"
  },
  {
    "country": "AU",
    "name": "Riverhills",
    "lat": "-27.55928",
    "lng": "152.91106"
  },
  {
    "country": "AU",
    "name": "East Ipswich",
    "lat": "-27.60637",
    "lng": "152.77232"
  },
  {
    "country": "AU",
    "name": "Sadliers Crossing",
    "lat": "-27.61251",
    "lng": "152.74577"
  },
  {
    "country": "AU",
    "name": "Springfield",
    "lat": "-27.65365",
    "lng": "152.91716"
  },
  {
    "country": "AU",
    "name": "Tivoli",
    "lat": "-27.59278",
    "lng": "152.76798"
  },
  {
    "country": "AU",
    "name": "Cedar Vale",
    "lat": "-27.88923",
    "lng": "153.02891"
  },
  {
    "country": "AU",
    "name": "Logan Reserve",
    "lat": "-27.72414",
    "lng": "153.09002"
  },
  {
    "country": "AU",
    "name": "North Maclean",
    "lat": "-27.76759",
    "lng": "153.01646"
  },
  {
    "country": "AU",
    "name": "Park Ridge South",
    "lat": "-27.72707",
    "lng": "153.0332"
  },
  {
    "country": "AU",
    "name": "Rochedale South",
    "lat": "-27.59521",
    "lng": "153.12332"
  },
  {
    "country": "AU",
    "name": "South Maclean",
    "lat": "-27.79245",
    "lng": "153.01603"
  },
  {
    "country": "AU",
    "name": "Waterford West",
    "lat": "-27.69056",
    "lng": "153.13319"
  },
  {
    "country": "AU",
    "name": "Yarrabilba",
    "lat": "-27.80864",
    "lng": "153.11163"
  },
  {
    "country": "AU",
    "name": "Russell Island",
    "lat": "-27.64867",
    "lng": "153.38124"
  },
  {
    "country": "AU",
    "name": "Thorneside",
    "lat": "-27.48777",
    "lng": "153.19821"
  },
  {
    "country": "AU",
    "name": "Arana Hills",
    "lat": "-27.39808",
    "lng": "152.95797"
  },
  {
    "country": "AU",
    "name": "Caboolture South",
    "lat": "-27.09389",
    "lng": "152.94874"
  },
  {
    "country": "AU",
    "name": "Eatons Hill",
    "lat": "-27.3392",
    "lng": "152.9599"
  },
  {
    "country": "AU",
    "name": "Ferny Hills",
    "lat": "-27.39594",
    "lng": "152.93737"
  },
  {
    "country": "AU",
    "name": "Delaneys Creek",
    "lat": "-27.00021",
    "lng": "152.79553"
  },
  {
    "country": "AU",
    "name": "Samford Valley",
    "lat": "-27.3727",
    "lng": "152.86699"
  },
  {
    "country": "AU",
    "name": "Flemington",
    "lat": "-37.78825",
    "lng": "144.93001"
  },
  {
    "country": "AU",
    "name": "Fairfield",
    "lat": "-37.77977",
    "lng": "145.01764"
  },
  {
    "country": "AU",
    "name": "Heidelberg Heights",
    "lat": "-37.74313",
    "lng": "145.05695"
  },
  {
    "country": "AU",
    "name": "Watsonia North",
    "lat": "-37.69981",
    "lng": "145.08468"
  },
  {
    "country": "AU",
    "name": "Westmeadows",
    "lat": "-37.67604",
    "lng": "144.88701"
  },
  {
    "country": "AU",
    "name": "Essendon North",
    "lat": "-37.74225",
    "lng": "144.90546"
  },
  {
    "country": "AU",
    "name": "Essendon West",
    "lat": "-37.75489",
    "lng": "144.88338"
  },
  {
    "country": "AU",
    "name": "Keilor East",
    "lat": "-37.73261",
    "lng": "144.86504"
  },
  {
    "country": "AU",
    "name": "Coburg North",
    "lat": "-37.72867",
    "lng": "144.96134"
  },
  {
    "country": "AU",
    "name": "Gowanbrae",
    "lat": "-37.70823",
    "lng": "144.89079"
  },
  {
    "country": "AU",
    "name": "Hadfield",
    "lat": "-37.70728",
    "lng": "144.9416"
  },
  {
    "country": "AU",
    "name": "Oak Park",
    "lat": "-37.71842",
    "lng": "144.91945"
  },
  {
    "country": "AU",
    "name": "Pascoe Vale South",
    "lat": "-37.73973",
    "lng": "144.94615"
  },
  {
    "country": "AU",
    "name": "North Warrandyte",
    "lat": "-37.72924",
    "lng": "145.21574"
  },
  {
    "country": "AU",
    "name": "Bayswater North",
    "lat": "-37.82612",
    "lng": "145.29831"
  },
  {
    "country": "AU",
    "name": "Croydon Hills",
    "lat": "-37.77651",
    "lng": "145.26355"
  },
  {
    "country": "AU",
    "name": "Croydon South",
    "lat": "-37.81232",
    "lng": "145.2681"
  },
  {
    "country": "AU",
    "name": "Kilsyth South",
    "lat": "-37.82033",
    "lng": "145.31599"
  },
  {
    "country": "AU",
    "name": "Warranwood",
    "lat": "-37.77555",
    "lng": "145.24728"
  },
  {
    "country": "AU",
    "name": "Vermont South",
    "lat": "-37.85747",
    "lng": "145.1827"
  },
  {
    "country": "AU",
    "name": "Cranbourne East",
    "lat": "-38.11531",
    "lng": "145.29814"
  },
  {
    "country": "AU",
    "name": "Cranbourne North",
    "lat": "-38.07758",
    "lng": "145.29871"
  },
  {
    "country": "AU",
    "name": "Cranbourne West",
    "lat": "-38.0965",
    "lng": "145.26707"
  },
  {
    "country": "AU",
    "name": "Narre Warren South",
    "lat": "-38.04369",
    "lng": "145.2923"
  },
  {
    "country": "AU",
    "name": "Dandenong North",
    "lat": "-37.96649",
    "lng": "145.2081"
  },
  {
    "country": "AU",
    "name": "Noble Park North",
    "lat": "-37.94978",
    "lng": "145.19257"
  },
  {
    "country": "AU",
    "name": "Frankston North",
    "lat": "-38.12352",
    "lng": "145.14836"
  },
  {
    "country": "AU",
    "name": "Frankston South",
    "lat": "-38.16604",
    "lng": "145.13643"
  },
  {
    "country": "AU",
    "name": "Sandhurst",
    "lat": "-38.081",
    "lng": "145.20767"
  },
  {
    "country": "AU",
    "name": "Langwarrin South",
    "lat": "-38.18947",
    "lng": "145.1935"
  },
  {
    "country": "AU",
    "name": "Rosebud West",
    "lat": "-38.36444",
    "lng": "144.87748"
  },
  {
    "country": "AU",
    "name": "Keilor Downs",
    "lat": "-37.72337",
    "lng": "144.80839"
  },
  {
    "country": "AU",
    "name": "Keilor Lodge",
    "lat": "-37.69997",
    "lng": "144.80332"
  },
  {
    "country": "AU",
    "name": "Keilor Park",
    "lat": "-37.72025",
    "lng": "144.85422"
  },
  {
    "country": "AU",
    "name": "Sunshine North",
    "lat": "-37.76987",
    "lng": "144.82787"
  },
  {
    "country": "AU",
    "name": "Sunshine West",
    "lat": "-37.79117",
    "lng": "144.81637"
  },
  {
    "country": "AU",
    "name": "Altona Meadows",
    "lat": "-37.88413",
    "lng": "144.78367"
  },
  {
    "country": "AU",
    "name": "Williamstown North",
    "lat": "-37.85515",
    "lng": "144.88259"
  },
  {
    "country": "AU",
    "name": "Kingsville",
    "lat": "-37.80819",
    "lng": "144.87911"
  },
  {
    "country": "AU",
    "name": "Seddon",
    "lat": "-37.80607",
    "lng": "144.8907"
  },
  {
    "country": "AU",
    "name": "West Footscray",
    "lat": "-37.79746",
    "lng": "144.87727"
  },
  {
    "country": "AU",
    "name": "Burnside Heights",
    "lat": "-37.72691",
    "lng": "144.75225"
  },
  {
    "country": "AU",
    "name": "Taylors Hill",
    "lat": "-37.70988",
    "lng": "144.75483"
  },
  {
    "country": "AU",
    "name": "Ravenhall",
    "lat": "-37.76552",
    "lng": "144.75105"
  },
  {
    "country": "AU",
    "name": "Eynesbury",
    "lat": "-37.80043",
    "lng": "144.57458"
  },
  {
    "country": "AU",
    "name": "Allambie Heights",
    "lat": "-33.76655",
    "lng": "151.24981"
  },
  {
    "country": "AU",
    "name": "Balmain East",
    "lat": "-33.8571",
    "lng": "151.19282"
  },
  {
    "country": "AU",
    "name": "Banksia",
    "lat": "-33.94601",
    "lng": "151.14304"
  },
  {
    "country": "AU",
    "name": "Bardwell Valley",
    "lat": "-33.93344",
    "lng": "151.13668"
  },
  {
    "country": "AU",
    "name": "Belfield",
    "lat": "-33.90354",
    "lng": "151.08467"
  },
  {
    "country": "AU",
    "name": "Berala",
    "lat": "-33.87197",
    "lng": "151.03386"
  },
  {
    "country": "AU",
    "name": "Berowra Heights",
    "lat": "-33.61211",
    "lng": "151.13754"
  },
  {
    "country": "AU",
    "name": "Beverley Park",
    "lat": "-33.97707",
    "lng": "151.13437"
  },
  {
    "country": "AU",
    "name": "Bexley North",
    "lat": "-33.93848",
    "lng": "151.11385"
  },
  {
    "country": "AU",
    "name": "Bilgola Plateau",
    "lat": "-33.64781",
    "lng": "151.31212"
  },
  {
    "country": "AU",
    "name": "Blackett",
    "lat": "-33.73792",
    "lng": "150.81812"
  },
  {
    "country": "AU",
    "name": "Bondi Beach",
    "lat": "-33.89079",
    "lng": "151.27852"
  },
  {
    "country": "AU",
    "name": "Cabramatta West",
    "lat": "-33.89303",
    "lng": "150.9119"
  },
  {
    "country": "AU",
    "name": "Cambridge Park",
    "lat": "-33.74784",
    "lng": "150.72208"
  },
  {
    "country": "AU",
    "name": "Camden South",
    "lat": "-34.08312",
    "lng": "150.69491"
  },
  {
    "country": "AU",
    "name": "Caringbah South",
    "lat": "-34.05662",
    "lng": "151.12149"
  },
  {
    "country": "AU",
    "name": "Carnes Hill",
    "lat": "-33.93846",
    "lng": "150.84881"
  },
  {
    "country": "AU",
    "name": "Castle Cove",
    "lat": "-33.78655",
    "lng": "151.20925"
  },
  {
    "country": "AU",
    "name": "Chatswood West",
    "lat": "-33.79402",
    "lng": "151.16492"
  },
  {
    "country": "AU",
    "name": "Carramar",
    "lat": "-33.88382",
    "lng": "150.96153"
  },
  {
    "country": "AU",
    "name": "Clemton Park",
    "lat": "-33.92616",
    "lng": "151.10406"
  },
  {
    "country": "AU",
    "name": "Colebee",
    "lat": "-33.72769",
    "lng": "150.84743"
  },
  {
    "country": "AU",
    "name": "Collaroy Plateau",
    "lat": "-33.72884",
    "lng": "151.29075"
  },
  {
    "country": "AU",
    "name": "Concord West",
    "lat": "-33.84809",
    "lng": "151.08609"
  },
  {
    "country": "AU",
    "name": "Constitution Hill",
    "lat": "-33.79259",
    "lng": "150.97627"
  },
  {
    "country": "AU",
    "name": "Cremorne Point",
    "lat": "-33.84008",
    "lng": "151.22698"
  },
  {
    "country": "AU",
    "name": "Darlington",
    "lat": "-33.89103",
    "lng": "151.19548"
  },
  {
    "country": "AU",
    "name": "Denham Court",
    "lat": "-33.98307",
    "lng": "150.84606"
  },
  {
    "country": "AU",
    "name": "Denistone",
    "lat": "-33.79835",
    "lng": "151.09051"
  },
  {
    "country": "AU",
    "name": "Dolls Point",
    "lat": "-33.99341",
    "lng": "151.14474"
  },
  {
    "country": "AU",
    "name": "Dundas Valley",
    "lat": "-33.78826",
    "lng": "151.05261"
  },
  {
    "country": "AU",
    "name": "East Lindfield",
    "lat": "-33.76664",
    "lng": "151.18685"
  },
  {
    "country": "AU",
    "name": "East Ryde",
    "lat": "-33.81031",
    "lng": "151.13153"
  },
  {
    "country": "AU",
    "name": "Edmondson Park",
    "lat": "-33.95695",
    "lng": "150.86134"
  },
  {
    "country": "AU",
    "name": "Emu Heights",
    "lat": "-33.73453",
    "lng": "150.64874"
  },
  {
    "country": "AU",
    "name": "Ermington",
    "lat": "-33.81483",
    "lng": "151.05467"
  },
  {
    "country": "AU",
    "name": "Fairfield East",
    "lat": "-33.86938",
    "lng": "150.97129"
  },
  {
    "country": "AU",
    "name": "Fairfield Heights",
    "lat": "-33.86445",
    "lng": "150.93884"
  },
  {
    "country": "AU",
    "name": "Fairlight",
    "lat": "-33.79575",
    "lng": "151.27346"
  },
  {
    "country": "AU",
    "name": "Glen Alpine",
    "lat": "-34.086",
    "lng": "150.78512"
  },
  {
    "country": "AU",
    "name": "Gregory Hills",
    "lat": "-34.02673",
    "lng": "150.7707"
  },
  {
    "country": "AU",
    "name": "Guildford West",
    "lat": "-33.84939",
    "lng": "150.96475"
  },
  {
    "country": "AU",
    "name": "Harris Park",
    "lat": "-33.82285",
    "lng": "151.00781"
  },
  {
    "country": "AU",
    "name": "Hassall Grove",
    "lat": "-33.73349",
    "lng": "150.83542"
  },
  {
    "country": "AU",
    "name": "Homebush West",
    "lat": "-33.86269",
    "lng": "151.06696"
  },
  {
    "country": "AU",
    "name": "Hornsby Heights",
    "lat": "-33.6713",
    "lng": "151.09428"
  },
  {
    "country": "AU",
    "name": "Horsley Park",
    "lat": "-33.84322",
    "lng": "150.84889"
  },
  {
    "country": "AU",
    "name": "Hurstville",
    "lat": "-33.9677",
    "lng": "151.10149"
  },
  {
    "country": "AU",
    "name": "Kellyville Ridge",
    "lat": "-33.70156",
    "lng": "150.9179"
  },
  {
    "country": "AU",
    "name": "Kemps Creek",
    "lat": "-33.88059",
    "lng": "150.78761"
  },
  {
    "country": "AU",
    "name": "Killara",
    "lat": "-33.76604",
    "lng": "151.16213"
  },
  {
    "country": "AU",
    "name": "Killarney Heights",
    "lat": "-33.77451",
    "lng": "151.22028"
  },
  {
    "country": "AU",
    "name": "Kingswood Park",
    "lat": "-33.76651",
    "lng": "150.7144"
  },
  {
    "country": "AU",
    "name": "Renown Park",
    "lat": "-34.89174",
    "lng": "138.57729"
  },
  {
    "country": "AU",
    "name": "Kogarah Bay",
    "lat": "-33.97951",
    "lng": "151.12119"
  },
  {
    "country": "AU",
    "name": "Brompton",
    "lat": "-34.89445",
    "lng": "138.5782"
  },
  {
    "country": "AU",
    "name": "Kurraba Point",
    "lat": "-33.84235",
    "lng": "151.22256"
  },
  {
    "country": "AU",
    "name": "Kyle Bay",
    "lat": "-33.98787",
    "lng": "151.09939"
  },
  {
    "country": "AU",
    "name": "Koomooloo",
    "lat": "-33.5547",
    "lng": "139.46805"
  },
  {
    "country": "AU",
    "name": "Lane Cove West",
    "lat": "-33.81613",
    "lng": "151.15145"
  },
  {
    "country": "AU",
    "name": "Lewisham",
    "lat": "-33.89719",
    "lng": "151.14883"
  },
  {
    "country": "AU",
    "name": "Macquarie Links",
    "lat": "-33.98454",
    "lng": "150.87027"
  },
  {
    "country": "AU",
    "name": "Marsfield",
    "lat": "-33.77784",
    "lng": "151.10574"
  },
  {
    "country": "AU",
    "name": "Merrylands West",
    "lat": "-33.83269",
    "lng": "150.96906"
  },
  {
    "country": "AU",
    "name": "Middleton Grange",
    "lat": "-33.91704",
    "lng": "150.84186"
  },
  {
    "country": "AU",
    "name": "Miller",
    "lat": "-33.92089",
    "lng": "150.88469"
  },
  {
    "country": "AU",
    "name": "Mount Lewis",
    "lat": "-33.9175",
    "lng": "151.04828"
  },
  {
    "country": "AU",
    "name": "Narellan Vale",
    "lat": "-34.04974",
    "lng": "150.74392"
  },
  {
    "country": "AU",
    "name": "Narraweena",
    "lat": "-33.75519",
    "lng": "151.27659"
  },
  {
    "country": "AU",
    "name": "Newington",
    "lat": "-33.83488",
    "lng": "151.05703"
  },
  {
    "country": "AU",
    "name": "North Balgowlah",
    "lat": "-33.78631",
    "lng": "151.24801"
  },
  {
    "country": "AU",
    "name": "North Bondi",
    "lat": "-33.88787",
    "lng": "151.28075"
  },
  {
    "country": "AU",
    "name": "North Curl Curl",
    "lat": "-33.76434",
    "lng": "151.29727"
  },
  {
    "country": "AU",
    "name": "North Epping",
    "lat": "-33.75944",
    "lng": "151.09248"
  },
  {
    "country": "AU",
    "name": "North Manly",
    "lat": "-33.77561",
    "lng": "151.26921"
  },
  {
    "country": "AU",
    "name": "North Strathfield",
    "lat": "-33.85693",
    "lng": "151.09124"
  },
  {
    "country": "AU",
    "name": "North Wahroonga",
    "lat": "-33.70531",
    "lng": "151.12278"
  },
  {
    "country": "AU",
    "name": "Old Toongabbie",
    "lat": "-33.78763",
    "lng": "150.96897"
  },
  {
    "country": "AU",
    "name": "Oran Park",
    "lat": "-34.00564",
    "lng": "150.74032"
  },
  {
    "country": "AU",
    "name": "Orchard Hills",
    "lat": "-33.7823",
    "lng": "150.71088"
  },
  {
    "country": "AU",
    "name": "Padstow Heights",
    "lat": "-33.9674",
    "lng": "151.03991"
  },
  {
    "country": "AU",
    "name": "Parklea",
    "lat": "-33.72439",
    "lng": "150.9182"
  },
  {
    "country": "AU",
    "name": "Peakhurst Heights",
    "lat": "-33.97735",
    "lng": "151.05557"
  },
  {
    "country": "AU",
    "name": "Picnic Point",
    "lat": "-33.98062",
    "lng": "150.99661"
  },
  {
    "country": "AU",
    "name": "Ramsgate Beach",
    "lat": "-33.98523",
    "lng": "151.14634"
  },
  {
    "country": "AU",
    "name": "Revesby Heights",
    "lat": "-33.9671",
    "lng": "151.01841"
  },
  {
    "country": "AU",
    "name": "Rodd Point",
    "lat": "-33.86662",
    "lng": "151.13995"
  },
  {
    "country": "AU",
    "name": "Roseville Chase",
    "lat": "-33.77852",
    "lng": "151.19677"
  },
  {
    "country": "AU",
    "name": "Sandringham",
    "lat": "-33.99447",
    "lng": "151.13913"
  },
  {
    "country": "AU",
    "name": "South Coogee",
    "lat": "-33.93106",
    "lng": "151.25599"
  },
  {
    "country": "AU",
    "name": "South Penrith",
    "lat": "-33.77349",
    "lng": "150.69466"
  },
  {
    "country": "AU",
    "name": "South Turramurra",
    "lat": "-33.74941",
    "lng": "151.11257"
  },
  {
    "country": "AU",
    "name": "South Wentworthville",
    "lat": "-33.8185",
    "lng": "150.96344"
  },
  {
    "country": "AU",
    "name": "South Windsor",
    "lat": "-33.61808",
    "lng": "150.80443"
  },
  {
    "country": "AU",
    "name": "Spring Farm",
    "lat": "-34.06851",
    "lng": "150.71182"
  },
  {
    "country": "AU",
    "name": "Stanhope Gardens",
    "lat": "-33.72206",
    "lng": "150.92597"
  },
  {
    "country": "AU",
    "name": "Strathfield South",
    "lat": "-33.89252",
    "lng": "151.08334"
  },
  {
    "country": "AU",
    "name": "Sydney Olympic Park",
    "lat": "-33.84983",
    "lng": "151.06828"
  },
  {
    "country": "AU",
    "name": "Telopea",
    "lat": "-33.79279",
    "lng": "151.03858"
  },
  {
    "country": "AU",
    "name": "Wareemba",
    "lat": "-33.85819",
    "lng": "151.13085"
  },
  {
    "country": "AU",
    "name": "Werrington County",
    "lat": "-33.7465",
    "lng": "150.73929"
  },
  {
    "country": "AU",
    "name": "Werrington Downs",
    "lat": "-33.74206",
    "lng": "150.72779"
  },
  {
    "country": "AU",
    "name": "West Pennant Hills",
    "lat": "-33.7457",
    "lng": "151.04764"
  },
  {
    "country": "AU",
    "name": "West Ryde",
    "lat": "-33.80543",
    "lng": "151.07386"
  },
  {
    "country": "AU",
    "name": "Wheeler Heights",
    "lat": "-33.73119",
    "lng": "151.28049"
  },
  {
    "country": "AU",
    "name": "Wollstonecraft",
    "lat": "-33.8328",
    "lng": "151.18981"
  },
  {
    "country": "AU",
    "name": "Woronora Heights",
    "lat": "-34.03562",
    "lng": "151.02734"
  },
  {
    "country": "AU",
    "name": "Muirhead",
    "lat": "-12.35863",
    "lng": "130.89352"
  },
  {
    "country": "AU",
    "name": "Karama",
    "lat": "-12.40219",
    "lng": "130.916"
  },
  {
    "country": "AU",
    "name": "Bellamack",
    "lat": "-12.51707",
    "lng": "130.98355"
  },
  {
    "country": "AU",
    "name": "Virginia",
    "lat": "-12.51895",
    "lng": "131.02844"
  },
  {
    "country": "AU",
    "name": "Erindale",
    "lat": "-34.92785",
    "lng": "138.66313"
  },
  {
    "country": "AU",
    "name": "Glenunga",
    "lat": "-34.95013",
    "lng": "138.63841"
  },
  {
    "country": "AU",
    "name": "Hazelwood Park",
    "lat": "-34.93947",
    "lng": "138.65879"
  },
  {
    "country": "AU",
    "name": "Kensington Gardens",
    "lat": "-34.92582",
    "lng": "138.66145"
  },
  {
    "country": "AU",
    "name": "Leabrook",
    "lat": "-34.92976",
    "lng": "138.65862"
  },
  {
    "country": "AU",
    "name": "Linden Park",
    "lat": "-34.94347",
    "lng": "138.64728"
  },
  {
    "country": "AU",
    "name": "Tusmore",
    "lat": "-34.93894",
    "lng": "138.65059"
  },
  {
    "country": "AU",
    "name": "Wattle Park",
    "lat": "-34.92516",
    "lng": "138.67501"
  },
  {
    "country": "AU",
    "name": "Hectorville",
    "lat": "-34.89157",
    "lng": "138.65892"
  },
  {
    "country": "AU",
    "name": "Albert Park",
    "lat": "-34.87201",
    "lng": "138.51966"
  },
  {
    "country": "AU",
    "name": "Allenby Gardens",
    "lat": "-34.89766",
    "lng": "138.55425"
  },
  {
    "country": "AU",
    "name": "Henley Beach",
    "lat": "-34.92029",
    "lng": "138.49442"
  },
  {
    "country": "AU",
    "name": "Royal Park",
    "lat": "-34.87415",
    "lng": "138.51189"
  },
  {
    "country": "AU",
    "name": "Semaphore Park",
    "lat": "-34.85072",
    "lng": "138.47889"
  },
  {
    "country": "AU",
    "name": "West Hindmarsh",
    "lat": "-34.90794",
    "lng": "138.56412"
  },
  {
    "country": "AU",
    "name": "West Lakes Shore",
    "lat": "-34.8601",
    "lng": "138.48966"
  },
  {
    "country": "AU",
    "name": "Woodville North",
    "lat": "-34.872",
    "lng": "138.54309"
  },
  {
    "country": "AU",
    "name": "Woodville Park",
    "lat": "-34.88696",
    "lng": "138.54648"
  },
  {
    "country": "AU",
    "name": "Woodville South",
    "lat": "-34.88186",
    "lng": "138.53477"
  },
  {
    "country": "AU",
    "name": "Woodville West",
    "lat": "-34.8864",
    "lng": "138.53095"
  },
  {
    "country": "AU",
    "name": "Evanston Gardens",
    "lat": "-34.62323",
    "lng": "138.72166"
  },
  {
    "country": "AU",
    "name": "Evanston Park",
    "lat": "-34.62284",
    "lng": "138.74123"
  },
  {
    "country": "AU",
    "name": "Gawler East",
    "lat": "-34.59889",
    "lng": "138.7632"
  },
  {
    "country": "AU",
    "name": "Gawler South",
    "lat": "-34.60712",
    "lng": "138.74445"
  },
  {
    "country": "AU",
    "name": "Glenelg East",
    "lat": "-34.9764",
    "lng": "138.52962"
  },
  {
    "country": "AU",
    "name": "Glenelg North",
    "lat": "-34.9679",
    "lng": "138.51751"
  },
  {
    "country": "AU",
    "name": "North Brighton",
    "lat": "-35.00279",
    "lng": "138.52211"
  },
  {
    "country": "AU",
    "name": "Seacliff Park",
    "lat": "-35.02983",
    "lng": "138.53129"
  },
  {
    "country": "AU",
    "name": "Somerton Park",
    "lat": "-34.99705",
    "lng": "138.52155"
  },
  {
    "country": "AU",
    "name": "South Brighton",
    "lat": "-35.02765",
    "lng": "138.52798"
  },
  {
    "country": "AU",
    "name": "Clovelly Park",
    "lat": "-34.99951",
    "lng": "138.57081"
  },
  {
    "country": "AU",
    "name": "Hallett Cove",
    "lat": "-35.07923",
    "lng": "138.5146"
  },
  {
    "country": "AU",
    "name": "Oaklands Park",
    "lat": "-35.00671",
    "lng": "138.54457"
  },
  {
    "country": "AU",
    "name": "Plympton Park",
    "lat": "-34.98071",
    "lng": "138.54918"
  },
  {
    "country": "AU",
    "name": "Seacombe Heights",
    "lat": "-35.03264",
    "lng": "138.54584"
  },
  {
    "country": "AU",
    "name": "South Plympton",
    "lat": "-34.97682",
    "lng": "138.55588"
  },
  {
    "country": "AU",
    "name": "Trott Park",
    "lat": "-35.07576",
    "lng": "138.54189"
  },
  {
    "country": "AU",
    "name": "Clarence Gardens",
    "lat": "-34.97539",
    "lng": "138.57983"
  },
  {
    "country": "AU",
    "name": "Crafers West",
    "lat": "-34.99136",
    "lng": "138.68205"
  },
  {
    "country": "AU",
    "name": "Hawthorn",
    "lat": "-34.97384",
    "lng": "138.60738"
  },
  {
    "country": "AU",
    "name": "Lower Mitcham",
    "lat": "-34.97731",
    "lng": "138.60493"
  },
  {
    "country": "AU",
    "name": "Marden",
    "lat": "-34.89569",
    "lng": "138.6378"
  },
  {
    "country": "AU",
    "name": "Norwood",
    "lat": "-34.9273",
    "lng": "138.62849"
  },
  {
    "country": "AU",
    "name": "Payneham",
    "lat": "-34.89724",
    "lng": "138.64064"
  },
  {
    "country": "AU",
    "name": "Royston Park",
    "lat": "-34.89757",
    "lng": "138.6315"
  },
  {
    "country": "AU",
    "name": "Trinity Gardens",
    "lat": "-34.91438",
    "lng": "138.64141"
  },
  {
    "country": "AU",
    "name": "Aberfoyle Park",
    "lat": "-35.0768",
    "lng": "138.59163"
  },
  {
    "country": "AU",
    "name": "Hackham West",
    "lat": "-35.14312",
    "lng": "138.51442"
  },
  {
    "country": "AU",
    "name": "Noarlunga Downs",
    "lat": "-35.1504",
    "lng": "138.50395"
  },
  {
    "country": "AU",
    "name": "Old Reynella",
    "lat": "-35.10353",
    "lng": "138.53365"
  },
  {
    "country": "AU",
    "name": "Port Noarlunga South",
    "lat": "-35.17404",
    "lng": "138.46859"
  },
  {
    "country": "AU",
    "name": "Reynella East",
    "lat": "-35.09197",
    "lng": "138.55742"
  },
  {
    "country": "AU",
    "name": "Elizabeth Downs",
    "lat": "-34.69982",
    "lng": "138.69132"
  },
  {
    "country": "AU",
    "name": "Elizabeth East",
    "lat": "-34.72513",
    "lng": "138.68214"
  },
  {
    "country": "AU",
    "name": "Elizabeth Grove",
    "lat": "-34.73528",
    "lng": "138.66888"
  },
  {
    "country": "AU",
    "name": "Elizabeth North",
    "lat": "-34.70678",
    "lng": "138.67609"
  },
  {
    "country": "AU",
    "name": "Elizabeth Park",
    "lat": "-34.70974",
    "lng": "138.68604"
  },
  {
    "country": "AU",
    "name": "Elizabeth South",
    "lat": "-34.73182",
    "lng": "138.66192"
  },
  {
    "country": "AU",
    "name": "Elizabeth Vale",
    "lat": "-34.74857",
    "lng": "138.66819"
  },
  {
    "country": "AU",
    "name": "Munno Para",
    "lat": "-34.66792",
    "lng": "138.70149"
  },
  {
    "country": "AU",
    "name": "Smithfield Plains",
    "lat": "-34.67643",
    "lng": "138.67785"
  },
  {
    "country": "AU",
    "name": "Alberton",
    "lat": "-34.85925",
    "lng": "138.52138"
  },
  {
    "country": "AU",
    "name": "Angle Park",
    "lat": "-34.85989",
    "lng": "138.55798"
  },
  {
    "country": "AU",
    "name": "Ethelton",
    "lat": "-34.84869",
    "lng": "138.49103"
  },
  {
    "country": "AU",
    "name": "Ferryden Park",
    "lat": "-34.86616",
    "lng": "138.5618"
  },
  {
    "country": "AU",
    "name": "Semaphore South",
    "lat": "-34.84975",
    "lng": "138.47949"
  },
  {
    "country": "AU",
    "name": "Walkley Heights",
    "lat": "-34.83668",
    "lng": "138.64368"
  },
  {
    "country": "AU",
    "name": "Windsor Gardens",
    "lat": "-34.86538",
    "lng": "138.64703"
  },
  {
    "country": "AU",
    "name": "Woodville Gardens",
    "lat": "-34.86788",
    "lng": "138.54798"
  },
  {
    "country": "AU",
    "name": "Sefton Park",
    "lat": "-34.87405",
    "lng": "138.60343"
  },
  {
    "country": "AU",
    "name": "Rosenthal Heights",
    "lat": "-28.24013",
    "lng": "152.01327"
  },
  {
    "country": "AU",
    "name": "Para Hills West",
    "lat": "-34.80474",
    "lng": "138.64283"
  },
  {
    "country": "AU",
    "name": "Para Vista",
    "lat": "-34.82094",
    "lng": "138.66111"
  },
  {
    "country": "AU",
    "name": "Salisbury Downs",
    "lat": "-34.76772",
    "lng": "138.6221"
  },
  {
    "country": "AU",
    "name": "Salisbury Heights",
    "lat": "-34.7631",
    "lng": "138.67591"
  },
  {
    "country": "AU",
    "name": "Salisbury North",
    "lat": "-34.74956",
    "lng": "138.6206"
  },
  {
    "country": "AU",
    "name": "Salisbury Park",
    "lat": "-34.76155",
    "lng": "138.67029"
  },
  {
    "country": "AU",
    "name": "Salisbury Plain",
    "lat": "-34.77265",
    "lng": "138.6633"
  },
  {
    "country": "AU",
    "name": "Modbury Heights",
    "lat": "-34.80969",
    "lng": "138.68544"
  },
  {
    "country": "AU",
    "name": "Modbury North",
    "lat": "-34.82848",
    "lng": "138.6739"
  },
  {
    "country": "AU",
    "name": "Clarence Park",
    "lat": "-34.96416",
    "lng": "138.5806"
  },
  {
    "country": "AU",
    "name": "Everard Park",
    "lat": "-34.95196",
    "lng": "138.57481"
  },
  {
    "country": "AU",
    "name": "Forestville",
    "lat": "-34.94946",
    "lng": "138.57845"
  },
  {
    "country": "AU",
    "name": "Hyde Park",
    "lat": "-34.95467",
    "lng": "138.60107"
  },
  {
    "country": "AU",
    "name": "Millswood",
    "lat": "-34.95505",
    "lng": "138.58888"
  },
  {
    "country": "AU",
    "name": "Unley Park",
    "lat": "-34.96388",
    "lng": "138.60776"
  },
  {
    "country": "AU",
    "name": "Brooklyn Park",
    "lat": "-34.92847",
    "lng": "138.53631"
  },
  {
    "country": "AU",
    "name": "Camden Park",
    "lat": "-34.96857",
    "lng": "138.53957"
  },
  {
    "country": "AU",
    "name": "Marleston",
    "lat": "-34.94763",
    "lng": "138.55957"
  },
  {
    "country": "AU",
    "name": "North Plympton",
    "lat": "-34.95769",
    "lng": "138.55343"
  },
  {
    "country": "AU",
    "name": "Novar Gardens",
    "lat": "-34.96626",
    "lng": "138.53256"
  },
  {
    "country": "AU",
    "name": "Torrensville",
    "lat": "-34.92046",
    "lng": "138.56149"
  },
  {
    "country": "AU",
    "name": "Acton",
    "lat": "-35.27767",
    "lng": "149.11829"
  },
  {
    "country": "AU",
    "name": "Red Hill",
    "lat": "-35.32624",
    "lng": "149.11906"
  },
  {
    "country": "AU",
    "name": "Bonner",
    "lat": "-35.16225",
    "lng": "149.13855"
  },
  {
    "country": "AU",
    "name": "Coombs",
    "lat": "-35.31634",
    "lng": "149.03941"
  },
  {
    "country": "AU",
    "name": "Wright",
    "lat": "-35.32239",
    "lng": "149.03456"
  },
  {
    "country": "AU",
    "name": "Garran",
    "lat": "-35.34206",
    "lng": "149.10846"
  },
  {
    "country": "AU",
    "name": "Alfred Cove",
    "lat": "-32.03316",
    "lng": "115.81259"
  },
  {
    "country": "AU",
    "name": "Alkimos",
    "lat": "-31.63039",
    "lng": "115.68638"
  },
  {
    "country": "AU",
    "name": "Bedford",
    "lat": "-31.91132",
    "lng": "115.8892"
  },
  {
    "country": "AU",
    "name": "Brabham",
    "lat": "-31.82728",
    "lng": "115.97417"
  },
  {
    "country": "AU",
    "name": "City Beach",
    "lat": "-31.9344",
    "lng": "115.76174"
  },
  {
    "country": "AU",
    "name": "Coolbinia",
    "lat": "-31.9147",
    "lng": "115.84894"
  },
  {
    "country": "AU",
    "name": "Crawley",
    "lat": "-31.98418",
    "lng": "115.81603"
  },
  {
    "country": "AU",
    "name": "Daglish",
    "lat": "-31.95177",
    "lng": "115.8088"
  },
  {
    "country": "AU",
    "name": "Dayton",
    "lat": "-31.85251",
    "lng": "115.97494"
  },
  {
    "country": "AU",
    "name": "East Cannington",
    "lat": "-32.0098",
    "lng": "115.95503"
  },
  {
    "country": "AU",
    "name": "Eden Hill",
    "lat": "-31.88908",
    "lng": "115.94675"
  },
  {
    "country": "AU",
    "name": "Eglinton",
    "lat": "-31.58677",
    "lng": "115.68878"
  },
  {
    "country": "AU",
    "name": "Embleton",
    "lat": "-31.90355",
    "lng": "115.90902"
  },
  {
    "country": "AU",
    "name": "Ferndale",
    "lat": "-32.03494",
    "lng": "115.92233"
  },
  {
    "country": "AU",
    "name": "Harrisdale",
    "lat": "-32.11084",
    "lng": "115.93563"
  },
  {
    "country": "AU",
    "name": "Henley Brook",
    "lat": "-31.81393",
    "lng": "115.98807"
  },
  {
    "country": "AU",
    "name": "Hilbert",
    "lat": "-32.17818",
    "lng": "115.9849"
  },
  {
    "country": "AU",
    "name": "Hilton",
    "lat": "-32.06208",
    "lng": "115.78049"
  },
  {
    "country": "AU",
    "name": "Jindalee",
    "lat": "-31.64938",
    "lng": "115.69496"
  },
  {
    "country": "AU",
    "name": "Joondanna",
    "lat": "-31.90767",
    "lng": "115.84233"
  },
  {
    "country": "AU",
    "name": "Kallaroo",
    "lat": "-31.79098",
    "lng": "115.75298"
  },
  {
    "country": "AU",
    "name": "Midvale",
    "lat": "-31.88881",
    "lng": "116.03288"
  },
  {
    "country": "AU",
    "name": "Mount Pleasant",
    "lat": "-32.03974",
    "lng": "115.84993"
  },
  {
    "country": "AU",
    "name": "Myaree",
    "lat": "-32.04",
    "lng": "115.81761"
  },
  {
    "country": "AU",
    "name": "Oakford",
    "lat": "-32.20094",
    "lng": "115.93391"
  },
  {
    "country": "AU",
    "name": "Parkwood",
    "lat": "-32.04913",
    "lng": "115.91838"
  },
  {
    "country": "AU",
    "name": "Parmelia",
    "lat": "-32.25784",
    "lng": "115.82208"
  },
  {
    "country": "AU",
    "name": "Rivervale",
    "lat": "-31.95546",
    "lng": "115.91306"
  },
  {
    "country": "AU",
    "name": "South Fremantle",
    "lat": "-32.06907",
    "lng": "115.75453"
  },
  {
    "country": "AU",
    "name": "South Guildford",
    "lat": "-31.9122",
    "lng": "115.96825"
  },
  {
    "country": "AU",
    "name": "South Lake",
    "lat": "-32.11125",
    "lng": "115.83873"
  },
  {
    "country": "AU",
    "name": "Watermans Bay",
    "lat": "-31.84915",
    "lng": "115.7559"
  },
  {
    "country": "AU",
    "name": "Wembley Downs",
    "lat": "-31.91169",
    "lng": "115.77358"
  },
  {
    "country": "AU",
    "name": "West Leederville",
    "lat": "-31.94141",
    "lng": "115.83117"
  },
  {
    "country": "AU",
    "name": "Woodbridge",
    "lat": "-31.88695",
    "lng": "115.99196"
  },
  {
    "country": "AU",
    "name": "Acton Park",
    "lat": "-42.87932",
    "lng": "147.48459"
  },
  {
    "country": "AU",
    "name": "West Moonah",
    "lat": "-42.84996",
    "lng": "147.28181"
  },
  {
    "country": "AU",
    "name": "Dynnyrne",
    "lat": "-42.90541",
    "lng": "147.31576"
  },
  {
    "country": "AU",
    "name": "Mount Stuart",
    "lat": "-42.87157",
    "lng": "147.30164"
  },
  {
    "country": "AU",
    "name": "North Hobart",
    "lat": "-42.87406",
    "lng": "147.31597"
  },
  {
    "country": "AU",
    "name": "South Hobart",
    "lat": "-42.89459",
    "lng": "147.30924"
  },
  {
    "country": "AU",
    "name": "West Hobart",
    "lat": "-42.87658",
    "lng": "147.30688"
  },
  {
    "country": "AU",
    "name": "East Bunbury",
    "lat": "-33.33619",
    "lng": "115.66041"
  },
  {
    "country": "AU",
    "name": "Broadbeach Waters",
    "lat": "-28.03498",
    "lng": "153.42502"
  },
  {
    "country": "AU",
    "name": "Burleigh Waters",
    "lat": "-28.09975",
    "lng": "153.42463"
  },
  {
    "country": "AU",
    "name": "Clear Island Waters",
    "lat": "-28.05308",
    "lng": "153.39815"
  },
  {
    "country": "AU",
    "name": "Currumbin Waters",
    "lat": "-28.15442",
    "lng": "153.47282"
  },
  {
    "country": "AU",
    "name": "Lower Beechmont",
    "lat": "-28.04751",
    "lng": "153.24572"
  },
  {
    "country": "AU",
    "name": "Mermaid Waters",
    "lat": "-28.04912",
    "lng": "153.43081"
  },
  {
    "country": "AU",
    "name": "Mount Nathan",
    "lat": "-27.9643",
    "lng": "153.27198"
  },
  {
    "country": "AU",
    "name": "Ormeau Hills",
    "lat": "-27.79653",
    "lng": "153.2567"
  },
  {
    "country": "AU",
    "name": "Tallebudgera Valley",
    "lat": "-28.1927",
    "lng": "153.35489"
  },
  {
    "country": "AU",
    "name": "East Mackay",
    "lat": "-21.14979",
    "lng": "149.1964"
  },
  {
    "country": "AU",
    "name": "Mackay City",
    "lat": "-21.14463",
    "lng": "149.18678"
  },
  {
    "country": "AU",
    "name": "South Mackay",
    "lat": "-21.16288",
    "lng": "149.17751"
  },
  {
    "country": "AU",
    "name": "West Mackay",
    "lat": "-21.15467",
    "lng": "149.16181"
  },
  {
    "country": "AU",
    "name": "Lakelands",
    "lat": "-32.47157",
    "lng": "115.77291"
  },
  {
    "country": "AU",
    "name": "South Yunderup",
    "lat": "-32.5851",
    "lng": "115.78015"
  },
  {
    "country": "AU",
    "name": "Arcadia vale",
    "lat": "-33.06052",
    "lng": "151.58408"
  },
  {
    "country": "AU",
    "name": "Buff Point",
    "lat": "-33.22285",
    "lng": "151.53125"
  },
  {
    "country": "AU",
    "name": "Charmhaven",
    "lat": "-33.22671",
    "lng": "151.50284"
  },
  {
    "country": "AU",
    "name": "Chittaway Bay",
    "lat": "-33.32769",
    "lng": "151.42971"
  },
  {
    "country": "AU",
    "name": "Noraville",
    "lat": "-33.26785",
    "lng": "151.55352"
  },
  {
    "country": "AU",
    "name": "Tuggerawong",
    "lat": "-33.2804",
    "lng": "151.48044"
  },
  {
    "country": "AU",
    "name": "Bar Beach",
    "lat": "-32.94128",
    "lng": "151.76544"
  },
  {
    "country": "AU",
    "name": "Broadmeadow",
    "lat": "-32.92371",
    "lng": "151.72849"
  },
  {
    "country": "AU",
    "name": "Carrington",
    "lat": "-32.91501",
    "lng": "151.76436"
  },
  {
    "country": "AU",
    "name": "Cooks Hill",
    "lat": "-32.93244",
    "lng": "151.77114"
  },
  {
    "country": "AU",
    "name": "Elermore Vale",
    "lat": "-32.91621",
    "lng": "151.67665"
  },
  {
    "country": "AU",
    "name": "Hamilton",
    "lat": "-32.92207",
    "lng": "151.74711"
  },
  {
    "country": "AU",
    "name": "The Junction",
    "lat": "-32.93822",
    "lng": "151.75909"
  },
  {
    "country": "AU",
    "name": "Mayfield",
    "lat": "-32.89793",
    "lng": "151.73613"
  },
  {
    "country": "AU",
    "name": "Mayfield West",
    "lat": "-32.89195",
    "lng": "151.72711"
  },
  {
    "country": "AU",
    "name": "Merewether Heights",
    "lat": "-32.94733",
    "lng": "151.73565"
  },
  {
    "country": "AU",
    "name": "New Lambton Heights",
    "lat": "-32.92466",
    "lng": "151.69364"
  },
  {
    "country": "AU",
    "name": "Newcastle East",
    "lat": "-32.92771",
    "lng": "151.7884"
  },
  {
    "country": "AU",
    "name": "North Lambton",
    "lat": "-32.90605",
    "lng": "151.70574"
  },
  {
    "country": "AU",
    "name": "Rankin Park",
    "lat": "-32.92516",
    "lng": "151.68016"
  },
  {
    "country": "AU",
    "name": "Waratah",
    "lat": "-32.90667",
    "lng": "151.72647"
  },
  {
    "country": "AU",
    "name": "Belmont North",
    "lat": "-33.02081",
    "lng": "151.66849"
  },
  {
    "country": "AU",
    "name": "Belmont South",
    "lat": "-33.04934",
    "lng": "151.65695"
  },
  {
    "country": "AU",
    "name": "Bolton Point",
    "lat": "-33.00177",
    "lng": "151.61013"
  },
  {
    "country": "AU",
    "name": "Cardiff Heights",
    "lat": "-32.93626",
    "lng": "151.67227"
  },
  {
    "country": "AU",
    "name": "Cardiff South",
    "lat": "-32.9547",
    "lng": "151.66446"
  },
  {
    "country": "AU",
    "name": "Coal Point",
    "lat": "-33.04225",
    "lng": "151.61159"
  },
  {
    "country": "AU",
    "name": "Fennell Bay",
    "lat": "-32.9922",
    "lng": "151.60008"
  },
  {
    "country": "AU",
    "name": "Floraville",
    "lat": "-33.01116",
    "lng": "151.6648"
  },
  {
    "country": "AU",
    "name": "Garden Suburb",
    "lat": "-32.94368",
    "lng": "151.68085"
  },
  {
    "country": "AU",
    "name": "Gateshead",
    "lat": "-32.98208",
    "lng": "151.69188"
  },
  {
    "country": "AU",
    "name": "Glendale",
    "lat": "-32.93194",
    "lng": "151.64103"
  },
  {
    "country": "AU",
    "name": "Jewells",
    "lat": "-33.01386",
    "lng": "151.68308"
  },
  {
    "country": "AU",
    "name": "Tingira Heights",
    "lat": "-32.99725",
    "lng": "151.67021"
  },
  {
    "country": "AU",
    "name": "Windale",
    "lat": "-32.99277",
    "lng": "151.68167"
  },
  {
    "country": "AU",
    "name": "Toronto",
    "lat": "-33.01357",
    "lng": "151.59373"
  },
  {
    "country": "AU",
    "name": "Ashtonfield",
    "lat": "-32.77331",
    "lng": "151.60583"
  },
  {
    "country": "AU",
    "name": "Bolwarra Heights",
    "lat": "-32.701",
    "lng": "151.58541"
  },
  {
    "country": "AU",
    "name": "West Rockhampton",
    "lat": "-23.37941",
    "lng": "150.48175"
  },
  {
    "country": "AU",
    "name": "Black Mountain",
    "lat": "-26.39886",
    "lng": "152.87561"
  },
  {
    "country": "AU",
    "name": "Caloundra West",
    "lat": "-26.80634",
    "lng": "153.10894"
  },
  {
    "country": "AU",
    "name": "Dicky Beach",
    "lat": "-26.78364",
    "lng": "153.13766"
  },
  {
    "country": "AU",
    "name": "Diddillibah",
    "lat": "-26.64166",
    "lng": "153.04959"
  },
  {
    "country": "AU",
    "name": "Forest Glen",
    "lat": "-26.68864",
    "lng": "153.00453"
  },
  {
    "country": "AU",
    "name": "Moffat Beach",
    "lat": "-26.79048",
    "lng": "153.13997"
  },
  {
    "country": "AU",
    "name": "Peregian Springs",
    "lat": "-26.48801",
    "lng": "153.07577"
  },
  {
    "country": "AU",
    "name": "West Woombye",
    "lat": "-26.66644",
    "lng": "152.92557"
  },
  {
    "country": "AU",
    "name": "Mount Louisa",
    "lat": "-19.274",
    "lng": "146.75091"
  },
  {
    "country": "AU",
    "name": "South Townsville",
    "lat": "-19.26618",
    "lng": "146.83331"
  },
  {
    "country": "AU",
    "name": "Stuart",
    "lat": "-19.34702",
    "lng": "146.84378"
  },
  {
    "country": "AU",
    "name": "Black River",
    "lat": "-19.22517",
    "lng": "146.61787"
  },
  {
    "country": "AU",
    "name": "Albion Park Rail",
    "lat": "-34.56634",
    "lng": "150.79177"
  },
  {
    "country": "AU",
    "name": "Avondale",
    "lat": "-34.5175",
    "lng": "150.7501"
  },
  {
    "country": "AU",
    "name": "Barrack Heights",
    "lat": "-34.56464",
    "lng": "150.85692"
  },
  {
    "country": "AU",
    "name": "Cordeaux Heights",
    "lat": "-34.44043",
    "lng": "150.83748"
  },
  {
    "country": "AU",
    "name": "East Corrimal",
    "lat": "-34.37606",
    "lng": "150.91078"
  },
  {
    "country": "AU",
    "name": "Koonawarra",
    "lat": "-34.50212",
    "lng": "150.80855"
  },
  {
    "country": "AU",
    "name": "West Wollongong",
    "lat": "-34.4248",
    "lng": "150.86417"
  },
  {
    "country": "AU",
    "name": "North Wollongong",
    "lat": "-34.40569",
    "lng": "150.89763"
  },
  {
    "country": "AU",
    "name": "Mount Warrigal",
    "lat": "-34.54804",
    "lng": "150.83752"
  },
  {
    "country": "AU",
    "name": "Mount Pleasant",
    "lat": "-34.39531",
    "lng": "150.86658"
  },
  {
    "country": "AU",
    "name": "Lake Wendouree",
    "lat": "-37.54993",
    "lng": "143.8473"
  },
  {
    "country": "AU",
    "name": "White Hills",
    "lat": "-36.72875",
    "lng": "144.30525"
  },
  {
    "country": "AU",
    "name": "Nulsen",
    "lat": "-33.85696",
    "lng": "121.87499"
  },
  {
    "country": "AU",
    "name": "West Beach",
    "lat": "-33.87464",
    "lng": "121.89013"
  },
  {
    "country": "AU",
    "name": "Armstrong Creek",
    "lat": "-38.23121",
    "lng": "144.37374"
  },
  {
    "country": "AU",
    "name": "Hamlyn Heights",
    "lat": "-38.12108",
    "lng": "144.32799"
  },
  {
    "country": "AU",
    "name": "North Geelong",
    "lat": "-38.10953",
    "lng": "144.35134"
  },
  {
    "country": "AU",
    "name": "Wandana Heights",
    "lat": "-38.17577",
    "lng": "144.30387"
  },
  {
    "country": "AU",
    "name": "Whittington",
    "lat": "-38.1808",
    "lng": "144.39322"
  },
  {
    "country": "AU",
    "name": "Chatsworth",
    "lat": "-26.14398",
    "lng": "152.61503"
  },
  {
    "country": "AU",
    "name": "Monkland",
    "lat": "-26.21191",
    "lng": "152.68245"
  },
  {
    "country": "AU",
    "name": "East Launceston",
    "lat": "-41.43843",
    "lng": "147.15101"
  },
  {
    "country": "AU",
    "name": "South Launceston",
    "lat": "-41.45506",
    "lng": "147.14556"
  },
  {
    "country": "AU",
    "name": "Summerhill",
    "lat": "-41.46747",
    "lng": "147.12796"
  },
  {
    "country": "AU",
    "name": "West Launceston",
    "lat": "-41.45092",
    "lng": "147.13114"
  },
  {
    "country": "AU",
    "name": "Bilambil Heights",
    "lat": "-28.2161",
    "lng": "153.48415"
  },
  {
    "country": "AU",
    "name": "Tweed Heads West",
    "lat": "-28.18736",
    "lng": "153.52278"
  },
  {
    "country": "AU",
    "name": "Rangeville",
    "lat": "-27.58318",
    "lng": "151.97997"
  },
  {
    "country": "AU",
    "name": "Darling Heights",
    "lat": "-27.59659",
    "lng": "151.93045"
  },
  {
    "country": "AU",
    "name": "East Toowoomba",
    "lat": "-27.57086",
    "lng": "151.97422"
  },
  {
    "country": "AU",
    "name": "Hodgson Vale",
    "lat": "-27.66518",
    "lng": "151.93251"
  },
  {
    "country": "AU",
    "name": "North Toowoomba",
    "lat": "-27.54415",
    "lng": "151.96117"
  },
  {
    "country": "AU",
    "name": "South Toowoomba",
    "lat": "-27.57101",
    "lng": "151.9465"
  },
  {
    "country": "AU",
    "name": "Wilsonton Heights",
    "lat": "-27.53227",
    "lng": "151.92444"
  },
  {
    "country": "AU",
    "name": "East Tamworth",
    "lat": "-31.08548",
    "lng": "150.93721"
  },
  {
    "country": "AU",
    "name": "North Tamworth",
    "lat": "-31.07862",
    "lng": "150.92219"
  },
  {
    "country": "AU",
    "name": "South Tamworth",
    "lat": "-31.11",
    "lng": "150.92254"
  },
  {
    "country": "AU",
    "name": "Cooroibah",
    "lat": "-26.36316",
    "lng": "152.98599"
  },
  {
    "country": "AU",
    "name": "East Albury",
    "lat": "-36.08144",
    "lng": "146.92991"
  },
  {
    "country": "AU",
    "name": "North Albury",
    "lat": "-36.05745",
    "lng": "146.92995"
  },
  {
    "country": "AU",
    "name": "South Albury",
    "lat": "-36.08654",
    "lng": "146.90905"
  },
  {
    "country": "AU",
    "name": "West Albury",
    "lat": "-36.07979",
    "lng": "146.89227"
  },
  {
    "country": "AU",
    "name": "East Innisfail",
    "lat": "-17.53324",
    "lng": "146.03487"
  },
  {
    "country": "AU",
    "name": "Garden Island",
    "lat": "-32.24264",
    "lng": "115.69505"
  },
  {
    "country": "AU",
    "name": "Sunshine Coast",
    "lat": "-26.65682",
    "lng": "153.07955"
  },
  {
    "country": "AU",
    "name": "Roebuck",
    "lat": "-18.1713",
    "lng": "122.50116"
  },
  {
    "country": "AU",
    "name": "East Carnarvon",
    "lat": "-24.86397",
    "lng": "113.67768"
  },
  {
    "country": "AU",
    "name": "Marangaroo",
    "lat": "-31.82711",
    "lng": "115.83843"
  },
  {
    "country": "AU",
    "name": "Innisfail Estate",
    "lat": "-17.5183",
    "lng": "146.04474"
  },
  {
    "country": "AU",
    "name": "Katherine South",
    "lat": "-14.46784",
    "lng": "132.25848"
  },
  {
    "country": "AU",
    "name": "Katherine East",
    "lat": "-14.46597",
    "lng": "132.28556"
  },
  {
    "country": "AU",
    "name": "Lismore Heights",
    "lat": "-28.80102",
    "lng": "153.30048"
  },
  {
    "country": "AU",
    "name": "South Lismore",
    "lat": "-28.81629",
    "lng": "153.25619"
  },
  {
    "country": "AU",
    "name": "Melbourne City Centre",
    "lat": "-37.81501",
    "lng": "144.96657"
  },
  {
    "country": "AU",
    "name": "Brisbane central business district",
    "lat": "-27.47134",
    "lng": "153.02736"
  },
  {
    "country": "AU",
    "name": "Perth city centre",
    "lat": "-31.95289",
    "lng": "115.85152"
  },
  {
    "country": "AU",
    "name": "Adelaide city centre",
    "lat": "-34.92873",
    "lng": "138.60334"
  },
  {
    "country": "AU",
    "name": "Newcastle city centre",
    "lat": "-32.92885",
    "lng": "151.7774"
  },
  {
    "country": "AU",
    "name": "Hobart city centre",
    "lat": "-42.8828",
    "lng": "147.32582"
  },
  {
    "country": "AU",
    "name": "Maitland city centre",
    "lat": "-32.73263",
    "lng": "151.55331"
  },
  {
    "country": "AU",
    "name": "Geelong city centre",
    "lat": "-38.14996",
    "lng": "144.36176"
  },
  {
    "country": "AU",
    "name": "Geraldton city centre",
    "lat": "-28.77754",
    "lng": "114.61494"
  },
  {
    "country": "AU",
    "name": "Launceston city centre",
    "lat": "-41.43352",
    "lng": "147.1378"
  },
  {
    "country": "AU",
    "name": "Bathurst city centre",
    "lat": "-33.41816",
    "lng": "149.57621"
  },
  {
    "country": "AU",
    "name": "Bendigo city centre",
    "lat": "-36.75698",
    "lng": "144.27957"
  },
  {
    "country": "AU",
    "name": "Wollongong city centre",
    "lat": "-34.4279",
    "lng": "150.89268"
  },
  {
    "country": "AU",
    "name": "Mandurah city centre",
    "lat": "-32.52644",
    "lng": "115.73361"
  },
  {
    "country": "AU",
    "name": "Yeppoon city centre",
    "lat": "-23.1295",
    "lng": "150.73639"
  },
  {
    "country": "AU",
    "name": "Rockingham city centre",
    "lat": "-32.28407",
    "lng": "115.7354"
  },
  {
    "country": "AU",
    "name": "Coomera",
    "lat": "-27.84333",
    "lng": "153.33901"
  },
  {
    "country": "AU",
    "name": "West Wodonga",
    "lat": "-36.12346",
    "lng": "146.85193"
  },
  {
    "country": "AU",
    "name": "Kalamunda",
    "lat": "-31.97372",
    "lng": "116.05845"
  },
  {
    "country": "AU",
    "name": "Currumbin",
    "lat": "-28.13649",
    "lng": "153.48158"
  },
  {
    "country": "AU",
    "name": "Strathmore",
    "lat": "-37.73563",
    "lng": "144.92065"
  },
  {
    "country": "AU",
    "name": "West Busselton",
    "lat": "-33.65792",
    "lng": "115.32293"
  },
  {
    "country": "AU",
    "name": "Kalinga",
    "lat": "-27.40957",
    "lng": "153.05061"
  },
  {
    "country": "AU",
    "name": "Bardia",
    "lat": "-33.97789",
    "lng": "150.86306"
  },
  {
    "country": "AU",
    "name": "Cairns City",
    "lat": "-16.92069",
    "lng": "145.77358"
  },
  {
    "country": "AU",
    "name": "Charters Towers City",
    "lat": "-20.07774",
    "lng": "146.26275"
  },
  {
    "country": "AU",
    "name": "South Bunbury",
    "lat": "-33.3491",
    "lng": "115.63359"
  },
  {
    "country": "AU",
    "name": "Tweed Heads South",
    "lat": "-28.19517",
    "lng": "153.53964"
  },
  {
    "country": "AU",
    "name": "Cairns North",
    "lat": "-16.90406",
    "lng": "145.75703"
  },
  {
    "country": "AU",
    "name": "Burpengary East",
    "lat": "-27.14447",
    "lng": "152.99968"
  },
  {
    "country": "AU",
    "name": "Pottsville",
    "lat": "-28.3874",
    "lng": "153.55857"
  },
  {
    "country": "AU",
    "name": "Queanbeyan East",
    "lat": "-35.34625",
    "lng": "149.24596"
  },
  {
    "country": "AU",
    "name": "Manly Vale",
    "lat": "-33.78457",
    "lng": "151.262"
  },
  {
    "country": "AU",
    "name": "Killarney Vale",
    "lat": "-33.36319",
    "lng": "151.45799"
  },
  {
    "country": "AU",
    "name": "Gladstone Central",
    "lat": "-23.84281",
    "lng": "151.24887"
  },
  {
    "country": "AU",
    "name": "West Gladstone",
    "lat": "-23.86123",
    "lng": "151.2453"
  },
  {
    "country": "AU",
    "name": "Bundaberg North",
    "lat": "-24.84914",
    "lng": "152.34638"
  },
  {
    "country": "AU",
    "name": "Jordan Springs",
    "lat": "-33.72138",
    "lng": "150.72873"
  },
  {
    "country": "AU",
    "name": "North Nowra",
    "lat": "-34.85822",
    "lng": "150.57479"
  },
  {
    "country": "AU",
    "name": "Culburra Beach",
    "lat": "-34.92788",
    "lng": "150.75766"
  },
  {
    "country": "AU",
    "name": "East Devonport",
    "lat": "-41.18792",
    "lng": "146.3866"
  },
  {
    "country": "AU",
    "name": "West Kempsey",
    "lat": "-31.05757",
    "lng": "152.82794"
  },
  {
    "country": "AU",
    "name": "North Bendigo",
    "lat": "-36.74363",
    "lng": "144.28791"
  },
  {
    "country": "AU",
    "name": "South Kalgoorlie",
    "lat": "-30.76507",
    "lng": "121.47334"
  },
  {
    "country": "AU",
    "name": "South Gladstone",
    "lat": "-23.86221",
    "lng": "151.26801"
  },
  {
    "country": "AU",
    "name": "North Gosford",
    "lat": "-33.414",
    "lng": "151.3516"
  },
  {
    "country": "AU",
    "name": "Singleton Heights",
    "lat": "-32.5416",
    "lng": "151.16089"
  },
  {
    "country": "AU",
    "name": "Ballarat North",
    "lat": "-37.54087",
    "lng": "143.86648"
  },
  {
    "country": "AU",
    "name": "West Ulverstone",
    "lat": "-41.14744",
    "lng": "146.1267"
  },
  {
    "country": "AU",
    "name": "Bundaberg South",
    "lat": "-24.87277",
    "lng": "152.35986"
  },
  {
    "country": "AU",
    "name": "Port Pirie West",
    "lat": "-33.1779",
    "lng": "137.9985"
  },
  {
    "country": "AU",
    "name": "East Bendigo",
    "lat": "-36.74157",
    "lng": "144.31894"
  },
  {
    "country": "AU",
    "name": "Mount Claremont",
    "lat": "-31.96177",
    "lng": "115.78337"
  },
  {
    "country": "AU",
    "name": "West Ballina",
    "lat": "-28.862",
    "lng": "153.53291"
  },
  {
    "country": "AU",
    "name": "Queanbeyan West",
    "lat": "-35.35497",
    "lng": "149.20412"
  },
  {
    "country": "AU",
    "name": "Svensson Heights",
    "lat": "-24.88566",
    "lng": "152.33183"
  },
  {
    "country": "AU",
    "name": "Bundaberg West",
    "lat": "-24.87265",
    "lng": "152.33647"
  },
  {
    "country": "AU",
    "name": "Bundaberg East",
    "lat": "-24.8586",
    "lng": "152.38003"
  },
  {
    "country": "AU",
    "name": "Moore Park Beach",
    "lat": "-24.71066",
    "lng": "152.20905"
  },
  {
    "country": "AU",
    "name": "North Coogee",
    "lat": "-32.09505",
    "lng": "115.75972"
  },
  {
    "country": "AU",
    "name": "West Bathurst",
    "lat": "-33.4092",
    "lng": "149.56324"
  },
  {
    "country": "AU",
    "name": "South Nowra",
    "lat": "-34.90332",
    "lng": "150.59827"
  },
  {
    "country": "AU",
    "name": "Sapphire Beach",
    "lat": "-30.22614",
    "lng": "153.13628"
  },
  {
    "country": "AU",
    "name": "Bennett Springs",
    "lat": "-31.85941",
    "lng": "115.94512"
  },
  {
    "country": "AU",
    "name": "The Hill",
    "lat": "-32.93089",
    "lng": "151.77835"
  },
  {
    "country": "AU",
    "name": "Glenelg South",
    "lat": "-34.98964",
    "lng": "138.51425"
  },
  {
    "country": "AU",
    "name": "South Kempsey",
    "lat": "-31.12302",
    "lng": "152.83253"
  },
  {
    "country": "AU",
    "name": "Midway Point",
    "lat": "-42.7948",
    "lng": "147.52883"
  },
  {
    "country": "AU",
    "name": "North Boambee Valley",
    "lat": "-30.31295",
    "lng": "153.06925"
  },
  {
    "country": "AU",
    "name": "Twin Waters",
    "lat": "-26.63422",
    "lng": "153.08114"
  },
  {
    "country": "AU",
    "name": "Trinity Park",
    "lat": "-16.80684",
    "lng": "145.70549"
  },
  {
    "country": "AU",
    "name": "Korora",
    "lat": "-30.2462",
    "lng": "153.11487"
  },
  {
    "country": "AU",
    "name": "New Gisborne",
    "lat": "-37.46065",
    "lng": "144.5993"
  },
  {
    "country": "AU",
    "name": "Risdon Park South",
    "lat": "-33.21104",
    "lng": "137.99498"
  },
  {
    "country": "AU",
    "name": "Upper Burnie",
    "lat": "-41.07139",
    "lng": "145.8996"
  },
  {
    "country": "AU",
    "name": "St Helena",
    "lat": "-37.68988",
    "lng": "145.12315"
  },
  {
    "country": "AU",
    "name": "Mollymook",
    "lat": "-35.34107",
    "lng": "150.46952"
  },
  {
    "country": "AU",
    "name": "Townview",
    "lat": "-20.73252",
    "lng": "139.50482"
  },
  {
    "country": "AU",
    "name": "South Murwillumbah",
    "lat": "-28.33895",
    "lng": "153.40004"
  },
  {
    "country": "AU",
    "name": "Elizabeth Hills",
    "lat": "-33.89863",
    "lng": "150.84761"
  },
  {
    "country": "AU",
    "name": "South Bathurst",
    "lat": "-33.43839",
    "lng": "149.57203"
  },
  {
    "country": "AU",
    "name": "Bungarribee",
    "lat": "-33.77704",
    "lng": "150.86799"
  },
  {
    "country": "AU",
    "name": "Meringandan West",
    "lat": "-27.41612",
    "lng": "151.88727"
  },
  {
    "country": "AU",
    "name": "Healy",
    "lat": "-20.74596",
    "lng": "139.5001"
  },
  {
    "country": "AU",
    "name": "Romaine",
    "lat": "-41.09944",
    "lng": "145.89376"
  },
  {
    "country": "AU",
    "name": "Corindi Beach",
    "lat": "-30.01668",
    "lng": "153.18555"
  },
  {
    "country": "AU",
    "name": "East Branxton",
    "lat": "-32.65372",
    "lng": "151.36559"
  },
  {
    "country": "AU",
    "name": "Barney Point",
    "lat": "-23.84793",
    "lng": "151.26577"
  },
  {
    "country": "AU",
    "name": "Zuccoli",
    "lat": "-12.50727",
    "lng": "131.00694"
  },
  {
    "country": "AU",
    "name": "Desert Springs",
    "lat": "-23.71554",
    "lng": "133.88768"
  },
  {
    "country": "AU",
    "name": "East Bairnsdale",
    "lat": "-37.83426",
    "lng": "147.65548"
  },
  {
    "country": "AU",
    "name": "East Kempsey",
    "lat": "-31.08242",
    "lng": "152.85253"
  },
  {
    "country": "AU",
    "name": "Holroyd",
    "lat": "-33.83078",
    "lng": "150.99725"
  },
  {
    "country": "AU",
    "name": "West Lamington",
    "lat": "-30.74707",
    "lng": "121.45248"
  },
  {
    "country": "AU",
    "name": "Hazelwood North",
    "lat": "-38.26763",
    "lng": "146.48286"
  },
  {
    "country": "AU",
    "name": "Manningham",
    "lat": "-34.87776",
    "lng": "138.62206"
  },
  {
    "country": "AU",
    "name": "Skennars Head",
    "lat": "-28.82888",
    "lng": "153.60209"
  },
  {
    "country": "AU",
    "name": "West Nowra",
    "lat": "-34.88593",
    "lng": "150.58333"
  },
  {
    "country": "AU",
    "name": "West Haven",
    "lat": "-31.63555",
    "lng": "152.78378"
  },
  {
    "country": "AU",
    "name": "South Carnarvon",
    "lat": "-24.89348",
    "lng": "113.65846"
  },
  {
    "country": "AU",
    "name": "Trunding",
    "lat": "-12.63422",
    "lng": "141.86963"
  },
  {
    "country": "AU",
    "name": "East Jindabyne",
    "lat": "-36.39579",
    "lng": "148.65137"
  },
  {
    "country": "AU",
    "name": "Pie Creek",
    "lat": "-26.22991",
    "lng": "152.60774"
  },
  {
    "country": "AU",
    "name": "Nowra Hill",
    "lat": "-34.92845",
    "lng": "150.57243"
  },
  {
    "country": "AU",
    "name": "Caddens",
    "lat": "-33.77415",
    "lng": "150.74126"
  },
  {
    "country": "AU",
    "name": "Shepparton East",
    "lat": "-36.40156",
    "lng": "145.47765"
  },
  {
    "country": "AU",
    "name": "Kambalda East",
    "lat": "-31.2055",
    "lng": "121.67011"
  },
  {
    "country": "AU",
    "name": "Wattle Ponds",
    "lat": "-32.52026",
    "lng": "151.19359"
  },
  {
    "country": "AU",
    "name": "Kotara South",
    "lat": "-32.95261",
    "lng": "151.69076"
  },
  {
    "country": "AU",
    "name": "Nanum",
    "lat": "-12.64511",
    "lng": "141.86221"
  },
  {
    "country": "AU",
    "name": "Mount Kembla",
    "lat": "-34.42881",
    "lng": "150.82161"
  },
  {
    "country": "AU",
    "name": "Moorak",
    "lat": "-37.86381",
    "lng": "140.74263"
  },
  {
    "country": "AU",
    "name": "Bowenfels",
    "lat": "-33.48336",
    "lng": "150.13444"
  },
  {
    "country": "AU",
    "name": "Sunshine Beach",
    "lat": "-26.40579",
    "lng": "153.10779"
  },
  {
    "country": "AU",
    "name": "Port Pirie South",
    "lat": "-33.19797",
    "lng": "138.01446"
  },
  {
    "country": "AU",
    "name": "Enmore",
    "lat": "-33.9005",
    "lng": "151.17314"
  },
  {
    "country": "AU",
    "name": "Enfield",
    "lat": "-33.89148",
    "lng": "151.09318"
  },
  {
    "country": "AU",
    "name": "South Granville",
    "lat": "-33.85864",
    "lng": "151.01066"
  },
  {
    "country": "AU",
    "name": "Holland Park",
    "lat": "-27.51704",
    "lng": "153.06744"
  },
  {
    "country": "AU",
    "name": "Ocean Grove",
    "lat": "-38.25772",
    "lng": "144.51919"
  },
  {
    "country": "AU",
    "name": "Albany city centre",
    "lat": "-35.02479",
    "lng": "117.88472"
  },
  {
    "country": "AU",
    "name": "Busselton city cenre",
    "lat": "-33.65078",
    "lng": "115.34932"
  },
  {
    "country": "AU",
    "name": "St Clair",
    "lat": "-34.87089",
    "lng": "138.53543"
  },
  {
    "country": "AU",
    "name": "Rossmore",
    "lat": "-33.94046",
    "lng": "150.77281"
  },
  {
    "country": "AW",
    "name": "Tanki Leendert",
    "lat": "12.53914",
    "lng": "-70.02004"
  },
  {
    "country": "AW",
    "name": "San Nicolas",
    "lat": "12.43624",
    "lng": "-69.90713"
  },
  {
    "country": "AW",
    "name": "Santa Cruz",
    "lat": "12.50953",
    "lng": "-69.98094"
  },
  {
    "country": "AW",
    "name": "Savaneta",
    "lat": "12.45026",
    "lng": "-69.93811"
  },
  {
    "country": "AW",
    "name": "Paradera",
    "lat": "12.5351",
    "lng": "-70.00688"
  },
  {
    "country": "AW",
    "name": "Oranjestad",
    "lat": "12.52398",
    "lng": "-70.02703"
  },
  {
    "country": "AX",
    "name": "Vårdö",
    "lat": "60.25",
    "lng": "20.38333"
  },
  {
    "country": "AX",
    "name": "Sund",
    "lat": "60.25",
    "lng": "20.11667"
  },
  {
    "country": "AX",
    "name": "Sottunga",
    "lat": "60.13023",
    "lng": "20.66683"
  },
  {
    "country": "AX",
    "name": "Saltvik",
    "lat": "60.28333",
    "lng": "20.05"
  },
  {
    "country": "AX",
    "name": "Lumparland",
    "lat": "60.11695",
    "lng": "20.25819"
  },
  {
    "country": "AX",
    "name": "Lemland",
    "lat": "60.07178",
    "lng": "20.08472"
  },
  {
    "country": "AX",
    "name": "Kumlinge",
    "lat": "60.26013",
    "lng": "20.77892"
  },
  {
    "country": "AX",
    "name": "Kökar",
    "lat": "59.92051",
    "lng": "20.90883"
  },
  {
    "country": "AX",
    "name": "Föglö",
    "lat": "60.01392",
    "lng": "20.41377"
  },
  {
    "country": "AX",
    "name": "Brändö",
    "lat": "60.41165",
    "lng": "21.04534"
  },
  {
    "country": "AX",
    "name": "Mariehamn",
    "lat": "60.09726",
    "lng": "19.93481"
  },
  {
    "country": "AX",
    "name": "Jomala",
    "lat": "60.14902",
    "lng": "19.951"
  },
  {
    "country": "AX",
    "name": "Hammarland",
    "lat": "60.21667",
    "lng": "19.75"
  },
  {
    "country": "AX",
    "name": "Geta",
    "lat": "60.37453",
    "lng": "19.84455"
  },
  {
    "country": "AX",
    "name": "Finström",
    "lat": "60.26667",
    "lng": "19.93333"
  },
  {
    "country": "AX",
    "name": "Eckerö",
    "lat": "60.21249",
    "lng": "19.61442"
  },
  {
    "country": "AZ",
    "name": "Sharur City",
    "lat": "39.55298",
    "lng": "44.97993"
  },
  {
    "country": "AZ",
    "name": "Geytepe",
    "lat": "39.11998",
    "lng": "48.59383"
  },
  {
    "country": "AZ",
    "name": "Zangilan",
    "lat": "39.08371",
    "lng": "46.65988"
  },
  {
    "country": "AZ",
    "name": "Yaycı",
    "lat": "38.94052",
    "lng": "45.73244"
  },
  {
    "country": "AZ",
    "name": "Yardımlı",
    "lat": "38.90771",
    "lng": "48.24052"
  },
  {
    "country": "AZ",
    "name": "Novyy Karanlug",
    "lat": "39.79496",
    "lng": "47.1117"
  },
  {
    "country": "AZ",
    "name": "Xankandi",
    "lat": "39.8177",
    "lng": "46.7528"
  },
  {
    "country": "AZ",
    "name": "Əhmədbəyli",
    "lat": "39.88074",
    "lng": "48.39158"
  },
  {
    "country": "AZ",
    "name": "Şuşa",
    "lat": "39.76006",
    "lng": "46.74989"
  },
  {
    "country": "AZ",
    "name": "Salyan",
    "lat": "39.59621",
    "lng": "48.98479"
  },
  {
    "country": "AZ",
    "name": "Şahbuz",
    "lat": "39.40722",
    "lng": "45.57389"
  },
  {
    "country": "AZ",
    "name": "Sedarak",
    "lat": "39.71427",
    "lng": "44.88455"
  },
  {
    "country": "AZ",
    "name": "Sumbatan-diza",
    "lat": "38.94804",
    "lng": "45.82572"
  },
  {
    "country": "AZ",
    "name": "Saatlı",
    "lat": "39.93214",
    "lng": "48.36892"
  },
  {
    "country": "AZ",
    "name": "Qubadlı",
    "lat": "39.34441",
    "lng": "46.58183"
  },
  {
    "country": "AZ",
    "name": "Qaraçala",
    "lat": "39.81614",
    "lng": "48.93792"
  },
  {
    "country": "AZ",
    "name": "Orjonikidze",
    "lat": "39.63571",
    "lng": "47.71199"
  },
  {
    "country": "AZ",
    "name": "Ordubad",
    "lat": "38.90961",
    "lng": "46.02274"
  },
  {
    "country": "AZ",
    "name": "Neftçala",
    "lat": "39.3768",
    "lng": "49.247"
  },
  {
    "country": "AZ",
    "name": "Nakhchivan",
    "lat": "39.20889",
    "lng": "45.41222"
  },
  {
    "country": "AZ",
    "name": "Mincivan",
    "lat": "39.03023",
    "lng": "46.72329"
  },
  {
    "country": "AZ",
    "name": "Masally",
    "lat": "39.03532",
    "lng": "48.6654"
  },
  {
    "country": "AZ",
    "name": "Lerik",
    "lat": "38.77388",
    "lng": "48.41497"
  },
  {
    "country": "AZ",
    "name": "Lankaran",
    "lat": "38.75428",
    "lng": "48.85062"
  },
  {
    "country": "AZ",
    "name": "Laçın",
    "lat": "39.59881",
    "lng": "46.55045"
  },
  {
    "country": "AZ",
    "name": "Qıvraq",
    "lat": "39.39939",
    "lng": "45.11513"
  },
  {
    "country": "AZ",
    "name": "Qırmızı Bazar",
    "lat": "39.67669",
    "lng": "46.95123"
  },
  {
    "country": "AZ",
    "name": "Kizhaba",
    "lat": "38.53461",
    "lng": "48.80546"
  },
  {
    "country": "AZ",
    "name": "Xocalı",
    "lat": "39.91297",
    "lng": "46.79028"
  },
  {
    "country": "AZ",
    "name": "Xıllı",
    "lat": "39.43012",
    "lng": "49.10166"
  },
  {
    "country": "AZ",
    "name": "Qalaqayın",
    "lat": "39.98365",
    "lng": "48.4836"
  },
  {
    "country": "AZ",
    "name": "Imishli",
    "lat": "39.87095",
    "lng": "48.05995"
  },
  {
    "country": "AZ",
    "name": "Horadiz",
    "lat": "39.45015",
    "lng": "47.33496"
  },
  {
    "country": "AZ",
    "name": "Haftoni",
    "lat": "38.76325",
    "lng": "48.76223"
  },
  {
    "country": "AZ",
    "name": "Hadrut",
    "lat": "39.52003",
    "lng": "47.0319"
  },
  {
    "country": "AZ",
    "name": "Fizuli",
    "lat": "39.60094",
    "lng": "47.14529"
  },
  {
    "country": "AZ",
    "name": "Jebrail",
    "lat": "39.39917",
    "lng": "47.02835"
  },
  {
    "country": "AZ",
    "name": "Dünyamalılar",
    "lat": "39.77278",
    "lng": "47.75889"
  },
  {
    "country": "AZ",
    "name": "Deste",
    "lat": "38.88375",
    "lng": "45.90963"
  },
  {
    "country": "AZ",
    "name": "Culfa",
    "lat": "38.95397",
    "lng": "45.62961"
  },
  {
    "country": "AZ",
    "name": "Jalilabad",
    "lat": "39.20963",
    "lng": "48.49186"
  },
  {
    "country": "AZ",
    "name": "Cahri",
    "lat": "39.34837",
    "lng": "45.41557"
  },
  {
    "country": "AZ",
    "name": "Boradigah",
    "lat": "38.93013",
    "lng": "48.7092"
  },
  {
    "country": "AZ",
    "name": "Pushkino",
    "lat": "39.45833",
    "lng": "48.545"
  },
  {
    "country": "AZ",
    "name": "Beylagan",
    "lat": "39.77556",
    "lng": "47.61861"
  },
  {
    "country": "AZ",
    "name": "Severo-Vostotchnyi Bank",
    "lat": "39.41117",
    "lng": "49.24792"
  },
  {
    "country": "AZ",
    "name": "Tazakend",
    "lat": "39.15459",
    "lng": "45.44282"
  },
  {
    "country": "AZ",
    "name": "Astara",
    "lat": "38.45598",
    "lng": "48.87498"
  },
  {
    "country": "AZ",
    "name": "Askyaran",
    "lat": "39.9391",
    "lng": "46.83161"
  },
  {
    "country": "AZ",
    "name": "Şirvan",
    "lat": "39.93778",
    "lng": "48.929"
  },
  {
    "country": "AZ",
    "name": "Ağdam",
    "lat": "39.99096",
    "lng": "46.92736"
  },
  {
    "country": "AZ",
    "name": "Sovetabad",
    "lat": "39.33667",
    "lng": "49.21414"
  },
  {
    "country": "AZ",
    "name": "Avşar",
    "lat": "39.97389",
    "lng": "47.42389"
  },
  {
    "country": "AZ",
    "name": "Birinci Aşıqlı",
    "lat": "39.81917",
    "lng": "47.67944"
  },
  {
    "country": "AZ",
    "name": "Yuxarı Aran",
    "lat": "39.73361",
    "lng": "47.655"
  },
  {
    "country": "AZ",
    "name": "Çalxanqala",
    "lat": "39.44167",
    "lng": "45.28333"
  },
  {
    "country": "AZ",
    "name": "Oğlanqala",
    "lat": "39.58694",
    "lng": "45.04611"
  },
  {
    "country": "AZ",
    "name": "Zyrya",
    "lat": "40.36613",
    "lng": "50.29198"
  },
  {
    "country": "AZ",
    "name": "Zardob",
    "lat": "40.2184",
    "lng": "47.71214"
  },
  {
    "country": "AZ",
    "name": "Zaqatala",
    "lat": "41.6316",
    "lng": "46.64479"
  },
  {
    "country": "AZ",
    "name": "Zabrat",
    "lat": "40.47746",
    "lng": "49.94174"
  },
  {
    "country": "AZ",
    "name": "Yevlakh",
    "lat": "40.61832",
    "lng": "47.15014"
  },
  {
    "country": "AZ",
    "name": "Yanıqlı",
    "lat": "40.8432",
    "lng": "45.6803"
  },
  {
    "country": "AZ",
    "name": "Xudat",
    "lat": "41.63052",
    "lng": "48.68161"
  },
  {
    "country": "AZ",
    "name": "Göygöl",
    "lat": "40.58584",
    "lng": "46.3189"
  },
  {
    "country": "AZ",
    "name": "Xaçmaz",
    "lat": "41.46426",
    "lng": "48.80565"
  },
  {
    "country": "AZ",
    "name": "Verkhniy Dashkesan",
    "lat": "40.49357",
    "lng": "46.07175"
  },
  {
    "country": "AZ",
    "name": "Vank",
    "lat": "40.05275",
    "lng": "46.54419"
  },
  {
    "country": "AZ",
    "name": "Ujar",
    "lat": "40.51902",
    "lng": "47.65423"
  },
  {
    "country": "AZ",
    "name": "Türkan",
    "lat": "40.3646",
    "lng": "50.22075"
  },
  {
    "country": "AZ",
    "name": "Tovuz",
    "lat": "40.99249",
    "lng": "45.62838"
  },
  {
    "country": "AZ",
    "name": "Terter",
    "lat": "40.34201",
    "lng": "46.93161"
  },
  {
    "country": "AZ",
    "name": "Sumqayıt",
    "lat": "40.58972",
    "lng": "49.66861"
  },
  {
    "country": "AZ",
    "name": "Kyzyl-Burun",
    "lat": "41.07811",
    "lng": "49.11564"
  },
  {
    "country": "AZ",
    "name": "Şuraabad",
    "lat": "40.8199",
    "lng": "49.46774"
  },
  {
    "country": "AZ",
    "name": "Qaraçuxur",
    "lat": "40.39667",
    "lng": "49.97361"
  },
  {
    "country": "AZ",
    "name": "Saray",
    "lat": "40.53299",
    "lng": "49.71681"
  },
  {
    "country": "AZ",
    "name": "Sanqaçal",
    "lat": "40.16991",
    "lng": "49.46394"
  },
  {
    "country": "AZ",
    "name": "Samur",
    "lat": "41.63671",
    "lng": "48.43028"
  },
  {
    "country": "AZ",
    "name": "Shamkhor",
    "lat": "40.82975",
    "lng": "46.0178"
  },
  {
    "country": "AZ",
    "name": "Shamakhi",
    "lat": "40.63141",
    "lng": "48.64137"
  },
  {
    "country": "AZ",
    "name": "Saloğlu",
    "lat": "41.27524",
    "lng": "45.35293"
  },
  {
    "country": "AZ",
    "name": "Sheki",
    "lat": "41.19194",
    "lng": "47.17056"
  },
  {
    "country": "AZ",
    "name": "Samux",
    "lat": "40.76485",
    "lng": "46.40868"
  },
  {
    "country": "AZ",
    "name": "Sabunçu",
    "lat": "40.4425",
    "lng": "49.94806"
  },
  {
    "country": "AZ",
    "name": "Sabirabad",
    "lat": "40.00869",
    "lng": "48.47701"
  },
  {
    "country": "AZ",
    "name": "Qusar",
    "lat": "41.4275",
    "lng": "48.4302"
  },
  {
    "country": "AZ",
    "name": "Quba",
    "lat": "41.36108",
    "lng": "48.51341"
  },
  {
    "country": "AZ",
    "name": "Qobustan",
    "lat": "40.08238",
    "lng": "49.41205"
  },
  {
    "country": "AZ",
    "name": "Hacıqabul",
    "lat": "40.03874",
    "lng": "48.94286"
  },
  {
    "country": "AZ",
    "name": "Qazax",
    "lat": "41.09246",
    "lng": "45.36561"
  },
  {
    "country": "AZ",
    "name": "Qax",
    "lat": "41.41826",
    "lng": "46.92043"
  },
  {
    "country": "AZ",
    "name": "Qasım İsmayılov",
    "lat": "40.81243",
    "lng": "46.25938"
  },
  {
    "country": "AZ",
    "name": "Qutqashen",
    "lat": "40.98247",
    "lng": "47.84909"
  },
  {
    "country": "AZ",
    "name": "Puta",
    "lat": "40.29667",
    "lng": "49.66028"
  },
  {
    "country": "AZ",
    "name": "Oğuz",
    "lat": "41.07128",
    "lng": "47.46528"
  },
  {
    "country": "AZ",
    "name": "Novosaratovka",
    "lat": "40.59811",
    "lng": "45.60079"
  },
  {
    "country": "AZ",
    "name": "Hacı Zeynalabdin",
    "lat": "40.62333",
    "lng": "49.55861"
  },
  {
    "country": "AZ",
    "name": "Nardaran",
    "lat": "40.55611",
    "lng": "50.00556"
  },
  {
    "country": "AZ",
    "name": "Naftalan",
    "lat": "40.50821",
    "lng": "46.8203"
  },
  {
    "country": "AZ",
    "name": "Mingelchaur",
    "lat": "40.76395",
    "lng": "47.05953"
  },
  {
    "country": "AZ",
    "name": "Maştağa",
    "lat": "40.52983",
    "lng": "50.00616"
  },
  {
    "country": "AZ",
    "name": "Mardakan",
    "lat": "40.49182",
    "lng": "50.14292"
  },
  {
    "country": "AZ",
    "name": "Qobustan",
    "lat": "40.5336",
    "lng": "48.92819"
  },
  {
    "country": "AZ",
    "name": "Mamrux",
    "lat": "41.54243",
    "lng": "46.767"
  },
  {
    "country": "AZ",
    "name": "Lokbatan",
    "lat": "40.3256",
    "lng": "49.73376"
  },
  {
    "country": "AZ",
    "name": "Qızılhacılı",
    "lat": "40.57723",
    "lng": "46.85776"
  },
  {
    "country": "AZ",
    "name": "Kyurdarmir",
    "lat": "40.34257",
    "lng": "48.15649"
  },
  {
    "country": "AZ",
    "name": "Qobu",
    "lat": "40.40472",
    "lng": "49.71306"
  },
  {
    "country": "AZ",
    "name": "Kilyazi",
    "lat": "40.87392",
    "lng": "49.34376"
  },
  {
    "country": "AZ",
    "name": "Xızı",
    "lat": "40.90847",
    "lng": "49.07481"
  },
  {
    "country": "AZ",
    "name": "Khirdalan",
    "lat": "40.44808",
    "lng": "49.75502"
  },
  {
    "country": "AZ",
    "name": "Khojasan",
    "lat": "40.41293",
    "lng": "49.76904"
  },
  {
    "country": "AZ",
    "name": "Korgöz",
    "lat": "40.30446",
    "lng": "49.6236"
  },
  {
    "country": "AZ",
    "name": "Qarayeri",
    "lat": "40.78674",
    "lng": "46.31365"
  },
  {
    "country": "AZ",
    "name": "Qaramanlı",
    "lat": "40.48135",
    "lng": "46.99339"
  },
  {
    "country": "AZ",
    "name": "Qaraxanlı",
    "lat": "41.04358",
    "lng": "45.65527"
  },
  {
    "country": "AZ",
    "name": "Qandax",
    "lat": "41.47546",
    "lng": "46.54128"
  },
  {
    "country": "AZ",
    "name": "Vurğun",
    "lat": "41.09524",
    "lng": "45.47111"
  },
  {
    "country": "AZ",
    "name": "Kerbakhiar",
    "lat": "40.10984",
    "lng": "46.04446"
  },
  {
    "country": "AZ",
    "name": "Qala",
    "lat": "40.44256",
    "lng": "50.16759"
  },
  {
    "country": "AZ",
    "name": "Qax İngiloy",
    "lat": "41.42412",
    "lng": "46.93859"
  },
  {
    "country": "AZ",
    "name": "Qaxbaş",
    "lat": "41.43254",
    "lng": "46.9646"
  },
  {
    "country": "AZ",
    "name": "İsmayıllı",
    "lat": "40.78485",
    "lng": "48.15141"
  },
  {
    "country": "AZ",
    "name": "Yeni Suraxanı",
    "lat": "40.43026",
    "lng": "50.03598"
  },
  {
    "country": "AZ",
    "name": "Gyuzdek",
    "lat": "40.37444",
    "lng": "49.68194"
  },
  {
    "country": "AZ",
    "name": "Göyçay",
    "lat": "40.65055",
    "lng": "47.74219"
  },
  {
    "country": "AZ",
    "name": "Hövsan",
    "lat": "40.37444",
    "lng": "50.08528"
  },
  {
    "country": "AZ",
    "name": "Goranboy",
    "lat": "40.61028",
    "lng": "46.78972"
  },
  {
    "country": "AZ",
    "name": "Gilgilçay",
    "lat": "41.13932",
    "lng": "49.09038"
  },
  {
    "country": "AZ",
    "name": "Ganja",
    "lat": "40.68278",
    "lng": "46.36056"
  },
  {
    "country": "AZ",
    "name": "Kyadabek",
    "lat": "40.57055",
    "lng": "45.81229"
  },
  {
    "country": "AZ",
    "name": "Faldarlı",
    "lat": "41.46868",
    "lng": "46.51579"
  },
  {
    "country": "AZ",
    "name": "Corat",
    "lat": "40.57176",
    "lng": "49.70509"
  },
  {
    "country": "AZ",
    "name": "Ceyranbatan",
    "lat": "40.54194",
    "lng": "49.66073"
  },
  {
    "country": "AZ",
    "name": "Dzagam",
    "lat": "40.9033",
    "lng": "45.88564"
  },
  {
    "country": "AZ",
    "name": "Dondar Quşçu",
    "lat": "40.9539",
    "lng": "45.61942"
  },
  {
    "country": "AZ",
    "name": "Digah",
    "lat": "40.49257",
    "lng": "49.87477"
  },
  {
    "country": "AZ",
    "name": "Divichibazar",
    "lat": "41.20117",
    "lng": "48.98712"
  },
  {
    "country": "AZ",
    "name": "Yukhary-Dashkesan",
    "lat": "40.52393",
    "lng": "46.08186"
  },
  {
    "country": "AZ",
    "name": "Dolyar",
    "lat": "40.86278",
    "lng": "46.03493"
  },
  {
    "country": "AZ",
    "name": "Çobansığnaq",
    "lat": "40.75244",
    "lng": "45.70645"
  },
  {
    "country": "AZ",
    "name": "Çinarlı",
    "lat": "41.46965",
    "lng": "46.91582"
  },
  {
    "country": "AZ",
    "name": "Çatax",
    "lat": "40.72622",
    "lng": "45.55919"
  },
  {
    "country": "AZ",
    "name": "Buzovna",
    "lat": "40.51903",
    "lng": "50.11438"
  },
  {
    "country": "AZ",
    "name": "Binagadi",
    "lat": "40.46602",
    "lng": "49.82783"
  },
  {
    "country": "AZ",
    "name": "Biny Selo",
    "lat": "40.45076",
    "lng": "50.08686"
  },
  {
    "country": "AZ",
    "name": "Bilajer",
    "lat": "40.56441",
    "lng": "50.04002"
  },
  {
    "country": "AZ",
    "name": "Basqal",
    "lat": "40.7552",
    "lng": "48.39104"
  },
  {
    "country": "AZ",
    "name": "Baş Göynük",
    "lat": "41.32582",
    "lng": "47.11357"
  },
  {
    "country": "AZ",
    "name": "Barda",
    "lat": "40.37577",
    "lng": "47.12619"
  },
  {
    "country": "AZ",
    "name": "Belokany",
    "lat": "41.72626",
    "lng": "46.40478"
  },
  {
    "country": "AZ",
    "name": "Balakhani",
    "lat": "40.46344",
    "lng": "49.91893"
  },
  {
    "country": "AZ",
    "name": "Bilajari",
    "lat": "40.4444",
    "lng": "49.80566"
  },
  {
    "country": "AZ",
    "name": "Baku",
    "lat": "40.37767",
    "lng": "49.89201"
  },
  {
    "country": "AZ",
    "name": "Arıqıran",
    "lat": "40.53971",
    "lng": "45.61414"
  },
  {
    "country": "AZ",
    "name": "Arıqdam",
    "lat": "40.59313",
    "lng": "45.799"
  },
  {
    "country": "AZ",
    "name": "Pirallahı",
    "lat": "40.47013",
    "lng": "50.32476"
  },
  {
    "country": "AZ",
    "name": "Amirdzhan",
    "lat": "40.42639",
    "lng": "49.98361"
  },
  {
    "country": "AZ",
    "name": "Altıağac",
    "lat": "40.85785",
    "lng": "48.9354"
  },
  {
    "country": "AZ",
    "name": "Aliabad",
    "lat": "41.4829",
    "lng": "46.63483"
  },
  {
    "country": "AZ",
    "name": "Aghsu",
    "lat": "40.57028",
    "lng": "48.40087"
  },
  {
    "country": "AZ",
    "name": "Aghstafa",
    "lat": "41.11889",
    "lng": "45.45389"
  },
  {
    "country": "AZ",
    "name": "Ağdaş",
    "lat": "40.64699",
    "lng": "47.4738"
  },
  {
    "country": "AZ",
    "name": "Martakert",
    "lat": "40.21127",
    "lng": "46.82135"
  },
  {
    "country": "AZ",
    "name": "Agdzhabedy",
    "lat": "40.05015",
    "lng": "47.45937"
  },
  {
    "country": "AZ",
    "name": "Böyük Qaramurad",
    "lat": "40.57626",
    "lng": "45.63727"
  },
  {
    "country": "AZ",
    "name": "Mughan",
    "lat": "40.09902",
    "lng": "48.81886"
  },
  {
    "country": "AZ",
    "name": "Qabaqçöl",
    "lat": "41.75259",
    "lng": "46.27052"
  },
  {
    "country": "AZ",
    "name": "Bakıxanov",
    "lat": "40.41894",
    "lng": "49.96693"
  },
  {
    "country": "AZ",
    "name": "Qırmızı Samux",
    "lat": "40.93972",
    "lng": "46.37889"
  },
  {
    "country": "AZ",
    "name": "Hacıhüseynli",
    "lat": "41.45639",
    "lng": "48.64889"
  },
  {
    "country": "AZ",
    "name": "Aran",
    "lat": "40.62528",
    "lng": "46.97556"
  },
  {
    "country": "AZ",
    "name": "Samuxlu",
    "lat": "40.50781",
    "lng": "47.16971"
  },
  {
    "country": "AZ",
    "name": "Ramana",
    "lat": "40.44222",
    "lng": "49.98056"
  },
  {
    "country": "AZ",
    "name": "Badamdar",
    "lat": "40.34024",
    "lng": "49.8045"
  },
  {
    "country": "AZ",
    "name": "Heydarabad",
    "lat": "39.72286",
    "lng": "44.84846"
  },
  {
    "country": "BA",
    "name": "Zvornik",
    "lat": "44.38605",
    "lng": "19.10247"
  },
  {
    "country": "BA",
    "name": "Živinice",
    "lat": "44.54765",
    "lng": "17.37357"
  },
  {
    "country": "BA",
    "name": "Živinice",
    "lat": "44.44929",
    "lng": "18.64978"
  },
  {
    "country": "BA",
    "name": "Žepče",
    "lat": "44.42667",
    "lng": "18.03778"
  },
  {
    "country": "BA",
    "name": "Zenica",
    "lat": "44.20169",
    "lng": "17.90397"
  },
  {
    "country": "BA",
    "name": "Željezno Polje",
    "lat": "44.39875",
    "lng": "17.94103"
  },
  {
    "country": "BA",
    "name": "Zborište",
    "lat": "45.14593",
    "lng": "16.01728"
  },
  {
    "country": "BA",
    "name": "Zavidovići",
    "lat": "44.44583",
    "lng": "18.14972"
  },
  {
    "country": "BA",
    "name": "Zabrišće",
    "lat": "43.79224",
    "lng": "16.94224"
  },
  {
    "country": "BA",
    "name": "Vukovije Donje",
    "lat": "44.46209",
    "lng": "18.74941"
  },
  {
    "country": "BA",
    "name": "Vrnograč",
    "lat": "45.16369",
    "lng": "15.95444"
  },
  {
    "country": "BA",
    "name": "Vozuća",
    "lat": "44.35878",
    "lng": "18.35397"
  },
  {
    "country": "BA",
    "name": "Voljevac",
    "lat": "43.87873",
    "lng": "17.65861"
  },
  {
    "country": "BA",
    "name": "Vogošća",
    "lat": "43.90225",
    "lng": "18.34438"
  },
  {
    "country": "BA",
    "name": "Vlasenica",
    "lat": "44.18183",
    "lng": "18.94096"
  },
  {
    "country": "BA",
    "name": "Vitina",
    "lat": "43.2375",
    "lng": "17.48389"
  },
  {
    "country": "BA",
    "name": "Vitez",
    "lat": "44.15424",
    "lng": "17.79009"
  },
  {
    "country": "BA",
    "name": "Visoko",
    "lat": "43.98889",
    "lng": "18.17806"
  },
  {
    "country": "BA",
    "name": "Višegrad",
    "lat": "43.7826",
    "lng": "19.29256"
  },
  {
    "country": "BA",
    "name": "Vidoši",
    "lat": "43.77139",
    "lng": "17.02833"
  },
  {
    "country": "BA",
    "name": "Velika Obarska",
    "lat": "44.80461",
    "lng": "19.16183"
  },
  {
    "country": "BA",
    "name": "Velika Kladuša",
    "lat": "45.18497",
    "lng": "15.80579"
  },
  {
    "country": "BA",
    "name": "Velagići",
    "lat": "44.55618",
    "lng": "16.73349"
  },
  {
    "country": "BA",
    "name": "Varoška Rijeka",
    "lat": "45.08936",
    "lng": "16.01906"
  },
  {
    "country": "BA",
    "name": "Vareš",
    "lat": "44.16444",
    "lng": "18.32833"
  },
  {
    "country": "BA",
    "name": "Ustikolina",
    "lat": "43.58338",
    "lng": "18.79106"
  },
  {
    "country": "BA",
    "name": "Ugljevik",
    "lat": "44.67771",
    "lng": "19.03384"
  },
  {
    "country": "BA",
    "name": "Tuzla",
    "lat": "44.53842",
    "lng": "18.66709"
  },
  {
    "country": "BA",
    "name": "Turbe",
    "lat": "44.24352",
    "lng": "17.57499"
  },
  {
    "country": "BA",
    "name": "Tržačka Raštela",
    "lat": "44.97597",
    "lng": "15.78489"
  },
  {
    "country": "BA",
    "name": "Trnovo",
    "lat": "43.6658",
    "lng": "18.44593"
  },
  {
    "country": "BA",
    "name": "Trn",
    "lat": "44.85829",
    "lng": "17.23583"
  },
  {
    "country": "BA",
    "name": "Trebinje",
    "lat": "42.71197",
    "lng": "18.34362"
  },
  {
    "country": "BA",
    "name": "Travnik",
    "lat": "44.22637",
    "lng": "17.66583"
  },
  {
    "country": "BA",
    "name": "Tojšići",
    "lat": "44.50133",
    "lng": "18.78523"
  },
  {
    "country": "BA",
    "name": "Teslić",
    "lat": "44.60639",
    "lng": "17.85972"
  },
  {
    "country": "BA",
    "name": "Tešanj",
    "lat": "44.61191",
    "lng": "17.98552"
  },
  {
    "country": "BA",
    "name": "Tasovčići",
    "lat": "43.11333",
    "lng": "17.72"
  },
  {
    "country": "BA",
    "name": "Svodna",
    "lat": "45.0377",
    "lng": "16.54019"
  },
  {
    "country": "BA",
    "name": "Šumatac",
    "lat": "45.09743",
    "lng": "15.85818"
  },
  {
    "country": "BA",
    "name": "Suho Polje",
    "lat": "44.69104",
    "lng": "19.10994"
  },
  {
    "country": "BA",
    "name": "Šturlić",
    "lat": "45.06389",
    "lng": "15.77806"
  },
  {
    "country": "BA",
    "name": "Stupari",
    "lat": "44.31382",
    "lng": "18.68416"
  },
  {
    "country": "BA",
    "name": "Stolac",
    "lat": "43.084",
    "lng": "17.95995"
  },
  {
    "country": "BA",
    "name": "Stjepan-Polje",
    "lat": "44.71634",
    "lng": "18.25783"
  },
  {
    "country": "BA",
    "name": "Stijena",
    "lat": "44.9363",
    "lng": "16.02224"
  },
  {
    "country": "BA",
    "name": "Srebrenik",
    "lat": "44.70819",
    "lng": "18.48834"
  },
  {
    "country": "BA",
    "name": "Srebrenica",
    "lat": "44.10748",
    "lng": "19.29669"
  },
  {
    "country": "BA",
    "name": "Srbac",
    "lat": "45.0973",
    "lng": "17.52331"
  },
  {
    "country": "BA",
    "name": "Solina",
    "lat": "44.56226",
    "lng": "18.69322"
  },
  {
    "country": "BA",
    "name": "Sokolac",
    "lat": "43.93817",
    "lng": "18.80079"
  },
  {
    "country": "BA",
    "name": "Sladna",
    "lat": "44.72897",
    "lng": "18.42575"
  },
  {
    "country": "BA",
    "name": "Kneževo",
    "lat": "44.49071",
    "lng": "17.38161"
  },
  {
    "country": "BA",
    "name": "Šipovo",
    "lat": "44.28237",
    "lng": "17.08597"
  },
  {
    "country": "BA",
    "name": "Šerići",
    "lat": "44.46674",
    "lng": "18.5637"
  },
  {
    "country": "BA",
    "name": "Šekovići",
    "lat": "44.29896",
    "lng": "18.85532"
  },
  {
    "country": "BA",
    "name": "Sarajevo",
    "lat": "43.84864",
    "lng": "18.35644"
  },
  {
    "country": "BA",
    "name": "Sapna",
    "lat": "44.5038",
    "lng": "18.99818"
  },
  {
    "country": "BA",
    "name": "Sanski Most",
    "lat": "44.7667",
    "lng": "16.667"
  },
  {
    "country": "BA",
    "name": "Sanica",
    "lat": "44.61354",
    "lng": "16.64062"
  },
  {
    "country": "BA",
    "name": "Rumboci",
    "lat": "43.83154",
    "lng": "17.50273"
  },
  {
    "country": "BA",
    "name": "Rudo",
    "lat": "43.61781",
    "lng": "19.36719"
  },
  {
    "country": "BA",
    "name": "Rogatica",
    "lat": "43.79894",
    "lng": "19.00363"
  },
  {
    "country": "BA",
    "name": "Rodoč",
    "lat": "43.31453",
    "lng": "17.8029"
  },
  {
    "country": "BA",
    "name": "Ravno",
    "lat": "42.88741",
    "lng": "17.96555"
  },
  {
    "country": "BA",
    "name": "Radišići",
    "lat": "43.22302",
    "lng": "17.54056"
  },
  {
    "country": "BA",
    "name": "Puračić",
    "lat": "44.54562",
    "lng": "18.47865"
  },
  {
    "country": "BA",
    "name": "Novi Travnik",
    "lat": "44.17133",
    "lng": "17.65816"
  },
  {
    "country": "BA",
    "name": "Prozor",
    "lat": "43.82222",
    "lng": "17.60917"
  },
  {
    "country": "BA",
    "name": "Prnjavor",
    "lat": "44.87021",
    "lng": "17.66256"
  },
  {
    "country": "BA",
    "name": "Prijedor",
    "lat": "44.97991",
    "lng": "16.71401"
  },
  {
    "country": "BA",
    "name": "Priboj",
    "lat": "44.60233",
    "lng": "18.93165"
  },
  {
    "country": "BA",
    "name": "Pribinić",
    "lat": "44.6101",
    "lng": "17.68981"
  },
  {
    "country": "BA",
    "name": "Prača",
    "lat": "43.76367",
    "lng": "18.76512"
  },
  {
    "country": "BA",
    "name": "Potoci",
    "lat": "44.39261",
    "lng": "16.62001"
  },
  {
    "country": "BA",
    "name": "Potoci",
    "lat": "43.40953",
    "lng": "17.87855"
  },
  {
    "country": "BA",
    "name": "Posušje",
    "lat": "43.47281",
    "lng": "17.32621"
  },
  {
    "country": "BA",
    "name": "Popovi",
    "lat": "44.76547",
    "lng": "19.28667"
  },
  {
    "country": "BA",
    "name": "Polje-Bijela",
    "lat": "43.63299",
    "lng": "17.97216"
  },
  {
    "country": "BA",
    "name": "Podzvizd",
    "lat": "45.17417",
    "lng": "15.87361"
  },
  {
    "country": "BA",
    "name": "Podhum",
    "lat": "43.72295",
    "lng": "16.99887"
  },
  {
    "country": "BA",
    "name": "Petkovci",
    "lat": "44.46849",
    "lng": "19.07466"
  },
  {
    "country": "BA",
    "name": "Pelagićevo",
    "lat": "44.90105",
    "lng": "18.59185"
  },
  {
    "country": "BA",
    "name": "Pećigrad",
    "lat": "45.05444",
    "lng": "15.89694"
  },
  {
    "country": "BA",
    "name": "Peći",
    "lat": "44.63139",
    "lng": "16.7825"
  },
  {
    "country": "BA",
    "name": "Pazarić",
    "lat": "43.78882",
    "lng": "18.16049"
  },
  {
    "country": "BA",
    "name": "Pale",
    "lat": "43.81664",
    "lng": "18.56949"
  },
  {
    "country": "BA",
    "name": "Otoka",
    "lat": "44.96",
    "lng": "16.17917"
  },
  {
    "country": "BA",
    "name": "Ostrožac",
    "lat": "44.90866",
    "lng": "15.94045"
  },
  {
    "country": "BA",
    "name": "Oštra Luka",
    "lat": "44.99724",
    "lng": "18.58464"
  },
  {
    "country": "BA",
    "name": "Oštra Luka",
    "lat": "44.86027",
    "lng": "16.66069"
  },
  {
    "country": "BA",
    "name": "Osmaci",
    "lat": "44.40159",
    "lng": "18.91638"
  },
  {
    "country": "BA",
    "name": "Orguz",
    "lat": "43.77414",
    "lng": "16.86329"
  },
  {
    "country": "BA",
    "name": "Orašje",
    "lat": "45.03366",
    "lng": "18.69334"
  },
  {
    "country": "BA",
    "name": "Orašac",
    "lat": "44.63039",
    "lng": "16.07443"
  },
  {
    "country": "BA",
    "name": "Orahovica Donja",
    "lat": "44.65345",
    "lng": "18.36951"
  },
  {
    "country": "BA",
    "name": "Omarska",
    "lat": "44.8917",
    "lng": "16.89814"
  },
  {
    "country": "BA",
    "name": "Omanjska",
    "lat": "44.69831",
    "lng": "17.95757"
  },
  {
    "country": "BA",
    "name": "Olovo",
    "lat": "44.1277",
    "lng": "18.58065"
  },
  {
    "country": "BA",
    "name": "Odžak",
    "lat": "45.02461",
    "lng": "18.32107"
  },
  {
    "country": "BA",
    "name": "Obudovac",
    "lat": "44.95215",
    "lng": "18.59869"
  },
  {
    "country": "BA",
    "name": "Novo Selo",
    "lat": "44.08007",
    "lng": "17.15556"
  },
  {
    "country": "BA",
    "name": "Novi Šeher",
    "lat": "44.51031",
    "lng": "18.02624"
  },
  {
    "country": "BA",
    "name": "Nevesinje",
    "lat": "43.25861",
    "lng": "18.11333"
  },
  {
    "country": "BA",
    "name": "Neum",
    "lat": "42.92333",
    "lng": "17.61556"
  },
  {
    "country": "BA",
    "name": "Mrkonjić Grad",
    "lat": "44.41729",
    "lng": "17.08288"
  },
  {
    "country": "BA",
    "name": "Mramor",
    "lat": "44.59234",
    "lng": "18.56458"
  },
  {
    "country": "BA",
    "name": "Mostar",
    "lat": "43.34333",
    "lng": "17.80806"
  },
  {
    "country": "BA",
    "name": "Mionica",
    "lat": "44.86646",
    "lng": "18.46603"
  },
  {
    "country": "BA",
    "name": "Milići",
    "lat": "44.17016",
    "lng": "19.09195"
  },
  {
    "country": "BA",
    "name": "Međugorje",
    "lat": "43.19576",
    "lng": "17.67554"
  },
  {
    "country": "BA",
    "name": "Matuzići",
    "lat": "44.68776",
    "lng": "18.04885"
  },
  {
    "country": "BA",
    "name": "Maslovare",
    "lat": "44.56594",
    "lng": "17.53216"
  },
  {
    "country": "BA",
    "name": "Marićka",
    "lat": "44.86801",
    "lng": "16.8551"
  },
  {
    "country": "BA",
    "name": "Mala Kladuša",
    "lat": "45.13443",
    "lng": "15.85217"
  },
  {
    "country": "BA",
    "name": "Mahala",
    "lat": "44.01194",
    "lng": "18.25528"
  },
  {
    "country": "BA",
    "name": "Maglajani",
    "lat": "44.94975",
    "lng": "17.35014"
  },
  {
    "country": "BA",
    "name": "Maglaj",
    "lat": "44.54771",
    "lng": "18.10003"
  },
  {
    "country": "BA",
    "name": "Lukavica",
    "lat": "44.76452",
    "lng": "18.16887"
  },
  {
    "country": "BA",
    "name": "Lukavica",
    "lat": "43.82693",
    "lng": "18.38318"
  },
  {
    "country": "BA",
    "name": "Lukavac",
    "lat": "44.54245",
    "lng": "18.52618"
  },
  {
    "country": "BA",
    "name": "Lopare",
    "lat": "44.63498",
    "lng": "18.8434"
  },
  {
    "country": "BA",
    "name": "Lokvine",
    "lat": "44.20466",
    "lng": "17.85665"
  },
  {
    "country": "BA",
    "name": "Ljubuški",
    "lat": "43.19694",
    "lng": "17.545"
  },
  {
    "country": "BA",
    "name": "Ljubinje",
    "lat": "42.9512",
    "lng": "18.08702"
  },
  {
    "country": "BA",
    "name": "Livno",
    "lat": "43.82695",
    "lng": "17.00746"
  },
  {
    "country": "BA",
    "name": "Široki Brijeg",
    "lat": "43.3829",
    "lng": "17.59416"
  },
  {
    "country": "BA",
    "name": "Laktaši",
    "lat": "44.90857",
    "lng": "17.30135"
  },
  {
    "country": "BA",
    "name": "Kupres",
    "lat": "43.99273",
    "lng": "17.27639"
  },
  {
    "country": "BA",
    "name": "Krupa na Vrbasu",
    "lat": "44.61875",
    "lng": "17.14351"
  },
  {
    "country": "BA",
    "name": "Teočak",
    "lat": "44.60321",
    "lng": "18.97967"
  },
  {
    "country": "BA",
    "name": "Kreševo",
    "lat": "43.86556",
    "lng": "18.04333"
  },
  {
    "country": "BA",
    "name": "Kotor Varoš",
    "lat": "44.61831",
    "lng": "17.37204"
  },
  {
    "country": "BA",
    "name": "Kopači",
    "lat": "43.67833",
    "lng": "19.02845"
  },
  {
    "country": "BA",
    "name": "Kočerin",
    "lat": "43.39005",
    "lng": "17.48552"
  },
  {
    "country": "BA",
    "name": "Kobilja Glava",
    "lat": "43.88188",
    "lng": "18.38864"
  },
  {
    "country": "BA",
    "name": "Klokotnica",
    "lat": "44.7329",
    "lng": "18.18884"
  },
  {
    "country": "BA",
    "name": "Ključ",
    "lat": "44.53251",
    "lng": "16.77682"
  },
  {
    "country": "BA",
    "name": "Kladanj",
    "lat": "44.22669",
    "lng": "18.69274"
  },
  {
    "country": "BA",
    "name": "Kiseljak",
    "lat": "44.48904",
    "lng": "18.56982"
  },
  {
    "country": "BA",
    "name": "Kiseljak",
    "lat": "43.94295",
    "lng": "18.08132"
  },
  {
    "country": "BA",
    "name": "Karadaglije",
    "lat": "44.57065",
    "lng": "18.01775"
  },
  {
    "country": "BA",
    "name": "Kalinovik",
    "lat": "43.50464",
    "lng": "18.44649"
  },
  {
    "country": "BA",
    "name": "Kalesija",
    "lat": "44.43765",
    "lng": "18.90713"
  },
  {
    "country": "BA",
    "name": "Kalenderovci Donji",
    "lat": "44.94673",
    "lng": "17.83785"
  },
  {
    "country": "BA",
    "name": "Kakanj",
    "lat": "44.13311",
    "lng": "18.12292"
  },
  {
    "country": "BA",
    "name": "Jezerski",
    "lat": "44.98172",
    "lng": "16.09447"
  },
  {
    "country": "BA",
    "name": "Jezero",
    "lat": "44.34954",
    "lng": "17.1688"
  },
  {
    "country": "BA",
    "name": "Janja",
    "lat": "44.66554",
    "lng": "19.24691"
  },
  {
    "country": "BA",
    "name": "Jajce",
    "lat": "44.34203",
    "lng": "17.27059"
  },
  {
    "country": "BA",
    "name": "Izačić",
    "lat": "44.87485",
    "lng": "15.78256"
  },
  {
    "country": "BA",
    "name": "Ilijaš",
    "lat": "43.95128",
    "lng": "18.27128"
  },
  {
    "country": "BA",
    "name": "Ilidža",
    "lat": "43.82939",
    "lng": "18.30003"
  },
  {
    "country": "BA",
    "name": "Hreša",
    "lat": "43.878",
    "lng": "18.49699"
  },
  {
    "country": "BA",
    "name": "Han Pijesak",
    "lat": "44.08161",
    "lng": "18.95258"
  },
  {
    "country": "BA",
    "name": "Hadžići",
    "lat": "43.82222",
    "lng": "18.20667"
  },
  {
    "country": "BA",
    "name": "Grude",
    "lat": "43.37208",
    "lng": "17.41449"
  },
  {
    "country": "BA",
    "name": "Gromiljak",
    "lat": "43.96668",
    "lng": "18.05504"
  },
  {
    "country": "BA",
    "name": "Gradačac",
    "lat": "44.87851",
    "lng": "18.42764"
  },
  {
    "country": "BA",
    "name": "Gračanica",
    "lat": "44.70307",
    "lng": "18.3101"
  },
  {
    "country": "BA",
    "name": "Gračanica",
    "lat": "43.73333",
    "lng": "18.28333"
  },
  {
    "country": "BA",
    "name": "Gostovići",
    "lat": "44.41124",
    "lng": "18.17029"
  },
  {
    "country": "BA",
    "name": "Gornji Vakuf",
    "lat": "43.93806",
    "lng": "17.58833"
  },
  {
    "country": "BA",
    "name": "Gornji Ribnik",
    "lat": "44.41752",
    "lng": "16.8169"
  },
  {
    "country": "BA",
    "name": "Gornje Živinice",
    "lat": "44.42921",
    "lng": "18.61667"
  },
  {
    "country": "BA",
    "name": "Gornje Moštre",
    "lat": "44.01911",
    "lng": "18.15477"
  },
  {
    "country": "BA",
    "name": "Gornja Tuzla",
    "lat": "44.55659",
    "lng": "18.76159"
  },
  {
    "country": "BA",
    "name": "Gornja Koprivna",
    "lat": "45.01091",
    "lng": "15.95487"
  },
  {
    "country": "BA",
    "name": "Gorica",
    "lat": "43.41833",
    "lng": "17.285"
  },
  {
    "country": "BA",
    "name": "Goražde",
    "lat": "43.66795",
    "lng": "18.97564"
  },
  {
    "country": "BA",
    "name": "Gnojnica",
    "lat": "44.62058",
    "lng": "18.44684"
  },
  {
    "country": "BA",
    "name": "Glamoč",
    "lat": "44.04583",
    "lng": "16.84861"
  },
  {
    "country": "BA",
    "name": "Gacko",
    "lat": "43.16722",
    "lng": "18.53528"
  },
  {
    "country": "BA",
    "name": "Fojnica",
    "lat": "43.95952",
    "lng": "17.90288"
  },
  {
    "country": "BA",
    "name": "Foča",
    "lat": "43.50646",
    "lng": "18.77854"
  },
  {
    "country": "BA",
    "name": "Tomislavgrad",
    "lat": "43.71849",
    "lng": "17.22515"
  },
  {
    "country": "BA",
    "name": "Dubravica",
    "lat": "44.44131",
    "lng": "18.11883"
  },
  {
    "country": "BA",
    "name": "Dubrave Gornje",
    "lat": "44.47229",
    "lng": "18.72685"
  },
  {
    "country": "BA",
    "name": "Dubrave Donje",
    "lat": "44.4806",
    "lng": "18.69709"
  },
  {
    "country": "BA",
    "name": "Drvar",
    "lat": "44.37389",
    "lng": "16.38083"
  },
  {
    "country": "BA",
    "name": "Drinovci",
    "lat": "43.35454",
    "lng": "17.32536"
  },
  {
    "country": "BA",
    "name": "Drinić",
    "lat": "44.50671",
    "lng": "16.46699"
  },
  {
    "country": "BA",
    "name": "Donji Žabar",
    "lat": "44.94317",
    "lng": "18.64673"
  },
  {
    "country": "BA",
    "name": "Donji Vakuf",
    "lat": "44.14361",
    "lng": "17.4"
  },
  {
    "country": "BA",
    "name": "Donji Dubovik",
    "lat": "44.89021",
    "lng": "16.3251"
  },
  {
    "country": "BA",
    "name": "Donja Međiđa",
    "lat": "44.80235",
    "lng": "18.40477"
  },
  {
    "country": "BA",
    "name": "Donja Mahala",
    "lat": "45.04327",
    "lng": "18.66996"
  },
  {
    "country": "BA",
    "name": "Donja Dubica",
    "lat": "45.07559",
    "lng": "18.41023"
  },
  {
    "country": "BA",
    "name": "Domaljevac",
    "lat": "45.0611",
    "lng": "18.58612"
  },
  {
    "country": "BA",
    "name": "Dobrljin",
    "lat": "45.15106",
    "lng": "16.47869"
  },
  {
    "country": "BA",
    "name": "Dobrinje",
    "lat": "44.05008",
    "lng": "18.11958"
  },
  {
    "country": "BA",
    "name": "Doboj",
    "lat": "44.73179",
    "lng": "18.08698"
  },
  {
    "country": "BA",
    "name": "Divičani",
    "lat": "44.36682",
    "lng": "17.32678"
  },
  {
    "country": "BA",
    "name": "Derventa",
    "lat": "44.97839",
    "lng": "17.90779"
  },
  {
    "country": "BA",
    "name": "Čitluk",
    "lat": "43.22861",
    "lng": "17.70083"
  },
  {
    "country": "BA",
    "name": "Cim",
    "lat": "43.35401",
    "lng": "17.78045"
  },
  {
    "country": "BA",
    "name": "Čelinac",
    "lat": "44.73998",
    "lng": "17.31881"
  },
  {
    "country": "BA",
    "name": "Čelić",
    "lat": "44.72524",
    "lng": "18.81474"
  },
  {
    "country": "BA",
    "name": "Čečava",
    "lat": "44.67961",
    "lng": "17.7578"
  },
  {
    "country": "BA",
    "name": "Cazin",
    "lat": "44.96694",
    "lng": "15.94306"
  },
  {
    "country": "BA",
    "name": "Čapljina",
    "lat": "43.12139",
    "lng": "17.68444"
  },
  {
    "country": "BA",
    "name": "Čajniče",
    "lat": "43.55712",
    "lng": "19.07186"
  },
  {
    "country": "BA",
    "name": "Bužim",
    "lat": "45.05361",
    "lng": "16.03254"
  },
  {
    "country": "BA",
    "name": "Busovača",
    "lat": "44.09769",
    "lng": "17.8783"
  },
  {
    "country": "BA",
    "name": "Bugojno",
    "lat": "44.05722",
    "lng": "17.45083"
  },
  {
    "country": "BA",
    "name": "Bronzani Majdan",
    "lat": "44.79237",
    "lng": "16.94039"
  },
  {
    "country": "BA",
    "name": "Brka",
    "lat": "44.82837",
    "lng": "18.7242"
  },
  {
    "country": "BA",
    "name": "Breza",
    "lat": "44.01862",
    "lng": "18.26063"
  },
  {
    "country": "BA",
    "name": "Brčko",
    "lat": "44.86995",
    "lng": "18.81012"
  },
  {
    "country": "BA",
    "name": "Bratunac",
    "lat": "44.18455",
    "lng": "19.33085"
  },
  {
    "country": "BA",
    "name": "Petrovo",
    "lat": "44.62804",
    "lng": "18.35323"
  },
  {
    "country": "BA",
    "name": "Bosansko Grahovo",
    "lat": "44.17944",
    "lng": "16.36389"
  },
  {
    "country": "BA",
    "name": "Šamac",
    "lat": "45.05987",
    "lng": "18.46756"
  },
  {
    "country": "BA",
    "name": "Bosanski Petrovac",
    "lat": "44.55537",
    "lng": "16.36897"
  },
  {
    "country": "BA",
    "name": "Novi Grad",
    "lat": "45.04643",
    "lng": "16.37782"
  },
  {
    "country": "BA",
    "name": "Brod",
    "lat": "45.13747",
    "lng": "17.98722"
  },
  {
    "country": "BA",
    "name": "Bosanska Krupa",
    "lat": "44.8825",
    "lng": "16.15139"
  },
  {
    "country": "BA",
    "name": "Kostajnica",
    "lat": "45.21956",
    "lng": "16.53929"
  },
  {
    "country": "BA",
    "name": "Gradiška",
    "lat": "45.14484",
    "lng": "17.25453"
  },
  {
    "country": "BA",
    "name": "Kozarska Dubica",
    "lat": "45.17667",
    "lng": "16.80944"
  },
  {
    "country": "BA",
    "name": "Blatnica",
    "lat": "44.48677",
    "lng": "17.82278"
  },
  {
    "country": "BA",
    "name": "Blagaj",
    "lat": "43.25892",
    "lng": "17.88815"
  },
  {
    "country": "BA",
    "name": "Bileća",
    "lat": "42.87645",
    "lng": "18.42967"
  },
  {
    "country": "BA",
    "name": "Bila",
    "lat": "43.78265",
    "lng": "16.92676"
  },
  {
    "country": "BA",
    "name": "Bijeljina",
    "lat": "44.75874",
    "lng": "19.21437"
  },
  {
    "country": "BA",
    "name": "Bihać",
    "lat": "44.81694",
    "lng": "15.87083"
  },
  {
    "country": "BA",
    "name": "Berkovići",
    "lat": "43.09472",
    "lng": "18.17028"
  },
  {
    "country": "BA",
    "name": "Banovići",
    "lat": "44.40596",
    "lng": "18.52648"
  },
  {
    "country": "BA",
    "name": "Banja Luka",
    "lat": "44.77842",
    "lng": "17.19386"
  },
  {
    "country": "BA",
    "name": "Balatun",
    "lat": "44.86332",
    "lng": "19.33931"
  },
  {
    "country": "BA",
    "name": "Koran",
    "lat": "43.81038",
    "lng": "18.56999"
  },
  {
    "country": "BA",
    "name": "Jelah",
    "lat": "44.654",
    "lng": "17.95897"
  },
  {
    "country": "BA",
    "name": "Stanari",
    "lat": "44.74475",
    "lng": "17.82714"
  },
  {
    "country": "BA",
    "name": "Dobratići",
    "lat": "44.37792",
    "lng": "17.41426"
  },
  {
    "country": "BA",
    "name": "Podbrdo",
    "lat": "44.44189",
    "lng": "17.01495"
  },
  {
    "country": "BA",
    "name": "Malešići",
    "lat": "44.73824",
    "lng": "18.27335"
  },
  {
    "country": "BA",
    "name": "Svojat",
    "lat": "44.39548",
    "lng": "18.73849"
  },
  {
    "country": "BA",
    "name": "Dvorovi",
    "lat": "44.80753",
    "lng": "19.25999"
  },
  {
    "country": "BA",
    "name": "Knežica",
    "lat": "45.10548",
    "lng": "16.67668"
  },
  {
    "country": "BA",
    "name": "Pjanići",
    "lat": "44.98568",
    "lng": "15.82304"
  },
  {
    "country": "BA",
    "name": "Polje",
    "lat": "43.88014",
    "lng": "18.07452"
  },
  {
    "country": "BA",
    "name": "Ilići",
    "lat": "43.34765",
    "lng": "17.76848"
  },
  {
    "country": "BA",
    "name": "Careva Ćuprija",
    "lat": "44.2663",
    "lng": "18.42961"
  },
  {
    "country": "BA",
    "name": "Starcevica",
    "lat": "44.75708",
    "lng": "17.21178"
  },
  {
    "country": "BA",
    "name": "Čelinac",
    "lat": "44.72453",
    "lng": "17.32431"
  },
  {
    "country": "BA",
    "name": "Jezero",
    "lat": "44.86456",
    "lng": "17.39427"
  },
  {
    "country": "BA",
    "name": "Hiseti",
    "lat": "44.76111",
    "lng": "17.17944"
  },
  {
    "country": "BA",
    "name": "Piskavica",
    "lat": "44.86717",
    "lng": "16.97464"
  },
  {
    "country": "BA",
    "name": "Lamovita",
    "lat": "44.92018",
    "lng": "16.89933"
  },
  {
    "country": "BA",
    "name": "Tešanjka",
    "lat": "44.67228",
    "lng": "18.01109"
  },
  {
    "country": "BA",
    "name": "Kovači",
    "lat": "44.44874",
    "lng": "18.20521"
  },
  {
    "country": "BA",
    "name": "Liješnica",
    "lat": "44.49497",
    "lng": "18.07644"
  },
  {
    "country": "BA",
    "name": "Ćoralići",
    "lat": "45.00694",
    "lng": "15.87194"
  },
  {
    "country": "BA",
    "name": "Crnići",
    "lat": "43.13156",
    "lng": "17.86452"
  },
  {
    "country": "BA",
    "name": "Barice",
    "lat": "44.54065",
    "lng": "18.48069"
  },
  {
    "country": "BA",
    "name": "Hotonj",
    "lat": "43.89341",
    "lng": "18.37751"
  },
  {
    "country": "BA",
    "name": "Skokovi",
    "lat": "45.03139",
    "lng": "15.91444"
  },
  {
    "country": "BA",
    "name": "Drežnica",
    "lat": "43.52891",
    "lng": "17.2812"
  },
  {
    "country": "BA",
    "name": "Kačuni",
    "lat": "44.06433",
    "lng": "17.93894"
  },
  {
    "country": "BA",
    "name": "Pajić Polje",
    "lat": "43.97583",
    "lng": "17.5275"
  },
  {
    "country": "BA",
    "name": "Gornja Breza",
    "lat": "44.03758",
    "lng": "18.24564"
  },
  {
    "country": "BA",
    "name": "Todorovo",
    "lat": "45.08833",
    "lng": "15.93083"
  },
  {
    "country": "BA",
    "name": "Konjic",
    "lat": "43.65126",
    "lng": "17.96082"
  },
  {
    "country": "BA",
    "name": "Jablanica",
    "lat": "43.66028",
    "lng": "17.76167"
  },
  {
    "country": "BA",
    "name": "Bijela",
    "lat": "43.60871",
    "lng": "17.95078"
  },
  {
    "country": "BA",
    "name": "Mejdan - Obilićevo",
    "lat": "44.76324",
    "lng": "17.19012"
  },
  {
    "country": "BB",
    "name": "Welchman Hall",
    "lat": "13.18676",
    "lng": "-59.57663"
  },
  {
    "country": "BB",
    "name": "Crane",
    "lat": "13.10487",
    "lng": "-59.44861"
  },
  {
    "country": "BB",
    "name": "Speightstown",
    "lat": "13.25072",
    "lng": "-59.64396"
  },
  {
    "country": "BB",
    "name": "Oistins",
    "lat": "13.07067",
    "lng": "-59.54637"
  },
  {
    "country": "BB",
    "name": "Holetown",
    "lat": "13.18672",
    "lng": "-59.63808"
  },
  {
    "country": "BB",
    "name": "Greenland",
    "lat": "13.25808",
    "lng": "-59.57763"
  },
  {
    "country": "BB",
    "name": "Four Cross Roads",
    "lat": "13.17018",
    "lng": "-59.52186"
  },
  {
    "country": "BB",
    "name": "Checker Hall",
    "lat": "13.28445",
    "lng": "-59.64223"
  },
  {
    "country": "BB",
    "name": "Bridgetown",
    "lat": "13.10732",
    "lng": "-59.62021"
  },
  {
    "country": "BB",
    "name": "Bathsheba",
    "lat": "13.21133",
    "lng": "-59.52596"
  },
  {
    "country": "BD",
    "name": "Thākurgaon",
    "lat": "26.03097",
    "lng": "88.46989"
  },
  {
    "country": "BD",
    "name": "Teknāf",
    "lat": "20.85829",
    "lng": "92.29773"
  },
  {
    "country": "BD",
    "name": "Tungi",
    "lat": "23.89154",
    "lng": "90.40232"
  },
  {
    "country": "BD",
    "name": "Sylhet",
    "lat": "24.89904",
    "lng": "91.87198"
  },
  {
    "country": "BD",
    "name": "Dohār",
    "lat": "23.59311",
    "lng": "90.14251"
  },
  {
    "country": "BD",
    "name": "Jamālpur",
    "lat": "24.91965",
    "lng": "89.94812"
  },
  {
    "country": "BD",
    "name": "Shibganj",
    "lat": "25.00146",
    "lng": "89.32266"
  },
  {
    "country": "BD",
    "name": "Shibganj",
    "lat": "24.68501",
    "lng": "88.15638"
  },
  {
    "country": "BD",
    "name": "Sātkhira",
    "lat": "22.70817",
    "lng": "89.07185"
  },
  {
    "country": "BD",
    "name": "Sirajganj",
    "lat": "24.45771",
    "lng": "89.70802"
  },
  {
    "country": "BD",
    "name": "Netrakona",
    "lat": "24.88352",
    "lng": "90.72898"
  },
  {
    "country": "BD",
    "name": "Narsingdi",
    "lat": "23.92298",
    "lng": "90.71768"
  },
  {
    "country": "BD",
    "name": "Sandwīp",
    "lat": "22.51409",
    "lng": "91.45491"
  },
  {
    "country": "BD",
    "name": "Shāhzādpur",
    "lat": "24.17687",
    "lng": "89.5988"
  },
  {
    "country": "BD",
    "name": "Rāmganj",
    "lat": "23.1006",
    "lng": "90.84989"
  },
  {
    "country": "BD",
    "name": "Rājshāhi",
    "lat": "24.374",
    "lng": "88.60114"
  },
  {
    "country": "BD",
    "name": "Purbadhala",
    "lat": "24.94077",
    "lng": "90.60025"
  },
  {
    "country": "BD",
    "name": "Pirojpur",
    "lat": "22.57965",
    "lng": "89.97521"
  },
  {
    "country": "BD",
    "name": "Panchagarh",
    "lat": "26.33338",
    "lng": "88.55777"
  },
  {
    "country": "BD",
    "name": "Patiya",
    "lat": "22.29543",
    "lng": "91.979"
  },
  {
    "country": "BD",
    "name": "Parbatipur",
    "lat": "25.66369",
    "lng": "88.93093"
  },
  {
    "country": "BD",
    "name": "Nārāyanganj",
    "lat": "23.61352",
    "lng": "90.50298"
  },
  {
    "country": "BD",
    "name": "Nālchiti",
    "lat": "22.63696",
    "lng": "90.27195"
  },
  {
    "country": "BD",
    "name": "Nāgarpur",
    "lat": "24.05783",
    "lng": "89.87696"
  },
  {
    "country": "BD",
    "name": "Nageswari",
    "lat": "25.96817",
    "lng": "89.69153"
  },
  {
    "country": "BD",
    "name": "Mymensingh",
    "lat": "24.75636",
    "lng": "90.40646"
  },
  {
    "country": "BD",
    "name": "Muktāgācha",
    "lat": "24.76484",
    "lng": "90.25698"
  },
  {
    "country": "BD",
    "name": "Mirzāpur",
    "lat": "24.10287",
    "lng": "90.09841"
  },
  {
    "country": "BD",
    "name": "Maulavi Bāzār",
    "lat": "24.48888",
    "lng": "91.77075"
  },
  {
    "country": "BD",
    "name": "Morrelgonj",
    "lat": "22.45566",
    "lng": "89.85584"
  },
  {
    "country": "BD",
    "name": "Mehendiganj",
    "lat": "22.82257",
    "lng": "90.52859"
  },
  {
    "country": "BD",
    "name": "Mathba",
    "lat": "22.28616",
    "lng": "89.95883"
  },
  {
    "country": "BD",
    "name": "Lalmonirhat",
    "lat": "25.91719",
    "lng": "89.44595"
  },
  {
    "country": "BD",
    "name": "Lākshām",
    "lat": "23.24018",
    "lng": "91.12143"
  },
  {
    "country": "BD",
    "name": "Comilla",
    "lat": "23.46186",
    "lng": "91.18503"
  },
  {
    "country": "BD",
    "name": "Rangpur",
    "lat": "25.74664",
    "lng": "89.25166"
  },
  {
    "country": "BD",
    "name": "Kushtia",
    "lat": "23.9028",
    "lng": "89.11943"
  },
  {
    "country": "BD",
    "name": "Kālīganj",
    "lat": "23.40964",
    "lng": "89.13801"
  },
  {
    "country": "BD",
    "name": "Jhingergācha",
    "lat": "23.11134",
    "lng": "89.09061"
  },
  {
    "country": "BD",
    "name": "Joypur Hāt",
    "lat": "25.10147",
    "lng": "89.02734"
  },
  {
    "country": "BD",
    "name": "Ishurdi",
    "lat": "24.12858",
    "lng": "89.06573"
  },
  {
    "country": "BD",
    "name": "Habiganj",
    "lat": "24.38044",
    "lng": "91.41299"
  },
  {
    "country": "BD",
    "name": "Gaurnadi",
    "lat": "22.97372",
    "lng": "90.22376"
  },
  {
    "country": "BD",
    "name": "Gafargaon",
    "lat": "24.432",
    "lng": "90.5585"
  },
  {
    "country": "BD",
    "name": "Feni",
    "lat": "23.0144",
    "lng": "91.3966"
  },
  {
    "country": "BD",
    "name": "Rāipur",
    "lat": "23.0391",
    "lng": "90.76808"
  },
  {
    "country": "BD",
    "name": "Sarankhola",
    "lat": "22.31006",
    "lng": "89.79113"
  },
  {
    "country": "BD",
    "name": "Dhaka",
    "lat": "23.7104",
    "lng": "90.40744"
  },
  {
    "country": "BD",
    "name": "Chilmāri",
    "lat": "25.55613",
    "lng": "89.67097"
  },
  {
    "country": "BD",
    "name": "Chhāgalnāiya",
    "lat": "23.02475",
    "lng": "91.51091"
  },
  {
    "country": "BD",
    "name": "Lālmohan",
    "lat": "22.33774",
    "lng": "90.73708"
  },
  {
    "country": "BD",
    "name": "Khagrachhari",
    "lat": "23.10787",
    "lng": "91.97007"
  },
  {
    "country": "BD",
    "name": "Chhātak",
    "lat": "25.03852",
    "lng": "91.66958"
  },
  {
    "country": "BD",
    "name": "Bhātpāra Abhaynagar",
    "lat": "23.01472",
    "lng": "89.43936"
  },
  {
    "country": "BD",
    "name": "Bherāmāra",
    "lat": "24.02452",
    "lng": "88.99234"
  },
  {
    "country": "BD",
    "name": "Bhairab Bāzār",
    "lat": "24.0524",
    "lng": "90.9764"
  },
  {
    "country": "BD",
    "name": "Bāndarban",
    "lat": "22.19534",
    "lng": "92.21946"
  },
  {
    "country": "BD",
    "name": "Kālia",
    "lat": "23.043",
    "lng": "89.63094"
  },
  {
    "country": "BD",
    "name": "Baniachang",
    "lat": "24.51863",
    "lng": "91.35787"
  },
  {
    "country": "BD",
    "name": "Bājitpur",
    "lat": "24.21623",
    "lng": "90.95002"
  },
  {
    "country": "BD",
    "name": "Bagerhat",
    "lat": "22.65657",
    "lng": "89.79123"
  },
  {
    "country": "BD",
    "name": "Badarganj",
    "lat": "25.67419",
    "lng": "89.05377"
  },
  {
    "country": "BD",
    "name": "Narail",
    "lat": "23.15509",
    "lng": "89.49515"
  },
  {
    "country": "BD",
    "name": "Tungipāra",
    "lat": "22.89983",
    "lng": "89.90326"
  },
  {
    "country": "BD",
    "name": "Sonārgaon",
    "lat": "23.65",
    "lng": "90.61667"
  },
  {
    "country": "BD",
    "name": "Sarishābāri",
    "lat": "24.75127",
    "lng": "89.83126"
  },
  {
    "country": "BD",
    "name": "Sakhipur",
    "lat": "24.31988",
    "lng": "90.16943"
  },
  {
    "country": "BD",
    "name": "Raojān",
    "lat": "22.53511",
    "lng": "91.91919"
  },
  {
    "country": "BD",
    "name": "Phultala",
    "lat": "22.71673",
    "lng": "89.51194"
  },
  {
    "country": "BD",
    "name": "Pālang",
    "lat": "23.21824",
    "lng": "90.35076"
  },
  {
    "country": "BD",
    "name": "Pār Naogaon",
    "lat": "24.80418",
    "lng": "88.94875"
  },
  {
    "country": "BD",
    "name": "Nabīnagar",
    "lat": "23.88791",
    "lng": "90.96792"
  },
  {
    "country": "BD",
    "name": "Ramnagar",
    "lat": "23.7772",
    "lng": "90.17604"
  },
  {
    "country": "BD",
    "name": "Lakshmīpur",
    "lat": "22.9443",
    "lng": "90.83005"
  },
  {
    "country": "BD",
    "name": "Kesabpur",
    "lat": "22.90725",
    "lng": "89.21954"
  },
  {
    "country": "BD",
    "name": "Jahedpur",
    "lat": "24.83333",
    "lng": "91.65"
  },
  {
    "country": "BD",
    "name": "Hājīganj",
    "lat": "23.25191",
    "lng": "90.85508"
  },
  {
    "country": "BD",
    "name": "Farīdpur",
    "lat": "23.60612",
    "lng": "89.84064"
  },
  {
    "country": "BD",
    "name": "Dinājpur",
    "lat": "25.62745",
    "lng": "88.63779"
  },
  {
    "country": "BD",
    "name": "Uttar Char Fasson",
    "lat": "22.22647",
    "lng": "90.71275"
  },
  {
    "country": "BD",
    "name": "Chattogram",
    "lat": "22.3384",
    "lng": "91.83168"
  },
  {
    "country": "BD",
    "name": "Char Bhadrāsan",
    "lat": "23.30916",
    "lng": "90.22698"
  },
  {
    "country": "BD",
    "name": "Bera",
    "lat": "24.07821",
    "lng": "89.63262"
  },
  {
    "country": "BD",
    "name": "Burhānuddin",
    "lat": "22.49518",
    "lng": "90.72391"
  },
  {
    "country": "BD",
    "name": "Sātkania",
    "lat": "22.07639",
    "lng": "92.04955"
  },
  {
    "country": "BD",
    "name": "Cox’s Bāzār",
    "lat": "21.43973",
    "lng": "92.00955"
  },
  {
    "country": "BD",
    "name": "Khulna",
    "lat": "22.80979",
    "lng": "89.56439"
  },
  {
    "country": "BD",
    "name": "Bhola",
    "lat": "22.68759",
    "lng": "90.64403"
  },
  {
    "country": "BD",
    "name": "Barishal",
    "lat": "22.70497",
    "lng": "90.37013"
  },
  {
    "country": "BD",
    "name": "Jessore",
    "lat": "23.16971",
    "lng": "89.21371"
  },
  {
    "country": "BD",
    "name": "Pābna",
    "lat": "24.00644",
    "lng": "89.2372"
  },
  {
    "country": "BD",
    "name": "Tāngāil",
    "lat": "24.24984",
    "lng": "89.91655"
  },
  {
    "country": "BD",
    "name": "Bogra",
    "lat": "24.85098",
    "lng": "89.37108"
  },
  {
    "country": "BD",
    "name": "Pīrgaaj",
    "lat": "25.85587",
    "lng": "88.35943"
  },
  {
    "country": "BD",
    "name": "Nawābganj",
    "lat": "24.59025",
    "lng": "88.27444"
  },
  {
    "country": "BD",
    "name": "Madaripur",
    "lat": "23.17097",
    "lng": "90.20935"
  },
  {
    "country": "BD",
    "name": "Sherpur",
    "lat": "25.01881",
    "lng": "90.01751"
  },
  {
    "country": "BD",
    "name": "Kishorganj",
    "lat": "24.43944",
    "lng": "90.78291"
  },
  {
    "country": "BD",
    "name": "Manikchari",
    "lat": "22.83957",
    "lng": "91.84128"
  },
  {
    "country": "BD",
    "name": "Bhāndāria",
    "lat": "22.48898",
    "lng": "90.06273"
  },
  {
    "country": "BD",
    "name": "Bibir Hat",
    "lat": "22.68347",
    "lng": "91.79058"
  },
  {
    "country": "BD",
    "name": "Saidpur",
    "lat": "25.77769",
    "lng": "88.89169"
  },
  {
    "country": "BD",
    "name": "Puthia",
    "lat": "24.36537",
    "lng": "88.83431"
  },
  {
    "country": "BD",
    "name": "Natore",
    "lat": "24.41112",
    "lng": "88.98673"
  },
  {
    "country": "BD",
    "name": "Ujalpur",
    "lat": "23.80562",
    "lng": "88.62444"
  },
  {
    "country": "BD",
    "name": "Nowlamary",
    "lat": "23.67346",
    "lng": "88.98885"
  },
  {
    "country": "BD",
    "name": "Nilphamari",
    "lat": "25.94167",
    "lng": "88.84667"
  },
  {
    "country": "BD",
    "name": "Magura",
    "lat": "23.48702",
    "lng": "89.41592"
  },
  {
    "country": "BD",
    "name": "Azimpur",
    "lat": "23.7298",
    "lng": "90.3854"
  },
  {
    "country": "BD",
    "name": "Gaibandha",
    "lat": "25.3293",
    "lng": "89.5438"
  },
  {
    "country": "BD",
    "name": "Paotana Hat",
    "lat": "25.66473",
    "lng": "89.5026"
  },
  {
    "country": "BD",
    "name": "Mahasthangarh",
    "lat": "24.96111",
    "lng": "89.34278"
  },
  {
    "country": "BD",
    "name": "Paltan",
    "lat": "23.73625",
    "lng": "90.41426"
  },
  {
    "country": "BD",
    "name": "Parvez Ali Hossain",
    "lat": "23.78758",
    "lng": "90.16487"
  },
  {
    "country": "BD",
    "name": "Khanbaniara",
    "lat": "23.78225",
    "lng": "90.18382"
  },
  {
    "country": "BD",
    "name": "Char Golora",
    "lat": "23.82037",
    "lng": "90.12175"
  },
  {
    "country": "BD",
    "name": "Parvez Ali",
    "lat": "23.81741",
    "lng": "90.11921"
  },
  {
    "country": "BD",
    "name": "Joymontop",
    "lat": "23.78789",
    "lng": "90.16472"
  },
  {
    "country": "BD",
    "name": "Sayani",
    "lat": "23.79119",
    "lng": "90.16972"
  },
  {
    "country": "BD",
    "name": "Kashimnagar",
    "lat": "23.81773",
    "lng": "90.11595"
  },
  {
    "country": "BD",
    "name": "Swarpur",
    "lat": "23.81786",
    "lng": "90.1148"
  },
  {
    "country": "BE",
    "name": "Zwijndrecht",
    "lat": "51.21979",
    "lng": "4.32664"
  },
  {
    "country": "BE",
    "name": "Zwijnaarde",
    "lat": "51.00077",
    "lng": "3.70746"
  },
  {
    "country": "BE",
    "name": "Zwevezele",
    "lat": "51.03683",
    "lng": "3.21186"
  },
  {
    "country": "BE",
    "name": "Zwevegem",
    "lat": "50.81268",
    "lng": "3.33848"
  },
  {
    "country": "BE",
    "name": "Zutendaal",
    "lat": "50.93306",
    "lng": "5.5753"
  },
  {
    "country": "BE",
    "name": "Zulte",
    "lat": "50.91954",
    "lng": "3.44859"
  },
  {
    "country": "BE",
    "name": "Zuienkerke",
    "lat": "51.26511",
    "lng": "3.15506"
  },
  {
    "country": "BE",
    "name": "Zoutleeuw",
    "lat": "50.83316",
    "lng": "5.10376"
  },
  {
    "country": "BE",
    "name": "Zottegem",
    "lat": "50.86955",
    "lng": "3.81052"
  },
  {
    "country": "BE",
    "name": "Zonnebeke",
    "lat": "50.8726",
    "lng": "2.98725"
  },
  {
    "country": "BE",
    "name": "Zonhoven",
    "lat": "50.99064",
    "lng": "5.36819"
  },
  {
    "country": "BE",
    "name": "Zomergem",
    "lat": "51.11994",
    "lng": "3.56496"
  },
  {
    "country": "BE",
    "name": "Zolder",
    "lat": "51.02455",
    "lng": "5.30983"
  },
  {
    "country": "BE",
    "name": "Zoersel",
    "lat": "51.26825",
    "lng": "4.71296"
  },
  {
    "country": "BE",
    "name": "Zoerle-Parwijs",
    "lat": "51.08969",
    "lng": "4.87108"
  },
  {
    "country": "BE",
    "name": "Zingem",
    "lat": "50.90409",
    "lng": "3.65305"
  },
  {
    "country": "BE",
    "name": "Zillebeke",
    "lat": "50.83464",
    "lng": "2.92249"
  },
  {
    "country": "BE",
    "name": "Zichen-Zussen-Bolder",
    "lat": "50.79422",
    "lng": "5.62483"
  },
  {
    "country": "BE",
    "name": "Zichem",
    "lat": "51.00187",
    "lng": "4.98316"
  },
  {
    "country": "BE",
    "name": "Zevergem",
    "lat": "50.97931",
    "lng": "3.69319"
  },
  {
    "country": "BE",
    "name": "Zeveneken",
    "lat": "51.10781",
    "lng": "3.89048"
  },
  {
    "country": "BE",
    "name": "Zétrud-Lumay",
    "lat": "50.75715",
    "lng": "4.88711"
  },
  {
    "country": "BE",
    "name": "Zerkegem",
    "lat": "51.16645",
    "lng": "3.06994"
  },
  {
    "country": "BE",
    "name": "Zepperen",
    "lat": "50.82139",
    "lng": "5.24769"
  },
  {
    "country": "BE",
    "name": "Zemst",
    "lat": "50.98318",
    "lng": "4.46079"
  },
  {
    "country": "BE",
    "name": "Zelzate",
    "lat": "51.18963",
    "lng": "3.80777"
  },
  {
    "country": "BE",
    "name": "Zellik",
    "lat": "50.88408",
    "lng": "4.27325"
  },
  {
    "country": "BE",
    "name": "Zelem",
    "lat": "50.97739",
    "lng": "5.10687"
  },
  {
    "country": "BE",
    "name": "Zele",
    "lat": "51.06566",
    "lng": "4.0403"
  },
  {
    "country": "BE",
    "name": "Zeebrugge",
    "lat": "51.32901",
    "lng": "3.18188"
  },
  {
    "country": "BE",
    "name": "Zedelgem",
    "lat": "51.14236",
    "lng": "3.1368"
  },
  {
    "country": "BE",
    "name": "Zaventem",
    "lat": "50.88365",
    "lng": "4.47298"
  },
  {
    "country": "BE",
    "name": "Zarren",
    "lat": "51.01844",
    "lng": "2.95814"
  },
  {
    "country": "BE",
    "name": "Zarlardinge",
    "lat": "50.76214",
    "lng": "3.8285"
  },
  {
    "country": "BE",
    "name": "Zandvoorde",
    "lat": "51.19942",
    "lng": "2.9722"
  },
  {
    "country": "BE",
    "name": "Zandhoven",
    "lat": "51.21488",
    "lng": "4.66164"
  },
  {
    "country": "BE",
    "name": "Zandbergen",
    "lat": "50.80279",
    "lng": "3.96636"
  },
  {
    "country": "BE",
    "name": "Zaffelare",
    "lat": "51.13385",
    "lng": "3.86357"
  },
  {
    "country": "BE",
    "name": "Yvoir",
    "lat": "50.3279",
    "lng": "4.88059"
  },
  {
    "country": "BE",
    "name": "Yves-Gomezée",
    "lat": "50.23926",
    "lng": "4.49344"
  },
  {
    "country": "BE",
    "name": "Xhoris",
    "lat": "50.44586",
    "lng": "5.60431"
  },
  {
    "country": "BE",
    "name": "Xhendremael",
    "lat": "50.70454",
    "lng": "5.47984"
  },
  {
    "country": "BE",
    "name": "Xhendelesse",
    "lat": "50.60492",
    "lng": "5.77804"
  },
  {
    "country": "BE",
    "name": "Wuustwezel",
    "lat": "51.39214",
    "lng": "4.59546"
  },
  {
    "country": "BE",
    "name": "Woumen",
    "lat": "51.00145",
    "lng": "2.86965"
  },
  {
    "country": "BE",
    "name": "Wortel",
    "lat": "51.39827",
    "lng": "4.7946"
  },
  {
    "country": "BE",
    "name": "Wortegem",
    "lat": "50.85357",
    "lng": "3.51"
  },
  {
    "country": "BE",
    "name": "Wondelgem",
    "lat": "51.08705",
    "lng": "3.70909"
  },
  {
    "country": "BE",
    "name": "Wonck",
    "lat": "50.76687",
    "lng": "5.6362"
  },
  {
    "country": "BE",
    "name": "Wommersom",
    "lat": "50.81266",
    "lng": "5.01771"
  },
  {
    "country": "BE",
    "name": "Wommelgem",
    "lat": "51.20452",
    "lng": "4.5225"
  },
  {
    "country": "BE",
    "name": "Wolvertem",
    "lat": "50.95172",
    "lng": "4.30964"
  },
  {
    "country": "BE",
    "name": "Woluwe-Saint-Lambert",
    "lat": "50.84389",
    "lng": "4.42912"
  },
  {
    "country": "BE",
    "name": "Wolkrange",
    "lat": "49.62882",
    "lng": "5.79877"
  },
  {
    "country": "BE",
    "name": "Woesten",
    "lat": "50.89971",
    "lng": "2.78959"
  },
  {
    "country": "BE",
    "name": "Wodecq",
    "lat": "50.71805",
    "lng": "3.74649"
  },
  {
    "country": "BE",
    "name": "Winksele",
    "lat": "50.8986",
    "lng": "4.64607"
  },
  {
    "country": "BE",
    "name": "Wingene",
    "lat": "51.05782",
    "lng": "3.27359"
  },
  {
    "country": "BE",
    "name": "Winenne",
    "lat": "50.09751",
    "lng": "4.89492"
  },
  {
    "country": "BE",
    "name": "Wilsele",
    "lat": "50.89188",
    "lng": "4.69769"
  },
  {
    "country": "BE",
    "name": "Wilrijk",
    "lat": "51.16734",
    "lng": "4.39513"
  },
  {
    "country": "BE",
    "name": "Willemeau",
    "lat": "50.57435",
    "lng": "3.35031"
  },
  {
    "country": "BE",
    "name": "Willebroek",
    "lat": "51.06041",
    "lng": "4.36019"
  },
  {
    "country": "BE",
    "name": "Wilderen",
    "lat": "50.81548",
    "lng": "5.14229"
  },
  {
    "country": "BE",
    "name": "Wijtschate",
    "lat": "50.78632",
    "lng": "2.88369"
  },
  {
    "country": "BE",
    "name": "Wijshagen",
    "lat": "51.10492",
    "lng": "5.55788"
  },
  {
    "country": "BE",
    "name": "Wijnegem",
    "lat": "51.22787",
    "lng": "4.51895"
  },
  {
    "country": "BE",
    "name": "Wijer",
    "lat": "50.89863",
    "lng": "5.22446"
  },
  {
    "country": "BE",
    "name": "Wijchmaal",
    "lat": "51.13515",
    "lng": "5.41334"
  },
  {
    "country": "BE",
    "name": "Wihogne",
    "lat": "50.72918",
    "lng": "5.50484"
  },
  {
    "country": "BE",
    "name": "Wihéries",
    "lat": "50.38543",
    "lng": "3.75372"
  },
  {
    "country": "BE",
    "name": "Wieze",
    "lat": "50.97691",
    "lng": "4.07876"
  },
  {
    "country": "BE",
    "name": "Wiers",
    "lat": "50.50862",
    "lng": "3.53468"
  },
  {
    "country": "BE",
    "name": "Wierde",
    "lat": "50.42607",
    "lng": "4.95097"
  },
  {
    "country": "BE",
    "name": "Wielsbeke",
    "lat": "50.9",
    "lng": "3.36667"
  },
  {
    "country": "BE",
    "name": "Wiekevorst",
    "lat": "51.10796",
    "lng": "4.7924"
  },
  {
    "country": "BE",
    "name": "Wichelen",
    "lat": "51.00526",
    "lng": "3.97683"
  },
  {
    "country": "BE",
    "name": "Wezembeek-Oppem",
    "lat": "50.8395",
    "lng": "4.49427"
  },
  {
    "country": "BE",
    "name": "Wezemaal",
    "lat": "50.94848",
    "lng": "4.75536"
  },
  {
    "country": "BE",
    "name": "Wevelgem",
    "lat": "50.8",
    "lng": "3.16667"
  },
  {
    "country": "BE",
    "name": "Wetteren",
    "lat": "51.00526",
    "lng": "3.88341"
  },
  {
    "country": "BE",
    "name": "Westvleteren",
    "lat": "50.92744",
    "lng": "2.71688"
  },
  {
    "country": "BE",
    "name": "Westrozebeke",
    "lat": "50.93178",
    "lng": "3.01001"
  },
  {
    "country": "BE",
    "name": "Westouter",
    "lat": "50.79722",
    "lng": "2.74647"
  },
  {
    "country": "BE",
    "name": "Westmeerbeek",
    "lat": "51.06127",
    "lng": "4.83835"
  },
  {
    "country": "BE",
    "name": "Westmalle",
    "lat": "51.29767",
    "lng": "4.69013"
  },
  {
    "country": "BE",
    "name": "Westkerke",
    "lat": "51.16448",
    "lng": "3.01084"
  },
  {
    "country": "BE",
    "name": "Westkapelle",
    "lat": "51.31511",
    "lng": "3.3017"
  },
  {
    "country": "BE",
    "name": "Westerlo",
    "lat": "51.09049",
    "lng": "4.91544"
  },
  {
    "country": "BE",
    "name": "Westende",
    "lat": "51.15961",
    "lng": "2.7687"
  },
  {
    "country": "BE",
    "name": "Wespelaar",
    "lat": "50.96081",
    "lng": "4.63984"
  },
  {
    "country": "BE",
    "name": "Wervik",
    "lat": "50.78069",
    "lng": "3.03854"
  },
  {
    "country": "BE",
    "name": "Werchter",
    "lat": "50.97308",
    "lng": "4.7012"
  },
  {
    "country": "BE",
    "name": "Wépion",
    "lat": "50.42153",
    "lng": "4.86403"
  },
  {
    "country": "BE",
    "name": "Wenduine",
    "lat": "51.2983",
    "lng": "3.08213"
  },
  {
    "country": "BE",
    "name": "Wemmel",
    "lat": "50.90812",
    "lng": "4.30613"
  },
  {
    "country": "BE",
    "name": "Wellin",
    "lat": "50.08133",
    "lng": "5.11413"
  },
  {
    "country": "BE",
    "name": "Wellen",
    "lat": "50.84096",
    "lng": "5.33867"
  },
  {
    "country": "BE",
    "name": "Welle",
    "lat": "50.89876",
    "lng": "4.05602"
  },
  {
    "country": "BE",
    "name": "Welkenraedt",
    "lat": "50.6605",
    "lng": "5.97034"
  },
  {
    "country": "BE",
    "name": "Welden",
    "lat": "50.87684",
    "lng": "3.65453"
  },
  {
    "country": "BE",
    "name": "Wegnez",
    "lat": "50.57895",
    "lng": "5.81705"
  },
  {
    "country": "BE",
    "name": "Weerde",
    "lat": "50.97345",
    "lng": "4.47487"
  },
  {
    "country": "BE",
    "name": "Weelde",
    "lat": "51.40777",
    "lng": "4.99251"
  },
  {
    "country": "BE",
    "name": "Wechelderzande",
    "lat": "51.26304",
    "lng": "4.78652"
  },
  {
    "country": "BE",
    "name": "Webbekom",
    "lat": "50.9741",
    "lng": "5.04032"
  },
  {
    "country": "BE",
    "name": "Ways",
    "lat": "50.61108",
    "lng": "4.46448"
  },
  {
    "country": "BE",
    "name": "Wavreille",
    "lat": "50.12119",
    "lng": "5.24831"
  },
  {
    "country": "BE",
    "name": "Wavre",
    "lat": "50.71717",
    "lng": "4.60138"
  },
  {
    "country": "BE",
    "name": "Wauthier-Braine",
    "lat": "50.68183",
    "lng": "4.29849"
  },
  {
    "country": "BE",
    "name": "Waudrez",
    "lat": "50.4135",
    "lng": "4.15051"
  },
  {
    "country": "BE",
    "name": "Watou",
    "lat": "50.85864",
    "lng": "2.62074"
  },
  {
    "country": "BE",
    "name": "Watervliet",
    "lat": "51.27494",
    "lng": "3.62598"
  },
  {
    "country": "BE",
    "name": "Watermael-Boitsfort",
    "lat": "50.80154",
    "lng": "4.41436"
  },
  {
    "country": "BE",
    "name": "Waterloo",
    "lat": "50.71469",
    "lng": "4.3991"
  },
  {
    "country": "BE",
    "name": "Wasseiges",
    "lat": "50.62186",
    "lng": "5.00528"
  },
  {
    "country": "BE",
    "name": "Wasmuel",
    "lat": "50.44493",
    "lng": "3.84813"
  },
  {
    "country": "BE",
    "name": "Wasmes",
    "lat": "50.41464",
    "lng": "3.8471"
  },
  {
    "country": "BE",
    "name": "Warsage",
    "lat": "50.73517",
    "lng": "5.7688"
  },
  {
    "country": "BE",
    "name": "Warneton",
    "lat": "50.75158",
    "lng": "2.94635"
  },
  {
    "country": "BE",
    "name": "Waret-l'Évêque",
    "lat": "50.55672",
    "lng": "5.06755"
  },
  {
    "country": "BE",
    "name": "Waret-la-Chaussée",
    "lat": "50.54294",
    "lng": "4.92445"
  },
  {
    "country": "BE",
    "name": "Waremme",
    "lat": "50.6976",
    "lng": "5.25524"
  },
  {
    "country": "BE",
    "name": "Waregem",
    "lat": "50.88898",
    "lng": "3.42756"
  },
  {
    "country": "BE",
    "name": "Wardin",
    "lat": "49.99213",
    "lng": "5.79117"
  },
  {
    "country": "BE",
    "name": "Warcoing",
    "lat": "50.70447",
    "lng": "3.3462"
  },
  {
    "country": "BE",
    "name": "Warchin",
    "lat": "50.60925",
    "lng": "3.424"
  },
  {
    "country": "BE",
    "name": "Wanzele",
    "lat": "50.97425",
    "lng": "3.95642"
  },
  {
    "country": "BE",
    "name": "Wanze",
    "lat": "50.53907",
    "lng": "5.20846"
  },
  {
    "country": "BE",
    "name": "Wangenies",
    "lat": "50.48023",
    "lng": "4.52019"
  },
  {
    "country": "BE",
    "name": "Wanfercée-Baulet",
    "lat": "50.47291",
    "lng": "4.58748"
  },
  {
    "country": "BE",
    "name": "Wandre",
    "lat": "50.66774",
    "lng": "5.65959"
  },
  {
    "country": "BE",
    "name": "Wambeek",
    "lat": "50.85281",
    "lng": "4.16169"
  },
  {
    "country": "BE",
    "name": "Waltwilder",
    "lat": "50.86641",
    "lng": "5.54425"
  },
  {
    "country": "BE",
    "name": "Houtain-l'Évêque",
    "lat": "50.71667",
    "lng": "5.08333"
  },
  {
    "country": "BE",
    "name": "Walsbets",
    "lat": "50.73762",
    "lng": "5.08409"
  },
  {
    "country": "BE",
    "name": "Walhorn",
    "lat": "50.67496",
    "lng": "6.04608"
  },
  {
    "country": "BE",
    "name": "Walhain-Saint-Paul",
    "lat": "50.62627",
    "lng": "4.69837"
  },
  {
    "country": "BE",
    "name": "Walem",
    "lat": "51.06705",
    "lng": "4.45842"
  },
  {
    "country": "BE",
    "name": "Walcourt",
    "lat": "50.25401",
    "lng": "4.43796"
  },
  {
    "country": "BE",
    "name": "Wakken",
    "lat": "50.93304",
    "lng": "3.39743"
  },
  {
    "country": "BE",
    "name": "Waimes",
    "lat": "50.41488",
    "lng": "6.11207"
  },
  {
    "country": "BE",
    "name": "Waha",
    "lat": "50.20915",
    "lng": "5.34174"
  },
  {
    "country": "BE",
    "name": "Wachtebeke",
    "lat": "51.16852",
    "lng": "3.87183"
  },
  {
    "country": "BE",
    "name": "Waasmunster",
    "lat": "51.10572",
    "lng": "4.08573"
  },
  {
    "country": "BE",
    "name": "Waarschoot",
    "lat": "51.1525",
    "lng": "3.605"
  },
  {
    "country": "BE",
    "name": "Waarloos",
    "lat": "51.10597",
    "lng": "4.45482"
  },
  {
    "country": "BE",
    "name": "Waardamme",
    "lat": "51.11136",
    "lng": "3.22288"
  },
  {
    "country": "BE",
    "name": "Waanrode",
    "lat": "50.91624",
    "lng": "5.00479"
  },
  {
    "country": "BE",
    "name": "Vurste",
    "lat": "50.94321",
    "lng": "3.68307"
  },
  {
    "country": "BE",
    "name": "Vucht",
    "lat": "50.97832",
    "lng": "5.711"
  },
  {
    "country": "BE",
    "name": "Vroenhoven",
    "lat": "50.82614",
    "lng": "5.63995"
  },
  {
    "country": "BE",
    "name": "Vreren",
    "lat": "50.75168",
    "lng": "5.49588"
  },
  {
    "country": "BE",
    "name": "Vremde",
    "lat": "51.17535",
    "lng": "4.52321"
  },
  {
    "country": "BE",
    "name": "Vrasene",
    "lat": "51.22098",
    "lng": "4.19094"
  },
  {
    "country": "BE",
    "name": "Vottem",
    "lat": "50.67155",
    "lng": "5.57693"
  },
  {
    "country": "BE",
    "name": "Vossem",
    "lat": "50.8363",
    "lng": "4.56036"
  },
  {
    "country": "BE",
    "name": "Vosselare",
    "lat": "51.02888",
    "lng": "3.55664"
  },
  {
    "country": "BE",
    "name": "Vosselaar",
    "lat": "51.30856",
    "lng": "4.8896"
  },
  {
    "country": "BE",
    "name": "Vorst",
    "lat": "51.08029",
    "lng": "5.01998"
  },
  {
    "country": "BE",
    "name": "Vorselaar",
    "lat": "51.20243",
    "lng": "4.77259"
  },
  {
    "country": "BE",
    "name": "Voroux-lez-Liers",
    "lat": "50.68745",
    "lng": "5.5544"
  },
  {
    "country": "BE",
    "name": "Voorde",
    "lat": "50.82306",
    "lng": "3.94928"
  },
  {
    "country": "BE",
    "name": "Vollezele",
    "lat": "50.76121",
    "lng": "4.02435"
  },
  {
    "country": "BE",
    "name": "Vlissegem",
    "lat": "51.25531",
    "lng": "3.05604"
  },
  {
    "country": "BE",
    "name": "Vlimmeren",
    "lat": "51.2952",
    "lng": "4.78128"
  },
  {
    "country": "BE",
    "name": "Vlijtingen",
    "lat": "50.83202",
    "lng": "5.58432"
  },
  {
    "country": "BE",
    "name": "Vlierzele",
    "lat": "50.93171",
    "lng": "3.8959"
  },
  {
    "country": "BE",
    "name": "Vliermaalroot",
    "lat": "50.86512",
    "lng": "5.42622"
  },
  {
    "country": "BE",
    "name": "Vliermaal",
    "lat": "50.84069",
    "lng": "5.42862"
  },
  {
    "country": "BE",
    "name": "Vlezenbeek",
    "lat": "50.80778",
    "lng": "4.23197"
  },
  {
    "country": "BE",
    "name": "Vlamertinge",
    "lat": "50.85485",
    "lng": "2.82024"
  },
  {
    "country": "BE",
    "name": "Vladslo",
    "lat": "51.04644",
    "lng": "2.91601"
  },
  {
    "country": "BE",
    "name": "Vivegnis",
    "lat": "50.69243",
    "lng": "5.64757"
  },
  {
    "country": "BE",
    "name": "Vitrival",
    "lat": "50.39282",
    "lng": "4.65769"
  },
  {
    "country": "BE",
    "name": "Vissenaken",
    "lat": "50.83846",
    "lng": "4.90489"
  },
  {
    "country": "BE",
    "name": "Visé",
    "lat": "50.7376",
    "lng": "5.69907"
  },
  {
    "country": "BE",
    "name": "Virton",
    "lat": "49.56824",
    "lng": "5.53259"
  },
  {
    "country": "BE",
    "name": "Virginal-Samme",
    "lat": "50.64037",
    "lng": "4.20579"
  },
  {
    "country": "BE",
    "name": "Vinkt",
    "lat": "51.00864",
    "lng": "3.47878"
  },
  {
    "country": "BE",
    "name": "Vinderhoute",
    "lat": "51.08764",
    "lng": "3.64158"
  },
  {
    "country": "BE",
    "name": "Vinalmont",
    "lat": "50.56329",
    "lng": "5.23155"
  },
  {
    "country": "BE",
    "name": "Vilvoorde",
    "lat": "50.92814",
    "lng": "4.42938"
  },
  {
    "country": "BE",
    "name": "Ville-sur-Haine",
    "lat": "50.47657",
    "lng": "4.06425"
  },
  {
    "country": "BE",
    "name": "Villers-Poterie",
    "lat": "50.35379",
    "lng": "4.54885"
  },
  {
    "country": "BE",
    "name": "Villers-Perwin",
    "lat": "50.52783",
    "lng": "4.47968"
  },
  {
    "country": "BE",
    "name": "Villers-l'Évêque",
    "lat": "50.70454",
    "lng": "5.4396"
  },
  {
    "country": "BE",
    "name": "Villers-le-Temple",
    "lat": "50.5086",
    "lng": "5.37077"
  },
  {
    "country": "BE",
    "name": "Villers-le-Bouillet",
    "lat": "50.57708",
    "lng": "5.25945"
  },
  {
    "country": "BE",
    "name": "Villers-la-Ville",
    "lat": "50.57953",
    "lng": "4.53398"
  },
  {
    "country": "BE",
    "name": "Vieux-Genappe",
    "lat": "50.60846",
    "lng": "4.44097"
  },
  {
    "country": "BE",
    "name": "Viesville",
    "lat": "50.49088",
    "lng": "4.40852"
  },
  {
    "country": "BE",
    "name": "Vierset-Barse",
    "lat": "50.48373",
    "lng": "5.29816"
  },
  {
    "country": "BE",
    "name": "Viersel",
    "lat": "51.18769",
    "lng": "4.64918"
  },
  {
    "country": "BE",
    "name": "Vielsalm",
    "lat": "50.28407",
    "lng": "5.91502"
  },
  {
    "country": "BE",
    "name": "Vichte",
    "lat": "50.83868",
    "lng": "3.40129"
  },
  {
    "country": "BE",
    "name": "Viane",
    "lat": "50.74232",
    "lng": "3.92478"
  },
  {
    "country": "BE",
    "name": "Vezon",
    "lat": "50.56917",
    "lng": "3.50469"
  },
  {
    "country": "BE",
    "name": "Vezin",
    "lat": "50.49623",
    "lng": "5.00899"
  },
  {
    "country": "BE",
    "name": "Veurne",
    "lat": "51.07316",
    "lng": "2.66803"
  },
  {
    "country": "BE",
    "name": "Verviers",
    "lat": "50.58907",
    "lng": "5.86241"
  },
  {
    "country": "BE",
    "name": "Vertrijk",
    "lat": "50.82925",
    "lng": "4.8345"
  },
  {
    "country": "BE",
    "name": "Verrebroek",
    "lat": "51.25537",
    "lng": "4.18882"
  },
  {
    "country": "BE",
    "name": "Verlaine",
    "lat": "50.60743",
    "lng": "5.3174"
  },
  {
    "country": "BE",
    "name": "Velzeke-Ruddershove",
    "lat": "50.88288",
    "lng": "3.78292"
  },
  {
    "country": "BE",
    "name": "Veltem-Beisem",
    "lat": "50.90807",
    "lng": "4.61906"
  },
  {
    "country": "BE",
    "name": "Velm",
    "lat": "50.7787",
    "lng": "5.13096"
  },
  {
    "country": "BE",
    "name": "Vellereille-les-Brayeux",
    "lat": "50.37952",
    "lng": "4.15112"
  },
  {
    "country": "BE",
    "name": "Veldwezelt",
    "lat": "50.86805",
    "lng": "5.63101"
  },
  {
    "country": "BE",
    "name": "Veldegem",
    "lat": "51.1048",
    "lng": "3.1591"
  },
  {
    "country": "BE",
    "name": "Velaines",
    "lat": "50.66801",
    "lng": "3.4866"
  },
  {
    "country": "BE",
    "name": "Velaine",
    "lat": "50.47805",
    "lng": "4.61031"
  },
  {
    "country": "BE",
    "name": "Veerle",
    "lat": "51.06989",
    "lng": "4.98761"
  },
  {
    "country": "BE",
    "name": "Vedrin",
    "lat": "50.50273",
    "lng": "4.87604"
  },
  {
    "country": "BE",
    "name": "Vaux-sur-Sûre",
    "lat": "49.911",
    "lng": "5.57848"
  },
  {
    "country": "BE",
    "name": "Vaux-sous-Chèvremont",
    "lat": "50.60302",
    "lng": "5.6335"
  },
  {
    "country": "BE",
    "name": "Vaux-et-Borset",
    "lat": "50.61385",
    "lng": "5.23438"
  },
  {
    "country": "BE",
    "name": "Vaulx-lez-Tournai",
    "lat": "50.59406",
    "lng": "3.42954"
  },
  {
    "country": "BE",
    "name": "Varsenare",
    "lat": "51.18981",
    "lng": "3.13916"
  },
  {
    "country": "BE",
    "name": "Vance",
    "lat": "49.67163",
    "lng": "5.66571"
  },
  {
    "country": "BE",
    "name": "Val-Meer",
    "lat": "50.78715",
    "lng": "5.59557"
  },
  {
    "country": "BE",
    "name": "Ursel",
    "lat": "51.12895",
    "lng": "3.48655"
  },
  {
    "country": "BE",
    "name": "Uitkerke",
    "lat": "51.30684",
    "lng": "3.13712"
  },
  {
    "country": "BE",
    "name": "Uitbergen",
    "lat": "51.02152",
    "lng": "3.95505"
  },
  {
    "country": "BE",
    "name": "Uikhoven",
    "lat": "50.92386",
    "lng": "5.71921"
  },
  {
    "country": "BE",
    "name": "Uccle",
    "lat": "50.80225",
    "lng": "4.33943"
  },
  {
    "country": "BE",
    "name": "Turnhout",
    "lat": "51.32254",
    "lng": "4.94471"
  },
  {
    "country": "BE",
    "name": "Tubize",
    "lat": "50.69059",
    "lng": "4.2009"
  },
  {
    "country": "BE",
    "name": "Trooz",
    "lat": "50.57026",
    "lng": "5.69521"
  },
  {
    "country": "BE",
    "name": "Trois-Ponts",
    "lat": "50.37128",
    "lng": "5.87146"
  },
  {
    "country": "BE",
    "name": "Trivières",
    "lat": "50.44827",
    "lng": "4.14511"
  },
  {
    "country": "BE",
    "name": "Tremelo",
    "lat": "50.99231",
    "lng": "4.70807"
  },
  {
    "country": "BE",
    "name": "Trembleur",
    "lat": "50.69544",
    "lng": "5.72604"
  },
  {
    "country": "BE",
    "name": "Trazegnies",
    "lat": "50.46379",
    "lng": "4.3329"
  },
  {
    "country": "BE",
    "name": "Tournai",
    "lat": "50.60715",
    "lng": "3.38932"
  },
  {
    "country": "BE",
    "name": "Tourinnes-Saint-Lambert",
    "lat": "50.64021",
    "lng": "4.72361"
  },
  {
    "country": "BE",
    "name": "Tourinnes-la-Grosse",
    "lat": "50.78299",
    "lng": "4.74438"
  },
  {
    "country": "BE",
    "name": "Torhout",
    "lat": "51.0656",
    "lng": "3.10085"
  },
  {
    "country": "BE",
    "name": "Tongrinne",
    "lat": "50.51561",
    "lng": "4.6243"
  },
  {
    "country": "BE",
    "name": "Tongerlo",
    "lat": "51.12756",
    "lng": "5.6609"
  },
  {
    "country": "BE",
    "name": "Tongerlo",
    "lat": "51.10622",
    "lng": "4.91638"
  },
  {
    "country": "BE",
    "name": "Tongeren",
    "lat": "50.78054",
    "lng": "5.46484"
  },
  {
    "country": "BE",
    "name": "Tollembeek",
    "lat": "50.74096",
    "lng": "4.00666"
  },
  {
    "country": "BE",
    "name": "Tohogne",
    "lat": "50.38006",
    "lng": "5.479"
  },
  {
    "country": "BE",
    "name": "Toernich",
    "lat": "49.65178",
    "lng": "5.77741"
  },
  {
    "country": "BE",
    "name": "Tisselt",
    "lat": "51.03398",
    "lng": "4.35947"
  },
  {
    "country": "BE",
    "name": "Tintigny",
    "lat": "49.68326",
    "lng": "5.51349"
  },
  {
    "country": "BE",
    "name": "Tinlot",
    "lat": "50.47493",
    "lng": "5.37755"
  },
  {
    "country": "BE",
    "name": "Tilly",
    "lat": "50.56078",
    "lng": "4.55495"
  },
  {
    "country": "BE",
    "name": "Tilleur",
    "lat": "50.61805",
    "lng": "5.54277"
  },
  {
    "country": "BE",
    "name": "Tilff",
    "lat": "50.56432",
    "lng": "5.57642"
  },
  {
    "country": "BE",
    "name": "Tildonk",
    "lat": "50.94383",
    "lng": "4.64481"
  },
  {
    "country": "BE",
    "name": "Tihange",
    "lat": "50.52974",
    "lng": "5.26176"
  },
  {
    "country": "BE",
    "name": "Tienen",
    "lat": "50.80745",
    "lng": "4.9378"
  },
  {
    "country": "BE",
    "name": "Tielt",
    "lat": "50.99931",
    "lng": "3.32707"
  },
  {
    "country": "BE",
    "name": "Tielt",
    "lat": "50.9421",
    "lng": "4.90505"
  },
  {
    "country": "BE",
    "name": "Tielrode",
    "lat": "51.11303",
    "lng": "4.17707"
  },
  {
    "country": "BE",
    "name": "Tielen",
    "lat": "51.24295",
    "lng": "4.89956"
  },
  {
    "country": "BE",
    "name": "Tiegem",
    "lat": "50.80901",
    "lng": "3.47479"
  },
  {
    "country": "BE",
    "name": "Thy-le-Château",
    "lat": "50.28205",
    "lng": "4.42955"
  },
  {
    "country": "BE",
    "name": "Thulin",
    "lat": "50.43006",
    "lng": "3.74007"
  },
  {
    "country": "BE",
    "name": "Thuin",
    "lat": "50.33933",
    "lng": "4.28604"
  },
  {
    "country": "BE",
    "name": "Thuillies",
    "lat": "50.29899",
    "lng": "4.33269"
  },
  {
    "country": "BE",
    "name": "Thorembais-Saint-Trond",
    "lat": "50.63485",
    "lng": "4.78406"
  },
  {
    "country": "BE",
    "name": "Thommen",
    "lat": "50.21917",
    "lng": "6.07417"
  },
  {
    "country": "BE",
    "name": "Thisnes",
    "lat": "50.66578",
    "lng": "5.04375"
  },
  {
    "country": "BE",
    "name": "Thimister",
    "lat": "50.65539",
    "lng": "5.86421"
  },
  {
    "country": "BE",
    "name": "Thiméon",
    "lat": "50.48951",
    "lng": "4.42878"
  },
  {
    "country": "BE",
    "name": "Thieusies",
    "lat": "50.51525",
    "lng": "4.04931"
  },
  {
    "country": "BE",
    "name": "Thieu",
    "lat": "50.47428",
    "lng": "4.09258"
  },
  {
    "country": "BE",
    "name": "Thiaumont",
    "lat": "49.71523",
    "lng": "5.73056"
  },
  {
    "country": "BE",
    "name": "Theux",
    "lat": "50.53323",
    "lng": "5.81245"
  },
  {
    "country": "BE",
    "name": "Testelt",
    "lat": "51.01084",
    "lng": "4.95312"
  },
  {
    "country": "BE",
    "name": "Tessenderlo",
    "lat": "51.06513",
    "lng": "5.08856"
  },
  {
    "country": "BE",
    "name": "Tervuren",
    "lat": "50.82372",
    "lng": "4.51418"
  },
  {
    "country": "BE",
    "name": "Tertre",
    "lat": "50.4692",
    "lng": "3.81243"
  },
  {
    "country": "BE",
    "name": "Ternat",
    "lat": "50.86654",
    "lng": "4.16682"
  },
  {
    "country": "BE",
    "name": "Terhagen",
    "lat": "51.07966",
    "lng": "4.39907"
  },
  {
    "country": "BE",
    "name": "Teralfene",
    "lat": "50.89195",
    "lng": "4.09895"
  },
  {
    "country": "BE",
    "name": "Tenneville",
    "lat": "50.09501",
    "lng": "5.52895"
  },
  {
    "country": "BE",
    "name": "Temse",
    "lat": "51.12794",
    "lng": "4.21372"
  },
  {
    "country": "BE",
    "name": "Temploux",
    "lat": "50.48558",
    "lng": "4.75468"
  },
  {
    "country": "BE",
    "name": "Templeuve",
    "lat": "50.6441",
    "lng": "3.28013"
  },
  {
    "country": "BE",
    "name": "Tellin",
    "lat": "50.08038",
    "lng": "5.21638"
  },
  {
    "country": "BE",
    "name": "Tavier",
    "lat": "50.49634",
    "lng": "5.47063"
  },
  {
    "country": "BE",
    "name": "Tarcienne",
    "lat": "50.31204",
    "lng": "4.49676"
  },
  {
    "country": "BE",
    "name": "Tamines",
    "lat": "50.43378",
    "lng": "4.60713"
  },
  {
    "country": "BE",
    "name": "Taintignies",
    "lat": "50.55277",
    "lng": "3.34224"
  },
  {
    "country": "BE",
    "name": "Suarlée",
    "lat": "50.48137",
    "lng": "4.7792"
  },
  {
    "country": "BE",
    "name": "Strombeek-Bever",
    "lat": "50.91039",
    "lng": "4.35582"
  },
  {
    "country": "BE",
    "name": "Strijpen",
    "lat": "50.86801",
    "lng": "3.78797"
  },
  {
    "country": "BE",
    "name": "Strépy-Bracquegnies",
    "lat": "50.4728",
    "lng": "4.12022"
  },
  {
    "country": "BE",
    "name": "Strée-lez-Huy",
    "lat": "50.49039",
    "lng": "5.32348"
  },
  {
    "country": "BE",
    "name": "Strée",
    "lat": "50.28078",
    "lng": "4.29394"
  },
  {
    "country": "BE",
    "name": "Stoumont",
    "lat": "50.40667",
    "lng": "5.80838"
  },
  {
    "country": "BE",
    "name": "Stokrooie",
    "lat": "50.96637",
    "lng": "5.28142"
  },
  {
    "country": "BE",
    "name": "Stokkem",
    "lat": "51.02326",
    "lng": "5.74499"
  },
  {
    "country": "BE",
    "name": "Stevoort",
    "lat": "50.91862",
    "lng": "5.25327"
  },
  {
    "country": "BE",
    "name": "Sterrebeek",
    "lat": "50.86171",
    "lng": "4.49375"
  },
  {
    "country": "BE",
    "name": "Stene",
    "lat": "51.20437",
    "lng": "2.91259"
  },
  {
    "country": "BE",
    "name": "Stembert",
    "lat": "50.59107",
    "lng": "5.89404"
  },
  {
    "country": "BE",
    "name": "Stekene",
    "lat": "51.2099",
    "lng": "4.03651"
  },
  {
    "country": "BE",
    "name": "Steenokkerzeel",
    "lat": "50.91851",
    "lng": "4.50989"
  },
  {
    "country": "BE",
    "name": "Steenhuize-Wijnhuize",
    "lat": "50.83968",
    "lng": "3.88805"
  },
  {
    "country": "BE",
    "name": "Steenhuffel",
    "lat": "50.99539",
    "lng": "4.26788"
  },
  {
    "country": "BE",
    "name": "Steendorp",
    "lat": "51.12681",
    "lng": "4.27031"
  },
  {
    "country": "BE",
    "name": "Stavelot",
    "lat": "50.395",
    "lng": "5.93124"
  },
  {
    "country": "BE",
    "name": "Stambruges",
    "lat": "50.50939",
    "lng": "3.71621"
  },
  {
    "country": "BE",
    "name": "Staden",
    "lat": "50.97456",
    "lng": "3.01469"
  },
  {
    "country": "BE",
    "name": "Stabroek",
    "lat": "51.33189",
    "lng": "4.37127"
  },
  {
    "country": "BE",
    "name": "Spy",
    "lat": "50.48143",
    "lng": "4.70944"
  },
  {
    "country": "BE",
    "name": "Sprimont",
    "lat": "50.50922",
    "lng": "5.6595"
  },
  {
    "country": "BE",
    "name": "Spiere",
    "lat": "50.7189",
    "lng": "3.35626"
  },
  {
    "country": "BE",
    "name": "Spalbeek",
    "lat": "50.94918",
    "lng": "5.22391"
  },
  {
    "country": "BE",
    "name": "Spa",
    "lat": "50.48375",
    "lng": "5.86674"
  },
  {
    "country": "BE",
    "name": "Soye",
    "lat": "50.44958",
    "lng": "4.7303"
  },
  {
    "country": "BE",
    "name": "Soy",
    "lat": "50.286",
    "lng": "5.51153"
  },
  {
    "country": "BE",
    "name": "Souvret",
    "lat": "50.4486",
    "lng": "4.34569"
  },
  {
    "country": "BE",
    "name": "Soumagne",
    "lat": "50.61385",
    "lng": "5.74679"
  },
  {
    "country": "BE",
    "name": "Sougné-Remouchamps",
    "lat": "50.48242",
    "lng": "5.70757"
  },
  {
    "country": "BE",
    "name": "Somzée",
    "lat": "50.29514",
    "lng": "4.48209"
  },
  {
    "country": "BE",
    "name": "Somme-Leuze",
    "lat": "50.33699",
    "lng": "5.36705"
  },
  {
    "country": "BE",
    "name": "Sombreffe",
    "lat": "50.52865",
    "lng": "4.60087"
  },
  {
    "country": "BE",
    "name": "Solre-sur-Sambre",
    "lat": "50.30809",
    "lng": "4.15429"
  },
  {
    "country": "BE",
    "name": "Soignies",
    "lat": "50.57904",
    "lng": "4.07129"
  },
  {
    "country": "BE",
    "name": "Snellegem",
    "lat": "51.16776",
    "lng": "3.11921"
  },
  {
    "country": "BE",
    "name": "Snaaskerke",
    "lat": "51.17737",
    "lng": "2.93901"
  },
  {
    "country": "BE",
    "name": "Smetlede",
    "lat": "50.9662",
    "lng": "3.92796"
  },
  {
    "country": "BE",
    "name": "Slins",
    "lat": "50.72795",
    "lng": "5.56263"
  },
  {
    "country": "BE",
    "name": "Sleidinge",
    "lat": "51.13363",
    "lng": "3.67405"
  },
  {
    "country": "BE",
    "name": "Sivry",
    "lat": "50.1664",
    "lng": "4.18416"
  },
  {
    "country": "BE",
    "name": "Sirault",
    "lat": "50.50546",
    "lng": "3.78908"
  },
  {
    "country": "BE",
    "name": "Sint-Ulriks-Kapelle",
    "lat": "50.87899",
    "lng": "4.21884"
  },
  {
    "country": "BE",
    "name": "Sint-Truiden",
    "lat": "50.81679",
    "lng": "5.18647"
  },
  {
    "country": "BE",
    "name": "Sint-Stevens-Woluwe",
    "lat": "50.86838",
    "lng": "4.45195"
  },
  {
    "country": "BE",
    "name": "Sint-Pieters-Rode",
    "lat": "50.93247",
    "lng": "4.82245"
  },
  {
    "country": "BE",
    "name": "Sint-Pieters-Leeuw",
    "lat": "50.77926",
    "lng": "4.24355"
  },
  {
    "country": "BE",
    "name": "Sint-Pieters-Kapelle",
    "lat": "50.70758",
    "lng": "3.98999"
  },
  {
    "country": "BE",
    "name": "Sint-Pauwels",
    "lat": "51.19391",
    "lng": "4.09649"
  },
  {
    "country": "BE",
    "name": "Sint-Niklaas",
    "lat": "51.16509",
    "lng": "4.1437"
  },
  {
    "country": "BE",
    "name": "Sint-Michiels",
    "lat": "51.18806",
    "lng": "3.21142"
  },
  {
    "country": "BE",
    "name": "Sint-Martens-Lierde",
    "lat": "50.80371",
    "lng": "3.82541"
  },
  {
    "country": "BE",
    "name": "Sint-Martens-Lennik",
    "lat": "50.81158",
    "lng": "4.16965"
  },
  {
    "country": "BE",
    "name": "Sint-Martens-Leerne",
    "lat": "51.01605",
    "lng": "3.5813"
  },
  {
    "country": "BE",
    "name": "Sint-Martens-Latem",
    "lat": "51.01459",
    "lng": "3.63779"
  },
  {
    "country": "BE",
    "name": "Sint-Martens-Bodegem",
    "lat": "50.86185",
    "lng": "4.21317"
  },
  {
    "country": "BE",
    "name": "Sint-Martens",
    "lat": "50.83889",
    "lng": "4.92436"
  },
  {
    "country": "BE",
    "name": "Sint-Maria-Oudenhove",
    "lat": "50.83364",
    "lng": "3.79556"
  },
  {
    "country": "BE",
    "name": "Sint-Maria-Lierde",
    "lat": "50.81867",
    "lng": "3.84436"
  },
  {
    "country": "BE",
    "name": "Sint-Maria-Horebeke",
    "lat": "50.83885",
    "lng": "3.68754"
  },
  {
    "country": "BE",
    "name": "Sint-Lievens-Houtem",
    "lat": "50.9197",
    "lng": "3.86225"
  },
  {
    "country": "BE",
    "name": "Sint-Lievens-Esse",
    "lat": "50.8566",
    "lng": "3.88792"
  },
  {
    "country": "BE",
    "name": "Sint-Lenaarts",
    "lat": "51.34868",
    "lng": "4.68009"
  },
  {
    "country": "BE",
    "name": "Sint-Laureins",
    "lat": "51.24202",
    "lng": "3.52441"
  },
  {
    "country": "BE",
    "name": "Sint-Lambrechts-Herk",
    "lat": "50.89914",
    "lng": "5.30786"
  },
  {
    "country": "BE",
    "name": "Sint-Kwintens-Lennik",
    "lat": "50.80377",
    "lng": "4.15489"
  },
  {
    "country": "BE",
    "name": "Sint-Kruis",
    "lat": "51.21399",
    "lng": "3.24949"
  },
  {
    "country": "BE",
    "name": "Sint-Katherina-Lombeek",
    "lat": "50.87314",
    "lng": "4.1536"
  },
  {
    "country": "BE",
    "name": "Sint-Katelijne-Waver",
    "lat": "51.06691",
    "lng": "4.53469"
  },
  {
    "country": "BE",
    "name": "Sint-Joris-Winge",
    "lat": "50.90446",
    "lng": "4.8749"
  },
  {
    "country": "BE",
    "name": "Sint-Joris-Weert",
    "lat": "50.80235",
    "lng": "4.6526"
  },
  {
    "country": "BE",
    "name": "Sint-Joris",
    "lat": "51.12663",
    "lng": "3.36524"
  },
  {
    "country": "BE",
    "name": "Sint-Job-in-'t-Goor",
    "lat": "51.29907",
    "lng": "4.57289"
  },
  {
    "country": "BE",
    "name": "Sint-Jan-in-Eremo",
    "lat": "51.27161",
    "lng": "3.58062"
  },
  {
    "country": "BE",
    "name": "Sint-Jan",
    "lat": "50.86503",
    "lng": "2.90478"
  },
  {
    "country": "BE",
    "name": "Sint-Huibrechts-Lille",
    "lat": "51.22266",
    "lng": "5.49437"
  },
  {
    "country": "BE",
    "name": "Sint-Gillis-Waas",
    "lat": "51.21914",
    "lng": "4.12374"
  },
  {
    "country": "BE",
    "name": "Sint-Gillis-bij-Dendermonde",
    "lat": "51.01905",
    "lng": "4.11146"
  },
  {
    "country": "BE",
    "name": "Sint-Genesius-Rode",
    "lat": "50.74645",
    "lng": "4.35754"
  },
  {
    "country": "BE",
    "name": "Sint-Eloois-Winkel",
    "lat": "50.87591",
    "lng": "3.18144"
  },
  {
    "country": "BE",
    "name": "Sint-Eloois-Vijve",
    "lat": "50.90911",
    "lng": "3.41545"
  },
  {
    "country": "BE",
    "name": "Sint-Denijs-Westrem",
    "lat": "51.02135",
    "lng": "3.67202"
  },
  {
    "country": "BE",
    "name": "Sint-Denijs",
    "lat": "50.75198",
    "lng": "3.36627"
  },
  {
    "country": "BE",
    "name": "Sint-Baafs-Vijve",
    "lat": "50.9",
    "lng": "3.38333"
  },
  {
    "country": "BE",
    "name": "Sint-Antonius",
    "lat": "51.26667",
    "lng": "4.63861"
  },
  {
    "country": "BE",
    "name": "Sint-Andries",
    "lat": "51.19696",
    "lng": "3.17891"
  },
  {
    "country": "BE",
    "name": "Sint-Amandsberg",
    "lat": "51.05947",
    "lng": "3.74943"
  },
  {
    "country": "BE",
    "name": "Sint-Amands",
    "lat": "51.05645",
    "lng": "4.20957"
  },
  {
    "country": "BE",
    "name": "Sint-Agatha-Rode",
    "lat": "50.78597",
    "lng": "4.63099"
  },
  {
    "country": "BE",
    "name": "Sinaai",
    "lat": "51.15789",
    "lng": "4.04087"
  },
  {
    "country": "BE",
    "name": "Silly",
    "lat": "50.64877",
    "lng": "3.92363"
  },
  {
    "country": "BE",
    "name": "Sijsele",
    "lat": "51.20846",
    "lng": "3.31714"
  },
  {
    "country": "BE",
    "name": "Sibret",
    "lat": "49.97073",
    "lng": "5.63453"
  },
  {
    "country": "BE",
    "name": "'s-Gravenwezel",
    "lat": "51.26267",
    "lng": "4.56113"
  },
  {
    "country": "BE",
    "name": "Serskamp",
    "lat": "50.98849",
    "lng": "3.92657"
  },
  {
    "country": "BE",
    "name": "Serinchamps",
    "lat": "50.23134",
    "lng": "5.23018"
  },
  {
    "country": "BE",
    "name": "Seraing",
    "lat": "50.58362",
    "lng": "5.50115"
  },
  {
    "country": "BE",
    "name": "Seneffe",
    "lat": "50.53135",
    "lng": "4.26301"
  },
  {
    "country": "BE",
    "name": "Semmerzake",
    "lat": "50.94369",
    "lng": "3.66318"
  },
  {
    "country": "BE",
    "name": "Seloignes",
    "lat": "50.01515",
    "lng": "4.25517"
  },
  {
    "country": "BE",
    "name": "Seilles",
    "lat": "50.50065",
    "lng": "5.09268"
  },
  {
    "country": "BE",
    "name": "Sclayn",
    "lat": "50.48979",
    "lng": "5.02831"
  },
  {
    "country": "BE",
    "name": "Schulen",
    "lat": "50.95972",
    "lng": "5.1901"
  },
  {
    "country": "BE",
    "name": "Schuiferskapelle",
    "lat": "51.03244",
    "lng": "3.33799"
  },
  {
    "country": "BE",
    "name": "Schriek",
    "lat": "51.02844",
    "lng": "4.69357"
  },
  {
    "country": "BE",
    "name": "Schoten",
    "lat": "51.25251",
    "lng": "4.50268"
  },
  {
    "country": "BE",
    "name": "Schorisse",
    "lat": "50.80309",
    "lng": "3.67632"
  },
  {
    "country": "BE",
    "name": "Schoonaarde",
    "lat": "51.00387",
    "lng": "4.0152"
  },
  {
    "country": "BE",
    "name": "Schilde",
    "lat": "51.24107",
    "lng": "4.58336"
  },
  {
    "country": "BE",
    "name": "Scherpenheuvel",
    "lat": "50.98075",
    "lng": "4.97552"
  },
  {
    "country": "BE",
    "name": "Schepdaal",
    "lat": "50.83836",
    "lng": "4.19609"
  },
  {
    "country": "BE",
    "name": "Schendelbeke",
    "lat": "50.79872",
    "lng": "3.89882"
  },
  {
    "country": "BE",
    "name": "Schellebelle",
    "lat": "51.01136",
    "lng": "3.92843"
  },
  {
    "country": "BE",
    "name": "Schelle",
    "lat": "51.12615",
    "lng": "4.34114"
  },
  {
    "country": "BE",
    "name": "Scheldewindeke",
    "lat": "50.93436",
    "lng": "3.78663"
  },
  {
    "country": "BE",
    "name": "Schelderode",
    "lat": "50.96922",
    "lng": "3.7133"
  },
  {
    "country": "BE",
    "name": "Schaltin",
    "lat": "50.35952",
    "lng": "5.12535"
  },
  {
    "country": "BE",
    "name": "Schaffen",
    "lat": "50.99993",
    "lng": "5.08667"
  },
  {
    "country": "BE",
    "name": "Schaerbeek",
    "lat": "50.86935",
    "lng": "4.37737"
  },
  {
    "country": "BE",
    "name": "Sauvenière",
    "lat": "50.58157",
    "lng": "4.72466"
  },
  {
    "country": "BE",
    "name": "Sart-Saint-Laurent",
    "lat": "50.40236",
    "lng": "4.74217"
  },
  {
    "country": "BE",
    "name": "Sart-Dames-Avelines",
    "lat": "50.56863",
    "lng": "4.49221"
  },
  {
    "country": "BE",
    "name": "Sart-Bernard",
    "lat": "50.40206",
    "lng": "4.9593"
  },
  {
    "country": "BE",
    "name": "Saive",
    "lat": "50.65316",
    "lng": "5.68517"
  },
  {
    "country": "BE",
    "name": "Saint-Yvon",
    "lat": "50.74335",
    "lng": "2.90992"
  },
  {
    "country": "BE",
    "name": "Saint-Vith",
    "lat": "50.28146",
    "lng": "6.12724"
  },
  {
    "country": "BE",
    "name": "Saint-Vaast",
    "lat": "50.45426",
    "lng": "4.16041"
  },
  {
    "country": "BE",
    "name": "Saint-Symphorien",
    "lat": "50.43903",
    "lng": "4.00726"
  },
  {
    "country": "BE",
    "name": "Saint-Servais",
    "lat": "50.4763",
    "lng": "4.83656"
  },
  {
    "country": "BE",
    "name": "Saint-Sauveur",
    "lat": "50.70604",
    "lng": "3.59782"
  },
  {
    "country": "BE",
    "name": "Saint-Remy",
    "lat": "50.69564",
    "lng": "5.70405"
  },
  {
    "country": "BE",
    "name": "Saint-Pierre",
    "lat": "49.90376",
    "lng": "5.3875"
  },
  {
    "country": "BE",
    "name": "Saint-Nicolas",
    "lat": "50.62837",
    "lng": "5.53243"
  },
  {
    "country": "BE",
    "name": "Saint-Mard",
    "lat": "49.55403",
    "lng": "5.53427"
  },
  {
    "country": "BE",
    "name": "Saint-Marc",
    "lat": "50.49218",
    "lng": "4.84749"
  },
  {
    "country": "BE",
    "name": "Saint-Léger",
    "lat": "49.61196",
    "lng": "5.65688"
  },
  {
    "country": "BE",
    "name": "Saint-Josse-ten-Noode",
    "lat": "50.8538",
    "lng": "4.37282"
  },
  {
    "country": "BE",
    "name": "Saint-Hubert",
    "lat": "50.02668",
    "lng": "5.37401"
  },
  {
    "country": "BE",
    "name": "Saint-Gilles",
    "lat": "50.82763",
    "lng": "4.34389"
  },
  {
    "country": "BE",
    "name": "Saint-Ghislain",
    "lat": "50.44816",
    "lng": "3.81886"
  },
  {
    "country": "BE",
    "name": "Saint-Gérard",
    "lat": "50.34645",
    "lng": "4.74098"
  },
  {
    "country": "BE",
    "name": "Saint-Georges-sur-Meuse",
    "lat": "50.60007",
    "lng": "5.3574"
  },
  {
    "country": "BE",
    "name": "Saintes",
    "lat": "50.70499",
    "lng": "4.16006"
  },
  {
    "country": "BE",
    "name": "Sainte-Ode",
    "lat": "50.01723",
    "lng": "5.51926"
  },
  {
    "country": "BE",
    "name": "Sainte-Marie-sur-Semois",
    "lat": "49.67124",
    "lng": "5.5638"
  },
  {
    "country": "BE",
    "name": "Saint-Denis",
    "lat": "50.53567",
    "lng": "4.78278"
  },
  {
    "country": "BE",
    "name": "Saint-Denis",
    "lat": "50.4905",
    "lng": "4.02048"
  },
  {
    "country": "BE",
    "name": "Saint-Amand",
    "lat": "50.50611",
    "lng": "4.54988"
  },
  {
    "country": "BE",
    "name": "Rupelmonde",
    "lat": "51.12931",
    "lng": "4.29434"
  },
  {
    "country": "BE",
    "name": "Rumst",
    "lat": "51.08153",
    "lng": "4.42217"
  },
  {
    "country": "BE",
    "name": "Rummen",
    "lat": "50.88912",
    "lng": "5.16521"
  },
  {
    "country": "BE",
    "name": "Rumillies",
    "lat": "50.62105",
    "lng": "3.44325"
  },
  {
    "country": "BE",
    "name": "Rumes",
    "lat": "50.5545",
    "lng": "3.30535"
  },
  {
    "country": "BE",
    "name": "Rumbeke",
    "lat": "50.93248",
    "lng": "3.16716"
  },
  {
    "country": "BE",
    "name": "Rulles",
    "lat": "49.71805",
    "lng": "5.55959"
  },
  {
    "country": "BE",
    "name": "Ruiselede",
    "lat": "51.04039",
    "lng": "3.39416"
  },
  {
    "country": "BE",
    "name": "Ruisbroek",
    "lat": "51.08832",
    "lng": "4.33127"
  },
  {
    "country": "BE",
    "name": "Ruisbroek",
    "lat": "50.79015",
    "lng": "4.29771"
  },
  {
    "country": "BE",
    "name": "Ruien",
    "lat": "50.76865",
    "lng": "3.48581"
  },
  {
    "country": "BE",
    "name": "Ruddervoorde",
    "lat": "51.09589",
    "lng": "3.20743"
  },
  {
    "country": "BE",
    "name": "Roux",
    "lat": "50.44111",
    "lng": "4.3917"
  },
  {
    "country": "BE",
    "name": "Rouvroy",
    "lat": "49.53771",
    "lng": "5.49031"
  },
  {
    "country": "BE",
    "name": "Rouvreux",
    "lat": "50.48984",
    "lng": "5.65006"
  },
  {
    "country": "BE",
    "name": "Rotselaar",
    "lat": "50.95302",
    "lng": "4.71665"
  },
  {
    "country": "BE",
    "name": "Rotheux-Rimière",
    "lat": "50.53356",
    "lng": "5.48063"
  },
  {
    "country": "BE",
    "name": "Rotem",
    "lat": "51.05289",
    "lng": "5.74096"
  },
  {
    "country": "BE",
    "name": "Rosières",
    "lat": "50.73097",
    "lng": "4.54473"
  },
  {
    "country": "BE",
    "name": "Roselies",
    "lat": "50.43028",
    "lng": "4.57203"
  },
  {
    "country": "BE",
    "name": "Roosbeek",
    "lat": "50.83608",
    "lng": "4.86282"
  },
  {
    "country": "BE",
    "name": "Ronse",
    "lat": "50.74574",
    "lng": "3.6005"
  },
  {
    "country": "BE",
    "name": "Ronquières",
    "lat": "50.60853",
    "lng": "4.22081"
  },
  {
    "country": "BE",
    "name": "Rongy",
    "lat": "50.50724",
    "lng": "3.3895"
  },
  {
    "country": "BE",
    "name": "Romsée",
    "lat": "50.61091",
    "lng": "5.66457"
  },
  {
    "country": "BE",
    "name": "Rollegem-Kapelle",
    "lat": "50.8687",
    "lng": "3.14635"
  },
  {
    "country": "BE",
    "name": "Rollegem",
    "lat": "50.76565",
    "lng": "3.26317"
  },
  {
    "country": "BE",
    "name": "Roksem",
    "lat": "51.16885",
    "lng": "3.0329"
  },
  {
    "country": "BE",
    "name": "Roisin",
    "lat": "50.33237",
    "lng": "3.69553"
  },
  {
    "country": "BE",
    "name": "Le Roeulx",
    "lat": "50.50365",
    "lng": "4.11163"
  },
  {
    "country": "BE",
    "name": "Roeselare",
    "lat": "50.94653",
    "lng": "3.12269"
  },
  {
    "country": "BE",
    "name": "Roesbrugge-Haringe",
    "lat": "50.9181",
    "lng": "2.62538"
  },
  {
    "country": "BE",
    "name": "Rocourt",
    "lat": "50.67579",
    "lng": "5.54621"
  },
  {
    "country": "BE",
    "name": "Roclenge-sur-Geer",
    "lat": "50.75688",
    "lng": "5.59444"
  },
  {
    "country": "BE",
    "name": "Rocherath",
    "lat": "50.43706",
    "lng": "6.30049"
  },
  {
    "country": "BE",
    "name": "Rochefort",
    "lat": "50.1631",
    "lng": "5.2216"
  },
  {
    "country": "BE",
    "name": "Robertville",
    "lat": "50.45406",
    "lng": "6.12205"
  },
  {
    "country": "BE",
    "name": "Rixensart",
    "lat": "50.71229",
    "lng": "4.52529"
  },
  {
    "country": "BE",
    "name": "Rillaar",
    "lat": "50.97376",
    "lng": "4.89177"
  },
  {
    "country": "BE",
    "name": "Rijmenam",
    "lat": "51.0016",
    "lng": "4.58405"
  },
  {
    "country": "BE",
    "name": "Rijkhoven",
    "lat": "50.83294",
    "lng": "5.51497"
  },
  {
    "country": "BE",
    "name": "Rijkevorsel",
    "lat": "51.34795",
    "lng": "4.76053"
  },
  {
    "country": "BE",
    "name": "Riemst",
    "lat": "50.80995",
    "lng": "5.60131"
  },
  {
    "country": "BE",
    "name": "Richelle",
    "lat": "50.71396",
    "lng": "5.69564"
  },
  {
    "country": "BE",
    "name": "Rhisnes",
    "lat": "50.50682",
    "lng": "4.80592"
  },
  {
    "country": "BE",
    "name": "Rèves",
    "lat": "50.53809",
    "lng": "4.41075"
  },
  {
    "country": "BE",
    "name": "Retinne",
    "lat": "50.63084",
    "lng": "5.69821"
  },
  {
    "country": "BE",
    "name": "Retie",
    "lat": "51.26652",
    "lng": "5.08242"
  },
  {
    "country": "BE",
    "name": "Ressegem",
    "lat": "50.89115",
    "lng": "3.91129"
  },
  {
    "country": "BE",
    "name": "Ressaix",
    "lat": "50.42285",
    "lng": "4.19442"
  },
  {
    "country": "BE",
    "name": "Reppel",
    "lat": "51.15405",
    "lng": "5.5624"
  },
  {
    "country": "BE",
    "name": "Reningelst",
    "lat": "50.81514",
    "lng": "2.77066"
  },
  {
    "country": "BE",
    "name": "Reninge",
    "lat": "50.94781",
    "lng": "2.78892"
  },
  {
    "country": "BE",
    "name": "Rendeux",
    "lat": "50.23423",
    "lng": "5.50414"
  },
  {
    "country": "BE",
    "name": "Remicourt",
    "lat": "50.68069",
    "lng": "5.32785"
  },
  {
    "country": "BE",
    "name": "Relegem",
    "lat": "50.89908",
    "lng": "4.27694"
  },
  {
    "country": "BE",
    "name": "Rekkem",
    "lat": "50.7837",
    "lng": "3.16346"
  },
  {
    "country": "BE",
    "name": "Rekem",
    "lat": "50.92244",
    "lng": "5.6938"
  },
  {
    "country": "BE",
    "name": "Reet",
    "lat": "51.10201",
    "lng": "4.41264"
  },
  {
    "country": "BE",
    "name": "Recogne",
    "lat": "49.91232",
    "lng": "5.3537"
  },
  {
    "country": "BE",
    "name": "Recht",
    "lat": "50.33801",
    "lng": "6.04883"
  },
  {
    "country": "BE",
    "name": "Rebecq-Rognon",
    "lat": "50.65147",
    "lng": "4.10683"
  },
  {
    "country": "BE",
    "name": "Ravels",
    "lat": "51.37274",
    "lng": "4.9921"
  },
  {
    "country": "BE",
    "name": "Ranst",
    "lat": "51.18983",
    "lng": "4.56533"
  },
  {
    "country": "BE",
    "name": "Ransart",
    "lat": "50.46166",
    "lng": "4.47616"
  },
  {
    "country": "BE",
    "name": "Rance",
    "lat": "50.14248",
    "lng": "4.27917"
  },
  {
    "country": "BE",
    "name": "Ramsel",
    "lat": "51.0324",
    "lng": "4.83242"
  },
  {
    "country": "BE",
    "name": "Ramsdonk",
    "lat": "51.015",
    "lng": "4.33522"
  },
  {
    "country": "BE",
    "name": "Ramillies",
    "lat": "50.63395",
    "lng": "4.90119"
  },
  {
    "country": "BE",
    "name": "Raeren",
    "lat": "50.6672",
    "lng": "6.11535"
  },
  {
    "country": "BE",
    "name": "Racour",
    "lat": "50.73924",
    "lng": "5.02806"
  },
  {
    "country": "BE",
    "name": "Quiévrain",
    "lat": "50.40737",
    "lng": "3.68351"
  },
  {
    "country": "BE",
    "name": "Quévy-le-Petit",
    "lat": "50.36879",
    "lng": "3.93602"
  },
  {
    "country": "BE",
    "name": "Quevaucamps",
    "lat": "50.51888",
    "lng": "3.68128"
  },
  {
    "country": "BE",
    "name": "Queue-du-Bois",
    "lat": "50.63759",
    "lng": "5.67993"
  },
  {
    "country": "BE",
    "name": "Quenast",
    "lat": "50.66959",
    "lng": "4.15661"
  },
  {
    "country": "BE",
    "name": "Quaregnon",
    "lat": "50.44067",
    "lng": "3.8653"
  },
  {
    "country": "BE",
    "name": "Puurs",
    "lat": "51.07409",
    "lng": "4.28844"
  },
  {
    "country": "BE",
    "name": "Putte",
    "lat": "51.05337",
    "lng": "4.63263"
  },
  {
    "country": "BE",
    "name": "Pulle",
    "lat": "51.20317",
    "lng": "4.71434"
  },
  {
    "country": "BE",
    "name": "Pulderbos",
    "lat": "51.2171",
    "lng": "4.69357"
  },
  {
    "country": "BE",
    "name": "Proven",
    "lat": "50.88976",
    "lng": "2.65721"
  },
  {
    "country": "BE",
    "name": "Profondeville",
    "lat": "50.37581",
    "lng": "4.86506"
  },
  {
    "country": "BE",
    "name": "Presles",
    "lat": "50.38417",
    "lng": "4.57838"
  },
  {
    "country": "BE",
    "name": "Prayon",
    "lat": "50.57795",
    "lng": "5.6753"
  },
  {
    "country": "BE",
    "name": "Poulseur",
    "lat": "50.50907",
    "lng": "5.57864"
  },
  {
    "country": "BE",
    "name": "Pottes",
    "lat": "50.73294",
    "lng": "3.40703"
  },
  {
    "country": "BE",
    "name": "Poppel",
    "lat": "51.44565",
    "lng": "5.0433"
  },
  {
    "country": "BE",
    "name": "Poperinge",
    "lat": "50.85386",
    "lng": "2.72659"
  },
  {
    "country": "BE",
    "name": "Pont-de-Loup",
    "lat": "50.41656",
    "lng": "4.54594"
  },
  {
    "country": "BE",
    "name": "Pont-à-Celles",
    "lat": "50.50518",
    "lng": "4.36887"
  },
  {
    "country": "BE",
    "name": "Pondrôme",
    "lat": "50.09922",
    "lng": "5.00959"
  },
  {
    "country": "BE",
    "name": "Pommeroeul",
    "lat": "50.46188",
    "lng": "3.71252"
  },
  {
    "country": "BE",
    "name": "Polleur",
    "lat": "50.5394",
    "lng": "5.88078"
  },
  {
    "country": "BE",
    "name": "Pollare",
    "lat": "50.81713",
    "lng": "4.006"
  },
  {
    "country": "BE",
    "name": "Poelkapelle",
    "lat": "50.9179",
    "lng": "2.95677"
  },
  {
    "country": "BE",
    "name": "Poederlee",
    "lat": "51.22769",
    "lng": "4.84034"
  },
  {
    "country": "BE",
    "name": "Plombières",
    "lat": "50.73656",
    "lng": "5.95922"
  },
  {
    "country": "BE",
    "name": "Ploegsteert",
    "lat": "50.72659",
    "lng": "2.88019"
  },
  {
    "country": "BE",
    "name": "Plancenoit",
    "lat": "50.66228",
    "lng": "4.42835"
  },
  {
    "country": "BE",
    "name": "Plainevaux",
    "lat": "50.54562",
    "lng": "5.52329"
  },
  {
    "country": "BE",
    "name": "Pittem",
    "lat": "50.99279",
    "lng": "3.26317"
  },
  {
    "country": "BE",
    "name": "Pironchamps",
    "lat": "50.43181",
    "lng": "4.52019"
  },
  {
    "country": "BE",
    "name": "Pipaix",
    "lat": "50.58297",
    "lng": "3.57956"
  },
  {
    "country": "BE",
    "name": "Piétrebais",
    "lat": "50.72776",
    "lng": "4.76455"
  },
  {
    "country": "BE",
    "name": "Piétrain",
    "lat": "50.72532",
    "lng": "4.92033"
  },
  {
    "country": "BE",
    "name": "Piéton",
    "lat": "50.43972",
    "lng": "4.29752"
  },
  {
    "country": "BE",
    "name": "Philippeville",
    "lat": "50.19612",
    "lng": "4.54374"
  },
  {
    "country": "BE",
    "name": "Peutie",
    "lat": "50.92998",
    "lng": "4.45187"
  },
  {
    "country": "BE",
    "name": "Petit-Rechain",
    "lat": "50.61489",
    "lng": "5.83417"
  },
  {
    "country": "BE",
    "name": "Lettelingen",
    "lat": "50.68333",
    "lng": "4.08333"
  },
  {
    "country": "BE",
    "name": "Petigny",
    "lat": "50.05739",
    "lng": "4.53307"
  },
  {
    "country": "BE",
    "name": "Petegem-aan-de-Leie",
    "lat": "50.96667",
    "lng": "3.53333"
  },
  {
    "country": "BE",
    "name": "Petegem",
    "lat": "50.83333",
    "lng": "3.55"
  },
  {
    "country": "BE",
    "name": "Perwez",
    "lat": "50.62426",
    "lng": "4.81354"
  },
  {
    "country": "BE",
    "name": "Péruwelz",
    "lat": "50.50819",
    "lng": "3.59373"
  },
  {
    "country": "BE",
    "name": "Perre",
    "lat": "50.88914",
    "lng": "3.86098"
  },
  {
    "country": "BE",
    "name": "Péronnes",
    "lat": "50.55156",
    "lng": "3.45374"
  },
  {
    "country": "BE",
    "name": "Péronnes",
    "lat": "50.43782",
    "lng": "4.14906"
  },
  {
    "country": "BE",
    "name": "Perk",
    "lat": "50.93571",
    "lng": "4.49615"
  },
  {
    "country": "BE",
    "name": "Pepinster",
    "lat": "50.56568",
    "lng": "5.80386"
  },
  {
    "country": "BE",
    "name": "Pellenberg",
    "lat": "50.87245",
    "lng": "4.79394"
  },
  {
    "country": "BE",
    "name": "Peer",
    "lat": "51.1303",
    "lng": "5.45952"
  },
  {
    "country": "BE",
    "name": "Pecq",
    "lat": "50.68619",
    "lng": "3.33789"
  },
  {
    "country": "BE",
    "name": "Pâturages",
    "lat": "50.4072",
    "lng": "3.855"
  },
  {
    "country": "BE",
    "name": "Passendale",
    "lat": "50.89979",
    "lng": "3.02133"
  },
  {
    "country": "BE",
    "name": "Papignies",
    "lat": "50.68596",
    "lng": "3.81783"
  },
  {
    "country": "BE",
    "name": "Pamel",
    "lat": "50.8453",
    "lng": "4.07129"
  },
  {
    "country": "BE",
    "name": "Paliseul",
    "lat": "49.90395",
    "lng": "5.13537"
  },
  {
    "country": "BE",
    "name": "Paal",
    "lat": "51.03988",
    "lng": "5.17233"
  },
  {
    "country": "BE",
    "name": "Overpelt",
    "lat": "51.21038",
    "lng": "5.41557"
  },
  {
    "country": "BE",
    "name": "Overmere",
    "lat": "51.04691",
    "lng": "3.9466"
  },
  {
    "country": "BE",
    "name": "Overijse",
    "lat": "50.77436",
    "lng": "4.53461"
  },
  {
    "country": "BE",
    "name": "Overboelare",
    "lat": "50.76382",
    "lng": "3.86369"
  },
  {
    "country": "BE",
    "name": "Ouwegem",
    "lat": "50.91231",
    "lng": "3.59978"
  },
  {
    "country": "BE",
    "name": "Outrijve",
    "lat": "50.75773",
    "lng": "3.42964"
  },
  {
    "country": "BE",
    "name": "Outer",
    "lat": "50.84189",
    "lng": "3.9987"
  },
  {
    "country": "BE",
    "name": "Oupeye",
    "lat": "50.71184",
    "lng": "5.6468"
  },
  {
    "country": "BE",
    "name": "Ougrée",
    "lat": "50.60149",
    "lng": "5.5444"
  },
  {
    "country": "BE",
    "name": "Ouffet",
    "lat": "50.4387",
    "lng": "5.4657"
  },
  {
    "country": "BE",
    "name": "Oud-Turnhout",
    "lat": "51.31978",
    "lng": "4.9841"
  },
  {
    "country": "BE",
    "name": "Oud-Heverlee",
    "lat": "50.83522",
    "lng": "4.66421"
  },
  {
    "country": "BE",
    "name": "Oudenburg",
    "lat": "51.18489",
    "lng": "3.00035"
  },
  {
    "country": "BE",
    "name": "Oudenaarde",
    "lat": "50.85168",
    "lng": "3.60891"
  },
  {
    "country": "BE",
    "name": "Oudegem",
    "lat": "51.01017",
    "lng": "4.06195"
  },
  {
    "country": "BE",
    "name": "Ottignies",
    "lat": "50.66535",
    "lng": "4.56679"
  },
  {
    "country": "BE",
    "name": "Ottenburg",
    "lat": "50.75161",
    "lng": "4.6164"
  },
  {
    "country": "BE",
    "name": "Othée",
    "lat": "50.71592",
    "lng": "5.46724"
  },
  {
    "country": "BE",
    "name": "Otegem",
    "lat": "50.80693",
    "lng": "3.42043"
  },
  {
    "country": "BE",
    "name": "Orp-le-Grand",
    "lat": "50.70331",
    "lng": "4.9891"
  },
  {
    "country": "BE",
    "name": "Ormeignies",
    "lat": "50.59501",
    "lng": "3.75183"
  },
  {
    "country": "BE",
    "name": "Orgeo",
    "lat": "49.8339",
    "lng": "5.30646"
  },
  {
    "country": "BE",
    "name": "Oreye",
    "lat": "50.73187",
    "lng": "5.35818"
  },
  {
    "country": "BE",
    "name": "Orcq",
    "lat": "50.60322",
    "lng": "3.34924"
  },
  {
    "country": "BE",
    "name": "Orbais",
    "lat": "50.63798",
    "lng": "4.76352"
  },
  {
    "country": "BE",
    "name": "Opwijk",
    "lat": "50.96724",
    "lng": "4.18442"
  },
  {
    "country": "BE",
    "name": "Opvelp",
    "lat": "50.81017",
    "lng": "4.79347"
  },
  {
    "country": "BE",
    "name": "Oppuurs",
    "lat": "51.06629",
    "lng": "4.24222"
  },
  {
    "country": "BE",
    "name": "Opprebais",
    "lat": "50.67998",
    "lng": "4.79785"
  },
  {
    "country": "BE",
    "name": "Opoeteren",
    "lat": "51.06923",
    "lng": "5.65556"
  },
  {
    "country": "BE",
    "name": "Oplinter",
    "lat": "50.83023",
    "lng": "4.99002"
  },
  {
    "country": "BE",
    "name": "Opitter",
    "lat": "51.11705",
    "lng": "5.64749"
  },
  {
    "country": "BE",
    "name": "Ophoven",
    "lat": "51.12571",
    "lng": "5.80155"
  },
  {
    "country": "BE",
    "name": "Ophasselt",
    "lat": "50.81729",
    "lng": "3.89293"
  },
  {
    "country": "BE",
    "name": "Ophain-Bois-Seigneur-Isaac",
    "lat": "50.66646",
    "lng": "4.34865"
  },
  {
    "country": "BE",
    "name": "Opgrimbie",
    "lat": "50.94188",
    "lng": "5.67967"
  },
  {
    "country": "BE",
    "name": "Opglabbeek",
    "lat": "51.04258",
    "lng": "5.58346"
  },
  {
    "country": "BE",
    "name": "Opdorp",
    "lat": "51.02806",
    "lng": "4.21801"
  },
  {
    "country": "BE",
    "name": "Opbrakel",
    "lat": "50.79201",
    "lng": "3.74862"
  },
  {
    "country": "BE",
    "name": "Oostvleteren",
    "lat": "50.93319",
    "lng": "2.74119"
  },
  {
    "country": "BE",
    "name": "Oostrozebeke",
    "lat": "50.92093",
    "lng": "3.33799"
  },
  {
    "country": "BE",
    "name": "Oostnieuwkerke",
    "lat": "50.93959",
    "lng": "3.05742"
  },
  {
    "country": "BE",
    "name": "Oostmalle",
    "lat": "51.3",
    "lng": "4.73333"
  },
  {
    "country": "BE",
    "name": "Oostkamp",
    "lat": "51.15432",
    "lng": "3.23128"
  },
  {
    "country": "BE",
    "name": "Oostham",
    "lat": "51.10374",
    "lng": "5.17877"
  },
  {
    "country": "BE",
    "name": "Oosterzele",
    "lat": "50.95261",
    "lng": "3.79826"
  },
  {
    "country": "BE",
    "name": "Ostend",
    "lat": "51.21551",
    "lng": "2.927"
  },
  {
    "country": "BE",
    "name": "Oosteeklo",
    "lat": "51.19302",
    "lng": "3.68928"
  },
  {
    "country": "BE",
    "name": "Oostduinkerke",
    "lat": "51.11565",
    "lng": "2.68217"
  },
  {
    "country": "BE",
    "name": "Oostakker",
    "lat": "51.10124",
    "lng": "3.76945"
  },
  {
    "country": "BE",
    "name": "Oordegem",
    "lat": "50.95727",
    "lng": "3.90201"
  },
  {
    "country": "BE",
    "name": "Oorbeek",
    "lat": "50.7991",
    "lng": "4.89235"
  },
  {
    "country": "BE",
    "name": "Ooigem",
    "lat": "50.89334",
    "lng": "3.3363"
  },
  {
    "country": "BE",
    "name": "Onze-Lieve-Vrouw-Waver",
    "lat": "51.06265",
    "lng": "4.57941"
  },
  {
    "country": "BE",
    "name": "Onkerzele",
    "lat": "50.78212",
    "lng": "3.91145"
  },
  {
    "country": "BE",
    "name": "Onhaye",
    "lat": "50.24148",
    "lng": "4.84069"
  },
  {
    "country": "BE",
    "name": "On",
    "lat": "50.17176",
    "lng": "5.28936"
  },
  {
    "country": "BE",
    "name": "Olsene",
    "lat": "50.93422",
    "lng": "3.46389"
  },
  {
    "country": "BE",
    "name": "Olne",
    "lat": "50.58994",
    "lng": "5.74662"
  },
  {
    "country": "BE",
    "name": "Olmen",
    "lat": "51.14228",
    "lng": "5.14999"
  },
  {
    "country": "BE",
    "name": "Ollignies",
    "lat": "50.68794",
    "lng": "3.86229"
  },
  {
    "country": "BE",
    "name": "Oleye",
    "lat": "50.71396",
    "lng": "5.28133"
  },
  {
    "country": "BE",
    "name": "Olen",
    "lat": "51.14391",
    "lng": "4.8598"
  },
  {
    "country": "BE",
    "name": "Okegem",
    "lat": "50.85559",
    "lng": "4.05516"
  },
  {
    "country": "BE",
    "name": "Oisquercq",
    "lat": "50.67015",
    "lng": "4.21984"
  },
  {
    "country": "BE",
    "name": "Ohey",
    "lat": "50.4357",
    "lng": "5.12375"
  },
  {
    "country": "BE",
    "name": "Ohain",
    "lat": "50.69885",
    "lng": "4.4698"
  },
  {
    "country": "BE",
    "name": "Oevel",
    "lat": "51.13789",
    "lng": "4.90471"
  },
  {
    "country": "BE",
    "name": "Oetingen",
    "lat": "50.77318",
    "lng": "4.0635"
  },
  {
    "country": "BE",
    "name": "Oeselgem",
    "lat": "50.93789",
    "lng": "3.43185"
  },
  {
    "country": "BE",
    "name": "Oelegem",
    "lat": "51.2131",
    "lng": "4.59832"
  },
  {
    "country": "BE",
    "name": "Oekene",
    "lat": "50.91794",
    "lng": "3.15676"
  },
  {
    "country": "BE",
    "name": "Oedelem",
    "lat": "51.17033",
    "lng": "3.33762"
  },
  {
    "country": "BE",
    "name": "Odeur",
    "lat": "50.70642",
    "lng": "5.41578"
  },
  {
    "country": "BE",
    "name": "Ochamps",
    "lat": "49.92453",
    "lng": "5.27679"
  },
  {
    "country": "BE",
    "name": "Obourg",
    "lat": "50.47384",
    "lng": "4.00881"
  },
  {
    "country": "BE",
    "name": "Obaix",
    "lat": "50.52996",
    "lng": "4.36089"
  },
  {
    "country": "BE",
    "name": "Nukerke",
    "lat": "50.79564",
    "lng": "3.59492"
  },
  {
    "country": "BE",
    "name": "Noville-les-Bois",
    "lat": "50.55702",
    "lng": "4.98466"
  },
  {
    "country": "BE",
    "name": "Noville",
    "lat": "50.65984",
    "lng": "5.38197"
  },
  {
    "country": "BE",
    "name": "Noville",
    "lat": "50.06386",
    "lng": "5.76104"
  },
  {
    "country": "BE",
    "name": "Nossegem",
    "lat": "50.88181",
    "lng": "4.50817"
  },
  {
    "country": "BE",
    "name": "Noorderwijk",
    "lat": "51.14122",
    "lng": "4.84061"
  },
  {
    "country": "BE",
    "name": "Noiseux",
    "lat": "50.29976",
    "lng": "5.37506"
  },
  {
    "country": "BE",
    "name": "Noduwez",
    "lat": "50.72863",
    "lng": "4.96779"
  },
  {
    "country": "BE",
    "name": "Nobressart",
    "lat": "49.73895",
    "lng": "5.72012"
  },
  {
    "country": "BE",
    "name": "Nivelles",
    "lat": "50.59833",
    "lng": "4.32848"
  },
  {
    "country": "BE",
    "name": "Nismes",
    "lat": "50.07523",
    "lng": "4.54767"
  },
  {
    "country": "BE",
    "name": "Ninove",
    "lat": "50.82776",
    "lng": "4.02657"
  },
  {
    "country": "BE",
    "name": "Nimy",
    "lat": "50.47668",
    "lng": "3.95516"
  },
  {
    "country": "BE",
    "name": "Nil-Saint-Vincent-Saint-Martin",
    "lat": "50.64331",
    "lng": "4.68172"
  },
  {
    "country": "BE",
    "name": "Nijlen",
    "lat": "51.16096",
    "lng": "4.67008"
  },
  {
    "country": "BE",
    "name": "Nieuwrode",
    "lat": "50.95",
    "lng": "4.83333"
  },
  {
    "country": "BE",
    "name": "Nieuwpoort",
    "lat": "51.13008",
    "lng": "2.75135"
  },
  {
    "country": "BE",
    "name": "Nieuwkerken-Waas",
    "lat": "51.19358",
    "lng": "4.17776"
  },
  {
    "country": "BE",
    "name": "Nieuwkerke",
    "lat": "50.74709",
    "lng": "2.8286"
  },
  {
    "country": "BE",
    "name": "Nieuwerkerken",
    "lat": "50.92386",
    "lng": "4.00433"
  },
  {
    "country": "BE",
    "name": "Nieuwerkerken",
    "lat": "50.8638",
    "lng": "5.19467"
  },
  {
    "country": "BE",
    "name": "Nieuwenrode",
    "lat": "50.97961",
    "lng": "4.35282"
  },
  {
    "country": "BE",
    "name": "Niel-bij-As",
    "lat": "51.01851",
    "lng": "5.60526"
  },
  {
    "country": "BE",
    "name": "Niel",
    "lat": "51.11096",
    "lng": "4.33428"
  },
  {
    "country": "BE",
    "name": "Nevele",
    "lat": "51.03531",
    "lng": "3.54574"
  },
  {
    "country": "BE",
    "name": "Neuville-en-Condroz",
    "lat": "50.55293",
    "lng": "5.45076"
  },
  {
    "country": "BE",
    "name": "Neuville",
    "lat": "50.17327",
    "lng": "4.51598"
  },
  {
    "country": "BE",
    "name": "Neu-Moresnet",
    "lat": "50.71575",
    "lng": "6.02119"
  },
  {
    "country": "BE",
    "name": "Neufvilles",
    "lat": "50.57107",
    "lng": "4.00041"
  },
  {
    "country": "BE",
    "name": "Neufchâteau",
    "lat": "49.84074",
    "lng": "5.43535"
  },
  {
    "country": "BE",
    "name": "Nethen",
    "lat": "50.7832",
    "lng": "4.67503"
  },
  {
    "country": "BE",
    "name": "Neerwinden",
    "lat": "50.76756",
    "lng": "5.04021"
  },
  {
    "country": "BE",
    "name": "Neerpelt",
    "lat": "51.22807",
    "lng": "5.4427"
  },
  {
    "country": "BE",
    "name": "Neeroeteren",
    "lat": "51.09156",
    "lng": "5.69933"
  },
  {
    "country": "BE",
    "name": "Neerlinter",
    "lat": "50.83971",
    "lng": "5.02287"
  },
  {
    "country": "BE",
    "name": "Neerijse",
    "lat": "50.81722",
    "lng": "4.62361"
  },
  {
    "country": "BE",
    "name": "Neerheylissem",
    "lat": "50.75839",
    "lng": "4.9883"
  },
  {
    "country": "BE",
    "name": "Neerharen",
    "lat": "50.90964",
    "lng": "5.68027"
  },
  {
    "country": "BE",
    "name": "Nederokkerzeel",
    "lat": "50.91943",
    "lng": "4.56388"
  },
  {
    "country": "BE",
    "name": "Nederhasselt",
    "lat": "50.84646",
    "lng": "3.97497"
  },
  {
    "country": "BE",
    "name": "Brakel",
    "lat": "50.80101",
    "lng": "3.76264"
  },
  {
    "country": "BE",
    "name": "Nederboelare",
    "lat": "50.77596",
    "lng": "3.87148"
  },
  {
    "country": "BE",
    "name": "Néchin",
    "lat": "50.66702",
    "lng": "3.26649"
  },
  {
    "country": "BE",
    "name": "Nazareth",
    "lat": "50.95686",
    "lng": "3.59425"
  },
  {
    "country": "BE",
    "name": "Natoye",
    "lat": "50.34294",
    "lng": "5.058"
  },
  {
    "country": "BE",
    "name": "Nassogne",
    "lat": "50.12849",
    "lng": "5.34274"
  },
  {
    "country": "BE",
    "name": "Naninne",
    "lat": "50.41888",
    "lng": "4.92634"
  },
  {
    "country": "BE",
    "name": "Namur",
    "lat": "50.4669",
    "lng": "4.86746"
  },
  {
    "country": "BE",
    "name": "Namêche",
    "lat": "50.47239",
    "lng": "4.99756"
  },
  {
    "country": "BE",
    "name": "Nalinnes",
    "lat": "50.32434",
    "lng": "4.44572"
  },
  {
    "country": "BE",
    "name": "Naast",
    "lat": "50.55413",
    "lng": "4.10082"
  },
  {
    "country": "BE",
    "name": "Mussy-la-Ville",
    "lat": "49.57009",
    "lng": "5.66191"
  },
  {
    "country": "BE",
    "name": "Musson",
    "lat": "49.55835",
    "lng": "5.70525"
  },
  {
    "country": "BE",
    "name": "Munsterbilzen",
    "lat": "50.88939",
    "lng": "5.52647"
  },
  {
    "country": "BE",
    "name": "Munkzwalm",
    "lat": "50.87676",
    "lng": "3.73503"
  },
  {
    "country": "BE",
    "name": "Muizen",
    "lat": "51.01111",
    "lng": "4.51427"
  },
  {
    "country": "BE",
    "name": "Moustier-sur-Sambre",
    "lat": "50.46668",
    "lng": "4.69614"
  },
  {
    "country": "BE",
    "name": "Mouscron",
    "lat": "50.74497",
    "lng": "3.20639"
  },
  {
    "country": "BE",
    "name": "Mourcourt",
    "lat": "50.65322",
    "lng": "3.44468"
  },
  {
    "country": "BE",
    "name": "Mortsel",
    "lat": "51.16697",
    "lng": "4.45127"
  },
  {
    "country": "BE",
    "name": "Mortier",
    "lat": "50.68428",
    "lng": "5.74327"
  },
  {
    "country": "BE",
    "name": "Mornimont",
    "lat": "50.45903",
    "lng": "4.70447"
  },
  {
    "country": "BE",
    "name": "Morlanwelz-Mariemont",
    "lat": "50.45502",
    "lng": "4.24519"
  },
  {
    "country": "BE",
    "name": "Morkhoven",
    "lat": "51.11888",
    "lng": "4.81877"
  },
  {
    "country": "BE",
    "name": "Morialmé",
    "lat": "50.27557",
    "lng": "4.56576"
  },
  {
    "country": "BE",
    "name": "Moresnet",
    "lat": "50.72146",
    "lng": "5.98987"
  },
  {
    "country": "BE",
    "name": "Mopertingen",
    "lat": "50.86123",
    "lng": "5.5759"
  },
  {
    "country": "BE",
    "name": "Moortsele",
    "lat": "50.95862",
    "lng": "3.77753"
  },
  {
    "country": "BE",
    "name": "Moorslede",
    "lat": "50.8919",
    "lng": "3.06117"
  },
  {
    "country": "BE",
    "name": "Moorsele",
    "lat": "50.8409",
    "lng": "3.15971"
  },
  {
    "country": "BE",
    "name": "Moorsel",
    "lat": "50.94743",
    "lng": "4.09825"
  },
  {
    "country": "BE",
    "name": "Montzen",
    "lat": "50.70793",
    "lng": "5.96223"
  },
  {
    "country": "BE",
    "name": "Mont-sur-Marchienne",
    "lat": "50.38997",
    "lng": "4.40732"
  },
  {
    "country": "BE",
    "name": "Mont-Saint-Guibert",
    "lat": "50.63427",
    "lng": "4.61061"
  },
  {
    "country": "BE",
    "name": "Mont-Sainte-Aldegonde",
    "lat": "50.43006",
    "lng": "4.23263"
  },
  {
    "country": "BE",
    "name": "Montignies-sur-Sambre",
    "lat": "50.41081",
    "lng": "4.49109"
  },
  {
    "country": "BE",
    "name": "Montigny-le-Tilleul",
    "lat": "50.38056",
    "lng": "4.37582"
  },
  {
    "country": "BE",
    "name": "Montenaken",
    "lat": "50.72092",
    "lng": "5.12941"
  },
  {
    "country": "BE",
    "name": "Montegnée",
    "lat": "50.64576",
    "lng": "5.51411"
  },
  {
    "country": "BE",
    "name": "Mons-lez-Liège",
    "lat": "50.62306",
    "lng": "5.45626"
  },
  {
    "country": "BE",
    "name": "Mons",
    "lat": "50.45413",
    "lng": "3.95229"
  },
  {
    "country": "BE",
    "name": "Monceau-sur-Sambre",
    "lat": "50.41694",
    "lng": "4.37668"
  },
  {
    "country": "BE",
    "name": "Momignies",
    "lat": "50.0271",
    "lng": "4.16519"
  },
  {
    "country": "BE",
    "name": "Momalle",
    "lat": "50.68585",
    "lng": "5.37592"
  },
  {
    "country": "BE",
    "name": "Mollem",
    "lat": "50.93118",
    "lng": "4.22627"
  },
  {
    "country": "BE",
    "name": "Molenstede",
    "lat": "51.00401",
    "lng": "5.01298"
  },
  {
    "country": "BE",
    "name": "Molenbeersel",
    "lat": "51.17041",
    "lng": "5.73761"
  },
  {
    "country": "BE",
    "name": "Molenbeek-Wersbeek",
    "lat": "50.91947",
    "lng": "4.9476"
  },
  {
    "country": "BE",
    "name": "Molenbeek-Saint-Jean",
    "lat": "50.8499",
    "lng": "4.31248"
  },
  {
    "country": "BE",
    "name": "Mol",
    "lat": "51.19188",
    "lng": "5.11662"
  },
  {
    "country": "BE",
    "name": "Moignelée",
    "lat": "50.44581",
    "lng": "4.5837"
  },
  {
    "country": "BE",
    "name": "Moha",
    "lat": "50.54802",
    "lng": "5.18641"
  },
  {
    "country": "BE",
    "name": "Moerzeke",
    "lat": "51.06914",
    "lng": "4.16137"
  },
  {
    "country": "BE",
    "name": "Moerkerke",
    "lat": "51.24547",
    "lng": "3.34251"
  },
  {
    "country": "BE",
    "name": "Moere",
    "lat": "51.12263",
    "lng": "2.95582"
  },
  {
    "country": "BE",
    "name": "Moerbeke",
    "lat": "51.17409",
    "lng": "3.93001"
  },
  {
    "country": "BE",
    "name": "Moerbeke",
    "lat": "50.75254",
    "lng": "3.91724"
  },
  {
    "country": "BE",
    "name": "Moen",
    "lat": "50.77013",
    "lng": "3.39485"
  },
  {
    "country": "BE",
    "name": "Modave",
    "lat": "50.44614",
    "lng": "5.29532"
  },
  {
    "country": "BE",
    "name": "Minderhout",
    "lat": "51.41709",
    "lng": "4.76292"
  },
  {
    "country": "BE",
    "name": "Milmort",
    "lat": "50.69037",
    "lng": "5.59323"
  },
  {
    "country": "BE",
    "name": "Millen",
    "lat": "50.78619",
    "lng": "5.55616"
  },
  {
    "country": "BE",
    "name": "Mignault",
    "lat": "50.53016",
    "lng": "4.15758"
  },
  {
    "country": "BE",
    "name": "Mielen-boven-Aalst",
    "lat": "50.75644",
    "lng": "5.21421"
  },
  {
    "country": "BE",
    "name": "Middelkerke",
    "lat": "51.18532",
    "lng": "2.82077"
  },
  {
    "country": "BE",
    "name": "Micheroux",
    "lat": "50.62475",
    "lng": "5.71847"
  },
  {
    "country": "BE",
    "name": "Michelbeke",
    "lat": "50.8355",
    "lng": "3.76249"
  },
  {
    "country": "BE",
    "name": "Meyerode",
    "lat": "50.32818",
    "lng": "6.18776"
  },
  {
    "country": "BE",
    "name": "Meux",
    "lat": "50.55222",
    "lng": "4.80103"
  },
  {
    "country": "BE",
    "name": "Meulebeke",
    "lat": "50.95136",
    "lng": "3.28804"
  },
  {
    "country": "BE",
    "name": "Mettet",
    "lat": "50.32119",
    "lng": "4.66232"
  },
  {
    "country": "BE",
    "name": "Messelbroek",
    "lat": "50.9955",
    "lng": "4.93664"
  },
  {
    "country": "BE",
    "name": "Messancy",
    "lat": "49.59201",
    "lng": "5.81879"
  },
  {
    "country": "BE",
    "name": "Meslin-l'Évêque",
    "lat": "50.64859",
    "lng": "3.84736"
  },
  {
    "country": "BE",
    "name": "Merksplas",
    "lat": "51.35851",
    "lng": "4.86513"
  },
  {
    "country": "BE",
    "name": "Merksem",
    "lat": "51.24623",
    "lng": "4.44903"
  },
  {
    "country": "BE",
    "name": "Merkem",
    "lat": "50.95284",
    "lng": "2.85225"
  },
  {
    "country": "BE",
    "name": "Merendree",
    "lat": "51.0766",
    "lng": "3.576"
  },
  {
    "country": "BE",
    "name": "Merelbeke",
    "lat": "50.99447",
    "lng": "3.74621"
  },
  {
    "country": "BE",
    "name": "Mere",
    "lat": "50.92306",
    "lng": "3.97134"
  },
  {
    "country": "BE",
    "name": "Merchtem",
    "lat": "50.95129",
    "lng": "4.23197"
  },
  {
    "country": "BE",
    "name": "Merbes-le-Château",
    "lat": "50.32449",
    "lng": "4.16489"
  },
  {
    "country": "BE",
    "name": "Menen",
    "lat": "50.79722",
    "lng": "3.12245"
  },
  {
    "country": "BE",
    "name": "Membach",
    "lat": "50.61908",
    "lng": "5.99506"
  },
  {
    "country": "BE",
    "name": "Melsen",
    "lat": "50.95622",
    "lng": "3.69567"
  },
  {
    "country": "BE",
    "name": "Melsele",
    "lat": "51.22285",
    "lng": "4.28201"
  },
  {
    "country": "BE",
    "name": "Melsbroek",
    "lat": "50.91559",
    "lng": "4.47985"
  },
  {
    "country": "BE",
    "name": "Mellet",
    "lat": "50.50573",
    "lng": "4.47856"
  },
  {
    "country": "BE",
    "name": "Melle",
    "lat": "51.00232",
    "lng": "3.80526"
  },
  {
    "country": "BE",
    "name": "Mélin",
    "lat": "50.74004",
    "lng": "4.82883"
  },
  {
    "country": "BE",
    "name": "Melen",
    "lat": "50.6462",
    "lng": "5.73589"
  },
  {
    "country": "BE",
    "name": "Meldert",
    "lat": "51.00007",
    "lng": "5.14215"
  },
  {
    "country": "BE",
    "name": "Meldert",
    "lat": "50.93449",
    "lng": "4.13504"
  },
  {
    "country": "BE",
    "name": "Meldert",
    "lat": "50.78814",
    "lng": "4.83776"
  },
  {
    "country": "BE",
    "name": "Meix-devant-Virton",
    "lat": "49.60581",
    "lng": "5.48045"
  },
  {
    "country": "BE",
    "name": "Meise",
    "lat": "50.93934",
    "lng": "4.32655"
  },
  {
    "country": "BE",
    "name": "Meeuwen",
    "lat": "51.0991",
    "lng": "5.52106"
  },
  {
    "country": "BE",
    "name": "Meerle",
    "lat": "51.47235",
    "lng": "4.80316"
  },
  {
    "country": "BE",
    "name": "Meerhout",
    "lat": "51.1321",
    "lng": "5.07842"
  },
  {
    "country": "BE",
    "name": "Meerdonk",
    "lat": "51.26667",
    "lng": "4.15"
  },
  {
    "country": "BE",
    "name": "Meerbeke",
    "lat": "50.82444",
    "lng": "4.03674"
  },
  {
    "country": "BE",
    "name": "Meerbeek",
    "lat": "50.88213",
    "lng": "4.58972"
  },
  {
    "country": "BE",
    "name": "Meer",
    "lat": "51.44641",
    "lng": "4.73906"
  },
  {
    "country": "BE",
    "name": "Meensel-Kiezegem",
    "lat": "50.89621",
    "lng": "4.92496"
  },
  {
    "country": "BE",
    "name": "Mechelen-Bovelingen",
    "lat": "50.74081",
    "lng": "5.26278"
  },
  {
    "country": "BE",
    "name": "Mechelen-aan-de-Maas",
    "lat": "50.96589",
    "lng": "5.69144"
  },
  {
    "country": "BE",
    "name": "Mechelen",
    "lat": "51.02574",
    "lng": "4.47762"
  },
  {
    "country": "BE",
    "name": "Mazy",
    "lat": "50.51097",
    "lng": "4.67374"
  },
  {
    "country": "BE",
    "name": "Mazenzele",
    "lat": "50.94247",
    "lng": "4.17224"
  },
  {
    "country": "BE",
    "name": "Maurage",
    "lat": "50.45652",
    "lng": "4.09704"
  },
  {
    "country": "BE",
    "name": "Maubray",
    "lat": "50.55085",
    "lng": "3.50395"
  },
  {
    "country": "BE",
    "name": "Mater",
    "lat": "50.84321",
    "lng": "3.66258"
  },
  {
    "country": "BE",
    "name": "Massenhoven",
    "lat": "51.20021",
    "lng": "4.63572"
  },
  {
    "country": "BE",
    "name": "Massemen",
    "lat": "50.98086",
    "lng": "3.87394"
  },
  {
    "country": "BE",
    "name": "Masnuy-Saint-Jean",
    "lat": "50.53209",
    "lng": "3.94032"
  },
  {
    "country": "BE",
    "name": "Martelange",
    "lat": "49.83195",
    "lng": "5.73655"
  },
  {
    "country": "BE",
    "name": "Marquain",
    "lat": "50.60679",
    "lng": "3.32087"
  },
  {
    "country": "BE",
    "name": "Marke",
    "lat": "50.80678",
    "lng": "3.23344"
  },
  {
    "country": "BE",
    "name": "Mariembourg",
    "lat": "50.09489",
    "lng": "4.52161"
  },
  {
    "country": "BE",
    "name": "Mariekerke",
    "lat": "51.06503",
    "lng": "4.19249"
  },
  {
    "country": "BE",
    "name": "Mariakerke",
    "lat": "51.07476",
    "lng": "3.68289"
  },
  {
    "country": "BE",
    "name": "Maria Aalter",
    "lat": "51.09455",
    "lng": "3.36917"
  },
  {
    "country": "BE",
    "name": "Marenne",
    "lat": "50.24129",
    "lng": "5.41498"
  },
  {
    "country": "BE",
    "name": "Mark",
    "lat": "50.6914",
    "lng": "4.01559"
  },
  {
    "country": "BE",
    "name": "Marcinelle",
    "lat": "50.39216",
    "lng": "4.44388"
  },
  {
    "country": "BE",
    "name": "Marchin",
    "lat": "50.46707",
    "lng": "5.2428"
  },
  {
    "country": "BE",
    "name": "Marchienne-au-Pont",
    "lat": "50.40573",
    "lng": "4.3953"
  },
  {
    "country": "BE",
    "name": "Marche-lez-Écaussinnes",
    "lat": "50.54601",
    "lng": "4.1818"
  },
  {
    "country": "BE",
    "name": "Marche-les-Dames",
    "lat": "50.48585",
    "lng": "4.95967"
  },
  {
    "country": "BE",
    "name": "Marche-en-Famenne",
    "lat": "50.22678",
    "lng": "5.34416"
  },
  {
    "country": "BE",
    "name": "Marbais",
    "lat": "50.54652",
    "lng": "4.53499"
  },
  {
    "country": "BE",
    "name": "Manhay",
    "lat": "50.29219",
    "lng": "5.67562"
  },
  {
    "country": "BE",
    "name": "Manderfeld",
    "lat": "50.3312",
    "lng": "6.33919"
  },
  {
    "country": "BE",
    "name": "Manage",
    "lat": "50.50312",
    "lng": "4.23589"
  },
  {
    "country": "BE",
    "name": "Malonne",
    "lat": "50.43969",
    "lng": "4.79562"
  },
  {
    "country": "BE",
    "name": "Malmédy",
    "lat": "50.42686",
    "lng": "6.02794"
  },
  {
    "country": "BE",
    "name": "Malderen",
    "lat": "51.02077",
    "lng": "4.24639"
  },
  {
    "country": "BE",
    "name": "Maldegem",
    "lat": "51.20737",
    "lng": "3.44511"
  },
  {
    "country": "BE",
    "name": "Mal",
    "lat": "50.76869",
    "lng": "5.5197"
  },
  {
    "country": "BE",
    "name": "Maisières",
    "lat": "50.4882",
    "lng": "3.96564"
  },
  {
    "country": "BE",
    "name": "Mainvault",
    "lat": "50.64908",
    "lng": "3.71751"
  },
  {
    "country": "BE",
    "name": "Maillen",
    "lat": "50.37782",
    "lng": "4.97097"
  },
  {
    "country": "BE",
    "name": "Magnée",
    "lat": "50.5998",
    "lng": "5.68834"
  },
  {
    "country": "BE",
    "name": "Maffle",
    "lat": "50.61789",
    "lng": "3.80324"
  },
  {
    "country": "BE",
    "name": "Machelen-aan-de-Leie",
    "lat": "50.95973",
    "lng": "3.49046"
  },
  {
    "country": "BE",
    "name": "Machelen",
    "lat": "50.91061",
    "lng": "4.44174"
  },
  {
    "country": "BE",
    "name": "Maasmechelen",
    "lat": "50.96545",
    "lng": "5.69452"
  },
  {
    "country": "BE",
    "name": "Maaseik",
    "lat": "51.09802",
    "lng": "5.78379"
  },
  {
    "country": "BE",
    "name": "Luttre",
    "lat": "50.51006",
    "lng": "4.39709"
  },
  {
    "country": "BE",
    "name": "Lustin",
    "lat": "50.37876",
    "lng": "4.89871"
  },
  {
    "country": "BE",
    "name": "Lummen",
    "lat": "50.98772",
    "lng": "5.19121"
  },
  {
    "country": "BE",
    "name": "Luingne",
    "lat": "50.73952",
    "lng": "3.23603"
  },
  {
    "country": "BE",
    "name": "Lubbeek",
    "lat": "50.88278",
    "lng": "4.83896"
  },
  {
    "country": "BE",
    "name": "Loyers",
    "lat": "50.46324",
    "lng": "4.95136"
  },
  {
    "country": "BE",
    "name": "Loverval",
    "lat": "50.37519",
    "lng": "4.47332"
  },
  {
    "country": "BE",
    "name": "Lovenjoel",
    "lat": "50.85852",
    "lng": "4.78094"
  },
  {
    "country": "BE",
    "name": "Lovendegem",
    "lat": "51.10168",
    "lng": "3.61298"
  },
  {
    "country": "BE",
    "name": "Louveigné",
    "lat": "50.53015",
    "lng": "5.71547"
  },
  {
    "country": "BE",
    "name": "Louvain-la-Neuve",
    "lat": "50.66829",
    "lng": "4.61443"
  },
  {
    "country": "BE",
    "name": "Loupoigne",
    "lat": "50.59806",
    "lng": "4.44448"
  },
  {
    "country": "BE",
    "name": "Lotenhulle",
    "lat": "51.0502",
    "lng": "3.46162"
  },
  {
    "country": "BE",
    "name": "Lot",
    "lat": "50.7679",
    "lng": "4.27711"
  },
  {
    "country": "BE",
    "name": "Loppem",
    "lat": "51.15662",
    "lng": "3.19599"
  },
  {
    "country": "BE",
    "name": "Loonbeek",
    "lat": "50.80941",
    "lng": "4.60971"
  },
  {
    "country": "BE",
    "name": "Lontzen",
    "lat": "50.68126",
    "lng": "6.00712"
  },
  {
    "country": "BE",
    "name": "Longvilly",
    "lat": "50.02633",
    "lng": "5.83829"
  },
  {
    "country": "BE",
    "name": "Longlier",
    "lat": "49.85384",
    "lng": "5.45009"
  },
  {
    "country": "BE",
    "name": "Longchamps",
    "lat": "50.0534",
    "lng": "5.69032"
  },
  {
    "country": "BE",
    "name": "Londerzeel",
    "lat": "51.00468",
    "lng": "4.30304"
  },
  {
    "country": "BE",
    "name": "Loncin",
    "lat": "50.66655",
    "lng": "5.50509"
  },
  {
    "country": "BE",
    "name": "Lommersweiler",
    "lat": "50.24",
    "lng": "6.165"
  },
  {
    "country": "BE",
    "name": "Lommel",
    "lat": "51.23074",
    "lng": "5.31349"
  },
  {
    "country": "BE",
    "name": "Lombardsijde",
    "lat": "51.15",
    "lng": "2.75"
  },
  {
    "country": "BE",
    "name": "Lokeren",
    "lat": "51.10364",
    "lng": "3.99339"
  },
  {
    "country": "BE",
    "name": "Loenhout",
    "lat": "51.39947",
    "lng": "4.64404"
  },
  {
    "country": "BE",
    "name": "Lodelinsart",
    "lat": "50.43138",
    "lng": "4.44886"
  },
  {
    "country": "BE",
    "name": "Lochristi",
    "lat": "51.09644",
    "lng": "3.83194"
  },
  {
    "country": "BE",
    "name": "Lobbes",
    "lat": "50.35258",
    "lng": "4.26716"
  },
  {
    "country": "BE",
    "name": "Lo",
    "lat": "50.98036",
    "lng": "2.74965"
  },
  {
    "country": "BE",
    "name": "Lixhe",
    "lat": "50.7544",
    "lng": "5.68028"
  },
  {
    "country": "BE",
    "name": "Lissewege",
    "lat": "51.29427",
    "lng": "3.19331"
  },
  {
    "country": "BE",
    "name": "Lippelo",
    "lat": "51.04258",
    "lng": "4.259"
  },
  {
    "country": "BE",
    "name": "Lint",
    "lat": "51.12707",
    "lng": "4.49669"
  },
  {
    "country": "BE",
    "name": "Linkhout",
    "lat": "50.96778",
    "lng": "5.1374"
  },
  {
    "country": "BE",
    "name": "Linkebeek",
    "lat": "50.76781",
    "lng": "4.33688"
  },
  {
    "country": "BE",
    "name": "Linden",
    "lat": "50.89494",
    "lng": "4.77027"
  },
  {
    "country": "BE",
    "name": "Lincent",
    "lat": "50.71222",
    "lng": "5.03654"
  },
  {
    "country": "BE",
    "name": "Limerlé",
    "lat": "50.15804",
    "lng": "5.92395"
  },
  {
    "country": "BE",
    "name": "Limelette",
    "lat": "50.68428",
    "lng": "4.57186"
  },
  {
    "country": "BE",
    "name": "Limbourg",
    "lat": "50.61222",
    "lng": "5.9412"
  },
  {
    "country": "BE",
    "name": "Limal",
    "lat": "50.69477",
    "lng": "4.57538"
  },
  {
    "country": "BE",
    "name": "Lillois-Witterzée",
    "lat": "50.64549",
    "lng": "4.36681"
  },
  {
    "country": "BE",
    "name": "Lille",
    "lat": "51.24197",
    "lng": "4.82313"
  },
  {
    "country": "BE",
    "name": "Ligny",
    "lat": "50.51244",
    "lng": "4.57735"
  },
  {
    "country": "BE",
    "name": "Liezele",
    "lat": "51.05998",
    "lng": "4.28038"
  },
  {
    "country": "BE",
    "name": "Liers",
    "lat": "50.69396",
    "lng": "5.56458"
  },
  {
    "country": "BE",
    "name": "Lier",
    "lat": "51.13128",
    "lng": "4.57041"
  },
  {
    "country": "BE",
    "name": "Lierneux",
    "lat": "50.28477",
    "lng": "5.79236"
  },
  {
    "country": "BE",
    "name": "Liège",
    "lat": "50.63373",
    "lng": "5.56749"
  },
  {
    "country": "BE",
    "name": "Liedekerke",
    "lat": "50.86892",
    "lng": "4.08743"
  },
  {
    "country": "BE",
    "name": "Lichtervelde",
    "lat": "51.03333",
    "lng": "3.15"
  },
  {
    "country": "BE",
    "name": "Lichtaart",
    "lat": "51.22495",
    "lng": "4.91681"
  },
  {
    "country": "BE",
    "name": "Libramont",
    "lat": "49.91741",
    "lng": "5.37318"
  },
  {
    "country": "BE",
    "name": "Libin",
    "lat": "49.98107",
    "lng": "5.25612"
  },
  {
    "country": "BE",
    "name": "Liberchies",
    "lat": "50.51421",
    "lng": "4.42123"
  },
  {
    "country": "BE",
    "name": "Leval-Trahegnies",
    "lat": "50.4213",
    "lng": "4.22556"
  },
  {
    "country": "BE",
    "name": "Leuze",
    "lat": "50.6",
    "lng": "3.6"
  },
  {
    "country": "BE",
    "name": "Leuze",
    "lat": "50.54635",
    "lng": "4.9063"
  },
  {
    "country": "BE",
    "name": "Leuven",
    "lat": "50.87959",
    "lng": "4.70093"
  },
  {
    "country": "BE",
    "name": "Leut",
    "lat": "50.99107",
    "lng": "5.73624"
  },
  {
    "country": "BE",
    "name": "Letterhoutem",
    "lat": "50.92768",
    "lng": "3.8797"
  },
  {
    "country": "BE",
    "name": "Lesve",
    "lat": "50.37705",
    "lng": "4.77785"
  },
  {
    "country": "BE",
    "name": "Lessines",
    "lat": "50.71104",
    "lng": "3.83579"
  },
  {
    "country": "BE",
    "name": "Deux-Acren",
    "lat": "50.73026",
    "lng": "3.85315"
  },
  {
    "country": "BE",
    "name": "Le Roux",
    "lat": "50.38877",
    "lng": "4.62404"
  },
  {
    "country": "BE",
    "name": "Leopoldsburg",
    "lat": "51.11667",
    "lng": "5.25"
  },
  {
    "country": "BE",
    "name": "Lens-sur-Geer",
    "lat": "50.72162",
    "lng": "5.35086"
  },
  {
    "country": "BE",
    "name": "Lens-Saint-Remy",
    "lat": "50.65077",
    "lng": "5.1319"
  },
  {
    "country": "BE",
    "name": "Lens",
    "lat": "50.55696",
    "lng": "3.89946"
  },
  {
    "country": "BE",
    "name": "Lendelede",
    "lat": "50.88626",
    "lng": "3.23747"
  },
  {
    "country": "BE",
    "name": "Lemberge",
    "lat": "50.97629",
    "lng": "3.77054"
  },
  {
    "country": "BE",
    "name": "Lembeke",
    "lat": "51.19487",
    "lng": "3.63333"
  },
  {
    "country": "BE",
    "name": "Lembeek",
    "lat": "50.7157",
    "lng": "4.21832"
  },
  {
    "country": "BE",
    "name": "Leke",
    "lat": "51.10022",
    "lng": "2.89098"
  },
  {
    "country": "BE",
    "name": "Leignon",
    "lat": "50.26861",
    "lng": "5.11045"
  },
  {
    "country": "BE",
    "name": "Léglise",
    "lat": "49.79985",
    "lng": "5.53652"
  },
  {
    "country": "BE",
    "name": "Leffinge",
    "lat": "51.17576",
    "lng": "2.87576"
  },
  {
    "country": "BE",
    "name": "Leeuwergem",
    "lat": "50.888",
    "lng": "3.831"
  },
  {
    "country": "BE",
    "name": "Leest",
    "lat": "51.03319",
    "lng": "4.4153"
  },
  {
    "country": "BE",
    "name": "Leers-Nord",
    "lat": "50.68748",
    "lng": "3.27023"
  },
  {
    "country": "BE",
    "name": "Leernes",
    "lat": "50.39812",
    "lng": "4.33239"
  },
  {
    "country": "BE",
    "name": "Leerbeek",
    "lat": "50.77788",
    "lng": "4.11936"
  },
  {
    "country": "BE",
    "name": "Leefdaal",
    "lat": "50.84759",
    "lng": "4.58936"
  },
  {
    "country": "BE",
    "name": "Ledegem",
    "lat": "50.85785",
    "lng": "3.12409"
  },
  {
    "country": "BE",
    "name": "Ledeberg",
    "lat": "51.03859",
    "lng": "3.74458"
  },
  {
    "country": "BE",
    "name": "Ledeberg",
    "lat": "50.84356",
    "lng": "4.09112"
  },
  {
    "country": "BE",
    "name": "Lede",
    "lat": "50.96626",
    "lng": "3.98594"
  },
  {
    "country": "BE",
    "name": "Lebbeke",
    "lat": "51.00464",
    "lng": "4.13457"
  },
  {
    "country": "BE",
    "name": "Lauwe",
    "lat": "50.79479",
    "lng": "3.1869"
  },
  {
    "country": "BE",
    "name": "Lauw",
    "lat": "50.73881",
    "lng": "5.41333"
  },
  {
    "country": "BE",
    "name": "Latour",
    "lat": "49.55736",
    "lng": "5.57065"
  },
  {
    "country": "BE",
    "name": "La Roche-en-Ardenne",
    "lat": "50.18361",
    "lng": "5.57547"
  },
  {
    "country": "BE",
    "name": "La Reid",
    "lat": "50.48914",
    "lng": "5.79098"
  },
  {
    "country": "BE",
    "name": "Laplaigne",
    "lat": "50.52194",
    "lng": "3.4473"
  },
  {
    "country": "BE",
    "name": "Lanklaar",
    "lat": "51.01937",
    "lng": "5.72508"
  },
  {
    "country": "BE",
    "name": "Langemark",
    "lat": "50.9131",
    "lng": "2.91965"
  },
  {
    "country": "BE",
    "name": "Langdorp",
    "lat": "50.99561",
    "lng": "4.87175"
  },
  {
    "country": "BE",
    "name": "Laneffe",
    "lat": "50.27936",
    "lng": "4.49344"
  },
  {
    "country": "BE",
    "name": "Landenne",
    "lat": "50.51534",
    "lng": "5.06684"
  },
  {
    "country": "BE",
    "name": "Landen",
    "lat": "50.75267",
    "lng": "5.082"
  },
  {
    "country": "BE",
    "name": "Landelies",
    "lat": "50.38001",
    "lng": "4.35076"
  },
  {
    "country": "BE",
    "name": "Landegem",
    "lat": "51.05518",
    "lng": "3.57667"
  },
  {
    "country": "BE",
    "name": "Lanaken",
    "lat": "50.89318",
    "lng": "5.6468"
  },
  {
    "country": "BE",
    "name": "Lambusart",
    "lat": "50.45433",
    "lng": "4.55263"
  },
  {
    "country": "BE",
    "name": "Lambermont",
    "lat": "50.59038",
    "lng": "5.83245"
  },
  {
    "country": "BE",
    "name": "La Louvière",
    "lat": "50.48657",
    "lng": "4.18785"
  },
  {
    "country": "BE",
    "name": "La Hulpe",
    "lat": "50.73091",
    "lng": "4.48577"
  },
  {
    "country": "BE",
    "name": "La Hestre",
    "lat": "50.47556",
    "lng": "4.24739"
  },
  {
    "country": "BE",
    "name": "La Gleize",
    "lat": "50.41074",
    "lng": "5.84699"
  },
  {
    "country": "BE",
    "name": "La Calamine",
    "lat": "50.71809",
    "lng": "6.01107"
  },
  {
    "country": "BE",
    "name": "Labuissière",
    "lat": "50.31944",
    "lng": "4.1809"
  },
  {
    "country": "BE",
    "name": "La Bruyère",
    "lat": "50.39478",
    "lng": "4.61444"
  },
  {
    "country": "BE",
    "name": "La Bouverie",
    "lat": "50.40524",
    "lng": "3.8744"
  },
  {
    "country": "BE",
    "name": "Laarne",
    "lat": "51.03078",
    "lng": "3.85077"
  },
  {
    "country": "BE",
    "name": "Kwaadmechelen",
    "lat": "51.10099",
    "lng": "5.14478"
  },
  {
    "country": "BE",
    "name": "Kuurne",
    "lat": "50.85143",
    "lng": "3.2824"
  },
  {
    "country": "BE",
    "name": "Kuringen",
    "lat": "50.94426",
    "lng": "5.29902"
  },
  {
    "country": "BE",
    "name": "Kumtich",
    "lat": "50.82101",
    "lng": "4.88723"
  },
  {
    "country": "BE",
    "name": "Kruishoutem",
    "lat": "50.90168",
    "lng": "3.52588"
  },
  {
    "country": "BE",
    "name": "Kruibeke",
    "lat": "51.17048",
    "lng": "4.31444"
  },
  {
    "country": "BE",
    "name": "Kraainem",
    "lat": "50.86155",
    "lng": "4.46946"
  },
  {
    "country": "BE",
    "name": "Kozen",
    "lat": "50.8752",
    "lng": "5.24005"
  },
  {
    "country": "BE",
    "name": "Kortrijk-Dutsel",
    "lat": "50.92676",
    "lng": "4.80799"
  },
  {
    "country": "BE",
    "name": "Kortrijk",
    "lat": "50.82803",
    "lng": "3.26487"
  },
  {
    "country": "BE",
    "name": "Kortessem",
    "lat": "50.8589",
    "lng": "5.38974"
  },
  {
    "country": "BE",
    "name": "Kortenberg",
    "lat": "50.88982",
    "lng": "4.54353"
  },
  {
    "country": "BE",
    "name": "Kortenaken",
    "lat": "50.90862",
    "lng": "5.05968"
  },
  {
    "country": "BE",
    "name": "Kortemark",
    "lat": "51.02951",
    "lng": "3.04112"
  },
  {
    "country": "BE",
    "name": "Korbeek-Lo",
    "lat": "50.86028",
    "lng": "4.76274"
  },
  {
    "country": "BE",
    "name": "Koolskamp",
    "lat": "51.00233",
    "lng": "3.2104"
  },
  {
    "country": "BE",
    "name": "Koolkerke",
    "lat": "51.23931",
    "lng": "3.24745"
  },
  {
    "country": "BE",
    "name": "Kontich",
    "lat": "51.13213",
    "lng": "4.44706"
  },
  {
    "country": "BE",
    "name": "Koninksem",
    "lat": "50.76535",
    "lng": "5.43892"
  },
  {
    "country": "BE",
    "name": "Koningshooikt",
    "lat": "51.09607",
    "lng": "4.60992"
  },
  {
    "country": "BE",
    "name": "Koksijde",
    "lat": "51.11642",
    "lng": "2.63772"
  },
  {
    "country": "BE",
    "name": "Koersel",
    "lat": "51.05909",
    "lng": "5.27121"
  },
  {
    "country": "BE",
    "name": "Koekelberg",
    "lat": "50.86117",
    "lng": "4.33136"
  },
  {
    "country": "BE",
    "name": "Koekelare",
    "lat": "51.09047",
    "lng": "2.9783"
  },
  {
    "country": "BE",
    "name": "Knokke-Heist",
    "lat": "51.35",
    "lng": "3.26667"
  },
  {
    "country": "BE",
    "name": "Knokke",
    "lat": "51.35113",
    "lng": "3.28744"
  },
  {
    "country": "BE",
    "name": "Knesselare",
    "lat": "51.13932",
    "lng": "3.41282"
  },
  {
    "country": "BE",
    "name": "Klerken",
    "lat": "50.99643",
    "lng": "2.90771"
  },
  {
    "country": "BE",
    "name": "Klemskerke",
    "lat": "51.24222",
    "lng": "3.02401"
  },
  {
    "country": "BE",
    "name": "Kleine-Spouwen",
    "lat": "50.83837",
    "lng": "5.55007"
  },
  {
    "country": "BE",
    "name": "Kleine-Brogel",
    "lat": "51.17267",
    "lng": "5.45059"
  },
  {
    "country": "BE",
    "name": "Kinrooi",
    "lat": "51.14543",
    "lng": "5.74207"
  },
  {
    "country": "BE",
    "name": "Kieldrecht",
    "lat": "51.28914",
    "lng": "4.17587"
  },
  {
    "country": "BE",
    "name": "Kettenis",
    "lat": "50.64761",
    "lng": "6.04686"
  },
  {
    "country": "BE",
    "name": "Kester",
    "lat": "50.76398",
    "lng": "4.12058"
  },
  {
    "country": "BE",
    "name": "Kessenich",
    "lat": "51.15086",
    "lng": "5.8233"
  },
  {
    "country": "BE",
    "name": "Kessel-Lo",
    "lat": "50.88549",
    "lng": "4.73717"
  },
  {
    "country": "BE",
    "name": "Kessel",
    "lat": "51.13892",
    "lng": "4.62962"
  },
  {
    "country": "BE",
    "name": "Kersbeek-Miskom",
    "lat": "50.88544",
    "lng": "4.99578"
  },
  {
    "country": "BE",
    "name": "Kermt",
    "lat": "50.94757",
    "lng": "5.24832"
  },
  {
    "country": "BE",
    "name": "Kerksken",
    "lat": "50.89068",
    "lng": "3.99478"
  },
  {
    "country": "BE",
    "name": "Kerkom",
    "lat": "50.85568",
    "lng": "4.87422"
  },
  {
    "country": "BE",
    "name": "Kerkhove",
    "lat": "50.79851",
    "lng": "3.50267"
  },
  {
    "country": "BE",
    "name": "Kemzeke",
    "lat": "51.20981",
    "lng": "4.07428"
  },
  {
    "country": "BE",
    "name": "Kemmel",
    "lat": "50.78333",
    "lng": "2.82714"
  },
  {
    "country": "BE",
    "name": "Keiem",
    "lat": "51.08144",
    "lng": "2.88217"
  },
  {
    "country": "BE",
    "name": "Keerbergen",
    "lat": "51.00295",
    "lng": "4.63434"
  },
  {
    "country": "BE",
    "name": "Kaulille",
    "lat": "51.18763",
    "lng": "5.52372"
  },
  {
    "country": "BE",
    "name": "Kasterlee",
    "lat": "51.24118",
    "lng": "4.96651"
  },
  {
    "country": "BE",
    "name": "Kaprijke",
    "lat": "51.2172",
    "lng": "3.61519"
  },
  {
    "country": "BE",
    "name": "Kapelle-op-den-Bos",
  },
  {
  },