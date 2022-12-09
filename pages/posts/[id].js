import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { id, name } = router.query;

  return (
    <p>
      Post: {id} {name}
    </p>
  );
}
