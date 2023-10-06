const link1 =
  "https://img.freepik.com/free-vector/books-with-money-loans-scholarships_603843-826.jpg";
const link2 =
  "https://www.ssims.edu.in/wp-content/uploads/2020/03/ssit-students-scholarship-loans.jpg";
const link3 =
  "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/06/types-of-scholarship-for-students.jpg";

const link4 =
  "https://cdn.siasat.com/wp-content/uploads/2021/11/photo_2021-11-16_16-10-08.jpg";
const link5 =
  "https://t4.ftcdn.net/jpg/01/96/87/57/360_F_196875700_4rLgO7QPC1lmtTny5VOceDY80DJasArn.jpg";
const link6 =
  "https://aisee.co.in/scholarship/wp-content/uploads/2019/07/Shri-Bipin-Bihari-Verma-Memorial-Scholarship.jpg";

const scholarshipData = [
  {
    "": 0,
    title: "Schaefer Halleen’s Social Equity Scholarship",
    logo: "https://img.freepik.com/free-vector/books-with-money-loans-scholarships_603843-826.jpg",
    degrees: "Master, Bachelor, Phd",
    funds: "$1000",
    date: "30 June 2022",
    location: "united-states",
    link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    applied: true,
  },
  {
    "": 1,
    title: "President’s Scholarship for Ukraine",
    logo: "https://www.ssims.edu.in/wp-content/uploads/2020/03/ssit-students-scholarship-loans.jpg",
    degrees: "Master, Bachelor, Phd, Course",
    funds: "$2500",
    date: "31 July 2022",
    location: "united-states",
    link: "https://kpi.ua/en/15-11-05",
    applied: false,
  },
  {
    "": 2,
    title: "International Students Diversity Contest 2022-2023",
    logo: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/06/types-of-scholarship-for-students.jpg",
    degrees: "Master, Bachelor, Phd, Course",
    funds: "Up to $2,000",
    date: "22 December 2022",
    location: "united-states",
    link: "https://fatherprada.com/ongoing-scholarship/international-student-support-contest-2022-2023/",
    applied: false,
  },
  {
    "": 3,
    title: "Master in Business Administration 80% OFF your Tuition fee",
    logo: "https://windsoruniversity.us/wp-content/uploads/2021/08/logo-1.png",
    degrees: "Master",
    funds: "80% Tuition Fees",
    date: "15 September 2022",
    location: "united-states",
    link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    applied: false,
  },
  {
    "": 4,
    title: "Improve Men’s Health Scholarship",
    logo: "https://www.oakwoodhealth.com/wp-content/themes/ohn/assets/img/logo.png",
    degrees: "Master, Bachelor, Phd",
    funds: "$2000",
    date: "31 May 2022",
    location: "united-states",
    link: "https://www.oakwoodhealth.com/improve-mens-health-scholarship/",
    applied: false,
  },
  {
    "": 5,
    title:
      "3 Month F1 Visa Study English in USA Scholarship with Windsor University",
    logo: "https://newstuck.com/wp-content/uploads/2023/05/NewsTuck-retina-logo.png",
    degrees: "Course",
    funds: "$1455",
    date: "1 July 2022",
    location: "united-states",
    link: "https://newstuck.com/3-month-f1-study-english-in-u-s-visa-scholarship-windsor/",
    applied: false,
  },
  {
    "": 6,
    title: "ArtUniverse",
    logo: "https://www.artuniverse.org/wp-content/uploads/2021/12/LOGO.jpeg",
    degrees: "Master, Course",
    funds: "Full or partial scholarship",
    date: "30 December 2022",
    location: "united-states",
    link: "https://www.artuniverse.org/",
    applied: true,
  },
  {
    "": 7,
    title: "American Indian Scholarships at Augsburg University",
    logo: "https://t4.ftcdn.net/jpg/01/96/87/57/360_F_196875700_4rLgO7QPC1lmtTny5VOceDY80DJasArn.jpg",
    degrees: "Bachelor",
    funds: "Partial tuition fees",
    date: "1 December 2022",
    location: "united-states",
    link: "https://www.augsburg.edu/multicultural-life/scholarships/#:~:text=Augsburg's%20American%20Indian%20Recognition%20Full,students%20starting%20in%20Fall%202022.",
    applied: false,
  },
  {
    "": 8,
    title: "International Contest for Students Support 2022-2023",
    logo: "https://www.opportunitiescircle.com/wp-content/uploads/2019/04/cropped-logo-icon-1.png",
    degrees: "Master, Bachelor, Course",
    funds: "Up to $2,000 awards",
    date: "28 April 2023",
    location: "united-states",
    link: "https://www.opportunitiescircle.com/blog/top-competitions-for-international-students-youth/",
    applied: false,
  },
  {
    "": 9,
    title: "Scholarships for Africa",
    logo: "https://www.ssims.edu.in/wp-content/uploads/2020/03/ssit-students-scholarship-loans.jpg",
    degrees: "Master, Bachelor, Phd, Course",
    funds: "$100 to $3000",
    date: "24 March 2027",
    location: "united-states",
    link: "https://www.scholars4dev.com/",
    applied: false,
  },
  {
    "": 10,
    title: "LAPTOP Scholarships - study Supply Chains",
    logo: "https://www.ssims.edu.in/wp-content/uploads/2020/03/ssit-students-scholarship-loans.jpg",
    degrees: "Master, Bachelor, Phd, Course",
    funds: "up to $3000",
    date: "6 May 2022",
    location: "united-states",
    link: "https://www.rhsupplies.org/activities-resources/laptop/scholarships/",
    applied: false,
  },
  {
    "": 11,
    title:
      "Medicine: Fully Funded Swansea & HMRI PhD Scholarship: Ovarian Cancer Chemoresistance",
    logo: "https://www.ssims.edu.in/wp-content/uploads/2020/03/ssit-students-scholarship-loans.jpg",
    degrees: "Phd",
    funds: "Full cost of tuition fees and an annual stipend",
    date: "6 May 2022",
    location: "united-states",
    link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    applied: false,
  },
  {
    "": 12,
    title: "New York University - September 11 Scholarships",
    logo: "https://img.freepik.com/free-vector/books-with-money-loans-scholarships_603843-826.jpg",
    degrees: "Master, Bachelor, Phd, Course",
    funds: "Pay any remaining balance.",
    date: "30 June 2023",
    location: "united-states",
    link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    applied: true,
  },
  {
    "": 13,
    title: "TKS Full-Ride Scholarship",
    logo: "https://www.ssims.edu.in/wp-content/uploads/2020/03/ssit-students-scholarship-loans.jpg",
    degrees: "Course",
    funds: "100% Tuition Fee [value of $6,000+]",
    date: "31 May 2022",
    location: "united-states",
    link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    applied: false,
  },
  {
    "": 14,
    title: "Five scholarships of up to US$3000 for supply chain courses",
    logo: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/06/types-of-scholarship-for-students.jpg",
    degrees: "Master, Bachelor, Phd, Course",
    funds: "$3000",
    date: "6 May 2022",
    location: "united-states",
    link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    applied: false,
  },
  {
    "": 15,
    title: "GREAT Scholarship for Bangladesh Students in UK",
    logo: "https://cdn.siasat.com/wp-content/uploads/2021/11/photo_2021-11-16_16-10-08.jpg",
    degrees: "Master",
    funds: "£10,000",
    date: "31 May 2022",
    location: "united-kingdom",
    link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    applied: false,
  },
  {
    "": 16,
    title:
      "Diversity Scholarships for Africa and Latin American Students in UK",
    logo: "https://t4.ftcdn.net/jpg/01/96/87/57/360_F_196875700_4rLgO7QPC1lmtTny5VOceDY80DJasArn.jpg",
    degrees: "Master",
    funds: "50% scholarship",
    date: "31 May 2022",
    location: "united-kingdom",
    link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    applied: false,
  },
  {
    "": 17,
    title:
      "Beth Mead Scholarships for International Students at Teesside University",
    logo: "https://www.ssims.edu.in/wp-content/uploads/2020/03/ssit-students-scholarship-loans.jpg",
    degrees: "Bachelor, Master",
    funds: "£1,200",
    date: "31 August 2022",
    location: "united-kingdom",
    link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    applied: false,
  },
  {
    "": 18,
    title: "Malaysia Scholarships at Nottingham Trent University",
    logo: "https://img.freepik.com/free-vector/books-with-money-loans-scholarships_603843-826.jpg",
    degrees: "Master",
    funds: "£4,000",
    date: "29 June 2022",
    location: "united-kingdom",
    link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    applied: false,
  },
  {
    "": 19,
    title:
      "PhD Studentships in Predictive Uncertainty in Computer Vision for International Students in UK",
    logo: "https://t4.ftcdn.net/jpg/01/96/87/57/360_F_196875700_4rLgO7QPC1lmtTny5VOceDY80DJasArn.jpg",
    degrees: "Master",
    funds: "£16,062 p.a., tuition fees + £2,000 research grant",
    date: "10 June 2022",
    location: "united-kingdom",
    link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    applied: false,
  },
  {
    "": 20,
    title: "Strathclyde Business School MRes Scholarships in UK",
    logo: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/06/types-of-scholarship-for-students.jpg",
    degrees: "Master",
    funds: "Tuition fees",
    date: "",
    location: "united-kingdom",
    link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    applied: false,
  },
];

export default scholarshipData;