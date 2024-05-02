
import './App.css';
import Profile from './components/Profile.jsx';

import { getImageUrl } from './utils.js';

export default function Gallery() {

  let allProfiles = [
    {
      name: "Maria Skłodowska-Curie",
      image: getImageUrl('szV5sdG'),
      proffession: "physicist and chemist",
      awards: [
        'Nobel Prize in Physics',
        'Nobel Prize in Chemistry',
        'Davy Medal',
        'Matteucci Medal'
      ],
      discovered: "a method for measuring carbon dioxide in seawater"
    },
    {
      name: "Katsuko Saruhashi",
      image: getImageUrl('YfeOqp2'),
      proffession: "geochemist",
      awards: ['Miyake Prize for geochemistry',' Tanaka Prize'],
      discovered: "a method for measuring carbon dioxide in seawater"
    }
  ]
  return (
    <div>
     
     <Profile profiles={allProfiles}/>
      
    </div>
  );
}

