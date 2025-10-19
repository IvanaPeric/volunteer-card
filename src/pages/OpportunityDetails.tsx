import React from 'react';
import { useParams } from 'react-router-dom';
import { Volunteer } from '../types/Volunteer';
import volunteers from '../data/volunteers.json';
import { BackpackIcon, BadgeIcon, CalendarIcon } from '@radix-ui/react-icons';
import DashboardHeader from '../components/DashboardHeader';

const detailsData = {
  1: {
    assignment: `World Youth Wave (WYW) is a dynamic youth, non-profit, and non-governmental organisation based in Belgrade, Serbia. Established in 2005, WYW aims to connect young people both locally and globally, fostering their cooperation and development. The organisation encourages youth to learn, grow, and contribute to society by providing a platform for expressing their ideas and beliefs through various workshops and educational content. The mission of World Youth Wave is to connect the youth and encourage their development on both local and global levels. WYW aspires to become one of the leading Europe-based youth organisations, focusing on the development of young people and addressing current social issues. We are seeking a motivated and passionate individual to join our team as a General Support and Marketing Assistant. This volunteer role is crucial in supporting the day-to-day operations and the ongoing development of the organization, particularly in our marketing activities.`,
    activities: [
      'General Administrative Support: Assist with the daily administrative tasks, including handling emails, scheduling meetings, and maintaining records.',
      'Event Coordination: Help organize and execute events, workshops, and activities, ensuring they run smoothly and efficiently.',
      'Marketing and Outreach: Develop and implement marketing strategies to promote our programs and events. Manage social media accounts, create content, and engage with our online community.',
      'Community Engagement: Foster relationships with volunteers, participants, and partners, ensuring effective communication and support.',
      'Creative Contribution: Bring new ideas to the table for improving our marketing campaigns and outreach efforts.'
    ],
    requirements: [
      'English | Fluent',
      '(Inter)cultural Competence',
      'Advanced Communication Skills',
      'Graphic Design',
      'Social Media',
      'Project Coordination'
    ],
    when: 'July, 2024',
    hours: '18 h /week',
    perks: ['UN Sustainable Development Goals'],
    location: 'Belgrade, Serbia'
  }
};

const OpportunityDetails: React.FC = () => {
  const { id } = useParams();
  const volunteer: Volunteer | undefined = volunteers.find(v => v.id === Number(id));
  const details = detailsData[Number(id) as keyof typeof detailsData];

  if (!volunteer) return <div className="p-8 text-center text-sobGreen">Opportunity not found.</div>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <DashboardHeader />
      <main className="w-full max-w-2xl mx-auto py-8 px-2 sm:px-6">
        <div className="bg-sobGray dark:bg-sobGray-dark rounded-xl shadow-lg p-8 font-sans">
          {volunteer.imageUrl && (
            <img src={volunteer.imageUrl} alt={volunteer.ngo} className="w-full h-56 object-cover rounded-xl mb-6" />
          )}
          <h1 className="text-3xl font-bold text-sobGreen mb-2">{volunteer.ngo}</h1>
          <div className="flex gap-2 mb-4">
            <span className="flex items-center font-medium px-2 py-1 bg-sobYellow-light rounded-full gap-1">
              <BackpackIcon className="w-4 h-4 text-sobGreen" />
              {volunteer.location}
            </span>
            <span className="flex items-center px-2 py-1 bg-sobGray text-sobGreen rounded-full text-xs font-semibold gap-1">
              <BadgeIcon className="w-4 h-4 text-sobGreen" />
              {volunteer.field}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-sobGreen mb-2">Assignment description</h2>
          <p className="mb-4 text-sobGreen">{details?.assignment || volunteer.description}</p>
          <h2 className="text-xl font-semibold text-sobGreen mb-2">List of Activities</h2>
          <ul className="mb-4 list-disc list-inside text-sobGreen">
            {details?.activities?.map((act, i) => <li key={i}>{act}</li>)}
          </ul>
          <h2 className="text-xl font-semibold text-sobGreen mb-2">Qualifications & requirements 💪👨‍🎓</h2>
          <ul className="mb-4 list-disc list-inside text-sobGreen">
            {details?.requirements?.map((req, i) => <li key={i}>{req}</li>)}
          </ul>
          <div className="flex gap-4 mb-4">
            <span className="flex items-center gap-1 text-sobGreen"><CalendarIcon className="w-4 h-4" /> {details?.when}</span>
            <span className="flex items-center gap-1 text-sobGreen"><CalendarIcon className="w-4 h-4" /> {details?.hours}</span>
          </div>
          <h2 className="text-xl font-semibold text-sobGreen mb-2">Perks & Reimburses 🎁</h2>
          <ul className="mb-4 list-disc list-inside text-sobGreen">
            {details?.perks?.map((perk, i) => <li key={i}>{perk}</li>)}
          </ul>
          <h2 className="text-xl font-semibold text-sobGreen mb-2">Location 🌎</h2>
          <p className="mb-2 text-sobGreen">{details?.location || volunteer.location}</p>
        </div>
      </main>
    </div>
  );
};

export default OpportunityDetails;
