"use client"
import HomeCarousel from '@/components/HomeCarousel/HomeCarousel';
import MapsCard from '@/components/MapsCard/MapsCard';
import aventuraPark from '@/../public/images/Attractions/AventuraPark.png';
import bisericaNeagra from '@/../public/images/Attractions/BisericaNeagră.jpg';
import bunloc from '@/../public/images/Attractions/Bunloc.jpg';
import centrulVechi from '@/../public/images/Attractions/CentrulVechi.jpg';
import logoZoo2 from '@/../public/images/Attractions/logoZoo2.png'
import poianaBrasov from '@/../public/images/Attractions/PoianaBrasov.jpg';
import tampa from '@/../public/images/Attractions/Tâmpa.jpg';
import stradaSforii from '@/../public/images/Attractions/stradaSforii.jpg'
import laculNoua from '@/../public/images/Attractions/laculNoua.jpg'
import { useTranslations } from 'next-intl';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import HomeHeroSection from '@/components/HomeHeroSection/HomeHeroSection';


type HomePageProps = {
    locale: string;
}

export default function HomePage({ locale }: HomePageProps) {
    const t = useTranslations('attractions');
    const tb = useTranslations('banner');

    const locations = [
        {
            id: '1',
            title: 'Telescaun Bunloc',
            image: bunloc,
            mapsUrl: 'https://www.google.com/maps/dir/Telescaun+Bunlochttps://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/Telescaun+Bunloc,+Strada+Bolnoc,+S%C4%83cele/@45.6052905,25.660459,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b35d4335cdd99d:0xcf249ea47d48e5da!2m2!1d25.6609696!2d45.6035526!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D,+Str.+Bolnoc+185,+S%C4%83cele+505600/Str.+Bunloc+68,+S%C4%83cele+505600/@45.6052905,25.660459,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d4335cdd99d:0xcf249ea47d48e5da!2m2!1d25.6609696!2d45.6035526!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: `2 min ${t("average")}`
        },
        {
            id: '2',
            title: 'Aventura Park',
            image: aventuraPark,
            mapsUrl: 'https://www.google.com/maps/dir/Telescaun+Bunloc,+Str.+Bolnoc+185,+S%C4%83cele+505600/Adventure+Park+Brasov,+Strada+Paltinului,+Bra%C8%99ov/@45.6113383,25.6386593,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d4335cdd99d:0xcf249ea47d48e5da!2m2!1d25.6609696!2d45.6035526!1m5!1m1!1s0x40b35cd89169b7b5:0x32767f2cc427e4c5!2m2!1d25.6378369!2d45.6133029!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: `7 min ${t("average")}`
        },
        {
            id: '3',
            title: 'Piața Sfatului',
            image: centrulVechi,
            mapsUrl: 'https://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/Centrul+Vechi,+Bra%C8%99ov/@45.6293233,25.5855699,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b35b7c77279667:0x72930ebe9ffc953f!2m2!1d25.5882272!2d45.6418648!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: `16 min ${t("average")}`
        },
        {
            id: '4',
            title: 'Biserica Neagră',
            image: bisericaNeagra,
            mapsUrl: 'https://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/Biserica+Neagr%C4%83,+Strada+Gheorghe+Bari%C5%A3iu,+Bra%C8%99ov/@45.6293233,25.5840652,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b35b6542e21635:0x9fdd3236835f8e6e!2m2!1d25.585678!2d45.640395!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: `21 min ${t("average")}`
        },
        {
            id: '5',
            title: 'Poiana Brașov',
            image: poianaBrasov,
            mapsUrl: 'https://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/Poiana+Bra%C8%99ov,+Bra%C8%99ov/@45.6444501,25.5276998,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b3449e0439a589:0xf790f8ae21edd7c8!2m2!1d25.5513291!2d45.5955044!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: `35 min ${t("average")}`
        },
        {
            id: '6',
            title: 'Tâmpa',
            image: tampa,
            mapsUrl: 'https://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/T%C3%A2mpa,+Bra%C8%99ov/@45.6259226,25.587888,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b35b61e51e4dc7:0xa82ef9504a68e005!2m2!1d25.5928472!2d45.6340695!3e0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
            description: `13 min ${t("average")}`
        },
        {
            id: '7',
            title: 'Strada Sforii',
            image: stradaSforii,
            mapsUrl: 'https://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/Strada+Sforii,+Bra%C8%99ov/@45.6293233,25.5839552,9744m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b35b64dd69f8d3:0x4fb83268ed4c9ed4!2m2!1d25.5881771!2d45.6399076!3e0?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D',
            description: `16 min ${t("average")}`
        },
        {
            id: '8',
            title: 'Zoo Brașov',
            image: logoZoo2,
            mapsUrl: 'https://www.google.com/maps/dir/Str.+Bunloc+82,+S%C4%83cele+505600/Zoo+Bra%C8%99ov,+Strada+Brazilor+1,+Bra%C8%99ov+500313/@45.6117584,25.6406613,2437m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x40b35d40f2043915:0x24791ac6ffa4e7e6!2m2!1d25.6672966!2d45.6083929!1m5!1m1!1s0x40b35cd93c2581c3:0xac80b8e1fb4fd4bd!2m2!1d25.633153!2d45.613929!3e0?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D',
            description: `7 min ${t("average")}`
        },
        {
            id: '9',
            title: 'Lacul Noua',
            image: laculNoua,
            mapsUrl: 'https://www.google.com/maps/dir/Str.+Bunloc+68,+S%C4%83cele+505600/Lacul+Noua,+Bra%C8%99ov/@45.6117584,25.6433583,2437m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x40b35d474c113deb:0x471cb2f7935bd810!2m2!1d25.6652201!2d45.6070285!1m5!1m1!1s0x40b35d20b3e2db8f:0x76da0f500eaa4312!2m2!1d25.6393695!2d45.6139734!3e0?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D',
            description: `6 min ${t("average")}`
        },
    ];

    return (
        <div>
            <HomeCarousel />
            <MapsCard locations={locations} />
            <ContactBanner
                title={tb("orMaybe")}
                message={tb("bookAFlight")}
                buttonText={tb("callNow")}
                imageSrc="/images/banner.jpg"
                imageHeight={400}
            />
            <HomeHeroSection />
        </div>
    );
}