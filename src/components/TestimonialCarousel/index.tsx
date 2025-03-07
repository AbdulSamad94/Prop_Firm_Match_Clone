"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import review from "../../../public/assets/firms_platform_icons/review.png"
import reviewerIcon from "../../../public/assets/firms_platform_icons/reviewer-icon.png"

const testimonials = [
  {
    id: 1,
    name: "Alice W.",
    location: "USA",
    title: "Amazing Experience",
    content:
      "The platform exceeded my expectations and provided excellent service.",
    expandedContent:
      "The platform exceeded my expectations and provided excellent service with outstanding support and valuable insights.",
    rating: 5,
    date: "March 1st, 2025",
    avatar: reviewerIcon,
  },
  {
    id: 2,
    name: "Bob L.",
    location: "UK",
    title: "Outstanding Service",
    content:
      "Their service is exceptional, and the experience was seamless from start to finish.",
    expandedContent:
      "Their service is exceptional, and the experience was seamless from start to finish. I highly recommend this platform to anyone looking for reliable solutions.",
    rating: 5,
    date: "March 2nd, 2025",
    avatar: reviewerIcon,
  },
  {
    id: 3,
    name: "Charlie K.",
    location: "Canada",
    title: "Incredible Platform",
    content: "I found exactly what I needed to boost my trading journey.",
    expandedContent:
      "I found exactly what I needed to boost my trading journey. The intuitive design and user-friendly interface make it a top choice.",
    rating: 5,
    date: "March 3rd, 2025",
    avatar: reviewerIcon,
  },
  {
    id: 4,
    name: "Diana M.",
    location: "Australia",
    title: "Superb Platform",
    content: "This platform connects you with the best firms effortlessly.",
    expandedContent:
      "This platform connects you with the best firms effortlessly. The service and support are unmatched, making it a superb choice for traders.",
    rating: 5,
    date: "March 4th, 2025",
    avatar: reviewerIcon,
  },
  {
    id: 5,
    name: "Ethan R.",
    location: "Germany",
    title: "Exceptional Quality",
    content: "Every detail is polished, providing a seamless experience.",
    expandedContent:
      "Every detail is polished, and the overall experience is seamless. The customer support is top-notch and truly exceptional.",
    rating: 5,
    date: "March 5th, 2025",
    avatar: reviewerIcon,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [isPaused, setIsPaused] = useState(false)
  const [cardWidth, setCardWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
      setCurrentIndex(0) // Reset when visible count changes
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calculate card width based on the carousel container width divided by visibleCount
  useEffect(() => {
    const updateCardWidth = () => {
      if (carouselRef.current) {
        setCardWidth(carouselRef.current.clientWidth / visibleCount)
      }
    }
    updateCardWidth()
    window.addEventListener("resize", updateCardWidth)
    return () => window.removeEventListener("resize", updateCardWidth)
  }, [visibleCount])

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current)
      autoScrollRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex((prev) => {
            const maxIndex = testimonials.length - visibleCount
            return prev >= maxIndex ? 0 : prev + 1
          })
        }
      }, 5000)
    }
    startAutoScroll()
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current)
    }
  }, [isPaused, visibleCount])

  const maxIndex = Math.max(0, testimonials.length - visibleCount)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const [expandedIds, setExpandedIds] = useState<number[]>([])
  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    )
  }

  return (
    <div className=" text-white my-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-pink-500 font-medium mb-2">TRUSTPILOT REVIEWS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted By Professionals
          </h2>
          <div className="flex justify-center items-center">
            <span className="text-emerald-400 mr-2">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.59 8.26H23.41L16.41 13.39L19.03 21.66L12 16.5L4.97 21.66L7.59 13.39L0.59 8.26H9.41L12 0Z" />
              </svg>
            </span>
            <span className="text-2xl font-bold">Trustpilot</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Testimonial Carousel"
        >
          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`,
                width: `${testimonials.length * cardWidth}px`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="p-4"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="bg-[#151314] rounded-lg p-6 min-h-[352px] h-full flex flex-col shadow-lg hover:shadow-2xl transition-shadow">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 mr-3 flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-3">
                      {testimonial.title}
                    </h4>
                    <div className="flex-grow mb-4">
                      {testimonial.expandedContent &&
                      expandedIds.includes(testimonial.id) ? (
                        <p className="text-gray-300">
                          {testimonial.expandedContent}
                        </p>
                      ) : (
                        <p className="text-gray-300">
                          {testimonial.content}
                          {testimonial.expandedContent && (
                            <button
                              onClick={() => toggleExpand(testimonial.id)}
                              className="text-pink-500 ml-1 hover:underline font-medium"
                            >
                              See More
                            </button>
                          )}
                        </p>
                      )}
                    </div>
                    <div className="mt-auto flex items-center gap-4">
                      <Image
                        alt="review-5-star"
                        src={review}
                        
                      />
                      <p className="text-gray-400 text-xs">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
