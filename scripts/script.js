// JavaScript document test
console.log("test");

// Variabele Algemeen
var SasukeUchihaNormaal = document.getElementById("Sasuke_uchiha");
var NaamSharingan = document.getElementById("Title");
var InformationText = document.getElementById("Text");
var VideoSasuke = document.getElementById("Video");
var SharinganChangeLeft = document.getElementById("Sharingan_left");
var SharinganChangeRight = document.getElementById("Sharingan_right");

// Variabele oog 1
var OneTomoeSharingan = document.getElementById("SharinganButton");
var Sharingan_sound = new Audio();
Sharingan_sound.src = "./audio/Sharingan_sfx.mp3";

// Functie voor oog 1 animatie + tekst en video veranderd
OneTomoeSharingan.addEventListener("click", function(){
    SasukeUchihaNormaal.src = "images/Sasuke_uchiha.png";
    NaamSharingan.textContent = "One Tomoe Sharingan";
    InformationText.textContent = "Sasuke Uchiha awakened his Sharingan for the first time during a traumatic event in his childhood. The specific moment occurred when he witnessed the death of his older brother, Itachi Uchiha, who killed the rest of their Uchiha clan. This event triggered Sasuke's emotional distress and led to the activation of his Sharingan. Episode 16 (Naruto). The one-tomoe Sharingan grants basic abilities such as enhanced perception, the ability to track fast movements, and seeing chakra. It also allows the user to understand and detect basic genjutsu techniques.  ";
    VideoSasuke.src = "Video/One_tomoe_sharingan.mp4";
    SharinganChangeLeft.src = "images/One_tomoe_sharingan.png";
    SharinganChangeRight.src = "images/One_tomoe_sharingan.png";
    Sharingan_sound.play();
// Sasuke ogen draaien
    SharinganChangeLeft.classList.add("RotateSharingan");
    setTimeout(function() {
        document.getElementById("Sharingan_left").classList.remove("RotateSharingan");
        }, 1500);
    SharinganChangeRight.classList.add("RotateSharingan");
    setTimeout(function() {
        document.getElementById("Sharingan_right").classList.remove("RotateSharingan");
        }, 1500);
// Achtergrond verandert
    document.body.style.backgroundImage = "url('images/naruto_background_1.png')";
    
}); 


             
var TwoTomoeSharingan = document.getElementById("SharinganButton2");
var Swoosh_sound = new Audio();
Swoosh_sound.src = "./audio/Swoosh1_sfx.mp3";
var Swoosh_2_sound = new Audio();
Swoosh_2_sound.src = "./audio/Swoosh2_sfx.mp3";

TwoTomoeSharingan.addEventListener("click", function(){
    SasukeUchihaNormaal.src = "images/Sasuke_uchiha.png";
    NaamSharingan.textContent = "Two Tomoe Sharingan";
    InformationText.textContent = "The second form of Sharingan that Sasuke activated is the two-tomoe Sharingan. Sasuke Uchiha first awakened his two-tomoe Sharingan during his battle with Haku. Episode 19 (Naruto) The two-tomoe Sharingan enhances the user's visual abilities further compared to the one-tomoe Sharingan. It provides better perception, increased tracking of fast movements, and improved chakra vision. Additionally, users can delve deeper into understanding and countering genjutsu.  ";
    VideoSasuke.src = "Video/Two_tomoe_sharingan.mp4";
    SharinganChangeLeft.src = "images/Two_tomoe_sharingan.png";
    SharinganChangeRight.src = "images/Two_tomoe_sharingan.png";
// Wanneer click soundeffect
    Sharingan_sound.play();
// Sasuke ogen draaien
    SharinganChangeLeft.classList.add("RotateSharingan");
    setTimeout(function() {
        document.getElementById("Sharingan_left").classList.remove("RotateSharingan");
        }, 1500);
    SharinganChangeRight.classList.add("RotateSharingan");
    setTimeout(function() {
        document.getElementById("Sharingan_right").classList.remove("RotateSharingan");
        }, 1500);
// Achtergrond verandert
    document.body.style.backgroundImage = "url('images/naruto_background_2.jpg')";
// Mes naar hem toe
    document.querySelector('.kunai').classList.add("kunai_change");
    setTimeout(function() {
        document.querySelector('.kunai').classList.remove("kunai_change");
        }, 3000);
// Geluid mes wordt afgespeeld
    setTimeout(function() {
        Swoosh_sound.play();
        }, 1400);
    setTimeout(function() {
        Swoosh_2_sound.play();
        }, 2200);

}); 


var MatureSharingan = document.getElementById("SharinganButton3");
// Variabele Vuur sound
var Fire_swoosh_sound = new Audio();
Fire_swoosh_sound.src = "./audio/Fire_swoosh_sfx.mp3";
// Variabele Justu sound
var Jutsu_sound = new Audio();
Jutsu_sound.src = "./audio/Jutsu_sfx.mp3";


MatureSharingan.addEventListener("click", function(){
    SasukeUchihaNormaal.src = "images/Sasuke_uchiha.png";
    NaamSharingan.textContent = "Mature Sharingan";
    InformationText.textContent = "The third form of Sharingan that Sasuke activated is the mature Sharingan. Sasuke activated the mature Sharingan during his battle against Naruto at the Valley of the End in episode 133 (Naruto). The mature Sharingan grants enhanced visual prowess to its user. It further improves perception, tracking of high-speed movements, and chakra vision. With the mature Sharingan, users gain a deeper understanding of advanced genjutsu techniques. This form also allows the user to copy and mimic the movements and techniques of their opponents more effectively, making it a formidable tool in battles.";
    VideoSasuke.src = "Video/Mature_sharingan.mp4";
    SharinganChangeLeft.src = "images/Mature_sharingan.png";
    SharinganChangeRight.src = "images/Mature_sharingan.png";
// Wanneer click soundeffect
    Sharingan_sound.play();
// Sasuke ogen draaien
    SharinganChangeLeft.classList.add("RotateSharingan");
    setTimeout(function() {
        document.getElementById("Sharingan_left").classList.remove("RotateSharingan");
        }, 1500);
    SharinganChangeRight.classList.add("RotateSharingan");
    setTimeout(function() {
        document.getElementById("Sharingan_right").classList.remove("RotateSharingan");
        }, 1500);
// Achtergrond verandert
    document.body.style.backgroundImage = "url('images/naruto_background_3.jpg')";
// Vuur mond
    document.querySelector('.fire').classList.add("fire_change");
    setTimeout(function() {
        document.querySelector('.fire').classList.remove("fire_change");
        }, 5000);
// Geluid jutsu en vuur wordt afgespeeld
    setTimeout(function() {
    Jutsu_sound.play();
    }, 1400);
    setTimeout(function() {
    Fire_swoosh_sound.play();
    }, 2000);
}); 


var MangekyoSharingan = document.getElementById("SharinganButton4");
// Magekyo Sharingan sound
var Mangekyo_sharingan_sound = new Audio();
Mangekyo_sharingan_sound.src = "./audio/Mangekyou_sharingan_sfx.mp3";

MangekyoSharingan.addEventListener("click", function(){
    SasukeUchihaNormaal.src = "images/Sasuke_uchiha.png";
    NaamSharingan.textContent = "Mangekyo Sharingan";
    InformationText.textContent = "The fourth form of sharingan that Sasuke activated is the Mangekyo Sharingan. Sasuke activated his Mangekyo Sharingan after the death of his older brother, Itachi Uchiha. In episode 141 (Naruto). Sasuke's Mangekyo Sharingan grants him access to the ability known as Amterasu a black flame that ignites anything it touches. Additionally, he gains the power of Susanoo, a massive ethereal warrior that acts as a protective and offensive force. These abilities represent Sasuke's unique Mangekyo Sharingan powers, each with its own formidable capabilities.";
    VideoSasuke.src = "Video/Mangekyo_sharingan.mp4";
    SharinganChangeLeft.src = "images/Mangekyo_sharingan.png";
    SharinganChangeRight.src = "images/Mangekyo_sharingan.png";
    // Wanneer click soundeffect
    Mangekyo_sharingan_sound.play();
    // Sasuke ogen draaien
    SharinganChangeLeft.classList.add("RotateSharingan");
    setTimeout(function() {
        document.getElementById("Sharingan_left").classList.remove("RotateSharingan");
        }, 1500);
    SharinganChangeRight.classList.add("RotateSharinganRightEye");
    setTimeout(function() {
        document.getElementById("Sharingan_right").classList.remove("RotateSharinganRightEye");
        }, 5000);
// Achtergrond verandert
    document.body.style.backgroundImage = "url('images/naruto_background_4.jpg')";
// Oog bloed
    document.querySelector('.blood').classList.add("blood_change");
    setTimeout(function() {
        document.querySelector('.blood').classList.remove("blood_change");
        }, 5000);
}); 

var EternalMangekyoSharingan = document.getElementById("SharinganButton5");
// Variabele Eteral mangekyo sharingan sound
var Eteral_mangekyo_sharingan_sound = new Audio();
Eteral_mangekyo_sharingan_sound.src = "./audio/Sharingan2_sfx.mp3";
var Susanoo_sound = new Audio();
Susanoo_sound.src = "./audio/Susanoo_sfx.mp3";

EternalMangekyoSharingan.addEventListener("click", function(){
    SasukeUchihaNormaal.src = "images/Sasuke_uchiha.png";
    NaamSharingan.textContent = "Eternal Mangekyo Sharingan";
    InformationText.textContent = "The fifth form of sharingan that Sasuke activated is the Eternal Mangekyo Sharingan. The process of obtaining the Eternal Mangekyō Sharingan involves a Uchiha transplanting the Mangekyō Sharingan of a close blood relative (typically a sibling) into their own eyes Episode 334 (Naruto). Sasuke's Eternal Mangekyō Sharingan grants him the abilities of Amaterasu and Susanoo, inherited from his brother Itachi. Amaterasu allows him to create inextinguishable black flames, while Susanoo is a colossal ethereal warrior for both defense and offense. Additionally, he gains Enton, an advanced form of manipulating Amaterasu flames to create weapons.";
    VideoSasuke.src = "Video/Eternal_mangekyo_sharingan.mp4";
    SharinganChangeLeft.src = "images/Eternal_mangekyo_sharingan.png";
    SharinganChangeRight.src = "images/Eternal_mangekyo_sharingan.png";
    // Wanneer click soundeffect
    Eteral_mangekyo_sharingan_sound.play();
    // Sasuke ogen draaien
    SharinganChangeLeft.classList.add("RotateSharingan");
    setTimeout(function() {
        document.getElementById("Sharingan_left").classList.remove("RotateSharingan");
        }, 1500);
    SharinganChangeRight.classList.add("RotateSharingan");
    setTimeout(function() {
        document.getElementById("Sharingan_right").classList.remove("RotateSharingan");
        }, 1500);
// Achtergrond verandert
    document.body.style.backgroundImage = "url('images/naruto_background_5.jpg')";
// Paarse monster komt omhoog
    document.querySelector('.susanoo').classList.add("susanoo_change");
    setTimeout(function() {
        document.querySelector('.susanoo').classList.remove("susanoo_change");
        }, 5000);
// Geluid susanoo wordt afgespeeld
    setTimeout(function() {
    Susanoo_sound.play();
    }, 1000);

}); 

var Rinnegan = document.getElementById("SharinganButton6");
// Variabele Rinnegan sound
var Rinnegan_sound = new Audio();
Rinnegan_sound.src = "./audio/Rinnegan_sfx.mp3";
// Variabele hele content van Sasuke
var SasukeUchihaMiddle = document.querySelector(".sasukeUchihaMiddle")

Rinnegan.addEventListener("click", function(){
    SasukeUchihaNormaal.src = "images/Sasuke_uchiha.png";
    NaamSharingan.textContent = "Rinnegan";
    InformationText.textContent = "The sixth form of sharingan that Sasuke activated is the Rinnegan. This happens after receiving Hagoromo Ōtsutsuki's chakra and the Six Paths power. Hagoromo, also known as the Sage of the Six Paths, grants Sasuke this power to help him in the battle against Kaguya Ōtsutsuki. Sasuke's Rinnegan grants him various powers, including the ability to use Six Paths Techniques like Planetary Devastation and Almighty Push. He can also perform instant teleportation with Amenotejikara, create invisible clones with Limbo: Border Jail, and sense chakra over long distances.";
    VideoSasuke.src = "Video/Rinnegan.mp4";
    SharinganChangeLeft.src = "images/Rinnegan.png";
    SharinganChangeRight.src = "images/Rinnegan.png";
    // Wanneer click soundeffect
    Rinnegan_sound.play();
    // Sasuke ogen draaien
    SharinganChangeLeft.classList.add("RotateSharingan");
    setTimeout(function() {
        document.getElementById("Sharingan_left").classList.remove("RotateSharingan");
        }, 1500);
    SharinganChangeRight.classList.add("RotateSharingan");
    setTimeout(function() {
        document.getElementById("Sharingan_right").classList.remove("RotateSharingan");
        }, 1500);
// Achtergrond verandert
    document.body.style.backgroundImage = "url('images/naruto_background_6.jpg')";
// Sasuke teleporteren
    SasukeUchihaMiddle.classList.add("sasukeUchihaMiddle_change");
    setTimeout(function() {
        document.querySelector(".sasukeUchihaMiddle").classList.remove("sasukeUchihaMiddle_change");
        }, 5000);
// Geluid jutsu wordt 4x afgespeeld
    setTimeout(function() {
    Jutsu_sound.play();
    }, 500);
    setTimeout(function() {
    Jutsu_sound.play();
    }, 4500);
}); 

// Easteregg
var Naruto = document.querySelector(".naruto");
var Logo = document.querySelector(".logo");
var Naruto_jutsu_sound = new Audio();
Naruto_jutsu_sound.src = "./audio/Naruto_jutsu_sfx.mp3";
var Naruto_sms_sound = new Audio();
Naruto_sms_sound.src = "./audio/Naruto_sms_sfx.mp3"

Logo.addEventListener("click", function(){
    Logo.src = "images/Naruto_logo.png";
    Naruto_jutsu_sound.play();
    Naruto.classList.add("naruto_change");
    setTimeout(function() {
        document.querySelector(".naruto").classList.remove("naruto_change");
        Logo.src = "images/Sasuke_logo.png"
    }, 7000);
        setTimeout(function() {
        Naruto_sms_sound.play();
    }, 2100);
});

var Start = document.querySelector("section:first-of-type");
Start.addEventListener("click", function(){
    Start.classList.toggle("hidden_section");
});