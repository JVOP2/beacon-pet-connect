
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookingSection from '@/components/BookingSection';
import OrderTracking from '@/components/OrderTracking';
import CustomizationSection from '@/components/CustomizationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <BookingSection />
        <OrderTracking />
        <CustomizationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
