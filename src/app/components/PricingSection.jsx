import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: "$29",
    period: "monthly",
    description: "Perfect for beginners looking to start their fitness journey.",
    features: [
      "Full gym access (6 AM - 10 PM)",
      "2 group classes per week",
      "Fitness assessment",
      "Basic workout plan",
      "Locker access"
    ],
    isPopular: false,
    ctaText: "Get Started",
    bgClass: "bg-white"
  },
  {
    id: 2,
    name: "Premium",
    price: "$49",
    period: "monthly",
    description: "Our most popular plan with the perfect balance of features.",
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "Monthly fitness assessment",
      "Personalized workout plan",
      "Nutrition consultation",
      "Locker with towel service"
    ],
    isPopular: true,
    ctaText: "Join Now",
    bgClass: "bg-card-gradient text-white"
  },
  {
    id: 3,
    name: "Elite",
    price: "$89",
    period: "monthly",
    description: "The ultimate fitness experience with premium perks and services.",
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "Weekly personal training session",
      "Advanced fitness assessment",
      "Custom nutrition plan",
      "Premium locker with laundry service",
      "Exclusive spa access"
    ],
    isPopular: false,
    ctaText: "Go Elite",
    bgClass: "bg-white"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gym-purple-100/50">
      <div className="gym-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Membership <span className="text-gym-purple-500">Plans</span>
          </h2>
          <p className="section-subtitle">
            Choose the perfect membership plan that fits your fitness goals and budget.
            No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`overflow-hidden border-0 shadow-lg ${plan.bgClass} ${plan.isPopular ? 'ring-2 ring-gym-purple-500 relative scale-105 z-10' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-gym-purple-500 text-white px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pt-8 pb-4">
                <h3 className={`text-2xl font-bold ${plan.isPopular ? 'text-white' : 'text-gym-charcoal'}`}>{plan.name}</h3>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex items-baseline">
                  <span className={`text-4xl font-bold ${plan.isPopular ? 'text-white' : 'text-gym-charcoal'}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-1 text-lg ${plan.isPopular ? 'text-white/80' : 'text-gym-gray-500'}`}>
                    /{plan.period}
                  </span>
                </div>
                
                <p className={`text-sm ${plan.isPopular ? 'text-white/80' : 'text-gym-gray-500'}`}>
                  {plan.description}
                </p>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`mt-1 rounded-full p-1 ${plan.isPopular ? 'bg-white/20' : 'bg-gym-purple-100'}`}>
                        <Check className={`h-3 w-3 ${plan.isPopular ? 'text-white' : 'text-gym-purple-700'}`} />
                      </div>
                      <span className={`text-sm ${plan.isPopular ? 'text-white' : 'text-gym-charcoal'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-0 pb-8">
                <Button 
                  className={`w-full ${plan.isPopular ? 'bg-white hover:bg-white/90 text-gym-purple-700' : 'btn-primary'}`}
                >
                  {plan.ctaText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;