## SmoothSubspace dataset
#
#The data was originally intended for testing whether a clustering algorithm is able to extract smooth subspaces for clustering time series data [1]. 
#
#There are 3 classes corresponding to which cluster the time series belong to. Each time series contain a continuous subspace spanning over 5 continuous time stamps. 
#- For cluster 1, it is from time stamp 1-5 
#- For cluster 2, it is from time stamp 6-10
#- For cluster 3, it is from time stamp 11-15. 
#
#The rest of the time series are randomly generated.
#
#Train size: 150
#
#Test size: 150
#
#Missing value: No
#
#Number of classses: 3
#
#Time series length: 15
#
#There is nothing to infer from the order of examples in the train and test set.
#
#Data created by Xiaohui Huang et al. (see [1]). Data edited by Hoang Anh Dau.
#
#[1] Huang, Xiaohui, et al. "Time series k-means: A new k-means type smooth subspace clustering for time series data." Information Sciences 367 (2016): 1-13.
@problemName SmoothSubspace
@timeStamps false
@missing false
@univariate true
@equalLength true
@seriesLength 15
@classLabel true 1 2 3
@data
0.54741978,0.6073075,0.74759471,0.47154546,0.64032735,0.74125794,0.84485567,0.13412293,0.40531542,0.2404784,0.57549486,0.39085475,0.8936327,0.834369,0.86371087:1
0.41326606,0.65625952,0.61203598,0.53795802,0.65735413,0.98891162,0.330829,0.65381202,0.9828352,0.14218716,0.37818614,0.97295833,0.97178599,0.96605275,0.11920726:1
0.48782795,0.6111064,0.74180341,0.49415849,0.62960119,0.48485333,0.12085957,0.1841941,0.23737302,0.95693592,0.81311281,0.90636432,0.79468216,0.39002651,0.22868758:1
0.49081424,0.68803294,0.69542232,0.54236729,0.60208492,0.49517702,0.33293628,0.051331886,0.70671522,0.63566139,0.41342729,0.83672278,0.93350161,0.93111163,0.40138685:1
0.64147185,0.61529382,0.72069727,0.52980785,0.63777124,0.10579827,0.90085249,0.76395708,0.3691988,0.29414863,0.95738402,0.82964339,0.97480167,0.5988681,0.42645554:1
0.5137835,0.65800716,0.78760509,0.45920629,0.62547984,0.18971041,0.46706819,0.072885299,0.55778897,0.95089442,0.21773207,0.13860172,0.66846427,0.19078465,0.83336356:1
0.51236655,0.66630314,0.72445814,0.49250513,0.58357213,0.6966672,0.44602665,0.11035348,0.39679932,0.2241715,0.84321334,0.35314181,0.81095003,0.53188917,0.42939734:1
0.51864293,0.61071745,0.72654971,0.5403867,0.63387335,0.39470748,0.18907217,0.10166939,0.93375985,0.66598722,0.066946258,0.61833738,0.54366323,0.81468169,0.43517555:1
0.55803051,0.75129998,0.71409679,0.45995922,0.62395947,0.94930391,0.082071207,0.010336618,0.0078202936,0.92367561,0.67664468,0.69474323,0.55984071,0.30172678,0.58560913:1
0.49984726,0.57139224,0.70380925,0.55338867,0.53993005,0.44837291,0.58598704,0.35963491,0.36765292,0.33531133,0.37356381,0.18222751,0.12202052,0.20567234,0.45421237:1
0.44229415,0.62326145,0.73961735,0.46379269,0.56489342,0.82172118,0.12393228,0.63107,0.67329491,0.80920385,0.13786899,0.83522051,0.50388777,0.51536722,0.14315602:1
0.4927517,0.63120249,0.66928938,0.47777068,0.65492757,0.76350464,0.66641622,0.52188567,0.086666547,0.45259254,0.64011655,0.4897638,0.25784617,0.76258554,0.77555464:1
0.53062635,0.56899358,0.69849827,0.57694792,0.56000669,0.79040722,0.94793312,0.74631343,0.092352339,0.020535775,0.94557919,0.4923451,0.021555887,0.32421992,0.50784883:1
0.44732496,0.58509182,0.74931938,0.41273133,0.64462556,0.42992141,0.49035729,0.089891651,0.42956446,0.74861887,0.21780159,0.3224604,0.64680967,0.65753054,0.55937057:1
0.55766328,0.52486821,0.73291739,0.53623671,0.59274708,0.33085788,0.69516304,0.29824397,0.76895826,0.95345707,0.53413757,0.64647743,0.47062472,0.54655379,0.097697918:1
0.46965547,0.62756452,0.7280581,0.45756272,0.70049207,0.92960887,0.34787919,0.72272454,0.25779225,0.99700327,0.0098022523,0.87704872,0.93372566,0.81942224,0.086815101:1
0.53873715,0.67304769,0.69239977,0.39681723,0.62177445,0.36581618,0.24673453,0.056704689,0.20602786,0.29922502,0.08750035,0.099095282,0.26843882,0.89965099,0.3863899:1
0.52013122,0.66196816,0.68092571,0.50803167,0.59950185,0.99370462,0.22784294,0.41452254,0.08623453,0.35077674,0.57102587,0.23644493,0.019257477,0.91371168,0.56205605:1
0.50686795,0.62399861,0.72645931,0.51916066,0.51290205,0.1970538,0.44518317,0.76142589,0.037234634,0.036563018,0.62593763,0.74982221,0.74901847,0.39813088,0.51699676:1
0.45981736,0.65100301,0.69129154,0.54704764,0.61086044,0.27027042,0.53580106,0.50542814,0.27293879,0.6797339,0.8990049,0.39828223,0.26909154,0.39582223,0.10801669:1
0.55886781,0.59554855,0.74487819,0.45776369,0.66274751,0.7550771,0.64031183,0.82580886,0.69643299,0.41509339,0.35445573,0.36063657,0.78029582,0.060466772,0.5051331:1
0.44854679,0.61031232,0.77800304,0.47961427,0.58196452,0.37739554,0.41702895,0.33809772,0.12533218,0.18073776,0.41062909,0.75650954,0.66851221,0.084247052,0.27142162:1
0.49887528,0.70134883,0.6036858,0.4180568,0.57714701,0.58279097,0.054239484,0.11749285,0.07399477,0.65245107,0.922332,0.44944356,0.48454827,0.2020751,0.25728278:1
0.49092765,0.61190023,0.77468641,0.49024724,0.64127701,0.35922821,0.20549417,0.3073669,0.65549804,0.17500974,0.80209144,0.91749383,0.80037209,0.43782018,0.15250064:1
0.50149744,0.57603968,0.6497472,0.58181501,0.68981334,0.70404743,0.63519792,0.33209283,0.26617884,0.51655821,0.018177534,0.93602733,0.71567807,0.24622811,0.61739017:1
0.57491901,0.62667399,0.71197122,0.47496675,0.54764784,0.26214532,0.61471342,0.053754392,0.60353344,0.10592042,0.22771283,0.81160258,0.7201658,0.71379558,0.57161573:1
0.54743052,0.64167554,0.69545461,0.49828797,0.62001026,0.88428102,0.063404501,0.55666983,0.14202725,0.22866948,0.60263822,0.23038307,0.54915809,0.55354157,0.65591382:1
0.53783122,0.67695453,0.73998816,0.59689327,0.60410207,0.13629255,0.30130606,0.79896028,0.077346808,0.85226389,0.88654386,0.73105083,0.59318458,0.81864074,0.44384584:1
0.53657486,0.7704004,0.67478933,0.45225282,0.58934951,0.19202835,0.89075212,0.67539118,0.22895325,0.42433478,0.66061682,0.55729516,0.88415306,0.12281499,0.7842326:1
0.57963152,0.61833913,0.71617727,0.4727735,0.5580634,0.391183,0.87392741,0.77724054,0.60985717,0.52504516,0.041819864,0.97912913,0.13872464,0.72234851,0.766682:1
0.49172078,0.61376145,0.83947228,0.50867985,0.56434905,0.8085141,0.56497957,0.10915421,0.77272213,0.39888075,0.93966101,0.61947156,0.78811343,0.13433834,0.98696827:1
0.46363586,0.52240919,0.7501711,0.56026809,0.57784393,0.67143114,0.48429651,0.29993699,0.091498731,0.45788633,0.61727923,0.10153389,0.68622346,0.69480519,0.015644693:1
0.57385962,0.56460773,0.71554876,0.54428636,0.55917033,0.97274085,0.72975186,0.90515356,0.55177853,0.74254537,0.34743765,0.044165572,0.12165845,0.6642799,0.94521349:1
0.44560236,0.61523894,0.7267769,0.47508529,0.5831567,0.14760822,0.025228181,0.79835086,0.16620356,0.06001882,0.30891459,0.3661568,0.65385059,0.89786568,0.39017594:1
0.55473465,0.61137653,0.70576861,0.52299655,0.61946588,0.53034422,0.58009037,0.73626746,0.10060632,0.31752058,0.80055866,0.21014564,0.3423735,0.89619886,0.45938005:1
0.47221991,0.55839978,0.744353,0.42953025,0.59534647,0.86198048,0.93120138,0.78137705,0.12649987,0.4400356,0.68017837,0.35686899,0.59752658,0.97422163,0.59048318:1
0.5391127,0.60984462,0.7790249,0.4744995,0.6440551,0.85071267,0.55903254,0.68371557,0.98793473,0.63118873,0.78287207,0.50378079,0.40672692,0.50384008,0.14025536:1
0.50729656,0.64037676,0.64448997,0.51843116,0.57781844,0.67126437,0.14204112,0.66791612,0.65557317,0.93261357,0.76683139,0.32775496,0.93940971,0.53990509,0.082962649:1
0.52988336,0.66701878,0.73716136,0.50699669,0.62748243,0.47946322,5.2237536E-4,0.89848614,0.74913146,0.40218399,0.025134986,0.70433962,0.18920684,0.9879747,0.62005505:1
0.44992091,0.61617329,0.7313095,0.48879295,0.66110667,0.76885425,0.57370976,0.72970945,0.10881794,0.79465789,0.24416529,0.95417446,0.80082029,0.63114121,0.17104802:1
0.58451176,0.57209099,0.71651868,0.48840683,0.61081084,0.093820027,0.58144649,0.10401157,0.15184553,0.024434016,0.021649815,0.17898248,0.39901997,0.71666974,0.38993066:1
0.54610867,0.59777355,0.7433531,0.53684889,0.56298678,0.64731148,0.98995021,0.5399821,0.23482691,0.3813452,0.72577527,0.26905473,0.67511242,0.45474183,0.34689519:1
0.54475441,0.56911807,0.69348194,0.55003522,0.63038391,0.6786523,0.29553383,0.73434108,0.91380041,0.50563662,0.45469486,0.13776289,0.87255256,0.88623504,0.3001844:1
0.49319733,0.66810108,0.72525405,0.5547988,0.58380408,0.82558382,0.51337742,0.74125405,0.25104185,0.41904829,0.082592727,0.34878481,0.52120295,0.88773922,0.36718991:1
0.50462787,0.58260369,0.64479178,0.4967555,0.70444313,0.21601892,0.20597552,0.29397305,0.13015145,0.25538674,0.98434942,0.41390075,0.13350386,0.16389832,0.10075051:1
0.43761559,0.59498367,0.75376232,0.46844204,0.61948293,0.72104662,0.47952339,0.99949162,0.97059853,0.75811243,0.84156009,0.4774922,0.62027843,0.78442309,0.55669463:1
0.50265753,0.67593426,0.70935956,0.59592965,0.61125569,0.88777095,0.85299816,0.080862423,0.45173923,0.12018702,0.18214108,0.55226162,0.30774558,0.9509152,0.0045796239:1
0.51893826,0.64017604,0.73475875,0.54588663,0.59165025,0.54388593,0.52768007,0.70691742,0.73495754,0.16113397,0.37036269,0.67303117,0.36102205,0.2466872,0.51699042:1
0.52744469,0.60156922,0.65269201,0.51809093,0.64456676,0.5254044,0.92831306,0.74554607,0.78193197,0.29018527,0.91056999,0.33895568,0.047401462,0.28338438,0.59090473:1
0.49788788,0.62614449,0.67466493,0.43309311,0.65461615,0.68779609,0.12308375,0.093370517,0.43264233,0.82357447,0.08707722,0.92735622,0.92274457,0.43850882,0.056343019:1
0.70595075,0.091513167,0.75876627,0.0086476879,0.09462887,0.38672369,0.38642974,0.39219596,0.39552577,0.41314212,0.067383314,0.39926331,0.59765452,0.5135631,0.88442266:2
0.43632708,0.3416441,0.87147652,0.46348925,0.60595905,0.25898957,0.3096453,0.41665561,0.31338047,0.33921344,0.43741848,0.58243143,0.52697975,0.013655567,0.60034479:2
0.90105791,0.11611851,0.053862926,0.73495593,0.85492594,0.29133154,0.36266412,0.31064269,0.30622203,0.35806338,0.47361794,0.95711218,0.60295018,0.87351218,0.17883995:2
0.31641951,0.85875903,0.051448293,0.88407681,0.33813232,0.23420434,0.34513018,0.27363059,0.27587303,0.42872545,0.75192951,0.96877766,0.14133603,0.9044057,0.51734413:2
0.24314518,0.40384337,0.23179161,0.3279416,0.40951493,0.37846159,0.34214221,0.3026292,0.30021575,0.26193001,0.14049944,0.55544354,0.74052659,0.97585397,0.90843837:2
0.59159441,0.84637289,0.91018783,0.48889979,0.55699826,0.25297902,0.34387818,0.45715318,0.3658619,0.37206916,0.62288034,0.95938058,0.22663972,0.14276323,0.80609598:2
0.40385671,0.91106705,0.85485168,0.43329898,0.051436054,0.30759274,0.4101607,0.32703024,0.38898764,0.32666869,0.095446524,0.21327039,0.56911103,0.48848568,0.67810608:2
0.70640723,0.39268458,0.39341151,0.8444874,0.067222658,0.24979819,0.42044854,0.39015621,0.21105873,0.46718401,0.34106497,0.44680086,0.87494272,0.089611935,0.16293957:2
0.24357337,0.024855234,0.82657398,0.6153251,0.95079032,0.19907893,0.3673006,0.3363685,0.2915952,0.37552557,0.54135393,0.81598725,0.12100009,0.82596548,0.56591059:2
0.0011983968,0.82998243,0.11562588,0.40745951,0.54329943,0.20920584,0.34818199,0.26801503,0.33451515,0.4468415,0.13975876,0.56743006,0.46751702,0.37972394,0.9975519:2
0.39388343,0.97149964,0.31810473,0.78485243,0.74240507,0.23837788,0.36658677,0.41027572,0.33704899,0.34937005,0.33808479,0.027629008,0.21786512,0.1793691,0.68568714:2
0.85306363,0.27887561,0.43236779,0.22620864,0.6805662,0.29803915,0.27704866,0.3581055,0.27440912,0.41006137,0.52743396,0.60772697,0.28948487,0.68330792,0.090961688:2
0.18771295,0.2552622,0.5178456,0.7156354,0.23478264,0.26158414,0.29777127,0.40664752,0.35319913,0.47109173,0.60882145,0.41693475,0.353639,9.9941812E-4,0.7906449:2
0.85637691,0.061401442,0.72886387,0.091100175,0.29336793,0.30628205,0.29848871,0.31123287,0.25820725,0.44908349,0.39390014,0.61642133,0.065239805,0.52974569,0.62027812:2
0.55273213,0.22988608,0.40350139,0.17897515,0.85716871,0.24067474,0.31115631,0.39819623,0.35147825,0.42011108,0.24694137,0.47232107,0.041921005,0.017920369,0.67856864:2
0.90909819,0.97107523,0.59099146,0.9636122,0.81029479,0.23169943,0.27652961,0.39794765,0.25663144,0.38425464,0.014093075,0.67921966,0.36616244,0.58782063,0.87746954:2
0.1981697,0.08866584,0.27878402,0.8999828,0.36728592,0.2715319,0.37750254,0.382116,0.36087011,0.44391241,0.049564766,0.98524631,0.97014463,0.80062298,0.073841877:2
0.5485663,0.69963377,0.96240394,0.88424278,0.75687547,0.1707249,0.40618407,0.39534875,0.25508128,0.45785298,0.035590563,0.38293799,0.87503273,0.15986884,0.052485543:2
0.033179406,0.95734528,0.94632499,0.34756715,0.38456689,0.23150362,0.35060508,0.34417054,0.26569181,0.33100788,0.58836645,0.26871235,0.068339468,0.40627994,0.53168959:2
0.14248405,0.71943275,0.14765578,0.33432942,0.93218336,0.21175935,0.34514153,0.45811058,0.34146487,0.39783662,0.85665648,0.17779409,0.41376994,0.86425469,0.31930159:2
0.17930184,0.1726045,0.18384294,0.91733604,0.7552204,0.29481656,0.40628919,0.33898358,0.25796705,0.42094591,0.42896035,0.4753543,0.44301659,0.12757906,0.72674147:2
0.96155857,0.39710884,0.58701917,0.030385272,0.38619114,0.24732752,0.43148704,0.32264784,0.22879421,0.43179612,0.49810449,0.27826702,0.37936983,0.49653732,0.11885328:2
0.69961699,0.78902892,0.30434895,0.54813278,0.83233366,0.23137642,0.3768332,0.27538222,0.2726061,0.46760829,0.24178679,0.82449942,0.068134457,0.68035167,0.99051122:2
0.33653293,0.090346738,0.49794882,0.16157257,0.98045485,0.20366134,0.30453471,0.30567663,0.30405648,0.33217267,0.010177456,0.68089956,0.89893974,0.16919833,0.51577286:2
0.68003864,0.43504072,0.26383404,0.12726603,0.18809207,0.2135261,0.36574716,0.49069501,0.30042045,0.42087879,0.085552232,0.17090324,0.23987747,0.98199328,0.24409592:2
0.17581173,0.72568792,0.9624314,0.023632467,0.095949417,0.23291109,0.42256212,0.34012663,0.305618,0.43855955,0.66768176,0.52394765,0.87776393,0.81359119,0.14452691:2
0.62525518,0.31783305,0.58019183,0.36900308,0.55257218,0.30996548,0.40067419,0.40942961,0.28171065,0.36036887,0.65045932,0.95960928,0.71424241,0.37882313,0.22653446:2
0.17489207,0.72691455,0.90810242,0.90199081,0.89542352,0.26550696,0.43415798,0.28560166,0.28701091,0.50789053,0.69569093,0.83135976,0.12543996,0.54468244,0.88522004:2
0.2748114,0.57605346,0.93497909,0.63333358,0.98827714,0.12090474,0.26496768,0.37332204,0.36515467,0.41597312,0.0089150563,0.33337269,0.14233972,0.11967536,0.94600895:2
0.64553451,0.31185995,0.14250932,0.97898547,0.12553623,0.26618188,0.36159413,0.33694398,0.34403765,0.44922921,0.94316984,0.059691032,0.93597555,0.98692677,0.98605107:2
0.50439786,0.85035734,0.25683535,0.1337805,0.025150501,0.27618237,0.36872853,0.33814448,0.22277106,0.3762743,0.8064668,0.8896353,0.11714517,0.25030589,0.41318336:2
0.32192718,0.85857053,0.99424301,0.57773888,0.52855909,0.25241712,0.33625395,0.26150298,0.20627364,0.4293602,0.95797519,0.3801492,0.12017812,0.41816247,0.20449258:2
0.81871444,0.51140894,0.7566307,0.12703694,0.21928359,0.25721589,0.36249948,0.3514715,0.31693217,0.42594564,0.59342057,0.82630672,0.57135721,0.24287617,0.077487482:2
0.93937977,0.057654361,0.80506323,0.95410279,0.0348657,0.13303806,0.34614771,0.33904121,0.36882045,0.36432688,0.94970635,0.34287051,0.26530173,0.070221472,0.51754115:2
0.59888561,0.58158208,0.032939893,0.3774551,0.58274681,0.22413506,0.26369987,0.38020684,0.25365593,0.39548984,0.45038815,0.75783871,0.87047537,0.51100815,0.92580981:2
0.90435548,0.23693038,0.039184487,0.76210971,0.45642536,0.22006484,0.33051599,0.24155982,0.2752946,0.36805861,0.60741579,0.059641624,0.084970746,0.21965593,0.18738289:2
0.0013005687,0.5824703,0.57099108,0.89844414,0.45730872,0.22499303,0.41131575,0.40126262,0.27112946,0.43902925,0.1381204,0.52410601,0.83502747,0.876351,0.56926817:2
0.4390372,0.75222797,0.90120809,0.44094328,0.89283332,0.18908992,0.40694511,0.3318772,0.25892304,0.4206663,0.084370471,0.37957349,0.67116397,0.24326952,0.69656869:2
0.93566138,0.32094103,0.55855903,0.98097816,0.20773062,0.21476978,0.24952724,0.4061641,0.31258549,0.37510706,0.3525601,0.46201816,0.69924608,0.86272213,0.3160712:2
0.268076,0.65004075,0.47607972,0.5966471,0.83508824,0.29441593,0.26357611,0.34055058,0.32246536,0.38792337,0.38431362,0.70610759,0.50274626,0.036877522,0.91080223:2
0.95467827,0.27321671,0.97483615,0.64274174,0.40179092,0.18324108,0.33058823,0.35776435,0.31530452,0.39845759,0.86082735,0.024027325,0.069367603,0.54647965,0.053597815:2
0.72826185,0.060606367,0.99548106,0.23224015,0.32580626,0.21900862,0.33230033,0.39976622,0.28138424,0.37051596,0.58518164,0.9912032,0.62869334,0.83427016,0.85061407:2
0.89092882,0.56935818,0.42422671,0.049631902,0.82797755,0.26167448,0.34882669,0.38590896,0.37973806,0.39503376,0.13968928,0.19320231,0.89970978,0.7266371,0.68528857:2
0.53242648,0.62026004,0.76367332,0.46123176,0.53860144,0.27468688,0.39061661,0.48851888,0.32291873,0.41266859,0.43343484,0.98668004,0.4098165,0.62990794,0.35503332:2
0.18878997,0.5293599,0.96387013,0.11080932,0.74850896,0.19563851,0.38952533,0.4197036,0.2986217,0.35543406,0.43336907,0.73902186,0.87541361,0.0022381986,0.62239143:2
0.092147685,0.63927615,0.66176491,0.90945456,0.73140747,0.24507856,0.39137933,0.40964848,0.31431957,0.38079478,0.78962047,0.43777311,0.68490849,0.084423104,0.73455913:2
0.37086472,0.44801971,0.80226157,0.04921318,0.82407821,0.22724194,0.30839589,0.32533853,0.29973703,0.40310094,0.93800201,0.17523944,0.74322057,0.83275425,0.049861885:2
0.53228307,0.28510809,0.40396937,0.81900058,0.35001392,0.35666437,0.24832342,0.31340475,0.28590121,0.31606579,0.56784115,0.83700627,0.49564422,0.5874034,0.1408738:2
0.37601112,0.5949743,0.7896437,0.31110964,0.03638203,0.21929104,0.30562434,0.39660526,0.3961719,0.38547901,0.44700731,0.2164714,0.45775389,0.56426092,0.66396825:2
0.48267138,0.28482373,0.38264623,0.54010583,0.40773081,0.25657327,0.36565311,0.42505021,0.25680821,0.49047627,0.27982892,0.34300581,0.058109458,0.92271343,0.91318235:2
0.95424432,0.78109227,0.7027648,0.33860368,0.39906666,0.50455019,0.50432425,0.51665717,0.50115009,0.026146448,0.92200497,0.76904183,0.90056165,0.81362141,0.87910875:3
0.6521996,0.33199749,0.15820978,0.95252815,0.033691793,0.49285518,0.29801706,0.26624188,0.63957022,0.74406657,0.81771653,0.71464977,0.8951906,0.81914174,0.88231391:3
0.078228709,0.56033331,0.27699524,0.36869972,0.28445899,0.92048498,0.035016022,0.64055884,0.18160347,0.36046762,0.92271616,0.78978584,0.94138555,0.86087932,0.94057863:3
0.053824302,0.0075074041,0.67245096,0.9323032,0.23638696,0.95075798,0.81092079,0.31879096,0.87321934,0.24459628,0.89658812,0.64627739,0.89994793,0.8871335,0.99453577:3
0.59419418,0.97633451,0.37521005,0.80406926,0.15253808,0.81061496,0.82619903,0.85829739,0.43237683,0.16883176,0.99198671,0.72137193,0.87609786,0.88256271,0.82122485:3
0.70057951,0.1535188,0.72132693,0.70590001,0.66015463,0.96425662,0.48267301,0.24364019,0.57330655,0.65558237,0.86189791,0.7248712,0.90736658,0.75677131,0.85449277:3
0.13194748,0.51009971,0.50760221,0.54151803,0.60880836,0.24566664,0.63657657,0.67877834,0.48912552,0.76733587,0.9119898,0.82786727,0.94528389,0.80766315,1.0066368:3
0.038001535,0.79564163,0.014763663,0.20643102,0.93511412,0.14276583,0.37668919,0.84217757,0.76833515,0.65468831,0.82797095,0.71573753,0.93496499,0.91241142,0.90394677:3
0.02725022,0.11830791,0.34664869,0.26812443,0.70858815,0.21517653,0.20715665,0.49389304,0.72918022,0.74150246,0.91905022,0.70347495,0.84700039,0.85603822,0.93209062:3
0.65561109,0.96770288,0.81711885,0.82075025,0.45442456,0.85937785,0.25132928,0.5705997,0.48037223,0.16948443,0.86677134,0.72132413,0.7564595,0.87570503,0.89385096:3
0.24251631,0.87091252,0.81623529,0.81768774,0.37751152,0.28764751,0.83917948,0.42447593,0.70948498,0.012755563,0.87386715,0.73127284,0.92281011,0.87633649,0.97624673:3
0.748747,0.013794557,0.068027694,0.10512413,0.91960325,0.20603738,0.35462285,0.75415259,0.97111066,0.46935931,0.83252027,0.80991841,0.94226161,0.79735148,0.88873344:3
0.61009225,0.59819453,0.57461656,0.99537381,0.50577556,0.33968781,0.88632811,0.19880716,0.5172544,0.70963886,0.84967706,0.74710323,0.87185016,0.91807121,0.85958516:3
0.54327024,0.3864228,0.40296991,0.13343177,0.11381718,0.60253726,0.81652697,0.98545695,0.8964049,0.9553721,0.88901231,0.7299261,0.83919386,0.86260084,0.9026457:3
0.0478438,0.30080909,0.57424955,0.50341384,0.4113081,0.28559171,0.98856789,0.67533033,0.21376352,0.21460971,0.89680377,0.68064078,0.87941833,0.89891278,0.9374386:3
0.36831104,0.30440358,0.34210517,0.46329488,0.089569403,0.70811338,0.54645258,0.96166308,0.37533228,0.92801086,0.96457529,0.67684477,0.89345628,0.89071269,0.93701288:3
0.93820041,0.89596983,0.53168531,0.95190651,0.66889569,0.78108452,0.040156385,0.56287923,0.3424214,0.88373732,0.93683394,0.74297519,0.8642729,0.88758121,0.8944654:3
0.48250662,0.38056017,0.56662058,0.67772491,0.58617767,0.036759737,0.46390919,0.33541992,0.10793525,0.0050288833,0.99543943,0.66504896,0.88613375,0.84559397,0.93009084:3
0.93668361,0.72284357,0.7938776,0.9811757,0.26286081,0.084626639,0.68023639,0.60725739,0.14863255,0.37715925,0.92973373,0.66505964,0.95556414,0.8515087,0.96203602:3
0.13203882,0.99038528,0.069973149,0.3471863,0.65684648,0.57025587,0.72359591,0.21990078,0.63286879,0.43794656,0.93201809,0.78983392,0.83773461,0.83861513,0.89238394:3
0.20518125,0.71176376,0.12026277,0.23492644,0.71271092,0.093624528,0.63345504,0.54847192,0.71155643,0.27145292,0.78785486,0.73731192,0.87520472,0.88351885,0.92206861:3
0.75285784,0.85180595,0.053575171,0.56323762,0.53999609,0.42174648,0.3991934,0.99977312,0.0021220248,0.25940116,0.91093931,0.7708382,0.89797983,0.78657054,0.9266982:3
0.75897416,0.11356634,0.20350405,0.060950222,0.22165275,0.055848321,0.58229481,0.96647199,0.82381657,0.75978347,0.81332703,0.75847541,0.88986081,0.912228,0.91996507:3
0.73825699,0.79814171,0.4128044,0.91053578,0.82898189,0.79681579,0.6861816,0.74455771,0.29810486,0.79104032,1.0075657,0.66113673,0.92812803,0.77781906,0.86851191:3
0.9522051,0.24895228,0.54697709,0.7174696,0.79675142,0.91892249,0.84483345,0.63057279,0.86233921,0.42706235,0.83543068,0.75671138,0.86252059,0.81534046,0.95549506:3
0.44293467,0.94602038,0.19915718,0.56835392,0.4646994,0.58446484,0.11628753,0.32677374,0.46540342,0.80861251,0.79394752,0.75809114,0.85922426,0.85127514,0.85576573:3
0.62042519,0.19002548,0.52112205,0.076272889,0.83130168,0.20379685,0.23337541,0.1766612,0.77714644,0.38786289,0.83178732,0.72566459,0.93881076,0.82054483,0.8438545:3
0.2418723,0.3567872,0.92884514,0.70089217,0.052305221,0.67115104,0.12826506,0.86872654,0.16356616,0.032335553,0.81039066,0.7251233,1.0135466,0.78885266,0.86246639:3
0.094807682,0.77723243,0.32977967,0.86098152,0.19569573,0.096226761,0.51266553,0.42431077,0.15134056,0.60447846,0.89610063,0.6906238,0.99679121,0.92014125,0.84391352:3
0.31175495,0.74084363,0.57677586,0.53124287,0.57507827,0.64507233,0.69530681,0.43992312,0.74655143,0.92685957,0.86540414,0.75519127,0.87106454,0.93255596,1.0087594:3
0.59704523,0.18675954,0.77499418,0.7680579,0.095945002,0.95914134,0.22604544,0.42548312,0.76629936,0.52231478,1.0090483,0.79500572,0.98664189,0.78848233,0.89494067:3
0.56085674,0.28807064,0.97643856,0.27821104,0.32617617,0.048602298,0.39909391,0.24350437,0.46462777,0.90913902,0.85919145,0.75628946,0.99653718,0.84082339,0.97386217:3
0.99334276,0.91287543,0.81377958,0.44087647,0.93927374,0.13821634,0.3390898,0.8062926,0.12609883,0.92573618,0.86879919,0.73228481,0.87701473,0.89013216,0.90317649:3
0.87618434,0.039022977,0.33461939,0.83251332,0.95805948,0.2438731,0.75708394,0.53511727,0.93755924,0.44787273,0.85696494,0.72907949,0.86613055,0.84662443,0.95371975:3
0.30807691,0.62563639,0.68712911,0.15840608,0.48998367,0.99499026,0.88045693,0.18838954,0.85984571,0.053000053,0.91047571,0.71475594,0.95473848,0.93203769,0.91202135:3
0.68039499,0.35456934,0.88990423,0.36322862,0.1226239,0.40153635,0.097281349,0.13492064,0.1792095,0.11549381,0.81552482,0.71335044,0.92930239,0.87537862,1.0170292:3
0.16923796,0.95119709,0.098756312,0.72937194,0.16264302,0.61553188,0.23680481,0.55348342,0.52507308,0.99130692,0.94719848,0.71728542,0.85193671,0.84276889,0.87890248:3
0.73071802,0.054188841,0.9122189,0.58736174,0.81950887,0.98099711,0.32456201,0.40029288,0.13886484,0.47910978,0.93202052,0.69262161,0.97544209,0.88308159,0.93173515:3
0.4794191,0.55049535,0.68757925,0.33771199,0.52292776,0.073094306,0.21408145,0.64207942,0.22930625,0.10166243,0.88767509,0.76689296,0.84680103,0.87328724,0.98872162:3
0.45096349,0.51106409,0.20423567,0.66083609,0.89511815,0.3845822,0.83286482,0.61354588,0.49672068,0.94490865,0.86334314,0.74106163,0.94698386,0.83225718,0.89689413:3
0.37471114,0.0060109731,0.52085048,0.59708292,0.21377757,0.40438386,0.54369499,0.11897538,0.47523516,0.81102022,0.88326701,0.72133172,0.90508475,0.79095122,0.80772381:3
0.30429847,0.49740828,0.8423879,0.12501438,0.38064229,0.95058159,0.38204092,0.59356077,0.53077814,0.8818992,0.9491758,0.68817746,0.80807948,0.84207723,0.94759622:3
0.51336399,0.70870462,0.064931535,0.26221899,0.74766998,0.38333993,0.72592766,0.8210194,0.43675193,0.49231313,0.89770598,0.77340123,0.87669354,0.85264874,0.91090292:3
0.032632572,0.034630061,0.4967222,0.16688971,0.7794895,0.96174561,0.79536157,0.22665314,0.95751435,0.207912,0.78668592,0.74863005,0.81069107,0.85961909,0.98763352:3
0.44273998,0.92586854,0.81131916,0.80583826,0.92583799,0.47212287,0.57054822,0.95713916,0.17889923,0.78251578,0.87473639,0.80074435,0.81614026,0.80690351,0.92617417:3
0.47587902,0.59323579,0.32990398,0.53825033,0.15555259,0.80223702,0.6556931,0.90941148,0.50508608,0.8311115,0.85319596,0.70786862,0.87961135,0.89232185,0.91633642:3
0.89559653,0.45299861,0.78296819,0.85971704,0.5827812,0.25150379,0.86133475,0.57083663,0.97570713,0.70544119,0.85416668,0.77149292,0.91206823,0.73331183,0.79050158:3
0.26117617,0.60896146,0.31920578,0.45897387,0.7714783,0.23351581,0.083582114,0.11192264,0.34931954,0.99390364,0.90479147,0.7566711,0.8996626,0.81761671,0.87107807:3
0.33195802,0.45112379,0.86513265,0.90309761,0.95484731,0.95356905,0.49266691,0.70300439,0.025692285,0.039603847,0.80069443,0.75087342,0.95223482,0.80466262,0.87575264:3
0.84408072,0.73837651,0.97614654,0.60816099,0.22734148,0.20991508,0.17869903,0.55935707,0.86134818,0.10532018,0.85889568,0.79781417,0.9333828,0.91627555,0.90414234:3