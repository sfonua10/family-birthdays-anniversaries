import Head from "next/head";
import Month from "../components/month";
import { getClient } from "../lib/sanity";
import { groq } from 'next-sanity';
import Image from 'next/image';

export async function getStaticProps() {
  const query = groq`*[_type == "birthday"]{
    celebrant,
    birthdate,
    "imageUrl": image.asset->url
  }`
  const celebrants = await getClient().fetch(query);
  console.log('celebrants', celebrants)
  return {
    props: {
      celebrants
    }
  }
}


export default function Home({celebrants}) {
  const jan = celebrants.filter(x => '01' === x.birthdate.split('-')[1]);
  return (
    <div className="ml-2 bg-indigo-100">
      <Head>
        <title>Fonua Family Birthdays and Anniversaries</title>
        <link rel="icon" href="/family-tree.png" />
      </Head>
      <Month
        month="JANUARY"
        celebrants={jan}
      />
      {/* <Month
        month="FEBRUARY"
        celebrants={[
          "1st - Tirana Lakai (Nana)",
          "8th - Naomi Fonua",
          "21st - LeiSiu Lakai",
          "23rd - Helaman Teiko Fonua Jr (Teiko)",
        ]}
      />
      <Month
        month="MARCH"
        celebrants={[
          "13th - Elone John Charles Jr Fonua (Jr)",
          "25th - Malia Darlene Fonua",
          "30th - Elone Teiko Fonua",
        ]}
      />
      <Month
        month="APRIL"
        celebrants={[
          "4th - Evaloni Annie Fonua (Eni)",
          "18th – Kalolaine Fonua (Kalo)",
          "21st – Fisimeimua Fonua (Fisi)",
          "22nd – Lesieli Kalolaine Fonua (Ellie)",
        ]}
      />
      <Month month="MAY" celebrants={["4th - Lolohea Latu Fonua (Mom)"]} />
      <Month
        month="JUNE"
        celebrants={[
          "5th - Gabrielle Renae Fonua (Gaby)",
          "10th - Helamen Fonua III (H3)",
          "17th - Erina Sela Kupu",
          "21st - Toka Lakai",
          "28th - Celia Liahona Fonua",
        ]}
      />
      <Month
        month="JULY"
        celebrants={[
          "1st - Hong Fonua",
          "6th - Imeila and Ana's Anniversary",
          "8th - Ana Malia Fonua",
        ]}
      />
      <Month
        month="AUGUST"
        celebrants={[
          "2nd - Mormon Lakai",
          "2nd - Teiko & Ana's Anniversary",
          "6th - BRett & Kalo's Anniversary",
          "26th - Alama Lee Fonua",
        ]}
      />
      <Month
        month="SEPTEMBER"
        celebrants={[
          "1st - Siosaia Samuela Fonua (Saia)",
          "3rd - Lolohea Emilie Fonua (Lolo)",
          "9th - Sioeli & Erina's Anniversary",
          "20th - Elisapesi Mele Kupu (Mele)",
          "23rd - Viola Ava Fonua",
          "26th - Hilamani Teiko (Dad-RIP)",
          "26th - Alma & Lisa's Anniversary",
          "27th - Imeila Omea Fonua",
          "27th - Ammaron Fonua (Ammo)",
          "29th - Brett Beebe",
        ]}
      />
      <Month
        month="OCTOBER"
        celebrants={[
          "12th – Teanikumi David Beebe (Kumi)",
          "12th - Lisa Mariko Fonua",
          "19th - Toka & Gina's Anniversary",
          "20th - Gina Rita Lakai",
          "27th - Via Linh Fonua",
          "29th - Ana Terewai Moleni-Fonua"
        ]}
      />
      <Month
        month="NOVEMBER"
        celebrants={[
          "22nd - David Castro Fonua (DC)"
        ]}
      />
      <Month
        month="DECEMBER"
        celebrants={[
          "20th - Isaac Levi Fonua",
          "23rd - Joseph Fonua",
        ]}
      /> */}
    </div>
  );
}
