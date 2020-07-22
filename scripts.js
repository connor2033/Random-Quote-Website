function randPrompt(){
    var prompt = document.getElementById("prompt");
    
    //Random num from 0 to 2
    var randNum = Math.floor(Math.random() * 3);
    
    if(randNum == 0){
        prompt.innerHTML = "Looking for inspiration?";
    }
    
    if(randNum == 1){
        prompt.innerHTML = "Welcome to Quotey";
    }
    
    if(randNum == 2){
        prompt.innerHTML = "What'll it be...";
    }
    
}


function btnClick() {
    
    var btnDiv = document.getElementById("btnDiv");
    var prompt = document.getElementById("prompt");
    var btn = document.getElementById("qBtn");
    var btnText = document.getElementById("btnText");
    
    var fullDisp = document.getElementById("dispDiv");
    var quote = document.getElementById("quote");
    var details = document.getElementById("details");
    var pic = document.getElementById("pic");

    
    //Animate Button and Prompt
    if(btnDiv.style.top != "10%"){
        buttonMid = false;
        
        btnDiv.style.top="10%";
        prompt.style.marginBottom = "-30px";
        prompt.style.opacity='0';
      
        btnText.style.opacity='0';
        
        setTimeout(function(){
            btnText.innerHTML = "New Quote";
            btnText.style.opacity='1';
        }, 500);

    }
    
    //Fade Out Quote, Details etc
    fullDisp.style.opacity = '0';
    setTimeout(randomQuote, 500);
}


function quoteIn(){
    
    var fullDisp = document.getElementById("dispDiv")
    var details = document.getElementById("details");
    var pic = document.getElementById("pic");
    
    fullDisp.style.opacity = '1';
    details.style.margin = '0';
    pic.style.margin = '0';
}


function randomQuote(){
    
    var quote = document.getElementById("quote");
    var name = document.getElementById("name");
    var info = document.getElementById("info");
    var imgLink = document.getElementById("imgLink");
    
    var photo = document.getElementById("pic");
    photo.src = "quotes/images/people/default.png";
    
    //RANDOM num from 0 to __
    var randNum = Math.floor(Math.random() * 38); 
    
    
    
    //setting photo based on number
    photo.src = "quotes/images/people/"+randNum+".jpg";
    
    
    
    
///------------QUOTES------------///
    
    
////////TEMPLATE//
    
//0
//    if(randNum == 0){
//                
//        //Quote
//        quote.innerHTML = "";
//        
//        //Name
//        name.innerHTML = "";
//        
//        //Details
//        info.innerHTML = "";
//        
//        //Link
//        var link = "";
//        
//        name.href = link;
//        imgLink.href = link;        
//    }
    
    
//0
    if(randNum == 0){
                
        //Quote
        quote.innerHTML = "There will always be someone whose better at whatever you're doing than you are; but you can always be the hardest working person in the room.";
        
        //Name
        name.innerHTML = "Casey Neistat";
        
        //Details
        info.innerHTML = "Casey Owen Neistat is an American YouTube personality, filmmaker, vlogger and co-founder of the multimedia company Beme, which was later acquired by CNN. In 2018, he founded 368, a creative space for creators to collaborate and influence each other.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Casey_Neistat";
        
        name.href = link;
        imgLink.href = link;        
    }

//1
    if(randNum == 1){
                
        //Quote
        quote.innerHTML = "The most dangerous thing you can do in life, is play it safe.";
        
        //Name
        name.innerHTML = "Casey Neistat";
        
        //Details
        info.innerHTML = "Casey Owen Neistat is an American YouTube personality, filmmaker, vlogger and co-founder of the multimedia company Beme, which was later acquired by CNN. In 2018, he founded 368, a creative space for creators to collaborate and influence each other.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Casey_Neistat";
        
        name.href = link;
        imgLink.href = link;        
    }

//2
    if(randNum == 2){
                
        //Quote
        quote.innerHTML = "Are you living for your resume or your eulogy?";
        
        //Name
        name.innerHTML = "Lecrae";
        
        //Details
        info.innerHTML = "Lecrae Devaughn Moore, mononymously known as Lecrae, is an American Christian hip hop recording artist, songwriter, music executive, and actor.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Lecrae";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
//3
    if(randNum == 3){
                
        //Quote
        quote.innerHTML = "Presure creates diamonds and fire refines the gold.";
        
        //Name
        name.innerHTML = "Lecrae";
        
        //Details
        info.innerHTML = "Lecrae Devaughn Moore, mononymously known as Lecrae, is an American Christian hip hop recording artist, songwriter, music executive, and actor.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Lecrae";
        
        name.href = link;
        imgLink.href = link;        
    } 
    
//4
    if(randNum == 4){
                
        //Quote
        quote.innerHTML = "Be your ancestors wildest dreams and your descendants biggest inspiration.";
        
        //Name
        name.innerHTML = "Lecrae";
        
        //Details
        info.innerHTML = "Lecrae Devaughn Moore, mononymously known as Lecrae, is an American Christian hip hop recording artist, songwriter, music executive, and actor.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Lecrae";
        
        name.href = link;
        imgLink.href = link;        
    }   
    
//5
    if(randNum == 5){
                
        //Quote
        quote.innerHTML = "Inhale courage, exhale fear.";
        
        //Name
        name.innerHTML = "Unknown";
        
        //Details
        info.innerHTML = "It is unknown what the origin of this quote is, but it sure is powerful.";
        
        //Link
        var link = "";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//6
    if(randNum == 6){
                
        //Quote
        quote.innerHTML = "Forget managing the situation, manage your mind.";
        
        //Name
        name.innerHTML = "Will Smith";
        
        //Details
        info.innerHTML = "This quote comes from a vlog on Will's YouTube channel about conquering his fear of the Ocean. Will Smith is an American actor and rapper. In April 2007, Newsweek called him \"the most powerful actor in Hollywood\". Smith has been nominated for five Golden Globe Awards and two Academy Awards, and has won four Grammy Awards.";
        
        //Link
        var link = "https://www.youtube.com/watch?v=JfkO0XxAQZo";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//7
    if(randNum == 7){
                
        //Quote
        quote.innerHTML = "A ship is always safe at the shore, but that is not what it is built for.";
        
        //Name
        name.innerHTML = "Albert Einstein";
        
        //Details
        info.innerHTML = "Albert Einstein's name has become a synonym for 'Genius'. Einstein is possibly the most influential scientist of our generation, if not, of all time. Known famously for developing the theory or relativity.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Albert_Einstein";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//8
    if(randNum == 8){
                
        //Quote
        quote.innerHTML = "A foolish man sleeps when he's tired, a wise man sleeps when he can.";
        
        //Name
        name.innerHTML = "Dan Mace";
        
        //Details
        info.innerHTML = "Dan said this in Casey Neistat's vlog on April 12, 2018. He is a young South African film maker and youtuber.";
        
        //Link
        var link = "https://www.youtube.com/watch?v=ZWhfSmk3fSI&t=4m25s";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//9
    if(randNum == 9){
                
        //Quote
        quote.innerHTML = "Fool me once, shame on you. Fool me twice... nah, that's not happening.";
        
        //Name
        name.innerHTML = "Kevin Garnett";
        
        //Details
        info.innerHTML = "Kevin Garnett is a former professional basketball player and Hall Of Famer who played for 21 seasons in the NBA. Known for his intensity, defensive ability, and versatility, Garnett is considered one of the greatest power forwards of all time.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Kevin_Garnett";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//10
    if(randNum == 10){
                
        //Quote
        quote.innerHTML = "Can't take it when you die, but you can't live without it.";
        
        //Name
        name.innerHTML = "J Cole";
        
        //Details
        info.innerHTML = "Jermaine Cole is an American rapper, singer, songwriter, producer, and record executive. Here, Cole is referring to Money in his hit song ATM.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/J._Cole";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//11
    if(randNum == 11){
                
        //Quote
        quote.innerHTML = "God placed the best things in life on the other side of fear.";
        
        //Name
        name.innerHTML = "Will Smith";
        
        //Details
        info.innerHTML = "Will Smith is an American actor and rapper. In April 2007, Newsweek called him \"the most powerful actor in Hollywood\". Smith has been nominated for five Golden Globe Awards and two Academy Awards, and has won four Grammy Awards.";
        
        //Link
        var link = "https://www.youtube.com/watch?v=xFjsIfXvArQ";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//12
    if(randNum == 12){
                
        //Quote
        quote.innerHTML = "The effect you have on others is the most valuable currency there is.";
        
        //Name
        name.innerHTML = "Jim Carrey";
        
        //Details
        info.innerHTML = "Jim Carrey is a Canadian-American actor, comedian, writer, producer, author, and artist. He is known for his energetic slapstick performances.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Jim_Carrey";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//13
    if(randNum == 13){
                
        //Quote
        quote.innerHTML = "Your need for acceptance can make you invisible in this world.";
        
        //Name
        name.innerHTML = "Jim Carrey";
        
        //Details
        info.innerHTML = "Jim Carrey is a Canadian-American actor, comedian, writer, producer, author, and artist. He is known for his energetic slapstick performances.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Jim_Carrey";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//14
    if(randNum == 14){
                
        //Quote
        quote.innerHTML = "I don't believe in hope. Hope is a beggar. Hope walks through the fire and faith leaps over it.";
        
        //Name
        name.innerHTML = "Jim Carrey";
        
        //Details
        info.innerHTML = "Jim Carrey is a Canadian-American actor, comedian, writer, producer, author, and artist. He is known for his energetic slapstick performances.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Jim_Carrey";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//15
    if(randNum == 15){
                
        //Quote
        quote.innerHTML = "If you attempt life, you might die, but you'll live on.";
        
        //Name
        name.innerHTML = "Kurt Braunohler";
        
        //Details
        info.innerHTML = "Kurt said this on the show 'Drunk History', in which he was of course, drunk.";
        
        //Link
        var link = "https://www.facebook.com/drunkhistorytv/videos/eddie-aikau-drunk-history/715909268861277/";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//16
    if(randNum == 16){
                
        //Quote
        quote.innerHTML = "Action is the antidote to despair.";
        
        //Name
        name.innerHTML = "Yes Theory";
        
        //Details
        info.innerHTML = "Yes Theory is a YouTube channel with ovr 5.5 million subscribers. Thier focus is on saying 'Yes' more in life, and 'Seeking Discomfort'.";
        
        //Link
        var link = "https://www.youtube.com/c/YesTheory";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    //17
    if(randNum == 17){
                
        //Quote
        quote.innerHTML = "I hear and I forget. I see and I remember. I do and I understand.";
        
        //Name
        name.innerHTML = "Confucius";
        
        //Details
        info.innerHTML = "Confucius was a Chinese philosopher and politician of the Spring and Autumn period. The philosophy of Confucius, also known as Confucianism, emphasized personal and governmental morality, correctness of social relationships, justice, kindness, and sincerity.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Confucius";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    //18
    if(randNum == 18){
                
        //Quote
        quote.innerHTML = "Whether you think you can or whether you think you can't, you're right.";
        
        //Name
        name.innerHTML = "Henry Ford";
        
        //Details
        info.innerHTML = "Henry Ford was an American industrialist and business magnate, founder of the Ford Motor Company and chief developer of the assembly line technique of mass production.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Henry_Ford";
        
        name.href = link;
        imgLink.href = link;        
    }

    //19
    if(randNum == 19){
                
        //Quote
        quote.innerHTML = "I wish everyone were told early on in life, that they're dying. That would allow a lot of people to live life to the fullest. Imagine that world.";
        
        //Name
        name.innerHTML = "Andreas Hem";
        
        //Details
        info.innerHTML = "Andreas Hem is a young filmmaker and youtuber from Norway.";
        
        //Link
        var link = "https://www.youtube.com/user/AndreasAHem/";
        
        name.href = link;
        imgLink.href = link;        
    }

    //20
    if(randNum == 20){
                
        //Quote
        quote.innerHTML = "You gotta ask yourself, is the juice worth the squeeze?";
        
        //Name
        name.innerHTML = "Dan Mace";
        
        //Details
        info.innerHTML = "Dan Mace is a young South African filmmaker and youtuber.";
        
        //Link
        var link = "https://www.youtube.com/channel/UCZfPrUL62TN74Mmrn-O_pZQ";
        
        name.href = link;
        imgLink.href = link;        
    }

    //21
    if(randNum == 21){
                
        //Quote
        quote.innerHTML = "The only way you lose at the game of life, is if you beat yourself.";
        
        //Name
        name.innerHTML = "Unknown";
        
        //Details
        info.innerHTML = "While the origin of this quote isn't fully known, there is a lot of truth to it.";
        
        //Link
        var link = "";
        
        name.href = link;
        imgLink.href = link;        
    }

    //22
    if(randNum == 22){
                
        //Quote
        quote.innerHTML = "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.";
        
        //Name
        name.innerHTML = "Henry Ford";
        
        //Details
        info.innerHTML = "Henry Ford was an American industrialist and business magnate, founder of the Ford Motor Company and chief developer of the assembly line technique of mass production.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Henry_Ford";
        
        name.href = link;
        imgLink.href = link;        
    }

    //23
    if(randNum == 23){
                
        //Quote
        quote.innerHTML = "Build your own dreams, or someone else will hire you to build theirs.";
        
        //Name
        name.innerHTML = "Farrah Gray";
        
        //Details
        info.innerHTML = "Farrah Gray is an American businessman, investor, author, columnist, and motivational speaker. Gray was raised on Chicago's South side. He began his entrepreneurial career at the age of six selling homemade lotion and hand-painted rocks door-to-door.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Farrah_Gray";
        
        name.href = link;
        imgLink.href = link;        
    }

    //24
    if(randNum == 24){
                
        //Quote
        quote.innerHTML = "Even if you’re on the right track, you’ll get run over if you just sit there.";
        
        //Name
        name.innerHTML = "Will Rogers";
        
        //Details
        info.innerHTML = "William Penn Adair Rogers was an American stage and film actor, vaudeville performer, cowboy, humorist, newspaper columnist, and social commentator from Oklahoma.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Will_Rogers";
        
        name.href = link;
        imgLink.href = link;        
    }

    //25
    if(randNum == 25){
                
        //Quote
        quote.innerHTML = "We deem those happy who from the experience of life have learned to bear its ills without being overcome by them.";
        
        //Name
        name.innerHTML = "Juvenal";
        
        //Details
        info.innerHTML = "Decimus Junius Juvenalis, known in English as Juvenal, was a Roman poet active in the late first and early second century AD. He is the author of the collection of satirical poems known as the Satires.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Juvenal";
        
        name.href = link;
        imgLink.href = link;        
    }

    //26
    if(randNum == 26){
                
        //Quote
        quote.innerHTML = "It ain't about how hard you hit; it's about how hard you can get hit, and keep moving forward. It's how much you can take, and keep moving forward. That's how winning is done.";
        
        //Name
        name.innerHTML = "Rocky Balboa";
        
        //Details
        info.innerHTML = "Robert Balboa, is the title character of the Rocky film series. The character was created by Sylvester Stallone, who has also portrayed him in all eight films in the franchise.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Rocky_Balboa";
        
        name.href = link;
        imgLink.href = link;        
    }

    //27
    if(randNum == 27){
                
        //Quote
        quote.innerHTML = "Your vibe attracts your tribe.";
        
        //Name
        name.innerHTML = "Unknown";
        
        //Details
        info.innerHTML = "We don't know who coined this term, but it's memorable.";
        
        //Link
        var link = "";
        
        name.href = link;
        imgLink.href = link;        
    }

    //28
    if(randNum == 28){
                
        //Quote
        quote.innerHTML = "Rules for happiness: something to do, someone to love, something to hope for.";
        
        //Name
        name.innerHTML = "Immanuel Kant";
        
        //Details
        info.innerHTML = "Immanuel Kant was an influential German philosopher in the Age of Enlightenment. In his doctrine of transcendental idealism, he argued that space, time, and causation are mere sensibilities; \"things-in-themselves\" exist, but their nature is unknowable.";
        
        //Link
        var link = "";
        
        name.href = link;
        imgLink.href = link;        
    }

    //29
    if(randNum == 29){
                
        //Quote
        quote.innerHTML = "It's not what happens to you, but how you react to it that matters.";
        
        //Name
        name.innerHTML = "Epictetus";
        
        //Details
        info.innerHTML = "Epictetus was a Greek Stoic philosopher. He was born a slave at Hierapolis, Phrygia and lived in Rome until his banishment, when he went to Nicopolis in northwestern Greece for the rest of his life.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Epictetus";
        
        name.href = link;
        imgLink.href = link;        
    }

    //30
    if(randNum == 30){
                
        //Quote
        quote.innerHTML = "Just because you are a character doesn't mean you have character.";
        
        //Name
        name.innerHTML = "The Wolf";
        
        //Details
        info.innerHTML = "This was spoken by a character in the classic Quentin Tarantino film, 'Pulp Fiction'.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Pulp_Fiction";
        
        name.href = link;
        imgLink.href = link;        
    }

    //31
    if(randNum == 31){
                
        //Quote
        quote.innerHTML = "Time is the enemy of the privileged few. Cost is the enemy of the masses.";
        
        //Name
        name.innerHTML = "Wendover Productions";
        
        //Details
        info.innerHTML = "Wendover Productions is a YouTube channel all about explaining how our world works. From travel, to economics, to geography, to marketing and more, every video will leave you with a little better understanding of our world.";
        
        //Link
        var link = "https://www.youtube.com/watch?v=n1QEj09Pe6k&feature=emb_title";
        
        name.href = link;
        imgLink.href = link;        
    }

    //32
    if(randNum == 32){
                
        //Quote
        quote.innerHTML = "At the end of the day, I'd rather be excluded for who I include than included for who I exclude.";
        
        //Name
        name.innerHTML = "Eston Williams";
        
        //Details
        info.innerHTML = "Eston Williams was the pastor of a Methodist Church in the United States.";
        
        //Link
        var link = "";
        
        name.href = link;
        imgLink.href = link;        
    }

//33
    if(randNum == 33){
                
        //Quote
        quote.innerHTML = "Besides the noble art of getting things done, there is the noble art of leaving things undone. The wisdom of life consists in the elimination of non-essentials.";
        
        //Name
        name.innerHTML = "Lin Yutang";
        
        //Details
        info.innerHTML = "Lin Yutang was a Chinese inventor, linguist, novelist, philosopher, and translator. His informal but polished style in both Chinese and English made him one of the most influential writers of his generation, and his compilations and translations of classic Chinese texts into English were bestsellers in the West.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Lin_Yutang";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    //34
    if(randNum == 34){
                
        //Quote
        quote.innerHTML = "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness, that most frightens us. We ask ourselves, Who am I to be brilliant, gorgeous, talented, fabulous? Actually, who are you not to be?";
        
        //Name
        name.innerHTML = "Marianne Williamson";
        
        //Details
        info.innerHTML = "This is often mistakenly attributed to Nelson Mandela, however, it was written by Marianne Williamson. Williamson is an American author, spiritual leader, politician, and activist.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Marianne_Williamson";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    //35
    if(randNum == 35){
                
        //Quote
        quote.innerHTML = "Big men admit mistakes, bigger men apologize for them.";
        
        //Name
        name.innerHTML = "Unknown";
        
        //Details
        info.innerHTML = "Apologies are powerful.";
        
        //Link
        var link = "";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    //36
    if(randNum == 36){
                
        //Quote
        quote.innerHTML = "With great power, comes great responsibility.";
        
        //Name
        name.innerHTML = "Uncle Ben (Spider-Man)";
        
        //Details
        info.innerHTML = "Said by Uncle Ben to Peter Parker in the movie 'Spider-Man (2002)', this quote has become known as the Peter Parker princliple.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/With_great_power_comes_great_responsibility";
        
        name.href = link;
        imgLink.href = link;        
    }

    //37
    if(randNum == 37){
                
        //Quote
        quote.innerHTML = "I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I'’'ve failed over and over and over again in my life. And that is why I succeed.";
        
        //Name
        name.innerHTML = "Michael Jordan";
        
        //Details
        info.innerHTML = "Michael Jordan, also known by his initials MJ, is a former NBA player and legend. He played 15 seasons in the NBA, winning six championships with the Chicago Bulls. MJ is arguably the Greatest Of All Time.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Michael_Jordan";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    
///------------End of Quotes----------------///
    

    quoteIn();
}












