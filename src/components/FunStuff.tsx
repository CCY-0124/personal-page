'use client';

import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface FunItem {
  id: string;
  title: string;
  image: string;   // per-item hero image
  icon: string;
  content: string;
  category: string;
}

const FunStuff: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<FunItem | null>(null);

  const funItems: FunItem[] = [
    {
      id: 'robotic-life',
      icon: '/project-screenshots/fun-stuff/robotics.png',
      title: 'Let Your Child Start Preparing for LeetCode as Early as Grade 2',
      image: '/project-screenshots/fun-stuff/robotics-life.png',
      content: `As a former counseling professional and now a Computer Science student, joining a robotics company has been both fun and inspiring. It is not just about technology, but also about building a brand, mentoring students, and sparking curiosity. At our recent Open House event, I had the privilege of serving as one of the experienced coaches, leading the coding session alongside the robotics activities.

We started with simple game scripts in Scratch. But as I watched the kids, I thought, why not make it even more engaging for the parents, who are the ones ultimately making the decisions? During the summer, I usually spend time working on my own projects and practicing LeetCode problems. That gave me an idea: what if we created a problem-solving game similar to LeetCode, but designed for kids? Imagine telling parents, "Your child can start preparing for LeetCode as early as grade 2."

I built a prototype in Scratch, re-creating a classic LeetCode problem: Two Sum. To my surprise, it worked perfectly. Designing the interface, adjusting variables, and adding components felt like solving a puzzle. I even tried adding cute characters to make it more appealing. When I showed it to a friend, they laughed and said, "This looks a little scary. Keep it simple and fun for the kids." In the end, I decided not to use the demo for the event, but I still consider it a small masterpiece that lives on my laptop.

This event reminded me of an important lesson: coding problems, no matter how difficult, can always be broken down into smaller, simpler parts. Even a LeetCode problem can be solved in Scratch. What really matters is the thinking process, not the specific tool.

It was a meaningful experience to bring together both sides of my background, counseling and computer science. Guiding kids through bugs, helping them think step by step, and watching them take their first steps into coding was just as rewarding for me as it was for them. Along the way, I also sharpened my own understanding of logic and problem decomposition.

Maybe one day I will return to my KidCode project, where I imagine building problem-solving games for children. But for now, I am happy to keep things simple and let the kids enjoy their childhood.`,
      category: 'Education'
    },
    {
      id: 'scholist',
      icon: '/project-screenshots/fun-stuff/scholist.png',
      title: 'Scholiast: Winning at Innovation and Teamwork',
      image: '/project-screenshots/fun-stuff/scholist-blog.png',
      content: `June 30 was a milestone moment for our team. Our project, Scholiast, was highlighted by BCIT and even showcased on their official LinkedIn page. Being recognized in this way was both humbling and exciting, and seeing our work celebrated by the school's official channels made it even more meaningful.

Out of all the student projects from terms 1 and 2, we were honored to receive the awards for Most Innovative and Best Teamwork. With so many strong competitors, taking home two out of the three categories felt almost unreal.

At its core, Scholiast is a learning assistant designed to improve productivity. It takes raw study materials and transforms them into quizzes, flashcards, and structured summaries, using techniques like active recall and spaced repetition to strengthen learning. We developed the project from the ground up, using React for the frontend and Express for the backend, and later added AI features to make it more forward-looking and aligned with modern technology trends.

A fun fact about the project is that when we started, only one member of our team had previous experience with React and Express. The rest of us had just ten days to learn both frameworks. At first it was overwhelming, and applying new knowledge in real time was messy, but through hands-on practice and group coding sessions we grew more comfortable. In the end, we built a product we are truly proud of.

For me, working on Scholiast was eye-opening. I was amazed by the potential of React and Express, and most of my summer projects afterward, including No Plan No Future and my personal page, were built with these frameworks. This experience reminded me how important it is to keep learning new tools and approaches. Computer science moves at an incredible pace, especially with AI pushing the field forward. Staying curious and willing to learn is the key to becoming a strong developer.

Scholiast was more than just a class project. It was proof of how much can be achieved when teamwork, self-learning, and determination come together. We supported each other through steep learning curves, pushed ourselves to adapt quickly, and grew stronger as a team in the process. The experience left me proud of what we built and motivated to keep challenging myself as a developer.`,
      category: 'Education'
    },
  ];

  return (
    <>
      <div className="funstuff-container">
        {/* Header */}
        <div className="funstuff-header">
          <h2 className="funstuff-title">Fun Stuff</h2>
        </div>

        {/* Two-card grid */}
        <div className="cards-row">
          {funItems.map((item) => (
            <div
              key={item.id}
              className="fun-card"
              onClick={() => setSelectedItem(item)}
            >
              <div className="card-image">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={100}
                  className="avatar-image"
                />
              </div>
              <h3 className="card-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="detail-modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="detail-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="detail-titlebar">
              <div className="detail-title-section">
                <span className="detail-title">Fun Stuff / {selectedItem.title}</span>
              </div>
              <div className="detail-buttons">
                <span
                  className="detail-btn detail-close"
                  onClick={() => setSelectedItem(null)}
                  onMouseDown={(e) => e.stopPropagation()}
                />
              </div>
            </div>

            <div className="detail-content">
              <div className="project-info">
                <div className="project-layout">
                  <div className="project-image-col">
                    <img
                      src={selectedItem.image || '/fun-stuff/shot1.png'}
                      alt="project hero"
                      className="project-image-vertical"
                      loading="eager"
                    />
                  </div>
                  <div className="project-text-col">
                    <h3 className="project-subtitle">{selectedItem.title}</h3>
                    <p className="project-description">{selectedItem.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`

        .project-layout {
          display: flex;
          gap: 20px;
        }

        .project-text-col {
          flex: 1;
        }

        .project-image-vertical {
          width: 100%;
          height: auto;
          object-fit: contain;
          max-height: 75vh; /* prevent overflow */
          image-rendering: pixelated;
        }

        .funstuff-container {
          max-width: 600px;
          margin: 0 auto;
          background: #0b0b0b;
          overflow-y: auto;
        }

        .funstuff-header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 2px solid #F7F4C8;
        }

        .funstuff-title {
          color: #F7F4C8;
          font-size: 20px;
          font-weight: 700;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .cards-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 25px;
          height: 150px;
        }

        .fun-card {
          background: #141414;
          padding: 12px;
          text-align: center;
          border: 2px solid #F7F4C8;
          transition: transform 0.2s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;
        }

        .fun-card:hover { transform: translateY(-2px); }

        .card-image {
          border: 2px solid #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
          color: #000000;
        }

        /* Multi-line clamp so titles don't get cut awkwardly */
        .card-title {
          color: #F7F4C8;
          font-size: 13px;
          font-weight: 600;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1.2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3; /* show up to 3 lines */
          overflow: hidden;
          word-break: break-word;
        }

        /* Modal */
        .detail-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 10px;
        }

        .detail-modal-window {
          color: #f7f4c8;
          background: #141414;
          border: 4px solid #f6e05e;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          width: min(1200px, 90vw);
          max-height: 90vh;
        }

        .detail-titlebar {
          background: #0a0a0a;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          image-rendering: pixelated;
          cursor: grab;
          border-bottom: 4px solid #f6e05e;
        }
        .detail-titlebar:active { cursor: grabbing; }

        .detail-title-section { display: flex; align-items: center; gap: 8px; }

        .detail-title {
          font-family: ui-monospace, Menlo, Monaco, Consolas, "Courier New", monospace;
          font-weight: 700;
          font-size: 22px;
          letter-spacing: 0.2px;
          color: #f6e05e;
        }

        .detail-buttons { display: flex; gap: 6px; align-items: center; }

        .detail-btn {
          width: 20px; height: 20px; display: inline-block;
          box-shadow: 0 0 0 2px #f6e05e inset, 0 0 0 2px #f6e05e;
          image-rendering: pixelated; cursor: pointer;
        }
        .detail-close { background: #ff4d4d; }

        .detail-content {
          max-height: calc(85vh - 46px);
          overflow: auto;
          padding: 16px;
          line-height: 1.5;
          background: #141414;
          font-family: ui-monospace, Menlo, Monaco, Consolas, "Courier New", monospace;
          color: #F7F4C8;
        }

        /* Smooth, visible scrollbar */
        .detail-content::-webkit-scrollbar { width: 12px; }
        .detail-content::-webkit-scrollbar-track { background: #0a0a0a; margin: 4px; }
        .detail-content::-webkit-scrollbar-thumb { background: #f6e05e; border: 2px solid #000000; }
        .detail-content::-webkit-scrollbar-thumb:hover { background: #f7f4c8; }
        .detail-content::-webkit-scrollbar-corner { background: #0a0a0a; }

        .project-info { flex: 1; }

        .project-image {
          width: 100%;
          max-height: 320px;
          object-fit: cover;
          margin-bottom: 16px;
          border: 2px solid #f6e05e;
          image-rendering: pixelated;
          background: rgba(246, 224, 94, 0.08);
        }

        .project-subtitle {
          color: #f6e05e;
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 12px 0;
          line-height: 1.3;
          word-break: break-word;
        }

        .project-description {
          font-size: 14px;
          margin: 0;
          color: #F7F4C8;
          white-space: pre-line; /* keep your paragraphs */
          word-break: break-word; /* avoid overflow for long words/links */
        }

        @media (max-width: 768px) {
          .funstuff-container { padding: 15px; }
          .cards-row {
            grid-template-columns: 1fr;
            gap: 15px;
            height: auto;
          }
          .fun-card { aspect-ratio: 3/2; }
          .funstuff-title { font-size: 20px; }
          .card-title { font-size: 14px; }
          .detail-modal-window { width: 92vw; }
          .project-image { max-height: 240px; }
        }
      `}</style>
    </>
  );
};

export default FunStuff;
