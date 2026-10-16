export interface Division {
  id: string;
  name: string;
  category: "11v11" | "7v7" | "Cup";
  ageGroup: string;
  matchDuration: string;
  slideTackling: string;
  referees: string;
  rosterLimit: number;
  description: string;
  featured?: boolean;
}

export interface FieldLocation {
  id: string;
  name: string;
  shortName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  fields: string[];
  surface: "Natural Grass" | "Turf" | "Mixed";
  mapUrl: string;
  notes?: string;
}

export interface RuleCategory {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  details: string[];
  alert?: string;
}

export const REGISTRATION_URL =
  "https://app.playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS0zNDEyLTE3OTM2NTI3ODN8dW1TeVRVQ1AyS0V3b3lwRUJha3NrTTU0Z25xQXBkWHFWZUxGL00wS1VLRT0=&program_id=120535";

export const PLAYMETRICS_GUIDE_URL =
  "https://help.playmetrics.com/hc/en-us/articles/14766731316503-How-to-Register-for-a-League-as-a-Player-on-a-Team-or-Free-Agent-Beta";

export const RULES_DOC_URL =
  "https://docs.google.com/document/d/e/2PACX-1vSEnHX4eWl50Ehhw_Zyiu_A5wAe-siHPfDqPJNXl4X9qOaa3B_m4CFk4q6bdciUSvRMU_ZrkJWDb14n/pub";

export const DIVISIONS: Division[] = [
  {
    id: "open",
    name: "Open League",
    category: "11v11",
    ageGroup: "18+ (All Adults)",
    matchDuration: "90 min (2 x 45 min)",
    slideTackling: "Permitted (Fair & safe challenges)",
    referees: "3 USSF Certified Referees",
    rosterLimit: 25,
    description: "Our premier competitive division for top-tier adult soccer players across Middle Tennessee.",
    featured: true,
  },
  {
    id: "o30-d1",
    name: "Over 30 - Division 1",
    category: "11v11",
    ageGroup: "Ages 30 and older",
    matchDuration: "90 min (2 x 45 min)",
    slideTackling: "Captains' pre-game mutual agreement only",
    referees: "3 USSF Certified Referees",
    rosterLimit: 25,
    description: "Highly competitive play for seasoned adult players with strong tactical and technical abilities.",
  },
  {
    id: "o30-d2",
    name: "Over 30 - Division 2",
    category: "11v11",
    ageGroup: "Ages 30 and older",
    matchDuration: "90 min (2 x 45 min)",
    slideTackling: "Not permitted (Results in indirect free kick)",
    referees: "3 USSF Certified Referees",
    rosterLimit: 25,
    description: "Competitive yet balanced play focused on camaraderie, fitness, and clean soccer.",
  },
  {
    id: "o40",
    name: "Over 40 League",
    category: "11v11",
    ageGroup: "Ages 40 and older",
    matchDuration: "90 min (2 x 45 min)",
    slideTackling: "Not permitted (Zero slide tackle policy)",
    referees: "3 USSF Certified Referees",
    rosterLimit: 25,
    description: "Dedicated league for veteran soccer athletes looking for quality soccer with safety-first standards.",
    featured: true,
  },
  {
    id: "o50",
    name: "Over 50 League",
    category: "11v11",
    ageGroup: "Ages 50 and older",
    matchDuration: "90 min (2 x 45 min)",
    slideTackling: "Not permitted (Safety prioritized)",
    referees: "3 USSF Certified Referees",
    rosterLimit: 25,
    description: "Thriving veteran division celebrating lifelong passion for the beautiful game.",
  },
  {
    id: "7v7",
    name: "7v7 Small Sided",
    category: "7v7",
    ageGroup: "Open & Age-restricted divisions",
    matchDuration: "60 min (2 x 30 min)",
    slideTackling: "Not permitted",
    referees: "1 USSF Certified Referee",
    rosterLimit: 20,
    description: "Fast-paced, high-scoring small-sided format with kick-ins, no offside, and rolling substitutions.",
  },
  {
    id: "tournaments",
    name: "Athens of the South & Music City Cups",
    category: "Cup",
    ageGroup: "All MTSA Divisions",
    matchDuration: "50-60 min tournament formats",
    slideTackling: "Varies by division regulations",
    referees: "USSF Certified Referees",
    rosterLimit: 20,
    description: "Annual Nashville showcase tournaments bringing together clubs from across Tennessee and the Southeast.",
  },
];

export const LOCATIONS: FieldLocation[] = [
  {
    id: "harpeth",
    name: "Harpeth Soccer Complex",
    shortName: "Harpeth Complex",
    address: "7820 Coley Davis Rd",
    city: "Nashville",
    state: "TN",
    zip: "37221",
    fields: ["Field 9", "Field 10"],
    surface: "Natural Grass",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Harpeth+Soccer+Complex+7820+Coley+Davis+Rd+Nashville+TN+37221",
    notes: "Bellevue area. Ample parking near the upper pavilion. Please obey park speed limits.",
  },
  {
    id: "ezell",
    name: "Ezell Park",
    shortName: "Ezell Park",
    address: "5135 Harding Pl",
    city: "Nashville",
    state: "TN",
    zip: "37211",
    fields: ["Field 1", "Field 2", "Field 3A", "Field 3B", "Field 4A", "Field 4B"],
    surface: "Natural Grass",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ezell+Park+5135+Harding+Pl+Nashville+TN+37211",
    notes: "South Nashville near Antioch. Multiple full 11v11 and split 7v7 configurations.",
  },
  {
    id: "trinity",
    name: "Trinity Park",
    shortName: "Trinity Park",
    address: "3680 N Mt Juliet Rd",
    city: "Mount Juliet",
    state: "TN",
    zip: "37122",
    fields: ["Field 1 (11v11)", "Field 2 (11v11)", "Field 1-4 (7v7)"],
    surface: "Natural Grass",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Trinity+Park+Mount+Juliet+TN+37122",
    notes: "Full size pitches and specialized small sided grid for 7v7 matches.",
  },
  {
    id: "bethesda",
    name: "Bethesda Soccer Complex",
    shortName: "Bethesda Complex",
    address: "4722 Bethesda Duplex Rd",
    city: "Thompson's Station",
    state: "TN",
    zip: "37179",
    fields: ["Field 1", "Field 2", "Field 3A", "Field 3B", "Field 4A", "Field 4B"],
    surface: "Natural Grass",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bethesda+Soccer+Complex+4722+Bethesda+Duplex+Rd+Thompson's+Station+TN+37179",
    notes: "Williamson County complex featuring premier turf quality grass pitches.",
  },
  {
    id: "cumberland",
    name: "Cumberland University",
    shortName: "Cumberland Univ.",
    address: "1 Cumberland Square",
    city: "Lebanon",
    state: "TN",
    zip: "37087",
    fields: ["Field 1 (Varsity Stadium)"],
    surface: "Turf",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Cumberland+University+1+Cumberland+Square+Lebanon+TN+37087",
    notes: "Collegiate match facility in Wilson County.",
  },
  {
    id: "fellowship",
    name: "Fellowship Bible Church Fields",
    shortName: "Fellowship Bible",
    address: "1210 Franklin Rd",
    city: "Brentwood",
    state: "TN",
    zip: "37027",
    fields: ["Field 1", "Field 2", "Field 3", "7v7 Fields 1-4"],
    surface: "Natural Grass",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Fellowship+Bible+Church+1210+Franklin+Rd+Brentwood+TN+37027",
    notes: "Convenient Brentwood location just off I-65. Please park only in designated visitor spaces.",
  },
];

export const RULES_HIGHLIGHTS: RuleCategory[] = [
  {
    id: "rosters",
    title: "Rosters & Check-In",
    iconName: "Users",
    summary: "Registration, photo rosters, and pre-match referee check-in requirements.",
    details: [
      "All players must be officially registered through PlayMetrics with Tennessee Soccer (TNSoccer / MTSA).",
      "Maximum roster size is 25 players for 11v11 divisions, and 20 players for 7v7 divisions.",
      "Each team captain must present the official printed TSSA photo roster to the match referees prior to kickoff.",
      "Players must be verified by the referee team via photo check-in before entering the field.",
      "A player cannot be rostered on more than one team in the same division.",
      "Roster transfers within the same division are frozen after the second week of regular season play.",
    ],
  },
  {
    id: "sliding",
    title: "Slide Tackling by Division",
    iconName: "ShieldAlert",
    summary: "Clear rules governing slide tackles across Open, Over 30, Over 40, and Over 50.",
    details: [
      "Open League: Slide tackling is permitted for fair, safe challenges on the ball.",
      "Over 30 Division 1: Slide tackling is only allowed if BOTH team captains agree at the pre-game meeting with the referee. If not agreed, sliding is strictly prohibited.",
      "Over 30 Division 2, Over 40, and Over 50: Slide tackling is NOT permitted under any circumstances.",
      "A slide tackle in a no-sliding division results in an immediate Indirect Free Kick for the opposing team.",
      "7v7 Divisions: Slide tackling is strictly prohibited at all times.",
    ],
    alert: "Safety is our league's #1 commitment. Reckless or malicious sliding will be treated with zero tolerance by referees and the disciplinary committee.",
  },
  {
    id: "timing",
    title: "Match Timing & Substitutions",
    iconName: "Clock",
    summary: "Standard 90-minute matches with rolling substitution protocols.",
    details: [
      "11v11 Matches: 90 minutes total (two 45-minute halves with a 5-10 minute halftime interval).",
      "7v7 Matches: 60 minutes total (two 30-minute halves).",
      "Unlimited substitutions are permitted during: own throw-ins, goal kicks, halftime, injury stoppages, and following any goal.",
      "Substitutes must be waiting in the technical area (10 yards on either side of midfield) prior to the stoppage.",
      "Grace Period: Teams have a 10-minute grace period from the scheduled kickoff to field the minimum required players (7 for 11v11, 5 for 7v7).",
    ],
  },
  {
    id: "discipline",
    title: "Discipline, Cards & Points",
    iconName: "AlertTriangle",
    summary: "Transparent disciplinary points system tracking cards across the season.",
    details: [
      "Yellow Card = 1 Disciplinary Point.",
      "Red Card = 2 Disciplinary Points.",
      "Red Card consequence: Immediate send-off for the remainder of the match with no replacement, plus minimum 1-match suspension for the team's next scheduled match.",
      "Accumulation: Accumulating 5 points results in an automatic 1-match suspension.",
      "After reaching 5 points, a suspension is triggered for every additional 3 points accumulated.",
      "Suspensions carry over from regular season to playoffs and into following seasons.",
    ],
  },
  {
    id: "standings",
    title: "Standings, Tie-Breakers & Promotion",
    iconName: "Trophy",
    summary: "Standard point systems, goal differential limits, and seasonal promotion/relegation.",
    details: [
      "Match Points: Win = 3 points | Draw = 1 point | Loss = 0 points.",
      "Tie-Breakers: Points → Head-to-Head → Head-to-Head Goal Diff (Max +/- 3/match) → Total Goal Diff (Max +/- 3) → Goals Allowed → Shutouts → Coin Toss.",
      "Promotion & Relegation: Division winners are eligible for promotion to the next tier. Teams finishing last are relegated.",
      "Consecutive Division Winners: Teams that win their division for two consecutive seasons are required to be promoted.",
    ],
  },
];

export const REGISTRATION_STEPS = [
  {
    id: "existing-team",
    title: "Player on an Existing Team",
    subtitle: "You have a captain and a squad already in the league",
    badge: "Most Common",
    steps: [
      {
        step: 1,
        title: "Get Team Name & Captain Details",
        description: "Ask your team captain for the exact team name and the specific age division (e.g., Open, O30 D1, O40).",
      },
      {
        step: 2,
        title: "Open PlayMetrics Registration",
        description: "Click our official PlayMetrics MTSA registration link to create or log in to your free account.",
      },
      {
        step: 3,
        title: "Select Your League Program",
        description: "Choose Middle Tennessee Soccer Alliance (MTSA) adult soccer program and select your division.",
      },
      {
        step: 4,
        title: "Assign to Your Team & Complete Waiver",
        description: "Enter your team captain's name or team title, electronically sign the TNSoccer waiver, and complete payment.",
      },
    ],
  },
  {
    id: "free-agent",
    title: "Free Agent (Looking for a Team)",
    subtitle: "New to Nashville or seeking a new squad to play with",
    badge: "Players Welcome",
    steps: [
      {
        step: 1,
        title: "Register as a Free Agent",
        description: "Access the MTSA PlayMetrics registration link and select 'Free Agent' under your desired age division.",
      },
      {
        step: 2,
        title: "Specify Your Positions & Experience",
        description: "Fill out your soccer background, preferred field positions, and availability in the player profile.",
      },
      {
        step: 3,
        title: "MTSA / TNSoccer Placement",
        description: "Our league commissioners connect free agents with existing teams needing players or form new squads.",
      },
      {
        step: 4,
        title: "Receive Team Invitation",
        description: "Once assigned, your captain will reach out via PlayMetrics with schedule and jersey details.",
      },
    ],
  },
  {
    id: "captain",
    title: "Team Captain / Manager",
    subtitle: "Registering or organizing a full team roster",
    badge: "Team Leaders",
    steps: [
      {
        step: 1,
        title: "Register Your Team Entry",
        description: "Log in to PlayMetrics to register your club/team name for the upcoming season in your preferred division.",
      },
      {
        step: 2,
        title: "Distribute Invite Link to Players",
        description: "Share the PlayMetrics team invite code directly with your players via email, text, or group chat.",
      },
      {
        step: 3,
        title: "Monitor Roster Check-ins",
        description: "Track player registrations and photo uploads in your PlayMetrics Captain dashboard to ensure 25-player limits.",
      },
      {
        step: 4,
        title: "Print Official Matchday Roster",
        description: "Download and print your official TSSA photo roster before every match to present to the referee crew.",
      },
    ],
  },
];
