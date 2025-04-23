import { Card, CardContent } from "@/components/ui/card";

const trainers = [
  {
    id: 1,
    name: "Alex Rodriguez",
    role: "Strength Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Certified strength specialist with 8+ years experience transforming bodies through science-based training."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    bio: "Experienced yoga teacher specializing in vinyasa flow and meditation techniques for mind-body balance."
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "HIIT Specialist",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    bio: "Former athlete turned trainer with expertise in high-intensity interval training and metabolic conditioning."
  },
  {
    id: 4,
    name: "Jasmine Williams",
    role: "Nutrition Coach",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Certified nutritionist helping clients optimize their diet for weight management and athletic performance."
  }
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="gym-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Expert <span className="text-gym-purple-500">Trainers</span>
          </h2>
          <p className="section-subtitle">
            Our team of certified fitness professionals is dedicated to helping you reach your goals with personalized guidance and motivation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="card-hover border-0 shadow-lg overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardContent className="p-5 text-center">
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-gym-purple-500 font-medium mb-3">{trainer.role}</p>
                <p className="text-sm text-gray-600">{trainer.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;