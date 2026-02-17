import { Home, ClipboardList, CreditCard } from "lucide-react";

const steps = [
  { id: 1, label: "Delivery Address", icon: Home },
  { id: 2, label: "Order Summary", icon: ClipboardList },
  { id: 3, label: "Payment Option", icon: CreditCard },
];

const CheckoutSteps = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-center gap-10 my-8">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;

        return (
          <div key={step.id} className="flex items-center">
            {/* Circle */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full border-2
                ${
                  isCompleted || isActive
                    ? "border-[#a0774d] text-[#a0774d]"
                    : "border-gray-300 text-gray-400"
                }
              `}
            >
              <Icon size={22} />
            </div>

            {/* Label */}
            <span
              className={`ml-3 font-medium
                ${
                  isCompleted || isActive
                    ? "text-gray-800"
                    : "text-gray-400"
                }
              `}
            >
              {step.label}
            </span>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div
                className={`w-16 h-[2px] mx-6
                  ${
                    currentStep > step.id
                      ? "bg-[#a0774d]"
                      : "bg-gray-300"
                  }
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutSteps;
