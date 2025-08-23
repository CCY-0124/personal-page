'use client';

import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Image as ImageIcon, X } from 'lucide-react';

interface FunItem {
  id: string;
  title: string;
  image: string;
  content: string;
  category: string;
}

const FunStuff: React.FC = () => {
  const [isFunFactExpanded, setIsFunFactExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FunItem | null>(null);

  const funItems: FunItem[] = [
    {
      id: 'robotic-life',
      title: 'Why Not Let Your Child Start Preparing for LeetCode as Early as Grade 2?',
      image: '/robotics.jpg',

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
      title: 'Scholiast: Winning at Innovation and Teamwork',
      image: '/scholist.jpg',
      content: `June 30 was a milestone moment for our team. Our project, Scholiast, was highlighted by BCIT and even showcased on their official LinkedIn page. Being recognized in this way was both humbling and exciting, and seeing our work celebrated by the school's official channels made it even more meaningful.

Out of all the student projects from terms 1 and 2, we were honored to receive the awards for Most Innovative and Best Teamwork. With so many strong competitors, taking home two out of the three categories felt almost unreal.

At its core, Scholiast is a learning assistant designed to improve productivity. It takes raw study materials and transforms them into quizzes, flashcards, and structured summaries, using techniques like active recall and spaced repetition to strengthen learning. We developed the project from the ground up, using React for the frontend and Express for the backend, and later added AI features to make it more forward-looking and aligned with modern technology trends.

A fun fact about the project is that when we started, only one member of our team had previous experience with React and Express. The rest of us had just ten days to learn both frameworks. At first it was overwhelming, and applying new knowledge in real time was messy, but through hands-on practice and group coding sessions we grew more comfortable. In the end, we built a product we are truly proud of.

For me, working on Scholiast was eye-opening. I was amazed by the potential of React and Express, and most of my summer projects afterward, including No Plan No Future and my personal page, were built with these frameworks. This experience reminded me how important it is to keep learning new tools and approaches. Computer science moves at an incredible pace, especially with AI pushing the field forward. Staying curious and willing to learn is the key to becoming a strong developer.

Scholiast was more than just a class project. It was proof of how much can be achieved when teamwork, self-learning, and determination come together. We supported each other through steep learning curves, pushed ourselves to adapt quickly, and grew stronger as a team in the process. The experience left me proud of what we built and motivated to keep challenging myself as a developer.`,
      category: 'Education'
    },

  ];

  const funFact = `I built my first PC at 14. Nano boards and mini boards made no sense then, so I drilled holes in the case to make it work. Since then, I've always had a knack for breaking and fixing electronics and 3C products.`;

  return (
    <>
      <div className="funstuff-container">
        {/* Header */}
        <div className="funstuff-header">
          <h2 className="funstuff-title">Fun Stuff</h2>
        </div>

        {/* Three Cards Row */}
        <div className="cards-row">
          {funItems.map((item) => (
            <div key={item.id} className="fun-card" onClick={() => setSelectedItem(item)}>
              <div className="card-image">
                <ImageIcon size={32} />
              </div>
              <h3 className="card-title">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Fun Fact Banner */}
        <div className="fun-fact-banner" onClick={() => setIsFunFactExpanded(!isFunFactExpanded)}>
          <div className="banner-content">
            <div className="banner-left">
              <Star size={24} />
              <span className="banner-text">Fun Fact</span>
            </div>
            <div className="banner-right">
              {isFunFactExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
          {isFunFactExpanded && (
            <div className="fun-fact-content">
              <p>{funFact}</p>
            </div>
          )}
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
              <div className="item-hero">
                <div className="item-info">
                  <p className="item-description">{selectedItem.content}</p>
                </div>
                <div className="item-image">
                  <div className="image-placeholder">
                    <ImageIcon size={40} />
                    <span>{selectedItem.title}</span>
                  </div>
                </div>
              </div>

              <div className="item-section">
                <h3>Category</h3>
                <div className="category-badge">
                  {selectedItem.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .funstuff-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background: #0b0b0b;
          height: 450px;
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
          height: 140px;
        }

        .fun-card:hover {
          transform: translateY(-2px);
        }

        .card-image {
          width: 50px;
          height: 50px;
          background: #F7F4C8;
          border: 2px solid #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
          color: #000000;
        }

        .card-title {
          color: #F7F4C8;
          font-size: 13px;
          font-weight: 600;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }

        .fun-fact-banner {
          background: #141414;
          border: 2px solid #F7F4C8;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .fun-fact-banner:hover {
          background: rgba(247, 244, 200, 0.05);
        }

        .banner-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
        }

        .banner-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .banner-text {
          color: #F7F4C8;
          font-size: 18px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .banner-right {
          color: #F7F4C8;
        }

        .fun-fact-content {
          padding: 0 20px 20px;
          border-top: 1px solid #F7F4C8;
          margin-top: 15px;
        }

        .fun-fact-content p {
          color: #F7F4C8;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        /* Modal Styles */
        .detail-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .detail-modal-window {
          background: #141414;
          border: 3px solid #F7F4C8;
          max-width: 800px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          position: relative;
        }

        .detail-titlebar {
          background: #0a0a0a;
          padding: 15px 20px;
          border-bottom: 2px solid #F7F4C8;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-title-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .detail-title {
          color: #F7F4C8;
          font-size: 18px;
          font-weight: 700;
          margin: 0;
        }

        .detail-buttons {
          display: flex;
          gap: 6px;
        }

        .detail-btn {
          width: 20px;
          height: 20px;
          display: inline-block;
          border-radius: 0px;
          box-shadow: 0 0 0 2px #F7F4C8 inset,
            0 0 0 2px #F7F4C8;
          cursor: pointer;
        }

        .detail-close {
          background: #ff4d4d;
        }

        .detail-content {
          padding: 20px;
        }

        .item-hero {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }

        .item-info {
          flex: 1;
        }

        .item-subtitle {
          color: #F7F4C8;
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 15px 0;
          line-height: 1.3;
        }

        .item-description {
          color: #F7F4C8;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
          white-space: pre-line;
        }

        .item-image {
          flex-shrink: 0;
          width: 200px;
          height: 150px;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background: #F7F4C8;
          border: 2px solid #000000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #000000;
          font-size: 14px;
        }

        .item-section {
          margin-bottom: 20px;
        }

        .item-section h3 {
          color: #F7F4C8;
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 10px 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .category-badge {
          background: #F7F4C8;
          color: #000000;
          padding: 8px 16px;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
        }

        @media (max-width: 768px) {
          .funstuff-container {
            padding: 15px;
            height: auto;
          }

          .cards-row {
            grid-template-columns: 1fr;
            gap: 15px;
            height: auto;
          }

          .fun-card {
            aspect-ratio: 3/2;
          }

          .funstuff-title {
            font-size: 20px;
          }

          .card-title {
            font-size: 14px;
          }

          .banner-text {
            font-size: 16px;
          }

          .item-hero {
            flex-direction: column;
          }

          .item-image {
            width: 100%;
            height: 120px;
          }
        }
      `}</style>
    </>
  );
};

export default FunStuff;
