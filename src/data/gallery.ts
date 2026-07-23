export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  date: string;
  likes?: number;
  location?: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "1",
    title: "AI Research & Future Tech",
    caption: "Exploring deep neural network architectures and next-gen AI models.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    date: "2026-07-20",
    likes: 42,
    location: "Seoul, Korea",
  },
  {
    id: "2",
    title: "Semiconductor Wafer Inspection",
    caption: "Cleanroom memories and advanced silicon chip design workflows.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    date: "2026-07-15",
    likes: 38,
    location: "Pyeongtaek Lab",
  },
  {
    id: "3",
    title: "Intellectual Property & Patents",
    caption: "Analyzing patent claims for cutting-edge technology innovations.",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    date: "2026-07-10",
    likes: 56,
    location: "Patent Office",
  },
  {
    id: "4",
    title: "Algorithm & Math Study",
    caption: "Fourier transforms, graph theory, and mathematical optimization.",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    date: "2026-07-05",
    likes: 29,
    location: "Study Room",
  },
  {
    id: "5",
    title: "Vibe Coding Workspace",
    caption: "Modern IDE setup for fast AI prototyping and blog maintenance.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "2026-07-01",
    likes: 61,
    location: "Workspace",
  },
  {
    id: "6",
    title: "Coffee & Code Notes",
    caption: "Late night brainstorming sessions with espresso.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-25",
    likes: 47,
    location: "Seoul",
  },
];
