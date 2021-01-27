import Head from "next/head";
import Month from "../components/month";
import { getClient } from "../lib/sanity";
import { groq } from "next-sanity";
import filterBirthday from "../utils/filterBirthday";

export async function getStaticProps() {
  const query = groq`*[_type == "birthday"]{
    celebrant,
    birthdate,
    "imageUrl": image.asset->url,
    image
  }`;
  const celebrants = await getClient().fetch(query);
  console.log('celebrants', celebrants)
  return {
    props: {
      celebrants: JSON.parse(JSON.stringify(celebrants)),
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
        <title>Family Birthdays</title>
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

      {monthData?.map((data) => (
        <Month
          key={data.month}
          month={data.month}
          celebrants={data.monthData}
        />
      ))}
    </div>
  );
}
