import { FileText, DollarSign, Package } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Submit Your Quote',
      description: 'Fill out the form above with your device details and get an instant estimate.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Package,
      title: 'Ship Your Device',
      description: 'We\'ll send you a prepaid shipping label. Package your device and drop it off.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: DollarSign,
      title: 'Get Paid',
      description: 'Once we receive and verify your device, we\'ll send your payment immediately.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent text-center mb-12">
        How It Works
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center group">
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-200`}>
              <step.icon className="w-8 h-8 text-white" />
            </div>
            <div className="relative">
              <div className={`absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br ${step.gradient} text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-md`}>
                {index + 1}
              </div>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 mt-2">
              {step.title}
            </h4>
            <p className="text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}