export type ProjectData = {
  id: number
  name: string
  slug: string
  category: string
  imagePath: string
  imagesPath?: string[]
  videoPath?: string
  isWide: boolean
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    name: 'Vogue Brasil – Cosa Nostra',
    slug: 'vogue-brasil-cosa-nostra',
    category:
      'PH: ADRIANO RUSSO, STYLIST: VIVIANA VOLPICELLA, MODEL: CHIARA SCELSI',
    imagePath: '/assets/projects-thumbnail/01-vogue.jpg',
    isWide: false,
    imagesPath: [
      `/assets/1/1.jpg`,
      `/assets/1/2.jpg`,
      `/assets/1/3.jpg`,
      `/assets/1/4.jpg`,
    ],
  },
  {
    id: 2,
    name: 'GQ China – Wildlife',
    slug: 'gq-china-wildlife',
    category: 'PH: GIAMPAOLO SGURA, STYLIST: GRANT PEARCE',
    imagePath: '/assets/projects-thumbnail/gq-01.jpg',
    isWide: false,
    imagesPath: [
      `/assets/2/1.jpg`,
      `/assets/2/2.jpg`,
      `/assets/2/3.jpg`,
      `/assets/2/4.jpg`,
      `/assets/2/5.jpg`,
      `/assets/2/6.jpg`,
      `/assets/2/7.jpg`,
    ],
  },
  {
    id: 3,
    name: 'PAL ZILERI SS2017',
    slug: 'pal-zileri-ss17',
    category:
      'PH: DYLAN DON, STYLIST: ANDREA TENERANI, TALENT: MATTHEW GOODE, LOCATION: MURALLA ROJA (ALICANTE - ES)',
    imagePath: '/assets/projects-thumbnail/palzileri001.jpg',
    isWide: true,
    imagesPath: [
      `/assets/3/1.jpg`,
      `/assets/3/2.jpg`,
      `/assets/3/3.jpg`,
      `/assets/3/4.jpg`,
    ],
  },
  {
    id: 4,
    name: 'SISLEY YOUNG SS2017',
    slug: 'sisley-young-ss17',
    category:
      'PH: ADRIANO RUSSO, STYLIST: VIVIANA VOLPICELLA, ART DIRECTION: BRAGA+FEDERICO, LOCATION: PUGLIA',
    imagePath: '/assets/projects-thumbnail/sisley-young-1.jpg',
    isWide: true,
  },
  {
    id: 5,
    name: 'CESARE PACIOTTI SS2017',
    slug: 'cesare-paciotti-ss17',
    category:
      'PH: SEAN&SENG, STYLIST: MARGHERITA MORO, ART DIRECTION: BRAGA+FEDERICO, MODEL: MATHILDE BRANDI',
    imagePath: '/assets/projects-thumbnail/cesarepaciotti-2.jpg',
    isWide: true,
  },
  {
    id: 6,
    name: 'CORNELIANI ADV FW2017/18',
    slug: 'corneliani-adv-fw17-18',
    category:
      'PH: BRUNO STAUB, STYLIST: JEROME ANDRÉ, ART DIRECTOR: PABLO ARROYO',
    imagePath: '/assets/projects-thumbnail/corneliani-01-01.jpg',
    isWide: false,
  },
  {
    id: 7,
    name: 'GOLDENPOINT MARE 2017',
    slug: 'goldenpoint-mare-17',
    category:
      'PH: ADRIANO RUSSO, STYLIST: CLAUDIA GASTALDI, LOCATION:FORMENTERA (ES)',
    imagePath: '/assets/projects-thumbnail/goldenpoint-01.jpg',
    isWide: true,
  },
  {
    id: 8,
    name: 'MAX MARA STUDIO SS2017',
    slug: 'max-mara-studio-ss17',
    category: 'PH: GIAMPAOLO SGURA, STYLIST: SISSY VIAN',
    imagePath: '/assets/projects-thumbnail/maxmara-01.jpg',
    isWide: false,
  },
  {
    id: 9,
    name: 'SISLEY YOUNG SS2018',
    slug: 'sisley-young-ss18',
    category:
      'PH: ADRIANO RUSSO, STYLIST: VIVIANA VOLPICELLA, ART DIRECTION: BRAGA+FEDERICO',
    imagePath: '/assets/projects-thumbnail/sisley-young-02-01.jpg',
    isWide: true,
  },
  {
    id: 10,
    name: 'CESARE PACIOTTI FW2018/19',
    slug: 'cesare-paciotti-fw18-19',
    category:
      'PH: ALESSIO BONI, STYLIST ADA KOKOSAR, ART DIRECTION: BRAGA+FEDERICO, MODEL: BETTE FRANKE',
    imagePath: '/assets/projects-thumbnail/cesarepaciotti-thumbnail.jpg',
    isWide: true,
  },
  {
    id: 11,
    name: 'GOLDENPOINT MARE 2019',
    slug: 'goldenpoint-mare-2019',
    category:
      'PH: ADRIANO RUSSO, STYLIST: CLAUDIA GASTALDI, LOCATION: FORMENTERA (ES)',
    imagePath: '/assets/projects-thumbnail/goldenpoint-02-01.jpg',
    isWide: false,
  },
  {
    id: 12,
    name: 'MSGM',
    slug: 'msgm-bar-basso',
    category:
      'STYLIST & CREATIVE DIRECTOR: KATIE GRAND, LOCATION: BAR BASSO MILANO',
    imagePath: '/assets/projects-thumbnail/barbasso1.jpg',
    isWide: false,
  },
  {
    id: 13,
    name: 'CORNELIANI ADV FW2019',
    slug: 'corneliani-adv-fw2019',
    category:
      'PH: DANIEL RIERA, STYLIST: JULIAN GANIO, ART DIRECTOR: PABLO ARROYO, LOCATION: TURIN',
    imagePath: '/assets/projects-thumbnail/corneliani-02-01.jpg',
    isWide: true,
  },
  {
    id: 14,
    name: 'ZALANDO',
    slug: 'zalando',
    category: 'PH: ALICE ROSATI, STYLIST: GIORGIA TAL',
    imagePath: '/assets/projects-thumbnail/zalando-01.jpg',
    isWide: false,
  },
  {
    id: 15,
    name: 'CESARE PACIOTTI SS2019',
    slug: 'cesare-paciotti-ss19',
    category:
      'VIDEO DIRECTOR: FRANCESCO BONASIA E FABRIZIO NARCISI, STYLIST: ADA KOKOSAR, ART DIRECTION BRAGA+FEDERICO',
    imagePath: '/assets/projects-thumbnail/palzileri001.jpg',
    isWide: true,
  },
  {
    id: 16,
    name: 'ELLE UK _ THINK YOU KNOW KATIE HOLMES?',
    slug: 'elle-uk-think-you-know-katie-holmes',
    category: 'PH: DANIEL CLAVERO, STYLIST: SASA THOMAN, TALENT: KATIE HOLMES',
    imagePath: '/assets/projects-thumbnail/elleuk-katieholmes-01.jpg',
    isWide: false,
  },
  {
    id: 17,
    name: 'CORNELIANI ADV FW2020',
    slug: 'corneliani-adv-fw2020',
    category:
      'PH: THOMAS LOHR, STYLIST: JULIAN GANIO, ART DIRECTOR: PABLO ARROYO',
    imagePath: '/assets/projects-thumbnail/corneliani-03-01.jpg',
    isWide: false,
  },
  {
    id: 18,
    name: 'FALCONERI FW2019/20',
    slug: 'falconeri-fw-19-20',
    category: 'PH: ADRIANO RUSSO, STYLIST: VIVIANA VOLPICELLA',
    imagePath: '/assets/projects-thumbnail/falconeri-01.jpg',
    isWide: false,
  },
  {
    id: 19,
    name: 'MIA LE JOURNAL – ANNA IN WONDERLAND',
    slug: 'mia-le-journal-anna-in-wonderland',
    category:
      'PH: ADRIANO RUSSO, STYLIST: ELISABETTA CAVATORTA, TALENT: ANNA CLEVELAND, LOCATION: COMO LAKE',
    imagePath:
      '/assets/projects-thumbnail/mialejournal-annainwonderland-01.jpg',
    isWide: false,
  },
  {
    id: 20,
    name: 'ERMENEGILDO ZEGNA SS2020',
    slug: 'ermenegildo-zegna-ss20',
    category:
      'PH: PIERRE TOUSSAINT, CREATIVE DIRECTORS ALESSANDRO SARTORI & JERRY LORENZO, PRODUCTION: MAIN INTERLUDE PROJECT',
    imagePath: '/assets/projects-thumbnail/ermenegildo-zegna-01.jpg',
    isWide: false,
  },
  {
    id: 21,
    name: 'EA7 ARMANI SS2020',
    slug: 'ea7-armani-ss20',
    category: ' PH: SERGE GUERARD, STYLIST: LUDOVICA NANNI, LOCATION: SARDINIA',
    imagePath: '/assets/projects-thumbnail/ea7-01.jpg',
    isWide: false,
  },
  {
    id: 22,
    name: 'CORNELIANI SS2020',
    slug: 'corneliani-ss20',
    category: 'PH: ADRIANO RUSSO, STYLIST: EMIL REBEK',
    imagePath: '/assets/projects-thumbnail/corneliani-04-01.jpg',
    isWide: true,
  },
  {
    id: 23,
    name: 'ELLE ITALIA – LA BELLA VITA',
    slug: 'elle-italia-la-bella-vita',
    category:
      'PH: LAURA SCIACOVELLI, STYLIST: MONICA CURETTI, LOCATION: COMO LAKE (IT)',
    imagePath: '/assets/projects-thumbnail/elleit_01.jpg',
    isWide: false,
  },
  {
    id: 24,
    name: 'MIA LE JOURNAL – FEMININ SINGULIER',
    slug: 'mia-le-journal-feminin-singulier',
    category:
      'PH: ADRIANO RUSSO, STYLIST: ELISABETTA CAVATORTA, TALENT: ANNA CLEVELAND, LOCATION: COMO LAKE',
    imagePath: '/assets/projects-thumbnail/mialejournal-01.jpg',
    isWide: false,
  },
  {
    id: 25,
    name: 'THE COLLECTOR _ SUNGLASSES AT NIGHT',
    slug: 'the-collector-sunglasses-at-night',
    category: 'PH: ADRIANO RUSSO, STYLIST: CLAUDIA GASTALDI',
    imagePath: '/assets/projects-thumbnail/collector-01.jpg',
    isWide: false,
  },
  {
    id: 26,
    name: 'GIORGIO ARMANI NEVE 2021',
    slug: 'giorgio-armani-neve-2021',
    category: 'VIDEO DIRECTOR: DANIEL CLAVERO, STYLIST: CAROLA BIANCHI',
    imagePath: '/assets/projects-thumbnail/neve.jpg',
    isWide: true,
  },
  {
    id: 27,
    name: 'THE SUNDAY TIMES STYLE',
    slug: 'the-sunday-times-style',
    category: 'PH: LAURA SCIACOVELLI, TALENT: JORDAN ALEXANDER',
    imagePath: '/assets/projects-thumbnail/sunday-times-01.jpg',
    isWide: false,
  },
  {
    id: 28,
    name: 'TISSOT SEASTAR 2021',
    slug: 'tissot-seastar-2021',
    category:
      'PH: ADRIANO RUSSO, STYLIST: GIULIO CASAGRANDE, LOCATION: IBIZA (ES)',
    imagePath: '/assets/projects-thumbnail/Tissot-01.jpg',
    isWide: false,
  },
  {
    id: 29,
    name: 'MADAME _ VIVA PALOMA',
    slug: 'madame-viva-paloma',
    category: 'PH: ADRIANO RUSSO, STYLIST: KONSTANTIN SPACHIS',
    imagePath: '/assets/projects-thumbnail/madame-vivapaloma-01.jpg',
    isWide: false,
  },
  {
    id: 30,
    name: 'LOUIS VUITTON THE BOOK',
    slug: 'louis-vuitton-the-book',
    category:
      'PH: ANGELO PENNETTA, STYLIST: EMILIE KAREH, LOCATION: VENICE, MAIN PRODUCTION: LOUIS2',
    imagePath: '/assets/projects-thumbnail/louis-vuitton-01.jpg',
    isWide: false,
  },
  {
    id: 31,
    name: 'CORNELIANI SS2023',
    slug: 'corneliani-ss23',
    category:
      'PH: MARCO IMPERATORE, STYLIST: EMIL REBEK, ART DIRECTOR: ILLUMINAM AGENCY',
    imagePath: '/assets/projects-thumbnail/corneliani-05-01.jpg',
    isWide: true,
  },
  {
    id: 32,
    name: 'LUISAVIAROMA',
    slug: 'luisaviaroma',
    category:
      'PH: ADRIANO RUSSO, STYLIST: FLAMINIA MINNEO E ANDREA SANGIORGI, LOCATION: PANTELLERIA (IT)',
    imagePath: '/assets/projects-thumbnail/luisaviaroma-01.jpg',
    isWide: false,
  },
  {
    id: 33,
    name: 'FAY FW2023',
    slug: 'fay-fw23',
    category:
      'PH: NICOLO PARSENZIANI, STYLIST: ALESSIA GIACOBINO E MIGUEL ARNAU',
    imagePath: '/assets/projects-thumbnail/fay-01.jpg',
    isWide: false,
  },
  {
    id: 34,
    name: 'MADAME – CHE BELLA!',
    slug: 'madame-che-bella!',
    category:
      'PH: ADRIANO RUSSO, STYLIST: KONSTANTIN SPACHIS, LOCATION: PANTELLERIA (IT)',
    imagePath: '/assets/projects-thumbnail/madame-chebella-01.jpg',
    isWide: false,
  },
  {
    id: 35,
    name: 'ELLE US – ISLAND FANTASY',
    slug: 'elle-us-island-fantasy',
    category:
      'PH: CÉSAR SEGARRA, STYLIST: ANASTASIA BARBIERI, LOCATION: ISOLA BELLA (MAGGIORE LAKE), MAIN PRODUCTION: LOUIS2',
    imagePath: '/assets/projects-thumbnail/elleus-island-fantasy-01.jpg',
    isWide: true,
  },
  {
    id: 36,
    name: 'ODDA MAGAZINE - Island Fantasy',
    slug: 'odda-magazine',
    category:
      'PH: MAURIZIO ANNESE, STYLIST: GIORGIA TAL, LOCATION: COMO LAKE (IT), MAIN PRODUCTION: LOUIS2',
    imagePath: '/assets/projects-thumbnail/odda-magazine-01.jpg',
    isWide: false,
  },
  {
    id: 37,
    name: 'TISSOT SEASTAR 2021 Video Campaign',
    slug: 'tissot-video',
    category: 'DOP: ANDREA DUTTO, PRODUCTION: TEN ARTIST',
    imagePath: '/assets/projects-thumbnail/Tissot-01.jpg',
    videoPath: '/assets/projects-video/tissot.mp4',
    isWide: false,
  },
  {
    id: 38,
    name: 'CHURCH FW2020',
    slug: 'church-fw2020',
    category:
      'ART DIRECTION: BRAGA + FEDERICO, PH: ADRIANO RUSSO, STYLIST: PAOLA DE CEGLI, PRODUCTION: TEN ARTIST',
    imagePath: '/assets/projects-thumbnail/church-01.jpg',
    isWide: true,
  },
  {
    id: 39,
    name: 'ARDUSSE SS 2021',
    slug: 'ardusse-ss-2021',
    category:
      'PH: LEA COLOMBO, STYLIST: GIOVANNI DARIO LAUDICINA, ART DIRECTION: BRAGA + FEDERICO, PRODUCTION: TEN ARTIST',
    imagePath: '/assets/projects-thumbnail/ardusse.jpg',
    isWide: false,
  },
]
