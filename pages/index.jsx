import { MongoClient } from "mongodb";
import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
const HomePage = ({ meetups }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      {loading && <h3 style={{ textAlign: "center" }}>Loading...</h3>}
      {!loading && <MeetupList meetups={meetups} />}
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupsData = await meetupsCollection.find().toArray();
  const meetups = meetupsData.reverse();
  client.close();
  const singleMeetupData = meetups.map((event) => ({
    id: event._id.toString(),
    title: event.title,
    image: event.image,
    address: event.address,
  }));
  return {
    props: {
      meetups: singleMeetupData,
    },
    revalidate: 1,
  };
};
