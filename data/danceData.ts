export interface Branch {
  id: string;
  name: string;
  area: string;
  tagline: string;
  address: string;
  landmark: string;
  phone: string;
  timings: string;
  specs: {
    sqft: string;
    studios: number;
    flooring: string;
    sound: string;
    features: string[];
  };
  mapCoords: {
    lat: number;
    lng: number;
  };
  directionsUrl: string;
}

export interface DanceStyle {
  id: string;
  name: string;
  category: 'street' | 'contemporary' | 'classical' | 'fitness' | 'activity' | 'kids';
  tagline: string;
  description: string;
  curriculum: string[];
  intensity: 'Medium' | 'High' | 'Explosive' | 'Balanced';
  suitability: string;
  durationPerSession: string;
  leadInstructors: string[];
  gradient: string;
  accentColor: string;
}

export interface Workshop {
  id: string;
  title: string;
  artist: string;
  artistBio: string;
  date: string;
  time: string;
  branchId: string;
  branchName: string;
  style: string;
  level: 'All Levels' | 'Beginner-Friendly' | 'Intermediate / Advanced' | 'Masterclass';
  fee: number;
  totalSeats: number;
  remainingSeats: number;
  isSellingFast?: boolean;
  highlight: string;
}

export interface ScheduleItem {
  id: string;
  title: string;
  styleId: string;
  styleName: string;
  category: 'dance' | 'fitness' | 'kids' | 'mind';
  branchId: string;
  branchName: string;
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  startTime: string;
  endTime: string;
  instructor: string;
  studioRoom: string;
  level: 'Open' | 'Beginner' | 'Intermediate' | 'Advanced';
  spotsAvailable: number;
}

export interface RegularBatch {
  id: string;
  title: string;
  styleName: string;
  category: string;
  instructor: string;
  instructorRole: string;
  days: string;
  time: string;
  branchId: string;
  branchName: string;
  feeMonthly: number;
  feeQuarterly: number;
  level: string;
  frequency: string;
  enrolledRatio: string;
  badge?: string;
}

export interface CommunityPost {
  id: string;
  author: string;
  avatarSeed: string;
  tag: string;
  branch: string;
  timeAgo: string;
  title: string;
  content: string;
  likes: number;
  replies: number;
}

export const BRANCHES: Branch[] = [
  {
    id: 'salt-lake',
    name: 'Mad Movers Central',
    area: 'Salt Lake, Sector V',
    tagline: 'Flagship Urban & Activity Arena',
    address: 'Plot A-4, Broadway Enclave, Sector V, Bidhannagar, Kolkata 700091',
    landmark: 'Adjacent to RDB Cinemas & Metro Gate 2',
    phone: '+91 98310 44521',
    timings: 'Mon – Sun: 6:30 AM – 10:00 PM',
    specs: {
      sqft: '3,800 sq.ft',
      studios: 2,
      flooring: 'Imported SpringFlex Oak Dance Floor',
      sound: 'JBL Pro Series 360° Acoustic Audio',
      features: ['Air-Conditioned', 'Chess & Strategy Zone', 'Changing Rooms', 'Vocal & Music Pod', 'Shower Lounge'],
    },
    mapCoords: { lat: 22.5802, lng: 88.4287 },
    directionsUrl: 'https://maps.google.com/?q=Salt+Lake+Sector+V+Kolkata',
  },
  {
    id: 'park-street',
    name: 'Mad Movers The Loft',
    area: 'Park Street',
    tagline: 'Contemporary & Intensive Studio',
    address: '42B Park Mansion, 3rd Floor, Park Street, Kolkata 700016',
    landmark: 'Opposite Flurys, Above Heritage Hall',
    phone: '+91 98310 44522',
    timings: 'Mon – Sun: 7:00 AM – 9:30 PM',
    specs: {
      sqft: '3,100 sq.ft',
      studios: 2,
      flooring: 'Shock-Absorbing Harlequin Sprung Floor',
      sound: 'Bose F1 Model Array',
      features: ['Full Mirror Walls', 'Aerial Rigging Points', 'Chillout Café', 'Acoustic Soundproofing'],
    },
    mapCoords: { lat: 22.5511, lng: 88.3524 },
    directionsUrl: 'https://maps.google.com/?q=Park+Street+Kolkata',
  },
  {
    id: 'new-town',
    name: 'Mad Movers Arena',
    area: 'New Town, Action Area I',
    tagline: 'Youth, Kids & Movement Campus',
    address: 'Eco Vista Arcade, 2nd Floor, Major Arterial Road, New Town, Kolkata 700156',
    landmark: 'Near Biswa Bangla Gate & City Centre 2',
    phone: '+91 98310 44523',
    timings: 'Mon – Sun: 6:30 AM – 10:00 PM',
    specs: {
      sqft: '4,400 sq.ft',
      studios: 3,
      flooring: 'Heavy-Duty Sprung Maplewood',
      sound: 'Yamaha Custom Concert Audio',
      features: ['Kids Acrobatics Soft Mats', 'Chess Master Tournament Tables', 'Parent Viewing Gallery', 'Free Parking'],
    },
    mapCoords: { lat: 22.5937, lng: 88.4697 },
    directionsUrl: 'https://maps.google.com/?q=New+Town+Action+Area+I+Kolkata',
  },
  {
    id: 'south-city',
    name: 'Mad Movers Sanctum',
    area: 'Ballygunge / Prince Anwar Shah',
    tagline: 'Classical, Yoga & Wellness Studio',
    address: '77 Southern Avenue, 1st Floor, Near Lake Kali Bari, Kolkata 700029',
    landmark: 'Walking distance from Rabindra Sarobar Metro',
    phone: '+91 98310 44524',
    timings: 'Mon – Sun: 6:00 AM – 9:00 PM',
    specs: {
      sqft: '2,600 sq.ft',
      studios: 2,
      flooring: 'Natural Teakwood Classical Sprung Surface',
      sound: 'Harman Kardon Spatial Audio',
      features: ['Kathak Ghungroo Acoustic Pad', 'Hot Yoga Ventilation', 'Meditation Corner', 'Herbal Refreshments'],
    },
    mapCoords: { lat: 22.5126, lng: 88.3639 },
    directionsUrl: 'https://maps.google.com/?q=Southern+Avenue+Kolkata',
  },
];

export const DANCE_STYLES: DanceStyle[] = [
  {
    id: 'hip-hop',
    name: 'Hip-Hop & Urban Street',
    category: 'street',
    tagline: 'Old School Grooves, Popping, Freezes & Explosive Choreography',
    description: 'Master authentic street foundations: party dances, bounce, rocking, body isolations, and urban choreography. Built for high energy, musicality, and raw self-expression.',
    curriculum: ['Rhythm & Bounce Foundational Grooves', 'Isolations, Waves & Popping Hits', 'Musicality & Pocket Pocketing', 'Stage Routine & Cypher Confidence'],
    intensity: 'High',
    suitability: 'Ages 7 to 55+ | Beginners to Advanced',
    durationPerSession: '60 - 75 Mins',
    leadInstructors: ['Rohan "Rox" Sengupta', 'Ishan "Blaze" Guha'],
    gradient: 'from-amber-500/20 via-purple-900/40 to-black',
    accentColor: '#f59e0b',
  },
  {
    id: 'bollyhop',
    name: 'Bolly-Hop & Commercial',
    category: 'street',
    tagline: 'High-Octane Bollywood Energy Fused with Tight Street Swag',
    description: 'The ultimate dance craze! Cinematic Bollywood beats fused with hard-hitting hip-hop footwork, viral hook-steps, and unmatched stage drama.',
    curriculum: ['Bollywood Hook-Step Breakdowns', 'Urban Hip-Hop Infusions', 'Camera Presence & Facial Dynamics', 'Party & Wedding Ready Choreography'],
    intensity: 'Explosive',
    suitability: 'All Ages | No prior dance experience needed',
    durationPerSession: '60 Mins',
    leadInstructors: ['Kirti Malhotra', 'Palak Bose'],
    gradient: 'from-fuchsia-600/20 via-purple-950/50 to-black',
    accentColor: '#d946ef',
  },
  {
    id: 'contemporary',
    name: 'Contemporary & Lyrical',
    category: 'contemporary',
    tagline: 'Fluid Floorwork, Emotional Gravitas & Physical Storytelling',
    description: 'Explore the connection between mind, breath, and motion. Blends classical precision with organic release technique, suspension, and powerful floor transitions.',
    curriculum: ['Spine Articulation & Release Mechanics', 'Low-Impact Floor Transitions & Rolls', 'Lyrical Emotional Storytelling', 'Contact Improvisation & Partner Work'],
    intensity: 'Medium',
    suitability: 'Teens & Adults | Enhances flexibility and mental calm',
    durationPerSession: '75 Mins',
    leadInstructors: ['Prerna Mukherjee', 'Arjun Sen'],
    gradient: 'from-indigo-600/20 via-purple-900/40 to-black',
    accentColor: '#818cf8',
  },
  {
    id: 'kathak',
    name: 'Kathak & Semi-Classical',
    category: 'classical',
    tagline: 'Lightning Tatkar, Elegant Chakkars & Poetic Abhinaya',
    description: 'Immerse yourself in India’s venerable classical storytelling dance. Develop intricate rhythmic footwork (tatkar), pirouettes (chakkars), and evocative expressions.',
    curriculum: ['Teentaal & Rhythmic Footwork (Tatkar)', 'Graceful Chakkars (Spins) & Padhant', 'Hastak (Hand Gestures) & Anga Shuddhi', 'Abhinaya & Thumri Story Pieces'],
    intensity: 'Balanced',
    suitability: 'All Ages (From Age 5 to Seniors)',
    durationPerSession: '60 - 90 Mins',
    leadInstructors: ['Vidushi Ananya Roy', 'Deblina Mukherjee'],
    gradient: 'from-amber-600/20 via-rose-950/40 to-black',
    accentColor: '#fbbf24',
  },
  {
    id: 'power-yoga',
    name: 'Power Yoga & Mind-Body',
    category: 'fitness',
    tagline: 'Core Strength, Deep Flexibility & Yogic Mind Balance',
    description: 'As represented by the meditative yogi in our crest: awaken your inner stillness while building bulletproof core resilience, spine health, and mental focus.',
    curriculum: ['Dynamic Vinyasa Flow Sequences', 'Core Stabilization & Inversion Prep', 'Deep Fascial Mobility & Joint Health', 'Pranayama & Sound Meditation'],
    intensity: 'Medium',
    suitability: 'Working Professionals, Fitness Seekers & Dancers',
    durationPerSession: '60 Mins',
    leadInstructors: ['Swami Nirvan / Coach Tanay', 'Rupali Roy'],
    gradient: 'from-emerald-600/20 via-purple-950/40 to-black',
    accentColor: '#34d399',
  },
  {
    id: 'zumba',
    name: 'Zumba & Dance Fitness',
    category: 'fitness',
    tagline: 'Torch 600+ Calories While Partying to Latin & Global Beats',
    description: 'A sweat-dripping cardiovascular fiesta! Merengue, salsa, reggaeton, and cumbia mixed into easy-to-follow interval routines that keep you grinning.',
    curriculum: ['High-Energy Interval Cardio', 'Latin Rhythms (Salsa, Cumbia, Bachata)', 'Total-Body Muscle Toning', 'Cool-Down Mobility Stretch'],
    intensity: 'High',
    suitability: 'Weight Loss, Cardio Health, Stress Relief',
    durationPerSession: '60 Mins',
    leadInstructors: ['Shubham Mondal', 'Priya Nambiar'],
    gradient: 'from-yellow-500/20 via-orange-950/40 to-black',
    accentColor: '#f59e0b',
  },
  {
    id: 'kids-special',
    name: 'Kids Creative Movement & Dance',
    category: 'kids',
    tagline: 'Confidence, Coordination & Joyful Stage Presence',
    description: 'Specially engineered for growing bodies and creative minds! Builds posture, musical timing, team camaraderie, and stage bravery without stress.',
    curriculum: ['Fun Rhythm Games & Body Awareness', 'Kids Hip-Hop & Free Movement', 'Confidence & Annual Showcase Routines', 'Acrobatic Fundamentals & Balance'],
    intensity: 'Balanced',
    suitability: 'Age Groups: 4–7 years & 8–13 years',
    durationPerSession: '60 Mins',
    leadInstructors: ['Palak Bose', 'Kirti Malhotra'],
    gradient: 'from-pink-500/20 via-purple-900/40 to-black',
    accentColor: '#ec4899',
  },
  {
    id: 'chess-mind',
    name: 'Chess Masters & Strategy Hub',
    category: 'activity',
    tagline: 'Tactics, Calculation & Mental Stamina (From our Crest)',
    description: 'Proudly featured in the Mad Movers emblem: we balance athletic dance movement with razor-sharp mind sports. FIDE-rated coaches, game analysis, and competitive tactical batches.',
    curriculum: ['Opening Principles & Positional Play', 'Tactical Combinations & Endgame Precision', 'Clock Management & Tournament Preparation', 'Concentration & Analytical Thinking'],
    intensity: 'Balanced',
    suitability: 'Ages 5 to 70+ | Beginners to Tournament Rated Players',
    durationPerSession: '75 Mins',
    leadInstructors: ['Coach Debabrata (FIDE 2040+)', 'Anik Banerjee'],
    gradient: 'from-violet-600/20 via-slate-900/60 to-black',
    accentColor: '#a78bfa',
  },
  {
    id: 'music-rhythm',
    name: 'Rhythm Lab & Vocal Percussion',
    category: 'activity',
    tagline: 'Beatbox, Cajon, Rhythm Reading & Stage Cadence',
    description: 'Inspired by the musical notes embedded in our logo. Dancers who understand rhythm become unforgettable movers. Learn polyrhythms, acoustic cajon beats, and vocal timing.',
    curriculum: ['Beat Counting & Time Signatures', 'Cajon & Hand Percussion Foundations', 'Body Percussion & Konnakol Rhythms', 'Live Music-Dance Collaboration'],
    intensity: 'Medium',
    suitability: 'Open to All Dancers, Musicians & Creators',
    durationPerSession: '60 Mins',
    leadInstructors: ['Soumik Das', 'Joydeep Pal'],
    gradient: 'from-amber-500/20 via-purple-950/50 to-black',
    accentColor: '#fbbf24',
  },
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'ws-1',
    title: 'Urban Grooves & Speed Choreography',
    artist: 'Harsh Kumar',
    artistBio: 'Renowned Urban Choreographer & Dance Plus Finalist',
    date: 'Saturday, 18 Oct',
    time: '4:00 PM – 7:00 PM',
    branchId: 'salt-lake',
    branchName: 'Mad Movers Central (Salt Lake)',
    style: 'Hip-Hop / Urban',
    level: 'All Levels',
    fee: 899,
    totalSeats: 45,
    remainingSeats: 6,
    isSellingFast: true,
    highlight: 'Learn exclusive stage routine + 4K videography shoot included',
  },
  {
    id: 'ws-2',
    title: 'Fluidity & Contemporary Floor Acrobatics',
    artist: 'Nisarg Trivedi',
    artistBio: 'International Contemporary Artist & Movement Educator',
    date: 'Sunday, 19 Oct',
    time: '11:00 AM – 2:00 PM',
    branchId: 'park-street',
    branchName: 'Mad Movers The Loft (Park Street)',
    style: 'Contemporary Release',
    level: 'Intermediate / Advanced',
    fee: 1199,
    totalSeats: 35,
    remainingSeats: 4,
    isSellingFast: true,
    highlight: 'Zero-impact slide mechanics & emotional lyrical piece',
  },
  {
    id: 'ws-3',
    title: 'Bolly-Hop Swag & Hook-Step Drill',
    artist: 'Rudra Barve',
    artistBio: 'Bollywood Commercial Choreographer (Mumbai)',
    date: 'Saturday, 25 Oct',
    time: '5:00 PM – 8:00 PM',
    branchId: 'new-town',
    branchName: 'Mad Movers Arena (New Town)',
    style: 'Bolly-Hop',
    level: 'All Levels',
    fee: 799,
    totalSeats: 50,
    remainingSeats: 14,
    highlight: 'High energy festival track choreography with camera angles',
  },
  {
    id: 'ws-4',
    title: 'Kathak Pirouettes (Chakkar) Masterclass',
    artist: 'Rajeshwari Sharma',
    artistBio: 'National Sangeet Natak Akademi Youth Fellow',
    date: 'Sunday, 26 Oct',
    time: '9:30 AM – 12:30 PM',
    branchId: 'south-city',
    branchName: 'Mad Movers Sanctum (Ballygunge)',
    style: 'Kathak Intensive',
    level: 'Beginner-Friendly',
    fee: 850,
    totalSeats: 30,
    remainingSeats: 9,
    highlight: 'Spins biomechanics, balance spotting, and live tabla accompaniment',
  },
];

export const SCHEDULE: ScheduleItem[] = [
  // Monday
  {
    id: 'sch-m1',
    title: 'Sunrise Vinyasa & Core Awakening',
    styleId: 'power-yoga',
    styleName: 'Power Yoga',
    category: 'fitness',
    branchId: 'salt-lake',
    branchName: 'Salt Lake',
    day: 'Mon',
    startTime: '07:00 AM',
    endTime: '08:00 AM',
    instructor: 'Coach Tanay',
    studioRoom: 'Studio A (Lotus)',
    level: 'Open',
    spotsAvailable: 8,
  },
  {
    id: 'sch-m2',
    title: 'Kids Foundational Movement',
    styleId: 'kids-special',
    styleName: 'Kids Special',
    category: 'kids',
    branchId: 'salt-lake',
    branchName: 'Salt Lake',
    day: 'Mon',
    startTime: '05:00 PM',
    endTime: '06:00 PM',
    instructor: 'Palak Bose',
    studioRoom: 'Studio B',
    level: 'Beginner',
    spotsAvailable: 4,
  },
  {
    id: 'sch-m3',
    title: 'Urban Hip-Hop Grooves & Bounce',
    styleId: 'hip-hop',
    styleName: 'Hip-Hop',
    category: 'dance',
    branchId: 'salt-lake',
    branchName: 'Salt Lake',
    day: 'Mon',
    startTime: '06:30 PM',
    endTime: '07:45 PM',
    instructor: 'Rohan "Rox"',
    studioRoom: 'Studio A (Main)',
    level: 'Beginner',
    spotsAvailable: 6,
  },
  {
    id: 'sch-m4',
    title: 'Bolly-Hop Commercial Beats',
    styleId: 'bollyhop',
    styleName: 'Bolly-Hop',
    category: 'dance',
    branchId: 'park-street',
    branchName: 'Park Street',
    day: 'Mon',
    startTime: '07:00 PM',
    endTime: '08:15 PM',
    instructor: 'Kirti Malhotra',
    studioRoom: 'Studio Loft',
    level: 'Open',
    spotsAvailable: 5,
  },
  // Tuesday
  {
    id: 'sch-t1',
    title: 'Zumba Calorie Crusher Party',
    styleId: 'zumba',
    styleName: 'Zumba Fitness',
    category: 'fitness',
    branchId: 'new-town',
    branchName: 'New Town',
    day: 'Tue',
    startTime: '08:00 AM',
    endTime: '09:00 AM',
    instructor: 'Shubham Mondal',
    studioRoom: 'Studio Arena 1',
    level: 'Open',
    spotsAvailable: 12,
  },
  {
    id: 'sch-t2',
    title: 'Chess Tactics & Game Simulation',
    styleId: 'chess-mind',
    styleName: 'Chess Masters',
    category: 'mind',
    branchId: 'new-town',
    branchName: 'New Town',
    day: 'Tue',
    startTime: '05:30 PM',
    endTime: '06:45 PM',
    instructor: 'Coach Debabrata (FIDE)',
    studioRoom: 'Mind Sports Lab',
    level: 'Beginner',
    spotsAvailable: 5,
  },
  {
    id: 'sch-t3',
    title: 'Contemporary Floor Mechanics',
    styleId: 'contemporary',
    styleName: 'Contemporary',
    category: 'dance',
    branchId: 'park-street',
    branchName: 'Park Street',
    day: 'Tue',
    startTime: '06:30 PM',
    endTime: '07:45 PM',
    instructor: 'Prerna Mukherjee',
    studioRoom: 'Studio Loft',
    level: 'Intermediate',
    spotsAvailable: 7,
  },
  {
    id: 'sch-t4',
    title: 'Kathak Tatkar & Rhythm Foundations',
    styleId: 'kathak',
    styleName: 'Kathak Classical',
    category: 'dance',
    branchId: 'south-city',
    branchName: 'South City',
    day: 'Tue',
    startTime: '06:00 PM',
    endTime: '07:15 PM',
    instructor: 'Vidushi Ananya Roy',
    studioRoom: 'Sanctum Shala',
    level: 'Beginner',
    spotsAvailable: 6,
  },
  // Wednesday
  {
    id: 'sch-w1',
    title: 'Hip-Hop Isolations & Footwork Drills',
    styleId: 'hip-hop',
    styleName: 'Hip-Hop',
    category: 'dance',
    branchId: 'salt-lake',
    branchName: 'Salt Lake',
    day: 'Wed',
    startTime: '06:30 PM',
    endTime: '07:45 PM',
    instructor: 'Ishan "Blaze"',
    studioRoom: 'Studio A (Main)',
    level: 'Intermediate',
    spotsAvailable: 5,
  },
  {
    id: 'sch-w2',
    title: 'Evening Sunset Yoga & Pranayama',
    styleId: 'power-yoga',
    styleName: 'Power Yoga',
    category: 'fitness',
    branchId: 'south-city',
    branchName: 'South City',
    day: 'Wed',
    startTime: '07:00 PM',
    endTime: '08:00 PM',
    instructor: 'Rupali Roy',
    studioRoom: 'Sanctum Shala',
    level: 'Open',
    spotsAvailable: 9,
  },
  // Thursday
  {
    id: 'sch-th1',
    title: 'Ladies Morning Bolly-Fitness',
    styleId: 'bollyhop',
    styleName: 'Bolly-Hop',
    category: 'fitness',
    branchId: 'salt-lake',
    branchName: 'Salt Lake',
    day: 'Thu',
    startTime: '10:00 AM',
    endTime: '11:00 AM',
    instructor: 'Kirti Malhotra',
    studioRoom: 'Studio A',
    level: 'Beginner',
    spotsAvailable: 7,
  },
  {
    id: 'sch-th2',
    title: 'Rhythm Lab & Cajon Jam Session',
    styleId: 'music-rhythm',
    styleName: 'Rhythm Lab',
    category: 'mind',
    branchId: 'salt-lake',
    branchName: 'Salt Lake',
    day: 'Thu',
    startTime: '06:00 PM',
    endTime: '07:00 PM',
    instructor: 'Soumik Das',
    studioRoom: 'Acoustic Pod',
    level: 'Open',
    spotsAvailable: 6,
  },
  {
    id: 'sch-th3',
    title: 'Thursday Urban Regulars',
    styleId: 'hip-hop',
    styleName: 'Hip-Hop',
    category: 'dance',
    branchId: 'park-street',
    branchName: 'Park Street',
    day: 'Thu',
    startTime: '07:15 PM',
    endTime: '08:30 PM',
    instructor: 'Nikunj Luharuka',
    studioRoom: 'Studio Loft',
    level: 'Advanced',
    spotsAvailable: 3,
  },
  // Friday
  {
    id: 'sch-f1',
    title: 'Friday Dance Party & Cypher Jam',
    styleId: 'hip-hop',
    styleName: 'Open Style Jam',
    category: 'dance',
    branchId: 'salt-lake',
    branchName: 'Salt Lake',
    day: 'Fri',
    startTime: '07:00 PM',
    endTime: '08:30 PM',
    instructor: 'All Instructors',
    studioRoom: 'Main Arena',
    level: 'Open',
    spotsAvailable: 20,
  },
  // Saturday
  {
    id: 'sch-sa1',
    title: 'Weekend Kids Advanced Academy',
    styleId: 'kids-special',
    styleName: 'Kids Special',
    category: 'kids',
    branchId: 'new-town',
    branchName: 'New Town',
    day: 'Sat',
    startTime: '10:00 AM',
    endTime: '11:15 AM',
    instructor: 'Palak Bose',
    studioRoom: 'Studio Arena 1',
    level: 'Intermediate',
    spotsAvailable: 5,
  },
  {
    id: 'sch-sa2',
    title: 'Chess Tournament Preparation',
    styleId: 'chess-mind',
    styleName: 'Chess Masters',
    category: 'mind',
    branchId: 'salt-lake',
    branchName: 'Salt Lake',
    day: 'Sat',
    startTime: '03:30 PM',
    endTime: '05:00 PM',
    instructor: 'Coach Debabrata',
    studioRoom: 'Strategy Suite',
    level: 'Intermediate',
    spotsAvailable: 4,
  },
  {
    id: 'sch-sa3',
    title: 'Intensive Bollywood Hook-Steps',
    styleId: 'bollyhop',
    styleName: 'Bolly-Hop',
    category: 'dance',
    branchId: 'park-street',
    branchName: 'Park Street',
    day: 'Sat',
    startTime: '05:00 PM',
    endTime: '06:15 PM',
    instructor: 'Kirti Malhotra',
    studioRoom: 'Studio Loft',
    level: 'Open',
    spotsAvailable: 6,
  },
  // Sunday
  {
    id: 'sch-su1',
    title: 'Masterclass Series & Guest Slots',
    styleId: 'hip-hop',
    styleName: 'Urban Street',
    category: 'dance',
    branchId: 'salt-lake',
    branchName: 'Salt Lake',
    day: 'Sun',
    startTime: '11:00 AM',
    endTime: '01:00 PM',
    instructor: 'Guest Masters',
    studioRoom: 'Main Arena',
    level: 'Open',
    spotsAvailable: 15,
  },
  {
    id: 'sch-su2',
    title: 'Sunday Kathak Chakkars & Abhinaya',
    styleId: 'kathak',
    styleName: 'Kathak Classical',
    category: 'dance',
    branchId: 'south-city',
    branchName: 'South City',
    day: 'Sun',
    startTime: '04:30 PM',
    endTime: '06:00 PM',
    instructor: 'Vidushi Ananya Roy',
    studioRoom: 'Sanctum Shala',
    level: 'Open',
    spotsAvailable: 7,
  },
];

export const REGULAR_BATCHES: RegularBatch[] = [
  {
    id: 'rb-1',
    title: 'Urban Hip-Hop Beginners',
    styleName: 'Hip-Hop',
    category: 'Street Dance',
    instructor: 'Rohan "Rox" Sengupta',
    instructorRole: 'Head of Street Choreography',
    days: 'Mon & Wed',
    time: '6:30 PM – 7:45 PM',
    branchId: 'salt-lake',
    branchName: 'Salt Lake Central',
    feeMonthly: 2500,
    feeQuarterly: 6800,
    level: 'Beginner',
    frequency: '2 Sessions / Week',
    enrolledRatio: '18 / 22 Filled',
    badge: 'Popular',
  },
  {
    id: 'rb-2',
    title: 'Nikunj Advanced Urban Crew',
    styleName: 'Hip-Hop & Open Style',
    category: 'Crew Intensive',
    instructor: 'Nikunj Luharuka',
    instructorRole: 'Crew Director & Battle Champion',
    days: 'Tue & Thu',
    time: '7:15 PM – 8:30 PM',
    branchId: 'park-street',
    branchName: 'Park Street Loft',
    feeMonthly: 2800,
    feeQuarterly: 7600,
    level: 'Advanced',
    frequency: '2 Sessions / Week',
    enrolledRatio: '19 / 20 Filled',
    badge: 'Almost Full',
  },
  {
    id: 'rb-3',
    title: 'Bolly-Hop Commercial Fiesta',
    styleName: 'Bolly-Hop',
    category: 'Commercial',
    instructor: 'Kirti Malhotra',
    instructorRole: 'Bollywood Stylist',
    days: 'Fri & Sat',
    time: '6:00 PM – 7:15 PM',
    branchId: 'salt-lake',
    branchName: 'Salt Lake Central',
    feeMonthly: 2400,
    feeQuarterly: 6500,
    level: 'All Levels',
    frequency: '2 Sessions / Week',
    enrolledRatio: '22 / 25 Filled',
    badge: 'Trending',
  },
  {
    id: 'rb-4',
    title: 'Contemporary Floorwork & Flow',
    styleName: 'Contemporary',
    category: 'Modern Dance',
    instructor: 'Prerna Mukherjee',
    instructorRole: 'Trained at Terence Lewis Dance Academy',
    days: 'Wed & Fri',
    time: '6:00 PM – 7:15 PM',
    branchId: 'park-street',
    branchName: 'Park Street Loft',
    feeMonthly: 2600,
    feeQuarterly: 7200,
    level: 'Intermediate',
    frequency: '2 Sessions / Week',
    enrolledRatio: '14 / 18 Filled',
  },
  {
    id: 'rb-5',
    title: 'Kathak Classical Traditions',
    styleName: 'Kathak',
    category: 'Indian Classical',
    instructor: 'Vidushi Ananya Roy',
    instructorRole: 'Gharana Master & Scholar',
    days: 'Tue & Thu',
    time: '5:30 PM – 6:45 PM',
    branchId: 'south-city',
    branchName: 'Ballygunge Sanctum',
    feeMonthly: 2500,
    feeQuarterly: 6800,
    level: 'Beginner to Intermediate',
    frequency: '2 Sessions / Week',
    enrolledRatio: '15 / 16 Filled',
    badge: '1 Spot Left',
  },
  {
    id: 'rb-6',
    title: 'Zumba Morning Energizer',
    styleName: 'Zumba Fitness',
    category: 'Cardio Fitness',
    instructor: 'Shubham Mondal',
    instructorRole: 'Licensed Zumba Zin Instructor',
    days: 'Mon, Wed, Fri',
    time: '8:00 AM – 9:00 AM',
    branchId: 'new-town',
    branchName: 'New Town Arena',
    feeMonthly: 2200,
    feeQuarterly: 5900,
    level: 'All Levels',
    frequency: '3 Sessions / Week',
    enrolledRatio: '24 / 30 Filled',
  },
  {
    id: 'rb-7',
    title: 'Kids Junior Movers (Ages 4-8)',
    styleName: 'Kids Movement',
    category: 'Kids Special',
    instructor: 'Palak Bose',
    instructorRole: 'Early Movement Specialist',
    days: 'Sat & Sun',
    time: '10:00 AM – 11:00 AM',
    branchId: 'new-town',
    branchName: 'New Town Arena',
    feeMonthly: 2300,
    feeQuarterly: 6200,
    level: 'Kids Beginner',
    frequency: '2 Sessions / Week',
    enrolledRatio: '16 / 18 Filled',
    badge: 'Weekend Special',
  },
  {
    id: 'rb-8',
    title: 'Chess Grandmaster Tactics Academy',
    styleName: 'Chess & Mind Strategy',
    category: 'Activity Centre',
    instructor: 'Coach Debabrata',
    instructorRole: 'FIDE Rated Senior Trainer',
    days: 'Tue & Sat',
    time: '4:30 PM – 6:00 PM',
    branchId: 'salt-lake',
    branchName: 'Salt Lake Central',
    feeMonthly: 2600,
    feeQuarterly: 7000,
    level: 'All Levels',
    frequency: '2 Sessions / Week',
    enrolledRatio: '11 / 14 Filled',
    badge: 'Exclusive',
  },
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'cp-1',
    author: 'Riya Mukherjee',
    avatarSeed: 'riya',
    tag: 'Hip-Hop',
    branch: 'Salt Lake',
    timeAgo: '2 hours ago',
    title: 'Tips for complete beginners starting Hip-Hop grooves?',
    content: 'Just enrolled in the Wednesday beginner batch with Rohan Sir! Any advice on shoes or knee support for someone with zero dance experience? The vibe in the studio is so supportive!',
    likes: 28,
    replies: 9,
  },
  {
    id: 'cp-2',
    author: 'Arjun Sen',
    avatarSeed: 'arjun',
    tag: 'Workshops',
    branch: 'Park Street',
    timeAgo: '1 day ago',
    title: 'That Harsh Kumar masterclass was surreal 🔥',
    content: 'The speed choreo breakdown was top tier. The musicality in the second half blew everyone’s mind. Can’t wait for the next visiting artist session at Mad Movers!',
    likes: 54,
    replies: 16,
  },
  {
    id: 'cp-3',
    author: 'Sneha Paul',
    avatarSeed: 'sneha',
    tag: 'Contemporary',
    branch: 'Park Street',
    timeAgo: '2 days ago',
    title: 'Best socks vs bare feet for contemporary floorwork?',
    content: 'Prerna ma’am recommended spin socks for smooth gliding without sticky floor friction. Any specific brand or studio store recommendation in Kolkata?',
    likes: 19,
    replies: 6,
  },
  {
    id: 'cp-4',
    author: 'Priya Nambiar',
    avatarSeed: 'priya',
    tag: 'Fitness & Yoga',
    branch: 'New Town',
    timeAgo: '3 days ago',
    title: 'Morning Zumba batch transformed my mental stamina!',
    content: 'Started 2 months ago to burn calories, now it is my favorite part of the week. Down 4 kgs and full of energy every single day! Shoutout to Shubham Sir!',
    likes: 42,
    replies: 11,
  },
];
