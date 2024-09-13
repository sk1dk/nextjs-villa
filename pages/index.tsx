import Link from 'next/link'
import { useState } from 'react'
import { Calendar, MapPin, Users, Wifi, Coffee, Waves, ChevronRight, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function VillaWebsite() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-screen">
        <img src="/placeholder.svg?height=1080&width=1920" alt="Villa exterior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Luxury Villa Retreat</h1>
          <p className="text-xl md:text-2xl mb-8">Experience paradise in our exclusive villa</p>
          <Link href="/book-now">
            <Button size="lg">Book Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
