const SCHEMES = [
  {
    name: "Government of India Post-Matric Scholarship (SC)",
    categories: ["sc"],
    incomeMax: 250000,
    education: ["12","diploma","degree","pg"],
    reason: "SC student from Maharashtra with income up to ₹2.5 lakh eligible for post-matric scholarship",
    documents: ["Caste Certificate","Income Certificate","Bonafide","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    name: "Post-Matric Scholarship to OBC Students",
    categories: ["obc"],
    incomeMax: 250000,
    education: ["12","diploma","degree","pg"],
    reason: "OBC student with income up to ₹2.5 lakh eligible for post-matric scholarship", 
    documents: ["Caste Certificate","Income Certificate","Bonafide","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    name: "Post-Matric Scholarship to VJNT Students",
    categories: ["vjnt"],
    incomeMax: 250000,
    education: ["12","diploma","degree","pg"],
    reason: "VJNT student with income up to ₹2.5 lakh eligible for post-matric scholarship",
    documents: ["Caste Certificate","Income Certificate","Bonafide","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    name: "Post-Matric Scholarship for Persons with Disability",
    categories: ["open"],
    incomeMax: 250000,
    education: ["12","diploma","degree","pg"],
    reason: "Student with disability and income criteria may be eligible for post-matric scholarship",
    documents: ["Disability Certificate","Income Certificate","Bonafide","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    name: "Post-Matric Scholarship for SBC Students",
    categories: ["sbc"],
    incomeMax: 250000,
    education: ["12","diploma","degree","pg"],
    reason: "SBC student with income up to ₹2.5 lakh eligible for post-matric scholarship",
    documents: ["Caste Certificate","Income Certificate","Bonafide","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    name: "Post-Matric Tuition Fee & Exam Fee (Freeship)",
    categories: ["open","sc","st","obc","vjnt","sbc","minority"],
    incomeMax: 250000,
    education: ["12","diploma","degree"],
    reason: "Students from Maharashtra with family income under limits get freeship of tuition & exam fees",
    documents: ["Income Certificate","Bonafide","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    name: "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship",
    categories: ["open","sc","st","obc","vjnt","sbc"],
    incomeMax: 800000,
    education: ["12"],
    reason: "Merit scholarship for students (Class 11-12) with minimum marks criteria",
    documents: ["Marksheet","Bonafide","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    name: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk Shishyavrutti Yojna",
    categories: ["open","obc","vjnt","sbc"],
    incomeMax: 800000,
    education: ["diploma","degree","pg"],
    reason: "Fee reimbursement for students with eligible family income up to ₹8 lakh",
    documents: ["Income Certificate","Admission Receipt","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    name: "State Government Open Merit Scholarship",
    categories: ["open"],
    incomeMax: 800000,
    education: ["12","diploma","degree"],
    reason: "Merit scholarship for students in Maharashtra securing required grades",
    documents: ["Marksheet","Income Certificate","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    name: "DTE Dr Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna",
    categories: ["open","sc","st","obc","vjnt","sbc"],
    incomeMax: 800000,
    education: ["12","diploma","degree","pg"],
    reason: "Hostel maintenance allowance for eligible students",
    documents: ["Bonafide Certificate","Income Certificate","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    name: "Maintenance Allowance for SC students in Professional Courses",
    categories: ["sc"],
    incomeMax: 250000,
    education: ["degree","pg"],
    reason: "SC students in professional courses with income under limit get maintenance allowance",
    documents: ["Caste Certificate","Income Certificate","Hostel Certificate"],
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    name: "Maintenance Allowance to VJNT and SBC students in Professional Courses",
    categories: ["vjnt","sbc"],
    incomeMax: 100000,
    education: ["degree","pg"],
    reason: "VJNT/SBC students with income under ₹1 lakh get maintenance allowance in professional courses",
    documents: ["Caste Certificate","Income Certificate","Hostel Certificate"],
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    name: "Education Concession to Children of Freedom Fighters",
    categories: ["open"],
    incomeMax: 800000,
    education: ["12","diploma","degree","pg"],
    reason: "Concession for children of freedom fighters subject to eligibility rules",
    documents: ["Freedom Fighter Certificate","Bonafide","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    name: "Eklavya Scholarship",
    categories: ["open","sc","st","obc","vjnt","sbc"],
    incomeMax: 800000,
    education: ["12","diploma","degree","pg"],
    reason: "Scholarship for eligible students across categories under Eklavya scheme",
    documents: ["Income Certificate","Bonafide","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in/"
  }
];
