import Image from "next/image";
import { Button } from "@/components/ui/button";

const featuredJourney = [
  {
    image: "/featured-journey-2.png?height=300&width=500",
    alt: "Lenovo Tech World event",
    title: "Honored to be Invited Among the 50 Startups",
    description:
      "We had insightful discussions on the expansive opportunities for AI in the region. The discussions focused on capitalizing on the burgeoning AI landscape in Dubai/UAE, leveraging the robust inter-country trade corridor between India and the UAE, and identifying actionable pathways for rapid market penetration.",
  },
  {
    image: "/whoweare2.png?height=300&width=500",
    alt: "Startup event with audience",
    title:
      "Honored to Receive Excellence in Healthcare Award at Health 2.0 Conference, Dubai 2024",
    description:
      'We are incredibly honored to announce that [Your Company/Team Name] has been awarded the "Excellence in Healthcare Award" at the Health 2.0 Conference in Dubai 2024. This prestigious recognition highlights our dedication to pushing the boundaries of healthcare innovation.',
  },
  {
    image: "/featured-journey-3.png?height=300&width=500",
    alt: "Times Business Award ceremony",
    title: "Honored with Times Business Award 2024",
    description:
      "We are thrilled to announce that [Your Company/Team Name] has been honored with the Times Business Award 2024. This prestigious recognition underscores our dedication to business excellence and innovation",
  },
];

const weeklyHighlights = [
  {
    image: "/weekly-highlight-1.png?height=400&width=600",
    alt: "Lenovo Tech World 2025 event",
    title: "Lenovo Tech World 2025",
    description:
      "This event promises groundbreaking discussions on AI advancements, community engagement, and intelligent transformations.",
  },
  {
    image: "/weekly-highlight-2.png?height=400&width=600",
    alt: "Group photo of startup event",
    title: "Honored to be invited among the 50 startups",
    description:
      "We had insightful discussions on the expansive opportunities for AI in the region. The discussions focused on capitalizing on the burgeoning AI landscape in Dubai/UAE, leveraging the robust inter-country trade corridor between India and the UAE, and identifying actionable pathways for rapid market penetration.",
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
          <h1 className="text-4xl md:text-5xl poppinsTextSemiBold mb-6">
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
        <h2 className="text-4xl poppinsTextBold text-center mb-12">
          Weekly Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {weeklyHighlights.map((event, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl h-12 text-center poppinsTextMedium font-bold mb-4 text-yellow-500">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-center">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Journeys Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Journeys
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto gap-6">
          {featuredJourney.map((event, index) => (
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
                <h3 className="text-xl text-center min-h-24 font-semibold mb-2 text-yellow-500">
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
