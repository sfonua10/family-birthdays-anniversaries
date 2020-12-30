import Head from "next/head";
import Month from '../components/month';

export default function Home() {
  return (
    <div className="ml-2 bg-indigo-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Month month="JANUARY" celebrants={['7th - Rena Rose Lakai', '16th - Kalolaine Fonua Beebe (Kalo)', '20th - Alma Champion Fonua', '28th - Sioeli Kupu']} />
    <Month month="FEBRUARY" celebrants={['1st - Tirana Lakai (Nana)', '8th - Naomi Fonua', '21st - LeiSiu Lakai', '23rd Helaman Teiko Fonua Jr (Teiko)']} />
    <Month month="MARCH" celebrants={['13th - Elone John Charles Jr Fonua (Jr)', '25th - Malia Darlene Fonua', '30th - Elone Teiko Fonua']} />
    <Month month="APRIL" celebrants={['7th - Rena Rose Lakai', '16th - Kalolaine Fonua Beebe (Kalo)', '20th - Alma Champion Fonua', '28th - Sioeli Kupu']} />
    <Month month="MAY" celebrants={['7th - Rena Rose Lakai', '16th - Kalolaine Fonua Beebe (Kalo)', '20th - Alma Champion Fonua', '28th - Sioeli Kupu']} />
    <Month month="JUNE" celebrants={['7th - Rena Rose Lakai', '16th - Kalolaine Fonua Beebe (Kalo)', '20th - Alma Champion Fonua', '28th - Sioeli Kupu']} />
    <Month month="JULY" celebrants={['7th - Rena Rose Lakai', '16th - Kalolaine Fonua Beebe (Kalo)', '20th - Alma Champion Fonua', '28th - Sioeli Kupu']} />
    <Month month="AUGUST" celebrants={['7th - Rena Rose Lakai', '16th - Kalolaine Fonua Beebe (Kalo)', '20th - Alma Champion Fonua', '28th - Sioeli Kupu']} />
    <Month month="SEPTEMBER" celebrants={['7th - Rena Rose Lakai', '16th - Kalolaine Fonua Beebe (Kalo)', '20th - Alma Champion Fonua', '28th - Sioeli Kupu']} />
    <Month month="OCTOBER" celebrants={['7th - Rena Rose Lakai', '16th - Kalolaine Fonua Beebe (Kalo)', '20th - Alma Champion Fonua', '28th - Sioeli Kupu']} />
    <Month month="NOVEMBER" celebrants={['7th - Rena Rose Lakai', '16th - Kalolaine Fonua Beebe (Kalo)', '20th - Alma Champion Fonua', '28th - Sioeli Kupu']} />
    <Month month="DECEMBER" celebrants={['7th - Rena Rose Lakai', '16th - Kalolaine Fonua Beebe (Kalo)', '20th - Alma Champion Fonua', '28th - Sioeli Kupu']} />

    </div>
  );
}
