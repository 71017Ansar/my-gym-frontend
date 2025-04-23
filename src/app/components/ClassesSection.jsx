
import { Calendar, Clock, Dumbbell, Activity, UserCheck, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const classes = [
  {
    id: 1,
    title: "High-Intensity Interval",
    description: "Burn maximum calories in minimum time with our HIIT classes.",
    icon: Activity,
    color: "from-pink-500 to-red-500",
    time: "45 min",
    level: "Intermediate"
  },
  {
    id: 2,
    title: "Strength & Conditioning",
    description: "Build muscle and improve endurance with compound movements.",
    icon: Dumbbell,
    color: "from-blue-500 to-indigo-600",
    time: "60 min",
    level: "All levels"
  },
  {
    id: 3,
    title: "Cardio Kickboxing",
    description: "High-energy workout combining martial arts techniques with fast-paced cardio.",
    icon: UserCheck,
    color: "from-orange-400 to-red-500",
    time: "50 min",
    level: "Beginner friendly"
  },
  {
    id: 4,
    title: "Mind & Body Yoga",
    description: "Find balance with a mix of movement and meditation focusing on alignment and breathing.",
    icon: Heart,
    color: "from-teal-400 to-green-500",
    time: "75 min",
    level: "All levels"
  }
];

const ClassesSection = () => {
  return (
    <section id="classes" className="py-20 bg-white">
      <div className="gym-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Our <span className="text-gym-purple-500">Classes</span>
          </h2>
          <p className="section-subtitle">
            From high-intensity interval training to mind-body yoga, we offer a wide range of classes to help you achieve your fitness goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((cls) => (
            <Card key={cls.id} className="card-hover border-0 shadow-lg overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${cls.color}`}></div>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gym-purple-100">
                  <cls.icon className="h-6 w-6 text-gym-purple-700" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{cls.title}</h3>
                <p className="text-gray-600 mb-4">{cls.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {cls.time}
                  </div>
                  <div className="flex items-center">
                    <UserCheck className="h-4 w-4 mr-1" />
                    {cls.level}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-gym-purple-700 font-medium hover:text-gym-purple-500">
            View complete schedule <Calendar className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;