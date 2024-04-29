import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const isAsNumber = Number(photoId);
  const image = await getImage(isAsNumber);
  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}