import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const isAsNumber = Number(photoId);
  return <FullPageImageView id={isAsNumber} />;
}
