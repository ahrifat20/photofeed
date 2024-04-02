import { getDictionary } from "@/app/[lang]/dictonaries";
import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";

export default async function SinglePhotoPage({ params: { photoId, lang } }) {
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${photoId}`);
  const photo = await response.json();

  const dictonary = await getDictionary(lang);
  return (
    <Modal>
      <PhotoDetails photo={photo} dictonary={dictonary} />
    </Modal>
  );
}
