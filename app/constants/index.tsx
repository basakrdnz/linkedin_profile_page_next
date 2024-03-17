export const NAV_LİNKS = [
  {
    href: "",
    key: "ana_sayfa",
    label: "Ana Sayfa",
    icon: "/icons8-home-64.png",
  },
  { href: "", key: "ağım", label: "Ağım", icon: "/icons8-user-male-64.png" },
  {
    href: "",
    key: "iş_ilanları",
    label: "İş İlanları",
    icon: "/icons8-briefcase-64.png",
  },
  {
    href: "",
    key: "mesajlaşma",
    label: "Mesajlaşma",
    icon: "/icons8-mailbox-64.png",
  },
  {
    href: "",
    key: "bildirimler",
    label: "Bildirimler",
    icon: "/icons8-news-64.png",
  },
];

export const FOOTER_LINKS_ONE = [
  {
    links: ["Hakkında"]
  },
  {
    links: ["Topluluk Yönergeleri"]
  },
  {
    links: ["Gizlilik ve Koşullar"]
  },
  {
    links: ["Satış Çözümleri"]
  },
  {
    links: ["Güvenlik Merkezi"]
  },
  {
    links: ["Erişilebilirlik"]
  },
  {
    links: ["Kariyer"]
  },
  {
    links: ["Reklam Tercihleri"]
  },
  {
    links: ["Mobil"]
  },
  {
    links: ["Yetenek Çözümleri"]
  },
  {
    links: ["Pazarlama Çözümleri"]
  },
  {
    links: ["Reklam"]
  },
  {
    links: ["Mobil"]
  },
  {
    links: ["Küçük İşletmeler"]
  }
];


export const FOOTER_LINKS_TW0 = [
  {
    label: "Sorunuz mu var?",
    text: "Yardım Merkezimizi ziyaret edin.",
    icon: "/icons8-briefcase-64.png",
  },
  {
    label: "Hesabınızı ve gizliliğinizi yönetin",
    text: "Ayarlarınıza gidin.",
    icon: "/icons8-briefcase-64.png",
  },
  {
    label: "Öneri şeffaflığı",
    text: "Önerilen İçerikler hakkında daha fazla bilgi edinin.",
    icon: "/icons8-briefcase-64.png",
  },
];

//insan ekleme kısmı için random datalar
export interface Student {
  name: string;
  surname: string;
  image: string;
  school: string;
}
const students: Student[] = [
  {
    name: "Ahmet",
    surname: "Yılmaz",
    image: "/icons8-round-64.png",
    school: "ABC İlköğretim Okulu",
  },
  {
    name: "Ayşe",
    surname: "Demir",
    image: "/icons8-round-64.png",
    school: "XYZ Ortaokulu",
  },
  {
    name: "Mehmet",
    surname: "Kaya",
    image: "/icons8-round-64.png",
    school: "DEF Lisesi",
  },
  {
    name: "Fatma",
    surname: "Şahin",
    image: "/icons8-round-64.png",
    school: "GHI Anadolu Lisesi",
  },
  {
    name: "Mustafa",
    surname: "Aksoy",
    image: "/icons8-round-64.png",
    school: "JKL Fen Lisesi",
  },
  {
    name: "Zeynep",
    surname: "Yıldız",
    image: "/icons8-round-64.png",
    school: "MNO Anadolu Lisesi",
  },
  {
    name: "Emre",
    surname: "Kocabaş",
    image: "/icons8-round-64.png",
    school: "PQR Ortaokulu",
  },
  {
    name: "Elif",
    surname: "Öztürk",
    image: "/icons8-round-64.png",
    school: "STU İlköğretim Okulu",
  },
  {
    name: "Serkan",
    surname: "Doğan",
    image: "/icons8-round-64.png",
    school: "VWX Fen Lisesi",
  },
  {
    name: "Ceren",
    surname: "Aktaş",
    image: "/icons8-round-64.png",
    school: "YZQ Anadolu Lisesi",
  },
];

export default students;
