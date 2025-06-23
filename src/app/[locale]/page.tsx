
import { getTranslations } from 'next-intl/server';
import HomeCarousel from '@/components/HomeCarousel/HomeCarousel';
import MapsCard from '@/components/MapsCard/MapsCard';
import aventuraPark from '@/../public/images/Attractions/AventuraPark.jpg';
import bisericaNeagra from '@/../public/images/Attractions/BisericaNeagră.jpg';
import bunloc from '@/../public/images/Attractions/Bunloc.jpg';
import centrulVechi from '@/../public/images/Attractions/CentrulVechi.jpg';
import kalinderu from '@/../public/images/Attractions/Kalinderu.webp';
import livadaPostei from '@/../public/images/Attractions/LivadaPoștei.jpg';
import poianaBrasov from '@/../public/images/Attractions/PoianaBrasov.jpg';
import tampa from '@/../public/images/Attractions/Tâmpa.jpg';

export default async function HomePage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'HomePage' });

    console.log('🔍 Debug - Server locale:', locale);
    console.log('🔍 Debug - Server translation:', t('title'));

    const locations = [
        {
            id: '1',
            title: 'Telescaun Bunloc',
            image: bunloc,
            mapsUrl: 'https://www.google.com/maps/dir/Telescaun+Bunlochttps://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/Telescaun+Bunloc,+Strada+Bolnoc,+S%C4%83cele/@45.6052905,25.660459,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b35d4335cdd99d:0xcf249ea47d48e5da!2m2!1d25.6609696!2d45.6035526!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D,+Str.+Bolnoc+185,+S%C4%83cele+505600/Str.+Bunloc+68,+S%C4%83cele+505600/@45.6052905,25.660459,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d4335cdd99d:0xcf249ea47d48e5da!2m2!1d25.6609696!2d45.6035526!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: '2 min în medie'
        },
        {
            id: '2',
            title: 'Aventura Park',
            image: aventuraPark,
            mapsUrl: 'https://www.google.com/maps/dir/Telescaun+Bunloc,+Str.+Bolnoc+185,+S%C4%83cele+505600/Adventure+Park+Brasov,+Strada+Paltinului,+Bra%C8%99ov/@45.6113383,25.6386593,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d4335cdd99d:0xcf249ea47d48e5da!2m2!1d25.6609696!2d45.6035526!1m5!1m1!1s0x40b35cd89169b7b5:0x32767f2cc427e4c5!2m2!1d25.6378369!2d45.6133029!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: '7 min în medie'
        },
        {
            id: '3',
            title: 'Piața Mică',
            image: centrulVechi,
            mapsUrl: 'https://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/Centrul+Vechi,+Bra%C8%99ov/@45.6293233,25.5855699,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b35b7c77279667:0x72930ebe9ffc953f!2m2!1d25.5882272!2d45.6418648!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: '20 min în medie'
        },
        {
            id: '4',
            title: 'Biserica Neagră',
            image: bisericaNeagra,
            mapsUrl: 'https://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/Biserica+Neagr%C4%83,+Strada+Gheorghe+Bari%C5%A3iu,+Bra%C8%99ov/@45.6293233,25.5840652,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b35b6542e21635:0x9fdd3236835f8e6e!2m2!1d25.585678!2d45.640395!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: '21 min în medie'
        },
        {
            id: '5',
            title: 'Poiana Brașov',
            image: poianaBrasov,
            mapsUrl: 'https://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/Poiana+Bra%C8%99ov,+Bra%C8%99ov/@45.6444501,25.5276998,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b3449e0439a589:0xf790f8ae21edd7c8!2m2!1d25.5513291!2d45.5955044!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: '35 min în medie'
        },
        {
            id: '6',
            title: 'Tâmpa',
            image: tampa,
            mapsUrl: 'https://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/T%C3%A2mpa,+Bra%C8%99ov/@45.6259226,25.587888,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b35b61e51e4dc7:0xa82ef9504a68e005!2m2!1d25.5928472!2d45.6340695!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: 'Apx 2 min în medie'
        },
        {
            id: '7',
            title: 'Pârtia Kalinderu',
            image: kalinderu,
            mapsUrl: 'https://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/Domeniul+schiabil+Kalinderu,+Strada+Matei+Basarab,+Bu%C8%99teni+105500/@45.5120417,25.4302614,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b315252fb261af:0x76a1bc10ea3a8d08!2m2!1d25.5248482!2d45.4198341!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: 'Apx 2 min în medie'
        },
        {
            id: '8',
            title: 'Parcul Livada Poștei',
            image: livadaPostei,
            mapsUrl: 'https://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/Parcul+Livada+Po%C8%99tei,+%C8%98irul+Livezii,+Bra%C8%99ov/@45.6293233,25.5840806,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b35b9232445777:0xdb04c9b23b47697d!2m2!1d25.5852324!2d45.6465407!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: 'Apx 2 min în medie'
        }
    ];

    return (
        <div>
            <HomeCarousel />
            <MapsCard locations={locations} />
        </div>
    );
}