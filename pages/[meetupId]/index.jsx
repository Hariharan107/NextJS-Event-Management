import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import React from "react";
import { useState,useEffect } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";
const index = ({ meetupData: { image, title, address, description } }) => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false)
  },[])
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {loading && <h3 style={{ textAlign: "center" }}>Loading...</h3>}
      {!loading && <MeetupDetails
        image={image}
        title={title}
        address={address}
        description={description}
      />}
    </>
  );
};

export default index;

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupsData = await meetupsCollection.find({}, { _id: 1 }).toArray();
  const singleMeetupData = meetupsData.map((meetup) => ({
    params: {
      meetupId: meetup._id.toString(),
    },
  }));

  client.close();
  return {
    paths: singleMeetupData,
    fallback:'blocking' ,
  };
};
export const getStaticProps = async (context) => {
  const { meetupId } = context.params;
  const client = await MongoClient.connect(process.env.MONGODB_URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupData = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: meetupData._id.toString(),
        title: meetupData.title,
        image: meetupData.image,
        address: meetupData.address,
        description: meetupData.description,
      },
    },
  };
};
