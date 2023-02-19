import FeaturedItem from "./FeaturedItem";
import data from "@/data/data";

export default  function Featured() {

  return (
    <section className="rounded-t-3xl md:rounded-t-[5rem] overflow-hidden">
      <div>
        {[...data.works].reverse().map((item) => (
          <FeaturedItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
