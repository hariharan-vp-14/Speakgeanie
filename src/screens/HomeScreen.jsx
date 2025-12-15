import UserCard from "../components/UserCard";
import XPCard from "../components/XPCard";
import ActionButtons from "../components/ActionButtons";
import StoryCarousel from "../components/StoryCarousel";
import PracticeCard from "../components/PracticeCard";
import PracticeWithAI from "../components/PracticeWithAI";
import { stories } from "../data";

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 flex justify-center">
      {/* Main Container */}
      <div className="w-full max-w-6xl pb-28 sm:pb-24">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <UserCard />
          <XPCard />
        </div>

        {/* Action Buttons */}
        <div className="mb-8">
          <ActionButtons />
        </div>

        {/* Audio Stories */}
        <div className="mb-10">
          <StoryCarousel stories={stories} />
        </div>

        {/* Practice with Humans */}
        <div className="mb-10">
          <PracticeCard
            title="Practice with Humans"
            subtitle="Talk about your favorite animals and pets"
          />
        </div>

        {/* Practice with AI */}
        <div className="mb-6">
          <PracticeWithAI />
        </div>

      </div>
    </div>
  );
};

export default HomeScreen;
