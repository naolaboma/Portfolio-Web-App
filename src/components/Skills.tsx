import React from 'react';
import TechBadges from 'components/TechBadges';

const Skills: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold mb-3 text-teal-300">Tech Stack</h3>
      <TechBadges />
    </div>
  );
};

export default Skills;