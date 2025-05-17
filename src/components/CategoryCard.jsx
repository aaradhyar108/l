import { FaHatWizard, FaGlobe, FaAtom, FaLandmark, FaUser, FaDragon } from 'react-icons/fa';

const iconComponents = {
  fiction: FaHatWizard,
  'non-fiction': FaGlobe,
  science: FaAtom,
  history: FaLandmark,
  biography: FaUser,
  fantasy: FaDragon
};

const CategoryCard = ({ category }) => {
  const Icon = iconComponents[category.id];
  
  return (
    <div className="category-card" data-category={category.id}>
      <Icon />
      <h3>{category.name}</h3>
    </div>
  );
};

export default CategoryCard;