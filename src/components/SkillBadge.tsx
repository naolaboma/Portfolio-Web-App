import React from 'react';

type SkillBadgeProps = {
  skill: {
    id: string;
    name: string;
    category: 'Language' | 'Framework' | 'DB' | 'Tool' | 'Practice';
    level?: 'Beginner' | 'Intermediate' | 'Advanced';
    icon?: string;
  };
};

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className={`badge ${skill.level?.toLowerCase()}`}>
      {skill.icon && <img src={skill.icon} alt={`${skill.name} icon`} className="icon" />}
      {skill.name}
    </span>
  );
};

export default SkillBadge;