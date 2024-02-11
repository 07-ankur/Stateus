import { tokens } from "../theme";

export const mockStateData = [
  {
    state: "Maharashtra",
    Population: "120M",
    AirQualityIndex: "124",
    Temperature: "25°C",
    Humidity: "50",
  },
  {
    state: "Bihar",
    Population: "80M",
    AirQualityIndex: "104",
    Temperature: "28°C",
    Humidity: "60",
  },
  {
    state: "West-Bengal",
    Population: "90M",
    AirQualityIndex: "114",
    Temperature: "26°C",
    Humidity: "70",
  },
  {
    state: "Tamil-Nadu",
    Population: "110M",
    AirQualityIndex: "114",
    Temperature: "22°C",
    Humidity: "48",
  },
  {
    state: "Jharkhand",
    Population: "70M",
    AirQualityIndex: "104",
    Temperature: "20°C",
    Humidity: "40",
  },
  {
    state: "Uttar-Pradesh",
    Population: "150M",
    AirQualityIndex: "134",
    Temperature: "30°C",
    Humidity: "55",
  },
  {
    state: "Rajasthan",
    Population: "100M",
    AirQualityIndex: "114",
    Temperature: "27°C",
    Humidity: "45",
  },
  {
    state: "Gujarat",
    Population: "130M",
    AirQualityIndex: "124",
    Temperature: "23°C",
    Humidity: "42",
  },
  {
    state: "Karnataka",
    Population: "110M",
    AirQualityIndex: "94",
    Temperature: "24°C",
    Humidity: "60",
  },
  {
    state: "Madhya-Pradesh",
    Population: "85M",
    AirQualityIndex: "104",
    Temperature: "21°C",
    Humidity: "46",
  },
  {
    state: "Kerala",
    Population: "95M",
    AirQualityIndex: "114",
    Temperature: "26°C",
    Humidity: "55",
  },
  // States added
  {
    state: "Haryana",
    Population: "60M",
    AirQualityIndex: "108",
    Temperature: "29°C",
    Humidity: "52",
  },
  {
    state: "Punjab",
    Population: "40M",
    AirQualityIndex: "98",
    Temperature: "24°C",
    Humidity: "42",
  },
];

export const mockBarData = [
  {
    city: "Pune",
    2020: 85,
    2010: 80,
    2000: 68,
    1990: 40,
    1980: 30,
  },
  {
    city: "Thane",
    2020: 80,
    2010: 72,
    2000: 65,
    1990: 35,
    1980: 25,
  },
  {
    city: "Mumbai",
    2020: 89,
    2010: 80,
    2000: 68,
    1990: 45,
    1980: 30,
  },
  {
    city: "Nagpur",
    2020: 78,
    2010: 69,
    2000: 54,
    1990: 38,
    1980: 30,
  },
  {
    city: "Nashik",
    2020: 78,
    2010: 67,
    2000: 52,
    1990: 40,
    1980: 30,
  },
];

export const mockPieData = [
  // Maharashtra
  {
    id: "Mumbai",
    state: "Maharashtra",
    label: "Mumbai",
    value: 639,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "Pune",
    state: "Maharashtra",
    label: "Pune",
    value: 470,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "Nagpur",
    state: "Maharashtra",
    label: "Nagpur",
    value: 303,
    color: "hsl(229, 70%, 50%)",
  },

  // Bihar
  {
    id: "Patna",
    state: "Bihar",
    label: "Patna",
    value: 200,
    color: "hsl(30, 70%, 50%)",
  },
  {
    id: "Gaya",
    state: "Bihar",
    label: "Gaya",
    value: 150,
    color: "hsl(60, 70%, 50%)",
  },
  {
    id: "Muzaffarpur",
    state: "Bihar",
    label: "Muzaffarpur",
    value: 100,
    color: "hsl(90, 70%, 50%)",
  },

  // Jharkhand
  {
    id: "Ranchi",
    state: "Jharkhand",
    label: "Ranchi",
    value: 180,
    color: "hsl(120, 70%, 50%)",
  },
  {
    id: "Jamshedpur",
    state: "Jharkhand",
    label: "Jamshedpur",
    value: 120,
    color: "hsl(150, 70%, 50%)",
  },
  {
    id: "Dhanbad",
    state: "Jharkhand",
    label: "Dhanbad",
    value: 80,
    color: "hsl(180, 70%, 50%)",
  },

  // Haryana
  {
    id: "Gurgaon",
    state: "Haryana",
    label: "Gurgaon",
    value: 150,
    color: "hsl(210, 70%, 50%)",
  },
  {
    id: "Faridabad",
    state: "Haryana",
    label: "Faridabad",
    value: 100,
    color: "hsl(240, 70%, 50%)",
  },
  {
    id: "Panipat",
    state: "Haryana",
    label: "Panipat",
    value: 80,
    color: "hsl(270, 70%, 50%)",
  },

  // Madhya Pradesh
  {
    id: "Indore",
    state: "Madhya-Pradesh",
    label: "Indore",
    value: 220,
    color: "hsl(300, 70%, 50%)",
  },
  {
    id: "Bhopal",
    state: "Madhya-Pradesh",
    label: "Bhopal",
    value: 180,
    color: "hsl(330, 70%, 50%)",
  },
  {
    id: "Jabalpur",
    state: "Madhya-Pradesh",
    label: "Jabalpur",
    value: 120,
    color: "hsl(0, 70%, 50%)",
  },

  // Kerala
  {
    id: "Thiruvananthapuram",
    state: "Kerala",
    label: "Thiruvananthapuram",
    value: 130,
    color: "hsl(30, 70%, 50%)",
  },
  {
    id: "Kochi",
    state: "Kerala",
    label: "Kochi",
    value: 100,
    color: "hsl(60, 70%, 50%)",
  },
  {
    id: "Kozhikode",
    state: "Kerala",
    label: "Kozhikode",
    value: 70,
    color: "hsl(90, 70%, 50%)",
  },

  // Uttar Pradesh
  {
    id: "Lucknow",
    state: "Uttar-Pradesh",
    label: "Lucknow",
    value: 250,
    color: "hsl(120, 70%, 50%)",
  },
  {
    id: "Kanpur",
    state: "Uttar-Pradesh",
    label: "Kanpur",
    value: 180,
    color: "hsl(150, 70%, 50%)",
  },
  {
    id: "Agra",
    state: "Uttar-Pradesh",
    label: "Agra",
    value: 130,
    color: "hsl(180, 70%, 50%)",
  },

  // Punjab
  {
    id: "Ludhiana",
    state: "Punjab",
    label: "Ludhiana",
    value: 160,
    color: "hsl(210, 70%, 50%)",
  },
  {
    id: "Amritsar",
    state: "Punjab",
    label: "Amritsar",
    value: 110,
    color: "hsl(240, 70%, 50%)",
  },
  {
    id: "Jalandhar",
    state: "Punjab",
    label: "Jalandhar",
    value: 80,
    color: "hsl(270, 70%, 50%)",
  },

  // Gujarat
  {
    id: "Ahmedabad",
    state: "Gujarat",
    label: "Ahmedabad",
    value: 290,
    color: "hsl(300, 70%, 50%)",
  },
  {
    id: "Surat",
    state: "Gujarat",
    label: "Surat",
    value: 220,
    color: "hsl(330, 70%, 50%)",
  },
  {
    id: "Vadodara",
    state: "Gujarat",
    label: "Vadodara",
    value: 150,
    color: "hsl(0, 70%, 50%)",
  },

  // Rajasthan
  {
    id: "Jaipur",
    state: "Rajasthan",
    label: "Jaipur",
    value: 200,
    color: "hsl(30, 70%, 50%)",
  },
  {
    id: "Jodhpur",
    state: "Rajasthan",
    label: "Jodhpur",
    value: 150,
    color: "hsl(60, 70%, 50%)",
  },
  {
    id: "Udaipur",
    state: "Rajasthan",
    label: "Udaipur",
    value: 100,
    color: "hsl(90, 70%, 50%)",
  },

  // Tamil Nadu
  {
    id: "Chennai",
    state: "Tamil-Nadu",
    label: "Chennai",
    value: 210,
    color: "hsl(120, 70%, 50%)",
  },
  {
    id: "Coimbatore",
    state: "Tamil-Nadu",
    label: "Coimbatore",
    value: 160,
    color: "hsl(150, 70%, 50%)",
  },
  {
    id: "Madurai",
    state: "Tamil-Nadu",
    label: "Madurai",
    value: 120,
    color: "hsl(180, 70%, 50%)",
  },

  // West Bengal
  {
    id: "Kolkata",
    state: "West-Bengal",
    label: "Kolkata",
    value: 180,
    color: "hsl(210, 70%, 50%)",
  },
  {
    id: "Howrah",
    state: "West-Bengal",
    label: "Howrah",
    value: 130,
    color: "hsl(240, 70%, 50%)",
  },
  {
    id: "Durgapur",
    state: "West-Bengal",
    label: "Durgapur",
    value: 90,
    color: "hsl(270, 70%, 50%)",
  },

  // Karnataka
  {
    id: "Bangalore",
    state: "Karnataka",
    label: "Bangalore",
    value: 240,
    color: "hsl(300, 70%, 50%)",
  },
  {
    id: "Mysore",
    state: "Karnataka",
    label: "Mysore",
    value: 180,
    color: "hsl(330, 70%, 50%)",
  },
  {
    id: "Hubli",
    state: "Karnataka",
    label: "Hubli",
    value: 120,
    color: "hsl(0, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "Average",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "2024",
        y: 80,
      },
      {
        x: "2020",
        y: 79,
      },
      {
        x: "2016",
        y: 66,
      },
      {
        x: "2012",
        y: 26,
      },
      {
        x: "2008",
        y: 55,
      },
      {
        x: "2004",
        y: 36,
      },
      {
        x: "2000",
        y: 38,
      },
      {
        x: "1996",
        y: 22,
      },
      {
        x: "1992",
        y: 21,
      },
    ],
  },
  {
    id: "State",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "2024",
        y: 90,
      },
      {
        x: "2020",
        y: 75,
      },
      {
        x: "2016",
        y: 36,
      },
      {
        x: "2012",
        y: 16,
      },
      {
        x: "2008",
        y: 35,
      },
      {
        x: "2004",
        y: 36,
      },
      {
        x: "2000",
        y: 88,
      },
      {
        x: "1996",
        y: 32,
      },
      {
        x: "1992",
        y: 81,
      },
    ],
  },
  {
    id: "National",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "2024",
        y: 90,
      },
      {
        x: "2020",
        y: 75,
      },
      {
        x: "2016",
        y: 36,
      },
      {
        x: "2012",
        y: 16,
      },
      {
        x: "2008",
        y: 35,
      },
      {
        x: "2004",
        y: 36,
      },
      {
        x: "2000",
        y: 88,
      },
      {
        x: "1996",
        y: 32,
      },
      {
        x: "1992",
        y: 81,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
