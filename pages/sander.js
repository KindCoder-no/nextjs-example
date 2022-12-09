import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Sander() {
  const router = useRouter();
  const { name } = router.query;
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.ir/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setPeople(json));
  }, []);

  return (
    <>
      <h1>{name}</h1>
      {people.map((data, index) => {
        return <Card key={index} user={data} />;
      })}
    </>
  );
}
