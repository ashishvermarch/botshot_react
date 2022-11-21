import Heading from "../../common/Heading/Heading";
import ImageCard from "../../common/ImageCard/ImageCard";

const Integration = () => {
  const imageData = [
    {
      imgSrc:
        "https://d28fok4odypdh0.cloudfront.net/cl8a27imf002x0k33gwtl27vd.webp",
    },
    {
      imgSrc:
        "https://d28fok4odypdh0.cloudfront.net/cl8a28tj8002z0k33bswxgu9r.webp",
    },
    {
      imgSrc:
        "https://d28fok4odypdh0.cloudfront.net/cl8a2b5vu00310k336gb833dk.webp",
    },
    {
      imgSrc:
        "https://d28fok4odypdh0.cloudfront.net/cl8a2cukk00330k33htd688s7.webp",
    },
    {
      imgSrc:
        "https://d28fok4odypdh0.cloudfront.net/cl8a2f4dp00350k33088o3u4q.webp",
    },
  ];

  return (
    <section id="section-4">
      <div id="firstHalf-4">
        <Heading title="Integrations" />
        <div class="card-container-4 threeCards">
          {imageData.map((ele, idx) => {
            return idx < 3 ? <ImageCard imgSrc={ele.imgSrc} /> : "";
          })}
        </div>
      </div>
      <div id="section4-carousal">
        <div class="card-container-4 card-container-4lower">
          {imageData.map((ele) => {
            return <ImageCard imgSrc={ele.imgSrc} boxShdw={true} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Integration;
