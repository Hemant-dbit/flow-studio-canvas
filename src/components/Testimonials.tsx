
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "StudioFlow has transformed how our marketing team operates. We've automated our entire email marketing workflow and saved 15+ hours per week.",
    author: "Alex Johnson",
    role: "Marketing Director, TechCorp",
    stars: 5
  },
  {
    quote: "As someone with no coding experience, I was able to build complex automation flows in just hours. The intuitive interface makes it so easy.",
    author: "Sarah Williams",
    role: "Operations Manager, StartupX",
    stars: 5
  },
  {
    quote: "We've connected our CRM, email marketing, and project management tools using StudioFlow. It's like having an extra team member.",
    author: "Michael Chen",
    role: "Product Manager, GrowthLabs",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-gray-50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-flow-100/50 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">Thousands</span> of Teams
          </h2>
          <p className="text-gray-600">
            See what people are saying about how StudioFlow has transformed their workflows and productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md border border-gray-100 card-hover"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Ready to transform your workflow?</h3>
            <p className="text-gray-600 mb-8">
              Join thousands of teams that use StudioFlow to automate their work and focus on what matters.
            </p>
            <button className="btn-primary">Get Started for Free</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
