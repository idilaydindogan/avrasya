import { atom, useAtom } from "jotai";
import image1 from "../../public/sectors/image1.jpeg";
import image2 from "../../public/sectors/image2.jpeg";
import image3 from "../../public/sectors/image3.jpeg";
import image4 from "../../public/sectors/image4.jpeg";
import image5 from "../../public/sectors/image5.jpeg";
import image6 from "../../public/sectors/image6.jpeg";
import nx5000_1 from "../../public/technologies/nexedge-nx5000-handhelds.jpg";
import nx5000_2 from "../../public/technologies/nexedge-nx5000-mobile.jpg";
import nx5000_3 from "../../public/technologies/nexedge-nx5000-repeater.jpg";
import nx3000_1 from "../../public/technologies/nexedge-nx3000-handhelds.jpg";
import nx3000_2 from "../../public/technologies/nexedge-nx3000-mobiles.jpg";
import nxMain from "../../public/technologies/NEXEDGE-Main.jpg";
import nexedgeAll from "../../public/technologies/NEXEDGEAll.jpeg";
import nx1300de2 from "../../public/technologies/dmr-nx1300de2-handhelds-v2.jpg";
import nx1300de3 from "../../public/technologies/dmr-nx1300de3-handhelds.jpg";
import dmrMain from "../../public/technologies/DMR-Main1.jpg";
import dmrAll from "../../public/technologies/DMR-W700px_Link.jpg";
import pmrAll from "../../public/technologies/PMR446-W700px_Link.jpg";
import pmrMain from "../../public/technologies/PMR-Main.jpg";
import pmr1 from "../../public/technologies/_PMR-TK-3601D.jpg";
import pmr2 from "../../public/technologies/PMR-TK.jpg";
export const textAtom = atom([
	{
		id: 1,
		sector: "İnşaat Sektörü",
		shortContent:
			"Şantiye yönetimlerine çalışanlarını etkin bir şekilde yönetmek, projelerini güvenli, zamanında ve bütçeleri dahilinde teslim edebilmek amacıyla KENWOOD telsizleri birçok inşaat projesinde yaygın olarak kullanılmaktadır.",
		longContent1: `
            Şantiye yönetimlerine çalışanlarını etkin bir şekilde yönetmek, projelerini güvenli, zamanında ve bütçeleri dahilinde teslim edebilmek amacıyla KENWOOD telsizleri birçok inşaat projesinde yaygın olarak kullanılmaktadır.
        `,
		longContent2: `
        Bunun yanında, şantiyelerde kapsanacak alanın geniş olması, vinç operatörlerinin yerle olan haberleşmeleri, diğer ticari şirketlerin ve alt yüklenicilerin, güvenlik elemanlarının ve bu grupların kendi aralarında ve yönetimle olan diyalogları gibi aynı ağ içinde telsiz haberleşmesini zorlaştırıcı birçok faktör vardır. Ayrıca, son derece gürültülü, tozlu ortamlarda, yoğun yapılaşmanın içinde ve açık alanlarda hava durumu nasıl olursa olsun güvenilir, pürüzsüz ve anlık haberleşme aranır. Böyle ortamlarda da telsizin kullanımı kolay, dayanıklı ve sağlam olması gerekir.
    `,
		image: image1,
	},
	{
		id: 2,
		sector: "Perakende Sektörü ve Mağazalar",
		shortContent:
			"KENWOOD telsizleri, perakende sektöründe mağaza yönetimin, personelinin, stok denetleyicilerinin ve güvenlik ekiplerinin stok kaybını azaltmak, verimliliği arttırmak ve müşteriye daha iyi hizmet sunabilmeleri için farklı ve etkili bir şekilde iletişim kurmalarını sağlar.",
		longContent1: `KENWOOD telsizleri, perakende sektöründe mağaza yönetimin, personelinin, stok denetleyicilerinin ve güvenlik ekiplerinin stok kaybını azaltmak, verimliliği arttırmak ve müşteriye daha iyi hizmet sunabilmeleri için farklı ve etkili bir şekilde iletişim kurmalarını sağlar.`,
		longContent2: `
        Perakende sektöründe operasyonunuzun boyutu ve türü ne olursa olsun, ihtiyaçlarınızı karşılamak için en iyi ses veya ses ve veri iletişim sistemi KENWOOD tarafından sağlanır.
        KENWOOD ProTalk PMR446 lisans gerektirmeyen dijital ve analog telsiz sistemleri, en büyük süpermarketlerde, alışveriş merkezlerinden lüks butiklere kadar perakende sektöründeki çeşitli operasyonlarda yıllardır kullanılmaktadır.
        Artık Nexedge telsiz sistemleri ve ekipmanlarının bağımsız veya trunk altyapılı sistemlerini pazara tanıtımından itibaren perakende sektör operasyonları dijital telsiz sistemlerinin getirdiği yüksek kaliteli alım, artan etkili menzil ve ek güvenlik özelliklerinden faydalanmaktadır.`,
		image: image2,
	},
	{
		id: 3,
		sector: "Kamu emniyeti ve güvenliği",
		shortContent:
			"KENWOOD dijital telsiz sistemleri, en yüksek güvenlik koşullarında kanıtlanmış ve dünyanın dört bir yanındaki askeri üsler, polis hizmetleri, kamu ve özel güvenlik kurumları tarafından kabul edilmiş sistemlerdir.",
		longContent1: `KENWOOD dijital telsiz sistemleri, en yüksek güvenlik koşullarında kanıtlanmış ve dünyanın dört bir yanındaki askeri üsler, polis hizmetleri, kamu ve özel güvenlik kurumları tarafından kabul edilmiş sistemlerdir.
       `,
		longContent2: `
        Konu güvenlik, emniyet ve verimlilik olduğunda KENWOOD, farklı uygulamalara birçok farklı haberleşme çözümü sunmuş bir markadır.
        Hava ve deniz limanı, araştırma tesisleri, devlet binaları, askeri üsler, ulaşım ve dağıtım altyapıları, stadyum, spor ve eğlence mekanları, petrol işleme ve tedarik tesisleri, veri merkezleri, güvenli depolama tesisleri, alışveriş merkezleri, değerli eşya perakende mağazaları ve yüksek profi lli önemli kişiler.`,
		image: image3,
	},
	{
		id: 4,
		sector: "Konaklama – Oteller, Tatil Köyleri ve Kulüpler",
		shortContent:
			"KENWOOD DMR dijital telsiz çözümleri bir tuşla bireyler ve gruplar arası anlık net haberleşme sağlar.",
		longContent1: `KENWOOD DMR dijital telsiz çözümleri bir tuşla bireyler ve gruplar arası anlık net haberleşme sağlar.`,
		longContent2: `KENWOOD dijital telsizleri ve sistemleri dünyanın en büyük ve en seçkin otellerinde, tatil köylerinde ve gazinolarında kullanılmaktadır, telsiz haberleşmesi buralarda misafi rlerin kendilerini güvende hissetmesini sağlar, operasyonel verimliliği ve müşteri memnuniyetini arttırır.
        Daha küçük otellerin lisans gerektirmeyen PMR446 dijital telsiz kullanmalarının yanında büyük işletmeler birçok grubun ses ve veri haberleşmesine olanak sağlayan NEXEDGE® dijital trunk sistemlerini kullanması daha muhtemeldir.`,
		image: image4,
	},
	{
		id: 5,
		sector: "Havalimanı & Nakliye",
		shortContent:
			"Ekipler arası kritik, net, güvenilir ve etkili ses ve veri haberleşmesi KENWOOD dijital haberleşme çözümleri ile mümkündür.",
		longContent1: `Ekipler arası kritik, net, güvenilir ve etkili ses ve veri haberleşmesi KENWOOD dijital haberleşme çözümleri ile mümkündür.`,
		longContent2: `Tahmin edeceğiniz gibi, KENWOOD profesyonel telsiz haberleşme ekipmanları dünyanın önde gelen havalimalarının çoğunda yıllardır kullanılmaktadır.
        Her geçen gün, havalimanı şirketleri, olağanüstü kapsama alanına, esnekliğe ve güvenliğe erişebilmek için tamamen ölçülebilir IP bağlantılı dijital sistemlerde çalışan el, araç telsizleri ve tekrarlayıcı röleleri içeren NEXEDGE® & DMR dijital telsiz sistemlerine geçiş yapmaktadır.`,
		image: image5,
	},
	{
		id: 6,
		sector: "Petrol, Gaz & Kamu Hizmetleri",
		shortContent:
			"KENWOOD, IECEx sertifi kalı telsizlerin kullanılması gereken yanıcı gazların ve havadaki yanıcı partiküllerin bulunduğu ortamlar dahil tüm kamu hizmetleri alanında geniş müşteri portföyüne yüksek performanslı dijital ve analog telsiz haberleşme çözümleri sunmaktadır.",
		longContent1: `KENWOOD, IECEx sertifi kalı telsizlerin kullanılması gereken yanıcı gazların ve havadaki yanıcı partiküllerin bulunduğu ortamlar dahil tüm kamu hizmetleri alanında geniş müşteri portföyüne yüksek performanslı dijital ve analog telsiz haberleşme çözümleri sunmaktadır.
        
        `,
		longContent2: `
        Emniyet ve güvenlikten ödün vermeden üretkenlik ve verimlilik gereksinimlerini dengelemek, KENWOOD NEXEDGE® dijital trunk telsiz sistemlerinin önceliğidir. Bu tür kullanıcılar, bu sistemlerin artırılmış kapsama, netlik, gizli dinlenmeye karşı gelişmiş güvenlik, kullanıcı gruplarının etkin yönetimi ve en gelişmiş işlevlerin esnek yönetilebilirliğinden faydalanır.
        
        `,
		image: image6,
	},
]);

export const technologies = atom([
	{
		id: 1,
		name: "NEXEDGE® Dijital Çözümler",
		shortTitle: "Yüksek kalitede sinyal alımı ve arttırılmış kapsama",
		title:
			"Olağanüstü Multi-Protokol NEXEDGE® NX-5000 ve NX-3000 Seri Telsizler",
		totalImage: nexedgeAll,
		mainImage: nxMain,
		series: [
			{
				id: 1,
				sername: "NX-5000 Series",
				content: `Özellikle kritik haberleşme yapan müşteriler için dizayn edilmiştir.
                NX-5000 serisi el ve araç telsizleri, kullanıcıya bir çok kullanım güvenliği gereken zamanlarda analog, NXDN, DMR ve P25 protokoller arası geçişte bile emsalsiz haberleşme sağlar.
                Bir NX-5000 serisi telsiz gelen çağrıyı otomatik olarak algılar – NXDN (FDMA), DMR, P25 Phase 2 (TDMA) veya FM analog farketmeksizin ne modda aldı ise o modda gönderme yapar.`,
				images: [nx5000_1, nx5000_2, nx5000_3],
			},
			{
				id: 2,
				sername: "NX-3000 Series",
				content: `Analogdan dijitale geçmek isteyenler için en ideal çözümdür.
                NX-3000 serisi, NX-5000 serisinin sağladığı birçok özelliği sağlamasının yanında özellikle kullanıcılarına maliyet verimliliği ve DMR artı analog veya NEXEDGE NXDN artı analog haberleşme alternatifl eri sunar.`,
				images: [nx3000_1, nx3000_2],
			},
		],
	},
	{
		id: 2,
		name: "KENWOOD Dijital Telsizleri (DMR)",
		shortTitle: "Sağlam, dayanıklı ve güvenilir",
		title: `Tüm uygulamalar için en mükemmeli`,
		totalImage: dmrAll,
		mainImage: dmrMain,
		contentDetails: [
			{
				id: 1,
				content1:
					" KENWOOD DMR ürün gamı sayesinde; 12.5 kHz’de kullanılan sistemi TDMA 12.5 kHz 2 etkin kanala bölerek size daha kolay ve daha ekonomik dijital telsiz çözümleri sağlar.",
				content2:
					"  Bu telsizler, ETSI formatına uyumlu, maliyet avantajlı ses ve mesajlaşma arayan kritik haberleşme yapan kullanıcılar ve operasyonlar için dizayn edilmiştir.",
				description: "NX-1000 Serisi telsizler",
				content3:
					"Zengin özellikleri ve uygun fiyatıyla avantajlı DMR/NXDN/ANALOG el telsizleri.",
				content4:
					"Daha üst segment telsizlerin sağladığı dijital/analog mixed-mode özelliği, çok iyi bilinen KENWOOD ses kalitesi, sağladığı ileri düzeyde güvenlik özellikleri ve işlevselliği, uygun fiyat ve kalitede sağlama avantajı, bu ürünü ön plana çıkarmaktadır.",
				seriTitle: "Türkiye’de kullanılmasını tavsiye ettiğimiz modeller:",
			},
		],

		series: [
			{
				id: 1,
				sername: "NX-1300DE2",

				content: "UHF DMR/Analog ekranlı ve az tuşlu el telsizi",

				images: [nx1300de2],
			},
			{
				id: 2,
				sername: "NX-1300DE3",

				content: "UHF DMR/Analog ekransız/tuşsuz el telsizi",
				images: [nx1300de3],
			},
		],
	},
	{
		id: 3,
		name: "KENWOOD PMR446 telsizleri",
		shortTitle: "Lisans gerektirmez, hafif ve güvenilir",
		title: `Aidat, üyelik veya lisans ücreti olmadan tamamen bedava sınırsız arama.
       `,
		contentDetails: [
			{
				id: 1,
				content1:
					" KENWOOD ProTalk Dijital telsizler, 6km’ye kadar genişletilmiş menzili, geliştirilmiş gürültü azaltma özelliği, etkin güvenlik sağlayan özellikleri ve dijital dPMR’ın sağladığı netliği ile lisans gerektirmeyen telsizler kategorisinde çıtayı yükseklere taşımaya devam ediyor.",
				content2:
					" ProTalk Dijital dPMR446 telsizler hem dijital hem de analog modda çalışması (halihazırda analog PMR446 telsiz kullanıcılarının, dijital telsiz alana kadar kullanmakta oldukları analog telsizleri ile devam etmelerine olanak sağlayacağı manasına gelir) dahil birçok geliştirilmiş özellik taşır ve 16 kanalla tıkanma olmadan rahat bir haberleşme sağlar.",
			},
		],

		totalImage: pmrAll,
		mainImage: pmrMain,
		description: "NX-1000 Serisi telsizler",
		seriTitle: "Türkiye’de kullanılmasını tavsiye ettiğimiz modeller:",
		series: [
			{
				id: 1,
				sername: "",
				content: ``,
				title: "",
				images: [pmr1, pmr2],
			},
		],
	},
]);
