import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const StyledAchievementsGrid = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;

  h2 {
    font-size: var(--fz-heading);
    margin-bottom: 40px;
    text-align: center;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }
`;

const Card = styled.div`
  background-color: rgb(170, 129, 191); /* soft purple shade */
  border-radius: var(--border-radius);
  padding: 20px;
  text-align: left;
  box-shadow: var(--shadow-lg);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    background-color: #5a47a3;
  }

  h3 {
    font-size: var(--fz-lg);
    margin-bottom: 10px;
    color: white;
  }

  .range {
    font-size: var(--fz-xs);
    color: #e0d9ff;
    margin-bottom: 10px;
  }

  p {
    font-size: var(--fz-sm);
    color: #f4f1ff;
  }
`;

const achievements = [
  {
    title: 'Team Lead – Face Recognition Attendance System (Senior Project)',
    date: '2024',
    description:
      'Developed a real-time face recognition attendance system as part of the senior capstone project using local dataset collection, model training, and system integration.',
  },
  {
    title: 'Best Presentation – Capstone Design Expo',
    date: '2024',
    description:
      'Recognized for delivering an effective technical presentation that included original research, model development, and hands-on data collection for the final-year capstone project.',
  },
  // {
  //   title: 'Volunteer Coding Instructor – Girls Who Code Ethiopia',
  //   date: '2023',
  //   description: 'Taught programming fundamentals to young girls in underserved communities.',
  // },
  {
    title: 'Teaching Assistant – AASTU',
    date: '2023',
    description:
      'Assisted students in understanding Data Structures and Algorithms and provided lab support across core courses.',
  },
  {
    title: 'Mentor – Google Developer Clubs (AASTU)',
    date: '2023',
    description:
      'Provided mentorship in web development and algorithmic thinking through project-based learning and coding bootcamps.',
  },
  {
    title:
      'Academic Recognition – Ethiopian Ministries of Education & Addis Ababa City Government of Women, Children, and Social Affairs',
    date: '2024',
    description: 'Recognized for high academic performance.',
  },
  {
    title: 'Member – RTC (Rewriting the Code) & Baddies in Tech',
    date: 'Ongoing',
    description:
      'Actively engaged in women-focused tech initiatives, participated in community-led hackathons, mentorship programs, and educational forums to support career growth and academic excellence.',
  },
];

const AchievementsCommunities = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!prefersReducedMotion) {
      sr.reveal(revealContainer.current, srConfig());
    }
  }, [prefersReducedMotion]);

  return (
    <StyledAchievementsGrid id="achievements" ref={revealContainer}>
      <h2 className="numbered-heading">Academic Achievements & Communities</h2>
      <div className="grid">
        {achievements.map((item, idx) => (
          <Card key={idx}>
            <h3>{item.title}</h3>
            <div className="range">{item.date}</div>
            <p>{item.description}</p>
          </Card>
        ))}
      </div>
    </StyledAchievementsGrid>
  );
};

export default AchievementsCommunities;
