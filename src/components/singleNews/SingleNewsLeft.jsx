import { formatTime } from "../../utils/formatTime";

export default function SingleNewsLeft({ data }) {
  const { title, content, description, author, publishedAt, url, urlToImage } =
    data;
  const time = formatTime(publishedAt);
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-4">
        <a href={url}>
          <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">{title}</h3>
        </a>
        <p className="text-base text-[#5C5955]">
          {description ? description : content}
        </p>
        {time && <p className="mt-5 text-base text-[#5C5955]">{time}</p>}
      </div>
      <div className="col-span-12 lg:col-span-8">
        <img className="w-full" src={urlToImage} alt="" />
        {author && urlToImage && (
          <p className="mt-5 text-base text-[#5C5955]">
            Illustration: Karolis {author}
          </p>
        )}
      </div>
    </div>
  );
}
