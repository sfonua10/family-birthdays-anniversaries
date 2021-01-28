import Head from "next/head";
import Month from "../components/month";
import { getClient } from "../lib/sanity";
import { groq } from "next-sanity";
import filterBirthday from "../utils/filterBirthday";

export async function getStaticProps() {
  const query = groq`*[_type == "birthday"]{
    celebrant,
    birthdate,
    "imageUrl": image.asset->url
  }`;
  const celebrants = await getClient().fetch(query);
  const data = celebrants;
  return {
    props: {
      celebrantsObj: data 
    },
  };
}

export default function Home({ celebrantsObj = [] }) {
  // (async function saiaQuery() {
  //   await getClient().fetch(`*`).then((res) => console.log(res));
  // })();
  const monthData = [
    {
      month: "January",
      monthData: filterBirthday("January", celebrantsObj),
    },
    {
      month: "February",
      monthData: filterBirthday("February", celebrantsObj),
    },
    {
      month: "March",
      monthData: filterBirthday("March", celebrantsObj),
    },
    {
      month: "April",
      monthData: filterBirthday("April", celebrantsObj),
    },
    {
      month: "May",
      monthData: filterBirthday("May", celebrantsObj),
    },
    {
      month: "June",
      monthData: filterBirthday("June", celebrantsObj),
    },
    {
      month: "July",
      monthData: filterBirthday("July", celebrantsObj),
    },
    {
      month: "August",
      monthData: filterBirthday("August", celebrantsObj),
    },
    {
      month: "September",
      monthData: filterBirthday("September", celebrantsObj),
    },
    {
      month: "October",
      monthData: filterBirthday("October", celebrantsObj),
    },
    {
      month: "November",
      monthData: filterBirthday("November", celebrantsObj),
    },
    {
      month: "December",
      monthData: filterBirthday("December", celebrantsObj),
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

      {JSON.parse(JSON.stringify(monthData))?.map((data) => (
        <Month
          key={data?.month}
          month={data?.month}
          celebrantsObj={data?.monthData}
        />
      ))}
    </div>
  );
}
