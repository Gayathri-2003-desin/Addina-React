const MapSection = () => {
  return (
    <div className="relative w-full h-[700px] group overflow-hidden">
      
      {/* GOOGLE MAP */}
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Dhaka&output=embed"
        className="w-full h-full border-0 pointer-events-none group-hover:pointer-events-auto"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center 
                      transition-opacity duration-300 group-hover:opacity-0">
        <p className="text-white text-[22px] font-medium tracking-wide">
          Use ctrl + scroll to zoom the map
        </p>
      </div>

    </div>
  );
};

export default MapSection;

