export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  areas: string[]
  liveUrl: string
  repoUrl: string
}

export const projects: Project[] = [
  {
    slug: 'sigilife',
    title: 'SigiLife',
    subtitle: 'Spatial interaction & emotional mapping',
    description:
      'A spatial, interaction-driven application for translating intention into visual form. SigiLife allows users to generate sigils from written intentions, associate them with emotional states, and place them within a shared map. The product explores how internal experiences can be expressed, tracked, and revisited through interface design.',
    areas: [
      'Interaction design tied to emotional input',
      'Symbol generation and transformation',
      'Map-based interface systems',
      'Creating a consistent, intentional user experience',
    ],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'favbytes',
    title: 'FavBytes',
    subtitle: 'Personal dining & cocktail tracker',
    description:
      'A personal tracking tool for meals, restaurants, and cocktails worth remembering. FavBytes is designed to make it easy to capture and revisit dining experiences without friction. Users can quickly log dishes, drinks, and locations, building a curated personal record over time.',
    areas: [
      'Fast, low-friction input flows',
      'Clean and minimal interface design',
      'Organization and retrieval of personal data',
      'Practical, repeat-use product design',
    ],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'resolution',
    title: 'Resolution',
    subtitle: 'Conflict resolution & emotional regulation',
    description:
      'A conflict resolution and emotional regulation app featuring MoodBubbles — a simple interactive breathing mechanic where users hold, drag, and place a floating bubble on screen in sync with a 4-7-8 breathing pattern.',
    areas: [
      'Interaction design centered on breathing and pacing',
      'Real-time gesture-based input and control',
      'Emotional state modulation through simple game mechanics',
      'Lightweight, calming UI patterns for high-stress moments',
    ],
    liveUrl: '#',
    repoUrl: '#',
  },
]