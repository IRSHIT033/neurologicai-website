import Image from "next/image";
import { Button } from "@/components/ui/button";

const events = [
  {
    image: "/featured-journey-1.png?height=300&width=500",
    alt: "Lenovo Tech World event",
    title: "Lenovo Tech World 2025",
    description:
      "This event promises groundbreaking discussions on AI advancements, community engagement, and intelligent transformations.",
  },
  {
    image: "/featured-journey-2.png?height=300&width=500",
    alt: "Startup event with audience",
    title: "Honored to be invited among the 50 startups",
    description:
      "We feel delighted to receive an invitation among the top 50 startups on the forefront of AI innovation. This recognition highlights our commitment to advancing neurological research.",
  },
  {
    image: "/featured-journey-3.png?height=300&width=500",
    alt: "Times Business Award ceremony",
    title: "Times Business Award 2024",
    description:
      "We are thrilled and honored to announce that Neurologic AI has been recognized with the Times Business Award 2024!",
  },
];

export default function News() {
  return (
    <main className="min-h-screen scroll-smooth text-white">
      {/* Hero Section */}
      <section className="relative mt-6 flex flex-col justify-center items-center">
        <Image
          src="/news-hero.png"
          alt="Lenovo Tech World event showing 'AI in India for the World' presentation"
          height={800}
          width={1000}
          priority
        />

        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dive Into The Journey With Neurologic AI
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Dive into the Journey with Neurologic AI. Stay updated on our
            research, events, and innovations. Keep pace with the rapidly
            evolving world of AI and neurology
          </p>
          <Button className="bg-purple-700 hover:bg-purple-800 text-white">
            Discover The Our World
          </Button>
        </div>
      </section>

      {/* Weekly Highlights Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-center mb-12">
          Weekly Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className=" rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/weekly-highlight-1.png?height=400&width=600"
                alt="Lenovo Tech World 2025 event"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl h-12 text-center font-semibold mb-4 text-yellow-500">
                Lenovo Tech World 2025
              </h3>
              <p className="text-gray-300 text-center">
                This event promises groundbreaking discussions on AI
                advancements, community engagement, and intelligent
                transformations.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/weekly-highlight-2.png?height=400&width=600"
                alt="Group photo of startup event"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl h-12 text-center font-semibold mb-4 text-yellow-500">
                Honored to be invited among the 50 startups
              </h3>
              <p className="text-gray-300 text-center">
                We feel delighted to receive an invitation among the top 50
                startups on the forefront of AI innovation. This recognition
                highlights our commitment to advancing neurological research and
                market penetration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Journeys Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Journeys
        </h2>
        <div className="grid md:grid-cols-3 w-6xl mx-auto gap-6">
          {events.map((event, index) => (
            <div key={index} className=" rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={event.image}
                  alt={event.alt}
                  layout="fill"
                  className="object-cover object-center w-full h-full rounded-3xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl text-center h-16 font-semibold mb-2 text-yellow-500">
                  {event.title}
                </h3>
                <p className="text-sm text-center text-gray-300">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
