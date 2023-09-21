import Container from "../Container";
import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach.",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills.",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property has a modern theme.",
  },
];

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => {
          return <CategoryBox key={item.label} {...item} />;
        })}
      </div>
    </Container>
  );
};
export default Categories;
