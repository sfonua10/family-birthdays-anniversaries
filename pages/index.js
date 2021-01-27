import Head from "next/head";
import Month from "../components/month";
import { getClient } from "../lib/sanity";
import { groq } from "next-sanity";
import Image from "next/image";
import { calcAge } from "../utils/calculateAge";
import filterBirthday from "../utils/filterBirthday";

export async function getStaticProps() {
  const query = groq`*[_type == "birthday"]{
    celebrant,
    birthdate,
    "imageUrl": image.asset->url,
    image
  }`;
  const celebrants = await getClient().fetch(query);
  return {
    props: {
      celebrants,
    },
  };
}

export default function Home({ celebrants }) {
  const monthData = [
    {
      month: "January",
      monthData: filterBirthday("January", celebrants),
    },
    {
      month: "February",
      monthData: filterBirthday("February", celebrants),
    },
    {
      month: "March",
      monthData: filterBirthday("March", celebrants),
    },
    {
      month: "April",
      monthData: filterBirthday("April", celebrants),
    },
    {
      month: "May",
      monthData: filterBirthday("May", celebrants),
    },
    {
      month: "June",
      monthData: filterBirthday("June", celebrants),
    },
    {
      month: "July",
      monthData: filterBirthday("July", celebrants),
    },
    {
      month: "August",
      monthData: filterBirthday("August", celebrants),
    },
    {
      month: "September",
      monthData: filterBirthday("September", celebrants),
    },
    {
      month: "October",
      monthData: filterBirthday("October", celebrants),
    },
    {
      month: "November",
      monthData: filterBirthday("November", celebrants),
    },
    {
      month: "December",
      monthData: filterBirthday("December", celebrants),
    },
  ];

  return (
    <div>
      <Head>
        <title>Fonua Family Birthdays and Anniversaries</title>
        <link rel="icon" href="/family-tree.png" />
        <meta property="og:title" content="European Travel Destinations" />
        <meta
          property="og:description"
          content="Family Birthdays"
        />
        <meta
          property="og:image"
          content="/bday-pic.jpg"
        />
      </Head>

      {monthData.map((data) => (
        <Month
          key={data.month}
          month={data.month}
          celebrants={data.monthData}
        />
      ))}

      {/* 
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
