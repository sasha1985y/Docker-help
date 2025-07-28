import * as constants from './constants.js';

i18next.init({
    lng: localStorage.getItem('language') || 'en',
    resources: {
        /*en, zh, nl, fr, de, it, ja, ko, ms, es,*/
        'en (English)': {
            translation: {
                usage: {
                    opt1: "Basic commands",
                    opt2: "Common commands",
                    opt3: "Control commands",
                    opt4: "Swarm commands",
                    opt5: "Global options",
                    opt6: "Configuration files",
                    opt7: "Common commands compose",
                    opt8: "Compose options",
                    opt9: "Home",

                }
            }
        },
        'zh (中文)': {
            translation: {
                usage: {
                    opt1: "基本命令",
                    opt2: "常用命令",
                    opt3: "控制命令",
                    opt4: "Swarm命令",
                    opt5: "全局选项",
                    opt6: "配置文件",
                    opt7: "常用命令 compose",
                    opt8: "Compose 选项",
                    opt9: "主页",

                }
            }
        },
        'nl (Nederlands)': {
            translation: {
                usage: {
                    opt1: "Basiscommando's",
                    opt2: "Algemene commando's",
                    opt3: "Besturingscommando's",
                    opt4: "Swarm-commando's",
                    opt5: "Globale opties",
                    opt6: "Configuratiebestanden",
                    opt7: "Algemene commando's compose",
                    opt8: "Compose-opties",
                    opt9: "Startpagina",

                }
            }
        },
        'fr (français)': {
            translation: {
                usage: {
                    opt1: "Commandes de base",
                    opt2: "Commandes courantes",
                    opt3: "Commandes de contrôle",
                    opt4: "Commandes Swarm",
                    opt5: "Options globales",
                    opt6: "Fichiers de configuration",
                    opt7: "Commandes courantes compose",
                    opt8: "Options Compose",
                    opt9: "Accueil",

                }
            }
        },
        'de (Deutsch)': {
            translation: {
                usage: {
                    opt1: "Grundbefehle",
                    opt2: "Allgemeine Befehle",
                    opt3: "Steuerbefehle",
                    opt4: "Swarm-Befehle",
                    opt5: "Globale Optionen",
                    opt6: "Konfigurationsdateien",
                    opt7: "Allgemeine Befehle compose",
                    opt8: "Compose-Optionen",
                    opt9: "Startseite",

                }
            }
        },
        'it (italiano)': {
            translation: {
                usage: {
                    opt1: "Comandi di base",
                    opt2: "Comandi comuni",
                    opt3: "Comandi di controllo",
                    opt4: "Comandi Swarm",
                    opt5: "Opzioni globali",
                    opt6: "File di configurazione",
                    opt7: "Comandi comuni compose",
                    opt8: "Opzioni Compose",
                    opt9: "Home",

                }
            }
        },
        'ja (日本語)': {
            translation: {
                usage: {
                    opt1: "基本コマンド",
                    opt2: "一般的なコマンド",
                    opt3: "制御コマンド",
                    opt4: "Swarmコマンド",
                    opt5: "グローバルオプション",
                    opt6: "設定ファイル",
                    opt7: "一般的なコマンド compose",
                    opt8: "Composeオプション",
                    opt9: "ホーム",

                }
            }
        },
        'ko (한국어)': {
            translation: {
                usage: {
                    opt1: "기본 명령어",
                    opt2: "일반 명령어",
                    opt3: "제어 명령어",
                    opt4: "Swarm 명령어",
                    opt5: "전역 옵션",
                    opt6: "구성 파일",
                    opt7: "일반 명령어 compose",
                    opt8: "Compose 옵션",
                    opt9: "홈",

                }
            }
        },
        'ms (Bahasa Melayu)': {
            translation: {
                usage: {
                    opt1: "Perintah asas",
                    opt2: "Perintah umum",
                    opt3: "Perintah kawalan",
                    opt4: "Perintah Swarm",
                    opt5: "Pilihan global",
                    opt6: "Fail konfigurasi",
                    opt7: "Perintah umum compose",
                    opt8: "Pilihan Compose",
                    opt9: "Halaman utama",

                }
            }
        },
        'es (español)': {
            translation: {
                usage: {
                    opt1: "Comandos básicos",
                    opt2: "Comandos comunes",
                    opt3: "Comandos de control",
                    opt4: "Comandos Swarm",
                    opt5: "Opciones globales",
                    opt6: "Archivos de configuración",
                    opt7: "Comandos comunes compose",
                    opt8: "Opciones Compose",
                    opt9: "Inicio",

                }
            }
        },
        /*aa, ab, af, am, ar, as, ay, az, ba, be,*/ 
        'aa (afar)': {
            translation: {
                usage: {
                    opt1: "Hawada aasaasiga ah",
                    opt2: "Amarada guud",
                    opt3: "Amarada maamul",
                    opt4: "Swarm-amaro",
                    opt5: "Ikhtiyaarada caalamiga ah",
                    opt6: "Faylasha qaabeynta",
                    opt7: "Amarada guud ee compose",
                    opt8: "Compose ikhtiyaarada",
                    opt9: "Guriga",

                }
            }
        },
        'ab (абхазский)': {
            translation: {
                usage: {
                    opt1: "Аҧсуа командқәа",
                    opt2: "Акомандақәа рҵа",
                    opt3: "Ауправлатә командқәа",
                    opt4: "Swarm-командқәа",
                    opt5: "Аглобалтә опциа",
                    opt6: "Аконфигурациақәа",
                    opt7: "Акомандақәа compose",
                    opt8: "Compose опциа",
                    opt9: "Ашықәс",

                }
            }
        },
        'af (Afrikaans)': {
            translation: {
                usage: {
                    opt1: "Basiese opdragte",
                    opt2: "Algemene opdragte",
                    opt3: "Bestuursopdragte",
                    opt4: "Swarm-opdragte",
                    opt5: "Globale opsies",
                    opt6: "Konfigurasie lêers",
                    opt7: "Algemene opdragte compose",
                    opt8: "Compose opsies",
                    opt9: "Tuis",

                }
            }
        },
        'am (አማርኛ)': {
            translation: {
                usage: {
                    opt1: "መሠረታዊ ትዕዛዞች",
                    opt2: "አጠቃላይ ትዕዛዞች",
                    opt3: "አስተዳደር ትዕዛዞች",
                    opt4: "Swarm ትዕዛዞች",
                    opt5: "አለምአቀፍ አማራጮች",
                    opt6: "ኮንፊግሬሽን ፋይሎች",
                    opt7: "አጠቃላይ ትዕዛዞች compose",
                    opt8: "Compose አማራጮች",
                    opt9: "መነሻ",

                }
            }
        },
        'ar (العربية)': {
            translation: {
                usage: {
                    opt1: "الأوامر الأساسية",
                    opt2: "الأوامر العامة",
                    opt3: "أوامر الإدارة",
                    opt4: "Swarm-الأوامر",
                    opt5: "الخيارات العالمية",
                    opt6: "ملفات التكوين",
                    opt7: "الأوامر العامة compose",
                    opt8: "خيارات Compose",
                    opt9: "الرئيسية",

                }
            }
        },
        'as (অসমীয়া)': {
            translation: {
                usage: {
                    opt1: "মৌলিক আদেশসমূহ",
                    opt2: "সাধাৰণ আদেশসমূহ",
                    opt3: "পৰিচালনাৰ আদেশসমূহ",
                    opt4: "Swarm-আদেশসমূহ",
                    opt5: "গ্ল'বেল বিকল্পসমূহ",
                    opt6: "কনফিগাৰেচন ফাইলসমূহ",
                    opt7: "সাধাৰণ আদেশসমূহ compose",
                    opt8: "Compose বিকল্পসমূহ",
                    opt9: "ঘৰলৈ",

                }
            }
        },
        'ay (aymar aru)': {
            translation: {
                usage: {
                    opt1: "Jach'a amuyt'äwi",
                    opt2: "Suma amuyt'äwi",
                    opt3: "Uñtawi amuyt'äwi",
                    opt4: "Swarm-amuyt'äwi",
                    opt5: "Global opciones",
                    opt6: "Configuración archivos",
                    opt7: "Suma amuyt'äwi compose",
                    opt8: "Compose opciones",
                    opt9: "Jach'a",

                }
            }
        },
        'az (azərbaycan dili)': {
            translation: {
                usage: {
                    opt1: "Əsas əmrlər",
                    opt2: "Ümumi əmrlər",
                    opt3: "İdarəetmə əmrləri",
                    opt4: "Swarm-əmrləri",
                    opt5: "Qlobal seçimlər",
                    opt6: "Konfiqurasiya faylları",
                    opt7: "Ümumi əmrlər compose",
                    opt8: "Compose seçimləri",
                    opt9: "Ev",

                }
            }
        },
        'ba (башҡорт теле)': {
            translation: {
                usage: {
                    opt1: "Нигеҙ командаһы",
                    opt2: "Глобаль командаһы",
                    opt3: "Идаралыҡ командаһы",
                    opt4: "Swarm-командалары",
                    opt5: "Глобаль варианттар",
                    opt6: "Конфигурация файлдары",
                    opt7: "Глобаль команда compose",
                    opt8: "Compose варианттары",
                    opt9: "Өйгә",

                }
            }
        },
        'be (Беларуская)': {
            translation: {
                usage: {
                    opt1: "Асноўныя каманды",
                    opt2: "Агульныя каманды",
                    opt3: "Кіруючыя каманды",
                    opt4: "Swarm-каманды",
                    opt5: "Глабальныя опцыі",
                    opt6: "Канфігурацыйныя файлы",
                    opt7: "Агульныя каманды compose",
                    opt8: "Compose опцыі",
                    opt9: "Дадому",

                }
            }
        },
        /*bg, bh, bi, bn, bo, br, ca, co, cs, cy,*/ 
        'bg (български)': {
            translation: {
                usage: {
                    opt1: "Основни команди",
                    opt2: "Общи команди",
                    opt3: "Управляващи команди",
                    opt4: "Swarm-команди",
                    opt5: "Глобални опции",
                    opt6: "Конфигурационни файлове",
                    opt7: "Общи команди compose",
                    opt8: "Compose опции",
                    opt9: "Начало",

                }
            }
        },
        'bh (भोजपुरी)': {
            translation: {
                usage: {
                    opt1: "मूल आदेश",
                    opt2: "सामान्य आदेश",
                    opt3: "प्रबंधन आदेश",
                    opt4: "Swarm-आदेश",
                    opt5: "वैश्विक विकल्प",
                    opt6: "कॉन्फ़िगरेशन फ़ाइलें",
                    opt7: "सामान्य आदेश compose",
                    opt8: "Compose विकल्प",
                    opt9: "घर",

                }
            }
        },
        'bi (Bislama)': {
            translation: {
                usage: {
                    opt1: "Ol koman blong basik",
                    opt2: "Ol koman blong jeneral",
                    opt3: "Ol koman blong managemen",
                    opt4: "Swarm-ol koman",
                    opt5: "Global ol opsi",
                    opt6: "Konfiguresen fael",
                    opt7: "Ol koman blong jeneral compose",
                    opt8: "Compose ol opsi",
                    opt9: "Hau",

                }
            }
        },
        'bn (বাংলা)': {
            translation: {
                usage: {
                    opt1: "মৌলিক আদেশগুলো",
                    opt2: "সাধারণ আদেশগুলো",
                    opt3: "প্রশাসনিক আদেশগুলো",
                    opt4: "Swarm-আদেশগুলো",
                    opt5: "গ্লোবাল বিকল্পগুলো",
                    opt6: "কনফিগারেশন ফাইলগুলো",
                    opt7: "সাধারণ আদেশগুলো compose",
                    opt8: "Compose বিকল্পগুলো",
                    opt9: "বাড়ি",

                }
            }
        },
        'bo (བོད་ཡིག)': {
            translation: {
                usage: {
                    opt1: "རྟེན་སྡེ་བརྗོད་པ།",
                    opt2: "ས་སྟོན་བརྗོད་པ།",
                    opt3: "འདོད་འབྱོར་བརྗོད་པ།",
                    opt4: "Swarm-བརྗོད་པ།",
                    opt5: "འབྱོར་སྟོན་བསྡུས་པ།",
                    opt6: "འབྱོར་སྟོན་དཔྱི་ཆ་པ།",
                    opt7: "ས་སྟོན་བརྗོད་པ compose",
                    opt8: "Compose འབྱོར་སྟོན།",
                    opt9: "སྐྱས་པ།",

                }
            }
        },
        'br (brezhoneg)': {
            translation: {
                usage: {
                    opt1: "Kemandioù diazezoù",
                    opt2: "Kemandioù general",
                    opt3: "Kemandioù meneget",
                    opt4: "Swarm-kemandioù",
                    opt5: "Dibaboù globel",
                    opt6: "Fichieroù konfigurañ",
                    opt7: "Kemandioù general compose",
                    opt8: "Dibaboù Compose",
                    opt9: "Ti",

                }
            }
        },
        'ca (català)': {
            translation: {
                usage: {
                    opt1: "Ordres bàsiques",
                    opt2: "Ordres generals",
                    opt3: "Ordres de gestió",
                    opt4: "Swarm-ordres",
                    opt5: "Opcions globals",
                    opt6: "Fitxers de configuració",
                    opt7: "Ordres generals compose",
                    opt8: "Opcions Compose",
                    opt9: "Inici",

                }
            }
        },
        'co (corsu)': {
            translation: {
                usage: {
                    opt1: "Comandi basi",
                    opt2: "Comandi generali",
                    opt3: "Comandi di gestione",
                    opt4: "Swarm-comandi",
                    opt5: "Opzioni globali",
                    opt6: "File di cunfigurazione",
                    opt7: "Comandi generali compose",
                    opt8: "Opzioni Compose",
                    opt9: "Casa",

                }
            }
        },
        'cs (čeština)': {
            translation: {
                usage: {
                    opt1: "Základní příkazy",
                    opt2: "Obecné příkazy",
                    opt3: "Správní příkazy",
                    opt4: "Swarm-příkazy",
                    opt5: "Globální možnosti",
                    opt6: "Konfigurační soubory",
                    opt7: "Obecné příkazy compose",
                    opt8: "Možnosti Compose",
                    opt9: "Domů",

                }
            }
        },
        'cy (Cymraeg)': {
            translation: {
                usage: {
                    opt1: "Gorchmynion sylfaenol",
                    opt2: "Gorchmynion cyffredinol",
                    opt3: "Gorchmynion rheoli",
                    opt4: "Swarm-gorchmynion",
                    opt5: "Dewisiadau byd-eang",
                    opt6: "Ffeiliau cyfrestru",
                    opt7: "Gorchmynion cyffredinol compose",
                    opt8: "Dewisiadau Compose",
                    opt9: "Adref",

                }
            }
        },
        /*da, dz, el, eo, et, eu, fa, fi, fj, fo,*/
        'da (dansk)': {
            translation: {
                usage: {
                    opt1: "Grundlæggende kommandoer",
                    opt2: "Generelle kommandoer",
                    opt3: "Kontrolkommandoer",
                    opt4: "Swarm-kommandoer",
                    opt5: "Globale indstillinger",
                    opt6: "Konfigurationsfiler",
                    opt7: "Generelle compose-kommandoer",
                    opt8: "Compose-indstillinger",
                    opt9: "Hjem",

                }
            }
        },
        'dz (རྫོང་ཁ)': {
            translation: {
                usage: {
                    opt1: "རྩོམ་འབད་བྱེད་ཀྱི་དགོངས་པ།",
                    opt2: "དགོངས་པ་འབད་བྱེད་ཀྱི་དགོངས་པ།",
                    opt3: "བསྡུས་འབད་བྱེད་ཀྱི་དགོངས་པ།",
                    opt4: "Swarm-འབད་བྱེད་ཀྱི་དགོངས་པ།",
                    opt5: "སྐྱ་ཡུལ་སྤྱ་ཚུལ།",
                    opt6: "སྐྱ་ཡུལ་སྤྱ་ཚུལ་སྐྱ་ཡུལ།",
                    opt7: "སྐྱ་ཡུལ compose-འབད་བྱེད་ཀྱི་དགོངས་པ།",
                    opt8: "Compose-སྐྱ་ཡུལ།",
                    opt9: "སྟེ་རྒྱས།",

                }
            }
        },
        'el (Ελληνικά)': {
            translation: {
                usage: {
                    opt1: "Βασικές εντολές",
                    opt2: "Γενικές εντολές",
                    opt3: "Εντολές ελέγχου",
                    opt4: "Swarm εντολές",
                    opt5: "Παγκόσμιες επιλογές",
                    opt6: "Αρχεία ρυθμίσεων",
                    opt7: "Γενικές εντολές compose",
                    opt8: "Επιλογές Compose",
                    opt9: "Αρχική",

                }
            }
        },
        'eo (Esperanto)': {
            translation: {
                usage: {
                    opt1: "Bazaj komandaj",
                    opt2: "Ĝeneralaj komandaj",
                    opt3: "Kontrolaj komandaj",
                    opt4: "Swarm-komandaj",
                    opt5: "Globaj opcioj",
                    opt6: "Konfiguraj dosieroj",
                    opt7: "Ĝeneralaj compose-komandaj",
                    opt8: "Compose-opcioj",
                    opt9: "Hejmo",

                }
            }
        },
        'et (eesti)': {
            translation: {
                usage: {
                    opt1: "Põhikäsud",
                    opt2: "Üldised käsud",
                    opt3: "Kontrollkäsklused",
                    opt4: "Swarm-käsud",
                    opt5: "Globaalne valikud",
                    opt6: "Konfiguratsioonifailid",
                    opt7: "Üldised compose-käsud",
                    opt8: "Compose-valikud",
                    opt9: "Avaleht",

                }
            }
        },
        'eu (euskara)': {
            translation: {
                usage: {
                    opt1: "Oinarrizko aginduak",
                    opt2: "Orokorreko aginduak",
                    opt3: "Kontrol aginduak",
                    opt4: "Swarm-aginduak",
                    opt5: "Global aukerak",
                    opt6: "Konfigurazio fitxategiak",
                    opt7: "Orokorreko compose-aginduak",
                    opt8: "Compose aukerak",
                    opt9: "Hasiera",

                }
            }
        },
        'fa (فارسی)': {
            translation: {
                usage: {
                    opt1: "دستورات پایه",
                    opt2: "دستورات عمومی",
                    opt3: "دستورات کنترلی",
                    opt4: "دستورات Swarm",
                    opt5: "گزینه‌های جهانی",
                    opt6: "فایل‌های پیکربندی",
                    opt7: "دستورات عمومی compose",
                    opt8: "گزینه‌های Compose",
                    opt9: "صفحه اصلی",

                }
            }
        },
        'fi (suomi)': {
            translation: {
                usage: {
                    opt1: "Peruskomennot",
                    opt2: "Yleiset komennot",
                    opt3: "Ohjauskomenot",
                    opt4: "Swarm-komennot",
                    opt5: "Globaali asetukset",
                    opt6: "Konfigurointitiedostot",
                    opt7: "Yleiset compose-komennot",
                    opt8: "Compose-asetukset",
                    opt9: "Koti",

                }
            }
        },
        'fj (vosa Vakaviti)': {
            translation: {
                usage: {
                    opt1: "Ika ni veikaubalebale",
                    opt2: "Ika ni veikaubalebale e vuravura.",
                    opt3: "Ika ni veikaubalebale ni veivakau.",
                    opt4: "Swarm veikaubalebale.",
                    opt5: "Ika ni veikaubalebale e vuravura.",
                    opt6: "Ika ni veikaubalebale ni veivakau.",
                    opt7: "Ika ni veikaubalebale e vuravura.",
                    opt8: "Ika ni veikaubalebale.",
                    opt9: "Vale",

                }
            }
        },
        'fo (føroyskt)': {
            translation: {
                usage: {
                    opt1: "Grunnleggjandi kommandoir",
                    opt2: "Almennar kommandoir",
                    opt3: "Stýris kommandoir",
                    opt4: "Swarm-kommandoir",
                    opt5: "Globalar valmøguleikar",
                    opt6: "Konfigureringar skjøl",
                    opt7: "Almennar compose-kommandoir",
                    opt8: "Compose-valmøguleikar",
                    opt9: "Heim",

                }
            }
        },
        /*fy, ga, gd, gl, gn, gu, ha, hi, hr, hu,*/ 
        'fy (Frysk)': {
            translation: {
                usage: {
                    opt1: "Basis kommando's",
                    opt2: "Algemene kommando's",
                    opt3: "Beheerskommando's",
                    opt4: "Swarm-kommando's",
                    opt5: "Globale opsjes",
                    opt6: "Konfiguraasjebestannen",
                    opt7: "Algemene kommando's compose",
                    opt8: "Compose opsjes",
                    opt9: "Thús",

                }
            }
        },
        'ga (Gaeilge)': {
            translation: {
                usage: {
                    opt1: "Príomh-orduithe",
                    opt2: "Ordú ginearálta",
                    opt3: "Ordú bainistíochta",
                    opt4: "Swarm-orduithe",
                    opt5: "Roghaí domhanda",
                    opt6: "Comhoibrithe comhoibrithe",
                    opt7: "Ordú ginearálta compose",
                    opt8: "Roghaí Compose",
                    opt9: "Baile",

                }
            }
        },
        'gd (Gàidhlig)': {
            translation: {
                usage: {
                    opt1: "Àrd-òrdughan",
                    opt2: "Àrd-òrdughan coitcheann",
                    opt3: "Àrd-òrdughan riaghlaidh",
                    opt4: "Swarm-òrdughan",
                    opt5: "Roghainnean cruinne",
                    opt6: "Faidhlichean freagairte",
                    opt7: "Àrd-òrdughan coitcheann compose",
                    opt8: "Roghainnean Compose",
                    opt9: "Dachaigh",

                }
            }
        },
        'gl (galego)': {
            translation: {
                usage: {
                    opt1: "Comandos básicos",
                    opt2: "Comandos xeral",
                    opt3: "Comandos de xestión",
                    opt4: "Swarm-comandos",
                    opt5: "Opcións globais",
                    opt6: "Ficheiros de configuración",
                    opt7: "Comandos xeral compose",
                    opt8: "Opcións Compose",
                    opt9: "Inicio",

                }
            }
        },
        'gn (Aña Guaraní)': {
            translation: {
                usage: {
                    opt1: "Mba'erechaukaha gui",
                    opt2: "Mba'erechaukaha oĩva",
                    opt3: "Mba'erechaukaha rembiapo",
                    opt4: "Swarm-mba'erechaukaha",
                    opt5: "Opcións globales",
                    opt6: "Mbopi rembiapo",
                    opt7: "Mba'erechaukaha oĩva compose",
                    opt8: "Opcións Compose",
                    opt9: "Tenda",

                }
            }
        },
        'gu (ગુજરાતી)': {
            translation: {
                usage: {
                    opt1: "મૂળ આદેશો",
                    opt2: "સામાન્ય આદેશો",
                    opt3: "વ્યવસ્થાપક આદેશો",
                    opt4: "Swarm-આદેશો",
                    opt5: "ગ્લોબલ વિકલ્પો",
                    opt6: "કન્ફિગરેશન ફાઇલો",
                    opt7: "સામાન્ય આદેશો compose",
                    opt8: "Compose વિકલ્પો",
                    opt9: "ઘર",

                }
            }
        },
        'ha (Hausa)': {
            translation: {
                usage: {
                    opt1: "Umurni na asali",
                    opt2: "Umurni na gama gari",
                    opt3: "Umurnin gudanarwa",
                    opt4: "Swarm-umurni",
                    opt5: "Zaɓuɓɓukan duniya",
                    opt6: "Fayilolin tsarawa",
                    opt7: "Umurni na gama gari compose",
                    opt8: "Zaɓuɓɓukan Compose",
                    opt9: "Gida",

                }
            }
        },
        'hi (हिन्दी)': {
            translation: {
                usage: {
                    opt1: "मूल आदेश",
                    opt2: "सामान्य आदेश",
                    opt3: "प्रबंधकीय आदेश",
                    opt4: "Swarm-आदेश",
                    opt5: "वैश्विक विकल्प",
                    opt6: "कॉन्फ़िगरेशन फ़ाइलें",
                    opt7: "सामान्य आदेश compose",
                    opt8: "Compose विकल्प",
                    opt9: "घर",

                }
            }
        },
        'hr (hrvatski)': {
            translation: {
                usage: {
                    opt1: "Osnovne naredbe",
                    opt2: "Opće naredbe",
                    opt3: "Upravljačke naredbe",
                    opt4: "Swarm-naredbe",
                    opt5: "Globalne opcije",
                    opt6: "Datoteke s konfiguracijom",
                    opt7: "Opće naredbe compose",
                    opt8: "Compose opcije",
                    opt9: "Početna",

                }
            }
        },
        'hu (magyar)': {
            translation: {
                usage: {
                    opt1: "Alap parancsok",
                    opt2: "Általános parancsok",
                    opt3: "Kezelő parancsok",
                    opt4: "Swarm-parancsok",
                    opt5: "Globális opciók",
                    opt6: "Konfigurációs fájlok",
                    opt7: "Általános parancsok compose",
                    opt8: "Compose opciók",
                    opt9: "Kezdőlap",

                }
            }
        },
        /*hy, ia, ie, ik, in, is, iw, ji, jw, ka,*/
        'hy (Հայերեն)': {
            translation: {
                usage: {
                    opt1: "Հիմնական հրամաններ",
                    opt2: "Ընդհանուր հրամաններ",
                    opt3: "Կառավարման հրամաններ",
                    opt4: "Swarm-команды",
                    opt5: "Գլոբալ տարբերակներ",
                    opt6: "Կոնֆիգուրացիայի ֆայլեր",
                    opt7: "Ընդհանուր команды compose",
                    opt8: "Compose տարբերակներ",
                    opt9: "Տուն",

                }
            }
        },
        'ia (Interlingua)': {
            translation: {
                usage: {
                    opt1: "Comandos base",
                    opt2: "Comandos general",
                    opt3: "Comandos de control",
                    opt4: "Swarm-команды",
                    opt5: "Optiones global",
                    opt6: "Fines de configuration",
                    opt7: "Comandos general compose",
                    opt8: "Optiones Compose",
                    opt9: "Casa",

                }
            }
        },
        'ie (Interlingue)': {
            translation: {
                usage: {
                    opt1: "Commandos base",
                    opt2: "Commandos general",
                    opt3: "Commandos de control",
                    opt4: "Swarm-команды",
                    opt5: "Global options",
                    opt6: "Configuration files",
                    opt7: "General commandos compose",
                    opt8: "Options Compose",
                    opt9: "Casa",

                }
            }
        },
        'ik (Iñupiatun)': {
            translation: {
                usage: {
                    opt1: "Sivun nutaq",
                    opt2: "Tuktuq nutaq",
                    opt3: "Qanruyut nutaq",
                    opt4: "Swarm-команды",
                    opt5: "Global options",
                    opt6: "Configuration files",
                    opt7: "Tuktuq nutaq compose",
                    opt8: "Compose options",
                    opt9: "Iñuinnaq",

                }
            }
        },
        'in (Bahasa Indonesia)': {
            translation: {
                usage: {
                    opt1: "Perintah dasar",
                    opt2: "Perintah umum",
                    opt3: "Perintah pengendali",
                    opt4: "Swarm-команды",
                    opt5: "Opsi global",
                    opt6: "Berkas konfigurasi",
                    opt7: "Perintah umum compose",
                    opt8: "Opsi Compose",
                    opt9: "Beranda",

                }
            }
        },
        'is (Íslenska)': {
            translation: {
                usage: {
                    opt1: "Grunnskipanir",
                    opt2: "Almenn skipanir",
                    opt3: "Stjórnskipanir",
                    opt4: "Swarm-команды",
                    opt5: "Heildarvalkostir",
                    opt6: "Stillingarskrár",
                    opt7: "Almennar skipanir compose",
                    opt8: "Compose valkostir",
                    opt9: "Heim",

                }
            }
        },
        'iw (עברית)': {
            translation: {
                usage: {
                    opt1: "פקודות בסיסיות",
                    opt2: "פקודות כלליות",
                    opt3: "פקודות ניהוליות",
                    opt4: "Swarm-команды",
                    opt5: "אפשרויות גלובליות",
                    opt6: "קבצי קונפיגורציה",
                    opt7: "פקודות כלליות compose",
                    opt8: "אפשרויות Compose",
                    opt9: "בית",

                }
            }
        },
        'ji (ייִדיש)': {
            translation: {
                usage: {
                    opt1: "אויפֿשטעלונגען באַזע",
                    opt2: "געמיינע אויפֿשטעלונגען",
                    opt3: "פֿירן אויפֿשטעלונגען",
                    opt4: "Swarm-команды",
                    opt5: "גלאבאלע אָפּציעס",
                    opt6: "קאָנפֿיגוראַציע פֿײַלער",
                    opt7: "געמיינע אויפֿשטעלונגען compose",
                    opt8: "Compose אָפּציעס",
                    opt9: "היים",

                }
            }
        },
        'jw (Basa Jawa)': {
            translation: {
                usage: {
                    opt1: "Perintah dhasar",
                    opt2: "Perintah umum",
                    opt3: "Perintah pengendali",
                    opt4: "Swarm-команды",
                    opt5: "Opsi global",
                    opt6: "Berkas konfigurasi",
                    opt7: "Perintah umum compose",
                    opt8: "Opsi Compose",
                    opt9: "Beranda",

                }
            }
        },
        'ka (ქართული)': {
            translation: {
                usage: {
                    opt1: "ბაზური ბრძანებები",
                    opt2: "ზოგადი ბრძანებები",
                    opt3: "მმართველი ბრძანებები",
                    opt4: "Swarm-команды",
                    opt5: "გლობალური პარამეტრები",
                    opt6: "კონფიგურაციის ფაილები",
                    opt7: "ზოგადი ბრძანებები compose",
                    opt8: "Compose პარამეტრები",
                    opt9: "მთავარი",

                }
            }
        },
        /*kk, kl, km, kn, ks, ku, ky, la, ln, lo,*/
        'kk (қазақ тілі)': {
            translation: {
                usage: {
                    opt1: "Негізгі командалар",
                    opt2: "Жалпы командалар",
                    opt3: "Басқару командалары",
                    opt4: "Swarm-командалар",
                    opt5: "Глобалды опциялар",
                    opt6: "Конфигурациялық файлдар",
                    opt7: "Жалпы compose командалары",
                    opt8: "Compose опциялары",
                    opt9: "Басты бет",

                }
            }
        },
        'kl (kalaallisut)': {
            translation: {
                usage: {
                    opt1: "Suleqatigiinnermut tunngatillugu nalunaarut",
                    opt2: "Aallartinneqartut",
                    opt3: "Piginnaasat",
                    opt4: "Swarm-ikkut nalunaarut",
                    opt5: "Tamarmik periarfissat",
                    opt6: "Konfiguratsip ilai",
                    opt7: "Aallartinneqartut compose",
                    opt8: "Compose periarfissat",
                    opt9: "Allannguuk",

                }
            }
        },
        'km (ភាសាខ្មែរ)': {
            translation: {
                usage: {
                    opt1: "ការបញ្ជាទិញមូលដ្ឋាន",
                    opt2: "ការបញ្ជាទិញទូទៅ",
                    opt3: "ការបញ្ជាទិញគ្រប់គ្រង",
                    opt4: "Swarm-ការបញ្ជាទិញ",
                    opt5: "ជម្រើសសកល",
                    opt6: "ឯកសារកំណត់រចនាសម្ព័ន្ធ",
                    opt7: "ការបញ្ជាទិញ compose ទូទៅ",
                    opt8: "ជម្រើស Compose",
                    opt9: "ទំព័រដើម",

                }
            }
        },
        'kn (ಕನ್ನಡ)': {
            translation: {
                usage: {
                    opt1: "ಮೂಲ ಆದೇಶಗಳು",
                    opt2: "ಸಾಮಾನ್ಯ ಆದೇಶಗಳು",
                    opt3: "ನಿಯಂತ್ರಣ ಆದೇಶಗಳು",
                    opt4: "Swarm-ಆದೇಶಗಳು",
                    opt5: "ಜಾಗತಿಕ ಆಯ್ಕೆಗಳು",
                    opt6: "ಕೋನ್ಫಿಗರೇಶನ್ ಫೈಲ್ಗಳು",
                    opt7: "ಸಾಮಾನ್ಯ compose ಆದೇಶಗಳು",
                    opt8: "Compose ಆಯ್ಕೆಗಳು",
                    opt9: "ಮನೆಗೆ",

                }
            }
        },
        'ks (कश्मीरी)': {
            translation: {
                usage: {
                    opt1: "بنیادی احکام",
                    opt2: "عام احکام",
                    opt3: "کنٹرول احکام",
                    opt4: "Swarm-احکام",
                    opt5: "عالمی اختیارات",
                    opt6: "تشکیلی فائلیں",
                    opt7: "عام compose احکام",
                    opt8: "Compose اختیارات",
                    opt9: "گھر",

                }
            }
        },
        'ku (Kurdî)': {
            translation: {
                usage: {
                    opt1: "Fermanên bingehîn",
                    opt2: "Fermanên giştî",
                    opt3: "Fermanên kontrolê",
                    opt4: "Swarm-fermanên",
                    opt5: "Vebijarkên global",
                    opt6: "Pelên konfigrasyonê",
                    opt7: "Fermanên giştî yên compose",
                    opt8: "Vebijarkên Compose",
                    opt9: "Mal",

                }
            }
        },
        'ky (Кыргызча)': {
            translation: {
                usage: {
                    opt1: "Негизги буйрукдар",
                    opt2: "Жалпы буйрукдар",
                    opt3: "Башкаруу буйрукдары",
                    opt4: "Swarm-буюрукдар",
                    opt5: "Глобалдык опциялар",
                    opt6: "Конфигурация файлдары",
                    opt7: "Жалпы compose буйрукдары",
                    opt8: "Compose опциялары",
                    opt9: "Башкы бет",

                }
            }
        },
        'la (Lingua Latina)': {
            translation: {
                usage: {
                    opt1: "Praecipua mandata",
                    opt2: "Mandata communia",
                    opt3: "Mandata administrandi",
                    opt4: "Swarm-mandata",
                    opt5: "Optiones globales",
                    opt6: "Fasciculi configurationis",
                    opt7: "Mandata communia compose",
                    opt8: "Optiones Compose",
                    opt9: "Domum",

                }
            }
        },
        'ln (Lingala)': {
            translation: {
                    usage: {
                    opt1: "Mikanda ya liboso",
                    opt2: "Mikanda ya nsima",
                    opt3: "Mikanda ya kokabola",
                    opt4: "Swarm-mikanda",
                    opt5: "Bokebi ya mboka nyonso",
                    opt6: "Bokonzi ya fayilu",
                    opt7: "Mikanda ya nsima ya compose",
                    opt8: "Bokebi ya Compose",
                    opt9: "Nse ya mboka",

                }
            }
        },
        'lo (ລາວ)': {
            translation: {
                usage: {
                    opt1: "ຄໍາສັ່ງພື້ນຖານ",
                    opt2: "ຄໍາສັ່ງທົ່ວໄປ",
                    opt3: "ຄໍາສັ່ງຄວບຄຸม",
                    opt4: "Swarm-ຄໍາສັ່ງ",
                    opt5: "ເລືອກແນວສາມເທົ່າໆ",
                    opt6: "ແฟນ້ໍາການປ່ອນແນນໃນເອກະສານ",
                    opt7: "ຄໍາສັ່ງ compose ທົ່ວໄປ",
                    opt8: "ເລືອກ Compose",
                    opt9: "ໜ້າແລ້ນ",

                }
            }
        },
        /*lt, lv, mg, mi, mk, ml, mn, mo, mr, mt,*/ 
        'lt (lietuvių kalba)': {
            translation: {
                usage: {
                    opt1: "Pagrindinės komandos",
                    opt2: "Bendros komandos",
                    opt3: "Valdymo komandos",
                    opt4: "Swarm-komandos",
                    opt5: "Globalios parinktys",
                    opt6: "Konfigūracijos failai",
                    opt7: "Bendros komandos compose",
                    opt8: "Compose parinktys",
                    opt9: "Namai",

                }
            }
        },
        'lv (latviešu valoda)': {
            translation: {
                usage: {
                    opt1: "Pamatkomandas",
                    opt2: "Kopējās komandas",
                    opt3: "Vadības komandas",
                    opt4: "Swarm-komandas",
                    opt5: "Globālās opcijas",
                    opt6: "Konfigurācijas faili",
                    opt7: "Kopējās komandas compose",
                    opt8: "Compose opcijas",
                    opt9: "Mājas",

                }
            }
        },
        'mg (fiteny malagasy)': {
            translation: {
                usage: {
                    opt1: "Baiko fototra",
                    opt2: "Baiko ankapobeny",
                    opt3: "Baiko fitantanana",
                    opt4: "Swarm-baiko",
                    opt5: "Safidy manerantany",
                    opt6: "Rakitra fanamafisana",
                    opt7: "Baiko ankapobeny compose",
                    opt8: "Safidy Compose",
                    opt9: "An-trano",

                }
            }
        },
        'mi (te reo Māori)': {
            translation: {
                usage: {
                    opt1: "Ngā whakahau matua",
                    opt2: "Ngā whakahau noa",
                    opt3: "Ngā whakahau whakahaere",
                    opt4: "Swarm-whakahau",
                    opt5: "Ngā kōwhiringa ao",
                    opt6: "Ngā kōnae whirihora",
                    opt7: "Ngā whakahau noa compose",
                    opt8: "Ngā kōwhiringa Compose",
                    opt9: "Ki te kāinga",

                }
            }
        },
        'mk (македонски јазик)': {
            translation: {
                usage: {
                    opt1: "Основни команди",
                    opt2: "Општи команди",
                    opt3: "Команди за управување",
                    opt4: "Swarm-команди",
                    opt5: "Глобални опции",
                    opt6: "Конфигурациски фајлови",
                    opt7: "Општи команди compose",
                    opt8: "Compose опции",
                    opt9: "Дома",

                }
            }
        },
        'ml (മലയാളം)': {
            translation: {
                usage: {
                    opt1: "പ്രാഥമിക കമാൻഡുകൾ",
                    opt2: "സാധാരണ കമാൻഡുകൾ",
                    opt3: "അധ്യക്ഷത കമാൻഡുകൾ",
                    opt4: "Swarm-കമാൻഡുകൾ",
                    opt5: "ആഗോള ഓപ്ഷനുകൾ",
                    opt6: "കൺഫിഗറേഷൻ ഫയലുകൾ",
                    opt7: "സാധാരണ കമാൻഡുകൾ compose",
                    opt8: "Compose ഓപ്ഷനുകൾ",
                    opt9: "വീടിനു",

                }
            }
        },
        'mn (монгол хэл)': {
            translation: {
                usage: {
                    opt1: "Үндсэн командууд",
                    opt2: "Ерөнхий командууд",
                    opt3: "Удирдлагын командууд",
                    opt4: "Swarm-командууд",
                    opt5: "Глобал сонголтууд",
                    opt6: "Тохиргооны файлууд",
                    opt7: "Ерөнхий командууд compose",
                    opt8: "Compose сонголтууд",
                    opt9: "Гэрт",

                }
            }
        },
        'mo (limba moldovenească)': {
            translation: {
                usage: {
                    opt1: "Comenzi de bază",
                    opt2: "Comenzi generale",
                    opt3: "Comenzi de gestionare",
                    opt4: "Swarm-comenzi",
                    opt5: "Opțiuni globale",
                    opt6: "Fișiere de configurare",
                    opt7: "Comenzi generale compose",
                    opt8: "Opțiuni Compose",
                    opt9: "Acasă",

                }
            }
        },
        'mr (मराठी)': {
            translation: {
                    usage: {
                    opt1: "आधारित आदेश",
                    opt2: "सामान्य आदेश",
                    opt3: "व्यवस्थापन आदेश",
                    opt4: "Swarm-आदेश",
                    opt5: "जागतिक पर्याय",
                    opt6: "कॉन्फिगरेशन फाइल्स",
                    opt7: "सामान्य आदेश compose",
                    opt8: "Compose पर्याय",
                    opt9: "घर",

                }
            }
        },
        'mt (Malti)': {
            translation: {
                usage: {
                    opt1: "Kmandi Bażiċi",
                    opt2: "Kmandi Ġenerali",
                    opt3: "Kmandi ta' Ġestjoni",
                    opt4: "Swarm-kmandi",
                    opt5: "Opzjonijiet Globali",
                    opt6: "Fajls ta' Konfigurazzjoni",
                    opt7: "Kmandi Ġenerali compose",
                    opt8: "Opzjonijiet Compose",
                    opt9: "Dar",

                }
            }
        },
        /*my, na, ne, no, oc, om, or, pa, pl, ps,*/
        'my (ဗမာစာ)': {
            translation: {
                usage: {
                    opt1: "အခြေခံအမိန့်များ",
                    opt2: "ယေဘုယျအမိန့်များ",
                    opt3: "ထိန်းချုပ်မှုအမိန့်များ",
                    opt4: "Swarm-အမိန့်များ",
                    opt5: "ကမ္ဘာလုံးဆိုင်ရာရွေးချယ်မှုများ",
                    opt6: "ကွန်ဖစ်ဂျူးရေးဖိုင်များ",
                    opt7: "ယေဘုယျ compose အမိန့်များ",
                    opt8: "Compose ရွေးချယ်မှုများ",
                    opt9: "အိမ်",

                }
            }
        },
        'na (Dorerin Naoero)': {
            translation: {
                usage: {
                    opt1: "Nai komandi",
                    opt2: "Komandi a tei",
                    opt3: "Komandi a tei iak",
                    opt4: "Swarm komandi",
                    opt5: "Opsi global",
                    opt6: "Faile konfigura",
                    opt7: "Komandi a tei compose",
                    opt8: "Opsi Compose",
                    opt9: "Tua",

                }
            }
        },
        'ne (नेपाली)': {
            translation: {
                usage: {
                    opt1: "आधारभूत आदेशहरू",
                    opt2: "सामान्य आदेशहरू",
                    opt3: "व्यवस्थापन आदेशहरू",
                    opt4: "Swarm आदेशहरू",
                    opt5: "वैश्विक विकल्पहरू",
                    opt6: "कन्फिगरेसन फाइलहरू",
                    opt7: "सामान्य compose आदेशहरू",
                    opt8: "Compose विकल्पहरू",
                    opt9: "घर",

                }
            }
        },
        'no (norsk)': {
            translation: {
                usage: {
                    opt1: "Grunnleggende kommandoer",
                    opt2: "Generelle kommandoer",
                    opt3: "Kontrollkommandoer",
                    opt4: "Swarm-kommandoer",
                    opt5: "Globale alternativer",
                    opt6: "Konfigurasjonsfiler",
                    opt7: "Generelle compose-kommandoer",
                    opt8: "Compose-alternativer",
                    opt9: "Hjem",

                }
            }
        },
        'oc (occitan)': {
            translation: {
                usage: {
                    opt1: "Comandas de basa",
                    opt2: "Comandas generau",
                    opt3: "Comandas de gestion",
                    opt4: "Swarm-comandas",
                    opt5: "Opcions globala",
                    opt6: "Fichièrs de configuracion",
                    opt7: "Comandas generau compose",
                    opt8: "Opcions Compose",
                    opt9: "Doma",

                }
            }
        },
        'om (Oromoo)': {
            translation: {
                usage: {
                    opt1: "Ajaja bu'uuraa",
                    opt2: "Ajaja waliigalaa",
                    opt3: "Ajaja to'achuu",
                    opt4: "Swarm ajajaa",
                    opt5: "Filannoo addunyaa",
                    opt6: "Faayila qindaa'inaa",
                    opt7: "Ajaja waliigalaa compose",
                    opt8: "Filannoo Compose",
                    opt9: "Mana",

                }
            }
        },
        'or (ଓଡ଼ିଆ)': {
            translation: {
                usage: {
                    opt1: "ମୂଳ କମାଣ୍ଡଗୁଡିକ",
                    opt2: "ସାଧାରଣ କମାଣ୍ଡଗୁଡିକ",
                    opt3: "ନିୟନ୍ତ୍ରଣ କମାଣ୍ଡଗୁଡିକ",
                    opt4: "Swarm କମାଣ୍ଡଗୁଡିକ",
                    opt5: "ଗ୍ଲୋବାଲ୍ ବିକଳ୍ପଗୁଡିକ",
                    opt6: "କନଫିଗରେସନ୍ ଫାଇଲଗୁଡିକ",
                    opt7: "ସାଧାରଣ compose କମାଣ୍ଡଗୁଡିକ",
                    opt8: "Compose ବିକଳ୍ପଗୁଡିକ",
                    opt9: "ବାସ",

                }
            }
        },
        'pa (ਪੰਜਾਬੀ)': {
            translation: {
                usage: {
                    opt1: "ਮੂਲ ਆਦੇਸ਼",
                    opt2: "ਆਮ ਆਦੇਸ਼ਾਂ",
                    opt3: "ਕੰਟਰੋਲ ਆਦੇਸ਼ਾਂ",
                    opt4: "Swarm ਆਦੇਸ਼ਾਂ",
                    opt5: "ਗਲੋਬਲ ਵਿਕਲਪਾਂ",
                    opt6: "ਕਨਫਿਗਰੇਸ਼ਨ ਫਾਈਲਾਂ",
                    opt7: "ਆਮ compose ਆਦੇਸ਼ਾਂ",
                    opt8: "Compose ਵਿਕਲਪਾਂ",
                    opt9: "ਘਰ",

                }
            }
        },
        'pl (polski)': {
            translation: {
                usage: {
                    opt1: "Podstawowe polecenia",
                    opt2: "Ogólne polecenia",
                    opt3: "Polecenia kontrolne",
                    opt4: "Swarm polecenia",
                    opt5: "Opcje globalne",
                    opt6: "Pliki konfiguracyjne",
                    opt7: "Ogólne polecenia compose",
                    opt8: "Opcje Compose",
                    opt9: "Dom",

                }
            }
        },
        'ps (پښتو)': {
            translation: {
                usage: {
                    opt1: "بنسټیز حکمونه",
                    opt2: "عام حکمونه",
                    opt3: "کنټرول حکمونه",
                    opt4: "Swarm حکمونه",
                    opt5: "نړیوال اختیارونه",
                    opt6: "تنظیماتي فایلونه",
                    opt7: "عام compose حکمونه",
                    opt8: "Compose اختیارونه",
                    opt9: "کور",

                }
            }
        },
        /*pt, qu, rm, rn, ro, ru, rw, sa, sd, sg,*/
        'pt (português)': {
            translation: {
                usage: {
                    opt1: "Comandos principais",
                    opt2: "Comandos gerais",
                    opt3: "Comandos de controle",
                    opt4: "Comandos Swarm",
                    opt5: "Opções globais",
                    opt6: "Arquivos de configuração",
                    opt7: "Comandos gerais compose",
                    opt8: "Opções Compose",
                    opt9: "Início",

                }
            }
        },
        'qu (Runa Simi)': {
            translation: {
                usage: {
                    opt1: "Ñukaka rimanakuy",
                    opt2: "Allin rimanakuy",
                    opt3: "Rikch'ari rimanakuy",
                    opt4: "Swarm rimanakuy",
                    opt5: "Sumaq ch'isi",
                    opt6: "Configuración rimas",
                    opt7: "Allin rimanakuy compose",
                    opt8: "Compose ch'isi",
                    opt9: "Wasi",

                }
            }
        },
        'rm (rumantsch)': {
            translation: {
                usage: {
                    opt1: "Comands principals",
                    opt2: "Comands generels",
                    opt3: "Comands da controll",
                    opt4: "Comands Swarm",
                    opt5: "Optiuns globalas",
                    opt6: "Fichiers da configuraziun",
                    opt7: "Comands generels compose",
                    opt8: "Optiuns Compose",
                    opt9: "Anavon",

                }
            }
        },
        'rn (Kirundi)': {
            translation: {
                usage: {
                    opt1: "Itegeko nyamukuru",
                    opt2: "Itegeko rusange",
                    opt3: "Itegeko rigenzura",
                    opt4: "Itegeko Swarm",
                    opt5: "Amahitamo y'isi yose",
                    opt6: "Amadosiye y'ibikora",
                    opt7: "Itegeko rusange compose",
                    opt8: "Amahitamo ya Compose",
                    opt9: "Ihumbi",

                }
            }
        },
        'ro (română)': {
            translation: {
                usage: {
                    opt1: "Comenzi principale",
                    opt2: "Comenzi generale",
                    opt3: "Comenzi de control",
                    opt4: "Comenzi Swarm",
                    opt5: "Opțiuni globale",
                    opt6: "Fișiere de configurare",
                    opt7: "Comenzi generale compose",
                    opt8: "Opțiuni Compose",
                    opt9: "Acasă",

                }
            }
        },
        'ru (Русский)': {
            translation: {
                usage: {
                    opt1: "Основные команды",
                    opt2: "Общие команды",
                    opt3: "Управляющие команды",
                    opt4: "Swarm-команды",
                    opt5: "Глобальные опции",
                    opt6: "Конфигурационные файлы",
                    opt7: "Общие команды compose",
                    opt8: "Compose опции",
                    opt9: "Домой",

                }
            }
        },
        'rw (Ikinyarwanda)': {
            translation: {
                usage: {
                    opt1: "Amategeko y'ibanze",
                    opt2: "Amategeko rusange",
                    opt3: "Amategeko yo kugenzura",
                    opt4: "Amategeko Swarm",
                    opt5: "Amahitamo y'isi yose",
                    opt6: "Amadosiye yo gushyiraho",
                    opt7: "Amategeko rusange compose",
                    opt8: "Amahitamo ya Compose",
                    opt9: "Urugo",

                }
            }
        },
        'sa (संस्कृतम्)': {
            translation: {
                usage: {
                    opt1: "मुख्याः आज्ञाः",
                    opt2: "सामान्याः आज्ञाः",
                    opt3: "नियन्त्रणस्य आज्ञाः",
                    opt4: "Swarm-आज्ञाः",
                    opt5: "वैश्विक विकल्पाः",
                    opt6: "संविधानपत्राणि",
                    opt7: "सामान्याः आज्ञाः compose",
                    opt8: "Compose विकल्पाः",
                    opt9: "गृहं",

                }
            }
        },
        'sd (سنڌي)': {
            translation: {
                usage: {
                    opt1: "بنيادي حڪم",
                    opt2: "عام حڪم",
                    opt3: "ڪنٽرول حڪم",
                    opt4: "Swarm حڪم",
                    opt5: "عالمي اختيارن",
                    opt6: "ترتيبي فائلون",
                    opt7: "عام حڪم compose",
                    opt8: "Compose اختيارن",
                    opt9: "گهر",

                }
            }
        },
        'sg (Sango)': {
            translation: {
                usage: {
                    opt1: "Maboko ma bo na kɔndɔngɔ",
                    opt2: "Maboko ma bo na bɔkɔngɔ",
                    opt3: "Maboko ma bo na kɔntrolɛngɔ",
                    opt4: "Maboko Swarm",
                    opt5: "Nganga ya mboka nyonso",
                    opt6: "Bokɔngɔ ya kɔmpɔtɛrɛsɛnɛti na bɔkɔngɔ",
                    opt7: "Maboko ma bo na bɔkɔngɔ compose",
                    opt8: "Nganga ya Compose",
                    opt9: "Léla",

                }
            }
        },
        /*sh, si, sk, sl, sm, sn, so, sq, sr, ss,*/
        'sh (srpskohrvatski)': {
            translation: {
                usage: {
                    opt1: "Osnovne komande",
                    opt2: "Opšte komande",
                    opt3: "Kontrolne komande",
                    opt4: "Swarm-komande",
                    opt5: "Globalne opcije",
                    opt6: "Konfiguracione datoteke",
                    opt7: "Opšte komande compose",
                    opt8: "Compose opcije",
                    opt9: "Početna",

                }
            }
        },
        'si (සිංහල)': {
            translation: {
                usage: {
                    opt1: "මූලික විධාන",
                    opt2: "සාමාන්‍ය විධාන",
                    opt3: "පාලන විධාන",
                    opt4: "Swarm-විධාන",
                    opt5: "ජාතික විකල්ප",
                    opt6: "සංරචනා ගොනු",
                    opt7: "සාමාන්‍ය compose විධාන",
                    opt8: "Compose විකල්ප",
                    opt9: "මුල් පිටුව",

                }
            }
        },
        'sk (slovenčina)': {
            translation: {
                usage: {
                    opt1: "Základné príkazy",
                    opt2: "Všeobecné príkazy",
                    opt3: "Ovládacie príkazy",
                    opt4: "Swarm-príkazy",
                    opt5: "Globálne možnosti",
                    opt6: "Konfiguračné súbory",
                    opt7: "Všeobecné príkazy compose",
                    opt8: "Možnosti compose",
                    opt9: "Domov",

                }
            }
        },
        'sl (slovenščina)': {
            translation: {
                usage: {
                    opt1: "Osnovna navodila",
                    opt2: "Splošna navodila",
                    opt3: "Nadzorne ukaze",
                    opt4: "Swarm-ukazi",
                    opt5: "Globalne možnosti",
                    opt6: "Konfiguracijske datoteke",
                    opt7: "Splošni ukazi compose",
                    opt8: "Možnosti compose",
                    opt9: "Domov",

                }
            }
        },
        'sm (gagana Samoa)': {
            translation: {
                usage: {
                    opt1: "Fa'atonuga Muamua",
                    opt2: "Fa'atonuga Lautele",
                    opt3: "Fa'atonuga Pulea",
                    opt4: "Swarm-fa'atonuga",
                    opt5: "O le filifiliga lautele",
                    opt6: "Faila Fa'avae",
                    opt7: "Fa'atonuga Lautele compose",
                    opt8: "Filifiliga compose",
                    opt9: "Home",

                }
            }
        },
        'sn (chiShona)': {
            translation: {
                usage: {
                    opt1: "Mirairo Mikuru",
                    opt2: "Mirairo Yese",
                    opt3: "Mirairo Ekudzora",
                    opt4: "Swarm-mirairo",
                    opt5: "Sarudzo Dzakakura",
                    opt6: "Mafaira Ekugadzirisa",
                    opt7: "Mirairo Yese compose",
                    opt8: "Sarudzo dze compose",
                    opt9: "Kumba",

                }
            }
        },
        'so (Soomaaliga)': {
            translation: {
                usage: {
                    opt1: "Amarrada Aasaasiga ah",
                    opt2: "Amarrada Guud ah",
                    opt3: "Amarrada Maamul ah",
                    opt4: "Swarm-amarrada",
                    opt5: "Xulashooyinka Caalamiga ah",
                    opt6: "Faylasha Dejinaya",
                    opt7: "Amarrada Guud ee compose",
                    opt8: "Xulashooyinka compose",
                    opt9: "Guriga",

                }
            }
        },
        'sq (shqip)': {
            translation: {
                usage: {
                    opt1: "Udhëzime Bazë",
                    opt2: "Udhëzime të Përgjithshme",
                    opt3: "Udhëzime Kontrolli",
                    opt4: "Swarm-udhëzime",
                    opt5: "Opsionet Globale",
                    opt6: "Skedarët e Konfigurimit",
                    opt7: "Udhëzime të Përgjithshme compose",
                    opt8: "Opsionet compose",
                    opt9: "Kryefaqja",

                }
            }
        },
        'sr (српски)': {
            translation: {
                usage: {
                    opt1: "Osnovne komande",
                    opt2: "Opšte komande",
                    opt3: "Kontrolne komande",
                    opt4: "Swarm-komande",
                    opt5: "Globalne opcije",
                    opt6: "Konfiguracione datoteke",
                    opt7: "Opšte komande compose",
                    opt8: "Compose opcije",
                    opt9: "Početna",

                }
            }
        },
        'ss (siSwati)': {
            translation: {
                usage: {
                    opt1: "Tikhumbuzo Letikhulu",
                    opt2: "Tikhumbuzo Tjobo",
                    opt3: "Tikhumbuzo Tekuphatha",
                    opt4: "Swarm-tikhumbuzo",
                    opt5: "Tihlahla Tjobo",
                    opt6: "Tifayela Tekuhlela",
                    opt7: "Tikhumbuzo Tjobo compose",
                    opt8: "Tihlahla compose",
                    opt9: "Ekhaya",

                }
            }
        },
        /*st, su, sv, sw, ta, te, tg, th, ti, tk,*/
        'st (seSotho)': {
            translation: {
                usage: {
                    opt1: "Mehato e meholo",
                    opt2: "Mehato e amanang",
                    opt3: "Mehato e laolang",
                    opt4: "Swarm-mehato",
                    opt5: "Likhetho tse akaretsang",
                    opt6: "Lefele la konfigurable",
                    opt7: "Mehato e amanang le compose",
                    opt8: "Compose likhetho",
                    opt9: "Lapeng",

                }
            }
        },
        'su (Basa Sunda)': {
            translation: {
                usage: {
                    opt1: "Paréntah dasar",
                    opt2: "Paréntah umum",
                    opt3: "Paréntah kontrol",
                    opt4: "Swarm paréntah",
                    opt5: "Pilihan global",
                    opt6: "Berkas konfigurasi",
                    opt7: "Paréntah umum compose",
                    opt8: "Pilihan Compose",
                    opt9: "Imah",

                }
            }
        },
        'sv (svenska)': {
            translation: {
                usage: {
                    opt1: "Grundläggande kommandon",
                    opt2: "Allmänna kommandon",
                    opt3: "Kontrollkommandon",
                    opt4: "Swarm-kommandon",
                    opt5: "Globala alternativ",
                    opt6: "Konfigurationsfiler",
                    opt7: "Allmänna kommandon compose",
                    opt8: "Compose-alternativ",
                    opt9: "Hem",

                }
            }
        },
        'sw (Kiswahili)': {
            translation: {
                usage: {
                    opt1: "Amri za msingi",
                    opt2: "Amri za jumla",
                    opt3: "Amri za kudhibiti",
                    opt4: "Swarm-amri",
                    opt5: "Chaguo za kimataifa",
                    opt6: "Faili za usanidi",
                    opt7: "Amri za jumla compose",
                    opt8: "Chaguo za Compose",
                    opt9: "Nyumbani",

                }
            }
        },
        'ta (தமிழ்)': {
            translation: {
                usage: {
                    opt1: "அடிப்படை கட்டளைகள்",
                    opt2: "பொருத்தமான கட்டளைகள்",
                    opt3: "கட்டுப்பாட்டு கட்டளைகள்",
                    opt4: "Swarm கட்டளைகள்",
                    opt5: "உலகளாவிய விருப்பங்கள்",
                    opt6: "கொன்ஃபிகரேஷன் கோப்புகள்",
                    opt7: "பொருத்தமான கட்டளைகள் compose",
                    opt8: "Compose விருப்பங்கள்",
                    opt9: "வீடு",

                }
            }
        },
        'te (తెలుగు)': {
            translation: {
                usage: {
                    opt1: "ప్రాథమిక ఆదేశాలు",
                    opt2: "సాధారణ ఆదేశాలు",
                    opt3: "నియంత్రణ ఆదేశాలు",
                    opt4: "Swarm ఆదేశాలు",
                    opt5: "ప్రపంచ స్థాయి ఎంపికలు",
                    opt6: "కన్ఫిగరేషన్ ఫైళ్లు",
                    opt7: "సాధారణ ఆదేశాలు compose",
                    opt8: "Compose ఎంపికలు",
                    opt9: "ఇల్లు",
                }
            }
        },
        'tg (тоҷикӣ)': {
            translation: {
                usage: {
                    opt1: "Дастурҳои асосӣ",
                    opt2: "Дастурҳои умумӣ",
                    opt3: "Дастурҳои идоракунӣ",
                    opt4: "Swarm-достурҳо",
                    opt5: "Имкониятҳои глобалӣ",
                    opt6: "Файлҳои конфигуратсионӣ",
                    opt7: "Дастурҳои умумӣ compose",
                    opt8: "Имкониятҳои Compose",
                    opt9: "Хона",

                }
            }
        },
        'th (ไทย)': {
            translation: {
                usage: {
                    opt1: "คำสั่งพื้นฐาน",
                    opt2: "คำสั่งทั่วไป",
                    opt3: "คำสั่งควบคุม",
                    opt4: "Swarm คำสั่ง",
                    opt5: "ตัวเลือกทั่วโลก",
                    opt6: "ไฟล์การกำหนดค่า",
                    opt7: "คำสั่งทั่วไป compose",
                    opt8: "ตัวเลือก Compose",
                    opt9: "บ้าน",

                }
            }
        },
        'ti (ትግርኛ)': {
            translation: {
                usage: {
                    opt1: "መርሕበ መደብር",
                    opt2: "መደብር ኣድራሻ",
                    opt3: "መደብር ኣድራሻ ንቀጽል",
                    opt4: "Swarm መደብር",
                    opt5: "አለኝ ዝኾነ ዝምልከት",
                    opt6: "መወዳእታት",
                    opt7: "መደብር compose",
                    opt8: "Compose ኣለኝ",
                    opt9: "ወይዘ",

                }
            }
        },
        'tk (Türkmençe)': {
            translation: {
                usage: {
                    opt1: "Esas buýruklar",
                    opt2: "Umumy buýruklar",
                    opt3: "Üpjünçilik buýruklary",
                    opt4: "Swarm buýruklary",
                    opt5: "Global saýlawlar",
                    opt6: "Konfigurasiýa faýllary",
                    opt7: "Umumy buýruklar compose",
                    opt8: "Compose saýlawlary",
                    opt9: "Öý",

                }
            }
        },
        /*tl, tn, to, tr, ts, tt, tw, uk, ur, uz,*/
        'tl (Wikang Tagalog)': {
            translation: {
                usage: {
                    opt1: "Pangunahing utos",
                    opt2: "Pangkalahatang utos",
                    opt3: "Mga utos sa pamamahala",
                    opt4: "Swarm-komando",
                    opt5: "Pangkalahatang opsyon",
                    opt6: "Mga configuration file",
                    opt7: "Pangkalahatang utos compose",
                    opt8: "Compose opsyon",
                    opt9: "Bumalik",

                }
            }
        },
        'tn (Setswana)': {
            translation: {
                usage: {
                    opt1: "Dikgopolo tse di kgethegileng",
                    opt2: "Dikgopolo tse di amanang",
                    opt3: "Dikgopolo tse di amanang le tsamaiso",
                    opt4: "Swarm-dikgopolo",
                    opt5: "Dikgetho tse di amanang",
                    opt6: "Fayile ya konfigirasi",
                    opt7: "Dikgopolo tse di amanang le compose",
                    opt8: "Compose dikgetho",
                    opt9: "Kea boa",

                }
            }
        },
        'to (faka_Tonga)': {
            translation: {
                usage: {
                    opt1: "Fakamatala mahuʻinga",
                    opt2: "Fakamatala lahi",
                    opt3: "Fakamatala ki he pule",
                    opt4: "Swarm-fakamatala",
                    opt5: "Fakamatala lahi",
                    opt6: "Fayele konifaki",
                    opt7: "Fakamatala lahi compose",
                    opt8: "Compose fakamatala",
                    opt9: "Hiki mai",

                }
            }
        },
        'tr (Türkçe)': {
            translation: {
                usage: {
                    opt1: "Temel komutlar",
                    opt2: "Genel komutlar",
                    opt3: "Yönetim komutları",
                    opt4: "Swarm komutları",
                    opt5: "Küresel seçenekler",
                    opt6: "Yapılandırma dosyaları",
                    opt7: "Genel compose komutları",
                    opt8: "Compose seçenekleri",
                    opt9: "Ana sayfa",

                }
            }
        },
        'ts (Xitsonga)': {
            translation: {
                usage: {
                    opt1: "Mitsotso yo hlayekaka",
                    opt2: "Mitsotso yo hlamarhaka",
                    opt3: "Mitsotso yo fambiseka",
                    opt4: "Swarm-mitsotso",
                    opt5: "Tindlela to hlamarhisa",
                    opt6: "Mafayela ya ku hlawuleka",
                    opt7: "Mitsotso yo hlamarhaka compose",
                    opt8: "Compose tindlela",
                    opt9: "Vuyani",

                }
            }
        },
        'tt (татарча)': {
            translation: {
                usage: {
                    opt1: "Төп командалар",
                    opt2: "Гомуми командалар",
                    opt3: "Идарә командалары",
                    opt4: "Swarm-командалары",
                    opt5: "Глобаль опцияләр",
                    opt6: "Конфигурация файллары",
                    opt7: "Гомуми compose командалары",
                    opt8: "Compose опцияләре",
                    opt9: "Өйгә",

                }
            }
        },
        'tw (Twi)': {
            translation: {
                usage: {
                    opt1: "Nsɛm a ɛyɛ mmerɛ ne mmerɛyɛn",
                    opt2: "Nsɛm a ɛyɛ kɛseɛ",
                    opt3: "Nsɛm a ɛda ho adi sɛ ɔkwan so",
                    opt4: "Swarm-nsɛm",
                    opt5: "Abɔdin a ɛyɛ kɛseɛ",
                    opt6: "Nkyerɛwde a wɔbɔ no ho ban",
                    opt7: "Nsɛm a ɛyɛ kɛseɛ compose",
                    opt8: "Compose abɔdin",
                    opt9: "San kɔ",

                }
            }
        },
        'uk (українська)': {
            translation: {
                usage: {
                    opt1: "Основні команди",
                    opt2: "Загальні команди",
                    opt3: "Керуючі команди",
                    opt4: "Swarm-команди",
                    opt5: "Глобальні опції",
                    opt6: "Конфігураційні файли",
                    opt7: "Загальні команди compose",
                    opt8: "Опції Compose",
                    opt9: "Додому",

                }
            }
        },
        'ur (اردو)': {
            translation: {
                usage: {
                    opt1: "بنیادی کمانڈز",
                    opt2: "عام کمانڈز",
                    opt3: "انتظامی کمانڈز",
                    opt4: "Swarm کمانڈز",
                    opt5: "عالمی اختیارات",
                    opt6: "تشکیلی فائلیں",
                    opt7: "عام کمانڈز compose",
                    opt8: "Compose کے اختیارات",
                    opt9: "گھر",

                }
            }
        },
        'uz (oʻzbekcha)': {
            translation: {
                usage: {
                    opt1: "Asosiy buyruqlar",
                    opt2: "Umumiy buyruqlar",
                    opt3: "Boshqaruv buyruqlari",
                    opt4: "Swarm-buyruqlari",
                    opt5: "Global variantlar",
                    opt6: "Konfiguratsiya fayllari",
                    opt7: "Umumiy buyruqlar compose",
                    opt8: "Compose variantlari",
                    opt9: "Bosh sahifa",

                }
            }
        },
        /*vi, vo, wo, xh, zu*/
        'vi (Tiếng Việt)': {
            translation: {
                usage: {
                    opt1: "Các lệnh chính",
                    opt2: "Các lệnh chung",
                    opt3: "Các lệnh điều khiển",
                    opt4: "Swarm-command",
                    opt5: "Tùy chọn toàn cầu",
                    opt6: "Tệp cấu hình",
                    opt7: "Các lệnh chung compose",
                    opt8: "Tùy chọn Compose",
                    opt9: "Trang chủ",

                }
            }
        },
        'vo (Volapük)': {
            translation: {
                usage: {
                    opt1: "Plädanons pük",
                    opt2: "Plädanons globik",
                    opt3: "Plädanons kontrol",
                    opt4: "Swarm-plädanons",
                    opt5: "Globik plädanons",
                    opt6: "Fäls konfigüras",
                    opt7: "Plädanons komon compose",
                    opt8: "Tüdis Compose",
                    opt9: "Home",

                }
            }
        },
        'wo (Wolof)': {
            translation: {
                usage: {
                    opt1: "Njàngat yi",
                    opt2: "Njàngat gii",
                    opt3: "Njàngat yu jëfandikoo",
                    opt4: "Swarm-njàngat",
                    opt5: "Damaale yu am solo",
                    opt6: "Fayda yu configuré",
                    opt7: "Njàngat gii compose",
                    opt8: "Damaale Compose",
                    opt9: "Kasa",

                }
            }
        },
        'xh (isiXhosa)': {
            translation: {
                usage: {
                    opt1: "Imiyalelo eyintloko",
                    opt2: "Imiyalelo ejolise kuzo zonke",
                    opt3: "Imiyalelo yokulawula",
                    opt4: "Swarm-imiyalelo",
                    opt5: "Iinketho zomhlaba wonke",
                    opt6: "Ifayile yokumisela",
                    opt7: "Imiyalelo ejolise ku compose",
                    opt8: "Iinketho ze Compose",
                    opt9: "Ikhaya",

                }
            }
        },
        'zu (isiZulu)': {
            translation: {
                usage: {
                    opt1: "Imiyalo eyinhloko",
                    opt2: "Imiyalo evamile",
                    opt3: "Imiyalo yokulawula",
                    opt4: "Swarm-imiyalo",
                    opt5: "Izinketho zomhlaba wonke",
                    opt6: "Ifayela lokumisa",
                    opt7: "Imiyalo evamile compose",
                    opt8: "Izinketho ze Compose",
                    opt9: "Ikhaya",

                }
            }
        }
    }
}, function(err, t) {
    updateContent();
});

// Функция для обновления контента на странице
function updateContent() {
    document.getElementById('opt1').innerText = i18next.t('usage.opt1');
    document.getElementById('opt2').innerText = i18next.t('usage.opt2');
    document.getElementById('opt3').innerText = i18next.t('usage.opt3');
    document.getElementById('opt4').innerText = i18next.t('usage.opt4');
    document.getElementById('opt5').innerText = i18next.t('usage.opt5');
    document.getElementById('opt6').innerText = i18next.t('usage.opt6');
    document.getElementById('opt7').innerText = i18next.t('usage.opt7');
    document.getElementById('opt8').innerText = i18next.t('usage.opt8');
    document.querySelectorAll('.opt9').forEach(item => item.innerText = i18next.t('usage.opt9'));
}

// Функция для изменения языка
function changeLanguage(lang) {
    i18next.changeLanguage(lang, updateContent);
    localStorage.setItem('language', lang);
}

// Добавьте обработчик событий для выбора языка
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.createElement('select');
    languageSelect.classList.add('language-select');
    
    constants.LANGUAGES.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang;
        languageSelect.appendChild(option);
    });

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        languageSelect.value = savedLanguage; // Устанавливаем значение селектора языка
    }

    languageSelect.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });

    document.body.append(languageSelect); // Добавляем селектор языка в начало body
    updateContent();
});
