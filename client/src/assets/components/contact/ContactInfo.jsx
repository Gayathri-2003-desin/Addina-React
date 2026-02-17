import { MapPin, Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LOCATION */}
        <div className="bg-white p-10 text-center shadow-sm">
          <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#b18b5e] mb-6">
            <MapPin className="text-white" size={34} />
          </div>

          <h3 className="text-[22px] font-semibold mb-4">
            Our Location
          </h3>

          <p className="text-[#555] leading-7 text-[18px]">
            House #5, Street Number #98, brasilia-
            <br />
            70000-000, Brazil.
          </p>
        </div>

        {/* EMAIL */}
        <div className="bg-white p-10 text-center shadow-sm">
          <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#b18b5e] mb-6">
            <Mail className="text-white" size={32} />
          </div>

          <h3 className="text-[22px] font-semibold mb-4">
            Our Email Address
          </h3>

          <p className="text-[#555] leading-7 text-[18px]">
            contact@DOGRI.com <br />
            support@DOGRI.com
          </p>
        </div>

        {/* PHONE */}
        <div className="bg-white p-10 text-center shadow-sm">
          <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#b18b5e] mb-6">
            <Phone className="text-white" size={32} />
          </div>

          <h3 className="text-[22px] font-semibold mb-4">
            Contact Phone Number
          </h3>

          <p className="text-[#555] leading-7 text-[18px] ">
            +380961381876 <br />
            +380961381877
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContactInfo;
