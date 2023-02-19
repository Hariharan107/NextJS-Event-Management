import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useState,useEffect } from "react";
const index = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const router = useRouter();
  const addMeetupHandler = async (enteredData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredData),
    });
    const data = await response.json();
    console.log(data);
    router.replace("/");
  };
  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your meetups here"
        ></meta>
      </Head>
      {loading && <h3 style={{ textAlign: "center" }}>Loading...</h3>}
      {!loading &&<NewMeetupForm onAddMeetup={addMeetupHandler} />}
    </>
  );
};

export default index;
