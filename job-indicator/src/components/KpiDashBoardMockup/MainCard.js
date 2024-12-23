import React from 'react';
import './MainCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const MainCard = () => {
  const mainCardData = [
    {
      title: "PC2 Line 01",
      description: "(07717707 - HOTFNTX)",
      cardData: [
        { icon: faAngleRight, title: "Waste", value: "10g ↓", description: 'Giveaway',isPositive: true  },
        { icon: faAngleRight, title: "Attainment", value: "1200 lbs ↑", description: 'Scheduled lbs',isPositive: true  },
        { icon: faAngleRight, title: "Efficiency", value: "32.50 →", description: 'Weigher Efficiency',isPositive: null  },
        { icon: faAngleRight, title: "Task Completion", value: "90% ↑", description: 'Pending Tasks',isPositive: true  },
        { icon: faAngleRight, title: "Food Safety/Compliance", value: "2.5", description: 'Machines Bypass',isPositive: null  },
      ]
    },
    {
      title: "EXT26",
      description: "(07717708 - HOTFNTY)",
      cardData: [
        { icon: faAngleRight, title: "Waste", value: "12g →", description: 'Weigher Efficiency',isPositive: null },
        { icon: faAngleRight, title: "Attainment", value: "0.2hrs ↑", description: 'Machine Hours to Target',isPositive: false },
        { icon: faAngleRight, title: "Efficiency", value: "48.12 ↓", description: 'Giveaway',isPositive: true },
        { icon: faAngleRight, title: "Task Completion", value: "98% ↑", description: 'Weigher Efficiency',isPositive: null },
        { icon: faAngleRight, title: "Food Safety/Compliance", value: "2.5", description: 'Machines Bypass',isPositive: null },
      ]
    },
    {
      title: "EXT27",
      cardData: [
        {noValue:'No process order assigned'}
      ]
    },
  ];

  return (
    <div className="main-card-Wrapper">
      <h3>My Overview</h3>
      <div className="main-card">
        {/* Loop through mainCardData to render multiple main cards */}
        {mainCardData.map((mainCard, index) => (
          <MainCardSection
            key={index}
            title={mainCard.title}
            description={mainCard.description}
            cardData={mainCard.cardData}
          />
        ))}
      </div>
    </div>
  );
};

const MainCardSection = ({ title, description, cardData,noValue }) => {
  return (
    <div className="main-card-section">
      <div className="card-title">
        <h4>{title}</h4>
        <span>{description}</span>
        <div>
          <span>View Details</span>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>

      <div className="card-row">
        {cardData.map((card, index) => (
          <Card
          key={index}
          icon={card.icon}
          title={card.title}
          value={card.value}
          description={card.description}
          isPositive={card.isPositive}
          noValue={card.noValue}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ icon, title, value, description, isPositive, noValue}) => {

  const valueContent = noValue || value;
  const valueColor = isPositive === true ? 'green' : isPositive === false ? 'red' : 'gray';

  return (
    <div className="card">
      <div className='card-title-wrap'>
        <div className='card-title'>{title}</div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className={`value ${valueColor}`}>{valueContent}</span>
      <div className='card-description'>{description}</div>
    </div>
  );
};

export default MainCard;
