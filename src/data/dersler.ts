export interface Ders {
    baslik: string;
    slug: string;
    aciklama: string;
    link:string;
  }
  
  export const dersler: Ders[] = [
    { 
      baslik: "TypeScript Nedir?", 
      slug: "typescript-nedir", 
      link: "/dersler/typescript-nedir", 
      aciklama: "TypeScript'in ne olduğunu, nasıl çalıştığını ve JavaScript ile farklarını keşfedin."
    },
    { 
      baslik: "TypeScript Kurulumu", 
      slug: "typescript-kurulumu", 
      link: "/dersler/typescript-kurulumu", 
      aciklama: "TypeScript'i bilgisayarınıza kurma ve ilk proje setup'ınızı yapma adımlarını öğrenin."
    },
    { 
      baslik: "İlk TypeScript Kodunuzu Yazın", 
      slug: "ilk-typescript-kodunuzu-yazin",     
      link: "/dersler/ilk-typescript-kodunuzu-yazin",
      aciklama: "TypeScript ile ilk programınızı yazın ve temel sözdizimini keşfedin."
    },
    { 
      baslik: "TypeScript Veri Türleri", 
      slug: "typescript-veri-turleri", 
      link: "/dersler/typescript-veri-turleri", 
      aciklama: "TypeScript'in güçlü tip sistemiyle ilgili temel veri türlerini öğrenin."
    },
    { 
      baslik: "TypeScript Union ve Intersection Types", 
      slug: "typescript-union-intersection", 
      link: "/dersler/typescript-union-intersection", 
      aciklama: "Birleşim ve kesişim türleri ile veri türlerinizi nasıl birleştirebileceğinizi öğrenin."
    },
  ];
  