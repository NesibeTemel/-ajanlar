document.getElementById("karakter").addEventListener("change", karakter);
let sonucBaslik=document.getElementById("sonucBaslik");

function merhaba(){
 let karakter;
 
 karakter=document.getElementById("ajanlar").selectedIndex;
 
 if(karakter==0){
 document.body.style.backgroundColor="#699EC3";
 yazi.innerHTML="Anavatanı Güney Kore'yi temsil eden Jett'in çevik ve darbelerden kaçmaya dayalı dövüş tarzı, başkalarının alamadığı riskleri almasını sağlar. Her çatışmada üstünlüğünü belli eder ve rakipleri daha nerede olduğunu anlamadan onları kesip biçmeye başlar."
 document.getElementById("resim").setAttribute("src","jett.fw.png");
 }
 else if(karakter==1){
    document.body.style.backgroundColor="#FE841B";
    yazi.innerHTML="Bomba gibi bir kişiliğe ve kocaman silahlara sahip olan Raze, aramıza Brezilya'dan katılıyor. Kafa göz dalan oyun tarzıyla düşmanları saklandıkları deliklerden çıkarmakta ve dar alanları ''bam bam bam'' temizlemekte üstüne yok."
    
    document.getElementById("resim").setAttribute("src", "razee.fw.png");
 }
 else if(karakter==2){
    document.body.style.backgroundColor="#71615E";
    yazi.innerHTML="İnsanüstü güçlere sahip İsveçli Breach, düşman zemininde sert bir şekilde yolu açan, hedeflenebilir bir kinetik dalga gönderir. Sebep olduğu hasar ve darbe, savaşın dengelerini değiştirecek niteliktedir."
    
    document.getElementById("resim").setAttribute("src", "breach.fw.png");
 }
 else if(karakter==3){
    document.body.style.backgroundColor="#8695A8";
    yazi.innerHTML="Aramıza ABD'den katılan Brimstone'un hava araçları sayesinde takımı her zaman 1-0 öndedir. Gereken her türlü işlevselliği titizlikle ve güvenli bir mesafeden sağlaması, muharebe alanında bu kumandanı eşsiz kılar."
     document.getElementById("resim").setAttribute("src", "brimstone.png");
 }
 else if(karakter==4){
    document.body.style.backgroundColor="#FAB155";
    yazi.innerHTML="Aramıza Birleşik Krallık'tan katılan ve yıldızlardan aldığı gücü dövüş stilinin her noktasına yansıtan Phoenix, savaş alanını alevlerle ve patlamalarla aydınlatır. Arkasında destek olsun olmasın, bildiği gibi savaşmak için ileri atılacağından şüpheniz olmasın."
     document.getElementById("resim").setAttribute("src", "phoenix.fw.png");
 }
 else if(karakter==5){
    document.body.style.backgroundColor="#2B8A94";
    yazi.innerHTML="Çinli ve kapı gibi Sage gittiği her yerde kendini ve takımını güvende tutar. Öldürülen silah arkadaşlarını hayata döndürme yeteneği ve agresif saldırıları bertaraf edebilmesiyle, cehennemvari savaş meydanında etrafına huzur verir."
     document.getElementById("resim").setAttribute("src", "Sage.png");
 }
 else if(karakter==6){
    document.body.style.backgroundColor="#4D677E";
    yazi.innerHTML="Rusya'nın uçsuz bucaksız tundralarında yetişen Sova düşmanlarını acımasız bir verimlilik ve titizlikle tespit eder, izlerini sürer ve onları yok eder. Özel yayı ve sıra dışı iz sürme yetenekleri ile ondan kaçsanız da asla saklanamazsınız."
     document.getElementById("resim").setAttribute("src", "sova.png");
 }
 else if(karakter==7){
    document.body.style.backgroundColor="#1C6C42";
    yazi.innerHTML="Amerikalı kimyacı Viper zehir yüklü, çeşit çeşit kimyasal cihazıyla savaş alanını kontrol altında tutarken düşmanın görüşünü de alt üst eder. Avını zehriyle değilse bile aklıyla mutlaka avcunun içine alır."
     document.getElementById("resim").setAttribute("src", "Viper.png");
 }
 else if(karakter==8){
    document.body.style.backgroundColor="#DE9767";
    yazi.innerHTML="Faslı bilgi uzmanı ve tek kişilik gözetleme ağı Cypher, düşmanın her hareketini bilir, her sırrını duyar ve her manevrasını görür. Cypher'ın gözleri hep üzerinizdedir."
     document.getElementById("resim").setAttribute("src", "chyper.fw.png");
 }
 else if(karakter==9){
    document.body.style.backgroundColor="#C167BC";
    yazi.innerHTML="Meksika'nın kalbinden kopup gelmiş Reyna teke tek çatışmalarda düşmanını ezer ve aldığı her skorla daha da coşar. Yapabilecekleri tamamen saf beceri gerektirir ve onu ciddi şekilde performansa dayalı kılar."
     document.getElementById("resim").setAttribute("src", "reyna.fw.png");
 }
 else if(karakter==10){
    document.body.style.backgroundColor="#E9CE2D";
    yazi.innerHTML="Alman dâhi Killjoy, kendi icatlarından oluşan cephaneliğiyle savaş meydanını kontrol altına alır. Cihazlarının verdiği hasar rakiplerini durdurmaya yetmezse robotlarının yardımıyla rakiplerini zayıflatarak onların ortadan kaldırılmalarını kolaylaştırır."
     document.getElementById("resim").setAttribute("src", "Killjoy.png");
 }
 else if(karakter==11){
    document.body.style.backgroundColor="#679B55";
    yazi.innerHTML="Aramıza Avustralya'dan katılan Skye, beraberinde getirdiği vahşi hayvan ordusuyla birlikte çatışmayı iyiden iyiye kızıştırıyor. Düşmana ayak bağı olan hayvanları ve takım arkadaşlarını iyileştirme yetisiyle, takımının gücünü pekiştiriyor ve takımdaki herkesi kolluyor."
     document.getElementById("resim").setAttribute("src", "Skye.png");
 }
 else if(karakter==12){
    document.body.style.backgroundColor="#6C99F4";
    yazi.innerHTML="Japon Yoru, gerçeklikte açtığı geçitlerden geçerek düşman hattına sinsice sızıyor. Yanılsamalardan ve kaba kuvvetten eşit oranda faydalanarak hedeflerini göz açıp kapayıncaya kadar indiriyor."
     document.getElementById("resim").setAttribute("src", "yoru.fw.png");
 }
 else if(karakter==13){
    document.body.style.backgroundColor="#BB8FF5";
    yazi.innerHTML="Ganalı ajan Astra, kozmosun enerjisini kullanarak savaş meydanını lehine değiştirebiliyor. Astral yolculuğu üzerinde tam kontrole sahip olması ve engin stratejik öngörüsüyle, düşmanın bir sonraki hamlesinden her zaman birkaç ışık yılı önde."
     document.getElementById("resim").setAttribute("src", "astra.fw.png");
 }
 else if(karakter==14){
    document.body.style.backgroundColor="#C04D58";
    yazi.innerHTML="Her daim şık ve tam teçhizat dolaşan Fransız silah tasarımcısı Chamber, ölümcül isabetliliğiyle rakipleri ortadan kaldırıyor. Özel yeteneklerini kullanarak görüş mesafesi sağlar, uzaktaki rakipleri avlar ve her plana mükemmel bir şekilde uyum sağlar."
     document.getElementById("resim").setAttribute("src", "Chamber.fw.png");
 }
 else if(karakter==15){
    document.body.style.backgroundColor="#A492C5";
    yazi.innerHTML="Filipinli Ajan Neon, şoke edici bir hızla öne atılır ve bedeninin ürettiği biyoelektrik dalgalarını düşmanların üstüne salar. Düşmanları gafil avlamak için yarışırcasına koşar ve hepsini yıldırım hızıyla indirir."
     document.getElementById("resim").setAttribute("src", "neon.png");
 }
}