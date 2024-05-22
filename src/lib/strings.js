export const strings = {
  // Components
  // Navbar
  navbar: {
    navItems: {
      title: "Navigation Menu",
      about: {
        title: "About",
        description: "Curated creations from Starry Shivam's Open-Source journey. Explore, contribute, and innovate!",
        org: "PoolOfTears",
        info: [
          {
            title: "Who we are",
            description:
              "We are a team of tech enthusiasts who are passionate about technology and its impact on our lives.",
          },
          {
            title: "What we do",
            description:
              "We build apps and interesting stuff. We are currently working on a few projects that we hope will help you in your daily life.",
          },
          {
            title: "Why we do it",
            description:
              "We believe that technology can be a force for good and can help us solve some of the world's most pressing problems. We want to be a part of that change.",
          },
        ],
      },
      projects: {
        title: "Projects",
        project: [
          {
            title: "Myne",
            description: "An android app to download & read ebooks from Project Gutenberg, built with Jetpack Compose.",
            link: "/#myne",
          },
          {
            title: "Greenstash",
            description:
              "A simple FOSS android app to help you plan and manage your savings goals easily and establish the habit of saving money.",
            link: "/#greenStash",	
            },
        ],
      },
      contact: {
        title: "Contact",
        description: "Get in touch with us!",
        socials: [
          {
            title: "Github",
            description: "Find current issues, contribute, and explore the codebase of our projects on Github.",
            link: "https://github.com/Pool-Of-Tears",
          },
          {
            title: "Telegram",
            description:
              "Join our Telegram group to get updates about our projects, ask questions, and share your thoughts with us.",
            link: "https://t.me/PotApps",
          },
        ],
      },
      theme: {
        title: "Toggle theme",
        light: "Light",
        dark: "Dark",
        system: "System",
      },
    },
  },
  // Drawers
  greenStash: {
    title: "Greenstash",
    description: "Set your budget goals with Greenstash!",
    avatarFallback: "Greenstash Logo",
    fdroidLink: "https://f-droid.org/packages/com.starry.greenstash/",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.starry.greenstash",
    features: [
      "Clean & beautiful UI based on Google's material design three guidelines.",
      "Add images to your saving goals to keep you motivated!",
      "View how much you need to save daily/weekly/monthly to achieve your goal before deadline.",
      "View detailed transaction (withdraw/deposit) history.",
      "Get daily, semi-weekly or weekly reminders for your saving goals based on goal priority.",
      "Supports around 100+ local currency symbols.",
      "Inbuilt biometric app lock to keep your financial data safe and secure.",
      "Fully offline, greenstash doesn't require internet permission to work.",
      "Compatible with Android 7.0 and above (API 24+)",
      "Supports Material You theming in devices running on Android 12+",
      "MAD: UI and logic written with pure Kotlin. Single activity, no fragments, only composable destinations.",
    ],
  },
  myne: {
    title: "Myne",
    description: "Discover new reads with Myne!",
    avatarFallback: "Myne Logo",
    fdroidLink: "https://f-droid.org/packages/com.starry.myne/",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.starry.myne",
    features: [
      "Clean & beautiful UI based on Google's material design three guidelines.",
      "Browse and download over 70k free ebooks available in multiple languages and updated daily.",
      "Comes with inbuilt ebook reader while also having an option to use third-party ebook readers.",
      "Compatible with Android 8.0 and above (API 26+)",
      "Supports Material You theming in devices running on Android 12+",
      "Comes in both light and dark mode.",
      "MAD: UI and logic written with pure Kotlin. Single activity, no fragments, only composable destinations.",
    ],
  },
  changelog: {
    title: "What's New",
    description: "Changelog of",
  },
  // Pages
  HomePage: {
    title: "Pool of Tears",
    description:
      "Making beautiful, open-source & privacy friendly Android applications which makes your life easier :)",
    feat: ["Featured in", "Features"],
    screenshots: "Screenshots",
  },
  NotFoundPage: {
    title: "404: Page Not Found",
    description: "We're sorry, but the page you were looking for doesn't exist.",
    avatarFallback: "Cat Not Found",
  },
};
