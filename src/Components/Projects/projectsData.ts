export type ProjectData = {
  id: number;
  name: string;
  slug: string;
  category: string;
  imagePath: string;
  imagesPath?: string[];
  videoPath?: string;
  isWide: boolean;
  isVideo?: boolean;
}

export const projectsData: ProjectData[] = [
{
  id: 1,
  name: 'PUMA PALERMO',
  slug: 'puma-palermo',
  category:
    'PH: FRANCESCO NAZARDO,\nSTYLIST: LORENZO POSOCCO, TALENT:DUA LIPA,\nPRODUCTION:TURO PRODUCTION',
  imagePath: '/assets/projects-thumbnail/dualipaxpuma.jpg',
  isWide: true,
  imagesPath: [
    `/assets/1/1.jpg`,
    `/assets/1/2.jpg`,
    `/assets/1/3.jpg`,
  ],
},
{
  id: 2,
  name: 'ELLE US – ISLAND FANTASY',
  slug: 'elle-us-island-fantasy',
  category:
    'PH: CÉSAR SEGARRA, \nSTYLIST: ANASTASIA BARBIERI, MAIN PRODUCTION: LOUIS2',
  imagePath: '/assets/projects-thumbnail/elleus-island-fantasy-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/6/1.jpg`,
    `/assets/6/2.jpg`,
    `/assets/6/3.jpg`,
    `/assets/6/4.jpg`,
    `/assets/6/5.jpg`,
    `/assets/6/6.jpg`,
    `/assets/6/7.jpg`,
  ],
},
{
  id: 3,
  name: 'ODDA MAGAZINE - Island Fantasy',
  slug: 'odda-magazine',
  category:
    'PH: MAURIZIO ANNESE, \nSTYLIST: GIORGIA TAL,  \nMAIN PRODUCTION: LOUIS2',
  imagePath: '/assets/projects-thumbnail/odda-magazine-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/5/1.jpg`,
    `/assets/5/2.jpg`,
    `/assets/5/3.jpg`,
    `/assets/5/4.jpg`,
  ],
},
{
  id: 4,
  name: 'FAY FW2023',
  slug: 'fay-fw23',
  category:
    'PH: NICOLO PARSENZIANI, \nSTYLIST: ALESSIA GIACOBINO \nE MIGUEL ARNAU',
  imagePath: '/assets/projects-thumbnail/fay-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/8/1.jpg`,
    `/assets/8/2.jpg`,
    `/assets/8/3.jpg`,
    `/assets/8/4.jpg`,
    `/assets/8/5.jpg`,
  ],
},
{
  id: 5,
  name: 'CORNELIANI SS2023',
  slug: 'corneliani-ss23',
  category:
    'PH: MARCO IMPERATORE, \nSTYLIST: EMIL REBEK, \nART DIRECTOR: ILLUMINAM AGENCY',
  imagePath: '/assets/projects-thumbnail/corneliani-05-01.jpg',
  isWide: true,
  imagesPath: [
    `/assets/10/1.jpg`,
    `/assets/10/2.jpg`,
    `/assets/10/3.jpg`,
    `/assets/10/4.jpg`,
    `/assets/10/5.jpg`,
  ],
},
{
  id: 6,
  name: 'TISSOT SEASTAR 2021 Video Campaign',
  slug: 'tissot-video',
  category: 'DOP: ANDREA DUTTO',
  imagePath: '/assets/projects-thumbnail/Tissot-01.jpg',
  videoPath: '/assets/4/tissot.mp4',
  isWide: false,
  isVideo: true,
},
{
  id: 7,
  name: 'MADAME – CHE BELLA!',
  slug: 'madame-che-bella!',
  category:
    'PH: ADRIANO RUSSO, \nSTYLIST: KONSTANTIN SPACHIS',
  imagePath: '/assets/projects-thumbnail/madame-chebella-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/7/1.jpg`,
    `/assets/7/2.jpg`,
    `/assets/7/3.jpg`,
    `/assets/7/4.jpg`,
    `/assets/7/5.jpg`,
    `/assets/7/6.jpg`,
  ],
},
{
  id: 8,
  name: 'LUISAVIAROMA',
  slug: 'luisaviaroma',
  category:
    'PH: ADRIANO RUSSO, \nSTYLIST: FLAMINIA MINNEO \nE ANDREA SANGIORGI',
  imagePath: '/assets/projects-thumbnail/luisaviaroma-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/9/1.jpg`,
    `/assets/9/2.jpg`,
    `/assets/9/3.jpg`,
    `/assets/9/4.jpg`,
    `/assets/9/5.jpg`,
    `/assets/9/6.jpg`,
    `/assets/9/7.jpg`,
  ],
},
{
  id: 9,
  name: 'ARDUSSE SS 2021',
  slug: 'ardusse-ss-2021',
  category:
    'PH: LEA COLOMBO,\nSTYLIST: GIOVANNI DARIO LAUDICINA,\nART DIRECTION: BRAGA+FEDERICO',
  imagePath: '/assets/projects-thumbnail/ardusse.jpg',
  isWide: false,
  imagesPath: [
    `/assets/2/1.jpg`,
    `/assets/2/2.jpg`,
    `/assets/2/3.jpg`,
    `/assets/2/4.jpg`,
    `/assets/2/5.jpg`,
  ],
},
{
  id: 10,
  name: 'CHURCH FW2020',
  slug: 'church-fw2020',
  category:
    'ART DIRECTION: BRAGA+FEDERICO, \nPH: ADRIANO RUSSO, \nSTYLIST: PAOLA DE CEGLI',
  imagePath: '/assets/projects-thumbnail/church-01.jpg',
  isWide: true,
  imagesPath: [
    `/assets/3/1.jpg`,
    `/assets/3/2.jpg`,
    `/assets/3/3.jpg`,
    `/assets/3/4.jpg`,
  ],
},
{
  id: 11,
  name: 'LOUIS VUITTON THE BOOK',
  slug: 'louis-vuitton-the-book',
  category:
    'PH: ANGELO PENNETTA, \nSTYLIST: EMILIE KAREH, \nMAIN PRODUCTION: LOUIS2',
  imagePath: '/assets/projects-thumbnail/louis-vuitton-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/11/1.jpg`,
    `/assets/11/2.jpg`,
  ],
},
{
  id: 12,
  name: 'MADAME – VIVA PALOMA',
  slug: 'madame-viva-paloma',
  category: 'PH: ADRIANO RUSSO, \nSTYLIST: KONSTANTIN SPACHIS',
  imagePath: '/assets/projects-thumbnail/madame-vivapaloma-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/12/1.jpg`,
    `/assets/12/2.jpg`,
    `/assets/12/3.jpg`,
    `/assets/12/4.jpg`,
    `/assets/12/5.jpg`,
    `/assets/12/6.jpg`,
    `/assets/12/7.jpg`,
  ],
},
{
  id: 13,
  name: 'TISSOT SEASTAR 2021',
  slug: 'tissot-seastar-2021',
  category:
    'PH: ADRIANO RUSSO, \nSTYLIST: GIULIO CASAGRANDE',
  imagePath: '/assets/projects-thumbnail/Tissot-02.jpg',
  isWide: false,
  imagesPath: [
    `/assets/13/1.jpg`,
    `/assets/13/2.jpg`,
  ],
},
{
  id: 14,
  name: 'THE SUNDAY TIMES STYLE',
  slug: 'the-sunday-times-style',
  category: 'PH: LAURA SCIACOVELLI, \nTALENT: JORDAN ALEXANDER',
  imagePath: '/assets/projects-thumbnail/sunday-times-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/14/1.jpg`,
    `/assets/14/2.jpg`,
    `/assets/14/3.jpg`,
    `/assets/14/4.jpg`,
    `/assets/14/5.jpg`,
  ],
},
{
  id: 15,
  name: 'GIORGIO ARMANI NEVE 2021',
  slug: 'giorgio-armani-neve-2021',
  category: 'VIDEO DIRECTOR: DANIEL CLAVERO, \nSTYLIST: CAROLA BIANCHI',
  imagePath: '/assets/projects-thumbnail/neve.jpg',
  isWide: true,
  videoPath: '/assets/15/giorgio-armani-neve.mp4',
  isVideo: true,
},
{
  id: 16,
  name: 'THE COLLECTOR - SUNGLASSES AT NIGHT',
  slug: 'the-collector-sunglasses-at-night',
  category: 'PH: ADRIANO RUSSO, \nSTYLIST: CLAUDIA GASTALDI',
  imagePath: '/assets/projects-thumbnail/collector-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/16/1.jpg`,
    `/assets/16/2.jpg`,
    `/assets/16/3.jpg`,
    `/assets/16/4.jpg`,
    `/assets/16/5.jpg`,
    `/assets/16/6.jpg`,
    `/assets/16/7.jpg`,
  ],
},
{
  id: 17,
  name: 'MIA LE JOURNAL – FEMININ SINGULIER',
  slug: 'mia-le-journal-feminin-singulier',
  category:
    'PH: ADRIANO RUSSO, \nSTYLIST: ELISABETTA CAVATORTA, \nTALENT: ANNA CLEVELAND',
  imagePath: '/assets/projects-thumbnail/mialejournal-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/17/1.jpg`,
    `/assets/17/2.jpg`,
    `/assets/17/3.jpg`,
    `/assets/17/4.jpg`,
    `/assets/17/5.jpg`,
    `/assets/17/6.jpg`,
    `/assets/17/7.jpg`,
  ],
},
{
  id: 18,
  name: 'ELLE ITALIA – LA BELLA VITA',
  slug: 'elle-italia-la-bella-vita',
  category:
    'PH: LAURA SCIACOVELLI, \nSTYLIST: MONICA CURETTI',
  imagePath: '/assets/projects-thumbnail/elleit_01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/18/1.jpg`,
    `/assets/18/2.jpg`,
    `/assets/18/3.jpg`,
    `/assets/18/5.jpg`,
    `/assets/18/6.jpg`,
  ],
},
{
  id: 19,
  name: 'CORNELIANI SS2020',
  slug: 'corneliani-ss20',
  category: 'PH: ADRIANO RUSSO, \nSTYLIST: EMIL REBEK',
  imagePath: '/assets/projects-thumbnail/corneliani-04-01.jpg',
  isWide: true,
  imagesPath: [
    `/assets/19/1.jpg`,
    `/assets/19/2.jpg`,
    `/assets/19/3.jpg`,
    `/assets/19/4.jpg`,
  ]
},
{
  id: 20,
  name: 'EA7 ARMANI SS2020',
  slug: 'ea7-armani-ss20',
  category: ' PH: SERGE GUERARD, \nSTYLIST: LUDOVICA NANNI',
  imagePath: '/assets/projects-thumbnail/ea7-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/20/1.jpg`,
    `/assets/20/2.jpg`,
    `/assets/20/3.jpg`,
  ],
},
{
  id: 21,
  name: 'ERMENEGILDO ZEGNA SS2020',
  slug: 'ermenegildo-zegna-ss20',
  category:
    'PH: PIERRE TOUSSAINT, \nCREATIVE DIRECTORS: \nALESSANDRO SARTORI \n& JERRY LORENZO, \nPRODUCTION: INTERLUDE PROJECT',
  imagePath: '/assets/projects-thumbnail/ermenegildo-zegna-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/21/1.jpg`,
    `/assets/21/2.jpg`,
    `/assets/21/3.jpg`,
  ],
},
{
  id: 22,
  name: 'MIA LE JOURNAL – ANNA IN WONDERLAND',
  slug: 'mia-le-journal-anna-in-wonderland',
  category:
    'PH: ADRIANO RUSSO, STYLIST: ELISABETTA CAVATORTA, \nTALENT: ANNA CLEVELAND',
  imagePath:
    '/assets/projects-thumbnail/mialejournal-annainwonderland-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/22/1.jpg`,
    `/assets/22/2.jpg`,
    `/assets/22/3.jpg`,
    `/assets/22/4.jpg`,
    `/assets/22/5.jpg`,
    `/assets/22/6.jpg`,
    `/assets/22/7.jpg`,
  ],
},
{
  id: 23,
  name: 'FALCONERI FW2019/20',
  slug: 'falconeri-fw-19-20',
  category: 'PH: ADRIANO RUSSO, \nSTYLIST: VIVIANA VOLPICELLA',
  imagePath: '/assets/projects-thumbnail/falconeri-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/23/1.jpg`,
    `/assets/23/2.jpg`,
    `/assets/23/3.jpg`,
  ],
},
{
  id: 24,
  name: 'CORNELIANI ADV FW2020',
  slug: 'corneliani-adv-fw2020',
  category:
    'PH: THOMAS LOHR, \nSTYLIST: JULIAN GANIO, \nART DIRECTOR: PABLO ARROYO',
  imagePath: '/assets/projects-thumbnail/corneliani-03-01.jpg',
  isWide: false, 
  imagesPath: [
    `/assets/24/1.jpg`,
    `/assets/24/2.jpg`,
    `/assets/24/3.jpg`,
  ],
},
{
  id: 25,
  name: 'ELLE UK _ THINK YOU KNOW KATIE HOLMES?',
  slug: 'elle-uk-think-you-know-katie-holmes',
  category: 'PH: DANIEL CLAVERO, \nSTYLIST: SASA THOMAN, \nTALENT: KATIE HOLMES',
  imagePath: '/assets/projects-thumbnail/elleuk-katieholmes-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/25/1.jpg`,
    `/assets/25/2.jpg`,
    `/assets/25/3.jpg`,
    `/assets/25/4.jpg`,
    `/assets/25/5.jpg`,
    `/assets/25/6.jpg`,
    `/assets/25/7.jpg`,
  ],
},
{
  id: 26,
  name: 'CESARE PACIOTTI SS2019',
  slug: 'cesare-paciotti-ss19',
  category:
    'VIDEO DIRECTOR: \nFRANCESCO BONASIA & FABRIZIO NARCISI, \nSTYLIST: ADA KOKOSAR, \nART DIRECTION BRAGA+FEDERICO',
  imagePath: '/assets/projects-thumbnail/cesare-pacciotti-02.jpg',
  isWide: true,
  isVideo: true,
  videoPath: '/assets/26/Paciotti.mp4',
},
{
  id: 27,
  name: 'ZALANDO',
  slug: 'zalando',
  category: 'PH: ALICE ROSATI, \nSTYLIST: GIORGIA TAL',
  imagePath: '/assets/projects-thumbnail/zalando-01.jpg',
  isWide: false,
  isVideo: true,
  imagesPath: [
    `/assets/27/1.jpg`,
    `/assets/27/2.jpg`,
    `/assets/27/3.jpg`,
  ],
},
{
  id: 28,
  name: 'CORNELIANI ADV FW2019',
  slug: 'corneliani-adv-fw2019',
  category:
    'PH: DANIEL RIERA, \nSTYLIST: JULIAN GANIO, \nART DIRECTOR: PABLO ARROYO',
  imagePath: '/assets/projects-thumbnail/corneliani-02-01.jpg',
  isWide: true,
  imagesPath: [
    `/assets/28/1.jpg`,
    `/assets/28/2.jpg`,
    `/assets/28/3.jpg`,
    `/assets/28/4.jpg`,
  ],
},
{
  id: 29,
  name: 'MSGM',
  slug: 'msgm-bar-basso',
  category:
    'STYLIST & CREATIVE DIRECTOR: KATIE GRAND',
  imagePath: '/assets/projects-thumbnail/barbasso1.jpg',
  isWide: false,
  imagesPath: [
    `/assets/29/1.jpg`,
    `/assets/29/2.jpg`,
    `/assets/29/3.jpg`,
    `/assets/29/4.jpg`,
    `/assets/29/5.jpg`,
    `/assets/29/6.jpg`,
    `/assets/29/7.jpg`,
  ],
},
{
  id: 30,
  name: 'GOLDENPOINT MARE 2019',
  slug: 'goldenpoint-mare-2019',
  category:
    'PH: ADRIANO RUSSO, \nSTYLIST: CLAUDIA GASTALDI, \nModels: ALENA BLOHM',
  imagePath: '/assets/projects-thumbnail/goldenpoint-02-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/30/1.jpg`,
    `/assets/30/2.jpg`,
    `/assets/30/3.jpg`,
    `/assets/30/4.jpg`,
    `/assets/30/5.jpg`,
  ],
},
{
  id: 31,
  name: 'CESARE PACIOTTI FW2018/19',
  slug: 'cesare-paciotti-fw18-19',
  category:
    'PH: ALESSIO BONI, \nSTYLIST ADA KOKOSAR, \nART DIRECTION: BRAGA+FEDERICO, \nMODEL: BETTE FRANKE',
  imagePath: '/assets/projects-thumbnail/cesarepaciotti-thumbnail.jpg',
  isWide: true,
  imagesPath: [
    `/assets/31/1.jpg`,
    `/assets/31/2.jpg`,
    `/assets/31/3.jpg`,
  ],
},
{
  id: 32,
  name: 'SISLEY YOUNG SS2018',
  slug: 'sisley-young-ss18',
  category:
    'PH: ADRIANO RUSSO, \nSTYLIST: VIVIANA VOLPICELLA, \nART DIRECTION: BRAGA+FEDERICO',
  imagePath: '/assets/projects-thumbnail/sisley-young-02-01.jpg',
  isWide: true,
  imagesPath: [
    `/assets/32/1.jpg`,
    `/assets/32/2.jpg`,
    `/assets/32/3.jpg`,
    `/assets/32/4.jpg`,
    `/assets/32/5.jpg`,
    `/assets/32/6.jpg`,
    `/assets/32/7.jpg`,
    `/assets/32/8.jpg`,
  ],
},
{
  id: 33,
  name: 'MAX MARA STUDIO SS2017',
  slug: 'max-mara-studio-ss17',
  category: 'PH: GIAMPAOLO SGURA, \nSTYLIST: SISSY VIAN',
  imagePath: '/assets/projects-thumbnail/maxmara-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/33/1.jpg`,
    `/assets/33/2.jpg`,
    `/assets/33/3.jpg`,
    `/assets/33/4.jpg`,
    `/assets/33/5.jpg`,
  ],
},
{
  id: 34,
  name: 'GOLDENPOINT MARE 2017',
  slug: 'goldenpoint-mare-17',
  category:
    'PH: ADRIANO RUSSO, \nSTYLIST: CLAUDIA GASTALDI',
  imagePath: '/assets/projects-thumbnail/goldenpoint-01.jpg',
  isWide: true,
  imagesPath: [
    `/assets/34/1.jpg`,
    `/assets/34/2.jpg`,
    `/assets/34/3.jpg`,
    `/assets/34/4.jpg`,
    `/assets/34/5.jpg`,
    `/assets/34/6.jpg`,
    `/assets/34/7.jpg`,
    `/assets/34/8.jpg`,
  ],
},
{
  id: 35,
  name: 'CORNELIANI ADV FW2017/18',
  slug: 'corneliani-adv-fw17-18',
  category:
    'PH: BRUNO STAUB, \nSTYLIST: JEROME ANDRÉ, \nART DIRECTOR: PABLO ARROYO',
  imagePath: '/assets/projects-thumbnail/corneliani-01-01.jpg',
  isWide: false,
  imagesPath: [
    `/assets/35/1.jpg`,
    `/assets/35/2.jpg`,
    `/assets/35/3.jpg`,
    `/assets/35/4.jpg`,
  ],
},
{
  id: 36,
  name: 'CESARE PACIOTTI SS2017',
  slug: 'cesare-paciotti-ss17',
  category:
    'PH: SEAN&SENG, \nSTYLIST: MARGHERITA MORO, \nART DIRECTION: BRAGA+FEDERICO, \nMODEL: MATHILDE BRANDI',
  imagePath: '/assets/projects-thumbnail/cesarepaciotti-2.jpg',
  isWide: true,
  imagesPath: [
    `/assets/36/1.jpg`,
    `/assets/36/2.jpg`,
    `/assets/36/3.jpg`,
    `/assets/36/4.jpg`,
    `/assets/36/5.jpg`,
  ],
},
{
  id: 37,
  name: 'SISLEY YOUNG SS2017',
  slug: 'sisley-young-ss17',
  category:
    'PH: ADRIANO RUSSO, \nSTYLIST: VIVIANA VOLPICELLA, \nART DIRECTION: BRAGA+FEDERICO',
  imagePath: '/assets/projects-thumbnail/sisley-young-1.jpg',
  isWide: true,
  imagesPath: [
    `/assets/37/1.jpg`,
    `/assets/37/2.jpg`,
    `/assets/37/3.jpg`,
    `/assets/37/4.jpg`,
    `/assets/37/5.jpg`,
    `/assets/37/6.jpg`,
  ],
},
{
  id: 38,
  name: 'PAL ZILERI SS2017',
  slug: 'pal-zileri-ss17',
  category:
    'PH: DYLAN DON, \nSTYLIST: ANDREA TENERANI, \nTALENT: MATTHEW GOODE',
  imagePath: '/assets/projects-thumbnail/palzileri001.jpg',
  isWide: true,
  imagesPath: [
    `/assets/38/1.jpg`,
    `/assets/38/2.jpg`,
    `/assets/38/3.jpg`,
    `/assets/38/4.jpg`,
  ],
},
  {
    id: 39,
    name: 'GQ China – Wildlife',
    slug: 'gq-china-wildlife',
    category: 'PH: GIAMPAOLO SGURA, \nSTYLIST: GRANT PEARCE',
    imagePath: '/assets/projects-thumbnail/gq-01.jpg',
    isWide: false,
    imagesPath: [
      `/assets/39/1.jpg`,
      `/assets/39/2.jpg`,
      `/assets/39/3.jpg`,
      `/assets/39/4.jpg`,
      `/assets/39/5.jpg`,
      `/assets/39/6.jpg`,
      `/assets/39/7.jpg`,
    ],
  },
]
