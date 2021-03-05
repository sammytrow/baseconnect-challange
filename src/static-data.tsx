let personalInformation = {
    name: 'Sam Trowbridge',
    intro: {
        jobTitle: 'Front End Engineer',
        nameJap:'トローブリッジ:サム',
        image: 'images/small_profile.jpg',
        text1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        address: '123 barney street',
        dateOfBirth: '1992/10/05'
    },
    works:[
        {
            id:0,
            title: 'Thoburns',
            image: 'images/thoburns_img3.jpg',
            position: 'Animation',
            details:{
                images: ['images/thoburns_img1.JPG', 'images/thoburns_img2.jpg', 'images/thoburns_img3.jpg', 'images/thoburns_img4.jpg'],
                text: [
                    {
                        text_title: 'Thoburns',
                        text: 'Soon after arriving in japan I was approached by my old boss from Star Web Innovation with a small animation he had been asked to create. This was because I had previously created small animations for websites using Jquery and HTML5 in the past. However after creating a simple demo I was informed that the client wanted a 1-2m video with a lot more action than we were previously aware.',
                    },
                    {
                        text_title: 'Execution',
                        text: 'Once the full scope of the project was clear I made a tactical decision to use After Effects. I was given a 3 day time limit  in which I taught myself the basics of adobe and created a simple 10 second demo. The client seemed quite happy with the demo I produced and wanted to move on with the animation. This project took around a month of periodic working and constant contact with the clients, by the end they were very happy with the animation.'
                    }
                ]
            }

        },
        {
            id:1,
            title: 'Mercers',
            image: 'images/mercers_img1.jpg',
            position: 'Front End Development',
            details:{
                images: ['images/mercers_img1.JPG', 'images/mercers_img2.jpg', 'images/mercers_img3.jpg', 'images/mercers_img4.jpg'],
                text: [
                    {
                        text_title: 'Mercers',
                        text: 'This was my first big web design project, the company was rapidly growing and wanted a big change to their old website. This included a new design, responsive, content and additional languages. On this project I used HTML, CSS, Javascript and PHP. My role in this project was primarily front end implementation with some database updating.',
                    },
                    {
                        text_title: 'Result',
                        text: 'The final product was a large bilingual website for selling spanish property, this required fully dynamic pages that could call in the text and images for each language. An online admin system was also developed to allow the clients to update/add new products in the database.'
                    }
                ]
            }

        },
        {
            id:2,
            title: 'School Funiture',
            image: 'images/funiture_referb_img1.jpg',
            position: 'Front End Development',
            details:{
                images: ['images/funiture_referb_img1.JPG', 'images/funiture_referb_img2.jpg', 'images/funiture_referb_img3.jpg', 'images/funiture_referb_img4.jpg'],
                text: [
                    {
                        text_title: 'School Funiture',
                        text: 'The client required a completely new responsive website that could display a huge amount of products and categories, it needed an easily accessible and updatable admin system. The main challenge for this project was to make the site easily understood and simple to navigate. The user needed to be able to find what they were looking for, amongst a huge collection of products, as smoothly as possible.',
                    },
                    {
                        text_title: 'Result',
                        text: 'In this project I used HTML, CSS, Javascript, PHP and SQL. My contribution consisted of front end development and product insertion, To make the product creation as painless as possible we used excel sheets and a plugin we developed to allow mass creation. This included the creation and organisation of the database, as well as an online admin system that we also developed to allow the clients to update/add new products in the database./n/n' +
                        'This was a very large and time consuming project, we spent a large amount of time ensuring products were correctly uploaded and displayed. The final product has over 5000 products, which also consist of a huge collection of categories, subcategories and cross correlation.'
                    }
                ]
            }

        }
    ],
    experience:[
        {
            companyName:'Starweb Innovations LTD',
            position:'Apprentice, Junior Developer, Front End Developer, Part Time Front End Developer',
            date:'2012/10/20 - Now',
            moreInfo:'HTML, CSS, PHP, Javascript, JQuery, Wordpress'
        },
        {
            companyName:'ADMIRALTY Maritime Data Solutions',
            position:'Information Management',
            date:'2016/11/2 - 2017/05/28',
            moreInfo:'Assisted in the change from hard drive to online storage'
        },
        {
            companyName:'Interac',
            position:'Assistant Language Teacher',
            date:'2019/06/16 - Now',
            moreInfo:''
        }
    ],
    education:[
        {
            schoolName: 'Plymouth University',
            subject: 'Computer Science',
            date: '2014/9/01 - 2018/9/05',
            moreInfo: ''
        }
    ],
    skills:[
        {
            id:0,
            langName:'HTML/CSS',
            level:4,
            libraries:'test, test2'
        },
        {
            id:1,
            langName:'PHP',
            level:3,
            libraries:'test, test2'
        }
        ,
        {
            id:2,
            langName:'Javascript',
            level:3,
            libraries:'test, test2'
        },
        {
            id:3,
            langName:'Python',
            level:3,
            libraries:'test, test2'
        },
        {
            id:4,
            langName:'React/Typescript',
            level:2,
            libraries:'test, test2'
        },
        {
            id:5,
            langName:'Wordpress',
            level:4,
            libraries:'test, test2'
        },
        {
            id:6,
            langName:'Tensorflow',
            level:1,
            libraries:'test, test2'
        },
        {
            id:7,
            langName:'C/C++/C#',
            level:2,
            libraries:'test, test2'
        }
        ,
        {
            id:8,
            langName:'After Effects',
            level:2,
            libraries:''
        }
    ],
    personalQualities:[
        {
            title:'Openness to experience',
            percentage:85,
            infoText:'A high score means: Imaginative • open-minded • experimental • prefers creative conceptual problem solving'
        },
        {
            title:'Conscientiousness',
            percentage:67,
            infoText:'A high score means: Conscientious • disciplined • efficient • well organised • likes precise detail • strong sense of duty • (Very High scorers could be described as workaholics'
        },
        {
            title:'Extraversion',
            percentage:60,
            infoText:'A high score means: Outgoing • friendly • assertive • likes working with others • enjoys direct leadership roles'
        },
        {
            title:'Agreeableness',
            percentage:98,
            infoText:'A high score means: Compassionate • eager to please • good natured • prefers co-operation over competition and conflict'
        },
        {
            title:'Natural reactions',
            percentage:33,
            infoText:'A low score means: Not easily upset in stressful situations • relaxed • resilient • calm'
        }
    ],
    activity:{
        pages:[
            {
                img:'images/sciencealert.png',
                link:'https://www.facebook.com/ScienceAlert',
                text:'Science Alert'
            }, 
            {
                img:'images/snowboardaddiction.png',
                link:'https://www.facebook.com/snowboardaddiction',
                text:'Snowboard Addiction'
            },
            {
                img:'images/kerrangmagazine.jpg',
                link:'https://www.facebook.com/kerrangmagazine',
                text:'Kerrang'
            }
        ],
        aboutMe:''
        },
    socialMedia:[
        {
            img:'images/linkedIn_logo.png',
            link:'https://www.linkedin.com/in/sam-trowbridge-91ab33113'
        },
        {
            img:'images/ig-logo.png',
            link:'https://www.instagram.com/trowbridge.sam/'
        }
    ]
};
export{personalInformation};