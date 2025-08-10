export interface MetaData {
    title: string;
    description: string;
    keywords: string;
    openGraph: {
        title: string;
        description: string;
        url: string;
        images: Array<{
            url: string;
            width: number;
            height: number;
            alt: string;
        }>;
    };
    twitter: {
        card: string;
        title: string;
        description: string;
        images: string[];
    };
}

const baseUrl = 'https://cazare-brasov-bunloc.ro';
const defaultImage = `${baseUrl}/images/og-image.jpg`;

export const seoConfig = {
    ro: {
        home: {
            title: 'Cazare Brașov Bunloc - Pensiune în Săcele, lângă Brașov',
            description: 'Cazare confortabilă în Bunloc, Săcele - la doar 16 minute de centrul Brașovului. Camere moderne, facilități complete, vedere la munte. Rezervă acum!',
            keywords: 'cazare brasov, pensiune sacele, cazare bunloc, hotel brasov, camera brasov, rezervare cazare, pensiune romania, cazare munte',
            openGraph: {
                title: 'Cazare Brașov Bunloc - Pensiune în Săcele, lângă Brașov',
                description: 'Cazare confortabilă în Bunloc, Săcele - la doar 16 minute de centrul Brașovului. Camere moderne, facilități complete, vedere la munte.',
                url: baseUrl,
                images: [{
                    url: defaultImage,
                    width: 1200,
                    height: 630,
                    alt: 'Pensiune Bunloc Brașov - exterior și camere'
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Cazare Brașov Bunloc - Pensiune în Săcele',
                description: 'Cazare confortabilă în Bunloc, Săcele - la doar 16 minute de centrul Brașovului.',
                images: [defaultImage]
            }
        },
        rooms: {
            title: 'Camere Confortabile - Cazare Brașov Bunloc | Pensiune Săcele',
            description: 'Camere moderne și confortabile în Bunloc, Săcele: Twin Standard, Triple, Matrimonială și Family. WiFi gratuit, balcon privat, vedere la munte.',
            keywords: 'camere brasov, camera twin brasov, camera matrimoniala brasov, camera family brasov, cazare 4 persoane brasov, wifi gratuit',
            openGraph: {
                title: 'Camere Confortabile - Cazare Brașov Bunloc',
                description: 'Camere moderne și confortabile: Twin Standard, Triple, Matrimonială și Family. WiFi gratuit, balcon privat, vedere la munte.',
                url: `${baseUrl}/ro/rooms`,
                images: [{
                    url: `${baseUrl}/images/rooms/og-rooms.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Camere confortabile pensiune Bunloc Brașov'
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Camere Confortabile - Pensiune Bunloc Brașov',
                description: 'Camere moderne: Twin, Triple, Matrimonială și Family. WiFi gratuit, vedere la munte.',
                images: [`${baseUrl}/images/rooms/og-rooms.jpg`]
            }
        },
        facilities: {
            title: 'Facilități Complete - Grătar, Bucătărie, Conferință | Pensiune Brașov',
            description: 'Facilități complete pentru oaspeți: zonă grătar, bucătărie echipată, sală conferință, foc de tabără, masă tenis. Perfect pentru grupuri și familii.',
            keywords: 'gratat brasov, bucatarie pensiune, sala conferinta brasov, foc de tabara, masa tenis, facilitati pensiune',
            openGraph: {
                title: 'Facilități Complete - Pensiune Bunloc Brașov',
                description: 'Facilități complete: zonă grătar, bucătărie echipată, sală conferință, foc de tabără, masă tenis. Perfect pentru grupuri și familii.',
                url: `${baseUrl}/ro/facilities`,
                images: [{
                    url: `${baseUrl}/images/facilities/og-facilities.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Facilități pensiune Bunloc - grătar și bucătărie'
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Facilități Complete - Pensiune Bunloc Brașov',
                description: 'Zonă grătar, bucătărie echipată, sală conferință, foc de tabară, masă tenis.',
                images: [`${baseUrl}/images/facilities/og-facilities.jpg`]
            }
        },
        blog: {
            title: 'Blog Turistic Brașov - Ghid Atracții și Activități | Pensiune Bunloc',
            description: 'Descoperă atracțiile din Brașov și împrejurimi: Centrul Vechi, Biserica Neagră, Tâmpa, Poiana Brașov. Ghid complet pentru turiști.',
            keywords: 'atractii brasov, centrul vechi brasov, biserica neagra, tampa brasov, poiana brasov, activitati brasov, ghid turistic',
            openGraph: {
                title: 'Blog Turistic Brașov - Ghid Atracții și Activități',
                description: 'Descoperă atracțiile din Brașov: Centrul Vechi, Biserica Neagră, Tâmpa, Poiana Brașov. Ghid complet pentru turiști.',
                url: `${baseUrl}/ro/blog`,
                images: [{
                    url: `${baseUrl}/images/blog/og-blog.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Atracții turistice Brașov - ghid complet'
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Blog Turistic Brașov - Ghid Atracții',
                description: 'Descoperă atracțiile din Brașov: Centrul Vechi, Biserica Neagră, Tâmpa, Poiana Brașov.',
                images: [`${baseUrl}/images/blog/og-blog.jpg`]
            }
        }
    },
    fr: {
        home: {
            title: 'Hébergement Brasov Bunloc - Pension à Sacele, près de Brasov',
            description: 'Hébergement confortable à Bunloc, Sacele - à seulement 16 minutes du centre de Brasov. Chambres modernes, installations complètes, vue montagne. Réservez maintenant!',
            keywords: 'hébergement brasov, pension sacele, hotel brasov, chambre brasov, réservation hébergement, pension roumanie, hébergement montagne',
            openGraph: {
                title: 'Hébergement Brasov Bunloc - Pension à Sacele, près de Brasov',
                description: 'Hébergement confortable à Bunloc, Sacele - à seulement 16 minutes du centre de Brasov. Chambres modernes, installations complètes, vue montagne.',
                url: `${baseUrl}/fr`,
                images: [{
                    url: defaultImage,
                    width: 1200,
                    height: 630,
                    alt: 'Pension Bunloc Brasov - extérieur et chambres'
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Hébergement Brasov Bunloc - Pension Sacele',
                description: 'Hébergement confortable à Bunloc, Sacele - à seulement 16 minutes du centre de Brasov.',
                images: [defaultImage]
            }
        },
        rooms: {
            title: 'Chambres Confortables - Hébergement Brasov Bunloc | Pension Sacele',
            description: 'Chambres modernes et confortables à Bunloc, Sacele: Twin Standard, Triple, Matrimoniale et Familiale. WiFi gratuit, balcon privé, vue montagne.',
            keywords: 'chambres brasov, chambre twin brasov, chambre double brasov, chambre familiale brasov, hébergement 4 personnes brasov, wifi gratuit',
            openGraph: {
                title: 'Chambres Confortables - Hébergement Brasov Bunloc',
                description: 'Chambres modernes et confortables: Twin Standard, Triple, Matrimoniale et Familiale. WiFi gratuit, balcon privé, vue montagne.',
                url: `${baseUrl}/fr/rooms`,
                images: [{
                    url: `${baseUrl}/images/rooms/og-rooms.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Chambres confortables pension Bunloc Brasov'
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Chambres Confortables - Pension Bunloc Brasov',
                description: 'Chambres modernes: Twin, Triple, Matrimoniale et Familiale. WiFi gratuit, vue montagne.',
                images: [`${baseUrl}/images/rooms/og-rooms.jpg`]
            }
        },
        facilities: {
            title: 'Installations Complètes - BBQ, Cuisine, Conférence | Pension Brasov',
            description: 'Installations complètes pour les clients: espace barbecue, cuisine équipée, salle de conférence, feu de camp, table de ping-pong. Parfait pour groupes et familles.',
            keywords: 'barbecue brasov, cuisine pension, salle conférence brasov, feu de camp, table ping pong, installations pension',
            openGraph: {
                title: 'Installations Complètes - Pension Bunloc Brasov',
                description: 'Installations complètes: espace barbecue, cuisine équipée, salle de conférence, feu de camp, table de ping-pong. Parfait pour groupes et familles.',
                url: `${baseUrl}/fr/facilities`,
                images: [{
                    url: `${baseUrl}/images/facilities/og-facilities.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Installations pension Bunloc - barbecue et cuisine'
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Installations Complètes - Pension Bunloc Brasov',
                description: 'Espace barbecue, cuisine équipée, salle de conférence, feu de camp, table de ping-pong.',
                images: [`${baseUrl}/images/facilities/og-facilities.jpg`]
            }
        },
        blog: {
            title: 'Blog Touristique Brasov - Guide Attractions & Activités | Pension Bunloc',
            description: 'Découvrez les attractions de Brasov et environs: Vieille Ville, Église Noire, Tâmpa, Poiana Brasov. Guide complet pour touristes.',
            keywords: 'attractions brasov, vieille ville brasov, église noire, tampa brasov, poiana brasov, activités brasov, guide touristique',
            openGraph: {
                title: 'Blog Touristique Brasov - Guide Attractions & Activités',
                description: 'Découvrez les attractions de Brasov: Vieille Ville, Église Noire, Tâmpa, Poiana Brasov. Guide complet pour touristes.',
                url: `${baseUrl}/fr/blog`,
                images: [{
                    url: `${baseUrl}/images/blog/og-blog.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Attractions touristiques Brasov - guide complet'
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Blog Touristique Brasov - Guide Attractions',
                description: 'Découvrez les attractions de Brasov: Vieille Ville, Église Noire, Tâmpa, Poiana Brasov.',
                images: [`${baseUrl}/images/blog/og-blog.jpg`]
            }
        }
    },
    en: {
        home: {
            title: 'Accommodation Brasov Bunloc - Guesthouse in Sacele, near Brasov',
            description: 'Comfortable accommodation in Bunloc, Sacele - just 16 minutes from Brasov city center. Modern rooms, complete facilities, mountain view. Book now!',
            keywords: 'accommodation brasov, guesthouse sacele, hotel brasov, room brasov, booking accommodation, romania guesthouse, mountain accommodation',
            openGraph: {
                title: 'Accommodation Brasov Bunloc - Guesthouse in Sacele, near Brasov',
                description: 'Comfortable accommodation in Bunloc, Sacele - just 16 minutes from Brasov city center. Modern rooms, complete facilities, mountain view.',
                url: `${baseUrl}/en`,
                images: [{
                    url: defaultImage,
                    width: 1200,
                    height: 630,
                    alt: 'Bunloc Brasov Guesthouse - exterior and rooms'
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Accommodation Brasov Bunloc - Guesthouse Sacele',
                description: 'Comfortable accommodation in Bunloc, Sacele - just 16 minutes from Brasov city center.',
                images: [defaultImage]
            }
        },
        rooms: {
            title: 'Comfortable Rooms - Brasov Bunloc Accommodation | Sacele Guesthouse',
            description: 'Modern and comfortable rooms in Bunloc, Sacele: Twin Standard, Triple, Double and Family rooms. Free WiFi, private balcony, mountain view.',
            keywords: 'rooms brasov, twin room brasov, double room brasov, family room brasov, 4 person accommodation brasov, free wifi',
            openGraph: {
                title: 'Comfortable Rooms - Brasov Bunloc Accommodation',
                description: 'Modern and comfortable rooms: Twin Standard, Triple, Double and Family rooms. Free WiFi, private balcony, mountain view.',
                url: `${baseUrl}/en/rooms`,
                images: [{
                    url: `${baseUrl}/images/rooms/og-rooms.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Comfortable rooms Bunloc Brasov guesthouse'
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Comfortable Rooms - Bunloc Brasov Guesthouse',
                description: 'Modern rooms: Twin, Triple, Double and Family. Free WiFi, mountain view.',
                images: [`${baseUrl}/images/rooms/og-rooms.jpg`]
            }
        },
        facilities: {
            title: 'Complete Facilities - BBQ, Kitchen, Conference | Brasov Guesthouse',
            description: 'Complete guest facilities: BBQ area, equipped kitchen, conference room, bonfire, ping pong table. Perfect for groups and families.',
            keywords: 'bbq brasov, guesthouse kitchen, conference room brasov, bonfire, ping pong table, guesthouse facilities',
            openGraph: {
                title: 'Complete Facilities - Bunloc Brasov Guesthouse',
                description: 'Complete facilities: BBQ area, equipped kitchen, conference room, bonfire, ping pong table. Perfect for groups and families.',
                url: `${baseUrl}/en/facilities`,
                images: [{
                    url: `${baseUrl}/images/facilities/og-facilities.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Bunloc guesthouse facilities - BBQ and kitchen'
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Complete Facilities - Bunloc Brasov Guesthouse',
                description: 'BBQ area, equipped kitchen, conference room, bonfire, ping pong table.',
                images: [`${baseUrl}/images/facilities/og-facilities.jpg`]
            }
        },
        blog: {
            title: 'Brasov Tourism Blog - Attractions & Activities Guide | Bunloc Guesthouse',
            description: 'Discover Brasov attractions: Old Town, Black Church, Tampa Hill, Poiana Brasov. Complete tourist guide and local recommendations.',
            keywords: 'brasov attractions, old town brasov, black church, tampa hill, poiana brasov, brasov activities, tourist guide',
            openGraph: {
                title: 'Brasov Tourism Blog - Attractions & Activities Guide',
                description: 'Discover Brasov attractions: Old Town, Black Church, Tampa Hill, Poiana Brasov. Complete tourist guide and local recommendations.',
                url: `${baseUrl}/en/blog`,
                images: [{
                    url: `${baseUrl}/images/blog/og-blog.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Brasov tourist attractions - complete guide'
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Brasov Tourism Blog - Attractions Guide',
                description: 'Discover Brasov attractions: Old Town, Black Church, Tampa Hill, Poiana Brasov.',
                images: [`${baseUrl}/images/blog/og-blog.jpg`]
            }
        }
    }
};


export function getMetaData(page: string, locale: string = 'ro'): MetaData {
    const config = seoConfig[locale as keyof typeof seoConfig] || seoConfig.ro;
    return config[page as keyof typeof config] || config.home;
}
