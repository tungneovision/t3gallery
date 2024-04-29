import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const isAsNumber = Number(photoId);
  if (Number.isNaN(isAsNumber)) throw new Error("Invalid photo id");
  return (
    <Modal>
      <FullPageImageView id={isAsNumber} />
    </Modal>
  );
}
