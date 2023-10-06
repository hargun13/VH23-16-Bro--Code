import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Education = () => {
  return (
    <div className='h-full w-full'>
        <p className='text-center px-8 py-5 text-3xl tracking-widest mt-3'>Explore Scholarship Educational Content and Laws</p>

        <div className='flex items-center justify-around w-full mt-6'>

          <div className=" group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl shadow-2xl">
            <div className="w-[500px] h-[400px]">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="blog" />
            </div>

            {/* on hover color */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

            {/* on hover text */}
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-3xl font-bold text-white">Scholarship/Education Blogs</h1>

              <p className="my-6 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Explore our comprehensive collection of blogs on scholarships and education. Stay informed about the latest scholarship opportunities, application tips, and educational resources. Stay connected with us for regular updates on scholarships, educational trends, and opportunities that can shape your future.</p>

              <Link to="/blog"><Button variant="contained">Explore</Button></Link>
            </div>

          </div>

          <div className=" group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl shadow-2xl">
            <div className="w-[500px] h-[400px]">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="blog" />
            </div>

            {/* on hover color */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

            {/* on hover text */}
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-3xl font-bold text-white">Scholarship/Educational Videos</h1>

              <p className="my-6 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Welcome to our Videos Page, your gateway to a treasure trove of educational content and scholarship insights in video format. Here, you'll find a curated collection of informative and engaging videos that cover a wide range of topics related to scholarships and education.</p>

              <Link to="/edvideo"><Button variant="contained">Explore</Button></Link>
            </div>

          </div>

        </div>


        {/* Law accordion */}
        <div className='px-20 py-5 mb-10'>
          <p className='text-center px-8 py-5 text-3xl tracking-widest shadow-2xl my-3'>FAQs Regarding Scholarships</p>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>1. Can I apply for a scholarship before being accepted into a university?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               - Yes, many scholarships allow you to apply before university admission. Check specific scholarship requirements.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>2. How do I know if I am eligible to apply for scholarships?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               - Eligibility criteria vary by scholarship. Common factors include academic performance, financial need, and sometimes, nationality.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>3. What types of scholarships are available for Indian students studying abroad?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               - Indian students can apply for merit-based, need-based, government, and university-specific scholarships when studying abroad.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>4. Where can I find information about scholarships for studying abroad?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               - You can explore scholarships on university websites, scholarship portals, and educational consulting platforms.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>5. Can I work while studying abroad?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               - Many countries allow international students to work part-time during their studies. Check the specific rules of your destination.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>6. What are the different types of scholarships available for international students?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               - Scholarships can be merit-based, need-based, for academic or athletic excellence, and more.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>7. How can I apply for scholarships to study abroad?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               - The application process varies, but generally, you need to submit required documents, essays, and meet deadlines.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>8. Is there financial aid available to study abroad in addition to scholarships?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               - Yes, financial aid options include fellowships, sponsorships, grants, and bursaries.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>9. What are the common documents required for scholarship applications?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               - Documents often include academic transcripts, recommendation letters, a personal statement, and proof of financial need.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>10. Are there scholarships available for postgraduate and doctoral studies abroad?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               - Yes, scholarships for higher education abroad are available at various levels of study.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>


    </div>
  )
}

export default Education