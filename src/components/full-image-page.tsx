import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full">
      <div className=" flex flex-shrink items-center justify-center">
        <img src={image.url} className=" flex-shrink object-contain" />
      </div>

      <div className="flex-shirnk-0 border-l flex w-48 flex-col">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
