const createArray = (src, num) => {
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
            type: 'artystyczna',
            title: 'Pełna zachwytu',
            description: `Mimo, że tęsknię za wiosną, jestem dziś pełna zachwytu, pewnie ostatnim - 
            powrotem aury zimowej... Jeszcze tak wiele biel ma odcieni, jeszcze tak czyściej, 
            mniej ponuro, jeszcze cieplej się robi na sercu... spokojniej, bezpieczniej w bezruchu... 
            jeszcze sen przyciągnie do siebie, spowolni... wyszarpie z myśli zachwyt - niepojętą strategię przetrwania`,
            date: '9.03.2022',
            img: ["/fotografia/pelna_zachwytu/01.jpg","/fotografia/pelna_zachwytu/02.jpg","/fotografia/pelna_zachwytu/03.jpg","/fotografia/pelna_zachwytu/04.jpg","/fotografia/pelna_zachwytu/05.jpg","/fotografia/pelna_zachwytu/06.jpg","/fotografia/pelna_zachwytu/07.jpg","/fotografia/pelna_zachwytu/08.jpg","/fotografia/pelna_zachwytu/09.jpg","/fotografia/pelna_zachwytu/10.jpg","/fotografia/pelna_zachwytu/11.jpg","/fotografia/pelna_zachwytu/12.jpg","/fotografia/pelna_zachwytu/13.jpg","/fotografia/pelna_zachwytu/14.jpg","/fotografia/pelna_zachwytu/15.jpg","/fotografia/pelna_zachwytu/16.jpg","/fotografia/pelna_zachwytu/17.jpg","/fotografia/pelna_zachwytu/18.jpg"],
            url: '/fotografia/pelna_zachwytu'
        },{
            id: 'slonce_ozywia',
            title: 'Słońce ożywia',
            type: 'artystyczna',
            description: `Dzisiejsze, jeszcze mało wiosenne, 
            aczkolwiek ciekawe odkrycia z natury... Luty. Słońce ożywia zaspany świat, 
            ubarwia szarości, dodaje energii, magia... ziemi... w blasku`,
            date: '12.02.2022',
            img: createArray('/fotografia/slonce_ozywia/', 24),
            url: '/fotografia/slonce_ozywia'
        }
    ]
}

export { sessions, justToUseIt, data }

/* 
createArray('/fotografia/pelna_zachwytu/', 18)
imgs: createArray('../../img/fotografia/styczniowe_inspiracje/', 34),
*/
