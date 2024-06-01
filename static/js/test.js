
//HTML dokümanındaki bir elementin id özniteliği "questions" olan elementin referansını alır,soru ve cevap seçenekleri görüntülenir
const questionDisplay = document.getElementById('questions')
//HTML dokümanındaki bir elementin id özniteliği "answer" olan elementin referansını alır,testin sonucunun görüntülendiği ve kullanıcıya bir sonraki adıma geçmesi için yönlendirme yapılan bölümdür.
const answerDisplay = document.getElementById('answer')


// soruları ve cevapları içeren dizi
const questions = [
    {
        id: 0,
        text: "Cildinizde gözenek görünümü ne durumdadır?",
        answers: [
            {
                text: "Büyük ve çok belirgin",
                image: "https://media.istockphoto.com/id/179598340/tr/foto%C4%9Fraf/acne-scars.jpg?s=612x612&w=0&k=20&c=f_FoxqRWFwc9BOZrcPeg0jYzUUOyYYBtKiaw0uu2QDY=",
                alt: "Photo of the Empire State Building during daytime",
            },
            {
                text: "Kısmen belirgin ",
                image: "https://media.istockphoto.com/id/851419654/tr/foto%C4%9Fraf/y%C3%BCz%C3%BCnde-%C3%A7iller.jpg?s=612x612&w=0&k=20&c=g-9J-T4qzGESmVw-iksfvWswQi_tzjk9XOqIXgxgUgY=",
                alt: "Photo of the Eiffel Tower at night",

            },
            {
                text: "Küçük ve az belirgin",
                image: "https://media.istockphoto.com/id/673925708/tr/foto%C4%9Fraf/%C3%A7iller-ve-%C3%A7iller.jpg?s=612x612&w=0&k=20&c=N003UxIke88sqmmXR3ziEyWh3YcUMZFawexsoGBz1B8=",
                alt: "Photo of Downtown Dubai and Burj Khalifa",
            },
            {
                text: "Normal boyutta ",
                image: "https://media.istockphoto.com/id/91854080/tr/foto%C4%9Fraf/closeup-of-redheaded-young-woman.jpg?s=612x612&w=0&k=20&c=YZLu01JWGkolsVvII5_O_bdOyk1F_-pcSuHO_gzRfk4=",
            }
        ]
    },
    {
        id: 1,
        text: "Cildinizin gün içinde parlama durumu nedir?",
        answers : [
            {
                text: "Sürekli parlak ve yağlı",
                image: "https://media.istockphoto.com/id/1283385895/tr/foto%C4%9Fraf/y%C3%BCz%C3%BCnde-nemlendirici-jel-ile-g%C3%BCzel-gen%C3%A7-kad%C4%B1n.jpg?s=612x612&w=0&k=20&c=MS4OEPF5q63BdVg5qgujTpdBNHp8_r1evhlJYGHmswk=",
                alt: "Photo of some Pizza", 
            },
            {
                text: "T bölgesi parlak bir görünüm",
                image: "https://media.istockphoto.com/id/1474300446/tr/foto%C4%9Fraf/beautiful-natural-woman-extreme-close-up.jpg?s=612x612&w=0&k=20&c=Ut3wRZOboGm3cQuMaIGKHfjQWDII_niSs_N-mL7XEJw=",
                alt: "Photo of fried chicken",
            },
            {
                text: "Mat bir görünüme sahip",
                image: "https://media.istockphoto.com/id/1778013457/tr/foto%C4%9Fraf/the-woman-skin-flakes-off-at-the-mouth-dry-skin-face-skin-irritation-after-peeling-after.jpg?s=612x612&w=0&k=20&c=JiHSsEZM6AO8w5g2ipd71KU2GuBQYgLAHKiBW2EqUm8=",
                alt: "Photo of a bowl of indomie noodles", 
            },
            {
                text: "Dengeli bir görünüme sahip",
                image: "https://media.istockphoto.com/id/504365507/tr/foto%C4%9Fraf/fresh-faced-beauty.jpg?s=612x612&w=0&k=20&c=EeA3bj5LNScAK8N8jRQrRVIx84VIA67T-oDVn9Wn-nw=",
                alt: "Photo of puff puff",
 
            }
        ]
    },
    {
        id: 2,
        text: "Hangi bölgelerde,ne sıklıkla sivilce oluşur?",
        answers: [
            {
                text: "Sık sık, yüzün her bölgesinde",
                image: "https://media.istockphoto.com/id/1211308855/tr/foto%C4%9Fraf/ergenlik-d%C3%B6neminde-gen%C3%A7-k%C4%B1z-cilt-sorunlar%C4%B1.jpg?s=612x612&w=0&k=20&c=NBOn6kZg02ecHIMIO1y_o_ONq12F5VP9Vx-s9UN6qco=",
                alt: "Photo of Nokia 3310",
            },
            {
                text: "Orta düzeyde,T bölgesinde",
                image: "https://media.istockphoto.com/id/1749103941/tr/foto%C4%9Fraf/young-man-with-acne-problem-closeup-view-of-nose.jpg?s=612x612&w=0&k=20&c=GYOM8eY4nzqeXFfmNvXuk8-SiuDXgBRjrrcuLkZra9g=",
                alt: "Photo of iPad Pro",
            },
            {
                text: "Hiç, nadiren sivilce problemim olur",
                image: "https://media.istockphoto.com/id/488319502/tr/foto%C4%9Fraf/teenager-problems.jpg?s=612x612&w=0&k=20&c=OriQLI5Xmh_ULfikxHf3EM3296idAH1aMw_QO4DBKUQ=",
                alt: "Photo of iPhone 14 Pro Max",
            },
            {
                text: "Nadiren, genellikle T bölgesinde",
                image: "https://media.istockphoto.com/id/2153341114/tr/foto%C4%9Fraf/asian-young-with-pimple-acne-scar-on-skin-facial-problem.jpg?s=612x612&w=0&k=20&c=_4iuWhjs9ysGzrjAZJNoqJkIMIjbPwJwVvDpquTBX5I=",
                alt: "Photo of a Macbook",
            }
        ]
    },
    {
        id: 3,
        text: "Mevsim geçişlerinde cildinizin durumu nasıldır?",
        answers: [
            {
                text: "Yaz aylarında daha yağlı bir görünüm",
                image: "https://media.istockphoto.com/id/578302556/tr/foto%C4%9Fraf/solo-in-the-sun.jpg?s=612x612&w=0&k=20&c=4qHLCmBlAAHTHlO0pGk3tmtcL9xcxPeP3ZkdyNEJ4QE=",
                alt: "Photo of a woman writing", 
            },
            {
                text: "Yaz aylarında T bölgesinde parlak bir görünüm",
                image: "https://media.istockphoto.com/id/1428276310/tr/foto%C4%9Fraf/the-sun-of-suntan-lotion.jpg?s=612x612&w=0&k=20&c=MY3dLZBrZPeVtIf7IKgYqfcPGuEutTCXjGgpaUSaf2U=",
                alt: "Photo of a man editing a video",
            },
            {
                text: "Kış aylarında daha kuru,mat ve pul pul bir görünüm",
                image: "https://media.istockphoto.com/id/1161892010/tr/foto%C4%9Fraf/kar-manzara-y%C3%BCz%C3%BCnde-g%C3%BCne%C5%9F-kremi-uygulayan-gen%C3%A7-kad%C4%B1n.jpg?s=612x612&w=0&k=20&c=v0ejJ1z-EwbvKGNVf-oL-NqZjA-5YmNQrSDLjwxxypI=",
                alt: "Photo of Codes on a laptop", 
            },
            {
                text: "Bir değişiklik gözlemlemem",
                image: "https://media.istockphoto.com/id/468906855/tr/foto%C4%9Fraf/enjoying-the-fresh-sea-air.jpg?s=612x612&w=0&k=20&c=3bTR1hNnsmgvlEZIkB5tylqLf8rynfbYiJgm4VrPdeU=",
                alt: "Photo of Woman in a Flower Garden",
            }
        ]
    },
    {
        id: 4,
        text: "Cildiniz bakım ürünlerine genelde nasıl tepki verir?",
        answers: [
            {
                text: "Genelde cildimi rahatlatır",
                image: "https://media.istockphoto.com/id/1460122310/tr/foto%C4%9Fraf/cream-moisturizer-and-facial-black-woman-in-skincare-beauty-or-cosmetics-promotion-on.jpg?s=612x612&w=0&k=20&c=5lPf7Vk7P0lVF9j5Bz7jr8p0LqhAcwYtv6NP_6OikY0=",
                alt: "Photo of Candle lit diner setting",
            },
            {
                text: "Yanak bölgemde gerginlik olur",
                image: "https://media.istockphoto.com/id/1209020071/tr/foto%C4%9Fraf/aynada-akne-lekeleri-bakarak-mutsuz-kad%C4%B1n-kapat%C4%B1n.jpg?s=612x612&w=0&k=20&c=3Ok_UgL0z-rJbwoWLvmtYz2V78aZKcX3-UYURDkHLEo=",
                alt: "Photo of television with netflix on",
            },
            {
                text: "Tüm yüzümde kızarıklık ve tahriş olur",
                image: "https://media.istockphoto.com/id/1214062242/tr/foto%C4%9Fraf/k%C4%B1rm%C4%B1z%C4%B1-yanaklar%C4%B1-olan-%C3%A7ocuk-diyatez-veya-alerji-belirtileri-y%C3%BCz%C3%BCnde-deride-k%C4%B1zar%C4%B1kl%C4%B1k-ve.jpg?s=612x612&w=0&k=20&c=qWS9N7QUqJS22ukHGCm_yqgPecWvua8IBTVk-xI0R1U=",
                alt: "A book with a flower on it",
            },
            {
                text: "Olumsuz bir durum yaşamam",
                image: "https://media.istockphoto.com/id/1253490597/tr/foto%C4%9Fraf/d%C3%B6vmeler-ile-seksi-k%C4%B1z-aynada-g%C3%B6r%C3%BCn%C3%BCyor-y%C3%BCz-ve-dekolte-alan%C4%B1nda-krem-uygulamak.jpg?s=612x612&w=0&k=20&c=-czTHgKrMcVA9_SzGJFzJhv5TwMFZ5edwO5uqiqnGxM=",
                alt: "Photo of a couple at a carnival",
            }
        ]
    },
    {
        id: 5,
        text: "Cildiniz güneşe maruz kaldığında nasıl tepki verir?",
        answers: [
            {
                text: " Hızla yağlanır ve parlaklaşır",
                image: "https://media.istockphoto.com/id/1629063956/tr/foto%C4%9Fraf/beauty-care-radiant-face-woman-glowing-makeup.jpg?s=612x612&w=0&k=20&c=T0CUXdlRoOPQvYsIBMkn_8Egqxd0_jHyP_L8-XriLOc=",
                alt: "Photo of a wedding dress",
            },
            {
                text: "T bölgesinde bazen yağlanma olur.",
                image: "https://media.istockphoto.com/id/1483052726/tr/foto%C4%9Fraf/face-breath-and-sweat-with-an-exercise-woman-outdoor-in-nature-for-a-cardio-or-endurance.jpg?s=612x612&w=0&k=20&c=WMHaoQAx8jBjhh1GEHOA7m1M0O_ikb1G7IggKqUh9BA=",
                alt: "Photo of a wedding dress",
            },
            {
                text: "Kızarıklık ve kaşıntı olur ",
                image: "https://media.istockphoto.com/id/488469708/tr/foto%C4%9Fraf/skin-beauty-natural.jpg?s=612x612&w=0&k=20&c=tY5SmUugko1eneVoYfv2TyqRra6JQrAX-c1UB-5PyrM=",
                alt: "Photo of Wedding Dress", 
            },
            {
                text: "Bir değişiklik gözlemlemem",
                image: "https://media.istockphoto.com/id/1467823654/tr/foto%C4%9Fraf/relaxing-girl.jpg?s=612x612&w=0&k=20&c=ZbzsoiWlsL9fH3jrKbnHPd3UehcqqjpDcsEjEhMqm5Y=",
                alt: "Photo of a wedding dress", 
            }
        ]
    },
    {
        id: 6,
        text: "Cildiniz genellikle nemlendiriciye ihtiyaç duyar mı?",
        answers: [
            {
                text: "Yağlı olduğu için kullanmam",
                image: "https://media.istockphoto.com/id/2148629108/tr/foto%C4%9Fraf/beautiful-young-woman-with-problematic-skin.jpg?s=612x612&w=0&k=20&c=CQqq9fUQkFGNFLREefgh1dtoBQSrhEt1B9aA1vBInpE=",
                alt: "Photo of Neon Sign",  
            },
            {
                text: "Yanak bölgesinde kullanırım",
                image: "https://media.istockphoto.com/id/1170104957/tr/foto%C4%9Fraf/gen%C3%A7-ve-g%C3%BCzel-cilt.jpg?s=612x612&w=0&k=20&c=bNvKdAo4hCTBtS1ZZoATVqMSjhRfsppSRZ7NZh-bOHc=",
                alt: "Photo of neon sign", 
            },
            {
                text: "Evet,her bölgede kullanırım",
                image: "https://media.istockphoto.com/id/1097340200/tr/foto%C4%9Fraf/ne%C5%9Feli-kad%C4%B1n-nemlendirici-uygulayarak.jpg?s=612x612&w=0&k=20&c=hOIka7W-kVC6eh3TaNeh966di-p_rvtY-DPoaDPhoMg=",
                alt: "Photo of a Neon Sign", 
            },
            {
                text: "Nadir nemlendirici kullanırım",
                image: "https://media.istockphoto.com/id/1299900702/tr/foto%C4%9Fraf/an%C4%B1nda-mutlu-bir-cilt-i%C3%A7in-bir-hidrasyon-art%C4%B1rmak-vermek.jpg?s=612x612&w=0&k=20&c=-FRe2BeIBVW3_DCsy9k9fEr-fTeaLfyLR1SX1SARqJ0=",
                alt: "Photo of a Neon Sign",
            }
        ]
    }
    
]


// farklı cilt tiplerine ilişkin sonuç verilerini içeren dizi
const result = [
    {
        text: "Yağlı Cilt",
        image: "https://media.istockphoto.com/id/1494935138/tr/foto%C4%9Fraf/organic-cosmetics-with-ingredients.jpg?s=612x612&w=0&k=20&c=xi2ZJMcliMj3idnonhroefT6TTDjbndrNchJW5jvr-A=",
        alt: "Yağlı Cilt"
    }, 
    {
        text: "Karma Cilt",
        image: "https://media.istockphoto.com/id/1171698343/tr/foto%C4%9Fraf/deniz-tuzu-%C5%9Fi%C5%9Felerde-aromaterapi-ya%C4%9F%C4%B1-ve-vintage-ah%C5%9Fap-arka-plan-%C3%BCzerinde-papatya.jpg?s=612x612&w=0&k=20&c=m7E3Xu-NX8po5PHXydFHf-wDJs-sedSkAuyCSpmeI90=",
        alt: "Karma Cilt"
    },
    {
        text: "Kuru Cilt",
        image: "https://media.istockphoto.com/id/1482978773/tr/foto%C4%9Fraf/this-skin-care-flat-lay-top-view-is-perfect-for-showcasing-your-branding-with-cream.jpg?s=612x612&w=0&k=20&c=4kZ8dsh6kPLZLuoqd6yk-5u_btOD8CzrvdsoRPIk9IM=",
        alt: "Kuru Cilt"
    },
    {
        text: "Normal Cilt",
        image: "https://media.istockphoto.com/id/1350209088/tr/foto%C4%9Fraf/herbs-flowers-ingredients-and-products-for-natural-skincare.jpg?s=612x612&w=0&k=20&c=zR7SULVtvbyH6X_cQ8mK78FVjEJ1nmPF2kfzs9szyjY=",
        alt: "Normal Cilt"
    },
]


const unansweredQuestions = []
const chosenAnswers = []


const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text

        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => 
                handleClick(question.id, answer.text))

            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.credit)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)
    })
}

populateQuestions()

//Bu fonksiyonun amaçları; kullanıcının bir soruya cevap vermesi durumunda, bu cevabın işlenmesi, ilgili sorunun unansweredQuestions dizisinden   kaldırılması, kaydırma işleminin gerçekleştirilmesi ve ilgili soru bloğunun devre dışı bırakılması
const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId)){
        chosenAnswers.push(chosenAnswer)
    }
        const itemToRemove = unansweredQuestions.indexOf(questionId)

        if (itemToRemove > - 1){
            unansweredQuestions.splice(itemToRemove, 1)
        }

    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer)

    //cevapsız soru olup olmadığını kontrol eder
    if(!unansweredQuestions.length) {
        location.href = '#answer'
        showAnswer()
    }
}

const showAnswer = () => {
    const counts = [0, 0, 0, 0]; // Yağlı, Karma, Kuru, Normal cilt cevaplarının sayısını saklayan dizi

    // her soru için en çok seçilen cevabın sayısı sayılır
    questions.forEach(question => {
        question.answers.forEach((answer, index) => {
            const count = chosenAnswers.filter(chosen => chosen === answer.text).length;
            counts[index] += count;
        });
    });

    let maxIndex = 0;
    let maxCount = counts[0];

    // en çok seçilen cevabın indeksini ve sayısını bulma
    counts.forEach((count, index) => {
        if (count >= maxCount) {
            maxCount = count;
            maxIndex = index;
        }
    });

    let output;
    switch (maxIndex) {
        case 0:
            output = result[0]; // "Yağlı Cilt"
            break;
        case 1:
            output = result[1]; // "Karma Cilt"
            break;
        case 2:
            output = result[2]; // "Kuru Cilt"
            break;
        case 3:
            output = result[3]; // "Normal Cilt"
            break;
        default:
            break;
    }

    const resultBlock = document.createElement('div');
    resultBlock.classList.add('result-block');

    const resultTitle = document.createElement('h3');
    resultTitle.textContent = output.text;

    const resultImage = document.createElement('img');
    resultImage.setAttribute('src', output.image);
    resultImage.setAttribute('alt', output.alt);

    resultBlock.append(resultTitle, resultImage);

    answerDisplay.append(resultBlock);

    const allAnswerBlocks = document.querySelectorAll('.answer-block');
    Array.from(allAnswerBlocks).forEach(answerBlock =>
        answerBlock.replaceWith(answerBlock.cloneNode(true)));

    showLink(output.text);
    location.href = '#answer';
}


const showLink = (mostSelectedAnswer) => {
     
    // tüm divler gixlenir
    document.getElementById('yagli').style.display = 'none';
    document.getElementById('karma').style.display = 'none';
    document.getElementById('kuru').style.display = 'none';
    document.getElementById('normal').style.display = 'none';

     // test sonucuna göre ilgili div gösterilir
     if (mostSelectedAnswer === 'Yağlı Cilt') {
         document.getElementById('yagli').style.display = 'block';
     } else if (mostSelectedAnswer === 'Karma Cilt') {
         document.getElementById('karma').style.display = 'block';
     } else if (mostSelectedAnswer === 'Kuru Cilt') {
         document.getElementById('kuru').style.display = 'block';
     } else if (mostSelectedAnswer === 'Normal Cilt') {
         document.getElementById('normal').style.display = 'block';
     }
}



//chosenAnswer parametresi olarak belirtilen yanıt dışındaki tüm seçenekler %50 opaklıkla görsel olarak devre dışı.
const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")


    Array.from(currentQuestionBlock.children).forEach(block => {
        if(block.children.item(1).innerText != chosenAnswer) {
            block.style.opacity = "50%"
        }
    })


}






















