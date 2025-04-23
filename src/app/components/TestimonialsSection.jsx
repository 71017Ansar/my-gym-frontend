"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Member for 2 years",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "FitFusion transformed my approach to fitness. The trainers are incredibly knowledgeable and the community is so supportive. I've lost 30 pounds and gained confidence I never thought possible!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Roberts",
    role: "Member for 1 year",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    quote: "After trying several gyms in the area, FitFusion stands out for its clean facilities, friendly atmosphere, and challenging classes. The trainers push you to your limits in the best way possible.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "Member for 6 months",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote: "The nutrition guidance combined with personalized training helped me achieve results I couldn't get anywhere else. FitFusion isn't just a gym, it's a complete lifestyle transformation.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gym-purple-900 text-white">
      <div className="gym-container">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">
            Success <span className="text-gym-purple-300">Stories</span>
          </h2>
          <p className="section-subtitle text-white/80">
            Don't just take our word for it - hear what our members have to say about their experience with FitFusion.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-lg border-0 shadow-xl">
            <CardContent className="p-8 md:p-10">
              <div className="mb-6 flex justify-center">
                <Quote className="h-12 w-12 text-gym-purple-300 opacity-50" />
              </div>
              
              <div className="mb-8 text-center">
                <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="mr-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gym-purple-300">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                {testimonials.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-gym-purple-300' : 'bg-white/30'}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;