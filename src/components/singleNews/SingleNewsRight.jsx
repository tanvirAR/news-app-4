import { formatTime } from "../../utils/formatTime";

export default function SingleNewsRight({ data }) {
     const {
       title,
       content,
       description,
       publishedAt,
       url,
       urlToImage,
     } = data;

      const time = formatTime(publishedAt);

  return (
    <div className="col-span-12 mb-6 md:col-span-8">
      <img className="w-full" src={urlToImage} alt="" />
      <div className="col-span-12 mt-6 md:col-span-4">
        <a href={url}>
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">{title}</h3>
        </a>
        <p className="text-base text-[#292219]">
          {description ? description : content}
        </p>
        <p className="mt-5 text-base text-[#94908C]">{time}</p>
      </div>
    </div>
  );
}
