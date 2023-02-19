import FeaturedItem from "./FeaturedItem";
import data from "@/data/data";
import { GraphQLClient, gql } from "graphql-request";

const hygraph = new GraphQLClient(
  "https://api-ap-southeast-2.hygraph.com/v2/cldwhj75u2fmv01rr5cw5gdw4/master"
);

const QUERY = gql`
  query Works {
    works {
      id
      title
      slug
      coverPhoto {
        id
        url
      }
    }
  }
`;

export default async function Featured() {

  const { works } = await hygraph.request(QUERY)

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
