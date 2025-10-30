"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, ChefHat, HelpCircle, Star, Utensils } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bella Vista"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="qkwbfkfbqkfbqwkjf"
          description="Savor authentic Italian cuisine crafted with passion and the finest ingredients in an elegant atmosphere"
          tag="Welcome"
          tagIcon={Utensils}
          buttons={[
            { text: "Reserve Table", href: "https://opentable.com" },
            { text: "View Menu", href: "menu" }
          ]}
          imageSrc="https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant restaurant dining room"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "For over two decades, Bella Vista has been crafting extraordinary culinary experiences that celebrate the rich traditions of Italian cuisine.",
            "Our passionate chefs source the finest local ingredients and combine them with time-honored techniques to create dishes that transport you straight to the heart of Italy."
          ]}
          buttons={[
            { text: "Meet Our Chefs", href: "about" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Signature Dishes"
          description="Discover our chef's carefully curated selection of authentic Italian favorites"
          tag="Menu Highlights"
          tagIcon={ChefHat}
          products={[
            {
              id: "1",
              name: "Truffle Risotto",
              price: "$32",
              imageSrc: "https://images.pexels.com/photos/34434634/pexels-photo-34434634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Creamy truffle risotto",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Grilled Branzino",
              price: "$28",
              imageSrc: "https://images.pexels.com/photos/16729168/pexels-photo-16729168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh grilled branzino",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Margherita Pizza",
              price: "$24",
              imageSrc: "https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Wood-fired margherita pizza",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Read authentic reviews from our valued customers"
          tag="Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarahfoodie",
              testimonial: "The truffle risotto was absolutely divine! The ambiance and service made our anniversary dinner truly unforgettable.",
              imageSrc: "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah"
            },
            {
              id: "2",
              name: "Michael",
              handle: "@mikeeats",
              testimonial: "Best Italian restaurant in the city. The chef's attention to detail and authentic flavors transport you straight to Italy.",
              imageSrc: "https://images.pexels.com/photos/11368690/pexels-photo-11368690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael"
            },
            {
              id: "3",
              name: "Emma",
              handle: "@emmadines",
              testimonial: "Impeccable service and extraordinary food. The wine selection perfectly complemented our meal. Highly recommend!",
              imageSrc: "https://images.pexels.com/photos/6826026/pexels-photo-6826026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma"
            },
            {
              id: "4",
              name: "James",
              handle: "@jamesreviews",
              testimonial: "From the moment we walked in, we felt welcomed. The pasta is handmade and you can taste the difference in every bite.",
              imageSrc: "https://images.pexels.com/photos/3184177/pexels-photo-3184177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James"
            },
            {
              id: "5",
              name: "Lisa",
              handle: "@lisalovesFood",
              testimonial: "A culinary masterpiece! The seafood is incredibly fresh and the desserts are works of art. Will definitely return.",
              imageSrc: "https://images.pexels.com/photos/4262173/pexels-photo-4262173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Featured On"
          description="Recognized by leading food and travel platforms"
          tag="Awards"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/34450955/pexels-photo-34450955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/34450955/pexels-photo-34450955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18424851/pexels-photo-18424851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18937023/pexels-photo-18937023.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/8890930/pexels-photo-8890930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7258491/pexels-photo-7258491.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about dining with us"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "Do you take reservations?",
              content: "Yes, we highly recommend making reservations, especially for weekend dining. You can book online through OpenTable or call us directly."
            },
            {
              id: "2",
              title: "What are your hours?",
              content: "We're open Tuesday through Sunday. Lunch: 11:30 AM - 3:00 PM, Dinner: 5:30 PM - 10:00 PM. We're closed on Mondays."
            },
            {
              id: "3",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely! We offer vegetarian, vegan, and gluten-free options. Please inform us of any allergies when making your reservation."
            },
            {
              id: "4",
              title: "Is there parking available?",
              content: "We offer complimentary valet parking for dinner service. Street parking and nearby parking garages are also available."
            },
            {
              id: "5",
              title: "Do you host private events?",
              content: "Yes, we have a private dining room that accommodates up to 40 guests. Contact us to discuss your special event needs."
            },
            {
              id: "6",
              title: "What's the dress code?",
              content: "We maintain a smart casual dress code. While we don't require formal attire, we ask that guests dress appropriately for our upscale dining environment."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch"
          description="Have questions about reservations, private events, or special dietary needs? We'd love to hear from you."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your inquiry...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Menu", href: "menu" },
                { label: "Reservations", href: "https://opentable.com" },
                { label: "Private Events", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Call Us", href: "tel:+1234567890" },
                { label: "Email", href: "mailto:info@bellavista.com" }
              ]
            }
          ]}
          copyrightText="© 2025 | Bella Vista Restaurant"
        />
      </div>
    </ThemeProvider>
  );
}