import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gym-purple-700 to-gym-purple-500 text-white">
      <div className="gym-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Body and Mind?
        </h2>
        
        <p className="max-w-2xl mx-auto text-lg mb-8 text-white/90">
          Join FitFusion today and take the first step towards a healthier, stronger you. 
          No commitments, no pressure - just results.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-gym-purple-700 hover:bg-white/90" size="lg">
            Start Free Trial
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;