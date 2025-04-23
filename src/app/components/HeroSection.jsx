import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: "linear-gradient(to right, rgba(26, 31, 44, 0.8), rgba(26, 31, 44, 0.6)), url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gym-purple-900/90 to-gym-purple-900/70"></div>
      
      <div className="gym-container relative z-10 flex flex-col items-center text-center">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gym-purple-300/20 backdrop-blur-sm">
          <p className="text-white font-semibold">Transform Your Body, Transform Your Life</p>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight">
          Discover Your Strength at <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-purple-300 to-white">FitFusion</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
          Join our community of fitness enthusiasts and transform your body with state-of-the-art equipment and expert trainers committed to your success.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="btn-primary text-lg">
            Start Your Journey
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg">
            View Classes
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-white">1000+</p>
            <p className="text-white/80">Active Members</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">50+</p>
            <p className="text-white/80">Expert Trainers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">100+</p>
            <p className="text-white/80">Weekly Classes</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;