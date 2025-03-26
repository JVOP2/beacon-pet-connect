
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarIcon, Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';

type TimeSlot = {
  id: number;
  time: string;
  available: boolean;
};

// Sample time slots
const timeSlots: TimeSlot[] = [
  { id: 1, time: "09:00 AM", available: true },
  { id: 2, time: "10:00 AM", available: true },
  { id: 3, time: "11:00 AM", available: true },
  { id: 4, time: "01:00 PM", available: true },
  { id: 5, time: "02:00 PM", available: true },
  { id: 6, time: "03:00 PM", available: false },
  { id: 7, time: "04:00 PM", available: true },
  { id: 8, time: "05:00 PM", available: true },
];

const BookingSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const handleBookAppointment = () => {
    if (!date || !selectedTimeSlot || !petName || !petType || !ownerName || !email || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // In a real app, this would send the booking to an API
    toast.success(`Your appointment has been booked for ${format(date, 'PPP')} at ${selectedTimeSlot.time}`);
    
    // Reset form
    setDate(undefined);
    setSelectedTimeSlot(null);
    setPetName("");
    setPetType("");
    setOwnerName("");
    setEmail("");
    setPhone("");
    setNotes("");
  };

  return (
    <section id="booking" className="py-20 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-beacon-50/30 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-reveal">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-beacon-100/50 text-beacon-700 font-medium text-sm">
            Book Your Consultation
          </div>
          
          <h2 className="font-semibold mb-6 text-gradient">Schedule an Appointment</h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Book a consultation with our specialists to evaluate your pet's needs and start the journey toward a custom prosthetic solution.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass rounded-2xl shadow-xl shadow-ocean-500/5 overflow-hidden animate-reveal animate-reveal-delay-1">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Booking Form */}
            <div className="p-8">
              <h3 className="text-2xl font-medium mb-6">Your Information</h3>
              
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Pet Name *</label>
                    <input
                      type="text"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-ocean-400 focus:ring-2 focus:ring-ocean-400/20 outline-none transition-all"
                      placeholder="e.g., Max"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Pet Type *</label>
                    <select
                      value={petType}
                      onChange={(e) => setPetType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-ocean-400 focus:ring-2 focus:ring-ocean-400/20 outline-none transition-all"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name *</label>
                  <input
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-ocean-400 focus:ring-2 focus:ring-ocean-400/20 outline-none transition-all"
                    placeholder="Full name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-ocean-400 focus:ring-2 focus:ring-ocean-400/20 outline-none transition-all"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-ocean-400 focus:ring-2 focus:ring-ocean-400/20 outline-none transition-all"
                      placeholder="Your phone"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Additional Notes</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-ocean-400 focus:ring-2 focus:ring-ocean-400/20 outline-none transition-all"
                    placeholder="Any additional details about your pet's needs"
                    rows={3}
                  />
                </div>
              </div>
            </div>
            
            {/* Calendar and Time Selection */}
            <div className="p-8 bg-gradient-to-br from-ocean-50 to-beacon-50 border-l border-border/50">
              <h3 className="text-2xl font-medium mb-6">Choose Date & Time</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3">Select Date *</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => {
                          // Disable past dates and weekends
                          const now = new Date();
                          now.setHours(0, 0, 0, 0);
                          const day = date.getDay();
                          return date < now || day === 0 || day === 6;
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3">Select Time *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot.id}
                        variant="outline"
                        className={cn(
                          "justify-start font-normal",
                          selectedTimeSlot?.id === slot.id && "border-ocean-400 ring-2 ring-ocean-400/20",
                          !slot.available && "opacity-50 cursor-not-allowed bg-muted"
                        )}
                        disabled={!slot.available}
                        onClick={() => slot.available && setSelectedTimeSlot(slot)}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {slot.time}
                        {selectedTimeSlot?.id === slot.id && (
                          <Check className="ml-auto h-4 w-4 text-green-500" />
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6 py-6 text-base bg-ocean-600 hover:bg-ocean-700 text-white"
                  onClick={handleBookAppointment}
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
