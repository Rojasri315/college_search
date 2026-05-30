import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const colleges = [
  {
    name: "IIT Bombay",
    location: "Mumbai",
    state: "Maharashtra",
    fees: 200000,
    rating: 4.8,
    type: "Engineering",
    description: "India's premier engineering institution known for world-class research and industry connections.",
    courses: ["B.Tech CSE", "B.Tech EE", "B.Tech ME", "M.Tech", "PhD"],
    avgPackage: 2100000,
    topRecruiter: ["Google", "Microsoft", "Goldman Sachs", "McKinsey"],
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
  },
  {
    name: "IIT Delhi",
    location: "New Delhi",
    state: "Delhi",
    fees: 200000,
    rating: 4.7,
    type: "Engineering",
    description: "Top-ranked engineering college with strong placement record and research programs.",
    courses: ["B.Tech CSE", "B.Tech Civil", "B.Tech Chemical", "MBA", "PhD"],
    avgPackage: 1900000,
    topRecruiter: ["Amazon", "Adobe", "Flipkart", "Deloitte"],
    imageUrl: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800"
  },
  {
    name: "BITS Pilani",
    location: "Pilani",
    state: "Rajasthan",
    fees: 450000,
    rating: 4.5,
    type: "Engineering",
    description: "Autonomous institute famous for its Practice School program and alumni network.",
    courses: ["B.Tech CSE", "B.Tech ECE", "B.Pharma", "MSc Mathematics"],
    avgPackage: 1600000,
    topRecruiter: ["Uber", "Zomato", "PhonePe", "Qualcomm"],
    imageUrl: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800"
  },
  {
    name: "NIT Trichy",
    location: "Tiruchirappalli",
    state: "Tamil Nadu",
    fees: 150000,
    rating: 4.4,
    type: "Engineering",
    description: "One of the best NITs with excellent infrastructure and placement cell.",
    courses: ["B.Tech CSE", "B.Tech ECE", "B.Tech Mechanical", "MBA"],
    avgPackage: 1200000,
    topRecruiter: ["TCS", "Infosys", "Wipro", "Samsung"],
    imageUrl: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800"
  },
  {
    name: "VIT Vellore",
    location: "Vellore",
    state: "Tamil Nadu",
    fees: 380000,
    rating: 4.1,
    type: "Engineering",
    description: "Private university with strong industry partnerships and international collaborations.",
    courses: ["B.Tech CSE", "B.Tech AI&ML", "B.Tech Biotech", "MBA"],
    avgPackage: 900000,
    topRecruiter: ["Capgemini", "Cognizant", "L&T", "HCL"],
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800"
  },
  {
    name: "AIIMS Delhi",
    location: "New Delhi",
    state: "Delhi",
    fees: 5000,
    rating: 4.9,
    type: "Medical",
    description: "India's top medical institution with cutting-edge research and clinical training.",
    courses: ["MBBS", "MD", "MS", "B.Sc Nursing", "PhD"],
    avgPackage: 1800000,
    topRecruiter: ["Apollo Hospitals", "Fortis", "Max Healthcare", "WHO"],
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800"
  },
  {
    name: "IIM Ahmedabad",
    location: "Ahmedabad",
    state: "Gujarat",
    fees: 2500000,
    rating: 4.9,
    type: "Commerce",
    description: "India's top business school with a legendary alumni network and case-based learning.",
    courses: ["MBA", "PGPX", "PhD", "FPM"],
    avgPackage: 3500000,
    topRecruiter: ["BCG", "Bain", "McKinsey", "Goldman Sachs"],
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800"
  },
  {
    name: "Delhi University",
    location: "New Delhi",
    state: "Delhi",
    fees: 20000,
    rating: 4.2,
    type: "Arts",
    description: "One of India's largest universities offering diverse undergraduate programs.",
    courses: ["B.A. Economics", "B.Com", "B.Sc Mathematics", "LLB", "MA"],
    avgPackage: 600000,
    topRecruiter: ["Deloitte", "PwC", "KPMG", "EY"],
    imageUrl: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800"
  },
  {
    name: "SRM Institute of Technology",
    location: "Chennai",
    state: "Tamil Nadu",
    fees: 350000,
    rating: 3.9,
    type: "Engineering",
    description: "Large private university with multiple campuses and diverse programs.",
    courses: ["B.Tech CSE", "B.Tech ECE", "MBA", "BCA"],
    avgPackage: 750000,
    topRecruiter: ["TCS", "Infosys", "Wipro", "Accenture"],
    imageUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
  },
  {
    name: "Jadavpur University",
    location: "Kolkata",
    state: "West Bengal",
    fees: 30000,
    rating: 4.3,
    type: "Engineering",
    description: "Premier state university known for engineering and arts programs.",
    courses: ["B.Tech CSE", "B.Tech EE", "B.A. Bengali", "M.Tech"],
    avgPackage: 1000000,
    topRecruiter: ["TCS", "Wipro", "Cognizant", "Mindtree"],
    imageUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800"
  },
  {
    name: "IIT Madras",
    location: "Chennai",
    state: "Tamil Nadu",
    fees: 200000,
    rating: 4.8,
    type: "Engineering",
    description: "Consistently ranked #1 in NIRF, known for research output and startups.",
    courses: ["B.Tech CSE", "B.Tech Aerospace", "M.Tech", "MBA", "PhD"],
    avgPackage: 2000000,
    topRecruiter: ["Google", "Apple", "DE Shaw", "Nvidia"],
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800"
  },
  {
    name: "Manipal Institute of Technology",
    location: "Manipal",
    state: "Karnataka",
    fees: 420000,
    rating: 4.0,
    type: "Engineering",
    description: "Top private engineering college with strong global alumni network.",
    courses: ["B.Tech CSE", "B.Tech Mechatronics", "MBA", "B.Arch"],
    avgPackage: 850000,
    topRecruiter: ["Infosys", "Wipro", "Oracle", "SAP"],
    imageUrl: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800"
  },
]

async function main() {
  console.log('Seeding database...')
  await prisma.college.deleteMany()
  for (const college of colleges) {
    await prisma.college.create({ data: college })
  }
  console.log(`Seeded ${colleges.length} colleges ✅`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())