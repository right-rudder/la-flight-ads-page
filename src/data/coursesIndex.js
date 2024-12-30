const coursesIndex = {
  data: {
    // SEO Header Stuff
    pageTitle:
      "Training Courses | LA Flight Academy",
    pageDescription:
      "Explore LA Flight Academy’s comprehensive training programs, from Private Pilot License to advanced certifications like Instrument Rating, Multi-Engine, and Certified Flight Instructor. Tailored for aspiring pilots and professionals alike, with flexible schedules and expert instruction.",
    pageKeywords:
      "flight training courses Van Nuys, aviation certifications, private to commercial pilot, multi-engine rating training, CFI courses California, aviation school programs",
  
    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/lafa-pilot-programs-index-cover.jpg",
      imageAlt:
        "Photograph of an LA Flight Academy plane flying over mountains",
      headerH1: `Pilot <br class="hidden lg:block" ><span class="bg-gradient-to-br from-primary-700 via-muted-400 to-accent-700 bg-clip-text text-transparent">PROGRAMS</span>`,
      paragraph:
        `Join LA Flight Academy and turn your aviation goals into reality. From your first discovery flight to advanced ratings, we’re here to guide you every step of the way.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "Program Guide",
          link: "/path",
          primary: false,
        },
      ],
    },
  },
};

export default coursesIndex;
