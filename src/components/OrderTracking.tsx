
import { useState } from 'react';
import { SearchIcon, PackageCheck, ClipboardList, BadgeCheck } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Sample order data for demonstration
const sampleOrders = [
  {
    id: "OB-2023-8752",
    petName: "Max",
    status: "In Analysis",
    date: "2023-08-15",
    details: "Initial measurements completed"
  },
  {
    id: "OB-2023-9104",
    petName: "Bella",
    status: "In Production",
    date: "2023-07-28",
    details: "Materials acquired, manufacturing in progress"
  },
  {
    id: "OB-2023-7631",
    petName: "Charlie",
    status: "Ready for Fitting",
    date: "2023-08-02",
    details: "Prosthetic completed and ready for fitting appointment"
  }
];

type OrderStatus = "In Analysis" | "In Production" | "Ready for Fitting" | "Completed";

const getStatusColor = (status: OrderStatus) => {
  switch (status) {
    case "In Analysis":
      return "text-amber-500 bg-amber-50 border-amber-200";
    case "In Production":
      return "text-blue-500 bg-blue-50 border-blue-200";
    case "Ready for Fitting":
      return "text-green-500 bg-green-50 border-green-200";
    case "Completed":
      return "text-purple-500 bg-purple-50 border-purple-200";
    default:
      return "text-gray-500 bg-gray-50 border-gray-200";
  }
};

const getStatusIcon = (status: OrderStatus) => {
  switch (status) {
    case "In Analysis":
      return ClipboardList;
    case "In Production":
      return PackageCheck;
    case "Ready for Fitting":
    case "Completed":
      return BadgeCheck;
    default:
      return ClipboardList;
  }
};

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [searchResult, setSearchResult] = useState<typeof sampleOrders[0] | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!orderNumber.trim()) {
      toast.error("Please enter an order number");
      return;
    }
    
    setIsSearching(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const result = sampleOrders.find(order => order.id === orderNumber.trim());
      
      if (result) {
        setSearchResult(result);
      } else {
        toast.error("Order not found. Please check the order number and try again.");
        setSearchResult(null);
      }
      
      setIsSearching(false);
    }, 800);
  };

  return (
    <section id="tracking" className="py-20 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean-50/30 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-reveal">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-ocean-100/50 text-ocean-700 font-medium text-sm">
            Check Your Order
          </div>
          
          <h2 className="font-semibold mb-6 text-gradient">Track Your Order Status</h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Stay updated on the progress of your pet's custom prosthetic. Enter your order number to check the current status.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl shadow-xl shadow-ocean-500/5 p-8 animate-reveal animate-reveal-delay-1">
            {/* Search form */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:border-ocean-400 focus:ring-2 focus:ring-ocean-400/20 outline-none transition-all"
                  placeholder="Enter order number (e.g., OB-2023-8752)"
                />
              </div>
              <Button 
                className="py-3 px-6 bg-ocean-600 hover:bg-ocean-700 text-white"
                disabled={isSearching}
                onClick={handleSearch}
              >
                {isSearching ? "Searching..." : "Track Order"}
              </Button>
            </div>
            
            {/* Search result */}
            {searchResult ? (
              <div className="animate-scale-in">
                <div className="border border-border rounded-xl overflow-hidden">
                  <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-muted/30">
                    <div>
                      <h3 className="text-xl font-medium">{searchResult.petName}'s Prosthetic</h3>
                      <p className="text-muted-foreground">Order #{searchResult.id}</p>
                    </div>
                    <div className={cn(
                      "px-4 py-2 rounded-full border font-medium text-sm flex items-center gap-2",
                      getStatusColor(searchResult.status as OrderStatus)
                    )}>
                      {React.createElement(getStatusIcon(searchResult.status as OrderStatus), { className: "h-4 w-4" })}
                      {searchResult.status}
                    </div>
                  </div>
                  
                  <div className="p-6 border-t border-border">
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Status Details</h4>
                      <p>{searchResult.details}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Last Updated</h4>
                      <p>{new Date(searchResult.date).toLocaleDateString("en-US", { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric'
                      })}</p>
                    </div>
                    
                    <div className="rounded-lg bg-muted/30 border border-border p-4 text-sm">
                      <h4 className="font-medium mb-2">Next Steps</h4>
                      {searchResult.status === "In Analysis" && (
                        <p>Our team is analyzing the measurements and designing your pet's custom prosthetic. We'll update you when production begins.</p>
                      )}
                      {searchResult.status === "In Production" && (
                        <p>Your pet's prosthetic is currently being manufactured. We'll notify you once it's ready for fitting.</p>
                      )}
                      {searchResult.status === "Ready for Fitting" && (
                        <p>Great news! Your pet's prosthetic is ready. Please contact us to schedule a fitting appointment.</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button 
                    className="text-ocean-600 hover:text-ocean-700 font-medium text-sm"
                    onClick={() => setSearchResult(null)}
                  >
                    Search for another order
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <SearchIcon className="h-7 w-7 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">Enter Your Order Number</h3>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  Please provide your order number to check its current status and details.
                </p>
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center animate-reveal animate-reveal-delay-2">
            <p className="text-sm text-muted-foreground">
              Can't find your order? <a href="#contact" className="text-ocean-600 hover:text-ocean-700 font-medium">Contact our support team</a> for assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;
