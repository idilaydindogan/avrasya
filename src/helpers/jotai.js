import { atom, useAtom } from "jotai";
import image1 from "../../public/sectors/image1.jpeg";
import image2 from "../../public/sectors/image2.jpeg";
import image3 from "../../public/sectors/image3.jpeg";
import image4 from "../../public/sectors/image4.jpeg";
import image5 from "../../public/sectors/image5.jpeg";
import image6 from "../../public/sectors/image6.jpeg";

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

export const technologies = atom([]);
