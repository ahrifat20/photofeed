import PhotoDetails from "@/components/PhotoDetails";
import { getDictionary } from "../../dictonaries";

export default async function SinglePhotoPage({ params: { photoId, lang } }) {
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${photoId}`);
  const photo = await response.json();

  const dictonary = await getDictionary(lang);
  return (
    <>
      <PhotoDetails photo={photo} dictonary={dictonary} />
    </>
  );
}
