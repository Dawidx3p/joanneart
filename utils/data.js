import { divider2 } from "./functions";

export const createArray = (src, num) => {
    const arr = new Array(num);
    const myArr = [...arr].map((i,key) => {
        num = key + 1;
        if(key< 9){
            return src+'0'+ num.toString() + '.jpg';
        }else {
            return src+num.toString() + '.jpg';
        }
    })
    return myArr
}

const justToUseIt = createArray('../../img/fotografia/styczniowe_inspiracje/', 34);

const sessions = {
    pelna_zachwytu: {
        title: 'Pełna zachwytu',
        description: 'Mimo, że tęsknię za wiosną, jestem dziś pełna zachwytu, pewnie ostatnim - powrotem aury zimowej... Jeszcze tak wiele biel ma odcieni, jeszcze tak czyściej, mniej ponuro, jeszcze cieplej się robi na sercu... spokojniej, bezpieczniej w bezruchu... jeszcze sen przyciągnie do siebie, spowolni... wyszarpie z myśli zachwyt - niepojętą strategię przetrwania',
        cover: 'https://joanneart-blog.netlify.app/img/fotografia/pelna_zachwytu/01.jpg',
        imgs: ["../../img/fotografia/pelna_zachwytu/01.jpg","../../img/fotografia/pelna_zachwytu/02.jpg","../../img/fotografia/pelna_zachwytu/03.jpg","../../img/fotografia/pelna_zachwytu/04.jpg","../../img/fotografia/pelna_zachwytu/05.jpg","../../img/fotografia/pelna_zachwytu/06.jpg","../../img/fotografia/pelna_zachwytu/07.jpg","../../img/fotografia/pelna_zachwytu/08.jpg","../../img/fotografia/pelna_zachwytu/09.jpg","../../img/fotografia/pelna_zachwytu/10.jpg","../../img/fotografia/pelna_zachwytu/11.jpg","../../img/fotografia/pelna_zachwytu/12.jpg","../../img/fotografia/pelna_zachwytu/13.jpg","../../img/fotografia/pelna_zachwytu/14.jpg","../../img/fotografia/pelna_zachwytu/15.jpg","../../img/fotografia/pelna_zachwytu/16.jpg","../../img/fotografia/pelna_zachwytu/17.jpg","../../img/fotografia/pelna_zachwytu/18.jpg","../../img/fotografia/pelna_zachwytu/19.jpg"],
        src: '../../img/fotografia/pelna_zachwytu/',
        href1: 'https://joanneart-blog.netlify.app/fotografia/pelna_zachwytu',
        href2: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjoanneart-blog.netlify.app%2Ffotografia%2Fpelna_zachwytu&amp;src=sdkpreparse'
    },
    slonce_ozywia: {
        title: 'Słońce ożywia',
        description: 'Dzisiejsze, jeszcze mało wiosenne, aczkolwiek ciekawe odkrycia z natury... Luty. Słońce ożywia zaspany świat, ubarwia szarości, dodaje energii, magia... ziemi... w blasku',
        cover: 'https://joanneart-blog.netlify.app/img/fotografia/slonce_ozywia/01.jpg',
        imgs: ["../../img/fotografia/slonce_ozywia/01.jpg","../../img/fotografia/slonce_ozywia/02.jpg","../../img/fotografia/slonce_ozywia/03.jpg","../../img/fotografia/slonce_ozywia/04.jpg","../../img/fotografia/slonce_ozywia/05.jpg","../../img/fotografia/slonce_ozywia/06.jpg","../../img/fotografia/slonce_ozywia/07.jpg","../../img/fotografia/slonce_ozywia/08.jpg","../../img/fotografia/slonce_ozywia/09.jpg","../../img/fotografia/slonce_ozywia/10.jpg","../../img/fotografia/slonce_ozywia/11.jpg","../../img/fotografia/slonce_ozywia/12.jpg","../../img/fotografia/slonce_ozywia/13.jpg","../../img/fotografia/slonce_ozywia/14.jpg","../../img/fotografia/slonce_ozywia/15.jpg","../../img/fotografia/slonce_ozywia/16.jpg","../../img/fotografia/slonce_ozywia/17.jpg","../../img/fotografia/slonce_ozywia/18.jpg","../../img/fotografia/slonce_ozywia/19.jpg","../../img/fotografia/slonce_ozywia/20.jpg","../../img/fotografia/slonce_ozywia/21.jpg","../../img/fotografia/slonce_ozywia/22.jpg","../../img/fotografia/slonce_ozywia/23.jpg","../../img/fotografia/slonce_ozywia/24.jpg"],
        src: '../../img/fotografia/slonce_ozywia/',
        href1: 'https://joanneart-blog.netlify.app/fotografia/slonce_ozywia',
        href2: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjoanneart-blog.netlify.app%2Ffotografia%2Fslonce_ozywia&amp;src=sdkpreparse'
    },
    styczniowe_inspiracje: {
        title: 'Styczniowe inspiracje',
        description: 'Blask słońca między gałązkami drzew, na falującej tafli strumienia, rozświetlający zamglone wzgórza i szczyty drzew - sens i światło życia.',
        cover: 'https://joanneart-blog.netlify.app/img/fotografia/styczniowe_inspiracje/01.jpg',
        imgs: ["../../img/fotografia/styczniowe_inspiracje/01.jpg","../../img/fotografia/styczniowe_inspiracje/02.jpg","../../img/fotografia/styczniowe_inspiracje/03.jpg","../../img/fotografia/styczniowe_inspiracje/04.jpg","../../img/fotografia/styczniowe_inspiracje/05.jpg","../../img/fotografia/styczniowe_inspiracje/06.jpg","../../img/fotografia/styczniowe_inspiracje/07.jpg","../../img/fotografia/styczniowe_inspiracje/08.jpg","../../img/fotografia/styczniowe_inspiracje/09.jpg","../../img/fotografia/styczniowe_inspiracje/10.jpg","../../img/fotografia/styczniowe_inspiracje/11.jpg","../../img/fotografia/styczniowe_inspiracje/12.jpg","../../img/fotografia/styczniowe_inspiracje/13.jpg","../../img/fotografia/styczniowe_inspiracje/14.jpg","../../img/fotografia/styczniowe_inspiracje/15.jpg","../../img/fotografia/styczniowe_inspiracje/16.jpg","../../img/fotografia/styczniowe_inspiracje/17.jpg","../../img/fotografia/styczniowe_inspiracje/18.jpg","../../img/fotografia/styczniowe_inspiracje/19.jpg","../../img/fotografia/styczniowe_inspiracje/20.jpg","../../img/fotografia/styczniowe_inspiracje/21.jpg","../../img/fotografia/styczniowe_inspiracje/22.jpg","../../img/fotografia/styczniowe_inspiracje/23.jpg","../../img/fotografia/styczniowe_inspiracje/24.jpg","../../img/fotografia/styczniowe_inspiracje/25.jpg","../../img/fotografia/styczniowe_inspiracje/26.jpg","../../img/fotografia/styczniowe_inspiracje/27.jpg","../../img/fotografia/styczniowe_inspiracje/28.jpg","../../img/fotografia/styczniowe_inspiracje/29.jpg","../../img/fotografia/styczniowe_inspiracje/30.jpg","../../img/fotografia/styczniowe_inspiracje/31.jpg","../../img/fotografia/styczniowe_inspiracje/32.jpg","../../img/fotografia/styczniowe_inspiracje/33.jpg","../../img/fotografia/styczniowe_inspiracje/34.jpg"],
        src: '../../img/fotografia/styczniowe_inspiracje/',
        href1: 'https://joanneart-blog.netlify.app/fotografia/styczniowe_inspiracje',
        href2: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjoanneart-blog.netlify.app%2Ffotografia%2Fstyczniowe_inspiracje&amp;src=sdkpreparse'
    },
    sesja_rodzinna: {
        title: 'Sesja rodzinna',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '+
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        cover: 'https://joanneart-blog.netlify.app/img/fotografia/sesja_rodzinna/01.jpg',
        imgs: ["../../img/fotografia/sesja_rodzinna/01.jpg","../../img/fotografia/sesja_rodzinna/02.jpg","../../img/fotografia/sesja_rodzinna/03.jpg","../../img/fotografia/sesja_rodzinna/04.jpg","../../img/fotografia/sesja_rodzinna/05.jpg","../../img/fotografia/sesja_rodzinna/06.jpg","../../img/fotografia/sesja_rodzinna/07.jpg","../../img/fotografia/sesja_rodzinna/08.jpg","../../img/fotografia/sesja_rodzinna/09.jpg","../../img/fotografia/sesja_rodzinna/10.jpg","../../img/fotografia/sesja_rodzinna/11.jpg","../../img/fotografia/sesja_rodzinna/12.jpg","../../img/fotografia/sesja_rodzinna/13.jpg","../../img/fotografia/sesja_rodzinna/14.jpg"],
        src: '../../img/fotografia/sesja_rodzinna/',
        href1: 'https://joanneart-blog.netlify.app/fotografia/sesja_rodzinna',
        href2: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjoanneart-blog.netlify.app%2Ffotografia%2Fsesja_rodzinna&amp;src=sdkpreparse'
    }
}

const data = {
    fotografia:[
        {
            id: 'pelna_zachwytu',
            type: 'Artystyczna',
            title: 'Pełna zachwytu',
            description: `Mimo, że tęsknię za wiosną, jestem dziś pełna zachwytu, pewnie ostatnim - 
            powrotem aury zimowej... Jeszcze tak wiele biel ma odcieni, jeszcze tak czyściej, 
            mniej ponuro, jeszcze cieplej się robi na sercu... spokojniej, bezpieczniej w bezruchu... 
            jeszcze sen przyciągnie do siebie, spowolni... wyszarpie z myśli zachwyt - niepojętą strategię przetrwania`,
            date: '9.03.2022',
            img: [["/fotografia/pelna_zachwytu/01.jpg","/fotografia/pelna_zachwytu/02.jpg","/fotografia/pelna_zachwytu/03.jpg","/fotografia/pelna_zachwytu/04.jpg"],["/fotografia/pelna_zachwytu/05.jpg","/fotografia/pelna_zachwytu/06.jpg","/fotografia/pelna_zachwytu/07.jpg"],["/fotografia/pelna_zachwytu/08.jpg","/fotografia/pelna_zachwytu/09.jpg","/fotografia/pelna_zachwytu/10.jpg","/fotografia/pelna_zachwytu/11.jpg"],["/fotografia/pelna_zachwytu/12.jpg","/fotografia/pelna_zachwytu/13.jpg","/fotografia/pelna_zachwytu/14.jpg"],["/fotografia/pelna_zachwytu/15.jpg","/fotografia/pelna_zachwytu/16.jpg","/fotografia/pelna_zachwytu/17.jpg","/fotografia/pelna_zachwytu/18.jpg"]],
            url: '/fotografia/pelna_zachwytu',
            imgSmall: divider2(createArray('/fotografia/pelna_zachwytu/', 18)),
        },{
            id: 'slonce_ozywia',
            title: 'Słońce ożywia',
            type: 'Artystyczna',
            description: `Dzisiejsze, jeszcze mało wiosenne, 
            aczkolwiek ciekawe odkrycia z natury... Luty. Słońce ożywia zaspany świat, 
            ubarwia szarości, dodaje energii, magia... ziemi... w blasku`,
            date: '12.02.2022',
            img: [["/fotografia/slonce_ozywia/01.jpg","/fotografia/slonce_ozywia/02.jpg","/fotografia/slonce_ozywia/03.jpg","/fotografia/slonce_ozywia/04.jpg"],["/fotografia/slonce_ozywia/05.jpg","/fotografia/slonce_ozywia/06.jpg","/fotografia/slonce_ozywia/07.jpg"],["/fotografia/slonce_ozywia/08.jpg","/fotografia/slonce_ozywia/09.jpg","/fotografia/slonce_ozywia/10.jpg","/fotografia/slonce_ozywia/11.jpg"],["/fotografia/slonce_ozywia/12.jpg","/fotografia/slonce_ozywia/13.jpg","/fotografia/slonce_ozywia/14.jpg"],["/fotografia/slonce_ozywia/15.jpg","/fotografia/slonce_ozywia/16.jpg","/fotografia/slonce_ozywia/17.jpg","/fotografia/slonce_ozywia/18.jpg"],["/fotografia/slonce_ozywia/19.jpg","/fotografia/slonce_ozywia/20.jpg","/fotografia/slonce_ozywia/21.jpg"],["/fotografia/slonce_ozywia/22.jpg","/fotografia/slonce_ozywia/23.jpg","/fotografia/slonce_ozywia/24.jpg"]],
            url: '/fotografia/slonce_ozywia',
            imgSmall: divider2(createArray('/fotografia/slonce_ozywia/', 24)),
        },{
            id: 'sesja_rodzinna',
            title: 'Sesja Rodzinna',
            type: 'Sesje zdjęciowe',
            description: ` `,
            date: '12.02.2022',
            img: [["/fotografia/sesja_rodzinna/01.jpg","/fotografia/sesja_rodzinna/02.jpg","/fotografia/sesja_rodzinna/03.jpg","/fotografia/sesja_rodzinna/04.jpg"],["/fotografia/sesja_rodzinna/05.jpg","/fotografia/sesja_rodzinna/06.jpg","/fotografia/sesja_rodzinna/07.jpg"],["/fotografia/sesja_rodzinna/08.jpg","/fotografia/sesja_rodzinna/09.jpg","/fotografia/sesja_rodzinna/10.jpg","/fotografia/sesja_rodzinna/11.jpg"],["/fotografia/sesja_rodzinna/12.jpg","/fotografia/sesja_rodzinna/13.jpg","/fotografia/sesja_rodzinna/14.jpg"]],
            url: '/fotografia/sesja_rodzinna',
            imgSmall: divider2(createArray('/fotografia/sesja_rodzinna/', 14)),
        },{
            id: 'styczniowe_inspiracje',
            title: 'Styczniowe inpiracje',
            type: 'Artystyczna',
            description: `Blask słońca między gałązkami drzew, na falującej tafli strumienia, rozświetlający zamglone wzgórza i szczyty drzew - 
            sens i światło życia`,
            date: '19.01.2022',
            img: [["/fotografia/styczniowe_inspiracje/01.jpg","/fotografia/styczniowe_inspiracje/02.jpg","/fotografia/styczniowe_inspiracje/03.jpg","/fotografia/styczniowe_inspiracje/04.jpg"],["/fotografia/styczniowe_inspiracje/05.jpg","/fotografia/styczniowe_inspiracje/06.jpg","/fotografia/styczniowe_inspiracje/07.jpg"],["/fotografia/styczniowe_inspiracje/08.jpg","/fotografia/styczniowe_inspiracje/09.jpg","/fotografia/styczniowe_inspiracje/10.jpg","/fotografia/styczniowe_inspiracje/11.jpg"],["/fotografia/styczniowe_inspiracje/12.jpg","/fotografia/styczniowe_inspiracje/13.jpg","/fotografia/styczniowe_inspiracje/14.jpg"],["/fotografia/styczniowe_inspiracje/15.jpg","/fotografia/styczniowe_inspiracje/16.jpg","/fotografia/styczniowe_inspiracje/17.jpg","/fotografia/styczniowe_inspiracje/18.jpg"],["/fotografia/styczniowe_inspiracje/19.jpg","/fotografia/styczniowe_inspiracje/20.jpg","/fotografia/styczniowe_inspiracje/21.jpg"],["/fotografia/styczniowe_inspiracje/22.jpg","/fotografia/styczniowe_inspiracje/23.jpg","/fotografia/styczniowe_inspiracje/24.jpg","/fotografia/styczniowe_inspiracje/25.jpg"],["/fotografia/styczniowe_inspiracje/26.jpg","/fotografia/styczniowe_inspiracje/27.jpg","/fotografia/styczniowe_inspiracje/28.jpg"],["/fotografia/styczniowe_inspiracje/29.jpg","/fotografia/styczniowe_inspiracje/30.jpg","/fotografia/styczniowe_inspiracje/31.jpg","/fotografia/styczniowe_inspiracje/32.jpg"],["/fotografia/styczniowe_inspiracje/33.jpg","/fotografia/styczniowe_inspiracje/34.jpg"]],
            url: '/fotografia/styczniowe_inspiracje',
            imgSmall: divider2(createArray('/fotografia/styczniowe_inspiracje/', 34)),
        },{
            id: 'swiatlo',
            title: 'Światło',
            type: 'Artystyczna',
            description: `Światło...rozprasza wątpliwości, ogrzewa sercem natury, uzdrawia zachwytem, obdarza obfitością, rozjaśnia sens... Moje jesienne "lśniące" inspiracje...`,
            date: '4.11.2021',
            url: '/fotografia/swiatlo',
            imgSmall: divider2(createArray('/fotografia/swiatlo/', 16)),
        },{
            id: '22luty',
            title: '22luty',
            type: 'Artystyczna',
            description: `I jeszcze kilka, jakże innych zdjęć z ubiegłego roku, magicznych - w dzisiejszym, wyjątkowym dniu - 22.02.2022 - niech się dzieje magia tego, co wokół nas tworzy natura i my sami🥰 z zachwytem, miłością, dobrem...`,
            date: '22.02.2022',
            url: '/fotografia/22luty',
            imgSmall: divider2(createArray('/fotografia/22luty/', 13)),
        },{
            id: 'artysta_mroz',
            title: 'Artysta Mróz',
            type: 'Artystyczna',
            description: `Czemu nie przypomnieć? Fajny był ten malujący Artysta Mróz, i wszystko miało jakiś taki inny blask...kryształowy... A w tym roku mało bieli, puchu, śniegu, blasku kryształowych inspiracji...`,
            date: '30.02.2022',
            url: '/fotografia/artysta_mroz',
            imgSmall: divider2(createArray('/fotografia/artysta_mroz/', 8)),
        },{
            id: 'slonce_ozywia',
            title: 'Artysta Mróz',
            type: 'Artystyczna',
            description: `Czemu nie przypomnieć? Fajny był ten malujący Artysta Mróz, i wszystko miało jakiś taki inny blask...kryształowy... A w tym roku mało bieli, puchu, śniegu, blasku kryształowych inspiracji...`,
            date: '30.02.2022',
            url: '/fotografia/artysta_mroz',
            imgSmall: divider2(createArray('/fotografia/artysta_mroz/', 8)),
        }
    ],
    malarstwo:[
        {
            id: 'trex',
            type: 'Murale',
            title: 'Tirex mural',
            description: `Dziś uszczęśliwiłam Kamilka i jego rodziców, malując mu w jego nowym pokoju wymarzonego Tirexa!
            Radość chłopca i to, jak dzielił się z rodzicami swoimi emocjami, gdy zobaczył efekt końcowy, były przepiękne, wzruszające. Dziękuję, że mogłam mu sprawić taką przyjemność...i sprawić, by poczuł, że to jego własny pokój...`,
            date: '12.07.2021',
            img: '/malarstwo/trex.png',
            url: '/malarstwo/trex'
        },{
            id: 'stylowy_kacik',
            type: 'Murale',
            title: 'Stylowy kącik',
            description: `Liście, gałązki, kwiatowe kompozycje z natury - to mój pomysł na pomalowanie ściany i stworzenie stylowego kącika do pracy twórczej. Oj, musiałam się zająć znów malowaniem, żeby się oderwać od tego, co na zewnątrz...
            Bo maluję z serca, będąc blisko wnętrza, ciszy, dobrej, twórczej energii. Jak Wam się podoba - w odcieniach złota i zieleni? Murale dają przestrzeń i pole do tworzenia najpiękniejszych kompozycji z marzeń. Zapraszam ❤`,
            date: '5.03.2022',
            img: '/malarstwo/stylowy_kacik.jpg',
            url: '/malarstwo/stylowy_kacik'
        },{
            id: 'piotrus_pan',
            type: 'Murale',
            title: 'Historia Piotrusia Pana w szkole specjalnej w Złotej',
            description: `Dziś skończyłam po 4-ech dniach malowania, w wolnych chwilach oczywiście po kilka godzin - mural baśniowy, tym razem zainspirowany historią Piotrusia Pana. Mural powstał w szkole specjalnej w Złotej i jest inspiracją oraz częścią większego projektu, przygotowywanego dla dzieci niepełnosprawnych,podopiecznych SOSW.

            Tak symbolicznie chodzi o przekraczanie granic, tu: wyobraźni. Jestem dumna z efektu, zmęczona, ale szczęśliwa... mogę dawać radość swoją twórczością, "malować ten świat" - jak w mojej ulubionej piosence "na żółto i na niebiesko", czy czyjeś "życie, by świat się zarumienił..." Nie pięknie?
            
            Niech ten kolejny baśniowy obraz w szkole specjalnej rozświetla każdy dzień tym, którzy tu się uczą, będą uczyli i ich opiekunom,nauczycielom. I uszczęśliwia każdego.`,
            date: '30.05.2021',
            img: '/malarstwo/piotrus_pan.jpg',
            url: '/malarstwo/piotrus_pan'
        },{
            id: 'basniowy_mural',
            type: 'Murale',
            title: 'Dla dzieci niepełnosprawnych w szkole specjalnej w Złotej (Małopolska)',
            description: `Dla dzieciaków niepełnosprawnych w szkole specjalnej w Złotej (Małopolska) namalowałam mural baśniowy, nawiązujący do utworów Marii Konopnickiej, patronki Szkoły. Jak Wam się podoba? To była dla mnie kilkudniowa wspaniała przygoda z kolorami, postaciami, mgiełkami...`,
            date: '6.01.2021',
            img: '/malarstwo/basniowy_mural.jpg',
            url: '/malarstwo/basniowy_mural'
        },{
            id: 'biblioteka_mural',
            type: 'Murale',
            title: 'Witam wszystkich bardzo serdecznie',
            description: `Na tej stronie dzielę się swoją pasją, nieco inną niż wszystko, czym się zajmowałam zawodowo. Ale kocham tworzenie dla dzieci i malowanie dla nich cudownych, barwnych, bajkowych przestrzeni, rozwijających wyobraźnię i poczucie smaku, piękna, wrażliwości...

            Tu projekt, jaki namalowałam w 2017 roku dla Miejskiej Biblioteki w Czchowie - kącik małego czytelnika.`,
            date: '28.11.2020',
            img: '/malarstwo/biblioteka_mural.jpg',
            url: '/malarstwo/biblioteka_mural'
        },{
            id: 'baszta',
            type: 'Obrazy',
            title: 'Malowanie, ależ ja to kocham...',
            description: `P. S. Wróciłam do malowania po wielu latach, bo praca mnie pochłonęła i niemal wchłonęła... Ale się w porę zorientowałam, że to nie moja droga, że chcę znów tworzyć, malować, pisać, fotografować, bo to mi sprawia ogromną frajdę.

            I powstają niesamowite murale, pokoje stają się niepowtarzalne i nabierają stylu, spełniam marzenia. Jeśli ktoś jest zainteresowany, śmiało, proszę o kontakt na messengerze, tel. lub e-mailowo, lubię wyzwania i z przyjemnością stworzę znów coś fajnego.`,
            date: '10.12.2021',
            img: '/malarstwo/baszta.jpg',
            url: '/malarstwo/baszta'
        },{
            id: 'aniol_intencja',
            type: 'Anioły',
            title: 'Anioły',
            description: `Moje ostatnie inspiracje twórcze... Z roślinami na szczęście, ochronę, sukces w życiu i zwierzętami mocy... Anioł z intencją dla wyjątkowej osoby`,
            date: '9.01.2022',
            img: '/malarstwo/aniol_intencja.jpg',
            url: '/malarstwo/aniol_intencja'
        },{
            id: 'aniol_natura',
            type: 'Anioły',
            title: 'Anioł, kobieta w symbiozie z naturą',
            description: `Czas przedświąteczny to czas kupowania prezentów, a może zrobić je samemu? Przeziębienie mnie uziemiło,więc wykorzystuję ten czas kreatywnie - stworzyłam Anioła, Kobietę w symbiozie z Naturą...`,
            date: '17.12.2021',
            img: '/malarstwo/aniol_natura.jpg',
            url: '/malarstwo/aniol_natura'
        }
        
    ]
}

export { sessions, justToUseIt, data }

/* 
createArray('/fotografia/pelna_zachwytu/', 18)
imgs: createArray('../../img/fotografia/styczniowe_inspiracje/', 34),
*/
