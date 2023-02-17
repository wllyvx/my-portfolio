import FeaturedItem from "./FeaturedItem";
import data from "@/data/data";

export default function Featured() {
  return (
    <section>
      <div>
        {[...data.works].reverse().map((item) => (
          <FeaturedItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
