import image from './image.jpg';
import * as FoodSecurity from './FoodSecurity.json';
import { ReactComponent as EcoJustice } from './Eco-justice organization.svg';
import { ReactComponent as Government } from './Government office.svg';
import { ReactComponent as NGO } from './Green enterprise.svg';
import { ReactComponent as School } from './Green school.svg';
import { ReactComponent as Business } from './Local business.svg';

const EatLocal = {
  title: "Eat Local?",
  question: "Farm to Table to Fertilizer. Delicious at a short distance?",
  image: image,
  learn: {
    text: [
      "Lorem.",
    ],
    initiatives: [
      {
        title: "Our Food Future",
        image: undefined,
        link: "https://biomimicryfrontiers.com/our-food-future",
      },
    ],
  },
  act: {
    list: [
      "Lorem.",
    ],
    initiatives: [],
  },
  mapData: [
    {
      title: "Food Security",
      data: FoodSecurity,
      format: 'point',
      property: "Type",
      propertyMap: {
        "Business": {icon:(<Business />)},
        "NGO": {icon:(<NGO />)},
        "Student Led": {icon:(<School />)},
        "Grass Roots": {icon:(<EcoJustice />)},
        "Government": {icon:(<Government />)},
      }
    },
  ],
};
export default EatLocal;