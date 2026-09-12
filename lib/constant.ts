export type EventItems = {
  image : string;
  title: string;
  slug:string;
  location:string;
  date:string;
  time:string;
}

export const events: EventItems[] = [
  {
    title: "React Summit 2026",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "June 18-20, 2026",
    time: "09:00 AM - 06:00 PM",
  },
  {
    title: "AI/ML Hackathon by Google",
    image: "/images/event2.png",
    slug: "aiml-hackathon-google-2026",
    location: "Mountain View, CA",
    date: "July 12-14, 2026",
    time: "10:00 AM - 08:00 PM",
  },
  {
    title: "NodeConf EU 2026",
    image: "/images/event3.png",
    slug: "nodeconf-eu-2026",
    location: "Lisbon, Portugal",
    date: "September 5-7, 2026",
    time: "09:30 AM - 05:30 PM",
  },
  {
    title: "Next.js Conf",
    image: "/images/event4.png",
    slug: "nextjs-conf-2026",
    location: "San Francisco, CA",
    date: "October 22, 2026",
    time: "10:00 AM - 04:00 PM",
  },
  {
    title: "Web3 Builder Summit",
    image: "/images/event5.png",
    slug: "web3-builder-summit-2026",
    location: "Singapore",
    date: "November 8-10, 2026",
    time: "09:00 AM - 06:00 PM",
  },
  {
    title: "TypeScript Congress",
    image: "/images/event6.png",
    slug: "typescript-congress-2026",
    location: "Berlin, Germany",
    date: "December 3-4, 2026",
    time: "09:00 AM - 05:00 PM",
  },
];
