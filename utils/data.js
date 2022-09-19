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
            imgSmall: divider2(createArray('/fotografia/slonce_ozywia/', 24)),
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
            type: 'Artystyczna',
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
            imgSmall: divider2(createArray('/fotografia/sesja_rodzinna/', 14)),
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
        }
        
    ]
}

export { sessions, justToUseIt, data }

/* 
createArray('/fotografia/pelna_zachwytu/', 18)
imgs: createArray('../../img/fotografia/styczniowe_inspiracje/', 34),
*/
